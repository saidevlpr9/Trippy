import './App.css'
import './index.css'
import Header from './Components/Header.jsx';
import HeroSection from './sections/HeroSection.jsx';
import HowTrippyWorks from './sections/HowTrippyWorks.jsx';
import Categories from './sections/Categories.jsx';
import OurPackages from './sections/OurPackages.jsx';
import Testimonials from './sections/Testimonials.jsx';
import Faqs from './sections/Faqs.jsx';
function App() {
  
  return (
    <>
    <Header/>
    <HeroSection/>
    <HowTrippyWorks/>
    <Categories/>
    <OurPackages/>
    <Testimonials/>
    <Faqs/>
    </>
      );

}

export default App
