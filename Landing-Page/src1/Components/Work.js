import React from "react";
import PickMeals from "../Assets/receiving-icon-2.jpg";
import ChooseMeals from "../Assets/R.png";
import DeliveryMeals from "../Assets/submit.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Get Samples",
      text: "Recieve cough samples from our large database of cough samples to begin annotating.",
    },
    {
      image: ChooseMeals,
      title: "Annotate",
      text: "Annotate the samples based on the annotation options we provide.",
    },
    {
      image: DeliveryMeals,
      title: "Submit",
      text: "Submit the finished annotation and make sure the rating provided is accurate.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          Here is a basic outline of how the annotator works. For more specific examples click learn more.
        </p>
        <button className="secondary-button">Learn More</button>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
