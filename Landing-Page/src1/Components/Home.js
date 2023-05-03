import React from "react";
import BannerBackground from "../Assets/vaccine-vial-with-needle-syringe-background.webp";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Annotate Data to Shape The Future
          </h1>
          <p className="primary-text">
            Streamlined annotation process that simplifies annotating data
            to help build the most robust and acurate machine learning systems. Click below to start now.
          </p>
          <button className="secondary-button">
            Get Started <FiArrowRight />{" "}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
