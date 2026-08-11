"use client"

import Image from "next/image"
import { useState } from "react"
import { Phone, Mail, ShoppingCart, Menu, X, Share2, Send, AtSign, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useCart } from "@/components/cart-context"
import { BRAND } from "@/lib/products"

const NAV = [
  { label: "HOME", href: "#home" },
  { label: "ABOUT", href: "#about" },
  { label: "PRODUCTS", href: "#products" },
  { label: "RESEARCH", href: "#research" },
  { label: "QUALITY", href: "#quality" },
  { label: "CONTACT", href: "#contact" },
]

export function SiteHeader() {
  const { count, openCart } = useCart()
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header id="home" className="sticky top-0 z-40">
      {/* Top utility bar */}
      <div className="bg-gradient-to-r from-accent via-primary/70 to-primary text-primary-foreground">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-2 px-4 py-2 text-xs sm:text-sm">
          <div className="flex items-center gap-4">
            {BRAND.phones.map((p) => (
              <a key={p} href={`tel:${p}`} className="flex items-center gap-1.5 hover:opacity-80">
                <Phone className="h-3.5 w-3.5" />
                <span>{p}</span>
              </a>
            ))}
          </div>
          <div className="hidden items-center gap-2 sm:flex">
            <span className="font-medium">FOLLOW US :</span>
            <a href="#" aria-label="Facebook" className="rounded-full bg-white/20 p-1 hover:bg-white/30">
              <Share2 className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="Instagram" className="rounded-full bg-white/20 p-1 hover:bg-white/30">
              <AtSign className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="LinkedIn" className="rounded-full bg-white/20 p-1 hover:bg-white/30">
              <Globe className="h-3.5 w-3.5" />
            </a>
            <a href="#" aria-label="YouTube" className="rounded-full bg-white/20 p-1 hover:bg-white/30">
              <Send className="h-3.5 w-3.5" />
            </a>
          </div>
          <a href={`mailto:${BRAND.email}`} className="flex items-center gap-1.5 hover:opacity-80">
            <Mail className="h-3.5 w-3.5" />
            <span>{BRAND.email}</span>
          </a>
        </div>
      </div>

      {/* Main nav */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3">
          <a href="#home" className="flex items-center gap-3">
            <span className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full ring-2 ring-primary/30">
              <Image
                src="/health-nutra-logo.png"
                alt="Health Nutra logo"
                width={48}
                height={48}
                className="h-12 w-12 object-cover"
                priority
              />
            </span>
            <span className="leading-tight">
              <span className="block text-lg font-bold tracking-tight">
                <span className="text-primary">HEALTH</span> <span className="text-accent">NUTRA</span>
              </span>
              <span className="block text-[11px] text-muted-foreground">{BRAND.tagline}</span>
            </span>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={openCart}
              aria-label="Open cart"
              className="relative flex h-10 w-10 items-center justify-center rounded-full border border-border hover:bg-secondary"
            >
              <ShoppingCart className="h-5 w-5 text-foreground" />
              {count > 0 && (
                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground">
                  {count}
                </span>
              )}
            </button>
            <Button asChild className="hidden rounded-full bg-primary text-primary-foreground hover:bg-primary/90 sm:inline-flex">
              <a href="#contact">Get In Touch</a>
            </Button>
            <button
              onClick={() => setMobileOpen((v) => !v)}
              aria-label="Toggle menu"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border lg:hidden"
            >
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <nav className="border-t border-border bg-background px-4 py-3 lg:hidden">
            <ul className="flex flex-col gap-1">
              {NAV.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block rounded-md px-3 py-2 text-sm font-medium hover:bg-secondary"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
