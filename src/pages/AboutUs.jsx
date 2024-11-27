import InActive from "../Components/InActive";
import useActiveStatus from "../utils/useActiveStatus";

const AboutUs = () => {
  const activeStatus = useActiveStatus();
  return activeStatus ? (
    <>
      <div className="bg-white">
        <h1 className="text-black text-center py-9">About Us</h1>
        <div className="flex justify-center items-center">
          <div className="p-10 md:px-44">
            <div>
              <p className="text-black text-lg text-pretty">
                Welcome to Trippy, your travel companion app designed to make
                every journey unforgettable. We believe travel is about more
                than just reaching a destination—it’s about the experiences and
                memories you gather along the way.
              </p>
            </div>
            <div className="my-10">
              <h2 className="text-black  text-2xl text-pretty"> Our Mission</h2>
              <p className="text-black text-lg text-pretty">
                Our mission is to make travel easy, accessible, and enjoyable
                for everyone, whether you’re going solo, with family, as a
                couple, or with friends. With personalized recommendations and
                real-time insights, Trippy ensures every journey is seamless and
                memorable.
              </p>
            </div>
            <div className="my-10">
              <h2 className="text-black  text-2xl text-pretty">
                {" "}
                Why Choose Trippy?
              </h2>
              <p className="text-black text-lg text-pretty">
                Created by a team of travel lovers and tech enthusiasts, Trippy
                combines essential travel tools, insider tips, and a supportive
                community. Think of it as your all-in-one guide to finding
                hidden gems, planning your itinerary, and connecting with
                like-minded explorers.
              </p>
            </div>
            <div className="my-10">
              <h2 className="text-black  text-2xl text-pretty">Join Us</h2>
              <p className="text-black text-lg text-pretty">
                Ready to make your next adventure the best one yet? Join the
                Trippy community and let’s explore the world together, one trip
                at a time.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  ) : (
    <InActive />
  );
};
export default AboutUs;
