import React, { useState, useEffect } from "react";
import imgSrc from "./../../../assets/images/recruiter-section.webp";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";
import FeatureCard from "./../../../components/UI/Cards/FeatureCard/FeatureCard";

const AboutRecruiters = () => {
  const [featuresForRecruiters, setFeaturesForRecruiters] = useState([]);

  const fetchFeatures = async () => {
    const res = await fetch("data/featuresForRecruiters.json");
    const data = await res.json();

    setFeaturesForRecruiters(data);
  };

  useEffect(() => {
    fetchFeatures().catch((err) => console.log(err));
  }, []);

  return (
    <section>
      <SectionWrapper className="custome-container flex justify-between items-center flex-col lg:flex-row">
        <div>
          <div>
            <h2>for recruiters</h2>
            <h3>Hire trusted talent. Faster.</h3>
            <p className="text-base md:text-xl font-light">
              Peerlist’s candidate-job matching is based on skills &
              credibility, not popularity.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-10">
            {featuresForRecruiters &&
              featuresForRecruiters.map((feature) => (
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

export default AboutRecruiters;
