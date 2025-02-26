import React, { useEffect } from "react";
import "../styles/AboutUs.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { motion } from "framer-motion";
import Header from './Header';
import Footer from './Footer';
import { FaCogs, FaRocket, FaUsers, FaGlobe, FaLightbulb, FaHandshake } from "react-icons/fa";

// Sample Team Data
const teamMembers = [
  {
    id: 1,
    name: "Mr. Sudhir Paatil",
    position: "Managing Director",
    photo: "https://randomuser.me/api/portraits/men/1.jpg",
    intro: "He has 25+ years of experience, including 11 years as Chief Engineer, 2 years as Works Manager, and 3 years as Managing Director. He led expansions of sugar plants from 1250 TCD to 3000 TCD and pioneered the erection of a 2500 TCD Sugar Plant with a 22 MW Cogeneration plant.",
  },
  {
    id: 2,
    name: "Mr. Vikas Patil",
    position: "Project Engineer",
    photo: "https://randomuser.me/api/portraits/men/2.jpg",
    intro: "With 25+ years of experience, he has 18+ years as a Project Engineer in Sugar Plant manufacturing companies. He has handled numerous sugar plant erection and commissioning projects in African countries and Vietnam.",
  },
  {
    id: 3,
    name: "Mr. Amarsinh Patil",
    position: "Project Manager",
    photo: "https://randomuser.me/api/portraits/men/3.jpg",
    intro: "An expert in design, installation, and project management with 8+ years of experience in Sugar Plants, Power Plants, Pharmaceuticals, and Cement Plants. Specializes in Electrical & Instrumentation work across India, Africa, and Europe.",
  },
  {
    id: 4,
    name: "Emily White",
    position: "Marketing Lead",
    photo: "https://randomuser.me/api/portraits/women/4.jpg",
    intro: "Creative strategist focused on brand development and outreach.",
  },
  {
    id: 5,
    name: "Michael Green",
    position: "Lead Developer",
    photo: "https://randomuser.me/api/portraits/men/5.jpg",
    intro: "Coding wizard passionate about software architecture and innovation.",
  },
];

const AboutUs = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <div>
      <Header />
      <div className="about-us-container">

        {/* Meet Our People Section */}
        <section className="meet-our-people_about">
          <h2 data-aos="fade-up">Meet Our People</h2>
          <div className="team-container_about">
            {teamMembers.map((member) => (
              <motion.div
                key={member.id}
                className="team-card_about"
                whileHover={{ scale: 1.05 }}
                data-aos="zoom-in"
              >
                <img src={member.photo} alt={member.name} className="team-photo_about" />
                <h3>{member.name}</h3>
                <p className="team-position_about">{member.position}</p>
                <p className="team-intro_about">{member.intro}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* About Us & Why Choose Us Section Side by Side */}
        <div className="about-why-container">
          <section className="about">
            <h2>About Us</h2>
            <p>
              M/s. SAV-Tech Associate was established in 2024, specializing in creating innovative solutions for Sugar, Power Plant, Co-Generation, Distillery & Ethanol, Khandsari & Jaggery businesses. Our services include consultancy, mechanical engineering, electrical & instrumentation, and industrial automation.
            </p>
          </section>

          <section className="why-choose">
            <h2>Why Choose Us?</h2>
            <ul>
              <li>✅ Expert Valuation Services</li>
              <li>✅ Compliance with Regulations</li>
              <li>✅ Accurate & Reliable Financial Assessments</li>
              <li>✅ Trusted by Businesses Worldwide</li>
            </ul>
          </section>
        </div>


        {/* Mission & Vision Section Side by Side */}
        <div className="mission-vision-container">
          <section className="mission">
            <h2>Our Mission</h2>
            <p>
              We deliver cutting-edge solutions with a focus on quality, innovation, and customer satisfaction, contributing to a sustainable and technologically advanced future.
            </p>
          </section>

          <section className="vision">
            <h2>Our Vision</h2>
            <p>
              To be a global leader in providing innovative, sustainable, and integrated solutions, revolutionizing industries and empowering businesses worldwide.
            </p>
          </section>
        </div>


        {/* Mission Pillars Section */}
        <section className="section pillars" data-aos="fade-up">
          <h2>Mission Pillars</h2>
          <div className="pillars-grid">
            <div className="pillar-card" data-aos="zoom-in"><FaCogs className="icon" /><p>Engineering Innovation</p></div>
            <div className="pillar-card" data-aos="zoom-in"><FaRocket className="icon" /><p>Customer Service Excellence</p></div>
            <div className="pillar-card" data-aos="zoom-in"><FaUsers className="icon" /><p>Sustainable Commitment</p></div>
            <div className="pillar-card" data-aos="zoom-in"><FaGlobe className="icon" /><p>International Collaboration</p></div>
            <div className="pillar-card" data-aos="zoom-in"><FaLightbulb className="icon" /><p>Continuous Improvement</p></div>
            <div className="pillar-card" data-aos="zoom-in"><FaHandshake className="icon" /><p>Strong Client Relations</p></div>
          </div>
        </section>

      </div>
      <Footer />
    </div>
  );
};

export default AboutUs;
