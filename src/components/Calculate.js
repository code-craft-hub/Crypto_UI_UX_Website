import React from "react";

import CalcForm from "./CalcForm";

const Calculate = () => {
  return (
    <section className="section">
      <div className="container mx-auto">
        {/* text */}
        <div className="text-center">
          <h2 className="section-title" data-aos="fade-up" data-aos-delay="400">
            Check how much you can earn
          </h2>
          <p className="seciton-subtitle text-lg mb-16 max-w-[622px] mx-auto" data-aos="fade-right" data-aos-delay="450">
            Let's check your hash rate to see how much you will earn today.
          </p>
          {/* form */}
          <CalcForm />
        </div>
      </div>
    </section>
  );
};

export default Calculate;
