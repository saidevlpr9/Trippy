export default function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-r from-black to-[#017434] p-10 flex justify-between">
        <div className="left">
          <div className="headerLogo text-5xl text-[#b9dcbc] font-bold tracking-wide cursor-pointer transition-transform duration-300 transform hover:scale-110">Trippy</div>
          <p className="text-white mt-5">
            Every Mile Tells a Story, Make Yours Epic !
          </p>
        </div>
        <div className="right text-wrap text-white w-1/4">
          <h2 className=" text-2xl">Trippy Headquarters </h2>
          <p>
            123 Wanderlust Lane Suite 456 Travel City, TX 78901 USA Phone: +1
            (555) 123-4567 Email: support@trippy.com
          </p>
        </div>
      </div>
      <ul className="flex gap-10 text-white bg-gradient-to-r from-black to-[#017434] justify-end items-center pb-5">
        <li>About Us</li>
        <li>Destinations</li>
        <li>How Trippy Works</li>
        <li>FAQ</li>
        <li>Privacy Policy</li>
      </ul>
    </div>
  );
}
