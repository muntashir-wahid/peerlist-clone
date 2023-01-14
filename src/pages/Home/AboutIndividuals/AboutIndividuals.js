import React, { useState, useEffect } from "react";
import imgSrc from "./../../../assets/images/individual-section.webp";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";
import FeatureCard from "./../../../components/UI/Cards/FeatureCard/FeatureCard";

const AboutIndividuals = () => {
  const [featuresForIndividuals, setFeaturesForIndividuals] = useState([]);

  const fetchFeatures = async () => {
    const res = await fetch("data/featuresForIndividuals.json");
    const data = await res.json();

    setFeaturesForIndividuals(data);
  };

  useEffect(() => {
    fetchFeatures().catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <SectionWrapper className="custome-container flex justify-between items-center flex-col lg:flex-row">
        <div>
          <div>
            <h2>for individuals</h2>
            <h3>Most meaningful work profile.</h3>
            <p className="text-base md:text-xl font-light">
              A Peerlist profile can be used as a simple resume or a complete
              portfolio to showcase your proof-of-work.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            {featuresForIndividuals &&
              featuresForIndividuals.map((feature) => (
                <FeatureCard key={feature._id} feature={feature} />
              ))}
          </div>
        </div>
        <div>
          <img src={imgSrc} alt="" />
        </div>
      </SectionWrapper>
    </section>
  );
};

export default AboutIndividuals;
