import React, { useState } from "react";
import { Link } from "react-router-dom";

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    // Log the form data to the console
    console.log("Form Data:", formData);

    // Example fetch request:
    // fetch('/your-registration-endpoint', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    //   .then((response) => response.json())
    //   .then((data) => {
    //     // Handle the registration response from the server
    //   })
    //   .catch((error) => {
    //     console.error("Error:", error);
    //   });
  };

  return (
    <section className="px-5 xl:px-0">
      <div className="max-w-[700px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-1">
          <div className="rounded-l-lg lg:pl-16 py-10">
            <h3 className="text-headingColor text-[22px] leading-9 font-bold mb-10">
              Create an <span className="text-primaryColor">account</span>
            </h3>

            <form onSubmit={submitHandler}>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="First Name"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder: text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Last Name"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder: text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder: text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="text"
                  placeholder="Username"
                  name="username"
                  value={formData.username}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder: text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>
              <div className="mb-5">
                <input
                  type="password"
                  placeholder="Password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full py-3 border-b border-solid border-[#0066ff61] 
              focus:outline-none
              focus:border-b-primaryColor text-[16px] leading-7 text-headingColor
              placeholder: text-textColor rounded-md cursor-pointer"
                  required
                />
              </div>

              <div className="mt-7">
                <button
                  type="submit"
                  className="w-full bg-primaryColor text-white text-[18px] leading-[30px] rounded-lg px-4 py-3 "
                >
                  Sign Up
                </button>
              </div>

              <p className="mt-5 text-textColor text-center">
                Already have an account?
                <Link to="/login" className="text-primaryColor font-medium ml-1">
                  Login
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUp;
