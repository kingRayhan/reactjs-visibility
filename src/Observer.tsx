import React from "react";
import useOnScreen from "./useOnScreen";

interface ObserverComponentInterface {
  onScreen: Function;
  options: IntersectionObserverInit;
  visible: Boolean,
  children: React.ReactChildren;
}

const Observer = (props: ObserverComponentInterface) => {
  
  const handleOnScreen = (visible: boolean) => {
    props.onScreen(visible);
  };

  const { ref } = useOnScreen({
    onScreenCallback: handleOnScreen,
    options: props.options,
  });

  // @ts-ignore
  return <section ref={ref} {...props}>{props.children}</section>;
};

export default Observer;
