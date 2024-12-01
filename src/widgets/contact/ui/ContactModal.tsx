import { FC } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalProps,
} from "@nextui-org/react";
import { ContactForm } from "./ContactForm";

interface ContactModalProps extends Omit<ModalProps, "children"> {
  onClose: () => void;
}

export const ContactModal: FC<ContactModalProps> = ({ onClose, ...props }) => {
  return (
    <Modal
      {...props}
      onClose={onClose}
      size="2xl"
      classNames={{
        base: "rounded-[45px]",
        body: "p-0",
      }}
    >
      <ModalContent>
        <div className="grid md:grid-cols-2">
          <div className="p-8">
            <ModalHeader className="flex flex-col gap-1 p-0 mb-8">
              <span className="bg-[#B9FF66] px-6 py-2 rounded-[14px] text-2xl font-medium shadow-[4px_4px_20px_rgba(0,0,0,0.1)] inline-block mb-4">
                Contact Us
              </span>
              <h2 className="text-3xl font-medium">
                Let's Discuss Your Digital Marketing Needs
              </h2>
            </ModalHeader>
            <ModalBody className="p-0">
              <ContactForm onSuccess={onClose} />
            </ModalBody>
          </div>
          <div className="hidden md:block bg-[#F3F3F3] rounded-r-[45px] relative overflow-hidden">
            <div className="absolute inset-0">
              <img
                src="/images/contact/decor.svg"
                alt="Contact decoration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </ModalContent>
    </Modal>
  );
}; 