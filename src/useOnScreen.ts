import React, { useEffect, useRef, useState } from "react";

interface useOnScreenInterface {
  onScreenCallback?: Function;
  options?: IntersectionObserverInit;
}

const useOnScreen = (args: useOnScreenInterface) => {
  const ref = useRef();
  const [visible, setVisible] = useState<Boolean>(false);

  const handleIntersectionObserver: IntersectionObserverCallback = ([
    entry,
  ]) => {
    setVisible(entry.isIntersecting);
    if (entry.isIntersecting && args?.onScreenCallback) {
      args.onScreenCallback(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersectionObserver, args?.options);

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
  }, [ref]);

  return { ref, visible };
};

export default useOnScreen;
