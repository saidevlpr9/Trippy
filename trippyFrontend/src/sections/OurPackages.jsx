import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { DestinationCard } from "../Components/AceternityUi/DestnationsCard";
import ExpandableCardDemo from "../Components/AceternityUi/PackagesCards";
export default function OurPackages() {
  return (
    <div className="bg-black pb-16">
      <h1 className="text-white text-center pb-10">
        Top Picks for Your Next Adventure
      </h1>

      <ExpandableCardDemo />
    </div>
  );
}
