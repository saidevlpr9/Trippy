import "../App.css";
// bg-[#017434]
export default function Header() {
  return (
    <div className="bg-gradient-to-r from-black to-[#017434] headerContainer flex justify-around p-5   items-center">
      <div className="headerLogo text-5xl text-[#b9dcbc] font-bold tracking-wide cursor-pointer transition-transform duration-300 transform hover:scale-110">
        Trippy
      </div>
      <div className="headerLinks flex gap-6 text-xl">
        <a>Home</a>
        <a>About Us</a>
        <a>Contact Us</a>
        <a>Travel Now</a>
      </div>
      <div>
        <button>Login</button>
      </div>
    </div>
  );
}
