import { TextInput, Textarea } from "@mantine/core";

function ContactForm() {
  return (
    <div className="grid gap-4">
      <TextInput placeholder="first and last name" label="Full Name" required />
      <TextInput placeholder="email" label="Email address" required />
      <Textarea placeholder="comments" label="your comments" />
      <button className="border-4 rounded w-1/2 p-2 justify-self-center hover:cursor-pointer">Submit</button>
    </div>
  );
}

export default ContactForm;
