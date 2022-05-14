import { TextInput, Textarea } from "@mantine/core";
import emailjs from "emailjs-com";

function ContactForm() {
  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_1jqw7s3",
        "template_eef2wpp",
        e.target,
        "GFj7TR0SGgWQfEuQc"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <form className="grid gap-4" onSubmit={sendEmail}>
      <TextInput
        placeholder="first and last name"
        label="Full Name"
        name="name"
        required
      />
      <TextInput
        placeholder="email"
        label="Email address"
        name="email"
        required
      />
      <TextInput
        placeholder="subject"
        label="Subject"
        name="subject"
        required
      />
      <Textarea placeholder="comments" label="your comments" name="comments" />
      <button
        className="border-4 rounded w-1/2 p-2 justify-self-center hover:cursor-pointer"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
