import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from "@nextui-org/react";
import { useState } from "react";

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "About us", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "Pricing", href: "#pricing" },
    { name: "Blog", href: "#blog" },
  ];

  const handleScroll = (href: string) => {
    setIsMenuOpen(false);
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
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className="border-b border-default-200 fixed top-0"
      maxWidth="full"
      height="64px"
    >
      <NavbarContent className="container mx-auto px-4">
        <NavbarBrand>
          <button
            onClick={() => handleScroll("#top")}
            className="flex items-center"
          >
            <Image src="/logo.svg" alt="Positivus" width={100} height={32} />
          </button>
        </NavbarBrand>

        <NavbarContent className="hidden md:flex gap-8" justify="center">
          {menuItems.map((item) => (
            <NavbarItem key={item.href}>
              <button
                onClick={() => handleScroll(item.href)}
                className="text-foreground hover:text-primary transition-colors"
              >
                {item.name}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>

        <NavbarContent justify="end" className="md:flex">
          <NavbarItem className="hidden md:flex">
            <Button
              onClick={() => handleScroll("#contact")}
              variant="bordered"
              className="border-2"
            >
              Request a quote
            </Button>
          </NavbarItem>
          <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden"
          />
        </NavbarContent>
      </NavbarContent>

      <NavbarMenu className="pt-6 px-6 gap-6 h-screen bg-background">
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href} className="flex justify-center">
              <button
                onClick={() => handleScroll(item.href)}
                className="text-foreground hover:text-primary py-2 text-xl font-medium"
              >
                {item.name}
              </button>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem className="flex justify-center">
            <Button
              onClick={() => handleScroll("#contact")}
              variant="bordered"
              size="lg"
              className="border-2 mt-4"
            >
              Request a quote
            </Button>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
