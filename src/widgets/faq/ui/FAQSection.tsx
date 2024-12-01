import { Accordion, AccordionItem } from "@nextui-org/react";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer: "We offer a comprehensive suite of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing, Email Marketing, Content Creation, and Analytics and Tracking services.",
  },
  {
    question: "How long does it take to see results?",
    answer: "Results timeline varies depending on the service and your goals. SEO typically takes 3-6 months to show significant results, while PPC can generate immediate traffic. During our initial consultation, we'll provide a more detailed timeline based on your specific objectives.",
  },
  {
    question: "How do you measure success?",
    answer: "We measure success through various KPIs including website traffic, conversion rates, engagement metrics, and ROI. We provide regular reports and analytics to track progress and adjust strategies as needed.",
  },
  {
    question: "Do you offer customized marketing strategies?",
    answer: "Yes, we create tailored marketing strategies based on your business goals, target audience, industry, and budget. Each strategy is unique and designed to meet your specific needs.",
  },
  {
    question: "What makes your agency different from others?",
    answer: "We combine data-driven strategies with creative solutions, maintain transparent communication, and focus on measurable results. Our team stays updated with the latest digital marketing trends and technologies.",
  },
  {
    question: "What is your pricing structure?",
    answer: "Our pricing varies based on service scope, project complexity, and your business needs. We offer flexible packages and can create custom solutions to fit your budget. Contact us for a detailed quote.",
  },
];

export const FAQSection = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-16">
        <div className="flex flex-col gap-4">
          <div className="inline-block self-center md:self-start">
            <span className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium shadow-[4px_4px_20px_rgba(0,0,0,0.1)]">
              FAQ
            </span>
          </div>
          <h2 className="text-4xl font-medium max-w-3xl text-center md:text-left">
            Frequently Asked Questions
          </h2>
        </div>
      </div>

      <div className="w-full">
        <Accordion 
          variant="splitted"
          selectionMode="single"
          className="gap-4"
          itemClasses={{
            base: "border-none",
            title: "font-medium text-xl",
            trigger: "px-8 py-6 rounded-[14px] data-[hover=true]:bg-[#F3F3F3]",
            content: "px-8 pb-6 text-white",
          }}
        >
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              aria-label={faq.question}
              title={faq.question}
              indicator={({ isOpen }) => (
                <span className={`text-2xl font-medium ${
                  isOpen ? "text-white" : "text-black"
                }`}>
                  {isOpen ? "−" : "+"}
                </span>
              )}
              classNames={{
                base: "bg-[#F3F3F3] data-[open=true]:bg-[#191A23] rounded-[14px] transition-colors",
                title: "text-[#191A23] data-[open=true]:text-white",
                trigger: "py-6 px-8 rounded-[14px] transition-colors",
                content: "text-base leading-relaxed text-white",
              }}
            >
              <p className="text-base leading-relaxed">{faq.answer}</p>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
}; 