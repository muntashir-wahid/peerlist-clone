import React from "react";

const SectionWrapper = ({ children, className }) => {
  return (
    <section className={`custome-container pt-24 pb-16 lg:pb-32 ${className}`}>
      {children}
    </section>
  );
};

export default SectionWrapper;
