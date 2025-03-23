'use client'
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

type ContactProps = {
  closeForm: () => void;
};

const Contact: React.FC<ContactProps> = ({ closeForm }) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      const formData = new FormData(form.current);
      const firstname = formData.get('firstname') as string;
      const lastname = formData.get('lastname') as string;
      const name = `${firstname} ${lastname}`;
      const title = formData.get('title') as string;
      const subject = formData.get('subject') as string;
      const email = formData.get('email') as string;
      const message = formData.get('message') as string;
      const time = new Date().toLocaleString();

      emailjs
        .send("service_c2eyblx", "template_6dxqp7g", {
          title,
          name,
          subject,
          email,
          time,
          message,
        }, process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY)
        .then(
          (result) => {
            console.log(result.text);
            alert('Message sent successfully!');
            form.current?.reset();
          },
          (error) => {
            console.log(error.text);
            alert('Failed to send message. Please try again.');
          }
        );
    }
  };

  return (
    <main className="contact-form-container w-[90%] max-w-md bg-[url('/images/herodesign.jpg')] bg-cover bg-center m-auto p-6 text-center text-white rounded-lg relative shadow-lg">
      <button
        onClick={closeForm}
        className="absolute top-4 right-4 text-white text-2xl"
        aria-label="Close"
      >
        <i className="bi bi-x-circle-fill"></i>
      </button>

      <div className="bg-[#363648] p-6 rounded-lg">
        <h1 className="text-4xl uppercase font-bold mb-4 tracking-widest">Contact Me</h1>
        <p className="text-lg capitalize font-medium mb-6">
          For any query or collaboration, contact me.
        </p>

        <form ref={form} onSubmit={sendEmail} className="space-y-4">
          <label htmlFor="title" className="block">
            <input
              type="text"
              placeholder="Title"
              id="title"
              name="title"
              required
              className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
            />
          </label>

          <div className="flex gap-4">
            <label htmlFor="firstname" className="flex-1">
              <input
                type="text"
                placeholder="First Name"
                id="firstname"
                name="firstname"
                required
                className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
              />
            </label>
            <label htmlFor="lastname" className="flex-1">
              <input
                type="text"
                placeholder="Last Name"
                id="lastname"
                name="lastname"
                required
                className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
              />
            </label>
          </div>

          <label htmlFor="email" className="block">
            <input
              type="email"
              placeholder="Email"
              id="email"
              name="email"
              required
              className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
            />
          </label>

          <label htmlFor="subject" className="block">
            <input
              type="text"
              placeholder="Subject"
              id="subject"
              name="subject"
              required
              className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
            />
          </label>

          <label htmlFor="message" className="block">
            <textarea
              id="message"
              name="message"
              placeholder="Message"
              rows={4}
              required
              className="w-full border-none bg-transparent outline-none focus:ring-2 focus:ring-white p-3 rounded-lg text-lg"
            ></textarea>
          </label>

          <input
            type="submit"
            value="Submit"
            className="w-full text-xl uppercase bg-[#5c212d] hover:bg-[#832f3a] text-white px-4 py-2 rounded-lg transition-all duration-300 cursor-pointer"
          />
        </form>
      </div>
    </main>
  );
};

export default Contact;

