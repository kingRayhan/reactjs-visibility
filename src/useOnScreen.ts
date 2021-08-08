import React, { useEffect, useRef, useState } from "react";

const useOnScreen = (
  onScreenCallback?: Function,
  options?: IntersectionObserverInit
) => {
  const ref = useRef<Element>();
  const [visible, setVisible] = useState<Boolean>(false);

  const handleIntersectionObserver: IntersectionObserverCallback = ([
    entry,
  ]) => {
    setVisible(entry.isIntersecting);
    if (entry.isIntersecting && onScreenCallback) {
      onScreenCallback(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      options
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, options]);

  return { ref, visible };
};

export default useOnScreen;
