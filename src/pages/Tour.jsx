import UnderConstruction from "../Components/UnderConstruction";
import "../App.css";
import useActiveStatus from "../utils/useActiveStatus";
import InActive from "../Components/InActive";
const Tour = () => {
  const activeStatus = useActiveStatus();
  return activeStatus ? (
    <div className=" bg-black h-screen">
      <div>
        <UnderConstruction />
      </div>
    </div>
  ) : (
    <InActive />
  );
};
export default Tour;
