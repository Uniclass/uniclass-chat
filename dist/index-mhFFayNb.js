var io = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var g = (e, t, r) => (io(e, t, "read from private field"), r ? r.call(e) : t.get(e)), D = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, P = (e, t, r, n) => (io(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var ks = (e, t, r, n) => ({
  set _(s) {
    P(e, t, s, r);
  },
  get _() {
    return g(e, t, n);
  }
}), ee = (e, t, r) => (io(e, t, "access private method"), r);
import * as $ from "react";
import qe, { createContext as Qt, useContext as Sr, useLayoutEffect as Va, useEffect as le, useState as te, useRef as fe, useCallback as Ne, forwardRef as pe, createElement as U, useMemo as En, Children as Dr, isValidElement as On, cloneElement as Pi, Fragment as jt, useReducer as uu, Component as lh } from "react";
import uh, { flushSync as du } from "react-dom";
function Wa(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Bo = { exports: {} }, Wn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Tc;
function dh() {
  return Tc || (Tc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qe, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, p = "@@iterator";
    function v(b) {
      if (b === null || typeof b != "object")
        return null;
      var R = y && b[y] || b[p];
      return typeof R == "function" ? R : null;
    }
    var S = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(b) {
      {
        for (var R = arguments.length, L = new Array(R > 1 ? R - 1 : 0), G = 1; G < R; G++)
          L[G - 1] = arguments[G];
        w("error", b, L);
      }
    }
    function w(b, R, L) {
      {
        var G = S.ReactDebugCurrentFrame, Ee = G.getStackAddendum();
        Ee !== "" && (R += "%s", L = L.concat([Ee]));
        var $e = L.map(function(ge) {
          return String(ge);
        });
        $e.unshift("Warning: " + R), Function.prototype.apply.call(console[b], console, $e);
      }
    }
    var E = !1, x = !1, A = !1, M = !1, k = !1, N;
    N = Symbol.for("react.module.reference");
    function B(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === i || k || b === s || b === l || b === u || M || b === m || E || x || A || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === d || b.$$typeof === o || b.$$typeof === a || b.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === N || b.getModuleId !== void 0));
    }
    function Z(b, R, L) {
      var G = b.displayName;
      if (G)
        return G;
      var Ee = R.displayName || R.name || "";
      return Ee !== "" ? L + "(" + Ee + ")" : L;
    }
    function V(b) {
      return b.displayName || "Context";
    }
    function Pe(b) {
      if (b == null)
        return null;
      if (typeof b.tag == "number" && O("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof b == "function")
        return b.displayName || b.name || null;
      if (typeof b == "string")
        return b;
      switch (b) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case i:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case a:
            var R = b;
            return V(R) + ".Consumer";
          case o:
            var L = b;
            return V(L._context) + ".Provider";
          case c:
            return Z(b, b.render, "ForwardRef");
          case d:
            var G = b.displayName || null;
            return G !== null ? G : Pe(b.type) || "Memo";
          case h: {
            var Ee = b, $e = Ee._payload, ge = Ee._init;
            try {
              return Pe(ge($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var _e = Object.assign, De = 0, Re, ke, Je, Ge, T, I, W;
    function J() {
    }
    J.__reactDisabledLog = !0;
    function q() {
      {
        if (De === 0) {
          Re = console.log, ke = console.info, Je = console.warn, Ge = console.error, T = console.group, I = console.groupCollapsed, W = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: J,
            writable: !0
          };
          Object.defineProperties(console, {
            info: b,
            log: b,
            warn: b,
            error: b,
            group: b,
            groupCollapsed: b,
            groupEnd: b
          });
        }
        De++;
      }
    }
    function me() {
      {
        if (De--, De === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: _e({}, b, {
              value: Re
            }),
            info: _e({}, b, {
              value: ke
            }),
            warn: _e({}, b, {
              value: Je
            }),
            error: _e({}, b, {
              value: Ge
            }),
            group: _e({}, b, {
              value: T
            }),
            groupCollapsed: _e({}, b, {
              value: I
            }),
            groupEnd: _e({}, b, {
              value: W
            })
          });
        }
        De < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = S.ReactCurrentDispatcher, re;
    function ue(b, R, L) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (Ee) {
            var G = Ee.stack.trim().match(/\n( *(at )?)/);
            re = G && G[1] || "";
          }
        return `
` + re + b;
      }
    }
    var ye = !1, de;
    {
      var Ue = typeof WeakMap == "function" ? WeakMap : Map;
      de = new Ue();
    }
    function _(b, R) {
      if (!b || ye)
        return "";
      {
        var L = de.get(b);
        if (L !== void 0)
          return L;
      }
      var G;
      ye = !0;
      var Ee = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = X.current, X.current = null, q();
      try {
        if (R) {
          var ge = function() {
            throw Error();
          };
          if (Object.defineProperty(ge.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ge, []);
            } catch (Ft) {
              G = Ft;
            }
            Reflect.construct(b, [], ge);
          } else {
            try {
              ge.call();
            } catch (Ft) {
              G = Ft;
            }
            b.call(ge.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ft) {
            G = Ft;
          }
          b();
        }
      } catch (Ft) {
        if (Ft && G && typeof Ft.stack == "string") {
          for (var ve = Ft.stack.split(`
`), et = G.stack.split(`
`), Fe = ve.length - 1, ze = et.length - 1; Fe >= 1 && ze >= 0 && ve[Fe] !== et[ze]; )
            ze--;
          for (; Fe >= 1 && ze >= 0; Fe--, ze--)
            if (ve[Fe] !== et[ze]) {
              if (Fe !== 1 || ze !== 1)
                do
                  if (Fe--, ze--, ze < 0 || ve[Fe] !== et[ze]) {
                    var ft = `
` + ve[Fe].replace(" at new ", " at ");
                    return b.displayName && ft.includes("<anonymous>") && (ft = ft.replace("<anonymous>", b.displayName)), typeof b == "function" && de.set(b, ft), ft;
                  }
                while (Fe >= 1 && ze >= 0);
              break;
            }
        }
      } finally {
        ye = !1, X.current = $e, me(), Error.prepareStackTrace = Ee;
      }
      var qr = b ? b.displayName || b.name : "", Cc = qr ? ue(qr) : "";
      return typeof b == "function" && de.set(b, Cc), Cc;
    }
    function K(b, R, L) {
      return _(b, !1);
    }
    function ne(b) {
      var R = b.prototype;
      return !!(R && R.isReactComponent);
    }
    function xe(b, R, L) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return _(b, ne(b));
      if (typeof b == "string")
        return ue(b);
      switch (b) {
        case l:
          return ue("Suspense");
        case u:
          return ue("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case c:
            return K(b.render);
          case d:
            return xe(b.type, R, L);
          case h: {
            var G = b, Ee = G._payload, $e = G._init;
            try {
              return xe($e(Ee), R, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Xe = Object.prototype.hasOwnProperty, Vr = {}, Et = S.ReactDebugCurrentFrame;
    function wt(b) {
      if (b) {
        var R = b._owner, L = xe(b.type, b._source, R ? R.type : null);
        Et.setExtraStackFrame(L);
      } else
        Et.setExtraStackFrame(null);
    }
    function Vf(b, R, L, G, Ee) {
      {
        var $e = Function.call.bind(Xe);
        for (var ge in b)
          if ($e(b, ge)) {
            var ve = void 0;
            try {
              if (typeof b[ge] != "function") {
                var et = Error((G || "React class") + ": " + L + " type `" + ge + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[ge] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw et.name = "Invariant Violation", et;
              }
              ve = b[ge](R, ge, G, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              ve = Fe;
            }
            ve && !(ve instanceof Error) && (wt(Ee), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", G || "React class", L, ge, typeof ve), wt(null)), ve instanceof Error && !(ve.message in Vr) && (Vr[ve.message] = !0, wt(Ee), O("Failed %s type: %s", L, ve.message), wt(null));
          }
      }
    }
    var Wf = Array.isArray;
    function eo(b) {
      return Wf(b);
    }
    function qf(b) {
      {
        var R = typeof Symbol == "function" && Symbol.toStringTag, L = R && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return L;
      }
    }
    function Hf(b) {
      try {
        return vc(b), !1;
      } catch {
        return !0;
      }
    }
    function vc(b) {
      return "" + b;
    }
    function yc(b) {
      if (Hf(b))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qf(b)), vc(b);
    }
    var Vn = S.ReactCurrentOwner, Zf = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, gc, bc, to;
    to = {};
    function Kf(b) {
      if (Xe.call(b, "ref")) {
        var R = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function Yf(b) {
      if (Xe.call(b, "key")) {
        var R = Object.getOwnPropertyDescriptor(b, "key").get;
        if (R && R.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Gf(b, R) {
      if (typeof b.ref == "string" && Vn.current && R && Vn.current.stateNode !== R) {
        var L = Pe(Vn.current.type);
        to[L] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(Vn.current.type), b.ref), to[L] = !0);
      }
    }
    function Qf(b, R) {
      {
        var L = function() {
          gc || (gc = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        L.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function Jf(b, R) {
      {
        var L = function() {
          bc || (bc = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", R));
        };
        L.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var Xf = function(b, R, L, G, Ee, $e, ge) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: R,
        ref: L,
        props: ge,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return ve._store = {}, Object.defineProperty(ve._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ve, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: G
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Ee
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function eh(b, R, L, G, Ee) {
      {
        var $e, ge = {}, ve = null, et = null;
        L !== void 0 && (yc(L), ve = "" + L), Yf(R) && (yc(R.key), ve = "" + R.key), Kf(R) && (et = R.ref, Gf(R, Ee));
        for ($e in R)
          Xe.call(R, $e) && !Zf.hasOwnProperty($e) && (ge[$e] = R[$e]);
        if (b && b.defaultProps) {
          var Fe = b.defaultProps;
          for ($e in Fe)
            ge[$e] === void 0 && (ge[$e] = Fe[$e]);
        }
        if (ve || et) {
          var ze = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ve && Qf(ge, ze), et && Jf(ge, ze);
        }
        return Xf(b, ve, et, Ee, G, Vn.current, ge);
      }
    }
    var ro = S.ReactCurrentOwner, xc = S.ReactDebugCurrentFrame;
    function Wr(b) {
      if (b) {
        var R = b._owner, L = xe(b.type, b._source, R ? R.type : null);
        xc.setExtraStackFrame(L);
      } else
        xc.setExtraStackFrame(null);
    }
    var no;
    no = !1;
    function so(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function wc() {
      {
        if (ro.current) {
          var b = Pe(ro.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function th(b) {
      {
        if (b !== void 0) {
          var R = b.fileName.replace(/^.*[\\\/]/, ""), L = b.lineNumber;
          return `

Check your code at ` + R + ":" + L + ".";
        }
        return "";
      }
    }
    var Sc = {};
    function rh(b) {
      {
        var R = wc();
        if (!R) {
          var L = typeof b == "string" ? b : b.displayName || b.name;
          L && (R = `

Check the top-level render call using <` + L + ">.");
        }
        return R;
      }
    }
    function _c(b, R) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var L = rh(R);
        if (Sc[L])
          return;
        Sc[L] = !0;
        var G = "";
        b && b._owner && b._owner !== ro.current && (G = " It was passed a child from " + Pe(b._owner.type) + "."), Wr(b), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, G), Wr(null);
      }
    }
    function Ec(b, R) {
      {
        if (typeof b != "object")
          return;
        if (eo(b))
          for (var L = 0; L < b.length; L++) {
            var G = b[L];
            so(G) && _c(G, R);
          }
        else if (so(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var Ee = v(b);
          if (typeof Ee == "function" && Ee !== b.entries)
            for (var $e = Ee.call(b), ge; !(ge = $e.next()).done; )
              so(ge.value) && _c(ge.value, R);
        }
      }
    }
    function nh(b) {
      {
        var R = b.type;
        if (R == null || typeof R == "string")
          return;
        var L;
        if (typeof R == "function")
          L = R.propTypes;
        else if (typeof R == "object" && (R.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        R.$$typeof === d))
          L = R.propTypes;
        else
          return;
        if (L) {
          var G = Pe(R);
          Vf(L, b.props, "prop", G, b);
        } else if (R.PropTypes !== void 0 && !no) {
          no = !0;
          var Ee = Pe(R);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Ee || "Unknown");
        }
        typeof R.getDefaultProps == "function" && !R.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function sh(b) {
      {
        for (var R = Object.keys(b.props), L = 0; L < R.length; L++) {
          var G = R[L];
          if (G !== "children" && G !== "key") {
            Wr(b), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", G), Wr(null);
            break;
          }
        }
        b.ref !== null && (Wr(b), O("Invalid attribute `ref` supplied to `React.Fragment`."), Wr(null));
      }
    }
    function Oc(b, R, L, G, Ee, $e) {
      {
        var ge = B(b);
        if (!ge) {
          var ve = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var et = th(Ee);
          et ? ve += et : ve += wc();
          var Fe;
          b === null ? Fe = "null" : eo(b) ? Fe = "array" : b !== void 0 && b.$$typeof === t ? (Fe = "<" + (Pe(b.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof b, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, ve);
        }
        var ze = eh(b, R, L, Ee, $e);
        if (ze == null)
          return ze;
        if (ge) {
          var ft = R.children;
          if (ft !== void 0)
            if (G)
              if (eo(ft)) {
                for (var qr = 0; qr < ft.length; qr++)
                  Ec(ft[qr], b);
                Object.freeze && Object.freeze(ft);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ec(ft, b);
        }
        return b === n ? sh(ze) : nh(ze), ze;
      }
    }
    function ih(b, R, L) {
      return Oc(b, R, L, !0);
    }
    function oh(b, R, L) {
      return Oc(b, R, L, !1);
    }
    var ah = oh, ch = ih;
    Wn.Fragment = n, Wn.jsx = ah, Wn.jsxs = ch;
  }()), Wn;
}
var qn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rc;
function fh() {
  if (Rc)
    return qn;
  Rc = 1;
  var e = qe, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function o(a, c, l) {
    var u, d = {}, h = null, m = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (m = c.ref);
    for (u in c)
      n.call(c, u) && !i.hasOwnProperty(u) && (d[u] = c[u]);
    if (a && a.defaultProps)
      for (u in c = a.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: a, key: h, ref: m, props: d, _owner: s.current };
  }
  return qn.Fragment = r, qn.jsx = o, qn.jsxs = o, qn;
}
process.env.NODE_ENV === "production" ? Bo.exports = fh() : Bo.exports = dh();
var f = Bo.exports, Ln = class {
  constructor() {
    this.listeners = /* @__PURE__ */ new Set(), this.subscribe = this.subscribe.bind(this);
  }
  subscribe(e) {
    return this.listeners.add(e), this.onSubscribe(), () => {
      this.listeners.delete(e), this.onUnsubscribe();
    };
  }
  hasListeners() {
    return this.listeners.size > 0;
  }
  onSubscribe() {
  }
  onUnsubscribe() {
  }
}, Cn = typeof window > "u" || "Deno" in window;
function vt() {
}
function hh(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Vo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function fu(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function Ac(e, t) {
  const {
    type: r = "all",
    exact: n,
    fetchStatus: s,
    predicate: i,
    queryKey: o,
    stale: a
  } = e;
  if (o) {
    if (n) {
      if (t.queryHash !== qa(o, t.options))
        return !1;
    } else if (!es(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || typeof s < "u" && s !== t.state.fetchStatus || i && !i(t));
}
function Nc(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Ur(t.options.mutationKey) !== Ur(i))
        return !1;
    } else if (!es(t.options.mutationKey, i))
      return !1;
  }
  return !(n && t.state.status !== n || s && !s(t));
}
function qa(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ur)(e);
}
function Ur(e) {
  return JSON.stringify(
    e,
    (t, r) => Wo(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function es(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !es(e[r], t[r])) : !1;
}
function hu(e, t) {
  if (e === t)
    return e;
  const r = Pc(e) && Pc(t);
  if (r || Wo(e) && Wo(t)) {
    const n = r ? e.length : Object.keys(e).length, s = r ? t : Object.keys(t), i = s.length, o = r ? [] : {};
    let a = 0;
    for (let c = 0; c < i; c++) {
      const l = r ? c : s[c];
      o[l] = hu(e[l], t[l]), o[l] === e[l] && a++;
    }
    return n === i && a === n ? e : o;
  }
  return t;
}
function ai(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Pc(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function Wo(e) {
  if (!$c(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!$c(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function $c(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function ph(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function qo(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? hu(e, t) : t;
}
function mh(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function vh(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Rr, lr, tn, Xl, yh = (Xl = class extends Ln {
  constructor() {
    super();
    D(this, Rr, void 0);
    D(this, lr, void 0);
    D(this, tn, void 0);
    P(this, tn, (t) => {
      if (!Cn && window.addEventListener) {
        const r = () => t();
        return window.addEventListener("visibilitychange", r, !1), () => {
          window.removeEventListener("visibilitychange", r);
        };
      }
    });
  }
  onSubscribe() {
    g(this, lr) || this.setEventListener(g(this, tn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = g(this, lr)) == null || t.call(this), P(this, lr, void 0));
  }
  setEventListener(t) {
    var r;
    P(this, tn, t), (r = g(this, lr)) == null || r.call(this), P(this, lr, t((n) => {
      typeof n == "boolean" ? this.setFocused(n) : this.onFocus();
    }));
  }
  setFocused(t) {
    g(this, Rr) !== t && (P(this, Rr, t), this.onFocus());
  }
  onFocus() {
    this.listeners.forEach((t) => {
      t();
    });
  }
  isFocused() {
    var t;
    return typeof g(this, Rr) == "boolean" ? g(this, Rr) : ((t = globalThis.document) == null ? void 0 : t.visibilityState) !== "hidden";
  }
}, Rr = new WeakMap(), lr = new WeakMap(), tn = new WeakMap(), Xl), ci = new yh(), rn, ur, nn, eu, gh = (eu = class extends Ln {
  constructor() {
    super();
    D(this, rn, !0);
    D(this, ur, void 0);
    D(this, nn, void 0);
    P(this, nn, (t) => {
      if (!Cn && window.addEventListener) {
        const r = () => t(!0), n = () => t(!1);
        return window.addEventListener("online", r, !1), window.addEventListener("offline", n, !1), () => {
          window.removeEventListener("online", r), window.removeEventListener("offline", n);
        };
      }
    });
  }
  onSubscribe() {
    g(this, ur) || this.setEventListener(g(this, nn));
  }
  onUnsubscribe() {
    var t;
    this.hasListeners() || ((t = g(this, ur)) == null || t.call(this), P(this, ur, void 0));
  }
  setEventListener(t) {
    var r;
    P(this, nn, t), (r = g(this, ur)) == null || r.call(this), P(this, ur, t(this.setOnline.bind(this)));
  }
  setOnline(t) {
    g(this, rn) !== t && (P(this, rn, t), this.listeners.forEach((n) => {
      n(t);
    }));
  }
  isOnline() {
    return g(this, rn);
  }
}, rn = new WeakMap(), ur = new WeakMap(), nn = new WeakMap(), eu), ts = new gh();
function bh(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function $i(e) {
  return (e ?? "online") === "online" ? ts.isOnline() : !0;
}
var pu = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function oo(e) {
  return e instanceof pu;
}
function mu(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const a = new Promise((v, S) => {
    i = v, o = S;
  }), c = (v) => {
    var S;
    n || (m(new pu(v)), (S = e.abort) == null || S.call(e));
  }, l = () => {
    t = !0;
  }, u = () => {
    t = !1;
  }, d = () => !ci.isFocused() || e.networkMode !== "always" && !ts.isOnline(), h = (v) => {
    var S;
    n || (n = !0, (S = e.onSuccess) == null || S.call(e, v), s == null || s(), i(v));
  }, m = (v) => {
    var S;
    n || (n = !0, (S = e.onError) == null || S.call(e, v), s == null || s(), o(v));
  }, y = () => new Promise((v) => {
    var S;
    s = (O) => {
      const w = n || !d();
      return w && v(O), w;
    }, (S = e.onPause) == null || S.call(e);
  }).then(() => {
    var v;
    s = void 0, n || (v = e.onContinue) == null || v.call(e);
  }), p = () => {
    if (n)
      return;
    let v;
    try {
      v = e.fn();
    } catch (S) {
      v = Promise.reject(S);
    }
    Promise.resolve(v).then(h).catch((S) => {
      var A;
      if (n)
        return;
      const O = e.retry ?? (Cn ? 0 : 3), w = e.retryDelay ?? bh, E = typeof w == "function" ? w(r, S) : w, x = O === !0 || typeof O == "number" && r < O || typeof O == "function" && O(r, S);
      if (t || !x) {
        m(S);
        return;
      }
      r++, (A = e.onFail) == null || A.call(e, r, S), ph(E).then(() => {
        if (d())
          return y();
      }).then(() => {
        t ? m(S) : p();
      });
    });
  };
  return $i(e.networkMode) ? p() : y().then(p), {
    promise: a,
    cancel: c,
    continue: () => (s == null ? void 0 : s()) ? a : Promise.resolve(),
    cancelRetry: l,
    continueRetry: u
  };
}
function xh() {
  let e = [], t = 0, r = (h) => {
    h();
  }, n = (h) => {
    h();
  }, s = (h) => setTimeout(h, 0);
  const i = (h) => {
    s = h;
  }, o = (h) => {
    let m;
    t++;
    try {
      m = h();
    } finally {
      t--, t || l();
    }
    return m;
  }, a = (h) => {
    t ? e.push(h) : s(() => {
      r(h);
    });
  }, c = (h) => (...m) => {
    a(() => {
      h(...m);
    });
  }, l = () => {
    const h = e;
    e = [], h.length && s(() => {
      n(() => {
        h.forEach((m) => {
          r(m);
        });
      });
    });
  };
  return {
    batch: o,
    batchCalls: c,
    schedule: a,
    setNotifyFunction: (h) => {
      r = h;
    },
    setBatchNotifyFunction: (h) => {
      n = h;
    },
    setScheduler: i
  };
}
var Ve = xh(), Ar, tu, vu = (tu = class {
  constructor() {
    D(this, Ar, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Vo(this.gcTime) && P(this, Ar, setTimeout(() => {
      this.optionalRemove();
    }, this.gcTime));
  }
  updateGcTime(e) {
    this.gcTime = Math.max(
      this.gcTime || 0,
      e ?? (Cn ? 1 / 0 : 5 * 60 * 1e3)
    );
  }
  clearGcTimeout() {
    g(this, Ar) && (clearTimeout(g(this, Ar)), P(this, Ar, void 0));
  }
}, Ar = new WeakMap(), tu), sn, on, ht, dr, pt, We, ds, Nr, an, Qs, St, zt, ru, wh = (ru = class extends vu {
  constructor(t) {
    super();
    D(this, an);
    D(this, St);
    D(this, sn, void 0);
    D(this, on, void 0);
    D(this, ht, void 0);
    D(this, dr, void 0);
    D(this, pt, void 0);
    D(this, We, void 0);
    D(this, ds, void 0);
    D(this, Nr, void 0);
    P(this, Nr, !1), P(this, ds, t.defaultOptions), ee(this, an, Qs).call(this, t.options), P(this, We, []), P(this, ht, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, P(this, sn, t.state || Sh(this.options)), this.state = g(this, sn), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !g(this, We).length && this.state.fetchStatus === "idle" && g(this, ht).remove(this);
  }
  setData(t, r) {
    const n = qo(this.state.data, t, this.options);
    return ee(this, St, zt).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    ee(this, St, zt).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = g(this, dr);
    return (n = g(this, pt)) == null || n.cancel(t), r ? r.then(vt).catch(vt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(g(this, sn));
  }
  isActive() {
    return g(this, We).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || g(this, We).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !fu(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = g(this, We).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = g(this, pt)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = g(this, We).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = g(this, pt)) == null || r.continue();
  }
  addObserver(t) {
    g(this, We).includes(t) || (g(this, We).push(t), this.clearGcTimeout(), g(this, ht).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    g(this, We).includes(t) && (P(this, We, g(this, We).filter((r) => r !== t)), g(this, We).length || (g(this, pt) && (g(this, Nr) ? g(this, pt).cancel({ revert: !0 }) : g(this, pt).cancelRetry()), this.scheduleGc()), g(this, ht).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return g(this, We).length;
  }
  invalidate() {
    this.state.isInvalidated || ee(this, St, zt).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var l, u, d, h;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (g(this, dr))
        return (l = g(this, pt)) == null || l.continueRetry(), g(this, dr);
    }
    if (t && ee(this, an, Qs).call(this, t), !this.options.queryFn) {
      const m = g(this, We).find((y) => y.options.queryFn);
      m && ee(this, an, Qs).call(this, m.options);
    }
    process.env.NODE_ENV !== "production" && (Array.isArray(this.options.queryKey) || console.error(
      "As of v4, queryKey needs to be an Array. If you are using a string like 'repoData', please change it to an Array, e.g. ['repoData']"
    ));
    const n = new AbortController(), s = {
      queryKey: this.queryKey,
      meta: this.meta
    }, i = (m) => {
      Object.defineProperty(m, "signal", {
        enumerable: !0,
        get: () => (P(this, Nr, !0), n.signal)
      });
    };
    i(s);
    const o = () => this.options.queryFn ? (P(this, Nr, !1), this.options.persister ? this.options.persister(
      this.options.queryFn,
      s,
      this
    ) : this.options.queryFn(
      s
    )) : Promise.reject(
      new Error(`Missing queryFn: '${this.options.queryHash}'`)
    ), a = {
      fetchOptions: r,
      options: this.options,
      queryKey: this.queryKey,
      state: this.state,
      fetchFn: o
    };
    i(a), (u = this.options.behavior) == null || u.onFetch(
      a,
      this
    ), P(this, on, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && ee(this, St, zt).call(this, { type: "fetch", meta: (h = a.fetchOptions) == null ? void 0 : h.meta });
    const c = (m) => {
      var y, p, v, S;
      oo(m) && m.silent || ee(this, St, zt).call(this, {
        type: "error",
        error: m
      }), oo(m) || ((p = (y = g(this, ht).config).onError) == null || p.call(
        y,
        m,
        this
      ), (S = (v = g(this, ht).config).onSettled) == null || S.call(
        v,
        this.state.data,
        m,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return P(this, pt, mu({
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (m) => {
        var y, p, v, S;
        if (typeof m > "u") {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), c(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(m), (p = (y = g(this, ht).config).onSuccess) == null || p.call(y, m, this), (S = (v = g(this, ht).config).onSettled) == null || S.call(
          v,
          m,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: c,
      onFail: (m, y) => {
        ee(this, St, zt).call(this, { type: "failed", failureCount: m, error: y });
      },
      onPause: () => {
        ee(this, St, zt).call(this, { type: "pause" });
      },
      onContinue: () => {
        ee(this, St, zt).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode
    })), P(this, dr, g(this, pt).promise), g(this, dr);
  }
}, sn = new WeakMap(), on = new WeakMap(), ht = new WeakMap(), dr = new WeakMap(), pt = new WeakMap(), We = new WeakMap(), ds = new WeakMap(), Nr = new WeakMap(), an = new WeakSet(), Qs = function(t) {
  this.options = { ...g(this, ds), ...t }, this.updateGcTime(this.options.gcTime);
}, St = new WeakSet(), zt = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          fetchFailureCount: t.failureCount,
          fetchFailureReason: t.error
        };
      case "pause":
        return {
          ...n,
          fetchStatus: "paused"
        };
      case "continue":
        return {
          ...n,
          fetchStatus: "fetching"
        };
      case "fetch":
        return {
          ...n,
          fetchFailureCount: 0,
          fetchFailureReason: null,
          fetchMeta: t.meta ?? null,
          fetchStatus: $i(this.options.networkMode) ? "fetching" : "paused",
          ...!n.dataUpdatedAt && {
            error: null,
            status: "pending"
          }
        };
      case "success":
        return {
          ...n,
          data: t.data,
          dataUpdateCount: n.dataUpdateCount + 1,
          dataUpdatedAt: t.dataUpdatedAt ?? Date.now(),
          error: null,
          isInvalidated: !1,
          status: "success",
          ...!t.manual && {
            fetchStatus: "idle",
            fetchFailureCount: 0,
            fetchFailureReason: null
          }
        };
      case "error":
        const s = t.error;
        return oo(s) && s.revert && g(this, on) ? { ...g(this, on), fetchStatus: "idle" } : {
          ...n,
          error: s,
          errorUpdateCount: n.errorUpdateCount + 1,
          errorUpdatedAt: Date.now(),
          fetchFailureCount: n.fetchFailureCount + 1,
          fetchFailureReason: s,
          fetchStatus: "idle",
          status: "error"
        };
      case "invalidate":
        return {
          ...n,
          isInvalidated: !0
        };
      case "setState":
        return {
          ...n,
          ...t.state
        };
    }
  };
  this.state = r(this.state), Ve.batch(() => {
    g(this, We).forEach((n) => {
      n.onQueryUpdate();
    }), g(this, ht).notify({ query: this, type: "updated", action: t });
  });
}, ru);
function Sh(e) {
  const t = typeof e.initialData == "function" ? e.initialData() : e.initialData, r = typeof t < "u", n = r ? typeof e.initialDataUpdatedAt == "function" ? e.initialDataUpdatedAt() : e.initialDataUpdatedAt : 0;
  return {
    data: t,
    dataUpdateCount: 0,
    dataUpdatedAt: r ? n ?? Date.now() : 0,
    error: null,
    errorUpdateCount: 0,
    errorUpdatedAt: 0,
    fetchFailureCount: 0,
    fetchFailureReason: null,
    fetchMeta: null,
    isInvalidated: !1,
    status: r ? "success" : "pending",
    fetchStatus: "idle"
  };
}
var Ct, nu, _h = (nu = class extends Ln {
  constructor(t = {}) {
    super();
    D(this, Ct, void 0);
    this.config = t, P(this, Ct, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? qa(s, r);
    let o = this.get(i);
    return o || (o = new wh({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    g(this, Ct).has(t.queryHash) || (g(this, Ct).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = g(this, Ct).get(t.queryHash);
    r && (t.destroy(), r === t && g(this, Ct).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    Ve.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return g(this, Ct).get(t);
  }
  getAll() {
    return [...g(this, Ct).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => Ac(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => Ac(t, n)) : r;
  }
  notify(t) {
    Ve.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    Ve.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    Ve.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Ct = new WeakMap(), nu), Tt, fs, ut, cn, Rt, ar, su, Eh = (su = class extends vu {
  constructor(t) {
    super();
    D(this, Rt);
    D(this, Tt, void 0);
    D(this, fs, void 0);
    D(this, ut, void 0);
    D(this, cn, void 0);
    this.mutationId = t.mutationId, P(this, fs, t.defaultOptions), P(this, ut, t.mutationCache), P(this, Tt, []), this.state = t.state || yu(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...g(this, fs), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    g(this, Tt).includes(t) || (g(this, Tt).push(t), this.clearGcTimeout(), g(this, ut).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    P(this, Tt, g(this, Tt).filter((r) => r !== t)), this.scheduleGc(), g(this, ut).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    g(this, Tt).length || (this.state.status === "pending" ? this.scheduleGc() : g(this, ut).remove(this));
  }
  continue() {
    var t;
    return ((t = g(this, cn)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, a, c, l, u, d, h, m, y, p, v, S, O, w, E, x, A, M;
    const r = () => (P(this, cn, mu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (k, N) => {
        ee(this, Rt, ar).call(this, { type: "failed", failureCount: k, error: N });
      },
      onPause: () => {
        ee(this, Rt, ar).call(this, { type: "pause" });
      },
      onContinue: () => {
        ee(this, Rt, ar).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), g(this, cn).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        ee(this, Rt, ar).call(this, { type: "pending", variables: t }), await ((i = (s = g(this, ut).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const N = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
        N !== this.state.context && ee(this, Rt, ar).call(this, {
          type: "pending",
          context: N,
          variables: t
        });
      }
      const k = await r();
      return await ((l = (c = g(this, ut).config).onSuccess) == null ? void 0 : l.call(
        c,
        k,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, k, t, this.state.context)), await ((m = (h = g(this, ut).config).onSettled) == null ? void 0 : m.call(
        h,
        k,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((p = (y = this.options).onSettled) == null ? void 0 : p.call(y, k, null, t, this.state.context)), ee(this, Rt, ar).call(this, { type: "success", data: k }), k;
    } catch (k) {
      try {
        throw await ((S = (v = g(this, ut).config).onError) == null ? void 0 : S.call(
          v,
          k,
          t,
          this.state.context,
          this
        )), await ((w = (O = this.options).onError) == null ? void 0 : w.call(
          O,
          k,
          t,
          this.state.context
        )), await ((x = (E = g(this, ut).config).onSettled) == null ? void 0 : x.call(
          E,
          void 0,
          k,
          this.state.variables,
          this.state.context,
          this
        )), await ((M = (A = this.options).onSettled) == null ? void 0 : M.call(
          A,
          void 0,
          k,
          t,
          this.state.context
        )), k;
      } finally {
        ee(this, Rt, ar).call(this, { type: "error", error: k });
      }
    }
  }
}, Tt = new WeakMap(), fs = new WeakMap(), ut = new WeakMap(), cn = new WeakMap(), Rt = new WeakSet(), ar = function(t) {
  const r = (n) => {
    switch (t.type) {
      case "failed":
        return {
          ...n,
          failureCount: t.failureCount,
          failureReason: t.error
        };
      case "pause":
        return {
          ...n,
          isPaused: !0
        };
      case "continue":
        return {
          ...n,
          isPaused: !1
        };
      case "pending":
        return {
          ...n,
          context: t.context,
          data: void 0,
          failureCount: 0,
          failureReason: null,
          error: null,
          isPaused: !$i(this.options.networkMode),
          status: "pending",
          variables: t.variables,
          submittedAt: Date.now()
        };
      case "success":
        return {
          ...n,
          data: t.data,
          failureCount: 0,
          failureReason: null,
          error: null,
          status: "success",
          isPaused: !1
        };
      case "error":
        return {
          ...n,
          data: void 0,
          error: t.error,
          failureCount: n.failureCount + 1,
          failureReason: t.error,
          isPaused: !1,
          status: "error"
        };
    }
  };
  this.state = r(this.state), Ve.batch(() => {
    g(this, Tt).forEach((n) => {
      n.onMutationUpdate(t);
    }), g(this, ut).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, su);
function yu() {
  return {
    context: void 0,
    data: void 0,
    error: null,
    failureCount: 0,
    failureReason: null,
    isPaused: !1,
    status: "idle",
    variables: void 0,
    submittedAt: 0
  };
}
var mt, hs, Pr, iu, Oh = (iu = class extends Ln {
  constructor(t = {}) {
    super();
    D(this, mt, void 0);
    D(this, hs, void 0);
    D(this, Pr, void 0);
    this.config = t, P(this, mt, []), P(this, hs, 0);
  }
  build(t, r, n) {
    const s = new Eh({
      mutationCache: this,
      mutationId: ++ks(this, hs)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    g(this, mt).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    P(this, mt, g(this, mt).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    Ve.batch(() => {
      g(this, mt).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return g(this, mt);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return g(this, mt).find(
      (n) => Nc(r, n)
    );
  }
  findAll(t = {}) {
    return g(this, mt).filter(
      (r) => Nc(t, r)
    );
  }
  notify(t) {
    Ve.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    return P(this, Pr, (g(this, Pr) ?? Promise.resolve()).then(() => {
      const t = g(this, mt).filter((r) => r.state.isPaused);
      return Ve.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(vt)),
          Promise.resolve()
        )
      );
    }).then(() => {
      P(this, Pr, void 0);
    })), g(this, Pr);
  }
}, mt = new WeakMap(), hs = new WeakMap(), Pr = new WeakMap(), iu);
function Ch(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var y, p, v, S, O;
        const s = t.options, i = (v = (p = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : v.direction, o = ((S = t.state.data) == null ? void 0 : S.pages) || [], a = ((O = t.state.data) == null ? void 0 : O.pageParams) || [], c = { pages: [], pageParams: [] };
        let l = !1;
        const u = (w) => {
          Object.defineProperty(w, "signal", {
            enumerable: !0,
            get: () => (t.signal.aborted ? l = !0 : t.signal.addEventListener("abort", () => {
              l = !0;
            }), t.signal)
          });
        }, d = t.options.queryFn || (() => Promise.reject(
          new Error(`Missing queryFn: '${t.options.queryHash}'`)
        )), h = async (w, E, x) => {
          if (l)
            return Promise.reject();
          if (E == null && w.pages.length)
            return Promise.resolve(w);
          const A = {
            queryKey: t.queryKey,
            pageParam: E,
            direction: x ? "backward" : "forward",
            meta: t.options.meta
          };
          u(A);
          const M = await d(
            A
          ), { maxPages: k } = t.options, N = x ? vh : mh;
          return {
            pages: N(w.pages, M, k),
            pageParams: N(w.pageParams, E, k)
          };
        };
        let m;
        if (i && o.length) {
          const w = i === "backward", E = w ? Th : jc, x = {
            pages: o,
            pageParams: a
          }, A = E(s, x);
          m = await h(x, A, w);
        } else {
          m = await h(
            c,
            a[0] ?? s.initialPageParam
          );
          const w = e ?? o.length;
          for (let E = 1; E < w; E++) {
            const x = jc(s, m);
            m = await h(m, x);
          }
        }
        return m;
      };
      t.options.persister ? t.fetchFn = () => {
        var s, i;
        return (i = (s = t.options).persister) == null ? void 0 : i.call(
          s,
          n,
          {
            queryKey: t.queryKey,
            meta: t.options.meta,
            signal: t.signal
          },
          r
        );
      } : t.fetchFn = n;
    }
  };
}
function jc(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function Th(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var Be, fr, hr, ln, un, pr, dn, fn, ou, Rh = (ou = class {
  constructor(e = {}) {
    D(this, Be, void 0);
    D(this, fr, void 0);
    D(this, hr, void 0);
    D(this, ln, void 0);
    D(this, un, void 0);
    D(this, pr, void 0);
    D(this, dn, void 0);
    D(this, fn, void 0);
    P(this, Be, e.queryCache || new _h()), P(this, fr, e.mutationCache || new Oh()), P(this, hr, e.defaultOptions || {}), P(this, ln, /* @__PURE__ */ new Map()), P(this, un, /* @__PURE__ */ new Map()), P(this, pr, 0);
  }
  mount() {
    ks(this, pr)._++, g(this, pr) === 1 && (P(this, dn, ci.subscribe(() => {
      ci.isFocused() && (this.resumePausedMutations(), g(this, Be).onFocus());
    })), P(this, fn, ts.subscribe(() => {
      ts.isOnline() && (this.resumePausedMutations(), g(this, Be).onOnline());
    })));
  }
  unmount() {
    var e, t;
    ks(this, pr)._--, g(this, pr) === 0 && ((e = g(this, dn)) == null || e.call(this), P(this, dn, void 0), (t = g(this, fn)) == null || t.call(this), P(this, fn, void 0));
  }
  isFetching(e) {
    return g(this, Be).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return g(this, fr).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = g(this, Be).find({ queryKey: e })) == null ? void 0 : t.state.data;
  }
  ensureQueryData(e) {
    const t = this.getQueryData(e.queryKey);
    return t !== void 0 ? Promise.resolve(t) : this.fetchQuery(e);
  }
  getQueriesData(e) {
    return this.getQueryCache().findAll(e).map(({ queryKey: t, state: r }) => {
      const n = r.data;
      return [t, n];
    });
  }
  setQueryData(e, t, r) {
    const n = g(this, Be).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = hh(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return g(this, Be).build(this, o).setData(i, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return Ve.batch(
      () => this.getQueryCache().findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var t;
    return (t = g(this, Be).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = g(this, Be);
    Ve.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = g(this, Be), n = {
      type: "active",
      ...e
    };
    return Ve.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = Ve.batch(
      () => g(this, Be).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(vt).catch(vt);
  }
  invalidateQueries(e = {}, t = {}) {
    return Ve.batch(() => {
      if (g(this, Be).findAll(e).forEach((n) => {
        n.invalidate();
      }), e.refetchType === "none")
        return Promise.resolve();
      const r = {
        ...e,
        type: e.refetchType ?? e.type ?? "active"
      };
      return this.refetchQueries(r, t);
    });
  }
  refetchQueries(e = {}, t) {
    const r = {
      ...t,
      cancelRefetch: (t == null ? void 0 : t.cancelRefetch) ?? !0
    }, n = Ve.batch(
      () => g(this, Be).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(vt)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(vt);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = g(this, Be).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(vt).catch(vt);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = Ch(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(vt).catch(vt);
  }
  resumePausedMutations() {
    return g(this, fr).resumePausedMutations();
  }
  getQueryCache() {
    return g(this, Be);
  }
  getMutationCache() {
    return g(this, fr);
  }
  getDefaultOptions() {
    return g(this, hr);
  }
  setDefaultOptions(e) {
    P(this, hr, e);
  }
  setQueryDefaults(e, t) {
    g(this, ln).set(Ur(e), {
      queryKey: e,
      defaultOptions: t
    });
  }
  getQueryDefaults(e) {
    const t = [...g(this, ln).values()];
    let r = {};
    return t.forEach((n) => {
      es(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  setMutationDefaults(e, t) {
    g(this, un).set(Ur(e), {
      mutationKey: e,
      defaultOptions: t
    });
  }
  getMutationDefaults(e) {
    const t = [...g(this, un).values()];
    let r = {};
    return t.forEach((n) => {
      es(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
    }), r;
  }
  defaultQueryOptions(e) {
    if (e != null && e._defaulted)
      return e;
    const t = {
      ...g(this, hr).queries,
      ...(e == null ? void 0 : e.queryKey) && this.getQueryDefaults(e.queryKey),
      ...e,
      _defaulted: !0
    };
    return t.queryHash || (t.queryHash = qa(
      t.queryKey,
      t
    )), typeof t.refetchOnReconnect > "u" && (t.refetchOnReconnect = t.networkMode !== "always"), typeof t.throwOnError > "u" && (t.throwOnError = !!t.suspense), typeof t.networkMode > "u" && t.persister && (t.networkMode = "offlineFirst"), t;
  }
  defaultMutationOptions(e) {
    return e != null && e._defaulted ? e : {
      ...g(this, hr).mutations,
      ...(e == null ? void 0 : e.mutationKey) && this.getMutationDefaults(e.mutationKey),
      ...e,
      _defaulted: !0
    };
  }
  clear() {
    g(this, Be).clear(), g(this, fr).clear();
  }
}, Be = new WeakMap(), fr = new WeakMap(), hr = new WeakMap(), ln = new WeakMap(), un = new WeakMap(), pr = new WeakMap(), dn = new WeakMap(), fn = new WeakMap(), ou), ot, Me, ps, tt, $r, hn, At, ms, pn, mn, jr, kr, mr, vn, Ir, Yn, vs, Ho, ys, Zo, gs, Ko, bs, Yo, xs, Go, ws, Qo, Ss, Jo, Ni, gu, au, Ah = (au = class extends Ln {
  constructor(t, r) {
    super();
    D(this, Ir);
    D(this, vs);
    D(this, ys);
    D(this, gs);
    D(this, bs);
    D(this, xs);
    D(this, ws);
    D(this, Ss);
    D(this, Ni);
    D(this, ot, void 0);
    D(this, Me, void 0);
    D(this, ps, void 0);
    D(this, tt, void 0);
    D(this, $r, void 0);
    D(this, hn, void 0);
    D(this, At, void 0);
    D(this, ms, void 0);
    D(this, pn, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    D(this, mn, void 0);
    D(this, jr, void 0);
    D(this, kr, void 0);
    D(this, mr, void 0);
    D(this, vn, /* @__PURE__ */ new Set());
    this.options = r, P(this, ot, t), P(this, At, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (g(this, Me).addObserver(this), kc(g(this, Me), this.options) ? ee(this, Ir, Yn).call(this) : this.updateResult(), ee(this, bs, Yo).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Xo(
      g(this, Me),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Xo(
      g(this, Me),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), ee(this, xs, Go).call(this), ee(this, ws, Qo).call(this), g(this, Me).removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, s = g(this, Me);
    if (this.options = g(this, ot).defaultQueryOptions(t), ai(n, this.options) || g(this, ot).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: g(this, Me),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), ee(this, Ss, Jo).call(this);
    const i = this.hasListeners();
    i && Ic(
      g(this, Me),
      s,
      this.options,
      n
    ) && ee(this, Ir, Yn).call(this), this.updateResult(r), i && (g(this, Me) !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && ee(this, vs, Ho).call(this);
    const o = ee(this, ys, Zo).call(this);
    i && (g(this, Me) !== s || this.options.enabled !== n.enabled || o !== g(this, mr)) && ee(this, gs, Ko).call(this, o);
  }
  getOptimisticResult(t) {
    const r = g(this, ot).getQueryCache().build(g(this, ot), t), n = this.createResult(r, t);
    return Ph(this, n) && (P(this, tt, n), P(this, hn, this.options), P(this, $r, g(this, Me).state)), n;
  }
  getCurrentResult() {
    return g(this, tt);
  }
  trackResult(t) {
    const r = {};
    return Object.keys(t).forEach((n) => {
      Object.defineProperty(r, n, {
        configurable: !1,
        enumerable: !0,
        get: () => (g(this, vn).add(n), t[n])
      });
    }), r;
  }
  getCurrentQuery() {
    return g(this, Me);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = g(this, ot).defaultQueryOptions(t), n = g(this, ot).getQueryCache().build(g(this, ot), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return ee(this, Ir, Yn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), g(this, tt)));
  }
  createResult(t, r) {
    var A;
    const n = g(this, Me), s = this.options, i = g(this, tt), o = g(this, $r), a = g(this, hn), l = t !== n ? t.state : g(this, ps), { state: u } = t;
    let { error: d, errorUpdatedAt: h, fetchStatus: m, status: y } = u, p = !1, v;
    if (r._optimisticResults) {
      const M = this.hasListeners(), k = !M && kc(t, r), N = M && Ic(t, n, r, s);
      (k || N) && (m = $i(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (y = "pending")), r._optimisticResults === "isRestoring" && (m = "idle");
    }
    if (r.select && typeof u.data < "u")
      if (i && u.data === (o == null ? void 0 : o.data) && r.select === g(this, ms))
        v = g(this, pn);
      else
        try {
          P(this, ms, r.select), v = r.select(u.data), v = qo(i == null ? void 0 : i.data, v, r), P(this, pn, v), P(this, At, null);
        } catch (M) {
          P(this, At, M);
        }
    else
      v = u.data;
    if (typeof r.placeholderData < "u" && typeof v > "u" && y === "pending") {
      let M;
      if (i != null && i.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        M = i.data;
      else if (M = typeof r.placeholderData == "function" ? r.placeholderData(
        (A = g(this, mn)) == null ? void 0 : A.state.data,
        g(this, mn)
      ) : r.placeholderData, r.select && typeof M < "u")
        try {
          M = r.select(M), P(this, At, null);
        } catch (k) {
          P(this, At, k);
        }
      typeof M < "u" && (y = "success", v = qo(
        i == null ? void 0 : i.data,
        M,
        r
      ), p = !0);
    }
    g(this, At) && (d = g(this, At), v = g(this, pn), h = Date.now(), y = "error");
    const S = m === "fetching", O = y === "pending", w = y === "error", E = O && S;
    return {
      status: y,
      fetchStatus: m,
      isPending: O,
      isSuccess: y === "success",
      isError: w,
      isInitialLoading: E,
      isLoading: E,
      data: v,
      dataUpdatedAt: u.dataUpdatedAt,
      error: d,
      errorUpdatedAt: h,
      failureCount: u.fetchFailureCount,
      failureReason: u.fetchFailureReason,
      errorUpdateCount: u.errorUpdateCount,
      isFetched: u.dataUpdateCount > 0 || u.errorUpdateCount > 0,
      isFetchedAfterMount: u.dataUpdateCount > l.dataUpdateCount || u.errorUpdateCount > l.errorUpdateCount,
      isFetching: S,
      isRefetching: S && !O,
      isLoadingError: w && u.dataUpdatedAt === 0,
      isPaused: m === "paused",
      isPlaceholderData: p,
      isRefetchError: w && u.dataUpdatedAt !== 0,
      isStale: Ha(t, r),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const r = g(this, tt), n = this.createResult(g(this, Me), this.options);
    if (P(this, $r, g(this, Me).state), P(this, hn, this.options), g(this, $r).data !== void 0 && P(this, mn, g(this, Me)), ai(n, r))
      return;
    P(this, tt, n);
    const s = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !g(this, vn).size)
        return !0;
      const c = new Set(
        a ?? g(this, vn)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(g(this, tt)).some((l) => {
        const u = l;
        return g(this, tt)[u] !== r[u] && c.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0), ee(this, Ni, gu).call(this, { ...s, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && ee(this, bs, Yo).call(this);
  }
}, ot = new WeakMap(), Me = new WeakMap(), ps = new WeakMap(), tt = new WeakMap(), $r = new WeakMap(), hn = new WeakMap(), At = new WeakMap(), ms = new WeakMap(), pn = new WeakMap(), mn = new WeakMap(), jr = new WeakMap(), kr = new WeakMap(), mr = new WeakMap(), vn = new WeakMap(), Ir = new WeakSet(), Yn = function(t) {
  ee(this, Ss, Jo).call(this);
  let r = g(this, Me).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(vt)), r;
}, vs = new WeakSet(), Ho = function() {
  if (ee(this, xs, Go).call(this), Cn || g(this, tt).isStale || !Vo(this.options.staleTime))
    return;
  const r = fu(
    g(this, tt).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  P(this, jr, setTimeout(() => {
    g(this, tt).isStale || this.updateResult();
  }, r));
}, ys = new WeakSet(), Zo = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(g(this, Me)) : this.options.refetchInterval) ?? !1;
}, gs = new WeakSet(), Ko = function(t) {
  ee(this, ws, Qo).call(this), P(this, mr, t), !(Cn || this.options.enabled === !1 || !Vo(g(this, mr)) || g(this, mr) === 0) && P(this, kr, setInterval(() => {
    (this.options.refetchIntervalInBackground || ci.isFocused()) && ee(this, Ir, Yn).call(this);
  }, g(this, mr)));
}, bs = new WeakSet(), Yo = function() {
  ee(this, vs, Ho).call(this), ee(this, gs, Ko).call(this, ee(this, ys, Zo).call(this));
}, xs = new WeakSet(), Go = function() {
  g(this, jr) && (clearTimeout(g(this, jr)), P(this, jr, void 0));
}, ws = new WeakSet(), Qo = function() {
  g(this, kr) && (clearInterval(g(this, kr)), P(this, kr, void 0));
}, Ss = new WeakSet(), Jo = function() {
  const t = g(this, ot).getQueryCache().build(g(this, ot), this.options);
  if (t === g(this, Me))
    return;
  const r = g(this, Me);
  P(this, Me, t), P(this, ps, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Ni = new WeakSet(), gu = function(t) {
  Ve.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(g(this, tt));
    }), g(this, ot).getQueryCache().notify({
      query: g(this, Me),
      type: "observerResultsUpdated"
    });
  });
}, au);
function Nh(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function kc(e, t) {
  return Nh(e, t) || e.state.dataUpdatedAt > 0 && Xo(e, t, t.refetchOnMount);
}
function Xo(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && Ha(e, t);
  }
  return !1;
}
function Ic(e, t, r, n) {
  return r.enabled !== !1 && (e !== t || n.enabled === !1) && (!r.suspense || e.state.status !== "error") && Ha(e, r);
}
function Ha(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Ph(e, t) {
  return !ai(e.getCurrentResult(), t);
}
var vr, Vt, dt, Wt, yn, Js, _s, ea, cu, $h = (cu = class extends Ln {
  constructor(r, n) {
    super();
    D(this, yn);
    D(this, _s);
    D(this, vr, void 0);
    D(this, Vt, void 0);
    D(this, dt, void 0);
    D(this, Wt, void 0);
    P(this, Vt, void 0), P(this, vr, r), this.setOptions(n), this.bindMethods(), ee(this, yn, Js).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(r) {
    var s;
    const n = this.options;
    this.options = g(this, vr).defaultMutationOptions(r), ai(n, this.options) || g(this, vr).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: g(this, dt),
      observer: this
    }), (s = g(this, dt)) == null || s.setOptions(this.options), n != null && n.mutationKey && this.options.mutationKey && Ur(n.mutationKey) !== Ur(this.options.mutationKey) && this.reset();
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || (r = g(this, dt)) == null || r.removeObserver(this);
  }
  onMutationUpdate(r) {
    ee(this, yn, Js).call(this), ee(this, _s, ea).call(this, r);
  }
  getCurrentResult() {
    return g(this, Vt);
  }
  reset() {
    var r;
    (r = g(this, dt)) == null || r.removeObserver(this), P(this, dt, void 0), ee(this, yn, Js).call(this), ee(this, _s, ea).call(this);
  }
  mutate(r, n) {
    var s;
    return P(this, Wt, n), (s = g(this, dt)) == null || s.removeObserver(this), P(this, dt, g(this, vr).getMutationCache().build(g(this, vr), this.options)), g(this, dt).addObserver(this), g(this, dt).execute(r);
  }
}, vr = new WeakMap(), Vt = new WeakMap(), dt = new WeakMap(), Wt = new WeakMap(), yn = new WeakSet(), Js = function() {
  var n;
  const r = ((n = g(this, dt)) == null ? void 0 : n.state) ?? yu();
  P(this, Vt, {
    ...r,
    isPending: r.status === "pending",
    isSuccess: r.status === "success",
    isError: r.status === "error",
    isIdle: r.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, _s = new WeakSet(), ea = function(r) {
  Ve.batch(() => {
    var n, s, i, o, a, c, l, u;
    if (g(this, Wt) && this.hasListeners()) {
      const d = g(this, Vt).variables, h = g(this, Vt).context;
      (r == null ? void 0 : r.type) === "success" ? ((s = (n = g(this, Wt)).onSuccess) == null || s.call(n, r.data, d, h), (o = (i = g(this, Wt)).onSettled) == null || o.call(i, r.data, null, d, h)) : (r == null ? void 0 : r.type) === "error" && ((c = (a = g(this, Wt)).onError) == null || c.call(a, r.error, d, h), (u = (l = g(this, Wt)).onSettled) == null || u.call(
        l,
        void 0,
        r.error,
        d,
        h
      ));
    }
    this.listeners.forEach((d) => {
      d(g(this, Vt));
    });
  });
}, cu), bu = $.createContext(
  void 0
), Fn = (e) => {
  const t = $.useContext(bu);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, jh = ({
  client: e,
  children: t
}) => ($.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ $.createElement(bu.Provider, { value: e }, t)), xu = $.createContext(!1), kh = () => $.useContext(xu);
xu.Provider;
function Ih() {
  let e = !1;
  return {
    clearReset: () => {
      e = !1;
    },
    reset: () => {
      e = !0;
    },
    isReset: () => e
  };
}
var Mh = $.createContext(Ih()), Dh = () => $.useContext(Mh);
function wu(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Lh = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, Fh = (e) => {
  $.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Uh = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && n && wu(r, [e.error, n]), zh = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, Bh = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Vh = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function Wh(e, t, r) {
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Fn(r), s = kh(), i = Dh(), o = n.defaultQueryOptions(e);
  o._optimisticResults = s ? "isRestoring" : "optimistic", zh(o), Lh(o, i), Fh(i);
  const [a] = $.useState(
    () => new t(
      n,
      o
    )
  ), c = a.getOptimisticResult(o);
  if ($.useSyncExternalStore(
    $.useCallback(
      (l) => {
        const u = s ? () => {
        } : a.subscribe(Ve.batchCalls(l));
        return a.updateResult(), u;
      },
      [a, s]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), $.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), Bh(o, c))
    throw Vh(o, a, i);
  if (Uh({
    result: c,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw c.error;
  return o.notifyOnChangeProps ? c : a.trackResult(c);
}
function Tn(e, t) {
  return Wh(e, Ah, t);
}
function Su(e, t) {
  const r = Fn(t), [n] = $.useState(
    () => new $h(
      r,
      e
    )
  );
  $.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const s = $.useSyncExternalStore(
    $.useCallback(
      (o) => n.subscribe(Ve.batchCalls(o)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = $.useCallback(
    (o, a) => {
      n.mutate(o, a).catch(qh);
    },
    [n]
  );
  if (s.error && wu(n.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: i, mutateAsync: s.mutate };
}
function qh() {
}
var se = {
  context: void 0,
  registry: void 0
};
function Gn(e) {
  se.context = e;
}
var Hh = (e, t) => e === t, li = Symbol("solid-proxy"), _u = Symbol("solid-track"), ui = {
  equals: Hh
}, Eu = Nu, er = 1, di = 2, Ou = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, ao = {}, we = null, co = null, Ae = null, Qe = null, Yt = null, ji = 0;
function Lr(e, t) {
  const r = Ae, n = we, s = e.length === 0, i = t === void 0 ? n : t, o = s ? Ou : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, a = s ? e : () => e(() => He(() => Ii(o)));
  we = o, Ae = null;
  try {
    return Mt(a, !0);
  } finally {
    Ae = r, we = n;
  }
}
function rt(e, t) {
  t = t ? Object.assign({}, ui, t) : ui;
  const r = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), Au(r, s));
  return [Ru.bind(r), n];
}
function Mc(e, t, r) {
  const n = ki(e, t, !0, er);
  Un(n);
}
function Fr(e, t, r) {
  const n = ki(e, t, !1, er);
  Un(n);
}
function Cu(e, t, r) {
  Eu = rp;
  const n = ki(e, t, !1, er);
  (!r || !r.render) && (n.user = !0), Yt ? Yt.push(n) : Un(n);
}
function ct(e, t, r) {
  r = r ? Object.assign({}, ui, r) : ui;
  const n = ki(e, t, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Un(n), Ru.bind(n);
}
function Zh(e) {
  return e && typeof e == "object" && "then" in e;
}
function Kh(e, t, r) {
  let n, s, i;
  arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (n = !0, s = e, i = t || {}) : (n = e, s = t, i = r || {});
  let o = null, a = ao, c = null, l = !1, u = "initialValue" in i, d = typeof n == "function" && ct(n);
  const h = /* @__PURE__ */ new Set(), [m, y] = (i.storage || rt)(i.initialValue), [p, v] = rt(void 0), [S, O] = rt(void 0, {
    equals: !1
  }), [w, E] = rt(u ? "ready" : "unresolved");
  if (se.context) {
    c = `${se.context.id}${se.context.count++}`;
    let N;
    i.ssrLoadFrom === "initial" ? a = i.initialValue : se.load && (N = se.load(c)) && (a = N);
  }
  function x(N, B, Z, V) {
    return o === N && (o = null, V !== void 0 && (u = !0), (N === a || B === a) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(V, {
        value: B
      })
    ), a = ao, A(B, Z)), B;
  }
  function A(N, B) {
    Mt(() => {
      B === void 0 && y(() => N), E(B !== void 0 ? "errored" : u ? "ready" : "unresolved"), v(B);
      for (const Z of h.keys())
        Z.decrement();
      h.clear();
    }, !1);
  }
  function M() {
    const N = Xh, B = m(), Z = p();
    if (Z !== void 0 && !o)
      throw Z;
    return Ae && !Ae.user && N && Mc(() => {
      S(), o && (N.resolved || h.has(N) || (N.increment(), h.add(N)));
    }), B;
  }
  function k(N = !0) {
    if (N !== !1 && l)
      return;
    l = !1;
    const B = d ? d() : n;
    if (B == null || B === !1) {
      x(o, He(m));
      return;
    }
    const Z = a !== ao ? a : He(
      () => s(B, {
        value: m(),
        refetching: N
      })
    );
    return Zh(Z) ? (o = Z, "value" in Z ? (Z.status === "success" ? x(o, Z.value, void 0, B) : x(o, void 0, void 0, B), Z) : (l = !0, queueMicrotask(() => l = !1), Mt(() => {
      E(u ? "refreshing" : "pending"), O();
    }, !1), Z.then(
      (V) => x(Z, V, void 0, B),
      (V) => x(Z, void 0, $u(V), B)
    ))) : (x(o, Z, void 0, B), Z);
  }
  return Object.defineProperties(M, {
    state: {
      get: () => w()
    },
    error: {
      get: () => p()
    },
    loading: {
      get() {
        const N = w();
        return N === "pending" || N === "refreshing";
      }
    },
    latest: {
      get() {
        if (!u)
          return M();
        const N = p();
        if (N && !o)
          throw N;
        return m();
      }
    }
  }), d ? Mc(() => k(!1)) : k(!1), [
    M,
    {
      refetch: k,
      mutate: y
    }
  ];
}
function Fx(e) {
  return Mt(e, !1);
}
function He(e) {
  if (Ae === null)
    return e();
  const t = Ae;
  Ae = null;
  try {
    return e();
  } finally {
    Ae = t;
  }
}
function Ux(e, t, r) {
  const n = Array.isArray(e);
  let s, i = r && r.defer;
  return (o) => {
    let a;
    if (n) {
      a = Array(e.length);
      for (let l = 0; l < e.length; l++)
        a[l] = e[l]();
    } else
      a = e();
    if (i) {
      i = !1;
      return;
    }
    const c = He(() => t(a, s, o));
    return s = a, c;
  };
}
function Yh(e) {
  Cu(() => He(e));
}
function rs(e) {
  return we === null || (we.cleanups === null ? we.cleanups = [e] : we.cleanups.push(e)), e;
}
function zx() {
  return Ae;
}
function Dc() {
  return we;
}
function Gh(e, t) {
  const r = we, n = Ae;
  we = e, Ae = null;
  try {
    return Mt(t, !0);
  } catch (s) {
    Za(s);
  } finally {
    we = r, Ae = n;
  }
}
function Qh(e) {
  const t = Ae, r = we;
  return Promise.resolve().then(() => {
    Ae = t, we = r;
    let n;
    return Mt(e, !1), Ae = we = null, n ? n.done : void 0;
  });
}
var [Jh, Bx] = /* @__PURE__ */ rt(!1);
function Vx() {
  return [Jh, Qh];
}
function Wx(e, t) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: np(r),
    defaultValue: e
  };
}
function qx(e) {
  return we && we.context && we.context[e.id] !== void 0 ? we.context[e.id] : e.defaultValue;
}
function Tu(e) {
  const t = ct(e), r = ct(() => ta(t()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var Xh;
function Ru() {
  if (this.sources && this.state)
    if (this.state === er)
      Un(this);
    else {
      const e = Qe;
      Qe = null, Mt(() => hi(this), !1), Qe = e;
    }
  if (Ae) {
    const e = this.observers ? this.observers.length : 0;
    Ae.sources ? (Ae.sources.push(this), Ae.sourceSlots.push(e)) : (Ae.sources = [this], Ae.sourceSlots = [e]), this.observers ? (this.observers.push(Ae), this.observerSlots.push(Ae.sources.length - 1)) : (this.observers = [Ae], this.observerSlots = [Ae.sources.length - 1]);
  }
  return this.value;
}
function Au(e, t, r) {
  let n = e.value;
  return (!e.comparator || !e.comparator(n, t)) && (e.value = t, e.observers && e.observers.length && Mt(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      const i = e.observers[s], o = co && co.running;
      o && co.disposed.has(i), (o ? !i.tState : !i.state) && (i.pure ? Qe.push(i) : Yt.push(i), i.observers && Pu(i)), o || (i.state = er);
    }
    if (Qe.length > 1e6)
      throw Qe = [], new Error();
  }, !1)), t;
}
function Un(e) {
  if (!e.fn)
    return;
  Ii(e);
  const t = ji;
  ep(
    e,
    e.value,
    t
  );
}
function ep(e, t, r) {
  let n;
  const s = we, i = Ae;
  Ae = we = e;
  try {
    n = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = er, e.owned && e.owned.forEach(Ii), e.owned = null), e.updatedAt = r + 1, Za(o);
  } finally {
    Ae = i, we = s;
  }
  (!e.updatedAt || e.updatedAt <= r) && (e.updatedAt != null && "observers" in e ? Au(e, n) : e.value = n, e.updatedAt = r);
}
function ki(e, t, r, n = er, s) {
  const i = {
    fn: e,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: we,
    context: we ? we.context : null,
    pure: r
  };
  return we === null || we !== Ou && (we.owned ? we.owned.push(i) : we.owned = [i]), i;
}
function fi(e) {
  if (e.state === 0)
    return;
  if (e.state === di)
    return hi(e);
  if (e.suspense && He(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < ji); )
    e.state && t.push(e);
  for (let r = t.length - 1; r >= 0; r--)
    if (e = t[r], e.state === er)
      Un(e);
    else if (e.state === di) {
      const n = Qe;
      Qe = null, Mt(() => hi(e, t[0]), !1), Qe = n;
    }
}
function Mt(e, t) {
  if (Qe)
    return e();
  let r = !1;
  t || (Qe = []), Yt ? r = !0 : Yt = [], ji++;
  try {
    const n = e();
    return tp(r), n;
  } catch (n) {
    r || (Yt = null), Qe = null, Za(n);
  }
}
function tp(e) {
  if (Qe && (Nu(Qe), Qe = null), e)
    return;
  const t = Yt;
  Yt = null, t.length && Mt(() => Eu(t), !1);
}
function Nu(e) {
  for (let t = 0; t < e.length; t++)
    fi(e[t]);
}
function rp(e) {
  let t, r = 0;
  for (t = 0; t < e.length; t++) {
    const n = e[t];
    n.user ? e[r++] = n : fi(n);
  }
  if (se.context) {
    if (se.count) {
      se.effects || (se.effects = []), se.effects.push(...e.slice(0, r));
      return;
    } else
      se.effects && (e = [...se.effects, ...e], r += se.effects.length, delete se.effects);
    Gn();
  }
  for (t = 0; t < r; t++)
    fi(e[t]);
}
function hi(e, t) {
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const n = e.sources[r];
    if (n.sources) {
      const s = n.state;
      s === er ? n !== t && (!n.updatedAt || n.updatedAt < ji) && fi(n) : s === di && hi(n, t);
    }
  }
}
function Pu(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const r = e.observers[t];
    r.state || (r.state = di, r.pure ? Qe.push(r) : Yt.push(r), r.observers && Pu(r));
  }
}
function Ii(e) {
  let t;
  if (e.sources)
    for (; e.sources.length; ) {
      const r = e.sources.pop(), n = e.sourceSlots.pop(), s = r.observers;
      if (s && s.length) {
        const i = s.pop(), o = r.observerSlots.pop();
        n < s.length && (i.sourceSlots[o] = n, s[n] = i, r.observerSlots[n] = o);
      }
    }
  if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--)
      Ii(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--)
      e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function $u(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function Za(e, t = we) {
  throw $u(e);
}
function ta(e) {
  if (typeof e == "function" && !e.length)
    return ta(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const n = ta(e[r]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return e;
}
function np(e, t) {
  return function(n) {
    let s;
    return Fr(
      () => s = He(() => (we.context = {
        ...we.context,
        [e]: n.value
      }, Tu(() => n.children))),
      void 0
    ), s;
  };
}
var ra = Symbol("fallback");
function pi(e) {
  for (let t = 0; t < e.length; t++)
    e[t]();
}
function sp(e, t, r = {}) {
  let n = [], s = [], i = [], o = 0, a = t.length > 1 ? [] : null;
  return rs(() => pi(i)), () => {
    let c = e() || [], l, u;
    return c[_u], He(() => {
      let h = c.length, m, y, p, v, S, O, w, E, x;
      if (h === 0)
        o !== 0 && (pi(i), i = [], n = [], s = [], o = 0, a && (a = [])), r.fallback && (n = [ra], s[0] = Lr((A) => (i[0] = A, r.fallback())), o = 1);
      else if (o === 0) {
        for (s = new Array(h), u = 0; u < h; u++)
          n[u] = c[u], s[u] = Lr(d);
        o = h;
      } else {
        for (p = new Array(h), v = new Array(h), a && (S = new Array(h)), O = 0, w = Math.min(o, h); O < w && n[O] === c[O]; O++)
          ;
        for (w = o - 1, E = h - 1; w >= O && E >= O && n[w] === c[E]; w--, E--)
          p[E] = s[w], v[E] = i[w], a && (S[E] = a[w]);
        for (m = /* @__PURE__ */ new Map(), y = new Array(E + 1), u = E; u >= O; u--)
          x = c[u], l = m.get(x), y[u] = l === void 0 ? -1 : l, m.set(x, u);
        for (l = O; l <= w; l++)
          x = n[l], u = m.get(x), u !== void 0 && u !== -1 ? (p[u] = s[l], v[u] = i[l], a && (S[u] = a[l]), u = y[u], m.set(x, u)) : i[l]();
        for (u = O; u < h; u++)
          u in p ? (s[u] = p[u], i[u] = v[u], a && (a[u] = S[u], a[u](u))) : s[u] = Lr(d);
        s = s.slice(0, o = h), n = c.slice(0);
      }
      return s;
    });
    function d(h) {
      if (i[u] = h, a) {
        const [m, y] = rt(u);
        return a[u] = y, t(c[u], m);
      }
      return t(c[u]);
    }
  };
}
function ip(e, t, r = {}) {
  let n = [], s = [], i = [], o = [], a = 0, c;
  return rs(() => pi(i)), () => {
    const l = e() || [];
    return l[_u], He(() => {
      if (l.length === 0)
        return a !== 0 && (pi(i), i = [], n = [], s = [], a = 0, o = []), r.fallback && (n = [ra], s[0] = Lr((d) => (i[0] = d, r.fallback())), a = 1), s;
      for (n[0] === ra && (i[0](), i = [], n = [], s = [], a = 0), c = 0; c < l.length; c++)
        c < n.length && n[c] !== l[c] ? o[c](() => l[c]) : c >= n.length && (s[c] = Lr(u));
      for (; c < n.length; c++)
        i[c]();
      return a = o.length = i.length = l.length, n = l.slice(0), s = s.slice(0, a);
    });
    function u(d) {
      i[c] = d;
      const [h, m] = rt(l[c]);
      return o[c] = m, t(h, c);
    }
  };
}
function op(e, t) {
  return He(() => e(t || {}));
}
function Is() {
  return !0;
}
var na = {
  get(e, t, r) {
    return t === li ? r : e.get(t);
  },
  has(e, t) {
    return t === li ? !0 : e.has(t);
  },
  set: Is,
  deleteProperty: Is,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: Is,
      deleteProperty: Is
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function lo(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function ap() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const r = this[e]();
    if (r !== void 0)
      return r;
  }
}
function cp(...e) {
  let t = !1;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    t = t || !!o && li in o, e[i] = typeof o == "function" ? (t = !0, ct(o)) : o;
  }
  if (t)
    return new Proxy(
      {
        get(i) {
          for (let o = e.length - 1; o >= 0; o--) {
            const a = lo(e[o])[i];
            if (a !== void 0)
              return a;
          }
        },
        has(i) {
          for (let o = e.length - 1; o >= 0; o--)
            if (i in lo(e[o]))
              return !0;
          return !1;
        },
        keys() {
          const i = [];
          for (let o = 0; o < e.length; o++)
            i.push(...Object.keys(lo(e[o])));
          return [...new Set(i)];
        }
      },
      na
    );
  const r = {}, n = {}, s = /* @__PURE__ */ new Set();
  for (let i = e.length - 1; i >= 0; i--) {
    const o = e[i];
    if (!o)
      continue;
    const a = Object.getOwnPropertyNames(o);
    for (let c = 0, l = a.length; c < l; c++) {
      const u = a[c];
      if (u === "__proto__" || u === "constructor")
        continue;
      const d = Object.getOwnPropertyDescriptor(o, u);
      if (!s.has(u))
        d.get ? (s.add(u), Object.defineProperty(r, u, {
          enumerable: !0,
          configurable: !0,
          get: ap.bind(n[u] = [d.get.bind(o)])
        })) : (d.value !== void 0 && s.add(u), r[u] = d.value);
      else {
        const h = n[u];
        h ? d.get ? h.push(d.get.bind(o)) : d.value !== void 0 && h.push(() => d.value) : r[u] === void 0 && (r[u] = d.value);
      }
    }
  }
  return r;
}
function lp(e, ...t) {
  if (li in e) {
    const s = new Set(t.length > 1 ? t.flat() : t[0]), i = t.map((o) => new Proxy(
      {
        get(a) {
          return o.includes(a) ? e[a] : void 0;
        },
        has(a) {
          return o.includes(a) && a in e;
        },
        keys() {
          return o.filter((a) => a in e);
        }
      },
      na
    ));
    return i.push(
      new Proxy(
        {
          get(o) {
            return s.has(o) ? void 0 : e[o];
          },
          has(o) {
            return s.has(o) ? !1 : o in e;
          },
          keys() {
            return Object.keys(e).filter((o) => !s.has(o));
          }
        },
        na
      )
    ), i;
  }
  const r = {}, n = t.map(() => ({}));
  for (const s of Object.getOwnPropertyNames(e)) {
    const i = Object.getOwnPropertyDescriptor(e, s), o = !i.get && !i.set && i.enumerable && i.writable && i.configurable;
    let a = !1, c = 0;
    for (const l of t)
      l.includes(s) && (a = !0, o ? n[c][s] = i.value : Object.defineProperty(n[c], s, i)), ++c;
    a || (o ? r[s] = i.value : Object.defineProperty(r, s, i));
  }
  return [...n, r];
}
function up(e) {
  let t, r;
  const n = (s) => {
    const i = se.context;
    if (i) {
      const [a, c] = rt();
      se.count || (se.count = 0), se.count++, (r || (r = e())).then((l) => {
        Gn(i), se.count--, c(() => l.default), Gn();
      }), t = a;
    } else if (!t) {
      const [a] = Kh(() => (r || (r = e())).then((c) => c.default));
      t = a;
    }
    let o;
    return ct(
      () => (o = t()) && He(() => {
        if (!i)
          return o(s);
        const a = se.context;
        Gn(i);
        const c = o(s);
        return Gn(a), c;
      })
    );
  };
  return n.preload = () => r || ((r = e()).then((s) => t = () => s.default), r), n;
}
var dp = 0;
function Hx() {
  const e = se.context;
  return e ? `${e.id}${e.count++}` : `cl-${dp++}`;
}
var ju = (e) => `Stale read from <${e}>.`;
function Zx(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return ct(sp(() => e.each, e.children, t || void 0));
}
function Kx(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return ct(ip(() => e.each, e.children, t || void 0));
}
function Yx(e) {
  const t = e.keyed, r = ct(() => e.when, void 0, {
    equals: (n, s) => t ? n === s : !n == !s
  });
  return ct(
    () => {
      const n = r();
      if (n) {
        const s = e.children;
        return typeof s == "function" && s.length > 0 ? He(
          () => s(
            t ? n : () => {
              if (!He(r))
                throw ju("Show");
              return e.when;
            }
          )
        ) : s;
      }
      return e.fallback;
    },
    void 0,
    void 0
  );
}
function Gx(e) {
  let t = !1;
  const r = (i, o) => i[0] === o[0] && (t ? i[1] === o[1] : !i[1] == !o[1]) && i[2] === o[2], n = Tu(() => e.children), s = ct(
    () => {
      let i = n();
      Array.isArray(i) || (i = [i]);
      for (let o = 0; o < i.length; o++) {
        const a = i[o].when;
        if (a)
          return t = !!i[o].keyed, [o, a, i[o]];
      }
      return [-1];
    },
    void 0,
    {
      equals: r
    }
  );
  return ct(
    () => {
      const [i, o, a] = s();
      if (i < 0)
        return e.fallback;
      const c = a.children;
      return typeof c == "function" && c.length > 0 ? He(
        () => c(
          t ? o : () => {
            if (He(s)[0] !== i)
              throw ju("Match");
            return a.when;
          }
        )
      ) : c;
    },
    void 0,
    void 0
  );
}
function Qx(e) {
  return e;
}
var fp = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "disabled",
  "formnovalidate",
  "hidden",
  "indeterminate",
  "inert",
  "ismap",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "seamless",
  "selected"
], hp = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...fp
]), pp = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), mp = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), vp = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  class: "className",
  formnovalidate: {
    $: "formNoValidate",
    BUTTON: 1,
    INPUT: 1
  },
  ismap: {
    $: "isMap",
    IMG: 1
  },
  nomodule: {
    $: "noModule",
    SCRIPT: 1
  },
  playsinline: {
    $: "playsInline",
    VIDEO: 1
  },
  readonly: {
    $: "readOnly",
    INPUT: 1,
    TEXTAREA: 1
  }
});
function yp(e, t) {
  const r = vp[e];
  return typeof r == "object" ? r[t] ? r.$ : void 0 : r;
}
var gp = /* @__PURE__ */ new Set([
  "beforeinput",
  "click",
  "dblclick",
  "contextmenu",
  "focusin",
  "focusout",
  "input",
  "keydown",
  "keyup",
  "mousedown",
  "mousemove",
  "mouseout",
  "mouseover",
  "mouseup",
  "pointerdown",
  "pointermove",
  "pointerout",
  "pointerover",
  "pointerup",
  "touchend",
  "touchmove",
  "touchstart"
]), bp = /* @__PURE__ */ new Set([
  "altGlyph",
  "altGlyphDef",
  "altGlyphItem",
  "animate",
  "animateColor",
  "animateMotion",
  "animateTransform",
  "circle",
  "clipPath",
  "color-profile",
  "cursor",
  "defs",
  "desc",
  "ellipse",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feDistantLight",
  "feFlood",
  "feFuncA",
  "feFuncB",
  "feFuncG",
  "feFuncR",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMergeNode",
  "feMorphology",
  "feOffset",
  "fePointLight",
  "feSpecularLighting",
  "feSpotLight",
  "feTile",
  "feTurbulence",
  "filter",
  "font",
  "font-face",
  "font-face-format",
  "font-face-name",
  "font-face-src",
  "font-face-uri",
  "foreignObject",
  "g",
  "glyph",
  "glyphRef",
  "hkern",
  "image",
  "line",
  "linearGradient",
  "marker",
  "mask",
  "metadata",
  "missing-glyph",
  "mpath",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "set",
  "stop",
  "svg",
  "switch",
  "symbol",
  "text",
  "textPath",
  "tref",
  "tspan",
  "use",
  "view",
  "vkern"
]), xp = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function wp(e, t, r) {
  let n = r.length, s = t.length, i = n, o = 0, a = 0, c = t[s - 1].nextSibling, l = null;
  for (; o < s || a < i; ) {
    if (t[o] === r[a]) {
      o++, a++;
      continue;
    }
    for (; t[s - 1] === r[i - 1]; )
      s--, i--;
    if (s === o) {
      const u = i < n ? a ? r[a - 1].nextSibling : r[i - a] : c;
      for (; a < i; )
        e.insertBefore(r[a++], u);
    } else if (i === a)
      for (; o < s; )
        (!l || !l.has(t[o])) && t[o].remove(), o++;
    else if (t[o] === r[i - 1] && r[a] === t[s - 1]) {
      const u = t[--s].nextSibling;
      e.insertBefore(r[a++], t[o++].nextSibling), e.insertBefore(r[--i], u), t[s] = r[i];
    } else {
      if (!l) {
        l = /* @__PURE__ */ new Map();
        let d = a;
        for (; d < i; )
          l.set(r[d], d++);
      }
      const u = l.get(t[o]);
      if (u != null)
        if (a < u && u < i) {
          let d = o, h = 1, m;
          for (; ++d < s && d < i && !((m = l.get(t[d])) == null || m !== u + h); )
            h++;
          if (h > u - a) {
            const y = t[o];
            for (; a < u; )
              e.insertBefore(r[a++], y);
          } else
            e.replaceChild(r[a++], t[o++]);
        } else
          o++;
      else
        t[o++].remove();
    }
  }
}
var Lc = "_$DX_DELEGATE";
function Sp(e, t, r, n = {}) {
  let s;
  return Lr((i) => {
    s = i, t === document ? e() : ia(t, e(), t.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), t.textContent = "";
  };
}
function Jx(e, t, r) {
  let n;
  const s = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, r ? o.content.firstChild.firstChild : o.content.firstChild;
  }, i = t ? () => He(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function _p(e, t = window.document) {
  const r = t[Lc] || (t[Lc] = /* @__PURE__ */ new Set());
  for (let n = 0, s = e.length; n < s; n++) {
    const i = e[n];
    r.has(i) || (r.add(i), t.addEventListener(i, jp));
  }
}
function sa(e, t, r) {
  se.context || (r == null ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function Ep(e, t, r, n) {
  se.context || (n == null ? e.removeAttributeNS(t, r) : e.setAttributeNS(t, r, n));
}
function Op(e, t) {
  se.context || (t == null ? e.removeAttribute("class") : e.className = t);
}
function Cp(e, t, r, n) {
  if (n)
    Array.isArray(r) ? (e[`$$${t}`] = r[0], e[`$$${t}Data`] = r[1]) : e[`$$${t}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    e.addEventListener(t, r[0] = (i) => s.call(e, r[1], i));
  } else
    e.addEventListener(t, r);
}
function Tp(e, t, r = {}) {
  const n = Object.keys(t || {}), s = Object.keys(r);
  let i, o;
  for (i = 0, o = s.length; i < o; i++) {
    const a = s[i];
    !a || a === "undefined" || t[a] || (Fc(e, a, !1), delete r[a]);
  }
  for (i = 0, o = n.length; i < o; i++) {
    const a = n[i], c = !!t[a];
    !a || a === "undefined" || r[a] === c || !c || (Fc(e, a, !0), r[a] = c);
  }
  return r;
}
function Rp(e, t, r) {
  if (!t)
    return r ? sa(e, "style") : t;
  const n = e.style;
  if (typeof t == "string")
    return n.cssText = t;
  typeof r == "string" && (n.cssText = r = void 0), r || (r = {}), t || (t = {});
  let s, i;
  for (i in r)
    t[i] == null && n.removeProperty(i), delete r[i];
  for (i in t)
    s = t[i], s !== r[i] && (n.setProperty(i, s), r[i] = s);
  return r;
}
function Ap(e, t = {}, r, n) {
  const s = {};
  return n || Fr(
    () => s.children = Rn(e, t.children, s.children)
  ), Fr(() => t.ref && t.ref(e)), Fr(() => Np(e, t, r, !0, s, !0)), s;
}
function Xx(e, t, r) {
  return He(() => e(t, r));
}
function ia(e, t, r, n) {
  if (r !== void 0 && !n && (n = []), typeof t != "function")
    return Rn(e, t, n, r);
  Fr((s) => Rn(e, t(), s, r), n);
}
function Np(e, t, r, n, s = {}, i = !1) {
  t || (t = {});
  for (const o in s)
    if (!(o in t)) {
      if (o === "children")
        continue;
      s[o] = Uc(e, o, null, s[o], r, i);
    }
  for (const o in t) {
    if (o === "children") {
      n || Rn(e, t.children);
      continue;
    }
    const a = t[o];
    s[o] = Uc(e, o, a, s[o], r, i);
  }
}
function Pp(e) {
  let t, r;
  return !se.context || !(t = se.registry.get(r = kp())) ? e() : (se.completed && se.completed.add(t), se.registry.delete(r), t);
}
function $p(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, r) => r.toUpperCase());
}
function Fc(e, t, r) {
  const n = t.trim().split(/\s+/);
  for (let s = 0, i = n.length; s < i; s++)
    e.classList.toggle(n[s], r);
}
function Uc(e, t, r, n, s, i) {
  let o, a, c, l, u;
  if (t === "style")
    return Rp(e, r, n);
  if (t === "classList")
    return Tp(e, r, n);
  if (r === n)
    return n;
  if (t === "ref")
    i || r(e);
  else if (t.slice(0, 3) === "on:") {
    const d = t.slice(3);
    n && e.removeEventListener(d, n), r && e.addEventListener(d, r);
  } else if (t.slice(0, 10) === "oncapture:") {
    const d = t.slice(10);
    n && e.removeEventListener(d, n, !0), r && e.addEventListener(d, r, !0);
  } else if (t.slice(0, 2) === "on") {
    const d = t.slice(2).toLowerCase(), h = gp.has(d);
    if (!h && n) {
      const m = Array.isArray(n) ? n[0] : n;
      e.removeEventListener(d, m);
    }
    (h || r) && (Cp(e, d, r, h), h && _p([d]));
  } else if (t.slice(0, 5) === "attr:")
    sa(e, t.slice(5), r);
  else if ((u = t.slice(0, 5) === "prop:") || (c = pp.has(t)) || !s && ((l = yp(t, e.tagName)) || (a = hp.has(t))) || (o = e.nodeName.includes("-"))) {
    if (u)
      t = t.slice(5), a = !0;
    else if (se.context)
      return r;
    t === "class" || t === "className" ? Op(e, r) : o && !a && !c ? e[$p(t)] = r : e[l || t] = r;
  } else {
    const d = s && t.indexOf(":") > -1 && xp[t.split(":")[0]];
    d ? Ep(e, d, t, r) : sa(e, mp[t] || t, r);
  }
  return r;
}
function jp(e) {
  const t = `$$${e.type}`;
  let r = e.composedPath && e.composedPath()[0] || e.target;
  for (e.target !== r && Object.defineProperty(e, "target", {
    configurable: !0,
    value: r
  }), Object.defineProperty(e, "currentTarget", {
    configurable: !0,
    get() {
      return r || document;
    }
  }), se.registry && !se.done && (se.done = _$HY.done = !0); r; ) {
    const n = r[t];
    if (n && !r.disabled) {
      const s = r[`${t}Data`];
      if (s !== void 0 ? n.call(r, s, e) : n.call(r, e), e.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function Rn(e, t, r, n, s) {
  if (se.context) {
    !r && (r = [...e.childNodes]);
    let a = [];
    for (let c = 0; c < r.length; c++) {
      const l = r[c];
      l.nodeType === 8 && l.data.slice(0, 2) === "!$" ? l.remove() : a.push(l);
    }
    r = a;
  }
  for (; typeof r == "function"; )
    r = r();
  if (t === r)
    return r;
  const i = typeof t, o = n !== void 0;
  if (e = o && r[0] && r[0].parentNode || e, i === "string" || i === "number") {
    if (se.context)
      return r;
    if (i === "number" && (t = t.toString()), o) {
      let a = r[0];
      a && a.nodeType === 3 ? a.data = t : a = document.createTextNode(t), r = Hr(e, r, n, a);
    } else
      r !== "" && typeof r == "string" ? r = e.firstChild.data = t : r = e.textContent = t;
  } else if (t == null || i === "boolean") {
    if (se.context)
      return r;
    r = Hr(e, r, n);
  } else {
    if (i === "function")
      return Fr(() => {
        let a = t();
        for (; typeof a == "function"; )
          a = a();
        r = Rn(e, a, r, n);
      }), () => r;
    if (Array.isArray(t)) {
      const a = [], c = r && Array.isArray(r);
      if (oa(a, t, r, s))
        return Fr(() => r = Rn(e, a, r, n, !0)), () => r;
      if (se.context) {
        if (!a.length)
          return r;
        if (n === void 0)
          return [...e.childNodes];
        let l = a[0], u = [l];
        for (; (l = l.nextSibling) !== n; )
          u.push(l);
        return r = u;
      }
      if (a.length === 0) {
        if (r = Hr(e, r, n), o)
          return r;
      } else
        c ? r.length === 0 ? zc(e, a, n) : wp(e, r, a) : (r && Hr(e), zc(e, a));
      r = a;
    } else if (t.nodeType) {
      if (se.context && t.parentNode)
        return r = o ? [t] : t;
      if (Array.isArray(r)) {
        if (o)
          return r = Hr(e, r, n, t);
        Hr(e, r, null, t);
      } else
        r == null || r === "" || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      r = t;
    }
  }
  return r;
}
function oa(e, t, r, n) {
  let s = !1;
  for (let i = 0, o = t.length; i < o; i++) {
    let a = t[i], c = r && r[i], l;
    if (!(a == null || a === !0 || a === !1))
      if ((l = typeof a) == "object" && a.nodeType)
        e.push(a);
      else if (Array.isArray(a))
        s = oa(e, a, c) || s;
      else if (l === "function")
        if (n) {
          for (; typeof a == "function"; )
            a = a();
          s = oa(
            e,
            Array.isArray(a) ? a : [a],
            Array.isArray(c) ? c : [c]
          ) || s;
        } else
          e.push(a), s = !0;
      else {
        const u = String(a);
        c && c.nodeType === 3 && c.data === u ? e.push(c) : e.push(document.createTextNode(u));
      }
  }
  return s;
}
function zc(e, t, r = null) {
  for (let n = 0, s = t.length; n < s; n++)
    e.insertBefore(t[n], r);
}
function Hr(e, t, r, n) {
  if (r === void 0)
    return e.textContent = "";
  const s = n || document.createTextNode("");
  if (t.length) {
    let i = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const a = t[o];
      if (s !== a) {
        const c = a.parentNode === e;
        !i && !o ? c ? e.replaceChild(s, a) : e.insertBefore(s, r) : c && a.remove();
      } else
        i = !0;
    }
  } else
    e.insertBefore(s, r);
  return [s];
}
function kp() {
  const e = se.context;
  return `${e.id}${e.count++}`;
}
var Ip = "http://www.w3.org/2000/svg";
function ku(e, t = !1) {
  return t ? document.createElementNS(Ip, e) : document.createElement(e);
}
function ew(e) {
  const { useShadow: t } = e, r = document.createTextNode(""), n = () => e.mount || document.body, s = Dc();
  let i, o = !!se.context;
  return Cu(
    () => {
      o && (Dc().user = o = !1), i || (i = Gh(s, () => ct(() => e.children)));
      const a = n();
      if (a instanceof HTMLHeadElement) {
        const [c, l] = rt(!1), u = () => l(!0);
        Lr((d) => ia(a, () => c() ? d() : i(), null)), rs(u);
      } else {
        const c = ku(e.isSVG ? "g" : "div", e.isSVG), l = t && c.attachShadow ? c.attachShadow({
          mode: "open"
        }) : c;
        Object.defineProperty(c, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), ia(l, i), a.appendChild(c), e.ref && e.ref(c), rs(() => a.removeChild(c));
      }
    },
    void 0,
    {
      render: !o
    }
  ), r;
}
function tw(e) {
  const [t, r] = lp(e, ["component"]), n = ct(() => t.component);
  return ct(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return He(() => s(r));
      case "string":
        const i = bp.has(s), o = se.context ? Pp() : ku(s, i);
        return Ap(o, r, i), o;
    }
  });
}
var Mp = (
  /** @class */
  function() {
    function e() {
      this.keyToValue = /* @__PURE__ */ new Map(), this.valueToKey = /* @__PURE__ */ new Map();
    }
    return e.prototype.set = function(t, r) {
      this.keyToValue.set(t, r), this.valueToKey.set(r, t);
    }, e.prototype.getByKey = function(t) {
      return this.keyToValue.get(t);
    }, e.prototype.getByValue = function(t) {
      return this.valueToKey.get(t);
    }, e.prototype.clear = function() {
      this.keyToValue.clear(), this.valueToKey.clear();
    }, e;
  }()
), Iu = (
  /** @class */
  function() {
    function e(t) {
      this.generateIdentifier = t, this.kv = new Mp();
    }
    return e.prototype.register = function(t, r) {
      this.kv.getByValue(t) || (r || (r = this.generateIdentifier(t)), this.kv.set(r, t));
    }, e.prototype.clear = function() {
      this.kv.clear();
    }, e.prototype.getIdentifier = function(t) {
      return this.kv.getByValue(t);
    }, e.prototype.getValue = function(t) {
      return this.kv.getByKey(t);
    }, e;
  }()
), Dp = /* @__PURE__ */ function() {
  var e = function(t, r) {
    return e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(n, s) {
      n.__proto__ = s;
    } || function(n, s) {
      for (var i in s)
        Object.prototype.hasOwnProperty.call(s, i) && (n[i] = s[i]);
    }, e(t, r);
  };
  return function(t, r) {
    if (typeof r != "function" && r !== null)
      throw new TypeError("Class extends value " + String(r) + " is not a constructor or null");
    e(t, r);
    function n() {
      this.constructor = t;
    }
    t.prototype = r === null ? Object.create(r) : (n.prototype = r.prototype, new n());
  };
}(), Lp = (
  /** @class */
  function(e) {
    Dp(t, e);
    function t() {
      var r = e.call(this, function(n) {
        return n.name;
      }) || this;
      return r.classToAllowedProps = /* @__PURE__ */ new Map(), r;
    }
    return t.prototype.register = function(r, n) {
      typeof n == "object" ? (n.allowProps && this.classToAllowedProps.set(r, n.allowProps), e.prototype.register.call(this, r, n.identifier)) : e.prototype.register.call(this, r, n);
    }, t.prototype.getAllowedProps = function(r) {
      return this.classToAllowedProps.get(r);
    }, t;
  }(Iu)
), Fp = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), s, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
};
function Up(e) {
  if ("values" in Object)
    return Object.values(e);
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push(e[r]);
  return t;
}
function zp(e, t) {
  var r = Up(e);
  if ("find" in r)
    return r.find(t);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (t(i))
      return i;
  }
}
function An(e, t) {
  Object.entries(e).forEach(function(r) {
    var n = Fp(r, 2), s = n[0], i = n[1];
    return t(i, s);
  });
}
function Xs(e, t) {
  return e.indexOf(t) !== -1;
}
function Bc(e, t) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (t(n))
      return n;
  }
}
var Bp = (
  /** @class */
  function() {
    function e() {
      this.transfomers = {};
    }
    return e.prototype.register = function(t) {
      this.transfomers[t.name] = t;
    }, e.prototype.findApplicable = function(t) {
      return zp(this.transfomers, function(r) {
        return r.isApplicable(t);
      });
    }, e.prototype.findByName = function(t) {
      return this.transfomers[t];
    }, e;
  }()
), Vp = function(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}, Mu = function(e) {
  return typeof e > "u";
}, Wp = function(e) {
  return e === null;
}, ns = function(e) {
  return typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype;
}, aa = function(e) {
  return ns(e) && Object.keys(e).length === 0;
}, xr = function(e) {
  return Array.isArray(e);
}, qp = function(e) {
  return typeof e == "string";
}, Hp = function(e) {
  return typeof e == "number" && !isNaN(e);
}, Zp = function(e) {
  return typeof e == "boolean";
}, Kp = function(e) {
  return e instanceof RegExp;
}, ss = function(e) {
  return e instanceof Map;
}, is = function(e) {
  return e instanceof Set;
}, Du = function(e) {
  return Vp(e) === "Symbol";
}, Yp = function(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}, Gp = function(e) {
  return e instanceof Error;
}, Vc = function(e) {
  return typeof e == "number" && isNaN(e);
}, Qp = function(e) {
  return Zp(e) || Wp(e) || Mu(e) || Hp(e) || qp(e) || Du(e);
}, Jp = function(e) {
  return typeof e == "bigint";
}, Xp = function(e) {
  return e === 1 / 0 || e === -1 / 0;
}, em = function(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}, tm = function(e) {
  return e instanceof URL;
}, Lu = function(e) {
  return e.replace(/\./g, "\\.");
}, uo = function(e) {
  return e.map(String).map(Lu).join(".");
}, Jn = function(e) {
  for (var t = [], r = "", n = 0; n < e.length; n++) {
    var s = e.charAt(n), i = s === "\\" && e.charAt(n + 1) === ".";
    if (i) {
      r += ".", n++;
      continue;
    }
    var o = s === ".";
    if (o) {
      t.push(r), r = "";
      continue;
    }
    r += s;
  }
  var a = r;
  return t.push(a), t;
}, ca = function() {
  return ca = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, ca.apply(this, arguments);
}, la = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), s, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}, ua = function(e, t) {
  for (var r = 0, n = t.length, s = e.length; r < n; r++, s++)
    e[s] = t[r];
  return e;
};
function Ot(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var Fu = [
  Ot(Mu, "undefined", function() {
    return null;
  }, function() {
  }),
  Ot(Jp, "bigint", function(e) {
    return e.toString();
  }, function(e) {
    return typeof BigInt < "u" ? BigInt(e) : e;
  }),
  Ot(Yp, "Date", function(e) {
    return e.toISOString();
  }, function(e) {
    return new Date(e);
  }),
  Ot(Gp, "Error", function(e, t) {
    var r = {
      name: e.name,
      message: e.message
    };
    return t.allowedErrorProps.forEach(function(n) {
      r[n] = e[n];
    }), r;
  }, function(e, t) {
    var r = new Error(e.message);
    return r.name = e.name, r.stack = e.stack, t.allowedErrorProps.forEach(function(n) {
      r[n] = e[n];
    }), r;
  }),
  Ot(Kp, "regexp", function(e) {
    return "" + e;
  }, function(e) {
    var t = e.slice(1, e.lastIndexOf("/")), r = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, r);
  }),
  Ot(
    is,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(e) {
      return ua([], la(e.values()));
    },
    function(e) {
      return new Set(e);
    }
  ),
  Ot(ss, "map", function(e) {
    return ua([], la(e.entries()));
  }, function(e) {
    return new Map(e);
  }),
  Ot(function(e) {
    return Vc(e) || Xp(e);
  }, "number", function(e) {
    return Vc(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Ot(function(e) {
    return e === 0 && 1 / e === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Ot(tm, "URL", function(e) {
    return e.toString();
  }, function(e) {
    return new URL(e);
  })
];
function Mi(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var Uu = Mi(function(e, t) {
  if (Du(e)) {
    var r = !!t.symbolRegistry.getIdentifier(e);
    return r;
  }
  return !1;
}, function(e, t) {
  var r = t.symbolRegistry.getIdentifier(e);
  return ["symbol", r];
}, function(e) {
  return e.description;
}, function(e, t, r) {
  var n = r.symbolRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown symbol");
  return n;
}), rm = [
  Int8Array,
  Uint8Array,
  Int16Array,
  Uint16Array,
  Int32Array,
  Uint32Array,
  Float32Array,
  Float64Array,
  Uint8ClampedArray
].reduce(function(e, t) {
  return e[t.name] = t, e;
}, {}), zu = Mi(em, function(e) {
  return ["typed-array", e.constructor.name];
}, function(e) {
  return ua([], la(e));
}, function(e, t) {
  var r = rm[t[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(e);
});
function Bu(e, t) {
  if (e != null && e.constructor) {
    var r = !!t.classRegistry.getIdentifier(e.constructor);
    return r;
  }
  return !1;
}
var Vu = Mi(Bu, function(e, t) {
  var r = t.classRegistry.getIdentifier(e.constructor);
  return ["class", r];
}, function(e, t) {
  var r = t.classRegistry.getAllowedProps(e.constructor);
  if (!r)
    return ca({}, e);
  var n = {};
  return r.forEach(function(s) {
    n[s] = e[s];
  }), n;
}, function(e, t, r) {
  var n = r.classRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), e);
}), Wu = Mi(function(e, t) {
  return !!t.customTransformerRegistry.findApplicable(e);
}, function(e, t) {
  var r = t.customTransformerRegistry.findApplicable(e);
  return ["custom", r.name];
}, function(e, t) {
  var r = t.customTransformerRegistry.findApplicable(e);
  return r.serialize(e);
}, function(e, t, r) {
  var n = r.customTransformerRegistry.findByName(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown custom value");
  return n.deserialize(e);
}), nm = [Vu, Uu, Wu, zu], Wc = function(e, t) {
  var r = Bc(nm, function(s) {
    return s.isApplicable(e, t);
  });
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation(e, t)
    };
  var n = Bc(Fu, function(s) {
    return s.isApplicable(e, t);
  });
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation
    };
}, qu = {};
Fu.forEach(function(e) {
  qu[e.annotation] = e;
});
var sm = function(e, t, r) {
  if (xr(t))
    switch (t[0]) {
      case "symbol":
        return Uu.untransform(e, t, r);
      case "class":
        return Vu.untransform(e, t, r);
      case "custom":
        return Wu.untransform(e, t, r);
      case "typed-array":
        return zu.untransform(e, t, r);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    var n = qu[t];
    if (!n)
      throw new Error("Unknown transformation: " + t);
    return n.untransform(e, r);
  }
}, Qr = function(e, t) {
  for (var r = e.keys(); t > 0; )
    r.next(), t--;
  return r.next().value;
};
function Hu(e) {
  if (Xs(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Xs(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Xs(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var im = function(e, t) {
  Hu(t);
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (is(e))
      e = Qr(e, +n);
    else if (ss(e)) {
      var s = +n, i = +t[++r] == 0 ? "key" : "value", o = Qr(e, s);
      switch (i) {
        case "key":
          e = o;
          break;
        case "value":
          e = e.get(o);
          break;
      }
    } else
      e = e[n];
  }
  return e;
}, da = function(e, t, r) {
  if (Hu(t), t.length === 0)
    return r(e);
  for (var n = e, s = 0; s < t.length - 1; s++) {
    var i = t[s];
    if (xr(n)) {
      var o = +i;
      n = n[o];
    } else if (ns(n))
      n = n[i];
    else if (is(n)) {
      var a = +i;
      n = Qr(n, a);
    } else if (ss(n)) {
      var c = s === t.length - 2;
      if (c)
        break;
      var a = +i, l = +t[++s] == 0 ? "key" : "value", u = Qr(n, a);
      switch (l) {
        case "key":
          n = u;
          break;
        case "value":
          n = n.get(u);
          break;
      }
    }
  }
  var d = t[t.length - 1];
  if (xr(n) ? n[+d] = r(n[+d]) : ns(n) && (n[d] = r(n[d])), is(n)) {
    var h = Qr(n, +d), m = r(h);
    h !== m && (n.delete(h), n.add(m));
  }
  if (ss(n)) {
    var a = +t[t.length - 2], y = Qr(n, a), l = +d == 0 ? "key" : "value";
    switch (l) {
      case "key": {
        var p = r(y);
        n.set(p, n.get(y)), p !== y && n.delete(y);
        break;
      }
      case "value": {
        n.set(y, r(n.get(y)));
        break;
      }
    }
  }
  return e;
}, qt = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), s, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}, yr = function(e, t) {
  for (var r = 0, n = t.length, s = e.length; r < n; r++, s++)
    e[s] = t[r];
  return e;
};
function fa(e, t, r) {
  if (r === void 0 && (r = []), !!e) {
    if (!xr(e)) {
      An(e, function(o, a) {
        return fa(o, t, yr(yr([], qt(r)), qt(Jn(a))));
      });
      return;
    }
    var n = qt(e, 2), s = n[0], i = n[1];
    i && An(i, function(o, a) {
      fa(o, t, yr(yr([], qt(r)), qt(Jn(a))));
    }), t(s, r);
  }
}
function om(e, t, r) {
  return fa(t, function(n, s) {
    e = da(e, s, function(i) {
      return sm(i, n, r);
    });
  }), e;
}
function am(e, t) {
  function r(o, a) {
    var c = im(e, Jn(a));
    o.map(Jn).forEach(function(l) {
      e = da(e, l, function() {
        return c;
      });
    });
  }
  if (xr(t)) {
    var n = qt(t, 2), s = n[0], i = n[1];
    s.forEach(function(o) {
      e = da(e, Jn(o), function() {
        return e;
      });
    }), i && An(i, r);
  } else
    An(t, r);
  return e;
}
var cm = function(e, t) {
  return ns(e) || xr(e) || ss(e) || is(e) || Bu(e, t);
};
function lm(e, t, r) {
  var n = r.get(e);
  n ? n.push(t) : r.set(e, [t]);
}
function um(e, t) {
  var r = {}, n = void 0;
  return e.forEach(function(s) {
    if (!(s.length <= 1)) {
      t || (s = s.map(function(c) {
        return c.map(String);
      }).sort(function(c, l) {
        return c.length - l.length;
      }));
      var i = qt(s), o = i[0], a = i.slice(1);
      o.length === 0 ? n = a.map(uo) : r[uo(o)] = a.map(uo);
    }
  }), n ? aa(r) ? [n] : [n, r] : aa(r) ? void 0 : r;
}
var Zu = function(e, t, r, n, s, i, o) {
  var a;
  s === void 0 && (s = []), i === void 0 && (i = []), o === void 0 && (o = /* @__PURE__ */ new Map());
  var c = Qp(e);
  if (!c) {
    lm(e, s, t);
    var l = o.get(e);
    if (l)
      return n ? {
        transformedValue: null
      } : l;
  }
  if (!cm(e, r)) {
    var u = Wc(e, r), d = u ? {
      transformedValue: u.value,
      annotations: [u.type]
    } : {
      transformedValue: e
    };
    return c || o.set(e, d), d;
  }
  if (Xs(i, e))
    return {
      transformedValue: null
    };
  var h = Wc(e, r), m = (a = h == null ? void 0 : h.value) !== null && a !== void 0 ? a : e, y = xr(m) ? [] : {}, p = {};
  An(m, function(S, O) {
    var w = Zu(S, t, r, n, yr(yr([], qt(s)), [O]), yr(yr([], qt(i)), [e]), o);
    y[O] = w.transformedValue, xr(w.annotations) ? p[O] = w.annotations : ns(w.annotations) && An(w.annotations, function(E, x) {
      p[Lu(O) + "." + x] = E;
    });
  });
  var v = aa(p) ? {
    transformedValue: y,
    annotations: h ? [h.type] : void 0
  } : {
    transformedValue: y,
    annotations: h ? [h.type, p] : p
  };
  return c || o.set(e, v), v;
};
function Ku(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function dm(e) {
  if (Ku(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function qc(e) {
  return Ku(e) === "Array";
}
function fm(e, t, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = r), s && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function ha(e, t = {}) {
  if (qc(e))
    return e.map((s) => ha(s, t));
  if (!dm(e))
    return e;
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols(e);
  return [...r, ...n].reduce((s, i) => {
    if (qc(t.props) && !t.props.includes(i))
      return s;
    const o = e[i], a = ha(o, t);
    return fm(s, i, a, e, t.nonenumerable), s;
  }, {});
}
var Or = function() {
  return Or = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, Or.apply(this, arguments);
}, hm = function(e, t) {
  var r = typeof Symbol == "function" && e[Symbol.iterator];
  if (!r)
    return e;
  var n = r.call(e), s, i = [], o;
  try {
    for (; (t === void 0 || t-- > 0) && !(s = n.next()).done; )
      i.push(s.value);
  } catch (a) {
    o = { error: a };
  } finally {
    try {
      s && !s.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return i;
}, pm = function(e, t) {
  for (var r = 0, n = t.length, s = e.length; r < n; r++, s++)
    e[s] = t[r];
  return e;
}, Yu = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new Lp(), this.symbolRegistry = new Iu(function(i) {
        var o;
        return (o = i.description) !== null && o !== void 0 ? o : "";
      }), this.customTransformerRegistry = new Bp(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return e.prototype.serialize = function(t) {
      var r = /* @__PURE__ */ new Map(), n = Zu(t, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Or(Or({}, s.meta), { values: n.annotations }));
      var i = um(r, this.dedupe);
      return i && (s.meta = Or(Or({}, s.meta), { referentialEqualities: i })), s;
    }, e.prototype.deserialize = function(t) {
      var r = t.json, n = t.meta, s = ha(r);
      return n != null && n.values && (s = om(s, n.values, this)), n != null && n.referentialEqualities && (s = am(s, n.referentialEqualities)), s;
    }, e.prototype.stringify = function(t) {
      return JSON.stringify(this.serialize(t));
    }, e.prototype.parse = function(t) {
      return this.deserialize(JSON.parse(t));
    }, e.prototype.registerClass = function(t, r) {
      this.classRegistry.register(t, r);
    }, e.prototype.registerSymbol = function(t, r) {
      this.symbolRegistry.register(t, r);
    }, e.prototype.registerCustom = function(t, r) {
      this.customTransformerRegistry.register(Or({ name: r }, t));
    }, e.prototype.allowErrorProps = function() {
      for (var t, r = [], n = 0; n < arguments.length; n++)
        r[n] = arguments[n];
      (t = this.allowedErrorProps).push.apply(t, pm([], hm(r)));
    }, e.defaultInstance = new e(), e.serialize = e.defaultInstance.serialize.bind(e.defaultInstance), e.deserialize = e.defaultInstance.deserialize.bind(e.defaultInstance), e.stringify = e.defaultInstance.stringify.bind(e.defaultInstance), e.parse = e.defaultInstance.parse.bind(e.defaultInstance), e.registerClass = e.defaultInstance.registerClass.bind(e.defaultInstance), e.registerSymbol = e.defaultInstance.registerSymbol.bind(e.defaultInstance), e.registerCustom = e.defaultInstance.registerCustom.bind(e.defaultInstance), e.allowErrorProps = e.defaultInstance.allowErrorProps.bind(e.defaultInstance), e;
  }()
), mm = Yu.serialize, rw = Yu.stringify;
function nw(e) {
  return e.state.fetchStatus === "fetching" ? "fetching" : e.getObserversCount() ? e.state.fetchStatus === "paused" ? "paused" : e.isStale() ? "stale" : "fresh" : "inactive";
}
function sw(e, t) {
  return `${e}${t.charAt(0).toUpperCase() + t.slice(1)}`;
}
function iw({
  queryState: e,
  observerCount: t,
  isStale: r
}) {
  return e.fetchStatus === "fetching" ? "blue" : t ? e.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function ow({
  status: e,
  isPaused: t
}) {
  return t ? "purple" : e === "error" ? "red" : e === "pending" ? "yellow" : e === "success" ? "green" : "gray";
}
function aw(e) {
  return e === "fresh" ? "green" : e === "stale" ? "yellow" : e === "paused" ? "purple" : e === "inactive" ? "gray" : "blue";
}
var cw = (e, t = !1) => {
  const {
    json: r
  } = mm(e);
  return JSON.stringify(r, null, t ? 2 : void 0);
}, Ms = (e) => e.state.fetchStatus !== "idle" ? 0 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3, vm = (e, t) => e.queryHash.localeCompare(t.queryHash), Gu = (e, t) => e.state.dataUpdatedAt < t.state.dataUpdatedAt ? 1 : -1, ym = (e, t) => Ms(e) === Ms(t) ? Gu(e, t) : Ms(e) > Ms(t) ? 1 : -1, lw = {
  status: ym,
  "query hash": vm,
  "last updated": Gu
}, Ds = (e) => e.state.isPaused ? 0 : e.state.status === "error" ? 2 : e.state.status === "pending" ? 1 : 3, Qu = (e, t) => e.state.submittedAt < t.state.submittedAt ? 1 : -1, gm = (e, t) => Ds(e) === Ds(t) ? Qu(e, t) : Ds(e) > Ds(t) ? 1 : -1, uw = {
  status: gm,
  "last updated": Qu
}, dw = (e) => e * parseFloat(getComputedStyle(document.documentElement).fontSize), fw = () => {
  const [e, t] = rt("dark");
  return Yh(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    t(r.matches ? "dark" : "light");
    const n = (s) => {
      t(s.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), rs(() => r.removeEventListener("change", n));
  }), e;
}, Ls = (e, t, r) => {
  if (t.length === 0)
    return r;
  if (e instanceof Map) {
    const n = new Map(e);
    if (t.length === 1)
      return n.set(t[0], r), n;
    const [s, ...i] = t;
    return n.set(s, Ls(n.get(s), i, r)), n;
  }
  if (e instanceof Set) {
    const n = Ls(Array.from(e), t, r);
    return new Set(n);
  }
  if (Array.isArray(e)) {
    const n = [...e];
    if (t.length === 1)
      return n[t[0]] = r, n;
    const [s, ...i] = t;
    return n[s] = Ls(n[s], i, r), n;
  }
  if (e instanceof Object) {
    const n = {
      ...e
    };
    if (t.length === 1)
      return n[t[0]] = r, n;
    const [s, ...i] = t;
    return n[s] = Ls(n[s], i, r), n;
  }
  return e;
}, Fs = (e, t) => {
  if (e instanceof Map) {
    const r = new Map(e);
    if (t.length === 1)
      return r.delete(t[0]), r;
    const [n, ...s] = t;
    return r.set(n, Fs(r.get(n), s)), r;
  }
  if (e instanceof Set) {
    const r = Fs(Array.from(e), t);
    return new Set(r);
  }
  if (Array.isArray(e)) {
    const r = [...e];
    if (t.length === 1)
      return r.filter((i, o) => o.toString() !== t[0]);
    const [n, ...s] = t;
    return r[n] = Fs(r[n], s), r;
  }
  if (e instanceof Object) {
    const r = {
      ...e
    };
    if (t.length === 1)
      return delete r[t[0]], r;
    const [n, ...s] = t;
    return r[n] = Fs(r[n], s), r;
  }
  return e;
}, bm = (e) => {
  if (!e || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", e), document.head.appendChild(r);
}, gn, Es, Os, Cs, Mr, Ts, bn, xn, wn, Sn, _n, Rs, lu, xm = (lu = class {
  constructor(e) {
    D(this, gn, void 0);
    D(this, Es, void 0);
    D(this, Os, void 0);
    D(this, Cs, void 0);
    D(this, Mr, !1);
    D(this, Ts, void 0);
    D(this, bn, void 0);
    D(this, xn, void 0);
    D(this, wn, void 0);
    D(this, Sn, void 0);
    D(this, _n, void 0);
    D(this, Rs, void 0);
    const {
      client: t,
      queryFlavor: r,
      version: n,
      onlineManager: s,
      buttonPosition: i,
      position: o,
      initialIsOpen: a,
      errorTypes: c,
      styleNonce: l
    } = e;
    P(this, gn, rt(t)), P(this, Os, r), P(this, Cs, n), P(this, Es, s), P(this, Ts, l), P(this, bn, rt(i)), P(this, xn, rt(o)), P(this, wn, rt(a)), P(this, Sn, rt(c));
  }
  setButtonPosition(e) {
    g(this, bn)[1](e);
  }
  setPosition(e) {
    g(this, xn)[1](e);
  }
  setInitialIsOpen(e) {
    g(this, wn)[1](e);
  }
  setErrorTypes(e) {
    g(this, Sn)[1](e);
  }
  setClient(e) {
    g(this, gn)[1](e);
  }
  mount(e) {
    if (g(this, Mr))
      throw new Error("Devtools is already mounted");
    const t = Sp(() => {
      const [r] = g(this, bn), [n] = g(this, xn), [s] = g(this, wn), [i] = g(this, Sn), [o] = g(this, gn);
      let a;
      g(this, _n) ? a = g(this, _n) : (a = up(() => import("./BSBCIQID-0r2aPimM.js")), P(this, _n, a)), bm(g(this, Ts));
      const c = this;
      return op(a, cp({
        get queryFlavor() {
          return g(c, Os);
        },
        get version() {
          return g(c, Cs);
        },
        get onlineManager() {
          return g(c, Es);
        }
      }, {
        get client() {
          return o();
        },
        get buttonPosition() {
          return r();
        },
        get position() {
          return n();
        },
        get initialIsOpen() {
          return s();
        },
        get errorTypes() {
          return i();
        }
      }));
    }, e);
    P(this, Mr, !0), P(this, Rs, t);
  }
  unmount() {
    var e;
    if (!g(this, Mr))
      throw new Error("Devtools is not mounted");
    (e = g(this, Rs)) == null || e.call(this), P(this, Mr, !1);
  }
}, gn = new WeakMap(), Es = new WeakMap(), Os = new WeakMap(), Cs = new WeakMap(), Mr = new WeakMap(), Ts = new WeakMap(), bn = new WeakMap(), xn = new WeakMap(), wn = new WeakMap(), Sn = new WeakMap(), _n = new WeakMap(), Rs = new WeakMap(), lu);
function wm(e) {
  const t = Fn(), r = e.client || t, n = $.useRef(null), { buttonPosition: s, position: i, initialIsOpen: o, errorTypes: a, styleNonce: c } = e, [l] = $.useState(
    new xm({
      client: r,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: ts,
      buttonPosition: s,
      position: i,
      initialIsOpen: o,
      errorTypes: a,
      styleNonce: c
    })
  );
  return $.useEffect(() => {
    l.setClient(r);
  }, [r, l]), $.useEffect(() => {
    s && l.setButtonPosition(s);
  }, [s, l]), $.useEffect(() => {
    i && l.setPosition(i);
  }, [i, l]), $.useEffect(() => {
    l.setInitialIsOpen(o || !1);
  }, [o, l]), $.useEffect(() => {
    l.setErrorTypes(a || []);
  }, [a, l]), $.useEffect(() => (n.current && l.mount(n.current), () => {
    l.unmount();
  }), [l]), /* @__PURE__ */ $.createElement("div", { className: "tsqd-parent-container", ref: n });
}
var Sm = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : wm;
const Ju = Qt(void 0), _m = ({ children: e, ...t }) => /* @__PURE__ */ f.jsx(Ju.Provider, { value: t, children: e }), Ka = () => {
  const e = Sr(Ju);
  if (!e)
    throw new Error("useAppContext must be used within an AppProvider");
  return e;
};
function Xu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Em } = Object.prototype, { getPrototypeOf: Ya } = Object, Di = /* @__PURE__ */ ((e) => (t) => {
  const r = Em.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Lt = (e) => (e = e.toLowerCase(), (t) => Di(t) === e), Li = (e) => (t) => typeof t === e, { isArray: zn } = Array, os = Li("undefined");
function Om(e) {
  return e !== null && !os(e) && e.constructor !== null && !os(e.constructor) && yt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const ed = Lt("ArrayBuffer");
function Cm(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && ed(e.buffer), t;
}
const Tm = Li("string"), yt = Li("function"), td = Li("number"), Fi = (e) => e !== null && typeof e == "object", Rm = (e) => e === !0 || e === !1, ei = (e) => {
  if (Di(e) !== "object")
    return !1;
  const t = Ya(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Am = Lt("Date"), Nm = Lt("File"), Pm = Lt("Blob"), $m = Lt("FileList"), jm = (e) => Fi(e) && yt(e.pipe), km = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || yt(e.append) && ((t = Di(e)) === "formdata" || // detect form-data instance
  t === "object" && yt(e.toString) && e.toString() === "[object FormData]"));
}, Im = Lt("URLSearchParams"), Mm = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function As(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), zn(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (n = 0; n < o; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function rd(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const nd = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, sd = (e) => !os(e) && e !== nd;
function pa() {
  const { caseless: e } = sd(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && rd(t, s) || s;
    ei(t[i]) && ei(n) ? t[i] = pa(t[i], n) : ei(n) ? t[i] = pa({}, n) : zn(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && As(arguments[n], r);
  return t;
}
const Dm = (e, t, r, { allOwnKeys: n } = {}) => (As(t, (s, i) => {
  r && yt(s) ? e[i] = Xu(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), Lm = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Fm = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Um = (e, t, r, n) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = r !== !1 && Ya(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, zm = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Bm = (e) => {
  if (!e)
    return null;
  if (zn(e))
    return e;
  let t = e.length;
  if (!td(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Vm = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Ya(Uint8Array)), Wm = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, qm = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Hm = Lt("HTMLFormElement"), Zm = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Hc = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Km = Lt("RegExp"), id = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  As(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, Ym = (e) => {
  id(e, (t, r) => {
    if (yt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (yt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Gm = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return zn(e) ? n(e) : n(String(e).split(t)), r;
}, Qm = () => {
}, Jm = (e, t) => (e = +e, Number.isFinite(e) ? e : t), fo = "abcdefghijklmnopqrstuvwxyz", Zc = "0123456789", od = {
  DIGIT: Zc,
  ALPHA: fo,
  ALPHA_DIGIT: fo + fo.toUpperCase() + Zc
}, Xm = (e = 16, t = od.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function ev(e) {
  return !!(e && yt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const tv = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Fi(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = zn(n) ? [] : {};
        return As(n, (o, a) => {
          const c = r(o, s + 1);
          !os(c) && (i[a] = c);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, rv = Lt("AsyncFunction"), nv = (e) => e && (Fi(e) || yt(e)) && yt(e.then) && yt(e.catch), C = {
  isArray: zn,
  isArrayBuffer: ed,
  isBuffer: Om,
  isFormData: km,
  isArrayBufferView: Cm,
  isString: Tm,
  isNumber: td,
  isBoolean: Rm,
  isObject: Fi,
  isPlainObject: ei,
  isUndefined: os,
  isDate: Am,
  isFile: Nm,
  isBlob: Pm,
  isRegExp: Km,
  isFunction: yt,
  isStream: jm,
  isURLSearchParams: Im,
  isTypedArray: Vm,
  isFileList: $m,
  forEach: As,
  merge: pa,
  extend: Dm,
  trim: Mm,
  stripBOM: Lm,
  inherits: Fm,
  toFlatObject: Um,
  kindOf: Di,
  kindOfTest: Lt,
  endsWith: zm,
  toArray: Bm,
  forEachEntry: Wm,
  matchAll: qm,
  isHTMLForm: Hm,
  hasOwnProperty: Hc,
  hasOwnProp: Hc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: id,
  freezeMethods: Ym,
  toObjectSet: Gm,
  toCamelCase: Zm,
  noop: Qm,
  toFiniteNumber: Jm,
  findKey: rd,
  global: nd,
  isContextDefined: sd,
  ALPHABET: od,
  generateString: Xm,
  isSpecCompliantForm: ev,
  toJSONObject: tv,
  isAsyncFn: rv,
  isThenable: nv
};
function be(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
C.inherits(be, Error, {
  toJSON: function() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: C.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const ad = be.prototype, cd = {};
[
  "ERR_BAD_OPTION_VALUE",
  "ERR_BAD_OPTION",
  "ECONNABORTED",
  "ETIMEDOUT",
  "ERR_NETWORK",
  "ERR_FR_TOO_MANY_REDIRECTS",
  "ERR_DEPRECATED",
  "ERR_BAD_RESPONSE",
  "ERR_BAD_REQUEST",
  "ERR_CANCELED",
  "ERR_NOT_SUPPORT",
  "ERR_INVALID_URL"
  // eslint-disable-next-line func-names
].forEach((e) => {
  cd[e] = { value: e };
});
Object.defineProperties(be, cd);
Object.defineProperty(ad, "isAxiosError", { value: !0 });
be.from = (e, t, r, n, s, i) => {
  const o = Object.create(ad);
  return C.toFlatObject(e, o, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), be.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const sv = null;
function ma(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function ld(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function Kc(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = ld(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function iv(e) {
  return C.isArray(e) && !e.some(ma);
}
const ov = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Ui(e, t, r) {
  if (!C.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = C.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, v) {
    return !C.isUndefined(v[p]);
  });
  const n = r.metaTokens, s = r.visitor || u, i = r.dots, o = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
  if (!C.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(y) {
    if (y === null)
      return "";
    if (C.isDate(y))
      return y.toISOString();
    if (!c && C.isBlob(y))
      throw new be("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(y) || C.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, p, v) {
    let S = y;
    if (y && !v && typeof y == "object") {
      if (C.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), y = JSON.stringify(y);
      else if (C.isArray(y) && iv(y) || (C.isFileList(y) || C.endsWith(p, "[]")) && (S = C.toArray(y)))
        return p = ld(p), S.forEach(function(w, E) {
          !(C.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? Kc([p], E, i) : o === null ? p : p + "[]",
            l(w)
          );
        }), !1;
    }
    return ma(y) ? !0 : (t.append(Kc(v, p, i), l(y)), !1);
  }
  const d = [], h = Object.assign(ov, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: ma
  });
  function m(y, p) {
    if (!C.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(y), C.forEach(y, function(S, O) {
        (!(C.isUndefined(S) || S === null) && s.call(
          t,
          S,
          C.isString(O) ? O.trim() : O,
          p,
          h
        )) === !0 && m(S, p ? p.concat(O) : [O]);
      }), d.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Yc(e) {
  const t = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0"
  };
  return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g, function(n) {
    return t[n];
  });
}
function Ga(e, t) {
  this._pairs = [], e && Ui(e, this, t);
}
const ud = Ga.prototype;
ud.append = function(t, r) {
  this._pairs.push([t, r]);
};
ud.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Yc);
  } : Yc;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function av(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function dd(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || av, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = C.isURLSearchParams(t) ? t.toString() : new Ga(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Gc {
  constructor() {
    this.handlers = [];
  }
  /**
   * Add a new interceptor to the stack
   *
   * @param {Function} fulfilled The function to handle `then` for a `Promise`
   * @param {Function} rejected The function to handle `reject` for a `Promise`
   *
   * @return {Number} An ID used to remove interceptor later
   */
  use(t, r, n) {
    return this.handlers.push({
      fulfilled: t,
      rejected: r,
      synchronous: n ? n.synchronous : !1,
      runWhen: n ? n.runWhen : null
    }), this.handlers.length - 1;
  }
  /**
   * Remove an interceptor from the stack
   *
   * @param {Number} id The ID that was returned by `use`
   *
   * @returns {Boolean} `true` if the interceptor was removed, `false` otherwise
   */
  eject(t) {
    this.handlers[t] && (this.handlers[t] = null);
  }
  /**
   * Clear all interceptors from the stack
   *
   * @returns {void}
   */
  clear() {
    this.handlers && (this.handlers = []);
  }
  /**
   * Iterate over all the registered interceptors
   *
   * This method is particularly useful for skipping over any
   * interceptors that may have become `null` calling `eject`.
   *
   * @param {Function} fn The function to call for each interceptor
   *
   * @returns {void}
   */
  forEach(t) {
    C.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const fd = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, cv = typeof URLSearchParams < "u" ? URLSearchParams : Ga, lv = typeof FormData < "u" ? FormData : null, uv = typeof Blob < "u" ? Blob : null, dv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: cv,
    FormData: lv,
    Blob: uv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, hd = typeof window < "u" && typeof document < "u", fv = ((e) => hd && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), hv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", pv = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: hd,
  hasStandardBrowserEnv: fv,
  hasStandardBrowserWebWorkerEnv: hv
}, Symbol.toStringTag, { value: "Module" })), Pt = {
  ...pv,
  ...dv
};
function mv(e, t) {
  return Ui(e, new Pt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return Pt.isNode && C.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function vv(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function yv(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function pd(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    if (o === "__proto__")
      return !0;
    const a = Number.isFinite(+o), c = i >= r.length;
    return o = !o && C.isArray(s) ? s.length : o, c ? (C.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !a) : ((!s[o] || !C.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && C.isArray(s[o]) && (s[o] = yv(s[o])), !a);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const r = {};
    return C.forEachEntry(e, (n, s) => {
      t(vv(n), s, r, 0);
    }), r;
  }
  return null;
}
function gv(e, t, r) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Qa = {
  transitional: fd,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = C.isObject(t);
    if (i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
      return s && s ? JSON.stringify(pd(t)) : t;
    if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return mv(t, this.formSerializer).toString();
      if ((a = C.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Ui(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), gv(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Qa.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && C.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? be.from(a, be.ERR_BAD_RESPONSE, this, null, this.response) : a;
      }
    }
    return t;
  }],
  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: {
    FormData: Pt.classes.FormData,
    Blob: Pt.classes.Blob
  },
  validateStatus: function(t) {
    return t >= 200 && t < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0
    }
  }
};
C.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  Qa.headers[e] = {};
});
const Ja = Qa, bv = C.toObjectSet([
  "age",
  "authorization",
  "content-length",
  "content-type",
  "etag",
  "expires",
  "from",
  "host",
  "if-modified-since",
  "if-unmodified-since",
  "last-modified",
  "location",
  "max-forwards",
  "proxy-authorization",
  "referer",
  "retry-after",
  "user-agent"
]), xv = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && bv[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Qc = Symbol("internals");
function Hn(e) {
  return e && String(e).trim().toLowerCase();
}
function ti(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(ti) : String(e);
}
function wv(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Sv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function ho(e, t, r, n, s) {
  if (C.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!C.isString(t)) {
    if (C.isString(n))
      return t.indexOf(n) !== -1;
    if (C.isRegExp(n))
      return n.test(t);
  }
}
function _v(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Ev(e, t) {
  const r = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, i, o) {
        return this[n].call(this, t, s, i, o);
      },
      configurable: !0
    });
  });
}
class zi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(a, c, l) {
      const u = Hn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = C.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || c] = ti(a));
    }
    const o = (a, c) => C.forEach(a, (l, u) => i(l, u, c));
    return C.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : C.isString(t) && (t = t.trim()) && !Sv(t) ? o(xv(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = Hn(t), t) {
      const n = C.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return wv(s);
        if (C.isFunction(r))
          return r.call(this, s, n);
        if (C.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Hn(t), t) {
      const n = C.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || ho(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = Hn(o), o) {
        const a = C.findKey(n, o);
        a && (!r || ho(n, n[a], a, r)) && (delete n[a], s = !0);
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || ho(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return C.forEach(this, (s, i) => {
      const o = C.findKey(n, i);
      if (o) {
        r[o] = ti(s), delete r[i];
        return;
      }
      const a = t ? _v(i) : String(i).trim();
      a !== i && delete r[i], r[a] = ti(s), n[a] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return C.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && C.isArray(n) ? n.join(", ") : n);
    }), r;
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([t, r]) => t + ": " + r).join(`
`);
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(t) {
    return t instanceof this ? t : new this(t);
  }
  static concat(t, ...r) {
    const n = new this(t);
    return r.forEach((s) => n.set(s)), n;
  }
  static accessor(t) {
    const n = (this[Qc] = this[Qc] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = Hn(o);
      n[a] || (Ev(s, o), n[a] = !0);
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
zi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(zi.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
C.freezeMethods(zi);
const Gt = zi;
function po(e, t) {
  const r = this || Ja, n = t || r, s = Gt.from(n.headers);
  let i = n.data;
  return C.forEach(e, function(a) {
    i = a.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function md(e) {
  return !!(e && e.__CANCEL__);
}
function Ns(e, t, r) {
  be.call(this, e ?? "canceled", be.ERR_CANCELED, t, r), this.name = "CanceledError";
}
C.inherits(Ns, be, {
  __CANCEL__: !0
});
function Ov(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new be(
    "Request failed with status code " + r.status,
    [be.ERR_BAD_REQUEST, be.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Cv = Pt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, i) {
      const o = [e + "=" + encodeURIComponent(t)];
      C.isNumber(r) && o.push("expires=" + new Date(r).toGMTString()), C.isString(n) && o.push("path=" + n), C.isString(s) && o.push("domain=" + s), i === !0 && o.push("secure"), document.cookie = o.join("; ");
    },
    read(e) {
      const t = document.cookie.match(new RegExp("(^|;\\s*)(" + e + ")=([^;]*)"));
      return t ? decodeURIComponent(t[3]) : null;
    },
    remove(e) {
      this.write(e, "", Date.now() - 864e5);
    }
  }
) : (
  // Non-standard browser env (web workers, react-native) lack needed support.
  {
    write() {
    },
    read() {
      return null;
    },
    remove() {
    }
  }
);
function Tv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Rv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function vd(e, t) {
  return e && !Tv(t) ? Rv(e, t) : t;
}
const Av = Pt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(i) {
      let o = i;
      return t && (r.setAttribute("href", o), o = r.href), r.setAttribute("href", o), {
        href: r.href,
        protocol: r.protocol ? r.protocol.replace(/:$/, "") : "",
        host: r.host,
        search: r.search ? r.search.replace(/^\?/, "") : "",
        hash: r.hash ? r.hash.replace(/^#/, "") : "",
        hostname: r.hostname,
        port: r.port,
        pathname: r.pathname.charAt(0) === "/" ? r.pathname : "/" + r.pathname
      };
    }
    return n = s(window.location.href), function(o) {
      const a = C.isString(o) ? s(o) : o;
      return a.protocol === n.protocol && a.host === n.host;
    };
  }()
) : (
  // Non standard browser envs (web workers, react-native) lack needed support.
  /* @__PURE__ */ function() {
    return function() {
      return !0;
    };
  }()
);
function Nv(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Pv(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, i = 0, o;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[i];
    o || (o = l), r[s] = c, n[s] = l;
    let d = i, h = 0;
    for (; d !== s; )
      h += r[d++], d = d % e;
    if (s = (s + 1) % e, s === i && (i = (i + 1) % e), l - o < t)
      return;
    const m = u && l - u;
    return m ? Math.round(h * 1e3 / m) : void 0;
  };
}
function Jc(e, t) {
  let r = 0;
  const n = Pv(50, 250);
  return (s) => {
    const i = s.loaded, o = s.lengthComputable ? s.total : void 0, a = i - r, c = n(a), l = i <= o;
    r = i;
    const u = {
      loaded: i,
      total: o,
      progress: o ? i / o : void 0,
      bytes: a,
      rate: c || void 0,
      estimated: c && o && l ? (o - i) / c : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const $v = typeof XMLHttpRequest < "u", jv = $v && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = Gt.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: a } = e, c;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let u;
    if (C.isFormData(s)) {
      if (Pt.hasStandardBrowserEnv || Pt.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((u = i.getContentType()) !== !1) {
        const [p, ...v] = u ? u.split(";").map((S) => S.trim()).filter(Boolean) : [];
        i.setContentType([p || "multipart/form-data", ...v].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(p + ":" + v));
    }
    const h = vd(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), dd(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function m() {
      if (!d)
        return;
      const p = Gt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), S = {
        data: !o || o === "text" || o === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: p,
        config: e,
        request: d
      };
      Ov(function(w) {
        r(w), l();
      }, function(w) {
        n(w), l();
      }, S), d = null;
    }
    if ("onloadend" in d ? d.onloadend = m : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, d.onabort = function() {
      d && (n(new be("Request aborted", be.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new be("Network Error", be.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const S = e.transitional || fd;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), n(new be(
        v,
        S.clarifyTimeoutError ? be.ETIMEDOUT : be.ECONNABORTED,
        e,
        d
      )), d = null;
    }, Pt.hasStandardBrowserEnv && (a && C.isFunction(a) && (a = a(e)), a || a !== !1 && Av(h))) {
      const p = e.xsrfHeaderName && e.xsrfCookieName && Cv.read(e.xsrfCookieName);
      p && i.set(e.xsrfHeaderName, p);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in d && C.forEach(i.toJSON(), function(v, S) {
      d.setRequestHeader(S, v);
    }), C.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), o && o !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", Jc(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", Jc(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (p) => {
      d && (n(!p || p.type ? new Ns(null, e, d) : p), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const y = Nv(h);
    if (y && Pt.protocols.indexOf(y) === -1) {
      n(new be("Unsupported protocol " + y + ":", be.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, va = {
  http: sv,
  xhr: jv
};
C.forEach(va, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Xc = (e) => `- ${e}`, kv = (e) => C.isFunction(e) || e === null || e === !1, yd = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !kv(r) && (n = va[(o = String(r)).toLowerCase()], n === void 0))
        throw new be(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Xc).join(`
`) : " " + Xc(i[0]) : "as no adapter specified";
      throw new be(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: va
};
function mo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ns(null, e);
}
function el(e) {
  return mo(e), e.headers = Gt.from(e.headers), e.data = po.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), yd.getAdapter(e.adapter || Ja.adapter)(e).then(function(n) {
    return mo(e), n.data = po.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Gt.from(n.headers), n;
  }, function(n) {
    return md(n) || (mo(e), n && n.response && (n.response.data = po.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Gt.from(n.response.headers))), Promise.reject(n);
  });
}
const tl = (e) => e instanceof Gt ? e.toJSON() : e;
function Nn(e, t) {
  t = t || {};
  const r = {};
  function n(l, u, d) {
    return C.isPlainObject(l) && C.isPlainObject(u) ? C.merge.call({ caseless: d }, l, u) : C.isPlainObject(u) ? C.merge({}, u) : C.isArray(u) ? u.slice() : u;
  }
  function s(l, u, d) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(l))
        return n(void 0, l, d);
    } else
      return n(l, u, d);
  }
  function i(l, u) {
    if (!C.isUndefined(u))
      return n(void 0, u);
  }
  function o(l, u) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(l))
        return n(void 0, l);
    } else
      return n(void 0, u);
  }
  function a(l, u, d) {
    if (d in t)
      return n(l, u);
    if (d in e)
      return n(void 0, l);
  }
  const c = {
    url: i,
    method: i,
    data: i,
    baseURL: o,
    transformRequest: o,
    transformResponse: o,
    paramsSerializer: o,
    timeout: o,
    timeoutMessage: o,
    withCredentials: o,
    withXSRFToken: o,
    adapter: o,
    responseType: o,
    xsrfCookieName: o,
    xsrfHeaderName: o,
    onUploadProgress: o,
    onDownloadProgress: o,
    decompress: o,
    maxContentLength: o,
    maxBodyLength: o,
    beforeRedirect: o,
    transport: o,
    httpAgent: o,
    httpsAgent: o,
    cancelToken: o,
    socketPath: o,
    responseEncoding: o,
    validateStatus: a,
    headers: (l, u) => s(tl(l), tl(u), !0)
  };
  return C.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || s, h = d(e[u], t[u], u);
    C.isUndefined(h) && d !== a || (r[u] = h);
  }), r;
}
const gd = "1.6.5", Xa = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Xa[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const rl = {};
Xa.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + gd + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new be(
        s(o, " has been removed" + (r ? " in " + r : "")),
        be.ERR_DEPRECATED
      );
    return r && !rl[o] && (rl[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
function Iv(e, t, r) {
  if (typeof e != "object")
    throw new be("options must be an object", be.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const a = e[i], c = a === void 0 || o(a, i, e);
      if (c !== !0)
        throw new be("option " + i + " must be " + c, be.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new be("Unknown option " + i, be.ERR_BAD_OPTION);
  }
}
const ya = {
  assertOptions: Iv,
  validators: Xa
}, nr = ya.validators;
class mi {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Gc(),
      response: new Gc()
    };
  }
  /**
   * Dispatch a request
   *
   * @param {String|Object} configOrUrl The config specific for this request (merged with this.defaults)
   * @param {?Object} config
   *
   * @returns {Promise} The Promise to be fulfilled
   */
  request(t, r) {
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = Nn(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && ya.assertOptions(n, {
      silentJSONParsing: nr.transitional(nr.boolean),
      forcedJSONParsing: nr.transitional(nr.boolean),
      clarifyTimeoutError: nr.transitional(nr.boolean)
    }, !1), s != null && (C.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ya.assertOptions(s, {
      encode: nr.function,
      serialize: nr.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let o = i && C.merge(
      i.common,
      i[r.method]
    );
    i && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete i[y];
      }
    ), r.headers = Gt.concat(o, i);
    const a = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (c = c && p.synchronous, a.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, d = 0, h;
    if (!c) {
      const y = [el.bind(this), void 0];
      for (y.unshift.apply(y, a), y.push.apply(y, l), h = y.length, u = Promise.resolve(r); d < h; )
        u = u.then(y[d++], y[d++]);
      return u;
    }
    h = a.length;
    let m = r;
    for (d = 0; d < h; ) {
      const y = a[d++], p = a[d++];
      try {
        m = y(m);
      } catch (v) {
        p.call(this, v);
        break;
      }
    }
    try {
      u = el.call(this, m);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, h = l.length; d < h; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = Nn(this.defaults, t);
    const r = vd(t.baseURL, t.url);
    return dd(r, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function(t) {
  mi.prototype[t] = function(r, n) {
    return this.request(Nn(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, a) {
      return this.request(Nn(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  mi.prototype[t] = r(), mi.prototype[t + "Form"] = r(!0);
});
const ri = mi;
class ec {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(i) {
      r = i;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let i = n._listeners.length;
      for (; i-- > 0; )
        n._listeners[i](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let i;
      const o = new Promise((a) => {
        n.subscribe(a), i = a;
      }).then(s);
      return o.cancel = function() {
        n.unsubscribe(i);
      }, o;
    }, t(function(i, o, a) {
      n.reason || (n.reason = new Ns(i, o, a), r(n.reason));
    });
  }
  /**
   * Throws a `CanceledError` if cancellation has been requested.
   */
  throwIfRequested() {
    if (this.reason)
      throw this.reason;
  }
  /**
   * Subscribe to the cancel signal
   */
  subscribe(t) {
    if (this.reason) {
      t(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(t) : this._listeners = [t];
  }
  /**
   * Unsubscribe from the cancel signal
   */
  unsubscribe(t) {
    if (!this._listeners)
      return;
    const r = this._listeners.indexOf(t);
    r !== -1 && this._listeners.splice(r, 1);
  }
  /**
   * Returns an object that contains a new `CancelToken` and a function that, when called,
   * cancels the `CancelToken`.
   */
  static source() {
    let t;
    return {
      token: new ec(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Mv = ec;
function Dv(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Lv(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const ga = {
  Continue: 100,
  SwitchingProtocols: 101,
  Processing: 102,
  EarlyHints: 103,
  Ok: 200,
  Created: 201,
  Accepted: 202,
  NonAuthoritativeInformation: 203,
  NoContent: 204,
  ResetContent: 205,
  PartialContent: 206,
  MultiStatus: 207,
  AlreadyReported: 208,
  ImUsed: 226,
  MultipleChoices: 300,
  MovedPermanently: 301,
  Found: 302,
  SeeOther: 303,
  NotModified: 304,
  UseProxy: 305,
  Unused: 306,
  TemporaryRedirect: 307,
  PermanentRedirect: 308,
  BadRequest: 400,
  Unauthorized: 401,
  PaymentRequired: 402,
  Forbidden: 403,
  NotFound: 404,
  MethodNotAllowed: 405,
  NotAcceptable: 406,
  ProxyAuthenticationRequired: 407,
  RequestTimeout: 408,
  Conflict: 409,
  Gone: 410,
  LengthRequired: 411,
  PreconditionFailed: 412,
  PayloadTooLarge: 413,
  UriTooLong: 414,
  UnsupportedMediaType: 415,
  RangeNotSatisfiable: 416,
  ExpectationFailed: 417,
  ImATeapot: 418,
  MisdirectedRequest: 421,
  UnprocessableEntity: 422,
  Locked: 423,
  FailedDependency: 424,
  TooEarly: 425,
  UpgradeRequired: 426,
  PreconditionRequired: 428,
  TooManyRequests: 429,
  RequestHeaderFieldsTooLarge: 431,
  UnavailableForLegalReasons: 451,
  InternalServerError: 500,
  NotImplemented: 501,
  BadGateway: 502,
  ServiceUnavailable: 503,
  GatewayTimeout: 504,
  HttpVersionNotSupported: 505,
  VariantAlsoNegotiates: 506,
  InsufficientStorage: 507,
  LoopDetected: 508,
  NotExtended: 510,
  NetworkAuthenticationRequired: 511
};
Object.entries(ga).forEach(([e, t]) => {
  ga[t] = e;
});
const Fv = ga;
function bd(e) {
  const t = new ri(e), r = Xu(ri.prototype.request, t);
  return C.extend(r, ri.prototype, t, { allOwnKeys: !0 }), C.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return bd(Nn(e, s));
  }, r;
}
const je = bd(Ja);
je.Axios = ri;
je.CanceledError = Ns;
je.CancelToken = Mv;
je.isCancel = md;
je.VERSION = gd;
je.toFormData = Ui;
je.AxiosError = be;
je.Cancel = je.CanceledError;
je.all = function(t) {
  return Promise.all(t);
};
je.spread = Dv;
je.isAxiosError = Lv;
je.mergeConfig = Nn;
je.AxiosHeaders = Gt;
je.formToJSON = (e) => pd(C.isHTMLForm(e) ? new FormData(e) : e);
je.getAdapter = yd.getAdapter;
je.HttpStatusCode = Fv;
je.default = je;
const nl = (e, t) => je.get(`${e}/chat/room`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), xd = (e, t, r, n, s) => je.get(`${e}/chat/room/${r}/message?ts_st=${n || ""}&ts_en=${s || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((i) => {
  if (i.data.code === 200)
    return i.data.payload;
  throw new Error(i.data.message_ui || i.data.message);
}), Uv = (e, t, r, n) => je.post(`${e}/chat/room/${n}/message`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((s) => {
  if (s.data.code === 200)
    return s.data.payload;
  throw new Error(s.data.message_ui || s.data.message);
}), zv = (e, t) => je.get(`${e}/chat/token`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), wd = (e, t, r) => je.get(`${e}/chat/room/${r}/attendant`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), Bv = (e, t, r) => je.get(`${e}/chat/room/${r}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), Vv = (e, t, r) => je.get(`${e}/chat/order/candidate-teacher/list?order_id=${r || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), Wv = (e, t, r) => je.put(`${e}/chat/order/teacher/assign`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
});
var qv = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const sl = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((h) => h(t, d));
    }
  }, s = () => t, a = { setState: n, getState: s, subscribe: (c) => (r.add(c), () => r.delete(c)), destroy: () => {
    (qv ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return t = e(n, s, a), a;
}, Hv = (e) => e ? sl(e) : sl;
var ba = { exports: {} }, vo = {}, Us = { exports: {} }, yo = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var il;
function Zv() {
  return il || (il = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = qe, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(w) {
      {
        for (var E = arguments.length, x = new Array(E > 1 ? E - 1 : 0), A = 1; A < E; A++)
          x[A - 1] = arguments[A];
        n("error", w, x);
      }
    }
    function n(w, E, x) {
      {
        var A = t.ReactDebugCurrentFrame, M = A.getStackAddendum();
        M !== "" && (E += "%s", x = x.concat([M]));
        var k = x.map(function(N) {
          return String(N);
        });
        k.unshift("Warning: " + E), Function.prototype.apply.call(console[w], console, k);
      }
    }
    function s(w, E) {
      return w === E && (w !== 0 || 1 / w === 1 / E) || w !== w && E !== E;
    }
    var i = typeof Object.is == "function" ? Object.is : s, o = e.useState, a = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function h(w, E, x) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var A = E();
      if (!d) {
        var M = E();
        i(A, M) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var k = o({
        inst: {
          value: A,
          getSnapshot: E
        }
      }), N = k[0].inst, B = k[1];
      return c(function() {
        N.value = A, N.getSnapshot = E, m(N) && B({
          inst: N
        });
      }, [w, A, E]), a(function() {
        m(N) && B({
          inst: N
        });
        var Z = function() {
          m(N) && B({
            inst: N
          });
        };
        return w(Z);
      }, [w]), l(A), A;
    }
    function m(w) {
      var E = w.getSnapshot, x = w.value;
      try {
        var A = E();
        return !i(x, A);
      } catch {
        return !0;
      }
    }
    function y(w, E, x) {
      return E();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !p, S = v ? y : h, O = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : S;
    yo.useSyncExternalStore = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), yo;
}
var go = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ol;
function Kv() {
  if (ol)
    return go;
  ol = 1;
  var e = qe;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, s = e.useEffect, i = e.useLayoutEffect, o = e.useDebugValue;
  function a(d, h) {
    var m = h(), y = n({ inst: { value: m, getSnapshot: h } }), p = y[0].inst, v = y[1];
    return i(function() {
      p.value = m, p.getSnapshot = h, c(p) && v({ inst: p });
    }, [d, m, h]), s(function() {
      return c(p) && v({ inst: p }), d(function() {
        c(p) && v({ inst: p });
      });
    }, [d]), o(m), m;
  }
  function c(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var m = h();
      return !r(d, m);
    } catch {
      return !0;
    }
  }
  function l(d, h) {
    return h();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : a;
  return go.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, go;
}
var al;
function Sd() {
  return al || (al = 1, process.env.NODE_ENV === "production" ? Us.exports = Kv() : Us.exports = Zv()), Us.exports;
}
/**
 * @license React
 * use-sync-external-store-shim/with-selector.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cl;
function Yv() {
  return cl || (cl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = qe, t = Sd();
    function r(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, c = e.useDebugValue;
    function l(u, d, h, m, y) {
      var p = i(null), v;
      p.current === null ? (v = {
        hasValue: !1,
        value: null
      }, p.current = v) : v = p.current;
      var S = a(function() {
        var x = !1, A, M, k = function(V) {
          if (!x) {
            x = !0, A = V;
            var Pe = m(V);
            if (y !== void 0 && v.hasValue) {
              var _e = v.value;
              if (y(_e, Pe))
                return M = _e, _e;
            }
            return M = Pe, Pe;
          }
          var De = A, Re = M;
          if (n(De, V))
            return Re;
          var ke = m(V);
          return y !== void 0 && y(Re, ke) ? Re : (A = V, M = ke, ke);
        }, N = h === void 0 ? null : h, B = function() {
          return k(d());
        }, Z = N === null ? void 0 : function() {
          return k(N());
        };
        return [B, Z];
      }, [d, h, m, y]), O = S[0], w = S[1], E = s(u, O, w);
      return o(function() {
        v.hasValue = !0, v.value = E;
      }, [E]), c(E), E;
    }
    vo.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), vo;
}
var bo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ll;
function Gv() {
  if (ll)
    return bo;
  ll = 1;
  var e = qe, t = Sd();
  function r(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return bo.useSyncExternalStoreWithSelector = function(l, u, d, h, m) {
    var y = i(null);
    if (y.current === null) {
      var p = { hasValue: !1, value: null };
      y.current = p;
    } else
      p = y.current;
    y = a(function() {
      function S(A) {
        if (!O) {
          if (O = !0, w = A, A = h(A), m !== void 0 && p.hasValue) {
            var M = p.value;
            if (m(M, A))
              return E = M;
          }
          return E = A;
        }
        if (M = E, n(w, A))
          return M;
        var k = h(A);
        return m !== void 0 && m(M, k) ? M : (w = A, E = k);
      }
      var O = !1, w, E, x = d === void 0 ? null : d;
      return [function() {
        return S(u());
      }, x === null ? void 0 : function() {
        return S(x());
      }];
    }, [u, d, h, m]);
    var v = s(l, y[0], y[1]);
    return o(function() {
      p.hasValue = !0, p.value = v;
    }, [v]), c(v), v;
  }, bo;
}
process.env.NODE_ENV === "production" ? ba.exports = Gv() : ba.exports = Yv();
var Qv = ba.exports;
const Jv = /* @__PURE__ */ Wa(Qv);
var _d = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Xv } = qe, { useSyncExternalStoreWithSelector: ey } = Jv;
let ul = !1;
function ty(e, t = e.getState, r) {
  (_d ? "production" : void 0) !== "production" && r && !ul && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), ul = !0);
  const n = ey(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Xv(n), n;
}
const dl = (e) => {
  (_d ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Hv(e) : e, r = (n, s) => ty(t, n, s);
  return Object.assign(r, t), r;
}, ry = (e) => e ? dl(e) : dl, ny = {
  notiLatestMessages: [],
  socket: null,
  socketStatus: !1
}, tc = ry((e, t) => ({
  ...ny,
  // Connect to WebSocket
  connectWebSocket: async (r, n, s, i) => {
    const { socketStatus: o } = t();
    if (o)
      return;
    const a = await zv(r, s), c = new WebSocket(n + "?token=" + a);
    c.onopen = () => {
      e({ socket: c, socketStatus: !0 });
    }, c.onmessage = (l) => {
      const u = JSON.parse(l.data), { room_id: d } = u;
      setTimeout(() => {
        i.invalidateQueries({ queryKey: ["chat-message", d] }), i.invalidateQueries({ queryKey: ["latest-message", d] });
      }, 1e3);
    }, c.onclose = () => {
      e({ socket: c, socketStatus: !1 });
    }, c.onerror = (l) => {
      e({ socket: c, socketStatus: !1 }), console.log(l);
    };
  },
  // Disconnect WebSocket
  disconnectWebSocket: () => {
    const { socket: r } = t();
    r && r.readyState === WebSocket.OPEN && (r.close(), e({ socket: r, socketStatus: !1 }));
  },
  // Send a message through WebSocket and API
  sendSocketMessage: async (r) => {
    const { socket: n } = tc.getState();
    if (n && n.readyState === WebSocket.OPEN)
      try {
        n.send(JSON.stringify({ action: "sendmessage", data: r }));
      } catch (s) {
        console.log(s);
      }
  },
  updateLatestMessage: (r) => {
    const { notiLatestMessages: n } = t(), s = n.filter((i) => i.room_id !== r);
    console.log(s), e(() => ({
      notiLatestMessages: [...s]
    }));
  }
}));
function Ed(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Ed(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function sy() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Ed(e)) && (n && (n += " "), n += t);
  return n;
}
const rc = "-";
function iy(e) {
  const t = ay(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function s(o) {
    const a = o.split(rc);
    return a[0] === "" && a.length !== 1 && a.shift(), Od(a, t) || oy(o);
  }
  function i(o, a) {
    const c = r[o] || [];
    return a && n[o] ? [...c, ...n[o]] : c;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: i
  };
}
function Od(e, t) {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? Od(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(rc);
  return (o = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}
const fl = /^\[(.+)\]$/;
function oy(e) {
  if (fl.test(e)) {
    const t = fl.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function ay(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ly(Object.entries(e.classGroups), r).forEach(([i, o]) => {
    xa(o, n, i, t);
  }), n;
}
function xa(e, t, r, n) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : hl(t, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (cy(s)) {
        xa(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      xa(o, hl(t, i), r, n);
    });
  });
}
function hl(e, t) {
  let r = e;
  return t.split(rc).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function cy(e) {
  return e.isThemeGetter;
}
function ly(e, t) {
  return t ? e.map(([r, n]) => {
    const s = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [t + o, a])) : i);
    return [r, s];
  }) : e;
}
function uy(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function s(i, o) {
    r.set(i, o), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(i) {
      let o = r.get(i);
      if (o !== void 0)
        return o;
      if ((o = n.get(i)) !== void 0)
        return s(i, o), o;
    },
    set(i, o) {
      r.has(i) ? r.set(i, o) : s(i, o);
    }
  };
}
const Cd = "!";
function dy(e) {
  const t = e.separator, r = t.length === 1, n = t[0], s = t.length;
  return function(o) {
    const a = [];
    let c = 0, l = 0, u;
    for (let p = 0; p < o.length; p++) {
      let v = o[p];
      if (c === 0) {
        if (v === n && (r || o.slice(p, p + s) === t)) {
          a.push(o.slice(l, p)), l = p + s;
          continue;
        }
        if (v === "/") {
          u = p;
          continue;
        }
      }
      v === "[" ? c++ : v === "]" && c--;
    }
    const d = a.length === 0 ? o : o.substring(l), h = d.startsWith(Cd), m = h ? d.substring(1) : d, y = u && u > l ? u - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: y
    };
  };
}
function fy(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function hy(e) {
  return {
    cache: uy(e.cacheSize),
    splitModifiers: dy(e),
    ...iy(e)
  };
}
const py = /\s+/;
function my(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split(py).map((o) => {
    const {
      modifiers: a,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = r(o);
    let d = n(u ? l.substring(0, u) : l), h = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      if (d = n(l), !d)
        return {
          isTailwindClass: !1,
          originalClassName: o
        };
      h = !1;
    }
    const m = fy(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + Cd : m,
      classGroupId: d,
      originalClassName: o,
      hasPostfixModifier: h
    };
  }).reverse().filter((o) => {
    if (!o.isTailwindClass)
      return !0;
    const {
      modifierId: a,
      classGroupId: c,
      hasPostfixModifier: l
    } = o, u = a + c;
    return i.has(u) ? !1 : (i.add(u), s(c, l).forEach((d) => i.add(a + d)), !0);
  }).reverse().map((o) => o.originalClassName).join(" ");
}
function vy() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Td(t)) && (n && (n += " "), n += r);
  return n;
}
function Td(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Td(e[n])) && (r && (r += " "), r += t);
  return r;
}
function yy(e, ...t) {
  let r, n, s, i = o;
  function o(c) {
    const l = t.reduce((u, d) => d(u), e());
    return r = hy(l), n = r.cache.get, s = r.cache.set, i = a, a(c);
  }
  function a(c) {
    const l = n(c);
    if (l)
      return l;
    const u = my(c, r);
    return s(c, u), u;
  }
  return function() {
    return i(vy.apply(null, arguments));
  };
}
function Ie(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Rd = /^\[(?:([a-z-]+):)?(.+)\]$/i, gy = /^\d+\/\d+$/, by = /* @__PURE__ */ new Set(["px", "full", "screen"]), xy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, wy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Sy = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, _y = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Ut(e) {
  return Tr(e) || by.has(e) || gy.test(e);
}
function sr(e) {
  return Bn(e, "length", Py);
}
function Tr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function zs(e) {
  return Bn(e, "number", Tr);
}
function Zn(e) {
  return !!e && Number.isInteger(Number(e));
}
function Ey(e) {
  return e.endsWith("%") && Tr(e.slice(0, -1));
}
function ae(e) {
  return Rd.test(e);
}
function ir(e) {
  return xy.test(e);
}
const Oy = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Cy(e) {
  return Bn(e, Oy, Ad);
}
function Ty(e) {
  return Bn(e, "position", Ad);
}
const Ry = /* @__PURE__ */ new Set(["image", "url"]);
function Ay(e) {
  return Bn(e, Ry, jy);
}
function Ny(e) {
  return Bn(e, "", $y);
}
function Kn() {
  return !0;
}
function Bn(e, t, r) {
  const n = Rd.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function Py(e) {
  return wy.test(e);
}
function Ad() {
  return !1;
}
function $y(e) {
  return Sy.test(e);
}
function jy(e) {
  return _y.test(e);
}
function ky() {
  const e = Ie("colors"), t = Ie("spacing"), r = Ie("blur"), n = Ie("brightness"), s = Ie("borderColor"), i = Ie("borderRadius"), o = Ie("borderSpacing"), a = Ie("borderWidth"), c = Ie("contrast"), l = Ie("grayscale"), u = Ie("hueRotate"), d = Ie("invert"), h = Ie("gap"), m = Ie("gradientColorStops"), y = Ie("gradientColorStopPositions"), p = Ie("inset"), v = Ie("margin"), S = Ie("opacity"), O = Ie("padding"), w = Ie("saturate"), E = Ie("scale"), x = Ie("sepia"), A = Ie("skew"), M = Ie("space"), k = Ie("translate"), N = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], Z = () => ["auto", ae, t], V = () => [ae, t], Pe = () => ["", Ut, sr], _e = () => ["auto", Tr, ae], De = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Re = () => ["solid", "dashed", "dotted", "double", "none"], ke = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], Je = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ge = () => ["", "0", ae], T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], I = () => [Tr, zs], W = () => [Tr, ae];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Kn],
      spacing: [Ut, sr],
      blur: ["none", "", ir, ae],
      brightness: I(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ir, ae],
      borderSpacing: V(),
      borderWidth: Pe(),
      contrast: I(),
      grayscale: Ge(),
      hueRotate: W(),
      invert: Ge(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ey, sr],
      inset: Z(),
      margin: Z(),
      opacity: I(),
      padding: V(),
      saturate: I(),
      scale: I(),
      sepia: Ge(),
      skew: W(),
      space: V(),
      translate: V()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ae]
      }],
      /**
       * Container
       * @see https://tailwindcss.com/docs/container
       */
      container: ["container"],
      /**
       * Columns
       * @see https://tailwindcss.com/docs/columns
       */
      columns: [{
        columns: [ir]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": T()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": T()
      }],
      /**
       * Break Inside
       * @see https://tailwindcss.com/docs/break-inside
       */
      "break-inside": [{
        "break-inside": ["auto", "avoid", "avoid-page", "avoid-column"]
      }],
      /**
       * Box Decoration Break
       * @see https://tailwindcss.com/docs/box-decoration-break
       */
      "box-decoration": [{
        "box-decoration": ["slice", "clone"]
      }],
      /**
       * Box Sizing
       * @see https://tailwindcss.com/docs/box-sizing
       */
      box: [{
        box: ["border", "content"]
      }],
      /**
       * Display
       * @see https://tailwindcss.com/docs/display
       */
      display: ["block", "inline-block", "inline", "flex", "inline-flex", "table", "inline-table", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row-group", "table-row", "flow-root", "grid", "inline-grid", "contents", "list-item", "hidden"],
      /**
       * Floats
       * @see https://tailwindcss.com/docs/float
       */
      float: [{
        float: ["right", "left", "none", "start", "end"]
      }],
      /**
       * Clear
       * @see https://tailwindcss.com/docs/clear
       */
      clear: [{
        clear: ["left", "right", "both", "none", "start", "end"]
      }],
      /**
       * Isolation
       * @see https://tailwindcss.com/docs/isolation
       */
      isolation: ["isolate", "isolation-auto"],
      /**
       * Object Fit
       * @see https://tailwindcss.com/docs/object-fit
       */
      "object-fit": [{
        object: ["contain", "cover", "fill", "none", "scale-down"]
      }],
      /**
       * Object Position
       * @see https://tailwindcss.com/docs/object-position
       */
      "object-position": [{
        object: [...De(), ae]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: B()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": B()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": B()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: N()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": N()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": N()
      }],
      /**
       * Position
       * @see https://tailwindcss.com/docs/position
       */
      position: ["static", "fixed", "absolute", "relative", "sticky"],
      /**
       * Top / Right / Bottom / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      inset: [{
        inset: [p]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [p]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [p]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [p]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [p]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [p]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [p]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [p]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [p]
      }],
      /**
       * Visibility
       * @see https://tailwindcss.com/docs/visibility
       */
      visibility: ["visible", "invisible", "collapse"],
      /**
       * Z-Index
       * @see https://tailwindcss.com/docs/z-index
       */
      z: [{
        z: ["auto", Zn, ae]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: Z()
      }],
      /**
       * Flex Direction
       * @see https://tailwindcss.com/docs/flex-direction
       */
      "flex-direction": [{
        flex: ["row", "row-reverse", "col", "col-reverse"]
      }],
      /**
       * Flex Wrap
       * @see https://tailwindcss.com/docs/flex-wrap
       */
      "flex-wrap": [{
        flex: ["wrap", "wrap-reverse", "nowrap"]
      }],
      /**
       * Flex
       * @see https://tailwindcss.com/docs/flex
       */
      flex: [{
        flex: ["1", "auto", "initial", "none", ae]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Ge()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Ge()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Zn, ae]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Kn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Zn, ae]
        }, ae]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": _e()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": _e()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Kn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Zn, ae]
        }, ae]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": _e()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": _e()
      }],
      /**
       * Grid Auto Flow
       * @see https://tailwindcss.com/docs/grid-auto-flow
       */
      "grid-flow": [{
        "grid-flow": ["row", "col", "dense", "row-dense", "col-dense"]
      }],
      /**
       * Grid Auto Columns
       * @see https://tailwindcss.com/docs/grid-auto-columns
       */
      "auto-cols": [{
        "auto-cols": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ae]
      }],
      /**
       * Gap
       * @see https://tailwindcss.com/docs/gap
       */
      gap: [{
        gap: [h]
      }],
      /**
       * Gap X
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-x": [{
        "gap-x": [h]
      }],
      /**
       * Gap Y
       * @see https://tailwindcss.com/docs/gap
       */
      "gap-y": [{
        "gap-y": [h]
      }],
      /**
       * Justify Content
       * @see https://tailwindcss.com/docs/justify-content
       */
      "justify-content": [{
        justify: ["normal", ...Je()]
      }],
      /**
       * Justify Items
       * @see https://tailwindcss.com/docs/justify-items
       */
      "justify-items": [{
        "justify-items": ["start", "end", "center", "stretch"]
      }],
      /**
       * Justify Self
       * @see https://tailwindcss.com/docs/justify-self
       */
      "justify-self": [{
        "justify-self": ["auto", "start", "end", "center", "stretch"]
      }],
      /**
       * Align Content
       * @see https://tailwindcss.com/docs/align-content
       */
      "align-content": [{
        content: ["normal", ...Je(), "baseline"]
      }],
      /**
       * Align Items
       * @see https://tailwindcss.com/docs/align-items
       */
      "align-items": [{
        items: ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Align Self
       * @see https://tailwindcss.com/docs/align-self
       */
      "align-self": [{
        self: ["auto", "start", "end", "center", "stretch", "baseline"]
      }],
      /**
       * Place Content
       * @see https://tailwindcss.com/docs/place-content
       */
      "place-content": [{
        "place-content": [...Je(), "baseline"]
      }],
      /**
       * Place Items
       * @see https://tailwindcss.com/docs/place-items
       */
      "place-items": [{
        "place-items": ["start", "end", "center", "baseline", "stretch"]
      }],
      /**
       * Place Self
       * @see https://tailwindcss.com/docs/place-self
       */
      "place-self": [{
        "place-self": ["auto", "start", "end", "center", "stretch"]
      }],
      // Spacing
      /**
       * Padding
       * @see https://tailwindcss.com/docs/padding
       */
      p: [{
        p: [O]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [O]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [O]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [O]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [O]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [O]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [O]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [O]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [O]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [v]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [v]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [v]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [v]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [v]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [v]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [v]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [v]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [v]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [M]
      }],
      /**
       * Space Between X Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-x-reverse": ["space-x-reverse"],
      /**
       * Space Between Y
       * @see https://tailwindcss.com/docs/space
       */
      "space-y": [{
        "space-y": [M]
      }],
      /**
       * Space Between Y Reverse
       * @see https://tailwindcss.com/docs/space
       */
      "space-y-reverse": ["space-y-reverse"],
      // Sizing
      /**
       * Width
       * @see https://tailwindcss.com/docs/width
       */
      w: [{
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ae, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ae, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ae, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ir]
        }, ir]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ae, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ae, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ae, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", ir, sr]
      }],
      /**
       * Font Smoothing
       * @see https://tailwindcss.com/docs/font-smoothing
       */
      "font-smoothing": ["antialiased", "subpixel-antialiased"],
      /**
       * Font Style
       * @see https://tailwindcss.com/docs/font-style
       */
      "font-style": ["italic", "not-italic"],
      /**
       * Font Weight
       * @see https://tailwindcss.com/docs/font-weight
       */
      "font-weight": [{
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", zs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Kn]
      }],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-normal": ["normal-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-ordinal": ["ordinal"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-slashed-zero": ["slashed-zero"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-figure": ["lining-nums", "oldstyle-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-spacing": ["proportional-nums", "tabular-nums"],
      /**
       * Font Variant Numeric
       * @see https://tailwindcss.com/docs/font-variant-numeric
       */
      "fvn-fraction": ["diagonal-fractions", "stacked-fractons"],
      /**
       * Letter Spacing
       * @see https://tailwindcss.com/docs/letter-spacing
       */
      tracking: [{
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ae]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Tr, zs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Ut, ae]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ae]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ae]
      }],
      /**
       * List Style Position
       * @see https://tailwindcss.com/docs/list-style-position
       */
      "list-style-position": [{
        list: ["inside", "outside"]
      }],
      /**
       * Placeholder Color
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/placeholder-color
       */
      "placeholder-color": [{
        placeholder: [e]
      }],
      /**
       * Placeholder Opacity
       * @see https://tailwindcss.com/docs/placeholder-opacity
       */
      "placeholder-opacity": [{
        "placeholder-opacity": [S]
      }],
      /**
       * Text Alignment
       * @see https://tailwindcss.com/docs/text-align
       */
      "text-alignment": [{
        text: ["left", "center", "right", "justify", "start", "end"]
      }],
      /**
       * Text Color
       * @see https://tailwindcss.com/docs/text-color
       */
      "text-color": [{
        text: [e]
      }],
      /**
       * Text Opacity
       * @see https://tailwindcss.com/docs/text-opacity
       */
      "text-opacity": [{
        "text-opacity": [S]
      }],
      /**
       * Text Decoration
       * @see https://tailwindcss.com/docs/text-decoration
       */
      "text-decoration": ["underline", "overline", "line-through", "no-underline"],
      /**
       * Text Decoration Style
       * @see https://tailwindcss.com/docs/text-decoration-style
       */
      "text-decoration-style": [{
        decoration: [...Re(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Ut, sr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Ut, ae]
      }],
      /**
       * Text Decoration Color
       * @see https://tailwindcss.com/docs/text-decoration-color
       */
      "text-decoration-color": [{
        decoration: [e]
      }],
      /**
       * Text Transform
       * @see https://tailwindcss.com/docs/text-transform
       */
      "text-transform": ["uppercase", "lowercase", "capitalize", "normal-case"],
      /**
       * Text Overflow
       * @see https://tailwindcss.com/docs/text-overflow
       */
      "text-overflow": ["truncate", "text-ellipsis", "text-clip"],
      /**
       * Text Wrap
       * @see https://tailwindcss.com/docs/text-wrap
       */
      "text-wrap": [{
        text: ["wrap", "nowrap", "balance", "pretty"]
      }],
      /**
       * Text Indent
       * @see https://tailwindcss.com/docs/text-indent
       */
      indent: [{
        indent: V()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ae]
      }],
      /**
       * Whitespace
       * @see https://tailwindcss.com/docs/whitespace
       */
      whitespace: [{
        whitespace: ["normal", "nowrap", "pre", "pre-line", "pre-wrap", "break-spaces"]
      }],
      /**
       * Word Break
       * @see https://tailwindcss.com/docs/word-break
       */
      break: [{
        break: ["normal", "words", "all", "keep"]
      }],
      /**
       * Hyphens
       * @see https://tailwindcss.com/docs/hyphens
       */
      hyphens: [{
        hyphens: ["none", "manual", "auto"]
      }],
      /**
       * Content
       * @see https://tailwindcss.com/docs/content
       */
      content: [{
        content: ["none", ae]
      }],
      // Backgrounds
      /**
       * Background Attachment
       * @see https://tailwindcss.com/docs/background-attachment
       */
      "bg-attachment": [{
        bg: ["fixed", "local", "scroll"]
      }],
      /**
       * Background Clip
       * @see https://tailwindcss.com/docs/background-clip
       */
      "bg-clip": [{
        "bg-clip": ["border", "padding", "content", "text"]
      }],
      /**
       * Background Opacity
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/background-opacity
       */
      "bg-opacity": [{
        "bg-opacity": [S]
      }],
      /**
       * Background Origin
       * @see https://tailwindcss.com/docs/background-origin
       */
      "bg-origin": [{
        "bg-origin": ["border", "padding", "content"]
      }],
      /**
       * Background Position
       * @see https://tailwindcss.com/docs/background-position
       */
      "bg-position": [{
        bg: [...De(), Ty]
      }],
      /**
       * Background Repeat
       * @see https://tailwindcss.com/docs/background-repeat
       */
      "bg-repeat": [{
        bg: ["no-repeat", {
          repeat: ["", "x", "y", "round", "space"]
        }]
      }],
      /**
       * Background Size
       * @see https://tailwindcss.com/docs/background-size
       */
      "bg-size": [{
        bg: ["auto", "cover", "contain", Cy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Ay]
      }],
      /**
       * Background Color
       * @see https://tailwindcss.com/docs/background-color
       */
      "bg-color": [{
        bg: [e]
      }],
      /**
       * Gradient Color Stops From Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from-pos": [{
        from: [y]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [y]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [y]
      }],
      /**
       * Gradient Color Stops From
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-from": [{
        from: [m]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [m]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [i]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [i]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [i]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [i]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [i]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [i]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [i]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [i]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [i]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [i]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [i]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [i]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [i]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [i]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [i]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [a]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [a]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [a]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [a]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [a]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [a]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [a]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [a]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [a]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [S]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Re(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [a]
      }],
      /**
       * Divide Width X Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x-reverse": ["divide-x-reverse"],
      /**
       * Divide Width Y
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y": [{
        "divide-y": [a]
      }],
      /**
       * Divide Width Y Reverse
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-y-reverse": ["divide-y-reverse"],
      /**
       * Divide Opacity
       * @see https://tailwindcss.com/docs/divide-opacity
       */
      "divide-opacity": [{
        "divide-opacity": [S]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Re()
      }],
      /**
       * Border Color
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color": [{
        border: [s]
      }],
      /**
       * Border Color X
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-x": [{
        "border-x": [s]
      }],
      /**
       * Border Color Y
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-y": [{
        "border-y": [s]
      }],
      /**
       * Border Color Top
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-t": [{
        "border-t": [s]
      }],
      /**
       * Border Color Right
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-r": [{
        "border-r": [s]
      }],
      /**
       * Border Color Bottom
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-b": [{
        "border-b": [s]
      }],
      /**
       * Border Color Left
       * @see https://tailwindcss.com/docs/border-color
       */
      "border-color-l": [{
        "border-l": [s]
      }],
      /**
       * Divide Color
       * @see https://tailwindcss.com/docs/divide-color
       */
      "divide-color": [{
        divide: [s]
      }],
      /**
       * Outline Style
       * @see https://tailwindcss.com/docs/outline-style
       */
      "outline-style": [{
        outline: ["", ...Re()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Ut, ae]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Ut, sr]
      }],
      /**
       * Outline Color
       * @see https://tailwindcss.com/docs/outline-color
       */
      "outline-color": [{
        outline: [e]
      }],
      /**
       * Ring Width
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w": [{
        ring: Pe()
      }],
      /**
       * Ring Width Inset
       * @see https://tailwindcss.com/docs/ring-width
       */
      "ring-w-inset": ["ring-inset"],
      /**
       * Ring Color
       * @see https://tailwindcss.com/docs/ring-color
       */
      "ring-color": [{
        ring: [e]
      }],
      /**
       * Ring Opacity
       * @see https://tailwindcss.com/docs/ring-opacity
       */
      "ring-opacity": [{
        "ring-opacity": [S]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Ut, sr]
      }],
      /**
       * Ring Offset Color
       * @see https://tailwindcss.com/docs/ring-offset-color
       */
      "ring-offset-color": [{
        "ring-offset": [e]
      }],
      // Effects
      /**
       * Box Shadow
       * @see https://tailwindcss.com/docs/box-shadow
       */
      shadow: [{
        shadow: ["", "inner", "none", ir, Ny]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Kn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [S]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": ke()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ke()
      }],
      // Filters
      /**
       * Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/filter
       */
      filter: [{
        filter: ["", "none"]
      }],
      /**
       * Blur
       * @see https://tailwindcss.com/docs/blur
       */
      blur: [{
        blur: [r]
      }],
      /**
       * Brightness
       * @see https://tailwindcss.com/docs/brightness
       */
      brightness: [{
        brightness: [n]
      }],
      /**
       * Contrast
       * @see https://tailwindcss.com/docs/contrast
       */
      contrast: [{
        contrast: [c]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", ir, ae]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [l]
      }],
      /**
       * Hue Rotate
       * @see https://tailwindcss.com/docs/hue-rotate
       */
      "hue-rotate": [{
        "hue-rotate": [u]
      }],
      /**
       * Invert
       * @see https://tailwindcss.com/docs/invert
       */
      invert: [{
        invert: [d]
      }],
      /**
       * Saturate
       * @see https://tailwindcss.com/docs/saturate
       */
      saturate: [{
        saturate: [w]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [x]
      }],
      /**
       * Backdrop Filter
       * @deprecated since Tailwind CSS v3.0.0
       * @see https://tailwindcss.com/docs/backdrop-filter
       */
      "backdrop-filter": [{
        "backdrop-filter": ["", "none"]
      }],
      /**
       * Backdrop Blur
       * @see https://tailwindcss.com/docs/backdrop-blur
       */
      "backdrop-blur": [{
        "backdrop-blur": [r]
      }],
      /**
       * Backdrop Brightness
       * @see https://tailwindcss.com/docs/backdrop-brightness
       */
      "backdrop-brightness": [{
        "backdrop-brightness": [n]
      }],
      /**
       * Backdrop Contrast
       * @see https://tailwindcss.com/docs/backdrop-contrast
       */
      "backdrop-contrast": [{
        "backdrop-contrast": [c]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [l]
      }],
      /**
       * Backdrop Hue Rotate
       * @see https://tailwindcss.com/docs/backdrop-hue-rotate
       */
      "backdrop-hue-rotate": [{
        "backdrop-hue-rotate": [u]
      }],
      /**
       * Backdrop Invert
       * @see https://tailwindcss.com/docs/backdrop-invert
       */
      "backdrop-invert": [{
        "backdrop-invert": [d]
      }],
      /**
       * Backdrop Opacity
       * @see https://tailwindcss.com/docs/backdrop-opacity
       */
      "backdrop-opacity": [{
        "backdrop-opacity": [S]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [w]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [x]
      }],
      // Tables
      /**
       * Border Collapse
       * @see https://tailwindcss.com/docs/border-collapse
       */
      "border-collapse": [{
        border: ["collapse", "separate"]
      }],
      /**
       * Border Spacing
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing": [{
        "border-spacing": [o]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [o]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [o]
      }],
      /**
       * Table Layout
       * @see https://tailwindcss.com/docs/table-layout
       */
      "table-layout": [{
        table: ["auto", "fixed"]
      }],
      /**
       * Caption Side
       * @see https://tailwindcss.com/docs/caption-side
       */
      caption: [{
        caption: ["top", "bottom"]
      }],
      // Transitions and Animation
      /**
       * Tranisition Property
       * @see https://tailwindcss.com/docs/transition-property
       */
      transition: [{
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ae]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: W()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ae]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: W()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ae]
      }],
      // Transforms
      /**
       * Transform
       * @see https://tailwindcss.com/docs/transform
       */
      transform: [{
        transform: ["", "gpu", "none"]
      }],
      /**
       * Scale
       * @see https://tailwindcss.com/docs/scale
       */
      scale: [{
        scale: [E]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [E]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [E]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Zn, ae]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [k]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [k]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [A]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [A]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ae]
      }],
      // Interactivity
      /**
       * Accent Color
       * @see https://tailwindcss.com/docs/accent-color
       */
      accent: [{
        accent: ["auto", e]
      }],
      /**
       * Appearance
       * @see https://tailwindcss.com/docs/appearance
       */
      appearance: [{
        appearance: ["none", "auto"]
      }],
      /**
       * Cursor
       * @see https://tailwindcss.com/docs/cursor
       */
      cursor: [{
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ae]
      }],
      /**
       * Caret Color
       * @see https://tailwindcss.com/docs/just-in-time-mode#caret-color-utilities
       */
      "caret-color": [{
        caret: [e]
      }],
      /**
       * Pointer Events
       * @see https://tailwindcss.com/docs/pointer-events
       */
      "pointer-events": [{
        "pointer-events": ["none", "auto"]
      }],
      /**
       * Resize
       * @see https://tailwindcss.com/docs/resize
       */
      resize: [{
        resize: ["none", "y", "x", ""]
      }],
      /**
       * Scroll Behavior
       * @see https://tailwindcss.com/docs/scroll-behavior
       */
      "scroll-behavior": [{
        scroll: ["auto", "smooth"]
      }],
      /**
       * Scroll Margin
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-m": [{
        "scroll-m": V()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": V()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": V()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": V()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": V()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": V()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": V()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": V()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": V()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": V()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": V()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": V()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": V()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": V()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": V()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": V()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": V()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": V()
      }],
      /**
       * Scroll Snap Align
       * @see https://tailwindcss.com/docs/scroll-snap-align
       */
      "snap-align": [{
        snap: ["start", "end", "center", "align-none"]
      }],
      /**
       * Scroll Snap Stop
       * @see https://tailwindcss.com/docs/scroll-snap-stop
       */
      "snap-stop": [{
        snap: ["normal", "always"]
      }],
      /**
       * Scroll Snap Type
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-type": [{
        snap: ["none", "x", "y", "both"]
      }],
      /**
       * Scroll Snap Type Strictness
       * @see https://tailwindcss.com/docs/scroll-snap-type
       */
      "snap-strictness": [{
        snap: ["mandatory", "proximity"]
      }],
      /**
       * Touch Action
       * @see https://tailwindcss.com/docs/touch-action
       */
      touch: [{
        touch: ["auto", "none", "manipulation"]
      }],
      /**
       * Touch Action X
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-x": [{
        "touch-pan": ["x", "left", "right"]
      }],
      /**
       * Touch Action Y
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-y": [{
        "touch-pan": ["y", "up", "down"]
      }],
      /**
       * Touch Action Pinch Zoom
       * @see https://tailwindcss.com/docs/touch-action
       */
      "touch-pz": ["touch-pinch-zoom"],
      /**
       * User Select
       * @see https://tailwindcss.com/docs/user-select
       */
      select: [{
        select: ["none", "text", "all", "auto"]
      }],
      /**
       * Will Change
       * @see https://tailwindcss.com/docs/will-change
       */
      "will-change": [{
        "will-change": ["auto", "scroll", "contents", "transform", ae]
      }],
      // SVG
      /**
       * Fill
       * @see https://tailwindcss.com/docs/fill
       */
      fill: [{
        fill: [e, "none"]
      }],
      /**
       * Stroke Width
       * @see https://tailwindcss.com/docs/stroke-width
       */
      "stroke-w": [{
        stroke: [Ut, sr, zs]
      }],
      /**
       * Stroke
       * @see https://tailwindcss.com/docs/stroke
       */
      stroke: [{
        stroke: [e, "none"]
      }],
      // Accessibility
      /**
       * Screen Readers
       * @see https://tailwindcss.com/docs/screen-readers
       */
      sr: ["sr-only", "not-sr-only"],
      /**
       * Forced Color Adjust
       * @see https://tailwindcss.com/docs/forced-color-adjust
       */
      "forced-color-adjust": [{
        "forced-color-adjust": ["auto", "none"]
      }]
    },
    conflictingClassGroups: {
      overflow: ["overflow-x", "overflow-y"],
      overscroll: ["overscroll-x", "overscroll-y"],
      inset: ["inset-x", "inset-y", "start", "end", "top", "right", "bottom", "left"],
      "inset-x": ["right", "left"],
      "inset-y": ["top", "bottom"],
      flex: ["basis", "grow", "shrink"],
      gap: ["gap-x", "gap-y"],
      p: ["px", "py", "ps", "pe", "pt", "pr", "pb", "pl"],
      px: ["pr", "pl"],
      py: ["pt", "pb"],
      m: ["mx", "my", "ms", "me", "mt", "mr", "mb", "ml"],
      mx: ["mr", "ml"],
      my: ["mt", "mb"],
      size: ["w", "h"],
      "font-size": ["leading"],
      "fvn-normal": ["fvn-ordinal", "fvn-slashed-zero", "fvn-figure", "fvn-spacing", "fvn-fraction"],
      "fvn-ordinal": ["fvn-normal"],
      "fvn-slashed-zero": ["fvn-normal"],
      "fvn-figure": ["fvn-normal"],
      "fvn-spacing": ["fvn-normal"],
      "fvn-fraction": ["fvn-normal"],
      "line-clamp": ["display", "overflow"],
      rounded: ["rounded-s", "rounded-e", "rounded-t", "rounded-r", "rounded-b", "rounded-l", "rounded-ss", "rounded-se", "rounded-ee", "rounded-es", "rounded-tl", "rounded-tr", "rounded-br", "rounded-bl"],
      "rounded-s": ["rounded-ss", "rounded-es"],
      "rounded-e": ["rounded-se", "rounded-ee"],
      "rounded-t": ["rounded-tl", "rounded-tr"],
      "rounded-r": ["rounded-tr", "rounded-br"],
      "rounded-b": ["rounded-br", "rounded-bl"],
      "rounded-l": ["rounded-tl", "rounded-bl"],
      "border-spacing": ["border-spacing-x", "border-spacing-y"],
      "border-w": ["border-w-s", "border-w-e", "border-w-t", "border-w-r", "border-w-b", "border-w-l"],
      "border-w-x": ["border-w-r", "border-w-l"],
      "border-w-y": ["border-w-t", "border-w-b"],
      "border-color": ["border-color-t", "border-color-r", "border-color-b", "border-color-l"],
      "border-color-x": ["border-color-r", "border-color-l"],
      "border-color-y": ["border-color-t", "border-color-b"],
      "scroll-m": ["scroll-mx", "scroll-my", "scroll-ms", "scroll-me", "scroll-mt", "scroll-mr", "scroll-mb", "scroll-ml"],
      "scroll-mx": ["scroll-mr", "scroll-ml"],
      "scroll-my": ["scroll-mt", "scroll-mb"],
      "scroll-p": ["scroll-px", "scroll-py", "scroll-ps", "scroll-pe", "scroll-pt", "scroll-pr", "scroll-pb", "scroll-pl"],
      "scroll-px": ["scroll-pr", "scroll-pl"],
      "scroll-py": ["scroll-pt", "scroll-pb"],
      touch: ["touch-x", "touch-y", "touch-pz"],
      "touch-x": ["touch"],
      "touch-y": ["touch"],
      "touch-pz": ["touch"]
    },
    conflictingClassGroupModifiers: {
      "font-size": ["leading"]
    }
  };
}
const Iy = /* @__PURE__ */ yy(ky);
function Se(...e) {
  return Iy(sy(e));
}
var My = function e(t, r) {
  if (t === r)
    return !0;
  if (t && r && typeof t == "object" && typeof r == "object") {
    if (t.constructor !== r.constructor)
      return !1;
    var n, s, i;
    if (Array.isArray(t)) {
      if (n = t.length, n != r.length)
        return !1;
      for (s = n; s-- !== 0; )
        if (!e(t[s], r[s]))
          return !1;
      return !0;
    }
    if (t.constructor === RegExp)
      return t.source === r.source && t.flags === r.flags;
    if (t.valueOf !== Object.prototype.valueOf)
      return t.valueOf() === r.valueOf();
    if (t.toString !== Object.prototype.toString)
      return t.toString() === r.toString();
    if (i = Object.keys(t), n = i.length, n !== Object.keys(r).length)
      return !1;
    for (s = n; s-- !== 0; )
      if (!Object.prototype.hasOwnProperty.call(r, i[s]))
        return !1;
    for (s = n; s-- !== 0; ) {
      var o = i[s];
      if (!e(t[o], r[o]))
        return !1;
    }
    return !0;
  }
  return t !== t && r !== r;
};
const pl = /* @__PURE__ */ Wa(My);
function Dy(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
    );
}
const Ly = typeof window < "u" ? Va : le;
function Ze(e, t) {
  Ly(() => {
    if (e)
      return window.addEventListener(e, t), () => window.removeEventListener(e, t);
  }, [e]);
}
function Fy(e, t) {
  e && Dy(e), Ze(
    `mantine-form:${e}:set-field-value`,
    (r) => t.setFieldValue(r.detail.path, r.detail.value)
  ), Ze(
    `mantine-form:${e}:set-values`,
    (r) => t.setValues(r.detail)
  ), Ze(
    `mantine-form:${e}:set-initial-values`,
    (r) => t.setInitialValues(r.detail)
  ), Ze(
    `mantine-form:${e}:set-errors`,
    (r) => t.setErrors(r.detail)
  ), Ze(
    `mantine-form:${e}:set-field-error`,
    (r) => t.setFieldError(r.detail.path, r.detail.error)
  ), Ze(
    `mantine-form:${e}:clear-field-error`,
    (r) => t.clearFieldError(r.detail)
  ), Ze(`mantine-form:${e}:clear-errors`, t.clearErrors), Ze(`mantine-form:${e}:reset`, t.reset), Ze(`mantine-form:${e}:validate`, t.validate), Ze(
    `mantine-form:${e}:validate-field`,
    (r) => t.validateField(r.detail)
  ), Ze(
    `mantine-form:${e}:reorder-list-item`,
    (r) => t.reorderListItem(r.detail.path, r.detail.payload)
  ), Ze(
    `mantine-form:${e}:remove-list-item`,
    (r) => t.removeListItem(r.detail.path, r.detail.index)
  ), Ze(
    `mantine-form:${e}:insert-list-item`,
    (r) => t.insertListItem(r.detail.path, r.detail.item, r.detail.index)
  ), Ze(
    `mantine-form:${e}:set-dirty`,
    (r) => t.setDirty(r.detail)
  ), Ze(
    `mantine-form:${e}:set-touched`,
    (r) => t.setTouched(r.detail)
  ), Ze(
    `mantine-form:${e}:reset-dirty`,
    (r) => t.resetDirty(r.detail)
  ), Ze(`mantine-form:${e}:reset-touched`, t.resetTouched);
}
function wa(e) {
  return e === null || typeof e != "object" ? {} : Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return n != null && n !== !1 && (t[r] = n), t;
  }, {});
}
function Uy(e) {
  return (t) => {
    if (!t)
      e(t);
    else if (typeof t == "function")
      e(t);
    else if (typeof t == "object" && "nativeEvent" in t) {
      const { currentTarget: r } = t;
      r instanceof HTMLInputElement ? r.type === "checkbox" ? e(r.checked) : e(r.value) : (r instanceof HTMLTextAreaElement || r instanceof HTMLSelectElement) && e(r.value);
    } else
      e(t);
  };
}
function ml(e, t) {
  const r = Object.keys(e);
  if (typeof t == "string") {
    const n = r.filter((s) => s.startsWith(`${t}.`));
    return e[t] || n.some((s) => e[s]) || !1;
  }
  return r.some((n) => e[n]);
}
function Nd(e, t) {
  if (t === null || typeof t != "object")
    return {};
  const r = { ...t };
  return Object.keys(t).forEach((n) => {
    n.includes(`${String(e)}.`) && delete r[n];
  }), r;
}
function vl(e, t) {
  const r = e.substring(t.length + 1).split(".")[0];
  return parseInt(r, 10);
}
function yl(e, t, r, n) {
  if (t === void 0)
    return r;
  const s = `${String(e)}`;
  let i = r;
  n === -1 && (i = Nd(`${s}.${t}`, i));
  const o = { ...i }, a = /* @__PURE__ */ new Set();
  return Object.entries(i).filter(([c]) => {
    if (!c.startsWith(`${s}.`))
      return !1;
    const l = vl(c, s);
    return Number.isNaN(l) ? !1 : l >= t;
  }).forEach(([c, l]) => {
    const u = vl(c, s), d = c.replace(
      `${s}.${u}`,
      `${s}.${u + n}`
    );
    o[d] = l, a.add(d), a.has(c) || delete o[c];
  }), o;
}
function zy(e, { from: t, to: r }, n) {
  const s = `${e}.${t}`, i = `${e}.${r}`, o = { ...n };
  return Object.keys(n).every((a) => {
    let c, l;
    if (a.startsWith(s) && (c = a, l = a.replace(s, i)), a.startsWith(i) && (c = a.replace(i, s), l = a), c && l) {
      const u = o[c], d = o[l];
      return d === void 0 ? delete o[c] : o[c] = d, u === void 0 ? delete o[l] : o[l] = u, !1;
    }
    return !0;
  }), o;
}
function Pd(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Ht(e, t) {
  const r = Pd(e);
  if (r.length === 0 || typeof t != "object" || t === null)
    return;
  let n = t[r[0]];
  for (let s = 1; s < r.length && n !== void 0; s += 1)
    n = n[r[s]];
  return n;
}
function gl(e, t, r) {
  typeof r.value == "object" && (r.value = Jr(r.value)), !r.enumerable || r.get || r.set || !r.configurable || !r.writable || t === "__proto__" ? Object.defineProperty(e, t, r) : e[t] = r.value;
}
function Jr(e) {
  if (typeof e != "object")
    return e;
  var t = 0, r, n, s, i = Object.prototype.toString.call(e);
  if (i === "[object Object]" ? s = Object.create(e.__proto__ || null) : i === "[object Array]" ? s = Array(e.length) : i === "[object Set]" ? (s = /* @__PURE__ */ new Set(), e.forEach(function(o) {
    s.add(Jr(o));
  })) : i === "[object Map]" ? (s = /* @__PURE__ */ new Map(), e.forEach(function(o, a) {
    s.set(Jr(a), Jr(o));
  })) : i === "[object Date]" ? s = /* @__PURE__ */ new Date(+e) : i === "[object RegExp]" ? s = new RegExp(e.source, e.flags) : i === "[object DataView]" ? s = new e.constructor(Jr(e.buffer)) : i === "[object ArrayBuffer]" ? s = e.slice(0) : i.slice(-6) === "Array]" && (s = new e.constructor(e)), s) {
    for (n = Object.getOwnPropertySymbols(e); t < n.length; t++)
      gl(s, n[t], Object.getOwnPropertyDescriptor(e, n[t]));
    for (t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++)
      Object.hasOwnProperty.call(s, r = n[t]) && s[r] === e[r] || gl(s, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return s || e;
}
function Bi(e, t, r) {
  const n = Pd(e);
  if (n.length === 0)
    return r;
  const s = Jr(r);
  if (n.length === 1)
    return s[n[0]] = t, s;
  let i = s[n[0]];
  for (let o = 1; o < n.length - 1; o += 1) {
    if (i === void 0)
      return s;
    i = i[n[o]];
  }
  return i[n[n.length - 1]] = t, s;
}
function By(e, { from: t, to: r }, n) {
  const s = Ht(e, n);
  if (!Array.isArray(s))
    return n;
  const i = [...s], o = s[t];
  return i.splice(t, 1), i.splice(r, 0, o), Bi(e, i, n);
}
function Vy(e, t, r, n) {
  const s = Ht(e, n);
  if (!Array.isArray(s))
    return n;
  const i = [...s];
  return i.splice(typeof r == "number" ? r : i.length, 0, t), Bi(e, i, n);
}
function Wy(e, t, r) {
  const n = Ht(e, r);
  return Array.isArray(n) ? Bi(
    e,
    n.filter((s, i) => i !== t),
    r
  ) : r;
}
function bl(e) {
  const t = wa(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function Sa(e, t, r = "", n = {}) {
  return typeof e != "object" || e === null ? n : Object.keys(e).reduce((s, i) => {
    const o = e[i], a = `${r === "" ? "" : `${r}.`}${i}`, c = Ht(a, t);
    let l = !1;
    return typeof o == "function" && (s[a] = o(c, t, a)), typeof o == "object" && Array.isArray(c) && (l = !0, c.forEach(
      (u, d) => Sa(o, t, `${a}.${d}`, s)
    )), typeof o == "object" && typeof c == "object" && c !== null && (l || Sa(o, t, a, s)), s;
  }, n);
}
function _a(e, t) {
  return bl(typeof e == "function" ? e(t) : Sa(e, t));
}
function Bs(e, t, r) {
  if (typeof e != "string")
    return { hasError: !1, error: null };
  const n = _a(t, r), s = Object.keys(n.errors).find(
    (i) => e.split(".").every((o, a) => o === i.split(".")[a])
  );
  return { hasError: !!s, error: s ? n.errors[s] : null };
}
const qy = "__MANTINE_FORM_INDEX__";
function xl(e, t) {
  return t ? typeof t == "boolean" ? t : Array.isArray(t) ? t.includes(e.replace(/[.][0-9]/g, `.${qy}`)) : !1 : !1;
}
function Hy({
  name: e,
  initialValues: t,
  initialErrors: r = {},
  initialDirty: n = {},
  initialTouched: s = {},
  clearInputErrorOnChange: i = !0,
  validateInputOnChange: o = !1,
  validateInputOnBlur: a = !1,
  onValuesChange: c,
  transformValues: l = (h) => h,
  enhanceGetInputProps: u,
  validate: d
} = {}) {
  const [h, m] = te(s), [y, p] = te(n), [v, S] = te(t || {}), [O, w] = te(wa(r)), [E, x] = te(!1), A = fe(t || {}), M = (_) => {
    A.current = _;
  }, k = Ne(
    (_) => {
      E || (x(!0), S(_));
    },
    [E]
  ), N = Ne(() => m({}), []), B = (_) => {
    const K = _ ? { ...v, ..._ } : v;
    M(K), p({});
  }, Z = Ne(
    (_) => w((K) => wa(typeof _ == "function" ? _(K) : _)),
    []
  ), V = Ne(() => w({}), []), Pe = Ne(() => {
    S(A.current), V(), p({}), N();
  }, []), _e = Ne(
    (_, K) => Z((ne) => ({ ...ne, [_]: K })),
    []
  ), De = Ne(
    (_) => Z((K) => {
      if (typeof _ != "string")
        return K;
      const ne = { ...K };
      return delete ne[_], ne;
    }),
    []
  ), Re = Ne(
    (_) => p((K) => {
      if (typeof _ != "string")
        return K;
      const ne = Nd(_, K);
      return delete ne[_], ne;
    }),
    []
  ), ke = Ne((_, K) => {
    const ne = xl(_, o);
    Re(_), m((xe) => ({ ...xe, [_]: !0 })), S((xe) => {
      const Xe = Bi(_, K, xe);
      if (ne) {
        const Vr = Bs(_, d, Xe);
        Vr.hasError ? _e(_, Vr.error) : De(_);
      }
      return c == null || c(Xe), Xe;
    }), !ne && i && _e(_, null);
  }, []), Je = Ne((_) => {
    S((K) => {
      const ne = typeof _ == "function" ? _(K) : _, xe = { ...K, ...ne };
      return c == null || c(xe), xe;
    }), i && V();
  }, []), Ge = Ne((_, K) => {
    Re(_), S((ne) => {
      const xe = By(_, K, ne);
      return c == null || c(xe), xe;
    }), w((ne) => zy(_, K, ne));
  }, []), T = Ne((_, K) => {
    Re(_), S((ne) => {
      const xe = Wy(_, K, ne);
      return c == null || c(xe), xe;
    }), w((ne) => yl(_, K, ne, -1));
  }, []), I = Ne((_, K, ne) => {
    Re(_), S((xe) => {
      const Xe = Vy(_, K, ne, xe);
      return c == null || c(Xe), Xe;
    }), w((xe) => yl(_, ne, xe, 1));
  }, []), W = Ne(() => {
    const _ = _a(d, v);
    return w(_.errors), _;
  }, [v, d]), J = Ne(
    (_) => {
      const K = Bs(_, d, v);
      return K.hasError ? _e(_, K.error) : De(_), K;
    },
    [v, d]
  ), q = (_, { type: K = "input", withError: ne = !0, withFocus: xe = !0, ...Xe } = {}) => {
    const Et = { onChange: Uy((wt) => ke(_, wt)) };
    return ne && (Et.error = O[_]), K === "checkbox" ? Et.checked = Ht(_, v) : Et.value = Ht(_, v), xe && (Et.onFocus = () => m((wt) => ({ ...wt, [_]: !0 })), Et.onBlur = () => {
      if (xl(_, a)) {
        const wt = Bs(_, d, v);
        wt.hasError ? _e(_, wt.error) : De(_);
      }
    }), Object.assign(
      Et,
      u == null ? void 0 : u({
        inputProps: Et,
        field: _,
        options: { type: K, withError: ne, withFocus: xe, ...Xe },
        form: Ue
      })
    );
  }, me = (_, K) => (ne) => {
    ne == null || ne.preventDefault();
    const xe = W();
    xe.hasErrors ? K == null || K(xe.errors, v, ne) : _ == null || _(l(v), ne);
  }, X = (_) => l(_ || v), re = Ne((_) => {
    _.preventDefault(), Pe();
  }, []), ue = (_) => {
    if (_) {
      const ne = Ht(_, y);
      if (typeof ne == "boolean")
        return ne;
      const xe = Ht(_, v), Xe = Ht(_, A.current);
      return !pl(xe, Xe);
    }
    return Object.keys(y).length > 0 ? ml(y) : !pl(v, A.current);
  }, ye = Ne(
    (_) => ml(h, _),
    [h]
  ), de = Ne(
    (_) => _ ? !Bs(_, d, v).hasError : !_a(d, v).hasErrors,
    [v, d]
  ), Ue = {
    initialized: E,
    values: v,
    errors: O,
    initialize: k,
    setValues: Je,
    setInitialValues: M,
    setErrors: Z,
    setFieldValue: ke,
    setFieldError: _e,
    clearFieldError: De,
    clearErrors: V,
    reset: Pe,
    validate: W,
    validateField: J,
    reorderListItem: Ge,
    removeListItem: T,
    insertListItem: I,
    getInputProps: q,
    onSubmit: me,
    onReset: re,
    isDirty: ue,
    isTouched: ye,
    setTouched: m,
    setDirty: p,
    resetTouched: N,
    resetDirty: B,
    isValid: de,
    getTransformedValues: X
  };
  return Fy(e, Ue), Ue;
}
function Zy(e) {
  return (t) => {
    const r = e.safeParse(t);
    if (r.success)
      return {};
    const n = {};
    return r.error.errors.forEach((s) => {
      n[s.path.join(".")] = s.message;
    }), n;
  };
}
var Ea = { exports: {} }, xo, wl;
function nc() {
  if (wl)
    return xo;
  wl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return xo = e, xo;
}
var wo, Sl;
function Ky() {
  if (Sl)
    return wo;
  Sl = 1;
  var e = nc();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, wo = function() {
    function n(o, a, c, l, u, d) {
      if (d !== e) {
        var h = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw h.name = "Invariant Violation", h;
      }
    }
    n.isRequired = n;
    function s() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: s,
      element: n,
      elementType: n,
      instanceOf: s,
      node: n,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: t
    };
    return i.PropTypes = i, i;
  }, wo;
}
var Vs = { exports: {} }, Ce = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _l;
function Yy() {
  return _l || (_l = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function w(_) {
      return typeof _ == "string" || typeof _ == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      _ === n || _ === l || _ === i || _ === s || _ === d || _ === h || typeof _ == "object" && _ !== null && (_.$$typeof === y || _.$$typeof === m || _.$$typeof === o || _.$$typeof === a || _.$$typeof === u || _.$$typeof === v || _.$$typeof === S || _.$$typeof === O || _.$$typeof === p);
    }
    function E(_) {
      if (typeof _ == "object" && _ !== null) {
        var K = _.$$typeof;
        switch (K) {
          case t:
            var ne = _.type;
            switch (ne) {
              case c:
              case l:
              case n:
              case i:
              case s:
              case d:
                return ne;
              default:
                var xe = ne && ne.$$typeof;
                switch (xe) {
                  case a:
                  case u:
                  case y:
                  case m:
                  case o:
                    return xe;
                  default:
                    return K;
                }
            }
          case r:
            return K;
        }
      }
    }
    var x = c, A = l, M = a, k = o, N = t, B = u, Z = n, V = y, Pe = m, _e = r, De = i, Re = s, ke = d, Je = !1;
    function Ge(_) {
      return Je || (Je = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(_) || E(_) === c;
    }
    function T(_) {
      return E(_) === l;
    }
    function I(_) {
      return E(_) === a;
    }
    function W(_) {
      return E(_) === o;
    }
    function J(_) {
      return typeof _ == "object" && _ !== null && _.$$typeof === t;
    }
    function q(_) {
      return E(_) === u;
    }
    function me(_) {
      return E(_) === n;
    }
    function X(_) {
      return E(_) === y;
    }
    function re(_) {
      return E(_) === m;
    }
    function ue(_) {
      return E(_) === r;
    }
    function ye(_) {
      return E(_) === i;
    }
    function de(_) {
      return E(_) === s;
    }
    function Ue(_) {
      return E(_) === d;
    }
    Ce.AsyncMode = x, Ce.ConcurrentMode = A, Ce.ContextConsumer = M, Ce.ContextProvider = k, Ce.Element = N, Ce.ForwardRef = B, Ce.Fragment = Z, Ce.Lazy = V, Ce.Memo = Pe, Ce.Portal = _e, Ce.Profiler = De, Ce.StrictMode = Re, Ce.Suspense = ke, Ce.isAsyncMode = Ge, Ce.isConcurrentMode = T, Ce.isContextConsumer = I, Ce.isContextProvider = W, Ce.isElement = J, Ce.isForwardRef = q, Ce.isFragment = me, Ce.isLazy = X, Ce.isMemo = re, Ce.isPortal = ue, Ce.isProfiler = ye, Ce.isStrictMode = de, Ce.isSuspense = Ue, Ce.isValidElementType = w, Ce.typeOf = E;
  }()), Ce;
}
var Te = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var El;
function Gy() {
  if (El)
    return Te;
  El = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
  function w(x) {
    if (typeof x == "object" && x !== null) {
      var A = x.$$typeof;
      switch (A) {
        case t:
          switch (x = x.type, x) {
            case c:
            case l:
            case n:
            case i:
            case s:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case a:
                case u:
                case y:
                case m:
                case o:
                  return x;
                default:
                  return A;
              }
          }
        case r:
          return A;
      }
    }
  }
  function E(x) {
    return w(x) === l;
  }
  return Te.AsyncMode = c, Te.ConcurrentMode = l, Te.ContextConsumer = a, Te.ContextProvider = o, Te.Element = t, Te.ForwardRef = u, Te.Fragment = n, Te.Lazy = y, Te.Memo = m, Te.Portal = r, Te.Profiler = i, Te.StrictMode = s, Te.Suspense = d, Te.isAsyncMode = function(x) {
    return E(x) || w(x) === c;
  }, Te.isConcurrentMode = E, Te.isContextConsumer = function(x) {
    return w(x) === a;
  }, Te.isContextProvider = function(x) {
    return w(x) === o;
  }, Te.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Te.isForwardRef = function(x) {
    return w(x) === u;
  }, Te.isFragment = function(x) {
    return w(x) === n;
  }, Te.isLazy = function(x) {
    return w(x) === y;
  }, Te.isMemo = function(x) {
    return w(x) === m;
  }, Te.isPortal = function(x) {
    return w(x) === r;
  }, Te.isProfiler = function(x) {
    return w(x) === i;
  }, Te.isStrictMode = function(x) {
    return w(x) === s;
  }, Te.isSuspense = function(x) {
    return w(x) === d;
  }, Te.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === l || x === i || x === s || x === d || x === h || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === m || x.$$typeof === o || x.$$typeof === a || x.$$typeof === u || x.$$typeof === v || x.$$typeof === S || x.$$typeof === O || x.$$typeof === p);
  }, Te.typeOf = w, Te;
}
var Ol;
function $d() {
  return Ol || (Ol = 1, process.env.NODE_ENV === "production" ? Vs.exports = Gy() : Vs.exports = Yy()), Vs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var So, Cl;
function Qy() {
  if (Cl)
    return So;
  Cl = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var o = {}, a = 0; a < 10; a++)
        o["_" + String.fromCharCode(a)] = a;
      var c = Object.getOwnPropertyNames(o).map(function(u) {
        return o[u];
      });
      if (c.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        l[u] = u;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return So = s() ? Object.assign : function(i, o) {
    for (var a, c = n(i), l, u = 1; u < arguments.length; u++) {
      a = Object(arguments[u]);
      for (var d in a)
        t.call(a, d) && (c[d] = a[d]);
      if (e) {
        l = e(a);
        for (var h = 0; h < l.length; h++)
          r.call(a, l[h]) && (c[l[h]] = a[l[h]]);
      }
    }
    return c;
  }, So;
}
var _o, Tl;
function jd() {
  return Tl || (Tl = 1, _o = Function.call.bind(Object.prototype.hasOwnProperty)), _o;
}
var Eo, Rl;
function Jy() {
  if (Rl)
    return Eo;
  Rl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = nc(), r = {}, n = jd();
    e = function(i) {
      var o = "Warning: " + i;
      typeof console < "u" && console.error(o);
      try {
        throw new Error(o);
      } catch {
      }
    };
  }
  function s(i, o, a, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in i)
        if (n(i, u)) {
          var d;
          try {
            if (typeof i[u] != "function") {
              var h = Error(
                (c || "React class") + ": " + a + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = i[u](o, u, c, a, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + a + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var m = l ? l() : "";
            e(
              "Failed " + a + " type: " + d.message + (m ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Eo = s, Eo;
}
var Oo, Al;
function Xy() {
  if (Al)
    return Oo;
  Al = 1;
  var e = $d(), t = Qy(), r = nc(), n = jd(), s = Jy(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(a) {
    var c = "Warning: " + a;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function o() {
    return null;
  }
  return Oo = function(a, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(T) {
      var I = T && (l && T[l] || T[u]);
      if (typeof I == "function")
        return I;
    }
    var h = "<<anonymous>>", m = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: O(),
      arrayOf: w,
      element: E(),
      elementType: x(),
      instanceOf: A,
      node: B(),
      objectOf: k,
      oneOf: M,
      oneOfType: N,
      shape: V,
      exact: Pe
    };
    function y(T, I) {
      return T === I ? T !== 0 || 1 / T === 1 / I : T !== T && I !== I;
    }
    function p(T, I) {
      this.message = T, this.data = I && typeof I == "object" ? I : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function v(T) {
      if (process.env.NODE_ENV !== "production")
        var I = {}, W = 0;
      function J(me, X, re, ue, ye, de, Ue) {
        if (ue = ue || h, de = de || re, Ue !== r) {
          if (c) {
            var _ = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw _.name = "Invariant Violation", _;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var K = ue + ":" + re;
            !I[K] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + de + "` prop on `" + ue + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), I[K] = !0, W++);
          }
        }
        return X[re] == null ? me ? X[re] === null ? new p("The " + ye + " `" + de + "` is marked as required " + ("in `" + ue + "`, but its value is `null`.")) : new p("The " + ye + " `" + de + "` is marked as required in " + ("`" + ue + "`, but its value is `undefined`.")) : null : T(X, re, ue, ye, de);
      }
      var q = J.bind(null, !1);
      return q.isRequired = J.bind(null, !0), q;
    }
    function S(T) {
      function I(W, J, q, me, X, re) {
        var ue = W[J], ye = Re(ue);
        if (ye !== T) {
          var de = ke(ue);
          return new p(
            "Invalid " + me + " `" + X + "` of type " + ("`" + de + "` supplied to `" + q + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return v(I);
    }
    function O() {
      return v(o);
    }
    function w(T) {
      function I(W, J, q, me, X) {
        if (typeof T != "function")
          return new p("Property `" + X + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var re = W[J];
        if (!Array.isArray(re)) {
          var ue = Re(re);
          return new p("Invalid " + me + " `" + X + "` of type " + ("`" + ue + "` supplied to `" + q + "`, expected an array."));
        }
        for (var ye = 0; ye < re.length; ye++) {
          var de = T(re, ye, q, me, X + "[" + ye + "]", r);
          if (de instanceof Error)
            return de;
        }
        return null;
      }
      return v(I);
    }
    function E() {
      function T(I, W, J, q, me) {
        var X = I[W];
        if (!a(X)) {
          var re = Re(X);
          return new p("Invalid " + q + " `" + me + "` of type " + ("`" + re + "` supplied to `" + J + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(T);
    }
    function x() {
      function T(I, W, J, q, me) {
        var X = I[W];
        if (!e.isValidElementType(X)) {
          var re = Re(X);
          return new p("Invalid " + q + " `" + me + "` of type " + ("`" + re + "` supplied to `" + J + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(T);
    }
    function A(T) {
      function I(W, J, q, me, X) {
        if (!(W[J] instanceof T)) {
          var re = T.name || h, ue = Ge(W[J]);
          return new p("Invalid " + me + " `" + X + "` of type " + ("`" + ue + "` supplied to `" + q + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return v(I);
    }
    function M(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function I(W, J, q, me, X) {
        for (var re = W[J], ue = 0; ue < T.length; ue++)
          if (y(re, T[ue]))
            return null;
        var ye = JSON.stringify(T, function(Ue, _) {
          var K = ke(_);
          return K === "symbol" ? String(_) : _;
        });
        return new p("Invalid " + me + " `" + X + "` of value `" + String(re) + "` " + ("supplied to `" + q + "`, expected one of " + ye + "."));
      }
      return v(I);
    }
    function k(T) {
      function I(W, J, q, me, X) {
        if (typeof T != "function")
          return new p("Property `" + X + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var re = W[J], ue = Re(re);
        if (ue !== "object")
          return new p("Invalid " + me + " `" + X + "` of type " + ("`" + ue + "` supplied to `" + q + "`, expected an object."));
        for (var ye in re)
          if (n(re, ye)) {
            var de = T(re, ye, q, me, X + "." + ye, r);
            if (de instanceof Error)
              return de;
          }
        return null;
      }
      return v(I);
    }
    function N(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var I = 0; I < T.length; I++) {
        var W = T[I];
        if (typeof W != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Je(W) + " at index " + I + "."
          ), o;
      }
      function J(q, me, X, re, ue) {
        for (var ye = [], de = 0; de < T.length; de++) {
          var Ue = T[de], _ = Ue(q, me, X, re, ue, r);
          if (_ == null)
            return null;
          _.data && n(_.data, "expectedType") && ye.push(_.data.expectedType);
        }
        var K = ye.length > 0 ? ", expected one of type [" + ye.join(", ") + "]" : "";
        return new p("Invalid " + re + " `" + ue + "` supplied to " + ("`" + X + "`" + K + "."));
      }
      return v(J);
    }
    function B() {
      function T(I, W, J, q, me) {
        return _e(I[W]) ? null : new p("Invalid " + q + " `" + me + "` supplied to " + ("`" + J + "`, expected a ReactNode."));
      }
      return v(T);
    }
    function Z(T, I, W, J, q) {
      return new p(
        (T || "React class") + ": " + I + " type `" + W + "." + J + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function V(T) {
      function I(W, J, q, me, X) {
        var re = W[J], ue = Re(re);
        if (ue !== "object")
          return new p("Invalid " + me + " `" + X + "` of type `" + ue + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var ye in T) {
          var de = T[ye];
          if (typeof de != "function")
            return Z(q, me, X, ye, ke(de));
          var Ue = de(re, ye, q, me, X + "." + ye, r);
          if (Ue)
            return Ue;
        }
        return null;
      }
      return v(I);
    }
    function Pe(T) {
      function I(W, J, q, me, X) {
        var re = W[J], ue = Re(re);
        if (ue !== "object")
          return new p("Invalid " + me + " `" + X + "` of type `" + ue + "` " + ("supplied to `" + q + "`, expected `object`."));
        var ye = t({}, W[J], T);
        for (var de in ye) {
          var Ue = T[de];
          if (n(T, de) && typeof Ue != "function")
            return Z(q, me, X, de, ke(Ue));
          if (!Ue)
            return new p(
              "Invalid " + me + " `" + X + "` key `" + de + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(W[J], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var _ = Ue(re, de, q, me, X + "." + de, r);
          if (_)
            return _;
        }
        return null;
      }
      return v(I);
    }
    function _e(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(_e);
          if (T === null || a(T))
            return !0;
          var I = d(T);
          if (I) {
            var W = I.call(T), J;
            if (I !== T.entries) {
              for (; !(J = W.next()).done; )
                if (!_e(J.value))
                  return !1;
            } else
              for (; !(J = W.next()).done; ) {
                var q = J.value;
                if (q && !_e(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function De(T, I) {
      return T === "symbol" ? !0 : I ? I["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && I instanceof Symbol : !1;
    }
    function Re(T) {
      var I = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : De(I, T) ? "symbol" : I;
    }
    function ke(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var I = Re(T);
      if (I === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return I;
    }
    function Je(T) {
      var I = ke(T);
      switch (I) {
        case "array":
        case "object":
          return "an " + I;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + I;
        default:
          return I;
      }
    }
    function Ge(T) {
      return !T.constructor || !T.constructor.name ? h : T.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, Oo;
}
if (process.env.NODE_ENV !== "production") {
  var eg = $d(), tg = !0;
  Ea.exports = Xy()(eg.isElement, tg);
} else
  Ea.exports = Ky()();
var rg = Ea.exports;
const Er = /* @__PURE__ */ Wa(rg);
var ng = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, sg = Object.defineProperty, ig = Object.defineProperties, og = Object.getOwnPropertyDescriptors, vi = Object.getOwnPropertySymbols, kd = Object.prototype.hasOwnProperty, Id = Object.prototype.propertyIsEnumerable, Nl = (e, t, r) => t in e ? sg(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Pl = (e, t) => {
  for (var r in t || (t = {}))
    kd.call(t, r) && Nl(e, r, t[r]);
  if (vi)
    for (var r of vi(t))
      Id.call(t, r) && Nl(e, r, t[r]);
  return e;
}, ag = (e, t) => ig(e, og(t)), cg = (e, t) => {
  var r = {};
  for (var n in e)
    kd.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && vi)
    for (var n of vi(e))
      t.indexOf(n) < 0 && Id.call(e, n) && (r[n] = e[n]);
  return r;
}, gt = (e, t, r) => {
  const n = pe(
    (s, i) => {
      var o = s, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = o, d = cg(o, ["color", "size", "stroke", "children"]);
      return U(
        "svg",
        Pl(ag(Pl({
          ref: i
        }, ng), {
          width: c,
          height: c,
          stroke: a,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([h, m]) => U(h, m)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: Er.string,
    size: Er.oneOfType([Er.string, Er.number]),
    stroke: Er.oneOfType([Er.string, Er.number])
  }, n.displayName = `${t}`, n;
}, Md = gt("alert-circle", "IconAlertCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 8v4", key: "svg-1" }],
  ["path", { d: "M12 16h.01", key: "svg-2" }]
]), lg = gt("alert-triangle", "IconAlertTriangle", [
  ["path", { d: "M12 9v4", key: "svg-0" }],
  [
    "path",
    {
      d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M12 16h.01", key: "svg-2" }]
]), ug = gt("book", "IconBook", [
  ["path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-0" }],
  ["path", { d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-1" }],
  ["path", { d: "M3 6l0 13", key: "svg-2" }],
  ["path", { d: "M12 6l0 13", key: "svg-3" }],
  ["path", { d: "M21 6l0 13", key: "svg-4" }]
]), dg = gt("chalkboard", "IconChalkboard", [
  [
    "path",
    {
      d: "M8 19h-3a2 2 0 0 1 -2 -2v-10a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v11a1 1 0 0 1 -1 1",
      key: "svg-0"
    }
  ],
  [
    "path",
    {
      d: "M11 16m0 1a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-4a1 1 0 0 1 -1 -1z",
      key: "svg-1"
    }
  ]
]), Co = gt(
  "circle-check-filled",
  "IconCircleCheckFilled",
  [
    [
      "path",
      {
        d: "M17 3.34a10 10 0 1 1 -14.995 8.984l-.005 -.324l.005 -.324a10 10 0 0 1 14.995 -8.336zm-1.293 5.953a1 1 0 0 0 -1.32 -.083l-.094 .083l-3.293 3.292l-1.293 -1.292l-.094 -.083a1 1 0 0 0 -1.403 1.403l.083 .094l2 2l.094 .083a1 1 0 0 0 1.226 0l.094 -.083l4 -4l.083 -.094a1 1 0 0 0 -.083 -1.32z",
        fill: "currentColor",
        key: "svg-0",
        strokeWidth: "0"
      }
    ]
  ]
), $l = gt("info-square", "IconInfoSquare", [
  ["path", { d: "M12 9h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), fg = gt("menu-deep", "IconMenuDeep", [
  ["path", { d: "M4 6h16", key: "svg-0" }],
  ["path", { d: "M7 12h13", key: "svg-1" }],
  ["path", { d: "M10 18h10", key: "svg-2" }]
]), hg = gt("phone-call", "IconPhoneCall", [
  [
    "path",
    {
      d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M15 7a2 2 0 0 1 2 2", key: "svg-1" }],
  ["path", { d: "M15 3a6 6 0 0 1 6 6", key: "svg-2" }]
]), Dd = gt("square-check", "IconSquareCheck", [
  [
    "path",
    {
      d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]
]), pg = gt("square-x", "IconSquareX", [
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 9l6 6m0 -6l-6 6", key: "svg-1" }]
]), To = gt("wash-dryclean", "IconWashDryclean", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }]
]), Ld = gt("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]), Oe;
(function(e) {
  e.assertEqual = (s) => s;
  function t(s) {
  }
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (s) => {
    const i = {};
    for (const o of s)
      i[o] = o;
    return i;
  }, e.getValidEnumValues = (s) => {
    const i = e.objectKeys(s).filter((a) => typeof s[s[a]] != "number"), o = {};
    for (const a of i)
      o[a] = s[a];
    return e.objectValues(o);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(i) {
    return s[i];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const i = [];
    for (const o in s)
      Object.prototype.hasOwnProperty.call(s, o) && i.push(o);
    return i;
  }, e.find = (s, i) => {
    for (const o of s)
      if (i(o))
        return o;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, i = " | ") {
    return s.map((o) => typeof o == "string" ? `'${o}'` : o).join(i);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (s, i) => typeof i == "bigint" ? i.toString() : i;
})(Oe || (Oe = {}));
var jl;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(jl || (jl = {}));
const F = Oe.arrayToEnum([
  "string",
  "nan",
  "number",
  "integer",
  "float",
  "boolean",
  "date",
  "bigint",
  "symbol",
  "function",
  "undefined",
  "null",
  "array",
  "object",
  "unknown",
  "promise",
  "void",
  "never",
  "map",
  "set"
]), Cr = (e) => {
  switch (typeof e) {
    case "undefined":
      return F.undefined;
    case "string":
      return F.string;
    case "number":
      return isNaN(e) ? F.nan : F.number;
    case "boolean":
      return F.boolean;
    case "function":
      return F.function;
    case "bigint":
      return F.bigint;
    case "symbol":
      return F.symbol;
    case "object":
      return Array.isArray(e) ? F.array : e === null ? F.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? F.promise : typeof Map < "u" && e instanceof Map ? F.map : typeof Set < "u" && e instanceof Set ? F.set : typeof Date < "u" && e instanceof Date ? F.date : F.object;
    default:
      return F.unknown;
  }
}, j = Oe.arrayToEnum([
  "invalid_type",
  "invalid_literal",
  "custom",
  "invalid_union",
  "invalid_union_discriminator",
  "invalid_enum_value",
  "unrecognized_keys",
  "invalid_arguments",
  "invalid_return_type",
  "invalid_date",
  "invalid_string",
  "too_small",
  "too_big",
  "invalid_intersection_types",
  "not_multiple_of",
  "not_finite"
]);
class kt extends Error {
  constructor(t) {
    super(), this.issues = [], this.addIssue = (n) => {
      this.issues = [...this.issues, n];
    }, this.addIssues = (n = []) => {
      this.issues = [...this.issues, ...n];
    };
    const r = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, r) : this.__proto__ = r, this.name = "ZodError", this.issues = t;
  }
  get errors() {
    return this.issues;
  }
  format(t) {
    const r = t || function(i) {
      return i.message;
    }, n = { _errors: [] }, s = (i) => {
      for (const o of i.issues)
        if (o.code === "invalid_union")
          o.unionErrors.map(s);
        else if (o.code === "invalid_return_type")
          s(o.returnTypeError);
        else if (o.code === "invalid_arguments")
          s(o.argumentsError);
        else if (o.path.length === 0)
          n._errors.push(r(o));
        else {
          let a = n, c = 0;
          for (; c < o.path.length; ) {
            const l = o.path[c];
            c === o.path.length - 1 ? (a[l] = a[l] || { _errors: [] }, a[l]._errors.push(r(o))) : a[l] = a[l] || { _errors: [] }, a = a[l], c++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Oe.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(t = (r) => r.message) {
    const r = {}, n = [];
    for (const s of this.issues)
      s.path.length > 0 ? (r[s.path[0]] = r[s.path[0]] || [], r[s.path[0]].push(t(s))) : n.push(t(s));
    return { formErrors: n, fieldErrors: r };
  }
  get formErrors() {
    return this.flatten();
  }
}
kt.create = (e) => new kt(e);
const yi = (e, t) => {
  let r;
  switch (e.code) {
    case j.invalid_type:
      e.received === F.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case j.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, Oe.jsonStringifyReplacer)}`;
      break;
    case j.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Oe.joinValues(e.keys, ", ")}`;
      break;
    case j.invalid_union:
      r = "Invalid input";
      break;
    case j.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Oe.joinValues(e.options)}`;
      break;
    case j.invalid_enum_value:
      r = `Invalid enum value. Expected ${Oe.joinValues(e.options)}, received '${e.received}'`;
      break;
    case j.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case j.invalid_return_type:
      r = "Invalid function return type";
      break;
    case j.invalid_date:
      r = "Invalid date";
      break;
    case j.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : Oe.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case j.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case j.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case j.custom:
      r = "Invalid input";
      break;
    case j.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case j.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case j.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, Oe.assertNever(e);
  }
  return { message: r };
};
let mg = yi;
function Oa() {
  return mg;
}
const Ca = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: s } = e, i = [...r, ...s.path || []], o = {
    ...s,
    path: i
  };
  let a = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    a = l(o, { data: t, defaultError: a }).message;
  return {
    ...s,
    path: i,
    message: s.message || a
  };
};
function z(e, t) {
  const r = Ca({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Oa(),
      yi
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class it {
  constructor() {
    this.value = "valid";
  }
  dirty() {
    this.value === "valid" && (this.value = "dirty");
  }
  abort() {
    this.value !== "aborted" && (this.value = "aborted");
  }
  static mergeArray(t, r) {
    const n = [];
    for (const s of r) {
      if (s.status === "aborted")
        return oe;
      s.status === "dirty" && t.dirty(), n.push(s.value);
    }
    return { status: t.value, value: n };
  }
  static async mergeObjectAsync(t, r) {
    const n = [];
    for (const s of r)
      n.push({
        key: await s.key,
        value: await s.value
      });
    return it.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return oe;
      i.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (n[i.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const oe = Object.freeze({
  status: "aborted"
}), vg = (e) => ({ status: "dirty", value: e }), lt = (e) => ({ status: "valid", value: e }), kl = (e) => e.status === "aborted", Il = (e) => e.status === "dirty", gi = (e) => e.status === "valid", Ta = (e) => typeof Promise < "u" && e instanceof Promise;
var H;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(H || (H = {}));
class Dt {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Ml = (e, t) => {
  if (gi(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new kt(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ie(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: n ?? a.defaultError } : { message: r ?? a.defaultError }, description: s };
}
class he {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Cr(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Cr(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new it(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Cr(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Ta(r))
      throw new Error("Synchronous parse encountered promise.");
    return r;
  }
  _parseAsync(t) {
    const r = this._parse(t);
    return Promise.resolve(r);
  }
  parse(t, r) {
    const n = this.safeParse(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  safeParse(t, r) {
    var n;
    const s = {
      common: {
        issues: [],
        async: (n = r == null ? void 0 : r.async) !== null && n !== void 0 ? n : !1,
        contextualErrorMap: r == null ? void 0 : r.errorMap
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Cr(t)
    }, i = this._parseSync({ data: t, path: s.path, parent: s });
    return Ml(s, i);
  }
  async parseAsync(t, r) {
    const n = await this.safeParseAsync(t, r);
    if (n.success)
      return n.data;
    throw n.error;
  }
  async safeParseAsync(t, r) {
    const n = {
      common: {
        issues: [],
        contextualErrorMap: r == null ? void 0 : r.errorMap,
        async: !0
      },
      path: (r == null ? void 0 : r.path) || [],
      schemaErrorMap: this._def.errorMap,
      parent: null,
      data: t,
      parsedType: Cr(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), i = await (Ta(s) ? s : Promise.resolve(s));
    return Ml(n, i);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = t(s), a = () => i.addIssue({
        code: j.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new Xt({
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return br.create(this, this._def);
  }
  nullable() {
    return kn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return It.create(this, this._def);
  }
  promise() {
    return cs.create(this, this._def);
  }
  or(t) {
    return wi.create([this, t], this._def);
  }
  and(t) {
    return Si.create(this, t, this._def);
  }
  transform(t) {
    return new Xt({
      ...ie(this._def),
      schema: this,
      typeName: Y.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ti({
      ...ie(this._def),
      innerType: this,
      defaultValue: r,
      typeName: Y.ZodDefault
    });
  }
  brand() {
    return new Rg({
      typeName: Y.ZodBranded,
      type: this,
      ...ie(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new ka({
      ...ie(this._def),
      innerType: this,
      catchValue: r,
      typeName: Y.ZodCatch
    });
  }
  describe(t) {
    const r = this.constructor;
    return new r({
      ...this._def,
      description: t
    });
  }
  pipe(t) {
    return Vi.create(this, t);
  }
  readonly() {
    return Ma.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const yg = /^c[^\s-]{8,}$/i, gg = /^[a-z][a-z0-9]*$/, bg = /^[0-9A-HJKMNP-TV-Z]{26}$/, xg = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, wg = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Sg = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ro;
const _g = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Eg = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Og = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Cg(e, t) {
  return !!((t === "v4" || !t) && _g.test(e) || (t === "v6" || !t) && Eg.test(e));
}
class Zt extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== F.string) {
      const i = this._getOrReturnCtx(t);
      return z(
        i,
        {
          code: j.invalid_type,
          expected: F.string,
          received: i.parsedType
        }
        //
      ), oe;
    }
    const n = new it();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (s = this._getOrReturnCtx(t, s), z(s, {
          code: j.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (s = this._getOrReturnCtx(t, s), z(s, {
          code: j.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value, a = t.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(t, s), o ? z(s, {
          code: j.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && z(s, {
          code: j.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        wg.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "email",
          code: j.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        Ro || (Ro = new RegExp(Sg, "u")), Ro.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "emoji",
          code: j.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        xg.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "uuid",
          code: j.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        yg.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "cuid",
          code: j.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        gg.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "cuid2",
          code: j.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        bg.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "ulid",
          code: j.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), z(s, {
            validation: "url",
            code: j.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "regex",
          code: j.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: j.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: j.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: j.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? Og(i).test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: j.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? Cg(t.data, i.version) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "ip",
          code: j.invalid_string,
          message: i.message
        }), n.dirty()) : Oe.assertNever(i);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: j.invalid_string,
      ...H.errToObj(n)
    });
  }
  _addCheck(t) {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...H.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...H.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...H.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...H.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...H.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...H.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...H.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...H.errToObj(t) });
  }
  datetime(t) {
    var r;
    return typeof t == "string" ? this._addCheck({
      kind: "datetime",
      precision: null,
      offset: !1,
      message: t
    }) : this._addCheck({
      kind: "datetime",
      precision: typeof (t == null ? void 0 : t.precision) > "u" ? null : t == null ? void 0 : t.precision,
      offset: (r = t == null ? void 0 : t.offset) !== null && r !== void 0 ? r : !1,
      ...H.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...H.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...H.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...H.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...H.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...H.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...H.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...H.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, H.errToObj(t));
  }
  trim() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Zt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toUpperCase" }]
    });
  }
  get isDatetime() {
    return !!this._def.checks.find((t) => t.kind === "datetime");
  }
  get isEmail() {
    return !!this._def.checks.find((t) => t.kind === "email");
  }
  get isURL() {
    return !!this._def.checks.find((t) => t.kind === "url");
  }
  get isEmoji() {
    return !!this._def.checks.find((t) => t.kind === "emoji");
  }
  get isUUID() {
    return !!this._def.checks.find((t) => t.kind === "uuid");
  }
  get isCUID() {
    return !!this._def.checks.find((t) => t.kind === "cuid");
  }
  get isCUID2() {
    return !!this._def.checks.find((t) => t.kind === "cuid2");
  }
  get isULID() {
    return !!this._def.checks.find((t) => t.kind === "ulid");
  }
  get isIP() {
    return !!this._def.checks.find((t) => t.kind === "ip");
  }
  get minLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxLength() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
Zt.create = (e) => {
  var t;
  return new Zt({
    checks: [],
    typeName: Y.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ie(e)
  });
};
function Tg(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(e.toFixed(s).replace(".", "")), o = parseInt(t.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class Pn extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== F.number) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: j.invalid_type,
        expected: F.number,
        received: i.parsedType
      }), oe;
    }
    let n;
    const s = new it();
    for (const i of this._def.checks)
      i.kind === "int" ? Oe.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? Tg(t.data, i.value) !== 0 && (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.not_finite,
        message: i.message
      }), s.dirty()) : Oe.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, H.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, H.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, H.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, H.toString(r));
  }
  setLimit(t, r, n, s) {
    return new Pn({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: H.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new Pn({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: H.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: H.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: H.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: H.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: H.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: H.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: H.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: H.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: H.toString(t)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
  get isInt() {
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Oe.isInteger(t.value));
  }
  get isFinite() {
    let t = null, r = null;
    for (const n of this._def.checks) {
      if (n.kind === "finite" || n.kind === "int" || n.kind === "multipleOf")
        return !0;
      n.kind === "min" ? (r === null || n.value > r) && (r = n.value) : n.kind === "max" && (t === null || n.value < t) && (t = n.value);
    }
    return Number.isFinite(r) && Number.isFinite(t);
  }
}
Pn.create = (e) => new Pn({
  checks: [],
  typeName: Y.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class $n extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== F.bigint) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: j.invalid_type,
        expected: F.bigint,
        received: i.parsedType
      }), oe;
    }
    let n;
    const s = new it();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: j.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Oe.assertNever(i);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, H.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, H.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, H.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, H.toString(r));
  }
  setLimit(t, r, n, s) {
    return new $n({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: H.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new $n({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: H.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: H.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: H.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: H.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: H.toString(r)
    });
  }
  get minValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t;
  }
  get maxValue() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t;
  }
}
$n.create = (e) => {
  var t;
  return new $n({
    checks: [],
    typeName: Y.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ie(e)
  });
};
class Ra extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: j.invalid_type,
        expected: F.boolean,
        received: n.parsedType
      }), oe;
    }
    return lt(t.data);
  }
}
Ra.create = (e) => new Ra({
  typeName: Y.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ie(e)
});
class as extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== F.date) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: j.invalid_type,
        expected: F.date,
        received: i.parsedType
      }), oe;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: j.invalid_date
      }), oe;
    }
    const n = new it();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (s = this._getOrReturnCtx(t, s), z(s, {
        code: j.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (s = this._getOrReturnCtx(t, s), z(s, {
        code: j.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : Oe.assertNever(i);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new as({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: H.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: H.toString(r)
    });
  }
  get minDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "min" && (t === null || r.value > t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
  get maxDate() {
    let t = null;
    for (const r of this._def.checks)
      r.kind === "max" && (t === null || r.value < t) && (t = r.value);
    return t != null ? new Date(t) : null;
  }
}
as.create = (e) => new as({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: Y.ZodDate,
  ...ie(e)
});
class Aa extends he {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: j.invalid_type,
        expected: F.symbol,
        received: n.parsedType
      }), oe;
    }
    return lt(t.data);
  }
}
Aa.create = (e) => new Aa({
  typeName: Y.ZodSymbol,
  ...ie(e)
});
class bi extends he {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: j.invalid_type,
        expected: F.undefined,
        received: n.parsedType
      }), oe;
    }
    return lt(t.data);
  }
}
bi.create = (e) => new bi({
  typeName: Y.ZodUndefined,
  ...ie(e)
});
class xi extends he {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: j.invalid_type,
        expected: F.null,
        received: n.parsedType
      }), oe;
    }
    return lt(t.data);
  }
}
xi.create = (e) => new xi({
  typeName: Y.ZodNull,
  ...ie(e)
});
class Na extends he {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return lt(t.data);
  }
}
Na.create = (e) => new Na({
  typeName: Y.ZodAny,
  ...ie(e)
});
class Xr extends he {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return lt(t.data);
  }
}
Xr.create = (e) => new Xr({
  typeName: Y.ZodUnknown,
  ...ie(e)
});
class wr extends he {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return z(r, {
      code: j.invalid_type,
      expected: F.never,
      received: r.parsedType
    }), oe;
  }
}
wr.create = (e) => new wr({
  typeName: Y.ZodNever,
  ...ie(e)
});
class Pa extends he {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: j.invalid_type,
        expected: F.void,
        received: n.parsedType
      }), oe;
    }
    return lt(t.data);
  }
}
Pa.create = (e) => new Pa({
  typeName: Y.ZodVoid,
  ...ie(e)
});
class It extends he {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== F.array)
      return z(r, {
        code: j.invalid_type,
        expected: F.array,
        received: r.parsedType
      }), oe;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, a = r.data.length < s.exactLength.value;
      (o || a) && (z(r, {
        code: o ? j.too_big : j.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (z(r, {
      code: j.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (z(r, {
      code: j.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, a) => s.type._parseAsync(new Dt(r, o, r.path, a)))).then((o) => it.mergeArray(n, o));
    const i = [...r.data].map((o, a) => s.type._parseSync(new Dt(r, o, r.path, a)));
    return it.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new It({
      ...this._def,
      minLength: { value: t, message: H.toString(r) }
    });
  }
  max(t, r) {
    return new It({
      ...this._def,
      maxLength: { value: t, message: H.toString(r) }
    });
  }
  length(t, r) {
    return new It({
      ...this._def,
      exactLength: { value: t, message: H.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
It.create = (e, t) => new It({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: Y.ZodArray,
  ...ie(t)
});
function Gr(e) {
  if (e instanceof Le) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = br.create(Gr(n));
    }
    return new Le({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof It ? new It({
      ...e._def,
      type: Gr(e.element)
    }) : e instanceof br ? br.create(Gr(e.unwrap())) : e instanceof kn ? kn.create(Gr(e.unwrap())) : e instanceof Jt ? Jt.create(e.items.map((t) => Gr(t))) : e;
}
class Le extends he {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = Oe.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== F.object) {
      const l = this._getOrReturnCtx(t);
      return z(l, {
        code: j.invalid_type,
        expected: F.object,
        received: l.parsedType
      }), oe;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: i, keys: o } = this._getCached(), a = [];
    if (!(this._def.catchall instanceof wr && this._def.unknownKeys === "strip"))
      for (const l in s.data)
        o.includes(l) || a.push(l);
    const c = [];
    for (const l of o) {
      const u = i[l], d = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new Dt(s, d, s.path, l)),
        alwaysSet: l in s.data
      });
    }
    if (this._def.catchall instanceof wr) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of a)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (l === "strict")
        a.length > 0 && (z(s, {
          code: j.unrecognized_keys,
          keys: a
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of a) {
        const d = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new Dt(s, d, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const l = [];
      for (const u of c) {
        const d = await u.key;
        l.push({
          key: d,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return l;
    }).then((l) => it.mergeObjectSync(n, l)) : it.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return H.errToObj, new Le({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var s, i, o, a;
          const c = (o = (i = (s = this._def).errorMap) === null || i === void 0 ? void 0 : i.call(s, r, n).message) !== null && o !== void 0 ? o : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (a = H.errToObj(t).message) !== null && a !== void 0 ? a : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new Le({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Le({
      ...this._def,
      unknownKeys: "passthrough"
    });
  }
  // const AugmentFactory =
  //   <Def extends ZodObjectDef>(def: Def) =>
  //   <Augmentation extends ZodRawShape>(
  //     augmentation: Augmentation
  //   ): ZodObject<
  //     extendShape<ReturnType<Def["shape"]>, Augmentation>,
  //     Def["unknownKeys"],
  //     Def["catchall"]
  //   > => {
  //     return new ZodObject({
  //       ...def,
  //       shape: () => ({
  //         ...def.shape(),
  //         ...augmentation,
  //       }),
  //     }) as any;
  //   };
  extend(t) {
    return new Le({
      ...this._def,
      shape: () => ({
        ...this._def.shape(),
        ...t
      })
    });
  }
  /**
   * Prior to zod@1.0.12 there was a bug in the
   * inferred type of merged objects. Please
   * upgrade if you are experiencing issues.
   */
  merge(t) {
    return new Le({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: Y.ZodObject
    });
  }
  // merge<
  //   Incoming extends AnyZodObject,
  //   Augmentation extends Incoming["shape"],
  //   NewOutput extends {
  //     [k in keyof Augmentation | keyof Output]: k extends keyof Augmentation
  //       ? Augmentation[k]["_output"]
  //       : k extends keyof Output
  //       ? Output[k]
  //       : never;
  //   },
  //   NewInput extends {
  //     [k in keyof Augmentation | keyof Input]: k extends keyof Augmentation
  //       ? Augmentation[k]["_input"]
  //       : k extends keyof Input
  //       ? Input[k]
  //       : never;
  //   }
  // >(
  //   merging: Incoming
  // ): ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"],
  //   NewOutput,
  //   NewInput
  // > {
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  setKey(t, r) {
    return this.augment({ [t]: r });
  }
  // merge<Incoming extends AnyZodObject>(
  //   merging: Incoming
  // ): //ZodObject<T & Incoming["_shape"], UnknownKeys, Catchall> = (merging) => {
  // ZodObject<
  //   extendShape<T, ReturnType<Incoming["_def"]["shape"]>>,
  //   Incoming["_def"]["unknownKeys"],
  //   Incoming["_def"]["catchall"]
  // > {
  //   // const mergedShape = objectUtil.mergeShapes(
  //   //   this._def.shape(),
  //   //   merging._def.shape()
  //   // );
  //   const merged: any = new ZodObject({
  //     unknownKeys: merging._def.unknownKeys,
  //     catchall: merging._def.catchall,
  //     shape: () =>
  //       objectUtil.mergeShapes(this._def.shape(), merging._def.shape()),
  //     typeName: ZodFirstPartyTypeKind.ZodObject,
  //   }) as any;
  //   return merged;
  // }
  catchall(t) {
    return new Le({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return Oe.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return Oe.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Gr(this);
  }
  partial(t) {
    const r = {};
    return Oe.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return Oe.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof br; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new Le({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Fd(Oe.objectKeys(this.shape));
  }
}
Le.create = (e, t) => new Le({
  shape: () => e,
  unknownKeys: "strip",
  catchall: wr.create(),
  typeName: Y.ZodObject,
  ...ie(t)
});
Le.strictCreate = (e, t) => new Le({
  shape: () => e,
  unknownKeys: "strict",
  catchall: wr.create(),
  typeName: Y.ZodObject,
  ...ie(t)
});
Le.lazycreate = (e, t) => new Le({
  shape: e,
  unknownKeys: "strip",
  catchall: wr.create(),
  typeName: Y.ZodObject,
  ...ie(t)
});
class wi extends he {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new kt(a.ctx.common.issues));
      return z(r, {
        code: j.invalid_union,
        unionErrors: o
      }), oe;
    }
    if (r.common.async)
      return Promise.all(n.map(async (i) => {
        const o = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await i._parseAsync({
            data: r.data,
            path: r.path,
            parent: o
          }),
          ctx: o
        };
      })).then(s);
    {
      let i;
      const o = [];
      for (const c of n) {
        const l = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = c._parseSync({
          data: r.data,
          path: r.path,
          parent: l
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !i && (i = { result: u, ctx: l }), l.common.issues.length && o.push(l.common.issues);
      }
      if (i)
        return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((c) => new kt(c));
      return z(r, {
        code: j.invalid_union,
        unionErrors: a
      }), oe;
    }
  }
  get options() {
    return this._def.options;
  }
}
wi.create = (e, t) => new wi({
  options: e,
  typeName: Y.ZodUnion,
  ...ie(t)
});
const ni = (e) => e instanceof Ei ? ni(e.schema) : e instanceof Xt ? ni(e.innerType()) : e instanceof Oi ? [e.value] : e instanceof zr ? e.options : e instanceof Ci ? Object.keys(e.enum) : e instanceof Ti ? ni(e._def.innerType) : e instanceof bi ? [void 0] : e instanceof xi ? [null] : null;
class sc extends he {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.object)
      return z(r, {
        code: j.invalid_type,
        expected: F.object,
        received: r.parsedType
      }), oe;
    const n = this.discriminator, s = r.data[n], i = this.optionsMap.get(s);
    return i ? r.common.async ? i._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : i._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (z(r, {
      code: j.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), oe);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  /**
   * The constructor of the discriminated union schema. Its behaviour is very similar to that of the normal z.union() constructor.
   * However, it only allows a union of objects, all of which need to share a discriminator property. This property must
   * have a different value for each object in the union.
   * @param discriminator the name of the discriminator property
   * @param types an array of object schemas
   * @param params
   */
  static create(t, r, n) {
    const s = /* @__PURE__ */ new Map();
    for (const i of r) {
      const o = ni(i.shape[t]);
      if (!o)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const a of o) {
        if (s.has(a))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(a)}`);
        s.set(a, i);
      }
    }
    return new sc({
      typeName: Y.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...ie(n)
    });
  }
}
function $a(e, t) {
  const r = Cr(e), n = Cr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === F.object && n === F.object) {
    const s = Oe.objectKeys(t), i = Oe.objectKeys(e).filter((a) => s.indexOf(a) !== -1), o = { ...e, ...t };
    for (const a of i) {
      const c = $a(e[a], t[a]);
      if (!c.valid)
        return { valid: !1 };
      o[a] = c.data;
    }
    return { valid: !0, data: o };
  } else if (r === F.array && n === F.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let i = 0; i < e.length; i++) {
      const o = e[i], a = t[i], c = $a(o, a);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === F.date && n === F.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Si extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (i, o) => {
      if (kl(i) || kl(o))
        return oe;
      const a = $a(i.value, o.value);
      return a.valid ? ((Il(i) || Il(o)) && r.dirty(), { status: r.value, value: a.data }) : (z(n, {
        code: j.invalid_intersection_types
      }), oe);
    };
    return n.common.async ? Promise.all([
      this._def.left._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      }),
      this._def.right._parseAsync({
        data: n.data,
        path: n.path,
        parent: n
      })
    ]).then(([i, o]) => s(i, o)) : s(this._def.left._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }), this._def.right._parseSync({
      data: n.data,
      path: n.path,
      parent: n
    }));
  }
}
Si.create = (e, t, r) => new Si({
  left: e,
  right: t,
  typeName: Y.ZodIntersection,
  ...ie(r)
});
class Jt extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.array)
      return z(n, {
        code: j.invalid_type,
        expected: F.array,
        received: n.parsedType
      }), oe;
    if (n.data.length < this._def.items.length)
      return z(n, {
        code: j.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), oe;
    !this._def.rest && n.data.length > this._def.items.length && (z(n, {
      code: j.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((o, a) => {
      const c = this._def.items[a] || this._def.rest;
      return c ? c._parse(new Dt(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(i).then((o) => it.mergeArray(r, o)) : it.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Jt({
      ...this._def,
      rest: t
    });
  }
}
Jt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Jt({
    items: e,
    typeName: Y.ZodTuple,
    rest: null,
    ...ie(t)
  });
};
class _i extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.object)
      return z(n, {
        code: j.invalid_type,
        expected: F.object,
        received: n.parsedType
      }), oe;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: i._parse(new Dt(n, a, n.path, a)),
        value: o._parse(new Dt(n, n.data[a], n.path, a))
      });
    return n.common.async ? it.mergeObjectAsync(r, s) : it.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof he ? new _i({
      keyType: t,
      valueType: r,
      typeName: Y.ZodRecord,
      ...ie(n)
    }) : new _i({
      keyType: Zt.create(),
      valueType: t,
      typeName: Y.ZodRecord,
      ...ie(r)
    });
  }
}
class ja extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.map)
      return z(n, {
        code: j.invalid_type,
        expected: F.map,
        received: n.parsedType
      }), oe;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, c], l) => ({
      key: s._parse(new Dt(n, a, n.path, [l, "key"])),
      value: i._parse(new Dt(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return oe;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), a.set(l.value, u.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const c of o) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return oe;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), a.set(l.value, u.value);
      }
      return { status: r.value, value: a };
    }
  }
}
ja.create = (e, t, r) => new ja({
  valueType: t,
  keyType: e,
  typeName: Y.ZodMap,
  ...ie(r)
});
class jn extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.set)
      return z(n, {
        code: j.invalid_type,
        expected: F.set,
        received: n.parsedType
      }), oe;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (z(n, {
      code: j.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (z(n, {
      code: j.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const i = this._def.valueType;
    function o(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return oe;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const a = [...n.data.values()].map((c, l) => i._parse(new Dt(n, c, n.path, l)));
    return n.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(t, r) {
    return new jn({
      ...this._def,
      minSize: { value: t, message: H.toString(r) }
    });
  }
  max(t, r) {
    return new jn({
      ...this._def,
      maxSize: { value: t, message: H.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
jn.create = (e, t) => new jn({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: Y.ZodSet,
  ...ie(t)
});
class Xn extends he {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.function)
      return z(r, {
        code: j.invalid_type,
        expected: F.function,
        received: r.parsedType
      }), oe;
    function n(a, c) {
      return Ca({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Oa(),
          yi
        ].filter((l) => !!l),
        issueData: {
          code: j.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(a, c) {
      return Ca({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Oa(),
          yi
        ].filter((l) => !!l),
        issueData: {
          code: j.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof cs) {
      const a = this;
      return lt(async function(...c) {
        const l = new kt([]), u = await a._def.args.parseAsync(c, i).catch((m) => {
          throw l.addIssue(n(c, m)), l;
        }), d = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(d, i).catch((m) => {
          throw l.addIssue(s(d, m)), l;
        });
      });
    } else {
      const a = this;
      return lt(function(...c) {
        const l = a._def.args.safeParse(c, i);
        if (!l.success)
          throw new kt([n(c, l.error)]);
        const u = Reflect.apply(o, this, l.data), d = a._def.returns.safeParse(u, i);
        if (!d.success)
          throw new kt([s(u, d.error)]);
        return d.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...t) {
    return new Xn({
      ...this._def,
      args: Jt.create(t).rest(Xr.create())
    });
  }
  returns(t) {
    return new Xn({
      ...this._def,
      returns: t
    });
  }
  implement(t) {
    return this.parse(t);
  }
  strictImplement(t) {
    return this.parse(t);
  }
  static create(t, r, n) {
    return new Xn({
      args: t || Jt.create([]).rest(Xr.create()),
      returns: r || Xr.create(),
      typeName: Y.ZodFunction,
      ...ie(n)
    });
  }
}
class Ei extends he {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Ei.create = (e, t) => new Ei({
  getter: e,
  typeName: Y.ZodLazy,
  ...ie(t)
});
class Oi extends he {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return z(r, {
        received: r.data,
        code: j.invalid_literal,
        expected: this._def.value
      }), oe;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Oi.create = (e, t) => new Oi({
  value: e,
  typeName: Y.ZodLiteral,
  ...ie(t)
});
function Fd(e, t) {
  return new zr({
    values: e,
    typeName: Y.ZodEnum,
    ...ie(t)
  });
}
class zr extends he {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return z(r, {
        expected: Oe.joinValues(n),
        received: r.parsedType,
        code: j.invalid_type
      }), oe;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return z(r, {
        received: r.data,
        code: j.invalid_enum_value,
        options: n
      }), oe;
    }
    return lt(t.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Values() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  get Enum() {
    const t = {};
    for (const r of this._def.values)
      t[r] = r;
    return t;
  }
  extract(t) {
    return zr.create(t);
  }
  exclude(t) {
    return zr.create(this.options.filter((r) => !t.includes(r)));
  }
}
zr.create = Fd;
class Ci extends he {
  _parse(t) {
    const r = Oe.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== F.string && n.parsedType !== F.number) {
      const s = Oe.objectValues(r);
      return z(n, {
        expected: Oe.joinValues(s),
        received: n.parsedType,
        code: j.invalid_type
      }), oe;
    }
    if (r.indexOf(t.data) === -1) {
      const s = Oe.objectValues(r);
      return z(n, {
        received: n.data,
        code: j.invalid_enum_value,
        options: s
      }), oe;
    }
    return lt(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Ci.create = (e, t) => new Ci({
  values: e,
  typeName: Y.ZodNativeEnum,
  ...ie(t)
});
class cs extends he {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.promise && r.common.async === !1)
      return z(r, {
        code: j.invalid_type,
        expected: F.promise,
        received: r.parsedType
      }), oe;
    const n = r.parsedType === F.promise ? r.data : Promise.resolve(r.data);
    return lt(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
cs.create = (e, t) => new cs({
  type: e,
  typeName: Y.ZodPromise,
  ...ie(t)
});
class Xt extends he {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === Y.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, i = {
      addIssue: (o) => {
        z(n, o), o.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (i.addIssue = i.addIssue.bind(i), s.type === "preprocess") {
      const o = s.transform(n.data, i);
      return n.common.issues.length ? {
        status: "dirty",
        value: n.data
      } : n.common.async ? Promise.resolve(o).then((a) => this._def.schema._parseAsync({
        data: a,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: o,
        path: n.path,
        parent: n
      });
    }
    if (s.type === "refinement") {
      const o = (a) => {
        const c = s.refinement(a, i);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return a;
      };
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return a.status === "aborted" ? oe : (a.status === "dirty" && r.dirty(), o(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? oe : (a.status === "dirty" && r.dirty(), o(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!gi(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => gi(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    Oe.assertNever(s);
  }
}
Xt.create = (e, t, r) => new Xt({
  schema: e,
  typeName: Y.ZodEffects,
  effect: t,
  ...ie(r)
});
Xt.createWithPreprocess = (e, t, r) => new Xt({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: Y.ZodEffects,
  ...ie(r)
});
class br extends he {
  _parse(t) {
    return this._getType(t) === F.undefined ? lt(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
br.create = (e, t) => new br({
  innerType: e,
  typeName: Y.ZodOptional,
  ...ie(t)
});
class kn extends he {
  _parse(t) {
    return this._getType(t) === F.null ? lt(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
kn.create = (e, t) => new kn({
  innerType: e,
  typeName: Y.ZodNullable,
  ...ie(t)
});
class Ti extends he {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === F.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
Ti.create = (e, t) => new Ti({
  innerType: e,
  typeName: Y.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ie(t)
});
class ka extends he {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = {
      ...r,
      common: {
        ...r.common,
        issues: []
      }
    }, s = this._def.innerType._parse({
      data: n.data,
      path: n.path,
      parent: {
        ...n
      }
    });
    return Ta(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new kt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new kt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
ka.create = (e, t) => new ka({
  innerType: e,
  typeName: Y.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ie(t)
});
class Ia extends he {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: j.invalid_type,
        expected: F.nan,
        received: n.parsedType
      }), oe;
    }
    return { status: "valid", value: t.data };
  }
}
Ia.create = (e) => new Ia({
  typeName: Y.ZodNaN,
  ...ie(e)
});
class Rg extends he {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = r.data;
    return this._def.type._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  unwrap() {
    return this._def.type;
  }
}
class Vi extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? oe : i.status === "dirty" ? (r.dirty(), vg(i.value)) : this._def.out._parseAsync({
          data: i.value,
          path: n.path,
          parent: n
        });
      })();
    {
      const s = this._def.in._parseSync({
        data: n.data,
        path: n.path,
        parent: n
      });
      return s.status === "aborted" ? oe : s.status === "dirty" ? (r.dirty(), {
        status: "dirty",
        value: s.value
      }) : this._def.out._parseSync({
        data: s.value,
        path: n.path,
        parent: n
      });
    }
  }
  static create(t, r) {
    return new Vi({
      in: t,
      out: r,
      typeName: Y.ZodPipeline
    });
  }
}
class Ma extends he {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return gi(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Ma.create = (e, t) => new Ma({
  innerType: e,
  typeName: Y.ZodReadonly,
  ...ie(t)
});
Le.lazycreate;
var Y;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(Y || (Y = {}));
const Ag = Zt.create;
Pn.create;
Ia.create;
$n.create;
Ra.create;
as.create;
Aa.create;
bi.create;
xi.create;
Na.create;
Xr.create;
wr.create;
Pa.create;
It.create;
const Ng = Le.create;
Le.strictCreate;
wi.create;
sc.create;
Si.create;
Jt.create;
_i.create;
ja.create;
jn.create;
Xn.create;
Ei.create;
Oi.create;
zr.create;
Ci.create;
cs.create;
Xt.create;
br.create;
kn.create;
Xt.createWithPreprocess;
Vi.create;
function ce() {
  return ce = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ce.apply(this, arguments);
}
function ic(e, t = []) {
  let r = [];
  function n(i, o) {
    const a = /* @__PURE__ */ Qt(o), c = r.length;
    r = [
      ...r,
      o
    ];
    function l(d) {
      const { scope: h, children: m, ...y } = d, p = (h == null ? void 0 : h[e][c]) || a, v = En(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ U(p.Provider, {
        value: v
      }, m);
    }
    function u(d, h) {
      const m = (h == null ? void 0 : h[e][c]) || a, y = Sr(m);
      if (y)
        return y;
      if (o !== void 0)
        return o;
      throw new Error(`\`${d}\` must be used within \`${i}\``);
    }
    return l.displayName = i + "Provider", [
      l,
      u
    ];
  }
  const s = () => {
    const i = r.map((o) => /* @__PURE__ */ Qt(o));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return En(
        () => ({
          [`__scope${e}`]: {
            ...a,
            [e]: c
          }
        }),
        [
          a,
          c
        ]
      );
    };
  };
  return s.scopeName = e, [
    n,
    Pg(s, ...t)
  ];
}
function Pg(...e) {
  const t = e[0];
  if (e.length === 1)
    return t;
  const r = () => {
    const n = e.map(
      (s) => ({
        useScope: s(),
        scopeName: s.scopeName
      })
    );
    return function(i) {
      const o = n.reduce((a, { useScope: c, scopeName: l }) => {
        const d = c(i)[`__scope${l}`];
        return {
          ...a,
          ...d
        };
      }, {});
      return En(
        () => ({
          [`__scope${t.scopeName}`]: o
        }),
        [
          o
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
function nt(e) {
  const t = fe(e);
  return le(() => {
    t.current = e;
  }), En(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
const In = globalThis != null && globalThis.document ? Va : () => {
};
function $g(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Ud(...e) {
  return (t) => e.forEach(
    (r) => $g(r, t)
  );
}
function bt(...e) {
  return Ne(Ud(...e), e);
}
const Wi = /* @__PURE__ */ pe((e, t) => {
  const { children: r, ...n } = e, s = Dr.toArray(r), i = s.find(kg);
  if (i) {
    const o = i.props.children, a = s.map((c) => c === i ? Dr.count(o) > 1 ? Dr.only(null) : /* @__PURE__ */ On(o) ? o.props.children : null : c);
    return /* @__PURE__ */ U(Da, ce({}, n, {
      ref: t
    }), /* @__PURE__ */ On(o) ? /* @__PURE__ */ Pi(o, void 0, a) : null);
  }
  return /* @__PURE__ */ U(Da, ce({}, n, {
    ref: t
  }), r);
});
Wi.displayName = "Slot";
const Da = /* @__PURE__ */ pe((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ On(r) ? /* @__PURE__ */ Pi(r, {
    ...Ig(n, r.props),
    ref: t ? Ud(t, r.ref) : r.ref
  }) : Dr.count(r) > 1 ? Dr.only(null) : null;
});
Da.displayName = "SlotClone";
const jg = ({ children: e }) => /* @__PURE__ */ U(jt, null, e);
function kg(e) {
  return /* @__PURE__ */ On(e) && e.type === jg;
}
function Ig(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const s = e[n], i = t[n];
    /^on[A-Z]/.test(n) ? s && i ? r[n] = (...a) => {
      i(...a), s(...a);
    } : s && (r[n] = s) : n === "style" ? r[n] = {
      ...s,
      ...i
    } : n === "className" && (r[n] = [
      s,
      i
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
const Mg = [
  "a",
  "button",
  "div",
  "form",
  "h2",
  "h3",
  "img",
  "input",
  "label",
  "li",
  "nav",
  "ol",
  "p",
  "span",
  "svg",
  "ul"
], Ye = Mg.reduce((e, t) => {
  const r = /* @__PURE__ */ pe((n, s) => {
    const { asChild: i, ...o } = n, a = i ? Wi : t;
    return le(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ U(a, ce({}, o, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function Dg(e, t) {
  e && du(
    () => e.dispatchEvent(t)
  );
}
const zd = "Avatar", [Lg, hw] = ic(zd), [Fg, Bd] = Lg(zd), oc = /* @__PURE__ */ pe((e, t) => {
  const { __scopeAvatar: r, ...n } = e, [s, i] = te("idle");
  return /* @__PURE__ */ U(Fg, {
    scope: r,
    imageLoadingStatus: s,
    onImageLoadingStatusChange: i
  }, /* @__PURE__ */ U(Ye.span, ce({}, n, {
    ref: t
  })));
}), Ug = "AvatarImage", qi = /* @__PURE__ */ pe((e, t) => {
  const { __scopeAvatar: r, src: n, onLoadingStatusChange: s = () => {
  }, ...i } = e, o = Bd(Ug, r), a = Bg(n), c = nt((l) => {
    s(l), o.onImageLoadingStatusChange(l);
  });
  return In(() => {
    a !== "idle" && c(a);
  }, [
    a,
    c
  ]), a === "loaded" ? /* @__PURE__ */ U(Ye.img, ce({}, i, {
    ref: t,
    src: n
  })) : null;
}), zg = "AvatarFallback", Vd = /* @__PURE__ */ pe((e, t) => {
  const { __scopeAvatar: r, delayMs: n, ...s } = e, i = Bd(zg, r), [o, a] = te(n === void 0);
  return le(() => {
    if (n !== void 0) {
      const c = window.setTimeout(
        () => a(!0),
        n
      );
      return () => window.clearTimeout(c);
    }
  }, [
    n
  ]), o && i.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ U(Ye.span, ce({}, s, {
    ref: t
  })) : null;
});
function Bg(e) {
  const [t, r] = te("idle");
  return In(() => {
    if (!e) {
      r("error");
      return;
    }
    let n = !0;
    const s = new window.Image(), i = (o) => () => {
      n && r(o);
    };
    return r("loading"), s.onload = i("loaded"), s.onerror = i("error"), s.src = e, () => {
      n = !1;
    };
  }, [
    e
  ]), t;
}
const Wd = oc, qd = qi, Hd = Vd;
function Zd(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Zd(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Vg() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Zd(e)) && (n && (n += " "), n += t);
  return n;
}
const Dl = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Ll = Vg, ac = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return Ll(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = t, o = Object.keys(s).map((l) => {
    const u = r == null ? void 0 : r[l], d = i == null ? void 0 : i[l];
    if (u === null)
      return null;
    const h = Dl(u) || Dl(d);
    return s[l][h];
  }), a = r && Object.entries(r).reduce((l, u) => {
    let [d, h] = u;
    return h === void 0 || (l[d] = h), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: d, className: h, ...m } = u;
    return Object.entries(m).every((y) => {
      let [p, v] = y;
      return Array.isArray(v) ? v.includes({
        ...i,
        ...a
      }[p]) : {
        ...i,
        ...a
      }[p] === v;
    }) ? [
      ...l,
      d,
      h
    ] : l;
  }, []);
  return Ll(e, o, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Wg = ac(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90 active:translate-y-[1px]",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
), at = $.forwardRef(({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => {
  const o = n ? Wi : "button";
  return /* @__PURE__ */ f.jsx(o, { className: Se(Wg({ variant: t, size: r, className: e })), ref: i, ...s });
});
at.displayName = "Button";
const Ke = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: Se(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
Ke.displayName = "Card";
const Br = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: Se("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Br.displayName = "CardHeader";
const Ps = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "h3",
  {
    ref: r,
    className: Se(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Ps.displayName = "CardTitle";
const cc = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "p",
  {
    ref: r,
    className: Se("text-sm text-muted-foreground", e),
    ...t
  }
));
cc.displayName = "CardDescription";
const tr = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, className: Se("p-6 pt-0", e), ...t }));
tr.displayName = "CardContent";
const qg = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: Se("flex items-center p-6 pt-0", e),
    ...t
  }
));
qg.displayName = "CardFooter";
const Kd = ({ order: { course_name: e, order_status: t }, time: r }) => {
  let n;
  switch (t) {
    case "A":
      n = "กำลังจะถึงเวลาเรียน";
      break;
    case "B":
      n = "กำลังเรียน";
      break;
    case "C":
      n = "เรียนจบแล้ว";
      break;
    default:
      n = "เริ่มเรียน";
      break;
  }
  return /* @__PURE__ */ f.jsxs(Ke, { className: "relative bg-white rounded-none w-full p-0", children: [
    /* @__PURE__ */ f.jsxs(Br, { className: "p-3", children: [
      /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "การเรียน" }),
      /* @__PURE__ */ f.jsxs("p", { className: "text-lg font-normal", children: [
        "Class Schedule:",
        /* @__PURE__ */ f.jsx("span", { className: "text-orange-400 ml-1", children: n })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(tr, { className: "p-3", children: /* @__PURE__ */ f.jsx(Hg, { course_name: e, time: r || "00:00:00" }) })
  ] });
}, Hg = ({ course_name: e, time: t }) => /* @__PURE__ */ f.jsxs(Ke, { className: "border-orange-200 bg-orange-100/50 p-3 flex flex-col gap-3", children: [
  /* @__PURE__ */ f.jsx("div", { children: "LOGO" }),
  /* @__PURE__ */ f.jsx("div", { className: "text-center", children: "SVG IMAGE" }),
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "คลาส" }),
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-normal", children: e.split(" ")[1] }),
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-normal", children: "กำลังจะเริ่มใน" })
  ] }),
  /* @__PURE__ */ f.jsx("div", { className: "text-indigo-500 text-2xl text-center font-bold", children: Zg(t) }),
  /* @__PURE__ */ f.jsxs(at, { className: "w-full text-white rounded-xl bg-orange-500 hover:bg-orange-400", onClick: () => window.open("https://meet.google.com/?pli=1"), children: [
    /* @__PURE__ */ f.jsx(ug, { size: 20, className: "mr-3" }),
    "เข้าห้องเรียน"
  ] })
] }), Zg = (e) => {
  const t = () => {
    const a = new Date(e), c = /* @__PURE__ */ new Date(), l = a.getTime() - c.getTime();
    return l > 0 ? l / 1e3 : 0;
  }, [r, n] = te(t());
  if (le(() => {
    const a = setInterval(() => {
      const c = t();
      n(c);
    }, 1e3);
    return () => clearInterval(a);
  }, []), r === 0)
    return /* @__PURE__ */ f.jsx("div", { className: "text-red-400", children: "00:00:00" });
  const s = Math.floor(r / 3600).toString().padStart(2, "0"), i = Math.floor(r / 60 % 60).toString().padStart(2, "0"), o = Math.floor(r % 60).toString().padStart(2, "0");
  return /* @__PURE__ */ f.jsx("div", { children: `${s}:${i}:${o}` });
}, Kg = ac(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Mn({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ f.jsx("div", { className: Se(Kg({ variant: t }), e), ...r });
}
function st(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
const Yg = $.useId || (() => {
});
let Gg = 0;
function Ao(e) {
  const [t, r] = $.useState(Yg());
  return In(() => {
    e || r(
      (n) => n ?? String(Gg++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Qg({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, s] = Jg({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, o = i ? e : n, a = nt(r), c = Ne((l) => {
    if (i) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && a(d);
    } else
      s(l);
  }, [
    i,
    e,
    s,
    a
  ]);
  return [
    o,
    c
  ];
}
function Jg({ defaultProp: e, onChange: t }) {
  const r = te(e), [n] = r, s = fe(n), i = nt(t);
  return le(() => {
    s.current !== n && (i(n), s.current = n);
  }, [
    n,
    s,
    i
  ]), r;
}
function Xg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = nt(e);
  le(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
const La = "dismissableLayer.update", eb = "dismissableLayer.pointerDownOutside", tb = "dismissableLayer.focusOutside";
let Fl;
const rb = /* @__PURE__ */ Qt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), nb = /* @__PURE__ */ pe((e, t) => {
  var r;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: s, onPointerDownOutside: i, onFocusOutside: o, onInteractOutside: a, onDismiss: c, ...l } = e, u = Sr(rb), [d, h] = te(null), m = (r = d == null ? void 0 : d.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, y] = te({}), p = bt(
    t,
    (k) => h(k)
  ), v = Array.from(u.layers), [S] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), O = v.indexOf(S), w = d ? v.indexOf(d) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, x = w >= O, A = sb((k) => {
    const N = k.target, B = [
      ...u.branches
    ].some(
      (Z) => Z.contains(N)
    );
    !x || B || (i == null || i(k), a == null || a(k), k.defaultPrevented || c == null || c());
  }, m), M = ib((k) => {
    const N = k.target;
    [
      ...u.branches
    ].some(
      (Z) => Z.contains(N)
    ) || (o == null || o(k), a == null || a(k), k.defaultPrevented || c == null || c());
  }, m);
  return Xg((k) => {
    w === u.layers.size - 1 && (s == null || s(k), !k.defaultPrevented && c && (k.preventDefault(), c()));
  }, m), le(() => {
    if (d)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Fl = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Ul(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Fl);
      };
  }, [
    d,
    m,
    n,
    u
  ]), le(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Ul());
  }, [
    d,
    u
  ]), le(() => {
    const k = () => y({});
    return document.addEventListener(La, k), () => document.removeEventListener(La, k);
  }, []), /* @__PURE__ */ U(Ye.div, ce({}, l, {
    ref: p,
    style: {
      pointerEvents: E ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: st(e.onFocusCapture, M.onFocusCapture),
    onBlurCapture: st(e.onBlurCapture, M.onBlurCapture),
    onPointerDownCapture: st(e.onPointerDownCapture, A.onPointerDownCapture)
  }));
});
function sb(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = nt(e), n = fe(!1), s = fe(() => {
  });
  return le(() => {
    const i = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          Yd(eb, r, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: a
        };
        a.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", s.current);
      n.current = !1;
    }, o = window.setTimeout(() => {
      t.addEventListener("pointerdown", i);
    }, 0);
    return () => {
      window.clearTimeout(o), t.removeEventListener("pointerdown", i), t.removeEventListener("click", s.current);
    };
  }, [
    t,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function ib(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = nt(e), n = fe(!1);
  return le(() => {
    const s = (i) => {
      i.target && !n.current && Yd(tb, r, {
        originalEvent: i
      }, {
        discrete: !1
      });
    };
    return t.addEventListener("focusin", s), () => t.removeEventListener("focusin", s);
  }, [
    t,
    r
  ]), {
    onFocusCapture: () => n.current = !0,
    onBlurCapture: () => n.current = !1
  };
}
function Ul() {
  const e = new CustomEvent(La);
  document.dispatchEvent(e);
}
function Yd(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && s.addEventListener(e, t, {
    once: !0
  }), n ? Dg(s, i) : s.dispatchEvent(i);
}
const No = "focusScope.autoFocusOnMount", Po = "focusScope.autoFocusOnUnmount", zl = {
  bubbles: !1,
  cancelable: !0
}, ob = /* @__PURE__ */ pe((e, t) => {
  const { loop: r = !1, trapped: n = !1, onMountAutoFocus: s, onUnmountAutoFocus: i, ...o } = e, [a, c] = te(null), l = nt(s), u = nt(i), d = fe(null), h = bt(
    t,
    (p) => c(p)
  ), m = fe({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  le(() => {
    if (n) {
      let p = function(w) {
        if (m.paused || !a)
          return;
        const E = w.target;
        a.contains(E) ? d.current = E : cr(d.current, {
          select: !0
        });
      }, v = function(w) {
        if (m.paused || !a)
          return;
        const E = w.relatedTarget;
        E !== null && (a.contains(E) || cr(d.current, {
          select: !0
        }));
      }, S = function(w) {
        if (document.activeElement === document.body)
          for (const x of w)
            x.removedNodes.length > 0 && cr(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const O = new MutationObserver(S);
      return a && O.observe(a, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", v), O.disconnect();
      };
    }
  }, [
    n,
    a,
    m.paused
  ]), le(() => {
    if (a) {
      Vl.add(m);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const S = new CustomEvent(No, zl);
        a.addEventListener(No, l), a.dispatchEvent(S), S.defaultPrevented || (ab(fb(Gd(a)), {
          select: !0
        }), document.activeElement === p && cr(a));
      }
      return () => {
        a.removeEventListener(No, l), setTimeout(() => {
          const S = new CustomEvent(Po, zl);
          a.addEventListener(Po, u), a.dispatchEvent(S), S.defaultPrevented || cr(p ?? document.body, {
            select: !0
          }), a.removeEventListener(Po, u), Vl.remove(m);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    m
  ]);
  const y = Ne((p) => {
    if (!r && !n || m.paused)
      return;
    const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, S = document.activeElement;
    if (v && S) {
      const O = p.currentTarget, [w, E] = cb(O);
      w && E ? !p.shiftKey && S === E ? (p.preventDefault(), r && cr(w, {
        select: !0
      })) : p.shiftKey && S === w && (p.preventDefault(), r && cr(E, {
        select: !0
      })) : S === O && p.preventDefault();
    }
  }, [
    r,
    n,
    m.paused
  ]);
  return /* @__PURE__ */ U(Ye.div, ce({
    tabIndex: -1
  }, o, {
    ref: h,
    onKeyDown: y
  }));
});
function ab(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (cr(n, {
      select: t
    }), document.activeElement !== r)
      return;
}
function cb(e) {
  const t = Gd(e), r = Bl(t, e), n = Bl(t.reverse(), e);
  return [
    r,
    n
  ];
}
function Gd(e) {
  const t = [], r = document.createTreeWalker(e, NodeFilter.SHOW_ELEMENT, {
    acceptNode: (n) => {
      const s = n.tagName === "INPUT" && n.type === "hidden";
      return n.disabled || n.hidden || s ? NodeFilter.FILTER_SKIP : n.tabIndex >= 0 ? NodeFilter.FILTER_ACCEPT : NodeFilter.FILTER_SKIP;
    }
  });
  for (; r.nextNode(); )
    t.push(r.currentNode);
  return t;
}
function Bl(e, t) {
  for (const r of e)
    if (!lb(r, {
      upTo: t
    }))
      return r;
}
function lb(e, { upTo: t }) {
  if (getComputedStyle(e).visibility === "hidden")
    return !0;
  for (; e; ) {
    if (t !== void 0 && e === t)
      return !1;
    if (getComputedStyle(e).display === "none")
      return !0;
    e = e.parentElement;
  }
  return !1;
}
function ub(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && ub(e) && t && e.select();
  }
}
const Vl = db();
function db() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = Wl(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = Wl(e, t), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function Wl(e, t) {
  const r = [
    ...e
  ], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function fb(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const hb = /* @__PURE__ */ pe((e, t) => {
  var r;
  const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = e;
  return n ? /* @__PURE__ */ uh.createPortal(/* @__PURE__ */ U(Ye.div, ce({}, s, {
    ref: t
  })), n) : null;
});
function pb(e, t) {
  return uu((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const _r = (e) => {
  const { present: t, children: r } = e, n = mb(t), s = typeof r == "function" ? r({
    present: n.isPresent
  }) : Dr.only(r), i = bt(n.ref, s.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ Pi(s, {
    ref: i
  }) : null;
};
_r.displayName = "Presence";
function mb(e) {
  const [t, r] = te(), n = fe({}), s = fe(e), i = fe("none"), o = e ? "mounted" : "unmounted", [a, c] = pb(o, {
    mounted: {
      UNMOUNT: "unmounted",
      ANIMATION_OUT: "unmountSuspended"
    },
    unmountSuspended: {
      MOUNT: "mounted",
      ANIMATION_END: "unmounted"
    },
    unmounted: {
      MOUNT: "mounted"
    }
  });
  return le(() => {
    const l = Ws(n.current);
    i.current = a === "mounted" ? l : "none";
  }, [
    a
  ]), In(() => {
    const l = n.current, u = s.current;
    if (u !== e) {
      const h = i.current, m = Ws(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && h !== m ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    c
  ]), In(() => {
    if (t) {
      const l = (d) => {
        const m = Ws(n.current).includes(d.animationName);
        d.target === t && m && du(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (i.current = Ws(n.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", l), t.addEventListener("animationend", l), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", l), t.removeEventListener("animationend", l);
      };
    } else
      c("ANIMATION_END");
  }, [
    t,
    c
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(a),
    ref: Ne((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function Ws(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let $o = 0;
function vb() {
  le(() => {
    var e, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : ql()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : ql()), $o++, () => {
      $o === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), $o--;
    };
  }, []);
}
function ql() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var Nt = function() {
  return Nt = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, Nt.apply(this, arguments);
};
function Qd(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function yb(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = t.length, i; n < s; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var si = "right-scroll-bar-position", ii = "width-before-scroll-bar", gb = "with-scroll-bars-hidden", bb = "--removed-body-scroll-bar-size";
function jo(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function xb(e, t) {
  var r = te(function() {
    return {
      // value
      value: e,
      // last callback
      callback: t,
      // "memoized" public interface
      facade: {
        get current() {
          return r.value;
        },
        set current(n) {
          var s = r.value;
          s !== n && (r.value = n, r.callback(n, s));
        }
      }
    };
  })[0];
  return r.callback = t, r.facade;
}
var Hl = /* @__PURE__ */ new WeakMap();
function wb(e, t) {
  var r = xb(t || null, function(n) {
    return e.forEach(function(s) {
      return jo(s, n);
    });
  });
  return $.useLayoutEffect(function() {
    var n = Hl.get(r);
    if (n) {
      var s = new Set(n), i = new Set(e), o = r.current;
      s.forEach(function(a) {
        i.has(a) || jo(a, null);
      }), i.forEach(function(a) {
        s.has(a) || jo(a, o);
      });
    }
    Hl.set(r, e);
  }, [e]), r;
}
function Sb(e) {
  return e;
}
function _b(e, t) {
  t === void 0 && (t = Sb);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(i) {
      var o = t(i, n);
      return r.push(o), function() {
        r = r.filter(function(a) {
          return a !== o;
        });
      };
    },
    assignSyncMedium: function(i) {
      for (n = !0; r.length; ) {
        var o = r;
        r = [], o.forEach(i);
      }
      r = {
        push: function(a) {
          return i(a);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(i) {
      n = !0;
      var o = [];
      if (r.length) {
        var a = r;
        r = [], a.forEach(i), o = r;
      }
      var c = function() {
        var u = o;
        o = [], u.forEach(i);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(u) {
          o.push(u), l();
        },
        filter: function(u) {
          return o = o.filter(u), r;
        }
      };
    }
  };
  return s;
}
function Eb(e) {
  e === void 0 && (e = {});
  var t = _b(null);
  return t.options = Nt({ async: !0, ssr: !1 }, e), t;
}
var Jd = function(e) {
  var t = e.sideCar, r = Qd(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return $.createElement(n, Nt({}, r));
};
Jd.isSideCarExport = !0;
function Ob(e, t) {
  return e.useMedium(t), Jd;
}
var Xd = Eb(), ko = function() {
}, Hi = $.forwardRef(function(e, t) {
  var r = $.useRef(null), n = $.useState({
    onScrollCapture: ko,
    onWheelCapture: ko,
    onTouchMoveCapture: ko
  }), s = n[0], i = n[1], o = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, m = e.noIsolation, y = e.inert, p = e.allowPinchZoom, v = e.as, S = v === void 0 ? "div" : v, O = Qd(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = h, E = wb([r, t]), x = Nt(Nt({}, O), s);
  return $.createElement(
    $.Fragment,
    null,
    u && $.createElement(w, { sideCar: Xd, removeScrollBar: l, shards: d, noIsolation: m, inert: y, setCallbacks: i, allowPinchZoom: !!p, lockRef: r }),
    o ? $.cloneElement($.Children.only(a), Nt(Nt({}, x), { ref: E })) : $.createElement(S, Nt({}, x, { className: c, ref: E }), a)
  );
});
Hi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Hi.classNames = {
  fullWidth: ii,
  zeroRight: si
};
var Cb = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Tb() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Cb();
  return t && e.setAttribute("nonce", t), e;
}
function Rb(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Ab(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Nb = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Tb()) && (Rb(t, r), Ab(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, Pb = function() {
  var e = Nb();
  return function(t, r) {
    $.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, ef = function() {
  var e = Pb(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, $b = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Io = function(e) {
  return parseInt(e || "", 10) || 0;
}, jb = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Io(r), Io(n), Io(s)];
}, kb = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return $b;
  var t = jb(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, Ib = ef(), Mb = function(e, t, r, n) {
  var s = e.left, i = e.top, o = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(gb, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(a, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(i, `px;
    padding-right: `).concat(o, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(a, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(a, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(si, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(ii, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(si, " .").concat(si, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ii, " .").concat(ii, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(bb, ": ").concat(a, `px;
  }
`);
}, Db = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n, i = $.useMemo(function() {
    return kb(s);
  }, [s]);
  return $.createElement(Ib, { styles: Mb(i, !t, s, r ? "" : "!important") });
}, Fa = !1;
if (typeof window < "u")
  try {
    var qs = Object.defineProperty({}, "passive", {
      get: function() {
        return Fa = !0, !0;
      }
    });
    window.addEventListener("test", qs, qs), window.removeEventListener("test", qs, qs);
  } catch {
    Fa = !1;
  }
var Zr = Fa ? { passive: !1 } : !1, Lb = function(e) {
  return e.tagName === "TEXTAREA";
}, tf = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !Lb(e) && r[t] === "visible")
  );
}, Fb = function(e) {
  return tf(e, "overflowY");
}, Ub = function(e) {
  return tf(e, "overflowX");
}, Zl = function(e, t) {
  var r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = rf(e, r);
    if (n) {
      var s = nf(e, r), i = s[1], o = s[2];
      if (i > o)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, zb = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, Bb = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, rf = function(e, t) {
  return e === "v" ? Fb(t) : Ub(t);
}, nf = function(e, t) {
  return e === "v" ? zb(t) : Bb(t);
}, Vb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, Wb = function(e, t, r, n, s) {
  var i = Vb(e, window.getComputedStyle(t).direction), o = i * n, a = r.target, c = t.contains(a), l = !1, u = o > 0, d = 0, h = 0;
  do {
    var m = nf(e, a), y = m[0], p = m[1], v = m[2], S = p - v - i * y;
    (y || S) && rf(e, a) && (d += S, h += y), a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (u && (s && d === 0 || !s && o > d) || !u && (s && h === 0 || !s && -o > h)) && (l = !0), l;
}, Hs = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Kl = function(e) {
  return [e.deltaX, e.deltaY];
}, Yl = function(e) {
  return e && "current" in e ? e.current : e;
}, qb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, Hb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, Zb = 0, Kr = [];
function Kb(e) {
  var t = $.useRef([]), r = $.useRef([0, 0]), n = $.useRef(), s = $.useState(Zb++)[0], i = $.useState(function() {
    return ef();
  })[0], o = $.useRef(e);
  $.useEffect(function() {
    o.current = e;
  }, [e]), $.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var p = yb([e.lockRef.current], (e.shards || []).map(Yl), !0).filter(Boolean);
      return p.forEach(function(v) {
        return v.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), p.forEach(function(v) {
          return v.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var a = $.useCallback(function(p, v) {
    if ("touches" in p && p.touches.length === 2)
      return !o.current.allowPinchZoom;
    var S = Hs(p), O = r.current, w = "deltaX" in p ? p.deltaX : O[0] - S[0], E = "deltaY" in p ? p.deltaY : O[1] - S[1], x, A = p.target, M = Math.abs(w) > Math.abs(E) ? "h" : "v";
    if ("touches" in p && M === "h" && A.type === "range")
      return !1;
    var k = Zl(M, A);
    if (!k)
      return !0;
    if (k ? x = M : (x = M === "v" ? "h" : "v", k = Zl(M, A)), !k)
      return !1;
    if (!n.current && "changedTouches" in p && (w || E) && (n.current = x), !x)
      return !0;
    var N = n.current || x;
    return Wb(N, v, p, N === "h" ? w : E, !0);
  }, []), c = $.useCallback(function(p) {
    var v = p;
    if (!(!Kr.length || Kr[Kr.length - 1] !== i)) {
      var S = "deltaY" in v ? Kl(v) : Hs(v), O = t.current.filter(function(x) {
        return x.name === v.type && x.target === v.target && qb(x.delta, S);
      })[0];
      if (O && O.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!O) {
        var w = (o.current.shards || []).map(Yl).filter(Boolean).filter(function(x) {
          return x.contains(v.target);
        }), E = w.length > 0 ? a(v, w[0]) : !o.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = $.useCallback(function(p, v, S, O) {
    var w = { name: p, delta: v, target: S, should: O };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== w;
      });
    }, 1);
  }, []), u = $.useCallback(function(p) {
    r.current = Hs(p), n.current = void 0;
  }, []), d = $.useCallback(function(p) {
    l(p.type, Kl(p), p.target, a(p, e.lockRef.current));
  }, []), h = $.useCallback(function(p) {
    l(p.type, Hs(p), p.target, a(p, e.lockRef.current));
  }, []);
  $.useEffect(function() {
    return Kr.push(i), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, Zr), document.addEventListener("touchmove", c, Zr), document.addEventListener("touchstart", u, Zr), function() {
      Kr = Kr.filter(function(p) {
        return p !== i;
      }), document.removeEventListener("wheel", c, Zr), document.removeEventListener("touchmove", c, Zr), document.removeEventListener("touchstart", u, Zr);
    };
  }, []);
  var m = e.removeScrollBar, y = e.inert;
  return $.createElement(
    $.Fragment,
    null,
    y ? $.createElement(i, { styles: Hb(s) }) : null,
    m ? $.createElement(Db, { gapMode: "margin" }) : null
  );
}
const Yb = Ob(Xd, Kb);
var sf = $.forwardRef(function(e, t) {
  return $.createElement(Hi, Nt({}, e, { ref: t, sideCar: Yb }));
});
sf.classNames = Hi.classNames;
const Gb = sf;
var Qb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yr = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Ks = {}, Mo = 0, of = function(e) {
  return e && (e.host || of(e.parentNode));
}, Jb = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = of(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Xb = function(e, t, r, n) {
  var s = Jb(t, Array.isArray(e) ? e : [e]);
  Ks[r] || (Ks[r] = /* @__PURE__ */ new WeakMap());
  var i = Ks[r], o = [], a = /* @__PURE__ */ new Set(), c = new Set(s), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  s.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        u(h);
      else {
        var m = h.getAttribute(n), y = m !== null && m !== "false", p = (Yr.get(h) || 0) + 1, v = (i.get(h) || 0) + 1;
        Yr.set(h, p), i.set(h, v), o.push(h), p === 1 && y && Zs.set(h, !0), v === 1 && h.setAttribute(r, "true"), y || h.setAttribute(n, "true");
      }
    });
  };
  return u(t), a.clear(), Mo++, function() {
    o.forEach(function(d) {
      var h = Yr.get(d) - 1, m = i.get(d) - 1;
      Yr.set(d, h), i.set(d, m), h || (Zs.has(d) || d.removeAttribute(n), Zs.delete(d)), m || d.removeAttribute(r);
    }), Mo--, Mo || (Yr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), Zs = /* @__PURE__ */ new WeakMap(), Ks = {});
  };
}, e0 = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = t || Qb(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), Xb(n, s, r, "aria-hidden")) : function() {
    return null;
  };
};
const af = "Dialog", [cf, pw] = ic(af), [t0, _t] = cf(af), r0 = (e) => {
  const { __scopeDialog: t, children: r, open: n, defaultOpen: s, onOpenChange: i, modal: o = !0 } = e, a = fe(null), c = fe(null), [l = !1, u] = Qg({
    prop: n,
    defaultProp: s,
    onChange: i
  });
  return /* @__PURE__ */ U(t0, {
    scope: t,
    triggerRef: a,
    contentRef: c,
    contentId: Ao(),
    titleId: Ao(),
    descriptionId: Ao(),
    open: l,
    onOpenChange: u,
    onOpenToggle: Ne(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: o
  }, r);
}, n0 = "DialogTrigger", s0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = _t(n0, r), i = bt(t, s.triggerRef);
  return /* @__PURE__ */ U(Ye.button, ce({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": s.open,
    "aria-controls": s.contentId,
    "data-state": lc(s.open)
  }, n, {
    ref: i,
    onClick: st(e.onClick, s.onOpenToggle)
  }));
}), lf = "DialogPortal", [i0, uf] = cf(lf, {
  forceMount: void 0
}), o0 = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: s } = e, i = _t(lf, t);
  return /* @__PURE__ */ U(i0, {
    scope: t,
    forceMount: r
  }, Dr.map(
    n,
    (o) => /* @__PURE__ */ U(_r, {
      present: r || i.open
    }, /* @__PURE__ */ U(hb, {
      asChild: !0,
      container: s
    }, o))
  ));
}, Ua = "DialogOverlay", a0 = /* @__PURE__ */ pe((e, t) => {
  const r = uf(Ua, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, i = _t(Ua, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ U(_r, {
    present: n || i.open
  }, /* @__PURE__ */ U(c0, ce({}, s, {
    ref: t
  }))) : null;
}), c0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = _t(Ua, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ U(Gb, {
      as: Wi,
      allowPinchZoom: !0,
      shards: [
        s.contentRef
      ]
    }, /* @__PURE__ */ U(Ye.div, ce({
      "data-state": lc(s.open)
    }, n, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
}), ls = "DialogContent", l0 = /* @__PURE__ */ pe((e, t) => {
  const r = uf(ls, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, i = _t(ls, e.__scopeDialog);
  return /* @__PURE__ */ U(_r, {
    present: n || i.open
  }, i.modal ? /* @__PURE__ */ U(u0, ce({}, s, {
    ref: t
  })) : /* @__PURE__ */ U(d0, ce({}, s, {
    ref: t
  })));
}), u0 = /* @__PURE__ */ pe((e, t) => {
  const r = _t(ls, e.__scopeDialog), n = fe(null), s = bt(t, r.contentRef, n);
  return le(() => {
    const i = n.current;
    if (i)
      return e0(i);
  }, []), /* @__PURE__ */ U(df, ce({}, e, {
    ref: s,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: st(e.onCloseAutoFocus, (i) => {
      var o;
      i.preventDefault(), (o = r.triggerRef.current) === null || o === void 0 || o.focus();
    }),
    onPointerDownOutside: st(e.onPointerDownOutside, (i) => {
      const o = i.detail.originalEvent, a = o.button === 0 && o.ctrlKey === !0;
      (o.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: st(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), d0 = /* @__PURE__ */ pe((e, t) => {
  const r = _t(ls, e.__scopeDialog), n = fe(!1), s = fe(!1);
  return /* @__PURE__ */ U(df, ce({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (i) => {
      var o;
      if ((o = e.onCloseAutoFocus) === null || o === void 0 || o.call(e, i), !i.defaultPrevented) {
        var a;
        n.current || (a = r.triggerRef.current) === null || a === void 0 || a.focus(), i.preventDefault();
      }
      n.current = !1, s.current = !1;
    },
    onInteractOutside: (i) => {
      var o, a;
      (o = e.onInteractOutside) === null || o === void 0 || o.call(e, i), i.defaultPrevented || (n.current = !0, i.detail.originalEvent.type === "pointerdown" && (s.current = !0));
      const c = i.target;
      ((a = r.triggerRef.current) === null || a === void 0 ? void 0 : a.contains(c)) && i.preventDefault(), i.detail.originalEvent.type === "focusin" && s.current && i.preventDefault();
    }
  }));
}), df = /* @__PURE__ */ pe((e, t) => {
  const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: s, onCloseAutoFocus: i, ...o } = e, a = _t(ls, r), c = fe(null), l = bt(t, c);
  return vb(), /* @__PURE__ */ U(jt, null, /* @__PURE__ */ U(ob, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ U(nb, ce({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": lc(a.open)
  }, o, {
    ref: l,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
}), f0 = "DialogTitle", h0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = _t(f0, r);
  return /* @__PURE__ */ U(Ye.h2, ce({
    id: s.titleId
  }, n, {
    ref: t
  }));
}), p0 = "DialogDescription", m0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = _t(p0, r);
  return /* @__PURE__ */ U(Ye.p, ce({
    id: s.descriptionId
  }, n, {
    ref: t
  }));
}), v0 = "DialogClose", y0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = _t(v0, r);
  return /* @__PURE__ */ U(Ye.button, ce({
    type: "button"
  }, n, {
    ref: t,
    onClick: st(
      e.onClick,
      () => s.onOpenChange(!1)
    )
  }));
});
function lc(e) {
  return e ? "open" : "closed";
}
const g0 = r0, b0 = s0, x0 = o0, ff = a0, hf = l0, pf = h0, mf = m0, vf = y0;
function w0(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), s, i;
  for (i = 0; i < n.length; i++)
    s = n[i], !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var S0 = ["color"], _0 = /* @__PURE__ */ pe(function(e, t) {
  var r = e.color, n = r === void 0 ? "currentColor" : r, s = w0(e, S0);
  return U("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: t
  }), U("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const Q = g0;
Q.Trigger = b0;
Q.Portal = x0;
Q.Close = vf;
Q.Overlay = $.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
    ff,
    {
      ref: r,
      className: Se(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  )
);
Q.Overlay.displayName = ff.displayName;
Q.Content = $.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(Q.Portal, { children: [
    /* @__PURE__ */ f.jsx(Q.Overlay, {}),
    /* @__PURE__ */ f.jsxs(
      hf,
      {
        ref: n,
        className: Se(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ f.jsxs(vf, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ f.jsx(_0, { className: "h-4 w-4" }),
            /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
Q.Content.displayName = hf.displayName;
Q.Header = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: Se("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
Q.Header.displayName = "DialogHeader";
Q.Footer = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: Se("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
Q.Footer.displayName = "DialogFooter";
Q.Title = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(pf, { ref: r, className: Se("text-lg font-semibold leading-none tracking-tight", e), ...t }));
Q.Title.displayName = pf.displayName;
Q.Description = $.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(mf, { ref: r, className: Se("text-sm text-muted-foreground", e), ...t })
);
Q.Description.displayName = mf.displayName;
const uc = $.forwardRef(({ className: e, type: t, ...r }, n) => /* @__PURE__ */ f.jsx(
  "input",
  {
    type: t,
    className: Se(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...r
  }
));
uc.displayName = "Input";
const E0 = /* @__PURE__ */ pe((e, t) => /* @__PURE__ */ U(Ye.label, ce({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), yf = E0, O0 = ac(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), gf = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  yf,
  {
    ref: r,
    className: Se(O0(), e),
    ...t
  }
));
gf.displayName = yf.displayName;
const $s = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Wd,
  {
    ref: r,
    className: Se(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
$s.displayName = Wd.displayName;
const Zi = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  qd,
  {
    ref: r,
    className: Se("aspect-square h-full w-full", e),
    ...t
  }
));
Zi.displayName = qd.displayName;
const Ki = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Hd,
  {
    ref: r,
    className: Se(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
Ki.displayName = Hd.displayName;
const bf = ({ teacher: e, hasButton: t = !0 }) => /* @__PURE__ */ f.jsx(Ke, { className: "rounded-none bg-white w-full", children: /* @__PURE__ */ f.jsxs(tr, { className: "p-3", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row justify-between w-full", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center gap-3", children: [
      /* @__PURE__ */ f.jsxs($s, { className: "border-orange-400 border-2", children: [
        /* @__PURE__ */ f.jsx(Zi, { src: e.photo_url, alt: e.firstname }),
        /* @__PURE__ */ f.jsxs(Ki, { children: [
          e.firstname[0],
          e.lastname[0]
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col mr-2", children: [
        /* @__PURE__ */ f.jsx("div", { className: "flex flex-col", children: e != null && e.title ? /* @__PURE__ */ f.jsx("p", { className: "text-nowrap", children: e.title }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
          /* @__PURE__ */ f.jsx("p", { children: e.firstname }),
          /* @__PURE__ */ f.jsx("p", { children: e.lastname })
        ] }) }),
        /* @__PURE__ */ f.jsx("p", { children: "⭐ 4.5" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ f.jsx(hg, {}),
        " ",
        /* @__PURE__ */ f.jsx("div", { children: e.phone })
      ] }),
      /* @__PURE__ */ f.jsx(
        Mn,
        {
          className: "w-fit hover:bg-blue-100 bg-blue-100 text-blue-400 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]",
          variant: "secondary",
          children: "ดูรายละเอียด"
        }
      )
    ] }) })
  ] }),
  /* @__PURE__ */ f.jsxs(Q, { children: [
    t && /* @__PURE__ */ f.jsx(Q.Trigger, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(at, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "เปลี่ยนครู" }) }),
    /* @__PURE__ */ f.jsxs(Q.Content, { className: "bg-white", children: [
      /* @__PURE__ */ f.jsxs(Q.Header, { children: [
        /* @__PURE__ */ f.jsx(Q.Title, { children: /* @__PURE__ */ f.jsxs("p", { className: "text-xl", children: [
          "เปลี่ยนครู ",
          e.firstname,
          " ",
          e.lastname,
          " (",
          e.title,
          ")"
        ] }) }),
        /* @__PURE__ */ f.jsxs(Q.Description, { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ f.jsxs("p", { children: [
            "ท่านต้องการเปลี่ยนครู ",
            e.firstname,
            " ",
            e.lastname,
            " หรือไม่?"
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(gf, { children: "หมายเหตุ" }),
            /* @__PURE__ */ f.jsx(uc, { placeholder: "กรอกเหตุผลที่ต้องการเปลี่ยนครู" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs(Q.Footer, { className: "mt-3", children: [
        /* @__PURE__ */ f.jsx(Q.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-gray-500 hover:bg-gray-400 w-[50%] text-white", type: "button", children: "ยกเลิก" }) }),
        /* @__PURE__ */ f.jsx(Q.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-red-500 hover:bg-red-400 w-[50%] text-white", type: "submit", children: "ยืนยัน" }) })
      ] })
    ] })
  ] })
] }) }), C0 = (e) => {
  switch (e.comp_type) {
    case "order:teacher:select":
      return /* @__PURE__ */ f.jsx(T0, { ...e });
    case "order:class:start":
      return /* @__PURE__ */ f.jsx(A0, { ...e });
    case "order:teacher:evaluate":
      return /* @__PURE__ */ f.jsx(N0, {});
    default:
      return /* @__PURE__ */ f.jsx(f.Fragment, {});
  }
}, T0 = ({ comp_data: e, authToken: t, dataBaseApiUrl: r }) => {
  var i;
  const n = Tn({ queryKey: ["candidate-teacher"], queryFn: () => Vv(r, t, s == null ? void 0 : s.order_id) }), s = JSON.parse(e || "{}");
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Ke, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
    /* @__PURE__ */ f.jsx(Br, { className: "p-4", children: /* @__PURE__ */ f.jsx(Ps, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "เลือกคุณครูผู้สอนแล้วเริ่มเรียนกันเลย" }) }) }),
    /* @__PURE__ */ f.jsxs(tr, { className: "flex flex-col gap-4 p-4", children: [
      /* @__PURE__ */ f.jsx("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ f.jsxs("p", { className: "font-bold text-xl", children: [
          s == null ? void 0 : s.order_id,
          " คณิตศาสตร์ ป.1"
        ] }),
        /* @__PURE__ */ f.jsx("p", { className: "text-gray-400", children: "กรุณาเลือกคุณครู" })
      ] }) }),
      /* @__PURE__ */ f.jsxs(Q, { children: [
        /* @__PURE__ */ f.jsx(Q.Trigger, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(at, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "ค้นหาคุณครู" }) }),
        /* @__PURE__ */ f.jsx(Q.Content, { className: "bg-white p-3", children: /* @__PURE__ */ f.jsxs(Q.Header, { children: [
          /* @__PURE__ */ f.jsx(Q.Title, { children: /* @__PURE__ */ f.jsxs("p", { className: "text-lg", children: [
            "งานสอน ",
            s == null ? void 0 : s.order_id
          ] }) }),
          /* @__PURE__ */ f.jsxs(Q.Description, { className: "flex flex-col text-center gap-3", children: [
            n.isSuccess && /* @__PURE__ */ f.jsx("div", { className: "flex flex-col gap-3", children: (i = n.data) == null ? void 0 : i.map((o) => /* @__PURE__ */ f.jsx(R0, { dataBaseApiUrl: r, authToken: t, orderId: s == null ? void 0 : s.order_id, ...o }, o.tid)) }),
            n.isLoading && /* @__PURE__ */ f.jsx(Ke, { className: "p-3", children: "กำลังโหลดข้อมูล..." }),
            n.isError && /* @__PURE__ */ f.jsxs(Ke, { className: "border-red-500 bg-red-100 p-3", children: [
              "เกิดข้อผิดพลาดในการโหลดข้อมูลครู ",
              n.error.message
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] }) });
}, R0 = ({ dataBaseApiUrl: e, authToken: t, tid: r, orderId: n, profile: s, background: i }) => {
  const o = Fn(), a = Su({
    mutationFn: (c) => Wv(e, t, c),
    onSuccess: () => {
      o.invalidateQueries({ queryKey: ["candidate-teacher-select"] });
    }
  });
  return /* @__PURE__ */ f.jsxs(Ke, { className: "p-3", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3", children: [
        /* @__PURE__ */ f.jsx(oc, { children: /* @__PURE__ */ f.jsx(qi, { className: "w-[60px]", src: s.photo_url, alt: s.title }) }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-start", children: [
          /* @__PURE__ */ f.jsxs("p", { children: [
            "(",
            s.title,
            ")"
          ] }),
          /* @__PURE__ */ f.jsxs("p", { children: [
            s.firstname,
            " ",
            s.lastname
          ] }),
          /* @__PURE__ */ f.jsxs(Q, { children: [
            /* @__PURE__ */ f.jsx(Q.Trigger, { className: "w-full ", children: /* @__PURE__ */ f.jsx(at, { variant: "link", className: "w-fit h-fit p-0 text-gray-400", children: "ดูข้อมูลเพิ่มเตืม" }) }),
            /* @__PURE__ */ f.jsxs(Q.Content, { className: "bg-white", children: [
              /* @__PURE__ */ f.jsx(Q.Header, { children: /* @__PURE__ */ f.jsx(Q.Title, { children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "ข้อมูลเพิ่มเติม" }) }) }),
              /* @__PURE__ */ f.jsx("div", { children: i.self_desc })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsx(
        at,
        {
          onClick: () => {
            a.mutate({
              teacher_id: r,
              order_id: n
            });
          },
          variant: "outline",
          className: "border-indigo-500 text-indigo-500 hover:bg-indigo-100",
          children: a.isPending ? "กำลังเลือก..." : "เลือกครู"
        }
      )
    ] }),
    a.isError && /* @__PURE__ */ f.jsx(Ke, { className: "p-3 my-3 rounded-none border-red-500 bg-red-100", children: /* @__PURE__ */ f.jsxs("div", { className: "text-red-500 flex flex-row items-center gap-3", children: [
      /* @__PURE__ */ f.jsx(Md, {}),
      " ",
      a.error.message
    ] }) })
  ] });
}, A0 = ({ comp_data: e }) => {
  const t = JSON.parse(e || "{}"), r = new Date(t == null ? void 0 : t.st_time), n = String(r.getHours()).padStart(2, "0"), s = String(r.getMinutes()).padStart(2, "0"), i = `${n}:${s}`, o = new Date((/* @__PURE__ */ new Date()).getTime() + 60 * 60 * 1e3).toISOString();
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Ke, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
    /* @__PURE__ */ f.jsxs(Br, { className: "p-4", children: [
      /* @__PURE__ */ f.jsx(Ps, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "พร้อมเข้าห้องเรียนกันรึยัง?" }) }),
      /* @__PURE__ */ f.jsx(cc, { children: /* @__PURE__ */ f.jsxs("p", { children: [
        "เช้านี้เรามีนัดกัน ",
        i,
        " นะ ในรายวิชา ",
        t == null ? void 0 : t.order_id,
        " ",
        t == null ? void 0 : t.order_name
      ] }) })
    ] }),
    /* @__PURE__ */ f.jsxs(tr, { className: "flex flex-col gap-4 p-4", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ f.jsx("p", { className: "font-bold text-xl", children: "กับคุณครู" }),
        /* @__PURE__ */ f.jsx(
          bf,
          {
            hasButton: !1,
            teacher: {
              tid: "TCA0002",
              title: "ครูริกโรล",
              firstname: "ริก",
              lastname: "โรลลิง",
              phone: "+66859009804",
              photo_url: "https://s3.ap-southeast-1.amazonaws.com/uniclass.pub---dev/teacher/TCA0002/profile.pic"
            }
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ f.jsx("p", { className: "font-bold text-xl", children: "พร้อมแล้วกดเข้าห้องได้เลย" }),
        /* @__PURE__ */ f.jsx(
          Kd,
          {
            time: o,
            order: { order_id: "A012", order_id_mask: "PpOcpS", order_status: "A", course_id: "MATTH06-04", course_name: "วิชา คณิตศาสตร์ ป.3 หลักสูตร ไทย คอร์ส 6 ครั้ง" }
          }
        )
      ] })
    ] })
  ] }) });
}, N0 = () => /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Ke, { className: "bg-[#ffebd9] border-none w-[400px] ", children: [
  /* @__PURE__ */ f.jsx(Br, { className: "p-4", children: /* @__PURE__ */ f.jsx(Ps, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "เรียนเสร็จแล้ว" }) }) }),
  /* @__PURE__ */ f.jsxs(tr, { className: "flex flex-col gap-4 p-4", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: [
      /* @__PURE__ */ f.jsx(oc, { children: /* @__PURE__ */ f.jsx(
        qi,
        {
          className: "w-[40px] h-[40px] rounded-md",
          src: "https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
        }
      ) }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ f.jsx("p", { children: "คณิตศาสตร์ ป.1" }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsx("span", { className: "text-orange-500", children: "1" }),
          "/6 คลาส"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(Q, { children: [
      /* @__PURE__ */ f.jsx(Q.Trigger, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(at, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "ทำแบบประเมิน" }) }),
      /* @__PURE__ */ f.jsxs(Q.Content, { className: "bg-white", children: [
        /* @__PURE__ */ f.jsxs(Q.Header, { children: [
          /* @__PURE__ */ f.jsx(Q.Title, { children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "A056 (วิชา คณิตศาสตร์ ป.1 หลักสูตร ไทย คอร์ส 6 ครั้ง)" }) }),
          /* @__PURE__ */ f.jsx(Q.Description, { className: "flex flex-col gap-3", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3", children: [
            /* @__PURE__ */ f.jsx(Mn, { className: "bg-gray-400 text-white", children: "คณิตศาสตร์" }),
            /* @__PURE__ */ f.jsx(Mn, { className: "bg-gray-400 text-white", children: "ป.1" })
          ] }) }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ f.jsx("div", { children: "จำนวนครั้งที่สอน 6 ครั้ง" }),
              /* @__PURE__ */ f.jsx("div", { children: "(1/6)" })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-2", children: [
              /* @__PURE__ */ f.jsx(Dd, { className: "text-orange-500" }),
              /* @__PURE__ */ f.jsx("div", { children: "ครั้งที่ 1 2024-01-03" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs(Q.Footer, { className: "mt-3 flex flex-row gap-3 ", children: [
          /* @__PURE__ */ f.jsx(Q.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-gray-500 hover:bg-gray-400 w-[50%] text-white", type: "button", children: "ยกเลิก" }) }),
          /* @__PURE__ */ f.jsx(Q.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-indigo-500 hover:bg-indigo-400 w-[50%] text-white", type: "submit", children: "ส่งประเมิน" }) })
        ] })
      ] })
    ] })
  ] })
] }) }), P0 = ({ comp_type: e, content: t }) => {
  let [n, s, i] = ["border-gray-400", "bg-gray-100/50", /* @__PURE__ */ f.jsx($l, { size: 28 })];
  switch (e == null ? void 0 : e.trim()) {
    case "NOTI:INFO":
      n = "border-gray-400", s = "bg-gray-100/50", i = /* @__PURE__ */ f.jsx($l, { size: 28, className: "text-gray-400" });
      break;
    case "NOTI:SUCCESS":
      n = "border-green-400", s = "bg-green-100/50", i = /* @__PURE__ */ f.jsx(Dd, { size: 28, className: "text-green-400" });
      break;
    case "NOTI:DANGER":
      n = "border-red-400", s = "bg-red-100/50", i = /* @__PURE__ */ f.jsx(pg, { size: 28, className: "text-red-400" });
      break;
  }
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Ke, { className: Se("rounded-2xl flex items-center flex-row pl-4 border-2", n, s), children: [
    /* @__PURE__ */ f.jsx("div", { children: i }),
    /* @__PURE__ */ f.jsx(tr, { className: "flex flex-row gap-4 p-4", children: /* @__PURE__ */ f.jsx("div", { children: t }) })
  ] }) });
}, $0 = ({ socketStatus: e }) => /* @__PURE__ */ f.jsx(Mn, { variant: "outline", children: e ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx("div", { className: "p-[3px] bg-green-400 rounded-full mr-1" }),
  " Connected"
] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx("div", { className: "p-[3px] bg-red-400 rounded-full mr-1" }),
  " Disconnected"
] }) }), j0 = /* @__PURE__ */ Qt(void 0);
function k0(e) {
  const t = Sr(j0);
  return e || t || "ltr";
}
function I0(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function M0(e, t) {
  return uu((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const xf = "ScrollArea", [wf, mw] = ic(xf), [D0, xt] = wf(xf), L0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeScrollArea: r, type: n = "hover", dir: s, scrollHideDelay: i = 600, ...o } = e, [a, c] = te(null), [l, u] = te(null), [d, h] = te(null), [m, y] = te(null), [p, v] = te(null), [S, O] = te(0), [w, E] = te(0), [x, A] = te(!1), [M, k] = te(!1), N = bt(
    t,
    (Z) => c(Z)
  ), B = k0(s);
  return /* @__PURE__ */ U(D0, {
    scope: r,
    type: n,
    dir: B,
    scrollHideDelay: i,
    scrollArea: a,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: h,
    scrollbarX: m,
    onScrollbarXChange: y,
    scrollbarXEnabled: x,
    onScrollbarXEnabledChange: A,
    scrollbarY: p,
    onScrollbarYChange: v,
    scrollbarYEnabled: M,
    onScrollbarYEnabledChange: k,
    onCornerWidthChange: O,
    onCornerHeightChange: E
  }, /* @__PURE__ */ U(Ye.div, ce({
    dir: B
  }, o, {
    ref: N,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": S + "px",
      "--radix-scroll-area-corner-height": w + "px",
      ...e.style
    }
  })));
}), F0 = "ScrollAreaViewport", U0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeScrollArea: r, children: n, ...s } = e, i = xt(F0, r), o = fe(null), a = bt(t, o, i.onViewportChange);
  return /* @__PURE__ */ U(jt, null, /* @__PURE__ */ U("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ U(Ye.div, ce({
    "data-radix-scroll-area-viewport": ""
  }, s, {
    ref: a,
    style: {
      /**
      * We don't support `visible` because the intention is to have at least one scrollbar
      * if this component is used and `visible` will behave like `auto` in that case
      * https://developer.mozilla.org/en-US/docs/Web/CSS/overflowed#description
      *
      * We don't handle `auto` because the intention is for the native implementation
      * to be hidden if using this component. We just want to ensure the node is scrollable
      * so could have used either `scroll` or `auto` here. We picked `scroll` to prevent
      * the browser from having to work out whether to render native scrollbars or not,
      * we tell it to with the intention of hiding them in CSS.
      */
      overflowX: i.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: i.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ U("div", {
    ref: i.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, n)));
}), rr = "ScrollAreaScrollbar", Sf = /* @__PURE__ */ pe((e, t) => {
  const { forceMount: r, ...n } = e, s = xt(rr, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: o } = s, a = e.orientation === "horizontal";
  return le(() => (a ? i(!0) : o(!0), () => {
    a ? i(!1) : o(!1);
  }), [
    a,
    i,
    o
  ]), s.type === "hover" ? /* @__PURE__ */ U(z0, ce({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "scroll" ? /* @__PURE__ */ U(B0, ce({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "auto" ? /* @__PURE__ */ U(_f, ce({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "always" ? /* @__PURE__ */ U(dc, ce({}, n, {
    ref: t
  })) : null;
}), z0 = /* @__PURE__ */ pe((e, t) => {
  const { forceMount: r, ...n } = e, s = xt(rr, e.__scopeScrollArea), [i, o] = te(!1);
  return le(() => {
    const a = s.scrollArea;
    let c = 0;
    if (a) {
      const l = () => {
        window.clearTimeout(c), o(!0);
      }, u = () => {
        c = window.setTimeout(
          () => o(!1),
          s.scrollHideDelay
        );
      };
      return a.addEventListener("pointerenter", l), a.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), a.removeEventListener("pointerenter", l), a.removeEventListener("pointerleave", u);
      };
    }
  }, [
    s.scrollArea,
    s.scrollHideDelay
  ]), /* @__PURE__ */ U(_r, {
    present: r || i
  }, /* @__PURE__ */ U(_f, ce({
    "data-state": i ? "visible" : "hidden"
  }, n, {
    ref: t
  })));
}), B0 = /* @__PURE__ */ pe((e, t) => {
  const { forceMount: r, ...n } = e, s = xt(rr, e.__scopeScrollArea), i = e.orientation === "horizontal", o = Gi(
    () => c("SCROLL_END"),
    100
  ), [a, c] = M0("hidden", {
    hidden: {
      SCROLL: "scrolling"
    },
    scrolling: {
      SCROLL_END: "idle",
      POINTER_ENTER: "interacting"
    },
    interacting: {
      SCROLL: "interacting",
      POINTER_LEAVE: "idle"
    },
    idle: {
      HIDE: "hidden",
      SCROLL: "scrolling",
      POINTER_ENTER: "interacting"
    }
  });
  return le(() => {
    if (a === "idle") {
      const l = window.setTimeout(
        () => c("HIDE"),
        s.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    a,
    s.scrollHideDelay,
    c
  ]), le(() => {
    const l = s.viewport, u = i ? "scrollLeft" : "scrollTop";
    if (l) {
      let d = l[u];
      const h = () => {
        const m = l[u];
        d !== m && (c("SCROLL"), o()), d = m;
      };
      return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
    }
  }, [
    s.viewport,
    i,
    c,
    o
  ]), /* @__PURE__ */ U(_r, {
    present: r || a !== "hidden"
  }, /* @__PURE__ */ U(dc, ce({
    "data-state": a === "hidden" ? "hidden" : "visible"
  }, n, {
    ref: t,
    onPointerEnter: st(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: st(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), _f = /* @__PURE__ */ pe((e, t) => {
  const r = xt(rr, e.__scopeScrollArea), { forceMount: n, ...s } = e, [i, o] = te(!1), a = e.orientation === "horizontal", c = Gi(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      o(a ? l : u);
    }
  }, 10);
  return Dn(r.viewport, c), Dn(r.content, c), /* @__PURE__ */ U(_r, {
    present: n || i
  }, /* @__PURE__ */ U(dc, ce({
    "data-state": i ? "visible" : "hidden"
  }, s, {
    ref: t
  })));
}), dc = /* @__PURE__ */ pe((e, t) => {
  const { orientation: r = "vertical", ...n } = e, s = xt(rr, e.__scopeScrollArea), i = fe(null), o = fe(0), [a, c] = te({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = Tf(a.viewport, a.content), u = {
    ...n,
    sizes: a,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => i.current = h,
    onThumbPointerUp: () => o.current = 0,
    onThumbPointerDown: (h) => o.current = h
  };
  function d(h, m) {
    return G0(h, o.current, a, m);
  }
  return r === "horizontal" ? /* @__PURE__ */ U(V0, ce({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && i.current) {
        const h = s.viewport.scrollLeft, m = Gl(h, a, s.dir);
        i.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = h);
    },
    onDragScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = d(h, s.dir));
    }
  })) : r === "vertical" ? /* @__PURE__ */ U(W0, ce({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && i.current) {
        const h = s.viewport.scrollTop, m = Gl(h, a);
        i.current.style.transform = `translate3d(0, ${m}px, 0)`;
      }
    },
    onWheelScroll: (h) => {
      s.viewport && (s.viewport.scrollTop = h);
    },
    onDragScroll: (h) => {
      s.viewport && (s.viewport.scrollTop = d(h));
    }
  })) : null;
}), V0 = /* @__PURE__ */ pe((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, i = xt(rr, e.__scopeScrollArea), [o, a] = te(), c = fe(null), l = bt(t, c, i.onScrollbarXChange);
  return le(() => {
    c.current && a(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ U(Of, ce({
    "data-orientation": "horizontal"
  }, s, {
    ref: l,
    sizes: r,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": Yi(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (i.viewport) {
        const h = i.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(h), Af(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && i.viewport && o && n({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Ri(o.paddingLeft),
          paddingEnd: Ri(o.paddingRight)
        }
      });
    }
  }));
}), W0 = /* @__PURE__ */ pe((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, i = xt(rr, e.__scopeScrollArea), [o, a] = te(), c = fe(null), l = bt(t, c, i.onScrollbarYChange);
  return le(() => {
    c.current && a(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ U(Of, ce({
    "data-orientation": "vertical"
  }, s, {
    ref: l,
    sizes: r,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": Yi(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (i.viewport) {
        const h = i.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(h), Af(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && i.viewport && o && n({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Ri(o.paddingTop),
          paddingEnd: Ri(o.paddingBottom)
        }
      });
    }
  }));
}), [q0, Ef] = wf(rr), Of = /* @__PURE__ */ pe((e, t) => {
  const { __scopeScrollArea: r, sizes: n, hasThumb: s, onThumbChange: i, onThumbPointerUp: o, onThumbPointerDown: a, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...h } = e, m = xt(rr, r), [y, p] = te(null), v = bt(
    t,
    (N) => p(N)
  ), S = fe(null), O = fe(""), w = m.viewport, E = n.content - n.viewport, x = nt(u), A = nt(c), M = Gi(d, 10);
  function k(N) {
    if (S.current) {
      const B = N.clientX - S.current.left, Z = N.clientY - S.current.top;
      l({
        x: B,
        y: Z
      });
    }
  }
  return le(() => {
    const N = (B) => {
      const Z = B.target;
      (y == null ? void 0 : y.contains(Z)) && x(B, E);
    };
    return document.addEventListener("wheel", N, {
      passive: !1
    }), () => document.removeEventListener("wheel", N, {
      passive: !1
    });
  }, [
    w,
    y,
    E,
    x
  ]), le(A, [
    n,
    A
  ]), Dn(y, M), Dn(m.content, M), /* @__PURE__ */ U(q0, {
    scope: r,
    scrollbar: y,
    hasThumb: s,
    onThumbChange: nt(i),
    onThumbPointerUp: nt(o),
    onThumbPositionChange: A,
    onThumbPointerDown: nt(a)
  }, /* @__PURE__ */ U(Ye.div, ce({}, h, {
    ref: v,
    style: {
      position: "absolute",
      ...h.style
    },
    onPointerDown: st(e.onPointerDown, (N) => {
      N.button === 0 && (N.target.setPointerCapture(N.pointerId), S.current = y.getBoundingClientRect(), O.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), k(N));
    }),
    onPointerMove: st(e.onPointerMove, k),
    onPointerUp: st(e.onPointerUp, (N) => {
      const B = N.target;
      B.hasPointerCapture(N.pointerId) && B.releasePointerCapture(N.pointerId), document.body.style.webkitUserSelect = O.current, m.viewport && (m.viewport.style.scrollBehavior = ""), S.current = null;
    })
  })));
}), za = "ScrollAreaThumb", H0 = /* @__PURE__ */ pe((e, t) => {
  const { forceMount: r, ...n } = e, s = Ef(za, e.__scopeScrollArea);
  return /* @__PURE__ */ U(_r, {
    present: r || s.hasThumb
  }, /* @__PURE__ */ U(Z0, ce({
    ref: t
  }, n)));
}), Z0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeScrollArea: r, style: n, ...s } = e, i = xt(za, r), o = Ef(za, r), { onThumbPositionChange: a } = o, c = bt(
    t,
    (d) => o.onThumbChange(d)
  ), l = fe(), u = Gi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return le(() => {
    const d = i.viewport;
    if (d) {
      const h = () => {
        if (u(), !l.current) {
          const m = Q0(d, a);
          l.current = m, a();
        }
      };
      return a(), d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
    }
  }, [
    i.viewport,
    u,
    a
  ]), /* @__PURE__ */ U(Ye.div, ce({
    "data-state": o.hasThumb ? "visible" : "hidden"
  }, s, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...n
    },
    onPointerDownCapture: st(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), y = d.clientX - m.left, p = d.clientY - m.top;
      o.onThumbPointerDown({
        x: y,
        y: p
      });
    }),
    onPointerUp: st(e.onPointerUp, o.onThumbPointerUp)
  }));
}), Cf = "ScrollAreaCorner", K0 = /* @__PURE__ */ pe((e, t) => {
  const r = xt(Cf, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? /* @__PURE__ */ U(Y0, ce({}, e, {
    ref: t
  })) : null;
}), Y0 = /* @__PURE__ */ pe((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, s = xt(Cf, r), [i, o] = te(0), [a, c] = te(0), l = !!(i && a);
  return Dn(s.scrollbarX, () => {
    var u;
    const d = ((u = s.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    s.onCornerHeightChange(d), c(d);
  }), Dn(s.scrollbarY, () => {
    var u;
    const d = ((u = s.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    s.onCornerWidthChange(d), o(d);
  }), l ? /* @__PURE__ */ U(Ye.div, ce({}, n, {
    ref: t,
    style: {
      width: i,
      height: a,
      position: "absolute",
      right: s.dir === "ltr" ? 0 : void 0,
      left: s.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function Ri(e) {
  return e ? parseInt(e, 10) : 0;
}
function Tf(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Yi(e) {
  const t = Tf(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function G0(e, t, r, n = "ltr") {
  const s = Yi(r), i = s / 2, o = t || i, a = s - o, c = r.scrollbar.paddingStart + o, l = r.scrollbar.size - r.scrollbar.paddingEnd - a, u = r.content - r.viewport, d = n === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Rf([
    c,
    l
  ], d)(e);
}
function Gl(e, t, r = "ltr") {
  const n = Yi(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - s, o = t.content - t.viewport, a = i - n, c = r === "ltr" ? [
    0,
    o
  ] : [
    o * -1,
    0
  ], l = I0(e, c);
  return Rf([
    0,
    o
  ], [
    0,
    a
  ])(l);
}
function Rf(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Af(e, t) {
  return e > 0 && e < t;
}
const Q0 = (e, t = () => {
}) => {
  let r = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, n = 0;
  return function s() {
    const i = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, o = r.left !== i.left, a = r.top !== i.top;
    (o || a) && t(), r = i, n = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(n);
};
function Gi(e, t) {
  const r = nt(e), n = fe(0);
  return le(
    () => () => window.clearTimeout(n.current),
    []
  ), Ne(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [
    r,
    t
  ]);
}
function Dn(e, t) {
  const r = nt(t);
  In(() => {
    let n = 0;
    if (e) {
      const s = new ResizeObserver(() => {
        cancelAnimationFrame(n), n = window.requestAnimationFrame(r);
      });
      return s.observe(e), () => {
        window.cancelAnimationFrame(n), s.unobserve(e);
      };
    }
  }, [
    e,
    r
  ]);
}
const Nf = L0, J0 = U0, X0 = K0, fc = $.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  Nf,
  {
    ref: n,
    className: Se("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ f.jsx(J0, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.jsx(Pf, {}),
      /* @__PURE__ */ f.jsx(X0, {})
    ]
  }
));
fc.displayName = Nf.displayName;
const Pf = $.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ f.jsx(
  Sf,
  {
    ref: n,
    orientation: t,
    className: Se(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ f.jsx(H0, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Pf.displayName = Sf.displayName;
const ex = Ng({
  message: Ag().min(1, { message: "ต้องมีอย่างน้อย 1 ตัวอักษร" }).max(50, { message: "ต้องมีไม่เกิน 50 ตัวอักษร" })
}), tx = ({ roomId: e, currentRoom: t, roomMenuOpen: r, setRoomMenuOpen: n, sideMenuOpen: s, setSideMenuOpen: i }) => {
  var w, E;
  const { dataBaseApiUrl: o, authToken: a, userId: c } = Ka(), l = Fn(), { socketStatus: u, sendSocketMessage: d } = tc(), h = fe(null), m = Tn({
    queryKey: ["chat-message", e],
    queryFn: () => xd(o, a, e, (/* @__PURE__ */ new Date()).toISOString(), "2023-12-20T09:32:13.000Z")
  }), y = Tn({ queryKey: ["user-profile"], queryFn: () => wd(o, a, e) }), p = Su({
    mutationKey: ["send-message"],
    mutationFn: async (x) => {
      Uv(o, a, x.msgData, x.roomId), d(x.msgData);
    },
    onSettled: () => {
      setTimeout(() => {
        l.invalidateQueries({ queryKey: ["chat-message", e] }), l.invalidateQueries({ queryKey: ["latest-message", e] });
      }, 1e3);
    }
  }), v = Hy({
    validate: Zy(ex),
    initialValues: {
      message: ""
    }
  }), S = (x) => {
    if (!y.data)
      return;
    const A = y.data[0].teacher_id, M = c === A, k = {
      room_id: e,
      content: x.message,
      sender_id: M ? A : c,
      sender_type: M ? "TCA" : "STA",
      type: "MSG"
    };
    p.mutate({
      msgData: k,
      roomId: e
    }), v.reset();
  }, O = (x) => {
    if (!y.isSuccess)
      return;
    const A = y.data[0].teacher_id;
    return x === A ? y.data[0] : y.data[1];
  };
  return le(() => {
    var x;
    (x = h.current) == null || x.scrollIntoView({ behavior: "smooth" });
  }, [m.data]), /* @__PURE__ */ f.jsxs(Ke, { className: "flex flex-col  relative rounded-none h-[90vh] w-full z-10 bg-white", children: [
    /* @__PURE__ */ f.jsxs(Br, { className: "flex items-center border-b-[1px]", children: [
      /* @__PURE__ */ f.jsxs(Ps, { className: "max-w-[70%] text-center text-xl", children: [
        t.room_name,
        " (",
        t.room_id,
        ")"
      ] }),
      /* @__PURE__ */ f.jsxs(cc, { children: [
        y.isSuccess && ((w = y.data[0]) == null ? void 0 : w.firstname),
        " ",
        y.isSuccess && ((E = y.data[0]) == null ? void 0 : E.lastname)
      ] }),
      /* @__PURE__ */ f.jsx($0, { socketStatus: u })
    ] }),
    /* @__PURE__ */ f.jsx(dg, { className: "absolute cursor-pointer top-[20px] left-[20px]", onClick: () => n(!r) }),
    /* @__PURE__ */ f.jsx(fg, { className: "absolute cursor-pointer top-[20px] right-[20px]", onClick: () => i(!s) }),
    /* @__PURE__ */ f.jsxs(fc, { className: "px-3 h-full", children: [
      m.isLoading && /* @__PURE__ */ f.jsx("div", { className: "text-center mt-3", children: "Loading..." }),
      m.isError && /* @__PURE__ */ f.jsxs(Ke, { className: "flex flex-row items-center justify-center gap-3 p-3 rounded-none bg-red-100 border-red-500 mt-3", children: [
        /* @__PURE__ */ f.jsx(Md, {}),
        " ",
        m.error.message
      ] }),
      m.isSuccess && m.data.map((x) => {
        var A, M;
        return /* @__PURE__ */ f.jsxs("div", { className: Se("flex gap-2 my-2", x.sender_id === c ? "flex-row justify-end" : "flex-row-reverse justify-end"), children: [
          x.type === "COMP" && x.skip_audience_type !== c.substring(0, 3) && /* @__PURE__ */ f.jsx(C0, { authToken: a, dataBaseApiUrl: o, ...x }),
          x.type === "MSG" && x.skip_audience_type !== c.substring(0, 3) && /* @__PURE__ */ f.jsxs("div", { className: Se("flex items-end gap-2", x.sender_id === c ? "flex-row-reverse" : "flex-row"), children: [
            y.isSuccess && /* @__PURE__ */ f.jsxs($s, { children: [
              /* @__PURE__ */ f.jsx(Zi, { src: (A = O(x.sender_id)) == null ? void 0 : A.photo_url }),
              /* @__PURE__ */ f.jsx(Ki, { children: (M = O(x.sender_id)) == null ? void 0 : M.firstname })
            ] }),
            /* @__PURE__ */ f.jsx(
              "div",
              {
                className: Se("flex flex-col  text-black p-2 px-4 rounded-t-full", x.sender_id === c ? "rounded-l-full bg-blue-100" : "rounded-r-full bg-gray-100"),
                children: /* @__PURE__ */ f.jsx("p", { children: x.content })
              }
            )
          ] }),
          x.type === "NOTI" && x.skip_audience_type !== c.substring(0, 3) && /* @__PURE__ */ f.jsx(P0, { ...x })
        ] }, x.id);
      }),
      /* @__PURE__ */ f.jsx("div", { ref: h })
    ] }),
    /* @__PURE__ */ f.jsxs("form", { onSubmit: v.onSubmit(S), className: "p-3 space-y-2", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
        /* @__PURE__ */ f.jsx(uc, { "data-testid": "message-input", placeholder: "Aa", ...v.getInputProps("message") }),
        /* @__PURE__ */ f.jsx(
          at,
          {
            "data-testid": "message-submit",
            disabled: !u || !t.room_status || m.isLoading || m.isError || p.isPending,
            type: "submit",
            variant: "outline",
            children: "Send"
          }
        )
      ] }),
      v.errors && /* @__PURE__ */ f.jsx("div", { className: "text-red-400", children: v.getInputProps("message").error }),
      p.isError && /* @__PURE__ */ f.jsx("div", { className: "text-red-400", children: p.error.message })
    ] })
  ] }, e);
};
var rx = Object.defineProperty, nx = (e, t, r) => t in e ? rx(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Do = (e, t, r) => (nx(e, typeof t != "symbol" ? t + "" : t, r), r);
let sx = class {
  constructor() {
    Do(this, "current", this.detect()), Do(this, "handoffState", "pending"), Do(this, "currentId", 0);
  }
  set(t) {
    this.current !== t && (this.handoffState = "pending", this.currentId = 0, this.current = t);
  }
  reset() {
    this.set(this.detect());
  }
  nextId() {
    return ++this.currentId;
  }
  get isServer() {
    return this.current === "server";
  }
  get isClient() {
    return this.current === "client";
  }
  detect() {
    return typeof window > "u" || typeof document > "u" ? "server" : "client";
  }
  handoff() {
    this.handoffState === "pending" && (this.handoffState = "complete");
  }
  get isHandoffComplete() {
    return this.handoffState === "complete";
  }
}, oi = new sx(), us = (e, t) => {
  oi.isServer ? le(e, t) : Va(e, t);
};
function en(e) {
  let t = fe(e);
  return us(() => {
    t.current = e;
  }, [e]), t;
}
let Kt = function(e) {
  let t = en(e);
  return qe.useCallback((...r) => t.current(...r), [t]);
};
function ix(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function js() {
  let e = [], t = { addEventListener(r, n, s, i) {
    return r.addEventListener(n, s, i), t.add(() => r.removeEventListener(n, s, i));
  }, requestAnimationFrame(...r) {
    let n = requestAnimationFrame(...r);
    return t.add(() => cancelAnimationFrame(n));
  }, nextFrame(...r) {
    return t.requestAnimationFrame(() => t.requestAnimationFrame(...r));
  }, setTimeout(...r) {
    let n = setTimeout(...r);
    return t.add(() => clearTimeout(n));
  }, microTask(...r) {
    let n = { current: !0 };
    return ix(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, s) {
    let i = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: s }), this.add(() => {
      Object.assign(r.style, { [n]: i });
    });
  }, group(r) {
    let n = js();
    return r(n), this.add(() => n.dispose());
  }, add(r) {
    return e.push(r), () => {
      let n = e.indexOf(r);
      if (n >= 0)
        for (let s of e.splice(n, 1))
          s();
    };
  }, dispose() {
    for (let r of e.splice(0))
      r();
  } };
  return t;
}
function $f() {
  let [e] = te(js);
  return le(() => () => e.dispose(), [e]), e;
}
function ox() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in $ ? ((t) => t.useSyncExternalStore)($)(() => () => {
  }, () => !1, () => !e) : !1;
}
function jf() {
  let e = ox(), [t, r] = $.useState(oi.isHandoffComplete);
  return t && oi.isHandoffComplete === !1 && r(!1), $.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), $.useEffect(() => oi.handoff(), []), e ? !1 : t;
}
function $t(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, $t), n;
}
let ax = Symbol();
function kf(...e) {
  let t = fe(e);
  le(() => {
    t.current = e;
  }, [e]);
  let r = Kt((n) => {
    for (let s of t.current)
      s != null && (typeof s == "function" ? s(n) : s.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[ax])) ? void 0 : r;
}
function Ai(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var If = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(If || {}), gr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(gr || {});
function Mf({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: s, visible: i = !0, name: o, mergeRefs: a }) {
  a = a ?? cx;
  let c = Df(t, e);
  if (i)
    return Ys(c, r, n, o, a);
  let l = s ?? 0;
  if (l & 2) {
    let { static: u = !1, ...d } = c;
    if (u)
      return Ys(d, r, n, o, a);
  }
  if (l & 1) {
    let { unmount: u = !0, ...d } = c;
    return $t(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Ys({ ...d, hidden: !0, style: { display: "none" } }, r, n, o, a);
    } });
  }
  return Ys(c, r, n, o, a);
}
function Ys(e, t = {}, r, n, s) {
  let { as: i = r, children: o, refName: a = "ref", ...c } = Lo(e, ["unmount", "static"]), l = e.ref !== void 0 ? { [a]: e.ref } : {}, u = typeof o == "function" ? o(t) : o;
  "className" in c && c.className && typeof c.className == "function" && (c.className = c.className(t));
  let d = {};
  if (t) {
    let h = !1, m = [];
    for (let [y, p] of Object.entries(t))
      typeof p == "boolean" && (h = !0), p === !0 && m.push(y);
    h && (d["data-headlessui-state"] = m.join(" "));
  }
  if (i === jt && Object.keys(Ql(c)).length > 0) {
    if (!On(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(c).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
    let h = u.props, m = typeof (h == null ? void 0 : h.className) == "function" ? (...p) => Ai(h == null ? void 0 : h.className(...p), c.className) : Ai(h == null ? void 0 : h.className, c.className), y = m ? { className: m } : {};
    return Pi(u, Object.assign({}, Df(u.props, Ql(Lo(c, ["ref"]))), d, l, { ref: s(u.ref, l.ref) }, y));
  }
  return U(i, Object.assign({}, Lo(c, ["ref"]), i !== jt && l, i !== jt && d), u);
}
function cx(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function Df(...e) {
  if (e.length === 0)
    return {};
  if (e.length === 1)
    return e[0];
  let t = {}, r = {};
  for (let n of e)
    for (let s in n)
      s.startsWith("on") && typeof n[s] == "function" ? (r[s] != null || (r[s] = []), r[s].push(n[s])) : t[s] = n[s];
  if (t.disabled || t["aria-disabled"])
    return Object.assign(t, Object.fromEntries(Object.keys(r).map((n) => [n, void 0])));
  for (let n in r)
    Object.assign(t, { [n](s, ...i) {
      let o = r[n];
      for (let a of o) {
        if ((s instanceof Event || (s == null ? void 0 : s.nativeEvent) instanceof Event) && s.defaultPrevented)
          return;
        a(s, ...i);
      }
    } });
  return t;
}
function hc(e) {
  var t;
  return Object.assign(pe(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Ql(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Lo(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
let pc = Qt(null);
pc.displayName = "OpenClosedContext";
var Bt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Bt || {});
function Lf() {
  return Sr(pc);
}
function lx({ value: e, children: t }) {
  return qe.createElement(pc.Provider, { value: e }, t);
}
function mc() {
  let e = fe(!1);
  return us(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function ux(e = 0) {
  let [t, r] = te(e), n = mc(), s = Ne((c) => {
    n.current && r((l) => l | c);
  }, [t, n]), i = Ne((c) => !!(t & c), [t]), o = Ne((c) => {
    n.current && r((l) => l & ~c);
  }, [r, n]), a = Ne((c) => {
    n.current && r((l) => l ^ c);
  }, [r]);
  return { flags: t, addFlag: s, hasFlag: i, removeFlag: o, toggleFlag: a };
}
function dx(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Fo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Uo(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function fx(e, t) {
  let r = js();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: s } = getComputedStyle(e), [i, o] = [n, s].map((c) => {
    let [l = 0] = c.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return l;
  }), a = i + o;
  if (a !== 0) {
    r.group((l) => {
      l.setTimeout(() => {
        t(), l.dispose();
      }, a), l.addEventListener(e, "transitionrun", (u) => {
        u.target === u.currentTarget && l.dispose();
      });
    });
    let c = r.addEventListener(e, "transitionend", (l) => {
      l.target === l.currentTarget && (t(), c());
    });
  } else
    t();
  return r.add(() => t()), r.dispose;
}
function hx(e, t, r, n) {
  let s = r ? "enter" : "leave", i = js(), o = n !== void 0 ? dx(n) : () => {
  };
  s === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let a = $t(s, { enter: () => t.enter, leave: () => t.leave }), c = $t(s, { enter: () => t.enterTo, leave: () => t.leaveTo }), l = $t(s, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Uo(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Fo(e, ...t.base, ...a, ...l), i.nextFrame(() => {
    Uo(e, ...t.base, ...a, ...l), Fo(e, ...t.base, ...a, ...c), fx(e, () => (Uo(e, ...t.base, ...a), Fo(e, ...t.base, ...t.entered), o()));
  }), i.dispose;
}
function px({ immediate: e, container: t, direction: r, classes: n, onStart: s, onStop: i }) {
  let o = mc(), a = $f(), c = en(r);
  us(() => {
    e && (c.current = "enter");
  }, [e]), us(() => {
    let l = js();
    a.add(l.dispose);
    let u = t.current;
    if (u && c.current !== "idle" && o.current)
      return l.dispose(), s.current(c.current), l.add(hx(u, n.current, c.current === "enter", () => {
        l.dispose(), i.current(c.current);
      })), l.dispose;
  }, [r]);
}
function or(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Qi = Qt(null);
Qi.displayName = "TransitionContext";
var mx = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(mx || {});
function vx() {
  let e = Sr(Qi);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function yx() {
  let e = Sr(Ji);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Ji = Qt(null);
Ji.displayName = "NestingContext";
function Xi(e) {
  return "children" in e ? Xi(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function Ff(e, t) {
  let r = en(e), n = fe([]), s = mc(), i = $f(), o = Kt((m, y = gr.Hidden) => {
    let p = n.current.findIndex(({ el: v }) => v === m);
    p !== -1 && ($t(y, { [gr.Unmount]() {
      n.current.splice(p, 1);
    }, [gr.Hidden]() {
      n.current[p].state = "hidden";
    } }), i.microTask(() => {
      var v;
      !Xi(n) && s.current && ((v = r.current) == null || v.call(r));
    }));
  }), a = Kt((m) => {
    let y = n.current.find(({ el: p }) => p === m);
    return y ? y.state !== "visible" && (y.state = "visible") : n.current.push({ el: m, state: "visible" }), () => o(m, gr.Unmount);
  }), c = fe([]), l = fe(Promise.resolve()), u = fe({ enter: [], leave: [], idle: [] }), d = Kt((m, y, p) => {
    c.current.splice(0), t && (t.chains.current[y] = t.chains.current[y].filter(([v]) => v !== m)), t == null || t.chains.current[y].push([m, new Promise((v) => {
      c.current.push(v);
    })]), t == null || t.chains.current[y].push([m, new Promise((v) => {
      Promise.all(u.current[y].map(([S, O]) => O)).then(() => v());
    })]), y === "enter" ? l.current = l.current.then(() => t == null ? void 0 : t.wait.current).then(() => p(y)) : p(y);
  }), h = Kt((m, y, p) => {
    Promise.all(u.current[y].splice(0).map(([v, S]) => S)).then(() => {
      var v;
      (v = c.current.shift()) == null || v();
    }).then(() => p(y));
  });
  return En(() => ({ children: n, register: a, unregister: o, onStart: d, onStop: h, wait: l, chains: u }), [a, o, n, d, h, u, l]);
}
function gx() {
}
let bx = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function Jl(e) {
  var t;
  let r = {};
  for (let n of bx)
    r[n] = (t = e[n]) != null ? t : gx;
  return r;
}
function xx(e) {
  let t = fe(Jl(e));
  return le(() => {
    t.current = Jl(e);
  }, [e]), t;
}
let wx = "div", Uf = If.RenderStrategy;
function Sx(e, t) {
  var r, n;
  let { beforeEnter: s, afterEnter: i, beforeLeave: o, afterLeave: a, enter: c, enterFrom: l, enterTo: u, entered: d, leave: h, leaveFrom: m, leaveTo: y, ...p } = e, v = fe(null), S = kf(v, t), O = (r = p.unmount) == null || r ? gr.Unmount : gr.Hidden, { show: w, appear: E, initial: x } = vx(), [A, M] = te(w ? "visible" : "hidden"), k = yx(), { register: N, unregister: B } = k;
  le(() => N(v), [N, v]), le(() => {
    if (O === gr.Hidden && v.current) {
      if (w && A !== "visible") {
        M("visible");
        return;
      }
      return $t(A, { hidden: () => B(v), visible: () => N(v) });
    }
  }, [A, v, N, B, w, O]);
  let Z = en({ base: or(p.className), enter: or(c), enterFrom: or(l), enterTo: or(u), entered: or(d), leave: or(h), leaveFrom: or(m), leaveTo: or(y) }), V = xx({ beforeEnter: s, afterEnter: i, beforeLeave: o, afterLeave: a }), Pe = jf();
  le(() => {
    if (Pe && A === "visible" && v.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [v, A, Pe]);
  let _e = x && !E, De = E && w && x, Re = !Pe || _e ? "idle" : w ? "enter" : "leave", ke = ux(0), Je = Kt((q) => $t(q, { enter: () => {
    ke.addFlag(Bt.Opening), V.current.beforeEnter();
  }, leave: () => {
    ke.addFlag(Bt.Closing), V.current.beforeLeave();
  }, idle: () => {
  } })), Ge = Kt((q) => $t(q, { enter: () => {
    ke.removeFlag(Bt.Opening), V.current.afterEnter();
  }, leave: () => {
    ke.removeFlag(Bt.Closing), V.current.afterLeave();
  }, idle: () => {
  } })), T = Ff(() => {
    M("hidden"), B(v);
  }, k), I = fe(!1);
  px({ immediate: De, container: v, classes: Z, direction: Re, onStart: en((q) => {
    I.current = !0, T.onStart(v, q, Je);
  }), onStop: en((q) => {
    I.current = !1, T.onStop(v, q, Ge), q === "leave" && !Xi(T) && (M("hidden"), B(v));
  }) });
  let W = p, J = { ref: S };
  return De ? W = { ...W, className: Ai(p.className, ...Z.current.enter, ...Z.current.enterFrom) } : I.current && (W.className = Ai(p.className, (n = v.current) == null ? void 0 : n.className), W.className === "" && delete W.className), qe.createElement(Ji.Provider, { value: T }, qe.createElement(lx, { value: $t(A, { visible: Bt.Open, hidden: Bt.Closed }) | ke.flags }, Mf({ ourProps: J, theirProps: W, defaultTag: wx, features: Uf, visible: A === "visible", name: "Transition.Child" })));
}
function _x(e, t) {
  let { show: r, appear: n = !1, unmount: s = !0, ...i } = e, o = fe(null), a = kf(o, t);
  jf();
  let c = Lf();
  if (r === void 0 && c !== null && (r = (c & Bt.Open) === Bt.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [l, u] = te(r ? "visible" : "hidden"), d = Ff(() => {
    u("hidden");
  }), [h, m] = te(!0), y = fe([r]);
  us(() => {
    h !== !1 && y.current[y.current.length - 1] !== r && (y.current.push(r), m(!1));
  }, [y, r]);
  let p = En(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  le(() => {
    if (r)
      u("visible");
    else if (!Xi(d))
      u("hidden");
    else {
      let w = o.current;
      if (!w)
        return;
      let E = w.getBoundingClientRect();
      E.x === 0 && E.y === 0 && E.width === 0 && E.height === 0 && u("hidden");
    }
  }, [r, d]);
  let v = { unmount: s }, S = Kt(() => {
    var w;
    h && m(!1), (w = e.beforeEnter) == null || w.call(e);
  }), O = Kt(() => {
    var w;
    h && m(!1), (w = e.beforeLeave) == null || w.call(e);
  });
  return qe.createElement(Ji.Provider, { value: d }, qe.createElement(Qi.Provider, { value: p }, Mf({ ourProps: { ...v, as: jt, children: qe.createElement(zf, { ref: a, ...v, ...i, beforeEnter: S, beforeLeave: O }) }, theirProps: {}, defaultTag: jt, features: Uf, visible: l === "visible", name: "Transition" })));
}
function Ex(e, t) {
  let r = Sr(Qi) !== null, n = Lf() !== null;
  return qe.createElement(qe.Fragment, null, !r && n ? qe.createElement(Ba, { ref: t, ...e }) : qe.createElement(zf, { ref: t, ...e }));
}
let Ba = hc(_x), zf = hc(Sx), Ox = hc(Ex), Bf = Object.assign(Ba, { Child: Ox, Root: Ba });
const Cx = Qt(null), zo = {
  didCatch: !1,
  error: null
};
class Gs extends lh {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = zo;
  }
  static getDerivedStateFromError(t) {
    return {
      didCatch: !0,
      error: t
    };
  }
  resetErrorBoundary() {
    const {
      error: t
    } = this.state;
    if (t !== null) {
      for (var r, n, s = arguments.length, i = new Array(s), o = 0; o < s; o++)
        i[o] = arguments[o];
      (r = (n = this.props).onReset) === null || r === void 0 || r.call(n, {
        args: i,
        reason: "imperative-api"
      }), this.setState(zo);
    }
  }
  componentDidCatch(t, r) {
    var n, s;
    (n = (s = this.props).onError) === null || n === void 0 || n.call(s, t, r);
  }
  componentDidUpdate(t, r) {
    const {
      didCatch: n
    } = this.state, {
      resetKeys: s
    } = this.props;
    if (n && r.error !== null && Tx(t.resetKeys, s)) {
      var i, o;
      (i = (o = this.props).onReset) === null || i === void 0 || i.call(o, {
        next: s,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(zo);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: r,
      FallbackComponent: n,
      fallback: s
    } = this.props, {
      didCatch: i,
      error: o
    } = this.state;
    let a = t;
    if (i) {
      const c = {
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof r == "function")
        a = r(c);
      else if (n)
        a = U(n, c);
      else if (s === null || On(s))
        a = s;
      else
        throw o;
    }
    return U(Cx.Provider, {
      value: {
        didCatch: i,
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a);
  }
}
function Tx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((r, n) => !Object.is(r, t[n]));
}
const Qn = ({ children: e }) => /* @__PURE__ */ f.jsxs(Ke, { className: "p-3 flex flex-row gap-3 items-center text-red-400", children: [
  /* @__PURE__ */ f.jsx(lg, { size: 20 }),
  " ",
  e
] }), Rx = ({ order: { course_name: e }, teacher: { title: t, firstname: r } }) => /* @__PURE__ */ f.jsxs(Ke, { className: "relative bg-white rounded-none w-full", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 p-3", children: [
    /* @__PURE__ */ f.jsxs($s, { className: "w-[70px] h-[70px] rounded-md", children: [
      /* @__PURE__ */ f.jsx(
        qi,
        {
          className: "w-[70px] h-[70px]",
          src: "https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
        }
      ),
      /* @__PURE__ */ f.jsx(Vd, { children: e })
    ] }),
    /* @__PURE__ */ f.jsxs("div", { children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
        /* @__PURE__ */ f.jsx("p", { className: "font-bold", children: "รายวิชา:" }),
        /* @__PURE__ */ f.jsxs("span", { children: [
          e.split(" ")[1],
          " ",
          e.split(" ")[2]
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
        /* @__PURE__ */ f.jsx("p", { className: "font-bold", children: "คุณครู:" }),
        /* @__PURE__ */ f.jsx("span", { children: t || r })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ f.jsx(tr, { className: "p-3", children: /* @__PURE__ */ f.jsx("div", { children: e }) }),
  /* @__PURE__ */ f.jsx("div", { className: "flex flex-row w-full justify-end p-3", children: /* @__PURE__ */ f.jsx(Mn, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
] }), Ax = ({ orderStatus: e }) => {
  let t;
  switch (e) {
    case "F":
      t = {
        hasTeacher: !1,
        isLearned: !1,
        isCompleted: !1
      };
      break;
    case "A":
      t = {
        hasTeacher: !0,
        isLearned: !1,
        isCompleted: !1
      };
      break;
    case "B":
      t = {
        hasTeacher: !0,
        isLearned: !0,
        isCompleted: !1
      };
      break;
    case "C":
      t = {
        hasTeacher: !0,
        isLearned: !0,
        isCompleted: !0
      };
      break;
    default:
      t = {
        hasTeacher: !1,
        isLearned: !1,
        isCompleted: !1
      };
      break;
  }
  return /* @__PURE__ */ f.jsxs(Ke, { className: "rounded-none bg-white w-full", children: [
    /* @__PURE__ */ f.jsx(Br, { className: " px-3 pt-3 pb-0", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "สถานะ" }) }),
    /* @__PURE__ */ f.jsxs(tr, { className: "p-3 flex flex-row justify-between", children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.hasTeacher ? /* @__PURE__ */ f.jsx(Co, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(To, { size: 30, className: "text-orange-500" }),
          "ได้คุณครูแล้ว"
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isLearned ? /* @__PURE__ */ f.jsx(Co, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(To, { size: 30, className: "text-orange-500" }),
          "เรียนแล้ว"
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isCompleted ? /* @__PURE__ */ f.jsx(Co, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(To, { size: 30, className: "text-orange-500" }),
          "เสร็จแล้ว"
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "flex flex-col justify-end", children: /* @__PURE__ */ f.jsx(Mn, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
    ] })
  ] });
}, Nx = ({ roomId: e, sideMenuOpen: t, setSideMenuOpen: r }) => {
  const { dataBaseApiUrl: n, authToken: s } = Ka(), [i, o] = te(null), [a, c] = te(window.innerWidth <= 1200);
  return le(() => {
    const l = () => {
      window.innerWidth <= 1200 ? (c(!0), r(!1)) : (c(!1), r(!0));
    };
    return window.addEventListener("resize", l), () => {
      window.removeEventListener("resize", l);
    };
  }, []), le(() => {
    e && Bv(n, s, e).then((l) => {
      o(l);
    });
  }, [e, n, s]), i && /* @__PURE__ */ f.jsx(
    Bf,
    {
      show: t,
      as: jt,
      enter: "transition ease-out duration-200",
      enterFrom: Se("opacity-0", a ? "translate-x-10" : "-translate-x-10"),
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: Se("opacity-0", a ? "translate-x-10" : "-translate-x-10"),
      children: /* @__PURE__ */ f.jsx("div", { className: Se("bg-white", a && "absolute top-0 left-0 right-0 bottom-0 z-20"), onClick: () => r(!1), children: /* @__PURE__ */ f.jsxs(fc, { className: "min-w-[300px] h-[90vh] relative", onClick: (l) => l.stopPropagation(), children: [
        a && /* @__PURE__ */ f.jsx(at, { className: "p-2 my-2", variant: "ghost", children: /* @__PURE__ */ f.jsx(Ld, { className: "active:translate-y-[1px]", size: 24, onClick: () => r(!1) }) }),
        /* @__PURE__ */ f.jsx(Gs, { fallback: /* @__PURE__ */ f.jsx(Qn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(Rx, { order: i.order, teacher: i.teacher }) }),
        /* @__PURE__ */ f.jsx(Gs, { fallback: /* @__PURE__ */ f.jsx(Qn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(Ax, { orderStatus: i.order.order_status }) }),
        /* @__PURE__ */ f.jsx(Gs, { fallback: /* @__PURE__ */ f.jsx(Qn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(Kd, { order: i.order }) }),
        /* @__PURE__ */ f.jsx(Gs, { fallback: /* @__PURE__ */ f.jsx(Qn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(bf, { teacher: i.teacher }) })
      ] }) })
    }
  );
}, Px = ({ roomMenuOpen: e, setRoomMenuOpen: t, chatRoom: r, selectedTab: n, setSelectedTab: s }) => {
  const [i, o] = te(window.innerWidth <= 1200);
  return le(() => {
    const a = () => {
      window.innerWidth <= 1200 ? (o(!0), t(!1)) : (o(!1), t(!0));
    };
    return window.addEventListener("resize", a), () => {
      window.removeEventListener("resize", a);
    };
  }, []), /* @__PURE__ */ f.jsx(
    Bf,
    {
      show: e,
      as: jt,
      enter: "transition ease-out duration-200",
      enterFrom: Se("opacity-0", i ? "-translate-x-10" : "translate-x-10"),
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: Se("opacity-0", i ? "-translate-x-10" : "translate-x-10"),
      children: /* @__PURE__ */ f.jsxs("div", { className: Se("flex flex-col bg-white border-y border-l h-[90vh]", i && "absolute top-0 left-0 right-0 bottom-0 z-20"), children: [
        i && /* @__PURE__ */ f.jsx(at, { className: "p-2 my-2 w-fit ml-auto", variant: "ghost", children: /* @__PURE__ */ f.jsx(Ld, { className: "active:translate-y-[1px]", size: 24, onClick: () => t(!1) }) }),
        r.map((a, c) => /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx($x, { room: a, selectedTab: n, index: c, setSelectedTab: s }) }, a.room_id))
      ] })
    }
  );
}, $x = ({ room: e, selectedTab: t, index: r, setSelectedTab: n }) => {
  var l, u, d, h, m, y, p, v, S;
  const { dataBaseApiUrl: s, authToken: i } = Ka(), o = Tn({
    queryKey: ["user-profile", e.room_id],
    queryFn: () => wd(s, i, e.room_id).then((O) => O.flat().filter((w) => w.teacher_id))
  }), a = Tn({
    queryKey: ["latest-message", e.room_id],
    queryFn: () => xd(s, i, e.room_id, (/* @__PURE__ */ new Date()).toISOString(), "2023-12-20T09:32:13.000Z")
  }), c = (l = a.data) == null ? void 0 : l[a.data.length - 1];
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      className: Se("min-w-[300px] w-full px-4 py-2  flex flex-row gap-4 border-l-4 ", t === r ? "border-l-4 border-orange-400 bg-gray-100/50" : "border-white"),
      onClick: () => {
        n(r);
      },
      children: [
        /* @__PURE__ */ f.jsxs($s, { children: [
          /* @__PURE__ */ f.jsx(Zi, { src: (d = (u = o.data) == null ? void 0 : u[r]) == null ? void 0 : d.photo_url }),
          /* @__PURE__ */ f.jsx(Ki, { children: (m = (h = o.data) == null ? void 0 : h[r]) == null ? void 0 : m.firstname })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "flex flex-row items-center", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-start", children: [
          /* @__PURE__ */ f.jsxs("p", { className: "truncate max-w-[200px]", children: [
            e.room_name,
            " (",
            e.room_id,
            ")"
          ] }),
          /* @__PURE__ */ f.jsxs("p", { className: "text-sm", children: [
            (p = (y = o.data) == null ? void 0 : y[r]) == null ? void 0 : p.firstname,
            " ",
            (S = (v = o.data) == null ? void 0 : v[r]) == null ? void 0 : S.lastname
          ] }),
          /* @__PURE__ */ f.jsx("p", { "data-testid": "latest-message", className: "text-xs", children: c == null ? void 0 : c.content })
        ] }) })
      ]
    }
  );
}, jx = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r }) => {
  const [n, s] = te(0), { connectWebSocket: i, socketStatus: o, disconnectWebSocket: a } = tc(), c = Fn(), l = Tn({
    queryKey: ["chat-room"],
    queryFn: () => nl(t, r)
  }), u = window.innerWidth <= 768, [d, h] = te(!u), [m, y] = te(!u);
  return le(() => {
    i(t, e, r, c);
    function p() {
      document.visibilityState === "hidden" ? a() : (i(t, e, r, c), nl(t, r));
    }
    return document.addEventListener("visibilitychange", p), () => {
      document.removeEventListener("visibilitychange", p);
    };
  }, [i, e, t, r, a, c]), l.isLoading ? /* @__PURE__ */ f.jsx("div", { children: "Loading..." }) : l.isError ? /* @__PURE__ */ f.jsx(Qn, { children: l.error.message }) : l.isSuccess && /* @__PURE__ */ f.jsxs("div", { "data-testid": "chat-app", className: "flex flex-row relative", children: [
    /* @__PURE__ */ f.jsx(Px, { roomMenuOpen: d, setRoomMenuOpen: h, selectedTab: n, setSelectedTab: s, chatRoom: l.data }),
    l.data.map((p, v) => n === v && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row w-full", children: [
      /* @__PURE__ */ f.jsx(
        tx,
        {
          currentRoom: p,
          roomId: p.room_id,
          socketStatus: o,
          setRoomMenuOpen: h,
          roomMenuOpen: d,
          sideMenuOpen: m,
          setSideMenuOpen: y
        }
      ),
      /* @__PURE__ */ f.jsx(Nx, { roomId: p.room_id, sideMenuOpen: m, setSideMenuOpen: y })
    ] }, p.room_id))
  ] });
}, kx = new Rh(), yw = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n, devTools: s = !1 }) => /* @__PURE__ */ f.jsx(jh, { client: kx, children: /* @__PURE__ */ f.jsxs(_m, { socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n, children: [
  /* @__PURE__ */ f.jsx(jx, { socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n }),
  s && /* @__PURE__ */ f.jsx(Sm, { initialIsOpen: !1 })
] }) });
export {
  li as $,
  qx as A,
  Ls as B,
  Jx as C,
  Xx as D,
  dw as E,
  Zx as F,
  sw as G,
  nw as H,
  Kx as I,
  He as J,
  Lr as K,
  lp as L,
  Cp as M,
  rw as N,
  Qx as O,
  ew as P,
  Gx as Q,
  Fs as R,
  Yx as S,
  Vx as T,
  tw as U,
  Tu as V,
  Mc as W,
  yw as X,
  ct as a,
  op as b,
  rt as c,
  _p as d,
  Cu as e,
  Fr as f,
  fw as g,
  Op as h,
  ia as i,
  Ux as j,
  sa as k,
  iw as l,
  uw as m,
  ow as n,
  Yh as o,
  Ap as p,
  cp as q,
  aw as r,
  lw as s,
  cw as t,
  Fx as u,
  rs as v,
  _u as w,
  zx as x,
  Hx as y,
  Wx as z
};
