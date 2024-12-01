import { ServiceCard } from "./ServiceCard";

const services = [
  {
    title: "Search engine optimization",
    icon: "/icons/seo-icon.svg",
    bgColor: "light" as const,
  },
  {
    title: "Pay-per-click advertising",
    icon: "/icons/ppc-icon.svg",
    bgColor: "primary" as const,
  },
  {
    title: "Social Media Marketing",
    icon: "/icons/smm-icon.svg",
    bgColor: "dark" as const,
  },
  {
    title: "Email Marketing",
    icon: "/icons/email-icon.svg",
    bgColor: "light" as const,
  },
  {
    title: "Content Creation",
    icon: "/icons/content-icon.svg",
    bgColor: "primary" as const,
  },
  {
    title: "Analytics and Tracking",
    icon: "/icons/analytics-icon.svg",
    bgColor: "dark" as const,
  },
];

export const ServicesSection = () => {
  const handleLearnMore = (service: string) => {
    console.log(`Learn more about ${service}`);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mb-16">
        <div className="flex flex-col gap-4">
          <div className="inline-block self-center md:self-start">
            <span className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium shadow-[4px_4px_20px_rgba(0,0,0,0.1)]">
              Services
            </span>
          </div>
          <h2 className="text-4xl font-medium max-w-3xl text-center md:text-left">
            At our digital marketing agency, we offer a range of services to help businesses grow and succeed online. These services include:
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            icon={service.icon}
            bgColor={service.bgColor}
            onClick={() => handleLearnMore(service.title)}
            shadow={true}
          />
        ))}
      </div>
    </div>
  );
};
