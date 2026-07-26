import { ContactSection } from "@/components/sections/contact-section";
import { HeroSection } from "@/components/sections/hero-section";
import { JsonLd } from "@/components/json-ld";
import { PricingSection } from "@/components/sections/pricing-section";
import { ProjectsSection } from "@/components/sections/projects-section";
import { ServicesSection } from "@/components/sections/services-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { getHomeStructuredData } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <JsonLd data={getHomeStructuredData()} />
      <SiteHeader />
      <main id="contenu-principal">
        <HeroSection />
        <ServicesSection />
        <ProjectsSection />
        <PricingSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
