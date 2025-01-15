"use client";
import React, { useState } from "react";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import "./contact.css";
import Input from "../components/Input";
import Mapcomponent from "./Mapcomponent";
const ContactPage = () => {
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="contact-page">
      <div className="contact-header">
        <h1>Get in Touch</h1>
        <p>
          We'd love to hear from you. Please fill out this form or use our
          contact information below.
        </p>
      </div>

      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact Information</h2>
          <div className="info-cards">
            <div className="info-card">
              <MapPin className="info-icon" />
              <h3>Our Location</h3>
              <p>
                123 Travel Street
                <br />
                Adventure City, AC 12345
              </p>
            </div>

            <div className="info-card">
              <Phone className="info-icon" />
              <h3>Phone Number</h3>
              <p>
                +1 (555) 123-4567
                <br />
                +1 (555) 987-6543
              </p>
            </div>

            <div className="info-card">
              <Mail className="info-icon" />
              <h3>Email Address</h3>
              <p>
                hello@travelsite.com
                <br />
                support@travelsite.com
              </p>
            </div>

            <div className="info-card">
              <Clock className="info-icon" />
              <h3>Working Hours</h3>
              <p>
                Mon - Fri: 9:00 AM - 6:00 PM
                <br />
                Weekend: Closed
              </p>
            </div>
          </div>

          <div className="map-container">
           
            <div className="map-placeholder">
            <Mapcomponent/>
               
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send us a Message</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Full Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="John Doe"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                placeholder="How can we help?"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message here..."
                rows="5"
              ></textarea>
            </div>

            <button type="submit" className="submit-button">
              Send Message
              <Send className="send-icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
