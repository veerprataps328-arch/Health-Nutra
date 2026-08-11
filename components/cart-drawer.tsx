"use client"

import Image from "next/image"
import { useState } from "react"
import { X, Minus, Plus, Trash2, ShoppingBag, CheckCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"

export function CartDrawer() {
  const { items, isOpen, closeCart, updateQuantity, removeItem, total, clear, count } = useCart()
  const [ordered, setOrdered] = useState(false)

  function checkout() {
    setOrdered(true)
    clear()
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-foreground/40" onClick={closeCart} aria-hidden />
      <aside className="absolute right-0 top-0 flex h-full w-full max-w-md flex-col bg-card shadow-2xl">
        <div className="flex items-center justify-between border-b border-border p-4">
          <h2 className="flex items-center gap-2 font-semibold">
            <ShoppingBag className="h-5 w-5 text-primary" /> Your Cart {count > 0 && `(${count})`}
          </h2>
          <button onClick={closeCart} aria-label="Close cart" className="rounded-full p-1.5 hover:bg-secondary">
            <X className="h-5 w-5" />
          </button>
        </div>

        {ordered ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center">
            <CheckCircle2 className="h-14 w-14 text-primary" />
            <p className="text-lg font-semibold">Order Placed!</p>
            <p className="text-sm text-muted-foreground">
              Thank you for shopping with Health Nutra. A confirmation will be sent to your email.
            </p>
            <Button
              onClick={() => {
                setOrdered(false)
                closeCart()
              }}
              className="mt-2 rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Continue Shopping
            </Button>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-1 flex-col items-center justify-center gap-3 p-8 text-center text-muted-foreground">
            <ShoppingBag className="h-12 w-12 opacity-40" />
            <p>Your cart is empty.</p>
            <Button onClick={closeCart} variant="outline" className="rounded-full">
              Browse Products
            </Button>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto p-4">
              <ul className="space-y-4">
                {items.map((item) => (
                  <li key={item.id} className="flex gap-3 rounded-xl border border-border p-3">
                    <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-secondary/60">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        width={56}
                        height={56}
                        className="h-14 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold leading-tight">{item.name}</p>
                      <p className="text-xs text-muted-foreground">${item.price.toFixed(2)}</p>
                      <div className="mt-2 flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          aria-label="Decrease quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border hover:bg-secondary"
                        >
                          <Minus className="h-3.5 w-3.5" />
                        </button>
                        <span className="w-6 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          aria-label="Increase quantity"
                          className="flex h-7 w-7 items-center justify-center rounded-full border border-border hover:bg-secondary"
                        >
                          <Plus className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-end justify-between">
                      <span className="text-sm font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
                      <button
                        onClick={() => removeItem(item.id)}
                        aria-label="Remove item"
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="border-t border-border p-4">
              <div className="mb-3 flex items-center justify-between text-sm">
                <span className="text-muted-foreground">Subtotal</span>
                <span className="text-lg font-bold">${total.toFixed(2)}</span>
              </div>
              <Button
                onClick={checkout}
                className="w-full rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Checkout
              </Button>
              <p className="mt-2 text-center text-xs text-muted-foreground">Secure checkout · Free shipping over $50</p>
            </div>
          </>
        )}
      </aside>
    </div>
  )
}
