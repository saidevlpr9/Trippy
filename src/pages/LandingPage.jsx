import InActive from "../Components/InActive";
import Categories from "../sections/Categories";
import Faqs from "../sections/Faqs";
import HeroSection from "../sections/HeroSection";
import HowTrippyWorks from "../sections/HowTrippyWorks";
import OurPackages from "../sections/OurPackages";
import Testimonials from "../sections/Testimonials";
import useActiveStatus from "../utils/useActiveStatus";
const LandingPage = () => {
  const activeStatus = useActiveStatus();

  return activeStatus ? (
    <>
      <HeroSection />
      <HowTrippyWorks />
      <Categories />
      <OurPackages />
      <Testimonials />
      <Faqs />
    </>
  ) : (
    <InActive />
  );
};

export default LandingPage;
