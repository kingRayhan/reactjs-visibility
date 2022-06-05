import React from "react";
import useVisibility from "./useVisibility";

interface ObserverVisibilityComponentInterface {
  onChangeVisibility: (visibility: boolean) => void;
  options?: IntersectionObserverInit;
  children?: JSX.Element | JSX.Element[];
}

const VisibilityObserver = (props: ObserverVisibilityComponentInterface) => {
  const handleOnScreen = (visible: boolean) => {
    if (props.onChangeVisibility) {
      props.onChangeVisibility(visible);
    }
  };

  const { ref } = useVisibility({
    options: props.options,
    onChangeVisibility: handleOnScreen,
  });

  return (
    // @ts-ignore
    <section ref={ref}>{props.children}</section>
  );
};

export default VisibilityObserver;
