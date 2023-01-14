import React from "react";
import smiley from "./../../../assets/images/smiley.svg";
import SectionWrapper from "../../../components/UI/SectionWrapper/SectionWrapper";
import CreateProfile from "./CreateProfile";

const profileCreateSteps = [
  {
    stepNo: 1,
    step: "Signup",
    time: "1 min",
    instruction:
      "Create your account w/ Google, Twitter or Email. And fill in your basic info. You can import from LinkedIn too.",
  },
  {
    stepNo: 2,
    step: "Setup Profile",
    time: "4 min",
    instruction:
      "One-click integrations with 7+ platforms like GitHub, Dribbble. And import your resume from LinkedIn.",
  },
  {
    stepNo: 3,
    step: "Publish Profile",
    time: "20 sec",
    instruction:
      "Once complete, choose your username and publish your profile!",
  },
];

const CallToAction = () => {
  return (
    <section className="bg-orange-mist">
      <SectionWrapper className="custome-container">
        <div className="text-center mb-16">
          <h3>Getting your Peerlist profile is fast.</h3>
          <p>
            Onboarding takes lesser time than cooking your ramen or maggi. No
            kidding!
          </p>
          <div className="w-fit mx-auto mt-6">
            <img src={smiley} alt="" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 justify-center gap-10 md:gap-8 mb-20">
          {profileCreateSteps.map((data) => (
            <CreateProfile key={data.stepNo} data={data} />
          ))}
        </div>
        <div className="flex justify-center">
          <button>Get Your Peerlist Profile </button>
        </div>
      </SectionWrapper>
    </section>
  );
};

export default CallToAction;
