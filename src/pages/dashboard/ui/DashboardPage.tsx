import { Image } from "@nextui-org/react";
import { useRef } from "react";
import { CompaniesSlider } from "../../../widgets/companies/ui/CompaniesSlider";
import { ServicesSection } from "../../../widgets/services/ui/ServicesSection";
import { ContactCard } from "../../../widgets/contact/ui/ContactCard";
import { CaseStudiesSection } from "../../../widgets/cases/ui/CaseStudiesSection";

export const DashboardPage = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const blogRef = useRef<HTMLDivElement>(null);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section id="top" className="min-h-screen flex items-center">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                Navigating the digital landscape for success
              </h1>
              <p className="text-lg mb-8 text-foreground/80">
                Our digital marketing agency helps businesses grow and succeed
                online through a range of services including SEO, PPC, social
                media marketing, and content creation.
              </p>
              <button className="bg-primary hover:bg-primary-600 text-black px-8 py-3 rounded-lg font-medium transition-colors">
                Book a consultation
              </button>
            </div>
            <div className="relative">
              <Image src="/start-image.svg" alt="Hero" />
            </div>
          </div>
        </div>
      </section>

      {/* Companies Section */}
      <CompaniesSlider />

      <section ref={servicesRef} id="services" className="min-h-screen py-20">
        <ServicesSection />
        <div className="container mx-auto px-4 mt-16">
          <ContactCard onClick={() => console.log('Contact form opened')} />
        </div>
      </section>

      <section ref={useCasesRef} id="use-cases" className="py-20">
        <CaseStudiesSection />
      </section>

      {/* About Section */}
      <section ref={aboutRef} id="about" className="min-h-screen py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">About Us</h2>
          {/* Add about content */}
        </div>
      </section>

      {/* Add other sections */}
    </div>
  );
};
