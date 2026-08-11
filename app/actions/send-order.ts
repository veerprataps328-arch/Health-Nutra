"use server"

import { Resend } from "resend"
import { BRAND, formatINR } from "@/lib/products"

export type OrderLine = {
  name: string
  quantity: number
  price: number
}

export type OrderPayload = {
  customerName: string
  customerPhone: string
  customerEmail?: string
  address: string
  notes?: string
  items: OrderLine[]
  total: number
}

export type OrderResult = { ok: true; id: string } | { ok: false; error: string }

export async function sendOrder(payload: OrderPayload): Promise<OrderResult> {
  const { customerName, customerPhone, address, items, total } = payload

  // Basic server-side validation
  if (!customerName?.trim() || !customerPhone?.trim() || !address?.trim()) {
    return { ok: false, error: "Please provide your name, phone number and delivery address." }
  }
  if (!items?.length) {
    return { ok: false, error: "Your cart is empty." }
  }

  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return {
      ok: false,
      error:
        "Email service is not configured yet. Add your RESEND_API_KEY in Project Settings to start receiving orders.",
    }
  }

  // Recompute the total server-side so it can't be tampered with from the client
  const computedTotal = items.reduce((sum, i) => sum + i.price * Math.max(1, Math.floor(i.quantity)), 0)

  const rows = items
    .map(
      (i) =>
        `<tr>
          <td style="padding:8px 12px;border-bottom:1px solid #eee">${i.name}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:center">${i.quantity}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right">${formatINR(i.price)}</td>
          <td style="padding:8px 12px;border-bottom:1px solid #eee;text-align:right">${formatINR(i.price * i.quantity)}</td>
        </tr>`,
    )
    .join("")

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;margin:auto;color:#1f2a24">
      <h2 style="color:#1f7a3d;margin-bottom:4px">New Order — ${BRAND.name}</h2>
      <p style="margin-top:0;color:#666">Received via the website order form.</p>

      <h3 style="margin-bottom:6px">Customer</h3>
      <p style="margin:2px 0"><strong>Name:</strong> ${customerName}</p>
      <p style="margin:2px 0"><strong>Phone:</strong> ${customerPhone}</p>
      ${payload.customerEmail ? `<p style="margin:2px 0"><strong>Email:</strong> ${payload.customerEmail}</p>` : ""}
      <p style="margin:2px 0"><strong>Address:</strong> ${address}</p>
      ${payload.notes ? `<p style="margin:2px 0"><strong>Notes:</strong> ${payload.notes}</p>` : ""}

      <h3 style="margin-bottom:6px;margin-top:20px">Order</h3>
      <table style="width:100%;border-collapse:collapse;font-size:14px">
        <thead>
          <tr style="background:#f4f7f2">
            <th style="padding:8px 12px;text-align:left">Product</th>
            <th style="padding:8px 12px;text-align:center">Qty</th>
            <th style="padding:8px 12px;text-align:right">Price</th>
            <th style="padding:8px 12px;text-align:right">Amount</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
      <p style="text-align:right;font-size:18px;font-weight:bold;margin-top:12px">
        Total: ${formatINR(computedTotal)}
      </p>
    </div>
  `

  const text = [
    `New Order — ${BRAND.name}`,
    ``,
    `Customer: ${customerName}`,
    `Phone: ${customerPhone}`,
    payload.customerEmail ? `Email: ${payload.customerEmail}` : "",
    `Address: ${address}`,
    payload.notes ? `Notes: ${payload.notes}` : "",
    ``,
    `Items:`,
    ...items.map((i) => `- ${i.name} x${i.quantity} = ${formatINR(i.price * i.quantity)}`),
    ``,
    `Total: ${formatINR(computedTotal)}`,
  ]
    .filter(Boolean)
    .join("\n")

  try {
    const resend = new Resend(apiKey)
    const { data, error } = await resend.emails.send({
      from: "Health Nutra Orders <onboarding@resend.dev>",
      to: [BRAND.email],
      replyTo: payload.customerEmail || undefined,
      subject: `New Order from ${customerName} — ${formatINR(computedTotal)}`,
      html,
      text,
    })

    if (error) {
      return { ok: false, error: error.message || "Failed to send the order email." }
    }
    return { ok: true, id: data?.id ?? "sent" }
  } catch (e) {
    const message = e instanceof Error ? e.message : "Unexpected error sending the order."
    return { ok: false, error: message }
  }
}
