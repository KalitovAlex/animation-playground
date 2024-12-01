import { motion } from "framer-motion";
import { FC } from "react";
import { Image } from "@nextui-org/react";

interface ServiceCardProps {
  title: string;
  icon: string;
  bgColor: "light" | "primary" | "dark";
  onClick: () => void;
  shadow?: boolean;
}

const bgColors = {
  light: "bg-[#F3F3F3]",
  primary: "bg-[#B9FF66]",
  dark: "bg-[#191A23]",
};

const textColors = {
  light: "text-black",
  primary: "text-black",
  dark: "text-white",
};

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  icon,
  bgColor,
  onClick,
  shadow = false,
}) => {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{
        scale: 1.05,
        rotateY: 5,
        transition: {
          duration: 0.3,
          type: "spring",
          stiffness: 300,
        },
      }}
      className={`
        ${bgColors[bgColor]} 
        ${textColors[bgColor]} 
        p-8 rounded-[45px] 
        ${shadow ? "shadow-[4px_4px_20px_rgba(0,0,0,0.1)]" : ""}
        hover:shadow-[0_20px_60px_rgba(185,255,102,0.3)]
        transform-gpu
        transition-shadow duration-300
      `}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex-1">
          <motion.div
            initial={{ scale: 1, rotate: 0 }}
            whileHover={{
              scale: [1, 1.2, 0.9, 1.1, 1],
              rotate: [0, 45, -45, 20, 0],
              transition: {
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
              },
            }}
            className="mb-6 inline-block bg-white/10 p-3 rounded-2xl"
          >
            <Image
              src={icon}
              alt={title}
              width={48}
              height={48}
              className="drop-shadow-lg"
            />
          </motion.div>

          <motion.h3
            className="text-2xl font-medium mb-6"
            initial={{ y: 0 }}
            whileHover={{
              y: [-2, 2, -2],
              transition: {
                duration: 1,
                repeat: Infinity,
              },
            }}
          >
            {title}
          </motion.h3>

          <motion.button
            onClick={onClick}
            className="flex items-center gap-2 text-lg font-medium group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="relative">
              Learn more
              <motion.span
                className="absolute bottom-0 left-0 w-full h-[2px] bg-current origin-left"
                initial={{ scaleX: 0 }}
                whileHover={{
                  scaleX: 1,
                  transition: { duration: 0.3 },
                }}
              />
            </span>
            <motion.svg
              initial={{ x: 0 }}
              animate={{
                x: [0, 10, 0],
                transition: {
                  duration: 0.8,
                  repeat: Infinity,
                  repeatType: "reverse",
                  ease: "easeInOut",
                },
              }}
              width="20"
              height="20"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="transform-gpu"
            >
              <path
                d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </motion.svg>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};
