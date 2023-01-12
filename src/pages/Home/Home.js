import React from "react";
import AboutIndividuals from "./AboutIndividuals/AboutIndividuals";
import AboutRecruiters from "./AboutRecruiters/AboutRecruiters";
import Banner from "./Banner/Banner";
import CallToAction from "./CallToAction/CallToAction";

const Home = () => {
  return (
    <div className="min-h-screen mt-14">
      <Banner />
      <AboutIndividuals />
      <AboutRecruiters />
      <CallToAction />
    </div>
  );
};

export default Home;
