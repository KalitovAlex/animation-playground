import { Image } from "@nextui-org/react";
import { Link } from "react-router-dom";

export const Footer = () => {
  const menuItems = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  const socialLinks = [
    { icon: "/social/linkedin.svg", href: "#", label: "LinkedIn" },
    { icon: "/social/facebook.svg", href: "#", label: "Facebook" },
    { icon: "/social/twitter.svg", href: "#", label: "Twitter" },
  ];

  const handleScroll = (href: string) => {
    if (href === "#top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-[#191A23] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column */}
          <div className="space-y-8">
            <div>
              <span className="bg-[#B9FF66] text-black px-6 py-2 rounded-[14px] text-lg font-medium inline-block">
                Contact us:
              </span>
            </div>

            <div className="space-y-4">
              <p>Email: info@positivus.com</p>
              <p>Phone: 555-567-8901</p>
              <p>
                Address: 1234 Main St
                <br />
                Moonstone City, Stardust State 12345
              </p>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <div className="flex flex-col space-y-4">
              <input
                type="email"
                placeholder="Email"
                className="bg-[#292A32] border border-white/10 rounded-full px-6 py-4 focus:outline-none focus:border-[#B9FF66]"
              />
              <button className="bg-[#B9FF66] text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-[#a7e65c] transition-colors">
                Subscribe to news
              </button>
            </div>
          </div>
        </div>

        {/* Menu Items */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8">
          <button
            onClick={() => handleScroll("#top")}
            className="flex items-center"
          >
            <Image
              src="/logo.svg"
              alt="Positivus"
              width={150}
              height={40}
              className="invert"
            />
          </button>

          <nav className="flex flex-wrap justify-center gap-8">
            {menuItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleScroll(item.href)}
                className="text-white hover:text-[#B9FF66] transition-colors"
              >
                {item.name}
              </button>
            ))}
          </nav>

          <div className="flex gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-full p-2 hover:bg-[#B9FF66] transition-colors"
              >
                <Image
                  src={link.icon}
                  alt={link.label}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p>© 2023 Positivus. All Rights Reserved.</p>
          <Link
            to="/privacy"
            className="text-white hover:text-[#B9FF66] transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
