import React from "react";
import ServiceList from "../components/Services/ServiceList";

const Services = () => {
  return (
    <>
      <>
        <section>
          <div className="container">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              View Services
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
              World-class care for everyone. Our health System offers unmatched,
              expert health care. From the lab to the clinic.
            </p>
            <ServiceList />
          </div>
        </section>
      </>
    </>
  );
};

export default Services;
