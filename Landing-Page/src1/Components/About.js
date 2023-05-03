import React from "react";
import AboutBackgroundImage from "../Assets/virufy1.webp";
// import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading">About</p>
        <h1 className="primary-heading">
          Virufy Offers COVID Pre-Screening For Patients
        </h1>
        <p className="primary-text">
          Virufy leverages sophisticated machine learning algorithims to test for
          potential COVID-19 viruses without the use of conventional methods.
        </p>
        <p className="primary-text">
          To do that Virufy needs anootated cough samples to build their algorithims, that's where we come in.
          Click below to learn more about Virufy's mission.
        </p>
        <div className="about-buttons-container">
          <form action="https://virufy.org/en/about">
            <button className="secondary-button">Learn More</button>
          </form>
          {/* <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button> */}
        </div>
      </div>
    </div>
  );
};

export default About;
