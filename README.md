# React onScreen

Detect when an element is becoming visible or hidden on the page.

<div align="center">
    <img src="react-onscreen.jpg"/>
</div>

![npm bundle size](https://img.shields.io/bundlephobia/min/reactjs-onscreen)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/reactjs-onscreen)
[![npm downloads](https://img.shields.io/npm/dt/@kingrayhan/react-onscreen)](https://www.npmjs.com/package/reactjs-onscreen)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

### Installation

```bash
npm install reactjs-onscreen
```

> ⚠️ This plugin uses the Intersection Observer API that is not supported in every browser (currently supported in Edge, Firefox and Chrome). You need to include a polyfill to make it work on incompatible browsers.

### Detech visibility with `useOnScreen()` Hook

**Example 1**

```jsx
import React from "react";
import { useOnScreen } from "reactjs-onscreen";

const App = () => {
  const handleChangeVisibility = (visible) => {
    if (visible) {
      alert("I am now visible");
    }
  };

  const options = {};

  const { ref, visible } = useOnScreen({
    onChangeVisibility: handleChangeVisibility,
    options,
  });

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

**Example 2**

```jsx
import React from "react";
import { useOnScreen } from "reactjs-onscreen";

const App = () => {
  const { ref, visible } = useOnScreen();

  useEffect(() => {
    if (visible) {
      alert("I am now visible");
    }
  }, [visible]);

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

### Detech visibility with `<Observer>` component

```jsx
import React from "react";
import { useOnScreen } from "reactjs-onscreen";

const App = () => {
  const handleChangeVisibility = (visible) => {
    if (visible) {
      alert("I am now visible");
    }
  };

  const options = {
    rootMargin: "200px",
  };

  console.log(visible);

  return (
    <div>
      <h1 style={{ fontSize: 500 }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magni nam
        exercitationem sit alias perferendis, odit ex optio iure assumenda!
        Voluptatum, nulla. Assumenda iusto nesciunt adipisci totam repellat id
        excepturi minima.
      </h1>

      <Observer onChangeVisibility={handleOnScreen} options={options}>
        Loadmore...
      </Observer>
    </div>
  );
};
```

## Options

It's possible to pass the [IntersectionObserver `options` object](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters) using the `intersection`

### License

MIT license, Copyright (c) KingRayhan. For more information see `LICENSE`.
