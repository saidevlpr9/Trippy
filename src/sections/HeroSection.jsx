import "../App";
import { Link } from "react-router-dom";
export default function HeroSection() {
  return (
    <div className="heroSectionContainer">
      <div className="flex flex-col gap-10 items-center mt-10">
        <div>
          {/* <h1 className="text-black">Hey, Explorer! Who&apos;s Coming Along?</h1> */}
          <h1>Every Mile Tells a Story, Make Yours Epic !</h1>
        </div>
        <Link to="/travelNow">
          <button className="ml-6">Travel Now !</button>
        </Link>
      </div>
    </div>
  );
}
