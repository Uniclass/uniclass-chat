import * as Ce from "react";
import ee, { forwardRef as $e, createElement as ue, useCallback as Ut, Children as Kt, isValidElement as kr, cloneElement as Sn, Fragment as xt, createContext as sr, useMemo as or, useContext as fr, useRef as je, useEffect as Re, useLayoutEffect as va, useState as xe, useReducer as ya } from "react";
import { flushSync as pl } from "react-dom";
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
function ml() {
  return yo || (yo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = ee, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), m = Symbol.iterator, v = "@@iterator";
    function x(f) {
      if (f === null || typeof f != "object")
        return null;
      var O = m && f[m] || f[v];
      return typeof O == "function" ? O : null;
    }
    var D = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(f) {
      {
        for (var O = arguments.length, L = new Array(O > 1 ? O - 1 : 0), X = 1; X < O; X++)
          L[X - 1] = arguments[X];
        C("error", f, L);
      }
    }
    function C(f, O, L) {
      {
        var X = D.ReactDebugCurrentFrame, we = X.getStackAddendum();
        we !== "" && (O += "%s", L = L.concat([we]));
        var Ae = L.map(function(ye) {
          return String(ye);
        });
        Ae.unshift("Warning: " + O), Function.prototype.apply.call(console[f], console, Ae);
      }
    }
    var A = !1, _ = !1, z = !1, te = !1, oe = !1, B;
    B = Symbol.for("react.module.reference");
    function G(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === o || oe || f === s || f === c || f === u || te || f === g || A || _ || z || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === B || f.getModuleId !== void 0));
    }
    function be(f, O, L) {
      var X = f.displayName;
      if (X)
        return X;
      var we = O.displayName || O.name || "";
      return we !== "" ? L + "(" + we + ")" : L;
    }
    function P(f) {
      return f.displayName || "Context";
    }
    function N(f) {
      if (f == null)
        return null;
      if (typeof f.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof f == "function")
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
            var O = f;
            return P(O) + ".Consumer";
          case a:
            var L = f;
            return P(L._context) + ".Provider";
          case l:
            return be(f, f.render, "ForwardRef");
          case d:
            var X = f.displayName || null;
            return X !== null ? X : N(f.type) || "Memo";
          case h: {
            var we = f, Ae = we._payload, ye = we._init;
            try {
              return N(ye(Ae));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var W = Object.assign, ae = 0, de, fe, ze, Ie, T, j, Y;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function K() {
      {
        if (ae === 0) {
          de = console.log, fe = console.info, ze = console.warn, Ie = console.error, T = console.group, j = console.groupCollapsed, Y = console.groupEnd;
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
        ae++;
      }
    }
    function pe() {
      {
        if (ae--, ae === 0) {
          var f = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: W({}, f, {
              value: de
            }),
            info: W({}, f, {
              value: fe
            }),
            warn: W({}, f, {
              value: ze
            }),
            error: W({}, f, {
              value: Ie
            }),
            group: W({}, f, {
              value: T
            }),
            groupCollapsed: W({}, f, {
              value: j
            }),
            groupEnd: W({}, f, {
              value: Y
            })
          });
        }
        ae < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = D.ReactCurrentDispatcher, re;
    function ie(f, O, L) {
      {
        if (re === void 0)
          try {
            throw Error();
          } catch (we) {
            var X = we.stack.trim().match(/\n( *(at )?)/);
            re = X && X[1] || "";
          }
        return `
` + re + f;
      }
    }
    var me = !1, le;
    {
      var We = typeof WeakMap == "function" ? WeakMap : Map;
      le = new We();
    }
    function M(f, O) {
      if (!f || me)
        return "";
      {
        var L = le.get(f);
        if (L !== void 0)
          return L;
      }
      var X;
      me = !0;
      var we = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var Ae;
      Ae = Q.current, Q.current = null, K();
      try {
        if (O) {
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
              X = pt;
            }
            Reflect.construct(f, [], ye);
          } else {
            try {
              ye.call();
            } catch (pt) {
              X = pt;
            }
            f.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (pt) {
            X = pt;
          }
          f();
        }
      } catch (pt) {
        if (pt && X && typeof pt.stack == "string") {
          for (var ve = pt.stack.split(`
`), He = X.stack.split(`
`), Le = ve.length - 1, Ve = He.length - 1; Le >= 1 && Ve >= 0 && ve[Le] !== He[Ve]; )
            Ve--;
          for (; Le >= 1 && Ve >= 0; Le--, Ve--)
            if (ve[Le] !== He[Ve]) {
              if (Le !== 1 || Ve !== 1)
                do
                  if (Le--, Ve--, Ve < 0 || ve[Le] !== He[Ve]) {
                    var Ke = `
` + ve[Le].replace(" at new ", " at ");
                    return f.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", f.displayName)), typeof f == "function" && le.set(f, Ke), Ke;
                  }
                while (Le >= 1 && Ve >= 0);
              break;
            }
        }
      } finally {
        me = !1, Q.current = Ae, pe(), Error.prepareStackTrace = we;
      }
      var Yt = f ? f.displayName || f.name : "", vo = Yt ? ie(Yt) : "";
      return typeof f == "function" && le.set(f, vo), vo;
    }
    function qe(f, O, L) {
      return M(f, !1);
    }
    function Ct(f) {
      var O = f.prototype;
      return !!(O && O.isReactComponent);
    }
    function ot(f, O, L) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return M(f, Ct(f));
      if (typeof f == "string")
        return ie(f);
      switch (f) {
        case c:
          return ie("Suspense");
        case u:
          return ie("SuspenseList");
      }
      if (typeof f == "object")
        switch (f.$$typeof) {
          case l:
            return qe(f.render);
          case d:
            return ot(f.type, O, L);
          case h: {
            var X = f, we = X._payload, Ae = X._init;
            try {
              return ot(Ae(we), O, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Lt = Object.prototype.hasOwnProperty, Ln = {}, Fn = D.ReactDebugCurrentFrame;
    function yr(f) {
      if (f) {
        var O = f._owner, L = ot(f.type, f._source, O ? O.type : null);
        Fn.setExtraStackFrame(L);
      } else
        Fn.setExtraStackFrame(null);
    }
    function p(f, O, L, X, we) {
      {
        var Ae = Function.call.bind(Lt);
        for (var ye in f)
          if (Ae(f, ye)) {
            var ve = void 0;
            try {
              if (typeof f[ye] != "function") {
                var He = Error((X || "React class") + ": " + L + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              ve = f[ye](O, ye, X, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Le) {
              ve = Le;
            }
            ve && !(ve instanceof Error) && (yr(we), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", L, ye, typeof ve), yr(null)), ve instanceof Error && !(ve.message in Ln) && (Ln[ve.message] = !0, yr(we), E("Failed %s type: %s", L, ve.message), yr(null));
          }
      }
    }
    var b = Array.isArray;
    function w(f) {
      return b(f);
    }
    function V(f) {
      {
        var O = typeof Symbol == "function" && Symbol.toStringTag, L = O && f[Symbol.toStringTag] || f.constructor.name || "Object";
        return L;
      }
    }
    function $(f) {
      try {
        return R(f), !1;
      } catch {
        return !0;
      }
    }
    function R(f) {
      return "" + f;
    }
    function Z(f) {
      if ($(f))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", V(f)), R(f);
    }
    var _e = D.ReactCurrentOwner, Fe = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, ht, gr;
    gr = {};
    function br(f) {
      if (Lt.call(f, "ref")) {
        var O = Object.getOwnPropertyDescriptor(f, "ref").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return f.ref !== void 0;
    }
    function xr(f) {
      if (Lt.call(f, "key")) {
        var O = Object.getOwnPropertyDescriptor(f, "key").get;
        if (O && O.isReactWarning)
          return !1;
      }
      return f.key !== void 0;
    }
    function Vn(f, O) {
      if (typeof f.ref == "string" && _e.current && O && _e.current.stateNode !== O) {
        var L = N(_e.current.type);
        gr[L] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', N(_e.current.type), f.ref), gr[L] = !0);
      }
    }
    function zr(f, O) {
      {
        var L = function() {
          Xe || (Xe = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(f, "key", {
          get: L,
          configurable: !0
        });
      }
    }
    function Un(f, O) {
      {
        var L = function() {
          ht || (ht = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var Wr = function(f, O, L, X, we, Ae, ye) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: O,
        ref: L,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: Ae
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
        value: X
      }), Object.defineProperty(ve, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: we
      }), Object.freeze && (Object.freeze(ve.props), Object.freeze(ve)), ve;
    };
    function ol(f, O, L, X, we) {
      {
        var Ae, ye = {}, ve = null, He = null;
        L !== void 0 && (Z(L), ve = "" + L), xr(O) && (Z(O.key), ve = "" + O.key), br(O) && (He = O.ref, Vn(O, we));
        for (Ae in O)
          Lt.call(O, Ae) && !Fe.hasOwnProperty(Ae) && (ye[Ae] = O[Ae]);
        if (f && f.defaultProps) {
          var Le = f.defaultProps;
          for (Ae in Le)
            ye[Ae] === void 0 && (ye[Ae] = Le[Ae]);
        }
        if (ve || He) {
          var Ve = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          ve && zr(ye, Ve), He && Un(ye, Ve);
        }
        return Wr(f, ve, He, we, X, _e.current, ye);
      }
    }
    var zn = D.ReactCurrentOwner, co = D.ReactDebugCurrentFrame;
    function Ht(f) {
      if (f) {
        var O = f._owner, L = ot(f.type, f._source, O ? O.type : null);
        co.setExtraStackFrame(L);
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
          var f = N(zn.current.type);
          if (f)
            return `

Check the render method of \`` + f + "`.";
        }
        return "";
      }
    }
    function al(f) {
      {
        if (f !== void 0) {
          var O = f.fileName.replace(/^.*[\\\/]/, ""), L = f.lineNumber;
          return `

Check your code at ` + O + ":" + L + ".";
        }
        return "";
      }
    }
    var fo = {};
    function il(f) {
      {
        var O = uo();
        if (!O) {
          var L = typeof f == "string" ? f : f.displayName || f.name;
          L && (O = `

Check the top-level render call using <` + L + ">.");
        }
        return O;
      }
    }
    function ho(f, O) {
      {
        if (!f._store || f._store.validated || f.key != null)
          return;
        f._store.validated = !0;
        var L = il(O);
        if (fo[L])
          return;
        fo[L] = !0;
        var X = "";
        f && f._owner && f._owner !== zn.current && (X = " It was passed a child from " + N(f._owner.type) + "."), Ht(f), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, X), Ht(null);
      }
    }
    function po(f, O) {
      {
        if (typeof f != "object")
          return;
        if (w(f))
          for (var L = 0; L < f.length; L++) {
            var X = f[L];
            Bn(X) && ho(X, O);
          }
        else if (Bn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var we = x(f);
          if (typeof we == "function" && we !== f.entries)
            for (var Ae = we.call(f), ye; !(ye = Ae.next()).done; )
              Bn(ye.value) && ho(ye.value, O);
        }
      }
    }
    function ll(f) {
      {
        var O = f.type;
        if (O == null || typeof O == "string")
          return;
        var L;
        if (typeof O == "function")
          L = O.propTypes;
        else if (typeof O == "object" && (O.$$typeof === l || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        O.$$typeof === d))
          L = O.propTypes;
        else
          return;
        if (L) {
          var X = N(O);
          p(L, f.props, "prop", X, f);
        } else if (O.PropTypes !== void 0 && !Wn) {
          Wn = !0;
          var we = N(O);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function cl(f) {
      {
        for (var O = Object.keys(f.props), L = 0; L < O.length; L++) {
          var X = O[L];
          if (X !== "children" && X !== "key") {
            Ht(f), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Ht(null);
            break;
          }
        }
        f.ref !== null && (Ht(f), E("Invalid attribute `ref` supplied to `React.Fragment`."), Ht(null));
      }
    }
    function mo(f, O, L, X, we, Ae) {
      {
        var ye = G(f);
        if (!ye) {
          var ve = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = al(we);
          He ? ve += He : ve += uo();
          var Le;
          f === null ? Le = "null" : w(f) ? Le = "array" : f !== void 0 && f.$$typeof === t ? (Le = "<" + (N(f.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Le = typeof f, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Le, ve);
        }
        var Ve = ol(f, O, L, we, Ae);
        if (Ve == null)
          return Ve;
        if (ye) {
          var Ke = O.children;
          if (Ke !== void 0)
            if (X)
              if (w(Ke)) {
                for (var Yt = 0; Yt < Ke.length; Yt++)
                  po(Ke[Yt], f);
                Object.freeze && Object.freeze(Ke);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              po(Ke, f);
        }
        return f === n ? cl(Ve) : ll(Ve), Ve;
      }
    }
    function ul(f, O, L) {
      return mo(f, O, L, !0);
    }
    function dl(f, O, L) {
      return mo(f, O, L, !1);
    }
    var fl = dl, hl = ul;
    _r.Fragment = n, _r.jsx = fl, _r.jsxs = hl;
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
function vl() {
  if (go)
    return wr;
  go = 1;
  var e = ee, t = Symbol.for("react.element"), r = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, s = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, o = { key: !0, ref: !0, __self: !0, __source: !0 };
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
process.env.NODE_ENV === "production" ? vs.exports = vl() : vs.exports = ml();
var y = vs.exports;
function ba(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: yl } = Object.prototype, { getPrototypeOf: Vs } = Object, En = /* @__PURE__ */ ((e) => (t) => {
  const r = yl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ft = (e) => (e = e.toLowerCase(), (t) => En(t) === e), Tn = (e) => (t) => typeof t === e, { isArray: hr } = Array, Nr = Tn("undefined");
function gl(e) {
  return e !== null && !Nr(e) && e.constructor !== null && !Nr(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xa = ft("ArrayBuffer");
function bl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xa(e.buffer), t;
}
const xl = Tn("string"), tt = Tn("function"), _a = Tn("number"), On = (e) => e !== null && typeof e == "object", _l = (e) => e === !0 || e === !1, Jr = (e) => {
  if (En(e) !== "object")
    return !1;
  const t = Vs(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, wl = ft("Date"), Sl = ft("File"), El = ft("Blob"), Tl = ft("FileList"), Ol = (e) => On(e) && tt(e.pipe), Cl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = En(e)) === "formdata" || // detect form-data instance
  t === "object" && tt(e.toString) && e.toString() === "[object FormData]"));
}, Rl = ft("URLSearchParams"), Al = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Dr(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), hr(e))
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
    Jr(t[o]) && Jr(n) ? t[o] = ys(t[o], n) : Jr(n) ? t[o] = ys({}, n) : hr(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Dr(arguments[n], r);
  return t;
}
const kl = (e, t, r, { allOwnKeys: n } = {}) => (Dr(t, (s, o) => {
  r && tt(s) ? e[o] = ba(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), Nl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Pl = (e, t, r, n) => {
  e.prototype = Object.create(t.prototype, n), e.prototype.constructor = e, Object.defineProperty(e, "super", {
    value: t.prototype
  }), r && Object.assign(e.prototype, r);
}, jl = (e, t, r, n) => {
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
}, $l = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Il = (e) => {
  if (!e)
    return null;
  if (hr(e))
    return e;
  let t = e.length;
  if (!_a(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Dl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Vs(Uint8Array)), Ml = (e, t) => {
  const n = (e && e[Symbol.iterator]).call(e);
  let s;
  for (; (s = n.next()) && !s.done; ) {
    const o = s.value;
    t.call(e, o[0], o[1]);
  }
}, Ll = (e, t) => {
  let r;
  const n = [];
  for (; (r = e.exec(t)) !== null; )
    n.push(r);
  return n;
}, Fl = ft("HTMLFormElement"), Vl = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), bo = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), Ul = ft("RegExp"), Ta = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Dr(r, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (n[o] = a || s);
  }), Object.defineProperties(e, n);
}, zl = (e) => {
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
}, Wl = (e, t) => {
  const r = {}, n = (s) => {
    s.forEach((o) => {
      r[o] = !0;
    });
  };
  return hr(e) ? n(e) : n(String(e).split(t)), r;
}, Bl = () => {
}, Zl = (e, t) => (e = +e, Number.isFinite(e) ? e : t), Zn = "abcdefghijklmnopqrstuvwxyz", xo = "0123456789", Oa = {
  DIGIT: xo,
  ALPHA: Zn,
  ALPHA_DIGIT: Zn + Zn.toUpperCase() + xo
}, ql = (e = 16, t = Oa.ALPHA_DIGIT) => {
  let r = "";
  const { length: n } = t;
  for (; e--; )
    r += t[Math.random() * n | 0];
  return r;
};
function Hl(e) {
  return !!(e && tt(e.append) && e[Symbol.toStringTag] === "FormData" && e[Symbol.iterator]);
}
const Yl = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (On(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = hr(n) ? [] : {};
        return Dr(n, (a, i) => {
          const l = r(a, s + 1);
          !Nr(l) && (o[i] = l);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Jl = ft("AsyncFunction"), Gl = (e) => e && (On(e) || tt(e)) && tt(e.then) && tt(e.catch), S = {
  isArray: hr,
  isArrayBuffer: xa,
  isBuffer: gl,
  isFormData: Cl,
  isArrayBufferView: bl,
  isString: xl,
  isNumber: _a,
  isBoolean: _l,
  isObject: On,
  isPlainObject: Jr,
  isUndefined: Nr,
  isDate: wl,
  isFile: Sl,
  isBlob: El,
  isRegExp: Ul,
  isFunction: tt,
  isStream: Ol,
  isURLSearchParams: Rl,
  isTypedArray: Dl,
  isFileList: Tl,
  forEach: Dr,
  merge: ys,
  extend: kl,
  trim: Al,
  stripBOM: Nl,
  inherits: Pl,
  toFlatObject: jl,
  kindOf: En,
  kindOfTest: ft,
  endsWith: $l,
  toArray: Il,
  forEachEntry: Ml,
  matchAll: Ll,
  isHTMLForm: Fl,
  hasOwnProperty: bo,
  hasOwnProp: bo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ta,
  freezeMethods: zl,
  toObjectSet: Wl,
  toCamelCase: Vl,
  noop: Bl,
  toFiniteNumber: Zl,
  findKey: wa,
  global: Sa,
  isContextDefined: Ea,
  ALPHABET: Oa,
  generateString: ql,
  isSpecCompliantForm: Hl,
  toJSONObject: Yl,
  isAsyncFn: Jl,
  isThenable: Gl
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
const Xl = null;
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
function Kl(e) {
  return S.isArray(e) && !e.some(gs);
}
const Ql = S.toFlatObject(S, {}, null, function(t) {
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
    let D = m;
    if (m && !x && typeof m == "object") {
      if (S.endsWith(v, "{}"))
        v = n ? v : v.slice(0, -2), m = JSON.stringify(m);
      else if (S.isArray(m) && Kl(m) || (S.isFileList(m) || S.endsWith(v, "[]")) && (D = S.toArray(m)))
        return v = Aa(v), D.forEach(function(C, A) {
          !(S.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? _o([v], A, o) : a === null ? v : v + "[]",
            c(C)
          );
        }), !1;
    }
    return gs(m) ? !0 : (t.append(_o(x, v, o), c(m)), !1);
  }
  const d = [], h = Object.assign(Ql, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: gs
  });
  function g(m, v) {
    if (!S.isUndefined(m)) {
      if (d.indexOf(m) !== -1)
        throw Error("Circular reference detected in " + v.join("."));
      d.push(m), S.forEach(m, function(D, E) {
        (!(S.isUndefined(D) || D === null) && s.call(
          t,
          D,
          S.isString(E) ? E.trim() : E,
          v,
          h
        )) === !0 && g(D, v ? v.concat(E) : [E]);
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
function ec(e) {
  return encodeURIComponent(e).replace(/%3A/gi, ":").replace(/%24/g, "$").replace(/%2C/gi, ",").replace(/%20/g, "+").replace(/%5B/gi, "[").replace(/%5D/gi, "]");
}
function Na(e, t, r) {
  if (!t)
    return e;
  const n = r && r.encode || ec, s = r && r.serialize;
  let o;
  if (s ? o = s(t, r) : o = S.isURLSearchParams(t) ? t.toString() : new Us(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class tc {
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
const So = tc, Pa = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rc = typeof URLSearchParams < "u" ? URLSearchParams : Us, nc = typeof FormData < "u" ? FormData : null, sc = typeof Blob < "u" ? Blob : null, oc = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rc,
    FormData: nc,
    Blob: sc
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, ja = typeof window < "u" && typeof document < "u", ac = ((e) => ja && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ic = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: ja,
  hasStandardBrowserEnv: ac,
  hasStandardBrowserWebWorkerEnv: ic
}, Symbol.toStringTag, { value: "Module" })), at = {
  ...lc,
  ...oc
};
function cc(e, t) {
  return Cn(e, new at.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return at.isNode && S.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
    }
  }, t));
}
function uc(e) {
  return S.matchAll(/\w+|\[(\w*)]/g, e).map((t) => t[0] === "[]" ? "" : t[1] || t[0]);
}
function dc(e) {
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
    return a = !a && S.isArray(s) ? s.length : a, l ? (S.hasOwnProp(s, a) ? s[a] = [s[a], n] : s[a] = n, !i) : ((!s[a] || !S.isObject(s[a])) && (s[a] = []), t(r, n, s[a], o) && S.isArray(s[a]) && (s[a] = dc(s[a])), !i);
  }
  if (S.isFormData(e) && S.isFunction(e.entries)) {
    const r = {};
    return S.forEachEntry(e, (n, s) => {
      t(uc(n), s, r, 0);
    }), r;
  }
  return null;
}
function fc(e, t, r) {
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
        return cc(t, this.formSerializer).toString();
      if ((i = S.isFileList(t)) || n.indexOf("multipart/form-data") > -1) {
        const l = this.env && this.env.FormData;
        return Cn(
          i ? { "files[]": t } : t,
          l && new l(),
          this.formSerializer
        );
      }
    }
    return o || s ? (r.setContentType("application/json", !1), fc(t)) : t;
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
const Ws = zs, hc = S.toObjectSet([
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
]), pc = (e) => {
  const t = {};
  let r, n, s;
  return e && e.split(`
`).forEach(function(a) {
    s = a.indexOf(":"), r = a.substring(0, s).trim().toLowerCase(), n = a.substring(s + 1).trim(), !(!r || t[r] && hc[r]) && (r === "set-cookie" ? t[r] ? t[r].push(n) : t[r] = [n] : t[r] = t[r] ? t[r] + ", " + n : n);
  }), t;
}, Eo = Symbol("internals");
function Sr(e) {
  return e && String(e).trim().toLowerCase();
}
function Gr(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Gr) : String(e);
}
function mc(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const vc = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
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
function yc(e) {
  return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g, (t, r, n) => r.toUpperCase() + n);
}
function gc(e, t) {
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
    return S.isPlainObject(t) || t instanceof this.constructor ? a(t, r) : S.isString(t) && (t = t.trim()) && !vc(t) ? a(pc(t), r) : t != null && o(r, t, n), this;
  }
  get(t, r) {
    if (t = Sr(t), t) {
      const n = S.findKey(this, t);
      if (n) {
        const s = this[n];
        if (!r)
          return s;
        if (r === !0)
          return mc(s);
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
      const i = t ? yc(o) : String(o).trim();
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
      n[i] || (gc(s, a), n[i] = !0);
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
function bc(e, t, r) {
  const n = r.config.validateStatus;
  !r.status || !n || n(r.status) ? e(r) : t(new ge(
    "Request failed with status code " + r.status,
    [ge.ERR_BAD_REQUEST, ge.ERR_BAD_RESPONSE][Math.floor(r.status / 100) - 4],
    r.config,
    r.request,
    r
  ));
}
const xc = at.hasStandardBrowserEnv ? (
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
function _c(e) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e);
}
function wc(e, t) {
  return t ? e.replace(/\/+$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Da(e, t) {
  return e && !_c(t) ? wc(e, t) : t;
}
const Sc = at.hasStandardBrowserEnv ? (
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
function Ec(e) {
  const t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e);
  return t && t[1] || "";
}
function Tc(e, t) {
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
  const n = Tc(50, 250);
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
const Oc = typeof XMLHttpRequest < "u", Cc = Oc && function(e) {
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
        const [v, ...x] = u ? u.split(";").map((D) => D.trim()).filter(Boolean) : [];
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
      ), D = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: v,
        config: e,
        request: d
      };
      bc(function(C) {
        r(C), c();
      }, function(C) {
        n(C), c();
      }, D), d = null;
    }
    if ("onloadend" in d ? d.onloadend = g : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, d.onabort = function() {
      d && (n(new ge("Request aborted", ge.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new ge("Network Error", ge.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let x = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const D = e.transitional || Pa;
      e.timeoutErrorMessage && (x = e.timeoutErrorMessage), n(new ge(
        x,
        D.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        e,
        d
      )), d = null;
    }, at.hasStandardBrowserEnv && (i && S.isFunction(i) && (i = i(e)), i || i !== !1 && Sc(h))) {
      const v = e.xsrfHeaderName && e.xsrfCookieName && xc.read(e.xsrfCookieName);
      v && o.set(e.xsrfHeaderName, v);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in d && S.forEach(o.toJSON(), function(x, D) {
      d.setRequestHeader(D, x);
    }), S.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", To(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", To(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (v) => {
      d && (n(!v || v.type ? new Mr(null, e, d) : v), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const m = Ec(h);
    if (m && at.protocols.indexOf(m) === -1) {
      n(new ge("Unsupported protocol " + m + ":", ge.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, bs = {
  http: Xl,
  xhr: Cc
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
const Oo = (e) => `- ${e}`, Rc = (e) => S.isFunction(e) || e === null || e === !1, Ma = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let a;
      if (n = r, !Rc(r) && (n = bs[(a = String(r)).toLowerCase()], n === void 0))
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
function ar(e, t) {
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
const La = "1.6.2", Bs = {};
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
function Ac(e, t, r) {
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
  assertOptions: Ac,
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = ar(this.defaults, r);
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
    t = ar(this.defaults, t);
    const r = Da(t.baseURL, t.url);
    return Na(r, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
  rn.prototype[t] = function(r, n) {
    return this.request(ar(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, i) {
      return this.request(ar(i || {}, {
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
const kc = Zs;
function Nc(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function Pc(e) {
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
const jc = _s;
function Fa(e) {
  const t = new Xr(e), r = ba(Xr.prototype.request, t);
  return S.extend(r, Xr.prototype, t, { allOwnKeys: !0 }), S.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Fa(ar(e, s));
  }, r;
}
const Ue = Fa(Ws);
Ue.Axios = Xr;
Ue.CanceledError = Mr;
Ue.CancelToken = kc;
Ue.isCancel = Ia;
Ue.VERSION = La;
Ue.toFormData = Cn;
Ue.AxiosError = ge;
Ue.Cancel = Ue.CanceledError;
Ue.all = function(t) {
  return Promise.all(t);
};
Ue.spread = Nc;
Ue.isAxiosError = Pc;
Ue.mergeConfig = ar;
Ue.AxiosHeaders = _t;
Ue.formToJSON = (e) => $a(S.isHTMLForm(e) ? new FormData(e) : e);
Ue.getAdapter = Ma.getAdapter;
Ue.HttpStatusCode = jc;
Ue.default = Ue;
const pr = Ue, $c = (e, t) => pr.get(`${e}/chat/room`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), Ic = (e, t, r, n, s) => pr.get(`${e}/chat/room/${r}/message?ts_st=${n || ""}&ts_en=${s || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((o) => {
  if (o.data.code === 200)
    return o.data.payload;
  throw new Error(o.data.message_ui || o.data.message);
}), Dc = (e, t, r, n) => pr.post(`${e}/chat/room/${n}/message`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((s) => {
  if (s.data.code === 200)
    return s.data.payload;
  throw new Error(s.data.message_ui || s.data.message);
}), Mc = (e, t) => pr.get(`${e}/chat/token`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), Va = (e, t, r) => pr.get(`${e}/chat/room/${r}/attendant`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), Lc = (e, t, r) => pr.get(`${e}/chat/room/${r}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
});
var Fc = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const ko = (e) => {
  let t;
  const r = /* @__PURE__ */ new Set(), n = (l, c) => {
    const u = typeof l == "function" ? l(t) : l;
    if (!Object.is(u, t)) {
      const d = t;
      t = c ?? (typeof u != "object" || u === null) ? u : Object.assign({}, t, u), r.forEach((h) => h(t, d));
    }
  }, s = () => t, i = { setState: n, getState: s, subscribe: (l) => (r.add(l), () => r.delete(l)), destroy: () => {
    (Fc ? "production" : void 0) !== "production" && console.warn(
      "[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."
    ), r.clear();
  } };
  return t = e(n, s, i), i;
}, Vc = (e) => e ? ko(e) : ko;
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
function Uc() {
  return No || (No = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ee, t = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function r(C) {
      {
        for (var A = arguments.length, _ = new Array(A > 1 ? A - 1 : 0), z = 1; z < A; z++)
          _[z - 1] = arguments[z];
        n("error", C, _);
      }
    }
    function n(C, A, _) {
      {
        var z = t.ReactDebugCurrentFrame, te = z.getStackAddendum();
        te !== "" && (A += "%s", _ = _.concat([te]));
        var oe = _.map(function(B) {
          return String(B);
        });
        oe.unshift("Warning: " + A), Function.prototype.apply.call(console[C], console, oe);
      }
    }
    function s(C, A) {
      return C === A && (C !== 0 || 1 / C === 1 / A) || C !== C && A !== A;
    }
    var o = typeof Object.is == "function" ? Object.is : s, a = e.useState, i = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, u = !1, d = !1;
    function h(C, A, _) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var z = A();
      if (!d) {
        var te = A();
        o(z, te) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var oe = a({
        inst: {
          value: z,
          getSnapshot: A
        }
      }), B = oe[0].inst, G = oe[1];
      return l(function() {
        B.value = z, B.getSnapshot = A, g(B) && G({
          inst: B
        });
      }, [C, z, A]), i(function() {
        g(B) && G({
          inst: B
        });
        var be = function() {
          g(B) && G({
            inst: B
          });
        };
        return C(be);
      }, [C]), c(z), z;
    }
    function g(C) {
      var A = C.getSnapshot, _ = C.value;
      try {
        var z = A();
        return !o(_, z);
      } catch {
        return !0;
      }
    }
    function m(C, A, _) {
      return A();
    }
    var v = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", x = !v, D = x ? m : h, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : D;
    Gn.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
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
function zc() {
  if (Po)
    return Xn;
  Po = 1;
  var e = ee;
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
  return jo || (jo = 1, process.env.NODE_ENV === "production" ? Br.exports = zc() : Br.exports = Uc()), Br.exports;
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
function Wc() {
  return $o || ($o = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var e = ee, t = Ua();
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
      var D = i(function() {
        var _ = !1, z, te, oe = function(P) {
          if (!_) {
            _ = !0, z = P;
            var N = g(P);
            if (m !== void 0 && x.hasValue) {
              var W = x.value;
              if (m(W, N))
                return te = W, W;
            }
            return te = N, N;
          }
          var ae = z, de = te;
          if (n(ae, P))
            return de;
          var fe = g(P);
          return m !== void 0 && m(de, fe) ? de : (z = P, te = fe, fe);
        }, B = h === void 0 ? null : h, G = function() {
          return oe(d());
        }, be = B === null ? void 0 : function() {
          return oe(B());
        };
        return [G, be];
      }, [d, h, g, m]), E = D[0], C = D[1], A = s(u, E, C);
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
function Bc() {
  if (Io)
    return Kn;
  Io = 1;
  var e = ee, t = Ua();
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
      function D(z) {
        if (!E) {
          if (E = !0, C = z, z = h(z), g !== void 0 && v.hasValue) {
            var te = v.value;
            if (g(te, z))
              return A = te;
          }
          return A = z;
        }
        if (te = A, n(C, z))
          return te;
        var oe = h(z);
        return g !== void 0 && g(te, oe) ? te : (C = z, A = oe);
      }
      var E = !1, C, A, _ = d === void 0 ? null : d;
      return [function() {
        return D(u());
      }, _ === null ? void 0 : function() {
        return D(_());
      }];
    }, [u, d, h, g]);
    var x = s(c, m[0], m[1]);
    return a(function() {
      v.hasValue = !0, v.value = x;
    }, [x]), l(x), x;
  }, Kn;
}
process.env.NODE_ENV === "production" ? ws.exports = Bc() : ws.exports = Wc();
var Zc = ws.exports;
const qc = /* @__PURE__ */ ga(Zc);
var qs = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Hc } = ee, { useSyncExternalStoreWithSelector: Yc } = qc;
let Do = !1;
function Jc(e, t = e.getState, r) {
  (qs ? "production" : void 0) !== "production" && r && !Do && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Do = !0);
  const n = Yc(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Hc(n), n;
}
const Mo = (e) => {
  (qs ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Vc(e) : e, r = (n, s) => Jc(t, n, s);
  return Object.assign(r, t), r;
}, za = (e) => e ? Mo(e) : Mo;
var Gc = (e) => ((qs ? "production" : void 0) !== "production" && console.warn(
  "[DEPRECATED] Default export is deprecated. Instead use `import { create } from 'zustand'`."
), za(e));
const Xc = {
  chatRoom: [],
  rooms: {},
  isLoading: !1,
  error: null
}, Kc = za((e) => ({
  ...Xc,
  fetchChatRoom: async (t, r) => {
    try {
      e({ isLoading: !0, error: null });
      const n = await $c(t, r);
      e({ chatRoom: n, isLoading: !1, error: null });
    } catch (n) {
      throw console.error("fetchChatRoom", n), e({ error: n }), n;
    }
  }
})), Qc = {
  rooms: {},
  profile: [],
  socket: null,
  socketStatus: !1,
  sending: !1
}, Hs = Gc((e, t) => ({
  ...Qc,
  // Connect to WebSocket
  connectWebSocket: async (r, n, s) => {
    const { socketStatus: o } = t();
    if (o)
      return;
    const a = await Mc(r, s), i = new WebSocket(n + "?token=" + a);
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
        e(() => ({ sending: !0 })), await Dc(r, n, s, o), a.send(JSON.stringify({ action: "sendmessage", data: s })), e(() => ({ sending: !1 }));
      } catch (i) {
        console.log(i), e(() => ({ sending: !1 }));
      }
  },
  // Fetch chat messages from API
  fetchChatMessage: async (r, n, s, o, a) => {
    try {
      const i = await Ic(r, n, s, o, a);
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
function eu(e) {
  const t = ru(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function s(a) {
    const i = a.split(Ys);
    return i[0] === "" && i.length !== 1 && i.shift(), Za(i, t) || tu(a);
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
function tu(e) {
  if (Lo.test(e)) {
    const t = Lo.exec(e)[1], r = t == null ? void 0 : t.substring(0, t.indexOf(":"));
    if (r)
      return "arbitrary.." + r;
  }
}
function ru(e) {
  const {
    theme: t,
    prefix: r
  } = e, n = {
    nextPart: /* @__PURE__ */ new Map(),
    validators: []
  };
  return su(Object.entries(e.classGroups), r).forEach(([o, a]) => {
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
      if (nu(s)) {
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
function nu(e) {
  return e.isThemeGetter;
}
function su(e, t) {
  return t ? e.map(([r, n]) => {
    const s = n.map((o) => typeof o == "string" ? t + o : typeof o == "object" ? Object.fromEntries(Object.entries(o).map(([a, i]) => [t + a, i])) : o);
    return [r, s];
  }) : e;
}
function ou(e) {
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
function au(e) {
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
function iu(e) {
  if (e.length <= 1)
    return e;
  const t = [];
  let r = [];
  return e.forEach((n) => {
    n[0] === "[" ? (t.push(...r.sort(), n), r = []) : r.push(n);
  }), t.push(...r.sort()), t;
}
function lu(e) {
  return {
    cache: ou(e.cacheSize),
    splitModifiers: au(e),
    ...eu(e)
  };
}
const cu = /\s+/;
function uu(e, t) {
  const {
    splitModifiers: r,
    getClassGroupId: n,
    getConflictingClassGroupIds: s
  } = t, o = /* @__PURE__ */ new Set();
  return e.trim().split(cu).map((a) => {
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
    const g = iu(i).join(":");
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
function du() {
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
function fu(e, ...t) {
  let r, n, s, o = a;
  function a(l) {
    const c = t.reduce((u, d) => d(u), e());
    return r = lu(c), n = r.cache.get, s = r.cache.set, o = i, i(l);
  }
  function i(l) {
    const c = n(l);
    if (c)
      return c;
    const u = uu(l, r);
    return s(l, u), u;
  }
  return function() {
    return o(du.apply(null, arguments));
  };
}
function Pe(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Ya = /^\[(?:([a-z-]+):)?(.+)\]$/i, hu = /^\d+\/\d+$/, pu = /* @__PURE__ */ new Set(["px", "full", "screen"]), mu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, vu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, yu = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, gu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function mt(e) {
  return zt(e) || pu.has(e) || hu.test(e);
}
function At(e) {
  return mr(e, "length", Ou);
}
function zt(e) {
  return !!e && !Number.isNaN(Number(e));
}
function Zr(e) {
  return mr(e, "number", zt);
}
function Er(e) {
  return !!e && Number.isInteger(Number(e));
}
function bu(e) {
  return e.endsWith("%") && zt(e.slice(0, -1));
}
function ce(e) {
  return Ya.test(e);
}
function kt(e) {
  return mu.test(e);
}
const xu = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function _u(e) {
  return mr(e, xu, Ja);
}
function wu(e) {
  return mr(e, "position", Ja);
}
const Su = /* @__PURE__ */ new Set(["image", "url"]);
function Eu(e) {
  return mr(e, Su, Ru);
}
function Tu(e) {
  return mr(e, "", Cu);
}
function Tr() {
  return !0;
}
function mr(e, t, r) {
  const n = Ya.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function Ou(e) {
  return vu.test(e);
}
function Ja() {
  return !1;
}
function Cu(e) {
  return yu.test(e);
}
function Ru(e) {
  return gu.test(e);
}
function Au() {
  const e = Pe("colors"), t = Pe("spacing"), r = Pe("blur"), n = Pe("brightness"), s = Pe("borderColor"), o = Pe("borderRadius"), a = Pe("borderSpacing"), i = Pe("borderWidth"), l = Pe("contrast"), c = Pe("grayscale"), u = Pe("hueRotate"), d = Pe("invert"), h = Pe("gap"), g = Pe("gradientColorStops"), m = Pe("gradientColorStopPositions"), v = Pe("inset"), x = Pe("margin"), D = Pe("opacity"), E = Pe("padding"), C = Pe("saturate"), A = Pe("scale"), _ = Pe("sepia"), z = Pe("skew"), te = Pe("space"), oe = Pe("translate"), B = () => ["auto", "contain", "none"], G = () => ["auto", "hidden", "clip", "visible", "scroll"], be = () => ["auto", ce, t], P = () => [ce, t], N = () => ["", mt, At], W = () => ["auto", zt, ce], ae = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], de = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ze = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Ie = () => ["", "0", ce], T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], j = () => [zt, Zr], Y = () => [zt, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Tr],
      spacing: [mt, At],
      blur: ["none", "", kt, ce],
      brightness: j(),
      borderColor: [e],
      borderRadius: ["none", "", "full", kt, ce],
      borderSpacing: P(),
      borderWidth: N(),
      contrast: j(),
      grayscale: Ie(),
      hueRotate: Y(),
      invert: Ie(),
      gap: P(),
      gradientColorStops: [e],
      gradientColorStopPositions: [bu, At],
      inset: be(),
      margin: be(),
      opacity: j(),
      padding: P(),
      saturate: j(),
      scale: j(),
      sepia: Ie(),
      skew: Y(),
      space: P(),
      translate: P()
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
        columns: [kt]
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
        object: [...ae(), ce]
      }],
      /**
       * Overflow
       * @see https://tailwindcss.com/docs/overflow
       */
      overflow: [{
        overflow: G()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": G()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": G()
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
        z: ["auto", Er, ce]
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
        flex: ["1", "auto", "initial", "none", ce]
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
        order: ["first", "last", "none", Er, ce]
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
          span: ["full", Er, ce]
        }, ce]
      }],
      /**
       * Grid Column Start
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-start": [{
        "col-start": W()
      }],
      /**
       * Grid Column End
       * @see https://tailwindcss.com/docs/grid-column
       */
      "col-end": [{
        "col-end": W()
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
          span: [Er, ce]
        }, ce]
      }],
      /**
       * Grid Row Start
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-start": [{
        "row-start": W()
      }],
      /**
       * Grid Row End
       * @see https://tailwindcss.com/docs/grid-row
       */
      "row-end": [{
        "row-end": W()
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
        p: [E]
      }],
      /**
       * Padding X
       * @see https://tailwindcss.com/docs/padding
       */
      px: [{
        px: [E]
      }],
      /**
       * Padding Y
       * @see https://tailwindcss.com/docs/padding
       */
      py: [{
        py: [E]
      }],
      /**
       * Padding Start
       * @see https://tailwindcss.com/docs/padding
       */
      ps: [{
        ps: [E]
      }],
      /**
       * Padding End
       * @see https://tailwindcss.com/docs/padding
       */
      pe: [{
        pe: [E]
      }],
      /**
       * Padding Top
       * @see https://tailwindcss.com/docs/padding
       */
      pt: [{
        pt: [E]
      }],
      /**
       * Padding Right
       * @see https://tailwindcss.com/docs/padding
       */
      pr: [{
        pr: [E]
      }],
      /**
       * Padding Bottom
       * @see https://tailwindcss.com/docs/padding
       */
      pb: [{
        pb: [E]
      }],
      /**
       * Padding Left
       * @see https://tailwindcss.com/docs/padding
       */
      pl: [{
        pl: [E]
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
        "space-x": [te]
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
        "space-y": [te]
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
          screen: [kt]
        }, kt]
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
        tracking: ["tighter", "tight", "normal", "wide", "wider", "widest", ce]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", mt, ce]
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
        "placeholder-opacity": [D]
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
        "text-opacity": [D]
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
        decoration: [...de(), "wavy"]
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
        "underline-offset": ["auto", mt, ce]
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
        indent: P()
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
        "bg-opacity": [D]
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
        bg: [...ae(), wu]
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
        bg: ["auto", "cover", "contain", _u]
      }],
      /**
       * Background Image
       * @see https://tailwindcss.com/docs/background-image
       */
      "bg-image": [{
        bg: ["none", {
          "gradient-to": ["t", "tr", "r", "br", "b", "bl", "l", "tl"]
        }, Eu]
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
        "border-opacity": [D]
      }],
      /**
       * Border Style
       * @see https://tailwindcss.com/docs/border-style
       */
      "border-style": [{
        border: [...de(), "hidden"]
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
        "divide-opacity": [D]
      }],
      /**
       * Divide Style
       * @see https://tailwindcss.com/docs/divide-style
       */
      "divide-style": [{
        divide: de()
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
        outline: ["", ...de()]
      }],
      /**
       * Outline Offset
       * @see https://tailwindcss.com/docs/outline-offset
       */
      "outline-offset": [{
        "outline-offset": [mt, ce]
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
        ring: N()
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
        "ring-opacity": [D]
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
        shadow: ["", "inner", "none", kt, Tu]
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
        opacity: [D]
      }],
      /**
       * Mix Blend Mode
       * @see https://tailwindcss.com/docs/mix-blend-mode
       */
      "mix-blend": [{
        "mix-blend": fe()
      }],
      /**
       * Background Blend Mode
       * @see https://tailwindcss.com/docs/background-blend-mode
       */
      "bg-blend": [{
        "bg-blend": fe()
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
        "drop-shadow": ["", "none", kt, ce]
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
        saturate: [C]
      }],
      /**
       * Sepia
       * @see https://tailwindcss.com/docs/sepia
       */
      sepia: [{
        sepia: [_]
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
        "backdrop-opacity": [D]
      }],
      /**
       * Backdrop Saturate
       * @see https://tailwindcss.com/docs/backdrop-saturate
       */
      "backdrop-saturate": [{
        "backdrop-saturate": [C]
      }],
      /**
       * Backdrop Sepia
       * @see https://tailwindcss.com/docs/backdrop-sepia
       */
      "backdrop-sepia": [{
        "backdrop-sepia": [_]
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
        transition: ["none", "all", "", "colors", "opacity", "shadow", "transform", ce]
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
        ease: ["linear", "in", "out", "in-out", ce]
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
        rotate: [Er, ce]
      }],
      /**
       * Translate X
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-x": [{
        "translate-x": [oe]
      }],
      /**
       * Translate Y
       * @see https://tailwindcss.com/docs/translate
       */
      "translate-y": [{
        "translate-y": [oe]
      }],
      /**
       * Skew X
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-x": [{
        "skew-x": [z]
      }],
      /**
       * Skew Y
       * @see https://tailwindcss.com/docs/skew
       */
      "skew-y": [{
        "skew-y": [z]
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
        "scroll-m": P()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": P()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": P()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": P()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": P()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": P()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": P()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": P()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": P()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": P()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": P()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": P()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": P()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": P()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": P()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": P()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": P()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": P()
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
const ku = /* @__PURE__ */ fu(Au);
function Ne(...e) {
  return ku(Ba(e));
}
var Lr = (e) => e.type === "checkbox", Xt = (e) => e instanceof Date, Ye = (e) => e == null;
const Ga = (e) => typeof e == "object";
var Be = (e) => !Ye(e) && !Array.isArray(e) && Ga(e) && !Xt(e), Xa = (e) => Be(e) && e.target ? Lr(e.target) ? e.target.checked : e.target.value : e, Nu = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Ka = (e, t) => e.has(Nu(t)), Pu = (e) => {
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
    if (t = r ? [] : {}, !r && !Pu(e))
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
}, Qa = ee.createContext(null), An = () => ee.useContext(Qa), ju = (e) => {
  const { children: t, ...r } = e;
  return ee.createElement(Qa.Provider, { value: r }, t);
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
  const t = ee.useRef(e);
  t.current = e, ee.useEffect(() => {
    const r = !e.disabled && t.current.subject && t.current.subject.subscribe({
      next: t.current.next
    });
    return () => {
      r && r.unsubscribe();
    };
  }, [e.disabled]);
}
function $u(e) {
  const t = An(), { control: r = t.control, disabled: n, name: s, exact: o } = e || {}, [a, i] = ee.useState(r._formState), l = ee.useRef(!0), c = ee.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = ee.useRef(s);
  return u.current = s, Gs({
    disabled: n,
    next: (d) => l.current && ri(u.current, d.name, o) && ti(d, c.current, r._updateFormState) && i({
      ...r._formState,
      ...d
    }),
    subject: r._subjects.state
  }), ee.useEffect(() => (l.current = !0, c.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), ei(a, r, c.current, !1);
}
var it = (e) => typeof e == "string", ni = (e, t, r, n, s) => it(e) ? (n && t.watch.add(e), I(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && t.watch.add(o), I(r, o))) : (n && (t.watchAll = !0), r);
function Iu(e) {
  const t = An(), { control: r = t.control, name: n, defaultValue: s, disabled: o, exact: a } = e || {}, i = ee.useRef(n);
  i.current = n, Gs({
    disabled: o,
    subject: r._subjects.values,
    next: (u) => {
      ri(i.current, u.name, a) && c(nt(ni(i.current, r._names, u.values || r._formValues, !1, s)));
    }
  });
  const [l, c] = ee.useState(r._getWatch(n, s));
  return ee.useEffect(() => r._removeUnmounted()), l;
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
function Du(e) {
  const t = An(), { name: r, disabled: n, control: s = t.control, shouldUnregister: o } = e, a = Ka(s._names.array, r), i = Iu({
    control: s,
    name: r,
    defaultValue: I(s._formValues, r, I(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = $u({
    control: s,
    name: r
  }), c = ee.useRef(s.register(r, {
    ...e.rules,
    value: i,
    ...et(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return ee.useEffect(() => {
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
  }, [r, s, a, o]), ee.useEffect(() => {
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
      onChange: ee.useCallback((u) => c.current.onChange({
        target: {
          value: Xa(u),
          name: r
        },
        type: nn.CHANGE
      }), [r]),
      onBlur: ee.useCallback(() => c.current.onBlur({
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
const Mu = (e) => e.render(Du(e));
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
var Lu = (e, t, r) => {
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
var Jt = (e) => Be(e) && !on(e) ? e : {
  value: e,
  message: ""
}, qo = async (e, t, r, n, s) => {
  const { ref: o, refs: a, required: i, maxLength: l, minLength: c, min: u, max: d, pattern: h, validate: g, name: m, valueAsNumber: v, mount: x, disabled: D } = e._f, E = I(t, m);
  if (!x || D)
    return {};
  const C = a ? a[0] : o, A = (P) => {
    n && C.reportValidity && (C.setCustomValidity(et(P) ? "" : P || ""), C.reportValidity());
  }, _ = {}, z = Qs(o), te = Lr(o), oe = z || te, B = (v || Ks(o)) && Me(o.value) && Me(E) || sn(o) && o.value === "" || E === "" || Array.isArray(E) && !E.length, G = oi.bind(null, m, r, _), be = (P, N, W, ae = vt.maxLength, de = vt.minLength) => {
    const fe = P ? N : W;
    _[m] = {
      type: P ? ae : de,
      message: fe,
      ref: o,
      ...G(P ? ae : de, fe)
    };
  };
  if (s ? !Array.isArray(E) || !E.length : i && (!oe && (B || Ye(E)) || et(E) && !E || te && !ai(a).isValid || z && !ii(a).isValid)) {
    const { value: P, message: N } = Qr(i) ? { value: !!i, message: i } : Jt(i);
    if (P && (_[m] = {
      type: vt.required,
      message: N,
      ref: C,
      ...G(vt.required, N)
    }, !r))
      return A(N), _;
  }
  if (!B && (!Ye(u) || !Ye(d))) {
    let P, N;
    const W = Jt(d), ae = Jt(u);
    if (!Ye(E) && !isNaN(E)) {
      const de = o.valueAsNumber || E && +E;
      Ye(W.value) || (P = de > W.value), Ye(ae.value) || (N = de < ae.value);
    } else {
      const de = o.valueAsDate || new Date(E), fe = (T) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + T), ze = o.type == "time", Ie = o.type == "week";
      it(W.value) && E && (P = ze ? fe(E) > fe(W.value) : Ie ? E > W.value : de > new Date(W.value)), it(ae.value) && E && (N = ze ? fe(E) < fe(ae.value) : Ie ? E < ae.value : de < new Date(ae.value));
    }
    if ((P || N) && (be(!!P, W.message, ae.message, vt.max, vt.min), !r))
      return A(_[m].message), _;
  }
  if ((l || c) && !B && (it(E) || s && Array.isArray(E))) {
    const P = Jt(l), N = Jt(c), W = !Ye(P.value) && E.length > +P.value, ae = !Ye(N.value) && E.length < +N.value;
    if ((W || ae) && (be(W, P.message, N.message), !r))
      return A(_[m].message), _;
  }
  if (h && !B && it(E)) {
    const { value: P, message: N } = Jt(h);
    if (on(P) && !E.match(P) && (_[m] = {
      type: vt.pattern,
      message: N,
      ref: o,
      ...G(vt.pattern, N)
    }, !r))
      return A(N), _;
  }
  if (g) {
    if (jt(g)) {
      const P = await g(E, t), N = Zo(P, C);
      if (N && (_[m] = {
        ...N,
        ...G(vt.validate, N.message)
      }, !r))
        return A(N.message), _;
    } else if (Be(g)) {
      let P = {};
      for (const N in g) {
        if (!Qe(P) && !r)
          break;
        const W = Zo(await g[N](E, t), C, N);
        W && (P = {
          ...W,
          ...G(N, W.message)
        }, A(W.message), r && (_[m] = P));
      }
      if (!Qe(P) && (_[m] = {
        ref: C,
        ...P
      }, !r))
        return _;
    }
  }
  return A(!0), _;
};
function Fu(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = Me(e) ? n++ : e[t[n++]];
  return e;
}
function Vu(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Me(e[t]))
      return !1;
  return !0;
}
function Ze(e, t) {
  const r = Array.isArray(t) ? t : Xs(t) ? [t] : si(t), n = r.length === 1 ? e : Fu(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (Be(n) && Qe(n) || Array.isArray(n) && Vu(n)) && Ze(e, r.slice(0, -1)), e;
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
  if (Xt(e) && Xt(t))
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
      if (Xt(o) && Xt(a) || Be(o) && Be(a) || Array.isArray(o) && Array.isArray(a) ? !Wt(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var li = (e) => e.type === "select-multiple", Uu = (e) => Qs(e) || Lr(e), es = (e) => sn(e) && e.isConnected, ci = (e) => {
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
var zu = (e, t, r, n) => {
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
}, Or = (e) => Me(e) ? e : on(e) ? e.source : Be(e) ? on(e.value) ? e.value.source : e.value : e, Wu = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
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
var Bu = (e, t, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, Zu = (e, t) => !Fr(I(e, t)).length && Ze(e, t);
const qu = {
  mode: st.onSubmit,
  reValidateMode: st.onChange,
  shouldFocusError: !0
};
function Hu(e = {}, t) {
  let r = {
    ...qu,
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
  }, g = e.resetOptions && e.resetOptions.keepDirtyValues, m = Vo(r.mode), v = Vo(r.reValidateMode), x = r.criteriaMode === st.all, D = (p) => (b) => {
    clearTimeout(u), u = setTimeout(p, b);
  }, E = async (p) => {
    if (d.isValid || p) {
      const b = r.resolver ? Qe((await G()).errors) : await P(s, !0);
      b !== n.isValid && h.state.next({
        isValid: b
      });
    }
  }, C = (p) => d.isValidating && h.state.next({
    isValidating: p
  }), A = (p, b = [], w, V, $ = !0, R = !0) => {
    if (V && w) {
      if (i.action = !0, R && Array.isArray(I(s, p))) {
        const Z = w(I(s, p), V.argA, V.argB);
        $ && Oe(s, p, Z);
      }
      if (R && Array.isArray(I(n.errors, p))) {
        const Z = w(I(n.errors, p), V.argA, V.argB);
        $ && Oe(n.errors, p, Z), Zu(n.errors, p);
      }
      if (d.touchedFields && R && Array.isArray(I(n.touchedFields, p))) {
        const Z = w(I(n.touchedFields, p), V.argA, V.argB);
        $ && Oe(n.touchedFields, p, Z);
      }
      d.dirtyFields && (n.dirtyFields = ts(o, a)), h.state.next({
        name: p,
        isDirty: W(p, b),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Oe(a, p, b);
  }, _ = (p, b) => {
    Oe(n.errors, p, b), h.state.next({
      errors: n.errors
    });
  }, z = (p) => {
    n.errors = p, h.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, te = (p, b, w, V) => {
    const $ = I(s, p);
    if ($) {
      const R = I(a, p, Me(w) ? I(o, p) : w);
      Me(R) || V && V.defaultChecked || b ? Oe(a, p, b ? R : rs($._f)) : fe(p, R), i.mount && E();
    }
  }, oe = (p, b, w, V, $) => {
    let R = !1, Z = !1;
    const _e = {
      name: p
    }, Fe = !!(I(s, p) && I(s, p)._f.disabled);
    if (!w || V) {
      d.isDirty && (Z = n.isDirty, n.isDirty = _e.isDirty = W(), R = Z !== _e.isDirty);
      const Xe = Fe || Wt(I(o, p), b);
      Z = !!(!Fe && I(n.dirtyFields, p)), Xe || Fe ? Ze(n.dirtyFields, p) : Oe(n.dirtyFields, p, !0), _e.dirtyFields = n.dirtyFields, R = R || d.dirtyFields && Z !== !Xe;
    }
    if (w) {
      const Xe = I(n.touchedFields, p);
      Xe || (Oe(n.touchedFields, p, w), _e.touchedFields = n.touchedFields, R = R || d.touchedFields && Xe !== w);
    }
    return R && $ && h.state.next(_e), R ? _e : {};
  }, B = (p, b, w, V) => {
    const $ = I(n.errors, p), R = d.isValid && et(b) && n.isValid !== b;
    if (e.delayError && w ? (c = D(() => _(p, w)), c(e.delayError)) : (clearTimeout(u), c = null, w ? Oe(n.errors, p, w) : Ze(n.errors, p)), (w ? !Wt($, w) : $) || !Qe(V) || R) {
      const Z = {
        ...V,
        ...R && et(b) ? { isValid: b } : {},
        errors: n.errors,
        name: p
      };
      n = {
        ...n,
        ...Z
      }, h.state.next(Z);
    }
    C(!1);
  }, G = async (p) => r.resolver(a, r.context, zu(p || l.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), be = async (p) => {
    const { errors: b } = await G(p);
    if (p)
      for (const w of p) {
        const V = I(b, w);
        V ? Oe(n.errors, w, V) : Ze(n.errors, w);
      }
    else
      n.errors = b;
    return b;
  }, P = async (p, b, w = {
    valid: !0
  }) => {
    for (const V in p) {
      const $ = p[V];
      if ($) {
        const { _f: R, ...Z } = $;
        if (R) {
          const _e = l.array.has(R.name), Fe = await qo($, a, x, r.shouldUseNativeValidation && !b, _e);
          if (Fe[R.name] && (w.valid = !1, b))
            break;
          !b && (I(Fe, R.name) ? _e ? Lu(n.errors, Fe, R.name) : Oe(n.errors, R.name, Fe[R.name]) : Ze(n.errors, R.name));
        }
        Z && await P(Z, b, w);
      }
    }
    return w.valid;
  }, N = () => {
    for (const p of l.unMount) {
      const b = I(s, p);
      b && (b._f.refs ? b._f.refs.every((w) => !es(w)) : !es(b._f.ref)) && ie(p);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, W = (p, b) => (p && b && Oe(a, p, b), !Wt(H(), o)), ae = (p, b, w) => ni(p, l, {
    ...i.mount ? a : Me(b) ? o : it(p) ? { [p]: b } : b
  }, w, b), de = (p) => Fr(I(i.mount ? a : o, p, e.shouldUnregister ? I(o, p, []) : [])), fe = (p, b, w = {}) => {
    const V = I(s, p);
    let $ = b;
    if (V) {
      const R = V._f;
      R && (!R.disabled && Oe(a, p, di(b, R)), $ = sn(R.ref) && Ye(b) ? "" : b, li(R.ref) ? [...R.ref.options].forEach((Z) => Z.selected = $.includes(Z.value)) : R.refs ? Lr(R.ref) ? R.refs.length > 1 ? R.refs.forEach((Z) => (!Z.defaultChecked || !Z.disabled) && (Z.checked = Array.isArray($) ? !!$.find((_e) => _e === Z.value) : $ === Z.value)) : R.refs[0] && (R.refs[0].checked = !!$) : R.refs.forEach((Z) => Z.checked = Z.value === $) : Ks(R.ref) ? R.ref.value = "" : (R.ref.value = $, R.ref.type || h.values.next({
        name: p,
        values: { ...a }
      })));
    }
    (w.shouldDirty || w.shouldTouch) && oe(p, $, w.shouldTouch, w.shouldDirty, !0), w.shouldValidate && Y(p);
  }, ze = (p, b, w) => {
    for (const V in b) {
      const $ = b[V], R = `${p}.${V}`, Z = I(s, R);
      (l.array.has(p) || !an($) || Z && !Z._f) && !Xt($) ? ze(R, $, w) : fe(R, $, w);
    }
  }, Ie = (p, b, w = {}) => {
    const V = I(s, p), $ = l.array.has(p), R = nt(b);
    Oe(a, p, R), $ ? (h.array.next({
      name: p,
      values: { ...a }
    }), (d.isDirty || d.dirtyFields) && w.shouldDirty && h.state.next({
      name: p,
      dirtyFields: ts(o, a),
      isDirty: W(p, R)
    })) : V && !V._f && !Ye(R) ? ze(p, R, w) : fe(p, R, w), Uo(p, l) && h.state.next({ ...n }), h.values.next({
      name: p,
      values: { ...a }
    }), !i.mount && t();
  }, T = async (p) => {
    const b = p.target;
    let w = b.name, V = !0;
    const $ = I(s, w), R = () => b.type ? rs($._f) : Xa(p), Z = (_e) => {
      V = Number.isNaN(_e) || _e === I(a, w, _e);
    };
    if ($) {
      let _e, Fe;
      const Xe = R(), ht = p.type === nn.BLUR || p.type === nn.FOCUS_OUT, gr = !Wu($._f) && !r.resolver && !I(n.errors, w) && !$._f.deps || Bu(ht, I(n.touchedFields, w), n.isSubmitted, v, m), br = Uo(w, l, ht);
      Oe(a, w, Xe), ht ? ($._f.onBlur && $._f.onBlur(p), c && c(0)) : $._f.onChange && $._f.onChange(p);
      const xr = oe(w, Xe, ht, !1), Vn = !Qe(xr) || br;
      if (!ht && h.values.next({
        name: w,
        type: p.type,
        values: { ...a }
      }), gr)
        return d.isValid && E(), Vn && h.state.next({ name: w, ...br ? {} : xr });
      if (!ht && br && h.state.next({ ...n }), C(!0), r.resolver) {
        const { errors: zr } = await G([w]);
        if (Z(Xe), V) {
          const Un = Ho(n.errors, s, w), Wr = Ho(zr, s, Un.name || w);
          _e = Wr.error, w = Wr.name, Fe = Qe(zr);
        }
      } else
        _e = (await qo($, a, x, r.shouldUseNativeValidation))[w], Z(Xe), V && (_e ? Fe = !1 : d.isValid && (Fe = await P(s, !0)));
      V && ($._f.deps && Y($._f.deps), B(w, Fe, _e, xr));
    }
  }, j = (p, b) => {
    if (I(n.errors, b) && p.focus)
      return p.focus(), 1;
  }, Y = async (p, b = {}) => {
    let w, V;
    const $ = Kr(p);
    if (C(!0), r.resolver) {
      const R = await be(Me(p) ? p : $);
      w = Qe(R), V = p ? !$.some((Z) => I(R, Z)) : w;
    } else
      p ? (V = (await Promise.all($.map(async (R) => {
        const Z = I(s, R);
        return await P(Z && Z._f ? { [R]: Z } : Z);
      }))).every(Boolean), !(!V && !n.isValid) && E()) : V = w = await P(s);
    return h.state.next({
      ...!it(p) || d.isValid && w !== n.isValid ? {} : { name: p },
      ...r.resolver || !p ? { isValid: w } : {},
      errors: n.errors,
      isValidating: !1
    }), b.shouldFocus && !V && Cr(s, j, p ? $ : l.mount), V;
  }, H = (p) => {
    const b = {
      ...o,
      ...i.mount ? a : {}
    };
    return Me(p) ? b : it(p) ? I(b, p) : p.map((w) => I(b, w));
  }, K = (p, b) => ({
    invalid: !!I((b || n).errors, p),
    isDirty: !!I((b || n).dirtyFields, p),
    isTouched: !!I((b || n).touchedFields, p),
    error: I((b || n).errors, p)
  }), pe = (p) => {
    p && Kr(p).forEach((b) => Ze(n.errors, b)), h.state.next({
      errors: p ? n.errors : {}
    });
  }, Q = (p, b, w) => {
    const V = (I(s, p, { _f: {} })._f || {}).ref;
    Oe(n.errors, p, {
      ...b,
      ref: V
    }), h.state.next({
      name: p,
      errors: n.errors,
      isValid: !1
    }), w && w.shouldFocus && V && V.focus && V.focus();
  }, re = (p, b) => jt(p) ? h.values.subscribe({
    next: (w) => p(ae(void 0, b), w)
  }) : ae(p, b, !0), ie = (p, b = {}) => {
    for (const w of p ? Kr(p) : l.mount)
      l.mount.delete(w), l.array.delete(w), b.keepValue || (Ze(s, w), Ze(a, w)), !b.keepError && Ze(n.errors, w), !b.keepDirty && Ze(n.dirtyFields, w), !b.keepTouched && Ze(n.touchedFields, w), !r.shouldUnregister && !b.keepDefaultValue && Ze(o, w);
    h.values.next({
      values: { ...a }
    }), h.state.next({
      ...n,
      ...b.keepDirty ? { isDirty: W() } : {}
    }), !b.keepIsValid && E();
  }, me = ({ disabled: p, name: b, field: w, fields: V, value: $ }) => {
    if (et(p)) {
      const R = p ? void 0 : Me($) ? rs(w ? w._f : I(V, b)._f) : $;
      Oe(a, b, R), oe(b, R, !1, !1, !0);
    }
  }, le = (p, b = {}) => {
    let w = I(s, p);
    const V = et(b.disabled);
    return Oe(s, p, {
      ...w || {},
      _f: {
        ...w && w._f ? w._f : { ref: { name: p } },
        name: p,
        mount: !0,
        ...b
      }
    }), l.mount.add(p), w ? me({
      field: w,
      disabled: b.disabled,
      name: p,
      value: b.value
    }) : te(p, !0, b.value), {
      ...V ? { disabled: b.disabled } : {},
      ...r.progressive ? {
        required: !!b.required,
        min: Or(b.min),
        max: Or(b.max),
        minLength: Or(b.minLength),
        maxLength: Or(b.maxLength),
        pattern: Or(b.pattern)
      } : {},
      name: p,
      onChange: T,
      onBlur: T,
      ref: ($) => {
        if ($) {
          le(p, b), w = I(s, p);
          const R = Me($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $, Z = Uu(R), _e = w._f.refs || [];
          if (Z ? _e.find((Fe) => Fe === R) : R === w._f.ref)
            return;
          Oe(s, p, {
            _f: {
              ...w._f,
              ...Z ? {
                refs: [
                  ..._e.filter(es),
                  R,
                  ...Array.isArray(I(o, p)) ? [{}] : []
                ],
                ref: { type: R.type, name: p }
              } : { ref: R }
            }
          }), te(p, !1, void 0, R);
        } else
          w = I(s, p, {}), w._f && (w._f.mount = !1), (r.shouldUnregister || b.shouldUnregister) && !(Ka(l.array, p) && i.action) && l.unMount.add(p);
      }
    };
  }, We = () => r.shouldFocusError && Cr(s, j, l.mount), M = (p) => {
    et(p) && (h.state.next({ disabled: p }), Cr(s, (b, w) => {
      let V = p;
      const $ = I(s, w);
      $ && et($._f.disabled) && (V || (V = $._f.disabled)), b.disabled = V;
    }, 0, !1));
  }, qe = (p, b) => async (w) => {
    w && (w.preventDefault && w.preventDefault(), w.persist && w.persist());
    let V = nt(a);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: $, values: R } = await G();
      n.errors = $, V = R;
    } else
      await P(s);
    Ze(n.errors, "root"), Qe(n.errors) ? (h.state.next({
      errors: {}
    }), await p(V, w)) : (b && await b({ ...n.errors }, w), We(), setTimeout(We)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Qe(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, Ct = (p, b = {}) => {
    I(s, p) && (Me(b.defaultValue) ? Ie(p, I(o, p)) : (Ie(p, b.defaultValue), Oe(o, p, b.defaultValue)), b.keepTouched || Ze(n.touchedFields, p), b.keepDirty || (Ze(n.dirtyFields, p), n.isDirty = b.defaultValue ? W(p, I(o, p)) : W()), b.keepError || (Ze(n.errors, p), d.isValid && E()), h.state.next({ ...n }));
  }, ot = (p, b = {}) => {
    const w = p ? nt(p) : o, V = nt(w), $ = p && !Qe(p) ? V : o;
    if (b.keepDefaultValues || (o = w), !b.keepValues) {
      if (b.keepDirtyValues || g)
        for (const R of l.mount)
          I(n.dirtyFields, R) ? Oe($, R, I(a, R)) : Ie(R, I($, R));
      else {
        if (Js && Me(p))
          for (const R of l.mount) {
            const Z = I(s, R);
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
      register: le,
      unregister: ie,
      getFieldState: K,
      handleSubmit: qe,
      setError: Q,
      _executeSchema: G,
      _getWatch: ae,
      _getDirty: W,
      _updateValid: E,
      _removeUnmounted: N,
      _updateFieldArray: A,
      _updateDisabledField: me,
      _getFieldArray: de,
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
      _disableForm: M,
      _subjects: h,
      _proxyFormState: d,
      _setErrors: z,
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
    register: le,
    handleSubmit: qe,
    watch: re,
    setValue: Ie,
    getValues: H,
    reset: Lt,
    resetField: Ct,
    clearErrors: pe,
    unregister: ie,
    setError: Q,
    setFocus: (p, b = {}) => {
      const w = I(s, p), V = w && w._f;
      if (V) {
        const $ = V.refs ? V.refs[0] : V.ref;
        $.focus && ($.focus(), b.shouldSelect && $.select());
      }
    },
    getFieldState: K
  };
}
function Yu(e = {}) {
  const t = ee.useRef(), r = ee.useRef(), [n, s] = ee.useState({
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
    ...Hu(e, () => s((a) => ({ ...a }))),
    formState: n
  });
  const o = t.current.control;
  return o._options = e, Gs({
    subject: o._subjects.state,
    next: (a) => {
      ti(a, o._proxyFormState, o._updateFormState, !0) && s({ ...o._formState });
    }
  }), ee.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), ee.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== n.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, n.isDirty]), ee.useEffect(() => {
    e.values && !Wt(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, s((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), ee.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), ee.useEffect(() => {
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
}, Ju = function(e, t) {
  t.shouldUseNativeValidation && fi(e, t);
  var r = {};
  for (var n in e) {
    var s = I(t.fields, n), o = Object.assign(e[n] || {}, { ref: s && s.ref });
    if (Xu(t.names || Object.keys(e), n)) {
      var a = Object.assign({}, Gu(I(r, n)));
      Oe(a, "root", o), Oe(r, n, a);
    } else
      Oe(r, n, o);
  }
  return r;
}, Gu = function(e) {
  return Array.isArray(e) ? e.filter(Boolean) : [];
}, Xu = function(e, t) {
  return e.some(function(r) {
    return r.startsWith(t + ".");
  });
}, Ku = function(e, t) {
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
}, Qu = function(e, t, r) {
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
          return { values: {}, errors: Ju(Ku(a.errors, !o.shouldUseNativeValidation && o.criteriaMode === "all"), o) };
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
function ed() {
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
function td() {
  return Xo || (Xo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function C(M) {
      return typeof M == "string" || typeof M == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      M === n || M === c || M === o || M === s || M === d || M === h || typeof M == "object" && M !== null && (M.$$typeof === m || M.$$typeof === g || M.$$typeof === a || M.$$typeof === i || M.$$typeof === u || M.$$typeof === x || M.$$typeof === D || M.$$typeof === E || M.$$typeof === v);
    }
    function A(M) {
      if (typeof M == "object" && M !== null) {
        var qe = M.$$typeof;
        switch (qe) {
          case t:
            var Ct = M.type;
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
    var _ = l, z = c, te = i, oe = a, B = t, G = u, be = n, P = m, N = g, W = r, ae = o, de = s, fe = d, ze = !1;
    function Ie(M) {
      return ze || (ze = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(M) || A(M) === l;
    }
    function T(M) {
      return A(M) === c;
    }
    function j(M) {
      return A(M) === i;
    }
    function Y(M) {
      return A(M) === a;
    }
    function H(M) {
      return typeof M == "object" && M !== null && M.$$typeof === t;
    }
    function K(M) {
      return A(M) === u;
    }
    function pe(M) {
      return A(M) === n;
    }
    function Q(M) {
      return A(M) === m;
    }
    function re(M) {
      return A(M) === g;
    }
    function ie(M) {
      return A(M) === r;
    }
    function me(M) {
      return A(M) === o;
    }
    function le(M) {
      return A(M) === s;
    }
    function We(M) {
      return A(M) === d;
    }
    Ee.AsyncMode = _, Ee.ConcurrentMode = z, Ee.ContextConsumer = te, Ee.ContextProvider = oe, Ee.Element = B, Ee.ForwardRef = G, Ee.Fragment = be, Ee.Lazy = P, Ee.Memo = N, Ee.Portal = W, Ee.Profiler = ae, Ee.StrictMode = de, Ee.Suspense = fe, Ee.isAsyncMode = Ie, Ee.isConcurrentMode = T, Ee.isContextConsumer = j, Ee.isContextProvider = Y, Ee.isElement = H, Ee.isForwardRef = K, Ee.isFragment = pe, Ee.isLazy = Q, Ee.isMemo = re, Ee.isPortal = ie, Ee.isProfiler = me, Ee.isStrictMode = le, Ee.isSuspense = We, Ee.isValidElementType = C, Ee.typeOf = A;
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
function rd() {
  if (Ko)
    return Te;
  Ko = 1;
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, m = e ? Symbol.for("react.lazy") : 60116, v = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, D = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
  function C(_) {
    if (typeof _ == "object" && _ !== null) {
      var z = _.$$typeof;
      switch (z) {
        case t:
          switch (_ = _.type, _) {
            case l:
            case c:
            case n:
            case o:
            case s:
            case d:
              return _;
            default:
              switch (_ = _ && _.$$typeof, _) {
                case i:
                case u:
                case m:
                case g:
                case a:
                  return _;
                default:
                  return z;
              }
          }
        case r:
          return z;
      }
    }
  }
  function A(_) {
    return C(_) === c;
  }
  return Te.AsyncMode = l, Te.ConcurrentMode = c, Te.ContextConsumer = i, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = u, Te.Fragment = n, Te.Lazy = m, Te.Memo = g, Te.Portal = r, Te.Profiler = o, Te.StrictMode = s, Te.Suspense = d, Te.isAsyncMode = function(_) {
    return A(_) || C(_) === l;
  }, Te.isConcurrentMode = A, Te.isContextConsumer = function(_) {
    return C(_) === i;
  }, Te.isContextProvider = function(_) {
    return C(_) === a;
  }, Te.isElement = function(_) {
    return typeof _ == "object" && _ !== null && _.$$typeof === t;
  }, Te.isForwardRef = function(_) {
    return C(_) === u;
  }, Te.isFragment = function(_) {
    return C(_) === n;
  }, Te.isLazy = function(_) {
    return C(_) === m;
  }, Te.isMemo = function(_) {
    return C(_) === g;
  }, Te.isPortal = function(_) {
    return C(_) === r;
  }, Te.isProfiler = function(_) {
    return C(_) === o;
  }, Te.isStrictMode = function(_) {
    return C(_) === s;
  }, Te.isSuspense = function(_) {
    return C(_) === d;
  }, Te.isValidElementType = function(_) {
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === c || _ === o || _ === s || _ === d || _ === h || typeof _ == "object" && _ !== null && (_.$$typeof === m || _.$$typeof === g || _.$$typeof === a || _.$$typeof === i || _.$$typeof === u || _.$$typeof === x || _.$$typeof === D || _.$$typeof === E || _.$$typeof === v);
  }, Te.typeOf = C, Te;
}
var Qo;
function hi() {
  return Qo || (Qo = 1, process.env.NODE_ENV === "production" ? qr.exports = rd() : qr.exports = td()), qr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var os, ea;
function nd() {
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
function sd() {
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
function od() {
  if (na)
    return ls;
  na = 1;
  var e = hi(), t = nd(), r = eo(), n = pi(), s = sd(), o = function() {
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
    function d(T) {
      var j = T && (c && T[c] || T[u]);
      if (typeof j == "function")
        return j;
    }
    var h = "<<anonymous>>", g = {
      array: D("array"),
      bigint: D("bigint"),
      bool: D("boolean"),
      func: D("function"),
      number: D("number"),
      object: D("object"),
      string: D("string"),
      symbol: D("symbol"),
      any: E(),
      arrayOf: C,
      element: A(),
      elementType: _(),
      instanceOf: z,
      node: G(),
      objectOf: oe,
      oneOf: te,
      oneOfType: B,
      shape: P,
      exact: N
    };
    function m(T, j) {
      return T === j ? T !== 0 || 1 / T === 1 / j : T !== T && j !== j;
    }
    function v(T, j) {
      this.message = T, this.data = j && typeof j == "object" ? j : {}, this.stack = "";
    }
    v.prototype = Error.prototype;
    function x(T) {
      if (process.env.NODE_ENV !== "production")
        var j = {}, Y = 0;
      function H(pe, Q, re, ie, me, le, We) {
        if (ie = ie || h, le = le || re, We !== r) {
          if (l) {
            var M = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw M.name = "Invariant Violation", M;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var qe = ie + ":" + re;
            !j[qe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + le + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), j[qe] = !0, Y++);
          }
        }
        return Q[re] == null ? pe ? Q[re] === null ? new v("The " + me + " `" + le + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new v("The " + me + " `" + le + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : T(Q, re, ie, me, le);
      }
      var K = H.bind(null, !1);
      return K.isRequired = H.bind(null, !0), K;
    }
    function D(T) {
      function j(Y, H, K, pe, Q, re) {
        var ie = Y[H], me = de(ie);
        if (me !== T) {
          var le = fe(ie);
          return new v(
            "Invalid " + pe + " `" + Q + "` of type " + ("`" + le + "` supplied to `" + K + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return x(j);
    }
    function E() {
      return x(a);
    }
    function C(T) {
      function j(Y, H, K, pe, Q) {
        if (typeof T != "function")
          return new v("Property `" + Q + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var re = Y[H];
        if (!Array.isArray(re)) {
          var ie = de(re);
          return new v("Invalid " + pe + " `" + Q + "` of type " + ("`" + ie + "` supplied to `" + K + "`, expected an array."));
        }
        for (var me = 0; me < re.length; me++) {
          var le = T(re, me, K, pe, Q + "[" + me + "]", r);
          if (le instanceof Error)
            return le;
        }
        return null;
      }
      return x(j);
    }
    function A() {
      function T(j, Y, H, K, pe) {
        var Q = j[Y];
        if (!i(Q)) {
          var re = de(Q);
          return new v("Invalid " + K + " `" + pe + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(T);
    }
    function _() {
      function T(j, Y, H, K, pe) {
        var Q = j[Y];
        if (!e.isValidElementType(Q)) {
          var re = de(Q);
          return new v("Invalid " + K + " `" + pe + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(T);
    }
    function z(T) {
      function j(Y, H, K, pe, Q) {
        if (!(Y[H] instanceof T)) {
          var re = T.name || h, ie = Ie(Y[H]);
          return new v("Invalid " + pe + " `" + Q + "` of type " + ("`" + ie + "` supplied to `" + K + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return x(j);
    }
    function te(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function j(Y, H, K, pe, Q) {
        for (var re = Y[H], ie = 0; ie < T.length; ie++)
          if (m(re, T[ie]))
            return null;
        var me = JSON.stringify(T, function(We, M) {
          var qe = fe(M);
          return qe === "symbol" ? String(M) : M;
        });
        return new v("Invalid " + pe + " `" + Q + "` of value `" + String(re) + "` " + ("supplied to `" + K + "`, expected one of " + me + "."));
      }
      return x(j);
    }
    function oe(T) {
      function j(Y, H, K, pe, Q) {
        if (typeof T != "function")
          return new v("Property `" + Q + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var re = Y[H], ie = de(re);
        if (ie !== "object")
          return new v("Invalid " + pe + " `" + Q + "` of type " + ("`" + ie + "` supplied to `" + K + "`, expected an object."));
        for (var me in re)
          if (n(re, me)) {
            var le = T(re, me, K, pe, Q + "." + me, r);
            if (le instanceof Error)
              return le;
          }
        return null;
      }
      return x(j);
    }
    function B(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var j = 0; j < T.length; j++) {
        var Y = T[j];
        if (typeof Y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ze(Y) + " at index " + j + "."
          ), a;
      }
      function H(K, pe, Q, re, ie) {
        for (var me = [], le = 0; le < T.length; le++) {
          var We = T[le], M = We(K, pe, Q, re, ie, r);
          if (M == null)
            return null;
          M.data && n(M.data, "expectedType") && me.push(M.data.expectedType);
        }
        var qe = me.length > 0 ? ", expected one of type [" + me.join(", ") + "]" : "";
        return new v("Invalid " + re + " `" + ie + "` supplied to " + ("`" + Q + "`" + qe + "."));
      }
      return x(H);
    }
    function G() {
      function T(j, Y, H, K, pe) {
        return W(j[Y]) ? null : new v("Invalid " + K + " `" + pe + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return x(T);
    }
    function be(T, j, Y, H, K) {
      return new v(
        (T || "React class") + ": " + j + " type `" + Y + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function P(T) {
      function j(Y, H, K, pe, Q) {
        var re = Y[H], ie = de(re);
        if (ie !== "object")
          return new v("Invalid " + pe + " `" + Q + "` of type `" + ie + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var me in T) {
          var le = T[me];
          if (typeof le != "function")
            return be(K, pe, Q, me, fe(le));
          var We = le(re, me, K, pe, Q + "." + me, r);
          if (We)
            return We;
        }
        return null;
      }
      return x(j);
    }
    function N(T) {
      function j(Y, H, K, pe, Q) {
        var re = Y[H], ie = de(re);
        if (ie !== "object")
          return new v("Invalid " + pe + " `" + Q + "` of type `" + ie + "` " + ("supplied to `" + K + "`, expected `object`."));
        var me = t({}, Y[H], T);
        for (var le in me) {
          var We = T[le];
          if (n(T, le) && typeof We != "function")
            return be(K, pe, Q, le, fe(We));
          if (!We)
            return new v(
              "Invalid " + pe + " `" + Q + "` key `" + le + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(Y[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var M = We(re, le, K, pe, Q + "." + le, r);
          if (M)
            return M;
        }
        return null;
      }
      return x(j);
    }
    function W(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(W);
          if (T === null || i(T))
            return !0;
          var j = d(T);
          if (j) {
            var Y = j.call(T), H;
            if (j !== T.entries) {
              for (; !(H = Y.next()).done; )
                if (!W(H.value))
                  return !1;
            } else
              for (; !(H = Y.next()).done; ) {
                var K = H.value;
                if (K && !W(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(T, j) {
      return T === "symbol" ? !0 : j ? j["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && j instanceof Symbol : !1;
    }
    function de(T) {
      var j = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : ae(j, T) ? "symbol" : j;
    }
    function fe(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var j = de(T);
      if (j === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return j;
    }
    function ze(T) {
      var j = fe(T);
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
    function Ie(T) {
      return !T.constructor || !T.constructor.name ? h : T.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, ls;
}
if (process.env.NODE_ENV !== "production") {
  var ad = hi(), id = !0;
  Es.exports = od()(ad.isElement, id);
} else
  Es.exports = ed()();
var ld = Es.exports;
const Ft = /* @__PURE__ */ ga(ld);
var cd = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
}, ud = Object.defineProperty, dd = Object.defineProperties, fd = Object.getOwnPropertyDescriptors, cn = Object.getOwnPropertySymbols, mi = Object.prototype.hasOwnProperty, vi = Object.prototype.propertyIsEnumerable, sa = (e, t, r) => t in e ? ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, oa = (e, t) => {
  for (var r in t || (t = {}))
    mi.call(t, r) && sa(e, r, t[r]);
  if (cn)
    for (var r of cn(t))
      vi.call(t, r) && sa(e, r, t[r]);
  return e;
}, hd = (e, t) => dd(e, fd(t)), pd = (e, t) => {
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
      var a = s, { color: i = "currentColor", size: l = 24, stroke: c = 2, children: u } = a, d = pd(a, ["color", "size", "stroke", "children"]);
      return ue(
        "svg",
        oa(hd(oa({
          ref: o
        }, cd), {
          width: l,
          height: l,
          stroke: i,
          strokeWidth: c,
          className: `tabler-icon tabler-icon-${e}`
        }), d),
        [...r.map(([h, g]) => ue(h, g)), ...u || []]
      );
    }
  );
  return n.propTypes = {
    color: Ft.string,
    size: Ft.oneOfType([Ft.string, Ft.number]),
    stroke: Ft.oneOfType([Ft.string, Ft.number])
  }, n.displayName = `${t}`, n;
}, md = Mt("chalkboard", "IconChalkboard", [
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
]), vd = Mt("menu-deep", "IconMenuDeep", [
  ["path", { d: "M4 6h16", key: "svg-0" }],
  ["path", { d: "M7 12h13", key: "svg-1" }],
  ["path", { d: "M10 18h10", key: "svg-2" }]
]), yd = Mt("phone-call", "IconPhoneCall", [
  [
    "path",
    {
      d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M15 7a2 2 0 0 1 2 2", key: "svg-1" }],
  ["path", { d: "M15 3a6 6 0 0 1 6 6", key: "svg-2" }]
]), gd = Mt("square-check", "IconSquareCheck", [
  [
    "path",
    {
      d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]
]), bd = Mt("square-x", "IconSquareX", [
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
const F = Se.arrayToEnum([
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
}, k = Se.arrayToEnum([
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
    case k.invalid_type:
      e.received === F.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case k.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, Se.jsonStringifyReplacer)}`;
      break;
    case k.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Se.joinValues(e.keys, ", ")}`;
      break;
    case k.invalid_union:
      r = "Invalid input";
      break;
    case k.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Se.joinValues(e.options)}`;
      break;
    case k.invalid_enum_value:
      r = `Invalid enum value. Expected ${Se.joinValues(e.options)}, received '${e.received}'`;
      break;
    case k.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case k.invalid_return_type:
      r = "Invalid function return type";
      break;
    case k.invalid_date:
      r = "Invalid date";
      break;
    case k.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : Se.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case k.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case k.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case k.custom:
      r = "Invalid input";
      break;
    case k.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case k.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case k.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, Se.assertNever(e);
  }
  return { message: r };
};
let xd = un;
function Ts() {
  return xd;
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
function U(e, t) {
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
}), _d = (e) => ({ status: "dirty", value: e }), Ge = (e) => ({ status: "valid", value: e }), la = (e) => e.status === "aborted", ca = (e) => e.status === "dirty", dn = (e) => e.status === "valid", Cs = (e) => typeof Promise < "u" && e instanceof Promise;
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
class he {
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
        code: k.custom,
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
      typeName: J.ZodEffects,
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
    return ur.create(this, this._def);
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
      typeName: J.ZodEffects,
      effect: { type: "transform", transform: t }
    });
  }
  default(t) {
    const r = typeof t == "function" ? t : () => t;
    return new xn({
      ...ne(this._def),
      innerType: this,
      defaultValue: r,
      typeName: J.ZodDefault
    });
  }
  brand() {
    return new jd({
      typeName: J.ZodBranded,
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
      typeName: J.ZodCatch
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
const wd = /^c[^\s-]{8,}$/i, Sd = /^[a-z][a-z0-9]*$/, Ed = /^[0-9A-HJKMNP-TV-Z]{26}$/, Td = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i, Od = /^(?!\.)(?!.*\.\.)([A-Z0-9_+-\.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9\-]*\.)+[A-Z]{2,}$/i, Cd = "^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$";
let ds;
const Rd = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Ad = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, kd = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function Nd(e, t) {
  return !!((t === "v4" || !t) && Rd.test(e) || (t === "v6" || !t) && Ad.test(e));
}
class gt extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== F.string) {
      const o = this._getOrReturnCtx(t);
      return U(
        o,
        {
          code: k.invalid_type,
          expected: F.string,
          received: o.parsedType
        }
        //
      ), se;
    }
    const n = new Je();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (s = this._getOrReturnCtx(t, s), U(s, {
          code: k.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (s = this._getOrReturnCtx(t, s), U(s, {
          code: k.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, i = t.data.length < o.value;
        (a || i) && (s = this._getOrReturnCtx(t, s), a ? U(s, {
          code: k.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : i && U(s, {
          code: k.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), n.dirty());
      } else if (o.kind === "email")
        Od.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "email",
          code: k.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "emoji")
        ds || (ds = new RegExp(Cd, "u")), ds.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "emoji",
          code: k.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "uuid")
        Td.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "uuid",
          code: k.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid")
        wd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "cuid",
          code: k.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid2")
        Sd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "cuid2",
          code: k.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "ulid")
        Ed.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "ulid",
          code: k.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), U(s, {
            validation: "url",
            code: k.invalid_string,
            message: o.message
          }), n.dirty();
        }
      else
        o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "regex",
          code: k.invalid_string,
          message: o.message
        }), n.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: k.invalid_string,
          validation: { includes: o.value, position: o.position },
          message: o.message
        }), n.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: k.invalid_string,
          validation: { startsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: k.invalid_string,
          validation: { endsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "datetime" ? kd(o).test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: k.invalid_string,
          validation: "datetime",
          message: o.message
        }), n.dirty()) : o.kind === "ip" ? Nd(t.data, o.version) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "ip",
          code: k.invalid_string,
          message: o.message
        }), n.dirty()) : Se.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: k.invalid_string,
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
    typeName: J.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
function Pd(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, o = parseInt(e.toFixed(s).replace(".", "")), a = parseInt(t.toFixed(s).replace(".", ""));
  return o % a / Math.pow(10, s);
}
class ir extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== F.number) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: k.invalid_type,
        expected: F.number,
        received: o.parsedType
      }), se;
    }
    let n;
    const s = new Je();
    for (const o of this._def.checks)
      o.kind === "int" ? Se.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), s.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? Pd(t.data, o.value) !== 0 && (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.not_finite,
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
    return new ir({
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
    return new ir({
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
ir.create = (e) => new ir({
  checks: [],
  typeName: J.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class lr extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== F.bigint) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: k.invalid_type,
        expected: F.bigint,
        received: o.parsedType
      }), se;
    }
    let n;
    const s = new Je();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: k.not_multiple_of,
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
lr.create = (e) => {
  var t;
  return new lr({
    checks: [],
    typeName: J.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
class Rs extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: k.invalid_type,
        expected: F.boolean,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
Rs.create = (e) => new Rs({
  typeName: J.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class Pr extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== F.date) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: k.invalid_type,
        expected: F.date,
        received: o.parsedType
      }), se;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: k.invalid_date
      }), se;
    }
    const n = new Je();
    let s;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (s = this._getOrReturnCtx(t, s), U(s, {
        code: k.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), n.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (s = this._getOrReturnCtx(t, s), U(s, {
        code: k.too_big,
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
  typeName: J.ZodDate,
  ...ne(e)
});
class As extends he {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: k.invalid_type,
        expected: F.symbol,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
As.create = (e) => new As({
  typeName: J.ZodSymbol,
  ...ne(e)
});
class fn extends he {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: k.invalid_type,
        expected: F.undefined,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
fn.create = (e) => new fn({
  typeName: J.ZodUndefined,
  ...ne(e)
});
class hn extends he {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: k.invalid_type,
        expected: F.null,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
hn.create = (e) => new hn({
  typeName: J.ZodNull,
  ...ne(e)
});
class ks extends he {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Ge(t.data);
  }
}
ks.create = (e) => new ks({
  typeName: J.ZodAny,
  ...ne(e)
});
class Qt extends he {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Ge(t.data);
  }
}
Qt.create = (e) => new Qt({
  typeName: J.ZodUnknown,
  ...ne(e)
});
class Dt extends he {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return U(r, {
      code: k.invalid_type,
      expected: F.never,
      received: r.parsedType
    }), se;
  }
}
Dt.create = (e) => new Dt({
  typeName: J.ZodNever,
  ...ne(e)
});
class Ns extends he {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: k.invalid_type,
        expected: F.void,
        received: n.parsedType
      }), se;
    }
    return Ge(t.data);
  }
}
Ns.create = (e) => new Ns({
  typeName: J.ZodVoid,
  ...ne(e)
});
class ut extends he {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== F.array)
      return U(r, {
        code: k.invalid_type,
        expected: F.array,
        received: r.parsedType
      }), se;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (a || i) && (U(r, {
        code: a ? k.too_big : k.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (U(r, {
      code: k.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (U(r, {
      code: k.too_big,
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
  typeName: J.ZodArray,
  ...ne(t)
});
function Gt(e) {
  if (e instanceof De) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = It.create(Gt(n));
    }
    return new De({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof ut ? new ut({
      ...e._def,
      type: Gt(e.element)
    }) : e instanceof It ? It.create(Gt(e.unwrap())) : e instanceof ur ? ur.create(Gt(e.unwrap())) : e instanceof St ? St.create(e.items.map((t) => Gt(t))) : e;
}
class De extends he {
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
    if (this._getType(t) !== F.object) {
      const c = this._getOrReturnCtx(t);
      return U(c, {
        code: k.invalid_type,
        expected: F.object,
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
        i.length > 0 && (U(s, {
          code: k.unrecognized_keys,
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
      typeName: J.ZodObject
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
    return Gt(this);
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
  typeName: J.ZodObject,
  ...ne(t)
});
De.strictCreate = (e, t) => new De({
  shape: () => e,
  unknownKeys: "strict",
  catchall: Dt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
De.lazycreate = (e, t) => new De({
  shape: e,
  unknownKeys: "strip",
  catchall: Dt.create(),
  typeName: J.ZodObject,
  ...ne(t)
});
class pn extends he {
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
      return U(r, {
        code: k.invalid_union,
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
      return U(r, {
        code: k.invalid_union,
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
  typeName: J.ZodUnion,
  ...ne(t)
});
const en = (e) => e instanceof yn ? en(e.schema) : e instanceof Et ? en(e.innerType()) : e instanceof gn ? [e.value] : e instanceof Zt ? e.options : e instanceof bn ? Object.keys(e.enum) : e instanceof xn ? en(e._def.innerType) : e instanceof fn ? [void 0] : e instanceof hn ? [null] : null;
class to extends he {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.object)
      return U(r, {
        code: k.invalid_type,
        expected: F.object,
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
    }) : (U(r, {
      code: k.invalid_union_discriminator,
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
      typeName: J.ZodDiscriminatedUnion,
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
  if (r === F.object && n === F.object) {
    const s = Se.objectKeys(t), o = Se.objectKeys(e).filter((i) => s.indexOf(i) !== -1), a = { ...e, ...t };
    for (const i of o) {
      const l = Ps(e[i], t[i]);
      if (!l.valid)
        return { valid: !1 };
      a[i] = l.data;
    }
    return { valid: !0, data: a };
  } else if (r === F.array && n === F.array) {
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
    return r === F.date && n === F.date && +e == +t ? { valid: !0, data: e } : { valid: !1 };
}
class mn extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = (o, a) => {
      if (la(o) || la(a))
        return se;
      const i = Ps(o.value, a.value);
      return i.valid ? ((ca(o) || ca(a)) && r.dirty(), { status: r.value, value: i.data }) : (U(n, {
        code: k.invalid_intersection_types
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
  typeName: J.ZodIntersection,
  ...ne(r)
});
class St extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.array)
      return U(n, {
        code: k.invalid_type,
        expected: F.array,
        received: n.parsedType
      }), se;
    if (n.data.length < this._def.items.length)
      return U(n, {
        code: k.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), se;
    !this._def.rest && n.data.length > this._def.items.length && (U(n, {
      code: k.too_big,
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
    typeName: J.ZodTuple,
    rest: null,
    ...ne(t)
  });
};
class vn extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.object)
      return U(n, {
        code: k.invalid_type,
        expected: F.object,
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
    return r instanceof he ? new vn({
      keyType: t,
      valueType: r,
      typeName: J.ZodRecord,
      ...ne(n)
    }) : new vn({
      keyType: gt.create(),
      valueType: t,
      typeName: J.ZodRecord,
      ...ne(r)
    });
  }
}
class js extends he {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.map)
      return U(n, {
        code: k.invalid_type,
        expected: F.map,
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
  typeName: J.ZodMap,
  ...ne(r)
});
class cr extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.set)
      return U(n, {
        code: k.invalid_type,
        expected: F.set,
        received: n.parsedType
      }), se;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (U(n, {
      code: k.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (U(n, {
      code: k.too_big,
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
    return new cr({
      ...this._def,
      minSize: { value: t, message: q.toString(r) }
    });
  }
  max(t, r) {
    return new cr({
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
cr.create = (e, t) => new cr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: J.ZodSet,
  ...ne(t)
});
class Rr extends he {
  constructor() {
    super(...arguments), this.validate = this.implement;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.function)
      return U(r, {
        code: k.invalid_type,
        expected: F.function,
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
          code: k.invalid_arguments,
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
          code: k.invalid_return_type,
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
      args: St.create(t).rest(Qt.create())
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
      args: t || St.create([]).rest(Qt.create()),
      returns: r || Qt.create(),
      typeName: J.ZodFunction,
      ...ne(n)
    });
  }
}
class yn extends he {
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
  typeName: J.ZodLazy,
  ...ne(t)
});
class gn extends he {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return U(r, {
        received: r.data,
        code: k.invalid_literal,
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
  typeName: J.ZodLiteral,
  ...ne(t)
});
function yi(e, t) {
  return new Zt({
    values: e,
    typeName: J.ZodEnum,
    ...ne(t)
  });
}
class Zt extends he {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return U(r, {
        expected: Se.joinValues(n),
        received: r.parsedType,
        code: k.invalid_type
      }), se;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return U(r, {
        received: r.data,
        code: k.invalid_enum_value,
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
class bn extends he {
  _parse(t) {
    const r = Se.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== F.string && n.parsedType !== F.number) {
      const s = Se.objectValues(r);
      return U(n, {
        expected: Se.joinValues(s),
        received: n.parsedType,
        code: k.invalid_type
      }), se;
    }
    if (r.indexOf(t.data) === -1) {
      const s = Se.objectValues(r);
      return U(n, {
        received: n.data,
        code: k.invalid_enum_value,
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
  typeName: J.ZodNativeEnum,
  ...ne(t)
});
class jr extends he {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.promise && r.common.async === !1)
      return U(r, {
        code: k.invalid_type,
        expected: F.promise,
        received: r.parsedType
      }), se;
    const n = r.parsedType === F.promise ? r.data : Promise.resolve(r.data);
    return Ge(n.then((s) => this._def.type.parseAsync(s, {
      path: r.path,
      errorMap: r.common.contextualErrorMap
    })));
  }
}
jr.create = (e, t) => new jr({
  type: e,
  typeName: J.ZodPromise,
  ...ne(t)
});
class Et extends he {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === J.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t), s = this._def.effect || null, o = {
      addIssue: (a) => {
        U(n, a), a.fatal ? r.abort() : r.dirty();
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
  typeName: J.ZodEffects,
  effect: t,
  ...ne(r)
});
Et.createWithPreprocess = (e, t, r) => new Et({
  schema: t,
  effect: { type: "preprocess", transform: e },
  typeName: J.ZodEffects,
  ...ne(r)
});
class It extends he {
  _parse(t) {
    return this._getType(t) === F.undefined ? Ge(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
It.create = (e, t) => new It({
  innerType: e,
  typeName: J.ZodOptional,
  ...ne(t)
});
class ur extends he {
  _parse(t) {
    return this._getType(t) === F.null ? Ge(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
ur.create = (e, t) => new ur({
  innerType: e,
  typeName: J.ZodNullable,
  ...ne(t)
});
class xn extends he {
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
xn.create = (e, t) => new xn({
  innerType: e,
  typeName: J.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ne(t)
});
class $s extends he {
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
  typeName: J.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ne(t)
});
class Is extends he {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: k.invalid_type,
        expected: F.nan,
        received: n.parsedType
      }), se;
    }
    return { status: "valid", value: t.data };
  }
}
Is.create = (e) => new Is({
  typeName: J.ZodNaN,
  ...ne(e)
});
class jd extends he {
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
class kn extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.common.async)
      return (async () => {
        const o = await this._def.in._parseAsync({
          data: n.data,
          path: n.path,
          parent: n
        });
        return o.status === "aborted" ? se : o.status === "dirty" ? (r.dirty(), _d(o.value)) : this._def.out._parseAsync({
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
      typeName: J.ZodPipeline
    });
  }
}
class Ds extends he {
  _parse(t) {
    const r = this._def.innerType._parse(t);
    return dn(r) && (r.value = Object.freeze(r.value)), r;
  }
}
Ds.create = (e, t) => new Ds({
  innerType: e,
  typeName: J.ZodReadonly,
  ...ne(t)
});
De.lazycreate;
var J;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(J || (J = {}));
const $d = gt.create;
ir.create;
Is.create;
lr.create;
Rs.create;
Pr.create;
As.create;
fn.create;
hn.create;
ks.create;
Qt.create;
Dt.create;
Ns.create;
ut.create;
const Id = De.create;
De.strictCreate;
pn.create;
to.create;
mn.create;
St.create;
vn.create;
js.create;
cr.create;
Rr.create;
yn.create;
gn.create;
Zt.create;
bn.create;
jr.create;
Et.create;
It.create;
ur.create;
Et.createWithPreprocess;
kn.create;
function ke() {
  return ke = Object.assign ? Object.assign.bind() : function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var r = arguments[t];
      for (var n in r)
        Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n]);
    }
    return e;
  }, ke.apply(this, arguments);
}
function Dd(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function gi(...e) {
  return (t) => e.forEach(
    (r) => Dd(r, t)
  );
}
function qt(...e) {
  return Ut(gi(...e), e);
}
const Nn = /* @__PURE__ */ $e((e, t) => {
  const { children: r, ...n } = e, s = Kt.toArray(r), o = s.find(Ld);
  if (o) {
    const a = o.props.children, i = s.map((l) => l === o ? Kt.count(a) > 1 ? Kt.only(null) : /* @__PURE__ */ kr(a) ? a.props.children : null : l);
    return /* @__PURE__ */ ue(Ms, ke({}, n, {
      ref: t
    }), /* @__PURE__ */ kr(a) ? /* @__PURE__ */ Sn(a, void 0, i) : null);
  }
  return /* @__PURE__ */ ue(Ms, ke({}, n, {
    ref: t
  }), r);
});
Nn.displayName = "Slot";
const Ms = /* @__PURE__ */ $e((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ kr(r) ? /* @__PURE__ */ Sn(r, {
    ...Fd(n, r.props),
    ref: t ? gi(t, r.ref) : r.ref
  }) : Kt.count(r) > 1 ? Kt.only(null) : null;
});
Ms.displayName = "SlotClone";
const Md = ({ children: e }) => /* @__PURE__ */ ue(xt, null, e);
function Ld(e) {
  return /* @__PURE__ */ kr(e) && e.type === Md;
}
function Fd(e, t) {
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
}, Vd = ro(
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
        className: Ne(Vd({ variant: t, size: r, className: e })),
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
const vr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx("div", { ref: r, className: Ne("p-6 pt-0", e), ...t }));
vr.displayName = "CardContent";
const Ud = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  "div",
  {
    ref: r,
    className: Ne("flex items-center p-6 pt-0", e),
    ...t
  }
));
Ud.displayName = "CardFooter";
const zd = () => /* @__PURE__ */ y.jsxs(wt, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
  /* @__PURE__ */ y.jsx(no, { className: "p-4", children: /* @__PURE__ */ y.jsx(so, { children: "ขอเลื่อนตารางเรียนหน่อยจารรร" }) }),
  /* @__PURE__ */ y.jsxs(vr, { className: "flex flex-col gap-4 p-4", children: [
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
      n = "border-green-400", s = "bg-green-100/50", o = /* @__PURE__ */ y.jsx(gd, { size: 28, className: "text-green-400" });
      break;
    case "NOTI:DANGER":
      n = "border-red-400", s = "bg-red-100/50", o = /* @__PURE__ */ y.jsx(bd, { size: 28, className: "text-red-400" });
      break;
  }
  return /* @__PURE__ */ y.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ y.jsxs(wt, { className: Ne("rounded-2xl flex items-center flex-row pl-4 border-2", n, s), children: [
    /* @__PURE__ */ y.jsx("div", { children: o }),
    /* @__PURE__ */ y.jsx(vr, { className: "flex flex-row gap-4 p-4", children: /* @__PURE__ */ y.jsx("div", { children: t }) })
  ] }) });
}, Bd = ro(
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
function xi({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ y.jsx("div", { className: Ne(Bd({ variant: t }), e), ...r });
}
const Zd = ({ socketStatus: e }) => /* @__PURE__ */ y.jsx(xi, { variant: "outline", children: e ? /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
  /* @__PURE__ */ y.jsx("div", { className: "p-[3px] bg-green-400 rounded-full mr-1" }),
  " Connected"
] }) : /* @__PURE__ */ y.jsxs(y.Fragment, { children: [
  /* @__PURE__ */ y.jsx("div", { className: "p-[3px] bg-red-400 rounded-full mr-1" }),
  " Disconnected"
] }) });
function _i(e, t = []) {
  let r = [];
  function n(o, a) {
    const i = /* @__PURE__ */ sr(a), l = r.length;
    r = [
      ...r,
      a
    ];
    function c(d) {
      const { scope: h, children: g, ...m } = d, v = (h == null ? void 0 : h[e][l]) || i, x = or(
        () => m,
        Object.values(m)
      );
      return /* @__PURE__ */ ue(v.Provider, {
        value: x
      }, g);
    }
    function u(d, h) {
      const g = (h == null ? void 0 : h[e][l]) || i, m = fr(g);
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
    const o = r.map((a) => /* @__PURE__ */ sr(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || o;
      return or(
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
    qd(s, ...t)
  ];
}
function qd(...e) {
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
      return or(
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
  return Re(() => {
    t.current = e;
  }), or(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
const $r = globalThis != null && globalThis.document ? va : () => {
}, Hd = [
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
], Tt = Hd.reduce((e, t) => {
  const r = /* @__PURE__ */ $e((n, s) => {
    const { asChild: o, ...a } = n, i = o ? Nn : t;
    return Re(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ ue(i, ke({}, a, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {}), wi = "Avatar", [Yd, dh] = _i(wi), [Jd, Si] = Yd(wi), Gd = /* @__PURE__ */ $e((e, t) => {
  const { __scopeAvatar: r, ...n } = e, [s, o] = xe("idle");
  return /* @__PURE__ */ ue(Jd, {
    scope: r,
    imageLoadingStatus: s,
    onImageLoadingStatusChange: o
  }, /* @__PURE__ */ ue(Tt.span, ke({}, n, {
    ref: t
  })));
}), Xd = "AvatarImage", Kd = /* @__PURE__ */ $e((e, t) => {
  const { __scopeAvatar: r, src: n, onLoadingStatusChange: s = () => {
  }, ...o } = e, a = Si(Xd, r), i = tf(n), l = Pt((c) => {
    s(c), a.onImageLoadingStatusChange(c);
  });
  return $r(() => {
    i !== "idle" && l(i);
  }, [
    i,
    l
  ]), i === "loaded" ? /* @__PURE__ */ ue(Tt.img, ke({}, o, {
    ref: t,
    src: n
  })) : null;
}), Qd = "AvatarFallback", ef = /* @__PURE__ */ $e((e, t) => {
  const { __scopeAvatar: r, delayMs: n, ...s } = e, o = Si(Qd, r), [a, i] = xe(n === void 0);
  return Re(() => {
    if (n !== void 0) {
      const l = window.setTimeout(
        () => i(!0),
        n
      );
      return () => window.clearTimeout(l);
    }
  }, [
    n
  ]), a && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ ue(Tt.span, ke({}, s, {
    ref: t
  })) : null;
});
function tf(e) {
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
const Ei = Gd, Ti = Kd, Oi = ef, er = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
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
er.displayName = Ei.displayName;
const tr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Ti,
  {
    ref: r,
    className: Ne("aspect-square h-full w-full", e),
    ...t
  }
));
tr.displayName = Ti.displayName;
const rr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
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
rr.displayName = Oi.displayName;
const rf = /* @__PURE__ */ $e((e, t) => /* @__PURE__ */ ue(Tt.label, ke({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), Ci = rf, nf = ro(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), Ri = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ y.jsx(
  Ci,
  {
    ref: r,
    className: Ne(nf(), e),
    ...t
  }
));
Ri.displayName = Ci.displayName;
const sf = ju, Ai = Ce.createContext(
  {}
), of = ({
  ...e
}) => /* @__PURE__ */ y.jsx(Ai.Provider, { value: { name: e.name }, children: /* @__PURE__ */ y.jsx(Mu, { ...e }) }), Pn = () => {
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
const af = Ce.forwardRef(({ className: e, ...t }, r) => {
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
af.displayName = "FormLabel";
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
const lf = Ce.forwardRef(({ className: e, ...t }, r) => {
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
lf.displayName = "FormDescription";
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
function cf(e, t) {
  return ya((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const Vr = (e) => {
  const { present: t, children: r } = e, n = uf(t), s = typeof r == "function" ? r({
    present: n.isPresent
  }) : Kt.only(r), o = qt(n.ref, s.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ Sn(s, {
    ref: o
  }) : null;
};
Vr.displayName = "Presence";
function uf(e) {
  const [t, r] = xe(), n = je({}), s = je(e), o = je("none"), a = e ? "mounted" : "unmounted", [i, l] = cf(a, {
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
  return Re(() => {
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
        d.target === t && g && pl(
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
const df = /* @__PURE__ */ sr(void 0);
function ff(e) {
  const t = fr(df);
  return e || t || "ltr";
}
function hf(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function Bt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
  return function(s) {
    if (e == null || e(s), r === !1 || !s.defaultPrevented)
      return t == null ? void 0 : t(s);
  };
}
function pf(e, t) {
  return ya((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const Ii = "ScrollArea", [Di, fh] = _i(Ii), [mf, rt] = Di(Ii), vf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, type: n = "hover", dir: s, scrollHideDelay: o = 600, ...a } = e, [i, l] = xe(null), [c, u] = xe(null), [d, h] = xe(null), [g, m] = xe(null), [v, x] = xe(null), [D, E] = xe(0), [C, A] = xe(0), [_, z] = xe(!1), [te, oe] = xe(!1), B = qt(
    t,
    (be) => l(be)
  ), G = ff(s);
  return /* @__PURE__ */ ue(mf, {
    scope: r,
    type: n,
    dir: G,
    scrollHideDelay: o,
    scrollArea: i,
    viewport: c,
    onViewportChange: u,
    content: d,
    onContentChange: h,
    scrollbarX: g,
    onScrollbarXChange: m,
    scrollbarXEnabled: _,
    onScrollbarXEnabledChange: z,
    scrollbarY: v,
    onScrollbarYChange: x,
    scrollbarYEnabled: te,
    onScrollbarYEnabledChange: oe,
    onCornerWidthChange: E,
    onCornerHeightChange: A
  }, /* @__PURE__ */ ue(Tt.div, ke({
    dir: G
  }, a, {
    ref: B,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": D + "px",
      "--radix-scroll-area-corner-height": C + "px",
      ...e.style
    }
  })));
}), yf = "ScrollAreaViewport", gf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, children: n, ...s } = e, o = rt(yf, r), a = je(null), i = qt(t, a, o.onViewportChange);
  return /* @__PURE__ */ ue(xt, null, /* @__PURE__ */ ue("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ ue(Tt.div, ke({
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
  }), /* @__PURE__ */ ue("div", {
    ref: o.onContentChange,
    style: {
      minWidth: "100%",
      display: "table"
    }
  }, n)));
}), Ot = "ScrollAreaScrollbar", Mi = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ot, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: a } = s, i = e.orientation === "horizontal";
  return Re(() => (i ? o(!0) : a(!0), () => {
    i ? o(!1) : a(!1);
  }), [
    i,
    o,
    a
  ]), s.type === "hover" ? /* @__PURE__ */ ue(bf, ke({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "scroll" ? /* @__PURE__ */ ue(xf, ke({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "auto" ? /* @__PURE__ */ ue(Li, ke({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "always" ? /* @__PURE__ */ ue(oo, ke({}, n, {
    ref: t
  })) : null;
}), bf = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ot, e.__scopeScrollArea), [o, a] = xe(!1);
  return Re(() => {
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
  ]), /* @__PURE__ */ ue(Vr, {
    present: r || o
  }, /* @__PURE__ */ ue(Li, ke({
    "data-state": o ? "visible" : "hidden"
  }, n, {
    ref: t
  })));
}), xf = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ot, e.__scopeScrollArea), o = e.orientation === "horizontal", a = $n(
    () => l("SCROLL_END"),
    100
  ), [i, l] = pf("hidden", {
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
  return Re(() => {
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
  ]), Re(() => {
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
  ]), /* @__PURE__ */ ue(Vr, {
    present: r || i !== "hidden"
  }, /* @__PURE__ */ ue(oo, ke({
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
  return dr(r.viewport, l), dr(r.content, l), /* @__PURE__ */ ue(Vr, {
    present: n || o
  }, /* @__PURE__ */ ue(oo, ke({
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
    return Rf(h, a.current, i, g);
  }
  return r === "horizontal" ? /* @__PURE__ */ ue(_f, ke({}, u, {
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
  })) : r === "vertical" ? /* @__PURE__ */ ue(wf, ke({}, u, {
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
}), _f = /* @__PURE__ */ $e((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = rt(Ot, e.__scopeScrollArea), [a, i] = xe(), l = je(null), c = qt(t, l, o.onScrollbarXChange);
  return Re(() => {
    l.current && i(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ ue(Vi, ke({
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
}), wf = /* @__PURE__ */ $e((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = rt(Ot, e.__scopeScrollArea), [a, i] = xe(), l = je(null), c = qt(t, l, o.onScrollbarYChange);
  return Re(() => {
    l.current && i(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ ue(Vi, ke({
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
}), [Sf, Fi] = Di(Ot), Vi = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, sizes: n, hasThumb: s, onThumbChange: o, onThumbPointerUp: a, onThumbPointerDown: i, onThumbPositionChange: l, onDragScroll: c, onWheelScroll: u, onResize: d, ...h } = e, g = rt(Ot, r), [m, v] = xe(null), x = qt(
    t,
    (B) => v(B)
  ), D = je(null), E = je(""), C = g.viewport, A = n.content - n.viewport, _ = Pt(u), z = Pt(l), te = $n(d, 10);
  function oe(B) {
    if (D.current) {
      const G = B.clientX - D.current.left, be = B.clientY - D.current.top;
      c({
        x: G,
        y: be
      });
    }
  }
  return Re(() => {
    const B = (G) => {
      const be = G.target;
      (m == null ? void 0 : m.contains(be)) && _(G, A);
    };
    return document.addEventListener("wheel", B, {
      passive: !1
    }), () => document.removeEventListener("wheel", B, {
      passive: !1
    });
  }, [
    C,
    m,
    A,
    _
  ]), Re(z, [
    n,
    z
  ]), dr(m, te), dr(g.content, te), /* @__PURE__ */ ue(Sf, {
    scope: r,
    scrollbar: m,
    hasThumb: s,
    onThumbChange: Pt(o),
    onThumbPointerUp: Pt(a),
    onThumbPositionChange: z,
    onThumbPointerDown: Pt(i)
  }, /* @__PURE__ */ ue(Tt.div, ke({}, h, {
    ref: x,
    style: {
      position: "absolute",
      ...h.style
    },
    onPointerDown: Bt(e.onPointerDown, (B) => {
      B.button === 0 && (B.target.setPointerCapture(B.pointerId), D.current = m.getBoundingClientRect(), E.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), oe(B));
    }),
    onPointerMove: Bt(e.onPointerMove, oe),
    onPointerUp: Bt(e.onPointerUp, (B) => {
      const G = B.target;
      G.hasPointerCapture(B.pointerId) && G.releasePointerCapture(B.pointerId), document.body.style.webkitUserSelect = E.current, g.viewport && (g.viewport.style.scrollBehavior = ""), D.current = null;
    })
  })));
}), Ls = "ScrollAreaThumb", Ef = /* @__PURE__ */ $e((e, t) => {
  const { forceMount: r, ...n } = e, s = Fi(Ls, e.__scopeScrollArea);
  return /* @__PURE__ */ ue(Vr, {
    present: r || s.hasThumb
  }, /* @__PURE__ */ ue(Tf, ke({
    ref: t
  }, n)));
}), Tf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, style: n, ...s } = e, o = rt(Ls, r), a = Fi(Ls, r), { onThumbPositionChange: i } = a, l = qt(
    t,
    (d) => a.onThumbChange(d)
  ), c = je(), u = $n(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return Re(() => {
    const d = o.viewport;
    if (d) {
      const h = () => {
        if (u(), !c.current) {
          const g = Af(d, i);
          c.current = g, i();
        }
      };
      return i(), d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
    }
  }, [
    o.viewport,
    u,
    i
  ]), /* @__PURE__ */ ue(Tt.div, ke({
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
}), Ui = "ScrollAreaCorner", Of = /* @__PURE__ */ $e((e, t) => {
  const r = rt(Ui, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? /* @__PURE__ */ ue(Cf, ke({}, e, {
    ref: t
  })) : null;
}), Cf = /* @__PURE__ */ $e((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, s = rt(Ui, r), [o, a] = xe(0), [i, l] = xe(0), c = !!(o && i);
  return dr(s.scrollbarX, () => {
    var u;
    const d = ((u = s.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    s.onCornerHeightChange(d), l(d);
  }), dr(s.scrollbarY, () => {
    var u;
    const d = ((u = s.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    s.onCornerWidthChange(d), a(d);
  }), c ? /* @__PURE__ */ ue(Tt.div, ke({}, n, {
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
function Rf(e, t, r, n = "ltr") {
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
  ], c = hf(e, l);
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
const Af = (e, t = () => {
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
  return Re(
    () => () => window.clearTimeout(n.current),
    []
  ), Ut(() => {
    window.clearTimeout(n.current), n.current = window.setTimeout(r, t);
  }, [
    r,
    t
  ]);
}
function dr(e, t) {
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
const Zi = vf, kf = gf, Nf = Of, qi = Ce.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ y.jsxs(
  Zi,
  {
    ref: n,
    className: Ne("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ y.jsx(kf, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ y.jsx(Hi, {}),
      /* @__PURE__ */ y.jsx(Nf, {})
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
    children: /* @__PURE__ */ y.jsx(Ef, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Hi.displayName = Mi.displayName;
const Pf = Id({
  message: $d().min(2).max(50)
}), jf = ({
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
  var B, G, be, P;
  const [u, d] = xe(), [h, g] = xe(), { rooms: m, profile: v, sendMessage: x, sending: D, fetchChatMessage: E, fetchUserProfile: C } = Hs(), A = je(null), _ = Yu({
    resolver: Qu(Pf),
    defaultValues: {
      message: ""
    }
  }), z = m[r] || [];
  Re(() => {
    if (r) {
      const N = (/* @__PURE__ */ new Date()).toISOString();
      E(t, e, r, N, "2023-12-20T09:32:13.000Z"), C(t, e, r);
    }
  }, [E, C, r, t, e]), Re(() => {
    if (v.length > 1) {
      const N = v[0].teacher_id;
      n === N ? (d(v[0]), g(v[1])) : (d(v[1]), g(v[0]));
    }
  }, [v, n]), Re(() => {
    var N;
    (N = A.current) == null || N.scrollIntoView({ behavior: "smooth" });
  }, [z]);
  const te = (N) => {
    const W = v[0].teacher_id;
    if (n === W) {
      const ae = {
        room_id: r,
        content: N.message,
        sender_id: W,
        sender_type: "TCA",
        type: "MSG"
      };
      x(t, e, ae, r);
    }
    if (n !== W) {
      const ae = {
        room_id: r,
        content: N.message,
        sender_id: n,
        sender_type: "STD",
        type: "MSG"
      };
      x(t, e, ae, r);
    }
    _.reset();
  }, oe = (N) => (h == null ? void 0 : h.teacher_id) === N || (h == null ? void 0 : h.student_id) === N ? h : u;
  return /* @__PURE__ */ y.jsxs(wt, { className: "flex flex-col relative rounded-none h-[90vh] w-full z-10", children: [
    /* @__PURE__ */ y.jsxs(no, { className: "flex items-center border-b-[1px]", children: [
      /* @__PURE__ */ y.jsxs(so, { className: "max-w-[70%] text-center", children: [
        s.room_name,
        " (",
        s.room_id,
        ")"
      ] }),
      /* @__PURE__ */ y.jsxs(bi, { children: [
        (B = v[0]) == null ? void 0 : B.firstname,
        " ",
        (G = v[0]) == null ? void 0 : G.lastname
      ] }),
      /* @__PURE__ */ y.jsx(Zd, { socketStatus: o })
    ] }),
    /* @__PURE__ */ y.jsx(md, { className: "absolute cursor-pointer top-[20px] left-[20px]", onClick: () => i(!a) }),
    /* @__PURE__ */ y.jsx(vd, { className: "absolute cursor-pointer top-[20px] right-[20px]", onClick: () => c(!l) }),
    /* @__PURE__ */ y.jsxs(qi, { className: "px-3 h-full", children: [
      z.map((N) => {
        var W, ae, de, fe;
        return /* @__PURE__ */ y.jsxs("div", { className: Ne("flex gap-2 my-2", N.sender_id === n ? "flex-row justify-end" : "flex-row-reverse justify-end"), children: [
          N.type === "COMP" && /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row items-end gap-2", children: [
            /* @__PURE__ */ y.jsxs(er, { children: [
              /* @__PURE__ */ y.jsx(tr, { src: (W = oe(N.sender_id)) == null ? void 0 : W.photo_url }),
              /* @__PURE__ */ y.jsx(rr, { children: (ae = oe(N.sender_id)) == null ? void 0 : ae.firstname })
            ] }),
            /* @__PURE__ */ y.jsx(zd, { ...N })
          ] }),
          N.type === "MSG" && /* @__PURE__ */ y.jsxs("div", { className: Ne("flex items-end gap-2", N.sender_id === n ? "flex-row-reverse" : "flex-row"), children: [
            /* @__PURE__ */ y.jsxs(er, { children: [
              /* @__PURE__ */ y.jsx(tr, { src: (de = oe(N.sender_id)) == null ? void 0 : de.photo_url }),
              /* @__PURE__ */ y.jsx(rr, { children: (fe = oe(N.sender_id)) == null ? void 0 : fe.firstname })
            ] }),
            /* @__PURE__ */ y.jsx(
              "div",
              {
                className: Ne("flex flex-col  text-black p-2 px-4 rounded-t-full", N.sender_id === n ? "rounded-l-full bg-blue-100" : "rounded-r-full bg-gray-100"),
                children: /* @__PURE__ */ y.jsx("p", { children: N.content })
              }
            )
          ] }),
          N.type === "NOTI" && /* @__PURE__ */ y.jsx(Wd, { ...N })
        ] }, N.id);
      }),
      D && /* @__PURE__ */ y.jsxs("div", { className: Ne("flex items-end gap-2 flex-row-reverse"), children: [
        /* @__PURE__ */ y.jsxs(er, { children: [
          /* @__PURE__ */ y.jsx(tr, { src: (be = oe(n)) == null ? void 0 : be.photo_url }),
          /* @__PURE__ */ y.jsx(rr, { children: (P = oe(n)) == null ? void 0 : P.firstname })
        ] }),
        /* @__PURE__ */ y.jsx("div", { className: Ne("flex flex-col  text-black p-2 px-4 rounded-t-full rounded-l-full bg-blue-100"), children: /* @__PURE__ */ y.jsx("p", { children: "กำลังส่ง..." }) })
      ] }),
      /* @__PURE__ */ y.jsx("div", { ref: A })
    ] }),
    /* @__PURE__ */ y.jsx(sf, { ..._, children: /* @__PURE__ */ y.jsx("form", { onSubmit: _.handleSubmit(te), className: "space-y-8 w-full p-3", children: /* @__PURE__ */ y.jsx(
      of,
      {
        control: _.control,
        name: "message",
        render: ({ field: N }) => /* @__PURE__ */ y.jsxs(Ni, { children: [
          /* @__PURE__ */ y.jsx(Pi, { children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-1", children: [
            /* @__PURE__ */ y.jsx($i, { disabled: !o, placeholder: "Aa", ...N }),
            /* @__PURE__ */ y.jsx(Ar, { disabled: !o, type: "submit", variant: "outline", children: "Send" })
          ] }) }),
          /* @__PURE__ */ y.jsx(ji, { className: "text-red-400" })
        ] })
      }
    ) }) })
  ] }, r);
}, $f = ({ order: { course_id: e, course_name: t } }) => /* @__PURE__ */ y.jsxs(wt, { className: "relative rounded-none w-full", children: [
  /* @__PURE__ */ y.jsxs(vr, { className: "p-3", children: [
    /* @__PURE__ */ y.jsx("p", { className: "text-lg font-bold", children: e }),
    /* @__PURE__ */ y.jsx("div", { children: t })
  ] }),
  /* @__PURE__ */ y.jsx(xi, { variant: "secondary", className: "absolute top-3 right-3 ", children: "ดูรายละเอียด" })
] }), If = ({ orderStatus: e }) => {
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
  return /* @__PURE__ */ y.jsx(wt, { className: "rounded-none w-full", children: /* @__PURE__ */ y.jsxs(vr, { className: "p-3", children: [
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
}, Df = ({ teacher: e }) => /* @__PURE__ */ y.jsx(wt, { className: "rounded-none w-full", children: /* @__PURE__ */ y.jsxs(vr, { className: "p-3", children: [
  /* @__PURE__ */ y.jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row gap-3", children: [
      /* @__PURE__ */ y.jsxs(er, { className: "border-orange-400 border-2", children: [
        /* @__PURE__ */ y.jsx(tr, { src: e.photo_url, alt: e.firstname }),
        /* @__PURE__ */ y.jsxs(rr, { children: [
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
      /* @__PURE__ */ y.jsx(yd, {}),
      " ",
      /* @__PURE__ */ y.jsx("div", { children: e.phone })
    ] })
  ] }),
  /* @__PURE__ */ y.jsx("div", {})
] }) });
var Mf = Object.defineProperty, Lf = (e, t, r) => t in e ? Mf(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, fs = (e, t, r) => (Lf(e, typeof t != "symbol" ? t + "" : t, r), r);
let Ff = class {
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
}, tn = new Ff(), Ir = (e, t) => {
  tn.isServer ? Re(e, t) : va(e, t);
};
function nr(e) {
  let t = je(e);
  return Ir(() => {
    t.current = e;
  }, [e]), t;
}
function Vf(e) {
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
    return Vf(() => {
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
function Yi() {
  let [e] = xe(Ur);
  return Re(() => () => e.dispose(), [e]), e;
}
let bt = function(e) {
  let t = nr(e);
  return ee.useCallback((...r) => t.current(...r), [t]);
};
function Uf() {
  let e = typeof document > "u";
  return "useSyncExternalStore" in Ce ? ((t) => t.useSyncExternalStore)(Ce)(() => () => {
  }, () => !1, () => !e) : !1;
}
function Ji() {
  let e = Uf(), [t, r] = Ce.useState(tn.isHandoffComplete);
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
let zf = Symbol();
function Gi(...e) {
  let t = je(e);
  Re(() => {
    t.current = e;
  }, [e]);
  let r = bt((n) => {
    for (let s of t.current)
      s != null && (typeof s == "function" ? s(n) : s.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[zf])) ? void 0 : r;
}
function wn(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var Xi = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Xi || {}), $t = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))($t || {});
function Ki({ ourProps: e, theirProps: t, slot: r, defaultTag: n, features: s, visible: o = !0, name: a }) {
  let i = Qi(t, e);
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
    return Sn(c, Object.assign({}, Qi(c.props, pa(hs(i, ["ref"]))), u, l, Wf(c.ref, l.ref), g));
  }
  return ue(s, Object.assign({}, hs(i, ["ref"]), s !== xt && l, s !== xt && u), c);
}
function Wf(...e) {
  return { ref: e.every((t) => t == null) ? void 0 : (t) => {
    for (let r of e)
      r != null && (typeof r == "function" ? r(t) : r.current = t);
  } };
}
function Qi(...e) {
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
let io = sr(null);
io.displayName = "OpenClosedContext";
var yt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(yt || {});
function el() {
  return fr(io);
}
function Bf({ value: e, children: t }) {
  return ee.createElement(io.Provider, { value: e }, t);
}
function lo() {
  let e = je(!1);
  return Ir(() => (e.current = !0, () => {
    e.current = !1;
  }), []), e;
}
function Zf(e = 0) {
  let [t, r] = xe(e), n = lo(), s = Ut((l) => {
    n.current && r((c) => c | l);
  }, [t, n]), o = Ut((l) => !!(t & l), [t]), a = Ut((l) => {
    n.current && r((c) => c & ~l);
  }, [r, n]), i = Ut((l) => {
    n.current && r((c) => c ^ l);
  }, [r]);
  return { flags: t, addFlag: s, hasFlag: o, removeFlag: a, toggleFlag: i };
}
function qf(e) {
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
function Hf(e, t) {
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
function Yf(e, t, r, n) {
  let s = r ? "enter" : "leave", o = Ur(), a = n !== void 0 ? qf(n) : () => {
  };
  s === "enter" && (e.removeAttribute("hidden"), e.style.display = "");
  let i = lt(s, { enter: () => t.enter, leave: () => t.leave }), l = lt(s, { enter: () => t.enterTo, leave: () => t.leaveTo }), c = lt(s, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return ms(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), ps(e, ...t.base, ...i, ...c), o.nextFrame(() => {
    ms(e, ...t.base, ...i, ...c), ps(e, ...t.base, ...i, ...l), Hf(e, () => (ms(e, ...t.base, ...i), ps(e, ...t.base, ...t.entered), a()));
  }), o.dispose;
}
function Jf({ immediate: e, container: t, direction: r, classes: n, onStart: s, onStop: o }) {
  let a = lo(), i = Yi(), l = nr(r);
  Ir(() => {
    e && (l.current = "enter");
  }, [e]), Ir(() => {
    let c = Ur();
    i.add(c.dispose);
    let u = t.current;
    if (u && l.current !== "idle" && a.current)
      return c.dispose(), s.current(l.current), c.add(Yf(u, n.current, l.current === "enter", () => {
        c.dispose(), o.current(l.current);
      })), c.dispose;
  }, [r]);
}
function Nt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let In = sr(null);
In.displayName = "TransitionContext";
var Gf = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Gf || {});
function Xf() {
  let e = fr(In);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Kf() {
  let e = fr(Dn);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Dn = sr(null);
Dn.displayName = "NestingContext";
function Mn(e) {
  return "children" in e ? Mn(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function tl(e, t) {
  let r = nr(e), n = je([]), s = lo(), o = Yi(), a = bt((g, m = $t.Hidden) => {
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
      Promise.all(u.current[m].map(([D, E]) => E)).then(() => x());
    })]), m === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => v(m)) : v(m);
  }), h = bt((g, m, v) => {
    Promise.all(u.current[m].splice(0).map(([x, D]) => D)).then(() => {
      var x;
      (x = l.current.shift()) == null || x();
    }).then(() => v(m));
  });
  return or(() => ({ children: n, register: i, unregister: a, onStart: d, onStop: h, wait: c, chains: u }), [i, a, n, d, h, u, c]);
}
function Qf() {
}
let eh = ["beforeEnter", "afterEnter", "beforeLeave", "afterLeave"];
function ma(e) {
  var t;
  let r = {};
  for (let n of eh)
    r[n] = (t = e[n]) != null ? t : Qf;
  return r;
}
function th(e) {
  let t = je(ma(e));
  return Re(() => {
    t.current = ma(e);
  }, [e]), t;
}
let rh = "div", rl = Xi.RenderStrategy;
function nh(e, t) {
  var r, n;
  let { beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i, enter: l, enterFrom: c, enterTo: u, entered: d, leave: h, leaveFrom: g, leaveTo: m, ...v } = e, x = je(null), D = Gi(x, t), E = (r = v.unmount) == null || r ? $t.Unmount : $t.Hidden, { show: C, appear: A, initial: _ } = Xf(), [z, te] = xe(C ? "visible" : "hidden"), oe = Kf(), { register: B, unregister: G } = oe;
  Re(() => B(x), [B, x]), Re(() => {
    if (E === $t.Hidden && x.current) {
      if (C && z !== "visible") {
        te("visible");
        return;
      }
      return lt(z, { hidden: () => G(x), visible: () => B(x) });
    }
  }, [z, x, B, G, C, E]);
  let be = nr({ base: Nt(v.className), enter: Nt(l), enterFrom: Nt(c), enterTo: Nt(u), entered: Nt(d), leave: Nt(h), leaveFrom: Nt(g), leaveTo: Nt(m) }), P = th({ beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i }), N = Ji();
  Re(() => {
    if (N && z === "visible" && x.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [x, z, N]);
  let W = _ && !A, ae = A && C && _, de = !N || W ? "idle" : C ? "enter" : "leave", fe = Zf(0), ze = bt((H) => lt(H, { enter: () => {
    fe.addFlag(yt.Opening), P.current.beforeEnter();
  }, leave: () => {
    fe.addFlag(yt.Closing), P.current.beforeLeave();
  }, idle: () => {
  } })), Ie = bt((H) => lt(H, { enter: () => {
    fe.removeFlag(yt.Opening), P.current.afterEnter();
  }, leave: () => {
    fe.removeFlag(yt.Closing), P.current.afterLeave();
  }, idle: () => {
  } })), T = tl(() => {
    te("hidden"), G(x);
  }, oe);
  Jf({ immediate: ae, container: x, classes: be, direction: de, onStart: nr((H) => {
    T.onStart(x, H, ze);
  }), onStop: nr((H) => {
    T.onStop(x, H, Ie), H === "leave" && !Mn(T) && (te("hidden"), G(x));
  }) });
  let j = v, Y = { ref: D };
  return ae ? j = { ...j, className: wn(v.className, ...be.current.enter, ...be.current.enterFrom) } : (j.className = wn(v.className, (n = x.current) == null ? void 0 : n.className), j.className === "" && delete j.className), ee.createElement(Dn.Provider, { value: T }, ee.createElement(Bf, { value: lt(z, { visible: yt.Open, hidden: yt.Closed }) | fe.flags }, Ki({ ourProps: Y, theirProps: j, defaultTag: rh, features: rl, visible: z === "visible", name: "Transition.Child" })));
}
function sh(e, t) {
  let { show: r, appear: n = !1, unmount: s = !0, ...o } = e, a = je(null), i = Gi(a, t);
  Ji();
  let l = el();
  if (r === void 0 && l !== null && (r = (l & yt.Open) === yt.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, u] = xe(r ? "visible" : "hidden"), d = tl(() => {
    u("hidden");
  }), [h, g] = xe(!0), m = je([r]);
  Ir(() => {
    h !== !1 && m.current[m.current.length - 1] !== r && (m.current.push(r), g(!1));
  }, [m, r]);
  let v = or(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  Re(() => {
    if (r)
      u("visible");
    else if (!Mn(d))
      u("hidden");
    else {
      let C = a.current;
      if (!C)
        return;
      let A = C.getBoundingClientRect();
      A.x === 0 && A.y === 0 && A.width === 0 && A.height === 0 && u("hidden");
    }
  }, [r, d]);
  let x = { unmount: s }, D = bt(() => {
    var C;
    h && g(!1), (C = e.beforeEnter) == null || C.call(e);
  }), E = bt(() => {
    var C;
    h && g(!1), (C = e.beforeLeave) == null || C.call(e);
  });
  return ee.createElement(Dn.Provider, { value: d }, ee.createElement(In.Provider, { value: v }, Ki({ ourProps: { ...x, as: xt, children: ee.createElement(nl, { ref: i, ...x, ...o, beforeEnter: D, beforeLeave: E }) }, theirProps: {}, defaultTag: xt, features: rl, visible: c === "visible", name: "Transition" })));
}
function oh(e, t) {
  let r = fr(In) !== null, n = el() !== null;
  return ee.createElement(ee.Fragment, null, !r && n ? ee.createElement(Fs, { ref: t, ...e }) : ee.createElement(nl, { ref: t, ...e }));
}
let Fs = ao(sh), nl = ao(nh), ah = ao(oh), sl = Object.assign(Fs, { Child: ah, Root: Fs });
const ih = ({ dataBaseApiUrl: e, authToken: t, roomId: r, sideMenuOpen: n, setSideMenuOpen: s }) => {
  const [o, a] = xe(null);
  return Re(() => {
    r && Lc(e, t, r).then((i) => {
      a(i);
    });
  }, [r, e, t]), o && /* @__PURE__ */ y.jsx(
    sl,
    {
      show: n,
      as: xt,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 -translate-x-10",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 -translate-x-10",
      children: /* @__PURE__ */ y.jsx("div", { className: "", onClick: () => s(!1), children: /* @__PURE__ */ y.jsxs("div", { className: "min-w-[300px] h-[90vh]", onClick: (i) => i.stopPropagation(), children: [
        /* @__PURE__ */ y.jsx($f, { order: o.order }),
        /* @__PURE__ */ y.jsx(If, { orderStatus: o.order.order_status }),
        /* @__PURE__ */ y.jsx(Df, { teacher: o.teacher })
      ] }) })
    }
  );
}, lh = ({ roomMenuOpen: e, chatRoom: t, selectedTab: r, setSelectedTab: n, userProfiles: s }) => /* @__PURE__ */ y.jsx(
  sl,
  {
    show: e,
    as: xt,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-x-10",
    enterTo: "opacity-100 translate-x-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-x-0",
    leaveTo: "opacity-0 translate-x-10",
    children: /* @__PURE__ */ y.jsx("div", { className: "flex flex-col border-y border-l h-[90vh]", children: t && t.map((o, a) => {
      var i, l, c, u;
      return /* @__PURE__ */ y.jsxs(
        "button",
        {
          className: Ne("min-w-[300px] px-4 py-2  flex flex-row gap-4 border-l-4 ", r === a ? "border-l-4 border-orange-400 bg-gray-100/50" : "border-white"),
          onClick: () => n(a),
          children: [
            /* @__PURE__ */ y.jsxs(er, { children: [
              /* @__PURE__ */ y.jsx(tr, { src: (i = s[a]) == null ? void 0 : i.photo_url }),
              /* @__PURE__ */ y.jsx(rr, { children: (l = s[a]) == null ? void 0 : l.firstname })
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
), ph = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n }) => {
  const [s, o] = xe(0), [a, i] = xe([]), { connectWebSocket: l, socketStatus: c, disconnectWebSocket: u } = Hs(), { fetchChatRoom: d, chatRoom: h } = Kc(), g = window.innerWidth <= 768, [m, v] = xe(!g), [x, D] = xe(!g);
  return Re(() => {
    const E = async () => {
      const A = (await Promise.all(h.map((_) => Va(t, r, _.room_id)))).flat().filter((_) => _.teacher_id);
      i(A);
    };
    h && h.length > 0 && E();
  }, [h, t, r]), Re(() => {
    l(t, e, r), d(t, r);
    function E() {
      document.visibilityState === "hidden" ? u() : (l(t, e, r), d(t, r));
    }
    return document.addEventListener("visibilitychange", E), () => {
      document.removeEventListener("visibilitychange", E);
    };
  }, [l, d, e, t, r, u]), /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row w-full", children: [
    /* @__PURE__ */ y.jsx(
      lh,
      {
        roomMenuOpen: m,
        setRoomMenuOpen: v,
        selectedTab: s,
        setSelectedTab: o,
        userProfiles: a,
        chatRoom: h
      }
    ),
    h && h.map((E, C) => /* @__PURE__ */ y.jsx("div", { className: `w-full  ${s === C ? "block" : "hidden"}`, children: /* @__PURE__ */ y.jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ y.jsx(
        jf,
        {
          dataBaseApiUrl: t,
          authToken: r,
          currentRoom: E,
          roomId: E.room_id,
          userId: n,
          socketStatus: c,
          setRoomMenuOpen: v,
          roomMenuOpen: m,
          sideMenuOpen: x,
          setSideMenuOpen: D
        }
      ),
      /* @__PURE__ */ y.jsx(ih, { dataBaseApiUrl: t, authToken: r, roomId: E.room_id, sideMenuOpen: x, setSideMenuOpen: D })
    ] }) }, E.id))
  ] });
};
export {
  ph as ChatApp
};
