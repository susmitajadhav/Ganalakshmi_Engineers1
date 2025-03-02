import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FaProjectDiagram, FaUserTie, FaGraduationCap, FaCertificate, FaUsers } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import "../styles/Projects.css";



// Customer Logos
const customers = [
  { id: 1, name: "G.M. Sugars", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVaAvEMoDkNVU9kw5GxmqgwQMGRzwdMz20iA&s" },
  { id: 2, name: "Anvisha Sugars", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsDcwXQ2w9u4FMlEf_MMgtV0UGOblUKItSPQ&s" },
  { id: 3, name: "Deccan Sugars", logo: "https://cdn.pixabay.com/photo/2023/02/01/00/54/company-7759278_1280.png" },
  { id: 4, name: "Rupmata Jaggery", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCIMz4eaUQLPv43QzcuOfC_Ai8z7OA44WaHe3WmVcfYJjA9ZM0qmT434Ks9K5ZxqIM3-4&usqp=CAU" },
  { id: 5, name: "X-India Pvt. Ltd.", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSN1Q3VOJFdLdtyUW-eowuvFSfjMOVctDZbVQ&s" },

];


// Team Members
// Team Members 


const Projects = () => {
  const [projects, setProjects] = useState(0);
  const [clients, setClients] = useState(0);
  const [machinery, setMachinery] = useState(0);
  const [electrical, setElectrical] = useState(0);

  useEffect(() => {
    AOS.init({ duration: 1000 });

    const animateCounter = (setter, target) => {
      let count = 0;
      const interval = setInterval(() => {
        setter((prev) => {
          if (prev >= target) {
            clearInterval(interval);
            return target;
          }
          return prev + 1;
        });
      }, 30);
    };

    animateCounter(setProjects, 150);
    animateCounter(setClients, 200);
    animateCounter(setMachinery, 120);
    animateCounter(setElectrical, 180);
  }, []);

  return (
    <>
      <section className="projects-section">
        <div className="projects-header" data-aos="fade-up">
          <h2>Our Achievements</h2>
          <p>We take pride in delivering excellence across multiple domains.</p>
        </div>

        <div className="projects-content">
          <motion.div className="project-card" whileHover={{ scale: 1.08 }}>
            <div className="icon-container">
              <FaProjectDiagram className="icon project-green" />
            </div>
            <h3>{projects.toLocaleString()}+</h3>
            <p>Completed Projects</p>
          </motion.div>

          <motion.div className="project-card" whileHover={{ scale: 1.08 }}>
            <div className="icon-container">
              <FaUserTie className="icon project-red" />
            </div>
            <h3>{clients.toLocaleString()}+</h3>
            <p>Clients Served</p>
          </motion.div>

          <motion.div className="project-card" whileHover={{ scale: 1.08 }}>
            <div className="icon-container">
              <FaGraduationCap className="icon project-orange" />
            </div>
            <h3>{machinery.toLocaleString()}+</h3>
            <p>Custom Machinery</p>
          </motion.div>

          <motion.div className="project-card" whileHover={{ scale: 1.08 }}>
            <div className="icon-container">
              <FaCertificate className="icon project-dark" />
            </div>
            <h3>{electrical.toLocaleString()}+</h3>
            <p>Electrical & Instrumentation</p>
          </motion.div>
        </div>
      </section>

      <div className="clients-container">
        <h2 className="clients-title">Our Valued Clients</h2>
        <div className="clients-grid">
          {customers.map((customer) => (
            <div className="client-item" key={customer.id}>
              <div className="client-content">
                <img src={customer.logo} alt={customer.name} className="client-logo" />
                <div className="client-overlay">
                  <h3 className="client-name">{customer.name}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>


      {/* Meet Our People */}
      <section className="meet-our-member">
        <h2 className="meethead" >Meet Our People</h2>
        <p>
          We are a team of passionate professionals committed to excellence.
        </p>
        <div className="people-grid">
          {/* CEO */}
          <div className="people-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfYc0DrKm8zisZ_NcQkJT_zhsV86GrkAYCQ&s"
              alt="Mr. Amarsinh Patil"
              className="people-photo"
            />
            <h3 >Mr. Amarsinh Patil</h3>
            <p className="position">Chief Executive Officer</p>
            <p className="intro">
              A visionary leader with 20+ years of experience in the engineering
              industry.
            </p>
          </div>

          {/* COO */}
          <div className="people-card">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLfYc0DrKm8zisZ_NcQkJT_zhsV86GrkAYCQ&s"
              alt="Jane Smith"
              className="people-photo"
            />
            <h3>Mr. Ranjitsinh Patil</h3>
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
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKb5B_aLbXOpeHLmqaP8jOqMOfwVal7TXQsQ&s"
              alt="Emily Davis"
              className="people-photo"
            />
            <h3>Mrs. Amarsinh Patil</h3>
            <p className="position">Creative Designer</p>
            <p className="intro">
              Bringing innovation and aesthetics to life through unique designs.
            </p>
          </div>
        </div>
      </section>

    </>
  );
};

export default Projects;
