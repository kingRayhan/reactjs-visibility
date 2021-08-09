'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var React = require('react');
var React__default = _interopDefault(React);

var useVisibility = function useVisibility(args) {
  var ref = React.useRef();

  var _useState = React.useState(false),
      visible = _useState[0],
      setVisible = _useState[1];

  var handleIntersectionObserver = function handleIntersectionObserver(_ref) {
    var entry = _ref[0];
    setVisible(entry.isIntersecting);

    if (args != null && args.onChangeVisibility) {
      args.onChangeVisibility(entry.isIntersecting);
    }
  };

  React.useEffect(function () {
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
    React__default.createElement("section", {
      ref: ref
    }, props.children)
  );
};

exports.VisibilityObserver = VisibilityObserver;
exports.useVisibility = useVisibility;
//# sourceMappingURL=reactjs-visibility.cjs.development.js.map
