import React, { useEffect, useRef, useState } from "react";
/*
let options = {
  rootMargin: '0px',
  threshold: 1.0
}
*/

const useOnScreen = (onScreenCallback, options) => {
  const ref = useRef();
  const [visible, setVisible] = useState(false);

  const handleIntersectionObserver = ([entry]) => {
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

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { ref, visible };
};

export default useOnScreen;
