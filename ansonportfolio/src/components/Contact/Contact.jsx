import React, { useState } from 'react';
import './Contact.css';
// Importing icons (you can use your preferred icon set, here I used inline SVGs or you can use libraries like FontAwesome, Material Icons, etc.)
import { UilPhone, UilEnvelope, UilMapMarker, UilMessage } from '@iconscout/react-unicons';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    project: '',
    message: ''
  });

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // For now, just log the form data to the console (or send to a backend)
    console.log('Form Submitted:', formData);
    // You can also add form validation here or integrate with an email API
  };

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Contact Me</h2>
      <p className="section__subtitle">Get in touch!</p>

      <div className="contact_container container grid">
        {/* Contact Information */}
        <div>
          <div className="contact_information">
            <UilPhone className="contact_icon" aria-label="Phone" />
            <div>
              <h3 className="contact_title">Call Me</h3>
              <span className="contact_subtitle">999-777-6666</span>
            </div>
          </div>

          <div className="contact_information">
            <UilEnvelope className="contact_icon" aria-label="Email" />
            <div>
              <h3 className="contact_title">Mail Me</h3>
              <span className="contact_subtitle">anson@gmail.com</span>
            </div>
          </div>

          <div className="contact_information">
            <UilMapMarker className="contact_icon" aria-label="Location"></UilMapMarker>
            <div>
              <h3 className="contact_title">Location</h3>
              <span className="contact_subtitle">Peru, Lima-22</span>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form onSubmit={handleSubmit} className="contact_form">
          <div className="contact_inputs grid">
            {/* Name Input */}
            <div className="contact_content">
              <label htmlFor="name" className="contact_label">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="e.g. Mike Shinoda"
                className="contact_input"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            {/* Email Input */}
            <div className="contact_content">
              <label htmlFor="email" className="contact_label">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="e.g. shinoda@email.com"
                className="contact_input"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
          </div>

          {/* Project Input */}
          <div className="contact_content">
            <label htmlFor="project" className="contact_label">Project</label>
            <input
              id="project"
              name="project"
              type="text"
              placeholder="e.g. UX Design"
              className="contact_input"
              value={formData.project}
              onChange={handleChange}
              required
            />
          </div>

          {/* Message Textarea */}
          <div className="contact_content">
            <label htmlFor="message" className="contact_label">Message</label>
            <textarea
              id="message"
              name="message"
              rows="7"
              className="contact_input"
              placeholder="Write your message here..."
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          {/* Submit Button */}
          <div>
            <button onClick={handleSubmit} type="submit" className="button button-c contact-button">
              Send Message
              <UilMessage className="button_icon" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
