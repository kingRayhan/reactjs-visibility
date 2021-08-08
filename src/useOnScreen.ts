import React, { useEffect, useRef, useState } from "react";

const useOnScreen = (onScreenCallback: Function, options: Object) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const handleIntersectionObserver: IntersectionObserverCallback = ([entry]) => {
    setVisible(entry.isIntersecting);
    if (entry.isIntersecting) {
      onScreenCallback(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options
    );

    if (ref.current) {
      // @ts-ignore
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        // @ts-ignore
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { ref, visible };
};

export default useOnScreen;
