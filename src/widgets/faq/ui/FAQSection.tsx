import { Accordion, AccordionItem } from "@nextui-org/react";
import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import { useRef } from "react";
import { useReducedMotion } from "../../../shared/hooks/useReducedMotion";

const faqs = [
  {
    question: "What digital marketing services do you offer?",
    answer:
      "We offer a comprehensive suite of digital marketing services including Search Engine Optimization (SEO), Pay-Per-Click Advertising (PPC), Social Media Marketing, Email Marketing, Content Creation, and Analytics and Tracking services.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Results timeline varies depending on the service and your goals. SEO typically takes 3-6 months to show significant results, while PPC can generate immediate traffic. During our initial consultation, we'll provide a more detailed timeline based on your specific objectives.",
  },
  {
    question: "How do you measure success?",
    answer:
      "We measure success through various KPIs including website traffic, conversion rates, engagement metrics, and ROI. We provide regular reports and analytics to track progress and adjust strategies as needed.",
  },
  {
    question: "Do you offer customized marketing strategies?",
    answer:
      "Yes, we create tailored marketing strategies based on your business goals, target audience, industry, and budget. Each strategy is unique and designed to meet your specific needs.",
  },
  {
    question: "What makes your agency different from others?",
    answer:
      "We combine data-driven strategies with creative solutions, maintain transparent communication, and focus on measurable results. Our team stays updated with the latest digital marketing trends and technologies.",
  },
  {
    question: "What is your pricing structure?",
    answer:
      "Our pricing varies based on service scope, project complexity, and your business needs. We offer flexible packages and can create custom solutions to fit your budget. Contact us for a detailed quote.",
  },
];

export const FAQSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const shouldReduceMotion = useReducedMotion();

  const backgroundXTransform = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ["-100%", "0%", "100%"]
  );
  const backgroundX = shouldReduceMotion ? 0 : backgroundXTransform;

  const backgroundRotate = useTransform(scrollYProgress, [0, 1], [0, 360]);
  const backgroundScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.6, 1.2, 0.6]
  );
  const titleY = useTransform(scrollYProgress, [0, 1], [100, -100]);

  const decorElements = [
    {
      animate: {
        rotate: [0, 360],
        scale: [1, 1.2, 1],
      },
      transition: { duration: 20, repeat: Infinity, ease: "linear" },
      className:
        "absolute -top-20 -right-20 w-40 h-40 bg-[#B9FF66] rounded-full opacity-5",
    },
    {
      animate: {
        y: [0, -30, 0],
        x: [0, 30, 0],
      },
      transition: { duration: 15, repeat: Infinity, ease: "easeInOut" },
      className:
        "absolute bottom-20 left-10 w-24 h-24 bg-[#191A23] rounded-full opacity-5",
    },
  ];

  const accordionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const contentVariants = {
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.4,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: shouldReduceMotion ? 0.2 : 0.3,
        ease: [0.04, 0.62, 0.23, 0.98],
      },
    },
  };

  return (
    <div ref={sectionRef} className="relative overflow-hidden py-20">
      <motion.div
        className="absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 20% 50%, rgba(185, 255, 102, 0.3) 0%, transparent 70%),
            radial-gradient(circle at 80% 80%, rgba(185, 255, 102, 0.2) 0%, transparent 70%)
          `,
          x: backgroundX,
          rotate: backgroundRotate,
          scale: backgroundScale,
        }}
      />

      {decorElements.map((elem, index) => (
        <motion.div
          key={index}
          className={elem.className}
          animate={elem.animate}
          transition={elem.transition}
        />
      ))}

      <div className="container mx-auto px-4">
        <motion.div className="mb-16" style={{ y: titleY }}>
          <div className="flex flex-col gap-4">
            <motion.div
              className="inline-block self-center md:self-start"
              initial={{ scale: 0.5, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <span
                className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium 
                            shadow-[4px_4px_20px_rgba(0,0,0,0.1)] inline-block
                            hover:shadow-[6px_6px_25px_rgba(185,255,102,0.3)] 
                            transition-all duration-300"
              >
                FAQ
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl font-medium max-w-3xl text-center md:text-left"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Frequently Asked Questions (FAQ) - At our digital marketing
              agency, we provide various solutions to assist businesses in
              expanding and thriving in the online landscape.
            </motion.h2>
          </div>
        </motion.div>

        <motion.div
          className="w-full perspective-1000"
          variants={accordionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Accordion
            variant="splitted"
            selectionMode="single"
            className="gap-6"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                aria-label={faq.question}
                title={
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="text-2xl font-medium group-hover:text-[#191A23] transition-colors duration-300"
                  >
                    {faq.question}
                  </motion.div>
                }
                classNames={{
                  base: `group bg-[#F3F3F3] data-[open=true]:bg-[#191A23] rounded-[14px] 
                         transition-all duration-500 hover:shadow-[0_10px_40px_rgba(185,255,102,0.3)]
                         data-[open=true]:shadow-[0_10px_40px_rgba(0,0,0,0.3)]
                         hover:scale-[1.02] hover:-translate-y-1
                         w-full max-w-none`,
                  title:
                    "text-[#191A23] data-[open=true]:text-white transition-colors duration-500",
                  trigger:
                    "py-8 px-10 rounded-[14px] transition-all duration-500 hover:bg-black/5",
                  content: "text-lg leading-relaxed text-white px-10 py-6",
                  indicator:
                    "text-[#191A23] data-[open=true]:rotate-180 transition-transform duration-500",
                }}
              >
                <AnimatePresence>
                  <motion.div
                    variants={contentVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="text-lg leading-relaxed"
                  >
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="relative"
                    >
                      <motion.div
                        className="absolute left-0 top-0 w-1 h-full bg-[#B9FF66] rounded-full"
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.3, delay: 0.1 }}
                      />
                      <div className="pl-6">{faq.answer}</div>
                    </motion.div>
                  </motion.div>
                </AnimatePresence>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </div>
  );
};
