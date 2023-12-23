import React, { useEffect, useRef, useState } from "react";

interface useOnScreenInterface {
  onChangeVisibility?: (visibility: boolean) => void;
  options?: IntersectionObserverInit;
}

interface useVisibilityReturnType {
  ref: React.MutableRefObject<any>;
  visible: Boolean;
}

const useVisibility = (args: useOnScreenInterface): useVisibilityReturnType => {
  const ref = useRef();
  const [visible, setVisible] = useState<Boolean>(false);

  const handleIntersectionObserver: IntersectionObserverCallback = ([
    entry,
  ]) => {
    setVisible(entry.isIntersecting);

    if (args?.onChangeVisibility) {
      args.onChangeVisibility(entry.isIntersecting);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      handleIntersectionObserver,
      args?.options
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
  }, [ref]);

  return { ref, visible };
};

export default useVisibility;
