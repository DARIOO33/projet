"use client";
import React, { useState } from "react";
import "./about.css";
import {
  Globe,
  Users,
  Award,
  MapPin,
  Mail,
  Phone,
  ArrowRight,
} from "lucide-react";
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import Image from "next/image";
export default function page(params) {
  const [activeTab, setActiveTab] = useState("mission");

  return (
    <>
      <div className="about-page">
        {/* Hero Section */}
        <div className="about-hero">
          <div className="hero-content">
            <h1>Explore the World With Us</h1>
            <p>
              Your journey begins here. We craft unforgettable travel
              experiences that turn dreams into memories.
            </p>
            <button className="cta-button">
              Start Planning <ArrowRight className="arrow-icon" />
            </button>
          </div>
        </div>

        {/* Stats Section */}
        <div className="stats-container">
          <div className="stats-grid">
            <div className="stat-card">
              <div className="icon-wrapper">
                <Globe className="icon" />
              </div>
              <h3>100+</h3>
              <p className="stat-label">Destinations</p>
              <p className="stat-sublabel">Worldwide</p>
            </div>
            <div className="stat-card">
              <div className="icon-wrapper">
                <Users className="icon" />
              </div>
              <h3>50,000+</h3>
              <p className="stat-label">Happy Travelers</p>
              <p className="stat-sublabel">And counting</p>
            </div>
            <div className="stat-card">
              <div className="icon-wrapper">
                <Award className="icon" />
              </div>
              <h3>10+</h3>
              <p className="stat-label">Years Experience</p>
              <p className="stat-sublabel">In travel industry</p>
            </div>
          </div>
        </div>

        {/* About Section with Tabs */}
        <div className="about-section">
          <div className="about-content">
            <div className="tab-buttons">
              {[
                { id: "mission", label: "Our Mission" },
                { id: "story", label: "Our Story" },
                { id: "future", label: "Future Vision" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tab-button ${
                    activeTab === tab.id ? "active" : ""
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="tab-content">
              {activeTab === "mission" && (
                <div className="fade-in">
                  <h2>Crafting Perfect Travel Experiences</h2>
                  <p>
                    Our mission is to revolutionize travel planning by making it
                    intuitive, personalized, and enjoyable. We believe everyone
                    deserves to experience the world's wonders without the
                    stress of complex planning.
                  </p>
                </div>
              )}
              {activeTab === "story" && (
                <div className="fade-in">
                  <h2>A Decade of Adventures</h2>
                  <p>
                    Founded in 2014 by a group of travel enthusiasts, we've
                    grown from a small startup to a trusted name in travel
                    planning. Our journey has been about helping others create
                    their perfect journeys.
                  </p>
                </div>
              )}
              {activeTab === "future" && (
                <div className="fade-in">
                  <h2>Looking Ahead</h2>
                  <p>
                    We're building the future of travel planning with AI-powered
                    recommendations, sustainable tourism initiatives, and
                    innovative features that will make travel planning even more
                    seamless and enjoyable.
                  </p>
                </div>
              )}
            </div>
          </div>

          <div className="image-grid">
            <div className="grid-item">
            <Image alt="t" src={img1}  width={500} height={500}/>
            </div>
            <div className="grid-item">
            <Image alt="t" src={img2}  width={500} height={500}/>

            </div>
            <div className="grid-item">
            <Image alt="t" src={img3}  width={500} height={500}/>

            </div>
            <div className="grid-item">
            <Image alt="t" src={img4}  width={500} height={500}/>

            </div>
          </div>
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2>Get in Touch</h2>
          <p className="contact-intro">
            Our team of travel experts is here to help you plan your perfect
            adventure.
          </p>

          <div className="contact-cards">
            <div className="contact-card">
              <div className="contact-icon">
                <MapPin />
              </div>
              <h3>Visit Us</h3>
              <p>
                123 Travel Street
                <br />
                Adventure City, AC 12345
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Mail />
              </div>
              <h3>Email Us</h3>
              <p>
                hello@travelsite.com
                <br />
                support@travelsite.com
              </p>
            </div>

            <div className="contact-card">
              <div className="contact-icon">
                <Phone />
              </div>
              <h3>Call Us</h3>
              <p>
                +1 (555) 123-4567
                <br />
                Mon-Fri, 9am-6pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
