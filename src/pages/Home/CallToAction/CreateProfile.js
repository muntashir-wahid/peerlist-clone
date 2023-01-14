import React from "react";

const CreateProfile = ({ data }) => {
  const { stepNo, step, time, instruction } = data;

  return (
    <div>
      <div className="bg-orange-dark w-10 h-10 rounded-full flex justify-center items-center mb-4">
        <span>{stepNo}</span>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <h5 className="font-semibold">{step}</h5>
        <p className="text-xs">~{time}</p>
      </div>
      <div>
        <p className="text-sm tracking-normal">{instruction}</p>
      </div>
    </div>
  );
};

export default CreateProfile;
