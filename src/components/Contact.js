import React, { useState } from "react";
import "../styles/Contact.css";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_i31bxnd",       // replace with your EmailJS service ID
      "template_kfhfd75",      // replace with your EmailJS template ID
      formData,
      "sbQJ4OFXn_gItLqt_"       // replace with your EmailJS public key
    ).then(
      (result) => {
        alert("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          phone: "",
          message: ""
        });
      },
      (error) => {
        alert("Failed to send message. Please try again.");
      }
    );
  };

  return (
    <section id="contact" className="contact-section">
      <h2 className="section-title">Contact Me</h2>
      <form className="contact-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Gmail"
          required
        />
        <input
          type="text"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="Mobile Number"
          required
        />
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Describe your message..."
          rows="5"
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;
