import * as Ce from "react";
import te, { forwardRef as $e, createElement as le, useCallback as Ut, Children as Qt, isValidElement as kr, cloneElement as Sn, Fragment as xt, createContext as or, useMemo as ar, useContext as hr, useRef as je, useEffect as ke, useLayoutEffect as va, useState as xe, useReducer as ya } from "react";
import { flushSync as ml } from "react-dom";
function ga(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var vs = { exports: {} }, _r = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var yo;
function vl() {
  return yo || (yo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = te, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function x(f) {
      if (f === null || typeof f != "object")
        return null;
      var C = m && f[m] || f[v];
      return typeof C == "function" ? C : null;
    }
    var P = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function T(f) {
      {
        for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), K = 1; K < C; K++)
          M[K - 1] = arguments[K];
        R("error", f, M);
      }
    }
    function R(f, C, M) {
      {
        var K = P.ReactDebugCurrentFrame, we = K.getStackAddendum();
        we !== "" && (C += "%s", M = M.concat([we]));
        var Re = M.map(function(ye) {
          return String(ye);
        });
        Re.unshift("Warning: " + C), Function.prototype.apply.call(console[f], console, Re);
      }
    }
    var A = !1, w = !1, U = !1, J = !1, ue = !1, W;
    W = Symbol.for("react.module.reference");
    function X(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === o || ue || f === s || f === c || f === u || J || f === g || A || w || U || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === W || f.getModuleId !== void 0));
    }
    function be(f, C, M) {
      var K = f.displayName;
      if (K)
        return K;
      var we = C.displayName || C.name || "";
      return we !== "" ? M + "(" + we + ")" : M;
    }
    function E(f) {
      return f.displayName || "Context";
    }
    function z(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && T("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
        return f.displayName || f.name || null;
      if (typeof f == "string")
        return f;
      switch (f) {
        case n:
          return "Fragment";
        case r:
          return "Portal";
        case o:
          return "Profiler";
        case s:
          return "StrictMode";
        case c:
          return "Suspense";
        case u:
          return "SuspenseList";
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case i:
            var C = f;
            return E(C) + ".Consumer";
          case a:
            var M = f;
            return E(M._context) + ".Provider";
          case l:
            return be(f, f.render, "ForwardRef");
          case d:
            var K = f.displayName || null;
            return K !== null ? K : z(f.type) || "Memo";
          case h: {
            var we = f, Re = we._payload, ye = we._init;
            try {
              return z(ye(Re));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, de = 0, ce, ve, ze, Ie, O, j, Y;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function Q() {
      {
        if (de === 0) {
          ce = console.log, ve = console.info, ze = console.warn, Ie = console.error, O = console.group, j = console.groupCollapsed, Y = console.groupEnd;
          var f = {
            configurable: !0,
            enumerable: !0,
            value: H,
            writable: !0
          };
          Object.defineProperties(console, {
            info: f,
            log: f,
            warn: f,
            error: f,
            group: f,
            groupCollapsed: f,
            groupEnd: f
          });
        }
        de++;
      }
    }
    function he() {
      {
        if (de--, de === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: B({}, f, {
              value: ce
            }),
            info: B({}, f, {
              value: ve
            }),
            warn: B({}, f, {
              value: ze
            }),
            error: B({}, f, {
              value: Ie
            }),
            group: B({}, f, {
              value: O
            }),
            groupCollapsed: B({}, f, {
              value: j
            }),
            groupEnd: B({}, f, {
              value: Y
            })
          });
        }
        de < 0 && T("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ee = P.ReactCurrentDispatcher, re;
    function oe(f, C, M) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (we) {
            var K = we.stack.trim().match(/\n( *(at )?)/);
            re = K && K[1] || "";
          }
        return `
` + re + f;
      }
    }
    var pe = !1, ae;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      ae = new We();
    }
    function D(f, C) {
      if (!f || pe)
        return "";
      {
        var M = ae.get(f);
        if (M !== void 0)
          return M;
      }
      var K;
      pe = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Re;
      Re = ee.current, ee.current = null, Q();
      try {
        if (C) {
          var ye = function() {
            throw Error();
          };
          if (Object.defineProperty(ye.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(ye, []);
            } catch (pt) {
              K = pt;
            }
            Reflect.construct(f, [], ye);
          } else {
            try {
              ye.call();
            } catch (pt) {
              K = pt;
            }
            f.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            K = pt;
          }
          f();
        }
      } catch (pt) {
        if (pt && K && typeof pt.stack == "string") {
          for (var me = pt.stack.split(`
`), He = K.stack.split(`
`), Le = me.length - 1, Ve = He.length - 1; Le >= 1 && Ve >= 0 && me[Le] !== He[Ve]; )
            Ve--;
          for (; Le >= 1 && Ve >= 0; Le--, Ve--)
            if (me[Le] !== He[Ve]) {
              if (Le !== 1 || Ve !== 1)
                do
                  if (Le--, Ve--, Ve < 0 || me[Le] !== He[Ve]) {
                    var Ke = `
` + me[Le].replace(" at new ", " at ");
                    return f.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", f.displayName)), typeof f == "function" && ae.set(f, Ke), Ke;
                  }
                while (Le >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        pe = !1, ee.current = Re, he(), Error.prepareStackTrace = we;
      }
      var Jt = f ? f.displayName || f.name : "", vo = Jt ? oe(Jt) : "";
      return typeof f == "function" && ae.set(f, vo), vo;
    }
    function qe(f, C, M) {
      return D(f, !1);
    }
    function Ct(f) {
      var C = f.prototype;
      return !!(C && C.isReactComponent);
    }
    function ot(f, C, M) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return D(f, Ct(f));
      if (typeof f == "string")
        return oe(f);
      switch (f) {
        case c:
          return oe("Suspense");
        case u:
          return oe("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return qe(f.render);
          case d:
            return ot(f.type, C, M);
          case h: {
            var K = f, we = K._payload, Re = K._init;
            try {
              return ot(Re(we), C, M);
            } catch {
            }
          }
        }
      return "";
    }
    var Lt = Object.prototype.hasOwnProperty, Ln = {}, Fn = P.ReactDebugCurrentFrame;
    function yr(f) {
      if (f) {
        var C = f._owner, M = ot(f.type, f._source, C ? C.type : null);
        Fn.setExtraStackFrame(M);
      } else
        Fn.setExtraStackFrame(null);
    }
    function p(f, C, M, K, we) {
      {
        var Re = Function.call.bind(Lt);
        for (var ye in f)
          if (Re(f, ye)) {
            var me = void 0;
            try {
              if (typeof f[ye] != "function") {
                var He = Error((K || "React class") + ": " + M + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              me = f[ye](C, ye, K, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              me = Le;
            }
            me && !(me instanceof Error) && (yr(we), T("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", K || "React class", M, ye, typeof me), yr(null)), me instanceof Error && !(me.message in Ln) && (Ln[me.message] = !0, yr(we), T("Failed %s type: %s", M, me.message), yr(null));
          }
      }
    }
    var b = Array.isArray;
    function _(f) {
      return b(f);
    }
    function F(f) {
      {
        var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return M;
      }
    }
    function $(f) {
      try {
        return k(f), !1;
      } catch {
        return !0;
      }
    }
    function k(f) {
      return "" + f;
    }
    function Z(f) {
      if ($(f))
        return T("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", F(f)), k(f);
    }
    var _e = P.ReactCurrentOwner, Fe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, ht, gr;
    gr = {};
    function br(f) {
      if (Lt.call(f, "ref")) {
        var C = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function xr(f) {
      if (Lt.call(f, "key")) {
        var C = Object.getOwnPropertyDescriptor(f, "key").get;
        if (C && C.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Vn(f, C) {
      if (typeof f.ref == "string" && _e.current && C && _e.current.stateNode !== C) {
        var M = z(_e.current.type);
        gr[M] || (T('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', z(_e.current.type), f.ref), gr[M] = !0);
      }
    }
    function zr(f, C) {
      {
        var M = function() {
          Xe || (Xe = !0, T("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: M,
          configurable: !0
        });
      }
    }
    function Un(f, C) {
      {
        var M = function() {
          ht || (ht = !0, T("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: M,
          configurable: !0
        });
      }
    }
    var Wr = function(f, C, M, K, we, Re, ye) {
      var me = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: C,
        ref: M,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: Re
      };
      return me._store = {}, Object.defineProperty(me._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(me, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: K
      }), Object.defineProperty(me, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(me.props), Object.freeze(me)), me;
    };
    function al(f, C, M, K, we) {
      {
        var Re, ye = {}, me = null, He = null;
        M !== void 0 && (Z(M), me = "" + M), xr(C) && (Z(C.key), me = "" + C.key), br(C) && (He = C.ref, Vn(C, we));
        for (Re in C)
          Lt.call(C, Re) && !Fe.hasOwnProperty(Re) && (ye[Re] = C[Re]);
        if (f && f.defaultProps) {
          var Le = f.defaultProps;
          for (Re in Le)
            ye[Re] === void 0 && (ye[Re] = Le[Re]);
        }
        if (me || He) {
          var Ve = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          me && zr(ye, Ve), He && Un(ye, Ve);
        }
        return Wr(f, me, He, we, K, _e.current, ye);
      }
    }
    var zn = P.ReactCurrentOwner, co = P.ReactDebugCurrentFrame;
    function Yt(f) {
      if (f) {
        var C = f._owner, M = ot(f.type, f._source, C ? C.type : null);
        co.setExtraStackFrame(M);
      } else
        co.setExtraStackFrame(null);
    }
    var Wn;
    Wn = !1;
    function Bn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function uo() {
      {
        if (zn.current) {
          var f = z(zn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function il(f) {
      {
        if (f !== void 0) {
          var C = f.fileName.replace(/^.*[\\\/]/, ""), M = f.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
    }
    var fo = {};
    function ll(f) {
      {
        var C = uo();
        if (!C) {
          var M = typeof f == "string" ? f : f.displayName || f.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
    }
    function ho(f, C) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var M = ll(C);
        if (fo[M])
          return;
        fo[M] = !0;
        var K = "";
        f && f._owner && f._owner !== zn.current && (K = " It was passed a child from " + z(f._owner.type) + "."), Yt(f), T('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, K), Yt(null);
      }
    }
    function po(f, C) {
      {
        if (typeof f != "object")
          return;
        if (_(f))
          for (var M = 0; M < f.length; M++) {
            var K = f[M];
            Bn(K) && ho(K, C);
          }
        else if (Bn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var we = x(f);
          if (typeof we == "function" && we !== f.entries)
            for (var Re = we.call(f), ye; !(ye = Re.next()).done; )
              Bn(ye.value) && ho(ye.value, C);
        }
      }
    }
    function cl(f) {
      {
        var C = f.type;
        if (C == null || typeof C == "string")
          return;
        var M;
        if (typeof C == "function")
          M = C.propTypes;
        else if (typeof C == "object" && (C.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        C.$$typeof === d))
          M = C.propTypes;
        else
          return;
        if (M) {
          var K = z(C);
          p(M, f.props, "prop", K, f);
        } else if (C.PropTypes !== void 0 && !Wn) {
          Wn = !0;
          var we = z(C);
          T("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && T("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ul(f) {
      {
        for (var C = Object.keys(f.props), M = 0; M < C.length; M++) {
          var K = C[M];
          if (K !== "children" && K !== "key") {
            Yt(f), T("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", K), Yt(null);
            break;
          }
        }
        f.ref !== null && (Yt(f), T("Invalid attribute `ref` supplied to `React.Fragment`."), Yt(null));
      }
    }
    function mo(f, C, M, K, we, Re) {
      {
        var ye = X(f);
        if (!ye) {
          var me = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (me += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = il(we);
          He ? me += He : me += uo();
          var Le;
          f === null ? Le = "null" : _(f) ? Le = "array" : f !== void 0 && f.$$typeof === t ? (Le = "<" + (z(f.type) || "Unknown") + " />", me = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof f, T("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, me);
        }
        var Ve = al(f, C, M, we, Re);
        if (Ve == null)
          return Ve;
        if (ye) {
          var Ke = C.children;
          if (Ke !== void 0)
            if (K)
              if (_(Ke)) {
                for (var Jt = 0; Jt < Ke.length; Jt++)
                  po(Ke[Jt], f);
                Object.freeze && Object.freeze(Ke);
              } else
                T("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              po(Ke, f);
        }
        return f === n ? ul(Ve) : cl(Ve), Ve;
      }
    }
    function dl(f, C, M) {
      return mo(f, C, M, !0);
    }
    function fl(f, C, M) {
      return mo(f, C, M, !1);
    }
    var hl = fl, pl = dl;
    _r.Fragment = n, _r.jsx = hl, _r.jsxs = pl;
  }()), _r;
}
var wr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var go;
function yl() {
  if (go)
    return wr;
  go = 1;
  var e = te, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
  function a(i, l, c) {
    var u, d = {}, h = null, g = null;
    c !== void 0 && (h = "" + c), l.key !== void 0 && (h = "" + l.key), l.ref !== void 0 && (g = l.ref);
    for (u in l)
      n.call(l, u) && !o.hasOwnProperty(u) && (d[u] = l[u]);
    if (i && i.defaultProps)
      for (u in l = i.defaultProps, l)
        d[u] === void 0 && (d[u] = l[u]);
    return { $$typeof: t, type: i, key: h, ref: g, props: d, _owner: s.current };
  }
  return wr.Fragment = r, wr.jsx = a, wr.jsxs = a, wr;
}
process.env.NODE_ENV === "production" ? vs.exports = yl() : vs.exports = vl();
var y = vs.exports;
function ba(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: gl } = Object.prototype, { getPrototypeOf: Vs } = Object, En = /* @__PURE__ */ ((e) => (t) => {
  const r = gl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ft = (e) => (e = e.toLowerCase(), (t) => En(t) === e), Tn = (e) => (t) => typeof t === e, { isArray: pr } = Array, Nr = Tn("undefined");
function bl(e) {
  return e !== null && !Nr(e) && e.constructor !== null && !Nr(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xa = ft("ArrayBuffer");
function xl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xa(e.buffer), t;
}
const _l = Tn("string"), tt = Tn("function"), _a = Tn("number"), On = (e) => e !== null && typeof e == "object", wl = (e) => e === !0 || e === !1, Jr = (e) => {
  if (En(e) !== "object")
    return !1;
  const t = Vs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Sl = ft("Date"), El = ft("File"), Tl = ft("Blob"), Ol = ft("FileList"), Cl = (e) => On(e) && tt(e.pipe), Rl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = En(e)) === "formdata" || // detect form-data instance
  t === "object" && tt(e.toString) && e.toString() === "[object FormData]"));
}, Al = ft("URLSearchParams"), kl = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Dr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), pr(e))
    for (n = 0, s = e.length; n < s; n++)
      t.call(null, e[n], n, e);
  else {
    const o = r ? Object.getOwnPropertyNames(e) : Object.keys(e), a = o.length;
    let i;
    for (n = 0; n < a; n++)
      i = o[n], t.call(null, e[i], i, e);
  }
}
function wa(e, t) {
  t = t.toLowerCase();
  const r = Object.keys(e);
  let n = r.length, s;
  for (; n-- > 0; )
    if (s = r[n], t === s.toLowerCase())
      return s;
  return null;
}
const Sa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ea = (e) => !Nr(e) && e !== Sa;
function ys() {
  const { caseless: e } = Ea(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && wa(t, s) || s;
    Jr(t[o]) && Jr(n) ? t[o] = ys(t[o], n) : Jr(n) ? t[o] = ys({}, n) : pr(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Dr(arguments[n], r);
  return t;
}
const Nl = (e, t, r, { allOwnKeys: n } = {}) => (Dr(t, (s, o) => {
  r && tt(s) ? e[o] = ba(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), Pl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), jl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, $l = (e, t, r, n) => {
  let s, o, a;
  const i = {};
  if (t = t || {}, e == null)
    return t;
  do {
    for (s = Object.getOwnPropertyNames(e), o = s.length; o-- > 0; )
      a = s[o], (!n || n(a, e, t)) && !i[a] && (t[a] = e[a], i[a] = !0);
    e = r !== !1 && Vs(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Il = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Dl = (e) => {
  if (!e)
    return null;
  if (pr(e))
    return e;
  let t = e.length;
  if (!_a(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Ml = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Vs(Uint8Array)), Ll = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Fl = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Vl = ft("HTMLFormElement"), Ul = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), bo = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), zl = ft("RegExp"), Ta = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Dr(r, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (n[o] = a || s);
  }), Object.defineProperties(e, n);
}, Wl = (e) => {
  Ta(e, (t, r) => {
    if (tt(e) && ["arguments", "caller", "callee"].indexOf(r) !== -1)
      return !1;
    const n = e[r];
    if (tt(n)) {
      if (t.enumerable = !1, "writable" in t) {
        t.writable = !1;
        return;
      }
      t.set || (t.set = () => {
        throw Error("Can not rewrite read-only method '" + r + "'");
      });
    }
  });
}, Bl = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return pr(e) ? n(e) : n(String(e).split(t)), r;
}, Zl = () => {
}, ql = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Zn = "abcdefghijklmnopqrstuvwxyz", xo = "0123456789", Oa = {
  DIGIT: xo,
  ALPHA: Zn,
  ALPHA_DIGIT: Zn + Zn.toUpperCase() + xo
}, Hl = (e = 16, t = Oa.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Yl(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Jl = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (On(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = pr(n) ? [] : {};
        return Dr(n, (a, i) => {
          const l = r(a, s + 1);
          !Nr(l) && (o[i] = l);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Gl = ft("AsyncFunction"), Xl = (e) => e && (On(e) || tt(e)) && tt(e.then) && tt(e.catch), S = {
  isArray: pr,
  isArrayBuffer: xa,
  isBuffer: bl,
  isFormData: Rl,
  isArrayBufferView: xl,
  isString: _l,
  isNumber: _a,
  isBoolean: wl,
  isObject: On,
  isPlainObject: Jr,
  isUndefined: Nr,
  isDate: Sl,
  isFile: El,
  isBlob: Tl,
  isRegExp: zl,
  isFunction: tt,
  isStream: Cl,
  isURLSearchParams: Al,
  isTypedArray: Ml,
  isFileList: Ol,
  forEach: Dr,
  merge: ys,
  extend: Nl,
  trim: kl,
  stripBOM: Pl,
  inherits: jl,
  toFlatObject: $l,
  kindOf: En,
  kindOfTest: ft,
  endsWith: Il,
  toArray: Dl,
  forEachEntry: Ll,
  matchAll: Fl,
  isHTMLForm: Vl,
  hasOwnProperty: bo,
  hasOwnProp: bo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ta,
  freezeMethods: Wl,
  toObjectSet: Bl,
  toCamelCase: Ul,
  noop: Zl,
  toFiniteNumber: ql,
  findKey: wa,
  global: Sa,
  isContextDefined: Ea,
  ALPHABET: Oa,
  generateString: Hl,
  isSpecCompliantForm: Yl,
  toJSONObject: Jl,
  isAsyncFn: Gl,
  isThenable: Xl
};
function ge(e, t, r, n, s) {
  Error.call(this), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : this.stack = new Error().stack, this.message = e, this.name = "AxiosError", t && (this.code = t), r && (this.config = r), n && (this.request = n), s && (this.response = s);
}
S.inherits(ge, Error, {
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
      config: S.toJSONObject(this.config),
      code: this.code,
      status: this.response && this.response.status ? this.response.status : null
    };
  }
});
const Ca = ge.prototype, Ra = {};
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
  Ra[e] = { value: e };
});
Object.defineProperties(ge, Ra);
Object.defineProperty(Ca, "isAxiosError", { value: !0 });
ge.from = (e, t, r, n, s, o) => {
  const a = Object.create(Ca);
  return S.toFlatObject(e, a, function(l) {
    return l !== Error.prototype;
  }, (i) => i !== "isAxiosError"), ge.call(a, e.message, t, r, n, s), a.cause = e, a.name = e.name, o && Object.assign(a, o), a;
};
const Kl = null;
function gs(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function Aa(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function _o(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = Aa(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Ql(e) {
  return S.isArray(e) && !e.some(gs);
}
const ec = S.toFlatObject(S, {}, null, function(t) {
  return /^is[A-Z]/.test(t);
});
function Cn(e, t, r) {
  if (!S.isObject(e))
    throw new TypeError("target must be an object");
  t = t || new FormData(), r = S.toFlatObject(r, {
    metaTokens: !0,
    dots: !1,
    indexes: !1
  }, !1, function(v, x) {
    return !S.isUndefined(x[v]);
  });
  const n = r.metaTokens, s = r.visitor || u, o = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
  if (!S.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(m) {
    if (m === null)
      return "";
    if (S.isDate(m))
      return m.toISOString();
    if (!l && S.isBlob(m))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(m) || S.isTypedArray(m) ? l && typeof Blob == "function" ? new Blob([m]) : Buffer.from(m) : m;
  }
  function u(m, v, x) {
    let P = m;
    if (m && !x && typeof m == "object") {
      if (S.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), m = JSON.stringify(m);
      else if (S.isArray(m) && Ql(m) || (S.isFileList(m) || S.endsWith(v, "[]")) && (P = S.toArray(m)))
        return v = Aa(v), P.forEach(function(R, A) {
          !(S.isUndefined(R) || R === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? _o([v], A, o) : a === null ? v : v + "[]",
            c(R)
          );
        }), !1;
    }
    return gs(m) ? !0 : (t.append(_o(x, v, o), c(m)), !1);
  }
  const d = [], h = Object.assign(ec, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: gs
  });
  function g(m, v) {
    if (!S.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(m), S.forEach(m, function(P, T) {
        (!(S.isUndefined(P) || P === null) && s.call(
          t,
          P,
          S.isString(T) ? T.trim() : T,
          v,
          h
        )) === !0 && g(P, v ? v.concat(T) : [T]);
      }), d.pop();
    }
  }
  if (!S.isObject(e))
    throw new TypeError("data must be an object");
  return g(e), t;
}
function wo(e) {
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
function Us(e, t) {
  this._pairs = [], e && Cn(e, this, t);
}
const ka = Us.prototype;
ka.append = function(t, r) {
  this._pairs.push([t, r]);
};
ka.toString = function(t) {
  const r = t ? function(n) {
    return t.call(this, n, wo);
  } : wo;
  return this._pairs.map(function(s) {
    return r(s[0]) + "=" + r(s[1]);
  }, "").join("&");
};
function tc(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Na(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || tc, s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = S.isURLSearchParams(t) ? t.toString() : new Us(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class rc {
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
    S.forEach(this.handlers, function(n) {
      n !== null && t(n);
    });
  }
}
const So = rc, Pa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, nc = typeof URLSearchParams < "u" ? URLSearchParams : Us, sc = typeof FormData < "u" ? FormData : null, oc = typeof Blob < "u" ? Blob : null, ac = {
  isBrowser: !0,
  classes: {
    URLSearchParams: nc,
    FormData: sc,
    Blob: oc
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ja = typeof window < "u" && typeof document < "u", ic = ((e) => ja && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), lc = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", cc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ja,
  hasStandardBrowserEnv: ic,
  hasStandardBrowserWebWorkerEnv: lc
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...cc,
  ...ac
};
function uc(e, t) {
  return Cn(e, new at.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return at.isNode && S.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function dc(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function fc(e) {
  const t = {}, r = Object.keys(e);
  let n;
  const s = r.length;
  let o;
  for (n = 0; n < s; n++)
    o = r[n], t[o] = e[o];
  return t;
}
function $a(e) {
  function t(r, n, s, o) {
    let a = r[o++];
    const i = Number.isFinite(+a), l = o >= r.length;
    return a = !a && S.isArray(s) ? s.length : a, l ? (S.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !i) : ((!s[a] || !S.isObject(s[a])) && (s[a] = []), t(r, n, s[a], o) && S.isArray(s[a]) && (s[a] = fc(s[a])), !i);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const r = {};
    return S.forEachEntry(e, (n, s) => {
      t(dc(n), s, r, 0);
    }), r;
  }
  return null;
}
function hc(e, t, r) {
  if (S.isString(e))
    try {
      return (t || JSON.parse)(e), S.trim(e);
    } catch (n) {
      if (n.name !== "SyntaxError")
        throw n;
    }
  return (r || JSON.stringify)(e);
}
const zs = {
  transitional: Pa,
  adapter: ["xhr", "http"],
  transformRequest: [function(t, r) {
    const n = r.getContentType() || "", s = n.indexOf("application/json") > -1, o = S.isObject(t);
    if (o && S.isHTMLForm(t) && (t = new FormData(t)), S.isFormData(t))
      return s && s ? JSON.stringify($a(t)) : t;
    if (S.isArrayBuffer(t) || S.isBuffer(t) || S.isStream(t) || S.isFile(t) || S.isBlob(t))
      return t;
    if (S.isArrayBufferView(t))
      return t.buffer;
    if (S.isURLSearchParams(t))
      return r.setContentType("application/x-www-form-urlencoded;charset=utf-8", !1), t.toString();
    let i;
    if (o) {
      if (n.indexOf("application/x-www-form-urlencoded") > -1)
        return uc(t, this.formSerializer).toString();
      if ((i = S.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Cn(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), hc(t)) : t;
  }],
  transformResponse: [function(t) {
    const r = this.transitional || zs.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
    if (t && S.isString(t) && (n && !this.responseType || s)) {
      const a = !(r && r.silentJSONParsing) && s;
      try {
        return JSON.parse(t);
      } catch (i) {
        if (a)
          throw i.name === "SyntaxError" ? ge.from(i, ge.ERR_BAD_RESPONSE, this, null, this.response) : i;
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
    FormData: at.classes.FormData,
    Blob: at.classes.Blob
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
S.forEach(["delete", "get", "head", "post", "put", "patch"], (e) => {
  zs.headers[e] = {};
});
const Ws = zs, pc = S.toObjectSet([
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
]), mc = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && pc[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Eo = Symbol("internals");
function Sr(e) {
  return e && String(e).trim().toLowerCase();
}
function Gr(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Gr) : String(e);
}
function vc(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const yc = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function qn(e, t, r, n, s) {
  if (S.isFunction(n))
    return n.call(this, t, r);
  if (s && (t = r), !!S.isString(t)) {
    if (S.isString(n))
      return t.indexOf(n) !== -1;
    if (S.isRegExp(n))
      return n.test(t);
  }
}
function gc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function bc(e, t) {
  const r = S.toCamelCase(" " + t);
  ["get", "set", "has"].forEach((n) => {
    Object.defineProperty(e, n + r, {
      value: function(s, o, a) {
        return this[n].call(this, t, s, o, a);
      },
      configurable: !0
    });
  });
}
class Rn {
  constructor(t) {
    t && this.set(t);
  }
  set(t, r, n) {
    const s = this;
    function o(i, l, c) {
      const u = Sr(l);
      if (!u)
        throw new Error("header name must be a non-empty string");
      const d = S.findKey(s, u);
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || l] = Gr(i));
    }
    const a = (i, l) => S.forEach(i, (c, u) => o(c, u, l));
    return S.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : S.isString(t) && (t = t.trim()) && !yc(t) ? a(mc(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = Sr(t), t) {
      const n = S.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return vc(s);
        if (S.isFunction(r))
          return r.call(this, s, n);
        if (S.isRegExp(r))
          return r.exec(s);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(t, r) {
    if (t = Sr(t), t) {
      const n = S.findKey(this, t);
      return !!(n && this[n] !== void 0 && (!r || qn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(a) {
      if (a = Sr(a), a) {
        const i = S.findKey(n, a);
        i && (!r || qn(n, n[i], i, r)) && (delete n[i], s = !0);
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || qn(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return S.forEach(this, (s, o) => {
      const a = S.findKey(n, o);
      if (a) {
        r[a] = Gr(s), delete r[o];
        return;
      }
      const i = t ? gc(o) : String(o).trim();
      i !== o && delete r[o], r[i] = Gr(s), n[i] = !0;
    }), this;
  }
  concat(...t) {
    return this.constructor.concat(this, ...t);
  }
  toJSON(t) {
    const r = /* @__PURE__ */ Object.create(null);
    return S.forEach(this, (n, s) => {
      n != null && n !== !1 && (r[s] = t && S.isArray(n) ? n.join(", ") : n);
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
    const n = (this[Eo] = this[Eo] = {
      accessors: {}
    }).accessors, s = this.prototype;
    function o(a) {
      const i = Sr(a);
      n[i] || (bc(s, a), n[i] = !0);
    }
    return S.isArray(t) ? t.forEach(o) : o(t), this;
  }
}
Rn.accessor(["Content-Type", "Content-Length", "Accept", "Accept-Encoding", "User-Agent", "Authorization"]);
S.reduceDescriptors(Rn.prototype, ({ value: e }, t) => {
  let r = t[0].toUpperCase() + t.slice(1);
  return {
    get: () => e,
    set(n) {
      this[r] = n;
    }
  };
});
S.freezeMethods(Rn);
const _t = Rn;
function Hn(e, t) {
  const r = this || Ws, n = t || r, s = _t.from(n.headers);
  let o = n.data;
  return S.forEach(e, function(i) {
    o = i.call(r, o, s.normalize(), t ? t.status : void 0);
  }), s.normalize(), o;
}
function Ia(e) {
  return !!(e && e.__CANCEL__);
}
function Mr(e, t, r) {
  ge.call(this, e ?? "canceled", ge.ERR_CANCELED, t, r), this.name = "CanceledError";
}
S.inherits(Mr, ge, {
  __CANCEL__: !0
});
function xc(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ge(
    "Request failed with status code " + r.status,
    [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const _c = at.hasStandardBrowserEnv ? (
  // Standard browser envs support document.cookie
  {
    write(e, t, r, n, s, o) {
      const a = [e + "=" + encodeURIComponent(t)];
      S.isNumber(r) && a.push("expires=" + new Date(r).toGMTString()), S.isString(n) && a.push("path=" + n), S.isString(s) && a.push("domain=" + s), o === !0 && a.push("secure"), document.cookie = a.join("; ");
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
function wc(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function Sc(e, t) {
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Da(e, t) {
  return e && !wc(t) ? Sc(e, t) : t;
}
const Ec = at.hasStandardBrowserEnv ? (
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
      const i = S.isString(a) ? s(a) : a;
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
function Tc(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Oc(e, t) {
  e = e || 10;
  const r = new Array(e), n = new Array(e);
  let s = 0, o = 0, a;
  return t = t !== void 0 ? t : 1e3, function(l) {
    const c = Date.now(), u = n[o];
    a || (a = c), r[s] = l, n[s] = c;
    let d = o, h = 0;
    for (; d !== s; )
      h += r[d++], d = d % e;
    if (s = (s + 1) % e, s === o && (o = (o + 1) % e), c - a < t)
      return;
    const g = u && c - u;
    return g ? Math.round(h * 1e3 / g) : void 0;
  };
}
function To(e, t) {
  let r = 0;
  const n = Oc(50, 250);
  return (s) => {
    const o = s.loaded, a = s.lengthComputable ? s.total : void 0, i = o - r, l = n(i), c = o <= a;
    r = o;
    const u = {
      loaded: o,
      total: a,
      progress: a ? o / a : void 0,
      bytes: i,
      rate: l || void 0,
      estimated: l && a && c ? (a - o) / l : void 0,
      event: s
    };
    u[t ? "download" : "upload"] = !0, e(u);
  };
}
const Cc = typeof XMLHttpRequest < "u", Rc = Cc && function(e) {
  return new Promise(function(r, n) {
    let s = e.data;
    const o = _t.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: i } = e, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    if (S.isFormData(s)) {
      if (at.hasStandardBrowserEnv || at.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((u = o.getContentType()) !== !1) {
        const [v, ...x] = u ? u.split(";").map((P) => P.trim()).filter(Boolean) : [];
        o.setContentType([v || "multipart/form-data", ...x].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const v = e.auth.username || "", x = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(v + ":" + x));
    }
    const h = Da(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), Na(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function g() {
      if (!d)
        return;
      const v = _t.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), P = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: v,
        config: e,
        request: d
      };
      xc(function(R) {
        r(R), c();
      }, function(R) {
        n(R), c();
      }, P), d = null;
    }
    if ("onloadend" in d ? d.onloadend = g : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, d.onabort = function() {
      d && (n(new ge("Request aborted", ge.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new ge("Network Error", ge.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let x = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const P = e.transitional || Pa;
      e.timeoutErrorMessage && (x = e.timeoutErrorMessage), n(new ge(
        x,
        P.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        e,
        d
      )), d = null;
    }, at.hasStandardBrowserEnv && (i && S.isFunction(i) && (i = i(e)), i || i !== !1 && Ec(h))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && _c.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in d && S.forEach(o.toJSON(), function(x, P) {
      d.setRequestHeader(P, x);
    }), S.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", To(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", To(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      d && (n(!v || v.type ? new Mr(null, e, d) : v), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const m = Tc(h);
    if (m && at.protocols.indexOf(m) === -1) {
      n(new ge("Unsupported protocol " + m + ":", ge.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, bs = {
  http: Kl,
  xhr: Rc
};
S.forEach(bs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Oo = (e) => `- ${e}`, Ac = (e) => S.isFunction(e) || e === null || e === !1, Ma = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let a;
      if (n = r, !Ac(r) && (n = bs[(a = String(r)).toLowerCase()], n === void 0))
        throw new ge(`Unknown adapter '${a}'`);
      if (n)
        break;
      s[a || "#" + o] = n;
    }
    if (!n) {
      const o = Object.entries(s).map(
        ([i, l]) => `adapter ${i} ` + (l === !1 ? "is not supported by the environment" : "is not available in the build")
      );
      let a = t ? o.length > 1 ? `since :
` + o.map(Oo).join(`
`) : " " + Oo(o[0]) : "as no adapter specified";
      throw new ge(
        "There is no suitable adapter to dispatch the request " + a,
        "ERR_NOT_SUPPORT"
      );
    }
    return n;
  },
  adapters: bs
};
function Yn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Mr(null, e);
}
function Co(e) {
  return Yn(e), e.headers = _t.from(e.headers), e.data = Hn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Ma.getAdapter(e.adapter || Ws.adapter)(e).then(function(n) {
    return Yn(e), n.data = Hn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = _t.from(n.headers), n;
  }, function(n) {
    return Ia(n) || (Yn(e), n && n.response && (n.response.data = Hn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = _t.from(n.response.headers))), Promise.reject(n);
  });
}
const Ro = (e) => e instanceof _t ? e.toJSON() : e;
function ir(e, t) {
  t = t || {};
  const r = {};
  function n(c, u, d) {
    return S.isPlainObject(c) && S.isPlainObject(u) ? S.merge.call({ caseless: d }, c, u) : S.isPlainObject(u) ? S.merge({}, u) : S.isArray(u) ? u.slice() : u;
  }
  function s(c, u, d) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(c))
        return n(void 0, c, d);
    } else
      return n(c, u, d);
  }
  function o(c, u) {
    if (!S.isUndefined(u))
      return n(void 0, u);
  }
  function a(c, u) {
    if (S.isUndefined(u)) {
      if (!S.isUndefined(c))
        return n(void 0, c);
    } else
      return n(void 0, u);
  }
  function i(c, u, d) {
    if (d in t)
      return n(c, u);
    if (d in e)
      return n(void 0, c);
  }
  const l = {
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
    headers: (c, u) => s(Ro(c), Ro(u), !0)
  };
  return S.forEach(Object.keys(Object.assign({}, e, t)), function(u) {
    const d = l[u] || s, h = d(e[u], t[u], u);
    S.isUndefined(h) && d !== i || (r[u] = h);
  }), r;
}
const La = "1.6.3", Bs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Bs[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const Ao = {};
Bs.transitional = function(t, r, n) {
  function s(o, a) {
    return "[Axios v" + La + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new ge(
        s(a, " has been removed" + (r ? " in " + r : "")),
        ge.ERR_DEPRECATED
      );
    return r && !Ao[a] && (Ao[a] = !0, console.warn(
      s(
        a,
        " has been deprecated since v" + r + " and will be removed in the near future"
      )
    )), t ? t(o, a, i) : !0;
  };
};
function kc(e, t, r) {
  if (typeof e != "object")
    throw new ge("options must be an object", ge.ERR_BAD_OPTION_VALUE);
  const n = Object.keys(e);
  let s = n.length;
  for (; s-- > 0; ) {
    const o = n[s], a = t[o];
    if (a) {
      const i = e[o], l = i === void 0 || a(i, o, e);
      if (l !== !0)
        throw new ge("option " + o + " must be " + l, ge.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (r !== !0)
      throw new ge("Unknown option " + o, ge.ERR_BAD_OPTION);
  }
}
const xs = {
  assertOptions: kc,
  validators: Bs
}, Rt = xs.validators;
class rn {
  constructor(t) {
    this.defaults = t, this.interceptors = {
      request: new So(),
      response: new So()
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ir(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && xs.assertOptions(n, {
      silentJSONParsing: Rt.transitional(Rt.boolean),
      forcedJSONParsing: Rt.transitional(Rt.boolean),
      clarifyTimeoutError: Rt.transitional(Rt.boolean)
    }, !1), s != null && (S.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : xs.assertOptions(s, {
      encode: Rt.function,
      serialize: Rt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = o && S.merge(
      o.common,
      o[r.method]
    );
    o && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (m) => {
        delete o[m];
      }
    ), r.headers = _t.concat(a, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(v) {
      typeof v.runWhen == "function" && v.runWhen(r) === !1 || (l = l && v.synchronous, i.unshift(v.fulfilled, v.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(v) {
      c.push(v.fulfilled, v.rejected);
    });
    let u, d = 0, h;
    if (!l) {
      const m = [Co.bind(this), void 0];
      for (m.unshift.apply(m, i), m.push.apply(m, c), h = m.length, u = Promise.resolve(r); d < h; )
        u = u.then(m[d++], m[d++]);
      return u;
    }
    h = i.length;
    let g = r;
    for (d = 0; d < h; ) {
      const m = i[d++], v = i[d++];
      try {
        g = m(g);
      } catch (x) {
        v.call(this, x);
        break;
      }
    }
    try {
      u = Co.call(this, g);
    } catch (m) {
      return Promise.reject(m);
    }
    for (d = 0, h = c.length; d < h; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = ir(this.defaults, t);
    const r = Da(t.baseURL, t.url);
    return Na(r, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
  rn.prototype[t] = function(r, n) {
    return this.request(ir(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, i) {
      return this.request(ir(i || {}, {
        method: t,
        headers: n ? {
          "Content-Type": "multipart/form-data"
        } : {},
        url: o,
        data: a
      }));
    };
  }
  rn.prototype[t] = r(), rn.prototype[t + "Form"] = r(!0);
});
const Xr = rn;
class Zs {
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
      n.reason || (n.reason = new Mr(o, a, i), r(n.reason));
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
      token: new Zs(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Nc = Zs;
function Pc(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function jc(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const _s = {
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
Object.entries(_s).forEach(([e, t]) => {
  _s[t] = e;
});
const $c = _s;
function Fa(e) {
  const t = new Xr(e), r = ba(Xr.prototype.request, t);
  return S.extend(r, Xr.prototype, t, { allOwnKeys: !0 }), S.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Fa(ir(e, s));
  }, r;
}
const Ue = Fa(Ws);
Ue.Axios = Xr;
Ue.CanceledError = Mr;
Ue.CancelToken = Nc;
Ue.isCancel = Ia;
Ue.VERSION = La;
Ue.toFormData = Cn;
Ue.AxiosError = ge;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(t) {
  return Promise.all(t);
};
Ue.spread = Pc;
Ue.isAxiosError = jc;
Ue.mergeConfig = ir;
Ue.AxiosHeaders = _t;
Ue.formToJSON = (e) => $a(S.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = Ma.getAdapter;
Ue.HttpStatusCode = $c;
Ue.default = Ue;
const mr = Ue, Ic = (e, t) => mr.get(`${e}/chat/room`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), Dc = (e, t, r, n, s) => mr.get(`${e}/chat/room/${r}/message?ts_st=${n || ""}&ts_en=${s || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((o) => {
  if (o.data.code === 200)
    return o.data.payload;
  throw new Error(o.data.message_ui || o.data.message);
}), Mc = (e, t, r, n) => mr.post(`${e}/chat/room/${n}/message`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((s) => {
  if (s.data.code === 200)
    return s.data.payload;
  throw new Error(s.data.message_ui || s.data.message);
}), Lc = (e, t) => mr.get(`${e}/chat/token`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), Va = (e, t, r) => mr.get(`${e}/chat/room/${r}/attendant`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), Fc = (e, t, r) => mr.get(`${e}/chat/room/${r}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
});
var Vc = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ko = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (l, c) => {
    const u = typeof l == "function" ? l(t) : l;
    if (!Object.is(u, t)) {
      const d = t;
      t = c ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((h) => h(t, d));
    }
  }, s = () => t, i = { setState: n, getState: s, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    (Vc ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return t = e(n, s, i), i;
}, Uc = (e) => e ? ko(e) : ko;
var ws = { exports: {} }, Jn = {}, Br = { exports: {} }, Gn = {};
/**
 * @license React
 * use-sync-external-store-shim.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var No;
function zc() {
  return No || (No = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = te, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(R) {
      {
        for (var A = arguments.length, w = new Array(A > 1 ? A - 1 : 0), U = 1; U < A; U++)
          w[U - 1] = arguments[U];
        n("error", R, w);
      }
    }
    function n(R, A, w) {
      {
        var U = t.ReactDebugCurrentFrame, J = U.getStackAddendum();
        J !== "" && (A += "%s", w = w.concat([J]));
        var ue = w.map(function(W) {
          return String(W);
        });
        ue.unshift("Warning: " + A), Function.prototype.apply.call(console[R], console, ue);
      }
    }
    function s(R, A) {
      return R === A && (R !== 0 || 1 / R === 1 / A) || R !== R && A !== A;
    }
    var o = typeof Object.is == "function" ? Object.is : s, a = e.useState, i = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, u = !1, d = !1;
    function h(R, A, w) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var U = A();
      if (!d) {
        var J = A();
        o(U, J) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var ue = a({
        inst: {
          value: U,
          getSnapshot: A
        }
      }), W = ue[0].inst, X = ue[1];
      return l(function() {
        W.value = U, W.getSnapshot = A, g(W) && X({
          inst: W
        });
      }, [R, U, A]), i(function() {
        g(W) && X({
          inst: W
        });
        var be = function() {
          g(W) && X({
            inst: W
          });
        };
        return R(be);
      }, [R]), c(U), U;
    }
    function g(R) {
      var A = R.getSnapshot, w = R.value;
      try {
        var U = A();
        return !o(w, U);
      } catch {
        return !0;
      }
    }
    function m(R, A, w) {
      return A();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", x = !v, P = x ? m : h, T = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : P;
    Gn.useSyncExternalStore = T, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Gn;
}
var Xn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function Wc() {
  if (Po)
    return Xn;
  Po = 1;
  var e = te;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, s = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function i(d, h) {
    var g = h(), m = n({ inst: { value: g, getSnapshot: h } }), v = m[0].inst, x = m[1];
    return o(function() {
      v.value = g, v.getSnapshot = h, l(v) && x({ inst: v });
    }, [d, g, h]), s(function() {
      return l(v) && x({ inst: v }), d(function() {
        l(v) && x({ inst: v });
      });
    }, [d]), a(g), g;
  }
  function l(d) {
    var h = d.getSnapshot;
    d = d.value;
    try {
      var g = h();
      return !r(d, g);
    } catch {
      return !0;
    }
  }
  function c(d, h) {
    return h();
  }
  var u = typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u" ? c : i;
  return Xn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Xn;
}
var jo;
function Ua() {
  return jo || (jo = 1, process.env.NODE_ENV === "production" ? Br.exports = Wc() : Br.exports = zc()), Br.exports;
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
var $o;
function Bc() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = te, t = Ua();
    function r(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, l = e.useDebugValue;
    function c(u, d, h, g, m) {
      var v = o(null), x;
      v.current === null ? (x = {
        hasValue: !1,
        value: null
      }, v.current = x) : x = v.current;
      var P = i(function() {
        var w = !1, U, J, ue = function(E) {
          if (!w) {
            w = !0, U = E;
            var z = g(E);
            if (m !== void 0 && x.hasValue) {
              var B = x.value;
              if (m(B, z))
                return J = B, B;
            }
            return J = z, z;
          }
          var de = U, ce = J;
          if (n(de, E))
            return ce;
          var ve = g(E);
          return m !== void 0 && m(ce, ve) ? ce : (U = E, J = ve, ve);
        }, W = h === void 0 ? null : h, X = function() {
          return ue(d());
        }, be = W === null ? void 0 : function() {
          return ue(W());
        };
        return [X, be];
      }, [d, h, g, m]), T = P[0], R = P[1], A = s(u, T, R);
      return a(function() {
        x.hasValue = !0, x.value = A;
      }, [A]), l(A), A;
    }
    Jn.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Jn;
}
var Kn = {};
/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io;
function Zc() {
  if (Io)
    return Kn;
  Io = 1;
  var e = te, t = Ua();
  function r(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, l = e.useDebugValue;
  return Kn.useSyncExternalStoreWithSelector = function(c, u, d, h, g) {
    var m = o(null);
    if (m.current === null) {
      var v = { hasValue: !1, value: null };
      m.current = v;
    } else
      v = m.current;
    m = i(function() {
      function P(U) {
        if (!T) {
          if (T = !0, R = U, U = h(U), g !== void 0 && v.hasValue) {
            var J = v.value;
            if (g(J, U))
              return A = J;
          }
          return A = U;
        }
        if (J = A, n(R, U))
          return J;
        var ue = h(U);
        return g !== void 0 && g(J, ue) ? J : (R = U, A = ue);
      }
      var T = !1, R, A, w = d === void 0 ? null : d;
      return [function() {
        return P(u());
      }, w === null ? void 0 : function() {
        return P(w());
      }];
    }, [u, d, h, g]);
    var x = s(c, m[0], m[1]);
    return a(function() {
      v.hasValue = !0, v.value = x;
    }, [x]), l(x), x;
  }, Kn;
}
process.env.NODE_ENV === "production" ? ws.exports = Zc() : ws.exports = Bc();
var qc = ws.exports;
const Hc = /* @__PURE__ */ ga(qc);
var qs = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Yc } = te, { useSyncExternalStoreWithSelector: Jc } = Hc;
let Do = !1;
function Gc(e, t = e.getState, r) {
  (qs ? "production" : void 0) !== "production" && r && !Do && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Do = !0);
  const n = Jc(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Yc(n), n;
}
const Mo = (e) => {
  (qs ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Uc(e) : e, r = (n, s) => Gc(t, n, s);
  return Object.assign(r, t), r;
}, za = (e) => e ? Mo(e) : Mo;
var Xc = (e) => ((qs ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
), za(e));
const Kc = {
  chatRoom: [],
  rooms: {},
  isLoading: !1,
  error: null
}, Qc = za((e) => ({
  ...Kc,
  fetchChatRoom: async (t, r) => {
    try {
      e({ isLoading: !0, error: null });
      const n = await Ic(t, r);
      e({ chatRoom: n, isLoading: !1, error: null });
    } catch (n) {
      throw console.error("fetchChatRoom", n), e({ error: n }), n;
    }
  }
})), eu = {
  rooms: {},
  profile: [],
  socket: null,
  socketStatus: !1,
  sending: !1
}, Hs = Xc((e, t) => ({
  ...eu,
  // Connect to WebSocket
  connectWebSocket: async (r, n, s) => {
    const { socketStatus: o } = t();
    if (o)
      return;
    const a = await Lc(r, s), i = new WebSocket(n + "?token=" + a);
    i.onopen = () => {
      e({ socket: i, socketStatus: !0 });
    }, i.onmessage = (l) => {
      const c = JSON.parse(l.data), { room_id: u } = c;
      e((d) => ({
        rooms: {
          ...d.rooms,
          [u]: [...d.rooms[u] || [], c]
        }
      }));
    }, i.onclose = () => {
      e({ socket: i, socketStatus: !1 });
    }, i.onerror = (l) => {
      e({ socket: i, socketStatus: !1 }), console.log(l);
    };
  },
  // Disconnect WebSocket
  disconnectWebSocket: () => {
    const { socket: r } = t();
    r && r.readyState === WebSocket.OPEN && (r.close(), e({ socket: r, socketStatus: !1 }));
  },
  // Send a message through WebSocket and API
  sendMessage: async (r, n, s, o) => {
    const { socket: a } = Hs.getState();
    if (a && a.readyState === WebSocket.OPEN)
      try {
        e(() => ({ sending: !0 })), await Mc(r, n, s, o), a.send(JSON.stringify({ action: "sendmessage", data: s })), e(() => ({ sending: !1 }));
      } catch (i) {
        console.log(i), e(() => ({ sending: !1 }));
      }
  },
  // Fetch chat messages from API
  fetchChatMessage: async (r, n, s, o, a) => {
    try {
      const i = await Dc(r, n, s, o, a);
      e((l) => {
        const d = [...l.rooms[s] || [], ...i].reduce((h, g) => (h.findIndex((v) => v.id === g.id) < 0 && h.push(g), h), []);
        return {
          rooms: {
            ...l.rooms,
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
      const o = await Va(r, n, s);
      e({ profile: o });
    } catch (o) {
      console.log(o);
    }
  }
}));
function Wa(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = Wa(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ba() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = Wa(e)) && (n && (n += " "), n += t);
  return n;
}
const Ys = "-";
function tu(e) {
  const t = nu(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function s(a) {
    const i = a.split(Ys);
    return i[0] === "" && i.length !== 1 && i.shift(), Za(i, t) || ru(a);
  }
  function o(a, i) {
    const l = r[a] || [];
    return i && n[a] ? [...l, ...n[a]] : l;
  }
  return {
    getClassGroupId: s,
    getConflictingClassGroupIds: o
  };
}
function Za(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? Za(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const o = e.join(Ys);
  return (a = t.validators.find(({
    validator: i
  }) => i(o))) == null ? void 0 : a.classGroupId;
}
const Lo = /^\[(.+)\]$/;
function ru(e) {
  if (Lo.test(e)) {
    const t = Lo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function nu(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return ou(Object.entries(e.classGroups), r).forEach(([o, a]) => {
    Ss(a, n, o, t);
  }), n;
}
function Ss(e, t, r, n) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? t : Fo(t, s);
      o.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (su(s)) {
        Ss(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([o, a]) => {
      Ss(a, Fo(t, o), r, n);
    });
  });
}
function Fo(e, t) {
  let r = e;
  return t.split(Ys).forEach((n) => {
    r.nextPart.has(n) || r.nextPart.set(n, {
      nextPart: /* @__PURE__ */ new Map(),
      validators: []
    }), r = r.nextPart.get(n);
  }), r;
}
function su(e) {
  return e.isThemeGetter;
}
function ou(e, t) {
  return t ? e.map(([r, n]) => {
    const s = n.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, i]) => [t + a, i])) : o);
    return [r, s];
  }) : e;
}
function au(e) {
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
const qa = "!";
function iu(e) {
  const t = e.separator, r = t.length === 1, n = t[0], s = t.length;
  return function(a) {
    const i = [];
    let l = 0, c = 0, u;
    for (let v = 0; v < a.length; v++) {
      let x = a[v];
      if (l === 0) {
        if (x === n && (r || a.slice(v, v + s) === t)) {
          i.push(a.slice(c, v)), c = v + s;
          continue;
        }
        if (x === "/") {
          u = v;
          continue;
        }
      }
      x === "[" ? l++ : x === "]" && l--;
    }
    const d = i.length === 0 ? a : a.substring(c), h = d.startsWith(qa), g = h ? d.substring(1) : d, m = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: m
    };
  };
}
function lu(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function cu(e) {
  return {
    cache: au(e.cacheSize),
    splitModifiers: iu(e),
    ...tu(e)
  };
}
const uu = /\s+/;
function du(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split(uu).map((a) => {
    const {
      modifiers: i,
      hasImportantModifier: l,
      baseClassName: c,
      maybePostfixModifierPosition: u
    } = r(a);
    let d = n(u ? c.substring(0, u) : c), h = !!u;
    if (!d) {
      if (!u)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      if (d = n(c), !d)
        return {
          isTailwindClass: !1,
          originalClassName: a
        };
      h = !1;
    }
    const g = lu(i).join(":");
    return {
      isTailwindClass: !0,
      modifierId: l ? g + qa : g,
      classGroupId: d,
      originalClassName: a,
      hasPostfixModifier: h
    };
  }).reverse().filter((a) => {
    if (!a.isTailwindClass)
      return !0;
    const {
      modifierId: i,
      classGroupId: l,
      hasPostfixModifier: c
    } = a, u = i + l;
    return o.has(u) ? !1 : (o.add(u), s(l, c).forEach((d) => o.add(i + d)), !0);
  }).reverse().map((a) => a.originalClassName).join(" ");
}
function fu() {
  let e = 0, t, r, n = "";
  for (; e < arguments.length; )
    (t = arguments[e++]) && (r = Ha(t)) && (n && (n += " "), n += r);
  return n;
}
function Ha(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = Ha(e[n])) && (r && (r += " "), r += t);
  return r;
}
function hu(e, ...t) {
  let r, n, s, o = a;
  function a(l) {
    const c = t.reduce((u, d) => d(u), e());
    return r = cu(c), n = r.cache.get, s = r.cache.set, o = i, i(l);
  }
  function i(l) {
    const c = n(l);
    if (c)
      return c;
    const u = du(l, r);
    return s(l, u), u;
  }
  return function() {
    return o(fu.apply(null, arguments));
  };
}
function Pe(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Ya = /^\[(?:([a-z-]+):)?(.+)\]$/i, pu = /^\d+\/\d+$/, mu = /* @__PURE__ */ new Set(["px", "full", "screen"]), vu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gu = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function mt(e) {
  return zt(e) || mu.has(e) || pu.test(e);
}
function At(e) {
  return vr(e, "length", Cu);
}
function zt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Zr(e) {
  return vr(e, "number", zt);
}
function Er(e) {
  return !!e && Number.isInteger(Number(e));
}
function xu(e) {
  return e.endsWith("%") && zt(e.slice(0, -1));
}
function ie(e) {
  return Ya.test(e);
}
function kt(e) {
  return vu.test(e);
}
const _u = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function wu(e) {
  return vr(e, _u, Ja);
}
function Su(e) {
  return vr(e, "position", Ja);
}
const Eu = /* @__PURE__ */ new Set(["image", "url"]);
function Tu(e) {
  return vr(e, Eu, Au);
}
function Ou(e) {
  return vr(e, "", Ru);
}
function Tr() {
  return !0;
}
function vr(e, t, r) {
  const n = Ya.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function Cu(e) {
  return yu.test(e);
}
function Ja() {
  return !1;
}
function Ru(e) {
  return gu.test(e);
}
function Au(e) {
  return bu.test(e);
}
function ku() {
  const e = Pe("colors"), t = Pe("spacing"), r = Pe("blur"), n = Pe("brightness"), s = Pe("borderColor"), o = Pe("borderRadius"), a = Pe("borderSpacing"), i = Pe("borderWidth"), l = Pe("contrast"), c = Pe("grayscale"), u = Pe("hueRotate"), d = Pe("invert"), h = Pe("gap"), g = Pe("gradientColorStops"), m = Pe("gradientColorStopPositions"), v = Pe("inset"), x = Pe("margin"), P = Pe("opacity"), T = Pe("padding"), R = Pe("saturate"), A = Pe("scale"), w = Pe("sepia"), U = Pe("skew"), J = Pe("space"), ue = Pe("translate"), W = () => ["auto", "contain", "none"], X = () => ["auto", "hidden", "clip", "visible", "scroll"], be = () => ["auto", ie, t], E = () => [ie, t], z = () => ["", mt, At], B = () => ["auto", zt, ie], de = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], ce = () => ["solid", "dashed", "dotted", "double", "none"], ve = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ze = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ie = () => ["", "0", ie], O = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [zt, Zr], Y = () => [zt, ie];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Tr],
      spacing: [mt, At],
      blur: ["none", "", kt, ie],
      brightness: j(),
      borderColor: [e],
      borderRadius: ["none", "", "full", kt, ie],
      borderSpacing: E(),
      borderWidth: z(),
      contrast: j(),
      grayscale: Ie(),
      hueRotate: Y(),
      invert: Ie(),
      gap: E(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xu, At],
      inset: be(),
      margin: be(),
      opacity: j(),
      padding: E(),
      saturate: j(),
      scale: j(),
      sepia: Ie(),
      skew: Y(),
      space: E(),
      translate: E()
    },
    classGroups: {
      // Layout
      /**
       * Aspect Ratio
       * @see https://tailwindcss.com/docs/aspect-ratio
       */
      aspect: [{
        aspect: ["auto", "square", "video", ie]
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
        columns: [kt]
      }],
      /**
       * Break After
       * @see https://tailwindcss.com/docs/break-after
       */
      "break-after": [{
        "break-after": O()
      }],
      /**
       * Break Before
       * @see https://tailwindcss.com/docs/break-before
       */
      "break-before": [{
        "break-before": O()
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
        object: [...de(), ie]
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
        overscroll: W()
      }],
      /**
       * Overscroll Behavior X
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-x": [{
        "overscroll-x": W()
      }],
      /**
       * Overscroll Behavior Y
       * @see https://tailwindcss.com/docs/overscroll-behavior
       */
      "overscroll-y": [{
        "overscroll-y": W()
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
        inset: [v]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [v]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [v]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [v]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [v]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [v]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [v]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [v]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [v]
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
        z: ["auto", Er, ie]
      }],
      // Flexbox and Grid
      /**
       * Flex Basis
       * @see https://tailwindcss.com/docs/flex-basis
       */
      basis: [{
        basis: be()
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
        flex: ["1", "auto", "initial", "none", ie]
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
        order: ["first", "last", "none", Er, ie]
      }],
      /**
       * Grid Template Columns
       * @see https://tailwindcss.com/docs/grid-template-columns
       */
      "grid-cols": [{
        "grid-cols": [Tr]
      }],
      /**
       * Grid Column Start / End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start-end": [{
        col: ["auto", {
          span: ["full", Er, ie]
        }, ie]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": B()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": B()
      }],
      /**
       * Grid Template Rows
       * @see https://tailwindcss.com/docs/grid-template-rows
       */
      "grid-rows": [{
        "grid-rows": [Tr]
      }],
      /**
       * Grid Row Start / End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start-end": [{
        row: ["auto", {
          span: [Er, ie]
        }, ie]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": B()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": B()
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
        "auto-cols": ["auto", "min", "max", "fr", ie]
      }],
      /**
       * Grid Auto Rows
       * @see https://tailwindcss.com/docs/grid-auto-rows
       */
      "auto-rows": [{
        "auto-rows": ["auto", "min", "max", "fr", ie]
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
        p: [T]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [T]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [T]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [T]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [T]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [T]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [T]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [T]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [T]
      }],
      /**
       * Margin
       * @see https://tailwindcss.com/docs/margin
       */
      m: [{
        m: [x]
      }],
      /**
       * Margin X
       * @see https://tailwindcss.com/docs/margin
       */
      mx: [{
        mx: [x]
      }],
      /**
       * Margin Y
       * @see https://tailwindcss.com/docs/margin
       */
      my: [{
        my: [x]
      }],
      /**
       * Margin Start
       * @see https://tailwindcss.com/docs/margin
       */
      ms: [{
        ms: [x]
      }],
      /**
       * Margin End
       * @see https://tailwindcss.com/docs/margin
       */
      me: [{
        me: [x]
      }],
      /**
       * Margin Top
       * @see https://tailwindcss.com/docs/margin
       */
      mt: [{
        mt: [x]
      }],
      /**
       * Margin Right
       * @see https://tailwindcss.com/docs/margin
       */
      mr: [{
        mr: [x]
      }],
      /**
       * Margin Bottom
       * @see https://tailwindcss.com/docs/margin
       */
      mb: [{
        mb: [x]
      }],
      /**
       * Margin Left
       * @see https://tailwindcss.com/docs/margin
       */
      ml: [{
        ml: [x]
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
        w: ["auto", "min", "max", "fit", "svw", "lvw", "dvw", ie, t]
      }],
      /**
       * Min-Width
       * @see https://tailwindcss.com/docs/min-width
       */
      "min-w": [{
        "min-w": [ie, t, "min", "max", "fit"]
      }],
      /**
       * Max-Width
       * @see https://tailwindcss.com/docs/max-width
       */
      "max-w": [{
        "max-w": [ie, t, "none", "full", "min", "max", "fit", "prose", {
          screen: [kt]
        }, kt]
      }],
      /**
       * Height
       * @see https://tailwindcss.com/docs/height
       */
      h: [{
        h: [ie, t, "auto", "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Min-Height
       * @see https://tailwindcss.com/docs/min-height
       */
      "min-h": [{
        "min-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Max-Height
       * @see https://tailwindcss.com/docs/max-height
       */
      "max-h": [{
        "max-h": [ie, t, "min", "max", "fit", "svh", "lvh", "dvh"]
      }],
      /**
       * Size
       * @see https://tailwindcss.com/docs/size
       */
      size: [{
        size: [ie, t, "auto", "min", "max", "fit"]
      }],
      // Typography
      /**
       * Font Size
       * @see https://tailwindcss.com/docs/font-size
       */
      "font-size": [{
        text: ["base", kt, At]
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
        font: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black", Zr]
      }],
      /**
       * Font Family
       * @see https://tailwindcss.com/docs/font-family
       */
      "font-family": [{
        font: [Tr]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ie]
      }],
      /**
       * Line Clamp
       * @see https://tailwindcss.com/docs/line-clamp
       */
      "line-clamp": [{
        "line-clamp": ["none", zt, Zr]
      }],
      /**
       * Line Height
       * @see https://tailwindcss.com/docs/line-height
       */
      leading: [{
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mt, ie]
      }],
      /**
       * List Style Image
       * @see https://tailwindcss.com/docs/list-style-image
       */
      "list-image": [{
        "list-image": ["none", ie]
      }],
      /**
       * List Style Type
       * @see https://tailwindcss.com/docs/list-style-type
       */
      "list-style-type": [{
        list: ["none", "disc", "decimal", ie]
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
        "placeholder-opacity": [P]
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
        "text-opacity": [P]
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
        decoration: [...ce(), "wavy"]
      }],
      /**
       * Text Decoration Thickness
       * @see https://tailwindcss.com/docs/text-decoration-thickness
       */
      "text-decoration-thickness": [{
        decoration: ["auto", "from-font", mt, At]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", mt, ie]
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
        indent: E()
      }],
      /**
       * Vertical Alignment
       * @see https://tailwindcss.com/docs/vertical-align
       */
      "vertical-align": [{
        align: ["baseline", "top", "middle", "bottom", "text-top", "text-bottom", "sub", "super", ie]
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
        content: ["none", ie]
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
        "bg-opacity": [P]
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
        bg: [...de(), Su]
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
        bg: ["auto", "cover", "contain", wu]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Tu]
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
        from: [m]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [m]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [m]
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
        "border-opacity": [P]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...ce(), "hidden"]
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
        "divide-opacity": [P]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: ce()
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
        outline: ["", ...ce()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [mt, ie]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [mt, At]
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
        ring: z()
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
        "ring-opacity": [P]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [mt, At]
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
        shadow: ["", "inner", "none", kt, Ou]
      }],
      /**
       * Box Shadow Color
       * @see https://tailwindcss.com/docs/box-shadow-color
       */
      "shadow-color": [{
        shadow: [Tr]
      }],
      /**
       * Opacity
       * @see https://tailwindcss.com/docs/opacity
       */
      opacity: [{
        opacity: [P]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": ve()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": ve()
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
        contrast: [l]
      }],
      /**
       * Drop Shadow
       * @see https://tailwindcss.com/docs/drop-shadow
       */
      "drop-shadow": [{
        "drop-shadow": ["", "none", kt, ie]
      }],
      /**
       * Grayscale
       * @see https://tailwindcss.com/docs/grayscale
       */
      grayscale: [{
        grayscale: [c]
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
        saturate: [R]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [w]
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
        "backdrop-contrast": [l]
      }],
      /**
       * Backdrop Grayscale
       * @see https://tailwindcss.com/docs/backdrop-grayscale
       */
      "backdrop-grayscale": [{
        "backdrop-grayscale": [c]
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
        "backdrop-opacity": [P]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [R]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [w]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ie]
      }],
      /**
       * Transition Duration
       * @see https://tailwindcss.com/docs/transition-duration
       */
      duration: [{
        duration: Y()
      }],
      /**
       * Transition Timing Function
       * @see https://tailwindcss.com/docs/transition-timing-function
       */
      ease: [{
        ease: ["linear", "in", "out", "in-out", ie]
      }],
      /**
       * Transition Delay
       * @see https://tailwindcss.com/docs/transition-delay
       */
      delay: [{
        delay: Y()
      }],
      /**
       * Animation
       * @see https://tailwindcss.com/docs/animation
       */
      animate: [{
        animate: ["none", "spin", "ping", "pulse", "bounce", ie]
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
        scale: [A]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [A]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [A]
      }],
      /**
       * Rotate
       * @see https://tailwindcss.com/docs/rotate
       */
      rotate: [{
        rotate: [Er, ie]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [ue]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [ue]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [U]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [U]
      }],
      /**
       * Transform Origin
       * @see https://tailwindcss.com/docs/transform-origin
       */
      "transform-origin": [{
        origin: ["center", "top", "top-right", "right", "bottom-right", "bottom", "bottom-left", "left", "top-left", ie]
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
        cursor: ["auto", "default", "pointer", "wait", "text", "move", "help", "not-allowed", "none", "context-menu", "progress", "cell", "crosshair", "vertical-text", "alias", "copy", "no-drop", "grab", "grabbing", "all-scroll", "col-resize", "row-resize", "n-resize", "e-resize", "s-resize", "w-resize", "ne-resize", "nw-resize", "se-resize", "sw-resize", "ew-resize", "ns-resize", "nesw-resize", "nwse-resize", "zoom-in", "zoom-out", ie]
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
        "scroll-m": E()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": E()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": E()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": E()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": E()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": E()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": E()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": E()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": E()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": E()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": E()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": E()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": E()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": E()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": E()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": E()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": E()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": E()
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
        "will-change": ["auto", "scroll", "contents", "transform", ie]
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
        stroke: [mt, At, Zr]
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
const Nu = /* @__PURE__ */ hu(ku);
function Ne(...e) {
  return Nu(Ba(e));
}
var Lr = (e) => e.type === "checkbox", Kt = (e) => e instanceof Date, Ye = (e) => e == null;
const Ga = (e) => typeof e == "object";
var Be = (e) => !Ye(e) && !Array.isArray(e) && Ga(e) && !Kt(e), Xa = (e) => Be(e) && e.target ? Lr(e.target) ? e.target.checked : e.target.value : e, Pu = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Ka = (e, t) => e.has(Pu(t)), ju = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return Be(t) && t.hasOwnProperty("isPrototypeOf");
}, Js = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function nt(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Js && (e instanceof Blob || e instanceof FileList)) && (r || Be(e)))
    if (t = r ? [] : {}, !r && !ju(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = nt(e[n]));
  else
    return e;
  return t;
}
var Fr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Me = (e) => e === void 0, I = (e, t, r) => {
  if (!t || !Be(e))
    return r;
  const n = Fr(t.split(/[,[\].]+?/)).reduce((s, o) => Ye(s) ? s : s[o], e);
  return Me(n) || n === e ? Me(e[t]) ? r : e[t] : n;
}, et = (e) => typeof e == "boolean";
const nn = {
  BLUR: "blur",
  FOCUS_OUT: "focusout",
  CHANGE: "change"
}, st = {
  onBlur: "onBlur",
  onChange: "onChange",
  onSubmit: "onSubmit",
  onTouched: "onTouched",
  all: "all"
}, vt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Qa = te.createContext(null), An = () => te.useContext(Qa), $u = (e) => {
  const { children: t, ...r } = e;
  return te.createElement(Qa.Provider, { value: r }, t);
};
var ei = (e, t, r, n = !0) => {
  const s = {
    defaultValues: t._defaultValues
  };
  for (const o in e)
    Object.defineProperty(s, o, {
      get: () => {
        const a = o;
        return t._proxyFormState[a] !== st.all && (t._proxyFormState[a] = !n || st.all), r && (r[a] = !0), e[a];
      }
    });
  return s;
}, Qe = (e) => Be(e) && !Object.keys(e).length, ti = (e, t, r, n) => {
  r(e);
  const { name: s, ...o } = e;
  return Qe(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!n || st.all));
}, Kr = (e) => Array.isArray(e) ? e : [e], ri = (e, t, r) => !e || !t || e === t || Kr(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n)));
function Gs(e) {
  const t = te.useRef(e);
  t.current = e, te.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function Iu(e) {
  const t = An(), { control: r = t.control, disabled: n, name: s, exact: o } = e || {}, [a, i] = te.useState(r._formState), l = te.useRef(!0), c = te.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = te.useRef(s);
  return u.current = s, Gs({
    disabled: n,
    next: (d) => l.current && ri(u.current, d.name, o) && ti(d, c.current, r._updateFormState) && i({
      ...r._formState,
      ...d
    }),
    subject: r._subjects.state
  }), te.useEffect(() => (l.current = !0, c.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), ei(a, r, c.current, !1);
}
var it = (e) => typeof e == "string", ni = (e, t, r, n, s) => it(e) ? (n && t.watch.add(e), I(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && t.watch.add(o), I(r, o))) : (n && (t.watchAll = !0), r);
function Du(e) {
  const t = An(), { control: r = t.control, name: n, defaultValue: s, disabled: o, exact: a } = e || {}, i = te.useRef(n);
  i.current = n, Gs({
    disabled: o,
    subject: r._subjects.values,
    next: (u) => {
      ri(i.current, u.name, a) && c(nt(ni(i.current, r._names, u.values || r._formValues, !1, s)));
    }
  });
  const [l, c] = te.useState(r._getWatch(n, s));
  return te.useEffect(() => r._removeUnmounted()), l;
}
var Xs = (e) => /^\w*$/.test(e), si = (e) => Fr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Oe = (e, t, r) => {
  let n = -1;
  const s = Xs(t) ? [t] : si(t), o = s.length, a = o - 1;
  for (; ++n < o; ) {
    const i = s[n];
    let l = r;
    if (n !== a) {
      const c = e[i];
      l = Be(c) || Array.isArray(c) ? c : isNaN(+s[n + 1]) ? {} : [];
    }
    e[i] = l, e = e[i];
  }
  return e;
};
function Mu(e) {
  const t = An(), { name: r, disabled: n, control: s = t.control, shouldUnregister: o } = e, a = Ka(s._names.array, r), i = Du({
    control: s,
    name: r,
    defaultValue: I(s._formValues, r, I(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = Iu({
    control: s,
    name: r
  }), c = te.useRef(s.register(r, {
    ...e.rules,
    value: i,
    ...et(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return te.useEffect(() => {
    const u = s._options.shouldUnregister || o, d = (h, g) => {
      const m = I(s._fields, h);
      m && (m._f.mount = g);
    };
    if (d(r, !0), u) {
      const h = nt(I(s._options.defaultValues, r));
      Oe(s._defaultValues, r, h), Me(I(s._formValues, r)) && Oe(s._formValues, r, h);
    }
    return () => {
      (a ? u && !s._state.action : u) ? s.unregister(r) : d(r, !1);
    };
  }, [r, s, a, o]), te.useEffect(() => {
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
      ...et(n) || et(l.disabled) ? { disabled: l.disabled || n } : {},
      onChange: te.useCallback((u) => c.current.onChange({
        target: {
          value: Xa(u),
          name: r
        },
        type: nn.CHANGE
      }), [r]),
      onBlur: te.useCallback(() => c.current.onBlur({
        target: {
          value: I(s._formValues, r),
          name: r
        },
        type: nn.BLUR
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
    formState: l,
    fieldState: Object.defineProperties({}, {
      invalid: {
        enumerable: !0,
        get: () => !!I(l.errors, r)
      },
      isDirty: {
        enumerable: !0,
        get: () => !!I(l.dirtyFields, r)
      },
      isTouched: {
        enumerable: !0,
        get: () => !!I(l.touchedFields, r)
      },
      error: {
        enumerable: !0,
        get: () => I(l.errors, r)
      }
    })
  };
}
const Lu = (e) => e.render(Mu(e));
var oi = (e, t, r, n, s) => t ? {
  ...r[e],
  types: {
    ...r[e] && r[e].types ? r[e].types : {},
    [n]: s || !0
  }
} : {}, Vo = (e) => ({
  isOnSubmit: !e || e === st.onSubmit,
  isOnBlur: e === st.onBlur,
  isOnChange: e === st.onChange,
  isOnAll: e === st.all,
  isOnTouch: e === st.onTouched
}), Uo = (e, t, r) => !r && (t.watchAll || t.watch.has(e) || [...t.watch].some((n) => e.startsWith(n) && /^\.\w+/.test(e.slice(n.length))));
const Cr = (e, t, r, n) => {
  for (const s of r || Object.keys(e)) {
    const o = I(e, s);
    if (o) {
      const { _f: a, ...i } = o;
      if (a) {
        if (a.refs && a.refs[0] && t(a.refs[0], s) && !n)
          break;
        if (a.ref && t(a.ref, a.name) && !n)
          break;
        Cr(i, t);
      } else
        Be(i) && Cr(i, t);
    }
  }
};
var Fu = (e, t, r) => {
  const n = Fr(I(e, r));
  return Oe(n, "root", t[r]), Oe(e, r, n), e;
}, Ks = (e) => e.type === "file", jt = (e) => typeof e == "function", sn = (e) => {
  if (!Js)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Qr = (e) => it(e), Qs = (e) => e.type === "radio", on = (e) => e instanceof RegExp;
const zo = {
  value: !1,
  isValid: !1
}, Wo = { value: !0, isValid: !0 };
var ai = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Me(e[0].attributes.value) ? Me(e[0].value) || e[0].value === "" ? Wo : { value: e[0].value, isValid: !0 } : Wo
    ) : zo;
  }
  return zo;
};
const Bo = {
  isValid: !1,
  value: null
};
var ii = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Bo) : Bo;
function Zo(e, t, r = "validate") {
  if (Qr(e) || Array.isArray(e) && e.every(Qr) || et(e) && !e)
    return {
      type: r,
      message: Qr(e) ? e : "",
      ref: t
    };
}
var Gt = (e) => Be(e) && !on(e) ? e : {
  value: e,
  message: ""
}, qo = async (e, t, r, n, s) => {
  const { ref: o, refs: a, required: i, maxLength: l, minLength: c, min: u, max: d, pattern: h, validate: g, name: m, valueAsNumber: v, mount: x, disabled: P } = e._f, T = I(t, m);
  if (!x || P)
    return {};
  const R = a ? a[0] : o, A = (E) => {
    n && R.reportValidity && (R.setCustomValidity(et(E) ? "" : E || ""), R.reportValidity());
  }, w = {}, U = Qs(o), J = Lr(o), ue = U || J, W = (v || Ks(o)) && Me(o.value) && Me(T) || sn(o) && o.value === "" || T === "" || Array.isArray(T) && !T.length, X = oi.bind(null, m, r, w), be = (E, z, B, de = vt.maxLength, ce = vt.minLength) => {
    const ve = E ? z : B;
    w[m] = {
      type: E ? de : ce,
      message: ve,
      ref: o,
      ...X(E ? de : ce, ve)
    };
  };
  if (s ? !Array.isArray(T) || !T.length : i && (!ue && (W || Ye(T)) || et(T) && !T || J && !ai(a).isValid || U && !ii(a).isValid)) {
    const { value: E, message: z } = Qr(i) ? { value: !!i, message: i } : Gt(i);
    if (E && (w[m] = {
      type: vt.required,
      message: z,
      ref: R,
      ...X(vt.required, z)
    }, !r))
      return A(z), w;
  }
  if (!W && (!Ye(u) || !Ye(d))) {
    let E, z;
    const B = Gt(d), de = Gt(u);
    if (!Ye(T) && !isNaN(T)) {
      const ce = o.valueAsNumber || T && +T;
      Ye(B.value) || (E = ce > B.value), Ye(de.value) || (z = ce < de.value);
    } else {
      const ce = o.valueAsDate || new Date(T), ve = (O) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + O), ze = o.type == "time", Ie = o.type == "week";
      it(B.value) && T && (E = ze ? ve(T) > ve(B.value) : Ie ? T > B.value : ce > new Date(B.value)), it(de.value) && T && (z = ze ? ve(T) < ve(de.value) : Ie ? T < de.value : ce < new Date(de.value));
    }
    if ((E || z) && (be(!!E, B.message, de.message, vt.max, vt.min), !r))
      return A(w[m].message), w;
  }
  if ((l || c) && !W && (it(T) || s && Array.isArray(T))) {
    const E = Gt(l), z = Gt(c), B = !Ye(E.value) && T.length > +E.value, de = !Ye(z.value) && T.length < +z.value;
    if ((B || de) && (be(B, E.message, z.message), !r))
      return A(w[m].message), w;
  }
  if (h && !W && it(T)) {
    const { value: E, message: z } = Gt(h);
    if (on(E) && !T.match(E) && (w[m] = {
      type: vt.pattern,
      message: z,
      ref: o,
      ...X(vt.pattern, z)
    }, !r))
      return A(z), w;
  }
  if (g) {
    if (jt(g)) {
      const E = await g(T, t), z = Zo(E, R);
      if (z && (w[m] = {
        ...z,
        ...X(vt.validate, z.message)
      }, !r))
        return A(z.message), w;
    } else if (Be(g)) {
      let E = {};
      for (const z in g) {
        if (!Qe(E) && !r)
          break;
        const B = Zo(await g[z](T, t), R, z);
        B && (E = {
          ...B,
          ...X(z, B.message)
        }, A(B.message), r && (w[m] = E));
      }
      if (!Qe(E) && (w[m] = {
        ref: R,
        ...E
      }, !r))
        return w;
    }
  }
  return A(!0), w;
};
function Vu(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = Me(e) ? n++ : e[t[n++]];
  return e;
}
function Uu(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Me(e[t]))
      return !1;
  return !0;
}
function Ze(e, t) {
  const r = Array.isArray(t) ? t : Xs(t) ? [t] : si(t), n = r.length === 1 ? e : Vu(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (Be(n) && Qe(n) || Array.isArray(n) && Uu(n)) && Ze(e, r.slice(0, -1)), e;
}
var Qn = () => {
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
}, an = (e) => Ye(e) || !Ga(e);
function Wt(e, t) {
  if (an(e) || an(t))
    return e === t;
  if (Kt(e) && Kt(t))
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
      if (Kt(o) && Kt(a) || Be(o) && Be(a) || Array.isArray(o) && Array.isArray(a) ? !Wt(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var li = (e) => e.type === "select-multiple", zu = (e) => Qs(e) || Lr(e), es = (e) => sn(e) && e.isConnected, ci = (e) => {
  for (const t in e)
    if (jt(e[t]))
      return !0;
  return !1;
};
function ln(e, t = {}) {
  const r = Array.isArray(e);
  if (Be(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || Be(e[n]) && !ci(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, ln(e[n], t[n])) : Ye(e[n]) || (t[n] = !0);
  return t;
}
function ui(e, t, r) {
  const n = Array.isArray(e);
  if (Be(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || Be(e[s]) && !ci(e[s]) ? Me(t) || an(r[s]) ? r[s] = Array.isArray(e[s]) ? ln(e[s], []) : { ...ln(e[s]) } : ui(e[s], Ye(t) ? {} : t[s], r[s]) : r[s] = !Wt(e[s], t[s]);
  return r;
}
var ts = (e, t) => ui(e, t, ln(t)), di = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => Me(e) ? e : t ? e === "" ? NaN : e && +e : r && it(e) ? new Date(e) : n ? n(e) : e;
function rs(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return Ks(t) ? t.files : Qs(t) ? ii(e.refs).value : li(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Lr(t) ? ai(e.refs).value : di(Me(t.value) ? e.ref.value : t.value, e);
}
var Wu = (e, t, r, n) => {
  const s = {};
  for (const o of e) {
    const a = I(t, o);
    a && Oe(s, o, a._f);
  }
  return {
    criteriaMode: r,
    names: [...e],
    fields: s,
    shouldUseNativeValidation: n
  };
}, Or = (e) => Me(e) ? e : on(e) ? e.source : Be(e) ? on(e.value) ? e.value.source : e.value : e, Bu = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ho(e, t, r) {
  const n = I(e, r);
  if (n || Xs(r))
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
var Zu = (e, t, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, qu = (e, t) => !Fr(I(e, t)).length && Ze(e, t);
const Hu = {
  mode: st.onSubmit,
  reValidateMode: st.onChange,
  shouldFocusError: !0
};
function Yu(e = {}, t) {
  let r = {
    ...Hu,
    ...e
  }, n = {
    submitCount: 0,
    isDirty: !1,
    isLoading: jt(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, s = {}, o = Be(r.defaultValues) || Be(r.values) ? nt(r.defaultValues || r.values) || {} : {}, a = r.shouldUnregister ? {} : nt(o), i = {
    action: !1,
    mount: !1,
    watch: !1
  }, l = {
    mount: /* @__PURE__ */ new Set(),
    unMount: /* @__PURE__ */ new Set(),
    array: /* @__PURE__ */ new Set(),
    watch: /* @__PURE__ */ new Set()
  }, c, u = 0;
  const d = {
    isDirty: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }, h = {
    values: Qn(),
    array: Qn(),
    state: Qn()
  }, g = e.resetOptions && e.resetOptions.keepDirtyValues, m = Vo(r.mode), v = Vo(r.reValidateMode), x = r.criteriaMode === st.all, P = (p) => (b) => {
    clearTimeout(u), u = setTimeout(p, b);
  }, T = async (p) => {
    if (d.isValid || p) {
      const b = r.resolver ? Qe((await X()).errors) : await E(s, !0);
      b !== n.isValid && h.state.next({
        isValid: b
      });
    }
  }, R = (p) => d.isValidating && h.state.next({
    isValidating: p
  }), A = (p, b = [], _, F, $ = !0, k = !0) => {
    if (F && _) {
      if (i.action = !0, k && Array.isArray(I(s, p))) {
        const Z = _(I(s, p), F.argA, F.argB);
        $ && Oe(s, p, Z);
      }
      if (k && Array.isArray(I(n.errors, p))) {
        const Z = _(I(n.errors, p), F.argA, F.argB);
        $ && Oe(n.errors, p, Z), qu(n.errors, p);
      }
      if (d.touchedFields && k && Array.isArray(I(n.touchedFields, p))) {
        const Z = _(I(n.touchedFields, p), F.argA, F.argB);
        $ && Oe(n.touchedFields, p, Z);
      }
      d.dirtyFields && (n.dirtyFields = ts(o, a)), h.state.next({
        name: p,
        isDirty: B(p, b),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Oe(a, p, b);
  }, w = (p, b) => {
    Oe(n.errors, p, b), h.state.next({
      errors: n.errors
    });
  }, U = (p) => {
    n.errors = p, h.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, J = (p, b, _, F) => {
    const $ = I(s, p);
    if ($) {
      const k = I(a, p, Me(_) ? I(o, p) : _);
      Me(k) || F && F.defaultChecked || b ? Oe(a, p, b ? k : rs($._f)) : ve(p, k), i.mount && T();
    }
  }, ue = (p, b, _, F, $) => {
    let k = !1, Z = !1;
    const _e = {
      name: p
    }, Fe = !!(I(s, p) && I(s, p)._f.disabled);
    if (!_ || F) {
      d.isDirty && (Z = n.isDirty, n.isDirty = _e.isDirty = B(), k = Z !== _e.isDirty);
      const Xe = Fe || Wt(I(o, p), b);
      Z = !!(!Fe && I(n.dirtyFields, p)), Xe || Fe ? Ze(n.dirtyFields, p) : Oe(n.dirtyFields, p, !0), _e.dirtyFields = n.dirtyFields, k = k || d.dirtyFields && Z !== !Xe;
    }
    if (_) {
      const Xe = I(n.touchedFields, p);
      Xe || (Oe(n.touchedFields, p, _), _e.touchedFields = n.touchedFields, k = k || d.touchedFields && Xe !== _);
    }
    return k && $ && h.state.next(_e), k ? _e : {};
  }, W = (p, b, _, F) => {
    const $ = I(n.errors, p), k = d.isValid && et(b) && n.isValid !== b;
    if (e.delayError && _ ? (c = P(() => w(p, _)), c(e.delayError)) : (clearTimeout(u), c = null, _ ? Oe(n.errors, p, _) : Ze(n.errors, p)), (_ ? !Wt($, _) : $) || !Qe(F) || k) {
      const Z = {
        ...F,
        ...k && et(b) ? { isValid: b } : {},
        errors: n.errors,
        name: p
      };
      n = {
        ...n,
        ...Z
      }, h.state.next(Z);
    }
    R(!1);
  }, X = async (p) => r.resolver(a, r.context, Wu(p || l.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), be = async (p) => {
    const { errors: b } = await X(p);
    if (p)
      for (const _ of p) {
        const F = I(b, _);
        F ? Oe(n.errors, _, F) : Ze(n.errors, _);
      }
    else
      n.errors = b;
    return b;
  }, E = async (p, b, _ = {
    valid: !0
  }) => {
    for (const F in p) {
      const $ = p[F];
      if ($) {
        const { _f: k, ...Z } = $;
        if (k) {
          const _e = l.array.has(k.name), Fe = await qo($, a, x, r.shouldUseNativeValidation && !b, _e);
          if (Fe[k.name] && (_.valid = !1, b))
            break;
          !b && (I(Fe, k.name) ? _e ? Fu(n.errors, Fe, k.name) : Oe(n.errors, k.name, Fe[k.name]) : Ze(n.errors, k.name));
        }
        Z && await E(Z, b, _);
      }
    }
    return _.valid;
  }, z = () => {
    for (const p of l.unMount) {
      const b = I(s, p);
      b && (b._f.refs ? b._f.refs.every((_) => !es(_)) : !es(b._f.ref)) && oe(p);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, B = (p, b) => (p && b && Oe(a, p, b), !Wt(H(), o)), de = (p, b, _) => ni(p, l, {
    ...i.mount ? a : Me(b) ? o : it(p) ? { [p]: b } : b
  }, _, b), ce = (p) => Fr(I(i.mount ? a : o, p, e.shouldUnregister ? I(o, p, []) : [])), ve = (p, b, _ = {}) => {
    const F = I(s, p);
    let $ = b;
    if (F) {
      const k = F._f;
      k && (!k.disabled && Oe(a, p, di(b, k)), $ = sn(k.ref) && Ye(b) ? "" : b, li(k.ref) ? [...k.ref.options].forEach((Z) => Z.selected = $.includes(Z.value)) : k.refs ? Lr(k.ref) ? k.refs.length > 1 ? k.refs.forEach((Z) => (!Z.defaultChecked || !Z.disabled) && (Z.checked = Array.isArray($) ? !!$.find((_e) => _e === Z.value) : $ === Z.value)) : k.refs[0] && (k.refs[0].checked = !!$) : k.refs.forEach((Z) => Z.checked = Z.value === $) : Ks(k.ref) ? k.ref.value = "" : (k.ref.value = $, k.ref.type || h.values.next({
        name: p,
        values: { ...a }
      })));
    }
    (_.shouldDirty || _.shouldTouch) && ue(p, $, _.shouldTouch, _.shouldDirty, !0), _.shouldValidate && Y(p);
  }, ze = (p, b, _) => {
    for (const F in b) {
      const $ = b[F], k = `${p}.${F}`, Z = I(s, k);
      (l.array.has(p) || !an($) || Z && !Z._f) && !Kt($) ? ze(k, $, _) : ve(k, $, _);
    }
  }, Ie = (p, b, _ = {}) => {
    const F = I(s, p), $ = l.array.has(p), k = nt(b);
    Oe(a, p, k), $ ? (h.array.next({
      name: p,
      values: { ...a }
    }), (d.isDirty || d.dirtyFields) && _.shouldDirty && h.state.next({
      name: p,
      dirtyFields: ts(o, a),
      isDirty: B(p, k)
    })) : F && !F._f && !Ye(k) ? ze(p, k, _) : ve(p, k, _), Uo(p, l) && h.state.next({ ...n }), h.values.next({
      name: p,
      values: { ...a }
    }), !i.mount && t();
  }, O = async (p) => {
    const b = p.target;
    let _ = b.name, F = !0;
    const $ = I(s, _), k = () => b.type ? rs($._f) : Xa(p), Z = (_e) => {
      F = Number.isNaN(_e) || _e === I(a, _, _e);
    };
    if ($) {
      let _e, Fe;
      const Xe = k(), ht = p.type === nn.BLUR || p.type === nn.FOCUS_OUT, gr = !Bu($._f) && !r.resolver && !I(n.errors, _) && !$._f.deps || Zu(ht, I(n.touchedFields, _), n.isSubmitted, v, m), br = Uo(_, l, ht);
      Oe(a, _, Xe), ht ? ($._f.onBlur && $._f.onBlur(p), c && c(0)) : $._f.onChange && $._f.onChange(p);
      const xr = ue(_, Xe, ht, !1), Vn = !Qe(xr) || br;
      if (!ht && h.values.next({
        name: _,
        type: p.type,
        values: { ...a }
      }), gr)
        return d.isValid && T(), Vn && h.state.next({ name: _, ...br ? {} : xr });
      if (!ht && br && h.state.next({ ...n }), R(!0), r.resolver) {
        const { errors: zr } = await X([_]);
        if (Z(Xe), F) {
          const Un = Ho(n.errors, s, _), Wr = Ho(zr, s, Un.name || _);
          _e = Wr.error, _ = Wr.name, Fe = Qe(zr);
        }
      } else
        _e = (await qo($, a, x, r.shouldUseNativeValidation))[_], Z(Xe), F && (_e ? Fe = !1 : d.isValid && (Fe = await E(s, !0)));
      F && ($._f.deps && Y($._f.deps), W(_, Fe, _e, xr));
    }
  }, j = (p, b) => {
    if (I(n.errors, b) && p.focus)
      return p.focus(), 1;
  }, Y = async (p, b = {}) => {
    let _, F;
    const $ = Kr(p);
    if (R(!0), r.resolver) {
      const k = await be(Me(p) ? p : $);
      _ = Qe(k), F = p ? !$.some((Z) => I(k, Z)) : _;
    } else
      p ? (F = (await Promise.all($.map(async (k) => {
        const Z = I(s, k);
        return await E(Z && Z._f ? { [k]: Z } : Z);
      }))).every(Boolean), !(!F && !n.isValid) && T()) : F = _ = await E(s);
    return h.state.next({
      ...!it(p) || d.isValid && _ !== n.isValid ? {} : { name: p },
      ...r.resolver || !p ? { isValid: _ } : {},
      errors: n.errors,
      isValidating: !1
    }), b.shouldFocus && !F && Cr(s, j, p ? $ : l.mount), F;
  }, H = (p) => {
    const b = {
      ...o,
      ...i.mount ? a : {}
    };
    return Me(p) ? b : it(p) ? I(b, p) : p.map((_) => I(b, _));
  }, Q = (p, b) => ({
    invalid: !!I((b || n).errors, p),
    isDirty: !!I((b || n).dirtyFields, p),
    isTouched: !!I((b || n).touchedFields, p),
    error: I((b || n).errors, p)
  }), he = (p) => {
    p && Kr(p).forEach((b) => Ze(n.errors, b)), h.state.next({
      errors: p ? n.errors : {}
    });
  }, ee = (p, b, _) => {
    const F = (I(s, p, { _f: {} })._f || {}).ref;
    Oe(n.errors, p, {
      ...b,
      ref: F
    }), h.state.next({
      name: p,
      errors: n.errors,
      isValid: !1
    }), _ && _.shouldFocus && F && F.focus && F.focus();
  }, re = (p, b) => jt(p) ? h.values.subscribe({
    next: (_) => p(de(void 0, b), _)
  }) : de(p, b, !0), oe = (p, b = {}) => {
    for (const _ of p ? Kr(p) : l.mount)
      l.mount.delete(_), l.array.delete(_), b.keepValue || (Ze(s, _), Ze(a, _)), !b.keepError && Ze(n.errors, _), !b.keepDirty && Ze(n.dirtyFields, _), !b.keepTouched && Ze(n.touchedFields, _), !r.shouldUnregister && !b.keepDefaultValue && Ze(o, _);
    h.values.next({
      values: { ...a }
    }), h.state.next({
      ...n,
      ...b.keepDirty ? { isDirty: B() } : {}
    }), !b.keepIsValid && T();
  }, pe = ({ disabled: p, name: b, field: _, fields: F, value: $ }) => {
    if (et(p)) {
      const k = p ? void 0 : Me($) ? rs(_ ? _._f : I(F, b)._f) : $;
      Oe(a, b, k), ue(b, k, !1, !1, !0);
    }
  }, ae = (p, b = {}) => {
    let _ = I(s, p);
    const F = et(b.disabled);
    return Oe(s, p, {
      ..._ || {},
      _f: {
        ..._ && _._f ? _._f : { ref: { name: p } },
        name: p,
        mount: !0,
        ...b
      }
    }), l.mount.add(p), _ ? pe({
      field: _,
      disabled: b.disabled,
      name: p,
      value: b.value
    }) : J(p, !0, b.value), {
      ...F ? { disabled: b.disabled } : {},
      ...r.progressive ? {
        required: !!b.required,
        min: Or(b.min),
        max: Or(b.max),
        minLength: Or(b.minLength),
        maxLength: Or(b.maxLength),
        pattern: Or(b.pattern)
      } : {},
      name: p,
      onChange: O,
      onBlur: O,
      ref: ($) => {
        if ($) {
          ae(p, b), _ = I(s, p);
          const k = Me($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $, Z = zu(k), _e = _._f.refs || [];
          if (Z ? _e.find((Fe) => Fe === k) : k === _._f.ref)
            return;
          Oe(s, p, {
            _f: {
              ..._._f,
              ...Z ? {
                refs: [
                  ..._e.filter(es),
                  k,
                  ...Array.isArray(I(o, p)) ? [{}] : []
                ],
                ref: { type: k.type, name: p }
              } : { ref: k }
            }
          }), J(p, !1, void 0, k);
        } else
          _ = I(s, p, {}), _._f && (_._f.mount = !1), (r.shouldUnregister || b.shouldUnregister) && !(Ka(l.array, p) && i.action) && l.unMount.add(p);
      }
    };
  }, We = () => r.shouldFocusError && Cr(s, j, l.mount), D = (p) => {
    et(p) && (h.state.next({ disabled: p }), Cr(s, (b, _) => {
      let F = p;
      const $ = I(s, _);
      $ && et($._f.disabled) && (F || (F = $._f.disabled)), b.disabled = F;
    }, 0, !1));
  }, qe = (p, b) => async (_) => {
    _ && (_.preventDefault && _.preventDefault(), _.persist && _.persist());
    let F = nt(a);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: $, values: k } = await X();
      n.errors = $, F = k;
    } else
      await E(s);
    Ze(n.errors, "root"), Qe(n.errors) ? (h.state.next({
      errors: {}
    }), await p(F, _)) : (b && await b({ ...n.errors }, _), We(), setTimeout(We)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Qe(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, Ct = (p, b = {}) => {
    I(s, p) && (Me(b.defaultValue) ? Ie(p, I(o, p)) : (Ie(p, b.defaultValue), Oe(o, p, b.defaultValue)), b.keepTouched || Ze(n.touchedFields, p), b.keepDirty || (Ze(n.dirtyFields, p), n.isDirty = b.defaultValue ? B(p, I(o, p)) : B()), b.keepError || (Ze(n.errors, p), d.isValid && T()), h.state.next({ ...n }));
  }, ot = (p, b = {}) => {
    const _ = p ? nt(p) : o, F = nt(_), $ = p && !Qe(p) ? F : o;
    if (b.keepDefaultValues || (o = _), !b.keepValues) {
      if (b.keepDirtyValues || g)
        for (const k of l.mount)
          I(n.dirtyFields, k) ? Oe($, k, I(a, k)) : Ie(k, I($, k));
      else {
        if (Js && Me(p))
          for (const k of l.mount) {
            const Z = I(s, k);
            if (Z && Z._f) {
              const _e = Array.isArray(Z._f.refs) ? Z._f.refs[0] : Z._f.ref;
              if (sn(_e)) {
                const Fe = _e.closest("form");
                if (Fe) {
                  Fe.reset();
                  break;
                }
              }
            }
          }
        s = {};
      }
      a = e.shouldUnregister ? b.keepDefaultValues ? nt(o) : {} : nt($), h.array.next({
        values: { ...$ }
      }), h.values.next({
        values: { ...$ }
      });
    }
    l = {
      mount: /* @__PURE__ */ new Set(),
      unMount: /* @__PURE__ */ new Set(),
      array: /* @__PURE__ */ new Set(),
      watch: /* @__PURE__ */ new Set(),
      watchAll: !1,
      focus: ""
    }, !i.mount && t(), i.mount = !d.isValid || !!b.keepIsValid, i.watch = !!e.shouldUnregister, h.state.next({
      submitCount: b.keepSubmitCount ? n.submitCount : 0,
      isDirty: b.keepDirty ? n.isDirty : !!(b.keepDefaultValues && !Wt(p, o)),
      isSubmitted: b.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: b.keepDirtyValues ? n.dirtyFields : b.keepDefaultValues && p ? ts(o, p) : {},
      touchedFields: b.keepTouched ? n.touchedFields : {},
      errors: b.keepErrors ? n.errors : {},
      isSubmitSuccessful: b.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Lt = (p, b) => ot(jt(p) ? p(a) : p, b);
  return {
    control: {
      register: ae,
      unregister: oe,
      getFieldState: Q,
      handleSubmit: qe,
      setError: ee,
      _executeSchema: X,
      _getWatch: de,
      _getDirty: B,
      _updateValid: T,
      _removeUnmounted: z,
      _updateFieldArray: A,
      _updateDisabledField: pe,
      _getFieldArray: ce,
      _reset: ot,
      _resetDefaultValues: () => jt(r.defaultValues) && r.defaultValues().then((p) => {
        Lt(p, r.resetOptions), h.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (p) => {
        n = {
          ...n,
          ...p
        };
      },
      _disableForm: D,
      _subjects: h,
      _proxyFormState: d,
      _setErrors: U,
      get _fields() {
        return s;
      },
      get _formValues() {
        return a;
      },
      get _state() {
        return i;
      },
      set _state(p) {
        i = p;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return l;
      },
      set _names(p) {
        l = p;
      },
      get _formState() {
        return n;
      },
      set _formState(p) {
        n = p;
      },
      get _options() {
        return r;
      },
      set _options(p) {
        r = {
          ...r,
          ...p
        };
      }
    },
    trigger: Y,
    register: ae,
    handleSubmit: qe,
    watch: re,
    setValue: Ie,
    getValues: H,
    reset: Lt,
    resetField: Ct,
    clearErrors: he,
    unregister: oe,
    setError: ee,
    setFocus: (p, b = {}) => {
      const _ = I(s, p), F = _ && _._f;
      if (F) {
        const $ = F.refs ? F.refs[0] : F.ref;
        $.focus && ($.focus(), b.shouldSelect && $.select());
      }
    },
    getFieldState: Q
  };
}
function Ju(e = {}) {
  const t = te.useRef(), r = te.useRef(), [n, s] = te.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: jt(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: jt(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Yu(e, () => s((a) => ({ ...a }))),
    formState: n
  });
  const o = t.current.control;
  return o._options = e, Gs({
    subject: o._subjects.state,
    next: (a) => {
      ti(a, o._proxyFormState, o._updateFormState, !0) && s({ ...o._formState });
    }
  }), te.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), te.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== n.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, n.isDirty]), te.useEffect(() => {
    e.values && !Wt(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, s((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), te.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), te.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), t.current.formState = ei(n, o), t.current;
}
var Yo = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var n = I(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, fi = function(e, t) {
  var r = function(s) {
    var o = t.fields[s];
    o && o.ref && "reportValidity" in o.ref ? Yo(o.ref, s, e) : o.refs && o.refs.forEach(function(a) {
      return Yo(a, s, e);
    });
  };
  for (var n in t.fields)
    r(n);
}, Gu = function(e, t) {
  t.shouldUseNativeValidation && fi(e, t);
  var r = {};
  for (var n in e) {
    var s = I(t.fields, n), o = Object.assign(e[n] || {}, { ref: s && s.ref });
    if (Ku(t.names || Object.keys(e), n)) {
      var a = Object.assign({}, Xu(I(r, n)));
      Oe(a, "root", o), Oe(r, n, a);
    } else
      Oe(r, n, o);
  }
  return r;
}, Xu = function(e) {
  return Array.isArray(e) ? e.filter(Boolean) : [];
}, Ku = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, Qu = function(e, t) {
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
      var l = r[a].types, c = l && l[n.code];
      r[a] = oi(a, t, r, s, c ? [].concat(c, n.message) : n.message);
    }
    e.shift();
  }
  return r;
}, ed = function(e, t, r) {
  return r === void 0 && (r = {}), function(n, s, o) {
    try {
      return Promise.resolve(function(a, i) {
        try {
          var l = Promise.resolve(e[r.mode === "sync" ? "parse" : "parseAsync"](n, t)).then(function(c) {
            return o.shouldUseNativeValidation && fi({}, o), { errors: {}, values: r.raw ? n : c };
          });
        } catch (c) {
          return i(c);
        }
        return l && l.then ? l.then(void 0, i) : l;
      }(0, function(a) {
        if (function(i) {
          return i.errors != null;
        }(a))
          return { values: {}, errors: Gu(Qu(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
        throw a;
      }));
    } catch (a) {
      return Promise.reject(a);
    }
  };
}, Es = { exports: {} }, ns, Jo;
function eo() {
  if (Jo)
    return ns;
  Jo = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ns = e, ns;
}
var ss, Go;
function td() {
  if (Go)
    return ss;
  Go = 1;
  var e = eo();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, ss = function() {
    function n(a, i, l, c, u, d) {
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
  }, ss;
}
var qr = { exports: {} }, Ee = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xo;
function rd() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
    function R(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === c || D === o || D === s || D === d || D === h || typeof D == "object" && D !== null && (D.$$typeof === m || D.$$typeof === g || D.$$typeof === a || D.$$typeof === i || D.$$typeof === u || D.$$typeof === x || D.$$typeof === P || D.$$typeof === T || D.$$typeof === v);
    }
    function A(D) {
      if (typeof D == "object" && D !== null) {
        var qe = D.$$typeof;
        switch (qe) {
          case t:
            var Ct = D.type;
            switch (Ct) {
              case l:
              case c:
              case n:
              case o:
              case s:
              case d:
                return Ct;
              default:
                var ot = Ct && Ct.$$typeof;
                switch (ot) {
                  case i:
                  case u:
                  case m:
                  case g:
                  case a:
                    return ot;
                  default:
                    return qe;
                }
            }
          case r:
            return qe;
        }
      }
    }
    var w = l, U = c, J = i, ue = a, W = t, X = u, be = n, E = m, z = g, B = r, de = o, ce = s, ve = d, ze = !1;
    function Ie(D) {
      return ze || (ze = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), O(D) || A(D) === l;
    }
    function O(D) {
      return A(D) === c;
    }
    function j(D) {
      return A(D) === i;
    }
    function Y(D) {
      return A(D) === a;
    }
    function H(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function Q(D) {
      return A(D) === u;
    }
    function he(D) {
      return A(D) === n;
    }
    function ee(D) {
      return A(D) === m;
    }
    function re(D) {
      return A(D) === g;
    }
    function oe(D) {
      return A(D) === r;
    }
    function pe(D) {
      return A(D) === o;
    }
    function ae(D) {
      return A(D) === s;
    }
    function We(D) {
      return A(D) === d;
    }
    Ee.AsyncMode = w, Ee.ConcurrentMode = U, Ee.ContextConsumer = J, Ee.ContextProvider = ue, Ee.Element = W, Ee.ForwardRef = X, Ee.Fragment = be, Ee.Lazy = E, Ee.Memo = z, Ee.Portal = B, Ee.Profiler = de, Ee.StrictMode = ce, Ee.Suspense = ve, Ee.isAsyncMode = Ie, Ee.isConcurrentMode = O, Ee.isContextConsumer = j, Ee.isContextProvider = Y, Ee.isElement = H, Ee.isForwardRef = Q, Ee.isFragment = he, Ee.isLazy = ee, Ee.isMemo = re, Ee.isPortal = oe, Ee.isProfiler = pe, Ee.isStrictMode = ae, Ee.isSuspense = We, Ee.isValidElementType = R, Ee.typeOf = A;
  }()), Ee;
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
var Ko;
function nd() {
  if (Ko)
    return Te;
  Ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, P = e ? Symbol.for("react.responder") : 60118, T = e ? Symbol.for("react.scope") : 60119;
  function R(w) {
    if (typeof w == "object" && w !== null) {
      var U = w.$$typeof;
      switch (U) {
        case t:
          switch (w = w.type, w) {
            case l:
            case c:
            case n:
            case o:
            case s:
            case d:
              return w;
            default:
              switch (w = w && w.$$typeof, w) {
                case i:
                case u:
                case m:
                case g:
                case a:
                  return w;
                default:
                  return U;
              }
          }
        case r:
          return U;
      }
    }
  }
  function A(w) {
    return R(w) === c;
  }
  return Te.AsyncMode = l, Te.ConcurrentMode = c, Te.ContextConsumer = i, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = u, Te.Fragment = n, Te.Lazy = m, Te.Memo = g, Te.Portal = r, Te.Profiler = o, Te.StrictMode = s, Te.Suspense = d, Te.isAsyncMode = function(w) {
    return A(w) || R(w) === l;
  }, Te.isConcurrentMode = A, Te.isContextConsumer = function(w) {
    return R(w) === i;
  }, Te.isContextProvider = function(w) {
    return R(w) === a;
  }, Te.isElement = function(w) {
    return typeof w == "object" && w !== null && w.$$typeof === t;
  }, Te.isForwardRef = function(w) {
    return R(w) === u;
  }, Te.isFragment = function(w) {
    return R(w) === n;
  }, Te.isLazy = function(w) {
    return R(w) === m;
  }, Te.isMemo = function(w) {
    return R(w) === g;
  }, Te.isPortal = function(w) {
    return R(w) === r;
  }, Te.isProfiler = function(w) {
    return R(w) === o;
  }, Te.isStrictMode = function(w) {
    return R(w) === s;
  }, Te.isSuspense = function(w) {
    return R(w) === d;
  }, Te.isValidElementType = function(w) {
    return typeof w == "string" || typeof w == "function" || w === n || w === c || w === o || w === s || w === d || w === h || typeof w == "object" && w !== null && (w.$$typeof === m || w.$$typeof === g || w.$$typeof === a || w.$$typeof === i || w.$$typeof === u || w.$$typeof === x || w.$$typeof === P || w.$$typeof === T || w.$$typeof === v);
  }, Te.typeOf = R, Te;
}
var Qo;
function hi() {
  return Qo || (Qo = 1, process.env.NODE_ENV === "production" ? qr.exports = nd() : qr.exports = rd()), qr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var os, ea;
function sd() {
  if (ea)
    return os;
  ea = 1;
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
      var l = Object.getOwnPropertyNames(a).map(function(u) {
        return a[u];
      });
      if (l.join("") !== "0123456789")
        return !1;
      var c = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(u) {
        c[u] = u;
      }), Object.keys(Object.assign({}, c)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return os = s() ? Object.assign : function(o, a) {
    for (var i, l = n(o), c, u = 1; u < arguments.length; u++) {
      i = Object(arguments[u]);
      for (var d in i)
        t.call(i, d) && (l[d] = i[d]);
      if (e) {
        c = e(i);
        for (var h = 0; h < c.length; h++)
          r.call(i, c[h]) && (l[c[h]] = i[c[h]]);
      }
    }
    return l;
  }, os;
}
var as, ta;
function pi() {
  return ta || (ta = 1, as = Function.call.bind(Object.prototype.hasOwnProperty)), as;
}
var is, ra;
function od() {
  if (ra)
    return is;
  ra = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = eo(), r = {}, n = pi();
    e = function(o) {
      var a = "Warning: " + o;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function s(o, a, i, l, c) {
    if (process.env.NODE_ENV !== "production") {
      for (var u in o)
        if (n(o, u)) {
          var d;
          try {
            if (typeof o[u] != "function") {
              var h = Error(
                (l || "React class") + ": " + i + " type `" + u + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof o[u] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw h.name = "Invariant Violation", h;
            }
            d = o[u](a, u, l, i, null, t);
          } catch (m) {
            d = m;
          }
          if (d && !(d instanceof Error) && e(
            (l || "React class") + ": type specification of " + i + " `" + u + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof d + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), d instanceof Error && !(d.message in r)) {
            r[d.message] = !0;
            var g = c ? c() : "";
            e(
              "Failed " + i + " type: " + d.message + (g ?? "")
            );
          }
        }
    }
  }
  return s.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (r = {});
  }, is = s, is;
}
var ls, na;
function ad() {
  if (na)
    return ls;
  na = 1;
  var e = hi(), t = sd(), r = eo(), n = pi(), s = od(), o = function() {
  };
  process.env.NODE_ENV !== "production" && (o = function(i) {
    var l = "Warning: " + i;
    typeof console < "u" && console.error(l);
    try {
      throw new Error(l);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return ls = function(i, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(O) {
      var j = O && (c && O[c] || O[u]);
      if (typeof j == "function")
        return j;
    }
    var h = "<<anonymous>>", g = {
      array: P("array"),
      bigint: P("bigint"),
      bool: P("boolean"),
      func: P("function"),
      number: P("number"),
      object: P("object"),
      string: P("string"),
      symbol: P("symbol"),
      any: T(),
      arrayOf: R,
      element: A(),
      elementType: w(),
      instanceOf: U,
      node: X(),
      objectOf: ue,
      oneOf: J,
      oneOfType: W,
      shape: E,
      exact: z
    };
    function m(O, j) {
      return O === j ? O !== 0 || 1 / O === 1 / j : O !== O && j !== j;
    }
    function v(O, j) {
      this.message = O, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function x(O) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, Y = 0;
      function H(he, ee, re, oe, pe, ae, We) {
        if (oe = oe || h, ae = ae || re, We !== r) {
          if (l) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var qe = oe + ":" + re;
            !j[qe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + ae + "` prop on `" + oe + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[qe] = !0, Y++);
          }
        }
        return ee[re] == null ? he ? ee[re] === null ? new v("The " + pe + " `" + ae + "` is marked as required " + ("in `" + oe + "`, but its value is `null`.")) : new v("The " + pe + " `" + ae + "` is marked as required in " + ("`" + oe + "`, but its value is `undefined`.")) : null : O(ee, re, oe, pe, ae);
      }
      var Q = H.bind(null, !1);
      return Q.isRequired = H.bind(null, !0), Q;
    }
    function P(O) {
      function j(Y, H, Q, he, ee, re) {
        var oe = Y[H], pe = ce(oe);
        if (pe !== O) {
          var ae = ve(oe);
          return new v(
            "Invalid " + he + " `" + ee + "` of type " + ("`" + ae + "` supplied to `" + Q + "`, expected ") + ("`" + O + "`."),
            { expectedType: O }
          );
        }
        return null;
      }
      return x(j);
    }
    function T() {
      return x(a);
    }
    function R(O) {
      function j(Y, H, Q, he, ee) {
        if (typeof O != "function")
          return new v("Property `" + ee + "` of component `" + Q + "` has invalid PropType notation inside arrayOf.");
        var re = Y[H];
        if (!Array.isArray(re)) {
          var oe = ce(re);
          return new v("Invalid " + he + " `" + ee + "` of type " + ("`" + oe + "` supplied to `" + Q + "`, expected an array."));
        }
        for (var pe = 0; pe < re.length; pe++) {
          var ae = O(re, pe, Q, he, ee + "[" + pe + "]", r);
          if (ae instanceof Error)
            return ae;
        }
        return null;
      }
      return x(j);
    }
    function A() {
      function O(j, Y, H, Q, he) {
        var ee = j[Y];
        if (!i(ee)) {
          var re = ce(ee);
          return new v("Invalid " + Q + " `" + he + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(O);
    }
    function w() {
      function O(j, Y, H, Q, he) {
        var ee = j[Y];
        if (!e.isValidElementType(ee)) {
          var re = ce(ee);
          return new v("Invalid " + Q + " `" + he + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(O);
    }
    function U(O) {
      function j(Y, H, Q, he, ee) {
        if (!(Y[H] instanceof O)) {
          var re = O.name || h, oe = Ie(Y[H]);
          return new v("Invalid " + he + " `" + ee + "` of type " + ("`" + oe + "` supplied to `" + Q + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return x(j);
    }
    function J(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function j(Y, H, Q, he, ee) {
        for (var re = Y[H], oe = 0; oe < O.length; oe++)
          if (m(re, O[oe]))
            return null;
        var pe = JSON.stringify(O, function(We, D) {
          var qe = ve(D);
          return qe === "symbol" ? String(D) : D;
        });
        return new v("Invalid " + he + " `" + ee + "` of value `" + String(re) + "` " + ("supplied to `" + Q + "`, expected one of " + pe + "."));
      }
      return x(j);
    }
    function ue(O) {
      function j(Y, H, Q, he, ee) {
        if (typeof O != "function")
          return new v("Property `" + ee + "` of component `" + Q + "` has invalid PropType notation inside objectOf.");
        var re = Y[H], oe = ce(re);
        if (oe !== "object")
          return new v("Invalid " + he + " `" + ee + "` of type " + ("`" + oe + "` supplied to `" + Q + "`, expected an object."));
        for (var pe in re)
          if (n(re, pe)) {
            var ae = O(re, pe, Q, he, ee + "." + pe, r);
            if (ae instanceof Error)
              return ae;
          }
        return null;
      }
      return x(j);
    }
    function W(O) {
      if (!Array.isArray(O))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var j = 0; j < O.length; j++) {
        var Y = O[j];
        if (typeof Y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ze(Y) + " at index " + j + "."
          ), a;
      }
      function H(Q, he, ee, re, oe) {
        for (var pe = [], ae = 0; ae < O.length; ae++) {
          var We = O[ae], D = We(Q, he, ee, re, oe, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && pe.push(D.data.expectedType);
        }
        var qe = pe.length > 0 ? ", expected one of type [" + pe.join(", ") + "]" : "";
        return new v("Invalid " + re + " `" + oe + "` supplied to " + ("`" + ee + "`" + qe + "."));
      }
      return x(H);
    }
    function X() {
      function O(j, Y, H, Q, he) {
        return B(j[Y]) ? null : new v("Invalid " + Q + " `" + he + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return x(O);
    }
    function be(O, j, Y, H, Q) {
      return new v(
        (O || "React class") + ": " + j + " type `" + Y + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + Q + "`."
      );
    }
    function E(O) {
      function j(Y, H, Q, he, ee) {
        var re = Y[H], oe = ce(re);
        if (oe !== "object")
          return new v("Invalid " + he + " `" + ee + "` of type `" + oe + "` " + ("supplied to `" + Q + "`, expected `object`."));
        for (var pe in O) {
          var ae = O[pe];
          if (typeof ae != "function")
            return be(Q, he, ee, pe, ve(ae));
          var We = ae(re, pe, Q, he, ee + "." + pe, r);
          if (We)
            return We;
        }
        return null;
      }
      return x(j);
    }
    function z(O) {
      function j(Y, H, Q, he, ee) {
        var re = Y[H], oe = ce(re);
        if (oe !== "object")
          return new v("Invalid " + he + " `" + ee + "` of type `" + oe + "` " + ("supplied to `" + Q + "`, expected `object`."));
        var pe = t({}, Y[H], O);
        for (var ae in pe) {
          var We = O[ae];
          if (n(O, ae) && typeof We != "function")
            return be(Q, he, ee, ae, ve(We));
          if (!We)
            return new v(
              "Invalid " + he + " `" + ee + "` key `" + ae + "` supplied to `" + Q + "`.\nBad object: " + JSON.stringify(Y[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(O), null, "  ")
            );
          var D = We(re, ae, Q, he, ee + "." + ae, r);
          if (D)
            return D;
        }
        return null;
      }
      return x(j);
    }
    function B(O) {
      switch (typeof O) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !O;
        case "object":
          if (Array.isArray(O))
            return O.every(B);
          if (O === null || i(O))
            return !0;
          var j = d(O);
          if (j) {
            var Y = j.call(O), H;
            if (j !== O.entries) {
              for (; !(H = Y.next()).done; )
                if (!B(H.value))
                  return !1;
            } else
              for (; !(H = Y.next()).done; ) {
                var Q = H.value;
                if (Q && !B(Q[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function de(O, j) {
      return O === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function ce(O) {
      var j = typeof O;
      return Array.isArray(O) ? "array" : O instanceof RegExp ? "object" : de(j, O) ? "symbol" : j;
    }
    function ve(O) {
      if (typeof O > "u" || O === null)
        return "" + O;
      var j = ce(O);
      if (j === "object") {
        if (O instanceof Date)
          return "date";
        if (O instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function ze(O) {
      var j = ve(O);
      switch (j) {
        case "array":
        case "object":
          return "an " + j;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + j;
        default:
          return j;
      }
    }
    function Ie(O) {
      return !O.constructor || !O.constructor.name ? h : O.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, ls;
}
if (process.env.NODE_ENV !== "production") {
  var id = hi(), ld = !0;
  Es.exports = ad()(id.isElement, ld);
} else
  Es.exports = td()();
var cd = Es.exports;
const Ft = /* @__PURE__ */ ga(cd);
var ud = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, dd = Object.defineProperty, fd = Object.defineProperties, hd = Object.getOwnPropertyDescriptors, cn = Object.getOwnPropertySymbols, mi = Object.prototype.hasOwnProperty, vi = Object.prototype.propertyIsEnumerable, sa = (e, t, r) => t in e ? dd(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, oa = (e, t) => {
  for (var r in t || (t = {}))
    mi.call(t, r) && sa(e, r, t[r]);
  if (cn)
    for (var r of cn(t))
      vi.call(t, r) && sa(e, r, t[r]);
  return e;
}, pd = (e, t) => fd(e, hd(t)), md = (e, t) => {
  var r = {};
  for (var n in e)
    mi.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && cn)
    for (var n of cn(e))
      t.indexOf(n) < 0 && vi.call(e, n) && (r[n] = e[n]);
  return r;
}, Mt = (e, t, r) => {
  const n = $e(
    (s, o) => {
      var a = s, { color: i = "currentColor", size: l = 24, stroke: c = 2, children: u } = a, d = md(a, ["color", "size", "stroke", "children"]);
      return le(
        "svg",
        oa(pd(oa({
          ref: o
        }, ud), {
          width: l,
          height: l,
          stroke: i,
          strokeWidth: c,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([h, g]) => le(h, g)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: Ft.string,
    size: Ft.oneOfType([Ft.string, Ft.number]),
    stroke: Ft.oneOfType([Ft.string, Ft.number])
  }, n.displayName = `${t}`, n;
}, vd = Mt("chalkboard", "IconChalkboard", [
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
]), cs = Mt(
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
), aa = Mt("info-square", "IconInfoSquare", [
  ["path", { d: "M12 9h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), yd = Mt("menu-deep", "IconMenuDeep", [
  ["path", { d: "M4 6h16", key: "svg-0" }],
  ["path", { d: "M7 12h13", key: "svg-1" }],
  ["path", { d: "M10 18h10", key: "svg-2" }]
]), gd = Mt("phone-call", "IconPhoneCall", [
  [
    "path",
    {
      d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M15 7a2 2 0 0 1 2 2", key: "svg-1" }],
  ["path", { d: "M15 3a6 6 0 0 1 6 6", key: "svg-2" }]
]), bd = Mt("square-check", "IconSquareCheck", [
  [
    "path",
    {
      d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]
]), xd = Mt("square-x", "IconSquareX", [
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 9l6 6m0 -6l-6 6", key: "svg-1" }]
]), us = Mt("wash-dryclean", "IconWashDryclean", [
  ["path", { d: "M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0", key: "svg-0" }]
]), Se;
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
})(Se || (Se = {}));
var ia;
(function(e) {
  e.mergeShapes = (t, r) => ({
    ...t,
    ...r
    // second overwrites first
  });
})(ia || (ia = {}));
const L = Se.arrayToEnum([
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
]), Vt = (e) => {
  switch (typeof e) {
    case "undefined":
      return L.undefined;
    case "string":
      return L.string;
    case "number":
      return isNaN(e) ? L.nan : L.number;
    case "boolean":
      return L.boolean;
    case "function":
      return L.function;
    case "bigint":
      return L.bigint;
    case "symbol":
      return L.symbol;
    case "object":
      return Array.isArray(e) ? L.array : e === null ? L.null : e.then && typeof e.then == "function" && e.catch && typeof e.catch == "function" ? L.promise : typeof Map < "u" && e instanceof Map ? L.map : typeof Set < "u" && e instanceof Set ? L.set : typeof Date < "u" && e instanceof Date ? L.date : L.object;
    default:
      return L.unknown;
  }
}, N = Se.arrayToEnum([
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
class ct extends Error {
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
          let i = n, l = 0;
          for (; l < a.path.length; ) {
            const c = a.path[l];
            l === a.path.length - 1 ? (i[c] = i[c] || { _errors: [] }, i[c]._errors.push(r(a))) : i[c] = i[c] || { _errors: [] }, i = i[c], l++;
          }
        }
    };
    return s(this), n;
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, Se.jsonStringifyReplacer, 2);
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
ct.create = (e) => new ct(e);
const un = (e, t) => {
  let r;
  switch (e.code) {
    case N.invalid_type:
      e.received === L.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case N.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, Se.jsonStringifyReplacer)}`;
      break;
    case N.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Se.joinValues(e.keys, ", ")}`;
      break;
    case N.invalid_union:
      r = "Invalid input";
      break;
    case N.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Se.joinValues(e.options)}`;
      break;
    case N.invalid_enum_value:
      r = `Invalid enum value. Expected ${Se.joinValues(e.options)}, received '${e.received}'`;
      break;
    case N.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case N.invalid_return_type:
      r = "Invalid function return type";
      break;
    case N.invalid_date:
      r = "Invalid date";
      break;
    case N.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : Se.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case N.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case N.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case N.custom:
      r = "Invalid input";
      break;
    case N.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case N.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case N.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, Se.assertNever(e);
  }
  return { message: r };
};
let _d = un;
function Ts() {
  return _d;
}
const Os = (e) => {
  const { data: t, path: r, errorMaps: n, issueData: s } = e, o = [...r, ...s.path || []], a = {
    ...s,
    path: o
  };
  let i = "";
  const l = n.filter((c) => !!c).slice().reverse();
  for (const c of l)
    i = c(a, { data: t, defaultError: i }).message;
  return {
    ...s,
    path: o,
    message: s.message || i
  };
};
function V(e, t) {
  const r = Os({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Ts(),
      un
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class Je {
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
        return se;
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
    return Je.mergeObjectSync(t, n);
  }
  static mergeObjectSync(t, r) {
    const n = {};
    for (const s of r) {
      const { key: o, value: a } = s;
      if (o.status === "aborted" || a.status === "aborted")
        return se;
      o.status === "dirty" && t.dirty(), a.status === "dirty" && t.dirty(), o.value !== "__proto__" && (typeof a.value < "u" || s.alwaysSet) && (n[o.value] = a.value);
    }
    return { status: t.value, value: n };
  }
}
const se = Object.freeze({
  status: "aborted"
}), wd = (e) => ({ status: "dirty", value: e }), Ge = (e) => ({ status: "valid", value: e }), la = (e) => e.status === "aborted", ca = (e) => e.status === "dirty", dn = (e) => e.status === "valid", Cs = (e) => typeof Promise < "u" && e instanceof Promise;
var q;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(q || (q = {}));
class dt {
  constructor(t, r, n, s) {
    this._cachedPath = [], this.parent = t, this.data = r, this._path = n, this._key = s;
  }
  get path() {
    return this._cachedPath.length || (this._key instanceof Array ? this._cachedPath.push(...this._path, ...this._key) : this._cachedPath.push(...this._path, this._key)), this._cachedPath;
  }
}
const ua = (e, t) => {
  if (dn(t))
    return { success: !0, data: t.value };
  if (!e.common.issues.length)
    throw new Error("Validation failed but no issues detected.");
  return {
    success: !1,
    get error() {
      if (this._error)
        return this._error;
      const r = new ct(e.common.issues);
      return this._error = r, this._error;
    }
  };
};
function ne(e) {
  if (!e)
    return {};
  const { errorMap: t, invalid_type_error: r, required_error: n, description: s } = e;
  if (t && (r || n))
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  return t ? { errorMap: t, description: s } : { errorMap: (a, i) => a.code !== "invalid_type" ? { message: i.defaultError } : typeof i.data > "u" ? { message: n ?? i.defaultError } : { message: r ?? i.defaultError }, description: s };
}
class fe {
  constructor(t) {
    this.spa = this.safeParseAsync, this._def = t, this.parse = this.parse.bind(this), this.safeParse = this.safeParse.bind(this), this.parseAsync = this.parseAsync.bind(this), this.safeParseAsync = this.safeParseAsync.bind(this), this.spa = this.spa.bind(this), this.refine = this.refine.bind(this), this.refinement = this.refinement.bind(this), this.superRefine = this.superRefine.bind(this), this.optional = this.optional.bind(this), this.nullable = this.nullable.bind(this), this.nullish = this.nullish.bind(this), this.array = this.array.bind(this), this.promise = this.promise.bind(this), this.or = this.or.bind(this), this.and = this.and.bind(this), this.transform = this.transform.bind(this), this.brand = this.brand.bind(this), this.default = this.default.bind(this), this.catch = this.catch.bind(this), this.describe = this.describe.bind(this), this.pipe = this.pipe.bind(this), this.readonly = this.readonly.bind(this), this.isNullable = this.isNullable.bind(this), this.isOptional = this.isOptional.bind(this);
  }
  get description() {
    return this._def.description;
  }
  _getType(t) {
    return Vt(t.data);
  }
  _getOrReturnCtx(t, r) {
    return r || {
      common: t.parent.common,
      data: t.data,
      parsedType: Vt(t.data),
      schemaErrorMap: this._def.errorMap,
      path: t.path,
      parent: t.parent
    };
  }
  _processInputParams(t) {
    return {
      status: new Je(),
      ctx: {
        common: t.parent.common,
        data: t.data,
        parsedType: Vt(t.data),
        schemaErrorMap: this._def.errorMap,
        path: t.path,
        parent: t.parent
      }
    };
  }
  _parseSync(t) {
    const r = this._parse(t);
    if (Cs(r))
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
      parsedType: Vt(t)
    }, o = this._parseSync({ data: t, path: s.path, parent: s });
    return ua(s, o);
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
      parsedType: Vt(t)
    }, s = this._parse({ data: t, path: n.path, parent: n }), o = await (Cs(s) ? s : Promise.resolve(s));
    return ua(n, o);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, o) => {
      const a = t(s), i = () => o.addIssue({
        code: N.custom,
        ...n(s)
      });
      return typeof Promise < "u" && a instanceof Promise ? a.then((l) => l ? !0 : (i(), !1)) : a ? !0 : (i(), !1);
    });
  }
  refinement(t, r) {
    return this._refinement((n, s) => t(n) ? !0 : (s.addIssue(typeof r == "function" ? r(n, s) : r), !1));
  }
  _refinement(t) {
    return new Et({
      schema: this,
      typeName: G.ZodEffects,
      effect: { type: "refinement", refinement: t }
    });
  }
  superRefine(t) {
    return this._refinement(t);
  }
  optional() {
    return It.create(this, this._def);
  }
  nullable() {
    return dr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return ut.create(this, this._def);
  }
  promise() {
    return jr.create(this, this._def);
  }
  or(t) {
    return pn.create([this, t], this._def);
  }
  and(t) {
    return mn.create(this, t, this._def);
  }
  transform(t) {
    return new Et({
      ...ne(this._def),
      schema: this,
      typeName: G.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new xn({
      ...ne(this._def),
      innerType: this,
      defaultValue: r,
      typeName: G.ZodDefault
    });
  }
  brand() {
    return new $d({
      typeName: G.ZodBranded,
      type: this,
      ...ne(this._def)
    });
  }
  catch(t) {
    const r = typeof t == "function" ? t : () => t;
    return new $s({
      ...ne(this._def),
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
    return kn.create(this, t);
  }
  readonly() {
    return Ds.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const Sd = /^c[^\s-]{8,}$/i, Ed = /^[a-z][a-z0-9]*$/, Td = /^[0-9A-HJKMNP-TV-Z]{26}$/, Od = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Cd = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Rd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ds;
const Ad = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, kd = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Nd = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Pd(e, t) {
  return !!((t === "v4" || !t) && Ad.test(e) || (t === "v6" || !t) && kd.test(e));
}
class gt extends fe {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== L.string) {
      const o = this._getOrReturnCtx(t);
      return V(
        o,
        {
          code: N.invalid_type,
          expected: L.string,
          received: o.parsedType
        }
        //
      ), se;
    }
    const n = new Je();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (s = this._getOrReturnCtx(t, s), V(s, {
          code: N.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (s = this._getOrReturnCtx(t, s), V(s, {
          code: N.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, i = t.data.length < o.value;
        (a || i) && (s = this._getOrReturnCtx(t, s), a ? V(s, {
          code: N.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : i && V(s, {
          code: N.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), n.dirty());
      } else if (o.kind === "email")
        Cd.test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "email",
          code: N.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "emoji")
        ds || (ds = new RegExp(Rd, "u")), ds.test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "emoji",
          code: N.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "uuid")
        Od.test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "uuid",
          code: N.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid")
        Sd.test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "cuid",
          code: N.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid2")
        Ed.test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "cuid2",
          code: N.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "ulid")
        Td.test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "ulid",
          code: N.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), V(s, {
            validation: "url",
            code: N.invalid_string,
            message: o.message
          }), n.dirty();
        }
      else
        o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "regex",
          code: N.invalid_string,
          message: o.message
        }), n.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(t, s), V(s, {
          code: N.invalid_string,
          validation: { includes: o.value, position: o.position },
          message: o.message
        }), n.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (s = this._getOrReturnCtx(t, s), V(s, {
          code: N.invalid_string,
          validation: { startsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (s = this._getOrReturnCtx(t, s), V(s, {
          code: N.invalid_string,
          validation: { endsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "datetime" ? Nd(o).test(t.data) || (s = this._getOrReturnCtx(t, s), V(s, {
          code: N.invalid_string,
          validation: "datetime",
          message: o.message
        }), n.dirty()) : o.kind === "ip" ? Pd(t.data, o.version) || (s = this._getOrReturnCtx(t, s), V(s, {
          validation: "ip",
          code: N.invalid_string,
          message: o.message
        }), n.dirty()) : Se.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: N.invalid_string,
      ...q.errToObj(n)
    });
  }
  _addCheck(t) {
    return new gt({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  email(t) {
    return this._addCheck({ kind: "email", ...q.errToObj(t) });
  }
  url(t) {
    return this._addCheck({ kind: "url", ...q.errToObj(t) });
  }
  emoji(t) {
    return this._addCheck({ kind: "emoji", ...q.errToObj(t) });
  }
  uuid(t) {
    return this._addCheck({ kind: "uuid", ...q.errToObj(t) });
  }
  cuid(t) {
    return this._addCheck({ kind: "cuid", ...q.errToObj(t) });
  }
  cuid2(t) {
    return this._addCheck({ kind: "cuid2", ...q.errToObj(t) });
  }
  ulid(t) {
    return this._addCheck({ kind: "ulid", ...q.errToObj(t) });
  }
  ip(t) {
    return this._addCheck({ kind: "ip", ...q.errToObj(t) });
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
      ...q.errToObj(t == null ? void 0 : t.message)
    });
  }
  regex(t, r) {
    return this._addCheck({
      kind: "regex",
      regex: t,
      ...q.errToObj(r)
    });
  }
  includes(t, r) {
    return this._addCheck({
      kind: "includes",
      value: t,
      position: r == null ? void 0 : r.position,
      ...q.errToObj(r == null ? void 0 : r.message)
    });
  }
  startsWith(t, r) {
    return this._addCheck({
      kind: "startsWith",
      value: t,
      ...q.errToObj(r)
    });
  }
  endsWith(t, r) {
    return this._addCheck({
      kind: "endsWith",
      value: t,
      ...q.errToObj(r)
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t,
      ...q.errToObj(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t,
      ...q.errToObj(r)
    });
  }
  length(t, r) {
    return this._addCheck({
      kind: "length",
      value: t,
      ...q.errToObj(r)
    });
  }
  /**
   * @deprecated Use z.string().min(1) instead.
   * @see {@link ZodString.min}
   */
  nonempty(t) {
    return this.min(1, q.errToObj(t));
  }
  trim() {
    return new gt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new gt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new gt({
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
gt.create = (e) => {
  var t;
  return new gt({
    checks: [],
    typeName: G.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
function jd(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, o = parseInt(e.toFixed(s).replace(".", "")), a = parseInt(t.toFixed(s).replace(".", ""));
  return o % a / Math.pow(10, s);
}
class lr extends fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== L.number) {
      const o = this._getOrReturnCtx(t);
      return V(o, {
        code: N.invalid_type,
        expected: L.number,
        received: o.parsedType
      }), se;
    }
    let n;
    const s = new Je();
    for (const o of this._def.checks)
      o.kind === "int" ? Se.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), s.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? jd(t.data, o.value) !== 0 && (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.not_finite,
        message: o.message
      }), s.dirty()) : Se.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, q.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, q.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, q.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, q.toString(r));
  }
  setLimit(t, r, n, s) {
    return new lr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: q.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new lr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  int(t) {
    return this._addCheck({
      kind: "int",
      message: q.toString(t)
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !1,
      message: q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !1,
      message: q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: 0,
      inclusive: !0,
      message: q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: 0,
      inclusive: !0,
      message: q.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: q.toString(r)
    });
  }
  finite(t) {
    return this._addCheck({
      kind: "finite",
      message: q.toString(t)
    });
  }
  safe(t) {
    return this._addCheck({
      kind: "min",
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: q.toString(t)
    })._addCheck({
      kind: "max",
      inclusive: !0,
      value: Number.MAX_SAFE_INTEGER,
      message: q.toString(t)
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
    return !!this._def.checks.find((t) => t.kind === "int" || t.kind === "multipleOf" && Se.isInteger(t.value));
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
lr.create = (e) => new lr({
  checks: [],
  typeName: G.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class cr extends fe {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== L.bigint) {
      const o = this._getOrReturnCtx(t);
      return V(o, {
        code: N.invalid_type,
        expected: L.bigint,
        received: o.parsedType
      }), se;
    }
    let n;
    const s = new Je();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), V(n, {
        code: N.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : Se.assertNever(o);
    return { status: s.value, value: t.data };
  }
  gte(t, r) {
    return this.setLimit("min", t, !0, q.toString(r));
  }
  gt(t, r) {
    return this.setLimit("min", t, !1, q.toString(r));
  }
  lte(t, r) {
    return this.setLimit("max", t, !0, q.toString(r));
  }
  lt(t, r) {
    return this.setLimit("max", t, !1, q.toString(r));
  }
  setLimit(t, r, n, s) {
    return new cr({
      ...this._def,
      checks: [
        ...this._def.checks,
        {
          kind: t,
          value: r,
          inclusive: n,
          message: q.toString(s)
        }
      ]
    });
  }
  _addCheck(t) {
    return new cr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  positive(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(t)
    });
  }
  negative(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !1,
      message: q.toString(t)
    });
  }
  nonpositive(t) {
    return this._addCheck({
      kind: "max",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(t)
    });
  }
  nonnegative(t) {
    return this._addCheck({
      kind: "min",
      value: BigInt(0),
      inclusive: !0,
      message: q.toString(t)
    });
  }
  multipleOf(t, r) {
    return this._addCheck({
      kind: "multipleOf",
      value: t,
      message: q.toString(r)
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
cr.create = (e) => {
  var t;
  return new cr({
    checks: [],
    typeName: G.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
class Rs extends fe {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== L.boolean) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        code: N.invalid_type,
        expected: L.boolean,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
Rs.create = (e) => new Rs({
  typeName: G.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class Pr extends fe {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== L.date) {
      const o = this._getOrReturnCtx(t);
      return V(o, {
        code: N.invalid_type,
        expected: L.date,
        received: o.parsedType
      }), se;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return V(o, {
        code: N.invalid_date
      }), se;
    }
    const n = new Je();
    let s;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (s = this._getOrReturnCtx(t, s), V(s, {
        code: N.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), n.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (s = this._getOrReturnCtx(t, s), V(s, {
        code: N.too_big,
        message: o.message,
        inclusive: !0,
        exact: !1,
        maximum: o.value,
        type: "date"
      }), n.dirty()) : Se.assertNever(o);
    return {
      status: n.value,
      value: new Date(t.data.getTime())
    };
  }
  _addCheck(t) {
    return new Pr({
      ...this._def,
      checks: [...this._def.checks, t]
    });
  }
  min(t, r) {
    return this._addCheck({
      kind: "min",
      value: t.getTime(),
      message: q.toString(r)
    });
  }
  max(t, r) {
    return this._addCheck({
      kind: "max",
      value: t.getTime(),
      message: q.toString(r)
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
Pr.create = (e) => new Pr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: G.ZodDate,
  ...ne(e)
});
class As extends fe {
  _parse(t) {
    if (this._getType(t) !== L.symbol) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        code: N.invalid_type,
        expected: L.symbol,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
As.create = (e) => new As({
  typeName: G.ZodSymbol,
  ...ne(e)
});
class fn extends fe {
  _parse(t) {
    if (this._getType(t) !== L.undefined) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        code: N.invalid_type,
        expected: L.undefined,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
fn.create = (e) => new fn({
  typeName: G.ZodUndefined,
  ...ne(e)
});
class hn extends fe {
  _parse(t) {
    if (this._getType(t) !== L.null) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        code: N.invalid_type,
        expected: L.null,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
hn.create = (e) => new hn({
  typeName: G.ZodNull,
  ...ne(e)
});
class ks extends fe {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ge(t.data);
  }
}
ks.create = (e) => new ks({
  typeName: G.ZodAny,
  ...ne(e)
});
class er extends fe {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ge(t.data);
  }
}
er.create = (e) => new er({
  typeName: G.ZodUnknown,
  ...ne(e)
});
class Dt extends fe {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return V(r, {
      code: N.invalid_type,
      expected: L.never,
      received: r.parsedType
    }), se;
  }
}
Dt.create = (e) => new Dt({
  typeName: G.ZodNever,
  ...ne(e)
});
class Ns extends fe {
  _parse(t) {
    if (this._getType(t) !== L.undefined) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        code: N.invalid_type,
        expected: L.void,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
Ns.create = (e) => new Ns({
  typeName: G.ZodVoid,
  ...ne(e)
});
class ut extends fe {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== L.array)
      return V(r, {
        code: N.invalid_type,
        expected: L.array,
        received: r.parsedType
      }), se;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (a || i) && (V(r, {
        code: a ? N.too_big : N.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (V(r, {
      code: N.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (V(r, {
      code: N.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, i) => s.type._parseAsync(new dt(r, a, r.path, i)))).then((a) => Je.mergeArray(n, a));
    const o = [...r.data].map((a, i) => s.type._parseSync(new dt(r, a, r.path, i)));
    return Je.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new ut({
      ...this._def,
      minLength: { value: t, message: q.toString(r) }
    });
  }
  max(t, r) {
    return new ut({
      ...this._def,
      maxLength: { value: t, message: q.toString(r) }
    });
  }
  length(t, r) {
    return new ut({
      ...this._def,
      exactLength: { value: t, message: q.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ut.create = (e, t) => new ut({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: G.ZodArray,
  ...ne(t)
});
function Xt(e) {
  if (e instanceof De) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = It.create(Xt(n));
    }
    return new De({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof ut ? new ut({
      ...e._def,
      type: Xt(e.element)
    }) : e instanceof It ? It.create(Xt(e.unwrap())) : e instanceof dr ? dr.create(Xt(e.unwrap())) : e instanceof St ? St.create(e.items.map((t) => Xt(t))) : e;
}
class De extends fe {
  constructor() {
    super(...arguments), this._cached = null, this.nonstrict = this.passthrough, this.augment = this.extend;
  }
  _getCached() {
    if (this._cached !== null)
      return this._cached;
    const t = this._def.shape(), r = Se.objectKeys(t);
    return this._cached = { shape: t, keys: r };
  }
  _parse(t) {
    if (this._getType(t) !== L.object) {
      const c = this._getOrReturnCtx(t);
      return V(c, {
        code: N.invalid_type,
        expected: L.object,
        received: c.parsedType
      }), se;
    }
    const { status: n, ctx: s } = this._processInputParams(t), { shape: o, keys: a } = this._getCached(), i = [];
    if (!(this._def.catchall instanceof Dt && this._def.unknownKeys === "strip"))
      for (const c in s.data)
        a.includes(c) || i.push(c);
    const l = [];
    for (const c of a) {
      const u = o[c], d = s.data[c];
      l.push({
        key: { status: "valid", value: c },
        value: u._parse(new dt(s, d, s.path, c)),
        alwaysSet: c in s.data
      });
    }
    if (this._def.catchall instanceof Dt) {
      const c = this._def.unknownKeys;
      if (c === "passthrough")
        for (const u of i)
          l.push({
            key: { status: "valid", value: u },
            value: { status: "valid", value: s.data[u] }
          });
      else if (c === "strict")
        i.length > 0 && (V(s, {
          code: N.unrecognized_keys,
          keys: i
        }), n.dirty());
      else if (c !== "strip")
        throw new Error("Internal ZodObject error: invalid unknownKeys value.");
    } else {
      const c = this._def.catchall;
      for (const u of i) {
        const d = s.data[u];
        l.push({
          key: { status: "valid", value: u },
          value: c._parse(
            new dt(s, d, s.path, u)
            //, ctx.child(key), value, getParsedType(value)
          ),
          alwaysSet: u in s.data
        });
      }
    }
    return s.common.async ? Promise.resolve().then(async () => {
      const c = [];
      for (const u of l) {
        const d = await u.key;
        c.push({
          key: d,
          value: await u.value,
          alwaysSet: u.alwaysSet
        });
      }
      return c;
    }).then((c) => Je.mergeObjectSync(n, c)) : Je.mergeObjectSync(n, l);
  }
  get shape() {
    return this._def.shape();
  }
  strict(t) {
    return q.errToObj, new De({
      ...this._def,
      unknownKeys: "strict",
      ...t !== void 0 ? {
        errorMap: (r, n) => {
          var s, o, a, i;
          const l = (a = (o = (s = this._def).errorMap) === null || o === void 0 ? void 0 : o.call(s, r, n).message) !== null && a !== void 0 ? a : n.defaultError;
          return r.code === "unrecognized_keys" ? {
            message: (i = q.errToObj(t).message) !== null && i !== void 0 ? i : l
          } : {
            message: l
          };
        }
      } : {}
    });
  }
  strip() {
    return new De({
      ...this._def,
      unknownKeys: "strip"
    });
  }
  passthrough() {
    return new De({
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
    return new De({
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
    return new De({
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
    return new De({
      ...this._def,
      catchall: t
    });
  }
  pick(t) {
    const r = {};
    return Se.objectKeys(t).forEach((n) => {
      t[n] && this.shape[n] && (r[n] = this.shape[n]);
    }), new De({
      ...this._def,
      shape: () => r
    });
  }
  omit(t) {
    const r = {};
    return Se.objectKeys(this.shape).forEach((n) => {
      t[n] || (r[n] = this.shape[n]);
    }), new De({
      ...this._def,
      shape: () => r
    });
  }
  /**
   * @deprecated
   */
  deepPartial() {
    return Xt(this);
  }
  partial(t) {
    const r = {};
    return Se.objectKeys(this.shape).forEach((n) => {
      const s = this.shape[n];
      t && !t[n] ? r[n] = s : r[n] = s.optional();
    }), new De({
      ...this._def,
      shape: () => r
    });
  }
  required(t) {
    const r = {};
    return Se.objectKeys(this.shape).forEach((n) => {
      if (t && !t[n])
        r[n] = this.shape[n];
      else {
        let o = this.shape[n];
        for (; o instanceof It; )
          o = o._def.innerType;
        r[n] = o;
      }
    }), new De({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return yi(Se.objectKeys(this.shape));
  }
}
De.create = (e, t) => new De({
  shape: () => e,
  unknownKeys: "strip",
  catchall: Dt.create(),
  typeName: G.ZodObject,
  ...ne(t)
});
De.strictCreate = (e, t) => new De({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Dt.create(),
  typeName: G.ZodObject,
  ...ne(t)
});
De.lazycreate = (e, t) => new De({
  shape: e,
  unknownKeys: "strip",
  catchall: Dt.create(),
  typeName: G.ZodObject,
  ...ne(t)
});
class pn extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t), n = this._def.options;
    function s(o) {
      for (const i of o)
        if (i.result.status === "valid")
          return i.result;
      for (const i of o)
        if (i.result.status === "dirty")
          return r.common.issues.push(...i.ctx.common.issues), i.result;
      const a = o.map((i) => new ct(i.ctx.common.issues));
      return V(r, {
        code: N.invalid_union,
        unionErrors: a
      }), se;
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
      for (const l of n) {
        const c = {
          ...r,
          common: {
            ...r.common,
            issues: []
          },
          parent: null
        }, u = l._parseSync({
          data: r.data,
          path: r.path,
          parent: c
        });
        if (u.status === "valid")
          return u;
        u.status === "dirty" && !o && (o = { result: u, ctx: c }), c.common.issues.length && a.push(c.common.issues);
      }
      if (o)
        return r.common.issues.push(...o.ctx.common.issues), o.result;
      const i = a.map((l) => new ct(l));
      return V(r, {
        code: N.invalid_union,
        unionErrors: i
      }), se;
    }
  }
  get options() {
    return this._def.options;
  }
}
pn.create = (e, t) => new pn({
  options: e,
  typeName: G.ZodUnion,
  ...ne(t)
});
const en = (e) => e instanceof yn ? en(e.schema) : e instanceof Et ? en(e.innerType()) : e instanceof gn ? [e.value] : e instanceof Zt ? e.options : e instanceof bn ? Object.keys(e.enum) : e instanceof xn ? en(e._def.innerType) : e instanceof fn ? [void 0] : e instanceof hn ? [null] : null;
class to extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== L.object)
      return V(r, {
        code: N.invalid_type,
        expected: L.object,
        received: r.parsedType
      }), se;
    const n = this.discriminator, s = r.data[n], o = this.optionsMap.get(s);
    return o ? r.common.async ? o._parseAsync({
      data: r.data,
      path: r.path,
      parent: r
    }) : o._parseSync({
      data: r.data,
      path: r.path,
      parent: r
    }) : (V(r, {
      code: N.invalid_union_discriminator,
      options: Array.from(this.optionsMap.keys()),
      path: [n]
    }), se);
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
      const a = en(o.shape[t]);
      if (!a)
        throw new Error(`A discriminator value for key \`${t}\` could not be extracted from all schema options`);
      for (const i of a) {
        if (s.has(i))
          throw new Error(`Discriminator property ${String(t)} has duplicate value ${String(i)}`);
        s.set(i, o);
      }
    }
    return new to({
      typeName: G.ZodDiscriminatedUnion,
      discriminator: t,
      options: r,
      optionsMap: s,
      ...ne(n)
    });
  }
}
function Ps(e, t) {
  const r = Vt(e), n = Vt(t);
  if (e === t)
    return { valid: !0, data: e };
  if (r === L.object && n === L.object) {
    const s = Se.objectKeys(t), o = Se.objectKeys(e).filter((i) => s.indexOf(i) !== -1), a = { ...e, ...t };
    for (const i of o) {
      const l = Ps(e[i], t[i]);
      if (!l.valid)
        return { valid: !1 };
      a[i] = l.data;
    }
    return { valid: !0, data: a };
  } else if (r === L.array && n === L.array) {
    if (e.length !== t.length)
      return { valid: !1 };
    const s = [];
    for (let o = 0; o < e.length; o++) {
      const a = e[o], i = t[o], l = Ps(a, i);
      if (!l.valid)
        return { valid: !1 };
      s.push(l.data);
    }
    return { valid: !0, data: s };
  } else
    return r === L.date && n === L.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class mn extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (o, a) => {
      if (la(o) || la(a))
        return se;
      const i = Ps(o.value, a.value);
      return i.valid ? ((ca(o) || ca(a)) && r.dirty(), { status: r.value, value: i.data }) : (V(n, {
        code: N.invalid_intersection_types
      }), se);
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
mn.create = (e, t, r) => new mn({
  left: e,
  right: t,
  typeName: G.ZodIntersection,
  ...ne(r)
});
class St extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== L.array)
      return V(n, {
        code: N.invalid_type,
        expected: L.array,
        received: n.parsedType
      }), se;
    if (n.data.length < this._def.items.length)
      return V(n, {
        code: N.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), se;
    !this._def.rest && n.data.length > this._def.items.length && (V(n, {
      code: N.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const o = [...n.data].map((a, i) => {
      const l = this._def.items[i] || this._def.rest;
      return l ? l._parse(new dt(n, a, n.path, i)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(o).then((a) => Je.mergeArray(r, a)) : Je.mergeArray(r, o);
  }
  get items() {
    return this._def.items;
  }
  rest(t) {
    return new St({
      ...this._def,
      rest: t
    });
  }
}
St.create = (e, t) => {
  if (!Array.isArray(e))
    throw new Error("You must pass an array of schemas to z.tuple([ ... ])");
  return new St({
    items: e,
    typeName: G.ZodTuple,
    rest: null,
    ...ne(t)
  });
};
class vn extends fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== L.object)
      return V(n, {
        code: N.invalid_type,
        expected: L.object,
        received: n.parsedType
      }), se;
    const s = [], o = this._def.keyType, a = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: o._parse(new dt(n, i, n.path, i)),
        value: a._parse(new dt(n, n.data[i], n.path, i))
      });
    return n.common.async ? Je.mergeObjectAsync(r, s) : Je.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof fe ? new vn({
      keyType: t,
      valueType: r,
      typeName: G.ZodRecord,
      ...ne(n)
    }) : new vn({
      keyType: gt.create(),
      valueType: t,
      typeName: G.ZodRecord,
      ...ne(r)
    });
  }
}
class js extends fe {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== L.map)
      return V(n, {
        code: N.invalid_type,
        expected: L.map,
        received: n.parsedType
      }), se;
    const s = this._def.keyType, o = this._def.valueType, a = [...n.data.entries()].map(([i, l], c) => ({
      key: s._parse(new dt(n, i, n.path, [c, "key"])),
      value: o._parse(new dt(n, l, n.path, [c, "value"]))
    }));
    if (n.common.async) {
      const i = /* @__PURE__ */ new Map();
      return Promise.resolve().then(async () => {
        for (const l of a) {
          const c = await l.key, u = await l.value;
          if (c.status === "aborted" || u.status === "aborted")
            return se;
          (c.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(c.value, u.value);
        }
        return { status: r.value, value: i };
      });
    } else {
      const i = /* @__PURE__ */ new Map();
      for (const l of a) {
        const c = l.key, u = l.value;
        if (c.status === "aborted" || u.status === "aborted")
          return se;
        (c.status === "dirty" || u.status === "dirty") && r.dirty(), i.set(c.value, u.value);
      }
      return { status: r.value, value: i };
    }
  }
}
js.create = (e, t, r) => new js({
  valueType: t,
  keyType: e,
  typeName: G.ZodMap,
  ...ne(r)
});
class ur extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== L.set)
      return V(n, {
        code: N.invalid_type,
        expected: L.set,
        received: n.parsedType
      }), se;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (V(n, {
      code: N.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (V(n, {
      code: N.too_big,
      maximum: s.maxSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.maxSize.message
    }), r.dirty());
    const o = this._def.valueType;
    function a(l) {
      const c = /* @__PURE__ */ new Set();
      for (const u of l) {
        if (u.status === "aborted")
          return se;
        u.status === "dirty" && r.dirty(), c.add(u.value);
      }
      return { status: r.value, value: c };
    }
    const i = [...n.data.values()].map((l, c) => o._parse(new dt(n, l, n.path, c)));
    return n.common.async ? Promise.all(i).then((l) => a(l)) : a(i);
  }
  min(t, r) {
    return new ur({
      ...this._def,
      minSize: { value: t, message: q.toString(r) }
    });
  }
  max(t, r) {
    return new ur({
      ...this._def,
      maxSize: { value: t, message: q.toString(r) }
    });
  }
  size(t, r) {
    return this.min(t, r).max(t, r);
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
ur.create = (e, t) => new ur({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: G.ZodSet,
  ...ne(t)
});
class Rr extends fe {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== L.function)
      return V(r, {
        code: N.invalid_type,
        expected: L.function,
        received: r.parsedType
      }), se;
    function n(i, l) {
      return Os({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ts(),
          un
        ].filter((c) => !!c),
        issueData: {
          code: N.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(i, l) {
      return Os({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Ts(),
          un
        ].filter((c) => !!c),
        issueData: {
          code: N.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const o = { errorMap: r.common.contextualErrorMap }, a = r.data;
    if (this._def.returns instanceof jr) {
      const i = this;
      return Ge(async function(...l) {
        const c = new ct([]), u = await i._def.args.parseAsync(l, o).catch((g) => {
          throw c.addIssue(n(l, g)), c;
        }), d = await Reflect.apply(a, this, u);
        return await i._def.returns._def.type.parseAsync(d, o).catch((g) => {
          throw c.addIssue(s(d, g)), c;
        });
      });
    } else {
      const i = this;
      return Ge(function(...l) {
        const c = i._def.args.safeParse(l, o);
        if (!c.success)
          throw new ct([n(l, c.error)]);
        const u = Reflect.apply(a, this, c.data), d = i._def.returns.safeParse(u, o);
        if (!d.success)
          throw new ct([s(u, d.error)]);
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
    return new Rr({
      ...this._def,
      args: St.create(t).rest(er.create())
    });
  }
  returns(t) {
    return new Rr({
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
    return new Rr({
      args: t || St.create([]).rest(er.create()),
      returns: r || er.create(),
      typeName: G.ZodFunction,
      ...ne(n)
    });
  }
}
class yn extends fe {
  get schema() {
    return this._def.getter();
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    return this._def.getter()._parse({ data: r.data, path: r.path, parent: r });
  }
}
yn.create = (e, t) => new yn({
  getter: e,
  typeName: G.ZodLazy,
  ...ne(t)
});
class gn extends fe {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return V(r, {
        received: r.data,
        code: N.invalid_literal,
        expected: this._def.value
      }), se;
    }
    return { status: "valid", value: t.data };
  }
  get value() {
    return this._def.value;
  }
}
gn.create = (e, t) => new gn({
  value: e,
  typeName: G.ZodLiteral,
  ...ne(t)
});
function yi(e, t) {
  return new Zt({
    values: e,
    typeName: G.ZodEnum,
    ...ne(t)
  });
}
class Zt extends fe {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return V(r, {
        expected: Se.joinValues(n),
        received: r.parsedType,
        code: N.invalid_type
      }), se;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return V(r, {
        received: r.data,
        code: N.invalid_enum_value,
        options: n
      }), se;
    }
    return Ge(t.data);
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
    return Zt.create(t);
  }
  exclude(t) {
    return Zt.create(this.options.filter((r) => !t.includes(r)));
  }
}
Zt.create = yi;
class bn extends fe {
  _parse(t) {
    const r = Se.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== L.string && n.parsedType !== L.number) {
      const s = Se.objectValues(r);
      return V(n, {
        expected: Se.joinValues(s),
        received: n.parsedType,
        code: N.invalid_type
      }), se;
    }
    if (r.indexOf(t.data) === -1) {
      const s = Se.objectValues(r);
      return V(n, {
        received: n.data,
        code: N.invalid_enum_value,
        options: s
      }), se;
    }
    return Ge(t.data);
  }
  get enum() {
    return this._def.values;
  }
}
bn.create = (e, t) => new bn({
  values: e,
  typeName: G.ZodNativeEnum,
  ...ne(t)
});
class jr extends fe {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== L.promise && r.common.async === !1)
      return V(r, {
        code: N.invalid_type,
        expected: L.promise,
        received: r.parsedType
      }), se;
    const n = r.parsedType === L.promise ? r.data : Promise.resolve(r.data);
    return Ge(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
jr.create = (e, t) => new jr({
  type: e,
  typeName: G.ZodPromise,
  ...ne(t)
});
class Et extends fe {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === G.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, o = {
      addIssue: (a) => {
        V(n, a), a.fatal ? r.abort() : r.dirty();
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
        const l = s.refinement(i, o);
        if (n.common.async)
          return Promise.resolve(l);
        if (l instanceof Promise)
          throw new Error("Async refinement encountered during synchronous parse operation. Use .parseAsync instead.");
        return i;
      };
      if (n.common.async === !1) {
        const i = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return i.status === "aborted" ? se : (i.status === "dirty" && r.dirty(), a(i.value), { status: r.value, value: i.value });
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((i) => i.status === "aborted" ? se : (i.status === "dirty" && r.dirty(), a(i.value).then(() => ({ status: r.value, value: i.value }))));
    }
    if (s.type === "transform")
      if (n.common.async === !1) {
        const a = this._def.schema._parseSync({
          data: n.data,
          path: n.path,
          parent: n
        });
        if (!dn(a))
          return a;
        const i = s.transform(a.value, o);
        if (i instanceof Promise)
          throw new Error("Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.");
        return { status: r.value, value: i };
      } else
        return this._def.schema._parseAsync({ data: n.data, path: n.path, parent: n }).then((a) => dn(a) ? Promise.resolve(s.transform(a.value, o)).then((i) => ({ status: r.value, value: i })) : a);
    Se.assertNever(s);
  }
}
Et.create = (e, t, r) => new Et({
  schema: e,
  typeName: G.ZodEffects,
  effect: t,
  ...ne(r)
});
Et.createWithPreprocess = (e, t, r) => new Et({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: G.ZodEffects,
  ...ne(r)
});
class It extends fe {
  _parse(t) {
    return this._getType(t) === L.undefined ? Ge(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
It.create = (e, t) => new It({
  innerType: e,
  typeName: G.ZodOptional,
  ...ne(t)
});
class dr extends fe {
  _parse(t) {
    return this._getType(t) === L.null ? Ge(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
dr.create = (e, t) => new dr({
  innerType: e,
  typeName: G.ZodNullable,
  ...ne(t)
});
class xn extends fe {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    let n = r.data;
    return r.parsedType === L.undefined && (n = this._def.defaultValue()), this._def.innerType._parse({
      data: n,
      path: r.path,
      parent: r
    });
  }
  removeDefault() {
    return this._def.innerType;
  }
}
xn.create = (e, t) => new xn({
  innerType: e,
  typeName: G.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ne(t)
});
class $s extends fe {
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
    return Cs(s) ? s.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new ct(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new ct(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
$s.create = (e, t) => new $s({
  innerType: e,
  typeName: G.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ne(t)
});
class Is extends fe {
  _parse(t) {
    if (this._getType(t) !== L.nan) {
      const n = this._getOrReturnCtx(t);
      return V(n, {
        code: N.invalid_type,
        expected: L.nan,
        received: n.parsedType
      }), se;
    }
    return { status: "valid", value: t.data };
  }
}
Is.create = (e) => new Is({
  typeName: G.ZodNaN,
  ...ne(e)
});
class $d extends fe {
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
class kn extends fe {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? se : o.status === "dirty" ? (r.dirty(), wd(o.value)) : this._def.out._parseAsync({
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
      return s.status === "aborted" ? se : s.status === "dirty" ? (r.dirty(), {
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
    return new kn({
      in: t,
      out: r,
      typeName: G.ZodPipeline
    });
  }
}
class Ds extends fe {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return dn(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Ds.create = (e, t) => new Ds({
  innerType: e,
  typeName: G.ZodReadonly,
  ...ne(t)
});
De.lazycreate;
var G;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(G || (G = {}));
const Id = gt.create;
lr.create;
Is.create;
cr.create;
Rs.create;
Pr.create;
As.create;
fn.create;
hn.create;
ks.create;
er.create;
Dt.create;
Ns.create;
ut.create;
const Dd = De.create;
De.strictCreate;
pn.create;
to.create;
mn.create;
St.create;
vn.create;
js.create;
ur.create;
Rr.create;
yn.create;
gn.create;
Zt.create;
bn.create;
jr.create;
Et.create;
It.create;
dr.create;
Et.createWithPreprocess;
kn.create;
function Ae() {
  return Ae = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, Ae.apply(this, arguments);
}
function Md(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function gi(...e) {
  return (t) => e.forEach(
    (r) => Md(r, t)
  );
}
function qt(...e) {
  return Ut(gi(...e), e);
}
const Nn = /* @__PURE__ */ $e((e, t) => {
  const { children: r, ...n } = e, s = Qt.toArray(r), o = s.find(Fd);
  if (o) {
    const a = o.props.children, i = s.map((l) => l === o ? Qt.count(a) > 1 ? Qt.only(null) : /* @__PURE__ */ kr(a) ? a.props.children : null : l);
    return /* @__PURE__ */ le(Ms, Ae({}, n, {
      ref: t
    }), /* @__PURE__ */ kr(a) ? /* @__PURE__ */ Sn(a, void 0, i) : null);
  }
  return /* @__PURE__ */ le(Ms, Ae({}, n, {
    ref: t
  }), r);
});
Nn.displayName = "Slot";
const Ms = /* @__PURE__ */ $e((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ kr(r) ? /* @__PURE__ */ Sn(r, {
    ...Vd(n, r.props),
    ref: t ? gi(t, r.ref) : r.ref
  }) : Qt.count(r) > 1 ? Qt.only(null) : null;
});
Ms.displayName = "SlotClone";
const Ld = ({ children: e }) => /* @__PURE__ */ le(xt, null, e);
function Fd(e) {
  return /* @__PURE__ */ kr(e) && e.type === Ld;
}
function Vd(e, t) {
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
const da = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, fa = Ba, ro = (e, t) => (r) => {
  var n;
  if ((t == null ? void 0 : t.variants) == null)
    return fa(e, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
  const { variants: s, defaultVariants: o } = t, a = Object.keys(s).map((c) => {
    const u = r == null ? void 0 : r[c], d = o == null ? void 0 : o[c];
    if (u === null)
      return null;
    const h = da(u) || da(d);
    return s[c][h];
  }), i = r && Object.entries(r).reduce((c, u) => {
    let [d, h] = u;
    return h === void 0 || (c[d] = h), c;
  }, {}), l = t == null || (n = t.compoundVariants) === null || n === void 0 ? void 0 : n.reduce((c, u) => {
    let { class: d, className: h, ...g } = u;
    return Object.entries(g).every((m) => {
      let [v, x] = m;
      return Array.isArray(x) ? x.includes({
        ...o,
        ...i
      }[v]) : {
        ...o,
        ...i
      }[v] === x;
    }) ? [
      ...c,
      d,
      h
    ] : c;
  }, []);
  return fa(e, a, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, Ud = ro(
  "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
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
), Ar = Ce.forwardRef(
  ({ className: e, variant: t, size: r, asChild: n = !1, ...s }, o) => {
    const a = n ? Nn : "button";
    return /* @__PURE__ */ y.jsx(
      a,
      {
        className: Ne(Ud({ variant: t, size: r, className: e })),
        ref: o,
        ...s
      }
    );
  }
);
Ar.displayName = "Button";
const wt = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ne(
      "rounded-lg border bg-card text-card-foreground shadow-sm",
      e
    ),
    ...t
  }
));
wt.displayName = "Card";
const no = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ne("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
no.displayName = "CardHeader";
const so = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "h3",
  {
    ref: r,
    className: Ne(
      "text-2xl font-semibold leading-none tracking-tight",
      e
    ),
    ...t
  }
));
so.displayName = "CardTitle";
const bi = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "p",
  {
    ref: r,
    className: Ne("text-sm text-muted-foreground", e),
    ...t
  }
));
bi.displayName = "CardDescription";
const Ht = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx("div", { ref: r, className: Ne("p-6 pt-0", e), ...t }));
Ht.displayName = "CardContent";
const xi = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ne("flex items-center p-6 pt-0", e),
    ...t
  }
));
xi.displayName = "CardFooter";
const zd = () => /* @__PURE__ */ y.jsxs(wt, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
  /* @__PURE__ */ y.jsx(no, { className: "p-4", children: /* @__PURE__ */ y.jsx(so, { children: "ขอเลื่อนตารางเรียนหน่อยจารรร" }) }),
  /* @__PURE__ */ y.jsxs(Ht, { className: "flex flex-col gap-4 p-4", children: [
    /* @__PURE__ */ y.jsxs("div", { children: [
      "ขอเลื่อนตารางเรียนในวันที่ ",
      /* @__PURE__ */ y.jsx("span", { className: "text-orange-400", children: "26 พฤศจิกายน 2566" })
    ] }),
    /* @__PURE__ */ y.jsxs(wt, { className: "flex flex-row gap-3 items-center px-4 py-2", children: [
      /* @__PURE__ */ y.jsx("h2", { className: "text-xl", children: "09.00" }),
      /* @__PURE__ */ y.jsx("div", { className: "bg-orange-400 rounded-full h-[50px] w-[2px]" }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ y.jsx("p", { children: "คณิตศาสตร์ ป.1 " }),
        /* @__PURE__ */ y.jsx("p", { className: "text-xs", children: "ครูบี" })
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { children: [
      "เป็นวันที่ ",
      /* @__PURE__ */ y.jsx("span", { className: "text-orange-400", children: "3 ธันวาคม 2566" })
    ] }),
    /* @__PURE__ */ y.jsxs(wt, { className: "flex flex-row gap-3 items-center px-4 py-2", children: [
      /* @__PURE__ */ y.jsx("h2", { className: "text-xl", children: "09.00" }),
      /* @__PURE__ */ y.jsx("div", { className: "bg-orange-400 rounded-full h-[50px] w-[2px]" }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ y.jsx("p", { children: "คณิตศาสตร์ ป.1 " }),
        /* @__PURE__ */ y.jsx("p", { className: "text-xs", children: "ครูบี" })
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ y.jsx(Ar, { className: "w-full bg-orange-400 text-white", children: "ตรวจสอบตารางเรียน" }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ y.jsx(Ar, { className: "w-full border-green-400 text-green-400", variant: "outline", children: "ยืนยัน" }),
        /* @__PURE__ */ y.jsx(Ar, { className: "w-full border-red-400 text-red-400", variant: "outline", children: "ปฏิเสธ" })
      ] })
    ] })
  ] })
] }), Wd = ({ comp_type: e, content: t }) => {
  let [n, s, o] = ["border-gray-400", "bg-gray-100/50", /* @__PURE__ */ y.jsx(aa, { size: 28 })];
  switch (e == null ? void 0 : e.trim()) {
    case "NOTI:INFO":
      n = "border-gray-400", s = "bg-gray-100/50", o = /* @__PURE__ */ y.jsx(aa, { size: 28, className: "text-gray-400" });
      break;
    case "NOTI:SUCCESS":
      n = "border-green-400", s = "bg-green-100/50", o = /* @__PURE__ */ y.jsx(bd, { size: 28, className: "text-green-400" });
      break;
    case "NOTI:DANGER":
      n = "border-red-400", s = "bg-red-100/50", o = /* @__PURE__ */ y.jsx(xd, { size: 28, className: "text-red-400" });
      break;
  }
  return /* @__PURE__ */ y.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ y.jsxs(wt, { className: Ne("rounded-2xl flex items-center flex-row w-[500px] pl-4 border-2", n, s), children: [
    /* @__PURE__ */ y.jsx("div", { children: o }),
    /* @__PURE__ */ y.jsx(Ht, { className: "flex flex-row gap-4 p-4", children: /* @__PURE__ */ y.jsx("div", { children: t }) })
  ] }) });
};
function _i(e, t = []) {
  let r = [];
  function n(o, a) {
    const i = /* @__PURE__ */ or(a), l = r.length;
    r = [
      ...r,
      a
    ];
    function c(d) {
      const { scope: h, children: g, ...m } = d, v = (h == null ? void 0 : h[e][l]) || i, x = ar(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ le(v.Provider, {
        value: x
      }, g);
    }
    function u(d, h) {
      const g = (h == null ? void 0 : h[e][l]) || i, m = hr(g);
      if (m)
        return m;
      if (a !== void 0)
        return a;
      throw new Error(`\`${d}\` must be used within \`${o}\``);
    }
    return c.displayName = o + "Provider", [
      c,
      u
    ];
  }
  const s = () => {
    const o = r.map((a) => /* @__PURE__ */ or(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || o;
      return ar(
        () => ({
          [`__scope${e}`]: {
            ...i,
            [e]: l
          }
        }),
        [
          i,
          l
        ]
      );
    };
  };
  return s.scopeName = e, [
    n,
    Bd(s, ...t)
  ];
}
function Bd(...e) {
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
      const a = n.reduce((i, { useScope: l, scopeName: c }) => {
        const d = l(o)[`__scope${c}`];
        return {
          ...i,
          ...d
        };
      }, {});
      return ar(
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
function Pt(e) {
  const t = je(e);
  return ke(() => {
    t.current = e;
  }), ar(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
const $r = globalThis != null && globalThis.document ? va : () => {
}, Zd = [
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
], Tt = Zd.reduce((e, t) => {
  const r = /* @__PURE__ */ $e((n, s) => {
    const { asChild: o, ...a } = n, i = o ? Nn : t;
    return ke(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ le(i, Ae({}, a, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {}), wi = "Avatar", [qd, uh] = _i(wi), [Hd, Si] = qd(wi), Yd = /* @__PURE__ */ $e((e, t) => {
  const { __scopeAvatar: r, ...n } = e, [s, o] = xe("idle");
  return /* @__PURE__ */ le(Hd, {
    scope: r,
    imageLoadingStatus: s,
    onImageLoadingStatusChange: o
  }, /* @__PURE__ */ le(Tt.span, Ae({}, n, {
    ref: t
  })));
}), Jd = "AvatarImage", Gd = /* @__PURE__ */ $e((e, t) => {
  const { __scopeAvatar: r, src: n, onLoadingStatusChange: s = () => {
  }, ...o } = e, a = Si(Jd, r), i = Qd(n), l = Pt((c) => {
    s(c), a.onImageLoadingStatusChange(c);
  });
  return $r(() => {
    i !== "idle" && l(i);
  }, [
    i,
    l
  ]), i === "loaded" ? /* @__PURE__ */ le(Tt.img, Ae({}, o, {
    ref: t,
    src: n
  })) : null;
}), Xd = "AvatarFallback", Kd = /* @__PURE__ */ $e((e, t) => {
  const { __scopeAvatar: r, delayMs: n, ...s } = e, o = Si(Xd, r), [a, i] = xe(n === void 0);
  return ke(() => {
    if (n !== void 0) {
      const l = window.setTimeout(
        () => i(!0),
        n
      );
      return () => window.clearTimeout(l);
    }
  }, [
    n
  ]), a && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ le(Tt.span, Ae({}, s, {
    ref: t
  })) : null;
});
function Qd(e) {
  const [t, r] = xe("idle");
  return $r(() => {
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
const Ei = Yd, Ti = Gd, Oi = Kd, tr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Ei,
  {
    ref: r,
    className: Ne(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
tr.displayName = Ei.displayName;
const rr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Ti,
  {
    ref: r,
    className: Ne("aspect-square h-full w-full", e),
    ...t
  }
));
rr.displayName = Ti.displayName;
const nr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Oi,
  {
    ref: r,
    className: Ne(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
nr.displayName = Oi.displayName;
const ef = /* @__PURE__ */ $e((e, t) => /* @__PURE__ */ le(Tt.label, Ae({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), Ci = ef, tf = ro(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ri = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Ci,
  {
    ref: r,
    className: Ne(tf(), e),
    ...t
  }
));
Ri.displayName = Ci.displayName;
const rf = $u, Ai = Ce.createContext(
  {}
), nf = ({
  ...e
}) => /* @__PURE__ */ y.jsx(Ai.Provider, { value: { name: e.name }, children: /* @__PURE__ */ y.jsx(Lu, { ...e }) }), Pn = () => {
  const e = Ce.useContext(Ai), t = Ce.useContext(ki), { getFieldState: r, formState: n } = An(), s = r(e.name, n);
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
}, ki = Ce.createContext(
  {}
), Ni = Ce.forwardRef(({ className: e, ...t }, r) => {
  const n = Ce.useId();
  return /* @__PURE__ */ y.jsx(ki.Provider, { value: { id: n }, children: /* @__PURE__ */ y.jsx("div", { ref: r, className: Ne("space-y-2", e), ...t }) });
});
Ni.displayName = "FormItem";
const sf = Ce.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: s } = Pn();
  return /* @__PURE__ */ y.jsx(
    Ri,
    {
      ref: r,
      className: Ne(n && "text-destructive", e),
      htmlFor: s,
      ...t
    }
  );
});
sf.displayName = "FormLabel";
const Pi = Ce.forwardRef(({ ...e }, t) => {
  const { error: r, formItemId: n, formDescriptionId: s, formMessageId: o } = Pn();
  return /* @__PURE__ */ y.jsx(
    Nn,
    {
      ref: t,
      id: n,
      "aria-describedby": r ? `${s} ${o}` : `${s}`,
      "aria-invalid": !!r,
      ...e
    }
  );
});
Pi.displayName = "FormControl";
const of = Ce.forwardRef(({ className: e, ...t }, r) => {
  const { formDescriptionId: n } = Pn();
  return /* @__PURE__ */ y.jsx(
    "p",
    {
      ref: r,
      id: n,
      className: Ne("text-sm text-muted-foreground", e),
      ...t
    }
  );
});
of.displayName = "FormDescription";
const ji = Ce.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: s, formMessageId: o } = Pn(), a = s ? String(s == null ? void 0 : s.message) : t;
  return a ? /* @__PURE__ */ y.jsx(
    "p",
    {
      ref: n,
      id: o,
      className: Ne("text-sm font-medium text-destructive", e),
      ...r,
      children: a
    }
  ) : null;
});
ji.displayName = "FormMessage";
const $i = Ce.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ y.jsx(
    "input",
    {
      type: t,
      className: Ne(
        "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",
        e
      ),
      ref: n,
      ...r
    }
  )
);
$i.displayName = "Input";
function af(e, t) {
  return ya((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const Vr = (e) => {
  const { present: t, children: r } = e, n = lf(t), s = typeof r == "function" ? r({
    present: n.isPresent
  }) : Qt.only(r), o = qt(n.ref, s.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ Sn(s, {
    ref: o
  }) : null;
};
Vr.displayName = "Presence";
function lf(e) {
  const [t, r] = xe(), n = je({}), s = je(e), o = je("none"), a = e ? "mounted" : "unmounted", [i, l] = af(a, {
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
  return ke(() => {
    const c = Hr(n.current);
    o.current = i === "mounted" ? c : "none";
  }, [
    i
  ]), $r(() => {
    const c = n.current, u = s.current;
    if (u !== e) {
      const h = o.current, g = Hr(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    l
  ]), $r(() => {
    if (t) {
      const c = (d) => {
        const g = Hr(n.current).includes(d.animationName);
        d.target === t && g && ml(
          () => l("ANIMATION_END")
        );
      }, u = (d) => {
        d.target === t && (o.current = Hr(n.current));
      };
      return t.addEventListener("animationstart", u), t.addEventListener("animationcancel", c), t.addEventListener("animationend", c), () => {
        t.removeEventListener("animationstart", u), t.removeEventListener("animationcancel", c), t.removeEventListener("animationend", c);
      };
    } else
      l("ANIMATION_END");
  }, [
    t,
    l
  ]), {
    isPresent: [
      "mounted",
      "unmountSuspended"
    ].includes(i),
    ref: Ut((c) => {
      c && (n.current = getComputedStyle(c)), r(c);
    }, [])
  };
}
function Hr(e) {
  return (e == null ? void 0 : e.animationName) || "none";
}
const cf = /* @__PURE__ */ or(void 0);
function uf(e) {
  const t = hr(cf);
  return e || t || "ltr";
}
function df(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Bt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function ff(e, t) {
  return ya((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const Ii = "ScrollArea", [Di, dh] = _i(Ii), [hf, rt] = Di(Ii), pf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, type: n = "hover", dir: s, scrollHideDelay: o = 600, ...a } = e, [i, l] = xe(null), [c, u] = xe(null), [d, h] = xe(null), [g, m] = xe(null), [v, x] = xe(null), [P, T] = xe(0), [R, A] = xe(0), [w, U] = xe(!1), [J, ue] = xe(!1), W = qt(
    t,
    (be) => l(be)
  ), X = uf(s);
  return /* @__PURE__ */ le(hf, {
    scope: r,
    type: n,
    dir: X,
    scrollHideDelay: o,
    scrollArea: i,
    viewport: c,
    onViewportChange: u,
    content: d,
    onContentChange: h,
    scrollbarX: g,
    onScrollbarXChange: m,
    scrollbarXEnabled: w,
    onScrollbarXEnabledChange: U,
    scrollbarY: v,
    onScrollbarYChange: x,
    scrollbarYEnabled: J,
    onScrollbarYEnabledChange: ue,
    onCornerWidthChange: T,
    onCornerHeightChange: A
  }, /* @__PURE__ */ le(Tt.div, Ae({
    dir: X
  }, a, {
    ref: W,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": P + "px",
      "--radix-scroll-area-corner-height": R + "px",
      ...e.style
    }
  })));
}), mf = "ScrollAreaViewport", vf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, children: n, ...s } = e, o = rt(mf, r), a = je(null), i = qt(t, a, o.onViewportChange);
  return /* @__PURE__ */ le(xt, null, /* @__PURE__ */ le("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ le(Tt.div, Ae({
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
  }), /* @__PURE__ */ le("div", {
    ref: o.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, n)));
}), Ot = "ScrollAreaScrollbar", Mi = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ot, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: a } = s, i = e.orientation === "horizontal";
  return ke(() => (i ? o(!0) : a(!0), () => {
    i ? o(!1) : a(!1);
  }), [
    i,
    o,
    a
  ]), s.type === "hover" ? /* @__PURE__ */ le(yf, Ae({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "scroll" ? /* @__PURE__ */ le(gf, Ae({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "auto" ? /* @__PURE__ */ le(Li, Ae({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "always" ? /* @__PURE__ */ le(oo, Ae({}, n, {
    ref: t
  })) : null;
}), yf = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ot, e.__scopeScrollArea), [o, a] = xe(!1);
  return ke(() => {
    const i = s.scrollArea;
    let l = 0;
    if (i) {
      const c = () => {
        window.clearTimeout(l), a(!0);
      }, u = () => {
        l = window.setTimeout(
          () => a(!1),
          s.scrollHideDelay
        );
      };
      return i.addEventListener("pointerenter", c), i.addEventListener("pointerleave", u), () => {
        window.clearTimeout(l), i.removeEventListener("pointerenter", c), i.removeEventListener("pointerleave", u);
      };
    }
  }, [
    s.scrollArea,
    s.scrollHideDelay
  ]), /* @__PURE__ */ le(Vr, {
    present: r || o
  }, /* @__PURE__ */ le(Li, Ae({
    "data-state": o ? "visible" : "hidden"
  }, n, {
    ref: t
  })));
}), gf = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ot, e.__scopeScrollArea), o = e.orientation === "horizontal", a = $n(
    () => l("SCROLL_END"),
    100
  ), [i, l] = ff("hidden", {
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
  return ke(() => {
    if (i === "idle") {
      const c = window.setTimeout(
        () => l("HIDE"),
        s.scrollHideDelay
      );
      return () => window.clearTimeout(c);
    }
  }, [
    i,
    s.scrollHideDelay,
    l
  ]), ke(() => {
    const c = s.viewport, u = o ? "scrollLeft" : "scrollTop";
    if (c) {
      let d = c[u];
      const h = () => {
        const g = c[u];
        d !== g && (l("SCROLL"), a()), d = g;
      };
      return c.addEventListener("scroll", h), () => c.removeEventListener("scroll", h);
    }
  }, [
    s.viewport,
    o,
    l,
    a
  ]), /* @__PURE__ */ le(Vr, {
    present: r || i !== "hidden"
  }, /* @__PURE__ */ le(oo, Ae({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, n, {
    ref: t,
    onPointerEnter: Bt(
      e.onPointerEnter,
      () => l("POINTER_ENTER")
    ),
    onPointerLeave: Bt(
      e.onPointerLeave,
      () => l("POINTER_LEAVE")
    )
  })));
}), Li = /* @__PURE__ */ $e((e, t) => {
  const r = rt(Ot, e.__scopeScrollArea), { forceMount: n, ...s } = e, [o, a] = xe(!1), i = e.orientation === "horizontal", l = $n(() => {
    if (r.viewport) {
      const c = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      a(i ? c : u);
    }
  }, 10);
  return fr(r.viewport, l), fr(r.content, l), /* @__PURE__ */ le(Vr, {
    present: n || o
  }, /* @__PURE__ */ le(oo, Ae({
    "data-state": o ? "visible" : "hidden"
  }, s, {
    ref: t
  })));
}), oo = /* @__PURE__ */ $e((e, t) => {
  const { orientation: r = "vertical", ...n } = e, s = rt(Ot, e.__scopeScrollArea), o = je(null), a = je(0), [i, l] = xe({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), c = zi(i.viewport, i.content), u = {
    ...n,
    sizes: i,
    onSizesChange: l,
    hasThumb: c > 0 && c < 1,
    onThumbChange: (h) => o.current = h,
    onThumbPointerUp: () => a.current = 0,
    onThumbPointerDown: (h) => a.current = h
  };
  function d(h, g) {
    return Of(h, a.current, i, g);
  }
  return r === "horizontal" ? /* @__PURE__ */ le(bf, Ae({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && o.current) {
        const h = s.viewport.scrollLeft, g = ha(h, i, s.dir);
        o.current.style.transform = `translate3d(${g}px, 0, 0)`;
      }
    },
    onWheelScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = h);
    },
    onDragScroll: (h) => {
      s.viewport && (s.viewport.scrollLeft = d(h, s.dir));
    }
  })) : r === "vertical" ? /* @__PURE__ */ le(xf, Ae({}, u, {
    ref: t,
    onThumbPositionChange: () => {
      if (s.viewport && o.current) {
        const h = s.viewport.scrollTop, g = ha(h, i);
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
}), bf = /* @__PURE__ */ $e((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = rt(Ot, e.__scopeScrollArea), [a, i] = xe(), l = je(null), c = qt(t, l, o.onScrollbarXChange);
  return ke(() => {
    l.current && i(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ le(Vi, Ae({
    "data-orientation": "horizontal"
  }, s, {
    ref: c,
    sizes: r,
    style: {
      bottom: 0,
      left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": jn(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (o.viewport) {
        const h = o.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(h), Bi(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      l.current && o.viewport && a && n({
        content: o.viewport.scrollWidth,
        viewport: o.viewport.offsetWidth,
        scrollbar: {
          size: l.current.clientWidth,
          paddingStart: _n(a.paddingLeft),
          paddingEnd: _n(a.paddingRight)
        }
      });
    }
  }));
}), xf = /* @__PURE__ */ $e((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = rt(Ot, e.__scopeScrollArea), [a, i] = xe(), l = je(null), c = qt(t, l, o.onScrollbarYChange);
  return ke(() => {
    l.current && i(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ le(Vi, Ae({
    "data-orientation": "vertical"
  }, s, {
    ref: c,
    sizes: r,
    style: {
      top: 0,
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": jn(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (o.viewport) {
        const h = o.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(h), Bi(h, d) && u.preventDefault();
      }
    },
    onResize: () => {
      l.current && o.viewport && a && n({
        content: o.viewport.scrollHeight,
        viewport: o.viewport.offsetHeight,
        scrollbar: {
          size: l.current.clientHeight,
          paddingStart: _n(a.paddingTop),
          paddingEnd: _n(a.paddingBottom)
        }
      });
    }
  }));
}), [_f, Fi] = Di(Ot), Vi = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, sizes: n, hasThumb: s, onThumbChange: o, onThumbPointerUp: a, onThumbPointerDown: i, onThumbPositionChange: l, onDragScroll: c, onWheelScroll: u, onResize: d, ...h } = e, g = rt(Ot, r), [m, v] = xe(null), x = qt(
    t,
    (W) => v(W)
  ), P = je(null), T = je(""), R = g.viewport, A = n.content - n.viewport, w = Pt(u), U = Pt(l), J = $n(d, 10);
  function ue(W) {
    if (P.current) {
      const X = W.clientX - P.current.left, be = W.clientY - P.current.top;
      c({
        x: X,
        y: be
      });
    }
  }
  return ke(() => {
    const W = (X) => {
      const be = X.target;
      (m == null ? void 0 : m.contains(be)) && w(X, A);
    };
    return document.addEventListener("wheel", W, {
      passive: !1
    }), () => document.removeEventListener("wheel", W, {
      passive: !1
    });
  }, [
    R,
    m,
    A,
    w
  ]), ke(U, [
    n,
    U
  ]), fr(m, J), fr(g.content, J), /* @__PURE__ */ le(_f, {
    scope: r,
    scrollbar: m,
    hasThumb: s,
    onThumbChange: Pt(o),
    onThumbPointerUp: Pt(a),
    onThumbPositionChange: U,
    onThumbPointerDown: Pt(i)
  }, /* @__PURE__ */ le(Tt.div, Ae({}, h, {
    ref: x,
    style: {
      position: "absolute",
      ...h.style
    },
    onPointerDown: Bt(e.onPointerDown, (W) => {
      W.button === 0 && (W.target.setPointerCapture(W.pointerId), P.current = m.getBoundingClientRect(), T.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), ue(W));
    }),
    onPointerMove: Bt(e.onPointerMove, ue),
    onPointerUp: Bt(e.onPointerUp, (W) => {
      const X = W.target;
      X.hasPointerCapture(W.pointerId) && X.releasePointerCapture(W.pointerId), document.body.style.webkitUserSelect = T.current, g.viewport && (g.viewport.style.scrollBehavior = ""), P.current = null;
    })
  })));
}), Ls = "ScrollAreaThumb", wf = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = Fi(Ls, e.__scopeScrollArea);
  return /* @__PURE__ */ le(Vr, {
    present: r || s.hasThumb
  }, /* @__PURE__ */ le(Sf, Ae({
    ref: t
  }, n)));
}), Sf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, style: n, ...s } = e, o = rt(Ls, r), a = Fi(Ls, r), { onThumbPositionChange: i } = a, l = qt(
    t,
    (d) => a.onThumbChange(d)
  ), c = je(), u = $n(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return ke(() => {
    const d = o.viewport;
    if (d) {
      const h = () => {
        if (u(), !c.current) {
          const g = Cf(d, i);
          c.current = g, i();
        }
      };
      return i(), d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
    }
  }, [
    o.viewport,
    u,
    i
  ]), /* @__PURE__ */ le(Tt.div, Ae({
    "data-state": a.hasThumb ? "visible" : "hidden"
  }, s, {
    ref: l,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...n
    },
    onPointerDownCapture: Bt(e.onPointerDownCapture, (d) => {
      const g = d.target.getBoundingClientRect(), m = d.clientX - g.left, v = d.clientY - g.top;
      a.onThumbPointerDown({
        x: m,
        y: v
      });
    }),
    onPointerUp: Bt(e.onPointerUp, a.onThumbPointerUp)
  }));
}), Ui = "ScrollAreaCorner", Ef = /* @__PURE__ */ $e((e, t) => {
  const r = rt(Ui, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? /* @__PURE__ */ le(Tf, Ae({}, e, {
    ref: t
  })) : null;
}), Tf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, s = rt(Ui, r), [o, a] = xe(0), [i, l] = xe(0), c = !!(o && i);
  return fr(s.scrollbarX, () => {
    var u;
    const d = ((u = s.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    s.onCornerHeightChange(d), l(d);
  }), fr(s.scrollbarY, () => {
    var u;
    const d = ((u = s.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    s.onCornerWidthChange(d), a(d);
  }), c ? /* @__PURE__ */ le(Tt.div, Ae({}, n, {
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
function _n(e) {
  return e ? parseInt(e, 10) : 0;
}
function zi(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function jn(e) {
  const t = zi(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function Of(e, t, r, n = "ltr") {
  const s = jn(r), o = s / 2, a = t || o, i = s - a, l = r.scrollbar.paddingStart + a, c = r.scrollbar.size - r.scrollbar.paddingEnd - i, u = r.content - r.viewport, d = n === "ltr" ? [
    0,
    u
  ] : [
    u * -1,
    0
  ];
  return Wi([
    l,
    c
  ], d)(e);
}
function ha(e, t, r = "ltr") {
  const n = jn(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = t.scrollbar.size - s, a = t.content - t.viewport, i = o - n, l = r === "ltr" ? [
    0,
    a
  ] : [
    a * -1,
    0
  ], c = df(e, l);
  return Wi([
    0,
    a
  ], [
    0,
    i
  ])(c);
}
function Wi(e, t) {
  return (r) => {
    if (e[0] === e[1] || t[0] === t[1])
      return t[0];
    const n = (t[1] - t[0]) / (e[1] - e[0]);
    return t[0] + n * (r - e[0]);
  };
}
function Bi(e, t) {
  return e > 0 && e < t;
}
const Cf = (e, t = () => {
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
function $n(e, t) {
  const r = Pt(e), n = je(0);
  return ke(
    () => () => window.clearTimeout(n.current),
    []
  ), Ut(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [
    r,
    t
  ]);
}
function fr(e, t) {
  const r = Pt(t);
  $r(() => {
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
const Zi = pf, Rf = vf, Af = Ef, qi = Ce.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ y.jsxs(
  Zi,
  {
    ref: n,
    className: Ne("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ y.jsx(Rf, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ y.jsx(Hi, {}),
      /* @__PURE__ */ y.jsx(Af, {})
    ]
  }
));
qi.displayName = Zi.displayName;
const Hi = Ce.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ y.jsx(
  Mi,
  {
    ref: n,
    orientation: t,
    className: Ne(
      "flex touch-none select-none transition-colors",
      t === "vertical" && "h-full w-2.5 border-l border-l-transparent p-[1px]",
      t === "horizontal" && "h-2.5 flex-col border-t border-t-transparent p-[1px]",
      e
    ),
    ...r,
    children: /* @__PURE__ */ y.jsx(wf, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Hi.displayName = Mi.displayName;
const kf = ro(
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
function Yi({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ y.jsx("div", { className: Ne(kf({ variant: t }), e), ...r });
}
const Nf = Dd({
  message: Id().min(2).max(50)
}), Pf = ({
  authToken: e,
  dataBaseApiUrl: t,
  roomId: r,
  userId: n,
  currentRoom: s,
  socketStatus: o,
  roomMenuOpen: a,
  setRoomMenuOpen: i,
  sideMenuOpen: l,
  setSideMenuOpen: c
}) => {
  var ue, W, X, be;
  const [u, d] = xe(), [h, g] = xe(), { rooms: m, profile: v, sendMessage: x, sending: P, fetchChatMessage: T, fetchUserProfile: R } = Hs(), A = Ju({
    resolver: ed(Nf),
    defaultValues: {
      message: ""
    }
  }), w = m[r] || [];
  ke(() => {
    if (r) {
      const E = (/* @__PURE__ */ new Date()).toISOString();
      T(t, e, r, E, "2023-12-20T09:32:13.000Z"), R(t, e, r);
    }
  }, [T, R, r, t, e]), ke(() => {
    if (v.length > 1) {
      const E = v[0].teacher_id;
      n === E ? (d(v[0]), g(v[1])) : (d(v[1]), g(v[0]));
    }
  }, [v, n]);
  const U = (E) => {
    const z = v[0].teacher_id;
    if (n === z) {
      const B = {
        room_id: r,
        content: E.message,
        sender_id: z,
        sender_type: "TCA",
        type: "MSG"
      };
      x(t, e, B, r);
    }
    if (n !== z) {
      const B = {
        room_id: r,
        content: E.message,
        sender_id: n,
        sender_type: "STD",
        type: "MSG"
      };
      x(t, e, B, r);
    }
    A.reset();
  }, J = (E) => (h == null ? void 0 : h.teacher_id) === E || (h == null ? void 0 : h.student_id) === E ? h : u;
  return /* @__PURE__ */ y.jsx("div", { className: "flex flex-row relative z-10", children: /* @__PURE__ */ y.jsxs(wt, { className: "rounded-none w-full", children: [
    /* @__PURE__ */ y.jsxs(no, { className: "flex items-center border-b-[1px]", children: [
      /* @__PURE__ */ y.jsxs(so, { className: "max-w-[70%] text-center", children: [
        s.room_name,
        " (",
        s.room_id,
        ")"
      ] }),
      /* @__PURE__ */ y.jsxs(bi, { children: [
        (ue = v[0]) == null ? void 0 : ue.firstname,
        " ",
        (W = v[0]) == null ? void 0 : W.lastname
      ] })
    ] }),
    /* @__PURE__ */ y.jsx(vd, { className: "absolute cursor-pointer top-[20px] left-[20px]", onClick: () => i(!a) }),
    /* @__PURE__ */ y.jsx(yd, { className: "absolute cursor-pointer top-[20px] right-[20px]", onClick: () => c(!l) }),
    /* @__PURE__ */ y.jsx(Yi, { variant: "outline", className: "absolute top-20 right-4", children: o ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      "Connected ",
      /* @__PURE__ */ y.jsx("div", { className: "p-[3px] bg-green-400 rounded-full ml-1" })
    ] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
      "Disconnected ",
      /* @__PURE__ */ y.jsx("div", { className: "p-[3px] bg-red-400 rounded-full ml-1" })
    ] }) }),
    /* @__PURE__ */ y.jsx(Ht, { className: "p-0", children: /* @__PURE__ */ y.jsxs(qi, { className: "h-full w-full rounded-md mt-4 p-4", children: [
      w.map((E) => {
        var z, B, de, ce;
        return /* @__PURE__ */ y.jsxs("div", { className: Ne("flex gap-2 my-2", E.sender_id === n ? "flex-row justify-end" : "flex-row-reverse justify-end"), children: [
          E.type === "COMP" && /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row items-end gap-2", children: [
            /* @__PURE__ */ y.jsxs(tr, { children: [
              /* @__PURE__ */ y.jsx(rr, { src: (z = J(E.sender_id)) == null ? void 0 : z.photo_url }),
              /* @__PURE__ */ y.jsx(nr, { children: (B = J(E.sender_id)) == null ? void 0 : B.firstname })
            ] }),
            /* @__PURE__ */ y.jsx(zd, { ...E })
          ] }),
          E.type === "MSG" && /* @__PURE__ */ y.jsxs("div", { className: Ne("flex items-end gap-2", E.sender_id === n ? "flex-row-reverse" : "flex-row"), children: [
            /* @__PURE__ */ y.jsxs(tr, { children: [
              /* @__PURE__ */ y.jsx(rr, { src: (de = J(E.sender_id)) == null ? void 0 : de.photo_url }),
              /* @__PURE__ */ y.jsx(nr, { children: (ce = J(E.sender_id)) == null ? void 0 : ce.firstname })
            ] }),
            /* @__PURE__ */ y.jsx(
              "div",
              {
                className: Ne(
                  "flex flex-col  text-black p-2 px-4 rounded-t-full",
                  E.sender_id === n ? "rounded-l-full bg-blue-100" : "rounded-r-full bg-gray-100"
                ),
                children: /* @__PURE__ */ y.jsx("p", { children: E.content })
              }
            )
          ] }),
          E.type === "NOTI" && /* @__PURE__ */ y.jsx(Wd, { ...E })
        ] }, E.id);
      }),
      P && /* @__PURE__ */ y.jsxs("div", { className: Ne("flex items-end gap-2 flex-row-reverse"), children: [
        /* @__PURE__ */ y.jsxs(tr, { children: [
          /* @__PURE__ */ y.jsx(rr, { src: (X = J(n)) == null ? void 0 : X.photo_url }),
          /* @__PURE__ */ y.jsx(nr, { children: (be = J(n)) == null ? void 0 : be.firstname })
        ] }),
        /* @__PURE__ */ y.jsx("div", { className: Ne("flex flex-col  text-black p-2 px-4 rounded-t-full rounded-l-full bg-blue-100"), children: /* @__PURE__ */ y.jsx("p", { children: "กำลังส่ง..." }) })
      ] })
    ] }) }),
    /* @__PURE__ */ y.jsx(xi, { className: "p-4", children: /* @__PURE__ */ y.jsx(rf, { ...A, children: /* @__PURE__ */ y.jsx("form", { onSubmit: A.handleSubmit(U), className: "space-y-8 w-full", children: /* @__PURE__ */ y.jsx(
      nf,
      {
        control: A.control,
        name: "message",
        render: ({ field: E }) => /* @__PURE__ */ y.jsxs(Ni, { children: [
          /* @__PURE__ */ y.jsx(Pi, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-1", children: [
            /* @__PURE__ */ y.jsx($i, { disabled: !o, placeholder: "Aa", ...E }),
            /* @__PURE__ */ y.jsx(Ar, { disabled: !o, type: "submit", variant: "outline", children: "Send" })
          ] }) }),
          /* @__PURE__ */ y.jsx(ji, { className: "text-red-400" })
        ] })
      }
    ) }) }) })
  ] }, r) });
}, jf = ({ order: { course_id: e, course_name: t } }) => /* @__PURE__ */ y.jsxs(wt, { className: "relative rounded-none w-full", children: [
  /* @__PURE__ */ y.jsxs(Ht, { className: "p-3", children: [
    /* @__PURE__ */ y.jsx("p", { className: "text-lg font-bold", children: e }),
    /* @__PURE__ */ y.jsx("div", { children: t })
  ] }),
  /* @__PURE__ */ y.jsx(Yi, { variant: "secondary", className: "absolute top-3 right-3 ", children: "ดูรายละเอียด" })
] }), $f = ({ orderStatus: e }) => {
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
  return /* @__PURE__ */ y.jsx(wt, { className: "rounded-none w-full", children: /* @__PURE__ */ y.jsxs(Ht, { className: "p-3", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
      t.hasTeacher ? /* @__PURE__ */ y.jsx(cs, { size: 30, className: "text-orange-400" }) : /* @__PURE__ */ y.jsx(us, { size: 30, className: "text-orange-400" }),
      "ได้คุณครูแล้ว"
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "p-[1px] bg-orange-400 w-[1px] h-[20px] ml-[14px]" }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
      t.isLearned ? /* @__PURE__ */ y.jsx(cs, { size: 30, className: "text-orange-400" }) : /* @__PURE__ */ y.jsx(us, { size: 30, className: "text-orange-400" }),
      "เรียนแล้ว"
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "p-[1px] bg-orange-400 w-[1px] h-[20px] ml-[14px]" }),
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
      t.isCompleted ? /* @__PURE__ */ y.jsx(cs, { size: 30, className: "text-orange-400" }) : /* @__PURE__ */ y.jsx(us, { size: 30, className: "text-orange-400" }),
      "เสร็จแล้ว"
    ] })
  ] }) });
}, If = ({ teacher: e }) => /* @__PURE__ */ y.jsx(wt, { className: "rounded-none w-full", children: /* @__PURE__ */ y.jsxs(Ht, { className: "p-3", children: [
  /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-3", children: [
      /* @__PURE__ */ y.jsxs(tr, { className: "border-orange-400 border-2", children: [
        /* @__PURE__ */ y.jsx(rr, { src: e.photo_url, alt: e.firstname }),
        /* @__PURE__ */ y.jsxs(nr, { children: [
          e.firstname[0],
          e.lastname[0]
        ] })
      ] }),
      /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ y.jsxs("p", { children: [
          e.firstname,
          " ",
          e.lastname
        ] }),
        /* @__PURE__ */ y.jsx("p", { children: "rating" })
      ] })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "absolute top-3 right-3 flex flex-row", children: [
      /* @__PURE__ */ y.jsx(gd, {}),
      " ",
      /* @__PURE__ */ y.jsx("div", { children: e.phone })
    ] })
  ] }),
  /* @__PURE__ */ y.jsx("div", {})
] }) });
var Df = Object.defineProperty, Mf = (e, t, r) => t in e ? Df(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, fs = (e, t, r) => (Mf(e, typeof t != "symbol" ? t + "" : t, r), r);
let Lf = class {
  constructor() {
    fs(this, "current", this.detect()), fs(this, "handoffState", "pending"), fs(this, "currentId", 0);
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
}, tn = new Lf(), Ir = (e, t) => {
  tn.isServer ? ke(e, t) : va(e, t);
};
function sr(e) {
  let t = je(e);
  return Ir(() => {
    t.current = e;
  }, [e]), t;
}
function Ff(e) {
  typeof queueMicrotask == "function" ? queueMicrotask(e) : Promise.resolve().then(e).catch((t) => setTimeout(() => {
    throw t;
  }));
}
function Ur() {
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
    return Ff(() => {
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
    let n = Ur();
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
function Ji() {
  let [e] = xe(Ur);
  return ke(() => () => e.dispose(), [e]), e;
}
let bt = function(e) {
  let t = sr(e);
  return te.useCallback((...r) => t.current(...r), [t]);
};
function Vf() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Ce ? ((t) => t.useSyncExternalStore)(Ce)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Gi() {
  let e = Vf(), [t, r] = Ce.useState(tn.isHandoffComplete);
  return t && tn.isHandoffComplete === !1 && r(!1), Ce.useEffect(() => {
    t !== !0 && r(!0);
  }, [t]), Ce.useEffect(() => tn.handoff(), []), e ? !1 : t;
}
function lt(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, lt), n;
}
let Uf = Symbol();
function Xi(...e) {
  let t = je(e);
  ke(() => {
    t.current = e;
  }, [e]);
  let r = bt((n) => {
    for (let s of t.current)
      s != null && (typeof s == "function" ? s(n) : s.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[Uf])) ? void 0 : r;
}
function wn(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var Ki = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ki || {}), $t = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($t || {});
function Qi({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: s, visible: o = !0, name: a }) {
  let i = el(t, e);
  if (o)
    return Yr(i, r, n, a);
  let l = s ?? 0;
  if (l & 2) {
    let { static: c = !1, ...u } = i;
    if (c)
      return Yr(u, r, n, a);
  }
  if (l & 1) {
    let { unmount: c = !0, ...u } = i;
    return lt(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Yr({ ...u, hidden: !0, style: { display: "none" } }, r, n, a);
    } });
  }
  return Yr(i, r, n, a);
}
function Yr(e, t = {}, r, n) {
  let { as: s = r, children: o, refName: a = "ref", ...i } = hs(e, ["unmount", "static"]), l = e.ref !== void 0 ? { [a]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in i && i.className && typeof i.className == "function" && (i.className = i.className(t));
  let u = {};
  if (t) {
    let d = !1, h = [];
    for (let [g, m] of Object.entries(t))
      typeof m == "boolean" && (d = !0), m === !0 && h.push(g);
    d && (u["data-headlessui-state"] = h.join(" "));
  }
  if (s === xt && Object.keys(pa(i)).length > 0) {
    if (!kr(c) || Array.isArray(c) && c.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(i).map((m) => `  - ${m}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((m) => `  - ${m}`).join(`
`)].join(`
`));
    let d = c.props, h = typeof (d == null ? void 0 : d.className) == "function" ? (...m) => wn(d == null ? void 0 : d.className(...m), i.className) : wn(d == null ? void 0 : d.className, i.className), g = h ? { className: h } : {};
    return Sn(c, Object.assign({}, el(c.props, pa(hs(i, ["ref"]))), u, l, zf(c.ref, l.ref), g));
  }
  return le(s, Object.assign({}, hs(i, ["ref"]), s !== xt && l, s !== xt && u), c);
}
function zf(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  } };
}
function el(...e) {
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
function ao(e) {
  var t;
  return Object.assign($e(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function pa(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function hs(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
let io = or(null);
io.displayName = "OpenClosedContext";
var yt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(yt || {});
function tl() {
  return hr(io);
}
function Wf({ value: e, children: t }) {
  return te.createElement(io.Provider, { value: e }, t);
}
function lo() {
  let e = je(!1);
  return Ir(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Bf(e = 0) {
  let [t, r] = xe(e), n = lo(), s = Ut((l) => {
    n.current && r((c) => c | l);
  }, [t, n]), o = Ut((l) => !!(t & l), [t]), a = Ut((l) => {
    n.current && r((c) => c & ~l);
  }, [r, n]), i = Ut((l) => {
    n.current && r((c) => c ^ l);
  }, [r]);
  return { flags: t, addFlag: s, hasFlag: o, removeFlag: a, toggleFlag: i };
}
function Zf(e) {
  let t = { called: !1 };
  return (...r) => {
    if (!t.called)
      return t.called = !0, e(...r);
  };
}
function ps(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function ms(e, ...t) {
  e && t.length > 0 && e.classList.remove(...t);
}
function qf(e, t) {
  let r = Ur();
  if (!e)
    return r.dispose;
  let { transitionDuration: n, transitionDelay: s } = getComputedStyle(e), [o, a] = [n, s].map((l) => {
    let [c = 0] = l.split(",").filter(Boolean).map((u) => u.includes("ms") ? parseFloat(u) : parseFloat(u) * 1e3).sort((u, d) => d - u);
    return c;
  }), i = o + a;
  if (i !== 0) {
    r.group((c) => {
      c.setTimeout(() => {
        t(), c.dispose();
      }, i), c.addEventListener(e, "transitionrun", (u) => {
        u.target === u.currentTarget && c.dispose();
      });
    });
    let l = r.addEventListener(e, "transitionend", (c) => {
      c.target === c.currentTarget && (t(), l());
    });
  } else
    t();
  return r.add(() => t()), r.dispose;
}
function Hf(e, t, r, n) {
  let s = r ? "enter" : "leave", o = Ur(), a = n !== void 0 ? Zf(n) : () => {
  };
  s === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let i = lt(s, { enter: () => t.enter, leave: () => t.leave }), l = lt(s, { enter: () => t.enterTo, leave: () => t.leaveTo }), c = lt(s, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return ms(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), ps(e, ...t.base, ...i, ...c), o.nextFrame(() => {
    ms(e, ...t.base, ...i, ...c), ps(e, ...t.base, ...i, ...l), qf(e, () => (ms(e, ...t.base, ...i), ps(e, ...t.base, ...t.entered), a()));
  }), o.dispose;
}
function Yf({ immediate: e, container: t, direction: r, classes: n, onStart: s, onStop: o }) {
  let a = lo(), i = Ji(), l = sr(r);
  Ir(() => {
    e && (l.current = "enter");
  }, [e]), Ir(() => {
    let c = Ur();
    i.add(c.dispose);
    let u = t.current;
    if (u && l.current !== "idle" && a.current)
      return c.dispose(), s.current(l.current), c.add(Hf(u, n.current, l.current === "enter", () => {
        c.dispose(), o.current(l.current);
      })), c.dispose;
  }, [r]);
}
function Nt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let In = or(null);
In.displayName = "TransitionContext";
var Jf = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Jf || {});
function Gf() {
  let e = hr(In);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Xf() {
  let e = hr(Dn);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Dn = or(null);
Dn.displayName = "NestingContext";
function Mn(e) {
  return "children" in e ? Mn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function rl(e, t) {
  let r = sr(e), n = je([]), s = lo(), o = Ji(), a = bt((g, m = $t.Hidden) => {
    let v = n.current.findIndex(({ el: x }) => x === g);
    v !== -1 && (lt(m, { [$t.Unmount]() {
      n.current.splice(v, 1);
    }, [$t.Hidden]() {
      n.current[v].state = "hidden";
    } }), o.microTask(() => {
      var x;
      !Mn(n) && s.current && ((x = r.current) == null || x.call(r));
    }));
  }), i = bt((g) => {
    let m = n.current.find(({ el: v }) => v === g);
    return m ? m.state !== "visible" && (m.state = "visible") : n.current.push({ el: g, state: "visible" }), () => a(g, $t.Unmount);
  }), l = je([]), c = je(Promise.resolve()), u = je({ enter: [], leave: [], idle: [] }), d = bt((g, m, v) => {
    l.current.splice(0), t && (t.chains.current[m] = t.chains.current[m].filter(([x]) => x !== g)), t == null || t.chains.current[m].push([g, new Promise((x) => {
      l.current.push(x);
    })]), t == null || t.chains.current[m].push([g, new Promise((x) => {
      Promise.all(u.current[m].map(([P, T]) => T)).then(() => x());
    })]), m === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => v(m)) : v(m);
  }), h = bt((g, m, v) => {
    Promise.all(u.current[m].splice(0).map(([x, P]) => P)).then(() => {
      var x;
      (x = l.current.shift()) == null || x();
    }).then(() => v(m));
  });
  return ar(() => ({ children: n, register: i, unregister: a, onStart: d, onStop: h, wait: c, chains: u }), [i, a, n, d, h, u, c]);
}
function Kf() {
}
let Qf = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ma(e) {
  var t;
  let r = {};
  for (let n of Qf)
    r[n] = (t = e[n]) != null ? t : Kf;
  return r;
}
function eh(e) {
  let t = je(ma(e));
  return ke(() => {
    t.current = ma(e);
  }, [e]), t;
}
let th = "div", nl = Ki.RenderStrategy;
function rh(e, t) {
  var r, n;
  let { beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i, enter: l, enterFrom: c, enterTo: u, entered: d, leave: h, leaveFrom: g, leaveTo: m, ...v } = e, x = je(null), P = Xi(x, t), T = (r = v.unmount) == null || r ? $t.Unmount : $t.Hidden, { show: R, appear: A, initial: w } = Gf(), [U, J] = xe(R ? "visible" : "hidden"), ue = Xf(), { register: W, unregister: X } = ue;
  ke(() => W(x), [W, x]), ke(() => {
    if (T === $t.Hidden && x.current) {
      if (R && U !== "visible") {
        J("visible");
        return;
      }
      return lt(U, { hidden: () => X(x), visible: () => W(x) });
    }
  }, [U, x, W, X, R, T]);
  let be = sr({ base: Nt(v.className), enter: Nt(l), enterFrom: Nt(c), enterTo: Nt(u), entered: Nt(d), leave: Nt(h), leaveFrom: Nt(g), leaveTo: Nt(m) }), E = eh({ beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i }), z = Gi();
  ke(() => {
    if (z && U === "visible" && x.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [x, U, z]);
  let B = w && !A, de = A && R && w, ce = !z || B ? "idle" : R ? "enter" : "leave", ve = Bf(0), ze = bt((H) => lt(H, { enter: () => {
    ve.addFlag(yt.Opening), E.current.beforeEnter();
  }, leave: () => {
    ve.addFlag(yt.Closing), E.current.beforeLeave();
  }, idle: () => {
  } })), Ie = bt((H) => lt(H, { enter: () => {
    ve.removeFlag(yt.Opening), E.current.afterEnter();
  }, leave: () => {
    ve.removeFlag(yt.Closing), E.current.afterLeave();
  }, idle: () => {
  } })), O = rl(() => {
    J("hidden"), X(x);
  }, ue);
  Yf({ immediate: de, container: x, classes: be, direction: ce, onStart: sr((H) => {
    O.onStart(x, H, ze);
  }), onStop: sr((H) => {
    O.onStop(x, H, Ie), H === "leave" && !Mn(O) && (J("hidden"), X(x));
  }) });
  let j = v, Y = { ref: P };
  return de ? j = { ...j, className: wn(v.className, ...be.current.enter, ...be.current.enterFrom) } : (j.className = wn(v.className, (n = x.current) == null ? void 0 : n.className), j.className === "" && delete j.className), te.createElement(Dn.Provider, { value: O }, te.createElement(Wf, { value: lt(U, { visible: yt.Open, hidden: yt.Closed }) | ve.flags }, Qi({ ourProps: Y, theirProps: j, defaultTag: th, features: nl, visible: U === "visible", name: "Transition.Child" })));
}
function nh(e, t) {
  let { show: r, appear: n = !1, unmount: s = !0, ...o } = e, a = je(null), i = Xi(a, t);
  Gi();
  let l = tl();
  if (r === void 0 && l !== null && (r = (l & yt.Open) === yt.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, u] = xe(r ? "visible" : "hidden"), d = rl(() => {
    u("hidden");
  }), [h, g] = xe(!0), m = je([r]);
  Ir(() => {
    h !== !1 && m.current[m.current.length - 1] !== r && (m.current.push(r), g(!1));
  }, [m, r]);
  let v = ar(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  ke(() => {
    if (r)
      u("visible");
    else if (!Mn(d))
      u("hidden");
    else {
      let R = a.current;
      if (!R)
        return;
      let A = R.getBoundingClientRect();
      A.x === 0 && A.y === 0 && A.width === 0 && A.height === 0 && u("hidden");
    }
  }, [r, d]);
  let x = { unmount: s }, P = bt(() => {
    var R;
    h && g(!1), (R = e.beforeEnter) == null || R.call(e);
  }), T = bt(() => {
    var R;
    h && g(!1), (R = e.beforeLeave) == null || R.call(e);
  });
  return te.createElement(Dn.Provider, { value: d }, te.createElement(In.Provider, { value: v }, Qi({ ourProps: { ...x, as: xt, children: te.createElement(sl, { ref: i, ...x, ...o, beforeEnter: P, beforeLeave: T }) }, theirProps: {}, defaultTag: xt, features: nl, visible: c === "visible", name: "Transition" })));
}
function sh(e, t) {
  let r = hr(In) !== null, n = tl() !== null;
  return te.createElement(te.Fragment, null, !r && n ? te.createElement(Fs, { ref: t, ...e }) : te.createElement(sl, { ref: t, ...e }));
}
let Fs = ao(nh), sl = ao(rh), oh = ao(sh), ol = Object.assign(Fs, { Child: oh, Root: Fs });
const ah = ({ dataBaseApiUrl: e, authToken: t, roomId: r, sideMenuOpen: n, setSideMenuOpen: s }) => {
  const [o, a] = xe(null);
  return ke(() => {
    r && Fc(e, t, r).then((i) => {
      a(i);
    });
  }, [r, e, t]), o && /* @__PURE__ */ y.jsx(
    ol,
    {
      show: n,
      as: xt,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 -translate-x-10",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 -translate-x-10",
      children: /* @__PURE__ */ y.jsx("div", { className: "", onClick: () => s(!1), children: /* @__PURE__ */ y.jsxs("div", { className: "min-w-[300px] h-full", onClick: (i) => i.stopPropagation(), children: [
        /* @__PURE__ */ y.jsx(jf, { order: o.order }),
        /* @__PURE__ */ y.jsx($f, { orderStatus: o.order.order_status }),
        /* @__PURE__ */ y.jsx(If, { teacher: o.teacher })
      ] }) })
    }
  );
}, ih = ({ roomMenuOpen: e, chatRoom: t, selectedTab: r, setSelectedTab: n, userProfiles: s }) => /* @__PURE__ */ y.jsx(
  ol,
  {
    show: e,
    as: xt,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-x-10",
    enterTo: "opacity-100 translate-x-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-x-0",
    leaveTo: "opacity-0 translate-x-10",
    children: /* @__PURE__ */ y.jsx("div", { className: "flex flex-col border-y border-l ", children: t && t.map((o, a) => {
      var i, l, c, u;
      return /* @__PURE__ */ y.jsxs(
        "button",
        {
          className: Ne("min-w-[300px] px-4 py-2  flex flex-row gap-4 border-l-4 ", r === a ? "border-l-4 border-orange-400 bg-gray-100/50" : "border-white"),
          onClick: () => n(a),
          children: [
            /* @__PURE__ */ y.jsxs(tr, { children: [
              /* @__PURE__ */ y.jsx(rr, { src: (i = s[a]) == null ? void 0 : i.photo_url }),
              /* @__PURE__ */ y.jsx(nr, { children: (l = s[a]) == null ? void 0 : l.firstname })
            ] }),
            /* @__PURE__ */ y.jsxs("div", { className: "flex flex-col items-start", children: [
              /* @__PURE__ */ y.jsxs("p", { className: "truncate max-w-[200px]", children: [
                o.room_name,
                " (",
                o.room_id,
                ")"
              ] }),
              /* @__PURE__ */ y.jsxs("p", { className: "text-sm", children: [
                (c = s[a]) == null ? void 0 : c.firstname,
                " ",
                (u = s[a]) == null ? void 0 : u.lastname
              ] })
            ] })
          ]
        },
        o.id
      );
    }) })
  }
), hh = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n }) => {
  const [s, o] = xe(0), [a, i] = xe([]), { connectWebSocket: l, socketStatus: c, disconnectWebSocket: u } = Hs(), { fetchChatRoom: d, chatRoom: h } = Qc(), [g, m] = xe(!1), [v, x] = xe(!1);
  return ke(() => {
    const P = async () => {
      const R = (await Promise.all(h.map((A) => Va(t, r, A.room_id)))).flat().filter((A) => A.teacher_id);
      i(R);
    };
    h && h.length > 0 && P();
  }, [h, t, r]), ke(() => {
    l(t, e, r), d(t, r);
    function P() {
      document.visibilityState === "hidden" ? u() : (l(t, e, r), d(t, r));
    }
    return document.addEventListener("visibilitychange", P), () => {
      document.removeEventListener("visibilitychange", P);
    };
  }, [l, d, e, t, r, u]), /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row", children: [
    /* @__PURE__ */ y.jsx(
      ih,
      {
        roomMenuOpen: g,
        setRoomMenuOpen: m,
        selectedTab: s,
        setSelectedTab: o,
        userProfiles: a,
        chatRoom: h
      }
    ),
    h && h.map((P, T) => /* @__PURE__ */ y.jsx("div", { className: `w-full ${s === T ? "block" : "hidden"}`, children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ y.jsx(
        Pf,
        {
          dataBaseApiUrl: t,
          authToken: r,
          currentRoom: P,
          roomId: P.room_id,
          userId: n,
          socketStatus: c,
          setRoomMenuOpen: m,
          roomMenuOpen: g,
          sideMenuOpen: v,
          setSideMenuOpen: x
        }
      ),
      /* @__PURE__ */ y.jsx(ah, { dataBaseApiUrl: t, authToken: r, roomId: P.room_id, sideMenuOpen: v, setSideMenuOpen: x })
    ] }) }, P.id))
  ] });
};
export {
  hh as ChatApp
};
