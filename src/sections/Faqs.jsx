import AccordionUsage from "../Components/Accordion";
import { BackgroundBeamsWithCollision } from "../Components/AceternityUi/BackgroundBeams";

export default function Faqs() {
  return (
    <div className="bg-black p-10">
        <h1 className="text-white text-center pb-20">Got Questions? We Got Answers!</h1>
        <BackgroundBeamsWithCollision><AccordionUsage/></BackgroundBeamsWithCollision>
        
    </div>
  )
}