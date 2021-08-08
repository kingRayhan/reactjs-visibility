import React from "react";
import useOnScreen from "../src/useOnScreen";

export default {
  title: "reactjs-onscreend",
};

export const HookDemo = () => {
  const handleOnScreen = (visible) => {
    alert("you are on screen", visible);
  };

  const { ref, visible } = useOnScreen(handleOnScreen);

  return (
    <div style={{ backgroundColor: visible ? "green" : "transparent" }}>
      <h3>
        Boilerplate code for a simple, lightweight and performant react npm
        package. You can read a step-by-step guide of how to create your own
        package here.Boilerplate code for a simple, lightweight and performant
        react npm package. You can read a step-by-step guide of how to create
        your own package here.Boilerplate code for a simple, lightweight and
        performant react npm package. You can read a step-by-step guide of how
        to create your own package here.Boilerplate code for a simple,
        lightweight and performant react npm package. You can read a
        step-by-step guide of how to create your own package here.Boilerplate
        code for a simple, lightweight and performant react npm package. You can
        read a step-by-step guide of how to create your own package
        here.Boilerplate code for a simple, lightweight and performant react npm
        package. You can read a step-by-step guide of how to create your own
        package here.Boilerplate code for a simple, lightweight and performant
        react npm package. You can read a step-by-step guide of how to create
        your own package here.Boilerplate code for a simple, lightweight and
        performant react npm package. You can read a step-by-step guide of how
        to create your own package here.Boilerplate code for a simple,
        lightweight and performant react npm package. You can read a
        step-by-step guide of how to create your own package here.Boilerplate
        code for a simple, lightweight and performant react npm package. You can
        read a step-by-step guide of how to create your own package
        here.Boilerplate code for a simple, lightweight and performant react npm
        package. You can read a step-by-step guide of how to create your own
        package here.Boilerplate code for a simple, lightweight and performant
        react npm package. You can read a step-by-step guide of how to create
        your own package here.Boilerplate code for a simple, lightweight and
        performant react npm package. You can read a step-by-step guide of how
        to create your own package here.Boilerplate code for a simple,
        lightweight and performant react npm package. You can read a
        step-by-step guide of how to create your own package here.Boilerplate
        code for a simple, lightweight and performant react npm package. You can
        read a step-by-step guide of how to create your own package
        here.Boilerplate code for a simple, lightweight and performant react npm
        package. You can read a step-by-step guide of how to create your own
        package here.Boilerplate code for a simple, lightweight and performant
        react npm package. You can read a step-by-step guide of how to create
        your own
      </h3>

      <div ref={ref} style={{ backgroundColor: "green", height: "50vh" }}>
        <h1>Observe me</h1>
      </div>
    </div>
  );
};
