"use client";
import { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideClick } from "../../../hooks/use-outside-click";
import { Link } from "react-router-dom";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState(null);
  const id = useId();
  const ref = useRef(null);

  useEffect(() => {
    function onKeyDown(event) {
      if (event.key === "Escape") {
        setActive(null);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    // Cleanup function to remove event listener and reset overflow style
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0 grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0, transition: { duration: 0.05 } }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  priority
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>
              <div>
                <div className="flex justify-between items-start p-4">
                  <div>
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-medium text-neutral-700 dark:text-neutral-200 text-base"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400 text-base"
                    >
                      {active.description}
                    </motion.p>
                  </div>
                  <Link to={active.ctaLink}>
                    <button
                      // href={active.ctaLink}
                      target="_blank"
                      className="shadow-[0_0_0_3px_#000000_inset] px-6 py-2 bg-transparent border border-black dark:border-white dark:text-white text-black rounded-lg font-bold transform hover:-translate-y-1 transition duration-400 text-nowrap"
                    >
                      {active.ctaText}
                    </button>
                  </Link>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 items-start gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={card.title}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col hover:bg-neutral-600 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col w-full">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-60 w-full rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="flex justify-center items-center flex-col">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-white dark:text-neutral-200 text-center md:text-left text-base"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-white dark:text-neutral-400 text-center md:text-left text-base"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.05 } }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    title: "Backwaters Bliss in Kerala",
    description:
      "Experience the tranquility of Kerala’s backwaters with a stay on a traditional houseboat.",
    src: "https://images.weblogtheworld.com/wp-content/uploads/Ind-Sunset.jpg",
    ctaText: "Book Now",
    ctaLink: "/kerala",
    content: () => (
      <>
        <p>Location: Alleppey, Kumarakom, Vembanad Lake</p>
        <p>Duration: 3 Days / 2 Nights</p>
        <p>Price: ₹15,000</p>
        <p>
          Highlights: Traditional houseboat ride, Scenic landscapes, Authentic
          Kerala cuisine.
        </p>
      </>
    ),
  },
  {
    title: "Himalayan Adventure in Himachal Pradesh",
    description:
      "An exhilarating trek through Himachal’s stunning mountain trails.",
    src: "https://cdn.britannica.com/74/114874-050-6E04C88C/North-Face-Mount-Everest-Tibet-Autonomous-Region.jpg",
    ctaText: "Book Now",
    ctaLink: "/himachalPradesh",
    content: () => (
      <>
        <p>Location: Manali, Rohtang Pass, Solang Valley</p>
        <p>Duration: 5 Days / 4 Nights</p>
        <p>Price: ₹20,000</p>
        <p>Highlights: Mountain trekking, Snow-capped peaks, Scenic valleys.</p>
      </>
    ),
  },
  {
    title: "Desert Safari in Rajasthan",
    description:
      "Explore the Thar Desert with camel rides, cultural performances, and luxury desert camps.",
    src: "https://www.flamingotravels.co.in/blog/wp-content/uploads/2020/12/Rajasthan-Tour-Packages.jpg",
    ctaText: "Book Now",
    ctaLink: "/rajasthan",
    content: () => (
      <>
        <p>Location: Jaisalmer, Sam Sand Dunes, Kuldhara Village</p>
        <p>Duration: 3 Days / 2 Nights</p>
        <p>Price: ₹18,500</p>
        <p>Highlights: Camel ride, Cultural performances, Desert camp stay.</p>
      </>
    ),
  },
  {
    title: "Spiritual Journey in Varanasi",
    description:
      "Discover Varanasi’s spirituality, visiting ancient ghats and temples.",
    src: "https://www.indiatravel.app/wp-content/uploads/2024/04/best-time-to-visit-varanasi.jpg",
    ctaText: "Book Now",
    ctaLink: "/varanasi",
    content: () => (
      <>
        <p>Location: Varanasi, Kashi Vishwanath Temple, Ganges River</p>
        <p>Duration: 2 Days / 1 Night</p>
        <p>Price: ₹10,000</p>
        <p>Highlights: Ganga Aarti, Temple tours, Boat ride on the Ganges.</p>
      </>
    ),
  },
];
