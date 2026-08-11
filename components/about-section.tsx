import Image from "next/image"
import { ShieldCheck, Sprout, HeartPulse } from "lucide-react"

const POINTS = [
  { icon: ShieldCheck, title: "Safe & Certified", text: "Manufactured in GMP-certified facilities with rigorous quality checks." },
  { icon: Sprout, title: "Natural Ingredients", text: "Sourced from clinically studied botanicals and pure actives." },
  { icon: HeartPulse, title: "Wellness First", text: "Formulations designed to support your everyday health goals." },
]

export function AboutSection() {
  return (
    <section id="about" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
      <div className="grid items-center gap-10 md:grid-cols-2">
        <div>
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">About Health Nutra</span>
          <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
            Committed to Your Health &amp; Well-being
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            Since our founding, Health Nutra has been dedicated to nourishing life naturally. We combine modern
            science with the power of nature to create nutraceutical products that are safe, effective, and
            trusted by families across the globe.
          </p>
          <p className="mt-3 leading-relaxed text-muted-foreground">
            Every product is crafted with care, backed by research, and held to the highest standards of quality
            and purity — because your well-being deserves nothing less.
          </p>

          <div className="mt-6 grid gap-4 sm:grid-cols-3">
            {POINTS.map((p) => (
              <div key={p.title} className="rounded-xl border border-border bg-card p-4">
                <p.icon className="h-6 w-6 text-primary" />
                <p className="mt-2 text-sm font-semibold">{p.title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <Image
            src="/ingredients.png"
            alt="Natural botanical ingredients used in Health Nutra products"
            width={320}
            height={400}
            className="h-full w-full rounded-2xl object-cover shadow-md"
          />
          <Image
            src="/hero-botanical.png"
            alt="Health Nutra supplements with botanicals"
            width={320}
            height={400}
            className="mt-8 h-full w-full rounded-2xl object-cover shadow-md"
          />
        </div>
      </div>
    </section>
  )
}
