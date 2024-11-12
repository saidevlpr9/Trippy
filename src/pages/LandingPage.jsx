import Categories from "../sections/Categories";
import Faqs from "../sections/Faqs";
import HeroSection from "../sections/HeroSection";
import HowTrippyWorks from "../sections/HowTrippyWorks";
import OurPackages from "../sections/OurPackages";
import Testimonials from "../sections/Testimonials";
const LandingPage = () => {
  return (
    <>
      <HeroSection />
      <HowTrippyWorks />
      <Categories />
      <OurPackages />
      <Testimonials />
      <Faqs />
    </>
  );
};

export default LandingPage;
