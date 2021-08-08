import React, { useEffect } from "react";
import useOnScreen from "./useOnScreen";


interface ObserveInterface{
  onScreen: Function,
  options: Object,
  children: React.ReactChildren
}


const Observe = ({ onScreen, options, children }: ObserveInterface) => {
  const handleOnScreen = (visible: boolean) => {
    onScreen(visible);
  };

  const { ref } = useOnScreen(handleOnScreen, options);

  return <div ref={ref}>{children}</div>;
};

export default Observe;
