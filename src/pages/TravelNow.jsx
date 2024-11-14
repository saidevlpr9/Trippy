import { Globe } from "../Components/AceternityUi/Globe";
import InActive from "../Components/InActive";
import useActiveStatus from "../utils/useActiveStatus";
// import UnderConstruction from "../Components/UnderConstruction";

const TravelNow = () => {
  const activeStatus = useActiveStatus();

  return activeStatus ? (
    <>
      <div className="bg-black h-screen">
        <h1 className="text-white text-center p-14">Travel Now</h1>
        {/* <Globe /> */}
      </div>
    </>
  ) : (
    <InActive />
  );
};
export default TravelNow;
