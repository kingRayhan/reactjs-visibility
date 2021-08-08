import React from "react";
interface ObserverVisibilityComponentInterface {
    onChangeVisibility: Function;
    options: IntersectionObserverInit;
    visible: Boolean;
    children: React.ReactChildren;
}
declare const VisibilityObserver: (props: ObserverVisibilityComponentInterface) => JSX.Element;
export default VisibilityObserver;
