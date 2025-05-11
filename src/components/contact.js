import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../assets/css/contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ifxclks',
      'template_4i6rt1l',
      form.current,
      'qW3TaQzg9scotGxGf'
    )
    .then(
      (result) => {
        console.log(result.text);
        alert('Message sent successfully!');
        form.current.reset();
      },
      (error) => {
        console.error(error.text);
        alert('Something went wrong. Please try again later.');
      }
    );
  };

  return (
    <section id="contact-me" className="contact-section">
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <h1>Contact Me</h1>
        <br></br>
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" required></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
};

export default Contact;
