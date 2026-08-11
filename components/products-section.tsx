"use client"

import Image from "next/image"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { products, formatINR } from "@/lib/products"
import { useCart } from "@/components/cart-context"

export function ProductsSection() {
  const { addItem } = useCart()

  return (
    <section id="products" className="bg-secondary/40 py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Our Products</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Shop Premium Nutraceuticals
          </h2>
          <p className="mt-3 text-muted-foreground">
            High-quality supplements to support your fitness and well-being. Add to cart and check out securely.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.id}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="relative flex items-center justify-center bg-secondary/50 p-6">
                <span className="absolute left-3 top-3 rounded-full bg-primary/10 px-2.5 py-1 text-[11px] font-semibold text-primary">
                  {product.tag}
                </span>
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  width={200}
                  height={200}
                  className="h-44 w-auto object-contain transition-transform group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-semibold leading-tight">{product.name}</h3>
                <p className="text-xs text-muted-foreground">{product.subtitle} · {product.count}</p>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{product.description}</p>
                <div className="mt-4 flex items-center justify-between">
                  <span className="text-xl font-bold text-primary">{formatINR(product.price)}</span>
                  <Button
                    size="sm"
                    onClick={() => addItem(product)}
                    className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    <Plus className="mr-1 h-4 w-4" /> Add
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
