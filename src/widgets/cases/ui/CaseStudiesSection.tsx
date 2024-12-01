import { FC, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { BaseCard } from "../../../shared/ui/Card/BaseCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const cases = [
  {
    header: "Local Restaurant",
    title:
      "For a local restaurant, we implemented a targeted PPC campaign that resulted in a 50% increase in website traffic and a 25% increase in sales.",
  },
  {
    header: "B2B Software Company",
    title:
      "For a B2B software company, we developed an SEO strategy that resulted in a first page ranking for key keywords and a 200% increase in organic traffic.",
  },
  {
    header: "National Retail Chain",
    title:
      "For a national retail chain, we created a social media marketing campaign that increased followers by 25% and generated a 20% increase in online sales.",
  },
];

export const CaseStudiesSection: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const { scrollYProgress } = useScroll();
  
  // Параллакс эффект для фона
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);
  
  // Анимация для заголовка
  const titleVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // 3D эффект для карточек
  const cardVariants = {
    hidden: { opacity: 0, rotateY: -20, z: -200 },
    visible: (i: number) => ({
      opacity: 1,
      rotateY: 0,
      z: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        type: "spring",
        stiffness: 100,
      },
    }),
    hover: {
      scale: 1.05,
      rotateY: 10,
      z: 50,
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <div className="relative overflow-hidden">
      {/* Анимированный фон */}
      <motion.div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "linear-gradient(45deg, #B9FF66 25%, transparent 25%), linear-gradient(-45deg, #B9FF66 25%, transparent 25%)",
          backgroundSize: "60px 60px",
          y: backgroundY,
        }}
      />

      <div className="container mx-auto px-4 relative">
        <motion.div
          className="mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={titleVariants}
        >
          <div className="flex flex-col gap-4">
            <motion.div
              className="inline-block self-center md:self-start"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium 
                             shadow-[4px_4px_20px_rgba(0,0,0,0.1)] inline-block
                             hover:shadow-[6px_6px_25px_rgba(185,255,102,0.3)]">
                Case Studies
              </span>
            </motion.div>
            <motion.h2
              className="text-4xl font-medium max-w-3xl text-center md:text-left"
              variants={{
                hidden: { opacity: 0, x: -50 },
                visible: { opacity: 1, x: 0 },
              }}
            >
              Explore Real-Life Examples of Our Proven Digital Marketing Success
            </motion.h2>
          </div>
        </motion.div>

        {/* Desktop версия */}
        <div className="hidden md:block perspective-1000">
          <BaseCard className="bg-[#191A23] text-white p-16 transform-style-3d" shadow={false}>
            <div className="grid grid-cols-3 gap-16 relative">
              {cases.map((item, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  initial="hidden"
                  whileInView="visible"
                  whileHover="hover"
                  custom={index}
                  className="flex flex-col justify-between gap-8 backdrop-blur-sm 
                           bg-opacity-80 p-8 rounded-3xl transform-style-3d"
                  onHoverStart={() => setHoveredIndex(index)}
                  onHoverEnd={() => setHoveredIndex(null)}
                >
                  <div>
                    <motion.h3 
                      className="text-xl mb-6"
                      animate={hoveredIndex === index ? { 
                        color: "#B9FF66",
                        transition: { duration: 0.3 }
                      } : {}}
                    >
                      {item.header}
                    </motion.h3>
                    <p className="text-xl leading-relaxed">{item.title}</p>
                  </div>
                  <motion.div 
                    className="flex items-center gap-2"
                    whileHover={{ x: 10 }}
                  >
                    <span className="text-[#B9FF66] text-lg font-medium">
                      Learn more
                    </span>
                    <motion.svg
                      width="20" height="20" viewBox="0 0 20 20"
                      className="text-[#B9FF66]"
                      animate={hoveredIndex === index ? {
                        x: [0, 10, 0],
                        transition: {
                          duration: 1,
                          repeat: Infinity,
                        },
                      } : {}}
                    >
                      <path
                        d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </motion.svg>
                  </motion.div>
                </motion.div>
              ))}
            </div>
          </BaseCard>
        </div>

        {/* Мобильная версия с улучшенными анимациями */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1.2}
            loop={true}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            className="case-studies-slider"
          >
            {cases.map((item, index) => (
              <SwiperSlide key={index}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.5 }}
                >
                  <BaseCard
                    className="bg-[#191A23] text-white h-[500px] p-8 relative overflow-hidden"
                    shadow={false}
                  >
                    {/* Добавляем декоративные элементы */}
                    <motion.div
                      className="absolute -top-20 -right-20 w-40 h-40 bg-[#B9FF66] rounded-full opacity-10"
                      animate={{
                        scale: [1, 1.2, 1],
                        rotate: [0, 180, 360],
                      }}
                      transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    />
                    <div className="flex flex-col justify-between h-full gap-8 relative z-10">
                      <div className="text-center">
                        <motion.h3 
                          className="text-xl mb-6"
                          whileHover={{ color: "#B9FF66" }}
                        >
                          {item.header}
                        </motion.h3>
                        <p className="text-xl leading-relaxed">{item.title}</p>
                      </div>
                      <motion.div 
                        className="flex items-center gap-2"
                        whileHover={{ x: 10 }}
                      >
                        <span className="text-[#B9FF66] text-lg font-medium">
                          Learn more
                        </span>
                        <motion.svg
                          width="20" height="20" viewBox="0 0 20 20"
                          className="text-[#B9FF66]"
                          animate={{
                            x: [0, 10, 0],
                            transition: {
                              duration: 1,
                              repeat: Infinity,
                            },
                          }}
                        >
                          <path
                            d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </motion.svg>
                      </motion.div>
                    </div>
                  </BaseCard>
                </motion.div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};
