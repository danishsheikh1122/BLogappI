import React, { useEffect, useState } from "react";

const useScrollHook = (treshold = 10) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handelScroll = () => {
      if (window.scrollY > treshold) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handelScroll);
    return () => window.removeEventListener("scroll", handelScroll);
  }, [treshold]);

  return scrolled;
};

export default useScrollHook;