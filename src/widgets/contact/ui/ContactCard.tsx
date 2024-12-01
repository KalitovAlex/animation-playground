import { FC } from "react";
import { BaseCard } from "../../../shared/ui/Card/BaseCard";
import { Image } from "@nextui-org/react";

interface ContactCardProps {
  onClick?: () => void;
}

export const ContactCard: FC<ContactCardProps> = ({ onClick }) => {
  return (
    <BaseCard className="bg-[#F3F3F3] relative overflow-hidden" shadow={false}>
      <div className="flex flex-col h-full">
        <div className="flex flex-col gap-4 max-w-[60%]">
          <h2 className="text-4xl font-medium">Let's make things happen</h2>
          <p className="text-lg text-foreground/80 line-clamp-3">
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
        </div>

        <div className="mt-8">
          <button
            onClick={onClick}
            className="bg-[#191A23] text-white px-8 py-4 rounded-[14px] text-lg hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-shadow"
          >
            Get your free proposal
          </button>
        </div>

        <div className="absolute right-12 top-1/2 -translate-y-1/2 hidden md:block">
          <Image
            src="/images/contact/decor.svg"
            alt="decor"
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      </div>
    </BaseCard>
  );
};
