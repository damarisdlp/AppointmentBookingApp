import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { AiOutlineInstagram } from "react-icons/ai";

const socialLinks = [
  {
    path: "https://www.instagram.com/casapedicaoficial/",
    icon: <AiOutlineInstagram className="group-hover:text-white w-6 h-7" />,
  },
];

const quickLinks01 = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
];

const quickLinks02 = [
  {
    path: "/booking",
    display: "Book an Appointment",
  },
  {
    path: "/contact",
    display: "Find a Location",
  },
];

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-16 pt-10">
      <div className="container">
        <div
          className="flex justify-between 
      flex-col md:flex-row flex-wrap gap-[30px]"
        >
          <div>
            <img className="w-[150px]" src={logo} alt="" />
            <p
              className="text-[16px] leading-7 font-[400]
          text-textColor mt-4"
            >
              Copyright {year} developed by Damaris all right reserved.
            </p>

            <div className="flex items-center gap-3 mt-4">
              {socialLinks.map((link, index) => (
                <Link
                  to={link.path}
                  key={index}
                  className="w-9 h-9 border-[#181A1E] 
            rounded-full flex items-center justify-center
            group hover:bg-primaryColor hover:border-none"
                >
                  {link.icon}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              Quick Links
            </h2>
            <ul>
              {quickLinks01.map((item,index) => (
                <li key={index} className="mb-4">
                  <Link
                  to={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h2 class="text-[20px] leading-[30px] font-[700] text-headingColor mb-6">
              I want to:
            </h2>
            <ul>
              {quickLinks02.map((item,index) => (
                <li key={index} className="mb-4">
                  <Link
                  to={item.path}
                  className="text-[16px] leading-7 font-[400] text-textColor"
                  >
                    {item.display}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
