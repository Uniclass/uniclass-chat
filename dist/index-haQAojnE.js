var ro = (e, t, r) => {
  if (!t.has(e))
    throw TypeError("Cannot " + r);
};
var g = (e, t, r) => (ro(e, t, "read from private field"), r ? r.call(e) : t.get(e)), D = (e, t, r) => {
  if (t.has(e))
    throw TypeError("Cannot add the same private member more than once");
  t instanceof WeakSet ? t.add(e) : t.set(e, r);
}, P = (e, t, r, n) => (ro(e, t, "write to private field"), n ? n.call(e, r) : t.set(e, r), r);
var Ps = (e, t, r, n) => ({
  set _(s) {
    P(e, t, s, r);
  },
  get _() {
    return g(e, t, n);
  }
}), te = (e, t, r) => (ro(e, t, "access private method"), r);
import * as $ from "react";
import Ze, { createContext as Jt, useContext as _r, useLayoutEffect as Ua, useEffect as ue, useState as re, useRef as he, useCallback as je, forwardRef as me, createElement as U, Children as Dr, isValidElement as En, cloneElement as Ai, Fragment as kt, useMemo as On, useReducer as nu, Component as th } from "react";
import rh, { flushSync as su } from "react-dom";
function za(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Fo = { exports: {} }, Vn = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xc;
function nh() {
  return xc || (xc = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Ze, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), o = Symbol.for("react.provider"), a = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), m = Symbol.for("react.offscreen"), y = Symbol.iterator, p = "@@iterator";
    function v(b) {
      if (b === null || typeof b != "object")
        return null;
      var N = y && b[y] || b[p];
      return typeof N == "function" ? N : null;
    }
    var _ = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function O(b) {
      {
        for (var N = arguments.length, L = new Array(N > 1 ? N - 1 : 0), Q = 1; Q < N; Q++)
          L[Q - 1] = arguments[Q];
        w("error", b, L);
      }
    }
    function w(b, N, L) {
      {
        var Q = _.ReactDebugCurrentFrame, Oe = Q.getStackAddendum();
        Oe !== "" && (N += "%s", L = L.concat([Oe]));
        var $e = L.map(function(be) {
          return String(be);
        });
        $e.unshift("Warning: " + N), Function.prototype.apply.call(console[b], console, $e);
      }
    }
    var E = !1, x = !1, A = !1, k = !1, j = !1, R;
    R = Symbol.for("react.module.reference");
    function B(b) {
      return !!(typeof b == "string" || typeof b == "function" || b === n || b === i || j || b === s || b === l || b === u || k || b === m || E || x || A || typeof b == "object" && b !== null && (b.$$typeof === h || b.$$typeof === d || b.$$typeof === o || b.$$typeof === a || b.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      b.$$typeof === R || b.getModuleId !== void 0));
    }
    function K(b, N, L) {
      var Q = b.displayName;
      if (Q)
        return Q;
      var Oe = N.displayName || N.name || "";
      return Oe !== "" ? L + "(" + Oe + ")" : L;
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
            var N = b;
            return V(N) + ".Consumer";
          case o:
            var L = b;
            return V(L._context) + ".Provider";
          case c:
            return K(b, b.render, "ForwardRef");
          case d:
            var Q = b.displayName || null;
            return Q !== null ? Q : Pe(b.type) || "Memo";
          case h: {
            var Oe = b, $e = Oe._payload, be = Oe._init;
            try {
              return Pe(be($e));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Ee = Object.assign, Fe = 0, Ae, Ie, Xe, Qe, T, M, W;
    function X() {
    }
    X.__reactDisabledLog = !0;
    function q() {
      {
        if (Fe === 0) {
          Ae = console.log, Ie = console.info, Xe = console.warn, Qe = console.error, T = console.group, M = console.groupCollapsed, W = console.groupEnd;
          var b = {
            configurable: !0,
            enumerable: !0,
            value: X,
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
        Fe++;
      }
    }
    function ve() {
      {
        if (Fe--, Fe === 0) {
          var b = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Ee({}, b, {
              value: Ae
            }),
            info: Ee({}, b, {
              value: Ie
            }),
            warn: Ee({}, b, {
              value: Xe
            }),
            error: Ee({}, b, {
              value: Qe
            }),
            group: Ee({}, b, {
              value: T
            }),
            groupCollapsed: Ee({}, b, {
              value: M
            }),
            groupEnd: Ee({}, b, {
              value: W
            })
          });
        }
        Fe < 0 && O("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = _.ReactCurrentDispatcher, ne;
    function de(b, N, L) {
      {
        if (ne === void 0)
          try {
            throw Error();
          } catch (Oe) {
            var Q = Oe.stack.trim().match(/\n( *(at )?)/);
            ne = Q && Q[1] || "";
          }
        return `
` + ne + b;
      }
    }
    var ge = !1, fe;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      fe = new Be();
    }
    function S(b, N) {
      if (!b || ge)
        return "";
      {
        var L = fe.get(b);
        if (L !== void 0)
          return L;
      }
      var Q;
      ge = !0;
      var Oe = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var $e;
      $e = ee.current, ee.current = null, q();
      try {
        if (N) {
          var be = function() {
            throw Error();
          };
          if (Object.defineProperty(be.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(be, []);
            } catch (Ut) {
              Q = Ut;
            }
            Reflect.construct(b, [], be);
          } else {
            try {
              be.call();
            } catch (Ut) {
              Q = Ut;
            }
            b.call(be.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ut) {
            Q = Ut;
          }
          b();
        }
      } catch (Ut) {
        if (Ut && Q && typeof Ut.stack == "string") {
          for (var ye = Ut.stack.split(`
`), tt = Q.stack.split(`
`), ze = ye.length - 1, Ve = tt.length - 1; ze >= 1 && Ve >= 0 && ye[ze] !== tt[Ve]; )
            Ve--;
          for (; ze >= 1 && Ve >= 0; ze--, Ve--)
            if (ye[ze] !== tt[Ve]) {
              if (ze !== 1 || Ve !== 1)
                do
                  if (ze--, Ve--, Ve < 0 || ye[ze] !== tt[Ve]) {
                    var ht = `
` + ye[ze].replace(" at new ", " at ");
                    return b.displayName && ht.includes("<anonymous>") && (ht = ht.replace("<anonymous>", b.displayName)), typeof b == "function" && fe.set(b, ht), ht;
                  }
                while (ze >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        ge = !1, ee.current = $e, ve(), Error.prepareStackTrace = Oe;
      }
      var qr = b ? b.displayName || b.name : "", bc = qr ? de(qr) : "";
      return typeof b == "function" && fe.set(b, bc), bc;
    }
    function Y(b, N, L) {
      return S(b, !1);
    }
    function se(b) {
      var N = b.prototype;
      return !!(N && N.isReactComponent);
    }
    function we(b, N, L) {
      if (b == null)
        return "";
      if (typeof b == "function")
        return S(b, se(b));
      if (typeof b == "string")
        return de(b);
      switch (b) {
        case l:
          return de("Suspense");
        case u:
          return de("SuspenseList");
      }
      if (typeof b == "object")
        switch (b.$$typeof) {
          case c:
            return Y(b.render);
          case d:
            return we(b.type, N, L);
          case h: {
            var Q = b, Oe = Q._payload, $e = Q._init;
            try {
              return we($e(Oe), N, L);
            } catch {
            }
          }
        }
      return "";
    }
    var et = Object.prototype.hasOwnProperty, Vr = {}, Ot = _.ReactDebugCurrentFrame;
    function _t(b) {
      if (b) {
        var N = b._owner, L = we(b.type, b._source, N ? N.type : null);
        Ot.setExtraStackFrame(L);
      } else
        Ot.setExtraStackFrame(null);
    }
    function If(b, N, L, Q, Oe) {
      {
        var $e = Function.call.bind(et);
        for (var be in b)
          if ($e(b, be)) {
            var ye = void 0;
            try {
              if (typeof b[be] != "function") {
                var tt = Error((Q || "React class") + ": " + L + " type `" + be + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof b[be] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw tt.name = "Invariant Violation", tt;
              }
              ye = b[be](N, be, Q, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (ze) {
              ye = ze;
            }
            ye && !(ye instanceof Error) && (_t(Oe), O("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", Q || "React class", L, be, typeof ye), _t(null)), ye instanceof Error && !(ye.message in Vr) && (Vr[ye.message] = !0, _t(Oe), O("Failed %s type: %s", L, ye.message), _t(null));
          }
      }
    }
    var Mf = Array.isArray;
    function Qi(b) {
      return Mf(b);
    }
    function Df(b) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, L = N && b[Symbol.toStringTag] || b.constructor.name || "Object";
        return L;
      }
    }
    function Lf(b) {
      try {
        return lc(b), !1;
      } catch {
        return !0;
      }
    }
    function lc(b) {
      return "" + b;
    }
    function uc(b) {
      if (Lf(b))
        return O("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Df(b)), lc(b);
    }
    var Bn = _.ReactCurrentOwner, Ff = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, dc, fc, Ji;
    Ji = {};
    function Uf(b) {
      if (et.call(b, "ref")) {
        var N = Object.getOwnPropertyDescriptor(b, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.ref !== void 0;
    }
    function zf(b) {
      if (et.call(b, "key")) {
        var N = Object.getOwnPropertyDescriptor(b, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return b.key !== void 0;
    }
    function Bf(b, N) {
      if (typeof b.ref == "string" && Bn.current && N && Bn.current.stateNode !== N) {
        var L = Pe(Bn.current.type);
        Ji[L] || (O('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', Pe(Bn.current.type), b.ref), Ji[L] = !0);
      }
    }
    function Vf(b, N) {
      {
        var L = function() {
          dc || (dc = !0, O("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        L.isReactWarning = !0, Object.defineProperty(b, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function Wf(b, N) {
      {
        var L = function() {
          fc || (fc = !0, O("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        L.isReactWarning = !0, Object.defineProperty(b, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var qf = function(b, N, L, Q, Oe, $e, be) {
      var ye = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: b,
        key: N,
        ref: L,
        props: be,
        // Record the component responsible for creating this element.
        _owner: $e
      };
      return ye._store = {}, Object.defineProperty(ye._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(ye, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Q
      }), Object.defineProperty(ye, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Oe
      }), Object.freeze && (Object.freeze(ye.props), Object.freeze(ye)), ye;
    };
    function Hf(b, N, L, Q, Oe) {
      {
        var $e, be = {}, ye = null, tt = null;
        L !== void 0 && (uc(L), ye = "" + L), zf(N) && (uc(N.key), ye = "" + N.key), Uf(N) && (tt = N.ref, Bf(N, Oe));
        for ($e in N)
          et.call(N, $e) && !Ff.hasOwnProperty($e) && (be[$e] = N[$e]);
        if (b && b.defaultProps) {
          var ze = b.defaultProps;
          for ($e in ze)
            be[$e] === void 0 && (be[$e] = ze[$e]);
        }
        if (ye || tt) {
          var Ve = typeof b == "function" ? b.displayName || b.name || "Unknown" : b;
          ye && Vf(be, Ve), tt && Wf(be, Ve);
        }
        return qf(b, ye, tt, Oe, Q, Bn.current, be);
      }
    }
    var Xi = _.ReactCurrentOwner, hc = _.ReactDebugCurrentFrame;
    function Wr(b) {
      if (b) {
        var N = b._owner, L = we(b.type, b._source, N ? N.type : null);
        hc.setExtraStackFrame(L);
      } else
        hc.setExtraStackFrame(null);
    }
    var eo;
    eo = !1;
    function to(b) {
      return typeof b == "object" && b !== null && b.$$typeof === t;
    }
    function pc() {
      {
        if (Xi.current) {
          var b = Pe(Xi.current.type);
          if (b)
            return `

Check the render method of \`` + b + "`.";
        }
        return "";
      }
    }
    function Zf(b) {
      {
        if (b !== void 0) {
          var N = b.fileName.replace(/^.*[\\\/]/, ""), L = b.lineNumber;
          return `

Check your code at ` + N + ":" + L + ".";
        }
        return "";
      }
    }
    var mc = {};
    function Kf(b) {
      {
        var N = pc();
        if (!N) {
          var L = typeof b == "string" ? b : b.displayName || b.name;
          L && (N = `

Check the top-level render call using <` + L + ">.");
        }
        return N;
      }
    }
    function vc(b, N) {
      {
        if (!b._store || b._store.validated || b.key != null)
          return;
        b._store.validated = !0;
        var L = Kf(N);
        if (mc[L])
          return;
        mc[L] = !0;
        var Q = "";
        b && b._owner && b._owner !== Xi.current && (Q = " It was passed a child from " + Pe(b._owner.type) + "."), Wr(b), O('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, Q), Wr(null);
      }
    }
    function yc(b, N) {
      {
        if (typeof b != "object")
          return;
        if (Qi(b))
          for (var L = 0; L < b.length; L++) {
            var Q = b[L];
            to(Q) && vc(Q, N);
          }
        else if (to(b))
          b._store && (b._store.validated = !0);
        else if (b) {
          var Oe = v(b);
          if (typeof Oe == "function" && Oe !== b.entries)
            for (var $e = Oe.call(b), be; !(be = $e.next()).done; )
              to(be.value) && vc(be.value, N);
        }
      }
    }
    function Yf(b) {
      {
        var N = b.type;
        if (N == null || typeof N == "string")
          return;
        var L;
        if (typeof N == "function")
          L = N.propTypes;
        else if (typeof N == "object" && (N.$$typeof === c || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        N.$$typeof === d))
          L = N.propTypes;
        else
          return;
        if (L) {
          var Q = Pe(N);
          If(L, b.props, "prop", Q, b);
        } else if (N.PropTypes !== void 0 && !eo) {
          eo = !0;
          var Oe = Pe(N);
          O("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Oe || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && O("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Gf(b) {
      {
        for (var N = Object.keys(b.props), L = 0; L < N.length; L++) {
          var Q = N[L];
          if (Q !== "children" && Q !== "key") {
            Wr(b), O("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", Q), Wr(null);
            break;
          }
        }
        b.ref !== null && (Wr(b), O("Invalid attribute `ref` supplied to `React.Fragment`."), Wr(null));
      }
    }
    function gc(b, N, L, Q, Oe, $e) {
      {
        var be = B(b);
        if (!be) {
          var ye = "";
          (b === void 0 || typeof b == "object" && b !== null && Object.keys(b).length === 0) && (ye += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var tt = Zf(Oe);
          tt ? ye += tt : ye += pc();
          var ze;
          b === null ? ze = "null" : Qi(b) ? ze = "array" : b !== void 0 && b.$$typeof === t ? (ze = "<" + (Pe(b.type) || "Unknown") + " />", ye = " Did you accidentally export a JSX literal instead of a component?") : ze = typeof b, O("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ze, ye);
        }
        var Ve = Hf(b, N, L, Oe, $e);
        if (Ve == null)
          return Ve;
        if (be) {
          var ht = N.children;
          if (ht !== void 0)
            if (Q)
              if (Qi(ht)) {
                for (var qr = 0; qr < ht.length; qr++)
                  yc(ht[qr], b);
                Object.freeze && Object.freeze(ht);
              } else
                O("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              yc(ht, b);
        }
        return b === n ? Gf(Ve) : Yf(Ve), Ve;
      }
    }
    function Qf(b, N, L) {
      return gc(b, N, L, !0);
    }
    function Jf(b, N, L) {
      return gc(b, N, L, !1);
    }
    var Xf = Jf, eh = Qf;
    Vn.Fragment = n, Vn.jsx = Xf, Vn.jsxs = eh;
  }()), Vn;
}
var Wn = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var wc;
function sh() {
  if (wc)
    return Wn;
  wc = 1;
  var e = Ze, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
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
  return Wn.Fragment = r, Wn.jsx = o, Wn.jsxs = o, Wn;
}
process.env.NODE_ENV === "production" ? Fo.exports = sh() : Fo.exports = nh();
var f = Fo.exports, Dn = class {
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
function yt() {
}
function ih(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Uo(e) {
  return typeof e == "number" && e >= 0 && e !== 1 / 0;
}
function iu(e, t) {
  return Math.max(e + (t || 0) - Date.now(), 0);
}
function _c(e, t) {
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
      if (t.queryHash !== Ba(o, t.options))
        return !1;
    } else if (!Xn(t.queryKey, o))
      return !1;
  }
  if (r !== "all") {
    const c = t.isActive();
    if (r === "active" && !c || r === "inactive" && c)
      return !1;
  }
  return !(typeof a == "boolean" && t.isStale() !== a || typeof s < "u" && s !== t.state.fetchStatus || i && !i(t));
}
function Sc(e, t) {
  const { exact: r, status: n, predicate: s, mutationKey: i } = e;
  if (i) {
    if (!t.options.mutationKey)
      return !1;
    if (r) {
      if (Ur(t.options.mutationKey) !== Ur(i))
        return !1;
    } else if (!Xn(t.options.mutationKey, i))
      return !1;
  }
  return !(n && t.state.status !== n || s && !s(t));
}
function Ba(e, t) {
  return ((t == null ? void 0 : t.queryKeyHashFn) || Ur)(e);
}
function Ur(e) {
  return JSON.stringify(
    e,
    (t, r) => zo(r) ? Object.keys(r).sort().reduce((n, s) => (n[s] = r[s], n), {}) : r
  );
}
function Xn(e, t) {
  return e === t ? !0 : typeof e != typeof t ? !1 : e && t && typeof e == "object" && typeof t == "object" ? !Object.keys(t).some((r) => !Xn(e[r], t[r])) : !1;
}
function ou(e, t) {
  if (e === t)
    return e;
  const r = Ec(e) && Ec(t);
  if (r || zo(e) && zo(t)) {
    const n = r ? e.length : Object.keys(e).length, s = r ? t : Object.keys(t), i = s.length, o = r ? [] : {};
    let a = 0;
    for (let c = 0; c < i; c++) {
      const l = r ? c : s[c];
      o[l] = ou(e[l], t[l]), o[l] === e[l] && a++;
    }
    return n === i && a === n ? e : o;
  }
  return t;
}
function ii(e, t) {
  if (e && !t || t && !e)
    return !1;
  for (const r in e)
    if (e[r] !== t[r])
      return !1;
  return !0;
}
function Ec(e) {
  return Array.isArray(e) && e.length === Object.keys(e).length;
}
function zo(e) {
  if (!Oc(e))
    return !1;
  const t = e.constructor;
  if (typeof t > "u")
    return !0;
  const r = t.prototype;
  return !(!Oc(r) || !r.hasOwnProperty("isPrototypeOf"));
}
function Oc(e) {
  return Object.prototype.toString.call(e) === "[object Object]";
}
function oh(e) {
  return new Promise((t) => {
    setTimeout(t, e);
  });
}
function Bo(e, t, r) {
  return typeof r.structuralSharing == "function" ? r.structuralSharing(e, t) : r.structuralSharing !== !1 ? ou(e, t) : t;
}
function ah(e, t, r = 0) {
  const n = [...e, t];
  return r && n.length > r ? n.slice(1) : n;
}
function ch(e, t, r = 0) {
  const n = [t, ...e];
  return r && n.length > r ? n.slice(0, -1) : n;
}
var Rr, lr, tn, Hl, lh = (Hl = class extends Dn {
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
}, Rr = new WeakMap(), lr = new WeakMap(), tn = new WeakMap(), Hl), oi = new lh(), rn, ur, nn, Zl, uh = (Zl = class extends Dn {
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
}, rn = new WeakMap(), ur = new WeakMap(), nn = new WeakMap(), Zl), es = new uh();
function dh(e) {
  return Math.min(1e3 * 2 ** e, 3e4);
}
function Ni(e) {
  return (e ?? "online") === "online" ? es.isOnline() : !0;
}
var au = class {
  constructor(e) {
    this.revert = e == null ? void 0 : e.revert, this.silent = e == null ? void 0 : e.silent;
  }
};
function no(e) {
  return e instanceof au;
}
function cu(e) {
  let t = !1, r = 0, n = !1, s, i, o;
  const a = new Promise((v, _) => {
    i = v, o = _;
  }), c = (v) => {
    var _;
    n || (m(new au(v)), (_ = e.abort) == null || _.call(e));
  }, l = () => {
    t = !0;
  }, u = () => {
    t = !1;
  }, d = () => !oi.isFocused() || e.networkMode !== "always" && !es.isOnline(), h = (v) => {
    var _;
    n || (n = !0, (_ = e.onSuccess) == null || _.call(e, v), s == null || s(), i(v));
  }, m = (v) => {
    var _;
    n || (n = !0, (_ = e.onError) == null || _.call(e, v), s == null || s(), o(v));
  }, y = () => new Promise((v) => {
    var _;
    s = (O) => {
      const w = n || !d();
      return w && v(O), w;
    }, (_ = e.onPause) == null || _.call(e);
  }).then(() => {
    var v;
    s = void 0, n || (v = e.onContinue) == null || v.call(e);
  }), p = () => {
    if (n)
      return;
    let v;
    try {
      v = e.fn();
    } catch (_) {
      v = Promise.reject(_);
    }
    Promise.resolve(v).then(h).catch((_) => {
      var A;
      if (n)
        return;
      const O = e.retry ?? (Cn ? 0 : 3), w = e.retryDelay ?? dh, E = typeof w == "function" ? w(r, _) : w, x = O === !0 || typeof O == "number" && r < O || typeof O == "function" && O(r, _);
      if (t || !x) {
        m(_);
        return;
      }
      r++, (A = e.onFail) == null || A.call(e, r, _), oh(E).then(() => {
        if (d())
          return y();
      }).then(() => {
        t ? m(_) : p();
      });
    });
  };
  return Ni(e.networkMode) ? p() : y().then(p), {
    promise: a,
    cancel: c,
    continue: () => (s == null ? void 0 : s()) ? a : Promise.resolve(),
    cancelRetry: l,
    continueRetry: u
  };
}
function fh() {
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
var qe = fh(), Ar, Kl, lu = (Kl = class {
  constructor() {
    D(this, Ar, void 0);
  }
  destroy() {
    this.clearGcTimeout();
  }
  scheduleGc() {
    this.clearGcTimeout(), Uo(this.gcTime) && P(this, Ar, setTimeout(() => {
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
}, Ar = new WeakMap(), Kl), sn, on, pt, dr, mt, He, ds, Nr, an, Ys, St, Bt, Yl, hh = (Yl = class extends lu {
  constructor(t) {
    super();
    D(this, an);
    D(this, St);
    D(this, sn, void 0);
    D(this, on, void 0);
    D(this, pt, void 0);
    D(this, dr, void 0);
    D(this, mt, void 0);
    D(this, He, void 0);
    D(this, ds, void 0);
    D(this, Nr, void 0);
    P(this, Nr, !1), P(this, ds, t.defaultOptions), te(this, an, Ys).call(this, t.options), P(this, He, []), P(this, pt, t.cache), this.queryKey = t.queryKey, this.queryHash = t.queryHash, P(this, sn, t.state || ph(this.options)), this.state = g(this, sn), this.scheduleGc();
  }
  get meta() {
    return this.options.meta;
  }
  optionalRemove() {
    !g(this, He).length && this.state.fetchStatus === "idle" && g(this, pt).remove(this);
  }
  setData(t, r) {
    const n = Bo(this.state.data, t, this.options);
    return te(this, St, Bt).call(this, {
      data: n,
      type: "success",
      dataUpdatedAt: r == null ? void 0 : r.updatedAt,
      manual: r == null ? void 0 : r.manual
    }), n;
  }
  setState(t, r) {
    te(this, St, Bt).call(this, { type: "setState", state: t, setStateOptions: r });
  }
  cancel(t) {
    var n;
    const r = g(this, dr);
    return (n = g(this, mt)) == null || n.cancel(t), r ? r.then(yt).catch(yt) : Promise.resolve();
  }
  destroy() {
    super.destroy(), this.cancel({ silent: !0 });
  }
  reset() {
    this.destroy(), this.setState(g(this, sn));
  }
  isActive() {
    return g(this, He).some(
      (t) => t.options.enabled !== !1
    );
  }
  isDisabled() {
    return this.getObserversCount() > 0 && !this.isActive();
  }
  isStale() {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || g(this, He).some((t) => t.getCurrentResult().isStale);
  }
  isStaleByTime(t = 0) {
    return this.state.isInvalidated || !this.state.dataUpdatedAt || !iu(this.state.dataUpdatedAt, t);
  }
  onFocus() {
    var r;
    const t = g(this, He).find((n) => n.shouldFetchOnWindowFocus());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = g(this, mt)) == null || r.continue();
  }
  onOnline() {
    var r;
    const t = g(this, He).find((n) => n.shouldFetchOnReconnect());
    t == null || t.refetch({ cancelRefetch: !1 }), (r = g(this, mt)) == null || r.continue();
  }
  addObserver(t) {
    g(this, He).includes(t) || (g(this, He).push(t), this.clearGcTimeout(), g(this, pt).notify({ type: "observerAdded", query: this, observer: t }));
  }
  removeObserver(t) {
    g(this, He).includes(t) && (P(this, He, g(this, He).filter((r) => r !== t)), g(this, He).length || (g(this, mt) && (g(this, Nr) ? g(this, mt).cancel({ revert: !0 }) : g(this, mt).cancelRetry()), this.scheduleGc()), g(this, pt).notify({ type: "observerRemoved", query: this, observer: t }));
  }
  getObserversCount() {
    return g(this, He).length;
  }
  invalidate() {
    this.state.isInvalidated || te(this, St, Bt).call(this, { type: "invalidate" });
  }
  fetch(t, r) {
    var l, u, d, h;
    if (this.state.fetchStatus !== "idle") {
      if (this.state.dataUpdatedAt && (r != null && r.cancelRefetch))
        this.cancel({ silent: !0 });
      else if (g(this, dr))
        return (l = g(this, mt)) == null || l.continueRetry(), g(this, dr);
    }
    if (t && te(this, an, Ys).call(this, t), !this.options.queryFn) {
      const m = g(this, He).find((y) => y.options.queryFn);
      m && te(this, an, Ys).call(this, m.options);
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
    ), P(this, on, this.state), (this.state.fetchStatus === "idle" || this.state.fetchMeta !== ((d = a.fetchOptions) == null ? void 0 : d.meta)) && te(this, St, Bt).call(this, { type: "fetch", meta: (h = a.fetchOptions) == null ? void 0 : h.meta });
    const c = (m) => {
      var y, p, v, _;
      no(m) && m.silent || te(this, St, Bt).call(this, {
        type: "error",
        error: m
      }), no(m) || ((p = (y = g(this, pt).config).onError) == null || p.call(
        y,
        m,
        this
      ), (_ = (v = g(this, pt).config).onSettled) == null || _.call(
        v,
        this.state.data,
        m,
        this
      )), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
    };
    return P(this, mt, cu({
      fn: a.fetchFn,
      abort: n.abort.bind(n),
      onSuccess: (m) => {
        var y, p, v, _;
        if (typeof m > "u") {
          process.env.NODE_ENV !== "production" && console.error(
            `Query data cannot be undefined. Please make sure to return a value other than undefined from your query function. Affected query key: ${this.queryHash}`
          ), c(new Error(`${this.queryHash} data is undefined`));
          return;
        }
        this.setData(m), (p = (y = g(this, pt).config).onSuccess) == null || p.call(y, m, this), (_ = (v = g(this, pt).config).onSettled) == null || _.call(
          v,
          m,
          this.state.error,
          this
        ), this.isFetchingOptimistic || this.scheduleGc(), this.isFetchingOptimistic = !1;
      },
      onError: c,
      onFail: (m, y) => {
        te(this, St, Bt).call(this, { type: "failed", failureCount: m, error: y });
      },
      onPause: () => {
        te(this, St, Bt).call(this, { type: "pause" });
      },
      onContinue: () => {
        te(this, St, Bt).call(this, { type: "continue" });
      },
      retry: a.options.retry,
      retryDelay: a.options.retryDelay,
      networkMode: a.options.networkMode
    })), P(this, dr, g(this, mt).promise), g(this, dr);
  }
}, sn = new WeakMap(), on = new WeakMap(), pt = new WeakMap(), dr = new WeakMap(), mt = new WeakMap(), He = new WeakMap(), ds = new WeakMap(), Nr = new WeakMap(), an = new WeakSet(), Ys = function(t) {
  this.options = { ...g(this, ds), ...t }, this.updateGcTime(this.options.gcTime);
}, St = new WeakSet(), Bt = function(t) {
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
          fetchStatus: Ni(this.options.networkMode) ? "fetching" : "paused",
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
        return no(s) && s.revert && g(this, on) ? { ...g(this, on), fetchStatus: "idle" } : {
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
  this.state = r(this.state), qe.batch(() => {
    g(this, He).forEach((n) => {
      n.onQueryUpdate();
    }), g(this, pt).notify({ query: this, type: "updated", action: t });
  });
}, Yl);
function ph(e) {
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
var Tt, Gl, mh = (Gl = class extends Dn {
  constructor(t = {}) {
    super();
    D(this, Tt, void 0);
    this.config = t, P(this, Tt, /* @__PURE__ */ new Map());
  }
  build(t, r, n) {
    const s = r.queryKey, i = r.queryHash ?? Ba(s, r);
    let o = this.get(i);
    return o || (o = new hh({
      cache: this,
      queryKey: s,
      queryHash: i,
      options: t.defaultQueryOptions(r),
      state: n,
      defaultOptions: t.getQueryDefaults(s)
    }), this.add(o)), o;
  }
  add(t) {
    g(this, Tt).has(t.queryHash) || (g(this, Tt).set(t.queryHash, t), this.notify({
      type: "added",
      query: t
    }));
  }
  remove(t) {
    const r = g(this, Tt).get(t.queryHash);
    r && (t.destroy(), r === t && g(this, Tt).delete(t.queryHash), this.notify({ type: "removed", query: t }));
  }
  clear() {
    qe.batch(() => {
      this.getAll().forEach((t) => {
        this.remove(t);
      });
    });
  }
  get(t) {
    return g(this, Tt).get(t);
  }
  getAll() {
    return [...g(this, Tt).values()];
  }
  find(t) {
    const r = { exact: !0, ...t };
    return this.getAll().find(
      (n) => _c(r, n)
    );
  }
  findAll(t = {}) {
    const r = this.getAll();
    return Object.keys(t).length > 0 ? r.filter((n) => _c(t, n)) : r;
  }
  notify(t) {
    qe.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  onFocus() {
    qe.batch(() => {
      this.getAll().forEach((t) => {
        t.onFocus();
      });
    });
  }
  onOnline() {
    qe.batch(() => {
      this.getAll().forEach((t) => {
        t.onOnline();
      });
    });
  }
}, Tt = new WeakMap(), Gl), Rt, fs, dt, cn, At, ar, Ql, vh = (Ql = class extends lu {
  constructor(t) {
    super();
    D(this, At);
    D(this, Rt, void 0);
    D(this, fs, void 0);
    D(this, dt, void 0);
    D(this, cn, void 0);
    this.mutationId = t.mutationId, P(this, fs, t.defaultOptions), P(this, dt, t.mutationCache), P(this, Rt, []), this.state = t.state || uu(), this.setOptions(t.options), this.scheduleGc();
  }
  setOptions(t) {
    this.options = { ...g(this, fs), ...t }, this.updateGcTime(this.options.gcTime);
  }
  get meta() {
    return this.options.meta;
  }
  addObserver(t) {
    g(this, Rt).includes(t) || (g(this, Rt).push(t), this.clearGcTimeout(), g(this, dt).notify({
      type: "observerAdded",
      mutation: this,
      observer: t
    }));
  }
  removeObserver(t) {
    P(this, Rt, g(this, Rt).filter((r) => r !== t)), this.scheduleGc(), g(this, dt).notify({
      type: "observerRemoved",
      mutation: this,
      observer: t
    });
  }
  optionalRemove() {
    g(this, Rt).length || (this.state.status === "pending" ? this.scheduleGc() : g(this, dt).remove(this));
  }
  continue() {
    var t;
    return ((t = g(this, cn)) == null ? void 0 : t.continue()) ?? // continuing a mutation assumes that variables are set, mutation must have been dehydrated before
    this.execute(this.state.variables);
  }
  async execute(t) {
    var s, i, o, a, c, l, u, d, h, m, y, p, v, _, O, w, E, x, A, k;
    const r = () => (P(this, cn, cu({
      fn: () => this.options.mutationFn ? this.options.mutationFn(t) : Promise.reject(new Error("No mutationFn found")),
      onFail: (j, R) => {
        te(this, At, ar).call(this, { type: "failed", failureCount: j, error: R });
      },
      onPause: () => {
        te(this, At, ar).call(this, { type: "pause" });
      },
      onContinue: () => {
        te(this, At, ar).call(this, { type: "continue" });
      },
      retry: this.options.retry ?? 0,
      retryDelay: this.options.retryDelay,
      networkMode: this.options.networkMode
    })), g(this, cn).promise), n = this.state.status === "pending";
    try {
      if (!n) {
        te(this, At, ar).call(this, { type: "pending", variables: t }), await ((i = (s = g(this, dt).config).onMutate) == null ? void 0 : i.call(
          s,
          t,
          this
        ));
        const R = await ((a = (o = this.options).onMutate) == null ? void 0 : a.call(o, t));
        R !== this.state.context && te(this, At, ar).call(this, {
          type: "pending",
          context: R,
          variables: t
        });
      }
      const j = await r();
      return await ((l = (c = g(this, dt).config).onSuccess) == null ? void 0 : l.call(
        c,
        j,
        t,
        this.state.context,
        this
      )), await ((d = (u = this.options).onSuccess) == null ? void 0 : d.call(u, j, t, this.state.context)), await ((m = (h = g(this, dt).config).onSettled) == null ? void 0 : m.call(
        h,
        j,
        null,
        this.state.variables,
        this.state.context,
        this
      )), await ((p = (y = this.options).onSettled) == null ? void 0 : p.call(y, j, null, t, this.state.context)), te(this, At, ar).call(this, { type: "success", data: j }), j;
    } catch (j) {
      try {
        throw await ((_ = (v = g(this, dt).config).onError) == null ? void 0 : _.call(
          v,
          j,
          t,
          this.state.context,
          this
        )), await ((w = (O = this.options).onError) == null ? void 0 : w.call(
          O,
          j,
          t,
          this.state.context
        )), await ((x = (E = g(this, dt).config).onSettled) == null ? void 0 : x.call(
          E,
          void 0,
          j,
          this.state.variables,
          this.state.context,
          this
        )), await ((k = (A = this.options).onSettled) == null ? void 0 : k.call(
          A,
          void 0,
          j,
          t,
          this.state.context
        )), j;
      } finally {
        te(this, At, ar).call(this, { type: "error", error: j });
      }
    }
  }
}, Rt = new WeakMap(), fs = new WeakMap(), dt = new WeakMap(), cn = new WeakMap(), At = new WeakSet(), ar = function(t) {
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
          isPaused: !Ni(this.options.networkMode),
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
  this.state = r(this.state), qe.batch(() => {
    g(this, Rt).forEach((n) => {
      n.onMutationUpdate(t);
    }), g(this, dt).notify({
      mutation: this,
      type: "updated",
      action: t
    });
  });
}, Ql);
function uu() {
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
var vt, hs, jr, Jl, yh = (Jl = class extends Dn {
  constructor(t = {}) {
    super();
    D(this, vt, void 0);
    D(this, hs, void 0);
    D(this, jr, void 0);
    this.config = t, P(this, vt, []), P(this, hs, 0);
  }
  build(t, r, n) {
    const s = new vh({
      mutationCache: this,
      mutationId: ++Ps(this, hs)._,
      options: t.defaultMutationOptions(r),
      state: n
    });
    return this.add(s), s;
  }
  add(t) {
    g(this, vt).push(t), this.notify({ type: "added", mutation: t });
  }
  remove(t) {
    P(this, vt, g(this, vt).filter((r) => r !== t)), this.notify({ type: "removed", mutation: t });
  }
  clear() {
    qe.batch(() => {
      g(this, vt).forEach((t) => {
        this.remove(t);
      });
    });
  }
  getAll() {
    return g(this, vt);
  }
  find(t) {
    const r = { exact: !0, ...t };
    return g(this, vt).find(
      (n) => Sc(r, n)
    );
  }
  findAll(t = {}) {
    return g(this, vt).filter(
      (r) => Sc(t, r)
    );
  }
  notify(t) {
    qe.batch(() => {
      this.listeners.forEach((r) => {
        r(t);
      });
    });
  }
  resumePausedMutations() {
    return P(this, jr, (g(this, jr) ?? Promise.resolve()).then(() => {
      const t = g(this, vt).filter((r) => r.state.isPaused);
      return qe.batch(
        () => t.reduce(
          (r, n) => r.then(() => n.continue().catch(yt)),
          Promise.resolve()
        )
      );
    }).then(() => {
      P(this, jr, void 0);
    })), g(this, jr);
  }
}, vt = new WeakMap(), hs = new WeakMap(), jr = new WeakMap(), Jl);
function gh(e) {
  return {
    onFetch: (t, r) => {
      const n = async () => {
        var y, p, v, _, O;
        const s = t.options, i = (v = (p = (y = t.fetchOptions) == null ? void 0 : y.meta) == null ? void 0 : p.fetchMore) == null ? void 0 : v.direction, o = ((_ = t.state.data) == null ? void 0 : _.pages) || [], a = ((O = t.state.data) == null ? void 0 : O.pageParams) || [], c = { pages: [], pageParams: [] };
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
          const k = await d(
            A
          ), { maxPages: j } = t.options, R = x ? ch : ah;
          return {
            pages: R(w.pages, k, j),
            pageParams: R(w.pageParams, E, j)
          };
        };
        let m;
        if (i && o.length) {
          const w = i === "backward", E = w ? bh : Cc, x = {
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
            const x = Cc(s, m);
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
function Cc(e, { pages: t, pageParams: r }) {
  const n = t.length - 1;
  return e.getNextPageParam(
    t[n],
    t,
    r[n],
    r
  );
}
function bh(e, { pages: t, pageParams: r }) {
  var n;
  return (n = e.getPreviousPageParam) == null ? void 0 : n.call(
    e,
    t[0],
    t,
    r[0],
    r
  );
}
var We, fr, hr, ln, un, pr, dn, fn, Xl, xh = (Xl = class {
  constructor(e = {}) {
    D(this, We, void 0);
    D(this, fr, void 0);
    D(this, hr, void 0);
    D(this, ln, void 0);
    D(this, un, void 0);
    D(this, pr, void 0);
    D(this, dn, void 0);
    D(this, fn, void 0);
    P(this, We, e.queryCache || new mh()), P(this, fr, e.mutationCache || new yh()), P(this, hr, e.defaultOptions || {}), P(this, ln, /* @__PURE__ */ new Map()), P(this, un, /* @__PURE__ */ new Map()), P(this, pr, 0);
  }
  mount() {
    Ps(this, pr)._++, g(this, pr) === 1 && (P(this, dn, oi.subscribe(() => {
      oi.isFocused() && (this.resumePausedMutations(), g(this, We).onFocus());
    })), P(this, fn, es.subscribe(() => {
      es.isOnline() && (this.resumePausedMutations(), g(this, We).onOnline());
    })));
  }
  unmount() {
    var e, t;
    Ps(this, pr)._--, g(this, pr) === 0 && ((e = g(this, dn)) == null || e.call(this), P(this, dn, void 0), (t = g(this, fn)) == null || t.call(this), P(this, fn, void 0));
  }
  isFetching(e) {
    return g(this, We).findAll({ ...e, fetchStatus: "fetching" }).length;
  }
  isMutating(e) {
    return g(this, fr).findAll({ ...e, status: "pending" }).length;
  }
  getQueryData(e) {
    var t;
    return (t = g(this, We).find({ queryKey: e })) == null ? void 0 : t.state.data;
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
    const n = g(this, We).find({ queryKey: e }), s = n == null ? void 0 : n.state.data, i = ih(t, s);
    if (typeof i > "u")
      return;
    const o = this.defaultQueryOptions({ queryKey: e });
    return g(this, We).build(this, o).setData(i, { ...r, manual: !0 });
  }
  setQueriesData(e, t, r) {
    return qe.batch(
      () => this.getQueryCache().findAll(e).map(({ queryKey: n }) => [
        n,
        this.setQueryData(n, t, r)
      ])
    );
  }
  getQueryState(e) {
    var t;
    return (t = g(this, We).find({ queryKey: e })) == null ? void 0 : t.state;
  }
  removeQueries(e) {
    const t = g(this, We);
    qe.batch(() => {
      t.findAll(e).forEach((r) => {
        t.remove(r);
      });
    });
  }
  resetQueries(e, t) {
    const r = g(this, We), n = {
      type: "active",
      ...e
    };
    return qe.batch(() => (r.findAll(e).forEach((s) => {
      s.reset();
    }), this.refetchQueries(n, t)));
  }
  cancelQueries(e = {}, t = {}) {
    const r = { revert: !0, ...t }, n = qe.batch(
      () => g(this, We).findAll(e).map((s) => s.cancel(r))
    );
    return Promise.all(n).then(yt).catch(yt);
  }
  invalidateQueries(e = {}, t = {}) {
    return qe.batch(() => {
      if (g(this, We).findAll(e).forEach((n) => {
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
    }, n = qe.batch(
      () => g(this, We).findAll(e).filter((s) => !s.isDisabled()).map((s) => {
        let i = s.fetch(void 0, r);
        return r.throwOnError || (i = i.catch(yt)), s.state.fetchStatus === "paused" ? Promise.resolve() : i;
      })
    );
    return Promise.all(n).then(yt);
  }
  fetchQuery(e) {
    const t = this.defaultQueryOptions(e);
    typeof t.retry > "u" && (t.retry = !1);
    const r = g(this, We).build(this, t);
    return r.isStaleByTime(t.staleTime) ? r.fetch(t) : Promise.resolve(r.state.data);
  }
  prefetchQuery(e) {
    return this.fetchQuery(e).then(yt).catch(yt);
  }
  fetchInfiniteQuery(e) {
    return e.behavior = gh(e.pages), this.fetchQuery(e);
  }
  prefetchInfiniteQuery(e) {
    return this.fetchInfiniteQuery(e).then(yt).catch(yt);
  }
  resumePausedMutations() {
    return g(this, fr).resumePausedMutations();
  }
  getQueryCache() {
    return g(this, We);
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
      Xn(e, n.queryKey) && (r = { ...r, ...n.defaultOptions });
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
      Xn(e, n.mutationKey) && (r = { ...r, ...n.defaultOptions });
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
    return t.queryHash || (t.queryHash = Ba(
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
    g(this, We).clear(), g(this, fr).clear();
  }
}, We = new WeakMap(), fr = new WeakMap(), hr = new WeakMap(), ln = new WeakMap(), un = new WeakMap(), pr = new WeakMap(), dn = new WeakMap(), fn = new WeakMap(), Xl), at, De, ps, rt, Pr, hn, Nt, ms, pn, mn, $r, kr, mr, vn, Ir, Kn, vs, Vo, ys, Wo, gs, qo, bs, Ho, xs, Zo, ws, Ko, _s, Yo, Ri, du, eu, wh = (eu = class extends Dn {
  constructor(t, r) {
    super();
    D(this, Ir);
    D(this, vs);
    D(this, ys);
    D(this, gs);
    D(this, bs);
    D(this, xs);
    D(this, ws);
    D(this, _s);
    D(this, Ri);
    D(this, at, void 0);
    D(this, De, void 0);
    D(this, ps, void 0);
    D(this, rt, void 0);
    D(this, Pr, void 0);
    D(this, hn, void 0);
    D(this, Nt, void 0);
    D(this, ms, void 0);
    D(this, pn, void 0);
    // This property keeps track of the last query with defined data.
    // It will be used to pass the previous data and query to the placeholder function between renders.
    D(this, mn, void 0);
    D(this, $r, void 0);
    D(this, kr, void 0);
    D(this, mr, void 0);
    D(this, vn, /* @__PURE__ */ new Set());
    this.options = r, P(this, at, t), P(this, Nt, null), this.bindMethods(), this.setOptions(r);
  }
  bindMethods() {
    this.refetch = this.refetch.bind(this);
  }
  onSubscribe() {
    this.listeners.size === 1 && (g(this, De).addObserver(this), Tc(g(this, De), this.options) ? te(this, Ir, Kn).call(this) : this.updateResult(), te(this, bs, Ho).call(this));
  }
  onUnsubscribe() {
    this.hasListeners() || this.destroy();
  }
  shouldFetchOnReconnect() {
    return Go(
      g(this, De),
      this.options,
      this.options.refetchOnReconnect
    );
  }
  shouldFetchOnWindowFocus() {
    return Go(
      g(this, De),
      this.options,
      this.options.refetchOnWindowFocus
    );
  }
  destroy() {
    this.listeners = /* @__PURE__ */ new Set(), te(this, xs, Zo).call(this), te(this, ws, Ko).call(this), g(this, De).removeObserver(this);
  }
  setOptions(t, r) {
    const n = this.options, s = g(this, De);
    if (this.options = g(this, at).defaultQueryOptions(t), ii(n, this.options) || g(this, at).getQueryCache().notify({
      type: "observerOptionsUpdated",
      query: g(this, De),
      observer: this
    }), typeof this.options.enabled < "u" && typeof this.options.enabled != "boolean")
      throw new Error("Expected enabled to be a boolean");
    this.options.queryKey || (this.options.queryKey = n.queryKey), te(this, _s, Yo).call(this);
    const i = this.hasListeners();
    i && Rc(
      g(this, De),
      s,
      this.options,
      n
    ) && te(this, Ir, Kn).call(this), this.updateResult(r), i && (g(this, De) !== s || this.options.enabled !== n.enabled || this.options.staleTime !== n.staleTime) && te(this, vs, Vo).call(this);
    const o = te(this, ys, Wo).call(this);
    i && (g(this, De) !== s || this.options.enabled !== n.enabled || o !== g(this, mr)) && te(this, gs, qo).call(this, o);
  }
  getOptimisticResult(t) {
    const r = g(this, at).getQueryCache().build(g(this, at), t), n = this.createResult(r, t);
    return Sh(this, n) && (P(this, rt, n), P(this, hn, this.options), P(this, Pr, g(this, De).state)), n;
  }
  getCurrentResult() {
    return g(this, rt);
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
    return g(this, De);
  }
  refetch({ ...t } = {}) {
    return this.fetch({
      ...t
    });
  }
  fetchOptimistic(t) {
    const r = g(this, at).defaultQueryOptions(t), n = g(this, at).getQueryCache().build(g(this, at), r);
    return n.isFetchingOptimistic = !0, n.fetch().then(() => this.createResult(n, r));
  }
  fetch(t) {
    return te(this, Ir, Kn).call(this, {
      ...t,
      cancelRefetch: t.cancelRefetch ?? !0
    }).then(() => (this.updateResult(), g(this, rt)));
  }
  createResult(t, r) {
    var A;
    const n = g(this, De), s = this.options, i = g(this, rt), o = g(this, Pr), a = g(this, hn), l = t !== n ? t.state : g(this, ps), { state: u } = t;
    let { error: d, errorUpdatedAt: h, fetchStatus: m, status: y } = u, p = !1, v;
    if (r._optimisticResults) {
      const k = this.hasListeners(), j = !k && Tc(t, r), R = k && Rc(t, n, r, s);
      (j || R) && (m = Ni(t.options.networkMode) ? "fetching" : "paused", u.dataUpdatedAt || (y = "pending")), r._optimisticResults === "isRestoring" && (m = "idle");
    }
    if (r.select && typeof u.data < "u")
      if (i && u.data === (o == null ? void 0 : o.data) && r.select === g(this, ms))
        v = g(this, pn);
      else
        try {
          P(this, ms, r.select), v = r.select(u.data), v = Bo(i == null ? void 0 : i.data, v, r), P(this, pn, v), P(this, Nt, null);
        } catch (k) {
          P(this, Nt, k);
        }
    else
      v = u.data;
    if (typeof r.placeholderData < "u" && typeof v > "u" && y === "pending") {
      let k;
      if (i != null && i.isPlaceholderData && r.placeholderData === (a == null ? void 0 : a.placeholderData))
        k = i.data;
      else if (k = typeof r.placeholderData == "function" ? r.placeholderData(
        (A = g(this, mn)) == null ? void 0 : A.state.data,
        g(this, mn)
      ) : r.placeholderData, r.select && typeof k < "u")
        try {
          k = r.select(k), P(this, Nt, null);
        } catch (j) {
          P(this, Nt, j);
        }
      typeof k < "u" && (y = "success", v = Bo(
        i == null ? void 0 : i.data,
        k,
        r
      ), p = !0);
    }
    g(this, Nt) && (d = g(this, Nt), v = g(this, pn), h = Date.now(), y = "error");
    const _ = m === "fetching", O = y === "pending", w = y === "error", E = O && _;
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
      isFetching: _,
      isRefetching: _ && !O,
      isLoadingError: w && u.dataUpdatedAt === 0,
      isPaused: m === "paused",
      isPlaceholderData: p,
      isRefetchError: w && u.dataUpdatedAt !== 0,
      isStale: Va(t, r),
      refetch: this.refetch
    };
  }
  updateResult(t) {
    const r = g(this, rt), n = this.createResult(g(this, De), this.options);
    if (P(this, Pr, g(this, De).state), P(this, hn, this.options), g(this, Pr).data !== void 0 && P(this, mn, g(this, De)), ii(n, r))
      return;
    P(this, rt, n);
    const s = {}, i = () => {
      if (!r)
        return !0;
      const { notifyOnChangeProps: o } = this.options, a = typeof o == "function" ? o() : o;
      if (a === "all" || !a && !g(this, vn).size)
        return !0;
      const c = new Set(
        a ?? g(this, vn)
      );
      return this.options.throwOnError && c.add("error"), Object.keys(g(this, rt)).some((l) => {
        const u = l;
        return g(this, rt)[u] !== r[u] && c.has(u);
      });
    };
    (t == null ? void 0 : t.listeners) !== !1 && i() && (s.listeners = !0), te(this, Ri, du).call(this, { ...s, ...t });
  }
  onQueryUpdate() {
    this.updateResult(), this.hasListeners() && te(this, bs, Ho).call(this);
  }
}, at = new WeakMap(), De = new WeakMap(), ps = new WeakMap(), rt = new WeakMap(), Pr = new WeakMap(), hn = new WeakMap(), Nt = new WeakMap(), ms = new WeakMap(), pn = new WeakMap(), mn = new WeakMap(), $r = new WeakMap(), kr = new WeakMap(), mr = new WeakMap(), vn = new WeakMap(), Ir = new WeakSet(), Kn = function(t) {
  te(this, _s, Yo).call(this);
  let r = g(this, De).fetch(
    this.options,
    t
  );
  return t != null && t.throwOnError || (r = r.catch(yt)), r;
}, vs = new WeakSet(), Vo = function() {
  if (te(this, xs, Zo).call(this), Cn || g(this, rt).isStale || !Uo(this.options.staleTime))
    return;
  const r = iu(
    g(this, rt).dataUpdatedAt,
    this.options.staleTime
  ) + 1;
  P(this, $r, setTimeout(() => {
    g(this, rt).isStale || this.updateResult();
  }, r));
}, ys = new WeakSet(), Wo = function() {
  return (typeof this.options.refetchInterval == "function" ? this.options.refetchInterval(g(this, De)) : this.options.refetchInterval) ?? !1;
}, gs = new WeakSet(), qo = function(t) {
  te(this, ws, Ko).call(this), P(this, mr, t), !(Cn || this.options.enabled === !1 || !Uo(g(this, mr)) || g(this, mr) === 0) && P(this, kr, setInterval(() => {
    (this.options.refetchIntervalInBackground || oi.isFocused()) && te(this, Ir, Kn).call(this);
  }, g(this, mr)));
}, bs = new WeakSet(), Ho = function() {
  te(this, vs, Vo).call(this), te(this, gs, qo).call(this, te(this, ys, Wo).call(this));
}, xs = new WeakSet(), Zo = function() {
  g(this, $r) && (clearTimeout(g(this, $r)), P(this, $r, void 0));
}, ws = new WeakSet(), Ko = function() {
  g(this, kr) && (clearInterval(g(this, kr)), P(this, kr, void 0));
}, _s = new WeakSet(), Yo = function() {
  const t = g(this, at).getQueryCache().build(g(this, at), this.options);
  if (t === g(this, De))
    return;
  const r = g(this, De);
  P(this, De, t), P(this, ps, t.state), this.hasListeners() && (r == null || r.removeObserver(this), t.addObserver(this));
}, Ri = new WeakSet(), du = function(t) {
  qe.batch(() => {
    t.listeners && this.listeners.forEach((r) => {
      r(g(this, rt));
    }), g(this, at).getQueryCache().notify({
      query: g(this, De),
      type: "observerResultsUpdated"
    });
  });
}, eu);
function _h(e, t) {
  return t.enabled !== !1 && !e.state.dataUpdatedAt && !(e.state.status === "error" && t.retryOnMount === !1);
}
function Tc(e, t) {
  return _h(e, t) || e.state.dataUpdatedAt > 0 && Go(e, t, t.refetchOnMount);
}
function Go(e, t, r) {
  if (t.enabled !== !1) {
    const n = typeof r == "function" ? r(e) : r;
    return n === "always" || n !== !1 && Va(e, t);
  }
  return !1;
}
function Rc(e, t, r, n) {
  return r.enabled !== !1 && (e !== t || n.enabled === !1) && (!r.suspense || e.state.status !== "error") && Va(e, r);
}
function Va(e, t) {
  return e.isStaleByTime(t.staleTime);
}
function Sh(e, t) {
  return !ii(e.getCurrentResult(), t);
}
var vr, Wt, ft, qt, yn, Gs, Ss, Qo, tu, Eh = (tu = class extends Dn {
  constructor(r, n) {
    super();
    D(this, yn);
    D(this, Ss);
    D(this, vr, void 0);
    D(this, Wt, void 0);
    D(this, ft, void 0);
    D(this, qt, void 0);
    P(this, Wt, void 0), P(this, vr, r), this.setOptions(n), this.bindMethods(), te(this, yn, Gs).call(this);
  }
  bindMethods() {
    this.mutate = this.mutate.bind(this), this.reset = this.reset.bind(this);
  }
  setOptions(r) {
    var s;
    const n = this.options;
    this.options = g(this, vr).defaultMutationOptions(r), ii(n, this.options) || g(this, vr).getMutationCache().notify({
      type: "observerOptionsUpdated",
      mutation: g(this, ft),
      observer: this
    }), (s = g(this, ft)) == null || s.setOptions(this.options), n != null && n.mutationKey && this.options.mutationKey && Ur(n.mutationKey) !== Ur(this.options.mutationKey) && this.reset();
  }
  onUnsubscribe() {
    var r;
    this.hasListeners() || (r = g(this, ft)) == null || r.removeObserver(this);
  }
  onMutationUpdate(r) {
    te(this, yn, Gs).call(this), te(this, Ss, Qo).call(this, r);
  }
  getCurrentResult() {
    return g(this, Wt);
  }
  reset() {
    var r;
    (r = g(this, ft)) == null || r.removeObserver(this), P(this, ft, void 0), te(this, yn, Gs).call(this), te(this, Ss, Qo).call(this);
  }
  mutate(r, n) {
    var s;
    return P(this, qt, n), (s = g(this, ft)) == null || s.removeObserver(this), P(this, ft, g(this, vr).getMutationCache().build(g(this, vr), this.options)), g(this, ft).addObserver(this), g(this, ft).execute(r);
  }
}, vr = new WeakMap(), Wt = new WeakMap(), ft = new WeakMap(), qt = new WeakMap(), yn = new WeakSet(), Gs = function() {
  var n;
  const r = ((n = g(this, ft)) == null ? void 0 : n.state) ?? uu();
  P(this, Wt, {
    ...r,
    isPending: r.status === "pending",
    isSuccess: r.status === "success",
    isError: r.status === "error",
    isIdle: r.status === "idle",
    mutate: this.mutate,
    reset: this.reset
  });
}, Ss = new WeakSet(), Qo = function(r) {
  qe.batch(() => {
    var n, s, i, o, a, c, l, u;
    if (g(this, qt) && this.hasListeners()) {
      const d = g(this, Wt).variables, h = g(this, Wt).context;
      (r == null ? void 0 : r.type) === "success" ? ((s = (n = g(this, qt)).onSuccess) == null || s.call(n, r.data, d, h), (o = (i = g(this, qt)).onSettled) == null || o.call(i, r.data, null, d, h)) : (r == null ? void 0 : r.type) === "error" && ((c = (a = g(this, qt)).onError) == null || c.call(a, r.error, d, h), (u = (l = g(this, qt)).onSettled) == null || u.call(
        l,
        void 0,
        r.error,
        d,
        h
      ));
    }
    this.listeners.forEach((d) => {
      d(g(this, Wt));
    });
  });
}, tu), fu = $.createContext(
  void 0
), Ln = (e) => {
  const t = $.useContext(fu);
  if (e)
    return e;
  if (!t)
    throw new Error("No QueryClient set, use QueryClientProvider to set one");
  return t;
}, Oh = ({
  client: e,
  children: t
}) => ($.useEffect(() => (e.mount(), () => {
  e.unmount();
}), [e]), /* @__PURE__ */ $.createElement(fu.Provider, { value: e }, t)), hu = $.createContext(!1), Ch = () => $.useContext(hu);
hu.Provider;
function Th() {
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
var Rh = $.createContext(Th()), Ah = () => $.useContext(Rh);
function pu(e, t) {
  return typeof e == "function" ? e(...t) : !!e;
}
var Nh = (e, t) => {
  (e.suspense || e.throwOnError) && (t.isReset() || (e.retryOnMount = !1));
}, jh = (e) => {
  $.useEffect(() => {
    e.clearReset();
  }, [e]);
}, Ph = ({
  result: e,
  errorResetBoundary: t,
  throwOnError: r,
  query: n
}) => e.isError && !t.isReset() && !e.isFetching && n && pu(r, [e.error, n]), $h = (e) => {
  e.suspense && typeof e.staleTime != "number" && (e.staleTime = 1e3);
}, kh = (e, t) => (e == null ? void 0 : e.suspense) && t.isPending, Ih = (e, t, r) => t.fetchOptimistic(e).catch(() => {
  r.clearReset();
});
function Mh(e, t, r) {
  if (process.env.NODE_ENV !== "production" && (typeof e != "object" || Array.isArray(e)))
    throw new Error(
      'Bad argument type. Starting with v5, only the "Object" form is allowed when calling query related functions. Please use the error stack to find the culprit call. More info here: https://tanstack.com/query/latest/docs/react/guides/migrating-to-v5#supports-a-single-signature-one-object'
    );
  const n = Ln(r), s = Ch(), i = Ah(), o = n.defaultQueryOptions(e);
  o._optimisticResults = s ? "isRestoring" : "optimistic", $h(o), Nh(o, i), jh(i);
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
        } : a.subscribe(qe.batchCalls(l));
        return a.updateResult(), u;
      },
      [a, s]
    ),
    () => a.getCurrentResult(),
    () => a.getCurrentResult()
  ), $.useEffect(() => {
    a.setOptions(o, { listeners: !1 });
  }, [o, a]), kh(o, c))
    throw Ih(o, a, i);
  if (Ph({
    result: c,
    errorResetBoundary: i,
    throwOnError: o.throwOnError,
    query: n.getQueryCache().get(o.queryHash)
  }))
    throw c.error;
  return o.notifyOnChangeProps ? c : a.trackResult(c);
}
function zr(e, t) {
  return Mh(e, wh, t);
}
function mu(e, t) {
  const r = Ln(t), [n] = $.useState(
    () => new Eh(
      r,
      e
    )
  );
  $.useEffect(() => {
    n.setOptions(e);
  }, [n, e]);
  const s = $.useSyncExternalStore(
    $.useCallback(
      (o) => n.subscribe(qe.batchCalls(o)),
      [n]
    ),
    () => n.getCurrentResult(),
    () => n.getCurrentResult()
  ), i = $.useCallback(
    (o, a) => {
      n.mutate(o, a).catch(Dh);
    },
    [n]
  );
  if (s.error && pu(n.options.throwOnError, [s.error]))
    throw s.error;
  return { ...s, mutate: i, mutateAsync: s.mutate };
}
function Dh() {
}
var ie = {
  context: void 0,
  registry: void 0
};
function Yn(e) {
  ie.context = e;
}
var Lh = (e, t) => e === t, ai = Symbol("solid-proxy"), vu = Symbol("solid-track"), ci = {
  equals: Lh
}, yu = Su, tr = 1, li = 2, gu = {
  owned: null,
  cleanups: null,
  context: null,
  owner: null
}, so = {}, _e = null, io = null, Ne = null, Je = null, Gt = null, ji = 0;
function Lr(e, t) {
  const r = Ne, n = _e, s = e.length === 0, i = t === void 0 ? n : t, o = s ? gu : {
    owned: null,
    cleanups: null,
    context: i ? i.context : null,
    owner: i
  }, a = s ? e : () => e(() => Ke(() => $i(o)));
  _e = o, Ne = null;
  try {
    return Dt(a, !0);
  } finally {
    Ne = r, _e = n;
  }
}
function nt(e, t) {
  t = t ? Object.assign({}, ci, t) : ci;
  const r = {
    value: e,
    observers: null,
    observerSlots: null,
    comparator: t.equals || void 0
  }, n = (s) => (typeof s == "function" && (s = s(r.value)), _u(r, s));
  return [wu.bind(r), n];
}
function Ac(e, t, r) {
  const n = Pi(e, t, !0, tr);
  Fn(n);
}
function Fr(e, t, r) {
  const n = Pi(e, t, !1, tr);
  Fn(n);
}
function bu(e, t, r) {
  yu = Kh;
  const n = Pi(e, t, !1, tr);
  (!r || !r.render) && (n.user = !0), Gt ? Gt.push(n) : Fn(n);
}
function lt(e, t, r) {
  r = r ? Object.assign({}, ci, r) : ci;
  const n = Pi(e, t, !0, 0);
  return n.observers = null, n.observerSlots = null, n.comparator = r.equals || void 0, Fn(n), wu.bind(n);
}
function Fh(e) {
  return e && typeof e == "object" && "then" in e;
}
function Uh(e, t, r) {
  let n, s, i;
  arguments.length === 2 && typeof t == "object" || arguments.length === 1 ? (n = !0, s = e, i = t || {}) : (n = e, s = t, i = r || {});
  let o = null, a = so, c = null, l = !1, u = "initialValue" in i, d = typeof n == "function" && lt(n);
  const h = /* @__PURE__ */ new Set(), [m, y] = (i.storage || nt)(i.initialValue), [p, v] = nt(void 0), [_, O] = nt(void 0, {
    equals: !1
  }), [w, E] = nt(u ? "ready" : "unresolved");
  if (ie.context) {
    c = `${ie.context.id}${ie.context.count++}`;
    let R;
    i.ssrLoadFrom === "initial" ? a = i.initialValue : ie.load && (R = ie.load(c)) && (a = R);
  }
  function x(R, B, K, V) {
    return o === R && (o = null, V !== void 0 && (u = !0), (R === a || B === a) && i.onHydrated && queueMicrotask(
      () => i.onHydrated(V, {
        value: B
      })
    ), a = so, A(B, K)), B;
  }
  function A(R, B) {
    Dt(() => {
      B === void 0 && y(() => R), E(B !== void 0 ? "errored" : u ? "ready" : "unresolved"), v(B);
      for (const K of h.keys())
        K.decrement();
      h.clear();
    }, !1);
  }
  function k() {
    const R = qh, B = m(), K = p();
    if (K !== void 0 && !o)
      throw K;
    return Ne && !Ne.user && R && Ac(() => {
      _(), o && (R.resolved || h.has(R) || (R.increment(), h.add(R)));
    }), B;
  }
  function j(R = !0) {
    if (R !== !1 && l)
      return;
    l = !1;
    const B = d ? d() : n;
    if (B == null || B === !1) {
      x(o, Ke(m));
      return;
    }
    const K = a !== so ? a : Ke(
      () => s(B, {
        value: m(),
        refetching: R
      })
    );
    return Fh(K) ? (o = K, "value" in K ? (K.status === "success" ? x(o, K.value, void 0, B) : x(o, void 0, void 0, B), K) : (l = !0, queueMicrotask(() => l = !1), Dt(() => {
      E(u ? "refreshing" : "pending"), O();
    }, !1), K.then(
      (V) => x(K, V, void 0, B),
      (V) => x(K, void 0, Ou(V), B)
    ))) : (x(o, K, void 0, B), K);
  }
  return Object.defineProperties(k, {
    state: {
      get: () => w()
    },
    error: {
      get: () => p()
    },
    loading: {
      get() {
        const R = w();
        return R === "pending" || R === "refreshing";
      }
    },
    latest: {
      get() {
        if (!u)
          return k();
        const R = p();
        if (R && !o)
          throw R;
        return m();
      }
    }
  }), d ? Ac(() => j(!1)) : j(!1), [
    k,
    {
      refetch: j,
      mutate: y
    }
  ];
}
function $x(e) {
  return Dt(e, !1);
}
function Ke(e) {
  if (Ne === null)
    return e();
  const t = Ne;
  Ne = null;
  try {
    return e();
  } finally {
    Ne = t;
  }
}
function kx(e, t, r) {
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
    const c = Ke(() => t(a, s, o));
    return s = a, c;
  };
}
function zh(e) {
  bu(() => Ke(e));
}
function ts(e) {
  return _e === null || (_e.cleanups === null ? _e.cleanups = [e] : _e.cleanups.push(e)), e;
}
function Ix() {
  return Ne;
}
function Nc() {
  return _e;
}
function Bh(e, t) {
  const r = _e, n = Ne;
  _e = e, Ne = null;
  try {
    return Dt(t, !0);
  } catch (s) {
    Wa(s);
  } finally {
    _e = r, Ne = n;
  }
}
function Vh(e) {
  const t = Ne, r = _e;
  return Promise.resolve().then(() => {
    Ne = t, _e = r;
    let n;
    return Dt(e, !1), Ne = _e = null, n ? n.done : void 0;
  });
}
var [Wh, Mx] = /* @__PURE__ */ nt(!1);
function Dx() {
  return [Wh, Vh];
}
function Lx(e, t) {
  const r = Symbol("context");
  return {
    id: r,
    Provider: Yh(r),
    defaultValue: e
  };
}
function Fx(e) {
  return _e && _e.context && _e.context[e.id] !== void 0 ? _e.context[e.id] : e.defaultValue;
}
function xu(e) {
  const t = lt(e), r = lt(() => Jo(t()));
  return r.toArray = () => {
    const n = r();
    return Array.isArray(n) ? n : n != null ? [n] : [];
  }, r;
}
var qh;
function wu() {
  if (this.sources && this.state)
    if (this.state === tr)
      Fn(this);
    else {
      const e = Je;
      Je = null, Dt(() => di(this), !1), Je = e;
    }
  if (Ne) {
    const e = this.observers ? this.observers.length : 0;
    Ne.sources ? (Ne.sources.push(this), Ne.sourceSlots.push(e)) : (Ne.sources = [this], Ne.sourceSlots = [e]), this.observers ? (this.observers.push(Ne), this.observerSlots.push(Ne.sources.length - 1)) : (this.observers = [Ne], this.observerSlots = [Ne.sources.length - 1]);
  }
  return this.value;
}
function _u(e, t, r) {
  let n = e.value;
  return (!e.comparator || !e.comparator(n, t)) && (e.value = t, e.observers && e.observers.length && Dt(() => {
    for (let s = 0; s < e.observers.length; s += 1) {
      const i = e.observers[s], o = io && io.running;
      o && io.disposed.has(i), (o ? !i.tState : !i.state) && (i.pure ? Je.push(i) : Gt.push(i), i.observers && Eu(i)), o || (i.state = tr);
    }
    if (Je.length > 1e6)
      throw Je = [], new Error();
  }, !1)), t;
}
function Fn(e) {
  if (!e.fn)
    return;
  $i(e);
  const t = ji;
  Hh(
    e,
    e.value,
    t
  );
}
function Hh(e, t, r) {
  let n;
  const s = _e, i = Ne;
  Ne = _e = e;
  try {
    n = e.fn(t);
  } catch (o) {
    return e.pure && (e.state = tr, e.owned && e.owned.forEach($i), e.owned = null), e.updatedAt = r + 1, Wa(o);
  } finally {
    Ne = i, _e = s;
  }
  (!e.updatedAt || e.updatedAt <= r) && (e.updatedAt != null && "observers" in e ? _u(e, n) : e.value = n, e.updatedAt = r);
}
function Pi(e, t, r, n = tr, s) {
  const i = {
    fn: e,
    state: n,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: _e,
    context: _e ? _e.context : null,
    pure: r
  };
  return _e === null || _e !== gu && (_e.owned ? _e.owned.push(i) : _e.owned = [i]), i;
}
function ui(e) {
  if (e.state === 0)
    return;
  if (e.state === li)
    return di(e);
  if (e.suspense && Ke(e.suspense.inFallback))
    return e.suspense.effects.push(e);
  const t = [e];
  for (; (e = e.owner) && (!e.updatedAt || e.updatedAt < ji); )
    e.state && t.push(e);
  for (let r = t.length - 1; r >= 0; r--)
    if (e = t[r], e.state === tr)
      Fn(e);
    else if (e.state === li) {
      const n = Je;
      Je = null, Dt(() => di(e, t[0]), !1), Je = n;
    }
}
function Dt(e, t) {
  if (Je)
    return e();
  let r = !1;
  t || (Je = []), Gt ? r = !0 : Gt = [], ji++;
  try {
    const n = e();
    return Zh(r), n;
  } catch (n) {
    r || (Gt = null), Je = null, Wa(n);
  }
}
function Zh(e) {
  if (Je && (Su(Je), Je = null), e)
    return;
  const t = Gt;
  Gt = null, t.length && Dt(() => yu(t), !1);
}
function Su(e) {
  for (let t = 0; t < e.length; t++)
    ui(e[t]);
}
function Kh(e) {
  let t, r = 0;
  for (t = 0; t < e.length; t++) {
    const n = e[t];
    n.user ? e[r++] = n : ui(n);
  }
  if (ie.context) {
    if (ie.count) {
      ie.effects || (ie.effects = []), ie.effects.push(...e.slice(0, r));
      return;
    } else
      ie.effects && (e = [...ie.effects, ...e], r += ie.effects.length, delete ie.effects);
    Yn();
  }
  for (t = 0; t < r; t++)
    ui(e[t]);
}
function di(e, t) {
  e.state = 0;
  for (let r = 0; r < e.sources.length; r += 1) {
    const n = e.sources[r];
    if (n.sources) {
      const s = n.state;
      s === tr ? n !== t && (!n.updatedAt || n.updatedAt < ji) && ui(n) : s === li && di(n, t);
    }
  }
}
function Eu(e) {
  for (let t = 0; t < e.observers.length; t += 1) {
    const r = e.observers[t];
    r.state || (r.state = li, r.pure ? Je.push(r) : Gt.push(r), r.observers && Eu(r));
  }
}
function $i(e) {
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
      $i(e.owned[t]);
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--)
      e.cleanups[t]();
    e.cleanups = null;
  }
  e.state = 0;
}
function Ou(e) {
  return e instanceof Error ? e : new Error(typeof e == "string" ? e : "Unknown error", {
    cause: e
  });
}
function Wa(e, t = _e) {
  throw Ou(e);
}
function Jo(e) {
  if (typeof e == "function" && !e.length)
    return Jo(e());
  if (Array.isArray(e)) {
    const t = [];
    for (let r = 0; r < e.length; r++) {
      const n = Jo(e[r]);
      Array.isArray(n) ? t.push.apply(t, n) : t.push(n);
    }
    return t;
  }
  return e;
}
function Yh(e, t) {
  return function(n) {
    let s;
    return Fr(
      () => s = Ke(() => (_e.context = {
        ..._e.context,
        [e]: n.value
      }, xu(() => n.children))),
      void 0
    ), s;
  };
}
var Xo = Symbol("fallback");
function fi(e) {
  for (let t = 0; t < e.length; t++)
    e[t]();
}
function Gh(e, t, r = {}) {
  let n = [], s = [], i = [], o = 0, a = t.length > 1 ? [] : null;
  return ts(() => fi(i)), () => {
    let c = e() || [], l, u;
    return c[vu], Ke(() => {
      let h = c.length, m, y, p, v, _, O, w, E, x;
      if (h === 0)
        o !== 0 && (fi(i), i = [], n = [], s = [], o = 0, a && (a = [])), r.fallback && (n = [Xo], s[0] = Lr((A) => (i[0] = A, r.fallback())), o = 1);
      else if (o === 0) {
        for (s = new Array(h), u = 0; u < h; u++)
          n[u] = c[u], s[u] = Lr(d);
        o = h;
      } else {
        for (p = new Array(h), v = new Array(h), a && (_ = new Array(h)), O = 0, w = Math.min(o, h); O < w && n[O] === c[O]; O++)
          ;
        for (w = o - 1, E = h - 1; w >= O && E >= O && n[w] === c[E]; w--, E--)
          p[E] = s[w], v[E] = i[w], a && (_[E] = a[w]);
        for (m = /* @__PURE__ */ new Map(), y = new Array(E + 1), u = E; u >= O; u--)
          x = c[u], l = m.get(x), y[u] = l === void 0 ? -1 : l, m.set(x, u);
        for (l = O; l <= w; l++)
          x = n[l], u = m.get(x), u !== void 0 && u !== -1 ? (p[u] = s[l], v[u] = i[l], a && (_[u] = a[l]), u = y[u], m.set(x, u)) : i[l]();
        for (u = O; u < h; u++)
          u in p ? (s[u] = p[u], i[u] = v[u], a && (a[u] = _[u], a[u](u))) : s[u] = Lr(d);
        s = s.slice(0, o = h), n = c.slice(0);
      }
      return s;
    });
    function d(h) {
      if (i[u] = h, a) {
        const [m, y] = nt(u);
        return a[u] = y, t(c[u], m);
      }
      return t(c[u]);
    }
  };
}
function Qh(e, t, r = {}) {
  let n = [], s = [], i = [], o = [], a = 0, c;
  return ts(() => fi(i)), () => {
    const l = e() || [];
    return l[vu], Ke(() => {
      if (l.length === 0)
        return a !== 0 && (fi(i), i = [], n = [], s = [], a = 0, o = []), r.fallback && (n = [Xo], s[0] = Lr((d) => (i[0] = d, r.fallback())), a = 1), s;
      for (n[0] === Xo && (i[0](), i = [], n = [], s = [], a = 0), c = 0; c < l.length; c++)
        c < n.length && n[c] !== l[c] ? o[c](() => l[c]) : c >= n.length && (s[c] = Lr(u));
      for (; c < n.length; c++)
        i[c]();
      return a = o.length = i.length = l.length, n = l.slice(0), s = s.slice(0, a);
    });
    function u(d) {
      i[c] = d;
      const [h, m] = nt(l[c]);
      return o[c] = m, t(h, c);
    }
  };
}
function Jh(e, t) {
  return Ke(() => e(t || {}));
}
function $s() {
  return !0;
}
var ea = {
  get(e, t, r) {
    return t === ai ? r : e.get(t);
  },
  has(e, t) {
    return t === ai ? !0 : e.has(t);
  },
  set: $s,
  deleteProperty: $s,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: $s,
      deleteProperty: $s
    };
  },
  ownKeys(e) {
    return e.keys();
  }
};
function oo(e) {
  return (e = typeof e == "function" ? e() : e) ? e : {};
}
function Xh() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const r = this[e]();
    if (r !== void 0)
      return r;
  }
}
function ep(...e) {
  let t = !1;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    t = t || !!o && ai in o, e[i] = typeof o == "function" ? (t = !0, lt(o)) : o;
  }
  if (t)
    return new Proxy(
      {
        get(i) {
          for (let o = e.length - 1; o >= 0; o--) {
            const a = oo(e[o])[i];
            if (a !== void 0)
              return a;
          }
        },
        has(i) {
          for (let o = e.length - 1; o >= 0; o--)
            if (i in oo(e[o]))
              return !0;
          return !1;
        },
        keys() {
          const i = [];
          for (let o = 0; o < e.length; o++)
            i.push(...Object.keys(oo(e[o])));
          return [...new Set(i)];
        }
      },
      ea
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
          get: Xh.bind(n[u] = [d.get.bind(o)])
        })) : (d.value !== void 0 && s.add(u), r[u] = d.value);
      else {
        const h = n[u];
        h ? d.get ? h.push(d.get.bind(o)) : d.value !== void 0 && h.push(() => d.value) : r[u] === void 0 && (r[u] = d.value);
      }
    }
  }
  return r;
}
function tp(e, ...t) {
  if (ai in e) {
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
      ea
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
        ea
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
function rp(e) {
  let t, r;
  const n = (s) => {
    const i = ie.context;
    if (i) {
      const [a, c] = nt();
      ie.count || (ie.count = 0), ie.count++, (r || (r = e())).then((l) => {
        Yn(i), ie.count--, c(() => l.default), Yn();
      }), t = a;
    } else if (!t) {
      const [a] = Uh(() => (r || (r = e())).then((c) => c.default));
      t = a;
    }
    let o;
    return lt(
      () => (o = t()) && Ke(() => {
        if (!i)
          return o(s);
        const a = ie.context;
        Yn(i);
        const c = o(s);
        return Yn(a), c;
      })
    );
  };
  return n.preload = () => r || ((r = e()).then((s) => t = () => s.default), r), n;
}
var np = 0;
function Ux() {
  const e = ie.context;
  return e ? `${e.id}${e.count++}` : `cl-${np++}`;
}
var Cu = (e) => `Stale read from <${e}>.`;
function zx(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return lt(Gh(() => e.each, e.children, t || void 0));
}
function Bx(e) {
  const t = "fallback" in e && {
    fallback: () => e.fallback
  };
  return lt(Qh(() => e.each, e.children, t || void 0));
}
function Vx(e) {
  const t = e.keyed, r = lt(() => e.when, void 0, {
    equals: (n, s) => t ? n === s : !n == !s
  });
  return lt(
    () => {
      const n = r();
      if (n) {
        const s = e.children;
        return typeof s == "function" && s.length > 0 ? Ke(
          () => s(
            t ? n : () => {
              if (!Ke(r))
                throw Cu("Show");
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
function Wx(e) {
  let t = !1;
  const r = (i, o) => i[0] === o[0] && (t ? i[1] === o[1] : !i[1] == !o[1]) && i[2] === o[2], n = xu(() => e.children), s = lt(
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
  return lt(
    () => {
      const [i, o, a] = s();
      if (i < 0)
        return e.fallback;
      const c = a.children;
      return typeof c == "function" && c.length > 0 ? Ke(
        () => c(
          t ? o : () => {
            if (Ke(s)[0] !== i)
              throw Cu("Match");
            return a.when;
          }
        )
      ) : c;
    },
    void 0,
    void 0
  );
}
function qx(e) {
  return e;
}
var sp = [
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
], ip = /* @__PURE__ */ new Set([
  "className",
  "value",
  "readOnly",
  "formNoValidate",
  "isMap",
  "noModule",
  "playsInline",
  ...sp
]), op = /* @__PURE__ */ new Set([
  "innerHTML",
  "textContent",
  "innerText",
  "children"
]), ap = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
  className: "class",
  htmlFor: "for"
}), cp = /* @__PURE__ */ Object.assign(/* @__PURE__ */ Object.create(null), {
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
function lp(e, t) {
  const r = cp[e];
  return typeof r == "object" ? r[t] ? r.$ : void 0 : r;
}
var up = /* @__PURE__ */ new Set([
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
]), dp = /* @__PURE__ */ new Set([
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
]), fp = {
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace"
};
function hp(e, t, r) {
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
var jc = "_$DX_DELEGATE";
function pp(e, t, r, n = {}) {
  let s;
  return Lr((i) => {
    s = i, t === document ? e() : ra(t, e(), t.firstChild ? null : void 0, r);
  }, n.owner), () => {
    s(), t.textContent = "";
  };
}
function Hx(e, t, r) {
  let n;
  const s = () => {
    const o = document.createElement("template");
    return o.innerHTML = e, r ? o.content.firstChild.firstChild : o.content.firstChild;
  }, i = t ? () => Ke(() => document.importNode(n || (n = s()), !0)) : () => (n || (n = s())).cloneNode(!0);
  return i.cloneNode = i, i;
}
function mp(e, t = window.document) {
  const r = t[jc] || (t[jc] = /* @__PURE__ */ new Set());
  for (let n = 0, s = e.length; n < s; n++) {
    const i = e[n];
    r.has(i) || (r.add(i), t.addEventListener(i, Op));
  }
}
function ta(e, t, r) {
  ie.context || (r == null ? e.removeAttribute(t) : e.setAttribute(t, r));
}
function vp(e, t, r, n) {
  ie.context || (n == null ? e.removeAttributeNS(t, r) : e.setAttributeNS(t, r, n));
}
function yp(e, t) {
  ie.context || (t == null ? e.removeAttribute("class") : e.className = t);
}
function gp(e, t, r, n) {
  if (n)
    Array.isArray(r) ? (e[`$$${t}`] = r[0], e[`$$${t}Data`] = r[1]) : e[`$$${t}`] = r;
  else if (Array.isArray(r)) {
    const s = r[0];
    e.addEventListener(t, r[0] = (i) => s.call(e, r[1], i));
  } else
    e.addEventListener(t, r);
}
function bp(e, t, r = {}) {
  const n = Object.keys(t || {}), s = Object.keys(r);
  let i, o;
  for (i = 0, o = s.length; i < o; i++) {
    const a = s[i];
    !a || a === "undefined" || t[a] || (Pc(e, a, !1), delete r[a]);
  }
  for (i = 0, o = n.length; i < o; i++) {
    const a = n[i], c = !!t[a];
    !a || a === "undefined" || r[a] === c || !c || (Pc(e, a, !0), r[a] = c);
  }
  return r;
}
function xp(e, t, r) {
  if (!t)
    return r ? ta(e, "style") : t;
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
function wp(e, t = {}, r, n) {
  const s = {};
  return n || Fr(
    () => s.children = Tn(e, t.children, s.children)
  ), Fr(() => t.ref && t.ref(e)), Fr(() => _p(e, t, r, !0, s, !0)), s;
}
function Zx(e, t, r) {
  return Ke(() => e(t, r));
}
function ra(e, t, r, n) {
  if (r !== void 0 && !n && (n = []), typeof t != "function")
    return Tn(e, t, n, r);
  Fr((s) => Tn(e, t(), s, r), n);
}
function _p(e, t, r, n, s = {}, i = !1) {
  t || (t = {});
  for (const o in s)
    if (!(o in t)) {
      if (o === "children")
        continue;
      s[o] = $c(e, o, null, s[o], r, i);
    }
  for (const o in t) {
    if (o === "children") {
      n || Tn(e, t.children);
      continue;
    }
    const a = t[o];
    s[o] = $c(e, o, a, s[o], r, i);
  }
}
function Sp(e) {
  let t, r;
  return !ie.context || !(t = ie.registry.get(r = Cp())) ? e() : (ie.completed && ie.completed.add(t), ie.registry.delete(r), t);
}
function Ep(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, r) => r.toUpperCase());
}
function Pc(e, t, r) {
  const n = t.trim().split(/\s+/);
  for (let s = 0, i = n.length; s < i; s++)
    e.classList.toggle(n[s], r);
}
function $c(e, t, r, n, s, i) {
  let o, a, c, l, u;
  if (t === "style")
    return xp(e, r, n);
  if (t === "classList")
    return bp(e, r, n);
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
    const d = t.slice(2).toLowerCase(), h = up.has(d);
    if (!h && n) {
      const m = Array.isArray(n) ? n[0] : n;
      e.removeEventListener(d, m);
    }
    (h || r) && (gp(e, d, r, h), h && mp([d]));
  } else if (t.slice(0, 5) === "attr:")
    ta(e, t.slice(5), r);
  else if ((u = t.slice(0, 5) === "prop:") || (c = op.has(t)) || !s && ((l = lp(t, e.tagName)) || (a = ip.has(t))) || (o = e.nodeName.includes("-"))) {
    if (u)
      t = t.slice(5), a = !0;
    else if (ie.context)
      return r;
    t === "class" || t === "className" ? yp(e, r) : o && !a && !c ? e[Ep(t)] = r : e[l || t] = r;
  } else {
    const d = s && t.indexOf(":") > -1 && fp[t.split(":")[0]];
    d ? vp(e, d, t, r) : ta(e, ap[t] || t, r);
  }
  return r;
}
function Op(e) {
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
  }), ie.registry && !ie.done && (ie.done = _$HY.done = !0); r; ) {
    const n = r[t];
    if (n && !r.disabled) {
      const s = r[`${t}Data`];
      if (s !== void 0 ? n.call(r, s, e) : n.call(r, e), e.cancelBubble)
        return;
    }
    r = r._$host || r.parentNode || r.host;
  }
}
function Tn(e, t, r, n, s) {
  if (ie.context) {
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
    if (ie.context)
      return r;
    if (i === "number" && (t = t.toString()), o) {
      let a = r[0];
      a && a.nodeType === 3 ? a.data = t : a = document.createTextNode(t), r = Hr(e, r, n, a);
    } else
      r !== "" && typeof r == "string" ? r = e.firstChild.data = t : r = e.textContent = t;
  } else if (t == null || i === "boolean") {
    if (ie.context)
      return r;
    r = Hr(e, r, n);
  } else {
    if (i === "function")
      return Fr(() => {
        let a = t();
        for (; typeof a == "function"; )
          a = a();
        r = Tn(e, a, r, n);
      }), () => r;
    if (Array.isArray(t)) {
      const a = [], c = r && Array.isArray(r);
      if (na(a, t, r, s))
        return Fr(() => r = Tn(e, a, r, n, !0)), () => r;
      if (ie.context) {
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
        c ? r.length === 0 ? kc(e, a, n) : hp(e, r, a) : (r && Hr(e), kc(e, a));
      r = a;
    } else if (t.nodeType) {
      if (ie.context && t.parentNode)
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
function na(e, t, r, n) {
  let s = !1;
  for (let i = 0, o = t.length; i < o; i++) {
    let a = t[i], c = r && r[i], l;
    if (!(a == null || a === !0 || a === !1))
      if ((l = typeof a) == "object" && a.nodeType)
        e.push(a);
      else if (Array.isArray(a))
        s = na(e, a, c) || s;
      else if (l === "function")
        if (n) {
          for (; typeof a == "function"; )
            a = a();
          s = na(
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
function kc(e, t, r = null) {
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
function Cp() {
  const e = ie.context;
  return `${e.id}${e.count++}`;
}
var Tp = "http://www.w3.org/2000/svg";
function Tu(e, t = !1) {
  return t ? document.createElementNS(Tp, e) : document.createElement(e);
}
function Kx(e) {
  const { useShadow: t } = e, r = document.createTextNode(""), n = () => e.mount || document.body, s = Nc();
  let i, o = !!ie.context;
  return bu(
    () => {
      o && (Nc().user = o = !1), i || (i = Bh(s, () => lt(() => e.children)));
      const a = n();
      if (a instanceof HTMLHeadElement) {
        const [c, l] = nt(!1), u = () => l(!0);
        Lr((d) => ra(a, () => c() ? d() : i(), null)), ts(u);
      } else {
        const c = Tu(e.isSVG ? "g" : "div", e.isSVG), l = t && c.attachShadow ? c.attachShadow({
          mode: "open"
        }) : c;
        Object.defineProperty(c, "_$host", {
          get() {
            return r.parentNode;
          },
          configurable: !0
        }), ra(l, i), a.appendChild(c), e.ref && e.ref(c), ts(() => a.removeChild(c));
      }
    },
    void 0,
    {
      render: !o
    }
  ), r;
}
function Yx(e) {
  const [t, r] = tp(e, ["component"]), n = lt(() => t.component);
  return lt(() => {
    const s = n();
    switch (typeof s) {
      case "function":
        return Ke(() => s(r));
      case "string":
        const i = dp.has(s), o = ie.context ? Sp() : Tu(s, i);
        return wp(o, r, i), o;
    }
  });
}
var Rp = (
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
), Ru = (
  /** @class */
  function() {
    function e(t) {
      this.generateIdentifier = t, this.kv = new Rp();
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
), Ap = /* @__PURE__ */ function() {
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
}(), Np = (
  /** @class */
  function(e) {
    Ap(t, e);
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
  }(Ru)
), jp = function(e, t) {
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
function Pp(e) {
  if ("values" in Object)
    return Object.values(e);
  var t = [];
  for (var r in e)
    e.hasOwnProperty(r) && t.push(e[r]);
  return t;
}
function $p(e, t) {
  var r = Pp(e);
  if ("find" in r)
    return r.find(t);
  for (var n = r, s = 0; s < n.length; s++) {
    var i = n[s];
    if (t(i))
      return i;
  }
}
function Rn(e, t) {
  Object.entries(e).forEach(function(r) {
    var n = jp(r, 2), s = n[0], i = n[1];
    return t(i, s);
  });
}
function Qs(e, t) {
  return e.indexOf(t) !== -1;
}
function Ic(e, t) {
  for (var r = 0; r < e.length; r++) {
    var n = e[r];
    if (t(n))
      return n;
  }
}
var kp = (
  /** @class */
  function() {
    function e() {
      this.transfomers = {};
    }
    return e.prototype.register = function(t) {
      this.transfomers[t.name] = t;
    }, e.prototype.findApplicable = function(t) {
      return $p(this.transfomers, function(r) {
        return r.isApplicable(t);
      });
    }, e.prototype.findByName = function(t) {
      return this.transfomers[t];
    }, e;
  }()
), Ip = function(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}, Au = function(e) {
  return typeof e > "u";
}, Mp = function(e) {
  return e === null;
}, rs = function(e) {
  return typeof e != "object" || e === null || e === Object.prototype ? !1 : Object.getPrototypeOf(e) === null ? !0 : Object.getPrototypeOf(e) === Object.prototype;
}, sa = function(e) {
  return rs(e) && Object.keys(e).length === 0;
}, xr = function(e) {
  return Array.isArray(e);
}, Dp = function(e) {
  return typeof e == "string";
}, Lp = function(e) {
  return typeof e == "number" && !isNaN(e);
}, Fp = function(e) {
  return typeof e == "boolean";
}, Up = function(e) {
  return e instanceof RegExp;
}, ns = function(e) {
  return e instanceof Map;
}, ss = function(e) {
  return e instanceof Set;
}, Nu = function(e) {
  return Ip(e) === "Symbol";
}, zp = function(e) {
  return e instanceof Date && !isNaN(e.valueOf());
}, Bp = function(e) {
  return e instanceof Error;
}, Mc = function(e) {
  return typeof e == "number" && isNaN(e);
}, Vp = function(e) {
  return Fp(e) || Mp(e) || Au(e) || Lp(e) || Dp(e) || Nu(e);
}, Wp = function(e) {
  return typeof e == "bigint";
}, qp = function(e) {
  return e === 1 / 0 || e === -1 / 0;
}, Hp = function(e) {
  return ArrayBuffer.isView(e) && !(e instanceof DataView);
}, Zp = function(e) {
  return e instanceof URL;
}, ju = function(e) {
  return e.replace(/\./g, "\\.");
}, ao = function(e) {
  return e.map(String).map(ju).join(".");
}, Qn = function(e) {
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
}, ia = function() {
  return ia = Object.assign || function(e) {
    for (var t, r = 1, n = arguments.length; r < n; r++) {
      t = arguments[r];
      for (var s in t)
        Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
    }
    return e;
  }, ia.apply(this, arguments);
}, oa = function(e, t) {
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
}, aa = function(e, t) {
  for (var r = 0, n = t.length, s = e.length; r < n; r++, s++)
    e[s] = t[r];
  return e;
};
function Ct(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var Pu = [
  Ct(Au, "undefined", function() {
    return null;
  }, function() {
  }),
  Ct(Wp, "bigint", function(e) {
    return e.toString();
  }, function(e) {
    return typeof BigInt < "u" ? BigInt(e) : e;
  }),
  Ct(zp, "Date", function(e) {
    return e.toISOString();
  }, function(e) {
    return new Date(e);
  }),
  Ct(Bp, "Error", function(e, t) {
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
  Ct(Up, "regexp", function(e) {
    return "" + e;
  }, function(e) {
    var t = e.slice(1, e.lastIndexOf("/")), r = e.slice(e.lastIndexOf("/") + 1);
    return new RegExp(t, r);
  }),
  Ct(
    ss,
    "set",
    // (sets only exist in es6+)
    // eslint-disable-next-line es5/no-es6-methods
    function(e) {
      return aa([], oa(e.values()));
    },
    function(e) {
      return new Set(e);
    }
  ),
  Ct(ns, "map", function(e) {
    return aa([], oa(e.entries()));
  }, function(e) {
    return new Map(e);
  }),
  Ct(function(e) {
    return Mc(e) || qp(e);
  }, "number", function(e) {
    return Mc(e) ? "NaN" : e > 0 ? "Infinity" : "-Infinity";
  }, Number),
  Ct(function(e) {
    return e === 0 && 1 / e === -1 / 0;
  }, "number", function() {
    return "-0";
  }, Number),
  Ct(Zp, "URL", function(e) {
    return e.toString();
  }, function(e) {
    return new URL(e);
  })
];
function ki(e, t, r, n) {
  return {
    isApplicable: e,
    annotation: t,
    transform: r,
    untransform: n
  };
}
var $u = ki(function(e, t) {
  if (Nu(e)) {
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
}), Kp = [
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
}, {}), ku = ki(Hp, function(e) {
  return ["typed-array", e.constructor.name];
}, function(e) {
  return aa([], oa(e));
}, function(e, t) {
  var r = Kp[t[1]];
  if (!r)
    throw new Error("Trying to deserialize unknown typed array");
  return new r(e);
});
function Iu(e, t) {
  if (e != null && e.constructor) {
    var r = !!t.classRegistry.getIdentifier(e.constructor);
    return r;
  }
  return !1;
}
var Mu = ki(Iu, function(e, t) {
  var r = t.classRegistry.getIdentifier(e.constructor);
  return ["class", r];
}, function(e, t) {
  var r = t.classRegistry.getAllowedProps(e.constructor);
  if (!r)
    return ia({}, e);
  var n = {};
  return r.forEach(function(s) {
    n[s] = e[s];
  }), n;
}, function(e, t, r) {
  var n = r.classRegistry.getValue(t[1]);
  if (!n)
    throw new Error("Trying to deserialize unknown class - check https://github.com/blitz-js/superjson/issues/116#issuecomment-773996564");
  return Object.assign(Object.create(n.prototype), e);
}), Du = ki(function(e, t) {
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
}), Yp = [Mu, $u, Du, ku], Dc = function(e, t) {
  var r = Ic(Yp, function(s) {
    return s.isApplicable(e, t);
  });
  if (r)
    return {
      value: r.transform(e, t),
      type: r.annotation(e, t)
    };
  var n = Ic(Pu, function(s) {
    return s.isApplicable(e, t);
  });
  if (n)
    return {
      value: n.transform(e, t),
      type: n.annotation
    };
}, Lu = {};
Pu.forEach(function(e) {
  Lu[e.annotation] = e;
});
var Gp = function(e, t, r) {
  if (xr(t))
    switch (t[0]) {
      case "symbol":
        return $u.untransform(e, t, r);
      case "class":
        return Mu.untransform(e, t, r);
      case "custom":
        return Du.untransform(e, t, r);
      case "typed-array":
        return ku.untransform(e, t, r);
      default:
        throw new Error("Unknown transformation: " + t);
    }
  else {
    var n = Lu[t];
    if (!n)
      throw new Error("Unknown transformation: " + t);
    return n.untransform(e, r);
  }
}, Qr = function(e, t) {
  for (var r = e.keys(); t > 0; )
    r.next(), t--;
  return r.next().value;
};
function Fu(e) {
  if (Qs(e, "__proto__"))
    throw new Error("__proto__ is not allowed as a property");
  if (Qs(e, "prototype"))
    throw new Error("prototype is not allowed as a property");
  if (Qs(e, "constructor"))
    throw new Error("constructor is not allowed as a property");
}
var Qp = function(e, t) {
  Fu(t);
  for (var r = 0; r < t.length; r++) {
    var n = t[r];
    if (ss(e))
      e = Qr(e, +n);
    else if (ns(e)) {
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
}, ca = function(e, t, r) {
  if (Fu(t), t.length === 0)
    return r(e);
  for (var n = e, s = 0; s < t.length - 1; s++) {
    var i = t[s];
    if (xr(n)) {
      var o = +i;
      n = n[o];
    } else if (rs(n))
      n = n[i];
    else if (ss(n)) {
      var a = +i;
      n = Qr(n, a);
    } else if (ns(n)) {
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
  if (xr(n) ? n[+d] = r(n[+d]) : rs(n) && (n[d] = r(n[d])), ss(n)) {
    var h = Qr(n, +d), m = r(h);
    h !== m && (n.delete(h), n.add(m));
  }
  if (ns(n)) {
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
}, Ht = function(e, t) {
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
function la(e, t, r) {
  if (r === void 0 && (r = []), !!e) {
    if (!xr(e)) {
      Rn(e, function(o, a) {
        return la(o, t, yr(yr([], Ht(r)), Ht(Qn(a))));
      });
      return;
    }
    var n = Ht(e, 2), s = n[0], i = n[1];
    i && Rn(i, function(o, a) {
      la(o, t, yr(yr([], Ht(r)), Ht(Qn(a))));
    }), t(s, r);
  }
}
function Jp(e, t, r) {
  return la(t, function(n, s) {
    e = ca(e, s, function(i) {
      return Gp(i, n, r);
    });
  }), e;
}
function Xp(e, t) {
  function r(o, a) {
    var c = Qp(e, Qn(a));
    o.map(Qn).forEach(function(l) {
      e = ca(e, l, function() {
        return c;
      });
    });
  }
  if (xr(t)) {
    var n = Ht(t, 2), s = n[0], i = n[1];
    s.forEach(function(o) {
      e = ca(e, Qn(o), function() {
        return e;
      });
    }), i && Rn(i, r);
  } else
    Rn(t, r);
  return e;
}
var em = function(e, t) {
  return rs(e) || xr(e) || ns(e) || ss(e) || Iu(e, t);
};
function tm(e, t, r) {
  var n = r.get(e);
  n ? n.push(t) : r.set(e, [t]);
}
function rm(e, t) {
  var r = {}, n = void 0;
  return e.forEach(function(s) {
    if (!(s.length <= 1)) {
      t || (s = s.map(function(c) {
        return c.map(String);
      }).sort(function(c, l) {
        return c.length - l.length;
      }));
      var i = Ht(s), o = i[0], a = i.slice(1);
      o.length === 0 ? n = a.map(ao) : r[ao(o)] = a.map(ao);
    }
  }), n ? sa(r) ? [n] : [n, r] : sa(r) ? void 0 : r;
}
var Uu = function(e, t, r, n, s, i, o) {
  var a;
  s === void 0 && (s = []), i === void 0 && (i = []), o === void 0 && (o = /* @__PURE__ */ new Map());
  var c = Vp(e);
  if (!c) {
    tm(e, s, t);
    var l = o.get(e);
    if (l)
      return n ? {
        transformedValue: null
      } : l;
  }
  if (!em(e, r)) {
    var u = Dc(e, r), d = u ? {
      transformedValue: u.value,
      annotations: [u.type]
    } : {
      transformedValue: e
    };
    return c || o.set(e, d), d;
  }
  if (Qs(i, e))
    return {
      transformedValue: null
    };
  var h = Dc(e, r), m = (a = h == null ? void 0 : h.value) !== null && a !== void 0 ? a : e, y = xr(m) ? [] : {}, p = {};
  Rn(m, function(_, O) {
    var w = Uu(_, t, r, n, yr(yr([], Ht(s)), [O]), yr(yr([], Ht(i)), [e]), o);
    y[O] = w.transformedValue, xr(w.annotations) ? p[O] = w.annotations : rs(w.annotations) && Rn(w.annotations, function(E, x) {
      p[ju(O) + "." + x] = E;
    });
  });
  var v = sa(p) ? {
    transformedValue: y,
    annotations: h ? [h.type] : void 0
  } : {
    transformedValue: y,
    annotations: h ? [h.type, p] : p
  };
  return c || o.set(e, v), v;
};
function zu(e) {
  return Object.prototype.toString.call(e).slice(8, -1);
}
function nm(e) {
  if (zu(e) !== "Object")
    return !1;
  const t = Object.getPrototypeOf(e);
  return !!t && t.constructor === Object && t === Object.prototype;
}
function Lc(e) {
  return zu(e) === "Array";
}
function sm(e, t, r, n, s) {
  const i = {}.propertyIsEnumerable.call(n, t) ? "enumerable" : "nonenumerable";
  i === "enumerable" && (e[t] = r), s && i === "nonenumerable" && Object.defineProperty(e, t, {
    value: r,
    enumerable: !1,
    writable: !0,
    configurable: !0
  });
}
function ua(e, t = {}) {
  if (Lc(e))
    return e.map((s) => ua(s, t));
  if (!nm(e))
    return e;
  const r = Object.getOwnPropertyNames(e), n = Object.getOwnPropertySymbols(e);
  return [...r, ...n].reduce((s, i) => {
    if (Lc(t.props) && !t.props.includes(i))
      return s;
    const o = e[i], a = ua(o, t);
    return sm(s, i, a, e, t.nonenumerable), s;
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
}, im = function(e, t) {
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
}, om = function(e, t) {
  for (var r = 0, n = t.length, s = e.length; r < n; r++, s++)
    e[s] = t[r];
  return e;
}, Bu = (
  /** @class */
  function() {
    function e(t) {
      var r = t === void 0 ? {} : t, n = r.dedupe, s = n === void 0 ? !1 : n;
      this.classRegistry = new Np(), this.symbolRegistry = new Ru(function(i) {
        var o;
        return (o = i.description) !== null && o !== void 0 ? o : "";
      }), this.customTransformerRegistry = new kp(), this.allowedErrorProps = [], this.dedupe = s;
    }
    return e.prototype.serialize = function(t) {
      var r = /* @__PURE__ */ new Map(), n = Uu(t, r, this, this.dedupe), s = {
        json: n.transformedValue
      };
      n.annotations && (s.meta = Or(Or({}, s.meta), { values: n.annotations }));
      var i = rm(r, this.dedupe);
      return i && (s.meta = Or(Or({}, s.meta), { referentialEqualities: i })), s;
    }, e.prototype.deserialize = function(t) {
      var r = t.json, n = t.meta, s = ua(r);
      return n != null && n.values && (s = Jp(s, n.values, this)), n != null && n.referentialEqualities && (s = Xp(s, n.referentialEqualities)), s;
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
      (t = this.allowedErrorProps).push.apply(t, om([], im(r)));
    }, e.defaultInstance = new e(), e.serialize = e.defaultInstance.serialize.bind(e.defaultInstance), e.deserialize = e.defaultInstance.deserialize.bind(e.defaultInstance), e.stringify = e.defaultInstance.stringify.bind(e.defaultInstance), e.parse = e.defaultInstance.parse.bind(e.defaultInstance), e.registerClass = e.defaultInstance.registerClass.bind(e.defaultInstance), e.registerSymbol = e.defaultInstance.registerSymbol.bind(e.defaultInstance), e.registerCustom = e.defaultInstance.registerCustom.bind(e.defaultInstance), e.allowErrorProps = e.defaultInstance.allowErrorProps.bind(e.defaultInstance), e;
  }()
), am = Bu.serialize, Gx = Bu.stringify;
function Qx(e) {
  return e.state.fetchStatus === "fetching" ? "fetching" : e.getObserversCount() ? e.state.fetchStatus === "paused" ? "paused" : e.isStale() ? "stale" : "fresh" : "inactive";
}
function Jx(e, t) {
  return `${e}${t.charAt(0).toUpperCase() + t.slice(1)}`;
}
function Xx({
  queryState: e,
  observerCount: t,
  isStale: r
}) {
  return e.fetchStatus === "fetching" ? "blue" : t ? e.fetchStatus === "paused" ? "purple" : r ? "yellow" : "green" : "gray";
}
function ew({
  status: e,
  isPaused: t
}) {
  return t ? "purple" : e === "error" ? "red" : e === "pending" ? "yellow" : e === "success" ? "green" : "gray";
}
function tw(e) {
  return e === "fresh" ? "green" : e === "stale" ? "yellow" : e === "paused" ? "purple" : e === "inactive" ? "gray" : "blue";
}
var rw = (e, t = !1) => {
  const {
    json: r
  } = am(e);
  return JSON.stringify(r, null, t ? 2 : void 0);
}, ks = (e) => e.state.fetchStatus !== "idle" ? 0 : e.getObserversCount() ? e.isStale() ? 2 : 1 : 3, cm = (e, t) => e.queryHash.localeCompare(t.queryHash), Vu = (e, t) => e.state.dataUpdatedAt < t.state.dataUpdatedAt ? 1 : -1, lm = (e, t) => ks(e) === ks(t) ? Vu(e, t) : ks(e) > ks(t) ? 1 : -1, nw = {
  status: lm,
  "query hash": cm,
  "last updated": Vu
}, Is = (e) => e.state.isPaused ? 0 : e.state.status === "error" ? 2 : e.state.status === "pending" ? 1 : 3, Wu = (e, t) => e.state.submittedAt < t.state.submittedAt ? 1 : -1, um = (e, t) => Is(e) === Is(t) ? Wu(e, t) : Is(e) > Is(t) ? 1 : -1, sw = {
  status: um,
  "last updated": Wu
}, iw = (e) => e * parseFloat(getComputedStyle(document.documentElement).fontSize), ow = () => {
  const [e, t] = nt("dark");
  return zh(() => {
    const r = window.matchMedia("(prefers-color-scheme: dark)");
    t(r.matches ? "dark" : "light");
    const n = (s) => {
      t(s.matches ? "dark" : "light");
    };
    r.addEventListener("change", n), ts(() => r.removeEventListener("change", n));
  }), e;
}, Ms = (e, t, r) => {
  if (t.length === 0)
    return r;
  if (e instanceof Map) {
    const n = new Map(e);
    if (t.length === 1)
      return n.set(t[0], r), n;
    const [s, ...i] = t;
    return n.set(s, Ms(n.get(s), i, r)), n;
  }
  if (e instanceof Set) {
    const n = Ms(Array.from(e), t, r);
    return new Set(n);
  }
  if (Array.isArray(e)) {
    const n = [...e];
    if (t.length === 1)
      return n[t[0]] = r, n;
    const [s, ...i] = t;
    return n[s] = Ms(n[s], i, r), n;
  }
  if (e instanceof Object) {
    const n = {
      ...e
    };
    if (t.length === 1)
      return n[t[0]] = r, n;
    const [s, ...i] = t;
    return n[s] = Ms(n[s], i, r), n;
  }
  return e;
}, Ds = (e, t) => {
  if (e instanceof Map) {
    const r = new Map(e);
    if (t.length === 1)
      return r.delete(t[0]), r;
    const [n, ...s] = t;
    return r.set(n, Ds(r.get(n), s)), r;
  }
  if (e instanceof Set) {
    const r = Ds(Array.from(e), t);
    return new Set(r);
  }
  if (Array.isArray(e)) {
    const r = [...e];
    if (t.length === 1)
      return r.filter((i, o) => o.toString() !== t[0]);
    const [n, ...s] = t;
    return r[n] = Ds(r[n], s), r;
  }
  if (e instanceof Object) {
    const r = {
      ...e
    };
    if (t.length === 1)
      return delete r[t[0]], r;
    const [n, ...s] = t;
    return r[n] = Ds(r[n], s), r;
  }
  return e;
}, dm = (e) => {
  if (!e || document.querySelector("#_goober"))
    return;
  const r = document.createElement("style"), n = document.createTextNode("");
  r.appendChild(n), r.id = "_goober", r.setAttribute("nonce", e), document.head.appendChild(r);
}, gn, Es, Os, Cs, Mr, Ts, bn, xn, wn, _n, Sn, Rs, ru, fm = (ru = class {
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
    D(this, _n, void 0);
    D(this, Sn, void 0);
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
    P(this, gn, nt(t)), P(this, Os, r), P(this, Cs, n), P(this, Es, s), P(this, Ts, l), P(this, bn, nt(i)), P(this, xn, nt(o)), P(this, wn, nt(a)), P(this, _n, nt(c));
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
    g(this, _n)[1](e);
  }
  setClient(e) {
    g(this, gn)[1](e);
  }
  mount(e) {
    if (g(this, Mr))
      throw new Error("Devtools is already mounted");
    const t = pp(() => {
      const [r] = g(this, bn), [n] = g(this, xn), [s] = g(this, wn), [i] = g(this, _n), [o] = g(this, gn);
      let a;
      g(this, Sn) ? a = g(this, Sn) : (a = rp(() => import("./BSBCIQID-b2XlgNmT.js")), P(this, Sn, a)), dm(g(this, Ts));
      const c = this;
      return Jh(a, ep({
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
}, gn = new WeakMap(), Es = new WeakMap(), Os = new WeakMap(), Cs = new WeakMap(), Mr = new WeakMap(), Ts = new WeakMap(), bn = new WeakMap(), xn = new WeakMap(), wn = new WeakMap(), _n = new WeakMap(), Sn = new WeakMap(), Rs = new WeakMap(), ru);
function hm(e) {
  const t = Ln(), r = e.client || t, n = $.useRef(null), { buttonPosition: s, position: i, initialIsOpen: o, errorTypes: a, styleNonce: c } = e, [l] = $.useState(
    new fm({
      client: r,
      queryFlavor: "React Query",
      version: "5",
      onlineManager: es,
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
var pm = process.env.NODE_ENV !== "development" ? function() {
  return null;
} : hm;
const qu = Jt(void 0), mm = ({ children: e, ...t }) => /* @__PURE__ */ f.jsx(qu.Provider, { value: t, children: e }), is = () => {
  const e = _r(qu);
  if (!e)
    throw new Error("useAppContext must be used within an AppProvider");
  return e;
};
function Hu(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: vm } = Object.prototype, { getPrototypeOf: qa } = Object, Ii = /* @__PURE__ */ ((e) => (t) => {
  const r = vm.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), Ft = (e) => (e = e.toLowerCase(), (t) => Ii(t) === e), Mi = (e) => (t) => typeof t === e, { isArray: Un } = Array, os = Mi("undefined");
function ym(e) {
  return e !== null && !os(e) && e.constructor !== null && !os(e.constructor) && gt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const Zu = Ft("ArrayBuffer");
function gm(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && Zu(e.buffer), t;
}
const bm = Mi("string"), gt = Mi("function"), Ku = Mi("number"), Di = (e) => e !== null && typeof e == "object", xm = (e) => e === !0 || e === !1, Js = (e) => {
  if (Ii(e) !== "object")
    return !1;
  const t = qa(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, wm = Ft("Date"), _m = Ft("File"), Sm = Ft("Blob"), Em = Ft("FileList"), Om = (e) => Di(e) && gt(e.pipe), Cm = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || gt(e.append) && ((t = Ii(e)) === "formdata" || // detect form-data instance
  t === "object" && gt(e.toString) && e.toString() === "[object FormData]"));
}, Tm = Ft("URLSearchParams"), Rm = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function As(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Un(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const i = r ? Object.getOwnPropertyNames(e) : Object.keys(e), o = i.length;
    let a;
    for (n = 0; n < o; n++)
      a = i[n], t.call(null, e[a], a, e);
  }
}
function Yu(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const Gu = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Qu = (e) => !os(e) && e !== Gu;
function da() {
  const { caseless: e } = Qu(this) && this || {}, t = {}, r = (n, s) => {
    const i = e && Yu(t, s) || s;
    Js(t[i]) && Js(n) ? t[i] = da(t[i], n) : Js(n) ? t[i] = da({}, n) : Un(n) ? t[i] = n.slice() : t[i] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && As(arguments[n], r);
  return t;
}
const Am = (e, t, r, { allOwnKeys: n } = {}) => (As(t, (s, i) => {
  r && gt(s) ? e[i] = Hu(s, r) : e[i] = s;
}, { allOwnKeys: n }), e), Nm = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jm = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, Pm = (e, t, r, n) => {
  let s, i, o;
  const a = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), i = s.length; i-- > 0; )
      o = s[i], (!n || n(o, e, t)) && !a[o] && (t[o] = e[o], a[o] = !0);
    e = r !== !1 && qa(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, $m = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, km = (e) => {
  if (!e)
    return null;
  if (Un(e))
    return e;
  let t = e.length;
  if (!Ku(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Im = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && qa(Uint8Array)), Mm = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const i = s.value;
    t.call(e, i[0], i[1]);
  }
}, Dm = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Lm = Ft("HTMLFormElement"), Fm = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), Fc = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Um = Ft("RegExp"), Ju = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  As(r, (s, i) => {
    let o;
    (o = t(s, i, e)) !== !1 && (n[i] = o || s);
  }), Object.defineProperties(e, n);
}, zm = (e) => {
  Ju(e, (t, r) => {
    if (gt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (gt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Bm = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((i) => {
      r[i] = !0;
    });
  };
  return Un(e) ? n(e) : n(String(e).split(t)), r;
}, Vm = () => {
}, Wm = (e, t) => (e = +e, Number.isFinite(e) ? e : t), co = "abcdefghijklmnopqrstuvwxyz", Uc = "0123456789", Xu = {
  DIGIT: Uc,
  ALPHA: co,
  ALPHA_DIGIT: co + co.toUpperCase() + Uc
}, qm = (e = 16, t = Xu.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Hm(e) {
  return !!(e && gt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Zm = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Di(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const i = Un(n) ? [] : {};
        return As(n, (o, a) => {
          const c = r(o, s + 1);
          !os(c) && (i[a] = c);
        }), t[s] = void 0, i;
      }
    }
    return n;
  };
  return r(e, 0);
}, Km = Ft("AsyncFunction"), Ym = (e) => e && (Di(e) || gt(e)) && gt(e.then) && gt(e.catch), C = {
  isArray: Un,
  isArrayBuffer: Zu,
  isBuffer: ym,
  isFormData: Cm,
  isArrayBufferView: gm,
  isString: bm,
  isNumber: Ku,
  isBoolean: xm,
  isObject: Di,
  isPlainObject: Js,
  isUndefined: os,
  isDate: wm,
  isFile: _m,
  isBlob: Sm,
  isRegExp: Um,
  isFunction: gt,
  isStream: Om,
  isURLSearchParams: Tm,
  isTypedArray: Im,
  isFileList: Em,
  forEach: As,
  merge: da,
  extend: Am,
  trim: Rm,
  stripBOM: Nm,
  inherits: jm,
  toFlatObject: Pm,
  kindOf: Ii,
  kindOfTest: Ft,
  endsWith: $m,
  toArray: km,
  forEachEntry: Mm,
  matchAll: Dm,
  isHTMLForm: Lm,
  hasOwnProperty: Fc,
  hasOwnProp: Fc,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ju,
  freezeMethods: zm,
  toObjectSet: Bm,
  toCamelCase: Fm,
  noop: Vm,
  toFiniteNumber: Wm,
  findKey: Yu,
  global: Gu,
  isContextDefined: Qu,
  ALPHABET: Xu,
  generateString: qm,
  isSpecCompliantForm: Hm,
  toJSONObject: Zm,
  isAsyncFn: Km,
  isThenable: Ym
};
function xe(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
C.inherits(xe, Error, {
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
const ed = xe.prototype, td = {};
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
  td[e] = { value: e };
});
Object.defineProperties(xe, td);
Object.defineProperty(ed, "isAxiosError", { value: !0 });
xe.from = (e, t, r, n, s, i) => {
  const o = Object.create(ed);
  return C.toFlatObject(e, o, function(c) {
    return c !== Error.prototype;
  }, (a) => a !== "isAxiosError"), xe.call(o, e.message, t, r, n, s), o.cause = e, o.name = e.name, i && Object.assign(o, i), o;
};
const Gm = null;
function fa(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function rd(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function zc(e, t, r) {
  return e ? e.concat(t).map(function(s, i) {
    return s = rd(s), !r && i ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Qm(e) {
  return C.isArray(e) && !e.some(fa);
}
const Jm = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Li(e, t, r) {
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
      throw new xe("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(y) || C.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, p, v) {
    let _ = y;
    if (y && !v && typeof y == "object") {
      if (C.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), y = JSON.stringify(y);
      else if (C.isArray(y) && Qm(y) || (C.isFileList(y) || C.endsWith(p, "[]")) && (_ = C.toArray(y)))
        return p = rd(p), _.forEach(function(w, E) {
          !(C.isUndefined(w) || w === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            o === !0 ? zc([p], E, i) : o === null ? p : p + "[]",
            l(w)
          );
        }), !1;
    }
    return fa(y) ? !0 : (t.append(zc(v, p, i), l(y)), !1);
  }
  const d = [], h = Object.assign(Jm, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: fa
  });
  function m(y, p) {
    if (!C.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(y), C.forEach(y, function(_, O) {
        (!(C.isUndefined(_) || _ === null) && s.call(
          t,
          _,
          C.isString(O) ? O.trim() : O,
          p,
          h
        )) === !0 && m(_, p ? p.concat(O) : [O]);
      }), d.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return m(e), t;
}
function Bc(e) {
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
function Ha(e, t) {
  this._pairs = [], e && Li(e, this, t);
}
const nd = Ha.prototype;
nd.append = function(t, r) {
  this._pairs.push([t, r]);
};
nd.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, Bc);
  } : Bc;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function Xm(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function sd(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || Xm, s = r && r.serialize;
  let i;
  if (s ? i = s(t, r) : i = C.isURLSearchParams(t) ? t.toString() : new Ha(t, r).toString(n), i) {
    const o = e.indexOf("#");
    o !== -1 && (e = e.slice(0, o)), e += (e.indexOf("?") === -1 ? "?" : "&") + i;
  }
  return e;
}
class Vc {
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
const id = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, ev = typeof URLSearchParams < "u" ? URLSearchParams : Ha, tv = typeof FormData < "u" ? FormData : null, rv = typeof Blob < "u" ? Blob : null, nv = {
  isBrowser: !0,
  classes: {
    URLSearchParams: ev,
    FormData: tv,
    Blob: rv
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, od = typeof window < "u" && typeof document < "u", sv = ((e) => od && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), iv = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", ov = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: od,
  hasStandardBrowserEnv: sv,
  hasStandardBrowserWebWorkerEnv: iv
}, Symbol.toStringTag, { value: "Module" })), Pt = {
  ...ov,
  ...nv
};
function av(e, t) {
  return Li(e, new Pt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, i) {
      return Pt.isNode && C.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : i.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function cv(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function lv(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let i;
  for (n = 0; n < s; n++)
    i = r[n], t[i] = e[i];
  return t;
}
function ad(e) {
  function t(r, n, s, i) {
    let o = r[i++];
    if (o === "__proto__")
      return !0;
    const a = Number.isFinite(+o), c = i >= r.length;
    return o = !o && C.isArray(s) ? s.length : o, c ? (C.hasOwnProp(s, o) ? s[o] = [s[o], n] : s[o] = n, !a) : ((!s[o] || !C.isObject(s[o])) && (s[o] = []), t(r, n, s[o], i) && C.isArray(s[o]) && (s[o] = lv(s[o])), !a);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const r = {};
    return C.forEachEntry(e, (n, s) => {
      t(cv(n), s, r, 0);
    }), r;
  }
  return null;
}
function uv(e, t, r) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Za = {
  transitional: id,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, i = C.isObject(t);
    if (i && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
      return s && s ? JSON.stringify(ad(t)) : t;
    if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let a;
    if (i) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return av(t, this.formSerializer).toString();
      if ((a = C.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Li(
          a ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return i || s ? (r.setContentType("application/json", !1), uv(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Za.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && C.isString(t) && (n && !this.responseType || s)) {
      const o = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (a) {
        if (o)
          throw a.name === "SyntaxError" ? xe.from(a, xe.ERR_BAD_RESPONSE, this, null, this.response) : a;
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
  Za.headers[e] = {};
});
const Ka = Za, dv = C.toObjectSet([
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
]), fv = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(o) {
    s = o.indexOf(":"), r = o.substring(0, s).trim().toLowerCase(), n = o.substring(s + 1).trim(), !(!r || t[r] && dv[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Wc = Symbol("internals");
function qn(e) {
  return e && String(e).trim().toLowerCase();
}
function Xs(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(Xs) : String(e);
}
function hv(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const pv = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function lo(e, t, r, n, s) {
  if (C.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!C.isString(t)) {
    if (C.isString(n))
      return t.indexOf(n) !== -1;
    if (C.isRegExp(n))
      return n.test(t);
  }
}
function mv(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function vv(e, t) {
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
class Fi {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function i(a, c, l) {
      const u = qn(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = C.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || c] = Xs(a));
    }
    const o = (a, c) => C.forEach(a, (l, u) => i(l, u, c));
    return C.isPlainObject(t) || t instanceof this.constructor ? o(t, r) : C.isString(t) && (t = t.trim()) && !pv(t) ? o(fv(t), r) : t != null && i(r, t, n), this;
  }
  get(t, r) {
    if (t = qn(t), t) {
      const n = C.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return hv(s);
        if (C.isFunction(r))
          return r.call(this, s, n);
        if (C.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = qn(t), t) {
      const n = C.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || lo(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function i(o) {
      if (o = qn(o), o) {
        const a = C.findKey(n, o);
        a && (!r || lo(n, n[a], a, r)) && (delete n[a], s = !0);
      }
    }
    return C.isArray(t) ? t.forEach(i) : i(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const i = r[n];
      (!t || lo(this, this[i], i, t, !0)) && (delete this[i], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return C.forEach(this, (s, i) => {
      const o = C.findKey(n, i);
      if (o) {
        r[o] = Xs(s), delete r[i];
        return;
      }
      const a = t ? mv(i) : String(i).trim();
      a !== i && delete r[i], r[a] = Xs(s), n[a] = !0;
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
    const n = (this[Wc] = this[Wc] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function i(o) {
      const a = qn(o);
      n[a] || (vv(s, o), n[a] = !0);
    }
    return C.isArray(t) ? t.forEach(i) : i(t), this;
  }
}
Fi.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Fi.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
C.freezeMethods(Fi);
const Qt = Fi;
function uo(e, t) {
  const r = this || Ka, n = t || r, s = Qt.from(n.headers);
  let i = n.data;
  return C.forEach(e, function(a) {
    i = a.call(r, i, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), i;
}
function cd(e) {
  return !!(e && e.__CANCEL__);
}
function Ns(e, t, r) {
  xe.call(this, e ?? "canceled", xe.ERR_CANCELED, t, r), this.name = "CanceledError";
}
C.inherits(Ns, xe, {
  __CANCEL__: !0
});
function yv(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new xe(
    "Request failed with status code " + r.status,
    [xe.ERR_BAD_REQUEST, xe.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const gv = Pt.hasStandardBrowserEnv ? (
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
function bv(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function xv(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function ld(e, t) {
  return e && !bv(t) ? xv(e, t) : t;
}
const wv = Pt.hasStandardBrowserEnv ? (
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
function _v(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Sv(e, t) {
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
function qc(e, t) {
  let r = 0;
  const n = Sv(50, 250);
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
const Ev = typeof XMLHttpRequest < "u", Ov = Ev && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const i = Qt.from(e.headers).normalize();
    let { responseType: o, withXSRFToken: a } = e, c;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let u;
    if (C.isFormData(s)) {
      if (Pt.hasStandardBrowserEnv || Pt.hasStandardBrowserWebWorkerEnv)
        i.setContentType(!1);
      else if ((u = i.getContentType()) !== !1) {
        const [p, ...v] = u ? u.split(";").map((_) => _.trim()).filter(Boolean) : [];
        i.setContentType([p || "multipart/form-data", ...v].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", v = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      i.set("Authorization", "Basic " + btoa(p + ":" + v));
    }
    const h = ld(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), sd(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function m() {
      if (!d)
        return;
      const p = Qt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), _ = {
        data: !o || o === "text" || o === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: p,
        config: e,
        request: d
      };
      yv(function(w) {
        r(w), l();
      }, function(w) {
        n(w), l();
      }, _), d = null;
    }
    if ("onloadend" in d ? d.onloadend = m : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(m);
    }, d.onabort = function() {
      d && (n(new xe("Request aborted", xe.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new xe("Network Error", xe.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let v = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const _ = e.transitional || id;
      e.timeoutErrorMessage && (v = e.timeoutErrorMessage), n(new xe(
        v,
        _.clarifyTimeoutError ? xe.ETIMEDOUT : xe.ECONNABORTED,
        e,
        d
      )), d = null;
    }, Pt.hasStandardBrowserEnv && (a && C.isFunction(a) && (a = a(e)), a || a !== !1 && wv(h))) {
      const p = e.xsrfHeaderName && e.xsrfCookieName && gv.read(e.xsrfCookieName);
      p && i.set(e.xsrfHeaderName, p);
    }
    s === void 0 && i.setContentType(null), "setRequestHeader" in d && C.forEach(i.toJSON(), function(v, _) {
      d.setRequestHeader(_, v);
    }), C.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), o && o !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", qc(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", qc(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (p) => {
      d && (n(!p || p.type ? new Ns(null, e, d) : p), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const y = _v(h);
    if (y && Pt.protocols.indexOf(y) === -1) {
      n(new xe("Unsupported protocol " + y + ":", xe.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, ha = {
  http: Gm,
  xhr: Ov
};
C.forEach(ha, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Hc = (e) => `- ${e}`, Cv = (e) => C.isFunction(e) || e === null || e === !1, ud = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let i = 0; i < t; i++) {
      r = e[i];
      let o;
      if (n = r, !Cv(r) && (n = ha[(o = String(r)).toLowerCase()], n === void 0))
        throw new xe(`Unknown adapter '${o}'`);
      if (n)
        break;
      s[o || "#" + i] = n;
    }
    if (!n) {
      const i = Object.entries(s).map(
        ([a, c]) => `adapter ${a} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let o = t ? i.length > 1 ? `since :
` + i.map(Hc).join(`
`) : " " + Hc(i[0]) : "as no adapter specified";
      throw new xe(
        "There is no suitable adapter to dispatch the request " + o,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: ha
};
function fo(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Ns(null, e);
}
function Zc(e) {
  return fo(e), e.headers = Qt.from(e.headers), e.data = uo.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), ud.getAdapter(e.adapter || Ka.adapter)(e).then(function(n) {
    return fo(e), n.data = uo.call(
      e,
      e.transformResponse,
      n
    ), n.headers = Qt.from(n.headers), n;
  }, function(n) {
    return cd(n) || (fo(e), n && n.response && (n.response.data = uo.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = Qt.from(n.response.headers))), Promise.reject(n);
  });
}
const Kc = (e) => e instanceof Qt ? e.toJSON() : e;
function An(e, t) {
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
    headers: (l, u) => s(Kc(l), Kc(u), !0)
  };
  return C.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || s, h = d(e[u], t[u], u);
    C.isUndefined(h) && d !== a || (r[u] = h);
  }), r;
}
const dd = "1.6.5", Ya = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Ya[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Yc = {};
Ya.transitional = function(t, r, n) {
  function s(i, o) {
    return "[Axios v" + dd + "] Transitional option '" + i + "'" + o + (n ? ". " + n : "");
  }
  return (i, o, a) => {
    if (t === !1)
      throw new xe(
        s(o, " has been removed" + (r ? " in " + r : "")),
        xe.ERR_DEPRECATED
      );
    return r && !Yc[o] && (Yc[o] = !0, console.warn(
      s(
        o,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(i, o, a) : !0;
  };
};
function Tv(e, t, r) {
  if (typeof e != "object")
    throw new xe("options must be an object", xe.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const i = n[s], o = t[i];
    if (o) {
      const a = e[i], c = a === void 0 || o(a, i, e);
      if (c !== !0)
        throw new xe("option " + i + " must be " + c, xe.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new xe("Unknown option " + i, xe.ERR_BAD_OPTION);
  }
}
const pa = {
  assertOptions: Tv,
  validators: Ya
}, nr = pa.validators;
class hi {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new Vc(),
      response: new Vc()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = An(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: i } = r;
    n !== void 0 && pa.assertOptions(n, {
      silentJSONParsing: nr.transitional(nr.boolean),
      forcedJSONParsing: nr.transitional(nr.boolean),
      clarifyTimeoutError: nr.transitional(nr.boolean)
    }, !1), s != null && (C.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : pa.assertOptions(s, {
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
    ), r.headers = Qt.concat(o, i);
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
      const y = [Zc.bind(this), void 0];
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
      u = Zc.call(this, m);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, h = l.length; d < h; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = An(this.defaults, t);
    const r = ld(t.baseURL, t.url);
    return sd(r, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function(t) {
  hi.prototype[t] = function(r, n) {
    return this.request(An(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(i, o, a) {
      return this.request(An(a || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: i,
        data: o
      }));
    };
  }
  hi.prototype[t] = r(), hi.prototype[t + "Form"] = r(!0);
});
const ei = hi;
class Ga {
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
      token: new Ga(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Rv = Ga;
function Av(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Nv(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const ma = {
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
Object.entries(ma).forEach(([e, t]) => {
  ma[t] = e;
});
const jv = ma;
function fd(e) {
  const t = new ei(e), r = Hu(ei.prototype.request, t);
  return C.extend(r, ei.prototype, t, { allOwnKeys: !0 }), C.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return fd(An(e, s));
  }, r;
}
const ke = fd(Ka);
ke.Axios = ei;
ke.CanceledError = Ns;
ke.CancelToken = Rv;
ke.isCancel = cd;
ke.VERSION = dd;
ke.toFormData = Li;
ke.AxiosError = xe;
ke.Cancel = ke.CanceledError;
ke.all = function(t) {
  return Promise.all(t);
};
ke.spread = Av;
ke.isAxiosError = Nv;
ke.mergeConfig = An;
ke.AxiosHeaders = Qt;
ke.formToJSON = (e) => ad(C.isHTMLForm(e) ? new FormData(e) : e);
ke.getAdapter = ud.getAdapter;
ke.HttpStatusCode = jv;
ke.default = ke;
const Gc = (e, t) => ke.get(`${e}/chat/room`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), hd = (e, t, r, n, s) => ke.get(`${e}/chat/room/${r}/message?ts_st=${n || ""}&ts_en=${s || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((i) => {
  if (i.data.code === 200)
    return i.data.payload;
  throw new Error(i.data.message_ui || i.data.message);
}), Pv = (e, t, r, n) => ke.post(`${e}/chat/room/${n}/message`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((s) => {
  if (s.data.code === 200)
    return s.data.payload;
  throw new Error(s.data.message_ui || s.data.message);
}), $v = (e, t) => ke.get(`${e}/chat/token`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), kv = (e, t, r) => ke.get(`${e}/chat/room/${r}/attendant`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), pd = (e, t, r) => ke.get(`${e}/chat/room/${r}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), md = (e, t, r) => ke.get(`${e}/chat/order/candidate-teacher/list?order_id=${r || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), Iv = (e, t, r) => ke.put(`${e}/chat/order/teacher/assign`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
});
var Mv = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Qc = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((h) => h(t, d));
    }
  }, s = () => t, a = { setState: n, getState: s, subscribe: (c) => (r.add(c), () => r.delete(c)), destroy: () => {
    (Mv ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return t = e(n, s, a), a;
}, Dv = (e) => e ? Qc(e) : Qc;
var va = { exports: {} }, ho = {}, Ls = { exports: {} }, po = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jc;
function Lv() {
  return Jc || (Jc = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ze, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(w) {
      {
        for (var E = arguments.length, x = new Array(E > 1 ? E - 1 : 0), A = 1; A < E; A++)
          x[A - 1] = arguments[A];
        n("error", w, x);
      }
    }
    function n(w, E, x) {
      {
        var A = t.ReactDebugCurrentFrame, k = A.getStackAddendum();
        k !== "" && (E += "%s", x = x.concat([k]));
        var j = x.map(function(R) {
          return String(R);
        });
        j.unshift("Warning: " + E), Function.prototype.apply.call(console[w], console, j);
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
        var k = E();
        i(A, k) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var j = o({
        inst: {
          value: A,
          getSnapshot: E
        }
      }), R = j[0].inst, B = j[1];
      return c(function() {
        R.value = A, R.getSnapshot = E, m(R) && B({
          inst: R
        });
      }, [w, A, E]), a(function() {
        m(R) && B({
          inst: R
        });
        var K = function() {
          m(R) && B({
            inst: R
          });
        };
        return w(K);
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
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", v = !p, _ = v ? y : h, O = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : _;
    po.useSyncExternalStore = O, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), po;
}
var mo = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xc;
function Fv() {
  if (Xc)
    return mo;
  Xc = 1;
  var e = Ze;
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
  return mo.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, mo;
}
var el;
function vd() {
  return el || (el = 1, process.env.NODE_ENV === "production" ? Ls.exports = Fv() : Ls.exports = Lv()), Ls.exports;
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
var tl;
function Uv() {
  return tl || (tl = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = Ze, t = vd();
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
      var _ = a(function() {
        var x = !1, A, k, j = function(V) {
          if (!x) {
            x = !0, A = V;
            var Pe = m(V);
            if (y !== void 0 && v.hasValue) {
              var Ee = v.value;
              if (y(Ee, Pe))
                return k = Ee, Ee;
            }
            return k = Pe, Pe;
          }
          var Fe = A, Ae = k;
          if (n(Fe, V))
            return Ae;
          var Ie = m(V);
          return y !== void 0 && y(Ae, Ie) ? Ae : (A = V, k = Ie, Ie);
        }, R = h === void 0 ? null : h, B = function() {
          return j(d());
        }, K = R === null ? void 0 : function() {
          return j(R());
        };
        return [B, K];
      }, [d, h, m, y]), O = _[0], w = _[1], E = s(u, O, w);
      return o(function() {
        v.hasValue = !0, v.value = E;
      }, [E]), c(E), E;
    }
    ho.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ho;
}
var vo = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var rl;
function zv() {
  if (rl)
    return vo;
  rl = 1;
  var e = Ze, t = vd();
  function r(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, i = e.useRef, o = e.useEffect, a = e.useMemo, c = e.useDebugValue;
  return vo.useSyncExternalStoreWithSelector = function(l, u, d, h, m) {
    var y = i(null);
    if (y.current === null) {
      var p = { hasValue: !1, value: null };
      y.current = p;
    } else
      p = y.current;
    y = a(function() {
      function _(A) {
        if (!O) {
          if (O = !0, w = A, A = h(A), m !== void 0 && p.hasValue) {
            var k = p.value;
            if (m(k, A))
              return E = k;
          }
          return E = A;
        }
        if (k = E, n(w, A))
          return k;
        var j = h(A);
        return m !== void 0 && m(k, j) ? k : (w = A, E = j);
      }
      var O = !1, w, E, x = d === void 0 ? null : d;
      return [function() {
        return _(u());
      }, x === null ? void 0 : function() {
        return _(x());
      }];
    }, [u, d, h, m]);
    var v = s(l, y[0], y[1]);
    return o(function() {
      p.hasValue = !0, p.value = v;
    }, [v]), c(v), v;
  }, vo;
}
process.env.NODE_ENV === "production" ? va.exports = zv() : va.exports = Uv();
var Bv = va.exports;
const Vv = /* @__PURE__ */ za(Bv);
var yd = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Wv } = Ze, { useSyncExternalStoreWithSelector: qv } = Vv;
let nl = !1;
function Hv(e, t = e.getState, r) {
  (yd ? "production" : void 0) !== "production" && r && !nl && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), nl = !0);
  const n = qv(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Wv(n), n;
}
const sl = (e) => {
  (yd ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Dv(e) : e, r = (n, s) => Hv(t, n, s);
  return Object.assign(r, t), r;
}, Zv = (e) => e ? sl(e) : sl, Kv = {
  notiLatestMessages: [],
  socket: null,
  socketStatus: !1
}, Ui = Zv((e, t) => ({
  ...Kv,
  // Connect to WebSocket
  connectWebSocket: async (r, n, s, i) => {
    const { socketStatus: o } = t();
    if (o)
      return;
    const a = await $v(r, s), c = new WebSocket(n + "?token=" + a);
    c.onopen = () => {
      e({ socket: c, socketStatus: !0 });
    }, c.onmessage = (l) => {
      const u = JSON.parse(l.data), { room_id: d } = u;
      e((h) => ({
        notiLatestMessages: [...h.notiLatestMessages, u]
      })), setTimeout(() => {
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
    const { socket: n } = Ui.getState();
    if (n && n.readyState === WebSocket.OPEN)
      try {
        n.send(JSON.stringify({ action: "sendmessage", data: r }));
      } catch (s) {
        console.log(s);
      }
  },
  updateLatestMessage: (r) => {
    const { notiLatestMessages: n } = t(), s = n.filter((i) => i.room_id !== r);
    e(() => ({
      notiLatestMessages: [...s]
    }));
  }
}));
function gd(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = gd(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function Yv() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = gd(e)) && (n && (n += " "), n += t);
  return n;
}
const Qa = "-";
function Gv(e) {
  const t = Jv(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function s(o) {
    const a = o.split(Qa);
    return a[0] === "" && a.length !== 1 && a.shift(), bd(a, t) || Qv(o);
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
function bd(e, t) {
  var o;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? bd(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const i = e.join(Qa);
  return (o = t.validators.find(({
    validator: a
  }) => a(i))) == null ? void 0 : o.classGroupId;
}
const il = /^\[(.+)\]$/;
function Qv(e) {
  if (il.test(e)) {
    const t = il.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Jv(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ey(Object.entries(e.classGroups), r).forEach(([i, o]) => {
    ya(o, n, i, t);
  }), n;
}
function ya(e, t, r, n) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const i = s === "" ? t : ol(t, s);
      i.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Xv(s)) {
        ya(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([i, o]) => {
      ya(o, ol(t, i), r, n);
    });
  });
}
function ol(e, t) {
  let r = e;
  return t.split(Qa).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Xv(e) {
  return e.isThemeGetter;
}
function ey(e, t) {
  return t ? e.map(([r, n]) => {
    const s = n.map((i) => typeof i == "string" ? t + i : typeof i == "object" ? Object.fromEntries(Object.entries(i).map(([o, a]) => [t + o, a])) : i);
    return [r, s];
  }) : e;
}
function ty(e) {
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
const xd = "!";
function ry(e) {
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
    const d = a.length === 0 ? o : o.substring(l), h = d.startsWith(xd), m = h ? d.substring(1) : d, y = u && u > l ? u - l : void 0;
    return {
      modifiers: a,
      hasImportantModifier: h,
      baseClassName: m,
      maybePostfixModifierPosition: y
    };
  };
}
function ny(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function sy(e) {
  return {
    cache: ty(e.cacheSize),
    splitModifiers: ry(e),
    ...Gv(e)
  };
}
const iy = /\s+/;
function oy(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = t, i = /* @__PURE__ */ new Set();
  return e.trim().split(iy).map((o) => {
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
    const m = ny(a).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? m + xd : m,
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
function ay() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = wd(t)) && (n && (n += " "), n += r);
  return n;
}
function wd(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = wd(e[n])) && (r && (r += " "), r += t);
  return r;
}
function cy(e, ...t) {
  let r, n, s, i = o;
  function o(c) {
    const l = t.reduce((u, d) => d(u), e());
    return r = sy(l), n = r.cache.get, s = r.cache.set, i = a, a(c);
  }
  function a(c) {
    const l = n(c);
    if (l)
      return l;
    const u = oy(c, r);
    return s(c, u), u;
  }
  return function() {
    return i(ay.apply(null, arguments));
  };
}
function Me(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const _d = /^\[(?:([a-z-]+):)?(.+)\]$/i, ly = /^\d+\/\d+$/, uy = /* @__PURE__ */ new Set(["px", "full", "screen"]), dy = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, fy = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, hy = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, py = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function zt(e) {
  return Tr(e) || uy.has(e) || ly.test(e);
}
function sr(e) {
  return zn(e, "length", _y);
}
function Tr(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Fs(e) {
  return zn(e, "number", Tr);
}
function Hn(e) {
  return !!e && Number.isInteger(Number(e));
}
function my(e) {
  return e.endsWith("%") && Tr(e.slice(0, -1));
}
function ce(e) {
  return _d.test(e);
}
function ir(e) {
  return dy.test(e);
}
const vy = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function yy(e) {
  return zn(e, vy, Sd);
}
function gy(e) {
  return zn(e, "position", Sd);
}
const by = /* @__PURE__ */ new Set(["image", "url"]);
function xy(e) {
  return zn(e, by, Ey);
}
function wy(e) {
  return zn(e, "", Sy);
}
function Zn() {
  return !0;
}
function zn(e, t, r) {
  const n = _d.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function _y(e) {
  return fy.test(e);
}
function Sd() {
  return !1;
}
function Sy(e) {
  return hy.test(e);
}
function Ey(e) {
  return py.test(e);
}
function Oy() {
  const e = Me("colors"), t = Me("spacing"), r = Me("blur"), n = Me("brightness"), s = Me("borderColor"), i = Me("borderRadius"), o = Me("borderSpacing"), a = Me("borderWidth"), c = Me("contrast"), l = Me("grayscale"), u = Me("hueRotate"), d = Me("invert"), h = Me("gap"), m = Me("gradientColorStops"), y = Me("gradientColorStopPositions"), p = Me("inset"), v = Me("margin"), _ = Me("opacity"), O = Me("padding"), w = Me("saturate"), E = Me("scale"), x = Me("sepia"), A = Me("skew"), k = Me("space"), j = Me("translate"), R = () => ["auto", "contain", "none"], B = () => ["auto", "hidden", "clip", "visible", "scroll"], K = () => ["auto", ce, t], V = () => [ce, t], Pe = () => ["", zt, sr], Ee = () => ["auto", Tr, ce], Fe = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], Ae = () => ["solid", "dashed", "dotted", "double", "none"], Ie = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], Xe = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Qe = () => ["", "0", ce], T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], M = () => [Tr, Fs], W = () => [Tr, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Zn],
      spacing: [zt, sr],
      blur: ["none", "", ir, ce],
      brightness: M(),
      borderColor: [e],
      borderRadius: ["none", "", "full", ir, ce],
      borderSpacing: V(),
      borderWidth: Pe(),
      contrast: M(),
      grayscale: Qe(),
      hueRotate: W(),
      invert: Qe(),
      gap: V(),
      gradientColorStops: [e],
      gradientColorStopPositions: [my, sr],
      inset: K(),
      margin: K(),
      opacity: M(),
      padding: V(),
      saturate: M(),
      scale: M(),
      sepia: Qe(),
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
        aspect: ["auto", "square", "video", ce]
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
        object: [...Fe(), ce]
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
        overscroll: R()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": R()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": R()
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
        z: ["auto", Hn, ce]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: K()
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
        flex: ["1", "auto", "initial", "none", ce]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Qe()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Qe()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Hn, ce]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Zn]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Hn, ce]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": Ee()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": Ee()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Zn]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Hn, ce]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": Ee()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": Ee()
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
        "auto-cols": ["auto", "min", "max", "fr", ce]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ce]
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
        justify: ["normal", ...Xe()]
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
        content: ["normal", ...Xe(), "baseline"]
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
        "place-content": [...Xe(), "baseline"]
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
        "space-x": [k]
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
        "space-y": [k]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ce, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ce, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ce, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [ir]
        }, ir]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ce, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ce, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ce, t, "auto", "min", "max", "fit"]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Fs]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Zn]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Tr, Fs]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", zt, ce]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ce]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ce]
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
        "placeholder-opacity": [_]
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
        "text-opacity": [_]
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
        decoration: [...Ae(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", zt, sr]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", zt, ce]
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
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ce]
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
        content: ["none", ce]
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
        "bg-opacity": [_]
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
        bg: [...Fe(), gy]
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
        bg: ["auto", "cover", "contain", yy]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, xy]
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
        "border-opacity": [_]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...Ae(), "hidden"]
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
        "divide-opacity": [_]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: Ae()
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
        outline: ["", ...Ae()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [zt, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [zt, sr]
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
        "ring-opacity": [_]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [zt, sr]
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
        shadow: ["", "inner", "none", ir, wy]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Zn]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [_]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Ie()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Ie()
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
        "drop-shadow": ["", "none", ir, ce]
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
        "backdrop-opacity": [_]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
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
        ease: ["linear", "in", "out", "in-out", ce]
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
        animate: ["none", "spin", "ping", "pulse", "bounce", ce]
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
        rotate: [Hn, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [j]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [j]
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
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ce]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ce]
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
        "will-change": ["auto", "scroll", "contents", "transform", ce]
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
        stroke: [zt, sr, Fs]
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
const Cy = /* @__PURE__ */ cy(Oy);
function Se(...e) {
  return Cy(Yv(e));
}
var Ty = function e(t, r) {
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
const al = /* @__PURE__ */ za(Ty);
function Ry(e) {
  if (!/^[0-9a-zA-Z-]+$/.test(e))
    throw new Error(
      `[@mantine/use-form] Form name "${e}" is invalid, it should contain only letters, numbers and dashes`
    );
}
const Ay = typeof window < "u" ? Ua : ue;
function Ye(e, t) {
  Ay(() => {
    if (e)
      return window.addEventListener(e, t), () => window.removeEventListener(e, t);
  }, [e]);
}
function Ny(e, t) {
  e && Ry(e), Ye(
    `mantine-form:${e}:set-field-value`,
    (r) => t.setFieldValue(r.detail.path, r.detail.value)
  ), Ye(
    `mantine-form:${e}:set-values`,
    (r) => t.setValues(r.detail)
  ), Ye(
    `mantine-form:${e}:set-initial-values`,
    (r) => t.setInitialValues(r.detail)
  ), Ye(
    `mantine-form:${e}:set-errors`,
    (r) => t.setErrors(r.detail)
  ), Ye(
    `mantine-form:${e}:set-field-error`,
    (r) => t.setFieldError(r.detail.path, r.detail.error)
  ), Ye(
    `mantine-form:${e}:clear-field-error`,
    (r) => t.clearFieldError(r.detail)
  ), Ye(`mantine-form:${e}:clear-errors`, t.clearErrors), Ye(`mantine-form:${e}:reset`, t.reset), Ye(`mantine-form:${e}:validate`, t.validate), Ye(
    `mantine-form:${e}:validate-field`,
    (r) => t.validateField(r.detail)
  ), Ye(
    `mantine-form:${e}:reorder-list-item`,
    (r) => t.reorderListItem(r.detail.path, r.detail.payload)
  ), Ye(
    `mantine-form:${e}:remove-list-item`,
    (r) => t.removeListItem(r.detail.path, r.detail.index)
  ), Ye(
    `mantine-form:${e}:insert-list-item`,
    (r) => t.insertListItem(r.detail.path, r.detail.item, r.detail.index)
  ), Ye(
    `mantine-form:${e}:set-dirty`,
    (r) => t.setDirty(r.detail)
  ), Ye(
    `mantine-form:${e}:set-touched`,
    (r) => t.setTouched(r.detail)
  ), Ye(
    `mantine-form:${e}:reset-dirty`,
    (r) => t.resetDirty(r.detail)
  ), Ye(`mantine-form:${e}:reset-touched`, t.resetTouched);
}
function ga(e) {
  return e === null || typeof e != "object" ? {} : Object.keys(e).reduce((t, r) => {
    const n = e[r];
    return n != null && n !== !1 && (t[r] = n), t;
  }, {});
}
function jy(e) {
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
function cl(e, t) {
  const r = Object.keys(e);
  if (typeof t == "string") {
    const n = r.filter((s) => s.startsWith(`${t}.`));
    return e[t] || n.some((s) => e[s]) || !1;
  }
  return r.some((n) => e[n]);
}
function Ed(e, t) {
  if (t === null || typeof t != "object")
    return {};
  const r = { ...t };
  return Object.keys(t).forEach((n) => {
    n.includes(`${String(e)}.`) && delete r[n];
  }), r;
}
function ll(e, t) {
  const r = e.substring(t.length + 1).split(".")[0];
  return parseInt(r, 10);
}
function ul(e, t, r, n) {
  if (t === void 0)
    return r;
  const s = `${String(e)}`;
  let i = r;
  n === -1 && (i = Ed(`${s}.${t}`, i));
  const o = { ...i }, a = /* @__PURE__ */ new Set();
  return Object.entries(i).filter(([c]) => {
    if (!c.startsWith(`${s}.`))
      return !1;
    const l = ll(c, s);
    return Number.isNaN(l) ? !1 : l >= t;
  }).forEach(([c, l]) => {
    const u = ll(c, s), d = c.replace(
      `${s}.${u}`,
      `${s}.${u + n}`
    );
    o[d] = l, a.add(d), a.has(c) || delete o[c];
  }), o;
}
function Py(e, { from: t, to: r }, n) {
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
function Od(e) {
  return typeof e != "string" ? [] : e.split(".");
}
function Zt(e, t) {
  const r = Od(e);
  if (r.length === 0 || typeof t != "object" || t === null)
    return;
  let n = t[r[0]];
  for (let s = 1; s < r.length && n !== void 0; s += 1)
    n = n[r[s]];
  return n;
}
function dl(e, t, r) {
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
      dl(s, n[t], Object.getOwnPropertyDescriptor(e, n[t]));
    for (t = 0, n = Object.getOwnPropertyNames(e); t < n.length; t++)
      Object.hasOwnProperty.call(s, r = n[t]) && s[r] === e[r] || dl(s, r, Object.getOwnPropertyDescriptor(e, r));
  }
  return s || e;
}
function zi(e, t, r) {
  const n = Od(e);
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
function $y(e, { from: t, to: r }, n) {
  const s = Zt(e, n);
  if (!Array.isArray(s))
    return n;
  const i = [...s], o = s[t];
  return i.splice(t, 1), i.splice(r, 0, o), zi(e, i, n);
}
function ky(e, t, r, n) {
  const s = Zt(e, n);
  if (!Array.isArray(s))
    return n;
  const i = [...s];
  return i.splice(typeof r == "number" ? r : i.length, 0, t), zi(e, i, n);
}
function Iy(e, t, r) {
  const n = Zt(e, r);
  return Array.isArray(n) ? zi(
    e,
    n.filter((s, i) => i !== t),
    r
  ) : r;
}
function fl(e) {
  const t = ga(e);
  return { hasErrors: Object.keys(t).length > 0, errors: t };
}
function ba(e, t, r = "", n = {}) {
  return typeof e != "object" || e === null ? n : Object.keys(e).reduce((s, i) => {
    const o = e[i], a = `${r === "" ? "" : `${r}.`}${i}`, c = Zt(a, t);
    let l = !1;
    return typeof o == "function" && (s[a] = o(c, t, a)), typeof o == "object" && Array.isArray(c) && (l = !0, c.forEach(
      (u, d) => ba(o, t, `${a}.${d}`, s)
    )), typeof o == "object" && typeof c == "object" && c !== null && (l || ba(o, t, a, s)), s;
  }, n);
}
function xa(e, t) {
  return fl(typeof e == "function" ? e(t) : ba(e, t));
}
function Us(e, t, r) {
  if (typeof e != "string")
    return { hasError: !1, error: null };
  const n = xa(t, r), s = Object.keys(n.errors).find(
    (i) => e.split(".").every((o, a) => o === i.split(".")[a])
  );
  return { hasError: !!s, error: s ? n.errors[s] : null };
}
const My = "__MANTINE_FORM_INDEX__";
function hl(e, t) {
  return t ? typeof t == "boolean" ? t : Array.isArray(t) ? t.includes(e.replace(/[.][0-9]/g, `.${My}`)) : !1 : !1;
}
function Dy({
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
  const [h, m] = re(s), [y, p] = re(n), [v, _] = re(t || {}), [O, w] = re(ga(r)), [E, x] = re(!1), A = he(t || {}), k = (S) => {
    A.current = S;
  }, j = je(
    (S) => {
      E || (x(!0), _(S));
    },
    [E]
  ), R = je(() => m({}), []), B = (S) => {
    const Y = S ? { ...v, ...S } : v;
    k(Y), p({});
  }, K = je(
    (S) => w((Y) => ga(typeof S == "function" ? S(Y) : S)),
    []
  ), V = je(() => w({}), []), Pe = je(() => {
    _(A.current), V(), p({}), R();
  }, []), Ee = je(
    (S, Y) => K((se) => ({ ...se, [S]: Y })),
    []
  ), Fe = je(
    (S) => K((Y) => {
      if (typeof S != "string")
        return Y;
      const se = { ...Y };
      return delete se[S], se;
    }),
    []
  ), Ae = je(
    (S) => p((Y) => {
      if (typeof S != "string")
        return Y;
      const se = Ed(S, Y);
      return delete se[S], se;
    }),
    []
  ), Ie = je((S, Y) => {
    const se = hl(S, o);
    Ae(S), m((we) => ({ ...we, [S]: !0 })), _((we) => {
      const et = zi(S, Y, we);
      if (se) {
        const Vr = Us(S, d, et);
        Vr.hasError ? Ee(S, Vr.error) : Fe(S);
      }
      return c == null || c(et), et;
    }), !se && i && Ee(S, null);
  }, []), Xe = je((S) => {
    _((Y) => {
      const se = typeof S == "function" ? S(Y) : S, we = { ...Y, ...se };
      return c == null || c(we), we;
    }), i && V();
  }, []), Qe = je((S, Y) => {
    Ae(S), _((se) => {
      const we = $y(S, Y, se);
      return c == null || c(we), we;
    }), w((se) => Py(S, Y, se));
  }, []), T = je((S, Y) => {
    Ae(S), _((se) => {
      const we = Iy(S, Y, se);
      return c == null || c(we), we;
    }), w((se) => ul(S, Y, se, -1));
  }, []), M = je((S, Y, se) => {
    Ae(S), _((we) => {
      const et = ky(S, Y, se, we);
      return c == null || c(et), et;
    }), w((we) => ul(S, se, we, 1));
  }, []), W = je(() => {
    const S = xa(d, v);
    return w(S.errors), S;
  }, [v, d]), X = je(
    (S) => {
      const Y = Us(S, d, v);
      return Y.hasError ? Ee(S, Y.error) : Fe(S), Y;
    },
    [v, d]
  ), q = (S, { type: Y = "input", withError: se = !0, withFocus: we = !0, ...et } = {}) => {
    const Ot = { onChange: jy((_t) => Ie(S, _t)) };
    return se && (Ot.error = O[S]), Y === "checkbox" ? Ot.checked = Zt(S, v) : Ot.value = Zt(S, v), we && (Ot.onFocus = () => m((_t) => ({ ..._t, [S]: !0 })), Ot.onBlur = () => {
      if (hl(S, a)) {
        const _t = Us(S, d, v);
        _t.hasError ? Ee(S, _t.error) : Fe(S);
      }
    }), Object.assign(
      Ot,
      u == null ? void 0 : u({
        inputProps: Ot,
        field: S,
        options: { type: Y, withError: se, withFocus: we, ...et },
        form: Be
      })
    );
  }, ve = (S, Y) => (se) => {
    se == null || se.preventDefault();
    const we = W();
    we.hasErrors ? Y == null || Y(we.errors, v, se) : S == null || S(l(v), se);
  }, ee = (S) => l(S || v), ne = je((S) => {
    S.preventDefault(), Pe();
  }, []), de = (S) => {
    if (S) {
      const se = Zt(S, y);
      if (typeof se == "boolean")
        return se;
      const we = Zt(S, v), et = Zt(S, A.current);
      return !al(we, et);
    }
    return Object.keys(y).length > 0 ? cl(y) : !al(v, A.current);
  }, ge = je(
    (S) => cl(h, S),
    [h]
  ), fe = je(
    (S) => S ? !Us(S, d, v).hasError : !xa(d, v).hasErrors,
    [v, d]
  ), Be = {
    initialized: E,
    values: v,
    errors: O,
    initialize: j,
    setValues: Xe,
    setInitialValues: k,
    setErrors: K,
    setFieldValue: Ie,
    setFieldError: Ee,
    clearFieldError: Fe,
    clearErrors: V,
    reset: Pe,
    validate: W,
    validateField: X,
    reorderListItem: Qe,
    removeListItem: T,
    insertListItem: M,
    getInputProps: q,
    onSubmit: ve,
    onReset: ne,
    isDirty: de,
    isTouched: ge,
    setTouched: m,
    setDirty: p,
    resetTouched: R,
    resetDirty: B,
    isValid: fe,
    getTransformedValues: ee
  };
  return Ny(e, Be), Be;
}
function Ly(e) {
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
var wa = { exports: {} }, yo, pl;
function Ja() {
  if (pl)
    return yo;
  pl = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return yo = e, yo;
}
var go, ml;
function Fy() {
  if (ml)
    return go;
  ml = 1;
  var e = Ja();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, go = function() {
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
  }, go;
}
var zs = { exports: {} }, Te = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var vl;
function Uy() {
  return vl || (vl = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
    function w(S) {
      return typeof S == "string" || typeof S == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      S === n || S === l || S === i || S === s || S === d || S === h || typeof S == "object" && S !== null && (S.$$typeof === y || S.$$typeof === m || S.$$typeof === o || S.$$typeof === a || S.$$typeof === u || S.$$typeof === v || S.$$typeof === _ || S.$$typeof === O || S.$$typeof === p);
    }
    function E(S) {
      if (typeof S == "object" && S !== null) {
        var Y = S.$$typeof;
        switch (Y) {
          case t:
            var se = S.type;
            switch (se) {
              case c:
              case l:
              case n:
              case i:
              case s:
              case d:
                return se;
              default:
                var we = se && se.$$typeof;
                switch (we) {
                  case a:
                  case u:
                  case y:
                  case m:
                  case o:
                    return we;
                  default:
                    return Y;
                }
            }
          case r:
            return Y;
        }
      }
    }
    var x = c, A = l, k = a, j = o, R = t, B = u, K = n, V = y, Pe = m, Ee = r, Fe = i, Ae = s, Ie = d, Xe = !1;
    function Qe(S) {
      return Xe || (Xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(S) || E(S) === c;
    }
    function T(S) {
      return E(S) === l;
    }
    function M(S) {
      return E(S) === a;
    }
    function W(S) {
      return E(S) === o;
    }
    function X(S) {
      return typeof S == "object" && S !== null && S.$$typeof === t;
    }
    function q(S) {
      return E(S) === u;
    }
    function ve(S) {
      return E(S) === n;
    }
    function ee(S) {
      return E(S) === y;
    }
    function ne(S) {
      return E(S) === m;
    }
    function de(S) {
      return E(S) === r;
    }
    function ge(S) {
      return E(S) === i;
    }
    function fe(S) {
      return E(S) === s;
    }
    function Be(S) {
      return E(S) === d;
    }
    Te.AsyncMode = x, Te.ConcurrentMode = A, Te.ContextConsumer = k, Te.ContextProvider = j, Te.Element = R, Te.ForwardRef = B, Te.Fragment = K, Te.Lazy = V, Te.Memo = Pe, Te.Portal = Ee, Te.Profiler = Fe, Te.StrictMode = Ae, Te.Suspense = Ie, Te.isAsyncMode = Qe, Te.isConcurrentMode = T, Te.isContextConsumer = M, Te.isContextProvider = W, Te.isElement = X, Te.isForwardRef = q, Te.isFragment = ve, Te.isLazy = ee, Te.isMemo = ne, Te.isPortal = de, Te.isProfiler = ge, Te.isStrictMode = fe, Te.isSuspense = Be, Te.isValidElementType = w, Te.typeOf = E;
  }()), Te;
}
var Re = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yl;
function zy() {
  if (yl)
    return Re;
  yl = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, o = e ? Symbol.for("react.provider") : 60109, a = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, m = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, v = e ? Symbol.for("react.fundamental") : 60117, _ = e ? Symbol.for("react.responder") : 60118, O = e ? Symbol.for("react.scope") : 60119;
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
  return Re.AsyncMode = c, Re.ConcurrentMode = l, Re.ContextConsumer = a, Re.ContextProvider = o, Re.Element = t, Re.ForwardRef = u, Re.Fragment = n, Re.Lazy = y, Re.Memo = m, Re.Portal = r, Re.Profiler = i, Re.StrictMode = s, Re.Suspense = d, Re.isAsyncMode = function(x) {
    return E(x) || w(x) === c;
  }, Re.isConcurrentMode = E, Re.isContextConsumer = function(x) {
    return w(x) === a;
  }, Re.isContextProvider = function(x) {
    return w(x) === o;
  }, Re.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, Re.isForwardRef = function(x) {
    return w(x) === u;
  }, Re.isFragment = function(x) {
    return w(x) === n;
  }, Re.isLazy = function(x) {
    return w(x) === y;
  }, Re.isMemo = function(x) {
    return w(x) === m;
  }, Re.isPortal = function(x) {
    return w(x) === r;
  }, Re.isProfiler = function(x) {
    return w(x) === i;
  }, Re.isStrictMode = function(x) {
    return w(x) === s;
  }, Re.isSuspense = function(x) {
    return w(x) === d;
  }, Re.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === l || x === i || x === s || x === d || x === h || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === m || x.$$typeof === o || x.$$typeof === a || x.$$typeof === u || x.$$typeof === v || x.$$typeof === _ || x.$$typeof === O || x.$$typeof === p);
  }, Re.typeOf = w, Re;
}
var gl;
function Cd() {
  return gl || (gl = 1, process.env.NODE_ENV === "production" ? zs.exports = zy() : zs.exports = Uy()), zs.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var bo, bl;
function By() {
  if (bl)
    return bo;
  bl = 1;
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
  return bo = s() ? Object.assign : function(i, o) {
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
  }, bo;
}
var xo, xl;
function Td() {
  return xl || (xl = 1, xo = Function.call.bind(Object.prototype.hasOwnProperty)), xo;
}
var wo, wl;
function Vy() {
  if (wl)
    return wo;
  wl = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Ja(), r = {}, n = Td();
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
  }, wo = s, wo;
}
var _o, _l;
function Wy() {
  if (_l)
    return _o;
  _l = 1;
  var e = Cd(), t = By(), r = Ja(), n = Td(), s = Vy(), i = function() {
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
  return _o = function(a, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(T) {
      var M = T && (l && T[l] || T[u]);
      if (typeof M == "function")
        return M;
    }
    var h = "<<anonymous>>", m = {
      array: _("array"),
      bigint: _("bigint"),
      bool: _("boolean"),
      func: _("function"),
      number: _("number"),
      object: _("object"),
      string: _("string"),
      symbol: _("symbol"),
      any: O(),
      arrayOf: w,
      element: E(),
      elementType: x(),
      instanceOf: A,
      node: B(),
      objectOf: j,
      oneOf: k,
      oneOfType: R,
      shape: V,
      exact: Pe
    };
    function y(T, M) {
      return T === M ? T !== 0 || 1 / T === 1 / M : T !== T && M !== M;
    }
    function p(T, M) {
      this.message = T, this.data = M && typeof M == "object" ? M : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function v(T) {
      if (process.env.NODE_ENV !== "production")
        var M = {}, W = 0;
      function X(ve, ee, ne, de, ge, fe, Be) {
        if (de = de || h, fe = fe || ne, Be !== r) {
          if (c) {
            var S = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw S.name = "Invariant Violation", S;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var Y = de + ":" + ne;
            !M[Y] && // Avoid spamming the console because they are often not actionable except for lib authors
            W < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + fe + "` prop on `" + de + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), M[Y] = !0, W++);
          }
        }
        return ee[ne] == null ? ve ? ee[ne] === null ? new p("The " + ge + " `" + fe + "` is marked as required " + ("in `" + de + "`, but its value is `null`.")) : new p("The " + ge + " `" + fe + "` is marked as required in " + ("`" + de + "`, but its value is `undefined`.")) : null : T(ee, ne, de, ge, fe);
      }
      var q = X.bind(null, !1);
      return q.isRequired = X.bind(null, !0), q;
    }
    function _(T) {
      function M(W, X, q, ve, ee, ne) {
        var de = W[X], ge = Ae(de);
        if (ge !== T) {
          var fe = Ie(de);
          return new p(
            "Invalid " + ve + " `" + ee + "` of type " + ("`" + fe + "` supplied to `" + q + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return v(M);
    }
    function O() {
      return v(o);
    }
    function w(T) {
      function M(W, X, q, ve, ee) {
        if (typeof T != "function")
          return new p("Property `" + ee + "` of component `" + q + "` has invalid PropType notation inside arrayOf.");
        var ne = W[X];
        if (!Array.isArray(ne)) {
          var de = Ae(ne);
          return new p("Invalid " + ve + " `" + ee + "` of type " + ("`" + de + "` supplied to `" + q + "`, expected an array."));
        }
        for (var ge = 0; ge < ne.length; ge++) {
          var fe = T(ne, ge, q, ve, ee + "[" + ge + "]", r);
          if (fe instanceof Error)
            return fe;
        }
        return null;
      }
      return v(M);
    }
    function E() {
      function T(M, W, X, q, ve) {
        var ee = M[W];
        if (!a(ee)) {
          var ne = Ae(ee);
          return new p("Invalid " + q + " `" + ve + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected a single ReactElement."));
        }
        return null;
      }
      return v(T);
    }
    function x() {
      function T(M, W, X, q, ve) {
        var ee = M[W];
        if (!e.isValidElementType(ee)) {
          var ne = Ae(ee);
          return new p("Invalid " + q + " `" + ve + "` of type " + ("`" + ne + "` supplied to `" + X + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return v(T);
    }
    function A(T) {
      function M(W, X, q, ve, ee) {
        if (!(W[X] instanceof T)) {
          var ne = T.name || h, de = Qe(W[X]);
          return new p("Invalid " + ve + " `" + ee + "` of type " + ("`" + de + "` supplied to `" + q + "`, expected ") + ("instance of `" + ne + "`."));
        }
        return null;
      }
      return v(M);
    }
    function k(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), o;
      function M(W, X, q, ve, ee) {
        for (var ne = W[X], de = 0; de < T.length; de++)
          if (y(ne, T[de]))
            return null;
        var ge = JSON.stringify(T, function(Be, S) {
          var Y = Ie(S);
          return Y === "symbol" ? String(S) : S;
        });
        return new p("Invalid " + ve + " `" + ee + "` of value `" + String(ne) + "` " + ("supplied to `" + q + "`, expected one of " + ge + "."));
      }
      return v(M);
    }
    function j(T) {
      function M(W, X, q, ve, ee) {
        if (typeof T != "function")
          return new p("Property `" + ee + "` of component `" + q + "` has invalid PropType notation inside objectOf.");
        var ne = W[X], de = Ae(ne);
        if (de !== "object")
          return new p("Invalid " + ve + " `" + ee + "` of type " + ("`" + de + "` supplied to `" + q + "`, expected an object."));
        for (var ge in ne)
          if (n(ne, ge)) {
            var fe = T(ne, ge, q, ve, ee + "." + ge, r);
            if (fe instanceof Error)
              return fe;
          }
        return null;
      }
      return v(M);
    }
    function R(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), o;
      for (var M = 0; M < T.length; M++) {
        var W = T[M];
        if (typeof W != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + Xe(W) + " at index " + M + "."
          ), o;
      }
      function X(q, ve, ee, ne, de) {
        for (var ge = [], fe = 0; fe < T.length; fe++) {
          var Be = T[fe], S = Be(q, ve, ee, ne, de, r);
          if (S == null)
            return null;
          S.data && n(S.data, "expectedType") && ge.push(S.data.expectedType);
        }
        var Y = ge.length > 0 ? ", expected one of type [" + ge.join(", ") + "]" : "";
        return new p("Invalid " + ne + " `" + de + "` supplied to " + ("`" + ee + "`" + Y + "."));
      }
      return v(X);
    }
    function B() {
      function T(M, W, X, q, ve) {
        return Ee(M[W]) ? null : new p("Invalid " + q + " `" + ve + "` supplied to " + ("`" + X + "`, expected a ReactNode."));
      }
      return v(T);
    }
    function K(T, M, W, X, q) {
      return new p(
        (T || "React class") + ": " + M + " type `" + W + "." + X + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + q + "`."
      );
    }
    function V(T) {
      function M(W, X, q, ve, ee) {
        var ne = W[X], de = Ae(ne);
        if (de !== "object")
          return new p("Invalid " + ve + " `" + ee + "` of type `" + de + "` " + ("supplied to `" + q + "`, expected `object`."));
        for (var ge in T) {
          var fe = T[ge];
          if (typeof fe != "function")
            return K(q, ve, ee, ge, Ie(fe));
          var Be = fe(ne, ge, q, ve, ee + "." + ge, r);
          if (Be)
            return Be;
        }
        return null;
      }
      return v(M);
    }
    function Pe(T) {
      function M(W, X, q, ve, ee) {
        var ne = W[X], de = Ae(ne);
        if (de !== "object")
          return new p("Invalid " + ve + " `" + ee + "` of type `" + de + "` " + ("supplied to `" + q + "`, expected `object`."));
        var ge = t({}, W[X], T);
        for (var fe in ge) {
          var Be = T[fe];
          if (n(T, fe) && typeof Be != "function")
            return K(q, ve, ee, fe, Ie(Be));
          if (!Be)
            return new p(
              "Invalid " + ve + " `" + ee + "` key `" + fe + "` supplied to `" + q + "`.\nBad object: " + JSON.stringify(W[X], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var S = Be(ne, fe, q, ve, ee + "." + fe, r);
          if (S)
            return S;
        }
        return null;
      }
      return v(M);
    }
    function Ee(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(Ee);
          if (T === null || a(T))
            return !0;
          var M = d(T);
          if (M) {
            var W = M.call(T), X;
            if (M !== T.entries) {
              for (; !(X = W.next()).done; )
                if (!Ee(X.value))
                  return !1;
            } else
              for (; !(X = W.next()).done; ) {
                var q = X.value;
                if (q && !Ee(q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function Fe(T, M) {
      return T === "symbol" ? !0 : M ? M["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && M instanceof Symbol : !1;
    }
    function Ae(T) {
      var M = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : Fe(M, T) ? "symbol" : M;
    }
    function Ie(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var M = Ae(T);
      if (M === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return M;
    }
    function Xe(T) {
      var M = Ie(T);
      switch (M) {
        case "array":
        case "object":
          return "an " + M;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + M;
        default:
          return M;
      }
    }
    function Qe(T) {
      return !T.constructor || !T.constructor.name ? h : T.constructor.name;
    }
    return m.checkPropTypes = s, m.resetWarningCache = s.resetWarningCache, m.PropTypes = m, m;
  }, _o;
}
if (process.env.NODE_ENV !== "production") {
  var qy = Cd(), Hy = !0;
  wa.exports = Wy()(qy.isElement, Hy);
} else
  wa.exports = Fy()();
var Zy = wa.exports;
const Er = /* @__PURE__ */ za(Zy);
var Ky = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, Yy = Object.defineProperty, Gy = Object.defineProperties, Qy = Object.getOwnPropertyDescriptors, pi = Object.getOwnPropertySymbols, Rd = Object.prototype.hasOwnProperty, Ad = Object.prototype.propertyIsEnumerable, Sl = (e, t, r) => t in e ? Yy(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, El = (e, t) => {
  for (var r in t || (t = {}))
    Rd.call(t, r) && Sl(e, r, t[r]);
  if (pi)
    for (var r of pi(t))
      Ad.call(t, r) && Sl(e, r, t[r]);
  return e;
}, Jy = (e, t) => Gy(e, Qy(t)), Xy = (e, t) => {
  var r = {};
  for (var n in e)
    Rd.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && pi)
    for (var n of pi(e))
      t.indexOf(n) < 0 && Ad.call(e, n) && (r[n] = e[n]);
  return r;
}, bt = (e, t, r) => {
  const n = me(
    (s, i) => {
      var o = s, { color: a = "currentColor", size: c = 24, stroke: l = 2, children: u } = o, d = Xy(o, ["color", "size", "stroke", "children"]);
      return U(
        "svg",
        El(Jy(El({
          ref: i
        }, Ky), {
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
}, Xa = bt("alert-circle", "IconAlertCircle", [
  ["path", { d: "M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0", key: "svg-0" }],
  ["path", { d: "M12 8v4", key: "svg-1" }],
  ["path", { d: "M12 16h.01", key: "svg-2" }]
]), eg = bt("alert-triangle", "IconAlertTriangle", [
  ["path", { d: "M12 9v4", key: "svg-0" }],
  [
    "path",
    {
      d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M12 16h.01", key: "svg-2" }]
]), tg = bt("book", "IconBook", [
  ["path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-0" }],
  ["path", { d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-1" }],
  ["path", { d: "M3 6l0 13", key: "svg-2" }],
  ["path", { d: "M12 6l0 13", key: "svg-3" }],
  ["path", { d: "M21 6l0 13", key: "svg-4" }]
]), rg = bt("chalkboard", "IconChalkboard", [
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
]), So = bt(
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
), Ol = bt("info-square", "IconInfoSquare", [
  ["path", { d: "M12 9h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), ng = bt("menu-deep", "IconMenuDeep", [
  ["path", { d: "M4 6h16", key: "svg-0" }],
  ["path", { d: "M7 12h13", key: "svg-1" }],
  ["path", { d: "M10 18h10", key: "svg-2" }]
]), sg = bt("phone-call", "IconPhoneCall", [
  [
    "path",
    {
      d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M15 7a2 2 0 0 1 2 2", key: "svg-1" }],
  ["path", { d: "M15 3a6 6 0 0 1 6 6", key: "svg-2" }]
]), Nd = bt("square-check", "IconSquareCheck", [
  [
    "path",
    {
      d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]
]), ig = bt("square-x", "IconSquareX", [
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 9l6 6m0 -6l-6 6", key: "svg-1" }]
]), Eo = bt("wash-dryclean", "IconWashDryclean", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }]
]), jd = bt("x", "IconX", [
  ["path", { d: "M18 6l-12 12", key: "svg-0" }],
  ["path", { d: "M6 6l12 12", key: "svg-1" }]
]);
function le() {
  return le = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, le.apply(this, arguments);
}
function og(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function Pd(...e) {
  return (t) => e.forEach(
    (r) => og(r, t)
  );
}
function xt(...e) {
  return je(Pd(...e), e);
}
const Bi = /* @__PURE__ */ me((e, t) => {
  const { children: r, ...n } = e, s = Dr.toArray(r), i = s.find(cg);
  if (i) {
    const o = i.props.children, a = s.map((c) => c === i ? Dr.count(o) > 1 ? Dr.only(null) : /* @__PURE__ */ En(o) ? o.props.children : null : c);
    return /* @__PURE__ */ U(_a, le({}, n, {
      ref: t
    }), /* @__PURE__ */ En(o) ? /* @__PURE__ */ Ai(o, void 0, a) : null);
  }
  return /* @__PURE__ */ U(_a, le({}, n, {
    ref: t
  }), r);
});
Bi.displayName = "Slot";
const _a = /* @__PURE__ */ me((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ En(r) ? /* @__PURE__ */ Ai(r, {
    ...lg(n, r.props),
    ref: t ? Pd(t, r.ref) : r.ref
  }) : Dr.count(r) > 1 ? Dr.only(null) : null;
});
_a.displayName = "SlotClone";
const ag = ({ children: e }) => /* @__PURE__ */ U(kt, null, e);
function cg(e) {
  return /* @__PURE__ */ En(e) && e.type === ag;
}
function lg(e, t) {
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
function $d(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = $d(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function ug() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = $d(e)) && (n && (n += " "), n += t);
  return n;
}
const Cl = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, Tl = ug, ec = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return Tl(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: i } = t, o = Object.keys(s).map((l) => {
    const u = r == null ? void 0 : r[l], d = i == null ? void 0 : i[l];
    if (u === null)
      return null;
    const h = Cl(u) || Cl(d);
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
  return Tl(e, o, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, dg = ec(
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
), ct = $.forwardRef(({ className: e, variant: t, size: r, asChild: n = !1, ...s }, i) => {
  const o = n ? Bi : "button";
  return /* @__PURE__ */ f.jsx(o, { className: Se(dg({ variant: t, size: r, className: e })), ref: i, ...s });
});
ct.displayName = "Button";
const Z = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, className: Se("rounded-lg border bg-card text-card-foreground shadow-sm", e), ...t }));
Z.displayName = "Card";
Z.Header = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, className: Se("flex flex-col space-y-1.5 p-6", e), ...t }));
Z.Header.displayName = "CardHeader";
Z.Title = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("p", { ref: r, className: Se("text-2xl font-semibold leading-none tracking-tight", e), ...t }));
Z.Title.displayName = "CardTitle";
Z.Description = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("p", { ref: r, className: Se("text-sm text-muted-foreground", e), ...t }));
Z.Description.displayName = "CardDescription";
Z.Content = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, className: Se("p-6 pt-0", e), ...t }));
Z.Content.displayName = "CardContent";
Z.Footer = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, className: Se("flex items-center p-6 pt-0", e), ...t }));
Z.Footer.displayName = "CardFooter";
const kd = ({ order: { course_name: e, order_status: t }, time: r, googleMeetLink: n }) => {
  let s;
  switch (t) {
    case "A":
      s = "กำลังจะถึงเวลาเรียน";
      break;
    case "B":
      s = "กำลังเรียน";
      break;
    case "C":
      s = "เรียนจบแล้ว";
      break;
    default:
      s = "เริ่มเรียน";
      break;
  }
  return /* @__PURE__ */ f.jsxs(Z, { className: "relative bg-white rounded-none w-full p-0", children: [
    /* @__PURE__ */ f.jsxs(Z.Header, { className: "p-3", children: [
      /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "การเรียน" }),
      /* @__PURE__ */ f.jsxs("p", { className: "text-lg font-normal", children: [
        "Class Schedule:",
        /* @__PURE__ */ f.jsx("span", { className: "text-orange-400 ml-1", children: s })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(Z.Content, { className: "p-3", children: /* @__PURE__ */ f.jsx(fg, { courseName: e, time: r || "00:00:00", googleMeetLink: n || "" }) })
  ] });
}, fg = ({ courseName: e, time: t, googleMeetLink: r }) => /* @__PURE__ */ f.jsxs(Z, { className: "border-orange-200 bg-orange-100/50 p-3 flex flex-col gap-3", children: [
  /* @__PURE__ */ f.jsx("div", { children: "LOGO" }),
  /* @__PURE__ */ f.jsx("div", { className: "text-center", children: "SVG IMAGE" }),
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "คลาส" }),
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-normal", children: e.split(" ")[1] }),
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-normal", children: "กำลังจะเริ่มใน" })
  ] }),
  /* @__PURE__ */ f.jsx("div", { className: "text-indigo-500 text-2xl text-center font-bold", children: hg(t) }),
  /* @__PURE__ */ f.jsxs(ct, { className: "w-full text-white rounded-xl bg-orange-500 hover:bg-orange-400", onClick: () => window.open(r), children: [
    /* @__PURE__ */ f.jsx(tg, { size: 20, className: "mr-3" }),
    "เข้าห้องเรียน"
  ] })
] }), hg = (e) => {
  const t = () => {
    const a = new Date(e), c = /* @__PURE__ */ new Date(), l = a.getTime() - c.getTime();
    return l > 0 ? l / 1e3 : 0;
  }, [r, n] = re(t());
  if (ue(() => {
    const a = setInterval(() => {
      const c = t();
      n(c);
    }, 1e3);
    return () => clearInterval(a);
  }, []), r === 0)
    return /* @__PURE__ */ f.jsx("div", { className: "text-red-400", children: "00:00:00" });
  const s = Math.floor(r / 3600).toString().padStart(2, "0"), i = Math.floor(r / 60 % 60).toString().padStart(2, "0"), o = Math.floor(r % 60).toString().padStart(2, "0");
  return /* @__PURE__ */ f.jsx("div", { children: `${s}:${i}:${o}` });
}, pg = ec(
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
function Nn({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ f.jsx("div", { className: Se(pg({ variant: t }), e), ...r });
}
function it(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function tc(e, t = []) {
  let r = [];
  function n(i, o) {
    const a = /* @__PURE__ */ Jt(o), c = r.length;
    r = [
      ...r,
      o
    ];
    function l(d) {
      const { scope: h, children: m, ...y } = d, p = (h == null ? void 0 : h[e][c]) || a, v = On(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ U(p.Provider, {
        value: v
      }, m);
    }
    function u(d, h) {
      const m = (h == null ? void 0 : h[e][c]) || a, y = _r(m);
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
    const i = r.map((o) => /* @__PURE__ */ Jt(o));
    return function(a) {
      const c = (a == null ? void 0 : a[e]) || i;
      return On(
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
    mg(s, ...t)
  ];
}
function mg(...e) {
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
      return On(
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
const jn = globalThis != null && globalThis.document ? Ua : () => {
}, vg = $.useId || (() => {
});
let yg = 0;
function Oo(e) {
  const [t, r] = $.useState(vg());
  return jn(() => {
    e || r(
      (n) => n ?? String(yg++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function st(e) {
  const t = he(e);
  return ue(() => {
    t.current = e;
  }), On(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
function gg({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, s] = bg({
    defaultProp: t,
    onChange: r
  }), i = e !== void 0, o = i ? e : n, a = st(r), c = je((l) => {
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
function bg({ defaultProp: e, onChange: t }) {
  const r = re(e), [n] = r, s = he(n), i = st(t);
  return ue(() => {
    s.current !== n && (i(n), s.current = n);
  }, [
    n,
    s,
    i
  ]), r;
}
const xg = [
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
], Ge = xg.reduce((e, t) => {
  const r = /* @__PURE__ */ me((n, s) => {
    const { asChild: i, ...o } = n, a = i ? Bi : t;
    return ue(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ U(a, le({}, o, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function wg(e, t) {
  e && su(
    () => e.dispatchEvent(t)
  );
}
function _g(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = st(e);
  ue(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
const Sa = "dismissableLayer.update", Sg = "dismissableLayer.pointerDownOutside", Eg = "dismissableLayer.focusOutside";
let Rl;
const Og = /* @__PURE__ */ Jt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), Cg = /* @__PURE__ */ me((e, t) => {
  var r;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: s, onPointerDownOutside: i, onFocusOutside: o, onInteractOutside: a, onDismiss: c, ...l } = e, u = _r(Og), [d, h] = re(null), m = (r = d == null ? void 0 : d.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, y] = re({}), p = xt(
    t,
    (j) => h(j)
  ), v = Array.from(u.layers), [_] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), O = v.indexOf(_), w = d ? v.indexOf(d) : -1, E = u.layersWithOutsidePointerEventsDisabled.size > 0, x = w >= O, A = Tg((j) => {
    const R = j.target, B = [
      ...u.branches
    ].some(
      (K) => K.contains(R)
    );
    !x || B || (i == null || i(j), a == null || a(j), j.defaultPrevented || c == null || c());
  }, m), k = Rg((j) => {
    const R = j.target;
    [
      ...u.branches
    ].some(
      (K) => K.contains(R)
    ) || (o == null || o(j), a == null || a(j), j.defaultPrevented || c == null || c());
  }, m);
  return _g((j) => {
    w === u.layers.size - 1 && (s == null || s(j), !j.defaultPrevented && c && (j.preventDefault(), c()));
  }, m), ue(() => {
    if (d)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (Rl = m.body.style.pointerEvents, m.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), Al(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (m.body.style.pointerEvents = Rl);
      };
  }, [
    d,
    m,
    n,
    u
  ]), ue(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), Al());
  }, [
    d,
    u
  ]), ue(() => {
    const j = () => y({});
    return document.addEventListener(Sa, j), () => document.removeEventListener(Sa, j);
  }, []), /* @__PURE__ */ U(Ge.div, le({}, l, {
    ref: p,
    style: {
      pointerEvents: E ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: it(e.onFocusCapture, k.onFocusCapture),
    onBlurCapture: it(e.onBlurCapture, k.onBlurCapture),
    onPointerDownCapture: it(e.onPointerDownCapture, A.onPointerDownCapture)
  }));
});
function Tg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = st(e), n = he(!1), s = he(() => {
  });
  return ue(() => {
    const i = (a) => {
      if (a.target && !n.current) {
        let l = function() {
          Id(Sg, r, c, {
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
function Rg(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = st(e), n = he(!1);
  return ue(() => {
    const s = (i) => {
      i.target && !n.current && Id(Eg, r, {
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
function Al() {
  const e = new CustomEvent(Sa);
  document.dispatchEvent(e);
}
function Id(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, i = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && s.addEventListener(e, t, {
    once: !0
  }), n ? wg(s, i) : s.dispatchEvent(i);
}
const Co = "focusScope.autoFocusOnMount", To = "focusScope.autoFocusOnUnmount", Nl = {
  bubbles: !1,
  cancelable: !0
}, Ag = /* @__PURE__ */ me((e, t) => {
  const { loop: r = !1, trapped: n = !1, onMountAutoFocus: s, onUnmountAutoFocus: i, ...o } = e, [a, c] = re(null), l = st(s), u = st(i), d = he(null), h = xt(
    t,
    (p) => c(p)
  ), m = he({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  ue(() => {
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
      }, _ = function(w) {
        if (document.activeElement === document.body)
          for (const x of w)
            x.removedNodes.length > 0 && cr(a);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", v);
      const O = new MutationObserver(_);
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
  ]), ue(() => {
    if (a) {
      Pl.add(m);
      const p = document.activeElement;
      if (!a.contains(p)) {
        const _ = new CustomEvent(Co, Nl);
        a.addEventListener(Co, l), a.dispatchEvent(_), _.defaultPrevented || (Ng(Ig(Md(a)), {
          select: !0
        }), document.activeElement === p && cr(a));
      }
      return () => {
        a.removeEventListener(Co, l), setTimeout(() => {
          const _ = new CustomEvent(To, Nl);
          a.addEventListener(To, u), a.dispatchEvent(_), _.defaultPrevented || cr(p ?? document.body, {
            select: !0
          }), a.removeEventListener(To, u), Pl.remove(m);
        }, 0);
      };
    }
  }, [
    a,
    l,
    u,
    m
  ]);
  const y = je((p) => {
    if (!r && !n || m.paused)
      return;
    const v = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, _ = document.activeElement;
    if (v && _) {
      const O = p.currentTarget, [w, E] = jg(O);
      w && E ? !p.shiftKey && _ === E ? (p.preventDefault(), r && cr(w, {
        select: !0
      })) : p.shiftKey && _ === w && (p.preventDefault(), r && cr(E, {
        select: !0
      })) : _ === O && p.preventDefault();
    }
  }, [
    r,
    n,
    m.paused
  ]);
  return /* @__PURE__ */ U(Ge.div, le({
    tabIndex: -1
  }, o, {
    ref: h,
    onKeyDown: y
  }));
});
function Ng(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (cr(n, {
      select: t
    }), document.activeElement !== r)
      return;
}
function jg(e) {
  const t = Md(e), r = jl(t, e), n = jl(t.reverse(), e);
  return [
    r,
    n
  ];
}
function Md(e) {
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
function jl(e, t) {
  for (const r of e)
    if (!Pg(r, {
      upTo: t
    }))
      return r;
}
function Pg(e, { upTo: t }) {
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
function $g(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function cr(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && $g(e) && t && e.select();
  }
}
const Pl = kg();
function kg() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = $l(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = $l(e, t), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function $l(e, t) {
  const r = [
    ...e
  ], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Ig(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Mg = /* @__PURE__ */ me((e, t) => {
  var r;
  const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = e;
  return n ? /* @__PURE__ */ rh.createPortal(/* @__PURE__ */ U(Ge.div, le({}, s, {
    ref: t
  })), n) : null;
});
function Dg(e, t) {
  return nu((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const Sr = (e) => {
  const { present: t, children: r } = e, n = Lg(t), s = typeof r == "function" ? r({
    present: n.isPresent
  }) : Dr.only(r), i = xt(n.ref, s.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ Ai(s, {
    ref: i
  }) : null;
};
Sr.displayName = "Presence";
function Lg(e) {
  const [t, r] = re(), n = he({}), s = he(e), i = he("none"), o = e ? "mounted" : "unmounted", [a, c] = Dg(o, {
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
  return ue(() => {
    const l = Bs(n.current);
    i.current = a === "mounted" ? l : "none";
  }, [
    a
  ]), jn(() => {
    const l = n.current, u = s.current;
    if (u !== e) {
      const h = i.current, m = Bs(l);
      e ? c("MOUNT") : m === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && h !== m ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    c
  ]), jn(() => {
    if (t) {
      const l = (d) => {
        const m = Bs(n.current).includes(d.animationName);
        d.target === t && m && su(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (i.current = Bs(n.current));
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
    ref: je((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function Bs(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let Ro = 0;
function Fg() {
  ue(() => {
    var e, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : kl()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : kl()), Ro++, () => {
      Ro === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), Ro--;
    };
  }, []);
}
function kl() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var jt = function() {
  return jt = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var i in r)
        Object.prototype.hasOwnProperty.call(r, i) && (t[i] = r[i]);
    }
    return t;
  }, jt.apply(this, arguments);
};
function Dd(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function Ug(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = t.length, i; n < s; n++)
      (i || !(n in t)) && (i || (i = Array.prototype.slice.call(t, 0, n)), i[n] = t[n]);
  return e.concat(i || Array.prototype.slice.call(t));
}
var ti = "right-scroll-bar-position", ri = "width-before-scroll-bar", zg = "with-scroll-bars-hidden", Bg = "--removed-body-scroll-bar-size";
function Ao(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Vg(e, t) {
  var r = re(function() {
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
var Il = /* @__PURE__ */ new WeakMap();
function Wg(e, t) {
  var r = Vg(t || null, function(n) {
    return e.forEach(function(s) {
      return Ao(s, n);
    });
  });
  return $.useLayoutEffect(function() {
    var n = Il.get(r);
    if (n) {
      var s = new Set(n), i = new Set(e), o = r.current;
      s.forEach(function(a) {
        i.has(a) || Ao(a, null);
      }), i.forEach(function(a) {
        s.has(a) || Ao(a, o);
      });
    }
    Il.set(r, e);
  }, [e]), r;
}
function qg(e) {
  return e;
}
function Hg(e, t) {
  t === void 0 && (t = qg);
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
function Zg(e) {
  e === void 0 && (e = {});
  var t = Hg(null);
  return t.options = jt({ async: !0, ssr: !1 }, e), t;
}
var Ld = function(e) {
  var t = e.sideCar, r = Dd(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return $.createElement(n, jt({}, r));
};
Ld.isSideCarExport = !0;
function Kg(e, t) {
  return e.useMedium(t), Ld;
}
var Fd = Zg(), No = function() {
}, Vi = $.forwardRef(function(e, t) {
  var r = $.useRef(null), n = $.useState({
    onScrollCapture: No,
    onWheelCapture: No,
    onTouchMoveCapture: No
  }), s = n[0], i = n[1], o = e.forwardProps, a = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, m = e.noIsolation, y = e.inert, p = e.allowPinchZoom, v = e.as, _ = v === void 0 ? "div" : v, O = Dd(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), w = h, E = Wg([r, t]), x = jt(jt({}, O), s);
  return $.createElement(
    $.Fragment,
    null,
    u && $.createElement(w, { sideCar: Fd, removeScrollBar: l, shards: d, noIsolation: m, inert: y, setCallbacks: i, allowPinchZoom: !!p, lockRef: r }),
    o ? $.cloneElement($.Children.only(a), jt(jt({}, x), { ref: E })) : $.createElement(_, jt({}, x, { className: c, ref: E }), a)
  );
});
Vi.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
Vi.classNames = {
  fullWidth: ri,
  zeroRight: ti
};
var Yg = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function Gg() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = Yg();
  return t && e.setAttribute("nonce", t), e;
}
function Qg(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function Jg(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var Xg = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = Gg()) && (Qg(t, r), Jg(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, eb = function() {
  var e = Xg();
  return function(t, r) {
    $.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Ud = function() {
  var e = eb(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, tb = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, jo = function(e) {
  return parseInt(e || "", 10) || 0;
}, rb = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [jo(r), jo(n), jo(s)];
}, nb = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return tb;
  var t = rb(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, sb = Ud(), ib = function(e, t, r, n) {
  var s = e.left, i = e.top, o = e.right, a = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(zg, ` {
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
  
  .`).concat(ti, ` {
    right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(ri, ` {
    margin-right: `).concat(a, "px ").concat(n, `;
  }
  
  .`).concat(ti, " .").concat(ti, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(ri, " .").concat(ri, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(Bg, ": ").concat(a, `px;
  }
`);
}, ob = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n, i = $.useMemo(function() {
    return nb(s);
  }, [s]);
  return $.createElement(sb, { styles: ib(i, !t, s, r ? "" : "!important") });
}, Ea = !1;
if (typeof window < "u")
  try {
    var Vs = Object.defineProperty({}, "passive", {
      get: function() {
        return Ea = !0, !0;
      }
    });
    window.addEventListener("test", Vs, Vs), window.removeEventListener("test", Vs, Vs);
  } catch {
    Ea = !1;
  }
var Zr = Ea ? { passive: !1 } : !1, ab = function(e) {
  return e.tagName === "TEXTAREA";
}, zd = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !ab(e) && r[t] === "visible")
  );
}, cb = function(e) {
  return zd(e, "overflowY");
}, lb = function(e) {
  return zd(e, "overflowX");
}, Ml = function(e, t) {
  var r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = Bd(e, r);
    if (n) {
      var s = Vd(e, r), i = s[1], o = s[2];
      if (i > o)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, ub = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, db = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Bd = function(e, t) {
  return e === "v" ? cb(t) : lb(t);
}, Vd = function(e, t) {
  return e === "v" ? ub(t) : db(t);
}, fb = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, hb = function(e, t, r, n, s) {
  var i = fb(e, window.getComputedStyle(t).direction), o = i * n, a = r.target, c = t.contains(a), l = !1, u = o > 0, d = 0, h = 0;
  do {
    var m = Vd(e, a), y = m[0], p = m[1], v = m[2], _ = p - v - i * y;
    (y || _) && Bd(e, a) && (d += _, h += y), a = a.parentNode;
  } while (
    // portaled content
    !c && a !== document.body || // self content
    c && (t.contains(a) || t === a)
  );
  return (u && (s && d === 0 || !s && o > d) || !u && (s && h === 0 || !s && -o > h)) && (l = !0), l;
}, Ws = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, Dl = function(e) {
  return [e.deltaX, e.deltaY];
}, Ll = function(e) {
  return e && "current" in e ? e.current : e;
}, pb = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, mb = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, vb = 0, Kr = [];
function yb(e) {
  var t = $.useRef([]), r = $.useRef([0, 0]), n = $.useRef(), s = $.useState(vb++)[0], i = $.useState(function() {
    return Ud();
  })[0], o = $.useRef(e);
  $.useEffect(function() {
    o.current = e;
  }, [e]), $.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var p = Ug([e.lockRef.current], (e.shards || []).map(Ll), !0).filter(Boolean);
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
    var _ = Ws(p), O = r.current, w = "deltaX" in p ? p.deltaX : O[0] - _[0], E = "deltaY" in p ? p.deltaY : O[1] - _[1], x, A = p.target, k = Math.abs(w) > Math.abs(E) ? "h" : "v";
    if ("touches" in p && k === "h" && A.type === "range")
      return !1;
    var j = Ml(k, A);
    if (!j)
      return !0;
    if (j ? x = k : (x = k === "v" ? "h" : "v", j = Ml(k, A)), !j)
      return !1;
    if (!n.current && "changedTouches" in p && (w || E) && (n.current = x), !x)
      return !0;
    var R = n.current || x;
    return hb(R, v, p, R === "h" ? w : E, !0);
  }, []), c = $.useCallback(function(p) {
    var v = p;
    if (!(!Kr.length || Kr[Kr.length - 1] !== i)) {
      var _ = "deltaY" in v ? Dl(v) : Ws(v), O = t.current.filter(function(x) {
        return x.name === v.type && x.target === v.target && pb(x.delta, _);
      })[0];
      if (O && O.should) {
        v.cancelable && v.preventDefault();
        return;
      }
      if (!O) {
        var w = (o.current.shards || []).map(Ll).filter(Boolean).filter(function(x) {
          return x.contains(v.target);
        }), E = w.length > 0 ? a(v, w[0]) : !o.current.noIsolation;
        E && v.cancelable && v.preventDefault();
      }
    }
  }, []), l = $.useCallback(function(p, v, _, O) {
    var w = { name: p, delta: v, target: _, should: O };
    t.current.push(w), setTimeout(function() {
      t.current = t.current.filter(function(E) {
        return E !== w;
      });
    }, 1);
  }, []), u = $.useCallback(function(p) {
    r.current = Ws(p), n.current = void 0;
  }, []), d = $.useCallback(function(p) {
    l(p.type, Dl(p), p.target, a(p, e.lockRef.current));
  }, []), h = $.useCallback(function(p) {
    l(p.type, Ws(p), p.target, a(p, e.lockRef.current));
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
    y ? $.createElement(i, { styles: mb(s) }) : null,
    m ? $.createElement(ob, { gapMode: "margin" }) : null
  );
}
const gb = Kg(Fd, yb);
var Wd = $.forwardRef(function(e, t) {
  return $.createElement(Vi, jt({}, e, { ref: t, sideCar: gb }));
});
Wd.classNames = Vi.classNames;
const bb = Wd;
var xb = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, Yr = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), Hs = {}, Po = 0, qd = function(e) {
  return e && (e.host || qd(e.parentNode));
}, wb = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = qd(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, _b = function(e, t, r, n) {
  var s = wb(t, Array.isArray(e) ? e : [e]);
  Hs[r] || (Hs[r] = /* @__PURE__ */ new WeakMap());
  var i = Hs[r], o = [], a = /* @__PURE__ */ new Set(), c = new Set(s), l = function(d) {
    !d || a.has(d) || (a.add(d), l(d.parentNode));
  };
  s.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (a.has(h))
        u(h);
      else {
        var m = h.getAttribute(n), y = m !== null && m !== "false", p = (Yr.get(h) || 0) + 1, v = (i.get(h) || 0) + 1;
        Yr.set(h, p), i.set(h, v), o.push(h), p === 1 && y && qs.set(h, !0), v === 1 && h.setAttribute(r, "true"), y || h.setAttribute(n, "true");
      }
    });
  };
  return u(t), a.clear(), Po++, function() {
    o.forEach(function(d) {
      var h = Yr.get(d) - 1, m = i.get(d) - 1;
      Yr.set(d, h), i.set(d, m), h || (qs.has(d) || d.removeAttribute(n), qs.delete(d)), m || d.removeAttribute(r);
    }), Po--, Po || (Yr = /* @__PURE__ */ new WeakMap(), Yr = /* @__PURE__ */ new WeakMap(), qs = /* @__PURE__ */ new WeakMap(), Hs = {});
  };
}, Sb = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = t || xb(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), _b(n, s, r, "aria-hidden")) : function() {
    return null;
  };
};
const Hd = "Dialog", [Zd, aw] = tc(Hd), [Eb, Et] = Zd(Hd), Ob = (e) => {
  const { __scopeDialog: t, children: r, open: n, defaultOpen: s, onOpenChange: i, modal: o = !0 } = e, a = he(null), c = he(null), [l = !1, u] = gg({
    prop: n,
    defaultProp: s,
    onChange: i
  });
  return /* @__PURE__ */ U(Eb, {
    scope: t,
    triggerRef: a,
    contentRef: c,
    contentId: Oo(),
    titleId: Oo(),
    descriptionId: Oo(),
    open: l,
    onOpenChange: u,
    onOpenToggle: je(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: o
  }, r);
}, Cb = "DialogTrigger", Tb = /* @__PURE__ */ me((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = Et(Cb, r), i = xt(t, s.triggerRef);
  return /* @__PURE__ */ U(Ge.button, le({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": s.open,
    "aria-controls": s.contentId,
    "data-state": rc(s.open)
  }, n, {
    ref: i,
    onClick: it(e.onClick, s.onOpenToggle)
  }));
}), Kd = "DialogPortal", [Rb, Yd] = Zd(Kd, {
  forceMount: void 0
}), Ab = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: s } = e, i = Et(Kd, t);
  return /* @__PURE__ */ U(Rb, {
    scope: t,
    forceMount: r
  }, Dr.map(
    n,
    (o) => /* @__PURE__ */ U(Sr, {
      present: r || i.open
    }, /* @__PURE__ */ U(Mg, {
      asChild: !0,
      container: s
    }, o))
  ));
}, Oa = "DialogOverlay", Nb = /* @__PURE__ */ me((e, t) => {
  const r = Yd(Oa, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, i = Et(Oa, e.__scopeDialog);
  return i.modal ? /* @__PURE__ */ U(Sr, {
    present: n || i.open
  }, /* @__PURE__ */ U(jb, le({}, s, {
    ref: t
  }))) : null;
}), jb = /* @__PURE__ */ me((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = Et(Oa, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ U(bb, {
      as: Bi,
      allowPinchZoom: !0,
      shards: [
        s.contentRef
      ]
    }, /* @__PURE__ */ U(Ge.div, le({
      "data-state": rc(s.open)
    }, n, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
}), as = "DialogContent", Pb = /* @__PURE__ */ me((e, t) => {
  const r = Yd(as, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, i = Et(as, e.__scopeDialog);
  return /* @__PURE__ */ U(Sr, {
    present: n || i.open
  }, i.modal ? /* @__PURE__ */ U($b, le({}, s, {
    ref: t
  })) : /* @__PURE__ */ U(kb, le({}, s, {
    ref: t
  })));
}), $b = /* @__PURE__ */ me((e, t) => {
  const r = Et(as, e.__scopeDialog), n = he(null), s = xt(t, r.contentRef, n);
  return ue(() => {
    const i = n.current;
    if (i)
      return Sb(i);
  }, []), /* @__PURE__ */ U(Gd, le({}, e, {
    ref: s,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: it(e.onCloseAutoFocus, (i) => {
      var o;
      i.preventDefault(), (o = r.triggerRef.current) === null || o === void 0 || o.focus();
    }),
    onPointerDownOutside: it(e.onPointerDownOutside, (i) => {
      const o = i.detail.originalEvent, a = o.button === 0 && o.ctrlKey === !0;
      (o.button === 2 || a) && i.preventDefault();
    }),
    onFocusOutside: it(
      e.onFocusOutside,
      (i) => i.preventDefault()
    )
  }));
}), kb = /* @__PURE__ */ me((e, t) => {
  const r = Et(as, e.__scopeDialog), n = he(!1), s = he(!1);
  return /* @__PURE__ */ U(Gd, le({}, e, {
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
}), Gd = /* @__PURE__ */ me((e, t) => {
  const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: s, onCloseAutoFocus: i, ...o } = e, a = Et(as, r), c = he(null), l = xt(t, c);
  return Fg(), /* @__PURE__ */ U(kt, null, /* @__PURE__ */ U(Ag, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: s,
    onUnmountAutoFocus: i
  }, /* @__PURE__ */ U(Cg, le({
    role: "dialog",
    id: a.contentId,
    "aria-describedby": a.descriptionId,
    "aria-labelledby": a.titleId,
    "data-state": rc(a.open)
  }, o, {
    ref: l,
    onDismiss: () => a.onOpenChange(!1)
  }))), !1);
}), Ib = "DialogTitle", Mb = /* @__PURE__ */ me((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = Et(Ib, r);
  return /* @__PURE__ */ U(Ge.h2, le({
    id: s.titleId
  }, n, {
    ref: t
  }));
}), Db = "DialogDescription", Lb = /* @__PURE__ */ me((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = Et(Db, r);
  return /* @__PURE__ */ U(Ge.p, le({
    id: s.descriptionId
  }, n, {
    ref: t
  }));
}), Fb = "DialogClose", Ub = /* @__PURE__ */ me((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = Et(Fb, r);
  return /* @__PURE__ */ U(Ge.button, le({
    type: "button"
  }, n, {
    ref: t,
    onClick: it(
      e.onClick,
      () => s.onOpenChange(!1)
    )
  }));
});
function rc(e) {
  return e ? "open" : "closed";
}
const zb = Ob, Bb = Tb, Vb = Ab, Qd = Nb, Jd = Pb, Xd = Mb, ef = Lb, tf = Ub;
function Wb(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), s, i;
  for (i = 0; i < n.length; i++)
    s = n[i], !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var qb = ["color"], Hb = /* @__PURE__ */ me(function(e, t) {
  var r = e.color, n = r === void 0 ? "currentColor" : r, s = Wb(e, qb);
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
const J = zb;
J.Trigger = Bb;
J.Portal = Vb;
J.Close = tf;
J.Overlay = $.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
    Qd,
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
J.Overlay.displayName = Qd.displayName;
J.Content = $.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(J.Portal, { children: [
    /* @__PURE__ */ f.jsx(J.Overlay, {}),
    /* @__PURE__ */ f.jsxs(
      Jd,
      {
        ref: n,
        className: Se(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ f.jsxs(tf, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ f.jsx(Hb, { className: "h-4 w-4" }),
            /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
J.Content.displayName = Jd.displayName;
J.Header = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: Se("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
J.Header.displayName = "DialogHeader";
J.Footer = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: Se("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
J.Footer.displayName = "DialogFooter";
J.Title = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(Xd, { ref: r, className: Se("text-lg font-semibold leading-none tracking-tight", e), ...t }));
J.Title.displayName = Xd.displayName;
J.Description = $.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(ef, { ref: r, className: Se("text-sm text-muted-foreground", e), ...t })
);
J.Description.displayName = ef.displayName;
const nc = $.forwardRef(({ className: e, type: t, ...r }, n) => /* @__PURE__ */ f.jsx(
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
nc.displayName = "Input";
const Zb = /* @__PURE__ */ me((e, t) => /* @__PURE__ */ U(Ge.label, le({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), rf = Zb, Kb = ec(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), nf = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  rf,
  {
    ref: r,
    className: Se(Kb(), e),
    ...t
  }
));
nf.displayName = rf.displayName;
const sf = "Avatar", [Yb, cw] = tc(sf), [Gb, of] = Yb(sf), Qb = /* @__PURE__ */ me((e, t) => {
  const { __scopeAvatar: r, ...n } = e, [s, i] = re("idle");
  return /* @__PURE__ */ U(Gb, {
    scope: r,
    imageLoadingStatus: s,
    onImageLoadingStatusChange: i
  }, /* @__PURE__ */ U(Ge.span, le({}, n, {
    ref: t
  })));
}), Jb = "AvatarImage", Xb = /* @__PURE__ */ me((e, t) => {
  const { __scopeAvatar: r, src: n, onLoadingStatusChange: s = () => {
  }, ...i } = e, o = of(Jb, r), a = r0(n), c = st((l) => {
    s(l), o.onImageLoadingStatusChange(l);
  });
  return jn(() => {
    a !== "idle" && c(a);
  }, [
    a,
    c
  ]), a === "loaded" ? /* @__PURE__ */ U(Ge.img, le({}, i, {
    ref: t,
    src: n
  })) : null;
}), e0 = "AvatarFallback", t0 = /* @__PURE__ */ me((e, t) => {
  const { __scopeAvatar: r, delayMs: n, ...s } = e, i = of(e0, r), [o, a] = re(n === void 0);
  return ue(() => {
    if (n !== void 0) {
      const c = window.setTimeout(
        () => a(!0),
        n
      );
      return () => window.clearTimeout(c);
    }
  }, [
    n
  ]), o && i.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ U(Ge.span, le({}, s, {
    ref: t
  })) : null;
});
function r0(e) {
  const [t, r] = re("idle");
  return jn(() => {
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
const af = Qb, cf = Xb, lf = t0, Le = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(af, { ref: r, className: Se("relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full", e), ...t }));
Le.displayName = af.displayName;
Le.Image = $.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(cf, { ref: r, className: Se("aspect-square h-full w-full", e), ...t }));
Le.Image.displayName = cf.displayName;
Le.Fallback = $.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(lf, { ref: r, className: Se("flex h-full w-full items-center justify-center rounded-full bg-muted", e), ...t })
);
Le.Fallback.displayName = lf.displayName;
const uf = ({ teacher: e, hasButton: t = !0 }) => /* @__PURE__ */ f.jsx(Z, { className: "rounded-none bg-white w-full", children: /* @__PURE__ */ f.jsxs(Z.Content, { className: "p-3", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row justify-between w-full", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center gap-3", children: [
      /* @__PURE__ */ f.jsxs(Le, { className: "border-orange-400 border-2", children: [
        /* @__PURE__ */ f.jsx(Le.Image, { src: e.photo_url, alt: e.firstname }),
        /* @__PURE__ */ f.jsxs(Le.Fallback, { children: [
          e.firstname[0],
          e.lastname[0]
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col mr-2", children: [
        /* @__PURE__ */ f.jsx("div", { className: "flex flex-col", children: e != null && e.title ? /* @__PURE__ */ f.jsx("p", { className: "text-nowrap", children: e.title }) : /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-2", children: [
          /* @__PURE__ */ f.jsx("p", { children: e.firstname }),
          /* @__PURE__ */ f.jsx("p", { children: e.lastname })
        ] }) }),
        /* @__PURE__ */ f.jsx("p", { children: "⭐ 4.5" })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-end gap-2", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ f.jsx(sg, {}),
        " ",
        /* @__PURE__ */ f.jsx("div", { children: e.phone })
      ] }),
      /* @__PURE__ */ f.jsx(
        Nn,
        {
          className: "w-fit hover:bg-blue-100 bg-blue-100 text-blue-400 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]",
          variant: "secondary",
          children: "ดูรายละเอียด"
        }
      )
    ] }) })
  ] }),
  /* @__PURE__ */ f.jsxs(J, { children: [
    t && /* @__PURE__ */ f.jsx(J.Trigger, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(ct, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "เปลี่ยนครู" }) }),
    /* @__PURE__ */ f.jsxs(J.Content, { className: "bg-white", children: [
      /* @__PURE__ */ f.jsxs(J.Header, { children: [
        /* @__PURE__ */ f.jsx(J.Title, { children: /* @__PURE__ */ f.jsxs("p", { className: "text-xl", children: [
          "เปลี่ยนครู ",
          e.firstname,
          " ",
          e.lastname,
          " (",
          e.title,
          ")"
        ] }) }),
        /* @__PURE__ */ f.jsxs(J.Description, { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ f.jsxs("p", { children: [
            "ท่านต้องการเปลี่ยนครู ",
            e.firstname,
            " ",
            e.lastname,
            " หรือไม่?"
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(nf, { children: "หมายเหตุ" }),
            /* @__PURE__ */ f.jsx(nc, { placeholder: "กรอกเหตุผลที่ต้องการเปลี่ยนครู" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs(J.Footer, { className: "mt-3", children: [
        /* @__PURE__ */ f.jsx(J.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(ct, { className: "bg-gray-500 hover:bg-gray-400 w-[50%] text-white", type: "button", children: "ยกเลิก" }) }),
        /* @__PURE__ */ f.jsx(J.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(ct, { className: "bg-red-500 hover:bg-red-400 w-[50%] text-white", type: "submit", children: "ยืนยัน" }) })
      ] })
    ] })
  ] })
] }) }), n0 = (e) => {
  switch (e.comp_type) {
    case "order:teacher:select":
      return /* @__PURE__ */ f.jsx(s0, { ...e });
    case "order:class:start":
      return /* @__PURE__ */ f.jsx(o0, { ...e });
    case "order:evaluate:teacher":
      return /* @__PURE__ */ f.jsx(a0, {});
    case "order:evaluate:result":
      return /* @__PURE__ */ f.jsx(c0, { ...e });
    default:
      return /* @__PURE__ */ f.jsx(f.Fragment, {});
  }
}, s0 = ({ comp_data: e, authToken: t, dataBaseApiUrl: r }) => {
  var i;
  const n = zr({ queryKey: ["candidate-teacher"], queryFn: () => md(r, t, s == null ? void 0 : s.order_id) }), s = JSON.parse(e || "{}");
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Z, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
    /* @__PURE__ */ f.jsx(Z.Header, { className: "p-4", children: /* @__PURE__ */ f.jsx(Z.Title, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "เลือกคุณครูผู้สอนแล้วเริ่มเรียนกันเลย" }) }) }),
    /* @__PURE__ */ f.jsxs(Z.Content, { className: "flex flex-col gap-4 p-4", children: [
      /* @__PURE__ */ f.jsx("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ f.jsxs("p", { className: "font-bold text-xl", children: [
          s == null ? void 0 : s.order_id,
          " คณิตศาสตร์ ป.1"
        ] }),
        /* @__PURE__ */ f.jsx("p", { className: "text-gray-400", children: "กรุณาเลือกคุณครู" })
      ] }) }),
      /* @__PURE__ */ f.jsxs(J, { children: [
        /* @__PURE__ */ f.jsx(J.Trigger, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(ct, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "ค้นหาคุณครู" }) }),
        /* @__PURE__ */ f.jsx(J.Content, { className: "bg-white p-3", children: /* @__PURE__ */ f.jsxs(J.Header, { children: [
          /* @__PURE__ */ f.jsx(J.Title, { children: /* @__PURE__ */ f.jsxs("p", { className: "text-lg", children: [
            "งานสอน ",
            s == null ? void 0 : s.order_id
          ] }) }),
          /* @__PURE__ */ f.jsxs(J.Description, { className: "flex flex-col text-center gap-3", children: [
            n.isSuccess && /* @__PURE__ */ f.jsx("div", { className: "flex flex-col gap-3", children: (i = n.data) == null ? void 0 : i.map((o) => /* @__PURE__ */ f.jsx(i0, { dataBaseApiUrl: r, authToken: t, orderId: s == null ? void 0 : s.order_id, ...o }, o.tid)) }),
            n.isLoading && /* @__PURE__ */ f.jsx(Z, { className: "p-3", children: "กำลังโหลดข้อมูล..." }),
            n.isError && /* @__PURE__ */ f.jsxs(Z, { className: "border-red-500 bg-red-100 p-3", children: [
              "เกิดข้อผิดพลาดในการโหลดข้อมูลครู ",
              n.error.message
            ] })
          ] })
        ] }) })
      ] })
    ] })
  ] }) });
}, i0 = ({ dataBaseApiUrl: e, authToken: t, tid: r, orderId: n, profile: s, background: i }) => {
  const o = Ln(), a = mu({
    mutationFn: (c) => Iv(e, t, c),
    onSuccess: () => {
      o.invalidateQueries({ queryKey: ["candidate-teacher-select"] });
    }
  });
  return /* @__PURE__ */ f.jsxs(Z, { className: "p-3", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center justify-between gap-3", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3", children: [
        /* @__PURE__ */ f.jsxs(Le, { children: [
          /* @__PURE__ */ f.jsx(Le.Image, { className: "w-[60px]", src: s.photo_url, alt: s.title }),
          /* @__PURE__ */ f.jsx(Le.Fallback, { children: s.firstname[0] })
        ] }),
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
          /* @__PURE__ */ f.jsxs(J, { children: [
            /* @__PURE__ */ f.jsx(J.Trigger, { className: "w-full ", children: /* @__PURE__ */ f.jsx(ct, { variant: "link", className: "w-fit h-fit p-0 text-gray-400", children: "ดูข้อมูลเพิ่มเตืม" }) }),
            /* @__PURE__ */ f.jsxs(J.Content, { className: "bg-white", children: [
              /* @__PURE__ */ f.jsx(J.Header, { children: /* @__PURE__ */ f.jsx(J.Title, { children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "ข้อมูลเพิ่มเติม" }) }) }),
              /* @__PURE__ */ f.jsx("div", { children: i.self_desc })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsx(
        ct,
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
    a.isError && /* @__PURE__ */ f.jsx(Z, { className: "p-3 my-3 rounded-none border-red-500 bg-red-100", children: /* @__PURE__ */ f.jsxs("div", { className: "text-red-500 flex flex-row items-center gap-3", children: [
      /* @__PURE__ */ f.jsx(Xa, {}),
      " ",
      a.error.message
    ] }) })
  ] });
}, o0 = ({ comp_data: e }) => {
  const { dataBaseApiUrl: t, authToken: r } = is(), n = zr({ queryKey: ["candidate-teacher-profile"], queryFn: () => md(t, r, s == null ? void 0 : s.order_id) }), s = JSON.parse(JSON.parse(e || "{}")), { st_time: i, google_meet_link: o } = s, a = new Date(s == null ? void 0 : s.st_time), c = String(a.getHours()).padStart(2, "0"), l = String(a.getMinutes()).padStart(2, "0"), u = `${c}:${l}`, d = i;
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Z, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
    /* @__PURE__ */ f.jsxs(Z.Header, { className: "p-4", children: [
      /* @__PURE__ */ f.jsx(Z.Title, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "พร้อมเข้าห้องเรียนกันรึยัง?" }) }),
      /* @__PURE__ */ f.jsx(Z.Description, { children: /* @__PURE__ */ f.jsxs("p", { children: [
        "เช้านี้เรามีนัดกัน ",
        u,
        " นะ ในรายวิชา ",
        s == null ? void 0 : s.order_id,
        " ",
        s == null ? void 0 : s.order_name
      ] }) })
    ] }),
    /* @__PURE__ */ f.jsxs(Z.Content, { className: "flex flex-col gap-4 p-4", children: [
      n.isLoading && /* @__PURE__ */ f.jsx(Z, { className: "flex flex-row items-center justify-center gap-3 p-3 rounded-none bg-white", children: "กำลังโหลดโปรไฟล์ครู..." }),
      n.isError && /* @__PURE__ */ f.jsxs(Z, { className: "flex flex-row items-center justify-center gap-3 p-3 rounded-none bg-red-100 border-red-500", children: [
        /* @__PURE__ */ f.jsx(Xa, {}),
        " ",
        n.error.message
      ] }),
      n.isSuccess && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ f.jsx("p", { className: "font-bold text-xl", children: "กับคุณครู" }),
        /* @__PURE__ */ f.jsx(
          uf,
          {
            hasButton: !1,
            teacher: {
              tid: n.data[0].tid,
              title: n.data[0].profile.title,
              firstname: n.data[0].profile.firstname,
              lastname: n.data[0].profile.lastname,
              photo_url: n.data[0].profile.photo_url
            }
          }
        )
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ f.jsx("p", { className: "font-bold text-xl", children: "พร้อมแล้วกดเข้าห้องได้เลย" }),
        /* @__PURE__ */ f.jsx(
          kd,
          {
            time: d,
            order: { order_id: "A012", order_id_mask: "PpOcpS", order_status: "A", course_id: "MATTH06-04", course_name: "วิชา คณิตศาสตร์ ป.3 หลักสูตร ไทย คอร์ส 6 ครั้ง" },
            googleMeetLink: o
          }
        )
      ] })
    ] })
  ] }) });
}, a0 = () => /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Z, { className: "bg-[#ffebd9] border-none w-[400px] ", children: [
  /* @__PURE__ */ f.jsx(Z.Header, { className: "p-4", children: /* @__PURE__ */ f.jsx(Z.Title, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "เรียนเสร็จแล้ว" }) }) }),
  /* @__PURE__ */ f.jsxs(Z.Content, { className: "flex flex-col gap-4 p-4", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: [
      /* @__PURE__ */ f.jsxs(Le, { children: [
        /* @__PURE__ */ f.jsx(
          Le.Image,
          {
            className: "w-[40px] h-[40px] rounded-md",
            src: "https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
          }
        ),
        /* @__PURE__ */ f.jsx(Le.Fallback, { children: "Class Room Image" })
      ] }),
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ f.jsx("p", { children: "คณิตศาสตร์ ป.1" }),
        /* @__PURE__ */ f.jsxs("div", { children: [
          /* @__PURE__ */ f.jsx("span", { className: "text-orange-500", children: "1" }),
          "/6 คลาส"
        ] })
      ] })
    ] }),
    /* @__PURE__ */ f.jsxs(J, { children: [
      /* @__PURE__ */ f.jsx(J.Trigger, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(ct, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "ทำแบบประเมิน" }) }),
      /* @__PURE__ */ f.jsxs(J.Content, { className: "bg-white", children: [
        /* @__PURE__ */ f.jsxs(J.Header, { children: [
          /* @__PURE__ */ f.jsx(J.Title, { children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "A056 (วิชา คณิตศาสตร์ ป.1 หลักสูตร ไทย คอร์ส 6 ครั้ง)" }) }),
          /* @__PURE__ */ f.jsx(J.Description, { className: "flex flex-col gap-3", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3", children: [
            /* @__PURE__ */ f.jsx(Nn, { className: "bg-gray-400 text-white", children: "คณิตศาสตร์" }),
            /* @__PURE__ */ f.jsx(Nn, { className: "bg-gray-400 text-white", children: "ป.1" })
          ] }) }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ f.jsx("div", { children: "จำนวนครั้งที่สอน 6 ครั้ง" }),
              /* @__PURE__ */ f.jsx("div", { children: "(1/6)" })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-2", children: [
              /* @__PURE__ */ f.jsx(Nd, { className: "text-orange-500" }),
              /* @__PURE__ */ f.jsx("div", { children: "ครั้งที่ 1 2024-01-03" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs(J.Footer, { className: "mt-3 flex flex-row gap-3 ", children: [
          /* @__PURE__ */ f.jsx(J.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(ct, { className: "bg-gray-500 hover:bg-gray-400 w-[50%] text-white", type: "button", children: "ยกเลิก" }) }),
          /* @__PURE__ */ f.jsx(J.Close, { asChild: !0, children: /* @__PURE__ */ f.jsx(ct, { className: "bg-indigo-500 hover:bg-indigo-400 w-[50%] text-white", type: "submit", children: "ส่งประเมิน" }) })
        ] })
      ] })
    ] })
  ] })
] }) }), c0 = ({ comp_data: e }) => {
  const t = JSON.parse(JSON.parse(e || "{}")), { class_order: r, eval_behavior_note: n, eval_study_note: s } = t;
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Z, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
    /* @__PURE__ */ f.jsx(Z.Header, { className: "p-4 ", children: /* @__PURE__ */ f.jsx(Z.Title, { className: "text-xl", children: /* @__PURE__ */ f.jsxs("p", { className: "text-lg", children: [
      "ผลการประเมิน ครั้งที่ ",
      r
    ] }) }) }),
    /* @__PURE__ */ f.jsx(Z.Content, { className: "flex flex-col gap-4 px-4 ", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3", children: [
      /* @__PURE__ */ f.jsx("p", { children: "ผลการประเมินด้านพฤติกรรม" }),
      /* @__PURE__ */ f.jsx("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: n }),
      /* @__PURE__ */ f.jsx("p", { children: "ผลการประเมินด้านการเรียน" }),
      /* @__PURE__ */ f.jsx("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: s })
    ] }) })
  ] }) });
}, l0 = ({ comp_type: e, content: t }) => {
  let [n, s, i] = ["border-gray-400", "bg-gray-100/50", /* @__PURE__ */ f.jsx(Ol, { size: 28 })];
  switch (e == null ? void 0 : e.trim()) {
    case "NOTI:INFO":
      n = "border-gray-400", s = "bg-gray-100/50", i = /* @__PURE__ */ f.jsx(Ol, { size: 28, className: "text-gray-400" });
      break;
    case "NOTI:SUCCESS":
      n = "border-green-400", s = "bg-green-100/50", i = /* @__PURE__ */ f.jsx(Nd, { size: 28, className: "text-green-400" });
      break;
    case "NOTI:DANGER":
      n = "border-red-400", s = "bg-red-100/50", i = /* @__PURE__ */ f.jsx(ig, { size: 28, className: "text-red-400" });
      break;
  }
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(Z, { className: Se("rounded-2xl flex items-center flex-row pl-4 border-2", n, s), children: [
    /* @__PURE__ */ f.jsx("div", { children: i }),
    /* @__PURE__ */ f.jsx(Z.Content, { className: "flex flex-row gap-4 p-4", children: /* @__PURE__ */ f.jsx("div", { children: t }) })
  ] }) });
}, u0 = ({ socketStatus: e }) => /* @__PURE__ */ f.jsx(Nn, { variant: "outline", children: e ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx("div", { className: "p-[3px] bg-green-400 rounded-full mr-1" }),
  " Connected"
] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx("div", { className: "p-[3px] bg-red-400 rounded-full mr-1" }),
  " Disconnected"
] }) }), d0 = /* @__PURE__ */ Jt(void 0);
function f0(e) {
  const t = _r(d0);
  return e || t || "ltr";
}
function h0(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function p0(e, t) {
  return nu((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const df = "ScrollArea", [ff, lw] = tc(df), [m0, wt] = ff(df), v0 = /* @__PURE__ */ me((e, t) => {
  const { __scopeScrollArea: r, type: n = "hover", dir: s, scrollHideDelay: i = 600, ...o } = e, [a, c] = re(null), [l, u] = re(null), [d, h] = re(null), [m, y] = re(null), [p, v] = re(null), [_, O] = re(0), [w, E] = re(0), [x, A] = re(!1), [k, j] = re(!1), R = xt(
    t,
    (K) => c(K)
  ), B = f0(s);
  return /* @__PURE__ */ U(m0, {
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
    scrollbarYEnabled: k,
    onScrollbarYEnabledChange: j,
    onCornerWidthChange: O,
    onCornerHeightChange: E
  }, /* @__PURE__ */ U(Ge.div, le({
    dir: B
  }, o, {
    ref: R,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": _ + "px",
      "--radix-scroll-area-corner-height": w + "px",
      ...e.style
    }
  })));
}), y0 = "ScrollAreaViewport", g0 = /* @__PURE__ */ me((e, t) => {
  const { __scopeScrollArea: r, children: n, ...s } = e, i = wt(y0, r), o = he(null), a = xt(t, o, i.onViewportChange);
  return /* @__PURE__ */ U(kt, null, /* @__PURE__ */ U("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ U(Ge.div, le({
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
}), rr = "ScrollAreaScrollbar", hf = /* @__PURE__ */ me((e, t) => {
  const { forceMount: r, ...n } = e, s = wt(rr, e.__scopeScrollArea), { onScrollbarXEnabledChange: i, onScrollbarYEnabledChange: o } = s, a = e.orientation === "horizontal";
  return ue(() => (a ? i(!0) : o(!0), () => {
    a ? i(!1) : o(!1);
  }), [
    a,
    i,
    o
  ]), s.type === "hover" ? /* @__PURE__ */ U(b0, le({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "scroll" ? /* @__PURE__ */ U(x0, le({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "auto" ? /* @__PURE__ */ U(pf, le({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "always" ? /* @__PURE__ */ U(sc, le({}, n, {
    ref: t
  })) : null;
}), b0 = /* @__PURE__ */ me((e, t) => {
  const { forceMount: r, ...n } = e, s = wt(rr, e.__scopeScrollArea), [i, o] = re(!1);
  return ue(() => {
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
  ]), /* @__PURE__ */ U(Sr, {
    present: r || i
  }, /* @__PURE__ */ U(pf, le({
    "data-state": i ? "visible" : "hidden"
  }, n, {
    ref: t
  })));
}), x0 = /* @__PURE__ */ me((e, t) => {
  const { forceMount: r, ...n } = e, s = wt(rr, e.__scopeScrollArea), i = e.orientation === "horizontal", o = qi(
    () => c("SCROLL_END"),
    100
  ), [a, c] = p0("hidden", {
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
  return ue(() => {
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
  ]), ue(() => {
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
  ]), /* @__PURE__ */ U(Sr, {
    present: r || a !== "hidden"
  }, /* @__PURE__ */ U(sc, le({
    "data-state": a === "hidden" ? "hidden" : "visible"
  }, n, {
    ref: t,
    onPointerEnter: it(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: it(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), pf = /* @__PURE__ */ me((e, t) => {
  const r = wt(rr, e.__scopeScrollArea), { forceMount: n, ...s } = e, [i, o] = re(!1), a = e.orientation === "horizontal", c = qi(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      o(a ? l : u);
    }
  }, 10);
  return Pn(r.viewport, c), Pn(r.content, c), /* @__PURE__ */ U(Sr, {
    present: n || i
  }, /* @__PURE__ */ U(sc, le({
    "data-state": i ? "visible" : "hidden"
  }, s, {
    ref: t
  })));
}), sc = /* @__PURE__ */ me((e, t) => {
  const { orientation: r = "vertical", ...n } = e, s = wt(rr, e.__scopeScrollArea), i = he(null), o = he(0), [a, c] = re({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = gf(a.viewport, a.content), u = {
    ...n,
    sizes: a,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => i.current = h,
    onThumbPointerUp: () => o.current = 0,
    onThumbPointerDown: (h) => o.current = h
  };
  function d(h, m) {
    return R0(h, o.current, a, m);
  }
  return r === "horizontal" ? /* @__PURE__ */ U(w0, le({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && i.current) {
        const h = s.viewport.scrollLeft, m = Fl(h, a, s.dir);
        i.current.style.transform = `translate3d(${m}px, 0, 0)`;
      }
    },
    onWheelScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = h);
    },
    onDragScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = d(h, s.dir));
    }
  })) : r === "vertical" ? /* @__PURE__ */ U(_0, le({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && i.current) {
        const h = s.viewport.scrollTop, m = Fl(h, a);
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
}), w0 = /* @__PURE__ */ me((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, i = wt(rr, e.__scopeScrollArea), [o, a] = re(), c = he(null), l = xt(t, c, i.onScrollbarXChange);
  return ue(() => {
    c.current && a(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ U(vf, le({
    "data-orientation": "horizontal"
  }, s, {
    ref: l,
    sizes: r,
    style: {
      bottom: 0,
      left: i.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: i.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": Wi(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (i.viewport) {
        const h = i.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(h), xf(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && i.viewport && o && n({
        content: i.viewport.scrollWidth,
        viewport: i.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: mi(o.paddingLeft),
          paddingEnd: mi(o.paddingRight)
        }
      });
    }
  }));
}), _0 = /* @__PURE__ */ me((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, i = wt(rr, e.__scopeScrollArea), [o, a] = re(), c = he(null), l = xt(t, c, i.onScrollbarYChange);
  return ue(() => {
    c.current && a(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ U(vf, le({
    "data-orientation": "vertical"
  }, s, {
    ref: l,
    sizes: r,
    style: {
      top: 0,
      right: i.dir === "ltr" ? 0 : void 0,
      left: i.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": Wi(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (i.viewport) {
        const h = i.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(h), xf(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && i.viewport && o && n({
        content: i.viewport.scrollHeight,
        viewport: i.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: mi(o.paddingTop),
          paddingEnd: mi(o.paddingBottom)
        }
      });
    }
  }));
}), [S0, mf] = ff(rr), vf = /* @__PURE__ */ me((e, t) => {
  const { __scopeScrollArea: r, sizes: n, hasThumb: s, onThumbChange: i, onThumbPointerUp: o, onThumbPointerDown: a, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...h } = e, m = wt(rr, r), [y, p] = re(null), v = xt(
    t,
    (R) => p(R)
  ), _ = he(null), O = he(""), w = m.viewport, E = n.content - n.viewport, x = st(u), A = st(c), k = qi(d, 10);
  function j(R) {
    if (_.current) {
      const B = R.clientX - _.current.left, K = R.clientY - _.current.top;
      l({
        x: B,
        y: K
      });
    }
  }
  return ue(() => {
    const R = (B) => {
      const K = B.target;
      (y == null ? void 0 : y.contains(K)) && x(B, E);
    };
    return document.addEventListener("wheel", R, {
      passive: !1
    }), () => document.removeEventListener("wheel", R, {
      passive: !1
    });
  }, [
    w,
    y,
    E,
    x
  ]), ue(A, [
    n,
    A
  ]), Pn(y, k), Pn(m.content, k), /* @__PURE__ */ U(S0, {
    scope: r,
    scrollbar: y,
    hasThumb: s,
    onThumbChange: st(i),
    onThumbPointerUp: st(o),
    onThumbPositionChange: A,
    onThumbPointerDown: st(a)
  }, /* @__PURE__ */ U(Ge.div, le({}, h, {
    ref: v,
    style: {
      position: "absolute",
      ...h.style
    },
    onPointerDown: it(e.onPointerDown, (R) => {
      R.button === 0 && (R.target.setPointerCapture(R.pointerId), _.current = y.getBoundingClientRect(), O.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", m.viewport && (m.viewport.style.scrollBehavior = "auto"), j(R));
    }),
    onPointerMove: it(e.onPointerMove, j),
    onPointerUp: it(e.onPointerUp, (R) => {
      const B = R.target;
      B.hasPointerCapture(R.pointerId) && B.releasePointerCapture(R.pointerId), document.body.style.webkitUserSelect = O.current, m.viewport && (m.viewport.style.scrollBehavior = ""), _.current = null;
    })
  })));
}), Ca = "ScrollAreaThumb", E0 = /* @__PURE__ */ me((e, t) => {
  const { forceMount: r, ...n } = e, s = mf(Ca, e.__scopeScrollArea);
  return /* @__PURE__ */ U(Sr, {
    present: r || s.hasThumb
  }, /* @__PURE__ */ U(O0, le({
    ref: t
  }, n)));
}), O0 = /* @__PURE__ */ me((e, t) => {
  const { __scopeScrollArea: r, style: n, ...s } = e, i = wt(Ca, r), o = mf(Ca, r), { onThumbPositionChange: a } = o, c = xt(
    t,
    (d) => o.onThumbChange(d)
  ), l = he(), u = qi(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return ue(() => {
    const d = i.viewport;
    if (d) {
      const h = () => {
        if (u(), !l.current) {
          const m = A0(d, a);
          l.current = m, a();
        }
      };
      return a(), d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
    }
  }, [
    i.viewport,
    u,
    a
  ]), /* @__PURE__ */ U(Ge.div, le({
    "data-state": o.hasThumb ? "visible" : "hidden"
  }, s, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...n
    },
    onPointerDownCapture: it(e.onPointerDownCapture, (d) => {
      const m = d.target.getBoundingClientRect(), y = d.clientX - m.left, p = d.clientY - m.top;
      o.onThumbPointerDown({
        x: y,
        y: p
      });
    }),
    onPointerUp: it(e.onPointerUp, o.onThumbPointerUp)
  }));
}), yf = "ScrollAreaCorner", C0 = /* @__PURE__ */ me((e, t) => {
  const r = wt(yf, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? /* @__PURE__ */ U(T0, le({}, e, {
    ref: t
  })) : null;
}), T0 = /* @__PURE__ */ me((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, s = wt(yf, r), [i, o] = re(0), [a, c] = re(0), l = !!(i && a);
  return Pn(s.scrollbarX, () => {
    var u;
    const d = ((u = s.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    s.onCornerHeightChange(d), c(d);
  }), Pn(s.scrollbarY, () => {
    var u;
    const d = ((u = s.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    s.onCornerWidthChange(d), o(d);
  }), l ? /* @__PURE__ */ U(Ge.div, le({}, n, {
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
function mi(e) {
  return e ? parseInt(e, 10) : 0;
}
function gf(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function Wi(e) {
  const t = gf(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function R0(e, t, r, n = "ltr") {
  const s = Wi(r), i = s / 2, o = t || i, a = s - o, c = r.scrollbar.paddingStart + o, l = r.scrollbar.size - r.scrollbar.paddingEnd - a, u = r.content - r.viewport, d = n === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return bf([
    c,
    l
  ], d)(e);
}
function Fl(e, t, r = "ltr") {
  const n = Wi(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, i = t.scrollbar.size - s, o = t.content - t.viewport, a = i - n, c = r === "ltr" ? [
    0,
    o
  ] : [
    o * -1,
    0
  ], l = h0(e, c);
  return bf([
    0,
    o
  ], [
    0,
    a
  ])(l);
}
function bf(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function xf(e, t) {
  return e > 0 && e < t;
}
const A0 = (e, t = () => {
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
function qi(e, t) {
  const r = st(e), n = he(0);
  return ue(
    () => () => window.clearTimeout(n.current),
    []
  ), je(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [
    r,
    t
  ]);
}
function Pn(e, t) {
  const r = st(t);
  jn(() => {
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
const wf = v0, N0 = g0, j0 = C0, Hi = $.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  wf,
  {
    ref: n,
    className: Se("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ f.jsx(N0, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.jsx(_f, {}),
      /* @__PURE__ */ f.jsx(j0, {})
    ]
  }
));
Hi.displayName = wf.displayName;
const _f = $.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ f.jsx(
  hf,
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
    children: /* @__PURE__ */ f.jsx(E0, { className: "relative flex-1 rounded-full bg-border" })
  }
));
_f.displayName = hf.displayName;
var Ce;
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
})(Ce || (Ce = {}));
var Ul;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ul || (Ul = {}));
const F = Ce.arrayToEnum([
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
}, I = Ce.arrayToEnum([
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
class It extends Error {
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
    return JSON.stringify(this.issues, Ce.jsonStringifyReplacer, 2);
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
It.create = (e) => new It(e);
const vi = (e, t) => {
  let r;
  switch (e.code) {
    case I.invalid_type:
      e.received === F.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case I.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, Ce.jsonStringifyReplacer)}`;
      break;
    case I.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Ce.joinValues(e.keys, ", ")}`;
      break;
    case I.invalid_union:
      r = "Invalid input";
      break;
    case I.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Ce.joinValues(e.options)}`;
      break;
    case I.invalid_enum_value:
      r = `Invalid enum value. Expected ${Ce.joinValues(e.options)}, received '${e.received}'`;
      break;
    case I.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case I.invalid_return_type:
      r = "Invalid function return type";
      break;
    case I.invalid_date:
      r = "Invalid date";
      break;
    case I.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : Ce.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case I.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case I.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case I.custom:
      r = "Invalid input";
      break;
    case I.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case I.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case I.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, Ce.assertNever(e);
  }
  return { message: r };
};
let P0 = vi;
function Ta() {
  return P0;
}
const Ra = (e) => {
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
  const r = Ra({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Ta(),
      vi
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class ot {
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
        return ae;
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
    return ot.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: i, value: o } = s;
      if (i.status === "aborted" || o.status === "aborted")
        return ae;
      i.status === "dirty" && t.dirty(), o.status === "dirty" && t.dirty(), i.value !== "__proto__" && (typeof o.value < "u" || s.alwaysSet) && (n[i.value] = o.value);
    }
    return { status: t.value, value: n };
  }
}
const ae = Object.freeze({
  status: "aborted"
}), $0 = (e) => ({ status: "dirty", value: e }), ut = (e) => ({ status: "valid", value: e }), zl = (e) => e.status === "aborted", Bl = (e) => e.status === "dirty", yi = (e) => e.status === "valid", Aa = (e) => typeof Promise < "u" && e instanceof Promise;
var H;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(H || (H = {}));
class Lt {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Vl = (e, t) => {
  if (yi(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new It(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function oe(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (o, a) => o.code !== "invalid_type" ? { message: a.defaultError } : typeof a.data > "u" ? { message: n ?? a.defaultError } : { message: r ?? a.defaultError }, description: s };
}
class pe {
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
      status: new ot(),
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
    if (Aa(r))
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
    return Vl(s, i);
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
    }, s = this._parse({ data: t, path: n.path, parent: n }), i = await (Aa(s) ? s : Promise.resolve(s));
    return Vl(n, i);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, i) => {
      const o = t(s), a = () => i.addIssue({
        code: I.custom,
        ...n(s)
      });
      return typeof Promise < "u" && o instanceof Promise ? o.then((c) => c ? !0 : (a(), !1)) : o ? !0 : (a(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new er({
      schema: this,
      typeName: G.ZodEffects,
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
    return Mn.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return Mt.create(this, this._def);
  }
  promise() {
    return ls.create(this, this._def);
  }
  or(t) {
    return xi.create([this, t], this._def);
  }
  and(t) {
    return wi.create(this, t, this._def);
  }
  transform(t) {
    return new er({
      ...oe(this._def),
      schema: this,
      typeName: G.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ci({
      ...oe(this._def),
      innerType: this,
      defaultValue: r,
      typeName: G.ZodDefault
    });
  }
  brand() {
    return new q0({
      typeName: G.ZodBranded,
      type: this,
      ...oe(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new Ma({
      ...oe(this._def),
      innerType: this,
      catchValue: r,
      typeName: G.ZodCatch
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
    return Zi.create(this, t);
  }
  readonly() {
    return La.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const k0 = /^c[^\s-]{8,}$/i, I0 = /^[a-z][a-z0-9]*$/, M0 = /^[0-9A-HJKMNP-TV-Z]{26}$/, D0 = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, L0 = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, F0 = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let $o;
const U0 = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, z0 = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, B0 = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function V0(e, t) {
  return !!((t === "v4" || !t) && U0.test(e) || (t === "v6" || !t) && z0.test(e));
}
class Kt extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== F.string) {
      const i = this._getOrReturnCtx(t);
      return z(
        i,
        {
          code: I.invalid_type,
          expected: F.string,
          received: i.parsedType
        }
        //
      ), ae;
    }
    const n = new ot();
    let s;
    for (const i of this._def.checks)
      if (i.kind === "min")
        t.data.length < i.value && (s = this._getOrReturnCtx(t, s), z(s, {
          code: I.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "max")
        t.data.length > i.value && (s = this._getOrReturnCtx(t, s), z(s, {
          code: I.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: i.message
        }), n.dirty());
      else if (i.kind === "length") {
        const o = t.data.length > i.value, a = t.data.length < i.value;
        (o || a) && (s = this._getOrReturnCtx(t, s), o ? z(s, {
          code: I.too_big,
          maximum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }) : a && z(s, {
          code: I.too_small,
          minimum: i.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: i.message
        }), n.dirty());
      } else if (i.kind === "email")
        L0.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "email",
          code: I.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "emoji")
        $o || ($o = new RegExp(F0, "u")), $o.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "emoji",
          code: I.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "uuid")
        D0.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "uuid",
          code: I.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid")
        k0.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "cuid",
          code: I.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "cuid2")
        I0.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "cuid2",
          code: I.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "ulid")
        M0.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "ulid",
          code: I.invalid_string,
          message: i.message
        }), n.dirty());
      else if (i.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), z(s, {
            validation: "url",
            code: I.invalid_string,
            message: i.message
          }), n.dirty();
        }
      else
        i.kind === "regex" ? (i.regex.lastIndex = 0, i.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "regex",
          code: I.invalid_string,
          message: i.message
        }), n.dirty())) : i.kind === "trim" ? t.data = t.data.trim() : i.kind === "includes" ? t.data.includes(i.value, i.position) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: I.invalid_string,
          validation: { includes: i.value, position: i.position },
          message: i.message
        }), n.dirty()) : i.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : i.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : i.kind === "startsWith" ? t.data.startsWith(i.value) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: I.invalid_string,
          validation: { startsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "endsWith" ? t.data.endsWith(i.value) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: I.invalid_string,
          validation: { endsWith: i.value },
          message: i.message
        }), n.dirty()) : i.kind === "datetime" ? B0(i).test(t.data) || (s = this._getOrReturnCtx(t, s), z(s, {
          code: I.invalid_string,
          validation: "datetime",
          message: i.message
        }), n.dirty()) : i.kind === "ip" ? V0(t.data, i.version) || (s = this._getOrReturnCtx(t, s), z(s, {
          validation: "ip",
          code: I.invalid_string,
          message: i.message
        }), n.dirty()) : Ce.assertNever(i);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: I.invalid_string,
      ...H.errToObj(n)
    });
  }
  _addCheck(t) {
    return new Kt({
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
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Kt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Kt({
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
Kt.create = (e) => {
  var t;
  return new Kt({
    checks: [],
    typeName: G.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...oe(e)
  });
};
function W0(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, i = parseInt(e.toFixed(s).replace(".", "")), o = parseInt(t.toFixed(s).replace(".", ""));
  return i % o / Math.pow(10, s);
}
class $n extends pe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== F.number) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: F.number,
        received: i.parsedType
      }), ae;
    }
    let n;
    const s = new ot();
    for (const i of this._def.checks)
      i.kind === "int" ? Ce.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.invalid_type,
        expected: "integer",
        received: "float",
        message: i.message
      }), s.dirty()) : i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.too_small,
        minimum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.too_big,
        maximum: i.value,
        type: "number",
        inclusive: i.inclusive,
        exact: !1,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? W0(t.data, i.value) !== 0 && (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : i.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.not_finite,
        message: i.message
      }), s.dirty()) : Ce.assertNever(i);
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ce.isInteger(t.value));
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
$n.create = (e) => new $n({
  checks: [],
  typeName: G.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...oe(e)
});
class kn extends pe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== F.bigint) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: F.bigint,
        received: i.parsedType
      }), ae;
    }
    let n;
    const s = new ot();
    for (const i of this._def.checks)
      i.kind === "min" ? (i.inclusive ? t.data < i.value : t.data <= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.too_small,
        type: "bigint",
        minimum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "max" ? (i.inclusive ? t.data > i.value : t.data >= i.value) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.too_big,
        type: "bigint",
        maximum: i.value,
        inclusive: i.inclusive,
        message: i.message
      }), s.dirty()) : i.kind === "multipleOf" ? t.data % i.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), z(n, {
        code: I.not_multiple_of,
        multipleOf: i.value,
        message: i.message
      }), s.dirty()) : Ce.assertNever(i);
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
    return new kn({
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
    return new kn({
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
kn.create = (e) => {
  var t;
  return new kn({
    checks: [],
    typeName: G.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...oe(e)
  });
};
class Na extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: I.invalid_type,
        expected: F.boolean,
        received: n.parsedType
      }), ae;
    }
    return ut(t.data);
  }
}
Na.create = (e) => new Na({
  typeName: G.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...oe(e)
});
class cs extends pe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== F.date) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_type,
        expected: F.date,
        received: i.parsedType
      }), ae;
    }
    if (isNaN(t.data.getTime())) {
      const i = this._getOrReturnCtx(t);
      return z(i, {
        code: I.invalid_date
      }), ae;
    }
    const n = new ot();
    let s;
    for (const i of this._def.checks)
      i.kind === "min" ? t.data.getTime() < i.value && (s = this._getOrReturnCtx(t, s), z(s, {
        code: I.too_small,
        message: i.message,
        inclusive: !0,
        exact: !1,
        minimum: i.value,
        type: "date"
      }), n.dirty()) : i.kind === "max" ? t.data.getTime() > i.value && (s = this._getOrReturnCtx(t, s), z(s, {
        code: I.too_big,
        message: i.message,
        inclusive: !0,
        exact: !1,
        maximum: i.value,
        type: "date"
      }), n.dirty()) : Ce.assertNever(i);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new cs({
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
cs.create = (e) => new cs({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: G.ZodDate,
  ...oe(e)
});
class ja extends pe {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: I.invalid_type,
        expected: F.symbol,
        received: n.parsedType
      }), ae;
    }
    return ut(t.data);
  }
}
ja.create = (e) => new ja({
  typeName: G.ZodSymbol,
  ...oe(e)
});
class gi extends pe {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: I.invalid_type,
        expected: F.undefined,
        received: n.parsedType
      }), ae;
    }
    return ut(t.data);
  }
}
gi.create = (e) => new gi({
  typeName: G.ZodUndefined,
  ...oe(e)
});
class bi extends pe {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: I.invalid_type,
        expected: F.null,
        received: n.parsedType
      }), ae;
    }
    return ut(t.data);
  }
}
bi.create = (e) => new bi({
  typeName: G.ZodNull,
  ...oe(e)
});
class Pa extends pe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return ut(t.data);
  }
}
Pa.create = (e) => new Pa({
  typeName: G.ZodAny,
  ...oe(e)
});
class Xr extends pe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return ut(t.data);
  }
}
Xr.create = (e) => new Xr({
  typeName: G.ZodUnknown,
  ...oe(e)
});
class wr extends pe {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return z(r, {
      code: I.invalid_type,
      expected: F.never,
      received: r.parsedType
    }), ae;
  }
}
wr.create = (e) => new wr({
  typeName: G.ZodNever,
  ...oe(e)
});
class $a extends pe {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: I.invalid_type,
        expected: F.void,
        received: n.parsedType
      }), ae;
    }
    return ut(t.data);
  }
}
$a.create = (e) => new $a({
  typeName: G.ZodVoid,
  ...oe(e)
});
class Mt extends pe {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== F.array)
      return z(r, {
        code: I.invalid_type,
        expected: F.array,
        received: r.parsedType
      }), ae;
    if (s.exactLength !== null) {
      const o = r.data.length > s.exactLength.value, a = r.data.length < s.exactLength.value;
      (o || a) && (z(r, {
        code: o ? I.too_big : I.too_small,
        minimum: a ? s.exactLength.value : void 0,
        maximum: o ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (z(r, {
      code: I.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (z(r, {
      code: I.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((o, a) => s.type._parseAsync(new Lt(r, o, r.path, a)))).then((o) => ot.mergeArray(n, o));
    const i = [...r.data].map((o, a) => s.type._parseSync(new Lt(r, o, r.path, a)));
    return ot.mergeArray(n, i);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new Mt({
      ...this._def,
      minLength: { value: t, message: H.toString(r) }
    });
  }
  max(t, r) {
    return new Mt({
      ...this._def,
      maxLength: { value: t, message: H.toString(r) }
    });
  }
  length(t, r) {
    return new Mt({
      ...this._def,
      exactLength: { value: t, message: H.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
Mt.create = (e, t) => new Mt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: G.ZodArray,
  ...oe(t)
});
function Gr(e) {
  if (e instanceof Ue) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = br.create(Gr(n));
    }
    return new Ue({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof Mt ? new Mt({
      ...e._def,
      type: Gr(e.element)
    }) : e instanceof br ? br.create(Gr(e.unwrap())) : e instanceof Mn ? Mn.create(Gr(e.unwrap())) : e instanceof Xt ? Xt.create(e.items.map((t) => Gr(t))) : e;
}
class Ue extends pe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = Ce.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== F.object) {
      const l = this._getOrReturnCtx(t);
      return z(l, {
        code: I.invalid_type,
        expected: F.object,
        received: l.parsedType
      }), ae;
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
        value: u._parse(new Lt(s, d, s.path, l)),
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
          code: I.unrecognized_keys,
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
            new Lt(s, d, s.path, u)
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
    }).then((l) => ot.mergeObjectSync(n, l)) : ot.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return H.errToObj, new Ue({
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
    return new Ue({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Ue({
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
    return new Ue({
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
    return new Ue({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: G.ZodObject
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
    return new Ue({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return Ce.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Ue({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return Ce.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new Ue({
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
    return Ce.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }), new Ue({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return Ce.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let i = this.shape[n];
        for (; i instanceof br; )
          i = i._def.innerType;
        r[n] = i;
      }
    }), new Ue({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return Sf(Ce.objectKeys(this.shape));
  }
}
Ue.create = (e, t) => new Ue({
  shape: () => e,
  unknownKeys: "strip",
  catchall: wr.create(),
  typeName: G.ZodObject,
  ...oe(t)
});
Ue.strictCreate = (e, t) => new Ue({
  shape: () => e,
  unknownKeys: "strict",
  catchall: wr.create(),
  typeName: G.ZodObject,
  ...oe(t)
});
Ue.lazycreate = (e, t) => new Ue({
  shape: e,
  unknownKeys: "strip",
  catchall: wr.create(),
  typeName: G.ZodObject,
  ...oe(t)
});
class xi extends pe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(i) {
      for (const a of i)
        if (a.result.status === "valid")
          return a.result;
      for (const a of i)
        if (a.result.status === "dirty")
          return r.common.issues.push(...a.ctx.common.issues), a.result;
      const o = i.map((a) => new It(a.ctx.common.issues));
      return z(r, {
        code: I.invalid_union,
        unionErrors: o
      }), ae;
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
      const a = o.map((c) => new It(c));
      return z(r, {
        code: I.invalid_union,
        unionErrors: a
      }), ae;
    }
  }
  get options() {
    return this._def.options;
  }
}
xi.create = (e, t) => new xi({
  options: e,
  typeName: G.ZodUnion,
  ...oe(t)
});
const ni = (e) => e instanceof Si ? ni(e.schema) : e instanceof er ? ni(e.innerType()) : e instanceof Ei ? [e.value] : e instanceof Br ? e.options : e instanceof Oi ? Object.keys(e.enum) : e instanceof Ci ? ni(e._def.innerType) : e instanceof gi ? [void 0] : e instanceof bi ? [null] : null;
class ic extends pe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.object)
      return z(r, {
        code: I.invalid_type,
        expected: F.object,
        received: r.parsedType
      }), ae;
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
      code: I.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), ae);
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
    return new ic({
      typeName: G.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...oe(n)
    });
  }
}
function ka(e, t) {
  const r = Cr(e), n = Cr(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === F.object && n === F.object) {
    const s = Ce.objectKeys(t), i = Ce.objectKeys(e).filter((a) => s.indexOf(a) !== -1), o = { ...e, ...t };
    for (const a of i) {
      const c = ka(e[a], t[a]);
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
      const o = e[i], a = t[i], c = ka(o, a);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === F.date && n === F.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class wi extends pe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (i, o) => {
      if (zl(i) || zl(o))
        return ae;
      const a = ka(i.value, o.value);
      return a.valid ? ((Bl(i) || Bl(o)) && r.dirty(), { status: r.value, value: a.data }) : (z(n, {
        code: I.invalid_intersection_types
      }), ae);
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
wi.create = (e, t, r) => new wi({
  left: e,
  right: t,
  typeName: G.ZodIntersection,
  ...oe(r)
});
class Xt extends pe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.array)
      return z(n, {
        code: I.invalid_type,
        expected: F.array,
        received: n.parsedType
      }), ae;
    if (n.data.length < this._def.items.length)
      return z(n, {
        code: I.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ae;
    !this._def.rest && n.data.length > this._def.items.length && (z(n, {
      code: I.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const i = [...n.data].map((o, a) => {
      const c = this._def.items[a] || this._def.rest;
      return c ? c._parse(new Lt(n, o, n.path, a)) : null;
    }).filter((o) => !!o);
    return n.common.async ? Promise.all(i).then((o) => ot.mergeArray(r, o)) : ot.mergeArray(r, i);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new Xt({
      ...this._def,
      rest: t
    });
  }
}
Xt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new Xt({
    items: e,
    typeName: G.ZodTuple,
    rest: null,
    ...oe(t)
  });
};
class _i extends pe {
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
        code: I.invalid_type,
        expected: F.object,
        received: n.parsedType
      }), ae;
    const s = [], i = this._def.keyType, o = this._def.valueType;
    for (const a in n.data)
      s.push({
        key: i._parse(new Lt(n, a, n.path, a)),
        value: o._parse(new Lt(n, n.data[a], n.path, a))
      });
    return n.common.async ? ot.mergeObjectAsync(r, s) : ot.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof pe ? new _i({
      keyType: t,
      valueType: r,
      typeName: G.ZodRecord,
      ...oe(n)
    }) : new _i({
      keyType: Kt.create(),
      valueType: t,
      typeName: G.ZodRecord,
      ...oe(r)
    });
  }
}
class Ia extends pe {
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
        code: I.invalid_type,
        expected: F.map,
        received: n.parsedType
      }), ae;
    const s = this._def.keyType, i = this._def.valueType, o = [...n.data.entries()].map(([a, c], l) => ({
      key: s._parse(new Lt(n, a, n.path, [l, "key"])),
      value: i._parse(new Lt(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const a = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of o) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return ae;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), a.set(l.value, u.value);
        }
        return { status: r.value, value: a };
      });
    } else {
      const a = /* @__PURE__ */ new Map();
      for (const c of o) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return ae;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), a.set(l.value, u.value);
      }
      return { status: r.value, value: a };
    }
  }
}
Ia.create = (e, t, r) => new Ia({
  valueType: t,
  keyType: e,
  typeName: G.ZodMap,
  ...oe(r)
});
class In extends pe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.set)
      return z(n, {
        code: I.invalid_type,
        expected: F.set,
        received: n.parsedType
      }), ae;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (z(n, {
      code: I.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (z(n, {
      code: I.too_big,
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
          return ae;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const a = [...n.data.values()].map((c, l) => i._parse(new Lt(n, c, n.path, l)));
    return n.common.async ? Promise.all(a).then((c) => o(c)) : o(a);
  }
  min(t, r) {
    return new In({
      ...this._def,
      minSize: { value: t, message: H.toString(r) }
    });
  }
  max(t, r) {
    return new In({
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
In.create = (e, t) => new In({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: G.ZodSet,
  ...oe(t)
});
class Jn extends pe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.function)
      return z(r, {
        code: I.invalid_type,
        expected: F.function,
        received: r.parsedType
      }), ae;
    function n(a, c) {
      return Ra({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ta(),
          vi
        ].filter((l) => !!l),
        issueData: {
          code: I.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(a, c) {
      return Ra({
        data: a,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ta(),
          vi
        ].filter((l) => !!l),
        issueData: {
          code: I.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const i = { errorMap: r.common.contextualErrorMap }, o = r.data;
    if (this._def.returns instanceof ls) {
      const a = this;
      return ut(async function(...c) {
        const l = new It([]), u = await a._def.args.parseAsync(c, i).catch((m) => {
          throw l.addIssue(n(c, m)), l;
        }), d = await Reflect.apply(o, this, u);
        return await a._def.returns._def.type.parseAsync(d, i).catch((m) => {
          throw l.addIssue(s(d, m)), l;
        });
      });
    } else {
      const a = this;
      return ut(function(...c) {
        const l = a._def.args.safeParse(c, i);
        if (!l.success)
          throw new It([n(c, l.error)]);
        const u = Reflect.apply(o, this, l.data), d = a._def.returns.safeParse(u, i);
        if (!d.success)
          throw new It([s(u, d.error)]);
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
    return new Jn({
      ...this._def,
      args: Xt.create(t).rest(Xr.create())
    });
  }
  returns(t) {
    return new Jn({
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
    return new Jn({
      args: t || Xt.create([]).rest(Xr.create()),
      returns: r || Xr.create(),
      typeName: G.ZodFunction,
      ...oe(n)
    });
  }
}
class Si extends pe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Si.create = (e, t) => new Si({
  getter: e,
  typeName: G.ZodLazy,
  ...oe(t)
});
class Ei extends pe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return z(r, {
        received: r.data,
        code: I.invalid_literal,
        expected: this._def.value
      }), ae;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Ei.create = (e, t) => new Ei({
  value: e,
  typeName: G.ZodLiteral,
  ...oe(t)
});
function Sf(e, t) {
  return new Br({
    values: e,
    typeName: G.ZodEnum,
    ...oe(t)
  });
}
class Br extends pe {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return z(r, {
        expected: Ce.joinValues(n),
        received: r.parsedType,
        code: I.invalid_type
      }), ae;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return z(r, {
        received: r.data,
        code: I.invalid_enum_value,
        options: n
      }), ae;
    }
    return ut(t.data);
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
    return Br.create(t);
  }
  exclude(t) {
    return Br.create(this.options.filter((r) => !t.includes(r)));
  }
}
Br.create = Sf;
class Oi extends pe {
  _parse(t) {
    const r = Ce.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== F.string && n.parsedType !== F.number) {
      const s = Ce.objectValues(r);
      return z(n, {
        expected: Ce.joinValues(s),
        received: n.parsedType,
        code: I.invalid_type
      }), ae;
    }
    if (r.indexOf(t.data) === -1) {
      const s = Ce.objectValues(r);
      return z(n, {
        received: n.data,
        code: I.invalid_enum_value,
        options: s
      }), ae;
    }
    return ut(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Oi.create = (e, t) => new Oi({
  values: e,
  typeName: G.ZodNativeEnum,
  ...oe(t)
});
class ls extends pe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.promise && r.common.async === !1)
      return z(r, {
        code: I.invalid_type,
        expected: F.promise,
        received: r.parsedType
      }), ae;
    const n = r.parsedType === F.promise ? r.data : Promise.resolve(r.data);
    return ut(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
ls.create = (e, t) => new ls({
  type: e,
  typeName: G.ZodPromise,
  ...oe(t)
});
class er extends pe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === G.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
        return a.status === "aborted" ? ae : (a.status === "dirty" && r.dirty(), o(a.value), { status: r.value, value: a.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => a.status === "aborted" ? ae : (a.status === "dirty" && r.dirty(), o(a.value).then(() => ({ status: r.value, value: a.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const o = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!yi(o))
          return o;
        const a = s.transform(o.value, i);
        if (a instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: a };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((o) => yi(o) ? Promise.resolve(s.transform(o.value, i)).then((a) => ({ status: r.value, value: a })) : o);
    Ce.assertNever(s);
  }
}
er.create = (e, t, r) => new er({
  schema: e,
  typeName: G.ZodEffects,
  effect: t,
  ...oe(r)
});
er.createWithPreprocess = (e, t, r) => new er({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: G.ZodEffects,
  ...oe(r)
});
class br extends pe {
  _parse(t) {
    return this._getType(t) === F.undefined ? ut(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
br.create = (e, t) => new br({
  innerType: e,
  typeName: G.ZodOptional,
  ...oe(t)
});
class Mn extends pe {
  _parse(t) {
    return this._getType(t) === F.null ? ut(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mn.create = (e, t) => new Mn({
  innerType: e,
  typeName: G.ZodNullable,
  ...oe(t)
});
class Ci extends pe {
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
Ci.create = (e, t) => new Ci({
  innerType: e,
  typeName: G.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...oe(t)
});
class Ma extends pe {
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
    return Aa(s) ? s.then((i) => ({
      status: "valid",
      value: i.status === "valid" ? i.value : this._def.catchValue({
        get error() {
          return new It(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new It(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ma.create = (e, t) => new Ma({
  innerType: e,
  typeName: G.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...oe(t)
});
class Da extends pe {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const n = this._getOrReturnCtx(t);
      return z(n, {
        code: I.invalid_type,
        expected: F.nan,
        received: n.parsedType
      }), ae;
    }
    return { status: "valid", value: t.data };
  }
}
Da.create = (e) => new Da({
  typeName: G.ZodNaN,
  ...oe(e)
});
class q0 extends pe {
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
class Zi extends pe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const i = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? ae : i.status === "dirty" ? (r.dirty(), $0(i.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? ae : s.status === "dirty" ? (r.dirty(), {
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
    return new Zi({
      in: t,
      out: r,
      typeName: G.ZodPipeline
    });
  }
}
class La extends pe {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return yi(r) && (r.value = Object.freeze(r.value)), r;
  }
}
La.create = (e, t) => new La({
  innerType: e,
  typeName: G.ZodReadonly,
  ...oe(t)
});
Ue.lazycreate;
var G;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(G || (G = {}));
const H0 = Kt.create;
$n.create;
Da.create;
kn.create;
Na.create;
cs.create;
ja.create;
gi.create;
bi.create;
Pa.create;
Xr.create;
wr.create;
$a.create;
Mt.create;
const Z0 = Ue.create;
Ue.strictCreate;
xi.create;
ic.create;
wi.create;
Xt.create;
_i.create;
Ia.create;
In.create;
Jn.create;
Si.create;
Ei.create;
Br.create;
Oi.create;
ls.create;
er.create;
br.create;
Mn.create;
er.createWithPreprocess;
Zi.create;
const K0 = Z0({
  message: H0().min(1, { message: "ต้องมีอย่างน้อย 1 ตัวอักษร" }).max(50, { message: "ต้องมีไม่เกิน 50 ตัวอักษร" })
}), Y0 = ({ roomId: e, currentRoom: t, roomMenuOpen: r, setRoomMenuOpen: n, sideMenuOpen: s, setSideMenuOpen: i }) => {
  var w, E;
  const { dataBaseApiUrl: o, authToken: a, userId: c } = is(), l = Ln(), { socketStatus: u, sendSocketMessage: d } = Ui(), h = he(null), m = zr({
    queryKey: ["chat-message", e],
    queryFn: () => hd(o, a, e, (/* @__PURE__ */ new Date()).toISOString(), "2023-12-20T09:32:13.000Z")
  }), y = zr({ queryKey: ["user-profile"], queryFn: () => kv(o, a, e) }), p = mu({
    mutationKey: ["send-message"],
    mutationFn: async (x) => {
      Pv(o, a, x.msgData, x.roomId), d(x.msgData);
    },
    onSettled: () => {
      setTimeout(() => {
        l.invalidateQueries({ queryKey: ["chat-message", e] }), l.invalidateQueries({ queryKey: ["latest-message", e] });
      }, 1e3);
    }
  }), v = Dy({
    validate: Ly(K0),
    initialValues: {
      message: ""
    }
  }), _ = (x) => {
    if (!y.data)
      return;
    const A = y.data[0].teacher_id, k = c === A, j = {
      room_id: e,
      content: x.message,
      sender_id: k ? A : c,
      sender_type: k ? "TCA" : "STA",
      type: "MSG"
    };
    p.mutate({
      msgData: j,
      roomId: e
    }), v.reset();
  }, O = (x) => {
    if (!y.isSuccess)
      return;
    const A = y.data[0].teacher_id;
    return x === A ? y.data[0] : y.data[1];
  };
  return ue(() => {
    var x;
    (x = h.current) == null || x.scrollIntoView({ behavior: "smooth" });
  }, [m.data]), /* @__PURE__ */ f.jsxs(Z, { className: "flex flex-col  relative rounded-none h-[90vh] w-full z-10 bg-white", children: [
    /* @__PURE__ */ f.jsxs(Z.Header, { className: "flex items-center border-b-[1px]", children: [
      /* @__PURE__ */ f.jsxs(Z.Title, { className: "max-w-[80%] text-center text-xl", children: [
        t.room_name,
        " (",
        t.room_id,
        ")"
      ] }),
      /* @__PURE__ */ f.jsxs(Z.Description, { children: [
        y.isSuccess && ((w = y.data[0]) == null ? void 0 : w.firstname),
        " ",
        y.isSuccess && ((E = y.data[0]) == null ? void 0 : E.lastname)
      ] }),
      /* @__PURE__ */ f.jsx(u0, { socketStatus: u })
    ] }),
    /* @__PURE__ */ f.jsx(rg, { className: "absolute cursor-pointer top-[20px] left-[20px]", onClick: () => n(!r) }),
    /* @__PURE__ */ f.jsx(ng, { className: "absolute cursor-pointer top-[20px] right-[20px]", onClick: () => i(!s) }),
    /* @__PURE__ */ f.jsxs(Hi, { className: "px-3 h-full", children: [
      m.isLoading && /* @__PURE__ */ f.jsx("div", { className: "text-center mt-3", children: "Loading..." }),
      m.isError && /* @__PURE__ */ f.jsxs(Z, { className: "flex flex-row items-center justify-center gap-3 p-3 rounded-none bg-red-100 border-red-500 mt-3", children: [
        /* @__PURE__ */ f.jsx(Xa, {}),
        " ",
        m.error.message
      ] }),
      m.isSuccess && m.data.map((x) => {
        var A, k;
        return /* @__PURE__ */ f.jsxs("div", { className: Se("flex gap-2 my-2", x.sender_id === c ? "flex-row justify-end" : "flex-row-reverse justify-end"), children: [
          x.type === "COMP" && x.skip_audience_type !== c.substring(0, 3) && /* @__PURE__ */ f.jsx(n0, { authToken: a, dataBaseApiUrl: o, ...x }),
          x.type === "MSG" && x.skip_audience_type !== c.substring(0, 3) && /* @__PURE__ */ f.jsxs("div", { className: Se("flex items-end gap-2", x.sender_id === c ? "flex-row-reverse" : "flex-row"), children: [
            y.isSuccess && /* @__PURE__ */ f.jsxs(Le, { children: [
              /* @__PURE__ */ f.jsx(Le.Image, { src: (A = O(x.sender_id)) == null ? void 0 : A.photo_url }),
              /* @__PURE__ */ f.jsx(Le.Fallback, { children: (k = O(x.sender_id)) == null ? void 0 : k.firstname })
            ] }),
            /* @__PURE__ */ f.jsx(
              "div",
              {
                className: Se("flex flex-col  text-black p-2 px-4 rounded-t-full", x.sender_id === c ? "rounded-l-full bg-blue-100" : "rounded-r-full bg-gray-100"),
                children: /* @__PURE__ */ f.jsx("p", { children: x.content })
              }
            )
          ] }),
          x.type === "NOTI" && x.skip_audience_type !== c.substring(0, 3) && /* @__PURE__ */ f.jsx(l0, { ...x })
        ] }, x.id);
      }),
      /* @__PURE__ */ f.jsx("div", { ref: h })
    ] }),
    t.room_status === !1 && /* @__PURE__ */ f.jsx("div", { className: "p-3 w-full text-center bg-gray-100", children: "คอร์สเรียนจบแล้ว" }),
    /* @__PURE__ */ f.jsxs("form", { onSubmit: v.onSubmit(_), className: "p-3 space-y-2", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
        /* @__PURE__ */ f.jsx(nc, { "data-testid": "message-input", placeholder: "Aa", ...v.getInputProps("message") }),
        /* @__PURE__ */ f.jsx(
          ct,
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
var G0 = Object.defineProperty, Q0 = (e, t, r) => t in e ? G0(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, ko = (e, t, r) => (Q0(e, typeof t != "symbol" ? t + "" : t, r), r);
let J0 = class {
  constructor() {
    ko(this, "current", this.detect()), ko(this, "handoffState", "pending"), ko(this, "currentId", 0);
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
}, si = new J0(), us = (e, t) => {
  si.isServer ? ue(e, t) : Ua(e, t);
};
function en(e) {
  let t = he(e);
  return us(() => {
    t.current = e;
  }, [e]), t;
}
let Yt = function(e) {
  let t = en(e);
  return Ze.useCallback((...r) => t.current(...r), [t]);
};
function X0(e) {
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
    return X0(() => {
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
function Ef() {
  let [e] = re(js);
  return ue(() => () => e.dispose(), [e]), e;
}
function ex() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in $ ? ((t) => t.useSyncExternalStore)($)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Of() {
  let e = ex(), [t, r] = $.useState(si.isHandoffComplete);
  return t && si.isHandoffComplete === !1 && r(!1), $.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), $.useEffect(() => si.handoff(), []), e ? !1 : t;
}
function $t(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, $t), n;
}
let tx = Symbol();
function Cf(...e) {
  let t = he(e);
  ue(() => {
    t.current = e;
  }, [e]);
  let r = Yt((n) => {
    for (let s of t.current)
      s != null && (typeof s == "function" ? s(n) : s.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[tx])) ? void 0 : r;
}
function Ti(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var Tf = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Tf || {}), gr = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(gr || {});
function Rf({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: s, visible: i = !0, name: o, mergeRefs: a }) {
  a = a ?? rx;
  let c = Af(t, e);
  if (i)
    return Zs(c, r, n, o, a);
  let l = s ?? 0;
  if (l & 2) {
    let { static: u = !1, ...d } = c;
    if (u)
      return Zs(d, r, n, o, a);
  }
  if (l & 1) {
    let { unmount: u = !0, ...d } = c;
    return $t(u ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Zs({ ...d, hidden: !0, style: { display: "none" } }, r, n, o, a);
    } });
  }
  return Zs(c, r, n, o, a);
}
function Zs(e, t = {}, r, n, s) {
  let { as: i = r, children: o, refName: a = "ref", ...c } = Io(e, ["unmount", "static"]), l = e.ref !== void 0 ? { [a]: e.ref } : {}, u = typeof o == "function" ? o(t) : o;
  "className" in c && c.className && typeof c.className == "function" && (c.className = c.className(t));
  let d = {};
  if (t) {
    let h = !1, m = [];
    for (let [y, p] of Object.entries(t))
      typeof p == "boolean" && (h = !0), p === !0 && m.push(y);
    h && (d["data-headlessui-state"] = m.join(" "));
  }
  if (i === kt && Object.keys(Wl(c)).length > 0) {
    if (!En(u) || Array.isArray(u) && u.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(c).map((p) => `  - ${p}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((p) => `  - ${p}`).join(`
`)].join(`
`));
    let h = u.props, m = typeof (h == null ? void 0 : h.className) == "function" ? (...p) => Ti(h == null ? void 0 : h.className(...p), c.className) : Ti(h == null ? void 0 : h.className, c.className), y = m ? { className: m } : {};
    return Ai(u, Object.assign({}, Af(u.props, Wl(Io(c, ["ref"]))), d, l, { ref: s(u.ref, l.ref) }, y));
  }
  return U(i, Object.assign({}, Io(c, ["ref"]), i !== kt && l, i !== kt && d), u);
}
function rx(...e) {
  return e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  };
}
function Af(...e) {
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
function oc(e) {
  var t;
  return Object.assign(me(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function Wl(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Io(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
let ac = Jt(null);
ac.displayName = "OpenClosedContext";
var Vt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Vt || {});
function Nf() {
  return _r(ac);
}
function nx({ value: e, children: t }) {
  return Ze.createElement(ac.Provider, { value: e }, t);
}
function cc() {
  let e = he(!1);
  return us(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function sx(e = 0) {
  let [t, r] = re(e), n = cc(), s = je((c) => {
    n.current && r((l) => l | c);
  }, [t, n]), i = je((c) => !!(t & c), [t]), o = je((c) => {
    n.current && r((l) => l & ~c);
  }, [r, n]), a = je((c) => {
    n.current && r((l) => l ^ c);
  }, [r]);
  return { flags: t, addFlag: s, hasFlag: i, removeFlag: o, toggleFlag: a };
}
function ix(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Mo(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Do(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function ox(e, t) {
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
function ax(e, t, r, n) {
  let s = r ? "enter" : "leave", i = js(), o = n !== void 0 ? ix(n) : () => {
  };
  s === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let a = $t(s, { enter: () => t.enter, leave: () => t.leave }), c = $t(s, { enter: () => t.enterTo, leave: () => t.leaveTo }), l = $t(s, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Do(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Mo(e, ...t.base, ...a, ...l), i.nextFrame(() => {
    Do(e, ...t.base, ...a, ...l), Mo(e, ...t.base, ...a, ...c), ox(e, () => (Do(e, ...t.base, ...a), Mo(e, ...t.base, ...t.entered), o()));
  }), i.dispose;
}
function cx({ immediate: e, container: t, direction: r, classes: n, onStart: s, onStop: i }) {
  let o = cc(), a = Ef(), c = en(r);
  us(() => {
    e && (c.current = "enter");
  }, [e]), us(() => {
    let l = js();
    a.add(l.dispose);
    let u = t.current;
    if (u && c.current !== "idle" && o.current)
      return l.dispose(), s.current(c.current), l.add(ax(u, n.current, c.current === "enter", () => {
        l.dispose(), i.current(c.current);
      })), l.dispose;
  }, [r]);
}
function or(e = "") {
  return e.split(/\s+/).filter((t) => t.length > 1);
}
let Ki = Jt(null);
Ki.displayName = "TransitionContext";
var lx = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(lx || {});
function ux() {
  let e = _r(Ki);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function dx() {
  let e = _r(Yi);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Yi = Jt(null);
Yi.displayName = "NestingContext";
function Gi(e) {
  return "children" in e ? Gi(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function jf(e, t) {
  let r = en(e), n = he([]), s = cc(), i = Ef(), o = Yt((m, y = gr.Hidden) => {
    let p = n.current.findIndex(({ el: v }) => v === m);
    p !== -1 && ($t(y, { [gr.Unmount]() {
      n.current.splice(p, 1);
    }, [gr.Hidden]() {
      n.current[p].state = "hidden";
    } }), i.microTask(() => {
      var v;
      !Gi(n) && s.current && ((v = r.current) == null || v.call(r));
    }));
  }), a = Yt((m) => {
    let y = n.current.find(({ el: p }) => p === m);
    return y ? y.state !== "visible" && (y.state = "visible") : n.current.push({ el: m, state: "visible" }), () => o(m, gr.Unmount);
  }), c = he([]), l = he(Promise.resolve()), u = he({ enter: [], leave: [], idle: [] }), d = Yt((m, y, p) => {
    c.current.splice(0), t && (t.chains.current[y] = t.chains.current[y].filter(([v]) => v !== m)), t == null || t.chains.current[y].push([m, new Promise((v) => {
      c.current.push(v);
    })]), t == null || t.chains.current[y].push([m, new Promise((v) => {
      Promise.all(u.current[y].map(([_, O]) => O)).then(() => v());
    })]), y === "enter" ? l.current = l.current.then(() => t == null ? void 0 : t.wait.current).then(() => p(y)) : p(y);
  }), h = Yt((m, y, p) => {
    Promise.all(u.current[y].splice(0).map(([v, _]) => _)).then(() => {
      var v;
      (v = c.current.shift()) == null || v();
    }).then(() => p(y));
  });
  return On(() => ({ children: n, register: a, unregister: o, onStart: d, onStop: h, wait: l, chains: u }), [a, o, n, d, h, u, l]);
}
function fx() {
}
let hx = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ql(e) {
  var t;
  let r = {};
  for (let n of hx)
    r[n] = (t = e[n]) != null ? t : fx;
  return r;
}
function px(e) {
  let t = he(ql(e));
  return ue(() => {
    t.current = ql(e);
  }, [e]), t;
}
let mx = "div", Pf = Tf.RenderStrategy;
function vx(e, t) {
  var r, n;
  let { beforeEnter: s, afterEnter: i, beforeLeave: o, afterLeave: a, enter: c, enterFrom: l, enterTo: u, entered: d, leave: h, leaveFrom: m, leaveTo: y, ...p } = e, v = he(null), _ = Cf(v, t), O = (r = p.unmount) == null || r ? gr.Unmount : gr.Hidden, { show: w, appear: E, initial: x } = ux(), [A, k] = re(w ? "visible" : "hidden"), j = dx(), { register: R, unregister: B } = j;
  ue(() => R(v), [R, v]), ue(() => {
    if (O === gr.Hidden && v.current) {
      if (w && A !== "visible") {
        k("visible");
        return;
      }
      return $t(A, { hidden: () => B(v), visible: () => R(v) });
    }
  }, [A, v, R, B, w, O]);
  let K = en({ base: or(p.className), enter: or(c), enterFrom: or(l), enterTo: or(u), entered: or(d), leave: or(h), leaveFrom: or(m), leaveTo: or(y) }), V = px({ beforeEnter: s, afterEnter: i, beforeLeave: o, afterLeave: a }), Pe = Of();
  ue(() => {
    if (Pe && A === "visible" && v.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [v, A, Pe]);
  let Ee = x && !E, Fe = E && w && x, Ae = !Pe || Ee ? "idle" : w ? "enter" : "leave", Ie = sx(0), Xe = Yt((q) => $t(q, { enter: () => {
    Ie.addFlag(Vt.Opening), V.current.beforeEnter();
  }, leave: () => {
    Ie.addFlag(Vt.Closing), V.current.beforeLeave();
  }, idle: () => {
  } })), Qe = Yt((q) => $t(q, { enter: () => {
    Ie.removeFlag(Vt.Opening), V.current.afterEnter();
  }, leave: () => {
    Ie.removeFlag(Vt.Closing), V.current.afterLeave();
  }, idle: () => {
  } })), T = jf(() => {
    k("hidden"), B(v);
  }, j), M = he(!1);
  cx({ immediate: Fe, container: v, classes: K, direction: Ae, onStart: en((q) => {
    M.current = !0, T.onStart(v, q, Xe);
  }), onStop: en((q) => {
    M.current = !1, T.onStop(v, q, Qe), q === "leave" && !Gi(T) && (k("hidden"), B(v));
  }) });
  let W = p, X = { ref: _ };
  return Fe ? W = { ...W, className: Ti(p.className, ...K.current.enter, ...K.current.enterFrom) } : M.current && (W.className = Ti(p.className, (n = v.current) == null ? void 0 : n.className), W.className === "" && delete W.className), Ze.createElement(Yi.Provider, { value: T }, Ze.createElement(nx, { value: $t(A, { visible: Vt.Open, hidden: Vt.Closed }) | Ie.flags }, Rf({ ourProps: X, theirProps: W, defaultTag: mx, features: Pf, visible: A === "visible", name: "Transition.Child" })));
}
function yx(e, t) {
  let { show: r, appear: n = !1, unmount: s = !0, ...i } = e, o = he(null), a = Cf(o, t);
  Of();
  let c = Nf();
  if (r === void 0 && c !== null && (r = (c & Vt.Open) === Vt.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [l, u] = re(r ? "visible" : "hidden"), d = jf(() => {
    u("hidden");
  }), [h, m] = re(!0), y = he([r]);
  us(() => {
    h !== !1 && y.current[y.current.length - 1] !== r && (y.current.push(r), m(!1));
  }, [y, r]);
  let p = On(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  ue(() => {
    if (r)
      u("visible");
    else if (!Gi(d))
      u("hidden");
    else {
      let w = o.current;
      if (!w)
        return;
      let E = w.getBoundingClientRect();
      E.x === 0 && E.y === 0 && E.width === 0 && E.height === 0 && u("hidden");
    }
  }, [r, d]);
  let v = { unmount: s }, _ = Yt(() => {
    var w;
    h && m(!1), (w = e.beforeEnter) == null || w.call(e);
  }), O = Yt(() => {
    var w;
    h && m(!1), (w = e.beforeLeave) == null || w.call(e);
  });
  return Ze.createElement(Yi.Provider, { value: d }, Ze.createElement(Ki.Provider, { value: p }, Rf({ ourProps: { ...v, as: kt, children: Ze.createElement($f, { ref: a, ...v, ...i, beforeEnter: _, beforeLeave: O }) }, theirProps: {}, defaultTag: kt, features: Pf, visible: l === "visible", name: "Transition" })));
}
function gx(e, t) {
  let r = _r(Ki) !== null, n = Nf() !== null;
  return Ze.createElement(Ze.Fragment, null, !r && n ? Ze.createElement(Fa, { ref: t, ...e }) : Ze.createElement($f, { ref: t, ...e }));
}
let Fa = oc(yx), $f = oc(vx), bx = oc(gx), kf = Object.assign(Fa, { Child: bx, Root: Fa });
const xx = Jt(null), Lo = {
  didCatch: !1,
  error: null
};
class Ks extends th {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Lo;
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
      }), this.setState(Lo);
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
    if (n && r.error !== null && wx(t.resetKeys, s)) {
      var i, o;
      (i = (o = this.props).onReset) === null || i === void 0 || i.call(o, {
        next: s,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(Lo);
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
      else if (s === null || En(s))
        a = s;
      else
        throw o;
    }
    return U(xx.Provider, {
      value: {
        didCatch: i,
        error: o,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, a);
  }
}
function wx() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((r, n) => !Object.is(r, t[n]));
}
const Gn = ({ children: e }) => /* @__PURE__ */ f.jsxs(Z, { className: "p-3 flex flex-row gap-3 items-center text-red-400", children: [
  /* @__PURE__ */ f.jsx(eg, { size: 20 }),
  " ",
  e
] }), _x = ({ order: { course_name: e }, teacher: { title: t, firstname: r } }) => /* @__PURE__ */ f.jsxs(Z, { className: "relative bg-white rounded-none w-full", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 p-3", children: [
    /* @__PURE__ */ f.jsxs(Le, { className: "w-[70px] h-[70px] rounded-md", children: [
      /* @__PURE__ */ f.jsx(
        Le.Image,
        {
          className: "w-[70px] h-[70px]",
          src: "https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
        }
      ),
      /* @__PURE__ */ f.jsx(Le.Fallback, { children: e })
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
  /* @__PURE__ */ f.jsx(Z.Content, { className: "p-3", children: /* @__PURE__ */ f.jsx("div", { children: e }) }),
  /* @__PURE__ */ f.jsx("div", { className: "flex flex-row w-full justify-end p-3", children: /* @__PURE__ */ f.jsx(Nn, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
] }), Sx = ({ orderStatus: e }) => {
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
  return /* @__PURE__ */ f.jsxs(Z, { className: "rounded-none bg-white w-full", children: [
    /* @__PURE__ */ f.jsx(Z.Header, { className: " px-3 pt-3 pb-0", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "สถานะ" }) }),
    /* @__PURE__ */ f.jsxs(Z.Content, { className: "p-3 flex flex-row justify-between", children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.hasTeacher ? /* @__PURE__ */ f.jsx(So, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(Eo, { size: 30, className: "text-orange-500" }),
          "ได้คุณครูแล้ว"
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isLearned ? /* @__PURE__ */ f.jsx(So, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(Eo, { size: 30, className: "text-orange-500" }),
          "เรียนแล้ว"
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isCompleted ? /* @__PURE__ */ f.jsx(So, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(Eo, { size: 30, className: "text-orange-500" }),
          "เสร็จแล้ว"
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "flex flex-col justify-end", children: /* @__PURE__ */ f.jsx(Nn, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
    ] })
  ] });
}, Ex = ({ roomId: e, sideMenuOpen: t, setSideMenuOpen: r }) => {
  const { dataBaseApiUrl: n, authToken: s } = is(), [i, o] = re(null), [a, c] = re(window.innerWidth <= 1200);
  return ue(() => {
    const l = () => {
      window.innerWidth <= 1200 ? (c(!0), r(!1)) : (r(!0), c(!1));
    };
    return window.addEventListener("resize", l), l(), () => {
      window.removeEventListener("resize", l);
    };
  }, []), ue(() => {
    e && pd(n, s, e).then((l) => {
      o(l);
    });
  }, [e, n, s]), i && /* @__PURE__ */ f.jsx(
    kf,
    {
      show: t,
      as: kt,
      enter: "transition ease-out duration-200",
      enterFrom: Se("opacity-0", a ? "translate-x-10" : "-translate-x-10"),
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: Se("opacity-0", a ? "translate-x-10" : "-translate-x-10"),
      children: /* @__PURE__ */ f.jsx("div", { className: Se("bg-white", a && "absolute top-0 left-0 right-0 bottom-0 z-20"), onClick: () => r(!1), children: /* @__PURE__ */ f.jsxs(Hi, { className: "min-w-[400px] h-[90vh] relative", onClick: (l) => l.stopPropagation(), children: [
        a && /* @__PURE__ */ f.jsx(ct, { className: "p-2 my-2", variant: "ghost", children: /* @__PURE__ */ f.jsx(jd, { className: "active:translate-y-[1px]", size: 24, onClick: () => r(!1) }) }),
        /* @__PURE__ */ f.jsx(Ks, { fallback: /* @__PURE__ */ f.jsx(Gn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(_x, { order: i.order, teacher: i.teacher }) }),
        /* @__PURE__ */ f.jsx(Ks, { fallback: /* @__PURE__ */ f.jsx(Gn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(Sx, { orderStatus: i.order.order_status }) }),
        /* @__PURE__ */ f.jsx(Ks, { fallback: /* @__PURE__ */ f.jsx(Gn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(kd, { order: i.order }) }),
        /* @__PURE__ */ f.jsx(Ks, { fallback: /* @__PURE__ */ f.jsx(Gn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(uf, { teacher: i.teacher }) })
      ] }) })
    }
  );
}, Ox = ({ roomMenuOpen: e, setRoomMenuOpen: t, chatRoom: r, selectedTab: n, setSelectedTab: s }) => {
  const [i, o] = re(window.innerWidth <= 1200);
  return ue(() => {
    const a = () => {
      window.innerWidth <= 1200 ? (o(!0), t(!1)) : (t(!0), o(!1));
    };
    return window.addEventListener("resize", a), a(), () => {
      window.removeEventListener("resize", a);
    };
  }, []), /* @__PURE__ */ f.jsx(
    kf,
    {
      show: e,
      as: kt,
      enter: "transition ease-out duration-200",
      enterFrom: Se("opacity-0", i ? "-translate-x-10" : "translate-x-10"),
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: Se("opacity-0", i ? "-translate-x-10" : "translate-x-10"),
      children: /* @__PURE__ */ f.jsx("div", { className: Se("flex flex-col  bg-white border-y border-l h-[90vh]", i && "absolute top-0 left-0 right-0 bottom-0 z-20"), children: /* @__PURE__ */ f.jsxs(Hi, { children: [
        i && /* @__PURE__ */ f.jsx(ct, { className: "p-2 my-2 w-fit ml-auto", variant: "ghost", children: /* @__PURE__ */ f.jsx(jd, { className: "active:translate-y-[1px]", size: 24, onClick: () => t(!1) }) }),
        r.map((a, c) => /* @__PURE__ */ f.jsx("div", { children: /* @__PURE__ */ f.jsx(Cx, { room: a, selectedTab: n, index: c, setSelectedTab: s }) }, a.room_id))
      ] }) })
    }
  );
}, Cx = ({ room: e, selectedTab: t, index: r, setSelectedTab: n }) => {
  var m, y, p, v, _, O, w, E, x;
  const { notiLatestMessages: s } = Ui(), { dataBaseApiUrl: i, authToken: o } = is(), { userId: a } = is(), c = zr({
    queryKey: ["user-profile", e.room_id],
    queryFn: () => pd(i, o, e.room_id)
  }), l = zr({
    queryKey: ["latest-message", e.room_id],
    queryFn: () => hd(i, o, e.room_id, (/* @__PURE__ */ new Date()).toISOString(), "2023-12-20T09:32:13.000Z")
  }), u = (m = l.data) == null ? void 0 : m[l.data.length - 1], d = (A) => {
    var j, R;
    const k = s.find((B) => B.room_id === A);
    if ((k == null ? void 0 : k.skip_audience_type) !== a.substring(0, 3))
      return !!(k && k.sender_id !== ((R = (j = c.data) == null ? void 0 : j.teacher) == null ? void 0 : R.user_id));
  }, h = (A) => {
    var j, R;
    const k = s.find((B) => B.room_id === A);
    if (k && k.sender_id !== ((R = (j = c.data) == null ? void 0 : j.teacher) == null ? void 0 : R.user_id)) {
      const B = s.indexOf(k);
      s.splice(B, 1);
    }
  };
  return /* @__PURE__ */ f.jsxs(
    "div",
    {
      className: Se(
        "min-w-[300px] w-full px-4 py-2  flex flex-row gap-4 border-l-4 cursor-pointer hover:bg-gray-100 transition-all duration-100",
        t === r && "border-l-4 border-orange-400"
      ),
      onClick: () => {
        n(r), h(e.room_id);
      },
      children: [
        /* @__PURE__ */ f.jsxs(Le, { children: [
          /* @__PURE__ */ f.jsx(Le.Image, { src: (p = (y = c.data) == null ? void 0 : y.teacher) == null ? void 0 : p.photo_url }),
          /* @__PURE__ */ f.jsx(Le.Fallback, { children: (_ = (v = c.data) == null ? void 0 : v.teacher) == null ? void 0 : _.firstname })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ f.jsxs("p", { className: "truncate max-w-[250px] font-bold", children: [
              e.room_name,
              " (",
              e.room_id,
              ")"
            ] }),
            /* @__PURE__ */ f.jsxs("p", { className: "text-sm", children: [
              (w = (O = c.data) == null ? void 0 : O.teacher) == null ? void 0 : w.firstname,
              " ",
              (x = (E = c.data) == null ? void 0 : E.teacher) == null ? void 0 : x.lastname
            ] }),
            (u == null ? void 0 : u.skip_audience_type) !== a.substring(0, 3) && /* @__PURE__ */ f.jsx("p", { "data-testid": "latest-message", className: "text-xs", children: u == null ? void 0 : u.content })
          ] }),
          (u == null ? void 0 : u.skip_audience_type) !== a.substring(0, 3) && d(e.room_id) && t !== r && /* @__PURE__ */ f.jsx("div", { "data-testid": "notification-div", className: "p-1 bg-red-500 rounded-full" })
        ] })
      ]
    }
  );
}, Tx = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r }) => {
  const [n, s] = re(0), { connectWebSocket: i, socketStatus: o, disconnectWebSocket: a } = Ui(), c = Ln(), l = zr({
    queryKey: ["chat-room"],
    queryFn: () => Gc(t, r)
  }), u = window.innerWidth <= 1200, [d, h] = re(!u), [m, y] = re(!u);
  return ue(() => {
    i(t, e, r, c);
    function p() {
      document.visibilityState === "hidden" ? a() : (i(t, e, r, c), Gc(t, r));
    }
    return document.addEventListener("visibilitychange", p), () => {
      document.removeEventListener("visibilitychange", p);
    };
  }, [i, e, t, r, a, c]), l.isLoading ? /* @__PURE__ */ f.jsx("div", { children: "Loading..." }) : l.isError ? /* @__PURE__ */ f.jsx(Gn, { children: l.error.message }) : l.isSuccess && /* @__PURE__ */ f.jsxs("div", { "data-testid": "chat-app", className: "flex flex-row relative", children: [
    /* @__PURE__ */ f.jsx(Ox, { roomMenuOpen: d, setRoomMenuOpen: h, selectedTab: n, setSelectedTab: s, chatRoom: l.data }),
    l.data.map((p, v) => n === v && /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row w-full", children: [
      /* @__PURE__ */ f.jsx(
        Y0,
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
      /* @__PURE__ */ f.jsx(Ex, { roomId: p.room_id, sideMenuOpen: m, setSideMenuOpen: y })
    ] }, p.room_id))
  ] });
}, Rx = new xh(), dw = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n, devTools: s = !1 }) => /* @__PURE__ */ f.jsx(Oh, { client: Rx, children: /* @__PURE__ */ f.jsxs(mm, { socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n, children: [
  /* @__PURE__ */ f.jsx(Tx, { socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n }),
  s && /* @__PURE__ */ f.jsx(pm, { initialIsOpen: !1 })
] }) });
export {
  ai as $,
  Fx as A,
  Ms as B,
  Hx as C,
  Zx as D,
  iw as E,
  zx as F,
  Jx as G,
  Qx as H,
  Bx as I,
  Ke as J,
  Lr as K,
  tp as L,
  gp as M,
  Gx as N,
  qx as O,
  Kx as P,
  Wx as Q,
  Ds as R,
  Vx as S,
  Dx as T,
  Yx as U,
  xu as V,
  Ac as W,
  dw as X,
  lt as a,
  Jh as b,
  nt as c,
  mp as d,
  bu as e,
  Fr as f,
  ow as g,
  yp as h,
  ra as i,
  kx as j,
  ta as k,
  Xx as l,
  sw as m,
  ew as n,
  zh as o,
  wp as p,
  ep as q,
  tw as r,
  nw as s,
  rw as t,
  $x as u,
  ts as v,
  vu as w,
  Ix as x,
  Ux as y,
  Lx as z
};
