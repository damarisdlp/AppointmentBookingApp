import React from "react";
import block from "../assets/images/block.jpg";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import ServiceList from "../components/Services/ServiceList";


const Home = () => {
  return (
    <>
      {/* ========= hero section ========== */}
      <>
        <section className="hero_section pt-[60px] 2xl:h-[800px]">
          <div className="container">
            <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
              {/* ========= hero content ========== */}
              <div>
                <div className="lg:w-[570px]">
                  <h1
                    className="text-[36px] leading-[46px] 
                    text-headingColor font-[800] 
                      md:text-[50px] md:leading-[70px] max-sm:text-[40px] max-sm:text-center
                      max-sm:pb-10 max-sm:mt-[-4vh]"
                  >
                    We help patients put their best foot forward
                  </h1>
                  <p
                    className="text_para max-sm:text-[15px] 
                  max-sm:text-center"
                  >
                    Random random random text
                  </p>
                  <Link to="/booking">
                    <button className="btn w-[225px] px-2 py-2 flex justify-center items-center max-sm:w-[290px] max-sm:py-2 max-sm:m-auto max-sm:mt-5">
                      Book an Appointment
                    </button>
                  </Link>
                </div>

                {/* ========= hero content ========== */}
                <div className="mt-[30px] lg:mt-[70px] flex flex-col md:flex-row lg:items-center gap-5 lg:gap-[30px] text-center justify-center items-center max-sm:mt-[6vh]">
                  <div>
                    <h2 className="text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor">
                      30+
                    </h2>
                    <span className="w-[150px] h-2 bg-yellowColor rounded-full block mt-[-14px]"></span>
                    <p className="text_para">Years of Experience</p>
                  </div>
                </div>
              </div>
              {/* ========= hero content ========== */}
              <div className="flex gap-[30px] justify-end">
                <div>
                  <img
                    className="w-[370px] h-[600px]"
                    src={block}
                    alt="block"
                  />
                </div>

                <div className="mt-[30px]">
                  <img
                    src={block}
                    alt=""
                    className="w-[270px] h-[270px] mb-[30px]"
                  />
                  <img src={block} alt="" className="w-[270px] h-[270px]" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ========= hero section end ========== */}
        {/* ========= hero section start ========== */}

        <section>
          <div className="container">
            <div className="lg:w-[470px] mx-auto">
              <h2 className="heading text-center">
                Providing the best foot care services
              </h2>
              <p className="text_para text-center">
                Our clinic offers unmatched expert care.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]">
              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img
                    className="w-[168px] h-[150px]"
                    src={block}
                    alt="dibujo medica mesa"
                  />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    {" "}
                    Book an Appointment
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care. From the lab to the clinic.
                  </p>
                  <Link
                    to="/booking"
                    className="w-[44px] h-[44px] rounded-full
                  border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                  justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img
                    className="w-[168px] h-[150px]"
                    src={block}
                    alt="dibujo medica mesa"
                  />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    Find a Location
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care. From the lab to the clinic.
                  </p>
                  <Link
                    to="/contact"
                    className="w-[44px] h-[44px] rounded-full
                 border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                 justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>

              <div className="py-[30px] px-5">
                <div className="flex items-center justify-center">
                  <img
                    className="w-[168px] h-[150px]"
                    src={block}
                    alt="dibujo medica mesa"
                  />
                </div>
                <div className="mt-[30px]">
                  <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
                    View Services
                  </h2>
                  <p className="text-[16px] leading-7 text-textColor font-400 mt-4 text-center">
                    World-class care for everyone. Our health System offers
                    unmatched, expert health care. From the lab to the clinic.
                  </p>
                  <Link
                    to="/services"
                    className="w-[44px] h-[44px] rounded-full
                 border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center
                 justify-center group hover:bg-primaryColor hover:border-none"
                  >
                    <BsArrowRight className="group-hover:text-white w-6 h-5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/*=== hero Section end ===*/}

        {/*=== Services Section ===*/}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">Our medical services</h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched, expert health care.
              </p>
            </div>

            <ServiceList />
          </div>
        </section>
        {/*=== Services Section end ===*/}

        {/* ========= reviews ========== */}
        <section>
          <div className="container">
            <div className="xl:w-[470px] mx-auto">
              <h2 className="heading text-center">What our patients say</h2>
              <p className="text_para text-center">
                World-class care for everyone. Our health System offers
                unmatched,expert health care.
              </p>
            </div>
          </div>
        </section>
      </>
    </>
  );
};

export default Home;
