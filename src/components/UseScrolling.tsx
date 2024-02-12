import { useState, useEffect } from "react";

export default function useScrolling() {
  const [scrolling, setScrolling] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolling(true);
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  return scrolling;
}
