import React from "react";
import { BsCheck2 } from "react-icons/bs";

const FeatureCard = ({ feature }) => {
  const { featureName, description } = feature;
  return (
    <article className="flex border border-primaryBorder rounded-lg p-4 bg-white gap-2">
      <span>
        <BsCheck2 className="text-green-bright text-2xl" />
      </span>
      <div>
        <h4>{featureName}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default FeatureCard;
