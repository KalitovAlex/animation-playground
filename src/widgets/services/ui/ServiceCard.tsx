import { FC } from "react";
import { BaseCard } from "../../../shared/ui/Card/BaseCard";

interface ServiceCardProps {
  title: string;
  icon: string;
  bgColor?: "light" | "dark" | "primary";
  onClick?: () => void;
  shadow?: boolean;
}

export const ServiceCard: FC<ServiceCardProps> = ({
  title,
  icon,
  bgColor,
  shadow = true,
}) => {
  return (
    <BaseCard
      className={`p-12 relative overflow-hidden ${
        bgColor === "light"
          ? "bg-white"
          : bgColor === "dark"
          ? "bg-[#191A23]"
          : "bg-[#B9FF66]"
      } hover:scale-[1.02] transition-transform cursor-pointer`}
      shadow={shadow}
    >
      <div className="flex flex-col justify-between h-full relative z-10">
        <div className="max-w-[65%]">
          <div
            className={`inline-block px-4 py-2 rounded-xl text-black ${
              bgColor === "dark" ? "bg-[#B9FF66]" : "bg-white"
            }`}
          >
            <h3 className="text-2xl font-medium">{title}</h3>
          </div>
        </div>

        <div className="mt-auto">
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl ${
              bgColor === "dark"
                ? "bg-[#B9FF66] text-black"
                : "bg-white text-black"
            }`}
          >
            <span className="text-lg font-medium">Learn more</span>
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current"
            >
              <path
                d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>

      <div className="absolute right-12 top-1/2 -translate-y-1/2">
        <img
          src={icon}
          alt={title}
          className="w-48 h-48 object-contain opacity-90"
        />
      </div>
    </BaseCard>
  );
};
