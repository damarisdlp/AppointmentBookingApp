import React from "react";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <section className="hero_section pt-[60px] 2xl:h-[800px]">
      <div className="container">
        <div className="px-4 mx-auto max-w-screen-md ">
          <h2 className="heading text-center">Contact Us</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text_para">
            Feel free to call any of our locations below for answers to any
            question regarding our services.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-[15px] text-center">
            <div>
              <h3 className="font-bold text-[20px]"> Zona Rio Location</h3>
              <p>Address:</p>
              <Link
                to="https://www.google.com/maps/dir/32.6487006,-116.9499188/casapedica+tijuana/@32.5861659,-117.0728205,12z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x80d948467d109981:0x445ac71db665b28e!2m2!1d-117.0173866!2d32.5220926?entry=ttu"
                className="text-primaryColor font-medium ml-1"
              >
                Blvrd Gral Rodolfo Sánchez Taboada, Zona Río, 22010 Tijuana,
                B.C., Mexico
              </Link>
              <br/>
              <br />
              <p>Hours: </p>
              <p>Mon-Fri: 9AM - 7PM </p>
              <p> Sat-Sun: 9AM - 4PM</p>
              <Link
                to="tel:+52 664 686 6710"
                className="text-primaryColor font-medium ml-1"
              >
                +52 664 686 6710
              </Link>
            </div>

            <div>
              <h3 className="font-bold text-[20px]"> 5 y 10 Location</h3>
              <p>Address:</p>
              <Link
                to="https://www.google.com/maps/dir//casa+pedica+tijuana+5+y+10/data=!4m6!4m5!1m1!4e2!1m2!1m1!1s0x80d939169c809a5b:0x29b002379b40b548?sa=X&ved=2ahUKEwihjYqNqZOCAxUGIEQIHQbFDmMQ9Rd6BAg0EAA&ved=2ahUKEwihjYqNqZOCAxUGIEQIHQbFDmMQ9Rd6BAhGEAQ"
                className="text-primaryColor font-medium ml-1"
              >
                Blvd. Gustavo Díaz Ordaz 838, Guillen, 22106 Tijuana, B.C.,
                Mexico
              </Link>
              <br/>
              <br />
              <p>Hours: </p>
              <p>Mon-Fri: 9AM - 7PM </p>
              <p> Sat: 9AM - 3PM</p>
              <p> Sun: Closed</p>

              <Link
                to="tel:+52 664 688 6417"
                className="text-primaryColor font-medium ml-1"
              >
                +52 664 688 6417
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
