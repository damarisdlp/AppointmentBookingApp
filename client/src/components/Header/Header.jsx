import { useEffect, useRef } from "react";
import React from "react";
import logo from "../../assets/images/logo.png";
import usrImg from "../../assets/images/avatar.png";
import { NavLink, Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";

const navLinks = [
  {
    path: "/home",
    display: "Home",
  },
  {
    path: "/services",
    display: "Services",
  },
  {
    path: "/booking",
    display: "Book Appointment",
  },
  {
    path: "/contact",
    display: "Contact",
  },
];
const Header = ({ user, onLogout }) => {
  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const handleStickyHeader = () => {
    const handleScroll = () => {
      if (window.scrollY > 80 || document.documentElement.scrollTop > 80) {
        headerRef.current.classList.add("sticky_header");
      } else {
        headerRef.current.classList.remove("sticky_header");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  };

  useEffect(() => {
    handleStickyHeader();
    return () => window.removeEventListener("scroll", handleStickyHeader);
  }, []);

  const toggleMenu = () => {
    const menu = menuRef.current;
    menu.classList.toggle("show_menu");
  };

  return (
    <header
      className="header h-[75px] flex items-center sticky_header "
      ref={headerRef}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          {/* ========= logo ========== */}
          <div>
            <Link to="/">
              <img className="w-[150px]" src={logo} alt="Logo" />
            </Link>{" "}
          </div>

          {/* ========= menu ========== */}
          <div className="navigation" ref={menuRef} onClick={toggleMenu}>
            <ul className="menu flex items-center gap-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <NavLink
                    to={link.path}
                    className={(navClass) =>
                      navClass.isActive
                        ? "text-primaryColor text-[16px] leading-7 font-[600]"
                        : "text-textColor text-[16px] leading-7 font-[500] hover:text-primaryColor"
                    }
                  >
                    {link.display}
                  </NavLink>
                </li>
              ))}
              {user ? (
                <li>
                  <Link to="/account"> My Account </Link>
                </li>
              ) : null}
            </ul>
          </div>

          {/* ========= nav right ========== */}
          <div className="flex items-center gap-4">
            {user ? (
              <div className="hidden">
                <Link to="/">
                  <figure className="w-[40px] h-[40px] rounded-full cursor-pointer">
                    <img
                      src={usrImg}
                      className="w-full rounded-full"
                      alt="user"
                    />
                  </figure>
                </Link>
              </div>
            ) : null}

            {user ? (
                <button
                  onClick={onLogout}
                  className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] 
               flex-items-center justify-center rounded-[50px]"
                >
                  Logout
                </button>
            ) : (
                <Link to="/login">
                  <button
                    className="bg-primaryColor py-2 px-6 text-white font-[600] h-[44px] 
               flex-items-center justify-center rounded-[50px]"
                  >
                    Login
                  </button>
                </Link>
            )}

            <span className="md:hidden" onClick={toggleMenu}>
              <BiMenu className="w-6 h-6 cursor-pointer" />
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
