import "../App.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="bg-gradient-to-r from-black to-[#017434] headerContainer flex justify-around p-5 items-center">
      <Link to="/">
      <div className="headerLogo text-5xl text-[#b9dcbc] font-bold tracking-wide cursor-pointer transition-transform duration-300 transform hover:scale-110 hover:cursor-pointer">
        Trippy
      </div>
      </Link>
      <div className="headerLinks flex gap-6 text-xl">
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
      <div>
        <button className="bg-[#017434] text-white py-2 px-4 ">Login</button>
      </div>
    </div>
  );
}
