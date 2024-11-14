import InActive from "../Components/InActive";
import UnderConstruction from "../Components/UnderConstruction";
import useActiveStatus from "../utils/useActiveStatus";

const ContactUs = () => {
  const activeStatus = useActiveStatus();
  return activeStatus ? (
    <>
      <div className="bg-black h-screen">
        <h1 className="text-white text-center p-14">Contact Us</h1>
        <UnderConstruction />
      </div>
    </>
  ) : (
    <InActive />
  );
};
export default ContactUs;
