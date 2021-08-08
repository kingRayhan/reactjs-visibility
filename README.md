# React onScreen

Detect when an element is becoming visible or hidden on the page.

### Installation

```bash
npm install react-onscreen
```

> ⚠️ This plugin uses the Intersection Observer API that is not supported in every browser (currently supported in Edge, Firefox and Chrome). You need to include a polyfill to make it work on incompatible browsers.

## Detech visibility with hook Hook

```jsx
import React from "react";
import { useOnScreen } from "../src/index";

const App = () => {
  const handleOnScreen = () => {
    alert("OnScreen");
  };

  const { ref, visible } = useOnScreen(handleOnScreen);

  console.log(visible);

  return (
    <div>
      <h1 style={{ fontSize: 50 }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nam
        exercitationem sit alias perferendis, odit ex optio iure assumenda!
        Voluptatum, nulla. Assumenda iusto nesciunt adipisci totam repellat id
        excepturi minima.
      </h1>

      <div ref={ref}>Loadmore...</div>
    </div>
  );
};
```

### License

MIT license, Copyright (c) KingRayhan. For more information see `LICENSE`.
