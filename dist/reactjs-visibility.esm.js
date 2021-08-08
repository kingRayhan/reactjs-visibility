import React, { useRef, useState, useEffect } from 'react';

var useVisibility = function useVisibility(args) {
  var ref = useRef();

  var _useState = useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var handleIntersectionObserver = function handleIntersectionObserver(_ref) {
    var entry = _ref[0];
    setVisible(entry.isIntersecting);

    if (args != null && args.onChangeVisibility) {
      args.onChangeVisibility(entry.isIntersecting);
    }
  };

  useEffect(function () {
    var observer = new IntersectionObserver(handleIntersectionObserver, args == null ? void 0 : args.options);

    if (ref.current) {
      // @ts-ignore
      observer.observe(ref.current);
    }

    return function () {
      if (ref.current) {
        // @ts-ignore
        observer.unobserve(ref.current);
      }
    };
  }, [ref]);
  return {
    ref: ref,
    visible: visible
  };
};

var VisibilityObserver = function VisibilityObserver(props) {
  var handleOnScreen = function handleOnScreen(visible) {
    if (props.onChangeVisibility) {
      props.onChangeVisibility(visible);
    }
  };

  var _useVisibility = useVisibility({
    options: props.options,
    onChangeVisibility: handleOnScreen
  }),
      ref = _useVisibility.ref;

  return (// @ts-ignore
    React.createElement("section", {
      ref: ref
    }, props.children)
  );
};

export { VisibilityObserver, useVisibility };
//# sourceMappingURL=reactjs-visibility.esm.js.map
