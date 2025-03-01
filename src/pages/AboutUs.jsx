import React from "react";
import "../styles/AboutUs.css";
import Footer from "./Footer";
import Header from './Header';
import {
  FaUsers,
  FaCheckCircle,
  FaBullseye,
  FaEye,
  FaBuilding,
  FaLightbulb,
} from "react-icons/fa";



const AboutUs = () => {
  return (
    <div >
      <Header />
    <div className="about-us-container">
      {/* Meet Our People */}
      <section className="meet-our-member">
        <h2>Meet Our People</h2>
        <p>
          We are a team of passionate professionals committed to excellence.
        </p>
        <div className="people-grid">
          {/* CEO */}
          <div className="people-card">
            <img
              src="https://via.placeholder.com/100?text=👨‍💼"
              alt="John Doe"
              className="people-photo"
            />
            <h3>John Doe</h3>
            <p className="position">Chief Executive Officer</p>
            <p className="intro">
              A visionary leader with 20+ years of experience in the engineering
              industry.
            </p>
          </div>

          {/* COO */}
          <div className="people-card">
            <img
              src="https://via.placeholder.com/100?text=👩‍💼"
              alt="Jane Smith"
              className="people-photo"
            />
            <h3>Jane Smith</h3>
            <p className="position">Chief Operating Officer</p>
            <p className="intro">
              Ensuring smooth operations and driving strategic growth
              initiatives.
            </p>
          </div>

          {/* Lead Engineer */}
          <div className="people-card">
            <img
              src="https://via.placeholder.com/100?text=🧑‍💻"
              alt="Michael Brown"
              className="people-photo"
            />
            <h3>Michael Brown</h3>
            <p className="position">Lead Engineer</p>
            <p className="intro">
              Expert in designing cutting-edge engineering solutions with
              efficiency.
            </p>
          </div>

          {/* Designer */}
          <div className="people-card">
            <img
              src="https://via.placeholder.com/100?text=👨‍🎨"
              alt="Emily Davis"
              className="people-photo"
            />
            <h3>Emily Davis</h3>
            <p className="position">Creative Designer</p>
            <p className="intro">
              Bringing innovation and aesthetics to life through unique designs.
            </p>
          </div>
        </div>
      </section>

      {/* About Us */}
      <section className="about-section">
        <div className="about-container">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Ganlakshmi Engineer Company specializes in providing top-tier
              engineering solutions with a focus on innovation, sustainability,
              and excellence. Our mission is to create cutting-edge solutions
              that redefine industry standards.
            </p>
            <p>
              With a passionate team of experts, we deliver engineering
              excellence to drive success for our clients. We believe in
              quality, precision, and long-term impact.
            </p>
          </div>
          <div className="about-image">
            <img
              src="https://img.freepik.com/free-photo/two-colleagues-factory_1303-14331.jpg?t=st=1740726234~exp=1740729834~hmac=073a6bcc18dbb22f3de2af3d534e58f486e52aa9f2f647ed93b87c595c84238e&w=1060"
              alt="About Us"
            />
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="why-choose-us">
        <h2>Why Choose Us</h2>
        <p className="why-intro">
          Our commitment to quality, innovation, and customer satisfaction sets
          us apart.
        </p>
        <div className="highlights-grid">
          <div className="highlight-card">
            <FaCheckCircle className="icon check-icon" />
            <h3>Quality Assurance</h3>
            <p>We deliver the highest quality standards in every project.</p>
          </div>
          <div className="highlight-card">
            <FaBuilding className="icon" />
            <h3>Industry Expertise</h3>
            <p>
              Decades of experience in engineering and infrastructure solutions.
            </p>
          </div>
          <div className="highlight-card">
            <FaUsers className="icon" />
            <h3>Customer Satisfaction</h3>
            <p>We prioritize client needs with personalized solutions.</p>
          </div>
          <div className="highlight-card">
            <FaLightbulb className="icon" />
            <h3>Innovative Solutions</h3>
            <p>We use cutting-edge technology to bring efficient results.</p>
          </div>
        </div>
      </section>

      <div className="about-container_m">
      {/* Vision */}
      <section className="vision animate-section">
        <h2>
          <FaEye className="icon" /> Our Vision
        </h2>
        <p>
          To be a global leader in innovative and sustainable engineering solutions.
        </p>
      </section>

      {/* Mission */}
      <section className="mission animate-section">
        <h2>
          <FaBullseye className="icon" /> Our Mission
        </h2>
        <p>
          To deliver top-quality engineering solutions while fostering a culture of integrity, sustainability, and growth.
        </p>
      </section>

      {/* Mission Pillars */}
      <section className="mission-pillars animate-section">
        <h2>Mission Pillars</h2>
        <div className="pillars-grid">
          <div className="pillar-card">🏆 Excellence</div>
          <div className="pillar-card">🌍 Sustainability</div>
          <div className="pillar-card">💡 Innovation</div>
          <div className="pillar-card">🤝 Integrity</div>
        </div>
      </section>
    </div>
    </div>
    <Footer />
    </div>
  );
};

export default AboutUs;
