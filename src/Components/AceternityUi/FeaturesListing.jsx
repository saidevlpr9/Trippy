import { cn } from "../../../lib/utils";
import "../../App.css"
import {
    IconPlane,
    IconCalendarEvent,
    IconWallet,
    IconUser,
    IconChecklist,
    IconHelpCircle,
    IconUsers,
    IconMap,
  } from "@tabler/icons-react";

export function FeaturesSectionDemo() {
    const features = [
        {
          title: "Personalized Travel Planning",
          description:
            "Create a profile, share your travel preferences, and let Trippy build a custom itinerary, whether you’re traveling solo, with family, friends, or a partner.",
          icon: <IconCalendarEvent />,
        },
        {
          title: "Interactive Planner",
          description:
            "Our planner provides a tailored, day-by-day itinerary with activity suggestions that match your interests and budget.",
          icon: <IconMap />,
        },
        {
          title: "Easy Booking & Payment",
          description:
            "Select your flights, accommodations, and experiences, then make a single, secure payment. Trippy takes care of everything from there.",
          icon: <IconWallet />,
        },
        {
          title: "Convenient Reminders",
          description:
            "Receive your tickets and confirmations via email and WhatsApp, with reminders to keep you on track at every stage of your trip.",
          icon: <IconPlane />,
        },
        {
          title: "Solo Traveler Connections",
          description:
            "Connect with like-minded travelers, find companions for your journey, and enrich your travel experience with new friends.",
          icon: <IconUsers />,
        },
        {
          title: "Interactive Packing Checklist",
          description:
            "Get a personalized packing list based on your destination, activities, and weather, so you can pack confidently and efficiently.",
          icon: <IconChecklist />,
        },
        {
          title: "Priority Help Desk",
          description:
            "Trippy’s dedicated help desk assists with last-minute changes, travel updates, and questions, providing real-time support as you travel.",
          icon: <IconHelpCircle />,
        },
        {
          title: "Full Support for a Seamless Journey",
          description:
            "From planning to packing to real-time assistance, Trippy ensures a stress-free, enjoyable travel experience from start to finish.",
          icon: <IconUser />,
        },
      ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 relative z-10 py-10 max-w-7xl mx-auto">
      {features.map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

const Feature = ({ title, description, icon, index }) => {
  return (
    <div
      className={cn(
        "flex flex-col lg:border-r py-10 relative group/feature border-neutral-800",
        (index === 0 || index === 4) && "lg:border-l border-neutral-800",
        index < 4 && "lg:border-b border-neutral-800",
        "bg-black text-[#b9dcbc] transition duration-200 hover:bg-gradient-to-r hover:from-black hover:to-[#017434] hover:text-white"
      )}
    >
      {index < 4 ? (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-t  pointer-events-none" />
      ) : (
        <div className="opacity-0 group-hover/feature:opacity-100 transition duration-200 absolute inset-0 h-full w-full bg-gradient-to-b  pointer-events-none" />
      )}
      <div className="mb-4 relative z-10 px-10 text-[#017434] group-hover/feature:text-white">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div
          className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/feature:bg-[#017434] transition-all duration-200 origin-center"
        />
        <span className="customFont group-hover/feature:translate-x-2 transition duration-200 inline-block text-neutral-800 dark:text-neutral-100">
          {title}
        </span>
      </div>
      <p className="customFont text-sm text-neutral-600 dark:text-neutral-300 max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
};
