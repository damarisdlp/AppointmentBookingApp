import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const Account = ({ user }) => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="px-4 mx-auto max-w-screen-md ">
          <h2 className="heading text-center">Profile Information</h2>
          <div className="grid grid-cols-1 lg:grid-cols-custom gap-[40px] ">
            <div className=" lg:w-[175px]">
              <br />
              <div className="vertical-buttons">
                <button className="bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                  flex-items-center justify-center rounded-[50px]">User Profile</button>
                <button className="bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                  flex-items-center justify-center rounded-[50px]">Appointments</button>
                <button className="bg-primaryColor py-2 px-2 text-white font-[600] w-full h-[44px] 
                  flex-items-center justify-center rounded-[50px]">Payment Details</button>
              </div>
            </div>

            <div className="lg:w-[561px]">
              <br />
              <p>user profile info goes here</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Account;