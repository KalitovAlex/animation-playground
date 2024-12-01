import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { Image } from "@nextui-org/react";

const companies = [
  { name: "Amazon", logo: "/companies/amazon.svg" },
  { name: "Dribbble", logo: "/companies/dribbble.svg" },
  { name: "HubSpot", logo: "/companies/hubspot.svg" },
  { name: "Notion", logo: "/companies/notion.svg" },
  { name: "Netflix", logo: "/companies/netflix.svg" },
  { name: "Zoom", logo: "/companies/zoom.svg" },
];

export const CompaniesSlider = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);
  const scale = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0.8, 1, 1, 0.8]
  );

  return (
    <motion.div
      ref={sectionRef}
      style={{ opacity }}
      className="py-20 bg-[#F3F3F3] relative overflow-hidden"
    >
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{ y }}
      >
        <motion.div
          className="absolute top-0 left-0 w-32 h-32 bg-[#B9FF66] rounded-full opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-40 h-40 bg-[#191A23] rounded-full opacity-5"
          animate={{
            x: [0, -120, 0],
            y: [0, 60, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </motion.div>

      <motion.div className="container mx-auto px-4" style={{ scale }}>
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl font-medium mb-4">
            Trusted by Leading Companies
          </h2>
          <p className="text-foreground/80">
            We've helped numerous businesses achieve their digital marketing
            goals
          </p>
        </motion.div>

        {/* Слайдер компаний */}
        <div className="relative">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={32}
            slidesPerView="auto"
            loop={true}
            speed={5000}
            autoplay={{
              delay: 0,
              disableOnInteraction: false,
            }}
            className="companies-slider"
          >
            {companies.map((company, index) => (
              <SwiperSlide key={index} className="!w-auto">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.1 }}
                  className="h-16 flex items-center justify-center"
                >
                  <Image
                    src={company.logo}
                    alt={company.name}
                    className="max-h-full w-auto grayscale hover:grayscale-0 transition-all duration-300"
                  />
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Градиентные оверлеи для плавного перехода */}
          <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-[#F3F3F3] to-transparent z-10" />
          <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-[#F3F3F3] to-transparent z-10" />
        </div>
      </motion.div>
    </motion.div>
  );
};
