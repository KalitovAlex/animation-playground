import { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const companies = [
  { name: 'Amazon', logo: '/companies/amazon.svg' },
  { name: 'Dribbble', logo: '/companies/dribbble.svg' },
  { name: 'HubSpot', logo: '/companies/hubspot.svg' },
  { name: 'Notion', logo: '/companies/notion.svg' },
  { name: 'Netflix', logo: '/companies/netflix.svg' },
  { name: 'Zoom', logo: '/companies/zoom.svg' },
];

export const CompaniesSlider = () => {
  const [slidesPerView, setSlidesPerView] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setSlidesPerView(2);
      } else if (window.innerWidth < 1024) {
        setSlidesPerView(3);
      } else {
        setSlidesPerView(6);
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className="py-12 bg-background/50">
      <div className="container mx-auto px-4">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={slidesPerView}
          loop={true}
          speed={3000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          className="companies-slider"
        >
          {[...companies, ...companies].map((company, index) => (
            <SwiperSlide key={index}>
              <div className="flex items-center justify-center h-20">
                <img
                  src={company.logo}
                  alt={company.name}
                  className="h-8 md:h-10 object-contain grayscale hover:grayscale-0 transition-all"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}; 