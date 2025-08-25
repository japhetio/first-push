import React, { useState } from 'react';
import './Contact.css'; // Optional: external CSS file
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';

import { motion } from 'framer-motion';
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

 const handleSubmit = (e) => {
    e.preventDefault();
    alert('✅ Message sent successfully!');
    // You can also send the form data to a backend or service here
    console.log('Form submitted:', formData);
  };
  return (<>
     
    <div className="contact-container">
      <h2 className='icon-grid'>📬<FaGithub size={50} color='black' scale={30} className='icon-item'/> <FaLinkedin scale={20} size={50} color='AQUA'className='icon-item' />  <FaEnvelope size={50} scale={30} color='black' className='icon-item'/> <FaFacebook size={50} scale={30} color='BLUE'className='icon-item'/>Contact Me</h2>
      <p>I'd love to hear from you! Whether it's a project, collaboration, or just a hello.</p>
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={formData.email}
          onChange={handleChange }
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
    
   </>
  );
};

export default Contact;

