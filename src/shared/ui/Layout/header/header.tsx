import {
  motion,
  useScroll,
  useTransform,
  AnimatePresence,
} from "framer-motion";
import {
  Button,
  Image,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
} from "@nextui-org/react";
import { useContactModal } from "../../../hooks/useContactModal";
import { ContactModal } from "../../../../widgets/contact/ui/ContactModal";
import { useState } from "react";

export const Header = () => {
  const { isOpen, open, close } = useContactModal();
  const { scrollY } = useScroll();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Анимации для хедера при скролле
  const headerBackground = useTransform(
    scrollY,
    [0, 100],
    ["rgba(255, 255, 255, 0.5)", "rgba(255, 255, 255, 0.95)"]
  );

  const headerBlur = useTransform(
    scrollY,
    [0, 100],
    ["blur(0px)", "blur(10px)"]
  );

  const menuItems = [
    { name: "Services", href: "#services" },
    { name: "Use Cases", href: "#use-cases" },
    { name: "FAQ", href: "#faq" },
    { name: "Team", href: "#team" },
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

  // Добавляем новые анимации
  const headerScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const headerRotateX = useTransform(scrollY, [0, 100], [0, -2]);

  const menuItemVariants = {
    hidden: { opacity: 0, x: 20, rotate: -5 },
    visible: (i: number) => ({
      opacity: 1,
      x: 0,
      rotate: 0,
      transition: {
        delay: i * 0.1,
        type: "spring",
        stiffness: 150,
      },
    }),
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  const logoVariants = {
    initial: { scale: 0.8, rotate: -10 },
    animate: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
      },
    },
    hover: {
      scale: 1.1,
      rotate: [0, -5, 5, 0],
      transition: {
        duration: 0.3,
      },
    },
  };

  return (
    <>
      <motion.div
        style={{
          backgroundColor: headerBackground,
          backdropFilter: headerBlur,
          scale: headerScale,
          rotateX: headerRotateX,
        }}
        className="fixed top-0 left-0 right-0 z-50 transform-gpu"
      >
        <Navbar
          maxWidth="full"
          height="64px"
          className="backdrop-blur-none bg-transparent"
        >
          <NavbarContent className="container mx-auto px-4">
            <NavbarBrand>
              <motion.div
                variants={logoVariants}
                initial="initial"
                animate="animate"
                whileHover="hover"
              >
                <Image
                  src="/logo.svg"
                  alt="Positivus"
                  width={100}
                  height={32}
                />
              </motion.div>
            </NavbarBrand>

            <NavbarContent className="hidden sm:flex gap-8" justify="center">
              {menuItems.map((item, index) => (
                <NavbarItem key={item.href}>
                  <motion.button
                    variants={menuItemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    onClick={() => handleScroll(item.href)}
                    className="text-lg font-medium"
                  >
                    {item.name}
                  </motion.button>
                </NavbarItem>
              ))}
            </NavbarContent>

            <NavbarContent justify="end">
              <NavbarItem>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    onClick={open}
                    className="bg-[#B9FF66] text-black font-medium px-8"
                    size="lg"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </NavbarItem>
            </NavbarContent>

            {/* Добавляем мобильное меню */}
            <NavbarContent className="sm:hidden" justify="end">
              <NavbarMenuToggle
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              />
            </NavbarContent>

            <NavbarMenu
              className="pt-20"
              motionProps={{
                initial: { opacity: 0, y: -20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: -20 },
                transition: { duration: 0.3 },
              }}
            >
              {menuItems.map((item, index) => (
                <NavbarMenuItem key={`${item.href}-mobile`}>
                  <motion.button
                    variants={menuItemVariants}
                    custom={index}
                    initial="hidden"
                    animate="visible"
                    whileHover="hover"
                    onClick={() => {
                      handleScroll(item.href);
                      setIsMenuOpen(false);
                    }}
                    className="w-full text-xl font-medium py-4"
                  >
                    {item.name}
                  </motion.button>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
          </NavbarContent>
        </Navbar>
      </motion.div>

      <AnimatePresence>
        {isOpen && <ContactModal isOpen={isOpen} onClose={close} />}
      </AnimatePresence>
    </>
  );
};
