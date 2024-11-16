import "../App.css";
import { Link } from "react-router-dom";
import Hamburger from "hamburger-react";
import { useState } from "react";

export default function Header() {
  const [isHamActive, setHamActive] = useState(false);

  return (
    <div className="bg-gradient-to-r from-black to-[#017434] headerContainer flex justify-between p-5 items-center">
      <Link to="/">
        <div className="headerLogo text-5xl text-[#b9dcbc] font-bold tracking-wide cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer">
          Trippy
        </div>
      </Link>
      <div className="md:flex gap-6 text-xl hidden">
        <Link to="/" className="text-[#b9dcbc] hover:text-white">
          Home
        </Link>
        <Link to="/aboutUs" className="text-[#b9dcbc] hover:text-white">
          About Us
        </Link>
        <Link to="/contactUs" className="text-[#b9dcbc] hover:text-white">
          Contact Us
        </Link>
        <Link to="/travelNow" className="text-[#b9dcbc] hover:text-white">
          Travel Now
        </Link>
      </div>
      <div className="md:block hidden">
        <Link to="/login">
          <button className="bg-white text-[#017434] py-2 px-4">Login</button>
        </Link>
      </div>
      <div className="md:hidden">
        <Hamburger toggled={isHamActive} toggle={setHamActive} />
      </div>
      {isHamActive && (
        <div className="flex flex-col gap-4 mt-4 absolute top-16 left-0 w-full bg-gradient-to-r from-black to-[#017434] p-5 text-center text-xl">
          <Link
            to="/"
            className="text-[#b9dcbc] hover:text-white"
            onClick={() => setHamActive(false)}
          >
            Home
          </Link>
          <Link
            to="/aboutUs"
            className="text-[#b9dcbc] hover:text-white"
            onClick={() => setHamActive(false)}
          >
            About Us
          </Link>
          <Link
            to="/contactUs"
            className="text-[#b9dcbc] hover:text-white"
            onClick={() => setHamActive(false)}
          >
            Contact Us
          </Link>
          <Link
            to="/travelNow"
            className="text-[#b9dcbc] hover:text-white"
            onClick={() => setHamActive(false)}
          >
            Travel Now
          </Link>
          <Link to="/login">
            <button
              className="bg-white text-[#017434] py-2 px-4"
              onClick={() => setHamActive(false)}
            >
              Login
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
