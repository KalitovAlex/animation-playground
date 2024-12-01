import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
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
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Эффект параллакса для заголовка
  const titleY = useTransform(scrollYProgress, [0, 1], [100, -100]);
  
  // Анимация появления карточек
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
        ease: [0.645, 0.045, 0.355, 1],
      },
    }),
  };

  // Анимация для плавающих элементов
  const floatingCircles = Array.from({ length: 3 }).map((_, i) => ({
    animate: {
      y: [0, -20, 0],
      x: [0, i * 10, 0],
      rotate: [0, 360],
    },
    transition: {
      duration: 3 + i,
      repeat: Infinity,
      ease: "linear",
    },
  }));

  const handleLearnMore = (service: string) => {
    console.log(`Learn more about ${service}`);
  };

  return (
    <motion.div
      ref={sectionRef}
      className="relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      {/* Декоративные элементы */}
      {floatingCircles.map((circle, i) => (
        <motion.div
          key={i}
          className={`absolute w-${20 + i * 10} h-${20 + i * 10} rounded-full 
                     ${i % 2 === 0 ? 'bg-[#B9FF66]' : 'bg-[#191A23]'} 
                     opacity-${5 + i * 2} blur-sm`}
          style={{
            top: `${20 + i * 30}%`,
            left: `${10 + i * 40}%`,
          }}
          animate={circle.animate}
          transition={circle.transition}
        />
      ))}

      <div className="container mx-auto px-4">
        <motion.div 
          className="mb-16"
          style={{ y: titleY }}
        >
          <div className="flex flex-col gap-4">
             <motion.div
               className="inline-block self-center md:self-start"
               initial={{ scale: 0.5, opacity: 0 }}
               whileInView={{ scale: 1, opacity: 1 }}
               transition={{ duration: 0.5 }}
             >
               <span className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium 
                              shadow-[4px_4px_20px_rgba(0,0,0,0.1)] inline-block
                              hover:shadow-[6px_6px_25px_rgba(185,255,102,0.3)] 
                              transition-all duration-300">
                 Services
               </span>
             </motion.div>
             <motion.h2
               className="text-4xl font-medium max-w-3xl text-center md:text-left"
               initial={{ opacity: 0, x: -50 }}
               whileInView={{ opacity: 1, x: 0 }}
               transition={{ duration: 0.7, delay: 0.2 }}
             >
               At our digital marketing agency, we offer a range of services to help businesses grow and succeed online
             </motion.h2>
           </div>
         </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              custom={index}
              whileHover={{ 
                scale: 1.02,
                transition: { duration: 0.2 }
              }}
            >
              <ServiceCard
                title={service.title}
                icon={service.icon}
                bgColor={service.bgColor}
                onClick={() => handleLearnMore(service.title)}
                shadow={true}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.div>
  );
};
