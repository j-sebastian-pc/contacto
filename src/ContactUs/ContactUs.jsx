import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactUs = () => {
  const refForm = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const serviceId = "service_xq3y8sm";
    const templateId = "template_59mfynj";
    const apikey = "nFp9SiATphHO2Nz80";

    try {
      const result = await emailjs.sendForm(serviceId, templateId, refForm.current, apikey);
      console.log(result.text);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form ref={refForm} onSubmit={handleSubmit} className="form-container">
      <div className="text-center">
        <h2>Contact Us</h2>
        <p>Please fill out this form</p>
      </div>
      <div className="mt-4">
        <label htmlFor="username">Name</label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Name"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Mail@"
          required
        />
      </div>
      <div className="mt-4">
        <label htmlFor="message">Message</label>
        <textarea
          id="message"
          name="message"
          cols="30"
          rows="10"
          maxLength="500"
          placeholder="Type your message"
        ></textarea>
      </div>
      <button className="">
        Enviar
      </button>
    </form>
  );
};

export default ContactUs;
