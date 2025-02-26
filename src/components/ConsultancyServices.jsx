import React from "react";
import "../styles/ConsultancyServices.css";
import Footer from "../pages/Footer";
import Header from '../pages/Header';

const ConsultancyServices = () => {
    return (
        <div>
            <Header />
            <div className="consultancy-container">
                {/* Image Section */}
                <div className="image-container1 fade-in">
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFizBIE_eGqs2C2JL6DvXkvEKUDPQAvOEr1g&s"
                        alt="Consultancy Services"
                        className="image1 zoom-in"
                    />
                </div>

                {/* Information Section */}
                <div className="info-container1 slide-in">
                    <h1 className="consultancy_title">Consultancy Services</h1>
                    <p className="consultancy_description">
                        We provide professional consultancy services for the following:
                    </p>
                    <ul className="consultancy_list">
                        <li>Total Sugar Plant Projects</li>
                        <li>Co-Generation/Power Plant Projects</li>
                        <li>Distillery & Ethanol Plant Projects</li>
                    </ul>
                    <p className="consultancy_description">
                        Our services include:
                    </p>
                    <ul className="consultancy_list">
                        <li>New Project Detailed Project Report (DPR) Preparation</li>
                        <li>Technical Bid Preparation & Evaluation for Projects</li>
                        <li>Design & Drawings Preparation and Approval</li>
                        <li>Stage-wise Machinery Inspection & Erection Work</li>
                        <li>Expansion, Upgradation, & Modernization of Existing Plants</li>
                        <li>Preparation of  financial vibality</li>
                    </ul>
                    <p className="consultancy_additional-info">
                        With years of experience and expertise, we help you achieve operational efficiency and ensure the highest standards of quality for your projects.
                    </p>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ConsultancyServices;
