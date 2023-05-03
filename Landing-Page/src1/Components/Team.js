import React from "react";
import Abiy from "../Assets/Abiy.jpeg";
import Nora from "../Assets/Nora.png";
import Carson from "../Assets/Carson.jpg";
import Mark from "../Assets/Mark.png";
import Augene from "../Assets/Augene.jpg";
import PMIcon from "../Assets/OIP.png";
import FEIcon from "../Assets/FE.png";
import DSIcon from "../Assets/DS.png";
import BEIcon from "../Assets/BE.png";


const Testimonial = () => {
  return (
    <div>
      <p className="primary-subheading">Team</p>
      <h1 className="primary-heading">Meet The Team</h1>
      <div className="team-section-wrapper">
        <div className="testimonial-section-bottom">
          <img src={Abiy} alt="" />
          <p>
          As the project manager, Abiy was responsible for much of the research and planning.
          </p>
          <div className="testimonials-stars-container">
          <img src={PMIcon} alt="" />
          </div>
          <h2>Abiy Abahoy</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={Nora} alt="" />
          <p>
          As the front-end Developer, Nora was responsible for much of the front end design and functionality.
          </p>
          <div className="testimonials-stars-container">
          <img src={FEIcon} alt="" />
          </div>
          <h2>Nora Casey</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={Carson} alt="" />
          <p>
          As the data scientist, Carson was responsible for much of the data filtering and handeling.
          </p>
          <div className="testimonials-stars-container">
          <img src={DSIcon} alt="" />
          </div>
          <h2>Carson Jay Essabhoy</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={Mark} alt="" />
          <p>
          As the back-end developer, Mark was responsible for much of the back-end functionality.
          </p>
          <div className="testimonials-stars-container">
          <img src={BEIcon} alt="" />
          </div>
          <h2>Mark Frazey</h2>
        </div>
        <div className="testimonial-section-bottom">
          <img src={Augene} alt="" />
          <p>
          As the second back-end developer, Augene was also responsible for much of the back-end functionality.
          </p>
          <div className="testimonials-stars-container">
          <img src={BEIcon} alt="" />
          </div>
          <h2>Augene Pak</h2>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
