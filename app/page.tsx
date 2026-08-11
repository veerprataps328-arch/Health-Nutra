import { CartProvider } from "@/components/cart-context"
import { CartDrawer } from "@/components/cart-drawer"
import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ProductsSection } from "@/components/products-section"
import { ResearchQualitySection } from "@/components/research-quality-section"
import { ContactFooter } from "@/components/contact-footer"

export default function Page() {
  return (
    <CartProvider>
      <SiteHeader />
      <main>
        <HeroSection />
        <AboutSection />
        <ProductsSection />
        <ResearchQualitySection />
        <ContactFooter />
      </main>
      <CartDrawer />
    </CartProvider>
  )
}
