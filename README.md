# React onScreen

Detect when an element is becoming visible or hidden on the page.

<div align="center">
    <img src="./react-onscreen.jpg"/>
</div>

![npm bundle size](https://img.shields.io/bundlephobia/min/@kingrayhan/react-onscreen)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@kingrayhan/react-onscreen)
[![npm downloads](https://img.shields.io/npm/dt/@kingrayhan/react-onscreen)](https://www.npmjs.com/package/@kingrayhan/react-onscreen)
[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/facebook/react/blob/master/LICENSE)

### Installation

```bash
npm install react-onscreen
```

> ⚠️ This plugin uses the Intersection Observer API that is not supported in every browser (currently supported in Edge, Firefox and Chrome). You need to include a polyfill to make it work on incompatible browsers.

## Detech visibility with hook Hook

```jsx
import React from "react";
import { useOnScreen } from "react-onscreen";

const App = () => {
  const handleOnScreen = () => {
    alert("OnScreen");
  };

  const options = {};
  const { ref, visible } = useOnScreen(handleOnScreen, options);

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

## Options

It's possible to pass the [IntersectionObserver `options` object](https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver#Parameters) using the `intersection`

### License

MIT license, Copyright (c) KingRayhan. For more information see `LICENSE`.
