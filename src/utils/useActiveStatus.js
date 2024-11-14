import { useEffect, useState } from "react";

const useActiveStatus = () => {
  const [ActiveStatus, setActiveStatus] = useState(true);
  useEffect(() => {
    window.addEventListener("online", () => {
      setActiveStatus(true);
    });
    window.addEventListener("offline", () => {
      setActiveStatus(false);
    });
  }, []);

  return ActiveStatus;
};

export default useActiveStatus;
