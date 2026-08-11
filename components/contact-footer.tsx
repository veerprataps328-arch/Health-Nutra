"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { Phone, Mail, MapPin, Share2, AtSign, Globe, Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { BRAND } from "@/lib/products"

export function ContactFooter() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  return (
    <footer id="contact">
      <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Contact Us</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Get In Touch
            </h2>
            <p className="mt-3 text-muted-foreground">
              Have a question about our products or an order? We&apos;d love to hear from you.
            </p>

            <div className="mt-6 space-y-4">
              {BRAND.phones.map((p) => (
                <a key={p} href={`tel:${p}`} className="flex items-center gap-3 text-sm hover:text-primary">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <Phone className="h-5 w-5" />
                  </span>
                  {p}
                </a>
              ))}
              <a href={`mailto:${BRAND.email}`} className="flex items-center gap-3 text-sm hover:text-primary">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Mail className="h-5 w-5" />
                </span>
                {BRAND.email}
              </a>
              <p className="flex items-center gap-3 text-sm text-muted-foreground">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                Serving customers worldwide
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <input
                  required
                  placeholder="Your Name"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
                <input
                  required
                  type="email"
                  placeholder="Your Email"
                  className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <input
                placeholder="Subject"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <textarea
                required
                rows={4}
                placeholder="Your Message"
                className="rounded-lg border border-input bg-background px-3 py-2.5 text-sm outline-none focus:ring-2 focus:ring-ring"
              />
              <Button type="submit" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
                {sent ? "Message Sent — Thank You!" : "Send Message"}
              </Button>
            </div>
          </form>
        </div>
      </section>

      <div className="bg-primary text-primary-foreground">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-12 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-10 w-10 items-center justify-center overflow-hidden rounded-full bg-white">
                <Image
                  src="/health-nutra-logo.png"
                  alt="Health Nutra logo"
                  width={40}
                  height={40}
                  className="h-10 w-10 object-cover"
                />
              </span>
              <span className="text-lg font-bold">
                HEALTH <span className="text-accent">NUTRA</span>
              </span>
            </div>
            <p className="mt-3 text-sm text-primary-foreground/80">{BRAND.tagline}. Established {BRAND.established}.</p>
            <div className="mt-4 flex gap-2">
              {[Share2, AtSign, Globe, Send].map((Icon, i) => (
                <a key={i} href="#" aria-label="social" className="rounded-full bg-white/15 p-2 hover:bg-white/25">
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold">Quick Links</h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              {["Home", "About", "Products", "Research", "Quality", "Contact"].map((l) => (
                <li key={l}>
                  <a href={`#${l.toLowerCase()}`} className="hover:text-accent">{l}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Products</h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              <li>Omega-3 Fatty Acids</li>
              <li>Multivitamin &amp; Multimineral</li>
              <li>Green Tea Extract</li>
              <li>Ginseng Extract</li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold">Contact</h4>
            <ul className="mt-3 space-y-2 text-sm text-primary-foreground/80">
              {BRAND.phones.map((p) => (
                <li key={p}>{p}</li>
              ))}
              <li>{BRAND.email}</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-white/15">
          <p className="mx-auto max-w-7xl px-4 py-4 text-center text-xs text-primary-foreground/70">
            © {new Date().getFullYear()} Health Nutra. All rights reserved. Nourishing Life Naturally.
          </p>
        </div>
      </div>
    </footer>
  )
}
