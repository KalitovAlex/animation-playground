import { FC } from "react";
import { BaseCard } from "../../../shared/ui/Card/BaseCard";
import { Image } from "@nextui-org/react";

const teamMembers = [
  {
    name: "John Smith",
    position: "CEO and Founder",
    description:
      "10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy",
    image: "/team/member1.svg",
  },
  {
    name: "Jane Doe",
    position: "Director of Operations",
    description:
      "7+ years of experience in project management and team leadership. Strong organizational and communication skills",
    image: "/team/member2.svg",
  },
  {
    name: "Michael Brown",
    position: "Senior SEO Specialist",
    description:
      "5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization",
    image: "/team/member3.svg",
  },
  {
    name: "Emily Johnson",
    position: "PPC Manager",
    description:
      "3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis",
    image: "/team/member4.svg",
  },
  {
    name: "Brian Williams",
    position: "Social Media Specialist",
    description:
      "4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement",
    image: "/team/member5.svg",
  },
  {
    name: "Sarah Kim",
    position: "Content Creator",
    description:
      "2+ years of experience in writing and editing. Skilled in creating compelling, SEO-optimized content for various industries",
    image: "/team/member6.svg",
  },
];

export const TeamSection: FC = () => {
  return (
    <div className="container mx-auto px-4">
      <div className="mb-16">
        <div className="flex flex-col gap-4">
          <div className="inline-block self-center md:self-start">
            <span className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium shadow-[4px_4px_20px_rgba(0,0,0,0.1)]">
              Team
            </span>
          </div>
          <h2 className="text-4xl font-medium max-w-3xl text-center md:text-left">
            Meet the skilled and experienced team behind our successful digital
            marketing strategies
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {teamMembers.map((member, index) => (
          <BaseCard
            key={index}
            className="p-8 relative overflow-hidden hover:scale-[1.02] transition-transform"
            shadow={true}
          >
            <div className="flex flex-col gap-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-[#B9FF66]">
                      <Image
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-medium">{member.name}</h3>
                    <p className="text-foreground/80">{member.position}</p>
                  </div>
                </div>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-black hover:text-primary transition-colors"
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M6 9H2V21H6V9Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                {member.description}
              </p>
            </div>
          </BaseCard>
        ))}
      </div>

      <div className="flex justify-center mt-12">
        <button className="bg-[#191A23] text-white px-8 py-4 rounded-[14px] text-lg hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-shadow">
          See all team
        </button>
      </div>
    </div>
  );
};
