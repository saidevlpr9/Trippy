import './App.css'
import './index.css'
import Header from './Components/Header.jsx';
import HeroSection from './sections/HeroSection.jsx';
import HowTrippyWorks from './sections/HowTrippyWorks.jsx';
import Categories from './sections/Categories.jsx';
import OurPackages from './sections/OurPackages.jsx';
import UserTestimonials from './sections/UserTestimonials.jsx';
function App() {
  
  return (
    <>
    <Header/>
    <HeroSection/>
    <HowTrippyWorks/>
    <Categories/>
    <OurPackages/>
    <UserTestimonials/>
    </>
      );

}

export default App
