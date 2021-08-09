import React from "react";
interface useOnScreenInterface {
    onChangeVisibility?: Function;
    options?: IntersectionObserverInit;
}
declare const useVisibility: (args: useOnScreenInterface) => {
    ref: React.MutableRefObject<undefined>;
    visible: Boolean;
};
export default useVisibility;
