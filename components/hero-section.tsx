import Image from "next/image"
import { Leaf, FlaskConical, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const STATS = [
  { icon: Leaf, value: "10+", title: "Years of Excellence", sub: "In Nutraceutical Industry" },
  { icon: FlaskConical, value: "200+", title: "Quality Products", sub: "To Support Your Health" },
  { icon: Users, value: "500+", title: "Satisfied Clients", sub: "Across the Globe" },
  { icon: Award, value: "15+", title: "Certifications", sub: "For Quality Assurance" },
]

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary/40">
      <div className="absolute inset-0">
        <Image
          src="/hero-botanical.png"
          alt=""
          fill
          priority
          className="object-cover opacity-25"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/85 to-background/30" />
      </div>

      <div className="relative mx-auto grid max-w-7xl items-center gap-8 px-4 py-14 md:grid-cols-2 md:py-20">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
            <Leaf className="h-3.5 w-3.5" /> Est. March 16, 2026
          </span>
          <h1 className="mt-4 font-serif text-4xl font-bold leading-[1.05] tracking-tight text-balance sm:text-5xl lg:text-6xl">
            <span className="block text-foreground">NOURISHING</span>
            <span className="block">
              <span className="text-primary">LIFE</span> <span className="text-accent">NATURALLY</span>
            </span>
          </h1>
          <p className="mt-4 text-lg font-medium text-foreground/90">
            Premium Nutraceuticals for a <span className="text-primary">Healthier &amp; Better Tomorrow</span>
          </p>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Health Nutra is committed to providing high-quality, safe and effective nutraceutical products that
            support your fitness and well-being.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button asChild size="lg" className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="#products">Explore Products</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full border-2">
              <a href="#about">Learn More</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <Image
            src="/hero-botanical.png"
            alt="Assortment of Health Nutra nutraceutical supplements arranged with natural botanicals"
            width={640}
            height={520}
            className="mx-auto rounded-3xl object-cover shadow-xl"
            priority
          />
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative mx-auto -mb-10 max-w-6xl px-4">
        <div className="grid grid-cols-2 gap-4 rounded-2xl border border-border bg-card p-6 shadow-lg md:grid-cols-4">
          {STATS.map((s) => (
            <div key={s.title} className="flex items-center gap-3">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <s.icon className="h-5 w-5" />
              </span>
              <div>
                <p className="text-2xl font-bold text-primary">{s.value}</p>
                <p className="text-sm font-semibold leading-tight">{s.title}</p>
                <p className="text-xs text-muted-foreground">{s.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="h-12" />
    </section>
  )
}
