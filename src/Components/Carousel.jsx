"use client";
import '../App.css';
import { useEffect, useRef, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function TestimonialsCarousel() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 464);
    };

    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 2,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const carouselRef = useRef(null);

  useEffect(() => {
    if (!isMobile && carouselRef.current) {
      carouselRef.current.goToSlide(1);
    }
  }, [isMobile]);

  return (
    <div>


      <Carousel
        ref={carouselRef}
        responsive={responsive}
        focusOnSelect={true}
        centerMode={!isMobile}
        className="carousel-container"
      >
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-4 p-8 w-full max-w-lg bg-white rounded-lg shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-gray-200"></div>
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-semibold leading-tight">
                Made solo travel a breeze.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Trippy's personalized recommendations gave me a seamless experience, allowing me to explore hidden gems I wouldn't have found otherwise. 
                <span className="font-bold"> Highly recommend for any solo adventurer!</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 text-base font-medium">
                  Alex M., solo traveler
                </span>
                
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-4 p-8 w-full max-w-lg bg-white rounded-lg shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-gray-200"></div>
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-semibold leading-tight">
                Made solo travel a breeze.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
              Trippy’s tailored recommendations for family-friendly activities helped us enjoy a stress-free vacation with our kids. We explored enjoyable spots we might have missed otherwise. 
                <span className="font-bold"> A must-try for any family adventure!</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 text-base font-medium">
                Jamie P., family traveler
                </span>
                
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="flex flex-col md:flex-row items-center gap-4 p-8 w-full max-w-lg bg-white rounded-lg shadow-lg">
            <div className="w-20 h-20 rounded-lg bg-gray-200"></div>
            <div className="text-left space-y-4">
              <h3 className="text-2xl font-semibold leading-tight">
                Ideal for couples’ getaways.
              </h3>
              <p className="text-gray-600 font-light leading-relaxed">
                Planning our anniversary trip with Trippy was so easy! The app gave us romantic spots and activities that made our trip unforgettable. 
                <span className="font-bold"> We’ll be using Trippy for our future vacations!</span>
              </p>
              <div className="flex items-center gap-2">
                <span className="text-gray-700 text-base font-medium">
                  Ryan and Mia, couple travelers
                </span>
                
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
