import { useState, useEffect } from "react";

const NO_MOTION_PREFERENCE_QUERY = "(prefers-reduced-motion: no-preference)";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const updateIsDesktop = () => {
      const matches = window.matchMedia(NO_MOTION_PREFERENCE_QUERY).matches;
      setIsDesktop(window.innerWidth > 1024 && matches);
    };

    updateIsDesktop();
    window.addEventListener("resize", updateIsDesktop);

    return () => window.removeEventListener("resize", updateIsDesktop);
  }, []);

  return isDesktop;
};

export default useIsDesktop;
