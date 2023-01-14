import React from "react";
import { GrFormCheckmark } from "react-icons/gr";

const FeatureCard = ({ feature }) => {
  const { featureName, description } = feature;
  return (
    <article className="flex border border-primaryBorder rounded-lg p-4 bg-white">
      <span>
        <GrFormCheckmark />
      </span>
      <div>
        <p>{featureName}</p>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
