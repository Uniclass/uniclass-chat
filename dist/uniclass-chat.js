import * as F from "react";
import se, { forwardRef as ye, createElement as z, createContext as Zt, useMemo as hr, useContext as tr, useRef as ve, useEffect as ie, useLayoutEffect as mi, useCallback as pt, Children as Qt, isValidElement as pr, cloneElement as Zn, Fragment as yt, useState as he, useReducer as vi, Component as Dl } from "react";
import Il, { flushSync as gi } from "react-dom";
function yi(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xs = { exports: {} }, $r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var oa;
function Ml() {
  return oa || (oa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = se, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), c = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), y = Symbol.iterator, p = "@@iterator";
    function b(m) {
      if (m === null || typeof m != "object")
        return null;
      var N = y && m[y] || m[p];
      return typeof N == "function" ? N : null;
    }
    var O = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function w(m) {
      {
        for (var N = arguments.length, L = new Array(N > 1 ? N - 1 : 0), te = 1; te < N; te++)
          L[te - 1] = arguments[te];
        E("error", m, L);
      }
    }
    function E(m, N, L) {
      {
        var te = O.ReactDebugCurrentFrame, Re = te.getStackAddendum();
        Re !== "" && (N += "%s", L = L.concat([Re]));
        var Ae = L.map(function(Ee) {
          return String(Ee);
        });
        Ae.unshift("Warning: " + N), Function.prototype.apply.call(console[m], console, Ae);
      }
    }
    var T = !1, x = !1, V = !1, J = !1, q = !1, B;
    B = Symbol.for("react.module.reference");
    function X(m) {
      return !!(typeof m == "string" || typeof m == "function" || m === n || m === o || q || m === s || m === l || m === u || J || m === g || T || x || V || typeof m == "object" && m !== null && (m.$$typeof === h || m.$$typeof === d || m.$$typeof === a || m.$$typeof === i || m.$$typeof === c || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      m.$$typeof === B || m.getModuleId !== void 0));
    }
    function me(m, N, L) {
      var te = m.displayName;
      if (te)
        return te;
      var Re = N.displayName || N.name || "";
      return Re !== "" ? L + "(" + Re + ")" : L;
    }
    function k(m) {
      return m.displayName || "Context";
    }
    function A(m) {
      if (m == null)
        return null;
      if (typeof m.tag == "number" && w("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof m == "function")
        return m.displayName || m.name || null;
      if (typeof m == "string")
        return m;
      switch (m) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case l:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case i:
            var N = m;
            return k(N) + ".Consumer";
          case a:
            var L = m;
            return k(L._context) + ".Provider";
          case c:
            return me(m, m.render, "ForwardRef");
          case d:
            var te = m.displayName || null;
            return te !== null ? te : A(m.type) || "Memo";
          case h: {
            var Re = m, Ae = Re._payload, Ee = Re._init;
            try {
              return A(Ee(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var H = Object.assign, le = 0, we, Se, ze, Ie, R, P, Q;
    function K() {
    }
    K.__reactDisabledLog = !0;
    function re() {
      {
        if (le === 0) {
          we = console.log, Se = console.info, ze = console.warn, Ie = console.error, R = console.group, P = console.groupCollapsed, Q = console.groupEnd;
          var m = {
            configurable: !0,
            enumerable: !0,
            value: K,
            writable: !0
          };
          Object.defineProperties(console, {
            info: m,
            log: m,
            warn: m,
            error: m,
            group: m,
            groupCollapsed: m,
            groupEnd: m
          });
        }
        le++;
      }
    }
    function be() {
      {
        if (le--, le === 0) {
          var m = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: H({}, m, {
              value: we
            }),
            info: H({}, m, {
              value: Se
            }),
            warn: H({}, m, {
              value: ze
            }),
            error: H({}, m, {
              value: Ie
            }),
            group: H({}, m, {
              value: R
            }),
            groupCollapsed: H({}, m, {
              value: P
            }),
            groupEnd: H({}, m, {
              value: Q
            })
          });
        }
        le < 0 && w("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ne = O.ReactCurrentDispatcher, oe;
    function ue(m, N, L) {
      {
        if (oe === void 0)
          try {
            throw Error();
          } catch (Re) {
            var te = Re.stack.trim().match(/\n( *(at )?)/);
            oe = te && te[1] || "";
          }
        return `
` + oe + m;
      }
    }
    var xe = !1, de;
    {
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      de = new Be();
    }
    function M(m, N) {
      if (!m || xe)
        return "";
      {
        var L = de.get(m);
        if (L !== void 0)
          return L;
      }
      var te;
      xe = !0;
      var Re = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = ne.current, ne.current = null, re();
      try {
        if (N) {
          var Ee = function() {
            throw Error();
          };
          if (Object.defineProperty(Ee.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(Ee, []);
            } catch (Ct) {
              te = Ct;
            }
            Reflect.construct(m, [], Ee);
          } else {
            try {
              Ee.call();
            } catch (Ct) {
              te = Ct;
            }
            m.call(Ee.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (Ct) {
            te = Ct;
          }
          m();
        }
      } catch (Ct) {
        if (Ct && te && typeof Ct.stack == "string") {
          for (var _e = Ct.stack.split(`
`), Ye = te.stack.split(`
`), Fe = _e.length - 1, Ue = Ye.length - 1; Fe >= 1 && Ue >= 0 && _e[Fe] !== Ye[Ue]; )
            Ue--;
          for (; Fe >= 1 && Ue >= 0; Fe--, Ue--)
            if (_e[Fe] !== Ye[Ue]) {
              if (Fe !== 1 || Ue !== 1)
                do
                  if (Fe--, Ue--, Ue < 0 || _e[Fe] !== Ye[Ue]) {
                    var rt = `
` + _e[Fe].replace(" at new ", " at ");
                    return m.displayName && rt.includes("<anonymous>") && (rt = rt.replace("<anonymous>", m.displayName)), typeof m == "function" && de.set(m, rt), rt;
                  }
                while (Fe >= 1 && Ue >= 0);
              break;
            }
        }
      } finally {
        xe = !1, ne.current = Ae, be(), Error.prepareStackTrace = Re;
      }
      var sr = m ? m.displayName || m.name : "", sa = sr ? ue(sr) : "";
      return typeof m == "function" && de.set(m, sa), sa;
    }
    function He(m, N, L) {
      return M(m, !1);
    }
    function It(m) {
      var N = m.prototype;
      return !!(N && N.isReactComponent);
    }
    function ft(m, N, L) {
      if (m == null)
        return "";
      if (typeof m == "function")
        return M(m, It(m));
      if (typeof m == "string")
        return ue(m);
      switch (m) {
        case l:
          return ue("Suspense");
        case u:
          return ue("SuspenseList");
      }
      if (typeof m == "object")
        switch (m.$$typeof) {
          case c:
            return He(m.render);
          case d:
            return ft(m.type, N, L);
          case h: {
            var te = m, Re = te._payload, Ae = te._init;
            try {
              return ft(Ae(Re), N, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Yt = Object.prototype.hasOwnProperty, ds = {}, fs = O.ReactDebugCurrentFrame;
    function Tr(m) {
      if (m) {
        var N = m._owner, L = ft(m.type, m._source, N ? N.type : null);
        fs.setExtraStackFrame(L);
      } else
        fs.setExtraStackFrame(null);
    }
    function v(m, N, L, te, Re) {
      {
        var Ae = Function.call.bind(Yt);
        for (var Ee in m)
          if (Ae(m, Ee)) {
            var _e = void 0;
            try {
              if (typeof m[Ee] != "function") {
                var Ye = Error((te || "React class") + ": " + L + " type `" + Ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof m[Ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw Ye.name = "Invariant Violation", Ye;
              }
              _e = m[Ee](N, Ee, te, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              _e = Fe;
            }
            _e && !(_e instanceof Error) && (Tr(Re), w("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", te || "React class", L, Ee, typeof _e), Tr(null)), _e instanceof Error && !(_e.message in ds) && (ds[_e.message] = !0, Tr(Re), w("Failed %s type: %s", L, _e.message), Tr(null));
          }
      }
    }
    var _ = Array.isArray;
    function S(m) {
      return _(m);
    }
    function W(m) {
      {
        var N = typeof Symbol == "function" && Symbol.toStringTag, L = N && m[Symbol.toStringTag] || m.constructor.name || "Object";
        return L;
      }
    }
    function D(m) {
      try {
        return $(m), !1;
      } catch {
        return !0;
      }
    }
    function $(m) {
      return "" + m;
    }
    function Y(m) {
      if (D(m))
        return w("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", W(m)), $(m);
    }
    var Te = O.ReactCurrentOwner, Ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, et, Et, Or;
    Or = {};
    function Rr(m) {
      if (Yt.call(m, "ref")) {
        var N = Object.getOwnPropertyDescriptor(m, "ref").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return m.ref !== void 0;
    }
    function Nr(m) {
      if (Yt.call(m, "key")) {
        var N = Object.getOwnPropertyDescriptor(m, "key").get;
        if (N && N.isReactWarning)
          return !1;
      }
      return m.key !== void 0;
    }
    function hs(m, N) {
      if (typeof m.ref == "string" && Te.current && N && Te.current.stateNode !== N) {
        var L = A(Te.current.type);
        Or[L] || (w('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', A(Te.current.type), m.ref), Or[L] = !0);
      }
    }
    function rn(m, N) {
      {
        var L = function() {
          et || (et = !0, w("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        L.isReactWarning = !0, Object.defineProperty(m, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function ps(m, N) {
      {
        var L = function() {
          Et || (Et = !0, w("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", N));
        };
        L.isReactWarning = !0, Object.defineProperty(m, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var nn = function(m, N, L, te, Re, Ae, Ee) {
      var _e = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: m,
        key: N,
        ref: L,
        props: Ee,
        // Record the component responsible for creating this element.
        _owner: Ae
      };
      return _e._store = {}, Object.defineProperty(_e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(_e, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: te
      }), Object.defineProperty(_e, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: Re
      }), Object.freeze && (Object.freeze(_e.props), Object.freeze(_e)), _e;
    };
    function Tl(m, N, L, te, Re) {
      {
        var Ae, Ee = {}, _e = null, Ye = null;
        L !== void 0 && (Y(L), _e = "" + L), Nr(N) && (Y(N.key), _e = "" + N.key), Rr(N) && (Ye = N.ref, hs(N, Re));
        for (Ae in N)
          Yt.call(N, Ae) && !Ve.hasOwnProperty(Ae) && (Ee[Ae] = N[Ae]);
        if (m && m.defaultProps) {
          var Fe = m.defaultProps;
          for (Ae in Fe)
            Ee[Ae] === void 0 && (Ee[Ae] = Fe[Ae]);
        }
        if (_e || Ye) {
          var Ue = typeof m == "function" ? m.displayName || m.name || "Unknown" : m;
          _e && rn(Ee, Ue), Ye && ps(Ee, Ue);
        }
        return nn(m, _e, Ye, Re, te, Te.current, Ee);
      }
    }
    var ms = O.ReactCurrentOwner, Xo = O.ReactDebugCurrentFrame;
    function nr(m) {
      if (m) {
        var N = m._owner, L = ft(m.type, m._source, N ? N.type : null);
        Xo.setExtraStackFrame(L);
      } else
        Xo.setExtraStackFrame(null);
    }
    var vs;
    vs = !1;
    function gs(m) {
      return typeof m == "object" && m !== null && m.$$typeof === t;
    }
    function Qo() {
      {
        if (ms.current) {
          var m = A(ms.current.type);
          if (m)
            return `

Check the render method of \`` + m + "`.";
        }
        return "";
      }
    }
    function Ol(m) {
      {
        if (m !== void 0) {
          var N = m.fileName.replace(/^.*[\\\/]/, ""), L = m.lineNumber;
          return `

Check your code at ` + N + ":" + L + ".";
        }
        return "";
      }
    }
    var ea = {};
    function Rl(m) {
      {
        var N = Qo();
        if (!N) {
          var L = typeof m == "string" ? m : m.displayName || m.name;
          L && (N = `

Check the top-level render call using <` + L + ">.");
        }
        return N;
      }
    }
    function ta(m, N) {
      {
        if (!m._store || m._store.validated || m.key != null)
          return;
        m._store.validated = !0;
        var L = Rl(N);
        if (ea[L])
          return;
        ea[L] = !0;
        var te = "";
        m && m._owner && m._owner !== ms.current && (te = " It was passed a child from " + A(m._owner.type) + "."), nr(m), w('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, te), nr(null);
      }
    }
    function ra(m, N) {
      {
        if (typeof m != "object")
          return;
        if (S(m))
          for (var L = 0; L < m.length; L++) {
            var te = m[L];
            gs(te) && ta(te, N);
          }
        else if (gs(m))
          m._store && (m._store.validated = !0);
        else if (m) {
          var Re = b(m);
          if (typeof Re == "function" && Re !== m.entries)
            for (var Ae = Re.call(m), Ee; !(Ee = Ae.next()).done; )
              gs(Ee.value) && ta(Ee.value, N);
        }
      }
    }
    function Nl(m) {
      {
        var N = m.type;
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
          var te = A(N);
          v(L, m.props, "prop", te, m);
        } else if (N.PropTypes !== void 0 && !vs) {
          vs = !0;
          var Re = A(N);
          w("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", Re || "Unknown");
        }
        typeof N.getDefaultProps == "function" && !N.getDefaultProps.isReactClassApproved && w("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function $l(m) {
      {
        for (var N = Object.keys(m.props), L = 0; L < N.length; L++) {
          var te = N[L];
          if (te !== "children" && te !== "key") {
            nr(m), w("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", te), nr(null);
            break;
          }
        }
        m.ref !== null && (nr(m), w("Invalid attribute `ref` supplied to `React.Fragment`."), nr(null));
      }
    }
    function na(m, N, L, te, Re, Ae) {
      {
        var Ee = X(m);
        if (!Ee) {
          var _e = "";
          (m === void 0 || typeof m == "object" && m !== null && Object.keys(m).length === 0) && (_e += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var Ye = Ol(Re);
          Ye ? _e += Ye : _e += Qo();
          var Fe;
          m === null ? Fe = "null" : S(m) ? Fe = "array" : m !== void 0 && m.$$typeof === t ? (Fe = "<" + (A(m.type) || "Unknown") + " />", _e = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof m, w("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, _e);
        }
        var Ue = Tl(m, N, L, Re, Ae);
        if (Ue == null)
          return Ue;
        if (Ee) {
          var rt = N.children;
          if (rt !== void 0)
            if (te)
              if (S(rt)) {
                for (var sr = 0; sr < rt.length; sr++)
                  ra(rt[sr], m);
                Object.freeze && Object.freeze(rt);
              } else
                w("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ra(rt, m);
        }
        return m === n ? $l(Ue) : Nl(Ue), Ue;
      }
    }
    function jl(m, N, L) {
      return na(m, N, L, !0);
    }
    function kl(m, N, L) {
      return na(m, N, L, !1);
    }
    var Al = kl, Pl = jl;
    $r.Fragment = n, $r.jsx = Al, $r.jsxs = Pl;
  }()), $r;
}
var jr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa;
function Ll() {
  if (aa)
    return jr;
  aa = 1;
  var e = se, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, c, l) {
    var u, d = {}, h = null, g = null;
    l !== void 0 && (h = "" + l), c.key !== void 0 && (h = "" + c.key), c.ref !== void 0 && (g = c.ref);
    for (u in c)
      n.call(c, u) && !o.hasOwnProperty(u) && (d[u] = c[u]);
    if (i && i.defaultProps)
      for (u in c = i.defaultProps, c)
        d[u] === void 0 && (d[u] = c[u]);
    return { $$typeof: t, type: i, key: h, ref: g, props: d, _owner: s.current };
  }
  return jr.Fragment = r, jr.jsx = a, jr.jsxs = a, jr;
}
process.env.NODE_ENV === "production" ? Xs.exports = Ll() : Xs.exports = Ml();
var f = Xs.exports;
function bi(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: Fl } = Object.prototype, { getPrototypeOf: To } = Object, qn = /* @__PURE__ */ ((e) => (t) => {
  const r = Fl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), wt = (e) => (e = e.toLowerCase(), (t) => qn(t) === e), Hn = (e) => (t) => typeof t === e, { isArray: Er } = Array, Lr = Hn("undefined");
function Vl(e) {
  return e !== null && !Lr(e) && e.constructor !== null && !Lr(e.constructor) && ot(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xi = wt("ArrayBuffer");
function Ul(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xi(e.buffer), t;
}
const zl = Hn("string"), ot = Hn("function"), _i = Hn("number"), Yn = (e) => e !== null && typeof e == "object", Bl = (e) => e === !0 || e === !1, vn = (e) => {
  if (qn(e) !== "object")
    return !1;
  const t = To(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Wl = wt("Date"), Zl = wt("File"), ql = wt("Blob"), Hl = wt("FileList"), Yl = (e) => Yn(e) && ot(e.pipe), Gl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || ot(e.append) && ((t = qn(e)) === "formdata" || // detect form-data instance
  t === "object" && ot(e.toString) && e.toString() === "[object FormData]"));
}, Jl = wt("URLSearchParams"), Kl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function qr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), Er(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (n = 0; n < a; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function wi(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const Si = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ei = (e) => !Lr(e) && e !== Si;
function Qs() {
  const { caseless: e } = Ei(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && wi(t, s) || s;
    vn(t[o]) && vn(n) ? t[o] = Qs(t[o], n) : vn(n) ? t[o] = Qs({}, n) : Er(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && qr(arguments[n], r);
  return t;
}
const Xl = (e, t, r, { allOwnKeys: n } = {}) => (qr(t, (s, o) => {
  r && ot(s) ? e[o] = bi(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), Ql = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), eu = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, tu = (e, t, r, n) => {
  let s, o, a;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!n || n(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = r !== !1 && To(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, ru = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, nu = (e) => {
  if (!e)
    return null;
  if (Er(e))
    return e;
  let t = e.length;
  if (!_i(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, su = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && To(Uint8Array)), ou = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, au = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, iu = wt("HTMLFormElement"), cu = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), ia = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), lu = wt("RegExp"), Ci = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  qr(r, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (n[o] = a || s);
  }), Object.defineProperties(e, n);
}, uu = (e) => {
  Ci(e, (t, r) => {
    if (ot(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (ot(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, du = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return Er(e) ? n(e) : n(String(e).split(t)), r;
}, fu = () => {
}, hu = (e, t) => (e = +e, Number.isFinite(e) ? e : t), ys = "abcdefghijklmnopqrstuvwxyz", ca = "0123456789", Ti = {
  DIGIT: ca,
  ALPHA: ys,
  ALPHA_DIGIT: ys + ys.toUpperCase() + ca
}, pu = (e = 16, t = Ti.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function mu(e) {
  return !!(e && ot(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const vu = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (Yn(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = Er(n) ? [] : {};
        return qr(n, (a, i) => {
          const c = r(a, s + 1);
          !Lr(c) && (o[i] = c);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, gu = wt("AsyncFunction"), yu = (e) => e && (Yn(e) || ot(e)) && ot(e.then) && ot(e.catch), C = {
  isArray: Er,
  isArrayBuffer: xi,
  isBuffer: Vl,
  isFormData: Gl,
  isArrayBufferView: Ul,
  isString: zl,
  isNumber: _i,
  isBoolean: Bl,
  isObject: Yn,
  isPlainObject: vn,
  isUndefined: Lr,
  isDate: Wl,
  isFile: Zl,
  isBlob: ql,
  isRegExp: lu,
  isFunction: ot,
  isStream: Yl,
  isURLSearchParams: Jl,
  isTypedArray: su,
  isFileList: Hl,
  forEach: qr,
  merge: Qs,
  extend: Xl,
  trim: Kl,
  stripBOM: Ql,
  inherits: eu,
  toFlatObject: tu,
  kindOf: qn,
  kindOfTest: wt,
  endsWith: ru,
  toArray: nu,
  forEachEntry: ou,
  matchAll: au,
  isHTMLForm: iu,
  hasOwnProperty: ia,
  hasOwnProp: ia,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ci,
  freezeMethods: uu,
  toObjectSet: du,
  toCamelCase: cu,
  noop: fu,
  toFiniteNumber: hu,
  findKey: wi,
  global: Si,
  isContextDefined: Ei,
  ALPHABET: Ti,
  generateString: pu,
  isSpecCompliantForm: mu,
  toJSONObject: vu,
  isAsyncFn: gu,
  isThenable: yu
};
function Ce(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
C.inherits(Ce, Error, {
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
const Oi = Ce.prototype, Ri = {};
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
  Ri[e] = { value: e };
});
Object.defineProperties(Ce, Ri);
Object.defineProperty(Oi, "isAxiosError", { value: !0 });
Ce.from = (e, t, r, n, s, o) => {
  const a = Object.create(Oi);
  return C.toFlatObject(e, a, function(c) {
    return c !== Error.prototype;
  }, (i) => i !== "isAxiosError"), Ce.call(a, e.message, t, r, n, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const bu = null;
function eo(e) {
  return C.isPlainObject(e) || C.isArray(e);
}
function Ni(e) {
  return C.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function la(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Ni(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function xu(e) {
  return C.isArray(e) && !e.some(eo);
}
const _u = C.toFlatObject(C, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Gn(e, t, r) {
  if (!C.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = C.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(p, b) {
    return !C.isUndefined(b[p]);
  });
  const n = r.metaTokens, s = r.visitor || u, o = r.dots, a = r.indexes, c = (r.Blob || typeof Blob < "u" && Blob) && C.isSpecCompliantForm(t);
  if (!C.isFunction(s))
    throw new TypeError("visitor must be a function");
  function l(y) {
    if (y === null)
      return "";
    if (C.isDate(y))
      return y.toISOString();
    if (!c && C.isBlob(y))
      throw new Ce("Blob is not supported. Use a Buffer instead.");
    return C.isArrayBuffer(y) || C.isTypedArray(y) ? c && typeof Blob == "function" ? new Blob([y]) : Buffer.from(y) : y;
  }
  function u(y, p, b) {
    let O = y;
    if (y && !b && typeof y == "object") {
      if (C.endsWith(p, "{}"))
        p = n ? p : p.slice(0, -2), y = JSON.stringify(y);
      else if (C.isArray(y) && xu(y) || (C.isFileList(y) || C.endsWith(p, "[]")) && (O = C.toArray(y)))
        return p = Ni(p), O.forEach(function(E, T) {
          !(C.isUndefined(E) || E === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? la([p], T, o) : a === null ? p : p + "[]",
            l(E)
          );
        }), !1;
    }
    return eo(y) ? !0 : (t.append(la(b, p, o), l(y)), !1);
  }
  const d = [], h = Object.assign(_u, {
    defaultVisitor: u,
    convertValue: l,
    isVisitable: eo
  });
  function g(y, p) {
    if (!C.isUndefined(y)) {
      if (d.indexOf(y) !== -1)
        throw Error("Circular reference detected in " + p.join("."));
      d.push(y), C.forEach(y, function(O, w) {
        (!(C.isUndefined(O) || O === null) && s.call(
          t,
          O,
          C.isString(w) ? w.trim() : w,
          p,
          h
        )) === !0 && g(O, p ? p.concat(w) : [w]);
      }), d.pop();
    }
  }
  if (!C.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function ua(e) {
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
function Oo(e, t) {
  this._pairs = [], e && Gn(e, this, t);
}
const $i = Oo.prototype;
$i.append = function(t, r) {
  this._pairs.push([t, r]);
};
$i.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, ua);
  } : ua;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function wu(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function ji(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || wu, s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = C.isURLSearchParams(t) ? t.toString() : new Oo(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class da {
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
const ki = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, Su = typeof URLSearchParams < "u" ? URLSearchParams : Oo, Eu = typeof FormData < "u" ? FormData : null, Cu = typeof Blob < "u" ? Blob : null, Tu = {
  isBrowser: !0,
  classes: {
    URLSearchParams: Su,
    FormData: Eu,
    Blob: Cu
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Ai = typeof window < "u" && typeof document < "u", Ou = ((e) => Ai && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), Ru = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", Nu = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Ai,
  hasStandardBrowserEnv: Ou,
  hasStandardBrowserWebWorkerEnv: Ru
}, Symbol.toStringTag, { value: "Module" })), mt = {
  ...Nu,
  ...Tu
};
function $u(e, t) {
  return Gn(e, new mt.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return mt.isNode && C.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function ju(e) {
  return C.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function ku(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function Pi(e) {
  function t(r, n, s, o) {
    let a = r[o++];
    if (a === "__proto__")
      return !0;
    const i = Number.isFinite(+a), c = o >= r.length;
    return a = !a && C.isArray(s) ? s.length : a, c ? (C.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !i) : ((!s[a] || !C.isObject(s[a])) && (s[a] = []), t(r, n, s[a], o) && C.isArray(s[a]) && (s[a] = ku(s[a])), !i);
  }
  if (C.isFormData(e) && C.isFunction(e.entries)) {
    const r = {};
    return C.forEachEntry(e, (n, s) => {
      t(ju(n), s, r, 0);
    }), r;
  }
  return null;
}
function Au(e, t, r) {
  if (C.isString(e))
    try {
      return (t || JSON.parse)(e), C.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const Ro = {
  transitional: ki,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = C.isObject(t);
    if (o && C.isHTMLForm(t) && (t = new FormData(t)), C.isFormData(t))
      return s && s ? JSON.stringify(Pi(t)) : t;
    if (C.isArrayBuffer(t) || C.isBuffer(t) || C.isStream(t) || C.isFile(t) || C.isBlob(t))
      return t;
    if (C.isArrayBufferView(t))
      return t.buffer;
    if (C.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return $u(t, this.formSerializer).toString();
      if ((i = C.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const c = this.env && this.env.FormData;
        return Gn(
          i ? { "files[]": t } : t,
          c && new c(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), Au(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || Ro.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && C.isString(t) && (n && !this.responseType || s)) {
      const a = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? Ce.from(i, Ce.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: mt.classes.FormData,
    Blob: mt.classes.Blob
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
  Ro.headers[e] = {};
});
const No = Ro, Pu = C.toObjectSet([
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
]), Du = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && Pu[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, fa = Symbol("internals");
function kr(e) {
  return e && String(e).trim().toLowerCase();
}
function gn(e) {
  return e === !1 || e == null ? e : C.isArray(e) ? e.map(gn) : String(e);
}
function Iu(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const Mu = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function bs(e, t, r, n, s) {
  if (C.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!C.isString(t)) {
    if (C.isString(n))
      return t.indexOf(n) !== -1;
    if (C.isRegExp(n))
      return n.test(t);
  }
}
function Lu(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function Fu(e, t) {
  const r = C.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, a) {
        return this[n].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
class Jn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(i, c, l) {
      const u = kr(c);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = C.findKey(s, u);
      (!d || s[d] === void 0 || l === !0 || l === void 0 && s[d] !== !1) && (s[d || c] = gn(i));
    }
    const a = (i, c) => C.forEach(i, (l, u) => o(l, u, c));
    return C.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : C.isString(t) && (t = t.trim()) && !Mu(t) ? a(Du(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = kr(t), t) {
      const n = C.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return Iu(s);
        if (C.isFunction(r))
          return r.call(this, s, n);
        if (C.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = kr(t), t) {
      const n = C.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || bs(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(a) {
      if (a = kr(a), a) {
        const i = C.findKey(n, a);
        i && (!r || bs(n, n[i], i, r)) && (delete n[i], s = !0);
      }
    }
    return C.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || bs(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return C.forEach(this, (s, o) => {
      const a = C.findKey(n, o);
      if (a) {
        r[a] = gn(s), delete r[o];
        return;
      }
      const i = t ? Lu(o) : String(o).trim();
      i !== o && delete r[o], r[i] = gn(s), n[i] = !0;
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
    const n = (this[fa] = this[fa] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = kr(a);
      n[i] || (Fu(s, a), n[i] = !0);
    }
    return C.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Jn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
C.reduceDescriptors(Jn.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
C.freezeMethods(Jn);
const jt = Jn;
function xs(e, t) {
  const r = this || No, n = t || r, s = jt.from(n.headers);
  let o = n.data;
  return C.forEach(e, function(i) {
    o = i.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Di(e) {
  return !!(e && e.__CANCEL__);
}
function Hr(e, t, r) {
  Ce.call(this, e ?? "canceled", Ce.ERR_CANCELED, t, r), this.name = "CanceledError";
}
C.inherits(Hr, Ce, {
  __CANCEL__: !0
});
function Vu(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new Ce(
    "Request failed with status code " + r.status,
    [Ce.ERR_BAD_REQUEST, Ce.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const Uu = mt.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o) {
      const a = [e + "=" + encodeURIComponent(t)];
      C.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), C.isString(n) && a.push("path=" + n), C.isString(s) && a.push("domain=" + s), o === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function zu(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Bu(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ii(e, t) {
  return e && !zu(t) ? Bu(e, t) : t;
}
const Wu = mt.hasStandardBrowserEnv ? (
  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
  function() {
    const t = /(msie|trident)/i.test(navigator.userAgent), r = document.createElement("a");
    let n;
    function s(o) {
      let a = o;
      return t && (r.setAttribute("href", a), a = r.href), r.setAttribute("href", a), {
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
    return n = s(window.location.href), function(a) {
      const i = C.isString(a) ? s(a) : a;
      return i.protocol === n.protocol && i.host === n.host;
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
function Zu(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function qu(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(c) {
    const l = Date.now(), u = n[o];
    a || (a = l), r[s] = c, n[s] = l;
    let d = o, h = 0;
    for (; d !== s; )
      h += r[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), l - a < t)
      return;
    const g = u && l - u;
    return g ? Math.round(h * 1e3 / g) : void 0;
  };
}
function ha(e, t) {
  let r = 0;
  const n = qu(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, i = o - r, c = n(i), l = o <= a;
    r = o;
    const u = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: i,
      rate: c || void 0,
      estimated: c && a && l ? (a - o) / c : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Hu = typeof XMLHttpRequest < "u", Yu = Hu && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const o = jt.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: i } = e, c;
    function l() {
      e.cancelToken && e.cancelToken.unsubscribe(c), e.signal && e.signal.removeEventListener("abort", c);
    }
    let u;
    if (C.isFormData(s)) {
      if (mt.hasStandardBrowserEnv || mt.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((u = o.getContentType()) !== !1) {
        const [p, ...b] = u ? u.split(";").map((O) => O.trim()).filter(Boolean) : [];
        o.setContentType([p || "multipart/form-data", ...b].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const p = e.auth.username || "", b = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(p + ":" + b));
    }
    const h = Ii(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), ji(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function g() {
      if (!d)
        return;
      const p = jt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), O = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: p,
        config: e,
        request: d
      };
      Vu(function(E) {
        r(E), l();
      }, function(E) {
        n(E), l();
      }, O), d = null;
    }
    if ("onloadend" in d ? d.onloadend = g : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, d.onabort = function() {
      d && (n(new Ce("Request aborted", Ce.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new Ce("Network Error", Ce.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let b = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const O = e.transitional || ki;
      e.timeoutErrorMessage && (b = e.timeoutErrorMessage), n(new Ce(
        b,
        O.clarifyTimeoutError ? Ce.ETIMEDOUT : Ce.ECONNABORTED,
        e,
        d
      )), d = null;
    }, mt.hasStandardBrowserEnv && (i && C.isFunction(i) && (i = i(e)), i || i !== !1 && Wu(h))) {
      const p = e.xsrfHeaderName && e.xsrfCookieName && Uu.read(e.xsrfCookieName);
      p && o.set(e.xsrfHeaderName, p);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in d && C.forEach(o.toJSON(), function(b, O) {
      d.setRequestHeader(O, b);
    }), C.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", ha(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", ha(e.onUploadProgress)), (e.cancelToken || e.signal) && (c = (p) => {
      d && (n(!p || p.type ? new Hr(null, e, d) : p), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(c), e.signal && (e.signal.aborted ? c() : e.signal.addEventListener("abort", c)));
    const y = Zu(h);
    if (y && mt.protocols.indexOf(y) === -1) {
      n(new Ce("Unsupported protocol " + y + ":", Ce.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, to = {
  http: bu,
  xhr: Yu
};
C.forEach(to, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const pa = (e) => `- ${e}`, Gu = (e) => C.isFunction(e) || e === null || e === !1, Mi = {
  getAdapter: (e) => {
    e = C.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let a;
      if (n = r, !Gu(r) && (n = to[(a = String(r)).toLowerCase()], n === void 0))
        throw new Ce(`Unknown adapter '${a}'`);
      if (n)
        break;
      s[a || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([i, c]) => `adapter ${i} ` + (c === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(pa).join(`
`) : " " + pa(o[0]) : "as no adapter specified";
      throw new Ce(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: to
};
function _s(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Hr(null, e);
}
function ma(e) {
  return _s(e), e.headers = jt.from(e.headers), e.data = xs.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Mi.getAdapter(e.adapter || No.adapter)(e).then(function(n) {
    return _s(e), n.data = xs.call(
      e,
      e.transformResponse,
      n
    ), n.headers = jt.from(n.headers), n;
  }, function(n) {
    return Di(n) || (_s(e), n && n.response && (n.response.data = xs.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = jt.from(n.response.headers))), Promise.reject(n);
  });
}
const va = (e) => e instanceof jt ? e.toJSON() : e;
function mr(e, t) {
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
  function o(l, u) {
    if (!C.isUndefined(u))
      return n(void 0, u);
  }
  function a(l, u) {
    if (C.isUndefined(u)) {
      if (!C.isUndefined(l))
        return n(void 0, l);
    } else
      return n(void 0, u);
  }
  function i(l, u, d) {
    if (d in t)
      return n(l, u);
    if (d in e)
      return n(void 0, l);
  }
  const c = {
    url: o,
    method: o,
    data: o,
    baseURL: a,
    transformRequest: a,
    transformResponse: a,
    paramsSerializer: a,
    timeout: a,
    timeoutMessage: a,
    withCredentials: a,
    withXSRFToken: a,
    adapter: a,
    responseType: a,
    xsrfCookieName: a,
    xsrfHeaderName: a,
    onUploadProgress: a,
    onDownloadProgress: a,
    decompress: a,
    maxContentLength: a,
    maxBodyLength: a,
    beforeRedirect: a,
    transport: a,
    httpAgent: a,
    httpsAgent: a,
    cancelToken: a,
    socketPath: a,
    responseEncoding: a,
    validateStatus: i,
    headers: (l, u) => s(va(l), va(u), !0)
  };
  return C.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = c[u] || s, h = d(e[u], t[u], u);
    C.isUndefined(h) && d !== i || (r[u] = h);
  }), r;
}
const Li = "1.6.5", $o = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  $o[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ga = {};
$o.transitional = function(t, r, n) {
  function s(o, a) {
    return "[Axios v" + Li + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new Ce(
        s(a, " has been removed" + (r ? " in " + r : "")),
        Ce.ERR_DEPRECATED
      );
    return r && !ga[a] && (ga[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
function Ju(e, t, r) {
  if (typeof e != "object")
    throw new Ce("options must be an object", Ce.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], a = t[o];
    if (a) {
      const i = e[o], c = i === void 0 || a(i, o, e);
      if (c !== !0)
        throw new Ce("option " + o + " must be " + c, Ce.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new Ce("Unknown option " + o, Ce.ERR_BAD_OPTION);
  }
}
const ro = {
  assertOptions: Ju,
  validators: $o
}, Mt = ro.validators;
class Cn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new da(),
      response: new da()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = mr(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && ro.assertOptions(n, {
      silentJSONParsing: Mt.transitional(Mt.boolean),
      forcedJSONParsing: Mt.transitional(Mt.boolean),
      clarifyTimeoutError: Mt.transitional(Mt.boolean)
    }, !1), s != null && (C.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : ro.assertOptions(s, {
      encode: Mt.function,
      serialize: Mt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = o && C.merge(
      o.common,
      o[r.method]
    );
    o && C.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (y) => {
        delete o[y];
      }
    ), r.headers = jt.concat(a, o);
    const i = [];
    let c = !0;
    this.interceptors.request.forEach(function(p) {
      typeof p.runWhen == "function" && p.runWhen(r) === !1 || (c = c && p.synchronous, i.unshift(p.fulfilled, p.rejected));
    });
    const l = [];
    this.interceptors.response.forEach(function(p) {
      l.push(p.fulfilled, p.rejected);
    });
    let u, d = 0, h;
    if (!c) {
      const y = [ma.bind(this), void 0];
      for (y.unshift.apply(y, i), y.push.apply(y, l), h = y.length, u = Promise.resolve(r); d < h; )
        u = u.then(y[d++], y[d++]);
      return u;
    }
    h = i.length;
    let g = r;
    for (d = 0; d < h; ) {
      const y = i[d++], p = i[d++];
      try {
        g = y(g);
      } catch (b) {
        p.call(this, b);
        break;
      }
    }
    try {
      u = ma.call(this, g);
    } catch (y) {
      return Promise.reject(y);
    }
    for (d = 0, h = l.length; d < h; )
      u = u.then(l[d++], l[d++]);
    return u;
  }
  getUri(t) {
    t = mr(this.defaults, t);
    const r = Ii(t.baseURL, t.url);
    return ji(r, t.params, t.paramsSerializer);
  }
}
C.forEach(["delete", "get", "head", "options"], function(t) {
  Cn.prototype[t] = function(r, n) {
    return this.request(mr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
C.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, i) {
      return this.request(mr(i || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  Cn.prototype[t] = r(), Cn.prototype[t + "Form"] = r(!0);
});
const yn = Cn;
class jo {
  constructor(t) {
    if (typeof t != "function")
      throw new TypeError("executor must be a function.");
    let r;
    this.promise = new Promise(function(o) {
      r = o;
    });
    const n = this;
    this.promise.then((s) => {
      if (!n._listeners)
        return;
      let o = n._listeners.length;
      for (; o-- > 0; )
        n._listeners[o](s);
      n._listeners = null;
    }), this.promise.then = (s) => {
      let o;
      const a = new Promise((i) => {
        n.subscribe(i), o = i;
      }).then(s);
      return a.cancel = function() {
        n.unsubscribe(o);
      }, a;
    }, t(function(o, a, i) {
      n.reason || (n.reason = new Hr(o, a, i), r(n.reason));
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
      token: new jo(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ku = jo;
function Xu(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Qu(e) {
  return C.isObject(e) && e.isAxiosError === !0;
}
const no = {
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
Object.entries(no).forEach(([e, t]) => {
  no[t] = e;
});
const ed = no;
function Fi(e) {
  const t = new yn(e), r = bi(yn.prototype.request, t);
  return C.extend(r, yn.prototype, t, { allOwnKeys: !0 }), C.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Fi(mr(e, s));
  }, r;
}
const Pe = Fi(No);
Pe.Axios = yn;
Pe.CanceledError = Hr;
Pe.CancelToken = Ku;
Pe.isCancel = Di;
Pe.VERSION = Li;
Pe.toFormData = Gn;
Pe.AxiosError = Ce;
Pe.Cancel = Pe.CanceledError;
Pe.all = function(t) {
  return Promise.all(t);
};
Pe.spread = Xu;
Pe.isAxiosError = Qu;
Pe.mergeConfig = mr;
Pe.AxiosHeaders = jt;
Pe.formToJSON = (e) => Pi(C.isHTMLForm(e) ? new FormData(e) : e);
Pe.getAdapter = Mi.getAdapter;
Pe.HttpStatusCode = ed;
Pe.default = Pe;
const td = (e, t) => Pe.get(`${e}/chat/room`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), rd = (e, t, r, n, s) => Pe.get(`${e}/chat/room/${r}/message?ts_st=${n || ""}&ts_en=${s || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((o) => {
  if (o.data.code === 200)
    return o.data.payload;
  throw new Error(o.data.message_ui || o.data.message);
}), nd = (e, t, r, n) => Pe.post(`${e}/chat/room/${n}/message`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((s) => {
  if (s.data.code === 200)
    return s.data.payload;
  throw new Error(s.data.message_ui || s.data.message);
}), sd = (e, t) => Pe.get(`${e}/chat/token`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), Vi = (e, t, r) => Pe.get(`${e}/chat/room/${r}/attendant`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), od = (e, t, r) => Pe.get(`${e}/chat/room/${r}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), ad = (e, t, r) => Pe.get(`${e}/chat/order/candidate-teacher/list?order_id=${r || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
});
var id = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ya = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (c, l) => {
    const u = typeof c == "function" ? c(t) : c;
    if (!Object.is(u, t)) {
      const d = t;
      t = l ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((h) => h(t, d));
    }
  }, s = () => t, i = { setState: n, getState: s, subscribe: (c) => (r.add(c), () => r.delete(c)), destroy: () => {
    (id ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return t = e(n, s, i), i;
}, cd = (e) => e ? ya(e) : ya;
var so = { exports: {} }, ws = {}, sn = { exports: {} }, Ss = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ba;
function ld() {
  return ba || (ba = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = se, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(E) {
      {
        for (var T = arguments.length, x = new Array(T > 1 ? T - 1 : 0), V = 1; V < T; V++)
          x[V - 1] = arguments[V];
        n("error", E, x);
      }
    }
    function n(E, T, x) {
      {
        var V = t.ReactDebugCurrentFrame, J = V.getStackAddendum();
        J !== "" && (T += "%s", x = x.concat([J]));
        var q = x.map(function(B) {
          return String(B);
        });
        q.unshift("Warning: " + T), Function.prototype.apply.call(console[E], console, q);
      }
    }
    function s(E, T) {
      return E === T && (E !== 0 || 1 / E === 1 / T) || E !== E && T !== T;
    }
    var o = typeof Object.is == "function" ? Object.is : s, a = e.useState, i = e.useEffect, c = e.useLayoutEffect, l = e.useDebugValue, u = !1, d = !1;
    function h(E, T, x) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var V = T();
      if (!d) {
        var J = T();
        o(V, J) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var q = a({
        inst: {
          value: V,
          getSnapshot: T
        }
      }), B = q[0].inst, X = q[1];
      return c(function() {
        B.value = V, B.getSnapshot = T, g(B) && X({
          inst: B
        });
      }, [E, V, T]), i(function() {
        g(B) && X({
          inst: B
        });
        var me = function() {
          g(B) && X({
            inst: B
          });
        };
        return E(me);
      }, [E]), l(V), V;
    }
    function g(E) {
      var T = E.getSnapshot, x = E.value;
      try {
        var V = T();
        return !o(x, V);
      } catch {
        return !0;
      }
    }
    function y(E, T, x) {
      return T();
    }
    var p = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", b = !p, O = b ? y : h, w = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : O;
    Ss.useSyncExternalStore = w, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ss;
}
var Es = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var xa;
function ud() {
  if (xa)
    return Es;
  xa = 1;
  var e = se;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, s = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function i(d, h) {
    var g = h(), y = n({ inst: { value: g, getSnapshot: h } }), p = y[0].inst, b = y[1];
    return o(function() {
      p.value = g, p.getSnapshot = h, c(p) && b({ inst: p });
    }, [d, g, h]), s(function() {
      return c(p) && b({ inst: p }), d(function() {
        c(p) && b({ inst: p });
      });
    }, [d]), a(g), g;
  }
  function c(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var g = h();
      return !r(d, g);
    } catch {
      return !0;
    }
  }
  function l(d, h) {
    return h();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? l : i;
  return Es.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Es;
}
var _a;
function Ui() {
  return _a || (_a = 1, process.env.NODE_ENV === "production" ? sn.exports = ud() : sn.exports = ld()), sn.exports;
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
var wa;
function dd() {
  return wa || (wa = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = se, t = Ui();
    function r(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, c = e.useDebugValue;
    function l(u, d, h, g, y) {
      var p = o(null), b;
      p.current === null ? (b = {
        hasValue: !1,
        value: null
      }, p.current = b) : b = p.current;
      var O = i(function() {
        var x = !1, V, J, q = function(k) {
          if (!x) {
            x = !0, V = k;
            var A = g(k);
            if (y !== void 0 && b.hasValue) {
              var H = b.value;
              if (y(H, A))
                return J = H, H;
            }
            return J = A, A;
          }
          var le = V, we = J;
          if (n(le, k))
            return we;
          var Se = g(k);
          return y !== void 0 && y(we, Se) ? we : (V = k, J = Se, Se);
        }, B = h === void 0 ? null : h, X = function() {
          return q(d());
        }, me = B === null ? void 0 : function() {
          return q(B());
        };
        return [X, me];
      }, [d, h, g, y]), w = O[0], E = O[1], T = s(u, w, E);
      return a(function() {
        b.hasValue = !0, b.value = T;
      }, [T]), c(T), T;
    }
    ws.useSyncExternalStoreWithSelector = l, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), ws;
}
var Cs = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Sa;
function fd() {
  if (Sa)
    return Cs;
  Sa = 1;
  var e = se, t = Ui();
  function r(l, u) {
    return l === u && (l !== 0 || 1 / l === 1 / u) || l !== l && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, c = e.useDebugValue;
  return Cs.useSyncExternalStoreWithSelector = function(l, u, d, h, g) {
    var y = o(null);
    if (y.current === null) {
      var p = { hasValue: !1, value: null };
      y.current = p;
    } else
      p = y.current;
    y = i(function() {
      function O(V) {
        if (!w) {
          if (w = !0, E = V, V = h(V), g !== void 0 && p.hasValue) {
            var J = p.value;
            if (g(J, V))
              return T = J;
          }
          return T = V;
        }
        if (J = T, n(E, V))
          return J;
        var q = h(V);
        return g !== void 0 && g(J, q) ? J : (E = V, T = q);
      }
      var w = !1, E, T, x = d === void 0 ? null : d;
      return [function() {
        return O(u());
      }, x === null ? void 0 : function() {
        return O(x());
      }];
    }, [u, d, h, g]);
    var b = s(l, y[0], y[1]);
    return a(function() {
      p.hasValue = !0, p.value = b;
    }, [b]), c(b), b;
  }, Cs;
}
process.env.NODE_ENV === "production" ? so.exports = fd() : so.exports = dd();
var hd = so.exports;
const pd = /* @__PURE__ */ yi(hd);
var zi = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: md } = se, { useSyncExternalStoreWithSelector: vd } = pd;
let Ea = !1;
function gd(e, t = e.getState, r) {
  (zi ? "production" : void 0) !== "production" && r && !Ea && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Ea = !0);
  const n = vd(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return md(n), n;
}
const Ca = (e) => {
  (zi ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? cd(e) : e, r = (n, s) => gd(t, n, s);
  return Object.assign(r, t), r;
}, Bi = (e) => e ? Ca(e) : Ca, yd = {
  chatRoom: [],
  rooms: {},
  isLoading: !1,
  error: null
}, bd = Bi((e) => ({
  ...yd,
  fetchChatRoom: async (t, r) => {
    try {
      e({ isLoading: !0, error: null });
      const n = await td(t, r);
      e({ chatRoom: n, isLoading: !1, error: null });
    } catch (n) {
      throw console.error("fetchChatRoom", n), e({ error: n }), n;
    }
  }
})), xd = {
  rooms: {},
  notiLatestMessages: [],
  profile: [],
  socket: null,
  socketStatus: !1,
  sending: !1
}, Kn = Bi((e, t) => ({
  ...xd,
  // Connect to WebSocket
  connectWebSocket: async (r, n, s) => {
    const { socketStatus: o } = t();
    if (o)
      return;
    const a = await sd(r, s), i = new WebSocket(n + "?token=" + a);
    i.onopen = () => {
      e({ socket: i, socketStatus: !0 });
    }, i.onmessage = (c) => {
      const l = JSON.parse(c.data), { room_id: u } = l;
      e((d) => ({
        rooms: {
          ...d.rooms,
          [u]: [...d.rooms[u] || [], l]
        },
        notiLatestMessages: [...d.notiLatestMessages, l]
      }));
    }, i.onclose = () => {
      e({ socket: i, socketStatus: !1 });
    }, i.onerror = (c) => {
      e({ socket: i, socketStatus: !1 }), console.log(c);
    };
  },
  // Disconnect WebSocket
  disconnectWebSocket: () => {
    const { socket: r } = t();
    r && r.readyState === WebSocket.OPEN && (r.close(), e({ socket: r, socketStatus: !1 }));
  },
  // Send a message through WebSocket and API
  sendMessage: async (r, n, s, o) => {
    const { socket: a } = Kn.getState();
    if (a && a.readyState === WebSocket.OPEN)
      try {
        e(() => ({ sending: !0 })), await nd(r, n, s, o), a.send(JSON.stringify({ action: "sendmessage", data: s })), e(() => ({ sending: !1 }));
      } catch (i) {
        console.log(i), e(() => ({ sending: !1 }));
      }
  },
  // Fetch chat messages from API
  fetchChatMessage: async (r, n, s, o, a) => {
    try {
      const i = await rd(r, n, s, o, a);
      e((c) => {
        const d = [...c.rooms[s] || [], ...i].reduce((h, g) => (h.findIndex((p) => p.id === g.id) < 0 && h.push(g), h), []);
        return {
          rooms: {
            ...c.rooms,
            [s]: d
          }
        };
      });
    } catch (i) {
      console.log(i);
    }
  },
  // Fetch User Profile From API
  fetchUserProfile: async (r, n, s) => {
    try {
      const o = await Vi(r, n, s);
      e({ profile: o });
    } catch (o) {
      console.log(o);
    }
  },
  updateLatestMessage: (r) => {
    const { notiLatestMessages: n } = t(), s = n.filter((o) => o.room_id !== r);
    console.log(s), e(() => ({
      notiLatestMessages: [...s]
    }));
  }
}));
function Wi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Wi(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function _d() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Wi(e)) && (n && (n += " "), n += t);
  return n;
}
const ko = "-";
function wd(e) {
  const t = Ed(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function s(a) {
    const i = a.split(ko);
    return i[0] === "" && i.length !== 1 && i.shift(), Zi(i, t) || Sd(a);
  }
  function o(a, i) {
    const c = r[a] || [];
    return i && n[a] ? [...c, ...n[a]] : c;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  };
}
function Zi(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? Zi(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const o = e.join(ko);
  return (a = t.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : a.classGroupId;
}
const Ta = /^\[(.+)\]$/;
function Sd(e) {
  if (Ta.test(e)) {
    const t = Ta.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function Ed(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return Td(Object.entries(e.classGroups), r).forEach(([o, a]) => {
    oo(a, n, o, t);
  }), n;
}
function oo(e, t, r, n) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? t : Oa(t, s);
      o.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (Cd(s)) {
        oo(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([o, a]) => {
      oo(a, Oa(t, o), r, n);
    });
  });
}
function Oa(e, t) {
  let r = e;
  return t.split(ko).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function Cd(e) {
  return e.isThemeGetter;
}
function Td(e, t) {
  return t ? e.map(([r, n]) => {
    const s = n.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, i]) => [t + a, i])) : o);
    return [r, s];
  }) : e;
}
function Od(e) {
  if (e < 1)
    return {
      get: () => {
      },
      set: () => {
      }
    };
  let t = 0, r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
  function s(o, a) {
    r.set(o, a), t++, t > e && (t = 0, n = r, r = /* @__PURE__ */ new Map());
  }
  return {
    get(o) {
      let a = r.get(o);
      if (a !== void 0)
        return a;
      if ((a = n.get(o)) !== void 0)
        return s(o, a), a;
    },
    set(o, a) {
      r.has(o) ? r.set(o, a) : s(o, a);
    }
  };
}
const qi = "!";
function Rd(e) {
  const t = e.separator, r = t.length === 1, n = t[0], s = t.length;
  return function(a) {
    const i = [];
    let c = 0, l = 0, u;
    for (let p = 0; p < a.length; p++) {
      let b = a[p];
      if (c === 0) {
        if (b === n && (r || a.slice(p, p + s) === t)) {
          i.push(a.slice(l, p)), l = p + s;
          continue;
        }
        if (b === "/") {
          u = p;
          continue;
        }
      }
      b === "[" ? c++ : b === "]" && c--;
    }
    const d = i.length === 0 ? a : a.substring(l), h = d.startsWith(qi), g = h ? d.substring(1) : d, y = u && u > l ? u - l : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: y
    };
  };
}
function Nd(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function $d(e) {
  return {
    cache: Od(e.cacheSize),
    splitModifiers: Rd(e),
    ...wd(e)
  };
}
const jd = /\s+/;
function kd(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split(jd).map((a) => {
    const {
      modifiers: i,
      hasImportantModifier: c,
      baseClassName: l,
      maybePostfixModifierPosition: u
    } = r(a);
    let d = n(u ? l.substring(0, u) : l), h = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (d = n(l), !d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      h = !1;
    }
    const g = Nd(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: c ? g + qi : g,
      classGroupId: d,
      originalClassName: a,
      hasPostfixModifier: h
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: c,
      hasPostfixModifier: l
    } = a, u = i + c;
    return o.has(u) ? !1 : (o.add(u), s(c, l).forEach((d) => o.add(i + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function Ad() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Hi(t)) && (n && (n += " "), n += r);
  return n;
}
function Hi(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Hi(e[n])) && (r && (r += " "), r += t);
  return r;
}
function Pd(e, ...t) {
  let r, n, s, o = a;
  function a(c) {
    const l = t.reduce((u, d) => d(u), e());
    return r = $d(l), n = r.cache.get, s = r.cache.set, o = i, i(c);
  }
  function i(c) {
    const l = n(c);
    if (l)
      return l;
    const u = kd(c, r);
    return s(c, u), u;
  }
  return function() {
    return o(Ad.apply(null, arguments));
  };
}
function De(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Yi = /^\[(?:([a-z-]+):)?(.+)\]$/i, Dd = /^\d+\/\d+$/, Id = /* @__PURE__ */ new Set(["px", "full", "screen"]), Md = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, Ld = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, Fd = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, Vd = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function Tt(e) {
  return Kt(e) || Id.has(e) || Dd.test(e);
}
function Lt(e) {
  return Cr(e, "length", Yd);
}
function Kt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function on(e) {
  return Cr(e, "number", Kt);
}
function Ar(e) {
  return !!e && Number.isInteger(Number(e));
}
function Ud(e) {
  return e.endsWith("%") && Kt(e.slice(0, -1));
}
function fe(e) {
  return Yi.test(e);
}
function Ft(e) {
  return Md.test(e);
}
const zd = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function Bd(e) {
  return Cr(e, zd, Gi);
}
function Wd(e) {
  return Cr(e, "position", Gi);
}
const Zd = /* @__PURE__ */ new Set(["image", "url"]);
function qd(e) {
  return Cr(e, Zd, Jd);
}
function Hd(e) {
  return Cr(e, "", Gd);
}
function Pr() {
  return !0;
}
function Cr(e, t, r) {
  const n = Yi.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function Yd(e) {
  return Ld.test(e);
}
function Gi() {
  return !1;
}
function Gd(e) {
  return Fd.test(e);
}
function Jd(e) {
  return Vd.test(e);
}
function Kd() {
  const e = De("colors"), t = De("spacing"), r = De("blur"), n = De("brightness"), s = De("borderColor"), o = De("borderRadius"), a = De("borderSpacing"), i = De("borderWidth"), c = De("contrast"), l = De("grayscale"), u = De("hueRotate"), d = De("invert"), h = De("gap"), g = De("gradientColorStops"), y = De("gradientColorStopPositions"), p = De("inset"), b = De("margin"), O = De("opacity"), w = De("padding"), E = De("saturate"), T = De("scale"), x = De("sepia"), V = De("skew"), J = De("space"), q = De("translate"), B = () => ["auto", "contain", "none"], X = () => ["auto", "hidden", "clip", "visible", "scroll"], me = () => ["auto", fe, t], k = () => [fe, t], A = () => ["", Tt, Lt], H = () => ["auto", Kt, fe], le = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], we = () => ["solid", "dashed", "dotted", "double", "none"], Se = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ze = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ie = () => ["", "0", fe], R = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [Kt, on], Q = () => [Kt, fe];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Pr],
      spacing: [Tt, Lt],
      blur: ["none", "", Ft, fe],
      brightness: P(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Ft, fe],
      borderSpacing: k(),
      borderWidth: A(),
      contrast: P(),
      grayscale: Ie(),
      hueRotate: Q(),
      invert: Ie(),
      gap: k(),
      gradientColorStops: [e],
      gradientColorStopPositions: [Ud, Lt],
      inset: me(),
      margin: me(),
      opacity: P(),
      padding: k(),
      saturate: P(),
      scale: P(),
      sepia: Ie(),
      skew: Q(),
      space: k(),
      translate: k()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", fe]
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
        columns: [Ft]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": R()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": R()
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
        object: [...le(), fe]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: X()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": X()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": X()
      }],
      /**
       * Overscroll Behavior
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      overscroll: [{
        overscroll: B()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": B()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": B()
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
        z: ["auto", Ar, fe]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: me()
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
        flex: ["1", "auto", "initial", "none", fe]
      }],
      /**
       * Flex Grow
       * @see https://tailwindcss.com/docs/flex-grow
       */
      grow: [{
        grow: Ie()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Ie()
      }],
      /**
       * Order
       * @see https://tailwindcss.com/docs/order
       */
      order: [{
        order: ["first", "last", "none", Ar, fe]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Pr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Ar, fe]
        }, fe]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": H()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": H()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Pr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Ar, fe]
        }, fe]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": H()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": H()
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
        "auto-cols": ["auto", "min", "max", "fr", fe]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", fe]
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
        justify: ["normal", ...ze()]
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
        content: ["normal", ...ze(), "baseline"]
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
        "place-content": [...ze(), "baseline"]
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
        p: [w]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [w]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [w]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [w]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [w]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [w]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [w]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [w]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [w]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [b]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [b]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [b]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [b]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [b]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [b]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [b]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [b]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [b]
      }],
      /**
       * Space Between X
       * @see https://tailwindcss.com/docs/space
       */
      "space-x": [{
        "space-x": [J]
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
        "space-y": [J]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", fe, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [fe, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [fe, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [Ft]
        }, Ft]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [fe, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [fe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [fe, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [fe, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", Ft, Lt]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", on]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Pr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", fe]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", Kt, on]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", Tt, fe]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", fe]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", fe]
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
        "placeholder-opacity": [O]
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
        "text-opacity": [O]
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
        decoration: [...we(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", Tt, Lt]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", Tt, fe]
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
        indent: k()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", fe]
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
        content: ["none", fe]
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
        "bg-opacity": [O]
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
        bg: [...le(), Wd]
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
        bg: ["auto", "cover", "contain", Bd]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, qd]
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
        from: [g]
      }],
      /**
       * Gradient Color Stops Via
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via": [{
        via: [g]
      }],
      /**
       * Gradient Color Stops To
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to": [{
        to: [g]
      }],
      // Borders
      /**
       * Border Radius
       * @see https://tailwindcss.com/docs/border-radius
       */
      rounded: [{
        rounded: [o]
      }],
      /**
       * Border Radius Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-s": [{
        "rounded-s": [o]
      }],
      /**
       * Border Radius End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-e": [{
        "rounded-e": [o]
      }],
      /**
       * Border Radius Top
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-t": [{
        "rounded-t": [o]
      }],
      /**
       * Border Radius Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-r": [{
        "rounded-r": [o]
      }],
      /**
       * Border Radius Bottom
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-b": [{
        "rounded-b": [o]
      }],
      /**
       * Border Radius Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-l": [{
        "rounded-l": [o]
      }],
      /**
       * Border Radius Start Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ss": [{
        "rounded-ss": [o]
      }],
      /**
       * Border Radius Start End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-se": [{
        "rounded-se": [o]
      }],
      /**
       * Border Radius End End
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-ee": [{
        "rounded-ee": [o]
      }],
      /**
       * Border Radius End Start
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-es": [{
        "rounded-es": [o]
      }],
      /**
       * Border Radius Top Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tl": [{
        "rounded-tl": [o]
      }],
      /**
       * Border Radius Top Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-tr": [{
        "rounded-tr": [o]
      }],
      /**
       * Border Radius Bottom Right
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-br": [{
        "rounded-br": [o]
      }],
      /**
       * Border Radius Bottom Left
       * @see https://tailwindcss.com/docs/border-radius
       */
      "rounded-bl": [{
        "rounded-bl": [o]
      }],
      /**
       * Border Width
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w": [{
        border: [i]
      }],
      /**
       * Border Width X
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-x": [{
        "border-x": [i]
      }],
      /**
       * Border Width Y
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-y": [{
        "border-y": [i]
      }],
      /**
       * Border Width Start
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-s": [{
        "border-s": [i]
      }],
      /**
       * Border Width End
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-e": [{
        "border-e": [i]
      }],
      /**
       * Border Width Top
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-t": [{
        "border-t": [i]
      }],
      /**
       * Border Width Right
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-r": [{
        "border-r": [i]
      }],
      /**
       * Border Width Bottom
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-b": [{
        "border-b": [i]
      }],
      /**
       * Border Width Left
       * @see https://tailwindcss.com/docs/border-width
       */
      "border-w-l": [{
        "border-l": [i]
      }],
      /**
       * Border Opacity
       * @see https://tailwindcss.com/docs/border-opacity
       */
      "border-opacity": [{
        "border-opacity": [O]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...we(), "hidden"]
      }],
      /**
       * Divide Width X
       * @see https://tailwindcss.com/docs/divide-width
       */
      "divide-x": [{
        "divide-x": [i]
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
        "divide-y": [i]
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
        "divide-opacity": [O]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: we()
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
        outline: ["", ...we()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [Tt, fe]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [Tt, Lt]
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
        ring: A()
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
        "ring-opacity": [O]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [Tt, Lt]
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
        shadow: ["", "inner", "none", Ft, Hd]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Pr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [O]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": Se()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": Se()
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
        "drop-shadow": ["", "none", Ft, fe]
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
        saturate: [E]
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
        "backdrop-opacity": [O]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [E]
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
        "border-spacing": [a]
      }],
      /**
       * Border Spacing X
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-x": [{
        "border-spacing-x": [a]
      }],
      /**
       * Border Spacing Y
       * @see https://tailwindcss.com/docs/border-spacing
       */
      "border-spacing-y": [{
        "border-spacing-y": [a]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", fe]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Q()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", fe]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Q()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", fe]
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
        scale: [T]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [T]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [T]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Ar, fe]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [q]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [q]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [V]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [V]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", fe]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", fe]
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
        "scroll-m": k()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": k()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": k()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": k()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": k()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": k()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": k()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": k()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": k()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": k()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": k()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": k()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": k()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": k()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": k()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": k()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": k()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": k()
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
        "will-change": ["auto", "scroll", "contents", "transform", fe]
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
        stroke: [Tt, Lt, on]
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
const Xd = /* @__PURE__ */ Pd(Kd);
function Oe(...e) {
  return Xd(_d(e));
}
var Yr = (e) => e.type === "checkbox", ur = (e) => e instanceof Date, Ge = (e) => e == null;
const Ji = (e) => typeof e == "object";
var We = (e) => !Ge(e) && !Array.isArray(e) && Ji(e) && !ur(e), Ki = (e) => We(e) && e.target ? Yr(e.target) ? e.target.checked : e.target.value : e, Qd = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Xi = (e, t) => e.has(Qd(t)), ef = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return We(t) && t.hasOwnProperty("isPrototypeOf");
}, Ao = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function lt(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Ao && (e instanceof Blob || e instanceof FileList)) && (r || We(e)))
    if (t = r ? [] : {}, !r && !ef(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = lt(e[n]));
  else
    return e;
  return t;
}
var Gr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Le = (e) => e === void 0, I = (e, t, r) => {
  if (!t || !We(e))
    return r;
  const n = Gr(t.split(/[,[\].]+?/)).reduce((s, o) => Ge(s) ? s : s[o], e);
  return Le(n) || n === e ? Le(e[t]) ? r : e[t] : n;
}, st = (e) => typeof e == "boolean";
const Tn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, ut = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, Ot = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Qi = se.createContext(null), Xn = () => se.useContext(Qi), tf = (e) => {
  const { children: t, ...r } = e;
  return se.createElement(Qi.Provider, { value: r }, t);
};
var ec = (e, t, r, n = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(s, o, {
      get: () => {
        const a = o;
        return t._proxyFormState[a] !== ut.all && (t._proxyFormState[a] = !n || ut.all), r && (r[a] = !0), e[a];
      }
    });
  return s;
}, nt = (e) => We(e) && !Object.keys(e).length, tc = (e, t, r, n) => {
  r(e);
  const { name: s, ...o } = e;
  return nt(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!n || ut.all));
}, bn = (e) => Array.isArray(e) ? e : [e], rc = (e, t, r) => !e || !t || e === t || bn(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n)));
function Po(e) {
  const t = se.useRef(e);
  t.current = e, se.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function rf(e) {
  const t = Xn(), { control: r = t.control, disabled: n, name: s, exact: o } = e || {}, [a, i] = se.useState(r._formState), c = se.useRef(!0), l = se.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = se.useRef(s);
  return u.current = s, Po({
    disabled: n,
    next: (d) => c.current && rc(u.current, d.name, o) && tc(d, l.current, r._updateFormState) && i({
      ...r._formState,
      ...d
    }),
    subject: r._subjects.state
  }), se.useEffect(() => (c.current = !0, l.current.isValid && r._updateValid(!0), () => {
    c.current = !1;
  }), [r]), ec(a, r, l.current, !1);
}
var vt = (e) => typeof e == "string", nc = (e, t, r, n, s) => vt(e) ? (n && t.watch.add(e), I(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && t.watch.add(o), I(r, o))) : (n && (t.watchAll = !0), r);
function nf(e) {
  const t = Xn(), { control: r = t.control, name: n, defaultValue: s, disabled: o, exact: a } = e || {}, i = se.useRef(n);
  i.current = n, Po({
    disabled: o,
    subject: r._subjects.values,
    next: (u) => {
      rc(i.current, u.name, a) && l(lt(nc(i.current, r._names, u.values || r._formValues, !1, s)));
    }
  });
  const [c, l] = se.useState(r._getWatch(n, s));
  return se.useEffect(() => r._removeUnmounted()), c;
}
var Do = (e) => /^\w*$/.test(e), sc = (e) => Gr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), ke = (e, t, r) => {
  let n = -1;
  const s = Do(t) ? [t] : sc(t), o = s.length, a = o - 1;
  for (; ++n < o; ) {
    const i = s[n];
    let c = r;
    if (n !== a) {
      const l = e[i];
      c = We(l) || Array.isArray(l) ? l : isNaN(+s[n + 1]) ? {} : [];
    }
    e[i] = c, e = e[i];
  }
  return e;
};
function sf(e) {
  const t = Xn(), { name: r, disabled: n, control: s = t.control, shouldUnregister: o } = e, a = Xi(s._names.array, r), i = nf({
    control: s,
    name: r,
    defaultValue: I(s._formValues, r, I(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), c = rf({
    control: s,
    name: r
  }), l = se.useRef(s.register(r, {
    ...e.rules,
    value: i,
    ...st(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return se.useEffect(() => {
    const u = s._options.shouldUnregister || o, d = (h, g) => {
      const y = I(s._fields, h);
      y && (y._f.mount = g);
    };
    if (d(r, !0), u) {
      const h = lt(I(s._options.defaultValues, r));
      ke(s._defaultValues, r, h), Le(I(s._formValues, r)) && ke(s._formValues, r, h);
    }
    return () => {
      (a ? u && !s._state.action : u) ? s.unregister(r) : d(r, !1);
    };
  }, [r, s, a, o]), se.useEffect(() => {
    I(s._fields, r) && s._updateDisabledField({
      disabled: n,
      fields: s._fields,
      name: r,
      value: I(s._fields, r)._f.value
    });
  }, [n, r, s]), {
    field: {
      name: r,
      value: i,
      ...st(n) || st(c.disabled) ? { disabled: c.disabled || n } : {},
      onChange: se.useCallback((u) => l.current.onChange({
        target: {
          value: Ki(u),
          name: r
        },
        type: Tn.CHANGE
      }), [r]),
      onBlur: se.useCallback(() => l.current.onBlur({
        target: {
          value: I(s._formValues, r),
          name: r
        },
        type: Tn.BLUR
      }), [r, s]),
      ref: (u) => {
        const d = I(s._fields, r);
        d && u && (d._f.ref = {
          focus: () => u.focus(),
          select: () => u.select(),
          setCustomValidity: (h) => u.setCustomValidity(h),
          reportValidity: () => u.reportValidity()
        });
      }
    },
    formState: c,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!I(c.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!I(c.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!I(c.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => I(c.errors, r)
      }
    })
  };
}
const of = (e) => e.render(sf(e));
var oc = (e, t, r, n, s) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, Ra = (e) => ({
  isOnSubmit: !e || e === ut.onSubmit,
  isOnBlur: e === ut.onBlur,
  isOnChange: e === ut.onChange,
  isOnAll: e === ut.all,
  isOnTouch: e === ut.onTouched
}), Na = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Ir = (e, t, r, n) => {
  for (const s of r || Object.keys(e)) {
    const o = I(e, s);
    if (o) {
      const { _f: a, ...i } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], s) && !n)
          break;
        if (a.ref && t(a.ref, a.name) && !n)
          break;
        Ir(i, t);
      } else
        We(i) && Ir(i, t);
    }
  }
};
var af = (e, t, r) => {
  const n = Gr(I(e, r));
  return ke(n, "root", t[r]), ke(e, r, n), e;
}, Io = (e) => e.type === "file", zt = (e) => typeof e == "function", On = (e) => {
  if (!Ao)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, xn = (e) => vt(e), Mo = (e) => e.type === "radio", Rn = (e) => e instanceof RegExp;
const $a = {
  value: !1,
  isValid: !1
}, ja = { value: !0, isValid: !0 };
var ac = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Le(e[0].attributes.value) ? Le(e[0].value) || e[0].value === "" ? ja : { value: e[0].value, isValid: !0 } : ja
    ) : $a;
  }
  return $a;
};
const ka = {
  isValid: !1,
  value: null
};
var ic = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, ka) : ka;
function Aa(e, t, r = "validate") {
  if (xn(e) || Array.isArray(e) && e.every(xn) || st(e) && !e)
    return {
      type: r,
      message: xn(e) ? e : "",
      ref: t
    };
}
var or = (e) => We(e) && !Rn(e) ? e : {
  value: e,
  message: ""
}, Pa = async (e, t, r, n, s) => {
  const { ref: o, refs: a, required: i, maxLength: c, minLength: l, min: u, max: d, pattern: h, validate: g, name: y, valueAsNumber: p, mount: b, disabled: O } = e._f, w = I(t, y);
  if (!b || O)
    return {};
  const E = a ? a[0] : o, T = (k) => {
    n && E.reportValidity && (E.setCustomValidity(st(k) ? "" : k || ""), E.reportValidity());
  }, x = {}, V = Mo(o), J = Yr(o), q = V || J, B = (p || Io(o)) && Le(o.value) && Le(w) || On(o) && o.value === "" || w === "" || Array.isArray(w) && !w.length, X = oc.bind(null, y, r, x), me = (k, A, H, le = Ot.maxLength, we = Ot.minLength) => {
    const Se = k ? A : H;
    x[y] = {
      type: k ? le : we,
      message: Se,
      ref: o,
      ...X(k ? le : we, Se)
    };
  };
  if (s ? !Array.isArray(w) || !w.length : i && (!q && (B || Ge(w)) || st(w) && !w || J && !ac(a).isValid || V && !ic(a).isValid)) {
    const { value: k, message: A } = xn(i) ? { value: !!i, message: i } : or(i);
    if (k && (x[y] = {
      type: Ot.required,
      message: A,
      ref: E,
      ...X(Ot.required, A)
    }, !r))
      return T(A), x;
  }
  if (!B && (!Ge(u) || !Ge(d))) {
    let k, A;
    const H = or(d), le = or(u);
    if (!Ge(w) && !isNaN(w)) {
      const we = o.valueAsNumber || w && +w;
      Ge(H.value) || (k = we > H.value), Ge(le.value) || (A = we < le.value);
    } else {
      const we = o.valueAsDate || new Date(w), Se = (R) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + R), ze = o.type == "time", Ie = o.type == "week";
      vt(H.value) && w && (k = ze ? Se(w) > Se(H.value) : Ie ? w > H.value : we > new Date(H.value)), vt(le.value) && w && (A = ze ? Se(w) < Se(le.value) : Ie ? w < le.value : we < new Date(le.value));
    }
    if ((k || A) && (me(!!k, H.message, le.message, Ot.max, Ot.min), !r))
      return T(x[y].message), x;
  }
  if ((c || l) && !B && (vt(w) || s && Array.isArray(w))) {
    const k = or(c), A = or(l), H = !Ge(k.value) && w.length > +k.value, le = !Ge(A.value) && w.length < +A.value;
    if ((H || le) && (me(H, k.message, A.message), !r))
      return T(x[y].message), x;
  }
  if (h && !B && vt(w)) {
    const { value: k, message: A } = or(h);
    if (Rn(k) && !w.match(k) && (x[y] = {
      type: Ot.pattern,
      message: A,
      ref: o,
      ...X(Ot.pattern, A)
    }, !r))
      return T(A), x;
  }
  if (g) {
    if (zt(g)) {
      const k = await g(w, t), A = Aa(k, E);
      if (A && (x[y] = {
        ...A,
        ...X(Ot.validate, A.message)
      }, !r))
        return T(A.message), x;
    } else if (We(g)) {
      let k = {};
      for (const A in g) {
        if (!nt(k) && !r)
          break;
        const H = Aa(await g[A](w, t), E, A);
        H && (k = {
          ...H,
          ...X(A, H.message)
        }, T(H.message), r && (x[y] = k));
      }
      if (!nt(k) && (x[y] = {
        ref: E,
        ...k
      }, !r))
        return x;
    }
  }
  return T(!0), x;
};
function cf(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = Le(e) ? n++ : e[t[n++]];
  return e;
}
function lf(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Le(e[t]))
      return !1;
  return !0;
}
function Ze(e, t) {
  const r = Array.isArray(t) ? t : Do(t) ? [t] : sc(t), n = r.length === 1 ? e : cf(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (We(n) && nt(n) || Array.isArray(n) && lf(n)) && Ze(e, r.slice(0, -1)), e;
}
var Ts = () => {
  let e = [];
  return {
    get observers() {
      return e;
    },
    next: (s) => {
      for (const o of e)
        o.next && o.next(s);
    },
    subscribe: (s) => (e.push(s), {
      unsubscribe: () => {
        e = e.filter((o) => o !== s);
      }
    }),
    unsubscribe: () => {
      e = [];
    }
  };
}, Nn = (e) => Ge(e) || !Ji(e);
function Xt(e, t) {
  if (Nn(e) || Nn(t))
    return e === t;
  if (ur(e) && ur(t))
    return e.getTime() === t.getTime();
  const r = Object.keys(e), n = Object.keys(t);
  if (r.length !== n.length)
    return !1;
  for (const s of r) {
    const o = e[s];
    if (!n.includes(s))
      return !1;
    if (s !== "ref") {
      const a = t[s];
      if (ur(o) && ur(a) || We(o) && We(a) || Array.isArray(o) && Array.isArray(a) ? !Xt(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var cc = (e) => e.type === "select-multiple", uf = (e) => Mo(e) || Yr(e), Os = (e) => On(e) && e.isConnected, lc = (e) => {
  for (const t in e)
    if (zt(e[t]))
      return !0;
  return !1;
};
function $n(e, t = {}) {
  const r = Array.isArray(e);
  if (We(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || We(e[n]) && !lc(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, $n(e[n], t[n])) : Ge(e[n]) || (t[n] = !0);
  return t;
}
function uc(e, t, r) {
  const n = Array.isArray(e);
  if (We(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || We(e[s]) && !lc(e[s]) ? Le(t) || Nn(r[s]) ? r[s] = Array.isArray(e[s]) ? $n(e[s], []) : { ...$n(e[s]) } : uc(e[s], Ge(t) ? {} : t[s], r[s]) : r[s] = !Xt(e[s], t[s]);
  return r;
}
var Rs = (e, t) => uc(e, t, $n(t)), dc = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => Le(e) ? e : t ? e === "" ? NaN : e && +e : r && vt(e) ? new Date(e) : n ? n(e) : e;
function Ns(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return Io(t) ? t.files : Mo(t) ? ic(e.refs).value : cc(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Yr(t) ? ac(e.refs).value : dc(Le(t.value) ? e.ref.value : t.value, e);
}
var df = (e, t, r, n) => {
  const s = {};
  for (const o of e) {
    const a = I(t, o);
    a && ke(s, o, a._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, Dr = (e) => Le(e) ? e : Rn(e) ? e.source : We(e) ? Rn(e.value) ? e.value.source : e.value : e, ff = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Da(e, t, r) {
  const n = I(e, r);
  if (n || Do(r))
    return {
      error: n,
      name: r
    };
  const s = r.split(".");
  for (; s.length; ) {
    const o = s.join("."), a = I(t, o), i = I(e, o);
    if (a && !Array.isArray(a) && r !== o)
      return { name: r };
    if (i && i.type)
      return {
        name: o,
        error: i
      };
    s.pop();
  }
  return {
    name: r
  };
}
var hf = (e, t, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, pf = (e, t) => !Gr(I(e, t)).length && Ze(e, t);
const mf = {
  mode: ut.onSubmit,
  reValidateMode: ut.onChange,
  shouldFocusError: !0
};
function vf(e = {}, t) {
  let r = {
    ...mf,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: zt(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, s = {}, o = We(r.defaultValues) || We(r.values) ? lt(r.defaultValues || r.values) || {} : {}, a = r.shouldUnregister ? {} : lt(o), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, c = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, l, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, h = {
    values: Ts(),
    array: Ts(),
    state: Ts()
  }, g = e.resetOptions && e.resetOptions.keepDirtyValues, y = Ra(r.mode), p = Ra(r.reValidateMode), b = r.criteriaMode === ut.all, O = (v) => (_) => {
    clearTimeout(u), u = setTimeout(v, _);
  }, w = async (v) => {
    if (d.isValid || v) {
      const _ = r.resolver ? nt((await X()).errors) : await k(s, !0);
      _ !== n.isValid && h.state.next({
        isValid: _
      });
    }
  }, E = (v) => d.isValidating && h.state.next({
    isValidating: v
  }), T = (v, _ = [], S, W, D = !0, $ = !0) => {
    if (W && S) {
      if (i.action = !0, $ && Array.isArray(I(s, v))) {
        const Y = S(I(s, v), W.argA, W.argB);
        D && ke(s, v, Y);
      }
      if ($ && Array.isArray(I(n.errors, v))) {
        const Y = S(I(n.errors, v), W.argA, W.argB);
        D && ke(n.errors, v, Y), pf(n.errors, v);
      }
      if (d.touchedFields && $ && Array.isArray(I(n.touchedFields, v))) {
        const Y = S(I(n.touchedFields, v), W.argA, W.argB);
        D && ke(n.touchedFields, v, Y);
      }
      d.dirtyFields && (n.dirtyFields = Rs(o, a)), h.state.next({
        name: v,
        isDirty: H(v, _),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      ke(a, v, _);
  }, x = (v, _) => {
    ke(n.errors, v, _), h.state.next({
      errors: n.errors
    });
  }, V = (v) => {
    n.errors = v, h.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, J = (v, _, S, W) => {
    const D = I(s, v);
    if (D) {
      const $ = I(a, v, Le(S) ? I(o, v) : S);
      Le($) || W && W.defaultChecked || _ ? ke(a, v, _ ? $ : Ns(D._f)) : Se(v, $), i.mount && w();
    }
  }, q = (v, _, S, W, D) => {
    let $ = !1, Y = !1;
    const Te = {
      name: v
    }, Ve = !!(I(s, v) && I(s, v)._f.disabled);
    if (!S || W) {
      d.isDirty && (Y = n.isDirty, n.isDirty = Te.isDirty = H(), $ = Y !== Te.isDirty);
      const et = Ve || Xt(I(o, v), _);
      Y = !!(!Ve && I(n.dirtyFields, v)), et || Ve ? Ze(n.dirtyFields, v) : ke(n.dirtyFields, v, !0), Te.dirtyFields = n.dirtyFields, $ = $ || d.dirtyFields && Y !== !et;
    }
    if (S) {
      const et = I(n.touchedFields, v);
      et || (ke(n.touchedFields, v, S), Te.touchedFields = n.touchedFields, $ = $ || d.touchedFields && et !== S);
    }
    return $ && D && h.state.next(Te), $ ? Te : {};
  }, B = (v, _, S, W) => {
    const D = I(n.errors, v), $ = d.isValid && st(_) && n.isValid !== _;
    if (e.delayError && S ? (l = O(() => x(v, S)), l(e.delayError)) : (clearTimeout(u), l = null, S ? ke(n.errors, v, S) : Ze(n.errors, v)), (S ? !Xt(D, S) : D) || !nt(W) || $) {
      const Y = {
        ...W,
        ...$ && st(_) ? { isValid: _ } : {},
        errors: n.errors,
        name: v
      };
      n = {
        ...n,
        ...Y
      }, h.state.next(Y);
    }
    E(!1);
  }, X = async (v) => r.resolver(a, r.context, df(v || c.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), me = async (v) => {
    const { errors: _ } = await X(v);
    if (v)
      for (const S of v) {
        const W = I(_, S);
        W ? ke(n.errors, S, W) : Ze(n.errors, S);
      }
    else
      n.errors = _;
    return _;
  }, k = async (v, _, S = {
    valid: !0
  }) => {
    for (const W in v) {
      const D = v[W];
      if (D) {
        const { _f: $, ...Y } = D;
        if ($) {
          const Te = c.array.has($.name), Ve = await Pa(D, a, b, r.shouldUseNativeValidation && !_, Te);
          if (Ve[$.name] && (S.valid = !1, _))
            break;
          !_ && (I(Ve, $.name) ? Te ? af(n.errors, Ve, $.name) : ke(n.errors, $.name, Ve[$.name]) : Ze(n.errors, $.name));
        }
        Y && await k(Y, _, S);
      }
    }
    return S.valid;
  }, A = () => {
    for (const v of c.unMount) {
      const _ = I(s, v);
      _ && (_._f.refs ? _._f.refs.every((S) => !Os(S)) : !Os(_._f.ref)) && ue(v);
    }
    c.unMount = /* @__PURE__ */ new Set();
  }, H = (v, _) => (v && _ && ke(a, v, _), !Xt(K(), o)), le = (v, _, S) => nc(v, c, {
    ...i.mount ? a : Le(_) ? o : vt(v) ? { [v]: _ } : _
  }, S, _), we = (v) => Gr(I(i.mount ? a : o, v, e.shouldUnregister ? I(o, v, []) : [])), Se = (v, _, S = {}) => {
    const W = I(s, v);
    let D = _;
    if (W) {
      const $ = W._f;
      $ && (!$.disabled && ke(a, v, dc(_, $)), D = On($.ref) && Ge(_) ? "" : _, cc($.ref) ? [...$.ref.options].forEach((Y) => Y.selected = D.includes(Y.value)) : $.refs ? Yr($.ref) ? $.refs.length > 1 ? $.refs.forEach((Y) => (!Y.defaultChecked || !Y.disabled) && (Y.checked = Array.isArray(D) ? !!D.find((Te) => Te === Y.value) : D === Y.value)) : $.refs[0] && ($.refs[0].checked = !!D) : $.refs.forEach((Y) => Y.checked = Y.value === D) : Io($.ref) ? $.ref.value = "" : ($.ref.value = D, $.ref.type || h.values.next({
        name: v,
        values: { ...a }
      })));
    }
    (S.shouldDirty || S.shouldTouch) && q(v, D, S.shouldTouch, S.shouldDirty, !0), S.shouldValidate && Q(v);
  }, ze = (v, _, S) => {
    for (const W in _) {
      const D = _[W], $ = `${v}.${W}`, Y = I(s, $);
      (c.array.has(v) || !Nn(D) || Y && !Y._f) && !ur(D) ? ze($, D, S) : Se($, D, S);
    }
  }, Ie = (v, _, S = {}) => {
    const W = I(s, v), D = c.array.has(v), $ = lt(_);
    ke(a, v, $), D ? (h.array.next({
      name: v,
      values: { ...a }
    }), (d.isDirty || d.dirtyFields) && S.shouldDirty && h.state.next({
      name: v,
      dirtyFields: Rs(o, a),
      isDirty: H(v, $)
    })) : W && !W._f && !Ge($) ? ze(v, $, S) : Se(v, $, S), Na(v, c) && h.state.next({ ...n }), h.values.next({
      name: v,
      values: { ...a }
    }), !i.mount && t();
  }, R = async (v) => {
    const _ = v.target;
    let S = _.name, W = !0;
    const D = I(s, S), $ = () => _.type ? Ns(D._f) : Ki(v), Y = (Te) => {
      W = Number.isNaN(Te) || Te === I(a, S, Te);
    };
    if (D) {
      let Te, Ve;
      const et = $(), Et = v.type === Tn.BLUR || v.type === Tn.FOCUS_OUT, Or = !ff(D._f) && !r.resolver && !I(n.errors, S) && !D._f.deps || hf(Et, I(n.touchedFields, S), n.isSubmitted, p, y), Rr = Na(S, c, Et);
      ke(a, S, et), Et ? (D._f.onBlur && D._f.onBlur(v), l && l(0)) : D._f.onChange && D._f.onChange(v);
      const Nr = q(S, et, Et, !1), hs = !nt(Nr) || Rr;
      if (!Et && h.values.next({
        name: S,
        type: v.type,
        values: { ...a }
      }), Or)
        return d.isValid && w(), hs && h.state.next({ name: S, ...Rr ? {} : Nr });
      if (!Et && Rr && h.state.next({ ...n }), E(!0), r.resolver) {
        const { errors: rn } = await X([S]);
        if (Y(et), W) {
          const ps = Da(n.errors, s, S), nn = Da(rn, s, ps.name || S);
          Te = nn.error, S = nn.name, Ve = nt(rn);
        }
      } else
        Te = (await Pa(D, a, b, r.shouldUseNativeValidation))[S], Y(et), W && (Te ? Ve = !1 : d.isValid && (Ve = await k(s, !0)));
      W && (D._f.deps && Q(D._f.deps), B(S, Ve, Te, Nr));
    }
  }, P = (v, _) => {
    if (I(n.errors, _) && v.focus)
      return v.focus(), 1;
  }, Q = async (v, _ = {}) => {
    let S, W;
    const D = bn(v);
    if (E(!0), r.resolver) {
      const $ = await me(Le(v) ? v : D);
      S = nt($), W = v ? !D.some((Y) => I($, Y)) : S;
    } else
      v ? (W = (await Promise.all(D.map(async ($) => {
        const Y = I(s, $);
        return await k(Y && Y._f ? { [$]: Y } : Y);
      }))).every(Boolean), !(!W && !n.isValid) && w()) : W = S = await k(s);
    return h.state.next({
      ...!vt(v) || d.isValid && S !== n.isValid ? {} : { name: v },
      ...r.resolver || !v ? { isValid: S } : {},
      errors: n.errors,
      isValidating: !1
    }), _.shouldFocus && !W && Ir(s, P, v ? D : c.mount), W;
  }, K = (v) => {
    const _ = {
      ...o,
      ...i.mount ? a : {}
    };
    return Le(v) ? _ : vt(v) ? I(_, v) : v.map((S) => I(_, S));
  }, re = (v, _) => ({
    invalid: !!I((_ || n).errors, v),
    isDirty: !!I((_ || n).dirtyFields, v),
    isTouched: !!I((_ || n).touchedFields, v),
    error: I((_ || n).errors, v)
  }), be = (v) => {
    v && bn(v).forEach((_) => Ze(n.errors, _)), h.state.next({
      errors: v ? n.errors : {}
    });
  }, ne = (v, _, S) => {
    const W = (I(s, v, { _f: {} })._f || {}).ref;
    ke(n.errors, v, {
      ..._,
      ref: W
    }), h.state.next({
      name: v,
      errors: n.errors,
      isValid: !1
    }), S && S.shouldFocus && W && W.focus && W.focus();
  }, oe = (v, _) => zt(v) ? h.values.subscribe({
    next: (S) => v(le(void 0, _), S)
  }) : le(v, _, !0), ue = (v, _ = {}) => {
    for (const S of v ? bn(v) : c.mount)
      c.mount.delete(S), c.array.delete(S), _.keepValue || (Ze(s, S), Ze(a, S)), !_.keepError && Ze(n.errors, S), !_.keepDirty && Ze(n.dirtyFields, S), !_.keepTouched && Ze(n.touchedFields, S), !r.shouldUnregister && !_.keepDefaultValue && Ze(o, S);
    h.values.next({
      values: { ...a }
    }), h.state.next({
      ...n,
      ..._.keepDirty ? { isDirty: H() } : {}
    }), !_.keepIsValid && w();
  }, xe = ({ disabled: v, name: _, field: S, fields: W, value: D }) => {
    if (st(v)) {
      const $ = v ? void 0 : Le(D) ? Ns(S ? S._f : I(W, _)._f) : D;
      ke(a, _, $), q(_, $, !1, !1, !0);
    }
  }, de = (v, _ = {}) => {
    let S = I(s, v);
    const W = st(_.disabled);
    return ke(s, v, {
      ...S || {},
      _f: {
        ...S && S._f ? S._f : { ref: { name: v } },
        name: v,
        mount: !0,
        ..._
      }
    }), c.mount.add(v), S ? xe({
      field: S,
      disabled: _.disabled,
      name: v,
      value: _.value
    }) : J(v, !0, _.value), {
      ...W ? { disabled: _.disabled } : {},
      ...r.progressive ? {
        required: !!_.required,
        min: Dr(_.min),
        max: Dr(_.max),
        minLength: Dr(_.minLength),
        maxLength: Dr(_.maxLength),
        pattern: Dr(_.pattern)
      } : {},
      name: v,
      onChange: R,
      onBlur: R,
      ref: (D) => {
        if (D) {
          de(v, _), S = I(s, v);
          const $ = Le(D.value) && D.querySelectorAll && D.querySelectorAll("input,select,textarea")[0] || D, Y = uf($), Te = S._f.refs || [];
          if (Y ? Te.find((Ve) => Ve === $) : $ === S._f.ref)
            return;
          ke(s, v, {
            _f: {
              ...S._f,
              ...Y ? {
                refs: [
                  ...Te.filter(Os),
                  $,
                  ...Array.isArray(I(o, v)) ? [{}] : []
                ],
                ref: { type: $.type, name: v }
              } : { ref: $ }
            }
          }), J(v, !1, void 0, $);
        } else
          S = I(s, v, {}), S._f && (S._f.mount = !1), (r.shouldUnregister || _.shouldUnregister) && !(Xi(c.array, v) && i.action) && c.unMount.add(v);
      }
    };
  }, Be = () => r.shouldFocusError && Ir(s, P, c.mount), M = (v) => {
    st(v) && (h.state.next({ disabled: v }), Ir(s, (_, S) => {
      let W = v;
      const D = I(s, S);
      D && st(D._f.disabled) && (W || (W = D._f.disabled)), _.disabled = W;
    }, 0, !1));
  }, He = (v, _) => async (S) => {
    S && (S.preventDefault && S.preventDefault(), S.persist && S.persist());
    let W = lt(a);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: D, values: $ } = await X();
      n.errors = D, W = $;
    } else
      await k(s);
    Ze(n.errors, "root"), nt(n.errors) ? (h.state.next({
      errors: {}
    }), await v(W, S)) : (_ && await _({ ...n.errors }, S), Be(), setTimeout(Be)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: nt(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, It = (v, _ = {}) => {
    I(s, v) && (Le(_.defaultValue) ? Ie(v, I(o, v)) : (Ie(v, _.defaultValue), ke(o, v, _.defaultValue)), _.keepTouched || Ze(n.touchedFields, v), _.keepDirty || (Ze(n.dirtyFields, v), n.isDirty = _.defaultValue ? H(v, I(o, v)) : H()), _.keepError || (Ze(n.errors, v), d.isValid && w()), h.state.next({ ...n }));
  }, ft = (v, _ = {}) => {
    const S = v ? lt(v) : o, W = lt(S), D = v && !nt(v) ? W : o;
    if (_.keepDefaultValues || (o = S), !_.keepValues) {
      if (_.keepDirtyValues || g)
        for (const $ of c.mount)
          I(n.dirtyFields, $) ? ke(D, $, I(a, $)) : Ie($, I(D, $));
      else {
        if (Ao && Le(v))
          for (const $ of c.mount) {
            const Y = I(s, $);
            if (Y && Y._f) {
              const Te = Array.isArray(Y._f.refs) ? Y._f.refs[0] : Y._f.ref;
              if (On(Te)) {
                const Ve = Te.closest("form");
                if (Ve) {
                  Ve.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      a = e.shouldUnregister ? _.keepDefaultValues ? lt(o) : {} : lt(D), h.array.next({
        values: { ...D }
      }), h.values.next({
        values: { ...D }
      });
    }
    c = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !i.mount && t(), i.mount = !d.isValid || !!_.keepIsValid, i.watch = !!e.shouldUnregister, h.state.next({
      submitCount: _.keepSubmitCount ? n.submitCount : 0,
      isDirty: _.keepDirty ? n.isDirty : !!(_.keepDefaultValues && !Xt(v, o)),
      isSubmitted: _.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: _.keepDirtyValues ? n.dirtyFields : _.keepDefaultValues && v ? Rs(o, v) : {},
      touchedFields: _.keepTouched ? n.touchedFields : {},
      errors: _.keepErrors ? n.errors : {},
      isSubmitSuccessful: _.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Yt = (v, _) => ft(zt(v) ? v(a) : v, _);
  return {
    control: {
      register: de,
      unregister: ue,
      getFieldState: re,
      handleSubmit: He,
      setError: ne,
      _executeSchema: X,
      _getWatch: le,
      _getDirty: H,
      _updateValid: w,
      _removeUnmounted: A,
      _updateFieldArray: T,
      _updateDisabledField: xe,
      _getFieldArray: we,
      _reset: ft,
      _resetDefaultValues: () => zt(r.defaultValues) && r.defaultValues().then((v) => {
        Yt(v, r.resetOptions), h.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (v) => {
        n = {
          ...n,
          ...v
        };
      },
      _disableForm: M,
      _subjects: h,
      _proxyFormState: d,
      _setErrors: V,
      get _fields() {
        return s;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return i;
      },
      set _state(v) {
        i = v;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return c;
      },
      set _names(v) {
        c = v;
      },
      get _formState() {
        return n;
      },
      set _formState(v) {
        n = v;
      },
      get _options() {
        return r;
      },
      set _options(v) {
        r = {
          ...r,
          ...v
        };
      }
    },
    trigger: Q,
    register: de,
    handleSubmit: He,
    watch: oe,
    setValue: Ie,
    getValues: K,
    reset: Yt,
    resetField: It,
    clearErrors: be,
    unregister: ue,
    setError: ne,
    setFocus: (v, _ = {}) => {
      const S = I(s, v), W = S && S._f;
      if (W) {
        const D = W.refs ? W.refs[0] : W.ref;
        D.focus && (D.focus(), _.shouldSelect && D.select());
      }
    },
    getFieldState: re
  };
}
function gf(e = {}) {
  const t = se.useRef(), r = se.useRef(), [n, s] = se.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: zt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: zt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...vf(e, () => s((a) => ({ ...a }))),
    formState: n
  });
  const o = t.current.control;
  return o._options = e, Po({
    subject: o._subjects.state,
    next: (a) => {
      tc(a, o._proxyFormState, o._updateFormState, !0) && s({ ...o._formState });
    }
  }), se.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), se.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== n.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, n.isDirty]), se.useEffect(() => {
    e.values && !Xt(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, s((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), se.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), se.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), t.current.formState = ec(n, o), t.current;
}
var Ia = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var n = I(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, fc = function(e, t) {
  var r = function(s) {
    var o = t.fields[s];
    o && o.ref && "reportValidity" in o.ref ? Ia(o.ref, s, e) : o.refs && o.refs.forEach(function(a) {
      return Ia(a, s, e);
    });
  };
  for (var n in t.fields)
    r(n);
}, yf = function(e, t) {
  t.shouldUseNativeValidation && fc(e, t);
  var r = {};
  for (var n in e) {
    var s = I(t.fields, n), o = Object.assign(e[n] || {}, { ref: s && s.ref });
    if (bf(t.names || Object.keys(e), n)) {
      var a = Object.assign({}, I(r, n));
      ke(a, "root", o), ke(r, n, a);
    } else
      ke(r, n, o);
  }
  return r;
}, bf = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, xf = function(e, t) {
  for (var r = {}; e.length; ) {
    var n = e[0], s = n.code, o = n.message, a = n.path.join(".");
    if (!r[a])
      if ("unionErrors" in n) {
        var i = n.unionErrors[0].errors[0];
        r[a] = { message: i.message, type: i.code };
      } else
        r[a] = { message: o, type: s };
    if ("unionErrors" in n && n.unionErrors.forEach(function(u) {
      return u.errors.forEach(function(d) {
        return e.push(d);
      });
    }), t) {
      var c = r[a].types, l = c && c[n.code];
      r[a] = oc(a, t, r, s, l ? [].concat(l, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}, _f = function(e, t, r) {
  return r === void 0 && (r = {}), function(n, s, o) {
    try {
      return Promise.resolve(function(a, i) {
        try {
          var c = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(l) {
            return o.shouldUseNativeValidation && fc({}, o), { errors: {}, values: r.raw ? n : l };
          });
        } catch (l) {
          return i(l);
        }
        return c && c.then ? c.then(void 0, i) : c;
      }(0, function(a) {
        if (function(i) {
          return i.errors != null;
        }(a))
          return { values: {}, errors: yf(xf(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, ao = { exports: {} }, $s, Ma;
function Lo() {
  if (Ma)
    return $s;
  Ma = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return $s = e, $s;
}
var js, La;
function wf() {
  if (La)
    return js;
  La = 1;
  var e = Lo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, js = function() {
    function n(a, i, c, l, u, d) {
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
    var o = {
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
    return o.PropTypes = o, o;
  }, js;
}
var an = { exports: {} }, $e = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fa;
function Sf() {
  return Fa || (Fa = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
    function E(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === l || M === o || M === s || M === d || M === h || typeof M == "object" && M !== null && (M.$$typeof === y || M.$$typeof === g || M.$$typeof === a || M.$$typeof === i || M.$$typeof === u || M.$$typeof === b || M.$$typeof === O || M.$$typeof === w || M.$$typeof === p);
    }
    function T(M) {
      if (typeof M == "object" && M !== null) {
        var He = M.$$typeof;
        switch (He) {
          case t:
            var It = M.type;
            switch (It) {
              case c:
              case l:
              case n:
              case o:
              case s:
              case d:
                return It;
              default:
                var ft = It && It.$$typeof;
                switch (ft) {
                  case i:
                  case u:
                  case y:
                  case g:
                  case a:
                    return ft;
                  default:
                    return He;
                }
            }
          case r:
            return He;
        }
      }
    }
    var x = c, V = l, J = i, q = a, B = t, X = u, me = n, k = y, A = g, H = r, le = o, we = s, Se = d, ze = !1;
    function Ie(M) {
      return ze || (ze = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), R(M) || T(M) === c;
    }
    function R(M) {
      return T(M) === l;
    }
    function P(M) {
      return T(M) === i;
    }
    function Q(M) {
      return T(M) === a;
    }
    function K(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function re(M) {
      return T(M) === u;
    }
    function be(M) {
      return T(M) === n;
    }
    function ne(M) {
      return T(M) === y;
    }
    function oe(M) {
      return T(M) === g;
    }
    function ue(M) {
      return T(M) === r;
    }
    function xe(M) {
      return T(M) === o;
    }
    function de(M) {
      return T(M) === s;
    }
    function Be(M) {
      return T(M) === d;
    }
    $e.AsyncMode = x, $e.ConcurrentMode = V, $e.ContextConsumer = J, $e.ContextProvider = q, $e.Element = B, $e.ForwardRef = X, $e.Fragment = me, $e.Lazy = k, $e.Memo = A, $e.Portal = H, $e.Profiler = le, $e.StrictMode = we, $e.Suspense = Se, $e.isAsyncMode = Ie, $e.isConcurrentMode = R, $e.isContextConsumer = P, $e.isContextProvider = Q, $e.isElement = K, $e.isForwardRef = re, $e.isFragment = be, $e.isLazy = ne, $e.isMemo = oe, $e.isPortal = ue, $e.isProfiler = xe, $e.isStrictMode = de, $e.isSuspense = Be, $e.isValidElementType = E, $e.typeOf = T;
  }()), $e;
}
var je = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Va;
function Ef() {
  if (Va)
    return je;
  Va = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, c = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, y = e ? Symbol.for("react.lazy") : 60116, p = e ? Symbol.for("react.block") : 60121, b = e ? Symbol.for("react.fundamental") : 60117, O = e ? Symbol.for("react.responder") : 60118, w = e ? Symbol.for("react.scope") : 60119;
  function E(x) {
    if (typeof x == "object" && x !== null) {
      var V = x.$$typeof;
      switch (V) {
        case t:
          switch (x = x.type, x) {
            case c:
            case l:
            case n:
            case o:
            case s:
            case d:
              return x;
            default:
              switch (x = x && x.$$typeof, x) {
                case i:
                case u:
                case y:
                case g:
                case a:
                  return x;
                default:
                  return V;
              }
          }
        case r:
          return V;
      }
    }
  }
  function T(x) {
    return E(x) === l;
  }
  return je.AsyncMode = c, je.ConcurrentMode = l, je.ContextConsumer = i, je.ContextProvider = a, je.Element = t, je.ForwardRef = u, je.Fragment = n, je.Lazy = y, je.Memo = g, je.Portal = r, je.Profiler = o, je.StrictMode = s, je.Suspense = d, je.isAsyncMode = function(x) {
    return T(x) || E(x) === c;
  }, je.isConcurrentMode = T, je.isContextConsumer = function(x) {
    return E(x) === i;
  }, je.isContextProvider = function(x) {
    return E(x) === a;
  }, je.isElement = function(x) {
    return typeof x == "object" && x !== null && x.$$typeof === t;
  }, je.isForwardRef = function(x) {
    return E(x) === u;
  }, je.isFragment = function(x) {
    return E(x) === n;
  }, je.isLazy = function(x) {
    return E(x) === y;
  }, je.isMemo = function(x) {
    return E(x) === g;
  }, je.isPortal = function(x) {
    return E(x) === r;
  }, je.isProfiler = function(x) {
    return E(x) === o;
  }, je.isStrictMode = function(x) {
    return E(x) === s;
  }, je.isSuspense = function(x) {
    return E(x) === d;
  }, je.isValidElementType = function(x) {
    return typeof x == "string" || typeof x == "function" || x === n || x === l || x === o || x === s || x === d || x === h || typeof x == "object" && x !== null && (x.$$typeof === y || x.$$typeof === g || x.$$typeof === a || x.$$typeof === i || x.$$typeof === u || x.$$typeof === b || x.$$typeof === O || x.$$typeof === w || x.$$typeof === p);
  }, je.typeOf = E, je;
}
var Ua;
function hc() {
  return Ua || (Ua = 1, process.env.NODE_ENV === "production" ? an.exports = Ef() : an.exports = Sf()), an.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var ks, za;
function Cf() {
  if (za)
    return ks;
  za = 1;
  var e = Object.getOwnPropertySymbols, t = Object.prototype.hasOwnProperty, r = Object.prototype.propertyIsEnumerable;
  function n(o) {
    if (o == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(o);
  }
  function s() {
    try {
      if (!Object.assign)
        return !1;
      var o = new String("abc");
      if (o[5] = "de", Object.getOwnPropertyNames(o)[0] === "5")
        return !1;
      for (var a = {}, i = 0; i < 10; i++)
        a["_" + String.fromCharCode(i)] = i;
      var c = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
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
  return ks = s() ? Object.assign : function(o, a) {
    for (var i, c = n(o), l, u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var d in i)
        t.call(i, d) && (c[d] = i[d]);
      if (e) {
        l = e(i);
        for (var h = 0; h < l.length; h++)
          r.call(i, l[h]) && (c[l[h]] = i[l[h]]);
      }
    }
    return c;
  }, ks;
}
var As, Ba;
function pc() {
  return Ba || (Ba = 1, As = Function.call.bind(Object.prototype.hasOwnProperty)), As;
}
var Ps, Wa;
function Tf() {
  if (Wa)
    return Ps;
  Wa = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = Lo(), r = {}, n = pc();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function s(o, a, i, c, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (n(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var h = Error(
                (c || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = o[u](a, u, c, i, null, t);
          } catch (y) {
            d = y;
          }
          if (d && !(d instanceof Error) && e(
            (c || "React class") + ": type specification of " + i + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var g = l ? l() : "";
            e(
              "Failed " + i + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, Ps = s, Ps;
}
var Ds, Za;
function Of() {
  if (Za)
    return Ds;
  Za = 1;
  var e = hc(), t = Cf(), r = Lo(), n = pc(), s = Tf(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var c = "Warning: " + i;
    typeof console < "u" && console.error(c);
    try {
      throw new Error(c);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Ds = function(i, c) {
    var l = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(R) {
      var P = R && (l && R[l] || R[u]);
      if (typeof P == "function")
        return P;
    }
    var h = "<<anonymous>>", g = {
      array: O("array"),
      bigint: O("bigint"),
      bool: O("boolean"),
      func: O("function"),
      number: O("number"),
      object: O("object"),
      string: O("string"),
      symbol: O("symbol"),
      any: w(),
      arrayOf: E,
      element: T(),
      elementType: x(),
      instanceOf: V,
      node: X(),
      objectOf: q,
      oneOf: J,
      oneOfType: B,
      shape: k,
      exact: A
    };
    function y(R, P) {
      return R === P ? R !== 0 || 1 / R === 1 / P : R !== R && P !== P;
    }
    function p(R, P) {
      this.message = R, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    p.prototype = Error.prototype;
    function b(R) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, Q = 0;
      function K(be, ne, oe, ue, xe, de, Be) {
        if (ue = ue || h, de = de || oe, Be !== r) {
          if (c) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var He = ue + ":" + oe;
            !P[He] && // Avoid spamming the console because they are often not actionable except for lib authors
            Q < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + de + "` prop on `" + ue + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[He] = !0, Q++);
          }
        }
        return ne[oe] == null ? be ? ne[oe] === null ? new p("The " + xe + " `" + de + "` is marked as required " + ("in `" + ue + "`, but its value is `null`.")) : new p("The " + xe + " `" + de + "` is marked as required in " + ("`" + ue + "`, but its value is `undefined`.")) : null : R(ne, oe, ue, xe, de);
      }
      var re = K.bind(null, !1);
      return re.isRequired = K.bind(null, !0), re;
    }
    function O(R) {
      function P(Q, K, re, be, ne, oe) {
        var ue = Q[K], xe = we(ue);
        if (xe !== R) {
          var de = Se(ue);
          return new p(
            "Invalid " + be + " `" + ne + "` of type " + ("`" + de + "` supplied to `" + re + "`, expected ") + ("`" + R + "`."),
            { expectedType: R }
          );
        }
        return null;
      }
      return b(P);
    }
    function w() {
      return b(a);
    }
    function E(R) {
      function P(Q, K, re, be, ne) {
        if (typeof R != "function")
          return new p("Property `" + ne + "` of component `" + re + "` has invalid PropType notation inside arrayOf.");
        var oe = Q[K];
        if (!Array.isArray(oe)) {
          var ue = we(oe);
          return new p("Invalid " + be + " `" + ne + "` of type " + ("`" + ue + "` supplied to `" + re + "`, expected an array."));
        }
        for (var xe = 0; xe < oe.length; xe++) {
          var de = R(oe, xe, re, be, ne + "[" + xe + "]", r);
          if (de instanceof Error)
            return de;
        }
        return null;
      }
      return b(P);
    }
    function T() {
      function R(P, Q, K, re, be) {
        var ne = P[Q];
        if (!i(ne)) {
          var oe = we(ne);
          return new p("Invalid " + re + " `" + be + "` of type " + ("`" + oe + "` supplied to `" + K + "`, expected a single ReactElement."));
        }
        return null;
      }
      return b(R);
    }
    function x() {
      function R(P, Q, K, re, be) {
        var ne = P[Q];
        if (!e.isValidElementType(ne)) {
          var oe = we(ne);
          return new p("Invalid " + re + " `" + be + "` of type " + ("`" + oe + "` supplied to `" + K + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return b(R);
    }
    function V(R) {
      function P(Q, K, re, be, ne) {
        if (!(Q[K] instanceof R)) {
          var oe = R.name || h, ue = Ie(Q[K]);
          return new p("Invalid " + be + " `" + ne + "` of type " + ("`" + ue + "` supplied to `" + re + "`, expected ") + ("instance of `" + oe + "`."));
        }
        return null;
      }
      return b(P);
    }
    function J(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(Q, K, re, be, ne) {
        for (var oe = Q[K], ue = 0; ue < R.length; ue++)
          if (y(oe, R[ue]))
            return null;
        var xe = JSON.stringify(R, function(Be, M) {
          var He = Se(M);
          return He === "symbol" ? String(M) : M;
        });
        return new p("Invalid " + be + " `" + ne + "` of value `" + String(oe) + "` " + ("supplied to `" + re + "`, expected one of " + xe + "."));
      }
      return b(P);
    }
    function q(R) {
      function P(Q, K, re, be, ne) {
        if (typeof R != "function")
          return new p("Property `" + ne + "` of component `" + re + "` has invalid PropType notation inside objectOf.");
        var oe = Q[K], ue = we(oe);
        if (ue !== "object")
          return new p("Invalid " + be + " `" + ne + "` of type " + ("`" + ue + "` supplied to `" + re + "`, expected an object."));
        for (var xe in oe)
          if (n(oe, xe)) {
            var de = R(oe, xe, re, be, ne + "." + xe, r);
            if (de instanceof Error)
              return de;
          }
        return null;
      }
      return b(P);
    }
    function B(R) {
      if (!Array.isArray(R))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < R.length; P++) {
        var Q = R[P];
        if (typeof Q != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ze(Q) + " at index " + P + "."
          ), a;
      }
      function K(re, be, ne, oe, ue) {
        for (var xe = [], de = 0; de < R.length; de++) {
          var Be = R[de], M = Be(re, be, ne, oe, ue, r);
          if (M == null)
            return null;
          M.data && n(M.data, "expectedType") && xe.push(M.data.expectedType);
        }
        var He = xe.length > 0 ? ", expected one of type [" + xe.join(", ") + "]" : "";
        return new p("Invalid " + oe + " `" + ue + "` supplied to " + ("`" + ne + "`" + He + "."));
      }
      return b(K);
    }
    function X() {
      function R(P, Q, K, re, be) {
        return H(P[Q]) ? null : new p("Invalid " + re + " `" + be + "` supplied to " + ("`" + K + "`, expected a ReactNode."));
      }
      return b(R);
    }
    function me(R, P, Q, K, re) {
      return new p(
        (R || "React class") + ": " + P + " type `" + Q + "." + K + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + re + "`."
      );
    }
    function k(R) {
      function P(Q, K, re, be, ne) {
        var oe = Q[K], ue = we(oe);
        if (ue !== "object")
          return new p("Invalid " + be + " `" + ne + "` of type `" + ue + "` " + ("supplied to `" + re + "`, expected `object`."));
        for (var xe in R) {
          var de = R[xe];
          if (typeof de != "function")
            return me(re, be, ne, xe, Se(de));
          var Be = de(oe, xe, re, be, ne + "." + xe, r);
          if (Be)
            return Be;
        }
        return null;
      }
      return b(P);
    }
    function A(R) {
      function P(Q, K, re, be, ne) {
        var oe = Q[K], ue = we(oe);
        if (ue !== "object")
          return new p("Invalid " + be + " `" + ne + "` of type `" + ue + "` " + ("supplied to `" + re + "`, expected `object`."));
        var xe = t({}, Q[K], R);
        for (var de in xe) {
          var Be = R[de];
          if (n(R, de) && typeof Be != "function")
            return me(re, be, ne, de, Se(Be));
          if (!Be)
            return new p(
              "Invalid " + be + " `" + ne + "` key `" + de + "` supplied to `" + re + "`.\nBad object: " + JSON.stringify(Q[K], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(R), null, "  ")
            );
          var M = Be(oe, de, re, be, ne + "." + de, r);
          if (M)
            return M;
        }
        return null;
      }
      return b(P);
    }
    function H(R) {
      switch (typeof R) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !R;
        case "object":
          if (Array.isArray(R))
            return R.every(H);
          if (R === null || i(R))
            return !0;
          var P = d(R);
          if (P) {
            var Q = P.call(R), K;
            if (P !== R.entries) {
              for (; !(K = Q.next()).done; )
                if (!H(K.value))
                  return !1;
            } else
              for (; !(K = Q.next()).done; ) {
                var re = K.value;
                if (re && !H(re[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function le(R, P) {
      return R === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function we(R) {
      var P = typeof R;
      return Array.isArray(R) ? "array" : R instanceof RegExp ? "object" : le(P, R) ? "symbol" : P;
    }
    function Se(R) {
      if (typeof R > "u" || R === null)
        return "" + R;
      var P = we(R);
      if (P === "object") {
        if (R instanceof Date)
          return "date";
        if (R instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ze(R) {
      var P = Se(R);
      switch (P) {
        case "array":
        case "object":
          return "an " + P;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + P;
        default:
          return P;
      }
    }
    function Ie(R) {
      return !R.constructor || !R.constructor.name ? h : R.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, Ds;
}
if (process.env.NODE_ENV !== "production") {
  var Rf = hc(), Nf = !0;
  ao.exports = Of()(Rf.isElement, Nf);
} else
  ao.exports = wf()();
var $f = ao.exports;
const Gt = /* @__PURE__ */ yi($f);
var jf = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, kf = Object.defineProperty, Af = Object.defineProperties, Pf = Object.getOwnPropertyDescriptors, jn = Object.getOwnPropertySymbols, mc = Object.prototype.hasOwnProperty, vc = Object.prototype.propertyIsEnumerable, qa = (e, t, r) => t in e ? kf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Ha = (e, t) => {
  for (var r in t || (t = {}))
    mc.call(t, r) && qa(e, r, t[r]);
  if (jn)
    for (var r of jn(t))
      vc.call(t, r) && qa(e, r, t[r]);
  return e;
}, Df = (e, t) => Af(e, Pf(t)), If = (e, t) => {
  var r = {};
  for (var n in e)
    mc.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && jn)
    for (var n of jn(e))
      t.indexOf(n) < 0 && vc.call(e, n) && (r[n] = e[n]);
  return r;
}, St = (e, t, r) => {
  const n = ye(
    (s, o) => {
      var a = s, { color: i = "currentColor", size: c = 24, stroke: l = 2, children: u } = a, d = If(a, ["color", "size", "stroke", "children"]);
      return z(
        "svg",
        Ha(Df(Ha({
          ref: o
        }, jf), {
          width: c,
          height: c,
          stroke: i,
          strokeWidth: l,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([h, g]) => z(h, g)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: Gt.string,
    size: Gt.oneOfType([Gt.string, Gt.number]),
    stroke: Gt.oneOfType([Gt.string, Gt.number])
  }, n.displayName = `${t}`, n;
}, Mf = St("alert-triangle", "IconAlertTriangle", [
  ["path", { d: "M12 9v4", key: "svg-0" }],
  [
    "path",
    {
      d: "M10.363 3.591l-8.106 13.534a1.914 1.914 0 0 0 1.636 2.871h16.214a1.914 1.914 0 0 0 1.636 -2.87l-8.106 -13.536a1.914 1.914 0 0 0 -3.274 0z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M12 16h.01", key: "svg-2" }]
]), Lf = St("book", "IconBook", [
  ["path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-0" }],
  ["path", { d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-1" }],
  ["path", { d: "M3 6l0 13", key: "svg-2" }],
  ["path", { d: "M12 6l0 13", key: "svg-3" }],
  ["path", { d: "M21 6l0 13", key: "svg-4" }]
]), Ff = St("chalkboard", "IconChalkboard", [
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
]), Is = St(
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
), Ya = St("info-square", "IconInfoSquare", [
  ["path", { d: "M12 9h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), Vf = St("menu-deep", "IconMenuDeep", [
  ["path", { d: "M4 6h16", key: "svg-0" }],
  ["path", { d: "M7 12h13", key: "svg-1" }],
  ["path", { d: "M10 18h10", key: "svg-2" }]
]), Uf = St("phone-call", "IconPhoneCall", [
  [
    "path",
    {
      d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M15 7a2 2 0 0 1 2 2", key: "svg-1" }],
  ["path", { d: "M15 3a6 6 0 0 1 6 6", key: "svg-2" }]
]), gc = St("square-check", "IconSquareCheck", [
  [
    "path",
    {
      d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]
]), zf = St("square-x", "IconSquareX", [
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 9l6 6m0 -6l-6 6", key: "svg-1" }]
]), Ms = St("wash-dryclean", "IconWashDryclean", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }]
]), Ne;
(function(e) {
  e.assertEqual = (s) => s;
  function t(s) {
  }
  e.assertIs = t;
  function r(s) {
    throw new Error();
  }
  e.assertNever = r, e.arrayToEnum = (s) => {
    const o = {};
    for (const a of s)
      o[a] = a;
    return o;
  }, e.getValidEnumValues = (s) => {
    const o = e.objectKeys(s).filter((i) => typeof s[s[i]] != "number"), a = {};
    for (const i of o)
      a[i] = s[i];
    return e.objectValues(a);
  }, e.objectValues = (s) => e.objectKeys(s).map(function(o) {
    return s[o];
  }), e.objectKeys = typeof Object.keys == "function" ? (s) => Object.keys(s) : (s) => {
    const o = [];
    for (const a in s)
      Object.prototype.hasOwnProperty.call(s, a) && o.push(a);
    return o;
  }, e.find = (s, o) => {
    for (const a of s)
      if (o(a))
        return a;
  }, e.isInteger = typeof Number.isInteger == "function" ? (s) => Number.isInteger(s) : (s) => typeof s == "number" && isFinite(s) && Math.floor(s) === s;
  function n(s, o = " | ") {
    return s.map((a) => typeof a == "string" ? `'${a}'` : a).join(o);
  }
  e.joinValues = n, e.jsonStringifyReplacer = (s, o) => typeof o == "bigint" ? o.toString() : o;
})(Ne || (Ne = {}));
var Ga;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(Ga || (Ga = {}));
const U = Ne.arrayToEnum([
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
]), Jt = (e) => {
  switch (typeof e) {
    case "undefined":
      return U.undefined;
    case "string":
      return U.string;
    case "number":
      return isNaN(e) ? U.nan : U.number;
    case "boolean":
      return U.boolean;
    case "function":
      return U.function;
    case "bigint":
      return U.bigint;
    case "symbol":
      return U.symbol;
    case "object":
      return Array.isArray(e) ? U.array : e === null ? U.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? U.promise : typeof Map < "u" && e instanceof Map ? U.map : typeof Set < "u" && e instanceof Set ? U.set : typeof Date < "u" && e instanceof Date ? U.date : U.object;
    default:
      return U.unknown;
  }
}, j = Ne.arrayToEnum([
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
class bt extends Error {
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
    const r = t || function(o) {
      return o.message;
    }, n = { _errors: [] }, s = (o) => {
      for (const a of o.issues)
        if (a.code === "invalid_union")
          a.unionErrors.map(s);
        else if (a.code === "invalid_return_type")
          s(a.returnTypeError);
        else if (a.code === "invalid_arguments")
          s(a.argumentsError);
        else if (a.path.length === 0)
          n._errors.push(r(a));
        else {
          let i = n, c = 0;
          for (; c < a.path.length; ) {
            const l = a.path[c];
            c === a.path.length - 1 ? (i[l] = i[l] || { _errors: [] }, i[l]._errors.push(r(a))) : i[l] = i[l] || { _errors: [] }, i = i[l], c++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Ne.jsonStringifyReplacer, 2);
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
bt.create = (e) => new bt(e);
const kn = (e, t) => {
  let r;
  switch (e.code) {
    case j.invalid_type:
      e.received === U.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case j.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, Ne.jsonStringifyReplacer)}`;
      break;
    case j.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Ne.joinValues(e.keys, ", ")}`;
      break;
    case j.invalid_union:
      r = "Invalid input";
      break;
    case j.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Ne.joinValues(e.options)}`;
      break;
    case j.invalid_enum_value:
      r = `Invalid enum value. Expected ${Ne.joinValues(e.options)}, received '${e.received}'`;
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
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : Ne.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
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
      r = t.defaultError, Ne.assertNever(e);
  }
  return { message: r };
};
let Bf = kn;
function io() {
  return Bf;
}
const co = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: s } = e, o = [...r, ...s.path || []], a = {
    ...s,
    path: o
  };
  let i = "";
  const c = n.filter((l) => !!l).slice().reverse();
  for (const l of c)
    i = l(a, { data: t, defaultError: i }).message;
  return {
    ...s,
    path: o,
    message: s.message || i
  };
};
function Z(e, t) {
  const r = co({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      io(),
      kn
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class Xe {
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
        return ce;
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
    return Xe.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: o, value: a } = s;
      if (o.status === "aborted" || a.status === "aborted")
        return ce;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || s.alwaysSet) && (n[o.value] = a.value);
    }
    return { status: t.value, value: n };
  }
}
const ce = Object.freeze({
  status: "aborted"
}), Wf = (e) => ({ status: "dirty", value: e }), Qe = (e) => ({ status: "valid", value: e }), Ja = (e) => e.status === "aborted", Ka = (e) => e.status === "dirty", An = (e) => e.status === "valid", lo = (e) => typeof Promise < "u" && e instanceof Promise;
var G;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(G || (G = {}));
class _t {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const Xa = (e, t) => {
  if (An(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new bt(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ae(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (a, i) => a.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: n ?? i.defaultError } : { message: r ?? i.defaultError }, description: s };
}
class ge {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Jt(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Jt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Xe(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Jt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (lo(r))
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
      parsedType: Jt(t)
    }, o = this._parseSync({ data: t, path: s.path, parent: s });
    return Xa(s, o);
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
      parsedType: Jt(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), o = await (lo(s) ? s : Promise.resolve(s));
    return Xa(n, o);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, o) => {
      const a = t(s), i = () => o.addIssue({
        code: j.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((c) => c ? !0 : (i(), !1)) : a ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new At({
      schema: this,
      typeName: ee.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return Wt.create(this, this._def);
  }
  nullable() {
    return br.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return xt.create(this, this._def);
  }
  promise() {
    return Vr.create(this, this._def);
  }
  or(t) {
    return In.create([this, t], this._def);
  }
  and(t) {
    return Mn.create(this, t, this._def);
  }
  transform(t) {
    return new At({
      ...ae(this._def),
      schema: this,
      typeName: ee.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new zn({
      ...ae(this._def),
      innerType: this,
      defaultValue: r,
      typeName: ee.ZodDefault
    });
  }
  brand() {
    return new rh({
      typeName: ee.ZodBranded,
      type: this,
      ...ae(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new go({
      ...ae(this._def),
      innerType: this,
      catchValue: r,
      typeName: ee.ZodCatch
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
    return Qn.create(this, t);
  }
  readonly() {
    return bo.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Zf = /^c[^\s-]{8,}$/i, qf = /^[a-z][a-z0-9]*$/, Hf = /^[0-9A-HJKMNP-TV-Z]{26}$/, Yf = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Gf = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Jf = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let Ls;
const Kf = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Xf = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Qf = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function eh(e, t) {
  return !!((t === "v4" || !t) && Kf.test(e) || (t === "v6" || !t) && Xf.test(e));
}
class Nt extends ge {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== U.string) {
      const o = this._getOrReturnCtx(t);
      return Z(
        o,
        {
          code: j.invalid_type,
          expected: U.string,
          received: o.parsedType
        }
        //
      ), ce;
    }
    const n = new Xe();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (s = this._getOrReturnCtx(t, s), Z(s, {
          code: j.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (s = this._getOrReturnCtx(t, s), Z(s, {
          code: j.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, i = t.data.length < o.value;
        (a || i) && (s = this._getOrReturnCtx(t, s), a ? Z(s, {
          code: j.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : i && Z(s, {
          code: j.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), n.dirty());
      } else if (o.kind === "email")
        Gf.test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "email",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "emoji")
        Ls || (Ls = new RegExp(Jf, "u")), Ls.test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "emoji",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "uuid")
        Yf.test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "uuid",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid")
        Zf.test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "cuid",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid2")
        qf.test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "cuid2",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "ulid")
        Hf.test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "ulid",
          code: j.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), Z(s, {
            validation: "url",
            code: j.invalid_string,
            message: o.message
          }), n.dirty();
        }
      else
        o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "regex",
          code: j.invalid_string,
          message: o.message
        }), n.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(t, s), Z(s, {
          code: j.invalid_string,
          validation: { includes: o.value, position: o.position },
          message: o.message
        }), n.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (s = this._getOrReturnCtx(t, s), Z(s, {
          code: j.invalid_string,
          validation: { startsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (s = this._getOrReturnCtx(t, s), Z(s, {
          code: j.invalid_string,
          validation: { endsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "datetime" ? Qf(o).test(t.data) || (s = this._getOrReturnCtx(t, s), Z(s, {
          code: j.invalid_string,
          validation: "datetime",
          message: o.message
        }), n.dirty()) : o.kind === "ip" ? eh(t.data, o.version) || (s = this._getOrReturnCtx(t, s), Z(s, {
          validation: "ip",
          code: j.invalid_string,
          message: o.message
        }), n.dirty()) : Ne.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: j.invalid_string,
      ...G.errToObj(n)
    });
  }
  _addCheck(t) {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...G.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...G.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...G.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...G.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...G.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...G.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...G.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...G.errToObj(t) });
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
      ...G.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...G.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...G.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...G.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...G.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...G.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...G.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...G.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, G.errToObj(t));
  }
  trim() {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new Nt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new Nt({
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
Nt.create = (e) => {
  var t;
  return new Nt({
    checks: [],
    typeName: ee.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ae(e)
  });
};
function th(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, o = parseInt(e.toFixed(s).replace(".", "")), a = parseInt(t.toFixed(s).replace(".", ""));
  return o % a / Math.pow(10, s);
}
class vr extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== U.number) {
      const o = this._getOrReturnCtx(t);
      return Z(o, {
        code: j.invalid_type,
        expected: U.number,
        received: o.parsedType
      }), ce;
    }
    let n;
    const s = new Xe();
    for (const o of this._def.checks)
      o.kind === "int" ? Ne.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), s.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? th(t.data, o.value) !== 0 && (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.not_finite,
        message: o.message
      }), s.dirty()) : Ne.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, G.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, G.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, G.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, G.toString(r));
  }
  setLimit(t, r, n, s) {
    return new vr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: G.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new vr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: G.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: G.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: G.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: G.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: G.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: G.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: G.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: G.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: G.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Ne.isInteger(t.value));
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
vr.create = (e) => new vr({
  checks: [],
  typeName: ee.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ae(e)
});
class gr extends ge {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== U.bigint) {
      const o = this._getOrReturnCtx(t);
      return Z(o, {
        code: j.invalid_type,
        expected: U.bigint,
        received: o.parsedType
      }), ce;
    }
    let n;
    const s = new Xe();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), Z(n, {
        code: j.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : Ne.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, G.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, G.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, G.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, G.toString(r));
  }
  setLimit(t, r, n, s) {
    return new gr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: G.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new gr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: G.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: G.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: G.toString(r)
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
gr.create = (e) => {
  var t;
  return new gr({
    checks: [],
    typeName: ee.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ae(e)
  });
};
class uo extends ge {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== U.boolean) {
      const n = this._getOrReturnCtx(t);
      return Z(n, {
        code: j.invalid_type,
        expected: U.boolean,
        received: n.parsedType
      }), ce;
    }
    return Qe(t.data);
  }
}
uo.create = (e) => new uo({
  typeName: ee.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ae(e)
});
class Fr extends ge {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== U.date) {
      const o = this._getOrReturnCtx(t);
      return Z(o, {
        code: j.invalid_type,
        expected: U.date,
        received: o.parsedType
      }), ce;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return Z(o, {
        code: j.invalid_date
      }), ce;
    }
    const n = new Xe();
    let s;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (s = this._getOrReturnCtx(t, s), Z(s, {
        code: j.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), n.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (s = this._getOrReturnCtx(t, s), Z(s, {
        code: j.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), n.dirty()) : Ne.assertNever(o);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Fr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: G.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: G.toString(r)
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
Fr.create = (e) => new Fr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: ee.ZodDate,
  ...ae(e)
});
class fo extends ge {
  _parse(t) {
    if (this._getType(t) !== U.symbol) {
      const n = this._getOrReturnCtx(t);
      return Z(n, {
        code: j.invalid_type,
        expected: U.symbol,
        received: n.parsedType
      }), ce;
    }
    return Qe(t.data);
  }
}
fo.create = (e) => new fo({
  typeName: ee.ZodSymbol,
  ...ae(e)
});
class Pn extends ge {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const n = this._getOrReturnCtx(t);
      return Z(n, {
        code: j.invalid_type,
        expected: U.undefined,
        received: n.parsedType
      }), ce;
    }
    return Qe(t.data);
  }
}
Pn.create = (e) => new Pn({
  typeName: ee.ZodUndefined,
  ...ae(e)
});
class Dn extends ge {
  _parse(t) {
    if (this._getType(t) !== U.null) {
      const n = this._getOrReturnCtx(t);
      return Z(n, {
        code: j.invalid_type,
        expected: U.null,
        received: n.parsedType
      }), ce;
    }
    return Qe(t.data);
  }
}
Dn.create = (e) => new Dn({
  typeName: ee.ZodNull,
  ...ae(e)
});
class ho extends ge {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Qe(t.data);
  }
}
ho.create = (e) => new ho({
  typeName: ee.ZodAny,
  ...ae(e)
});
class dr extends ge {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Qe(t.data);
  }
}
dr.create = (e) => new dr({
  typeName: ee.ZodUnknown,
  ...ae(e)
});
class qt extends ge {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return Z(r, {
      code: j.invalid_type,
      expected: U.never,
      received: r.parsedType
    }), ce;
  }
}
qt.create = (e) => new qt({
  typeName: ee.ZodNever,
  ...ae(e)
});
class po extends ge {
  _parse(t) {
    if (this._getType(t) !== U.undefined) {
      const n = this._getOrReturnCtx(t);
      return Z(n, {
        code: j.invalid_type,
        expected: U.void,
        received: n.parsedType
      }), ce;
    }
    return Qe(t.data);
  }
}
po.create = (e) => new po({
  typeName: ee.ZodVoid,
  ...ae(e)
});
class xt extends ge {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== U.array)
      return Z(r, {
        code: j.invalid_type,
        expected: U.array,
        received: r.parsedType
      }), ce;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (a || i) && (Z(r, {
        code: a ? j.too_big : j.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (Z(r, {
      code: j.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (Z(r, {
      code: j.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, i) => s.type._parseAsync(new _t(r, a, r.path, i)))).then((a) => Xe.mergeArray(n, a));
    const o = [...r.data].map((a, i) => s.type._parseSync(new _t(r, a, r.path, i)));
    return Xe.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new xt({
      ...this._def,
      minLength: { value: t, message: G.toString(r) }
    });
  }
  max(t, r) {
    return new xt({
      ...this._def,
      maxLength: { value: t, message: G.toString(r) }
    });
  }
  length(t, r) {
    return new xt({
      ...this._def,
      exactLength: { value: t, message: G.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
xt.create = (e, t) => new xt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: ee.ZodArray,
  ...ae(t)
});
function lr(e) {
  if (e instanceof Me) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = Wt.create(lr(n));
    }
    return new Me({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof xt ? new xt({
      ...e._def,
      type: lr(e.element)
    }) : e instanceof Wt ? Wt.create(lr(e.unwrap())) : e instanceof br ? br.create(lr(e.unwrap())) : e instanceof kt ? kt.create(e.items.map((t) => lr(t))) : e;
}
class Me extends ge {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = Ne.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== U.object) {
      const l = this._getOrReturnCtx(t);
      return Z(l, {
        code: j.invalid_type,
        expected: U.object,
        received: l.parsedType
      }), ce;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof qt && this._def.unknownKeys === "strip"))
      for (const l in s.data)
        a.includes(l) || i.push(l);
    const c = [];
    for (const l of a) {
      const u = o[l], d = s.data[l];
      c.push({
        key: { status: "valid", value: l },
        value: u._parse(new _t(s, d, s.path, l)),
        alwaysSet: l in s.data
      });
    }
    if (this._def.catchall instanceof qt) {
      const l = this._def.unknownKeys;
      if (l === "passthrough")
        for (const u of i)
          c.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (l === "strict")
        i.length > 0 && (Z(s, {
          code: j.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (l !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const l = this._def.catchall;
      for (const u of i) {
        const d = s.data[u];
        c.push({
          key: { status: "valid", value: u },
          value: l._parse(
            new _t(s, d, s.path, u)
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
    }).then((l) => Xe.mergeObjectSync(n, l)) : Xe.mergeObjectSync(n, c);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return G.errToObj, new Me({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var s, o, a, i;
          const c = (a = (o = (s = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(s, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = G.errToObj(t).message) !== null && i !== void 0 ? i : c
          } : {
            message: c
          };
        }
      } : {}
    });
  }
  strip() {
    return new Me({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new Me({
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
    return new Me({
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
    return new Me({
      unknownKeys: t._def.unknownKeys,
      catchall: t._def.catchall,
      shape: () => ({
        ...this._def.shape(),
        ...t._def.shape()
      }),
      typeName: ee.ZodObject
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
    return new Me({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return Ne.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new Me({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return Ne.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new Me({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return lr(this);
  }
  partial(t) {
    const r = {};
    return Ne.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }), new Me({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return Ne.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let o = this.shape[n];
        for (; o instanceof Wt; )
          o = o._def.innerType;
        r[n] = o;
      }
    }), new Me({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return yc(Ne.objectKeys(this.shape));
  }
}
Me.create = (e, t) => new Me({
  shape: () => e,
  unknownKeys: "strip",
  catchall: qt.create(),
  typeName: ee.ZodObject,
  ...ae(t)
});
Me.strictCreate = (e, t) => new Me({
  shape: () => e,
  unknownKeys: "strict",
  catchall: qt.create(),
  typeName: ee.ZodObject,
  ...ae(t)
});
Me.lazycreate = (e, t) => new Me({
  shape: e,
  unknownKeys: "strip",
  catchall: qt.create(),
  typeName: ee.ZodObject,
  ...ae(t)
});
class In extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(o) {
      for (const i of o)
        if (i.result.status === "valid")
          return i.result;
      for (const i of o)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((i) => new bt(i.ctx.common.issues));
      return Z(r, {
        code: j.invalid_union,
        unionErrors: a
      }), ce;
    }
    if (r.common.async)
      return Promise.all(n.map(async (o) => {
        const a = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        };
        return {
          result: await o._parseAsync({
            data: r.data,
            path: r.path,
            parent: a
          }),
          ctx: a
        };
      })).then(s);
    {
      let o;
      const a = [];
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
        u.status === "dirty" && !o && (o = { result: u, ctx: l }), l.common.issues.length && a.push(l.common.issues);
      }
      if (o)
        return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((c) => new bt(c));
      return Z(r, {
        code: j.invalid_union,
        unionErrors: i
      }), ce;
    }
  }
  get options() {
    return this._def.options;
  }
}
In.create = (e, t) => new In({
  options: e,
  typeName: ee.ZodUnion,
  ...ae(t)
});
const _n = (e) => e instanceof Fn ? _n(e.schema) : e instanceof At ? _n(e.innerType()) : e instanceof Vn ? [e.value] : e instanceof er ? e.options : e instanceof Un ? Object.keys(e.enum) : e instanceof zn ? _n(e._def.innerType) : e instanceof Pn ? [void 0] : e instanceof Dn ? [null] : null;
class Fo extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.object)
      return Z(r, {
        code: j.invalid_type,
        expected: U.object,
        received: r.parsedType
      }), ce;
    const n = this.discriminator, s = r.data[n], o = this.optionsMap.get(s);
    return o ? r.common.async ? o._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : o._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (Z(r, {
      code: j.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), ce);
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
    for (const o of r) {
      const a = _n(o.shape[t]);
      if (!a)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of a) {
        if (s.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        s.set(i, o);
      }
    }
    return new Fo({
      typeName: ee.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...ae(n)
    });
  }
}
function mo(e, t) {
  const r = Jt(e), n = Jt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === U.object && n === U.object) {
    const s = Ne.objectKeys(t), o = Ne.objectKeys(e).filter((i) => s.indexOf(i) !== -1), a = { ...e, ...t };
    for (const i of o) {
      const c = mo(e[i], t[i]);
      if (!c.valid)
        return { valid: !1 };
      a[i] = c.data;
    }
    return { valid: !0, data: a };
  } else if (r === U.array && n === U.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], i = t[o], c = mo(a, i);
      if (!c.valid)
        return { valid: !1 };
      s.push(c.data);
    }
    return { valid: !0, data: s };
  } else
    return r === U.date && n === U.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class Mn extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (o, a) => {
      if (Ja(o) || Ja(a))
        return ce;
      const i = mo(o.value, a.value);
      return i.valid ? ((Ka(o) || Ka(a)) && r.dirty(), { status: r.value, value: i.data }) : (Z(n, {
        code: j.invalid_intersection_types
      }), ce);
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
    ]).then(([o, a]) => s(o, a)) : s(this._def.left._parseSync({
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
Mn.create = (e, t, r) => new Mn({
  left: e,
  right: t,
  typeName: ee.ZodIntersection,
  ...ae(r)
});
class kt extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.array)
      return Z(n, {
        code: j.invalid_type,
        expected: U.array,
        received: n.parsedType
      }), ce;
    if (n.data.length < this._def.items.length)
      return Z(n, {
        code: j.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), ce;
    !this._def.rest && n.data.length > this._def.items.length && (Z(n, {
      code: j.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const o = [...n.data].map((a, i) => {
      const c = this._def.items[i] || this._def.rest;
      return c ? c._parse(new _t(n, a, n.path, i)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(o).then((a) => Xe.mergeArray(r, a)) : Xe.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new kt({
      ...this._def,
      rest: t
    });
  }
}
kt.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new kt({
    items: e,
    typeName: ee.ZodTuple,
    rest: null,
    ...ae(t)
  });
};
class Ln extends ge {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.object)
      return Z(n, {
        code: j.invalid_type,
        expected: U.object,
        received: n.parsedType
      }), ce;
    const s = [], o = this._def.keyType, a = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: o._parse(new _t(n, i, n.path, i)),
        value: a._parse(new _t(n, n.data[i], n.path, i))
      });
    return n.common.async ? Xe.mergeObjectAsync(r, s) : Xe.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof ge ? new Ln({
      keyType: t,
      valueType: r,
      typeName: ee.ZodRecord,
      ...ae(n)
    }) : new Ln({
      keyType: Nt.create(),
      valueType: t,
      typeName: ee.ZodRecord,
      ...ae(r)
    });
  }
}
class vo extends ge {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.map)
      return Z(n, {
        code: j.invalid_type,
        expected: U.map,
        received: n.parsedType
      }), ce;
    const s = this._def.keyType, o = this._def.valueType, a = [...n.data.entries()].map(([i, c], l) => ({
      key: s._parse(new _t(n, i, n.path, [l, "key"])),
      value: o._parse(new _t(n, c, n.path, [l, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const c of a) {
          const l = await c.key, u = await c.value;
          if (l.status === "aborted" || u.status === "aborted")
            return ce;
          (l.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(l.value, u.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const c of a) {
        const l = c.key, u = c.value;
        if (l.status === "aborted" || u.status === "aborted")
          return ce;
        (l.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(l.value, u.value);
      }
      return { status: r.value, value: i };
    }
  }
}
vo.create = (e, t, r) => new vo({
  valueType: t,
  keyType: e,
  typeName: ee.ZodMap,
  ...ae(r)
});
class yr extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== U.set)
      return Z(n, {
        code: j.invalid_type,
        expected: U.set,
        received: n.parsedType
      }), ce;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (Z(n, {
      code: j.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (Z(n, {
      code: j.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const o = this._def.valueType;
    function a(c) {
      const l = /* @__PURE__ */ new Set();
      for (const u of c) {
        if (u.status === "aborted")
          return ce;
        u.status === "dirty" && r.dirty(), l.add(u.value);
      }
      return { status: r.value, value: l };
    }
    const i = [...n.data.values()].map((c, l) => o._parse(new _t(n, c, n.path, l)));
    return n.common.async ? Promise.all(i).then((c) => a(c)) : a(i);
  }
  min(t, r) {
    return new yr({
      ...this._def,
      minSize: { value: t, message: G.toString(r) }
    });
  }
  max(t, r) {
    return new yr({
      ...this._def,
      maxSize: { value: t, message: G.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
yr.create = (e, t) => new yr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: ee.ZodSet,
  ...ae(t)
});
class Mr extends ge {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.function)
      return Z(r, {
        code: j.invalid_type,
        expected: U.function,
        received: r.parsedType
      }), ce;
    function n(i, c) {
      return co({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          io(),
          kn
        ].filter((l) => !!l),
        issueData: {
          code: j.invalid_arguments,
          argumentsError: c
        }
      });
    }
    function s(i, c) {
      return co({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          io(),
          kn
        ].filter((l) => !!l),
        issueData: {
          code: j.invalid_return_type,
          returnTypeError: c
        }
      });
    }
    const o = { errorMap: r.common.contextualErrorMap }, a = r.data;
    if (this._def.returns instanceof Vr) {
      const i = this;
      return Qe(async function(...c) {
        const l = new bt([]), u = await i._def.args.parseAsync(c, o).catch((g) => {
          throw l.addIssue(n(c, g)), l;
        }), d = await Reflect.apply(a, this, u);
        return await i._def.returns._def.type.parseAsync(d, o).catch((g) => {
          throw l.addIssue(s(d, g)), l;
        });
      });
    } else {
      const i = this;
      return Qe(function(...c) {
        const l = i._def.args.safeParse(c, o);
        if (!l.success)
          throw new bt([n(c, l.error)]);
        const u = Reflect.apply(a, this, l.data), d = i._def.returns.safeParse(u, o);
        if (!d.success)
          throw new bt([s(u, d.error)]);
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
    return new Mr({
      ...this._def,
      args: kt.create(t).rest(dr.create())
    });
  }
  returns(t) {
    return new Mr({
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
    return new Mr({
      args: t || kt.create([]).rest(dr.create()),
      returns: r || dr.create(),
      typeName: ee.ZodFunction,
      ...ae(n)
    });
  }
}
class Fn extends ge {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
Fn.create = (e, t) => new Fn({
  getter: e,
  typeName: ee.ZodLazy,
  ...ae(t)
});
class Vn extends ge {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return Z(r, {
        received: r.data,
        code: j.invalid_literal,
        expected: this._def.value
      }), ce;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
Vn.create = (e, t) => new Vn({
  value: e,
  typeName: ee.ZodLiteral,
  ...ae(t)
});
function yc(e, t) {
  return new er({
    values: e,
    typeName: ee.ZodEnum,
    ...ae(t)
  });
}
class er extends ge {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return Z(r, {
        expected: Ne.joinValues(n),
        received: r.parsedType,
        code: j.invalid_type
      }), ce;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return Z(r, {
        received: r.data,
        code: j.invalid_enum_value,
        options: n
      }), ce;
    }
    return Qe(t.data);
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
    return er.create(t);
  }
  exclude(t) {
    return er.create(this.options.filter((r) => !t.includes(r)));
  }
}
er.create = yc;
class Un extends ge {
  _parse(t) {
    const r = Ne.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== U.string && n.parsedType !== U.number) {
      const s = Ne.objectValues(r);
      return Z(n, {
        expected: Ne.joinValues(s),
        received: n.parsedType,
        code: j.invalid_type
      }), ce;
    }
    if (r.indexOf(t.data) === -1) {
      const s = Ne.objectValues(r);
      return Z(n, {
        received: n.data,
        code: j.invalid_enum_value,
        options: s
      }), ce;
    }
    return Qe(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
Un.create = (e, t) => new Un({
  values: e,
  typeName: ee.ZodNativeEnum,
  ...ae(t)
});
class Vr extends ge {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== U.promise && r.common.async === !1)
      return Z(r, {
        code: j.invalid_type,
        expected: U.promise,
        received: r.parsedType
      }), ce;
    const n = r.parsedType === U.promise ? r.data : Promise.resolve(r.data);
    return Qe(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
Vr.create = (e, t) => new Vr({
  type: e,
  typeName: ee.ZodPromise,
  ...ae(t)
});
class At extends ge {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === ee.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, o = {
      addIssue: (a) => {
        Z(n, a), a.fatal ? r.abort() : r.dirty();
      },
      get path() {
        return n.path;
      }
    };
    if (o.addIssue = o.addIssue.bind(o), s.type === "preprocess") {
      const a = s.transform(n.data, o);
      return n.common.issues.length ? {
        status: "dirty",
        value: n.data
      } : n.common.async ? Promise.resolve(a).then((i) => this._def.schema._parseAsync({
        data: i,
        path: n.path,
        parent: n
      })) : this._def.schema._parseSync({
        data: a,
        path: n.path,
        parent: n
      });
    }
    if (s.type === "refinement") {
      const a = (i) => {
        const c = s.refinement(i, o);
        if (n.common.async)
          return Promise.resolve(c);
        if (c instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? ce : (i.status === "dirty" && r.dirty(), a(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? ce : (i.status === "dirty" && r.dirty(), a(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!An(a))
          return a;
        const i = s.transform(a.value, o);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => An(a) ? Promise.resolve(s.transform(a.value, o)).then((i) => ({ status: r.value, value: i })) : a);
    Ne.assertNever(s);
  }
}
At.create = (e, t, r) => new At({
  schema: e,
  typeName: ee.ZodEffects,
  effect: t,
  ...ae(r)
});
At.createWithPreprocess = (e, t, r) => new At({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: ee.ZodEffects,
  ...ae(r)
});
class Wt extends ge {
  _parse(t) {
    return this._getType(t) === U.undefined ? Qe(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Wt.create = (e, t) => new Wt({
  innerType: e,
  typeName: ee.ZodOptional,
  ...ae(t)
});
class br extends ge {
  _parse(t) {
    return this._getType(t) === U.null ? Qe(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
br.create = (e, t) => new br({
  innerType: e,
  typeName: ee.ZodNullable,
  ...ae(t)
});
class zn extends ge {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === U.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
zn.create = (e, t) => new zn({
  innerType: e,
  typeName: ee.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ae(t)
});
class go extends ge {
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
    return lo(s) ? s.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new bt(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new bt(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
go.create = (e, t) => new go({
  innerType: e,
  typeName: ee.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ae(t)
});
class yo extends ge {
  _parse(t) {
    if (this._getType(t) !== U.nan) {
      const n = this._getOrReturnCtx(t);
      return Z(n, {
        code: j.invalid_type,
        expected: U.nan,
        received: n.parsedType
      }), ce;
    }
    return { status: "valid", value: t.data };
  }
}
yo.create = (e) => new yo({
  typeName: ee.ZodNaN,
  ...ae(e)
});
class rh extends ge {
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
class Qn extends ge {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? ce : o.status === "dirty" ? (r.dirty(), Wf(o.value)) : this._def.out._parseAsync({
          data: o.value,
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
      return s.status === "aborted" ? ce : s.status === "dirty" ? (r.dirty(), {
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
    return new Qn({
      in: t,
      out: r,
      typeName: ee.ZodPipeline
    });
  }
}
class bo extends ge {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return An(r) && (r.value = Object.freeze(r.value)), r;
  }
}
bo.create = (e, t) => new bo({
  innerType: e,
  typeName: ee.ZodReadonly,
  ...ae(t)
});
Me.lazycreate;
var ee;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(ee || (ee = {}));
const nh = Nt.create;
vr.create;
yo.create;
gr.create;
uo.create;
Fr.create;
fo.create;
Pn.create;
Dn.create;
ho.create;
dr.create;
qt.create;
po.create;
xt.create;
const sh = Me.create;
Me.strictCreate;
In.create;
Fo.create;
Mn.create;
kt.create;
Ln.create;
vo.create;
yr.create;
Mr.create;
Fn.create;
Vn.create;
er.create;
Un.create;
Vr.create;
At.create;
Wt.create;
br.create;
At.createWithPreprocess;
Qn.create;
function pe() {
  return pe = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, pe.apply(this, arguments);
}
function Vo(e, t = []) {
  let r = [];
  function n(o, a) {
    const i = /* @__PURE__ */ Zt(a), c = r.length;
    r = [
      ...r,
      a
    ];
    function l(d) {
      const { scope: h, children: g, ...y } = d, p = (h == null ? void 0 : h[e][c]) || i, b = hr(
        () => y,
        Object.values(y)
      );
      return /* @__PURE__ */ z(p.Provider, {
        value: b
      }, g);
    }
    function u(d, h) {
      const g = (h == null ? void 0 : h[e][c]) || i, y = tr(g);
      if (y)
        return y;
      if (a !== void 0)
        return a;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return l.displayName = o + "Provider", [
      l,
      u
    ];
  }
  const s = () => {
    const o = r.map((a) => /* @__PURE__ */ Zt(a));
    return function(i) {
      const c = (i == null ? void 0 : i[e]) || o;
      return hr(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: c
          }
        }),
        [
          i,
          c
        ]
      );
    };
  };
  return s.scopeName = e, [
    n,
    oh(s, ...t)
  ];
}
function oh(...e) {
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
    return function(o) {
      const a = n.reduce((i, { useScope: c, scopeName: l }) => {
        const d = c(o)[`__scope${l}`];
        return {
          ...i,
          ...d
        };
      }, {});
      return hr(
        () => ({
          [`__scope${t.scopeName}`]: a
        }),
        [
          a
        ]
      );
    };
  };
  return r.scopeName = t.scopeName, r;
}
function Je(e) {
  const t = ve(e);
  return ie(() => {
    t.current = e;
  }), hr(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
const xr = globalThis != null && globalThis.document ? mi : () => {
};
function ah(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function bc(...e) {
  return (t) => e.forEach(
    (r) => ah(r, t)
  );
}
function it(...e) {
  return pt(bc(...e), e);
}
const Jr = /* @__PURE__ */ ye((e, t) => {
  const { children: r, ...n } = e, s = Qt.toArray(r), o = s.find(ch);
  if (o) {
    const a = o.props.children, i = s.map((c) => c === o ? Qt.count(a) > 1 ? Qt.only(null) : /* @__PURE__ */ pr(a) ? a.props.children : null : c);
    return /* @__PURE__ */ z(xo, pe({}, n, {
      ref: t
    }), /* @__PURE__ */ pr(a) ? /* @__PURE__ */ Zn(a, void 0, i) : null);
  }
  return /* @__PURE__ */ z(xo, pe({}, n, {
    ref: t
  }), r);
});
Jr.displayName = "Slot";
const xo = /* @__PURE__ */ ye((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ pr(r) ? /* @__PURE__ */ Zn(r, {
    ...lh(n, r.props),
    ref: t ? bc(t, r.ref) : r.ref
  }) : Qt.count(r) > 1 ? Qt.only(null) : null;
});
xo.displayName = "SlotClone";
const ih = ({ children: e }) => /* @__PURE__ */ z(yt, null, e);
function ch(e) {
  return /* @__PURE__ */ pr(e) && e.type === ih;
}
function lh(e, t) {
  const r = {
    ...t
  };
  for (const n in t) {
    const s = e[n], o = t[n];
    /^on[A-Z]/.test(n) ? s && o ? r[n] = (...i) => {
      o(...i), s(...i);
    } : s && (r[n] = s) : n === "style" ? r[n] = {
      ...s,
      ...o
    } : n === "className" && (r[n] = [
      s,
      o
    ].filter(Boolean).join(" "));
  }
  return {
    ...e,
    ...r
  };
}
const uh = [
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
], qe = uh.reduce((e, t) => {
  const r = /* @__PURE__ */ ye((n, s) => {
    const { asChild: o, ...a } = n, i = o ? Jr : t;
    return ie(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ z(i, pe({}, a, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {});
function dh(e, t) {
  e && gi(
    () => e.dispatchEvent(t)
  );
}
const xc = "Avatar", [fh, mv] = Vo(xc), [hh, _c] = fh(xc), Uo = /* @__PURE__ */ ye((e, t) => {
  const { __scopeAvatar: r, ...n } = e, [s, o] = he("idle");
  return /* @__PURE__ */ z(hh, {
    scope: r,
    imageLoadingStatus: s,
    onImageLoadingStatusChange: o
  }, /* @__PURE__ */ z(qe.span, pe({}, n, {
    ref: t
  })));
}), ph = "AvatarImage", es = /* @__PURE__ */ ye((e, t) => {
  const { __scopeAvatar: r, src: n, onLoadingStatusChange: s = () => {
  }, ...o } = e, a = _c(ph, r), i = vh(n), c = Je((l) => {
    s(l), a.onImageLoadingStatusChange(l);
  });
  return xr(() => {
    i !== "idle" && c(i);
  }, [
    i,
    c
  ]), i === "loaded" ? /* @__PURE__ */ z(qe.img, pe({}, o, {
    ref: t,
    src: n
  })) : null;
}), mh = "AvatarFallback", wc = /* @__PURE__ */ ye((e, t) => {
  const { __scopeAvatar: r, delayMs: n, ...s } = e, o = _c(mh, r), [a, i] = he(n === void 0);
  return ie(() => {
    if (n !== void 0) {
      const c = window.setTimeout(
        () => i(!0),
        n
      );
      return () => window.clearTimeout(c);
    }
  }, [
    n
  ]), a && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ z(qe.span, pe({}, s, {
    ref: t
  })) : null;
});
function vh(e) {
  const [t, r] = he("idle");
  return xr(() => {
    if (!e) {
      r("error");
      return;
    }
    let n = !0;
    const s = new window.Image(), o = (a) => () => {
      n && r(a);
    };
    return r("loading"), s.onload = o("loaded"), s.onerror = o("error"), s.src = e, () => {
      n = !1;
    };
  }, [
    e
  ]), t;
}
const Sc = Uo, Ec = es, Cc = wc;
function Tc(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Tc(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function gh() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Tc(e)) && (n && (n += " "), n += t);
  return n;
}
const Qa = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, ei = gh, zo = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return ei(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: o } = t, a = Object.keys(s).map((l) => {
    const u = r == null ? void 0 : r[l], d = o == null ? void 0 : o[l];
    if (u === null)
      return null;
    const h = Qa(u) || Qa(d);
    return s[l][h];
  }), i = r && Object.entries(r).reduce((l, u) => {
    let [d, h] = u;
    return h === void 0 || (l[d] = h), l;
  }, {}), c = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((l, u) => {
    let { class: d, className: h, ...g } = u;
    return Object.entries(g).every((y) => {
      let [p, b] = y;
      return Array.isArray(b) ? b.includes({
        ...o,
        ...i
      }[p]) : {
        ...o,
        ...i
      }[p] === b;
    }) ? [
      ...l,
      d,
      h
    ] : l;
  }, []);
  return ei(e, a, c, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, yh = zo(
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
), at = F.forwardRef(({ className: e, variant: t, size: r, asChild: n = !1, ...s }, o) => {
  const a = n ? Jr : "button";
  return /* @__PURE__ */ f.jsx(a, { className: Oe(yh({ variant: t, size: r, className: e })), ref: o, ...s });
});
at.displayName = "Button";
const tt = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: Oe(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
tt.displayName = "Card";
const rr = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: Oe("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
rr.displayName = "CardHeader";
const Kr = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "h3",
  {
    ref: r,
    className: Oe(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
Kr.displayName = "CardTitle";
const Bo = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "p",
  {
    ref: r,
    className: Oe("text-sm text-muted-foreground", e),
    ...t
  }
));
Bo.displayName = "CardDescription";
const Pt = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx("div", { ref: r, className: Oe("p-6 pt-0", e), ...t }));
Pt.displayName = "CardContent";
const bh = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  "div",
  {
    ref: r,
    className: Oe("flex items-center p-6 pt-0", e),
    ...t
  }
));
bh.displayName = "CardFooter";
const Oc = ({ order: { course_name: e, order_status: t }, time: r }) => {
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
  return /* @__PURE__ */ f.jsxs(tt, { className: "relative bg-white rounded-none w-full p-0", children: [
    /* @__PURE__ */ f.jsxs(rr, { className: "p-3", children: [
      /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "การเรียน" }),
      /* @__PURE__ */ f.jsxs("p", { className: "text-lg font-normal", children: [
        "Class Schedule:",
        /* @__PURE__ */ f.jsx("span", { className: "text-orange-400 ml-1", children: n })
      ] })
    ] }),
    /* @__PURE__ */ f.jsx(Pt, { className: "p-3", children: /* @__PURE__ */ f.jsx(xh, { course_name: e, time: r || "00:00:00" }) })
  ] });
}, xh = ({ course_name: e, time: t }) => /* @__PURE__ */ f.jsxs(tt, { className: "border-orange-200 bg-orange-100/50 p-3 flex flex-col gap-3", children: [
  /* @__PURE__ */ f.jsx("div", { children: "LOGO" }),
  /* @__PURE__ */ f.jsx("div", { className: "text-center", children: "SVG IMAGE" }),
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "คลาส" }),
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-normal", children: e.split(" ")[1] }),
    /* @__PURE__ */ f.jsx("p", { className: "text-lg font-normal", children: "กำลังจะเริ่มใน" })
  ] }),
  /* @__PURE__ */ f.jsx("div", { className: "text-indigo-500 text-2xl text-center font-bold", children: _h(t) }),
  /* @__PURE__ */ f.jsxs(at, { className: "w-full text-white rounded-xl bg-orange-500 hover:bg-orange-400", onClick: () => window.open("https://meet.google.com/?pli=1"), children: [
    /* @__PURE__ */ f.jsx(Lf, { size: 20, className: "mr-3" }),
    "เข้าห้องเรียน"
  ] })
] }), _h = (e) => {
  const t = () => {
    const i = new Date(e), c = /* @__PURE__ */ new Date(), l = i.getTime() - c.getTime();
    return l > 0 ? l / 1e3 : 0;
  }, [r, n] = he(t());
  if (ie(() => {
    const i = setInterval(() => {
      const c = t();
      n(c);
    }, 1e3);
    return () => clearInterval(i);
  }, []), r === 0)
    return /* @__PURE__ */ f.jsx("div", { className: "text-red-400", children: "00:00:00" });
  const s = Math.floor(r / 3600).toString().padStart(2, "0"), o = Math.floor(r / 60 % 60).toString().padStart(2, "0"), a = Math.floor(r % 60).toString().padStart(2, "0");
  return /* @__PURE__ */ f.jsx("div", { children: `${s}:${o}:${a}` });
}, _r = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Sc,
  {
    ref: r,
    className: Oe(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
_r.displayName = Sc.displayName;
const Ur = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Ec,
  {
    ref: r,
    className: Oe("aspect-square h-full w-full", e),
    ...t
  }
));
Ur.displayName = Ec.displayName;
const zr = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Cc,
  {
    ref: r,
    className: Oe(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
zr.displayName = Cc.displayName;
const wh = zo(
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
function wr({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ f.jsx("div", { className: Oe(wh({ variant: t }), e), ...r });
}
function Ke(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
const Sh = F.useId || (() => {
});
let Eh = 0;
function Fs(e) {
  const [t, r] = F.useState(Sh());
  return xr(() => {
    e || r(
      (n) => n ?? String(Eh++)
    );
  }, [
    e
  ]), e || (t ? `radix-${t}` : "");
}
function Ch({ prop: e, defaultProp: t, onChange: r = () => {
} }) {
  const [n, s] = Th({
    defaultProp: t,
    onChange: r
  }), o = e !== void 0, a = o ? e : n, i = Je(r), c = pt((l) => {
    if (o) {
      const d = typeof l == "function" ? l(e) : l;
      d !== e && i(d);
    } else
      s(l);
  }, [
    o,
    e,
    s,
    i
  ]);
  return [
    a,
    c
  ];
}
function Th({ defaultProp: e, onChange: t }) {
  const r = he(e), [n] = r, s = ve(n), o = Je(t);
  return ie(() => {
    s.current !== n && (o(n), s.current = n);
  }, [
    n,
    s,
    o
  ]), r;
}
function Oh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Je(e);
  ie(() => {
    const n = (s) => {
      s.key === "Escape" && r(s);
    };
    return t.addEventListener("keydown", n), () => t.removeEventListener("keydown", n);
  }, [
    r,
    t
  ]);
}
const _o = "dismissableLayer.update", Rh = "dismissableLayer.pointerDownOutside", Nh = "dismissableLayer.focusOutside";
let ti;
const $h = /* @__PURE__ */ Zt({
  layers: /* @__PURE__ */ new Set(),
  layersWithOutsidePointerEventsDisabled: /* @__PURE__ */ new Set(),
  branches: /* @__PURE__ */ new Set()
}), jh = /* @__PURE__ */ ye((e, t) => {
  var r;
  const { disableOutsidePointerEvents: n = !1, onEscapeKeyDown: s, onPointerDownOutside: o, onFocusOutside: a, onInteractOutside: i, onDismiss: c, ...l } = e, u = tr($h), [d, h] = he(null), g = (r = d == null ? void 0 : d.ownerDocument) !== null && r !== void 0 ? r : globalThis == null ? void 0 : globalThis.document, [, y] = he({}), p = it(
    t,
    (q) => h(q)
  ), b = Array.from(u.layers), [O] = [
    ...u.layersWithOutsidePointerEventsDisabled
  ].slice(-1), w = b.indexOf(O), E = d ? b.indexOf(d) : -1, T = u.layersWithOutsidePointerEventsDisabled.size > 0, x = E >= w, V = kh((q) => {
    const B = q.target, X = [
      ...u.branches
    ].some(
      (me) => me.contains(B)
    );
    !x || X || (o == null || o(q), i == null || i(q), q.defaultPrevented || c == null || c());
  }, g), J = Ah((q) => {
    const B = q.target;
    [
      ...u.branches
    ].some(
      (me) => me.contains(B)
    ) || (a == null || a(q), i == null || i(q), q.defaultPrevented || c == null || c());
  }, g);
  return Oh((q) => {
    E === u.layers.size - 1 && (s == null || s(q), !q.defaultPrevented && c && (q.preventDefault(), c()));
  }, g), ie(() => {
    if (d)
      return n && (u.layersWithOutsidePointerEventsDisabled.size === 0 && (ti = g.body.style.pointerEvents, g.body.style.pointerEvents = "none"), u.layersWithOutsidePointerEventsDisabled.add(d)), u.layers.add(d), ri(), () => {
        n && u.layersWithOutsidePointerEventsDisabled.size === 1 && (g.body.style.pointerEvents = ti);
      };
  }, [
    d,
    g,
    n,
    u
  ]), ie(() => () => {
    d && (u.layers.delete(d), u.layersWithOutsidePointerEventsDisabled.delete(d), ri());
  }, [
    d,
    u
  ]), ie(() => {
    const q = () => y({});
    return document.addEventListener(_o, q), () => document.removeEventListener(_o, q);
  }, []), /* @__PURE__ */ z(qe.div, pe({}, l, {
    ref: p,
    style: {
      pointerEvents: T ? x ? "auto" : "none" : void 0,
      ...e.style
    },
    onFocusCapture: Ke(e.onFocusCapture, J.onFocusCapture),
    onBlurCapture: Ke(e.onBlurCapture, J.onBlurCapture),
    onPointerDownCapture: Ke(e.onPointerDownCapture, V.onPointerDownCapture)
  }));
});
function kh(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Je(e), n = ve(!1), s = ve(() => {
  });
  return ie(() => {
    const o = (i) => {
      if (i.target && !n.current) {
        let l = function() {
          Rc(Rh, r, c, {
            discrete: !0
          });
        };
        const c = {
          originalEvent: i
        };
        i.pointerType === "touch" ? (t.removeEventListener("click", s.current), s.current = l, t.addEventListener("click", s.current, {
          once: !0
        })) : l();
      } else
        t.removeEventListener("click", s.current);
      n.current = !1;
    }, a = window.setTimeout(() => {
      t.addEventListener("pointerdown", o);
    }, 0);
    return () => {
      window.clearTimeout(a), t.removeEventListener("pointerdown", o), t.removeEventListener("click", s.current);
    };
  }, [
    t,
    r
  ]), {
    // ensures we check React component tree (not just DOM tree)
    onPointerDownCapture: () => n.current = !0
  };
}
function Ah(e, t = globalThis == null ? void 0 : globalThis.document) {
  const r = Je(e), n = ve(!1);
  return ie(() => {
    const s = (o) => {
      o.target && !n.current && Rc(Nh, r, {
        originalEvent: o
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
function ri() {
  const e = new CustomEvent(_o);
  document.dispatchEvent(e);
}
function Rc(e, t, r, { discrete: n }) {
  const s = r.originalEvent.target, o = new CustomEvent(e, {
    bubbles: !1,
    cancelable: !0,
    detail: r
  });
  t && s.addEventListener(e, t, {
    once: !0
  }), n ? dh(s, o) : s.dispatchEvent(o);
}
const Vs = "focusScope.autoFocusOnMount", Us = "focusScope.autoFocusOnUnmount", ni = {
  bubbles: !1,
  cancelable: !0
}, Ph = /* @__PURE__ */ ye((e, t) => {
  const { loop: r = !1, trapped: n = !1, onMountAutoFocus: s, onUnmountAutoFocus: o, ...a } = e, [i, c] = he(null), l = Je(s), u = Je(o), d = ve(null), h = it(
    t,
    (p) => c(p)
  ), g = ve({
    paused: !1,
    pause() {
      this.paused = !0;
    },
    resume() {
      this.paused = !1;
    }
  }).current;
  ie(() => {
    if (n) {
      let p = function(E) {
        if (g.paused || !i)
          return;
        const T = E.target;
        i.contains(T) ? d.current = T : Ut(d.current, {
          select: !0
        });
      }, b = function(E) {
        if (g.paused || !i)
          return;
        const T = E.relatedTarget;
        T !== null && (i.contains(T) || Ut(d.current, {
          select: !0
        }));
      }, O = function(E) {
        if (document.activeElement === document.body)
          for (const x of E)
            x.removedNodes.length > 0 && Ut(i);
      };
      document.addEventListener("focusin", p), document.addEventListener("focusout", b);
      const w = new MutationObserver(O);
      return i && w.observe(i, {
        childList: !0,
        subtree: !0
      }), () => {
        document.removeEventListener("focusin", p), document.removeEventListener("focusout", b), w.disconnect();
      };
    }
  }, [
    n,
    i,
    g.paused
  ]), ie(() => {
    if (i) {
      oi.add(g);
      const p = document.activeElement;
      if (!i.contains(p)) {
        const O = new CustomEvent(Vs, ni);
        i.addEventListener(Vs, l), i.dispatchEvent(O), O.defaultPrevented || (Dh(Vh(Nc(i)), {
          select: !0
        }), document.activeElement === p && Ut(i));
      }
      return () => {
        i.removeEventListener(Vs, l), setTimeout(() => {
          const O = new CustomEvent(Us, ni);
          i.addEventListener(Us, u), i.dispatchEvent(O), O.defaultPrevented || Ut(p ?? document.body, {
            select: !0
          }), i.removeEventListener(Us, u), oi.remove(g);
        }, 0);
      };
    }
  }, [
    i,
    l,
    u,
    g
  ]);
  const y = pt((p) => {
    if (!r && !n || g.paused)
      return;
    const b = p.key === "Tab" && !p.altKey && !p.ctrlKey && !p.metaKey, O = document.activeElement;
    if (b && O) {
      const w = p.currentTarget, [E, T] = Ih(w);
      E && T ? !p.shiftKey && O === T ? (p.preventDefault(), r && Ut(E, {
        select: !0
      })) : p.shiftKey && O === E && (p.preventDefault(), r && Ut(T, {
        select: !0
      })) : O === w && p.preventDefault();
    }
  }, [
    r,
    n,
    g.paused
  ]);
  return /* @__PURE__ */ z(qe.div, pe({
    tabIndex: -1
  }, a, {
    ref: h,
    onKeyDown: y
  }));
});
function Dh(e, { select: t = !1 } = {}) {
  const r = document.activeElement;
  for (const n of e)
    if (Ut(n, {
      select: t
    }), document.activeElement !== r)
      return;
}
function Ih(e) {
  const t = Nc(e), r = si(t, e), n = si(t.reverse(), e);
  return [
    r,
    n
  ];
}
function Nc(e) {
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
function si(e, t) {
  for (const r of e)
    if (!Mh(r, {
      upTo: t
    }))
      return r;
}
function Mh(e, { upTo: t }) {
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
function Lh(e) {
  return e instanceof HTMLInputElement && "select" in e;
}
function Ut(e, { select: t = !1 } = {}) {
  if (e && e.focus) {
    const r = document.activeElement;
    e.focus({
      preventScroll: !0
    }), e !== r && Lh(e) && t && e.select();
  }
}
const oi = Fh();
function Fh() {
  let e = [];
  return {
    add(t) {
      const r = e[0];
      t !== r && (r == null || r.pause()), e = ai(e, t), e.unshift(t);
    },
    remove(t) {
      var r;
      e = ai(e, t), (r = e[0]) === null || r === void 0 || r.resume();
    }
  };
}
function ai(e, t) {
  const r = [
    ...e
  ], n = r.indexOf(t);
  return n !== -1 && r.splice(n, 1), r;
}
function Vh(e) {
  return e.filter(
    (t) => t.tagName !== "A"
  );
}
const Uh = /* @__PURE__ */ ye((e, t) => {
  var r;
  const { container: n = globalThis == null || (r = globalThis.document) === null || r === void 0 ? void 0 : r.body, ...s } = e;
  return n ? /* @__PURE__ */ Il.createPortal(/* @__PURE__ */ z(qe.div, pe({}, s, {
    ref: t
  })), n) : null;
});
function zh(e, t) {
  return vi((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const Ht = (e) => {
  const { present: t, children: r } = e, n = Bh(t), s = typeof r == "function" ? r({
    present: n.isPresent
  }) : Qt.only(r), o = it(n.ref, s.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ Zn(s, {
    ref: o
  }) : null;
};
Ht.displayName = "Presence";
function Bh(e) {
  const [t, r] = he(), n = ve({}), s = ve(e), o = ve("none"), a = e ? "mounted" : "unmounted", [i, c] = zh(a, {
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
  return ie(() => {
    const l = cn(n.current);
    o.current = i === "mounted" ? l : "none";
  }, [
    i
  ]), xr(() => {
    const l = n.current, u = s.current;
    if (u !== e) {
      const h = o.current, g = cn(l);
      e ? c("MOUNT") : g === "none" || (l == null ? void 0 : l.display) === "none" ? c("UNMOUNT") : c(u && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    c
  ]), xr(() => {
    if (t) {
      const l = (d) => {
        const g = cn(n.current).includes(d.animationName);
        d.target === t && g && gi(
          () => c("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (o.current = cn(n.current));
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
    ].includes(i),
    ref: pt((l) => {
      l && (n.current = getComputedStyle(l)), r(l);
    }, [])
  };
}
function cn(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
let zs = 0;
function Wh() {
  ie(() => {
    var e, t;
    const r = document.querySelectorAll("[data-radix-focus-guard]");
    return document.body.insertAdjacentElement("afterbegin", (e = r[0]) !== null && e !== void 0 ? e : ii()), document.body.insertAdjacentElement("beforeend", (t = r[1]) !== null && t !== void 0 ? t : ii()), zs++, () => {
      zs === 1 && document.querySelectorAll("[data-radix-focus-guard]").forEach(
        (n) => n.remove()
      ), zs--;
    };
  }, []);
}
function ii() {
  const e = document.createElement("span");
  return e.setAttribute("data-radix-focus-guard", ""), e.tabIndex = 0, e.style.cssText = "outline: none; opacity: 0; position: fixed; pointer-events: none", e;
}
var ht = function() {
  return ht = Object.assign || function(t) {
    for (var r, n = 1, s = arguments.length; n < s; n++) {
      r = arguments[n];
      for (var o in r)
        Object.prototype.hasOwnProperty.call(r, o) && (t[o] = r[o]);
    }
    return t;
  }, ht.apply(this, arguments);
};
function $c(e, t) {
  var r = {};
  for (var n in e)
    Object.prototype.hasOwnProperty.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && typeof Object.getOwnPropertySymbols == "function")
    for (var s = 0, n = Object.getOwnPropertySymbols(e); s < n.length; s++)
      t.indexOf(n[s]) < 0 && Object.prototype.propertyIsEnumerable.call(e, n[s]) && (r[n[s]] = e[n[s]]);
  return r;
}
function Zh(e, t, r) {
  if (r || arguments.length === 2)
    for (var n = 0, s = t.length, o; n < s; n++)
      (o || !(n in t)) && (o || (o = Array.prototype.slice.call(t, 0, n)), o[n] = t[n]);
  return e.concat(o || Array.prototype.slice.call(t));
}
var wn = "right-scroll-bar-position", Sn = "width-before-scroll-bar", qh = "with-scroll-bars-hidden", Hh = "--removed-body-scroll-bar-size";
function Bs(e, t) {
  return typeof e == "function" ? e(t) : e && (e.current = t), e;
}
function Yh(e, t) {
  var r = he(function() {
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
var ci = /* @__PURE__ */ new WeakMap();
function Gh(e, t) {
  var r = Yh(t || null, function(n) {
    return e.forEach(function(s) {
      return Bs(s, n);
    });
  });
  return F.useLayoutEffect(function() {
    var n = ci.get(r);
    if (n) {
      var s = new Set(n), o = new Set(e), a = r.current;
      s.forEach(function(i) {
        o.has(i) || Bs(i, null);
      }), o.forEach(function(i) {
        s.has(i) || Bs(i, a);
      });
    }
    ci.set(r, e);
  }, [e]), r;
}
function Jh(e) {
  return e;
}
function Kh(e, t) {
  t === void 0 && (t = Jh);
  var r = [], n = !1, s = {
    read: function() {
      if (n)
        throw new Error("Sidecar: could not `read` from an `assigned` medium. `read` could be used only with `useMedium`.");
      return r.length ? r[r.length - 1] : e;
    },
    useMedium: function(o) {
      var a = t(o, n);
      return r.push(a), function() {
        r = r.filter(function(i) {
          return i !== a;
        });
      };
    },
    assignSyncMedium: function(o) {
      for (n = !0; r.length; ) {
        var a = r;
        r = [], a.forEach(o);
      }
      r = {
        push: function(i) {
          return o(i);
        },
        filter: function() {
          return r;
        }
      };
    },
    assignMedium: function(o) {
      n = !0;
      var a = [];
      if (r.length) {
        var i = r;
        r = [], i.forEach(o), a = r;
      }
      var c = function() {
        var u = a;
        a = [], u.forEach(o);
      }, l = function() {
        return Promise.resolve().then(c);
      };
      l(), r = {
        push: function(u) {
          a.push(u), l();
        },
        filter: function(u) {
          return a = a.filter(u), r;
        }
      };
    }
  };
  return s;
}
function Xh(e) {
  e === void 0 && (e = {});
  var t = Kh(null);
  return t.options = ht({ async: !0, ssr: !1 }, e), t;
}
var jc = function(e) {
  var t = e.sideCar, r = $c(e, ["sideCar"]);
  if (!t)
    throw new Error("Sidecar: please provide `sideCar` property to import the right car");
  var n = t.read();
  if (!n)
    throw new Error("Sidecar medium not found");
  return F.createElement(n, ht({}, r));
};
jc.isSideCarExport = !0;
function Qh(e, t) {
  return e.useMedium(t), jc;
}
var kc = Xh(), Ws = function() {
}, ts = F.forwardRef(function(e, t) {
  var r = F.useRef(null), n = F.useState({
    onScrollCapture: Ws,
    onWheelCapture: Ws,
    onTouchMoveCapture: Ws
  }), s = n[0], o = n[1], a = e.forwardProps, i = e.children, c = e.className, l = e.removeScrollBar, u = e.enabled, d = e.shards, h = e.sideCar, g = e.noIsolation, y = e.inert, p = e.allowPinchZoom, b = e.as, O = b === void 0 ? "div" : b, w = $c(e, ["forwardProps", "children", "className", "removeScrollBar", "enabled", "shards", "sideCar", "noIsolation", "inert", "allowPinchZoom", "as"]), E = h, T = Gh([r, t]), x = ht(ht({}, w), s);
  return F.createElement(
    F.Fragment,
    null,
    u && F.createElement(E, { sideCar: kc, removeScrollBar: l, shards: d, noIsolation: g, inert: y, setCallbacks: o, allowPinchZoom: !!p, lockRef: r }),
    a ? F.cloneElement(F.Children.only(i), ht(ht({}, x), { ref: T })) : F.createElement(O, ht({}, x, { className: c, ref: T }), i)
  );
});
ts.defaultProps = {
  enabled: !0,
  removeScrollBar: !0,
  inert: !1
};
ts.classNames = {
  fullWidth: Sn,
  zeroRight: wn
};
var ep = function() {
  if (typeof __webpack_nonce__ < "u")
    return __webpack_nonce__;
};
function tp() {
  if (!document)
    return null;
  var e = document.createElement("style");
  e.type = "text/css";
  var t = ep();
  return t && e.setAttribute("nonce", t), e;
}
function rp(e, t) {
  e.styleSheet ? e.styleSheet.cssText = t : e.appendChild(document.createTextNode(t));
}
function np(e) {
  var t = document.head || document.getElementsByTagName("head")[0];
  t.appendChild(e);
}
var sp = function() {
  var e = 0, t = null;
  return {
    add: function(r) {
      e == 0 && (t = tp()) && (rp(t, r), np(t)), e++;
    },
    remove: function() {
      e--, !e && t && (t.parentNode && t.parentNode.removeChild(t), t = null);
    }
  };
}, op = function() {
  var e = sp();
  return function(t, r) {
    F.useEffect(function() {
      return e.add(t), function() {
        e.remove();
      };
    }, [t && r]);
  };
}, Ac = function() {
  var e = op(), t = function(r) {
    var n = r.styles, s = r.dynamic;
    return e(n, s), null;
  };
  return t;
}, ap = {
  left: 0,
  top: 0,
  right: 0,
  gap: 0
}, Zs = function(e) {
  return parseInt(e || "", 10) || 0;
}, ip = function(e) {
  var t = window.getComputedStyle(document.body), r = t[e === "padding" ? "paddingLeft" : "marginLeft"], n = t[e === "padding" ? "paddingTop" : "marginTop"], s = t[e === "padding" ? "paddingRight" : "marginRight"];
  return [Zs(r), Zs(n), Zs(s)];
}, cp = function(e) {
  if (e === void 0 && (e = "margin"), typeof window > "u")
    return ap;
  var t = ip(e), r = document.documentElement.clientWidth, n = window.innerWidth;
  return {
    left: t[0],
    top: t[1],
    right: t[2],
    gap: Math.max(0, n - r + t[2] - t[0])
  };
}, lp = Ac(), up = function(e, t, r, n) {
  var s = e.left, o = e.top, a = e.right, i = e.gap;
  return r === void 0 && (r = "margin"), `
  .`.concat(qh, ` {
   overflow: hidden `).concat(n, `;
   padding-right: `).concat(i, "px ").concat(n, `;
  }
  body {
    overflow: hidden `).concat(n, `;
    overscroll-behavior: contain;
    `).concat([
    t && "position: relative ".concat(n, ";"),
    r === "margin" && `
    padding-left: `.concat(s, `px;
    padding-top: `).concat(o, `px;
    padding-right: `).concat(a, `px;
    margin-left:0;
    margin-top:0;
    margin-right: `).concat(i, "px ").concat(n, `;
    `),
    r === "padding" && "padding-right: ".concat(i, "px ").concat(n, ";")
  ].filter(Boolean).join(""), `
  }
  
  .`).concat(wn, ` {
    right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(Sn, ` {
    margin-right: `).concat(i, "px ").concat(n, `;
  }
  
  .`).concat(wn, " .").concat(wn, ` {
    right: 0 `).concat(n, `;
  }
  
  .`).concat(Sn, " .").concat(Sn, ` {
    margin-right: 0 `).concat(n, `;
  }
  
  body {
    `).concat(Hh, ": ").concat(i, `px;
  }
`);
}, dp = function(e) {
  var t = e.noRelative, r = e.noImportant, n = e.gapMode, s = n === void 0 ? "margin" : n, o = F.useMemo(function() {
    return cp(s);
  }, [s]);
  return F.createElement(lp, { styles: up(o, !t, s, r ? "" : "!important") });
}, wo = !1;
if (typeof window < "u")
  try {
    var ln = Object.defineProperty({}, "passive", {
      get: function() {
        return wo = !0, !0;
      }
    });
    window.addEventListener("test", ln, ln), window.removeEventListener("test", ln, ln);
  } catch {
    wo = !1;
  }
var ar = wo ? { passive: !1 } : !1, fp = function(e) {
  return e.tagName === "TEXTAREA";
}, Pc = function(e, t) {
  var r = window.getComputedStyle(e);
  return (
    // not-not-scrollable
    r[t] !== "hidden" && // contains scroll inside self
    !(r.overflowY === r.overflowX && !fp(e) && r[t] === "visible")
  );
}, hp = function(e) {
  return Pc(e, "overflowY");
}, pp = function(e) {
  return Pc(e, "overflowX");
}, li = function(e, t) {
  var r = t;
  do {
    typeof ShadowRoot < "u" && r instanceof ShadowRoot && (r = r.host);
    var n = Dc(e, r);
    if (n) {
      var s = Ic(e, r), o = s[1], a = s[2];
      if (o > a)
        return !0;
    }
    r = r.parentNode;
  } while (r && r !== document.body);
  return !1;
}, mp = function(e) {
  var t = e.scrollTop, r = e.scrollHeight, n = e.clientHeight;
  return [
    t,
    r,
    n
  ];
}, vp = function(e) {
  var t = e.scrollLeft, r = e.scrollWidth, n = e.clientWidth;
  return [
    t,
    r,
    n
  ];
}, Dc = function(e, t) {
  return e === "v" ? hp(t) : pp(t);
}, Ic = function(e, t) {
  return e === "v" ? mp(t) : vp(t);
}, gp = function(e, t) {
  return e === "h" && t === "rtl" ? -1 : 1;
}, yp = function(e, t, r, n, s) {
  var o = gp(e, window.getComputedStyle(t).direction), a = o * n, i = r.target, c = t.contains(i), l = !1, u = a > 0, d = 0, h = 0;
  do {
    var g = Ic(e, i), y = g[0], p = g[1], b = g[2], O = p - b - o * y;
    (y || O) && Dc(e, i) && (d += O, h += y), i = i.parentNode;
  } while (
    // portaled content
    !c && i !== document.body || // self content
    c && (t.contains(i) || t === i)
  );
  return (u && (s && d === 0 || !s && a > d) || !u && (s && h === 0 || !s && -a > h)) && (l = !0), l;
}, un = function(e) {
  return "changedTouches" in e ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0];
}, ui = function(e) {
  return [e.deltaX, e.deltaY];
}, di = function(e) {
  return e && "current" in e ? e.current : e;
}, bp = function(e, t) {
  return e[0] === t[0] && e[1] === t[1];
}, xp = function(e) {
  return `
  .block-interactivity-`.concat(e, ` {pointer-events: none;}
  .allow-interactivity-`).concat(e, ` {pointer-events: all;}
`);
}, _p = 0, ir = [];
function wp(e) {
  var t = F.useRef([]), r = F.useRef([0, 0]), n = F.useRef(), s = F.useState(_p++)[0], o = F.useState(function() {
    return Ac();
  })[0], a = F.useRef(e);
  F.useEffect(function() {
    a.current = e;
  }, [e]), F.useEffect(function() {
    if (e.inert) {
      document.body.classList.add("block-interactivity-".concat(s));
      var p = Zh([e.lockRef.current], (e.shards || []).map(di), !0).filter(Boolean);
      return p.forEach(function(b) {
        return b.classList.add("allow-interactivity-".concat(s));
      }), function() {
        document.body.classList.remove("block-interactivity-".concat(s)), p.forEach(function(b) {
          return b.classList.remove("allow-interactivity-".concat(s));
        });
      };
    }
  }, [e.inert, e.lockRef.current, e.shards]);
  var i = F.useCallback(function(p, b) {
    if ("touches" in p && p.touches.length === 2)
      return !a.current.allowPinchZoom;
    var O = un(p), w = r.current, E = "deltaX" in p ? p.deltaX : w[0] - O[0], T = "deltaY" in p ? p.deltaY : w[1] - O[1], x, V = p.target, J = Math.abs(E) > Math.abs(T) ? "h" : "v";
    if ("touches" in p && J === "h" && V.type === "range")
      return !1;
    var q = li(J, V);
    if (!q)
      return !0;
    if (q ? x = J : (x = J === "v" ? "h" : "v", q = li(J, V)), !q)
      return !1;
    if (!n.current && "changedTouches" in p && (E || T) && (n.current = x), !x)
      return !0;
    var B = n.current || x;
    return yp(B, b, p, B === "h" ? E : T, !0);
  }, []), c = F.useCallback(function(p) {
    var b = p;
    if (!(!ir.length || ir[ir.length - 1] !== o)) {
      var O = "deltaY" in b ? ui(b) : un(b), w = t.current.filter(function(x) {
        return x.name === b.type && x.target === b.target && bp(x.delta, O);
      })[0];
      if (w && w.should) {
        b.cancelable && b.preventDefault();
        return;
      }
      if (!w) {
        var E = (a.current.shards || []).map(di).filter(Boolean).filter(function(x) {
          return x.contains(b.target);
        }), T = E.length > 0 ? i(b, E[0]) : !a.current.noIsolation;
        T && b.cancelable && b.preventDefault();
      }
    }
  }, []), l = F.useCallback(function(p, b, O, w) {
    var E = { name: p, delta: b, target: O, should: w };
    t.current.push(E), setTimeout(function() {
      t.current = t.current.filter(function(T) {
        return T !== E;
      });
    }, 1);
  }, []), u = F.useCallback(function(p) {
    r.current = un(p), n.current = void 0;
  }, []), d = F.useCallback(function(p) {
    l(p.type, ui(p), p.target, i(p, e.lockRef.current));
  }, []), h = F.useCallback(function(p) {
    l(p.type, un(p), p.target, i(p, e.lockRef.current));
  }, []);
  F.useEffect(function() {
    return ir.push(o), e.setCallbacks({
      onScrollCapture: d,
      onWheelCapture: d,
      onTouchMoveCapture: h
    }), document.addEventListener("wheel", c, ar), document.addEventListener("touchmove", c, ar), document.addEventListener("touchstart", u, ar), function() {
      ir = ir.filter(function(p) {
        return p !== o;
      }), document.removeEventListener("wheel", c, ar), document.removeEventListener("touchmove", c, ar), document.removeEventListener("touchstart", u, ar);
    };
  }, []);
  var g = e.removeScrollBar, y = e.inert;
  return F.createElement(
    F.Fragment,
    null,
    y ? F.createElement(o, { styles: xp(s) }) : null,
    g ? F.createElement(dp, { gapMode: "margin" }) : null
  );
}
const Sp = Qh(kc, wp);
var Mc = F.forwardRef(function(e, t) {
  return F.createElement(ts, ht({}, e, { ref: t, sideCar: Sp }));
});
Mc.classNames = ts.classNames;
const Ep = Mc;
var Cp = function(e) {
  if (typeof document > "u")
    return null;
  var t = Array.isArray(e) ? e[0] : e;
  return t.ownerDocument.body;
}, cr = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), fn = {}, qs = 0, Lc = function(e) {
  return e && (e.host || Lc(e.parentNode));
}, Tp = function(e, t) {
  return t.map(function(r) {
    if (e.contains(r))
      return r;
    var n = Lc(r);
    return n && e.contains(n) ? n : (console.error("aria-hidden", r, "in not contained inside", e, ". Doing nothing"), null);
  }).filter(function(r) {
    return !!r;
  });
}, Op = function(e, t, r, n) {
  var s = Tp(t, Array.isArray(e) ? e : [e]);
  fn[r] || (fn[r] = /* @__PURE__ */ new WeakMap());
  var o = fn[r], a = [], i = /* @__PURE__ */ new Set(), c = new Set(s), l = function(d) {
    !d || i.has(d) || (i.add(d), l(d.parentNode));
  };
  s.forEach(l);
  var u = function(d) {
    !d || c.has(d) || Array.prototype.forEach.call(d.children, function(h) {
      if (i.has(h))
        u(h);
      else {
        var g = h.getAttribute(n), y = g !== null && g !== "false", p = (cr.get(h) || 0) + 1, b = (o.get(h) || 0) + 1;
        cr.set(h, p), o.set(h, b), a.push(h), p === 1 && y && dn.set(h, !0), b === 1 && h.setAttribute(r, "true"), y || h.setAttribute(n, "true");
      }
    });
  };
  return u(t), i.clear(), qs++, function() {
    a.forEach(function(d) {
      var h = cr.get(d) - 1, g = o.get(d) - 1;
      cr.set(d, h), o.set(d, g), h || (dn.has(d) || d.removeAttribute(n), dn.delete(d)), g || d.removeAttribute(r);
    }), qs--, qs || (cr = /* @__PURE__ */ new WeakMap(), cr = /* @__PURE__ */ new WeakMap(), dn = /* @__PURE__ */ new WeakMap(), fn = {});
  };
}, Rp = function(e, t, r) {
  r === void 0 && (r = "data-aria-hidden");
  var n = Array.from(Array.isArray(e) ? e : [e]), s = t || Cp(e);
  return s ? (n.push.apply(n, Array.from(s.querySelectorAll("[aria-live]"))), Op(n, s, r, "aria-hidden")) : function() {
    return null;
  };
};
const Fc = "Dialog", [Vc, vv] = Vo(Fc), [Np, dt] = Vc(Fc), $p = (e) => {
  const { __scopeDialog: t, children: r, open: n, defaultOpen: s, onOpenChange: o, modal: a = !0 } = e, i = ve(null), c = ve(null), [l = !1, u] = Ch({
    prop: n,
    defaultProp: s,
    onChange: o
  });
  return /* @__PURE__ */ z(Np, {
    scope: t,
    triggerRef: i,
    contentRef: c,
    contentId: Fs(),
    titleId: Fs(),
    descriptionId: Fs(),
    open: l,
    onOpenChange: u,
    onOpenToggle: pt(
      () => u(
        (d) => !d
      ),
      [
        u
      ]
    ),
    modal: a
  }, r);
}, jp = "DialogTrigger", kp = /* @__PURE__ */ ye((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = dt(jp, r), o = it(t, s.triggerRef);
  return /* @__PURE__ */ z(qe.button, pe({
    type: "button",
    "aria-haspopup": "dialog",
    "aria-expanded": s.open,
    "aria-controls": s.contentId,
    "data-state": Wo(s.open)
  }, n, {
    ref: o,
    onClick: Ke(e.onClick, s.onOpenToggle)
  }));
}), Uc = "DialogPortal", [Ap, zc] = Vc(Uc, {
  forceMount: void 0
}), Pp = (e) => {
  const { __scopeDialog: t, forceMount: r, children: n, container: s } = e, o = dt(Uc, t);
  return /* @__PURE__ */ z(Ap, {
    scope: t,
    forceMount: r
  }, Qt.map(
    n,
    (a) => /* @__PURE__ */ z(Ht, {
      present: r || o.open
    }, /* @__PURE__ */ z(Uh, {
      asChild: !0,
      container: s
    }, a))
  ));
}, So = "DialogOverlay", Dp = /* @__PURE__ */ ye((e, t) => {
  const r = zc(So, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, o = dt(So, e.__scopeDialog);
  return o.modal ? /* @__PURE__ */ z(Ht, {
    present: n || o.open
  }, /* @__PURE__ */ z(Ip, pe({}, s, {
    ref: t
  }))) : null;
}), Ip = /* @__PURE__ */ ye((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = dt(So, r);
  return (
    // Make sure `Content` is scrollable even when it doesn't live inside `RemoveScroll`
    // ie. when `Overlay` and `Content` are siblings
    /* @__PURE__ */ z(Ep, {
      as: Jr,
      allowPinchZoom: !0,
      shards: [
        s.contentRef
      ]
    }, /* @__PURE__ */ z(qe.div, pe({
      "data-state": Wo(s.open)
    }, n, {
      ref: t,
      style: {
        pointerEvents: "auto",
        ...n.style
      }
    })))
  );
}), Br = "DialogContent", Mp = /* @__PURE__ */ ye((e, t) => {
  const r = zc(Br, e.__scopeDialog), { forceMount: n = r.forceMount, ...s } = e, o = dt(Br, e.__scopeDialog);
  return /* @__PURE__ */ z(Ht, {
    present: n || o.open
  }, o.modal ? /* @__PURE__ */ z(Lp, pe({}, s, {
    ref: t
  })) : /* @__PURE__ */ z(Fp, pe({}, s, {
    ref: t
  })));
}), Lp = /* @__PURE__ */ ye((e, t) => {
  const r = dt(Br, e.__scopeDialog), n = ve(null), s = it(t, r.contentRef, n);
  return ie(() => {
    const o = n.current;
    if (o)
      return Rp(o);
  }, []), /* @__PURE__ */ z(Bc, pe({}, e, {
    ref: s,
    trapFocus: r.open,
    disableOutsidePointerEvents: !0,
    onCloseAutoFocus: Ke(e.onCloseAutoFocus, (o) => {
      var a;
      o.preventDefault(), (a = r.triggerRef.current) === null || a === void 0 || a.focus();
    }),
    onPointerDownOutside: Ke(e.onPointerDownOutside, (o) => {
      const a = o.detail.originalEvent, i = a.button === 0 && a.ctrlKey === !0;
      (a.button === 2 || i) && o.preventDefault();
    }),
    onFocusOutside: Ke(
      e.onFocusOutside,
      (o) => o.preventDefault()
    )
  }));
}), Fp = /* @__PURE__ */ ye((e, t) => {
  const r = dt(Br, e.__scopeDialog), n = ve(!1), s = ve(!1);
  return /* @__PURE__ */ z(Bc, pe({}, e, {
    ref: t,
    trapFocus: !1,
    disableOutsidePointerEvents: !1,
    onCloseAutoFocus: (o) => {
      var a;
      if ((a = e.onCloseAutoFocus) === null || a === void 0 || a.call(e, o), !o.defaultPrevented) {
        var i;
        n.current || (i = r.triggerRef.current) === null || i === void 0 || i.focus(), o.preventDefault();
      }
      n.current = !1, s.current = !1;
    },
    onInteractOutside: (o) => {
      var a, i;
      (a = e.onInteractOutside) === null || a === void 0 || a.call(e, o), o.defaultPrevented || (n.current = !0, o.detail.originalEvent.type === "pointerdown" && (s.current = !0));
      const c = o.target;
      ((i = r.triggerRef.current) === null || i === void 0 ? void 0 : i.contains(c)) && o.preventDefault(), o.detail.originalEvent.type === "focusin" && s.current && o.preventDefault();
    }
  }));
}), Bc = /* @__PURE__ */ ye((e, t) => {
  const { __scopeDialog: r, trapFocus: n, onOpenAutoFocus: s, onCloseAutoFocus: o, ...a } = e, i = dt(Br, r), c = ve(null), l = it(t, c);
  return Wh(), /* @__PURE__ */ z(yt, null, /* @__PURE__ */ z(Ph, {
    asChild: !0,
    loop: !0,
    trapped: n,
    onMountAutoFocus: s,
    onUnmountAutoFocus: o
  }, /* @__PURE__ */ z(jh, pe({
    role: "dialog",
    id: i.contentId,
    "aria-describedby": i.descriptionId,
    "aria-labelledby": i.titleId,
    "data-state": Wo(i.open)
  }, a, {
    ref: l,
    onDismiss: () => i.onOpenChange(!1)
  }))), !1);
}), Vp = "DialogTitle", Up = /* @__PURE__ */ ye((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = dt(Vp, r);
  return /* @__PURE__ */ z(qe.h2, pe({
    id: s.titleId
  }, n, {
    ref: t
  }));
}), zp = "DialogDescription", Bp = /* @__PURE__ */ ye((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = dt(zp, r);
  return /* @__PURE__ */ z(qe.p, pe({
    id: s.descriptionId
  }, n, {
    ref: t
  }));
}), Wp = "DialogClose", Zp = /* @__PURE__ */ ye((e, t) => {
  const { __scopeDialog: r, ...n } = e, s = dt(Wp, r);
  return /* @__PURE__ */ z(qe.button, pe({
    type: "button"
  }, n, {
    ref: t,
    onClick: Ke(
      e.onClick,
      () => s.onOpenChange(!1)
    )
  }));
});
function Wo(e) {
  return e ? "open" : "closed";
}
const qp = $p, Hp = kp, Yp = Pp, Wc = Dp, Zc = Mp, qc = Up, Hc = Bp, Yc = Zp;
function Gp(e, t) {
  if (e == null)
    return {};
  var r = {}, n = Object.keys(e), s, o;
  for (o = 0; o < n.length; o++)
    s = n[o], !(t.indexOf(s) >= 0) && (r[s] = e[s]);
  return r;
}
var Jp = ["color"], Kp = /* @__PURE__ */ ye(function(e, t) {
  var r = e.color, n = r === void 0 ? "currentColor" : r, s = Gp(e, Jp);
  return z("svg", Object.assign({
    width: "15",
    height: "15",
    viewBox: "0 0 15 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg"
  }, s, {
    ref: t
  }), z("path", {
    d: "M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z",
    fill: n,
    fillRule: "evenodd",
    clipRule: "evenodd"
  }));
});
const rs = qp, ns = Hp, Xp = Yp, Wr = Yc, Gc = F.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
    Wc,
    {
      ref: r,
      className: Oe(
        "fixed inset-0 z-50 bg-black/80  data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        e
      ),
      ...t
    }
  )
);
Gc.displayName = Wc.displayName;
const Xr = F.forwardRef(
  ({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(Xp, { children: [
    /* @__PURE__ */ f.jsx(Gc, {}),
    /* @__PURE__ */ f.jsxs(
      Zc,
      {
        ref: n,
        className: Oe(
          "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
          e
        ),
        ...r,
        children: [
          t,
          /* @__PURE__ */ f.jsxs(Yc, { className: "absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground", children: [
            /* @__PURE__ */ f.jsx(Kp, { className: "h-4 w-4" }),
            /* @__PURE__ */ f.jsx("span", { className: "sr-only", children: "Close" })
          ] })
        ]
      }
    )
  ] })
);
Xr.displayName = Zc.displayName;
const Qr = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: Oe("flex flex-col space-y-1.5 text-center sm:text-left", e), ...t });
Qr.displayName = "DialogHeader";
const Zo = ({ className: e, ...t }) => /* @__PURE__ */ f.jsx("div", { className: Oe("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", e), ...t });
Zo.displayName = "DialogFooter";
const en = F.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(qc, { ref: r, className: Oe("text-lg font-semibold leading-none tracking-tight", e), ...t })
);
en.displayName = qc.displayName;
const ss = F.forwardRef(
  ({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(Hc, { ref: r, className: Oe("text-sm text-muted-foreground", e), ...t })
);
ss.displayName = Hc.displayName;
const qo = F.forwardRef(({ className: e, type: t, ...r }, n) => /* @__PURE__ */ f.jsx(
  "input",
  {
    type: t,
    className: Oe(
      "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
      e
    ),
    ref: n,
    ...r
  }
));
qo.displayName = "Input";
const Qp = /* @__PURE__ */ ye((e, t) => /* @__PURE__ */ z(qe.label, pe({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), Jc = Qp, em = zo(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ho = F.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ f.jsx(
  Jc,
  {
    ref: r,
    className: Oe(em(), e),
    ...t
  }
));
Ho.displayName = Jc.displayName;
const Kc = ({ teacher: e, hasButton: t = !0 }) => /* @__PURE__ */ f.jsx(tt, { className: "rounded-none bg-white w-full", children: /* @__PURE__ */ f.jsxs(Pt, { className: "p-3", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row justify-between w-full", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center gap-3", children: [
      /* @__PURE__ */ f.jsxs(_r, { className: "border-orange-400 border-2", children: [
        /* @__PURE__ */ f.jsx(Ur, { src: e.photo_url, alt: e.firstname }),
        /* @__PURE__ */ f.jsxs(zr, { children: [
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
        /* @__PURE__ */ f.jsx(Uf, {}),
        " ",
        /* @__PURE__ */ f.jsx("div", { children: e.phone })
      ] }),
      /* @__PURE__ */ f.jsx(
        wr,
        {
          className: "w-fit hover:bg-blue-100 bg-blue-100 text-blue-400 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]",
          variant: "secondary",
          children: "ดูรายละเอียด"
        }
      )
    ] }) })
  ] }),
  /* @__PURE__ */ f.jsxs(rs, { children: [
    t && /* @__PURE__ */ f.jsx(ns, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(at, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "เปลี่ยนครู" }) }),
    /* @__PURE__ */ f.jsxs(Xr, { className: "bg-white", children: [
      /* @__PURE__ */ f.jsxs(Qr, { children: [
        /* @__PURE__ */ f.jsx(en, { children: /* @__PURE__ */ f.jsxs("p", { className: "text-xl", children: [
          "เปลี่ยนครู ",
          e.firstname,
          " ",
          e.lastname,
          " (",
          e.title,
          ")"
        ] }) }),
        /* @__PURE__ */ f.jsxs(ss, { className: "flex flex-col gap-3", children: [
          /* @__PURE__ */ f.jsxs("p", { children: [
            "ท่านต้องการเปลี่ยนครู ",
            e.firstname,
            " ",
            e.lastname,
            " หรือไม่?"
          ] }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsx(Ho, { children: "หมายเหตุ" }),
            /* @__PURE__ */ f.jsx(qo, { placeholder: "กรอกเหตุผลที่ต้องการเปลี่ยนครู" })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ f.jsxs(Zo, { className: "mt-3", children: [
        /* @__PURE__ */ f.jsx(Wr, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-gray-500 hover:bg-gray-400 w-[50%] text-white", type: "button", children: "ยกเลิก" }) }),
        /* @__PURE__ */ f.jsx(Wr, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-red-500 hover:bg-red-400 w-[50%] text-white", type: "submit", children: "ยืนยัน" }) })
      ] })
    ] })
  ] })
] }) }), tm = (e) => {
  switch (e.comp_type) {
    case "order:teacher:select":
      return /* @__PURE__ */ f.jsx(rm, { ...e });
    case "order:class:start":
      return /* @__PURE__ */ f.jsx(sm, { ...e });
    case "order:teacher:evaluate":
      return /* @__PURE__ */ f.jsx(om, {});
    default:
      return /* @__PURE__ */ f.jsx(f.Fragment, {});
  }
}, rm = ({ comp_data: e, authToken: t, dataBaseApiUrl: r }) => {
  const [n, s] = he([]), o = JSON.parse(e || "{}");
  return ie(() => {
    ad(r, t, o == null ? void 0 : o.order_id).then((a) => s(a));
  }, [t, o == null ? void 0 : o.order_id, r]), /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(tt, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
    /* @__PURE__ */ f.jsx(rr, { className: "p-4", children: /* @__PURE__ */ f.jsx(Kr, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "เลือกคุณครูผู้สอนแล้วเริ่มเรียนกันเลย" }) }) }),
    /* @__PURE__ */ f.jsxs(Pt, { className: "flex flex-col gap-4 p-4", children: [
      /* @__PURE__ */ f.jsx("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ f.jsxs("p", { className: "font-bold text-xl", children: [
          o == null ? void 0 : o.order_id,
          " คณิตศาสตร์ ป.1"
        ] }),
        /* @__PURE__ */ f.jsx("p", { className: "text-gray-400", children: "กรุณาเลือกคุณครู" })
      ] }) }),
      /* @__PURE__ */ f.jsxs(rs, { children: [
        /* @__PURE__ */ f.jsx(ns, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(at, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "ค้นหาคุณครู" }) }),
        /* @__PURE__ */ f.jsx(Xr, { className: "bg-white", children: /* @__PURE__ */ f.jsxs(Qr, { children: [
          /* @__PURE__ */ f.jsx(en, { children: /* @__PURE__ */ f.jsxs("p", { className: "text-lg", children: [
            "งานสอน ",
            o == null ? void 0 : o.order_id
          ] }) }),
          /* @__PURE__ */ f.jsx(ss, { className: "flex flex-col text-center gap-3", children: (n == null ? void 0 : n.length) > 0 ? /* @__PURE__ */ f.jsx("div", { children: n == null ? void 0 : n.map((a) => /* @__PURE__ */ f.jsx(nm, { ...a }, a.tid)) }) : /* @__PURE__ */ f.jsx("p", { children: "--- ไม่พบคุณครู ---" }) })
        ] }) })
      ] })
    ] })
  ] }) });
}, nm = ({ profile: e, background: t }) => /* @__PURE__ */ f.jsx(tt, { className: "p-3", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center justify-between gap-3", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3", children: [
    /* @__PURE__ */ f.jsx(Uo, { children: /* @__PURE__ */ f.jsx(es, { className: "w-[60px]", src: e.photo_url, alt: e.title }) }),
    /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-start", children: [
      /* @__PURE__ */ f.jsxs("p", { children: [
        "(",
        e.title,
        ")"
      ] }),
      /* @__PURE__ */ f.jsxs("p", { children: [
        e.firstname,
        " ",
        e.lastname
      ] }),
      /* @__PURE__ */ f.jsxs(rs, { children: [
        /* @__PURE__ */ f.jsx(ns, { className: "w-full ", children: /* @__PURE__ */ f.jsx(at, { variant: "link", className: "w-fit h-fit p-0 text-gray-400", children: "ดูข้อมูลเพิ่มเตืม" }) }),
        /* @__PURE__ */ f.jsxs(Xr, { className: "bg-white", children: [
          /* @__PURE__ */ f.jsx(Qr, { children: /* @__PURE__ */ f.jsx(en, { children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "ข้อมูลเพิ่มเติม" }) }) }),
          /* @__PURE__ */ f.jsx("div", { children: t.self_desc })
        ] })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ f.jsx(Wr, { children: /* @__PURE__ */ f.jsx(at, { variant: "outline", className: "border-indigo-500 text-indigo-500 hover:bg-indigo-100", children: "เลือก" }) })
] }) }), sm = ({ comp_data: e }) => {
  const t = JSON.parse(e || "{}"), r = new Date(t == null ? void 0 : t.st_time), n = String(r.getHours()).padStart(2, "0"), s = String(r.getMinutes()).padStart(2, "0"), o = `${n}:${s}`, a = new Date((/* @__PURE__ */ new Date()).getTime() + 60 * 60 * 1e3).toISOString();
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(tt, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
    /* @__PURE__ */ f.jsxs(rr, { className: "p-4", children: [
      /* @__PURE__ */ f.jsx(Kr, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "พร้อมเข้าห้องเรียนกันรึยัง?" }) }),
      /* @__PURE__ */ f.jsx(Bo, { children: /* @__PURE__ */ f.jsxs("p", { children: [
        "เช้านี้เรามีนัดกัน ",
        o,
        " นะ ในรายวิชา ",
        t == null ? void 0 : t.order_id,
        " ",
        t == null ? void 0 : t.order_name
      ] }) })
    ] }),
    /* @__PURE__ */ f.jsxs(Pt, { className: "flex flex-col gap-4 p-4", children: [
      /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col gap-3", children: [
        /* @__PURE__ */ f.jsx("p", { className: "font-bold text-xl", children: "กับคุณครู" }),
        /* @__PURE__ */ f.jsx(
          Kc,
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
          Oc,
          {
            time: a,
            order: { order_id: "A012", order_id_mask: "PpOcpS", order_status: "A", course_id: "MATTH06-04", course_name: "วิชา คณิตศาสตร์ ป.3 หลักสูตร ไทย คอร์ส 6 ครั้ง" }
          }
        )
      ] })
    ] })
  ] }) });
}, om = () => /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(tt, { className: "bg-[#ffebd9] border-none w-[400px] ", children: [
  /* @__PURE__ */ f.jsx(rr, { className: "p-4", children: /* @__PURE__ */ f.jsx(Kr, { className: "text-xl", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "เรียนเสร็จแล้ว" }) }) }),
  /* @__PURE__ */ f.jsxs(Pt, { className: "flex flex-col gap-4 p-4", children: [
    /* @__PURE__ */ f.jsxs("div", { className: "bg-white p-3 rounded-md shadow-lg flex flex-row gap-3 items-center", children: [
      /* @__PURE__ */ f.jsx(Uo, { children: /* @__PURE__ */ f.jsx(
        es,
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
    /* @__PURE__ */ f.jsxs(rs, { children: [
      /* @__PURE__ */ f.jsx(ns, { className: "w-full mt-3", children: /* @__PURE__ */ f.jsx(at, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "ทำแบบประเมิน" }) }),
      /* @__PURE__ */ f.jsxs(Xr, { className: "bg-white", children: [
        /* @__PURE__ */ f.jsxs(Qr, { children: [
          /* @__PURE__ */ f.jsx(en, { children: /* @__PURE__ */ f.jsx("p", { className: "text-lg", children: "A056 (วิชา คณิตศาสตร์ ป.1 หลักสูตร ไทย คอร์ส 6 ครั้ง)" }) }),
          /* @__PURE__ */ f.jsx(ss, { className: "flex flex-col gap-3", children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3", children: [
            /* @__PURE__ */ f.jsx(wr, { className: "bg-gray-400 text-white", children: "คณิตศาสตร์" }),
            /* @__PURE__ */ f.jsx(wr, { className: "bg-gray-400 text-white", children: "ป.1" })
          ] }) }),
          /* @__PURE__ */ f.jsxs("div", { children: [
            /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row justify-between", children: [
              /* @__PURE__ */ f.jsx("div", { children: "จำนวนครั้งที่สอน 6 ครั้ง" }),
              /* @__PURE__ */ f.jsx("div", { children: "(1/6)" })
            ] }),
            /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-2", children: [
              /* @__PURE__ */ f.jsx(gc, { className: "text-orange-500" }),
              /* @__PURE__ */ f.jsx("div", { children: "ครั้งที่ 1 2024-01-03" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ f.jsxs(Zo, { className: "mt-3", children: [
          /* @__PURE__ */ f.jsx(Wr, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-gray-500 hover:bg-gray-400 w-[50%] text-white", type: "button", children: "ยกเลิก" }) }),
          /* @__PURE__ */ f.jsx(Wr, { asChild: !0, children: /* @__PURE__ */ f.jsx(at, { className: "bg-indigo-500 hover:bg-indigo-400 w-[50%] text-white", type: "submit", children: "ส่งประเมิน" }) })
        ] })
      ] })
    ] })
  ] })
] }) }), am = ({ comp_type: e, content: t }) => {
  let [n, s, o] = ["border-gray-400", "bg-gray-100/50", /* @__PURE__ */ f.jsx(Ya, { size: 28 })];
  switch (e == null ? void 0 : e.trim()) {
    case "NOTI:INFO":
      n = "border-gray-400", s = "bg-gray-100/50", o = /* @__PURE__ */ f.jsx(Ya, { size: 28, className: "text-gray-400" });
      break;
    case "NOTI:SUCCESS":
      n = "border-green-400", s = "bg-green-100/50", o = /* @__PURE__ */ f.jsx(gc, { size: 28, className: "text-green-400" });
      break;
    case "NOTI:DANGER":
      n = "border-red-400", s = "bg-red-100/50", o = /* @__PURE__ */ f.jsx(zf, { size: 28, className: "text-red-400" });
      break;
  }
  return /* @__PURE__ */ f.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ f.jsxs(tt, { className: Oe("rounded-2xl flex items-center flex-row pl-4 border-2", n, s), children: [
    /* @__PURE__ */ f.jsx("div", { children: o }),
    /* @__PURE__ */ f.jsx(Pt, { className: "flex flex-row gap-4 p-4", children: /* @__PURE__ */ f.jsx("div", { children: t }) })
  ] }) });
}, im = ({ socketStatus: e }) => /* @__PURE__ */ f.jsx(wr, { variant: "outline", children: e ? /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx("div", { className: "p-[3px] bg-green-400 rounded-full mr-1" }),
  " Connected"
] }) : /* @__PURE__ */ f.jsxs(f.Fragment, { children: [
  /* @__PURE__ */ f.jsx("div", { className: "p-[3px] bg-red-400 rounded-full mr-1" }),
  " Disconnected"
] }) }), cm = tf, Xc = F.createContext(
  {}
), lm = ({
  ...e
}) => /* @__PURE__ */ f.jsx(Xc.Provider, { value: { name: e.name }, children: /* @__PURE__ */ f.jsx(of, { ...e }) }), os = () => {
  const e = F.useContext(Xc), t = F.useContext(Qc), { getFieldState: r, formState: n } = Xn(), s = r(e.name, n);
  if (!e)
    throw new Error("useFormField should be used within <FormField>");
  const { id: o } = t;
  return {
    id: o,
    name: e.name,
    formItemId: `${o}-form-item`,
    formDescriptionId: `${o}-form-item-description`,
    formMessageId: `${o}-form-item-message`,
    ...s
  };
}, Qc = F.createContext(
  {}
), el = F.forwardRef(({ className: e, ...t }, r) => {
  const n = F.useId();
  return /* @__PURE__ */ f.jsx(Qc.Provider, { value: { id: n }, children: /* @__PURE__ */ f.jsx("div", { ref: r, className: Oe("space-y-2", e), ...t }) });
});
el.displayName = "FormItem";
const um = F.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: s } = os();
  return /* @__PURE__ */ f.jsx(
    Ho,
    {
      ref: r,
      className: Oe(n && "text-destructive", e),
      htmlFor: s,
      ...t
    }
  );
});
um.displayName = "FormLabel";
const tl = F.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: s, formMessageId: o } = os();
  return /* @__PURE__ */ f.jsx(
    Jr,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${s} ${o}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
tl.displayName = "FormControl";
const dm = F.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = os();
  return /* @__PURE__ */ f.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: Oe("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
dm.displayName = "FormDescription";
const fm = F.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: s, formMessageId: o } = os(), a = s ? String(s == null ? void 0 : s.message) : t;
  return a ? /* @__PURE__ */ f.jsx(
    "p",
    {
      ref: n,
      id: o,
      className: Oe("text-sm font-medium text-destructive", e),
      ...r,
      children: a
    }
  ) : null;
});
fm.displayName = "FormMessage";
const hm = /* @__PURE__ */ Zt(void 0);
function pm(e) {
  const t = tr(hm);
  return e || t || "ltr";
}
function mm(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function vm(e, t) {
  return vi((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const rl = "ScrollArea", [nl, gv] = Vo(rl), [gm, ct] = nl(rl), ym = /* @__PURE__ */ ye((e, t) => {
  const { __scopeScrollArea: r, type: n = "hover", dir: s, scrollHideDelay: o = 600, ...a } = e, [i, c] = he(null), [l, u] = he(null), [d, h] = he(null), [g, y] = he(null), [p, b] = he(null), [O, w] = he(0), [E, T] = he(0), [x, V] = he(!1), [J, q] = he(!1), B = it(
    t,
    (me) => c(me)
  ), X = pm(s);
  return /* @__PURE__ */ z(gm, {
    scope: r,
    type: n,
    dir: X,
    scrollHideDelay: o,
    scrollArea: i,
    viewport: l,
    onViewportChange: u,
    content: d,
    onContentChange: h,
    scrollbarX: g,
    onScrollbarXChange: y,
    scrollbarXEnabled: x,
    onScrollbarXEnabledChange: V,
    scrollbarY: p,
    onScrollbarYChange: b,
    scrollbarYEnabled: J,
    onScrollbarYEnabledChange: q,
    onCornerWidthChange: w,
    onCornerHeightChange: T
  }, /* @__PURE__ */ z(qe.div, pe({
    dir: X
  }, a, {
    ref: B,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": O + "px",
      "--radix-scroll-area-corner-height": E + "px",
      ...e.style
    }
  })));
}), bm = "ScrollAreaViewport", xm = /* @__PURE__ */ ye((e, t) => {
  const { __scopeScrollArea: r, children: n, ...s } = e, o = ct(bm, r), a = ve(null), i = it(t, a, o.onViewportChange);
  return /* @__PURE__ */ z(yt, null, /* @__PURE__ */ z("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ z(qe.div, pe({
    "data-radix-scroll-area-viewport": ""
  }, s, {
    ref: i,
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
      overflowX: o.scrollbarXEnabled ? "scroll" : "hidden",
      overflowY: o.scrollbarYEnabled ? "scroll" : "hidden",
      ...e.style
    }
  }), /* @__PURE__ */ z("div", {
    ref: o.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, n)));
}), Dt = "ScrollAreaScrollbar", sl = /* @__PURE__ */ ye((e, t) => {
  const { forceMount: r, ...n } = e, s = ct(Dt, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: a } = s, i = e.orientation === "horizontal";
  return ie(() => (i ? o(!0) : a(!0), () => {
    i ? o(!1) : a(!1);
  }), [
    i,
    o,
    a
  ]), s.type === "hover" ? /* @__PURE__ */ z(_m, pe({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "scroll" ? /* @__PURE__ */ z(wm, pe({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "auto" ? /* @__PURE__ */ z(ol, pe({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "always" ? /* @__PURE__ */ z(Yo, pe({}, n, {
    ref: t
  })) : null;
}), _m = /* @__PURE__ */ ye((e, t) => {
  const { forceMount: r, ...n } = e, s = ct(Dt, e.__scopeScrollArea), [o, a] = he(!1);
  return ie(() => {
    const i = s.scrollArea;
    let c = 0;
    if (i) {
      const l = () => {
        window.clearTimeout(c), a(!0);
      }, u = () => {
        c = window.setTimeout(
          () => a(!1),
          s.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", l), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(c), i.removeEventListener("pointerenter", l), i.removeEventListener("pointerleave", u);
      };
    }
  }, [
    s.scrollArea,
    s.scrollHideDelay
  ]), /* @__PURE__ */ z(Ht, {
    present: r || o
  }, /* @__PURE__ */ z(ol, pe({
    "data-state": o ? "visible" : "hidden"
  }, n, {
    ref: t
  })));
}), wm = /* @__PURE__ */ ye((e, t) => {
  const { forceMount: r, ...n } = e, s = ct(Dt, e.__scopeScrollArea), o = e.orientation === "horizontal", a = is(
    () => c("SCROLL_END"),
    100
  ), [i, c] = vm("hidden", {
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
  return ie(() => {
    if (i === "idle") {
      const l = window.setTimeout(
        () => c("HIDE"),
        s.scrollHideDelay
      );
      return () => window.clearTimeout(l);
    }
  }, [
    i,
    s.scrollHideDelay,
    c
  ]), ie(() => {
    const l = s.viewport, u = o ? "scrollLeft" : "scrollTop";
    if (l) {
      let d = l[u];
      const h = () => {
        const g = l[u];
        d !== g && (c("SCROLL"), a()), d = g;
      };
      return l.addEventListener("scroll", h), () => l.removeEventListener("scroll", h);
    }
  }, [
    s.viewport,
    o,
    c,
    a
  ]), /* @__PURE__ */ z(Ht, {
    present: r || i !== "hidden"
  }, /* @__PURE__ */ z(Yo, pe({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, n, {
    ref: t,
    onPointerEnter: Ke(
      e.onPointerEnter,
      () => c("POINTER_ENTER")
    ),
    onPointerLeave: Ke(
      e.onPointerLeave,
      () => c("POINTER_LEAVE")
    )
  })));
}), ol = /* @__PURE__ */ ye((e, t) => {
  const r = ct(Dt, e.__scopeScrollArea), { forceMount: n, ...s } = e, [o, a] = he(!1), i = e.orientation === "horizontal", c = is(() => {
    if (r.viewport) {
      const l = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      a(i ? l : u);
    }
  }, 10);
  return Sr(r.viewport, c), Sr(r.content, c), /* @__PURE__ */ z(Ht, {
    present: n || o
  }, /* @__PURE__ */ z(Yo, pe({
    "data-state": o ? "visible" : "hidden"
  }, s, {
    ref: t
  })));
}), Yo = /* @__PURE__ */ ye((e, t) => {
  const { orientation: r = "vertical", ...n } = e, s = ct(Dt, e.__scopeScrollArea), o = ve(null), a = ve(0), [i, c] = he({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), l = ll(i.viewport, i.content), u = {
    ...n,
    sizes: i,
    onSizesChange: c,
    hasThumb: l > 0 && l < 1,
    onThumbChange: (h) => o.current = h,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (h) => a.current = h
  };
  function d(h, g) {
    return $m(h, a.current, i, g);
  }
  return r === "horizontal" ? /* @__PURE__ */ z(Sm, pe({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && o.current) {
        const h = s.viewport.scrollLeft, g = fi(h, i, s.dir);
        o.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = h);
    },
    onDragScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = d(h, s.dir));
    }
  })) : r === "vertical" ? /* @__PURE__ */ z(Em, pe({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && o.current) {
        const h = s.viewport.scrollTop, g = fi(h, i);
        o.current.style.transform = `translate3d(0, ${g}px, 0)`;
      }
    },
    onWheelScroll: (h) => {
      s.viewport && (s.viewport.scrollTop = h);
    },
    onDragScroll: (h) => {
      s.viewport && (s.viewport.scrollTop = d(h));
    }
  })) : null;
}), Sm = /* @__PURE__ */ ye((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = ct(Dt, e.__scopeScrollArea), [a, i] = he(), c = ve(null), l = it(t, c, o.onScrollbarXChange);
  return ie(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ z(il, pe({
    "data-orientation": "horizontal"
  }, s, {
    ref: l,
    sizes: r,
    style: {
      bottom: 0,
      left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": as(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (o.viewport) {
        const h = o.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(h), dl(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && o.viewport && a && n({
        content: o.viewport.scrollWidth,
        viewport: o.viewport.offsetWidth,
        scrollbar: {
          size: c.current.clientWidth,
          paddingStart: Bn(a.paddingLeft),
          paddingEnd: Bn(a.paddingRight)
        }
      });
    }
  }));
}), Em = /* @__PURE__ */ ye((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = ct(Dt, e.__scopeScrollArea), [a, i] = he(), c = ve(null), l = it(t, c, o.onScrollbarYChange);
  return ie(() => {
    c.current && i(getComputedStyle(c.current));
  }, [
    c
  ]), /* @__PURE__ */ z(il, pe({
    "data-orientation": "vertical"
  }, s, {
    ref: l,
    sizes: r,
    style: {
      top: 0,
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": as(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (o.viewport) {
        const h = o.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(h), dl(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      c.current && o.viewport && a && n({
        content: o.viewport.scrollHeight,
        viewport: o.viewport.offsetHeight,
        scrollbar: {
          size: c.current.clientHeight,
          paddingStart: Bn(a.paddingTop),
          paddingEnd: Bn(a.paddingBottom)
        }
      });
    }
  }));
}), [Cm, al] = nl(Dt), il = /* @__PURE__ */ ye((e, t) => {
  const { __scopeScrollArea: r, sizes: n, hasThumb: s, onThumbChange: o, onThumbPointerUp: a, onThumbPointerDown: i, onThumbPositionChange: c, onDragScroll: l, onWheelScroll: u, onResize: d, ...h } = e, g = ct(Dt, r), [y, p] = he(null), b = it(
    t,
    (B) => p(B)
  ), O = ve(null), w = ve(""), E = g.viewport, T = n.content - n.viewport, x = Je(u), V = Je(c), J = is(d, 10);
  function q(B) {
    if (O.current) {
      const X = B.clientX - O.current.left, me = B.clientY - O.current.top;
      l({
        x: X,
        y: me
      });
    }
  }
  return ie(() => {
    const B = (X) => {
      const me = X.target;
      (y == null ? void 0 : y.contains(me)) && x(X, T);
    };
    return document.addEventListener("wheel", B, {
      passive: !1
    }), () => document.removeEventListener("wheel", B, {
      passive: !1
    });
  }, [
    E,
    y,
    T,
    x
  ]), ie(V, [
    n,
    V
  ]), Sr(y, J), Sr(g.content, J), /* @__PURE__ */ z(Cm, {
    scope: r,
    scrollbar: y,
    hasThumb: s,
    onThumbChange: Je(o),
    onThumbPointerUp: Je(a),
    onThumbPositionChange: V,
    onThumbPointerDown: Je(i)
  }, /* @__PURE__ */ z(qe.div, pe({}, h, {
    ref: b,
    style: {
      position: "absolute",
      ...h.style
    },
    onPointerDown: Ke(e.onPointerDown, (B) => {
      B.button === 0 && (B.target.setPointerCapture(B.pointerId), O.current = y.getBoundingClientRect(), w.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), q(B));
    }),
    onPointerMove: Ke(e.onPointerMove, q),
    onPointerUp: Ke(e.onPointerUp, (B) => {
      const X = B.target;
      X.hasPointerCapture(B.pointerId) && X.releasePointerCapture(B.pointerId), document.body.style.webkitUserSelect = w.current, g.viewport && (g.viewport.style.scrollBehavior = ""), O.current = null;
    })
  })));
}), Eo = "ScrollAreaThumb", Tm = /* @__PURE__ */ ye((e, t) => {
  const { forceMount: r, ...n } = e, s = al(Eo, e.__scopeScrollArea);
  return /* @__PURE__ */ z(Ht, {
    present: r || s.hasThumb
  }, /* @__PURE__ */ z(Om, pe({
    ref: t
  }, n)));
}), Om = /* @__PURE__ */ ye((e, t) => {
  const { __scopeScrollArea: r, style: n, ...s } = e, o = ct(Eo, r), a = al(Eo, r), { onThumbPositionChange: i } = a, c = it(
    t,
    (d) => a.onThumbChange(d)
  ), l = ve(), u = is(() => {
    l.current && (l.current(), l.current = void 0);
  }, 100);
  return ie(() => {
    const d = o.viewport;
    if (d) {
      const h = () => {
        if (u(), !l.current) {
          const g = jm(d, i);
          l.current = g, i();
        }
      };
      return i(), d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
    }
  }, [
    o.viewport,
    u,
    i
  ]), /* @__PURE__ */ z(qe.div, pe({
    "data-state": a.hasThumb ? "visible" : "hidden"
  }, s, {
    ref: c,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...n
    },
    onPointerDownCapture: Ke(e.onPointerDownCapture, (d) => {
      const g = d.target.getBoundingClientRect(), y = d.clientX - g.left, p = d.clientY - g.top;
      a.onThumbPointerDown({
        x: y,
        y: p
      });
    }),
    onPointerUp: Ke(e.onPointerUp, a.onThumbPointerUp)
  }));
}), cl = "ScrollAreaCorner", Rm = /* @__PURE__ */ ye((e, t) => {
  const r = ct(cl, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? /* @__PURE__ */ z(Nm, pe({}, e, {
    ref: t
  })) : null;
}), Nm = /* @__PURE__ */ ye((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, s = ct(cl, r), [o, a] = he(0), [i, c] = he(0), l = !!(o && i);
  return Sr(s.scrollbarX, () => {
    var u;
    const d = ((u = s.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    s.onCornerHeightChange(d), c(d);
  }), Sr(s.scrollbarY, () => {
    var u;
    const d = ((u = s.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    s.onCornerWidthChange(d), a(d);
  }), l ? /* @__PURE__ */ z(qe.div, pe({}, n, {
    ref: t,
    style: {
      width: o,
      height: i,
      position: "absolute",
      right: s.dir === "ltr" ? 0 : void 0,
      left: s.dir === "rtl" ? 0 : void 0,
      bottom: 0,
      ...e.style
    }
  })) : null;
});
function Bn(e) {
  return e ? parseInt(e, 10) : 0;
}
function ll(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function as(e) {
  const t = ll(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function $m(e, t, r, n = "ltr") {
  const s = as(r), o = s / 2, a = t || o, i = s - a, c = r.scrollbar.paddingStart + a, l = r.scrollbar.size - r.scrollbar.paddingEnd - i, u = r.content - r.viewport, d = n === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return ul([
    c,
    l
  ], d)(e);
}
function fi(e, t, r = "ltr") {
  const n = as(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = t.scrollbar.size - s, a = t.content - t.viewport, i = o - n, c = r === "ltr" ? [
    0,
    a
  ] : [
    a * -1,
    0
  ], l = mm(e, c);
  return ul([
    0,
    a
  ], [
    0,
    i
  ])(l);
}
function ul(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function dl(e, t) {
  return e > 0 && e < t;
}
const jm = (e, t = () => {
}) => {
  let r = {
    left: e.scrollLeft,
    top: e.scrollTop
  }, n = 0;
  return function s() {
    const o = {
      left: e.scrollLeft,
      top: e.scrollTop
    }, a = r.left !== o.left, i = r.top !== o.top;
    (a || i) && t(), r = o, n = window.requestAnimationFrame(s);
  }(), () => window.cancelAnimationFrame(n);
};
function is(e, t) {
  const r = Je(e), n = ve(0);
  return ie(
    () => () => window.clearTimeout(n.current),
    []
  ), pt(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [
    r,
    t
  ]);
}
function Sr(e, t) {
  const r = Je(t);
  xr(() => {
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
const fl = ym, km = xm, Am = Rm, hl = F.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ f.jsxs(
  fl,
  {
    ref: n,
    className: Oe("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ f.jsx(km, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ f.jsx(pl, {}),
      /* @__PURE__ */ f.jsx(Am, {})
    ]
  }
));
hl.displayName = fl.displayName;
const pl = F.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ f.jsx(
  sl,
  {
    ref: n,
    orientation: t,
    className: Oe(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ f.jsx(Tm, { className: "relative flex-1 rounded-full bg-border" })
  }
));
pl.displayName = sl.displayName;
const Pm = sh({
  message: nh().min(2).max(50)
}), Dm = ({
  authToken: e,
  dataBaseApiUrl: t,
  roomId: r,
  userId: n,
  currentRoom: s,
  socketStatus: o,
  roomMenuOpen: a,
  setRoomMenuOpen: i,
  sideMenuOpen: c,
  setSideMenuOpen: l
}) => {
  var B, X, me, k;
  const [u, d] = he(), [h, g] = he(), { rooms: y, profile: p, sendMessage: b, sending: O, fetchChatMessage: w, fetchUserProfile: E } = Kn(), T = ve(null), x = gf({
    resolver: _f(Pm),
    defaultValues: {
      message: ""
    }
  }), V = y[r] || [];
  ie(() => {
    if (r) {
      const A = (/* @__PURE__ */ new Date()).toISOString();
      w(t, e, r, A, "2023-12-20T09:32:13.000Z"), E(t, e, r);
    }
  }, [w, E, r, t, e]), ie(() => {
    if (p.length > 1) {
      const A = p[0].teacher_id;
      n === A ? (d(p[0]), g(p[1])) : (d(p[1]), g(p[0]));
    }
  }, [p, n]), ie(() => {
    var A;
    (A = T.current) == null || A.scrollIntoView({ behavior: "smooth" });
  }, [V]);
  const J = (A) => {
    const H = p[0].teacher_id;
    if (n === H) {
      const le = {
        room_id: r,
        content: A.message,
        sender_id: H,
        sender_type: "TCA",
        type: "MSG"
      };
      b(t, e, le, r);
    }
    if (n !== H) {
      const le = {
        room_id: r,
        content: A.message,
        sender_id: n,
        sender_type: "STD",
        type: "MSG"
      };
      b(t, e, le, r);
    }
    x.reset();
  }, q = (A) => (h == null ? void 0 : h.teacher_id) === A || (h == null ? void 0 : h.student_id) === A ? h : u;
  return /* @__PURE__ */ f.jsxs(tt, { className: "flex flex-col relative rounded-none h-[90vh] w-full z-10", children: [
    /* @__PURE__ */ f.jsxs(rr, { className: "flex items-center border-b-[1px]", children: [
      /* @__PURE__ */ f.jsxs(Kr, { className: "max-w-[70%] text-center", children: [
        s.room_name,
        " (",
        s.room_id,
        ")"
      ] }),
      /* @__PURE__ */ f.jsxs(Bo, { children: [
        (B = p[0]) == null ? void 0 : B.firstname,
        " ",
        (X = p[0]) == null ? void 0 : X.lastname
      ] }),
      /* @__PURE__ */ f.jsx(im, { socketStatus: o })
    ] }),
    /* @__PURE__ */ f.jsx(Ff, { className: "absolute cursor-pointer top-[20px] left-[20px]", onClick: () => i(!a) }),
    /* @__PURE__ */ f.jsx(Vf, { className: "absolute cursor-pointer top-[20px] right-[20px]", onClick: () => l(!c) }),
    /* @__PURE__ */ f.jsxs(hl, { className: "px-3 h-full", children: [
      V.map((A) => {
        var H, le;
        return /* @__PURE__ */ f.jsxs("div", { className: Oe("flex gap-2 my-2", A.sender_id === n ? "flex-row justify-end" : "flex-row-reverse justify-end"), children: [
          A.type === "COMP" && /* @__PURE__ */ f.jsx(tm, { authToken: e, dataBaseApiUrl: t, ...A }),
          A.type === "MSG" && /* @__PURE__ */ f.jsxs("div", { className: Oe("flex items-end gap-2", A.sender_id === n ? "flex-row-reverse" : "flex-row"), children: [
            /* @__PURE__ */ f.jsxs(_r, { children: [
              /* @__PURE__ */ f.jsx(Ur, { src: (H = q(A.sender_id)) == null ? void 0 : H.photo_url }),
              /* @__PURE__ */ f.jsx(zr, { children: (le = q(A.sender_id)) == null ? void 0 : le.firstname })
            ] }),
            /* @__PURE__ */ f.jsx(
              "div",
              {
                className: Oe("flex flex-col  text-black p-2 px-4 rounded-t-full", A.sender_id === n ? "rounded-l-full bg-blue-100" : "rounded-r-full bg-gray-100"),
                children: /* @__PURE__ */ f.jsx("p", { children: A.content })
              }
            )
          ] }),
          A.type === "NOTI" && /* @__PURE__ */ f.jsx(am, { ...A })
        ] }, A.id);
      }),
      O && /* @__PURE__ */ f.jsxs("div", { className: Oe("flex items-end gap-2 flex-row-reverse"), children: [
        /* @__PURE__ */ f.jsxs(_r, { children: [
          /* @__PURE__ */ f.jsx(Ur, { src: (me = q(n)) == null ? void 0 : me.photo_url }),
          /* @__PURE__ */ f.jsx(zr, { children: (k = q(n)) == null ? void 0 : k.firstname })
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: Oe("flex flex-col  text-black p-2 px-4 rounded-t-full rounded-l-full bg-blue-100"), children: /* @__PURE__ */ f.jsx("p", { children: "กำลังส่ง..." }) })
      ] }),
      /* @__PURE__ */ f.jsx("div", { ref: T })
    ] }),
    /* @__PURE__ */ f.jsx(cm, { ...x, children: /* @__PURE__ */ f.jsx("form", { onSubmit: x.handleSubmit(J), className: "space-y-8 w-full p-3", children: /* @__PURE__ */ f.jsx(
      lm,
      {
        control: x.control,
        disabled: !o || !s.room_status,
        name: "message",
        render: ({ field: A }) => /* @__PURE__ */ f.jsx(el, { children: /* @__PURE__ */ f.jsx(tl, { children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-1", children: [
          /* @__PURE__ */ f.jsx(qo, { "data-testid": "message-input", placeholder: "Aa", ...A }),
          /* @__PURE__ */ f.jsx(at, { "data-testid": "message-submit", disabled: !o || !s.room_status, type: "submit", variant: "outline", children: "Send" })
        ] }) }) })
      }
    ) }) })
  ] }, r);
};
var Im = Object.defineProperty, Mm = (e, t, r) => t in e ? Im(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, Hs = (e, t, r) => (Mm(e, typeof t != "symbol" ? t + "" : t, r), r);
let Lm = class {
  constructor() {
    Hs(this, "current", this.detect()), Hs(this, "handoffState", "pending"), Hs(this, "currentId", 0);
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
}, En = new Lm(), Zr = (e, t) => {
  En.isServer ? ie(e, t) : mi(e, t);
};
function fr(e) {
  let t = ve(e);
  return Zr(() => {
    t.current = e;
  }, [e]), t;
}
function Fm(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function tn() {
  let e = [], t = { addEventListener(r, n, s, o) {
    return r.addEventListener(n, s, o), t.add(() => r.removeEventListener(n, s, o));
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
    return Fm(() => {
      n.current && r[0]();
    }), t.add(() => {
      n.current = !1;
    });
  }, style(r, n, s) {
    let o = r.style.getPropertyValue(n);
    return Object.assign(r.style, { [n]: s }), this.add(() => {
      Object.assign(r.style, { [n]: o });
    });
  }, group(r) {
    let n = tn();
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
function ml() {
  let [e] = he(tn);
  return ie(() => () => e.dispose(), [e]), e;
}
let $t = function(e) {
  let t = fr(e);
  return se.useCallback((...r) => t.current(...r), [t]);
};
function Vm() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in F ? ((t) => t.useSyncExternalStore)(F)(() => () => {
  }, () => !1, () => !e) : !1;
}
function vl() {
  let e = Vm(), [t, r] = F.useState(En.isHandoffComplete);
  return t && En.isHandoffComplete === !1 && r(!1), F.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), F.useEffect(() => En.handoff(), []), e ? !1 : t;
}
function gt(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, gt), n;
}
let Um = Symbol();
function gl(...e) {
  let t = ve(e);
  ie(() => {
    t.current = e;
  }, [e]);
  let r = $t((n) => {
    for (let s of t.current)
      s != null && (typeof s == "function" ? s(n) : s.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Um])) ? void 0 : r;
}
function Wn(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var yl = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(yl || {}), Bt = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(Bt || {});
function bl({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: s, visible: o = !0, name: a }) {
  let i = xl(t, e);
  if (o)
    return hn(i, r, n, a);
  let c = s ?? 0;
  if (c & 2) {
    let { static: l = !1, ...u } = i;
    if (l)
      return hn(u, r, n, a);
  }
  if (c & 1) {
    let { unmount: l = !0, ...u } = i;
    return gt(l ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return hn({ ...u, hidden: !0, style: { display: "none" } }, r, n, a);
    } });
  }
  return hn(i, r, n, a);
}
function hn(e, t = {}, r, n) {
  let { as: s = r, children: o, refName: a = "ref", ...i } = Ys(e, ["unmount", "static"]), c = e.ref !== void 0 ? { [a]: e.ref } : {}, l = typeof o == "function" ? o(t) : o;
  "className" in i && i.className && typeof i.className == "function" && (i.className = i.className(t));
  let u = {};
  if (t) {
    let d = !1, h = [];
    for (let [g, y] of Object.entries(t))
      typeof y == "boolean" && (d = !0), y === !0 && h.push(g);
    d && (u["data-headlessui-state"] = h.join(" "));
  }
  if (s === yt && Object.keys(hi(i)).length > 0) {
    if (!pr(l) || Array.isArray(l) && l.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(i).map((y) => `  - ${y}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((y) => `  - ${y}`).join(`
`)].join(`
`));
    let d = l.props, h = typeof (d == null ? void 0 : d.className) == "function" ? (...y) => Wn(d == null ? void 0 : d.className(...y), i.className) : Wn(d == null ? void 0 : d.className, i.className), g = h ? { className: h } : {};
    return Zn(l, Object.assign({}, xl(l.props, hi(Ys(i, ["ref"]))), u, c, zm(l.ref, c.ref), g));
  }
  return z(s, Object.assign({}, Ys(i, ["ref"]), s !== yt && c, s !== yt && u), l);
}
function zm(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  } };
}
function xl(...e) {
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
    Object.assign(t, { [n](s, ...o) {
      let a = r[n];
      for (let i of a) {
        if ((s instanceof Event || (s == null ? void 0 : s.nativeEvent) instanceof Event) && s.defaultPrevented)
          return;
        i(s, ...o);
      }
    } });
  return t;
}
function Go(e) {
  var t;
  return Object.assign(ye(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function hi(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function Ys(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
let Jo = Zt(null);
Jo.displayName = "OpenClosedContext";
var Rt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(Rt || {});
function _l() {
  return tr(Jo);
}
function Bm({ value: e, children: t }) {
  return se.createElement(Jo.Provider, { value: e }, t);
}
function Ko() {
  let e = ve(!1);
  return Zr(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Wm(e = 0) {
  let [t, r] = he(e), n = Ko(), s = pt((c) => {
    n.current && r((l) => l | c);
  }, [t, n]), o = pt((c) => !!(t & c), [t]), a = pt((c) => {
    n.current && r((l) => l & ~c);
  }, [r, n]), i = pt((c) => {
    n.current && r((l) => l ^ c);
  }, [r]);
  return { flags: t, addFlag: s, hasFlag: o, removeFlag: a, toggleFlag: i };
}
function Zm(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function Gs(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function Js(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function qm(e, t) {
  let r = tn();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: s } = getComputedStyle(e), [o, a] = [n, s].map((c) => {
    let [l = 0] = c.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return l;
  }), i = o + a;
  if (i !== 0) {
    r.group((l) => {
      l.setTimeout(() => {
        t(), l.dispose();
      }, i), l.addEventListener(e, "transitionrun", (u) => {
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
function Hm(e, t, r, n) {
  let s = r ? "enter" : "leave", o = tn(), a = n !== void 0 ? Zm(n) : () => {
  };
  s === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let i = gt(s, { enter: () => t.enter, leave: () => t.leave }), c = gt(s, { enter: () => t.enterTo, leave: () => t.leaveTo }), l = gt(s, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return Js(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), Gs(e, ...t.base, ...i, ...l), o.nextFrame(() => {
    Js(e, ...t.base, ...i, ...l), Gs(e, ...t.base, ...i, ...c), qm(e, () => (Js(e, ...t.base, ...i), Gs(e, ...t.base, ...t.entered), a()));
  }), o.dispose;
}
function Ym({ immediate: e, container: t, direction: r, classes: n, onStart: s, onStop: o }) {
  let a = Ko(), i = ml(), c = fr(r);
  Zr(() => {
    e && (c.current = "enter");
  }, [e]), Zr(() => {
    let l = tn();
    i.add(l.dispose);
    let u = t.current;
    if (u && c.current !== "idle" && a.current)
      return l.dispose(), s.current(c.current), l.add(Hm(u, n.current, c.current === "enter", () => {
        l.dispose(), o.current(c.current);
      })), l.dispose;
  }, [r]);
}
function Vt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let cs = Zt(null);
cs.displayName = "TransitionContext";
var Gm = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Gm || {});
function Jm() {
  let e = tr(cs);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Km() {
  let e = tr(ls);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let ls = Zt(null);
ls.displayName = "NestingContext";
function us(e) {
  return "children" in e ? us(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function wl(e, t) {
  let r = fr(e), n = ve([]), s = Ko(), o = ml(), a = $t((g, y = Bt.Hidden) => {
    let p = n.current.findIndex(({ el: b }) => b === g);
    p !== -1 && (gt(y, { [Bt.Unmount]() {
      n.current.splice(p, 1);
    }, [Bt.Hidden]() {
      n.current[p].state = "hidden";
    } }), o.microTask(() => {
      var b;
      !us(n) && s.current && ((b = r.current) == null || b.call(r));
    }));
  }), i = $t((g) => {
    let y = n.current.find(({ el: p }) => p === g);
    return y ? y.state !== "visible" && (y.state = "visible") : n.current.push({ el: g, state: "visible" }), () => a(g, Bt.Unmount);
  }), c = ve([]), l = ve(Promise.resolve()), u = ve({ enter: [], leave: [], idle: [] }), d = $t((g, y, p) => {
    c.current.splice(0), t && (t.chains.current[y] = t.chains.current[y].filter(([b]) => b !== g)), t == null || t.chains.current[y].push([g, new Promise((b) => {
      c.current.push(b);
    })]), t == null || t.chains.current[y].push([g, new Promise((b) => {
      Promise.all(u.current[y].map(([O, w]) => w)).then(() => b());
    })]), y === "enter" ? l.current = l.current.then(() => t == null ? void 0 : t.wait.current).then(() => p(y)) : p(y);
  }), h = $t((g, y, p) => {
    Promise.all(u.current[y].splice(0).map(([b, O]) => O)).then(() => {
      var b;
      (b = c.current.shift()) == null || b();
    }).then(() => p(y));
  });
  return hr(() => ({ children: n, register: i, unregister: a, onStart: d, onStop: h, wait: l, chains: u }), [i, a, n, d, h, u, l]);
}
function Xm() {
}
let Qm = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function pi(e) {
  var t;
  let r = {};
  for (let n of Qm)
    r[n] = (t = e[n]) != null ? t : Xm;
  return r;
}
function ev(e) {
  let t = ve(pi(e));
  return ie(() => {
    t.current = pi(e);
  }, [e]), t;
}
let tv = "div", Sl = yl.RenderStrategy;
function rv(e, t) {
  var r, n;
  let { beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i, enter: c, enterFrom: l, enterTo: u, entered: d, leave: h, leaveFrom: g, leaveTo: y, ...p } = e, b = ve(null), O = gl(b, t), w = (r = p.unmount) == null || r ? Bt.Unmount : Bt.Hidden, { show: E, appear: T, initial: x } = Jm(), [V, J] = he(E ? "visible" : "hidden"), q = Km(), { register: B, unregister: X } = q;
  ie(() => B(b), [B, b]), ie(() => {
    if (w === Bt.Hidden && b.current) {
      if (E && V !== "visible") {
        J("visible");
        return;
      }
      return gt(V, { hidden: () => X(b), visible: () => B(b) });
    }
  }, [V, b, B, X, E, w]);
  let me = fr({ base: Vt(p.className), enter: Vt(c), enterFrom: Vt(l), enterTo: Vt(u), entered: Vt(d), leave: Vt(h), leaveFrom: Vt(g), leaveTo: Vt(y) }), k = ev({ beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i }), A = vl();
  ie(() => {
    if (A && V === "visible" && b.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [b, V, A]);
  let H = x && !T, le = T && E && x, we = !A || H ? "idle" : E ? "enter" : "leave", Se = Wm(0), ze = $t((K) => gt(K, { enter: () => {
    Se.addFlag(Rt.Opening), k.current.beforeEnter();
  }, leave: () => {
    Se.addFlag(Rt.Closing), k.current.beforeLeave();
  }, idle: () => {
  } })), Ie = $t((K) => gt(K, { enter: () => {
    Se.removeFlag(Rt.Opening), k.current.afterEnter();
  }, leave: () => {
    Se.removeFlag(Rt.Closing), k.current.afterLeave();
  }, idle: () => {
  } })), R = wl(() => {
    J("hidden"), X(b);
  }, q);
  Ym({ immediate: le, container: b, classes: me, direction: we, onStart: fr((K) => {
    R.onStart(b, K, ze);
  }), onStop: fr((K) => {
    R.onStop(b, K, Ie), K === "leave" && !us(R) && (J("hidden"), X(b));
  }) });
  let P = p, Q = { ref: O };
  return le ? P = { ...P, className: Wn(p.className, ...me.current.enter, ...me.current.enterFrom) } : (P.className = Wn(p.className, (n = b.current) == null ? void 0 : n.className), P.className === "" && delete P.className), se.createElement(ls.Provider, { value: R }, se.createElement(Bm, { value: gt(V, { visible: Rt.Open, hidden: Rt.Closed }) | Se.flags }, bl({ ourProps: Q, theirProps: P, defaultTag: tv, features: Sl, visible: V === "visible", name: "Transition.Child" })));
}
function nv(e, t) {
  let { show: r, appear: n = !1, unmount: s = !0, ...o } = e, a = ve(null), i = gl(a, t);
  vl();
  let c = _l();
  if (r === void 0 && c !== null && (r = (c & Rt.Open) === Rt.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [l, u] = he(r ? "visible" : "hidden"), d = wl(() => {
    u("hidden");
  }), [h, g] = he(!0), y = ve([r]);
  Zr(() => {
    h !== !1 && y.current[y.current.length - 1] !== r && (y.current.push(r), g(!1));
  }, [y, r]);
  let p = hr(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  ie(() => {
    if (r)
      u("visible");
    else if (!us(d))
      u("hidden");
    else {
      let E = a.current;
      if (!E)
        return;
      let T = E.getBoundingClientRect();
      T.x === 0 && T.y === 0 && T.width === 0 && T.height === 0 && u("hidden");
    }
  }, [r, d]);
  let b = { unmount: s }, O = $t(() => {
    var E;
    h && g(!1), (E = e.beforeEnter) == null || E.call(e);
  }), w = $t(() => {
    var E;
    h && g(!1), (E = e.beforeLeave) == null || E.call(e);
  });
  return se.createElement(ls.Provider, { value: d }, se.createElement(cs.Provider, { value: p }, bl({ ourProps: { ...b, as: yt, children: se.createElement(El, { ref: i, ...b, ...o, beforeEnter: O, beforeLeave: w }) }, theirProps: {}, defaultTag: yt, features: Sl, visible: l === "visible", name: "Transition" })));
}
function sv(e, t) {
  let r = tr(cs) !== null, n = _l() !== null;
  return se.createElement(se.Fragment, null, !r && n ? se.createElement(Co, { ref: t, ...e }) : se.createElement(El, { ref: t, ...e }));
}
let Co = Go(nv), El = Go(rv), ov = Go(sv), Cl = Object.assign(Co, { Child: ov, Root: Co });
const av = Zt(null), Ks = {
  didCatch: !1,
  error: null
};
class pn extends Dl {
  constructor(t) {
    super(t), this.resetErrorBoundary = this.resetErrorBoundary.bind(this), this.state = Ks;
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
      for (var r, n, s = arguments.length, o = new Array(s), a = 0; a < s; a++)
        o[a] = arguments[a];
      (r = (n = this.props).onReset) === null || r === void 0 || r.call(n, {
        args: o,
        reason: "imperative-api"
      }), this.setState(Ks);
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
    if (n && r.error !== null && iv(t.resetKeys, s)) {
      var o, a;
      (o = (a = this.props).onReset) === null || o === void 0 || o.call(a, {
        next: s,
        prev: t.resetKeys,
        reason: "keys"
      }), this.setState(Ks);
    }
  }
  render() {
    const {
      children: t,
      fallbackRender: r,
      FallbackComponent: n,
      fallback: s
    } = this.props, {
      didCatch: o,
      error: a
    } = this.state;
    let i = t;
    if (o) {
      const c = {
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      };
      if (typeof r == "function")
        i = r(c);
      else if (n)
        i = z(n, c);
      else if (s === null || pr(s))
        i = s;
      else
        throw a;
    }
    return z(av.Provider, {
      value: {
        didCatch: o,
        error: a,
        resetErrorBoundary: this.resetErrorBoundary
      }
    }, i);
  }
}
function iv() {
  let e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [];
  return e.length !== t.length || e.some((r, n) => !Object.is(r, t[n]));
}
const mn = ({ children: e }) => /* @__PURE__ */ f.jsxs(tt, { className: "p-3 flex flex-row gap-3 items-center text-red-400", children: [
  /* @__PURE__ */ f.jsx(Mf, { size: 20 }),
  " ",
  e
] }), cv = ({ order: { course_name: e }, teacher: { title: t, firstname: r } }) => /* @__PURE__ */ f.jsxs(tt, { className: "relative bg-white rounded-none w-full", children: [
  /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 p-3", children: [
    /* @__PURE__ */ f.jsxs(_r, { className: "w-[70px] h-[70px] rounded-md", children: [
      /* @__PURE__ */ f.jsx(
        es,
        {
          className: "w-[70px] h-[70px]",
          src: "https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
        }
      ),
      /* @__PURE__ */ f.jsx(wc, { children: e })
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
  /* @__PURE__ */ f.jsx(Pt, { className: "p-3", children: /* @__PURE__ */ f.jsx("div", { children: e }) }),
  /* @__PURE__ */ f.jsx("div", { className: "flex flex-row w-full justify-end p-3", children: /* @__PURE__ */ f.jsx(wr, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
] }), lv = ({ orderStatus: e }) => {
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
  return /* @__PURE__ */ f.jsxs(tt, { className: "rounded-none bg-white w-full", children: [
    /* @__PURE__ */ f.jsx(rr, { className: " px-3 pt-3 pb-0", children: /* @__PURE__ */ f.jsx("p", { className: "text-lg font-bold", children: "สถานะ" }) }),
    /* @__PURE__ */ f.jsxs(Pt, { className: "p-3 flex flex-row justify-between", children: [
      /* @__PURE__ */ f.jsxs("div", { children: [
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.hasTeacher ? /* @__PURE__ */ f.jsx(Is, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(Ms, { size: 30, className: "text-orange-500" }),
          "ได้คุณครูแล้ว"
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isLearned ? /* @__PURE__ */ f.jsx(Is, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(Ms, { size: 30, className: "text-orange-500" }),
          "เรียนแล้ว"
        ] }),
        /* @__PURE__ */ f.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isCompleted ? /* @__PURE__ */ f.jsx(Is, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ f.jsx(Ms, { size: 30, className: "text-orange-500" }),
          "เสร็จแล้ว"
        ] })
      ] }),
      /* @__PURE__ */ f.jsx("div", { className: "flex flex-col justify-end", children: /* @__PURE__ */ f.jsx(wr, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
    ] })
  ] });
}, uv = ({ dataBaseApiUrl: e, authToken: t, roomId: r, sideMenuOpen: n, setSideMenuOpen: s }) => {
  const [o, a] = he(null);
  return ie(() => {
    r && od(e, t, r).then((i) => {
      a(i);
    });
  }, [r, e, t]), o && /* @__PURE__ */ f.jsx(
    Cl,
    {
      show: n,
      as: yt,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 -translate-x-10",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 -translate-x-10",
      children: /* @__PURE__ */ f.jsx("div", { className: "bg-gray-100", onClick: () => s(!1), children: /* @__PURE__ */ f.jsxs("div", { className: "min-w-[300px] h-[90vh]", onClick: (i) => i.stopPropagation(), children: [
        /* @__PURE__ */ f.jsx(pn, { fallback: /* @__PURE__ */ f.jsx(mn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(cv, { order: o.order, teacher: o.teacher }) }),
        /* @__PURE__ */ f.jsx(pn, { fallback: /* @__PURE__ */ f.jsx(mn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(lv, { orderStatus: o.order.order_status }) }),
        /* @__PURE__ */ f.jsx(pn, { fallback: /* @__PURE__ */ f.jsx(mn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(Oc, { order: o.order }) }),
        /* @__PURE__ */ f.jsx(pn, { fallback: /* @__PURE__ */ f.jsx(mn, { children: "มีข้อผิดพลาดเกิดขึ้น" }), children: /* @__PURE__ */ f.jsx(Kc, { teacher: o.teacher }) })
      ] }) })
    }
  );
}, dv = ({ roomMenuOpen: e, chatRoom: t, selectedTab: r, setSelectedTab: n, userProfiles: s, userId: o }) => {
  const { rooms: a, notiLatestMessages: i, updateLatestMessage: c } = Kn(), [l, u] = he(window.innerWidth <= 720);
  ie(() => {
    const g = () => {
      u(window.innerWidth <= 720);
    };
    return window.addEventListener("resize", g), () => {
      window.removeEventListener("resize", g);
    };
  }, []);
  const d = (g) => {
    const y = i.find((p) => p.room_id === g);
    return !!(y && y.sender_id !== o);
  }, h = (g) => {
    c(g);
  };
  return /* @__PURE__ */ f.jsx(
    Cl,
    {
      show: e,
      as: yt,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 translate-x-10",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 translate-x-10",
      children: /* @__PURE__ */ f.jsx("div", { className: "flex flex-col bg-white border-y border-l h-[90vh]", children: t && t.map((g, y) => {
        if (!a[g.room_id])
          return null;
        const p = a[g.room_id][a[g.room_id].length - 1];
        return /* @__PURE__ */ f.jsxs("div", { children: [
          l.toString(),
          /* @__PURE__ */ f.jsx(
            fv,
            {
              room: g,
              selectedTab: r,
              index: y,
              setSelectedTab: n,
              removeLatestMessage: h,
              userProfiles: s,
              latestMessage: p,
              getNotiLatestMessage: d
            }
          )
        ] }, g.room_id);
      }) })
    }
  );
}, fv = ({ room: e, selectedTab: t, index: r, setSelectedTab: n, removeLatestMessage: s, userProfiles: o, latestMessage: a, getNotiLatestMessage: i }) => {
  var c, l, u, d;
  return /* @__PURE__ */ f.jsxs(
    "button",
    {
      className: Oe("min-w-[300px] w-full px-4 py-2  flex flex-row gap-4 border-l-4 ", t === r ? "border-l-4 border-orange-400 bg-gray-100/50" : "border-white"),
      onClick: () => {
        n(r), s(e.room_id);
      },
      children: [
        /* @__PURE__ */ f.jsxs(_r, { children: [
          /* @__PURE__ */ f.jsx(Ur, { src: (c = o[r]) == null ? void 0 : c.photo_url }),
          /* @__PURE__ */ f.jsx(zr, { children: (l = o[r]) == null ? void 0 : l.firstname })
        ] }),
        /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row items-center", children: [
          /* @__PURE__ */ f.jsxs("div", { className: "flex flex-col items-start", children: [
            /* @__PURE__ */ f.jsxs("p", { className: "truncate max-w-[200px]", children: [
              e.room_name,
              " (",
              e.room_id,
              ")"
            ] }),
            /* @__PURE__ */ f.jsxs("p", { className: "text-sm", children: [
              (u = o[r]) == null ? void 0 : u.firstname,
              " ",
              (d = o[r]) == null ? void 0 : d.lastname
            ] }),
            /* @__PURE__ */ f.jsx("p", { "data-testid": "latest-message", className: "text-xs", children: a == null ? void 0 : a.content })
          ] }),
          i(e.room_id) && t !== r && /* @__PURE__ */ f.jsx("div", { "data-testid": "notification-div", className: "p-1 bg-red-500 rounded-full" })
        ] })
      ]
    }
  );
}, bv = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n }) => {
  const [s, o] = he(0), [a, i] = he([]), { connectWebSocket: c, socketStatus: l, disconnectWebSocket: u } = Kn(), { fetchChatRoom: d, chatRoom: h } = bd(), g = window.innerWidth <= 768, [y, p] = he(!g), [b, O] = he(!g);
  return ie(() => {
    const w = async () => {
      const T = (await Promise.all(h.map((x) => Vi(t, r, x.room_id)))).flat().filter((x) => x.teacher_id);
      i(T);
    };
    h && h.length > 0 && w();
  }, [h, t, r]), ie(() => {
    c(t, e, r), d(t, r);
    function w() {
      document.visibilityState === "hidden" ? u() : (c(t, e, r), d(t, r));
    }
    return document.addEventListener("visibilitychange", w), () => {
      document.removeEventListener("visibilitychange", w);
    };
  }, [c, d, e, t, r, u]), /* @__PURE__ */ f.jsxs("div", { "data-testid": "chat-app", className: "flex flex-row w-full", children: [
    /* @__PURE__ */ f.jsx(
      dv,
      {
        roomMenuOpen: y,
        setRoomMenuOpen: p,
        selectedTab: s,
        setSelectedTab: o,
        userProfiles: a,
        chatRoom: h,
        dataBaseApiUrl: t,
        authToken: r,
        userId: n
      }
    ),
    h.map((w, E) => /* @__PURE__ */ f.jsx("div", { className: `w-full  ${s === E ? "block" : "hidden"}`, children: /* @__PURE__ */ f.jsxs("div", { className: "flex flex-row ", children: [
      /* @__PURE__ */ f.jsx(
        Dm,
        {
          dataBaseApiUrl: t,
          authToken: r,
          currentRoom: w,
          roomId: w.room_id,
          userId: n,
          socketStatus: l,
          setRoomMenuOpen: p,
          roomMenuOpen: y,
          sideMenuOpen: b,
          setSideMenuOpen: O
        }
      ),
      /* @__PURE__ */ f.jsx(uv, { dataBaseApiUrl: t, authToken: r, roomId: w.room_id, sideMenuOpen: b, setSideMenuOpen: O })
    ] }) }, w.room_id))
  ] });
};
export {
  bv as ChatApp
};
