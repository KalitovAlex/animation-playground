import { useRef } from "react";
import { CompaniesSlider } from "../../../widgets/companies/ui/CompaniesSlider";
import { ServicesSection } from "../../../widgets/services/ui/ServicesSection";
import { ContactCard } from "../../../widgets/contact/ui/ContactCard";
import { CaseStudiesSection } from "../../../widgets/cases/ui/CaseStudiesSection";
import { FAQSection } from "../../../widgets/faq/ui/FAQSection";
import { TeamSection } from "../../../widgets/team/ui/TeamSection";
import { useContactModal } from "../../../shared/hooks/useContactModal";
import { HeroSection } from "../../../widgets/hero/ui/HeroSection";

export const DashboardPage = () => {
  const servicesRef = useRef<HTMLDivElement>(null);
  const useCasesRef = useRef<HTMLDivElement>(null);
  const { open } = useContactModal();

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />

      {/* Companies Section */}
      <CompaniesSlider />

      <section ref={servicesRef} id="services" className="min-h-screen py-20">
        <ServicesSection />
        <div className="container mx-auto px-4 mt-16">
          <ContactCard onClick={open} />
        </div>
      </section>

      <section ref={useCasesRef} id="use-cases" className="py-20">
        <CaseStudiesSection />
      </section>

      {/* Add FAQ Section */}
      <section id="faq" className="py-20">
        <FAQSection />
      </section>

      {/* Add Team Section */}
      <section id="team" className="py-20">
        <TeamSection />
      </section>

      {/* Add other sections */}
    </div>
  );
};
