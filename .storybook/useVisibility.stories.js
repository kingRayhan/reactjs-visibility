import React from "react";
import { Observe, useOnScreen } from "../src/index";

export default {
  title: "react-onscreend",
};

export const HookDemo = () => {
  const handleOnScreen = (visible) => {
    alert("you are on screen");
  };

  const { ref, visible } = useOnScreen(handleOnScreen, {
    threshold: 0.5,
  });

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

export const ComponentDemo = () => {
  return (
    <div>
      <h1>
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
      </h1>
      <Observe onScreen={() => alert("On screen")} options={{ threshold: 1 }}>
        <h1>Loading....</h1>
      </Observe>
    </div>
  );
};
