import { FC } from "react";
import { Form } from "../../../shared/ui/Form/Form";
import { z } from "zod";
import { toast } from "sonner";
import { FormFieldType } from "../../../shared/ui/Form/types";

const schema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormData = z.infer<typeof schema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export const ContactForm: FC<ContactFormProps> = ({ onSuccess }) => {
  const fields: FormFieldType[] = [
    {
      name: "name",
      label: "Name",
      placeholder: "Enter your name",
      required: true,
      type: "text",
    },
    {
      name: "email",
      label: "Email",
      placeholder: "Enter your email",
      required: true,
      type: "text",
    },
    {
      name: "message",
      label: "Message",
      placeholder: "Enter your message",
      required: true,
      type: "text",
    },
  ];

  const handleSubmit = async (data: FormData) => {
    try {
      // Здесь будет логика отправки формы на бэкенд
      console.log("Form data:", data);

      toast.success("Message sent successfully!");
      onSuccess?.();
    } catch (error) {
      console.error(error);
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <Form
      fields={fields}
      onSubmit={handleSubmit}
      schema={schema}
      className="w-full"
    >
      <button
        type="submit"
        className="bg-[#191A23] text-white px-8 py-4 rounded-[14px] text-lg hover:shadow-[4px_4px_0px_0px_rgb(0,0,0)] transition-shadow w-full mt-4"
      >
        Send Message
      </button>
    </Form>
  );
};
