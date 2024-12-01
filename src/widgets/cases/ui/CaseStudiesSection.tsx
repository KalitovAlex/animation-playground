import { FC } from "react";
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
  return (
    <div className="container mx-auto px-4">
      <div className="mb-16">
        <div className="flex flex-col gap-4">
          <div className="inline-block self-center md:self-start">
            <span className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium shadow-[4px_4px_20px_rgba(0,0,0,0.1)]">
              Case Studies
            </span>
          </div>
          <h2 className="text-4xl font-medium max-w-3xl text-center md:text-left">
            Explore Real-Life Examples of Our Proven Digital Marketing Success
            through Our Case Studies
          </h2>
        </div>
      </div>

      {/* Desktop версия */}
      <div className="hidden md:block">
        <BaseCard className="bg-[#191A23] text-white p-16" shadow={false}>
          <div className="grid grid-cols-3 gap-16 relative">
            {cases.map((item, index) => (
              <div key={index} className="flex flex-col justify-between gap-8">
                <div>
                  <h3 className="text-xl mb-6">{item.header}</h3>
                  <p className="text-xl leading-relaxed">{item.title}</p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#B9FF66] text-lg font-medium">
                    Learn more
                  </span>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[#B9FF66]"
                  >
                    <path
                      d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </BaseCard>
      </div>

      {/* Мобильная версия */}
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
              <BaseCard
                className="bg-[#191A23] text-white h-[500px] p-8"
                shadow={false}
              >
                <div className="flex flex-col justify-between h-full gap-8">
                  <div className="text-center">
                    <h3 className="text-xl mb-6">{item.header}</h3>
                    <p className="text-xl leading-relaxed">{item.title}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-[#B9FF66] text-lg font-medium">
                      Learn more
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-[#B9FF66]"
                    >
                      <path
                        d="M4.16669 10H15.8334M15.8334 10L10 4.16666M15.8334 10L10 15.8333"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                </div>
              </BaseCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
