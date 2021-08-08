import React, { useEffect } from "react";
import useOnScreen from "./useOnScreen";

const Observe = ({ onScreen, options, children }) => {
  const handleOnScreen = (visible) => {
    onScreen(visible);
  };

  const { ref } = useOnScreen(handleOnScreen, options);

  return <div ref={ref}>{children}</div>;
};

export default Observe;
