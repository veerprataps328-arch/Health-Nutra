import Image from "next/image"
import { Microscope, BadgeCheck, FlaskConical, Recycle } from "lucide-react"

const QUALITY = [
  { icon: BadgeCheck, title: "GMP Certified", text: "Produced under Good Manufacturing Practices for consistent quality." },
  { icon: FlaskConical, title: "Lab Tested", text: "Every batch is tested for purity, potency, and safety." },
  { icon: Microscope, title: "Research Backed", text: "Formulations grounded in clinical research and nutritional science." },
  { icon: Recycle, title: "Clean Sourcing", text: "Responsibly sourced ingredients with full traceability." },
]

export function ResearchQualitySection() {
  return (
    <>
      <section id="research" className="mx-auto max-w-7xl px-4 py-16 md:py-20">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div className="order-2 md:order-1">
            <Image
              src="/ingredients.png"
              alt="Research and testing of Health Nutra nutraceutical ingredients"
              width={560}
              height={420}
              className="w-full rounded-2xl object-cover shadow-md"
            />
          </div>
          <div className="order-1 md:order-2">
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Research &amp; Development</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Science Behind Every Formula
            </h2>
            <p className="mt-4 leading-relaxed text-muted-foreground">
              Our team of nutrition scientists and researchers work continuously to develop advanced,
              evidence-based formulations. We invest in innovation to bring you nutraceuticals that truly make a
              difference to your health.
            </p>
            <ul className="mt-5 space-y-3">
              {["Clinically studied active ingredients", "Precise, bioavailable dosages", "Continuous product innovation"].map(
                (item) => (
                  <li key={item} className="flex items-center gap-3 text-sm">
                    <BadgeCheck className="h-5 w-5 shrink-0 text-primary" />
                    <span>{item}</span>
                  </li>
                ),
              )}
            </ul>
          </div>
        </div>
      </section>

      <section id="quality" className="bg-primary py-16 text-primary-foreground md:py-20">
        <div className="mx-auto max-w-7xl px-4">
          <div className="mx-auto max-w-2xl text-center">
            <span className="text-sm font-semibold uppercase tracking-wider text-accent">Quality Assurance</span>
            <h2 className="mt-2 font-serif text-3xl font-bold tracking-tight text-balance sm:text-4xl">
              Uncompromising Standards
            </h2>
            <p className="mt-3 text-primary-foreground/80">
              From sourcing to packaging, every step is held to the highest standards of safety and purity.
            </p>
          </div>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {QUALITY.map((q) => (
              <div key={q.title} className="rounded-2xl bg-white/10 p-6 backdrop-blur-sm">
                <q.icon className="h-8 w-8 text-accent" />
                <h3 className="mt-3 font-semibold">{q.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-primary-foreground/80">{q.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
