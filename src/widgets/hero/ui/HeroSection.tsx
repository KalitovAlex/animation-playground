import { motion } from "framer-motion";
import { Image } from "@nextui-org/react";

export const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8, rotate: -10 },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8,
      },
    },
  };

  const decorationVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: {
      pathLength: 1,
      opacity: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="top" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Animated background decorations */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial="hidden"
        animate="visible"
      >
        <motion.svg
          width="100%"
          height="100%"
          viewBox="0 0 100 100"
          className="absolute top-0 left-0 text-[#B9FF66] opacity-10"
        >
          <motion.path
            d="M0,50 Q25,25 50,50 T100,50"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            variants={decorationVariants}
          />
          {/* Add more decorative paths as needed */}
        </motion.svg>
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          className="grid md:grid-cols-2 gap-8 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="space-y-8">
            <motion.h1
              className="text-5xl md:text-6xl font-bold"
              variants={itemVariants}
            >
              <span className="text-[#B9FF66]">Navigating</span> the digital
              <br />
              landscape for <span className="text-[#B9FF66]">success</span>
            </motion.h1>

            <motion.p
              className="text-lg text-foreground/80"
              variants={itemVariants}
            >
              Our digital marketing agency helps businesses grow and succeed
              online through a range of services including SEO, PPC, social
              media marketing, and content creation.
            </motion.p>

            <motion.div variants={itemVariants}>
              <motion.button
                className="bg-[#B9FF66] text-black px-8 py-4 rounded-[14px] text-lg font-medium
                          hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-all duration-300
                          transform hover:-translate-y-1"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Book a consultation
              </motion.button>
            </motion.div>
          </div>

          <motion.div
            className="relative"
            variants={imageVariants}
          >
            <Image
              src="/start-image.svg"
              alt="Hero"
              className="w-full h-auto"
            />
            
            {/* Floating elements */}
            <motion.div
              className="absolute -top-10 -right-10 bg-[#B9FF66] rounded-full w-20 h-20"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 360],
              }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            
            <motion.div
              className="absolute -bottom-5 -left-5 bg-[#191A23] rounded-full w-12 h-12"
              animate={{
                y: [0, 15, 0],
                x: [0, 15, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}; 