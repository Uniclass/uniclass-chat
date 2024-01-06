import * as Ce from "react";
import ee, { forwardRef as Ie, createElement as ue, useCallback as Ut, Children as tr, isValidElement as kr, cloneElement as Sn, Fragment as _t, createContext as ar, useMemo as ir, useContext as pr, useRef as Pe, useEffect as Re, useLayoutEffect as va, useState as xe, useReducer as ya } from "react";
import { flushSync as ml } from "react-dom";
function ga(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var ys = { exports: {} }, _r = {};
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
    var e = ee, t = Symbol.for("react.element"), r = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), s = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), a = Symbol.for("react.provider"), i = Symbol.for("react.context"), l = Symbol.for("react.forward_ref"), c = Symbol.for("react.suspense"), u = Symbol.for("react.suspense_list"), d = Symbol.for("react.memo"), h = Symbol.for("react.lazy"), g = Symbol.for("react.offscreen"), v = Symbol.iterator, y = "@@iterator";
    function x(f) {
      if (f === null || typeof f != "object")
        return null;
      var O = v && f[v] || f[y];
      return typeof O == "function" ? O : null;
    }
    var M = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(f) {
      {
        for (var O = arguments.length, L = new Array(O > 1 ? O - 1 : 0), X = 1; X < O; X++)
          L[X - 1] = arguments[X];
        C("error", f, L);
      }
    }
    function C(f, O, L) {
      {
        var X = M.ReactDebugCurrentFrame, we = X.getStackAddendum();
        we !== "" && (O += "%s", L = L.concat([we]));
        var ke = L.map(function(ye) {
          return String(ye);
        });
        ke.unshift("Warning: " + O), Function.prototype.apply.call(console[f], console, ke);
      }
    }
    var k = !1, _ = !1, z = !1, te = !1, oe = !1, W;
    W = Symbol.for("react.module.reference");
    function J(f) {
      return !!(typeof f == "string" || typeof f == "function" || f === n || f === o || oe || f === s || f === c || f === u || te || f === g || k || _ || z || typeof f == "object" && f !== null && (f.$$typeof === h || f.$$typeof === d || f.$$typeof === a || f.$$typeof === i || f.$$typeof === l || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      f.$$typeof === W || f.getModuleId !== void 0));
    }
    function be(f, O, L) {
      var X = f.displayName;
      if (X)
        return X;
      var we = O.displayName || O.name || "";
      return we !== "" ? L + "(" + we + ")" : L;
    }
    function j(f) {
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
            return j(O) + ".Consumer";
          case a:
            var L = f;
            return j(L._context) + ".Provider";
          case l:
            return be(f, f.render, "ForwardRef");
          case d:
            var X = f.displayName || null;
            return X !== null ? X : N(f.type) || "Memo";
          case h: {
            var we = f, ke = we._payload, ye = we._init;
            try {
              return N(ye(ke));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var B = Object.assign, ae = 0, de, fe, ze, Me, T, P, Y;
    function H() {
    }
    H.__reactDisabledLog = !0;
    function K() {
      {
        if (ae === 0) {
          de = console.log, fe = console.info, ze = console.warn, Me = console.error, T = console.group, P = console.groupCollapsed, Y = console.groupEnd;
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
            log: B({}, f, {
              value: de
            }),
            info: B({}, f, {
              value: fe
            }),
            warn: B({}, f, {
              value: ze
            }),
            error: B({}, f, {
              value: Me
            }),
            group: B({}, f, {
              value: T
            }),
            groupCollapsed: B({}, f, {
              value: P
            }),
            groupEnd: B({}, f, {
              value: Y
            })
          });
        }
        ae < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Q = M.ReactCurrentDispatcher, re;
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
      var Be = typeof WeakMap == "function" ? WeakMap : Map;
      le = new Be();
    }
    function D(f, O) {
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
      var ke;
      ke = Q.current, Q.current = null, K();
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
            } catch (mt) {
              X = mt;
            }
            Reflect.construct(f, [], ye);
          } else {
            try {
              ye.call();
            } catch (mt) {
              X = mt;
            }
            f.call(ye.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (mt) {
            X = mt;
          }
          f();
        }
      } catch (mt) {
        if (mt && X && typeof mt.stack == "string") {
          for (var ve = mt.stack.split(`
`), He = X.stack.split(`
`), Fe = ve.length - 1, Ue = He.length - 1; Fe >= 1 && Ue >= 0 && ve[Fe] !== He[Ue]; )
            Ue--;
          for (; Fe >= 1 && Ue >= 0; Fe--, Ue--)
            if (ve[Fe] !== He[Ue]) {
              if (Fe !== 1 || Ue !== 1)
                do
                  if (Fe--, Ue--, Ue < 0 || ve[Fe] !== He[Ue]) {
                    var Ke = `
` + ve[Fe].replace(" at new ", " at ");
                    return f.displayName && Ke.includes("<anonymous>") && (Ke = Ke.replace("<anonymous>", f.displayName)), typeof f == "function" && le.set(f, Ke), Ke;
                  }
                while (Fe >= 1 && Ue >= 0);
              break;
            }
        }
      } finally {
        me = !1, Q.current = ke, pe(), Error.prepareStackTrace = we;
      }
      var Xt = f ? f.displayName || f.name : "", vo = Xt ? ie(Xt) : "";
      return typeof f == "function" && le.set(f, vo), vo;
    }
    function qe(f, O, L) {
      return D(f, !1);
    }
    function Rt(f) {
      var O = f.prototype;
      return !!(O && O.isReactComponent);
    }
    function at(f, O, L) {
      if (f == null)
        return "";
      if (typeof f == "function")
        return D(f, Rt(f));
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
            return at(f.type, O, L);
          case h: {
            var X = f, we = X._payload, ke = X._init;
            try {
              return at(ke(we), O, L);
            } catch {
            }
          }
        }
      return "";
    }
    var Lt = Object.prototype.hasOwnProperty, Fn = {}, Vn = M.ReactDebugCurrentFrame;
    function yr(f) {
      if (f) {
        var O = f._owner, L = at(f.type, f._source, O ? O.type : null);
        Vn.setExtraStackFrame(L);
      } else
        Vn.setExtraStackFrame(null);
    }
    function m(f, O, L, X, we) {
      {
        var ke = Function.call.bind(Lt);
        for (var ye in f)
          if (ke(f, ye)) {
            var ve = void 0;
            try {
              if (typeof f[ye] != "function") {
                var He = Error((X || "React class") + ": " + L + " type `" + ye + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof f[ye] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw He.name = "Invariant Violation", He;
              }
              ve = f[ye](O, ye, X, L, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Fe) {
              ve = Fe;
            }
            ve && !(ve instanceof Error) && (yr(we), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", X || "React class", L, ye, typeof ve), yr(null)), ve instanceof Error && !(ve.message in Fn) && (Fn[ve.message] = !0, yr(we), E("Failed %s type: %s", L, ve.message), yr(null));
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
    var _e = M.ReactCurrentOwner, Ve = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Xe, pt, gr;
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
    function Un(f, O) {
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
    function zn(f, O) {
      {
        var L = function() {
          pt || (pt = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", O));
        };
        L.isReactWarning = !0, Object.defineProperty(f, "ref", {
          get: L,
          configurable: !0
        });
      }
    }
    var Br = function(f, O, L, X, we, ke, ye) {
      var ve = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: t,
        // Built-in properties that belong on the element
        type: f,
        key: O,
        ref: L,
        props: ye,
        // Record the component responsible for creating this element.
        _owner: ke
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
    function al(f, O, L, X, we) {
      {
        var ke, ye = {}, ve = null, He = null;
        L !== void 0 && (Z(L), ve = "" + L), xr(O) && (Z(O.key), ve = "" + O.key), br(O) && (He = O.ref, Un(O, we));
        for (ke in O)
          Lt.call(O, ke) && !Ve.hasOwnProperty(ke) && (ye[ke] = O[ke]);
        if (f && f.defaultProps) {
          var Fe = f.defaultProps;
          for (ke in Fe)
            ye[ke] === void 0 && (ye[ke] = Fe[ke]);
        }
        if (ve || He) {
          var Ue = typeof f == "function" ? f.displayName || f.name || "Unknown" : f;
          ve && zr(ye, Ue), He && zn(ye, Ue);
        }
        return Br(f, ve, He, we, X, _e.current, ye);
      }
    }
    var Bn = M.ReactCurrentOwner, co = M.ReactDebugCurrentFrame;
    function Jt(f) {
      if (f) {
        var O = f._owner, L = at(f.type, f._source, O ? O.type : null);
        co.setExtraStackFrame(L);
      } else
        co.setExtraStackFrame(null);
    }
    var Wn;
    Wn = !1;
    function Zn(f) {
      return typeof f == "object" && f !== null && f.$$typeof === t;
    }
    function uo() {
      {
        if (Bn.current) {
          var f = N(Bn.current.type);
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
          var O = f.fileName.replace(/^.*[\\\/]/, ""), L = f.lineNumber;
          return `

Check your code at ` + O + ":" + L + ".";
        }
        return "";
      }
    }
    var fo = {};
    function ll(f) {
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
        var L = ll(O);
        if (fo[L])
          return;
        fo[L] = !0;
        var X = "";
        f && f._owner && f._owner !== Bn.current && (X = " It was passed a child from " + N(f._owner.type) + "."), Jt(f), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', L, X), Jt(null);
      }
    }
    function po(f, O) {
      {
        if (typeof f != "object")
          return;
        if (w(f))
          for (var L = 0; L < f.length; L++) {
            var X = f[L];
            Zn(X) && ho(X, O);
          }
        else if (Zn(f))
          f._store && (f._store.validated = !0);
        else if (f) {
          var we = x(f);
          if (typeof we == "function" && we !== f.entries)
            for (var ke = we.call(f), ye; !(ye = ke.next()).done; )
              Zn(ye.value) && ho(ye.value, O);
        }
      }
    }
    function cl(f) {
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
          m(L, f.props, "prop", X, f);
        } else if (O.PropTypes !== void 0 && !Wn) {
          Wn = !0;
          var we = N(O);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", we || "Unknown");
        }
        typeof O.getDefaultProps == "function" && !O.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ul(f) {
      {
        for (var O = Object.keys(f.props), L = 0; L < O.length; L++) {
          var X = O[L];
          if (X !== "children" && X !== "key") {
            Jt(f), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", X), Jt(null);
            break;
          }
        }
        f.ref !== null && (Jt(f), E("Invalid attribute `ref` supplied to `React.Fragment`."), Jt(null));
      }
    }
    function mo(f, O, L, X, we, ke) {
      {
        var ye = J(f);
        if (!ye) {
          var ve = "";
          (f === void 0 || typeof f == "object" && f !== null && Object.keys(f).length === 0) && (ve += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var He = il(we);
          He ? ve += He : ve += uo();
          var Fe;
          f === null ? Fe = "null" : w(f) ? Fe = "array" : f !== void 0 && f.$$typeof === t ? (Fe = "<" + (N(f.type) || "Unknown") + " />", ve = " Did you accidentally export a JSX literal instead of a component?") : Fe = typeof f, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Fe, ve);
        }
        var Ue = al(f, O, L, we, ke);
        if (Ue == null)
          return Ue;
        if (ye) {
          var Ke = O.children;
          if (Ke !== void 0)
            if (X)
              if (w(Ke)) {
                for (var Xt = 0; Xt < Ke.length; Xt++)
                  po(Ke[Xt], f);
                Object.freeze && Object.freeze(Ke);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              po(Ke, f);
        }
        return f === n ? ul(Ue) : cl(Ue), Ue;
      }
    }
    function dl(f, O, L) {
      return mo(f, O, L, !0);
    }
    function fl(f, O, L) {
      return mo(f, O, L, !1);
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
process.env.NODE_ENV === "production" ? ys.exports = yl() : ys.exports = vl();
var p = ys.exports;
function ba(e, t) {
  return function() {
    return e.apply(t, arguments);
  };
}
const { toString: gl } = Object.prototype, { getPrototypeOf: Us } = Object, En = /* @__PURE__ */ ((e) => (t) => {
  const r = gl.call(t);
  return e[r] || (e[r] = r.slice(8, -1).toLowerCase());
})(/* @__PURE__ */ Object.create(null)), ht = (e) => (e = e.toLowerCase(), (t) => En(t) === e), Tn = (e) => (t) => typeof t === e, { isArray: mr } = Array, Ar = Tn("undefined");
function bl(e) {
  return e !== null && !Ar(e) && e.constructor !== null && !Ar(e.constructor) && tt(e.constructor.isBuffer) && e.constructor.isBuffer(e);
}
const xa = ht("ArrayBuffer");
function xl(e) {
  let t;
  return typeof ArrayBuffer < "u" && ArrayBuffer.isView ? t = ArrayBuffer.isView(e) : t = e && e.buffer && xa(e.buffer), t;
}
const _l = Tn("string"), tt = Tn("function"), _a = Tn("number"), On = (e) => e !== null && typeof e == "object", wl = (e) => e === !0 || e === !1, Gr = (e) => {
  if (En(e) !== "object")
    return !1;
  const t = Us(e);
  return (t === null || t === Object.prototype || Object.getPrototypeOf(t) === null) && !(Symbol.toStringTag in e) && !(Symbol.iterator in e);
}, Sl = ht("Date"), El = ht("File"), Tl = ht("Blob"), Ol = ht("FileList"), Cl = (e) => On(e) && tt(e.pipe), Rl = (e) => {
  let t;
  return e && (typeof FormData == "function" && e instanceof FormData || tt(e.append) && ((t = En(e)) === "formdata" || // detect form-data instance
  t === "object" && tt(e.toString) && e.toString() === "[object FormData]"));
}, kl = ht("URLSearchParams"), Al = (e) => e.trim ? e.trim() : e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function Ir(e, t, { allOwnKeys: r = !1 } = {}) {
  if (e === null || typeof e > "u")
    return;
  let n, s;
  if (typeof e != "object" && (e = [e]), mr(e))
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
const Sa = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof window < "u" ? window : global, Ea = (e) => !Ar(e) && e !== Sa;
function gs() {
  const { caseless: e } = Ea(this) && this || {}, t = {}, r = (n, s) => {
    const o = e && wa(t, s) || s;
    Gr(t[o]) && Gr(n) ? t[o] = gs(t[o], n) : Gr(n) ? t[o] = gs({}, n) : mr(n) ? t[o] = n.slice() : t[o] = n;
  };
  for (let n = 0, s = arguments.length; n < s; n++)
    arguments[n] && Ir(arguments[n], r);
  return t;
}
const Nl = (e, t, r, { allOwnKeys: n } = {}) => (Ir(t, (s, o) => {
  r && tt(s) ? e[o] = ba(s, r) : e[o] = s;
}, { allOwnKeys: n }), e), jl = (e) => (e.charCodeAt(0) === 65279 && (e = e.slice(1)), e), Pl = (e, t, r, n) => {
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
    e = r !== !1 && Us(e);
  } while (e && (!r || r(e, t)) && e !== Object.prototype);
  return t;
}, Il = (e, t, r) => {
  e = String(e), (r === void 0 || r > e.length) && (r = e.length), r -= t.length;
  const n = e.indexOf(t, r);
  return n !== -1 && n === r;
}, Ml = (e) => {
  if (!e)
    return null;
  if (mr(e))
    return e;
  let t = e.length;
  if (!_a(t))
    return null;
  const r = new Array(t);
  for (; t-- > 0; )
    r[t] = e[t];
  return r;
}, Dl = /* @__PURE__ */ ((e) => (t) => e && t instanceof e)(typeof Uint8Array < "u" && Us(Uint8Array)), Ll = (e, t) => {
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
}, Vl = ht("HTMLFormElement"), Ul = (e) => e.toLowerCase().replace(
  /[-_\s]([a-z\d])(\w*)/g,
  function(r, n, s) {
    return n.toUpperCase() + s;
  }
), bo = (({ hasOwnProperty: e }) => (t, r) => e.call(t, r))(Object.prototype), zl = ht("RegExp"), Ta = (e, t) => {
  const r = Object.getOwnPropertyDescriptors(e), n = {};
  Ir(r, (s, o) => {
    let a;
    (a = t(s, o, e)) !== !1 && (n[o] = a || s);
  }), Object.defineProperties(e, n);
}, Bl = (e) => {
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
  return mr(e) ? n(e) : n(String(e).split(t)), r;
}, Zl = () => {
}, ql = (e, t) => (e = +e, Number.isFinite(e) ? e : t), qn = "abcdefghijklmnopqrstuvwxyz", xo = "0123456789", Oa = {
  DIGIT: xo,
  ALPHA: qn,
  ALPHA_DIGIT: qn + qn.toUpperCase() + xo
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
const Gl = (e) => {
  const t = new Array(10), r = (n, s) => {
    if (On(n)) {
      if (t.indexOf(n) >= 0)
        return;
      if (!("toJSON" in n)) {
        t[s] = n;
        const o = mr(n) ? [] : {};
        return Ir(n, (a, i) => {
          const l = r(a, s + 1);
          !Ar(l) && (o[i] = l);
        }), t[s] = void 0, o;
      }
    }
    return n;
  };
  return r(e, 0);
}, Jl = ht("AsyncFunction"), Xl = (e) => e && (On(e) || tt(e)) && tt(e.then) && tt(e.catch), S = {
  isArray: mr,
  isArrayBuffer: xa,
  isBuffer: bl,
  isFormData: Rl,
  isArrayBufferView: xl,
  isString: _l,
  isNumber: _a,
  isBoolean: wl,
  isObject: On,
  isPlainObject: Gr,
  isUndefined: Ar,
  isDate: Sl,
  isFile: El,
  isBlob: Tl,
  isRegExp: zl,
  isFunction: tt,
  isStream: Cl,
  isURLSearchParams: kl,
  isTypedArray: Dl,
  isFileList: Ol,
  forEach: Ir,
  merge: gs,
  extend: Nl,
  trim: Al,
  stripBOM: jl,
  inherits: Pl,
  toFlatObject: $l,
  kindOf: En,
  kindOfTest: ht,
  endsWith: Il,
  toArray: Ml,
  forEachEntry: Ll,
  matchAll: Fl,
  isHTMLForm: Vl,
  hasOwnProperty: bo,
  hasOwnProp: bo,
  // an alias to avoid ESLint no-prototype-builtins detection
  reduceDescriptors: Ta,
  freezeMethods: Bl,
  toObjectSet: Wl,
  toCamelCase: Ul,
  noop: Zl,
  toFiniteNumber: ql,
  findKey: wa,
  global: Sa,
  isContextDefined: Ea,
  ALPHABET: Oa,
  generateString: Hl,
  isSpecCompliantForm: Yl,
  toJSONObject: Gl,
  isAsyncFn: Jl,
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
function bs(e) {
  return S.isPlainObject(e) || S.isArray(e);
}
function ka(e) {
  return S.endsWith(e, "[]") ? e.slice(0, -2) : e;
}
function _o(e, t, r) {
  return e ? e.concat(t).map(function(s, o) {
    return s = ka(s), !r && o ? "[" + s + "]" : s;
  }).join(r ? "." : "") : t;
}
function Ql(e) {
  return S.isArray(e) && !e.some(bs);
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
  }, !1, function(y, x) {
    return !S.isUndefined(x[y]);
  });
  const n = r.metaTokens, s = r.visitor || u, o = r.dots, a = r.indexes, l = (r.Blob || typeof Blob < "u" && Blob) && S.isSpecCompliantForm(t);
  if (!S.isFunction(s))
    throw new TypeError("visitor must be a function");
  function c(v) {
    if (v === null)
      return "";
    if (S.isDate(v))
      return v.toISOString();
    if (!l && S.isBlob(v))
      throw new ge("Blob is not supported. Use a Buffer instead.");
    return S.isArrayBuffer(v) || S.isTypedArray(v) ? l && typeof Blob == "function" ? new Blob([v]) : Buffer.from(v) : v;
  }
  function u(v, y, x) {
    let M = v;
    if (v && !x && typeof v == "object") {
      if (S.endsWith(y, "{}"))
        y = n ? y : y.slice(0, -2), v = JSON.stringify(v);
      else if (S.isArray(v) && Ql(v) || (S.isFileList(v) || S.endsWith(y, "[]")) && (M = S.toArray(v)))
        return y = ka(y), M.forEach(function(C, k) {
          !(S.isUndefined(C) || C === null) && t.append(
            // eslint-disable-next-line no-nested-ternary
            a === !0 ? _o([y], k, o) : a === null ? y : y + "[]",
            c(C)
          );
        }), !1;
    }
    return bs(v) ? !0 : (t.append(_o(x, y, o), c(v)), !1);
  }
  const d = [], h = Object.assign(ec, {
    defaultVisitor: u,
    convertValue: c,
    isVisitable: bs
  });
  function g(v, y) {
    if (!S.isUndefined(v)) {
      if (d.indexOf(v) !== -1)
        throw Error("Circular reference detected in " + y.join("."));
      d.push(v), S.forEach(v, function(M, E) {
        (!(S.isUndefined(M) || M === null) && s.call(
          t,
          M,
          S.isString(E) ? E.trim() : E,
          y,
          h
        )) === !0 && g(M, y ? y.concat(E) : [E]);
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
function zs(e, t) {
  this._pairs = [], e && Cn(e, this, t);
}
const Aa = zs.prototype;
Aa.append = function(t, r) {
  this._pairs.push([t, r]);
};
Aa.toString = function(t) {
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
  if (s ? o = s(t, r) : o = S.isURLSearchParams(t) ? t.toString() : new zs(t, r).toString(n), o) {
    const a = e.indexOf("#");
    a !== -1 && (e = e.slice(0, a)), e += (e.indexOf("?") === -1 ? "?" : "&") + o;
  }
  return e;
}
class So {
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
const ja = {
  silentJSONParsing: !0,
  forcedJSONParsing: !0,
  clarifyTimeoutError: !1
}, rc = typeof URLSearchParams < "u" ? URLSearchParams : zs, nc = typeof FormData < "u" ? FormData : null, sc = typeof Blob < "u" ? Blob : null, oc = {
  isBrowser: !0,
  classes: {
    URLSearchParams: rc,
    FormData: nc,
    Blob: sc
  },
  protocols: ["http", "https", "file", "blob", "url", "data"]
}, Pa = typeof window < "u" && typeof document < "u", ac = ((e) => Pa && ["ReactNative", "NativeScript", "NS"].indexOf(e) < 0)(typeof navigator < "u" && navigator.product), ic = typeof WorkerGlobalScope < "u" && // eslint-disable-next-line no-undef
self instanceof WorkerGlobalScope && typeof self.importScripts == "function", lc = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  hasBrowserEnv: Pa,
  hasStandardBrowserEnv: ac,
  hasStandardBrowserWebWorkerEnv: ic
}, Symbol.toStringTag, { value: "Module" })), it = {
  ...lc,
  ...oc
};
function cc(e, t) {
  return Cn(e, new it.classes.URLSearchParams(), Object.assign({
    visitor: function(r, n, s, o) {
      return it.isNode && S.isBuffer(r) ? (this.append(n, r.toString("base64")), !1) : o.defaultVisitor.apply(this, arguments);
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
    if (a === "__proto__")
      return !0;
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
const Bs = {
  transitional: ja,
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
    const r = this.transitional || Bs.transitional, n = r && r.forcedJSONParsing, s = this.responseType === "json";
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
    FormData: it.classes.FormData,
    Blob: it.classes.Blob
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
  Bs.headers[e] = {};
});
const Ws = Bs, hc = S.toObjectSet([
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
function Jr(e) {
  return e === !1 || e == null ? e : S.isArray(e) ? e.map(Jr) : String(e);
}
function mc(e) {
  const t = /* @__PURE__ */ Object.create(null), r = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let n;
  for (; n = r.exec(e); )
    t[n[1]] = n[2];
  return t;
}
const vc = (e) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());
function Hn(e, t, r, n, s) {
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
      (!d || s[d] === void 0 || c === !0 || c === void 0 && s[d] !== !1) && (s[d || l] = Jr(i));
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
      return !!(n && this[n] !== void 0 && (!r || Hn(this, this[n], n, r)));
    }
    return !1;
  }
  delete(t, r) {
    const n = this;
    let s = !1;
    function o(a) {
      if (a = Sr(a), a) {
        const i = S.findKey(n, a);
        i && (!r || Hn(n, n[i], i, r)) && (delete n[i], s = !0);
      }
    }
    return S.isArray(t) ? t.forEach(o) : o(t), s;
  }
  clear(t) {
    const r = Object.keys(this);
    let n = r.length, s = !1;
    for (; n--; ) {
      const o = r[n];
      (!t || Hn(this, this[o], o, t, !0)) && (delete this[o], s = !0);
    }
    return s;
  }
  normalize(t) {
    const r = this, n = {};
    return S.forEach(this, (s, o) => {
      const a = S.findKey(n, o);
      if (a) {
        r[a] = Jr(s), delete r[o];
        return;
      }
      const i = t ? yc(o) : String(o).trim();
      i !== o && delete r[o], r[i] = Jr(s), n[i] = !0;
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
const wt = Rn;
function Yn(e, t) {
  const r = this || Ws, n = t || r, s = wt.from(n.headers);
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
const xc = it.hasStandardBrowserEnv ? (
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
  return t ? e.replace(/\/?\/$/, "") + "/" + t.replace(/^\/+/, "") : e;
}
function Ma(e, t) {
  return e && !_c(t) ? wc(e, t) : t;
}
const Sc = it.hasStandardBrowserEnv ? (
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
    const o = wt.from(e.headers).normalize();
    let { responseType: a, withXSRFToken: i } = e, l;
    function c() {
      e.cancelToken && e.cancelToken.unsubscribe(l), e.signal && e.signal.removeEventListener("abort", l);
    }
    let u;
    if (S.isFormData(s)) {
      if (it.hasStandardBrowserEnv || it.hasStandardBrowserWebWorkerEnv)
        o.setContentType(!1);
      else if ((u = o.getContentType()) !== !1) {
        const [y, ...x] = u ? u.split(";").map((M) => M.trim()).filter(Boolean) : [];
        o.setContentType([y || "multipart/form-data", ...x].join("; "));
      }
    }
    let d = new XMLHttpRequest();
    if (e.auth) {
      const y = e.auth.username || "", x = e.auth.password ? unescape(encodeURIComponent(e.auth.password)) : "";
      o.set("Authorization", "Basic " + btoa(y + ":" + x));
    }
    const h = Ma(e.baseURL, e.url);
    d.open(e.method.toUpperCase(), Na(h, e.params, e.paramsSerializer), !0), d.timeout = e.timeout;
    function g() {
      if (!d)
        return;
      const y = wt.from(
        "getAllResponseHeaders" in d && d.getAllResponseHeaders()
      ), M = {
        data: !a || a === "text" || a === "json" ? d.responseText : d.response,
        status: d.status,
        statusText: d.statusText,
        headers: y,
        config: e,
        request: d
      };
      bc(function(C) {
        r(C), c();
      }, function(C) {
        n(C), c();
      }, M), d = null;
    }
    if ("onloadend" in d ? d.onloadend = g : d.onreadystatechange = function() {
      !d || d.readyState !== 4 || d.status === 0 && !(d.responseURL && d.responseURL.indexOf("file:") === 0) || setTimeout(g);
    }, d.onabort = function() {
      d && (n(new ge("Request aborted", ge.ECONNABORTED, e, d)), d = null);
    }, d.onerror = function() {
      n(new ge("Network Error", ge.ERR_NETWORK, e, d)), d = null;
    }, d.ontimeout = function() {
      let x = e.timeout ? "timeout of " + e.timeout + "ms exceeded" : "timeout exceeded";
      const M = e.transitional || ja;
      e.timeoutErrorMessage && (x = e.timeoutErrorMessage), n(new ge(
        x,
        M.clarifyTimeoutError ? ge.ETIMEDOUT : ge.ECONNABORTED,
        e,
        d
      )), d = null;
    }, it.hasStandardBrowserEnv && (i && S.isFunction(i) && (i = i(e)), i || i !== !1 && Sc(h))) {
      const y = e.xsrfHeaderName && e.xsrfCookieName && xc.read(e.xsrfCookieName);
      y && o.set(e.xsrfHeaderName, y);
    }
    s === void 0 && o.setContentType(null), "setRequestHeader" in d && S.forEach(o.toJSON(), function(x, M) {
      d.setRequestHeader(M, x);
    }), S.isUndefined(e.withCredentials) || (d.withCredentials = !!e.withCredentials), a && a !== "json" && (d.responseType = e.responseType), typeof e.onDownloadProgress == "function" && d.addEventListener("progress", To(e.onDownloadProgress, !0)), typeof e.onUploadProgress == "function" && d.upload && d.upload.addEventListener("progress", To(e.onUploadProgress)), (e.cancelToken || e.signal) && (l = (y) => {
      d && (n(!y || y.type ? new Mr(null, e, d) : y), d.abort(), d = null);
    }, e.cancelToken && e.cancelToken.subscribe(l), e.signal && (e.signal.aborted ? l() : e.signal.addEventListener("abort", l)));
    const v = Ec(h);
    if (v && it.protocols.indexOf(v) === -1) {
      n(new ge("Unsupported protocol " + v + ":", ge.ERR_BAD_REQUEST, e));
      return;
    }
    d.send(s || null);
  });
}, xs = {
  http: Kl,
  xhr: Cc
};
S.forEach(xs, (e, t) => {
  if (e) {
    try {
      Object.defineProperty(e, "name", { value: t });
    } catch {
    }
    Object.defineProperty(e, "adapterName", { value: t });
  }
});
const Oo = (e) => `- ${e}`, Rc = (e) => S.isFunction(e) || e === null || e === !1, Da = {
  getAdapter: (e) => {
    e = S.isArray(e) ? e : [e];
    const { length: t } = e;
    let r, n;
    const s = {};
    for (let o = 0; o < t; o++) {
      r = e[o];
      let a;
      if (n = r, !Rc(r) && (n = xs[(a = String(r)).toLowerCase()], n === void 0))
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
  adapters: xs
};
function Gn(e) {
  if (e.cancelToken && e.cancelToken.throwIfRequested(), e.signal && e.signal.aborted)
    throw new Mr(null, e);
}
function Co(e) {
  return Gn(e), e.headers = wt.from(e.headers), e.data = Yn.call(
    e,
    e.transformRequest
  ), ["post", "put", "patch"].indexOf(e.method) !== -1 && e.headers.setContentType("application/x-www-form-urlencoded", !1), Da.getAdapter(e.adapter || Ws.adapter)(e).then(function(n) {
    return Gn(e), n.data = Yn.call(
      e,
      e.transformResponse,
      n
    ), n.headers = wt.from(n.headers), n;
  }, function(n) {
    return Ia(n) || (Gn(e), n && n.response && (n.response.data = Yn.call(
      e,
      e.transformResponse,
      n.response
    ), n.response.headers = wt.from(n.response.headers))), Promise.reject(n);
  });
}
const Ro = (e) => e instanceof wt ? e.toJSON() : e;
function lr(e, t) {
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
const La = "1.6.5", Zs = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach((e, t) => {
  Zs[e] = function(n) {
    return typeof n === e || "a" + (t < 1 ? "n " : " ") + e;
  };
});
const ko = {};
Zs.transitional = function(t, r, n) {
  function s(o, a) {
    return "[Axios v" + La + "] Transitional option '" + o + "'" + a + (n ? ". " + n : "");
  }
  return (o, a, i) => {
    if (t === !1)
      throw new ge(
        s(a, " has been removed" + (r ? " in " + r : "")),
        ge.ERR_DEPRECATED
      );
    return r && !ko[a] && (ko[a] = !0, console.warn(
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
const _s = {
  assertOptions: kc,
  validators: Zs
}, kt = _s.validators;
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
    typeof t == "string" ? (r = r || {}, r.url = t) : r = t || {}, r = lr(this.defaults, r);
    const { transitional: n, paramsSerializer: s, headers: o } = r;
    n !== void 0 && _s.assertOptions(n, {
      silentJSONParsing: kt.transitional(kt.boolean),
      forcedJSONParsing: kt.transitional(kt.boolean),
      clarifyTimeoutError: kt.transitional(kt.boolean)
    }, !1), s != null && (S.isFunction(s) ? r.paramsSerializer = {
      serialize: s
    } : _s.assertOptions(s, {
      encode: kt.function,
      serialize: kt.function
    }, !0)), r.method = (r.method || this.defaults.method || "get").toLowerCase();
    let a = o && S.merge(
      o.common,
      o[r.method]
    );
    o && S.forEach(
      ["delete", "get", "head", "post", "put", "patch", "common"],
      (v) => {
        delete o[v];
      }
    ), r.headers = wt.concat(a, o);
    const i = [];
    let l = !0;
    this.interceptors.request.forEach(function(y) {
      typeof y.runWhen == "function" && y.runWhen(r) === !1 || (l = l && y.synchronous, i.unshift(y.fulfilled, y.rejected));
    });
    const c = [];
    this.interceptors.response.forEach(function(y) {
      c.push(y.fulfilled, y.rejected);
    });
    let u, d = 0, h;
    if (!l) {
      const v = [Co.bind(this), void 0];
      for (v.unshift.apply(v, i), v.push.apply(v, c), h = v.length, u = Promise.resolve(r); d < h; )
        u = u.then(v[d++], v[d++]);
      return u;
    }
    h = i.length;
    let g = r;
    for (d = 0; d < h; ) {
      const v = i[d++], y = i[d++];
      try {
        g = v(g);
      } catch (x) {
        y.call(this, x);
        break;
      }
    }
    try {
      u = Co.call(this, g);
    } catch (v) {
      return Promise.reject(v);
    }
    for (d = 0, h = c.length; d < h; )
      u = u.then(c[d++], c[d++]);
    return u;
  }
  getUri(t) {
    t = lr(this.defaults, t);
    const r = Ma(t.baseURL, t.url);
    return Na(r, t.params, t.paramsSerializer);
  }
}
S.forEach(["delete", "get", "head", "options"], function(t) {
  rn.prototype[t] = function(r, n) {
    return this.request(lr(n || {}, {
      method: t,
      url: r,
      data: (n || {}).data
    }));
  };
});
S.forEach(["post", "put", "patch"], function(t) {
  function r(n) {
    return function(o, a, i) {
      return this.request(lr(i || {}, {
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
class qs {
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
      token: new qs(function(s) {
        t = s;
      }),
      cancel: t
    };
  }
}
const Ac = qs;
function Nc(e) {
  return function(r) {
    return e.apply(null, r);
  };
}
function jc(e) {
  return S.isObject(e) && e.isAxiosError === !0;
}
const ws = {
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
Object.entries(ws).forEach(([e, t]) => {
  ws[t] = e;
});
const Pc = ws;
function Fa(e) {
  const t = new Xr(e), r = ba(Xr.prototype.request, t);
  return S.extend(r, Xr.prototype, t, { allOwnKeys: !0 }), S.extend(r, t, null, { allOwnKeys: !0 }), r.create = function(s) {
    return Fa(lr(e, s));
  }, r;
}
const $e = Fa(Ws);
$e.Axios = Xr;
$e.CanceledError = Mr;
$e.CancelToken = Ac;
$e.isCancel = Ia;
$e.VERSION = La;
$e.toFormData = Cn;
$e.AxiosError = ge;
$e.Cancel = $e.CanceledError;
$e.all = function(t) {
  return Promise.all(t);
};
$e.spread = Nc;
$e.isAxiosError = jc;
$e.mergeConfig = lr;
$e.AxiosHeaders = wt;
$e.formToJSON = (e) => $a(S.isHTMLForm(e) ? new FormData(e) : e);
$e.getAdapter = Da.getAdapter;
$e.HttpStatusCode = Pc;
$e.default = $e;
const $c = (e, t) => $e.get(`${e}/chat/room`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), Ic = (e, t, r, n, s) => $e.get(`${e}/chat/room/${r}/message?ts_st=${n || ""}&ts_en=${s || ""}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((o) => {
  if (o.data.code === 200)
    return o.data.payload;
  throw new Error(o.data.message_ui || o.data.message);
}), Mc = (e, t, r, n) => $e.post(`${e}/chat/room/${n}/message`, r, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((s) => {
  if (s.data.code === 200)
    return s.data.payload;
  throw new Error(s.data.message_ui || s.data.message);
}), Dc = (e, t) => $e.get(`${e}/chat/token`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((r) => {
  if (r.data.code === 200)
    return r.data.payload;
  throw new Error(r.data.message_ui || r.data.message);
}), Va = (e, t, r) => $e.get(`${e}/chat/room/${r}/attendant`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
}), Lc = (e, t, r) => $e.get(`${e}/chat/room/${r}`, {
  headers: {
    Authorization: `Bearer ${t}`
  }
}).then((n) => {
  if (n.data.code === 200)
    return n.data.payload;
  throw new Error(n.data.message_ui || n.data.message);
});
var Fc = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const Ao = (e) => {
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
}, Vc = (e) => e ? Ao(e) : Ao;
var Ss = { exports: {} }, Jn = {}, Wr = { exports: {} }, Xn = {};
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
        for (var k = arguments.length, _ = new Array(k > 1 ? k - 1 : 0), z = 1; z < k; z++)
          _[z - 1] = arguments[z];
        n("error", C, _);
      }
    }
    function n(C, k, _) {
      {
        var z = t.ReactDebugCurrentFrame, te = z.getStackAddendum();
        te !== "" && (k += "%s", _ = _.concat([te]));
        var oe = _.map(function(W) {
          return String(W);
        });
        oe.unshift("Warning: " + k), Function.prototype.apply.call(console[C], console, oe);
      }
    }
    function s(C, k) {
      return C === k && (C !== 0 || 1 / C === 1 / k) || C !== C && k !== k;
    }
    var o = typeof Object.is == "function" ? Object.is : s, a = e.useState, i = e.useEffect, l = e.useLayoutEffect, c = e.useDebugValue, u = !1, d = !1;
    function h(C, k, _) {
      u || e.startTransition !== void 0 && (u = !0, r("You are using an outdated, pre-release alpha of React 18 that does not support useSyncExternalStore. The use-sync-external-store shim will not work correctly. Upgrade to a newer pre-release."));
      var z = k();
      if (!d) {
        var te = k();
        o(z, te) || (r("The result of getSnapshot should be cached to avoid an infinite loop"), d = !0);
      }
      var oe = a({
        inst: {
          value: z,
          getSnapshot: k
        }
      }), W = oe[0].inst, J = oe[1];
      return l(function() {
        W.value = z, W.getSnapshot = k, g(W) && J({
          inst: W
        });
      }, [C, z, k]), i(function() {
        g(W) && J({
          inst: W
        });
        var be = function() {
          g(W) && J({
            inst: W
          });
        };
        return C(be);
      }, [C]), c(z), z;
    }
    function g(C) {
      var k = C.getSnapshot, _ = C.value;
      try {
        var z = k();
        return !o(_, z);
      } catch {
        return !0;
      }
    }
    function v(C, k, _) {
      return k();
    }
    var y = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", x = !y, M = x ? v : h, E = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : M;
    Xn.useSyncExternalStore = E, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Xn;
}
var Kn = {};
/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function zc() {
  if (jo)
    return Kn;
  jo = 1;
  var e = ee;
  function t(d, h) {
    return d === h && (d !== 0 || 1 / d === 1 / h) || d !== d && h !== h;
  }
  var r = typeof Object.is == "function" ? Object.is : t, n = e.useState, s = e.useEffect, o = e.useLayoutEffect, a = e.useDebugValue;
  function i(d, h) {
    var g = h(), v = n({ inst: { value: g, getSnapshot: h } }), y = v[0].inst, x = v[1];
    return o(function() {
      y.value = g, y.getSnapshot = h, l(y) && x({ inst: y });
    }, [d, g, h]), s(function() {
      return l(y) && x({ inst: y }), d(function() {
        l(y) && x({ inst: y });
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
  return Kn.useSyncExternalStore = e.useSyncExternalStore !== void 0 ? e.useSyncExternalStore : u, Kn;
}
var Po;
function Ua() {
  return Po || (Po = 1, process.env.NODE_ENV === "production" ? Wr.exports = zc() : Wr.exports = Uc()), Wr.exports;
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
    var e = ee, t = Ua();
    function r(u, d) {
      return u === d && (u !== 0 || 1 / u === 1 / d) || u !== u && d !== d;
    }
    var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, l = e.useDebugValue;
    function c(u, d, h, g, v) {
      var y = o(null), x;
      y.current === null ? (x = {
        hasValue: !1,
        value: null
      }, y.current = x) : x = y.current;
      var M = i(function() {
        var _ = !1, z, te, oe = function(j) {
          if (!_) {
            _ = !0, z = j;
            var N = g(j);
            if (v !== void 0 && x.hasValue) {
              var B = x.value;
              if (v(B, N))
                return te = B, B;
            }
            return te = N, N;
          }
          var ae = z, de = te;
          if (n(ae, j))
            return de;
          var fe = g(j);
          return v !== void 0 && v(de, fe) ? de : (z = j, te = fe, fe);
        }, W = h === void 0 ? null : h, J = function() {
          return oe(d());
        }, be = W === null ? void 0 : function() {
          return oe(W());
        };
        return [J, be];
      }, [d, h, g, v]), E = M[0], C = M[1], k = s(u, E, C);
      return a(function() {
        x.hasValue = !0, x.value = k;
      }, [k]), l(k), k;
    }
    Jn.useSyncExternalStoreWithSelector = c, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Jn;
}
var Qn = {};
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
function Wc() {
  if (Io)
    return Qn;
  Io = 1;
  var e = ee, t = Ua();
  function r(c, u) {
    return c === u && (c !== 0 || 1 / c === 1 / u) || c !== c && u !== u;
  }
  var n = typeof Object.is == "function" ? Object.is : r, s = t.useSyncExternalStore, o = e.useRef, a = e.useEffect, i = e.useMemo, l = e.useDebugValue;
  return Qn.useSyncExternalStoreWithSelector = function(c, u, d, h, g) {
    var v = o(null);
    if (v.current === null) {
      var y = { hasValue: !1, value: null };
      v.current = y;
    } else
      y = v.current;
    v = i(function() {
      function M(z) {
        if (!E) {
          if (E = !0, C = z, z = h(z), g !== void 0 && y.hasValue) {
            var te = y.value;
            if (g(te, z))
              return k = te;
          }
          return k = z;
        }
        if (te = k, n(C, z))
          return te;
        var oe = h(z);
        return g !== void 0 && g(te, oe) ? te : (C = z, k = oe);
      }
      var E = !1, C, k, _ = d === void 0 ? null : d;
      return [function() {
        return M(u());
      }, _ === null ? void 0 : function() {
        return M(_());
      }];
    }, [u, d, h, g]);
    var x = s(c, v[0], v[1]);
    return a(function() {
      y.hasValue = !0, y.value = x;
    }, [x]), l(x), x;
  }, Qn;
}
process.env.NODE_ENV === "production" ? Ss.exports = Wc() : Ss.exports = Bc();
var Zc = Ss.exports;
const qc = /* @__PURE__ */ ga(Zc);
var Hs = { VITE_APP_SOCKET_URL: "wss://xdowsj2ry9.execute-api.ap-southeast-1.amazonaws.com/production/", VITE_APP_API_BASE_URL: "http://localhost:3000", VITE_APP_AUTH_TOKEN: "eyJhbGciOiJSUzI1NiIsImtpZCI6ImJlNzgyM2VmMDFiZDRkMmI5NjI3NDE2NThkMjA4MDdlZmVlNmRlNWMiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vdW5pY2xhc3MtZGV2IiwiYXVkIjoidW5pY2xhc3MtZGV2IiwiYXV0aF90aW1lIjoxNzAyODA2ODIwLCJ1c2VyX2lkIjoibFNSSUpidm12MmQ3VHJEbnpNUFR6U3lRMlJYMiIsInN1YiI6ImxTUklKYnZtdjJkN1RyRG56TVBUelN5UTJSWDIiLCJpYXQiOjE3MDI4MDY4MjAsImV4cCI6MTcwMjgxMDQyMCwiZW1haWwiOiJhZG1pbkB1bmljbGFzcy5pbyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkB1bmljbGFzcy5pbyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.ILqplIgdBFf4Nd35BGwfX5hXETJ90L26rPkar03KgbKqMMiOqcfDWy8beRuiOomITDlqNNMszE8Zi_jncznrcYZOdpKr0tNazhuKlgclsYYLDcvbbz0jO0FS7dM4yomqZJ7KpUaPTOiSxIX_u5ao0oLLb20w0GwLpcauiti6iI1HYcapNRS1S4W-JjRoH8XuA6e5v9_BiiKthcG340qUrsCdSTm6RKmOEYNgIfU_MwaWEzQI4NmyAC4AjRmRnxQ-fYKnElQh5nL27ZY97rlgSWAOQQOdB0dDF9xoXFJe-Nrfh3ullFWtywQqBoc85ka6AluTU3W14BDzEQXjKpHRPA", BASE_URL: "/", MODE: "production", DEV: !1, PROD: !0, SSR: !1 };
const { useDebugValue: Hc } = ee, { useSyncExternalStoreWithSelector: Yc } = qc;
let Mo = !1;
function Gc(e, t = e.getState, r) {
  (Hs ? "production" : void 0) !== "production" && r && !Mo && (console.warn(
    "[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"
  ), Mo = !0);
  const n = Yc(
    e.subscribe,
    e.getState,
    e.getServerState || e.getState,
    t,
    r
  );
  return Hc(n), n;
}
const Do = (e) => {
  (Hs ? "production" : void 0) !== "production" && typeof e != "function" && console.warn(
    "[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`."
  );
  const t = typeof e == "function" ? Vc(e) : e, r = (n, s) => Gc(t, n, s);
  return Object.assign(r, t), r;
}, za = (e) => e ? Do(e) : Do;
var Jc = (e) => ((Hs ? "production" : void 0) !== "production" && console.warn(
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
}, Ys = Jc((e, t) => ({
  ...Qc,
  // Connect to WebSocket
  connectWebSocket: async (r, n, s) => {
    const { socketStatus: o } = t();
    if (o)
      return;
    const a = await Dc(r, s), i = new WebSocket(n + "?token=" + a);
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
    const { socket: a } = Ys.getState();
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
      const i = await Ic(r, n, s, o, a);
      e((l) => {
        const d = [...l.rooms[s] || [], ...i].reduce((h, g) => (h.findIndex((y) => y.id === g.id) < 0 && h.push(g), h), []);
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
function Ba(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e)) {
      var s = e.length;
      for (t = 0; t < s; t++)
        e[t] && (r = Ba(e[t])) && (n && (n += " "), n += r);
    } else
      for (r in e)
        e[r] && (n && (n += " "), n += r);
  return n;
}
function eu() {
  for (var e, t, r = 0, n = "", s = arguments.length; r < s; r++)
    (e = arguments[r]) && (t = Ba(e)) && (n && (n += " "), n += t);
  return n;
}
const Gs = "-";
function tu(e) {
  const t = nu(e), {
    conflictingClassGroups: r,
    conflictingClassGroupModifiers: n
  } = e;
  function s(a) {
    const i = a.split(Gs);
    return i[0] === "" && i.length !== 1 && i.shift(), Wa(i, t) || ru(a);
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
function Wa(e, t) {
  var a;
  if (e.length === 0)
    return t.classGroupId;
  const r = e[0], n = t.nextPart.get(r), s = n ? Wa(e.slice(1), n) : void 0;
  if (s)
    return s;
  if (t.validators.length === 0)
    return;
  const o = e.join(Gs);
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
    Es(a, n, o, t);
  }), n;
}
function Es(e, t, r, n) {
  e.forEach((s) => {
    if (typeof s == "string") {
      const o = s === "" ? t : Fo(t, s);
      o.classGroupId = r;
      return;
    }
    if (typeof s == "function") {
      if (su(s)) {
        Es(s(n), t, r, n);
        return;
      }
      t.validators.push({
        validator: s,
        classGroupId: r
      });
      return;
    }
    Object.entries(s).forEach(([o, a]) => {
      Es(a, Fo(t, o), r, n);
    });
  });
}
function Fo(e, t) {
  let r = e;
  return t.split(Gs).forEach((n) => {
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
const Za = "!";
function iu(e) {
  const t = e.separator, r = t.length === 1, n = t[0], s = t.length;
  return function(a) {
    const i = [];
    let l = 0, c = 0, u;
    for (let y = 0; y < a.length; y++) {
      let x = a[y];
      if (l === 0) {
        if (x === n && (r || a.slice(y, y + s) === t)) {
          i.push(a.slice(c, y)), c = y + s;
          continue;
        }
        if (x === "/") {
          u = y;
          continue;
        }
      }
      x === "[" ? l++ : x === "]" && l--;
    }
    const d = i.length === 0 ? a : a.substring(c), h = d.startsWith(Za), g = h ? d.substring(1) : d, v = u && u > c ? u - c : void 0;
    return {
      modifiers: i,
      hasImportantModifier: h,
      baseClassName: g,
      maybePostfixModifierPosition: v
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
      modifierId: l ? g + Za : g,
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
    (t = arguments[e++]) && (r = qa(t)) && (n && (n += " "), n += r);
  return n;
}
function qa(e) {
  if (typeof e == "string")
    return e;
  let t, r = "";
  for (let n = 0; n < e.length; n++)
    e[n] && (t = qa(e[n])) && (r && (r += " "), r += t);
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
function je(e) {
  const t = (r) => r[e] || [];
  return t.isThemeGetter = !0, t;
}
const Ha = /^\[(?:([a-z-]+):)?(.+)\]$/i, pu = /^\d+\/\d+$/, mu = /* @__PURE__ */ new Set(["px", "full", "screen"]), vu = /^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/, yu = /\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/, gu = /^-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/, bu = /^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/;
function vt(e) {
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
function ce(e) {
  return Ha.test(e);
}
function Nt(e) {
  return vu.test(e);
}
const _u = /* @__PURE__ */ new Set(["length", "size", "percentage"]);
function wu(e) {
  return vr(e, _u, Ya);
}
function Su(e) {
  return vr(e, "position", Ya);
}
const Eu = /* @__PURE__ */ new Set(["image", "url"]);
function Tu(e) {
  return vr(e, Eu, ku);
}
function Ou(e) {
  return vr(e, "", Ru);
}
function Tr() {
  return !0;
}
function vr(e, t, r) {
  const n = Ha.exec(e);
  return n ? n[1] ? typeof t == "string" ? n[1] === t : t.has(n[1]) : r(n[2]) : !1;
}
function Cu(e) {
  return yu.test(e);
}
function Ya() {
  return !1;
}
function Ru(e) {
  return gu.test(e);
}
function ku(e) {
  return bu.test(e);
}
function Au() {
  const e = je("colors"), t = je("spacing"), r = je("blur"), n = je("brightness"), s = je("borderColor"), o = je("borderRadius"), a = je("borderSpacing"), i = je("borderWidth"), l = je("contrast"), c = je("grayscale"), u = je("hueRotate"), d = je("invert"), h = je("gap"), g = je("gradientColorStops"), v = je("gradientColorStopPositions"), y = je("inset"), x = je("margin"), M = je("opacity"), E = je("padding"), C = je("saturate"), k = je("scale"), _ = je("sepia"), z = je("skew"), te = je("space"), oe = je("translate"), W = () => ["auto", "contain", "none"], J = () => ["auto", "hidden", "clip", "visible", "scroll"], be = () => ["auto", ce, t], j = () => [ce, t], N = () => ["", vt, At], B = () => ["auto", zt, ce], ae = () => ["bottom", "center", "left", "left-bottom", "left-top", "right", "right-bottom", "right-top", "top"], de = () => ["solid", "dashed", "dotted", "double", "none"], fe = () => ["normal", "multiply", "screen", "overlay", "darken", "lighten", "color-dodge", "color-burn", "hard-light", "soft-light", "difference", "exclusion", "hue", "saturation", "color", "luminosity", "plus-lighter"], ze = () => ["start", "end", "center", "between", "around", "evenly", "stretch"], Me = () => ["", "0", ce], T = () => ["auto", "avoid", "all", "avoid-page", "page", "left", "right", "column"], P = () => [zt, Zr], Y = () => [zt, ce];
  return {
    cacheSize: 500,
    separator: ":",
    theme: {
      colors: [Tr],
      spacing: [vt, At],
      blur: ["none", "", Nt, ce],
      brightness: P(),
      borderColor: [e],
      borderRadius: ["none", "", "full", Nt, ce],
      borderSpacing: j(),
      borderWidth: N(),
      contrast: P(),
      grayscale: Me(),
      hueRotate: Y(),
      invert: Me(),
      gap: j(),
      gradientColorStops: [e],
      gradientColorStopPositions: [xu, At],
      inset: be(),
      margin: be(),
      opacity: P(),
      padding: j(),
      saturate: P(),
      scale: P(),
      sepia: Me(),
      skew: Y(),
      space: j(),
      translate: j()
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
        columns: [Nt]
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
        overflow: J()
      }],
      /**
       * Overflow X
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-x": [{
        "overflow-x": J()
      }],
      /**
       * Overflow Y
       * @see https://tailwindcss.com/docs/overflow
       */
      "overflow-y": [{
        "overflow-y": J()
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
        inset: [y]
      }],
      /**
       * Right / Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-x": [{
        "inset-x": [y]
      }],
      /**
       * Top / Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      "inset-y": [{
        "inset-y": [y]
      }],
      /**
       * Start
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      start: [{
        start: [y]
      }],
      /**
       * End
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      end: [{
        end: [y]
      }],
      /**
       * Top
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      top: [{
        top: [y]
      }],
      /**
       * Right
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      right: [{
        right: [y]
      }],
      /**
       * Bottom
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      bottom: [{
        bottom: [y]
      }],
      /**
       * Left
       * @see https://tailwindcss.com/docs/top-right-bottom-left
       */
      left: [{
        left: [y]
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
        grow: Me()
      }],
      /**
       * Flex Shrink
       * @see https://tailwindcss.com/docs/flex-shrink
       */
      shrink: [{
        shrink: Me()
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
          span: [Er, ce]
        }, ce]
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
          screen: [Nt]
        }, Nt]
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
        text: ["base", Nt, At]
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
        leading: ["none", "tight", "snug", "normal", "relaxed", "loose", vt, ce]
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
        "placeholder-opacity": [M]
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
        "text-opacity": [M]
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
        decoration: ["auto", "from-font", vt, At]
      }],
      /**
       * Text Underline Offset
       * @see https://tailwindcss.com/docs/text-underline-offset
       */
      "underline-offset": [{
        "underline-offset": ["auto", vt, ce]
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
        indent: j()
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
        "bg-opacity": [M]
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
        bg: [...ae(), Su]
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
        from: [v]
      }],
      /**
       * Gradient Color Stops Via Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-via-pos": [{
        via: [v]
      }],
      /**
       * Gradient Color Stops To Position
       * @see https://tailwindcss.com/docs/gradient-color-stops
       */
      "gradient-to-pos": [{
        to: [v]
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
        "border-opacity": [M]
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
        "divide-opacity": [M]
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
        "outline-offset": [vt, ce]
      }],
      /**
       * Outline Width
       * @see https://tailwindcss.com/docs/outline-width
       */
      "outline-w": [{
        outline: [vt, At]
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
        "ring-opacity": [M]
      }],
      /**
       * Ring Offset Width
       * @see https://tailwindcss.com/docs/ring-offset-width
       */
      "ring-offset-w": [{
        "ring-offset": [vt, At]
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
        shadow: ["", "inner", "none", Nt, Ou]
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
        opacity: [M]
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
        "drop-shadow": ["", "none", Nt, ce]
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
        "backdrop-opacity": [M]
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
        scale: [k]
      }],
      /**
       * Scale X
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-x": [{
        "scale-x": [k]
      }],
      /**
       * Scale Y
       * @see https://tailwindcss.com/docs/scale
       */
      "scale-y": [{
        "scale-y": [k]
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
        "scroll-m": j()
      }],
      /**
       * Scroll Margin X
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mx": [{
        "scroll-mx": j()
      }],
      /**
       * Scroll Margin Y
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-my": [{
        "scroll-my": j()
      }],
      /**
       * Scroll Margin Start
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ms": [{
        "scroll-ms": j()
      }],
      /**
       * Scroll Margin End
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-me": [{
        "scroll-me": j()
      }],
      /**
       * Scroll Margin Top
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mt": [{
        "scroll-mt": j()
      }],
      /**
       * Scroll Margin Right
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mr": [{
        "scroll-mr": j()
      }],
      /**
       * Scroll Margin Bottom
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-mb": [{
        "scroll-mb": j()
      }],
      /**
       * Scroll Margin Left
       * @see https://tailwindcss.com/docs/scroll-margin
       */
      "scroll-ml": [{
        "scroll-ml": j()
      }],
      /**
       * Scroll Padding
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-p": [{
        "scroll-p": j()
      }],
      /**
       * Scroll Padding X
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-px": [{
        "scroll-px": j()
      }],
      /**
       * Scroll Padding Y
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-py": [{
        "scroll-py": j()
      }],
      /**
       * Scroll Padding Start
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-ps": [{
        "scroll-ps": j()
      }],
      /**
       * Scroll Padding End
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pe": [{
        "scroll-pe": j()
      }],
      /**
       * Scroll Padding Top
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pt": [{
        "scroll-pt": j()
      }],
      /**
       * Scroll Padding Right
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pr": [{
        "scroll-pr": j()
      }],
      /**
       * Scroll Padding Bottom
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pb": [{
        "scroll-pb": j()
      }],
      /**
       * Scroll Padding Left
       * @see https://tailwindcss.com/docs/scroll-padding
       */
      "scroll-pl": [{
        "scroll-pl": j()
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
        stroke: [vt, At, Zr]
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
const Nu = /* @__PURE__ */ hu(Au);
function Ne(...e) {
  return Nu(eu(e));
}
var Dr = (e) => e.type === "checkbox", er = (e) => e instanceof Date, Ye = (e) => e == null;
const Ga = (e) => typeof e == "object";
var We = (e) => !Ye(e) && !Array.isArray(e) && Ga(e) && !er(e), Ja = (e) => We(e) && e.target ? Dr(e.target) ? e.target.checked : e.target.value : e, ju = (e) => e.substring(0, e.search(/\.\d+(\.|$)/)) || e, Xa = (e, t) => e.has(ju(t)), Pu = (e) => {
  const t = e.constructor && e.constructor.prototype;
  return We(t) && t.hasOwnProperty("isPrototypeOf");
}, Js = typeof window < "u" && typeof window.HTMLElement < "u" && typeof document < "u";
function nt(e) {
  let t;
  const r = Array.isArray(e);
  if (e instanceof Date)
    t = new Date(e);
  else if (e instanceof Set)
    t = new Set(e);
  else if (!(Js && (e instanceof Blob || e instanceof FileList)) && (r || We(e)))
    if (t = r ? [] : {}, !r && !Pu(e))
      t = e;
    else
      for (const n in e)
        e.hasOwnProperty(n) && (t[n] = nt(e[n]));
  else
    return e;
  return t;
}
var Lr = (e) => Array.isArray(e) ? e.filter(Boolean) : [], Le = (e) => e === void 0, I = (e, t, r) => {
  if (!t || !We(e))
    return r;
  const n = Lr(t.split(/[,[\].]+?/)).reduce((s, o) => Ye(s) ? s : s[o], e);
  return Le(n) || n === e ? Le(e[t]) ? r : e[t] : n;
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
}, yt = {
  max: "max",
  min: "min",
  maxLength: "maxLength",
  minLength: "minLength",
  pattern: "pattern",
  required: "required",
  validate: "validate"
}, Ka = ee.createContext(null), kn = () => ee.useContext(Ka), $u = (e) => {
  const { children: t, ...r } = e;
  return ee.createElement(Ka.Provider, { value: r }, t);
};
var Qa = (e, t, r, n = !0) => {
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
}, Qe = (e) => We(e) && !Object.keys(e).length, ei = (e, t, r, n) => {
  r(e);
  const { name: s, ...o } = e;
  return Qe(o) || Object.keys(o).length >= Object.keys(t).length || Object.keys(o).find((a) => t[a] === (!n || st.all));
}, Kr = (e) => Array.isArray(e) ? e : [e], ti = (e, t, r) => !e || !t || e === t || Kr(e).some((n) => n && (r ? n === t : n.startsWith(t) || t.startsWith(n)));
function Xs(e) {
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
function Iu(e) {
  const t = kn(), { control: r = t.control, disabled: n, name: s, exact: o } = e || {}, [a, i] = ee.useState(r._formState), l = ee.useRef(!0), c = ee.useRef({
    isDirty: !1,
    isLoading: !1,
    dirtyFields: !1,
    touchedFields: !1,
    isValidating: !1,
    isValid: !1,
    errors: !1
  }), u = ee.useRef(s);
  return u.current = s, Xs({
    disabled: n,
    next: (d) => l.current && ti(u.current, d.name, o) && ei(d, c.current, r._updateFormState) && i({
      ...r._formState,
      ...d
    }),
    subject: r._subjects.state
  }), ee.useEffect(() => (l.current = !0, c.current.isValid && r._updateValid(!0), () => {
    l.current = !1;
  }), [r]), Qa(a, r, c.current, !1);
}
var lt = (e) => typeof e == "string", ri = (e, t, r, n, s) => lt(e) ? (n && t.watch.add(e), I(r, e, s)) : Array.isArray(e) ? e.map((o) => (n && t.watch.add(o), I(r, o))) : (n && (t.watchAll = !0), r);
function Mu(e) {
  const t = kn(), { control: r = t.control, name: n, defaultValue: s, disabled: o, exact: a } = e || {}, i = ee.useRef(n);
  i.current = n, Xs({
    disabled: o,
    subject: r._subjects.values,
    next: (u) => {
      ti(i.current, u.name, a) && c(nt(ri(i.current, r._names, u.values || r._formValues, !1, s)));
    }
  });
  const [l, c] = ee.useState(r._getWatch(n, s));
  return ee.useEffect(() => r._removeUnmounted()), l;
}
var Ks = (e) => /^\w*$/.test(e), ni = (e) => Lr(e.replace(/["|']|\]/g, "").split(/\.|\[/)), Oe = (e, t, r) => {
  let n = -1;
  const s = Ks(t) ? [t] : ni(t), o = s.length, a = o - 1;
  for (; ++n < o; ) {
    const i = s[n];
    let l = r;
    if (n !== a) {
      const c = e[i];
      l = We(c) || Array.isArray(c) ? c : isNaN(+s[n + 1]) ? {} : [];
    }
    e[i] = l, e = e[i];
  }
  return e;
};
function Du(e) {
  const t = kn(), { name: r, disabled: n, control: s = t.control, shouldUnregister: o } = e, a = Xa(s._names.array, r), i = Mu({
    control: s,
    name: r,
    defaultValue: I(s._formValues, r, I(s._defaultValues, r, e.defaultValue)),
    exact: !0
  }), l = Iu({
    control: s,
    name: r
  }), c = ee.useRef(s.register(r, {
    ...e.rules,
    value: i,
    ...et(e.disabled) ? { disabled: e.disabled } : {}
  }));
  return ee.useEffect(() => {
    const u = s._options.shouldUnregister || o, d = (h, g) => {
      const v = I(s._fields, h);
      v && (v._f.mount = g);
    };
    if (d(r, !0), u) {
      const h = nt(I(s._options.defaultValues, r));
      Oe(s._defaultValues, r, h), Le(I(s._formValues, r)) && Oe(s._formValues, r, h);
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
          value: Ja(u),
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
const Lu = (e) => e.render(Du(e));
var si = (e, t, r, n, s) => t ? {
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
        We(i) && Cr(i, t);
    }
  }
};
var Fu = (e, t, r) => {
  const n = Lr(I(e, r));
  return Oe(n, "root", t[r]), Oe(e, r, n), e;
}, Qs = (e) => e.type === "file", $t = (e) => typeof e == "function", sn = (e) => {
  if (!Js)
    return !1;
  const t = e ? e.ownerDocument : 0;
  return e instanceof (t && t.defaultView ? t.defaultView.HTMLElement : HTMLElement);
}, Qr = (e) => lt(e), eo = (e) => e.type === "radio", on = (e) => e instanceof RegExp;
const zo = {
  value: !1,
  isValid: !1
}, Bo = { value: !0, isValid: !0 };
var oi = (e) => {
  if (Array.isArray(e)) {
    if (e.length > 1) {
      const t = e.filter((r) => r && r.checked && !r.disabled).map((r) => r.value);
      return { value: t, isValid: !!t.length };
    }
    return e[0].checked && !e[0].disabled ? (
      // @ts-expect-error expected to work in the browser
      e[0].attributes && !Le(e[0].attributes.value) ? Le(e[0].value) || e[0].value === "" ? Bo : { value: e[0].value, isValid: !0 } : Bo
    ) : zo;
  }
  return zo;
};
const Wo = {
  isValid: !1,
  value: null
};
var ai = (e) => Array.isArray(e) ? e.reduce((t, r) => r && r.checked && !r.disabled ? {
  isValid: !0,
  value: r.value
} : t, Wo) : Wo;
function Zo(e, t, r = "validate") {
  if (Qr(e) || Array.isArray(e) && e.every(Qr) || et(e) && !e)
    return {
      type: r,
      message: Qr(e) ? e : "",
      ref: t
    };
}
var Kt = (e) => We(e) && !on(e) ? e : {
  value: e,
  message: ""
}, qo = async (e, t, r, n, s) => {
  const { ref: o, refs: a, required: i, maxLength: l, minLength: c, min: u, max: d, pattern: h, validate: g, name: v, valueAsNumber: y, mount: x, disabled: M } = e._f, E = I(t, v);
  if (!x || M)
    return {};
  const C = a ? a[0] : o, k = (j) => {
    n && C.reportValidity && (C.setCustomValidity(et(j) ? "" : j || ""), C.reportValidity());
  }, _ = {}, z = eo(o), te = Dr(o), oe = z || te, W = (y || Qs(o)) && Le(o.value) && Le(E) || sn(o) && o.value === "" || E === "" || Array.isArray(E) && !E.length, J = si.bind(null, v, r, _), be = (j, N, B, ae = yt.maxLength, de = yt.minLength) => {
    const fe = j ? N : B;
    _[v] = {
      type: j ? ae : de,
      message: fe,
      ref: o,
      ...J(j ? ae : de, fe)
    };
  };
  if (s ? !Array.isArray(E) || !E.length : i && (!oe && (W || Ye(E)) || et(E) && !E || te && !oi(a).isValid || z && !ai(a).isValid)) {
    const { value: j, message: N } = Qr(i) ? { value: !!i, message: i } : Kt(i);
    if (j && (_[v] = {
      type: yt.required,
      message: N,
      ref: C,
      ...J(yt.required, N)
    }, !r))
      return k(N), _;
  }
  if (!W && (!Ye(u) || !Ye(d))) {
    let j, N;
    const B = Kt(d), ae = Kt(u);
    if (!Ye(E) && !isNaN(E)) {
      const de = o.valueAsNumber || E && +E;
      Ye(B.value) || (j = de > B.value), Ye(ae.value) || (N = de < ae.value);
    } else {
      const de = o.valueAsDate || new Date(E), fe = (T) => /* @__PURE__ */ new Date((/* @__PURE__ */ new Date()).toDateString() + " " + T), ze = o.type == "time", Me = o.type == "week";
      lt(B.value) && E && (j = ze ? fe(E) > fe(B.value) : Me ? E > B.value : de > new Date(B.value)), lt(ae.value) && E && (N = ze ? fe(E) < fe(ae.value) : Me ? E < ae.value : de < new Date(ae.value));
    }
    if ((j || N) && (be(!!j, B.message, ae.message, yt.max, yt.min), !r))
      return k(_[v].message), _;
  }
  if ((l || c) && !W && (lt(E) || s && Array.isArray(E))) {
    const j = Kt(l), N = Kt(c), B = !Ye(j.value) && E.length > +j.value, ae = !Ye(N.value) && E.length < +N.value;
    if ((B || ae) && (be(B, j.message, N.message), !r))
      return k(_[v].message), _;
  }
  if (h && !W && lt(E)) {
    const { value: j, message: N } = Kt(h);
    if (on(j) && !E.match(j) && (_[v] = {
      type: yt.pattern,
      message: N,
      ref: o,
      ...J(yt.pattern, N)
    }, !r))
      return k(N), _;
  }
  if (g) {
    if ($t(g)) {
      const j = await g(E, t), N = Zo(j, C);
      if (N && (_[v] = {
        ...N,
        ...J(yt.validate, N.message)
      }, !r))
        return k(N.message), _;
    } else if (We(g)) {
      let j = {};
      for (const N in g) {
        if (!Qe(j) && !r)
          break;
        const B = Zo(await g[N](E, t), C, N);
        B && (j = {
          ...B,
          ...J(N, B.message)
        }, k(B.message), r && (_[v] = j));
      }
      if (!Qe(j) && (_[v] = {
        ref: C,
        ...j
      }, !r))
        return _;
    }
  }
  return k(!0), _;
};
function Vu(e, t) {
  const r = t.slice(0, -1).length;
  let n = 0;
  for (; n < r; )
    e = Le(e) ? n++ : e[t[n++]];
  return e;
}
function Uu(e) {
  for (const t in e)
    if (e.hasOwnProperty(t) && !Le(e[t]))
      return !1;
  return !0;
}
function Ze(e, t) {
  const r = Array.isArray(t) ? t : Ks(t) ? [t] : ni(t), n = r.length === 1 ? e : Vu(e, r), s = r.length - 1, o = r[s];
  return n && delete n[o], s !== 0 && (We(n) && Qe(n) || Array.isArray(n) && Uu(n)) && Ze(e, r.slice(0, -1)), e;
}
var es = () => {
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
function Bt(e, t) {
  if (an(e) || an(t))
    return e === t;
  if (er(e) && er(t))
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
      if (er(o) && er(a) || We(o) && We(a) || Array.isArray(o) && Array.isArray(a) ? !Bt(o, a) : o !== a)
        return !1;
    }
  }
  return !0;
}
var ii = (e) => e.type === "select-multiple", zu = (e) => eo(e) || Dr(e), ts = (e) => sn(e) && e.isConnected, li = (e) => {
  for (const t in e)
    if ($t(e[t]))
      return !0;
  return !1;
};
function ln(e, t = {}) {
  const r = Array.isArray(e);
  if (We(e) || r)
    for (const n in e)
      Array.isArray(e[n]) || We(e[n]) && !li(e[n]) ? (t[n] = Array.isArray(e[n]) ? [] : {}, ln(e[n], t[n])) : Ye(e[n]) || (t[n] = !0);
  return t;
}
function ci(e, t, r) {
  const n = Array.isArray(e);
  if (We(e) || n)
    for (const s in e)
      Array.isArray(e[s]) || We(e[s]) && !li(e[s]) ? Le(t) || an(r[s]) ? r[s] = Array.isArray(e[s]) ? ln(e[s], []) : { ...ln(e[s]) } : ci(e[s], Ye(t) ? {} : t[s], r[s]) : r[s] = !Bt(e[s], t[s]);
  return r;
}
var rs = (e, t) => ci(e, t, ln(t)), ui = (e, { valueAsNumber: t, valueAsDate: r, setValueAs: n }) => Le(e) ? e : t ? e === "" ? NaN : e && +e : r && lt(e) ? new Date(e) : n ? n(e) : e;
function ns(e) {
  const t = e.ref;
  if (!(e.refs ? e.refs.every((r) => r.disabled) : t.disabled))
    return Qs(t) ? t.files : eo(t) ? ai(e.refs).value : ii(t) ? [...t.selectedOptions].map(({ value: r }) => r) : Dr(t) ? oi(e.refs).value : ui(Le(t.value) ? e.ref.value : t.value, e);
}
var Bu = (e, t, r, n) => {
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
}, Or = (e) => Le(e) ? e : on(e) ? e.source : We(e) ? on(e.value) ? e.value.source : e.value : e, Wu = (e) => e.mount && (e.required || e.min || e.max || e.maxLength || e.minLength || e.pattern || e.validate);
function Ho(e, t, r) {
  const n = I(e, r);
  if (n || Ks(r))
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
var Zu = (e, t, r, n, s) => s.isOnAll ? !1 : !r && s.isOnTouch ? !(t || e) : (r ? n.isOnBlur : s.isOnBlur) ? !e : (r ? n.isOnChange : s.isOnChange) ? e : !0, qu = (e, t) => !Lr(I(e, t)).length && Ze(e, t);
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
    isLoading: $t(r.defaultValues),
    isValidating: !1,
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    touchedFields: {},
    dirtyFields: {},
    errors: r.errors || {},
    disabled: !1
  }, s = {}, o = We(r.defaultValues) || We(r.values) ? nt(r.defaultValues || r.values) || {} : {}, a = r.shouldUnregister ? {} : nt(o), i = {
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
    values: es(),
    array: es(),
    state: es()
  }, g = e.resetOptions && e.resetOptions.keepDirtyValues, v = Vo(r.mode), y = Vo(r.reValidateMode), x = r.criteriaMode === st.all, M = (m) => (b) => {
    clearTimeout(u), u = setTimeout(m, b);
  }, E = async (m) => {
    if (d.isValid || m) {
      const b = r.resolver ? Qe((await J()).errors) : await j(s, !0);
      b !== n.isValid && h.state.next({
        isValid: b
      });
    }
  }, C = (m) => d.isValidating && h.state.next({
    isValidating: m
  }), k = (m, b = [], w, V, $ = !0, R = !0) => {
    if (V && w) {
      if (i.action = !0, R && Array.isArray(I(s, m))) {
        const Z = w(I(s, m), V.argA, V.argB);
        $ && Oe(s, m, Z);
      }
      if (R && Array.isArray(I(n.errors, m))) {
        const Z = w(I(n.errors, m), V.argA, V.argB);
        $ && Oe(n.errors, m, Z), qu(n.errors, m);
      }
      if (d.touchedFields && R && Array.isArray(I(n.touchedFields, m))) {
        const Z = w(I(n.touchedFields, m), V.argA, V.argB);
        $ && Oe(n.touchedFields, m, Z);
      }
      d.dirtyFields && (n.dirtyFields = rs(o, a)), h.state.next({
        name: m,
        isDirty: B(m, b),
        dirtyFields: n.dirtyFields,
        errors: n.errors,
        isValid: n.isValid
      });
    } else
      Oe(a, m, b);
  }, _ = (m, b) => {
    Oe(n.errors, m, b), h.state.next({
      errors: n.errors
    });
  }, z = (m) => {
    n.errors = m, h.state.next({
      errors: n.errors,
      isValid: !1
    });
  }, te = (m, b, w, V) => {
    const $ = I(s, m);
    if ($) {
      const R = I(a, m, Le(w) ? I(o, m) : w);
      Le(R) || V && V.defaultChecked || b ? Oe(a, m, b ? R : ns($._f)) : fe(m, R), i.mount && E();
    }
  }, oe = (m, b, w, V, $) => {
    let R = !1, Z = !1;
    const _e = {
      name: m
    }, Ve = !!(I(s, m) && I(s, m)._f.disabled);
    if (!w || V) {
      d.isDirty && (Z = n.isDirty, n.isDirty = _e.isDirty = B(), R = Z !== _e.isDirty);
      const Xe = Ve || Bt(I(o, m), b);
      Z = !!(!Ve && I(n.dirtyFields, m)), Xe || Ve ? Ze(n.dirtyFields, m) : Oe(n.dirtyFields, m, !0), _e.dirtyFields = n.dirtyFields, R = R || d.dirtyFields && Z !== !Xe;
    }
    if (w) {
      const Xe = I(n.touchedFields, m);
      Xe || (Oe(n.touchedFields, m, w), _e.touchedFields = n.touchedFields, R = R || d.touchedFields && Xe !== w);
    }
    return R && $ && h.state.next(_e), R ? _e : {};
  }, W = (m, b, w, V) => {
    const $ = I(n.errors, m), R = d.isValid && et(b) && n.isValid !== b;
    if (e.delayError && w ? (c = M(() => _(m, w)), c(e.delayError)) : (clearTimeout(u), c = null, w ? Oe(n.errors, m, w) : Ze(n.errors, m)), (w ? !Bt($, w) : $) || !Qe(V) || R) {
      const Z = {
        ...V,
        ...R && et(b) ? { isValid: b } : {},
        errors: n.errors,
        name: m
      };
      n = {
        ...n,
        ...Z
      }, h.state.next(Z);
    }
    C(!1);
  }, J = async (m) => r.resolver(a, r.context, Bu(m || l.mount, s, r.criteriaMode, r.shouldUseNativeValidation)), be = async (m) => {
    const { errors: b } = await J(m);
    if (m)
      for (const w of m) {
        const V = I(b, w);
        V ? Oe(n.errors, w, V) : Ze(n.errors, w);
      }
    else
      n.errors = b;
    return b;
  }, j = async (m, b, w = {
    valid: !0
  }) => {
    for (const V in m) {
      const $ = m[V];
      if ($) {
        const { _f: R, ...Z } = $;
        if (R) {
          const _e = l.array.has(R.name), Ve = await qo($, a, x, r.shouldUseNativeValidation && !b, _e);
          if (Ve[R.name] && (w.valid = !1, b))
            break;
          !b && (I(Ve, R.name) ? _e ? Fu(n.errors, Ve, R.name) : Oe(n.errors, R.name, Ve[R.name]) : Ze(n.errors, R.name));
        }
        Z && await j(Z, b, w);
      }
    }
    return w.valid;
  }, N = () => {
    for (const m of l.unMount) {
      const b = I(s, m);
      b && (b._f.refs ? b._f.refs.every((w) => !ts(w)) : !ts(b._f.ref)) && ie(m);
    }
    l.unMount = /* @__PURE__ */ new Set();
  }, B = (m, b) => (m && b && Oe(a, m, b), !Bt(H(), o)), ae = (m, b, w) => ri(m, l, {
    ...i.mount ? a : Le(b) ? o : lt(m) ? { [m]: b } : b
  }, w, b), de = (m) => Lr(I(i.mount ? a : o, m, e.shouldUnregister ? I(o, m, []) : [])), fe = (m, b, w = {}) => {
    const V = I(s, m);
    let $ = b;
    if (V) {
      const R = V._f;
      R && (!R.disabled && Oe(a, m, ui(b, R)), $ = sn(R.ref) && Ye(b) ? "" : b, ii(R.ref) ? [...R.ref.options].forEach((Z) => Z.selected = $.includes(Z.value)) : R.refs ? Dr(R.ref) ? R.refs.length > 1 ? R.refs.forEach((Z) => (!Z.defaultChecked || !Z.disabled) && (Z.checked = Array.isArray($) ? !!$.find((_e) => _e === Z.value) : $ === Z.value)) : R.refs[0] && (R.refs[0].checked = !!$) : R.refs.forEach((Z) => Z.checked = Z.value === $) : Qs(R.ref) ? R.ref.value = "" : (R.ref.value = $, R.ref.type || h.values.next({
        name: m,
        values: { ...a }
      })));
    }
    (w.shouldDirty || w.shouldTouch) && oe(m, $, w.shouldTouch, w.shouldDirty, !0), w.shouldValidate && Y(m);
  }, ze = (m, b, w) => {
    for (const V in b) {
      const $ = b[V], R = `${m}.${V}`, Z = I(s, R);
      (l.array.has(m) || !an($) || Z && !Z._f) && !er($) ? ze(R, $, w) : fe(R, $, w);
    }
  }, Me = (m, b, w = {}) => {
    const V = I(s, m), $ = l.array.has(m), R = nt(b);
    Oe(a, m, R), $ ? (h.array.next({
      name: m,
      values: { ...a }
    }), (d.isDirty || d.dirtyFields) && w.shouldDirty && h.state.next({
      name: m,
      dirtyFields: rs(o, a),
      isDirty: B(m, R)
    })) : V && !V._f && !Ye(R) ? ze(m, R, w) : fe(m, R, w), Uo(m, l) && h.state.next({ ...n }), h.values.next({
      name: m,
      values: { ...a }
    }), !i.mount && t();
  }, T = async (m) => {
    const b = m.target;
    let w = b.name, V = !0;
    const $ = I(s, w), R = () => b.type ? ns($._f) : Ja(m), Z = (_e) => {
      V = Number.isNaN(_e) || _e === I(a, w, _e);
    };
    if ($) {
      let _e, Ve;
      const Xe = R(), pt = m.type === nn.BLUR || m.type === nn.FOCUS_OUT, gr = !Wu($._f) && !r.resolver && !I(n.errors, w) && !$._f.deps || Zu(pt, I(n.touchedFields, w), n.isSubmitted, y, v), br = Uo(w, l, pt);
      Oe(a, w, Xe), pt ? ($._f.onBlur && $._f.onBlur(m), c && c(0)) : $._f.onChange && $._f.onChange(m);
      const xr = oe(w, Xe, pt, !1), Un = !Qe(xr) || br;
      if (!pt && h.values.next({
        name: w,
        type: m.type,
        values: { ...a }
      }), gr)
        return d.isValid && E(), Un && h.state.next({ name: w, ...br ? {} : xr });
      if (!pt && br && h.state.next({ ...n }), C(!0), r.resolver) {
        const { errors: zr } = await J([w]);
        if (Z(Xe), V) {
          const zn = Ho(n.errors, s, w), Br = Ho(zr, s, zn.name || w);
          _e = Br.error, w = Br.name, Ve = Qe(zr);
        }
      } else
        _e = (await qo($, a, x, r.shouldUseNativeValidation))[w], Z(Xe), V && (_e ? Ve = !1 : d.isValid && (Ve = await j(s, !0)));
      V && ($._f.deps && Y($._f.deps), W(w, Ve, _e, xr));
    }
  }, P = (m, b) => {
    if (I(n.errors, b) && m.focus)
      return m.focus(), 1;
  }, Y = async (m, b = {}) => {
    let w, V;
    const $ = Kr(m);
    if (C(!0), r.resolver) {
      const R = await be(Le(m) ? m : $);
      w = Qe(R), V = m ? !$.some((Z) => I(R, Z)) : w;
    } else
      m ? (V = (await Promise.all($.map(async (R) => {
        const Z = I(s, R);
        return await j(Z && Z._f ? { [R]: Z } : Z);
      }))).every(Boolean), !(!V && !n.isValid) && E()) : V = w = await j(s);
    return h.state.next({
      ...!lt(m) || d.isValid && w !== n.isValid ? {} : { name: m },
      ...r.resolver || !m ? { isValid: w } : {},
      errors: n.errors,
      isValidating: !1
    }), b.shouldFocus && !V && Cr(s, P, m ? $ : l.mount), V;
  }, H = (m) => {
    const b = {
      ...o,
      ...i.mount ? a : {}
    };
    return Le(m) ? b : lt(m) ? I(b, m) : m.map((w) => I(b, w));
  }, K = (m, b) => ({
    invalid: !!I((b || n).errors, m),
    isDirty: !!I((b || n).dirtyFields, m),
    isTouched: !!I((b || n).touchedFields, m),
    error: I((b || n).errors, m)
  }), pe = (m) => {
    m && Kr(m).forEach((b) => Ze(n.errors, b)), h.state.next({
      errors: m ? n.errors : {}
    });
  }, Q = (m, b, w) => {
    const V = (I(s, m, { _f: {} })._f || {}).ref;
    Oe(n.errors, m, {
      ...b,
      ref: V
    }), h.state.next({
      name: m,
      errors: n.errors,
      isValid: !1
    }), w && w.shouldFocus && V && V.focus && V.focus();
  }, re = (m, b) => $t(m) ? h.values.subscribe({
    next: (w) => m(ae(void 0, b), w)
  }) : ae(m, b, !0), ie = (m, b = {}) => {
    for (const w of m ? Kr(m) : l.mount)
      l.mount.delete(w), l.array.delete(w), b.keepValue || (Ze(s, w), Ze(a, w)), !b.keepError && Ze(n.errors, w), !b.keepDirty && Ze(n.dirtyFields, w), !b.keepTouched && Ze(n.touchedFields, w), !r.shouldUnregister && !b.keepDefaultValue && Ze(o, w);
    h.values.next({
      values: { ...a }
    }), h.state.next({
      ...n,
      ...b.keepDirty ? { isDirty: B() } : {}
    }), !b.keepIsValid && E();
  }, me = ({ disabled: m, name: b, field: w, fields: V, value: $ }) => {
    if (et(m)) {
      const R = m ? void 0 : Le($) ? ns(w ? w._f : I(V, b)._f) : $;
      Oe(a, b, R), oe(b, R, !1, !1, !0);
    }
  }, le = (m, b = {}) => {
    let w = I(s, m);
    const V = et(b.disabled);
    return Oe(s, m, {
      ...w || {},
      _f: {
        ...w && w._f ? w._f : { ref: { name: m } },
        name: m,
        mount: !0,
        ...b
      }
    }), l.mount.add(m), w ? me({
      field: w,
      disabled: b.disabled,
      name: m,
      value: b.value
    }) : te(m, !0, b.value), {
      ...V ? { disabled: b.disabled } : {},
      ...r.progressive ? {
        required: !!b.required,
        min: Or(b.min),
        max: Or(b.max),
        minLength: Or(b.minLength),
        maxLength: Or(b.maxLength),
        pattern: Or(b.pattern)
      } : {},
      name: m,
      onChange: T,
      onBlur: T,
      ref: ($) => {
        if ($) {
          le(m, b), w = I(s, m);
          const R = Le($.value) && $.querySelectorAll && $.querySelectorAll("input,select,textarea")[0] || $, Z = zu(R), _e = w._f.refs || [];
          if (Z ? _e.find((Ve) => Ve === R) : R === w._f.ref)
            return;
          Oe(s, m, {
            _f: {
              ...w._f,
              ...Z ? {
                refs: [
                  ..._e.filter(ts),
                  R,
                  ...Array.isArray(I(o, m)) ? [{}] : []
                ],
                ref: { type: R.type, name: m }
              } : { ref: R }
            }
          }), te(m, !1, void 0, R);
        } else
          w = I(s, m, {}), w._f && (w._f.mount = !1), (r.shouldUnregister || b.shouldUnregister) && !(Xa(l.array, m) && i.action) && l.unMount.add(m);
      }
    };
  }, Be = () => r.shouldFocusError && Cr(s, P, l.mount), D = (m) => {
    et(m) && (h.state.next({ disabled: m }), Cr(s, (b, w) => {
      let V = m;
      const $ = I(s, w);
      $ && et($._f.disabled) && (V || (V = $._f.disabled)), b.disabled = V;
    }, 0, !1));
  }, qe = (m, b) => async (w) => {
    w && (w.preventDefault && w.preventDefault(), w.persist && w.persist());
    let V = nt(a);
    if (h.state.next({
      isSubmitting: !0
    }), r.resolver) {
      const { errors: $, values: R } = await J();
      n.errors = $, V = R;
    } else
      await j(s);
    Ze(n.errors, "root"), Qe(n.errors) ? (h.state.next({
      errors: {}
    }), await m(V, w)) : (b && await b({ ...n.errors }, w), Be(), setTimeout(Be)), h.state.next({
      isSubmitted: !0,
      isSubmitting: !1,
      isSubmitSuccessful: Qe(n.errors),
      submitCount: n.submitCount + 1,
      errors: n.errors
    });
  }, Rt = (m, b = {}) => {
    I(s, m) && (Le(b.defaultValue) ? Me(m, I(o, m)) : (Me(m, b.defaultValue), Oe(o, m, b.defaultValue)), b.keepTouched || Ze(n.touchedFields, m), b.keepDirty || (Ze(n.dirtyFields, m), n.isDirty = b.defaultValue ? B(m, I(o, m)) : B()), b.keepError || (Ze(n.errors, m), d.isValid && E()), h.state.next({ ...n }));
  }, at = (m, b = {}) => {
    const w = m ? nt(m) : o, V = nt(w), $ = m && !Qe(m) ? V : o;
    if (b.keepDefaultValues || (o = w), !b.keepValues) {
      if (b.keepDirtyValues || g)
        for (const R of l.mount)
          I(n.dirtyFields, R) ? Oe($, R, I(a, R)) : Me(R, I($, R));
      else {
        if (Js && Le(m))
          for (const R of l.mount) {
            const Z = I(s, R);
            if (Z && Z._f) {
              const _e = Array.isArray(Z._f.refs) ? Z._f.refs[0] : Z._f.ref;
              if (sn(_e)) {
                const Ve = _e.closest("form");
                if (Ve) {
                  Ve.reset();
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
      isDirty: b.keepDirty ? n.isDirty : !!(b.keepDefaultValues && !Bt(m, o)),
      isSubmitted: b.keepIsSubmitted ? n.isSubmitted : !1,
      dirtyFields: b.keepDirtyValues ? n.dirtyFields : b.keepDefaultValues && m ? rs(o, m) : {},
      touchedFields: b.keepTouched ? n.touchedFields : {},
      errors: b.keepErrors ? n.errors : {},
      isSubmitSuccessful: b.keepIsSubmitSuccessful ? n.isSubmitSuccessful : !1,
      isSubmitting: !1
    });
  }, Lt = (m, b) => at($t(m) ? m(a) : m, b);
  return {
    control: {
      register: le,
      unregister: ie,
      getFieldState: K,
      handleSubmit: qe,
      setError: Q,
      _executeSchema: J,
      _getWatch: ae,
      _getDirty: B,
      _updateValid: E,
      _removeUnmounted: N,
      _updateFieldArray: k,
      _updateDisabledField: me,
      _getFieldArray: de,
      _reset: at,
      _resetDefaultValues: () => $t(r.defaultValues) && r.defaultValues().then((m) => {
        Lt(m, r.resetOptions), h.state.next({
          isLoading: !1
        });
      }),
      _updateFormState: (m) => {
        n = {
          ...n,
          ...m
        };
      },
      _disableForm: D,
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
      set _state(m) {
        i = m;
      },
      get _defaultValues() {
        return o;
      },
      get _names() {
        return l;
      },
      set _names(m) {
        l = m;
      },
      get _formState() {
        return n;
      },
      set _formState(m) {
        n = m;
      },
      get _options() {
        return r;
      },
      set _options(m) {
        r = {
          ...r,
          ...m
        };
      }
    },
    trigger: Y,
    register: le,
    handleSubmit: qe,
    watch: re,
    setValue: Me,
    getValues: H,
    reset: Lt,
    resetField: Rt,
    clearErrors: pe,
    unregister: ie,
    setError: Q,
    setFocus: (m, b = {}) => {
      const w = I(s, m), V = w && w._f;
      if (V) {
        const $ = V.refs ? V.refs[0] : V.ref;
        $.focus && ($.focus(), b.shouldSelect && $.select());
      }
    },
    getFieldState: K
  };
}
function Gu(e = {}) {
  const t = ee.useRef(), r = ee.useRef(), [n, s] = ee.useState({
    isDirty: !1,
    isValidating: !1,
    isLoading: $t(e.defaultValues),
    isSubmitted: !1,
    isSubmitting: !1,
    isSubmitSuccessful: !1,
    isValid: !1,
    submitCount: 0,
    dirtyFields: {},
    touchedFields: {},
    errors: e.errors || {},
    disabled: !1,
    defaultValues: $t(e.defaultValues) ? void 0 : e.defaultValues
  });
  t.current || (t.current = {
    ...Yu(e, () => s((a) => ({ ...a }))),
    formState: n
  });
  const o = t.current.control;
  return o._options = e, Xs({
    subject: o._subjects.state,
    next: (a) => {
      ei(a, o._proxyFormState, o._updateFormState, !0) && s({ ...o._formState });
    }
  }), ee.useEffect(() => o._disableForm(e.disabled), [o, e.disabled]), ee.useEffect(() => {
    if (o._proxyFormState.isDirty) {
      const a = o._getDirty();
      a !== n.isDirty && o._subjects.state.next({
        isDirty: a
      });
    }
  }, [o, n.isDirty]), ee.useEffect(() => {
    e.values && !Bt(e.values, r.current) ? (o._reset(e.values, o._options.resetOptions), r.current = e.values, s((a) => ({ ...a }))) : o._resetDefaultValues();
  }, [e.values, o]), ee.useEffect(() => {
    e.errors && o._setErrors(e.errors);
  }, [e.errors, o]), ee.useEffect(() => {
    o._state.mount || (o._updateValid(), o._state.mount = !0), o._state.watch && (o._state.watch = !1, o._subjects.state.next({ ...o._formState })), o._removeUnmounted();
  }), t.current.formState = Qa(n, o), t.current;
}
var Yo = function(e, t, r) {
  if (e && "reportValidity" in e) {
    var n = I(r, t);
    e.setCustomValidity(n && n.message || ""), e.reportValidity();
  }
}, di = function(e, t) {
  var r = function(s) {
    var o = t.fields[s];
    o && o.ref && "reportValidity" in o.ref ? Yo(o.ref, s, e) : o.refs && o.refs.forEach(function(a) {
      return Yo(a, s, e);
    });
  };
  for (var n in t.fields)
    r(n);
}, Ju = function(e, t) {
  t.shouldUseNativeValidation && di(e, t);
  var r = {};
  for (var n in e) {
    var s = I(t.fields, n), o = Object.assign(e[n] || {}, { ref: s && s.ref });
    if (Xu(t.names || Object.keys(e), n)) {
      var a = Object.assign({}, I(r, n));
      Oe(a, "root", o), Oe(r, n, a);
    } else
      Oe(r, n, o);
  }
  return r;
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
      r[a] = si(a, t, r, s, c ? [].concat(c, n.message) : n.message);
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
            return o.shouldUseNativeValidation && di({}, o), { errors: {}, values: r.raw ? n : c };
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
}, Ts = { exports: {} }, ss, Go;
function to() {
  if (Go)
    return ss;
  Go = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return ss = e, ss;
}
var os, Jo;
function ed() {
  if (Jo)
    return os;
  Jo = 1;
  var e = to();
  function t() {
  }
  function r() {
  }
  return r.resetWarningCache = t, os = function() {
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
  }, os;
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
    var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
    function C(D) {
      return typeof D == "string" || typeof D == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      D === n || D === c || D === o || D === s || D === d || D === h || typeof D == "object" && D !== null && (D.$$typeof === v || D.$$typeof === g || D.$$typeof === a || D.$$typeof === i || D.$$typeof === u || D.$$typeof === x || D.$$typeof === M || D.$$typeof === E || D.$$typeof === y);
    }
    function k(D) {
      if (typeof D == "object" && D !== null) {
        var qe = D.$$typeof;
        switch (qe) {
          case t:
            var Rt = D.type;
            switch (Rt) {
              case l:
              case c:
              case n:
              case o:
              case s:
              case d:
                return Rt;
              default:
                var at = Rt && Rt.$$typeof;
                switch (at) {
                  case i:
                  case u:
                  case v:
                  case g:
                  case a:
                    return at;
                  default:
                    return qe;
                }
            }
          case r:
            return qe;
        }
      }
    }
    var _ = l, z = c, te = i, oe = a, W = t, J = u, be = n, j = v, N = g, B = r, ae = o, de = s, fe = d, ze = !1;
    function Me(D) {
      return ze || (ze = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), T(D) || k(D) === l;
    }
    function T(D) {
      return k(D) === c;
    }
    function P(D) {
      return k(D) === i;
    }
    function Y(D) {
      return k(D) === a;
    }
    function H(D) {
      return typeof D == "object" && D !== null && D.$$typeof === t;
    }
    function K(D) {
      return k(D) === u;
    }
    function pe(D) {
      return k(D) === n;
    }
    function Q(D) {
      return k(D) === v;
    }
    function re(D) {
      return k(D) === g;
    }
    function ie(D) {
      return k(D) === r;
    }
    function me(D) {
      return k(D) === o;
    }
    function le(D) {
      return k(D) === s;
    }
    function Be(D) {
      return k(D) === d;
    }
    Ee.AsyncMode = _, Ee.ConcurrentMode = z, Ee.ContextConsumer = te, Ee.ContextProvider = oe, Ee.Element = W, Ee.ForwardRef = J, Ee.Fragment = be, Ee.Lazy = j, Ee.Memo = N, Ee.Portal = B, Ee.Profiler = ae, Ee.StrictMode = de, Ee.Suspense = fe, Ee.isAsyncMode = Me, Ee.isConcurrentMode = T, Ee.isContextConsumer = P, Ee.isContextProvider = Y, Ee.isElement = H, Ee.isForwardRef = K, Ee.isFragment = pe, Ee.isLazy = Q, Ee.isMemo = re, Ee.isPortal = ie, Ee.isProfiler = me, Ee.isStrictMode = le, Ee.isSuspense = Be, Ee.isValidElementType = C, Ee.typeOf = k;
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
  var e = typeof Symbol == "function" && Symbol.for, t = e ? Symbol.for("react.element") : 60103, r = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, s = e ? Symbol.for("react.strict_mode") : 60108, o = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, i = e ? Symbol.for("react.context") : 60110, l = e ? Symbol.for("react.async_mode") : 60111, c = e ? Symbol.for("react.concurrent_mode") : 60111, u = e ? Symbol.for("react.forward_ref") : 60112, d = e ? Symbol.for("react.suspense") : 60113, h = e ? Symbol.for("react.suspense_list") : 60120, g = e ? Symbol.for("react.memo") : 60115, v = e ? Symbol.for("react.lazy") : 60116, y = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, M = e ? Symbol.for("react.responder") : 60118, E = e ? Symbol.for("react.scope") : 60119;
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
                case v:
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
  function k(_) {
    return C(_) === c;
  }
  return Te.AsyncMode = l, Te.ConcurrentMode = c, Te.ContextConsumer = i, Te.ContextProvider = a, Te.Element = t, Te.ForwardRef = u, Te.Fragment = n, Te.Lazy = v, Te.Memo = g, Te.Portal = r, Te.Profiler = o, Te.StrictMode = s, Te.Suspense = d, Te.isAsyncMode = function(_) {
    return k(_) || C(_) === l;
  }, Te.isConcurrentMode = k, Te.isContextConsumer = function(_) {
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
    return C(_) === v;
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
    return typeof _ == "string" || typeof _ == "function" || _ === n || _ === c || _ === o || _ === s || _ === d || _ === h || typeof _ == "object" && _ !== null && (_.$$typeof === v || _.$$typeof === g || _.$$typeof === a || _.$$typeof === i || _.$$typeof === u || _.$$typeof === x || _.$$typeof === M || _.$$typeof === E || _.$$typeof === y);
  }, Te.typeOf = C, Te;
}
var Qo;
function fi() {
  return Qo || (Qo = 1, process.env.NODE_ENV === "production" ? qr.exports = rd() : qr.exports = td()), qr.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var as, ea;
function nd() {
  if (ea)
    return as;
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
  return as = s() ? Object.assign : function(o, a) {
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
  }, as;
}
var is, ta;
function hi() {
  return ta || (ta = 1, is = Function.call.bind(Object.prototype.hasOwnProperty)), is;
}
var ls, ra;
function sd() {
  if (ra)
    return ls;
  ra = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var t = to(), r = {}, n = hi();
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
          } catch (v) {
            d = v;
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
  }, ls = s, ls;
}
var cs, na;
function od() {
  if (na)
    return cs;
  na = 1;
  var e = fi(), t = nd(), r = to(), n = hi(), s = sd(), o = function() {
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
  return cs = function(i, l) {
    var c = typeof Symbol == "function" && Symbol.iterator, u = "@@iterator";
    function d(T) {
      var P = T && (c && T[c] || T[u]);
      if (typeof P == "function")
        return P;
    }
    var h = "<<anonymous>>", g = {
      array: M("array"),
      bigint: M("bigint"),
      bool: M("boolean"),
      func: M("function"),
      number: M("number"),
      object: M("object"),
      string: M("string"),
      symbol: M("symbol"),
      any: E(),
      arrayOf: C,
      element: k(),
      elementType: _(),
      instanceOf: z,
      node: J(),
      objectOf: oe,
      oneOf: te,
      oneOfType: W,
      shape: j,
      exact: N
    };
    function v(T, P) {
      return T === P ? T !== 0 || 1 / T === 1 / P : T !== T && P !== P;
    }
    function y(T, P) {
      this.message = T, this.data = P && typeof P == "object" ? P : {}, this.stack = "";
    }
    y.prototype = Error.prototype;
    function x(T) {
      if (process.env.NODE_ENV !== "production")
        var P = {}, Y = 0;
      function H(pe, Q, re, ie, me, le, Be) {
        if (ie = ie || h, le = le || re, Be !== r) {
          if (l) {
            var D = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw D.name = "Invariant Violation", D;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var qe = ie + ":" + re;
            !P[qe] && // Avoid spamming the console because they are often not actionable except for lib authors
            Y < 3 && (o(
              "You are manually calling a React.PropTypes validation function for the `" + le + "` prop on `" + ie + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), P[qe] = !0, Y++);
          }
        }
        return Q[re] == null ? pe ? Q[re] === null ? new y("The " + me + " `" + le + "` is marked as required " + ("in `" + ie + "`, but its value is `null`.")) : new y("The " + me + " `" + le + "` is marked as required in " + ("`" + ie + "`, but its value is `undefined`.")) : null : T(Q, re, ie, me, le);
      }
      var K = H.bind(null, !1);
      return K.isRequired = H.bind(null, !0), K;
    }
    function M(T) {
      function P(Y, H, K, pe, Q, re) {
        var ie = Y[H], me = de(ie);
        if (me !== T) {
          var le = fe(ie);
          return new y(
            "Invalid " + pe + " `" + Q + "` of type " + ("`" + le + "` supplied to `" + K + "`, expected ") + ("`" + T + "`."),
            { expectedType: T }
          );
        }
        return null;
      }
      return x(P);
    }
    function E() {
      return x(a);
    }
    function C(T) {
      function P(Y, H, K, pe, Q) {
        if (typeof T != "function")
          return new y("Property `" + Q + "` of component `" + K + "` has invalid PropType notation inside arrayOf.");
        var re = Y[H];
        if (!Array.isArray(re)) {
          var ie = de(re);
          return new y("Invalid " + pe + " `" + Q + "` of type " + ("`" + ie + "` supplied to `" + K + "`, expected an array."));
        }
        for (var me = 0; me < re.length; me++) {
          var le = T(re, me, K, pe, Q + "[" + me + "]", r);
          if (le instanceof Error)
            return le;
        }
        return null;
      }
      return x(P);
    }
    function k() {
      function T(P, Y, H, K, pe) {
        var Q = P[Y];
        if (!i(Q)) {
          var re = de(Q);
          return new y("Invalid " + K + " `" + pe + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement."));
        }
        return null;
      }
      return x(T);
    }
    function _() {
      function T(P, Y, H, K, pe) {
        var Q = P[Y];
        if (!e.isValidElementType(Q)) {
          var re = de(Q);
          return new y("Invalid " + K + " `" + pe + "` of type " + ("`" + re + "` supplied to `" + H + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return x(T);
    }
    function z(T) {
      function P(Y, H, K, pe, Q) {
        if (!(Y[H] instanceof T)) {
          var re = T.name || h, ie = Me(Y[H]);
          return new y("Invalid " + pe + " `" + Q + "` of type " + ("`" + ie + "` supplied to `" + K + "`, expected ") + ("instance of `" + re + "`."));
        }
        return null;
      }
      return x(P);
    }
    function te(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? o(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : o("Invalid argument supplied to oneOf, expected an array.")), a;
      function P(Y, H, K, pe, Q) {
        for (var re = Y[H], ie = 0; ie < T.length; ie++)
          if (v(re, T[ie]))
            return null;
        var me = JSON.stringify(T, function(Be, D) {
          var qe = fe(D);
          return qe === "symbol" ? String(D) : D;
        });
        return new y("Invalid " + pe + " `" + Q + "` of value `" + String(re) + "` " + ("supplied to `" + K + "`, expected one of " + me + "."));
      }
      return x(P);
    }
    function oe(T) {
      function P(Y, H, K, pe, Q) {
        if (typeof T != "function")
          return new y("Property `" + Q + "` of component `" + K + "` has invalid PropType notation inside objectOf.");
        var re = Y[H], ie = de(re);
        if (ie !== "object")
          return new y("Invalid " + pe + " `" + Q + "` of type " + ("`" + ie + "` supplied to `" + K + "`, expected an object."));
        for (var me in re)
          if (n(re, me)) {
            var le = T(re, me, K, pe, Q + "." + me, r);
            if (le instanceof Error)
              return le;
          }
        return null;
      }
      return x(P);
    }
    function W(T) {
      if (!Array.isArray(T))
        return process.env.NODE_ENV !== "production" && o("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var P = 0; P < T.length; P++) {
        var Y = T[P];
        if (typeof Y != "function")
          return o(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + ze(Y) + " at index " + P + "."
          ), a;
      }
      function H(K, pe, Q, re, ie) {
        for (var me = [], le = 0; le < T.length; le++) {
          var Be = T[le], D = Be(K, pe, Q, re, ie, r);
          if (D == null)
            return null;
          D.data && n(D.data, "expectedType") && me.push(D.data.expectedType);
        }
        var qe = me.length > 0 ? ", expected one of type [" + me.join(", ") + "]" : "";
        return new y("Invalid " + re + " `" + ie + "` supplied to " + ("`" + Q + "`" + qe + "."));
      }
      return x(H);
    }
    function J() {
      function T(P, Y, H, K, pe) {
        return B(P[Y]) ? null : new y("Invalid " + K + " `" + pe + "` supplied to " + ("`" + H + "`, expected a ReactNode."));
      }
      return x(T);
    }
    function be(T, P, Y, H, K) {
      return new y(
        (T || "React class") + ": " + P + " type `" + Y + "." + H + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + K + "`."
      );
    }
    function j(T) {
      function P(Y, H, K, pe, Q) {
        var re = Y[H], ie = de(re);
        if (ie !== "object")
          return new y("Invalid " + pe + " `" + Q + "` of type `" + ie + "` " + ("supplied to `" + K + "`, expected `object`."));
        for (var me in T) {
          var le = T[me];
          if (typeof le != "function")
            return be(K, pe, Q, me, fe(le));
          var Be = le(re, me, K, pe, Q + "." + me, r);
          if (Be)
            return Be;
        }
        return null;
      }
      return x(P);
    }
    function N(T) {
      function P(Y, H, K, pe, Q) {
        var re = Y[H], ie = de(re);
        if (ie !== "object")
          return new y("Invalid " + pe + " `" + Q + "` of type `" + ie + "` " + ("supplied to `" + K + "`, expected `object`."));
        var me = t({}, Y[H], T);
        for (var le in me) {
          var Be = T[le];
          if (n(T, le) && typeof Be != "function")
            return be(K, pe, Q, le, fe(Be));
          if (!Be)
            return new y(
              "Invalid " + pe + " `" + Q + "` key `" + le + "` supplied to `" + K + "`.\nBad object: " + JSON.stringify(Y[H], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(T), null, "  ")
            );
          var D = Be(re, le, K, pe, Q + "." + le, r);
          if (D)
            return D;
        }
        return null;
      }
      return x(P);
    }
    function B(T) {
      switch (typeof T) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !T;
        case "object":
          if (Array.isArray(T))
            return T.every(B);
          if (T === null || i(T))
            return !0;
          var P = d(T);
          if (P) {
            var Y = P.call(T), H;
            if (P !== T.entries) {
              for (; !(H = Y.next()).done; )
                if (!B(H.value))
                  return !1;
            } else
              for (; !(H = Y.next()).done; ) {
                var K = H.value;
                if (K && !B(K[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function ae(T, P) {
      return T === "symbol" ? !0 : P ? P["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && P instanceof Symbol : !1;
    }
    function de(T) {
      var P = typeof T;
      return Array.isArray(T) ? "array" : T instanceof RegExp ? "object" : ae(P, T) ? "symbol" : P;
    }
    function fe(T) {
      if (typeof T > "u" || T === null)
        return "" + T;
      var P = de(T);
      if (P === "object") {
        if (T instanceof Date)
          return "date";
        if (T instanceof RegExp)
          return "regexp";
      }
      return P;
    }
    function ze(T) {
      var P = fe(T);
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
    function Me(T) {
      return !T.constructor || !T.constructor.name ? h : T.constructor.name;
    }
    return g.checkPropTypes = s, g.resetWarningCache = s.resetWarningCache, g.PropTypes = g, g;
  }, cs;
}
if (process.env.NODE_ENV !== "production") {
  var ad = fi(), id = !0;
  Ts.exports = od()(ad.isElement, id);
} else
  Ts.exports = ed()();
var ld = Ts.exports;
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
}, ud = Object.defineProperty, dd = Object.defineProperties, fd = Object.getOwnPropertyDescriptors, cn = Object.getOwnPropertySymbols, pi = Object.prototype.hasOwnProperty, mi = Object.prototype.propertyIsEnumerable, sa = (e, t, r) => t in e ? ud(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, oa = (e, t) => {
  for (var r in t || (t = {}))
    pi.call(t, r) && sa(e, r, t[r]);
  if (cn)
    for (var r of cn(t))
      mi.call(t, r) && sa(e, r, t[r]);
  return e;
}, hd = (e, t) => dd(e, fd(t)), pd = (e, t) => {
  var r = {};
  for (var n in e)
    pi.call(e, n) && t.indexOf(n) < 0 && (r[n] = e[n]);
  if (e != null && cn)
    for (var n of cn(e))
      t.indexOf(n) < 0 && mi.call(e, n) && (r[n] = e[n]);
  return r;
}, Tt = (e, t, r) => {
  const n = Ie(
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
}, md = Tt("book", "IconBook", [
  ["path", { d: "M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-0" }],
  ["path", { d: "M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0", key: "svg-1" }],
  ["path", { d: "M3 6l0 13", key: "svg-2" }],
  ["path", { d: "M12 6l0 13", key: "svg-3" }],
  ["path", { d: "M21 6l0 13", key: "svg-4" }]
]), vd = Tt("chalkboard", "IconChalkboard", [
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
]), us = Tt(
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
), aa = Tt("info-square", "IconInfoSquare", [
  ["path", { d: "M12 9h.01", key: "svg-0" }],
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-1"
    }
  ],
  ["path", { d: "M11 12h1v4h1", key: "svg-2" }]
]), yd = Tt("menu-deep", "IconMenuDeep", [
  ["path", { d: "M4 6h16", key: "svg-0" }],
  ["path", { d: "M7 12h13", key: "svg-1" }],
  ["path", { d: "M10 18h10", key: "svg-2" }]
]), gd = Tt("phone-call", "IconPhoneCall", [
  [
    "path",
    {
      d: "M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2",
      key: "svg-0"
    }
  ],
  ["path", { d: "M15 7a2 2 0 0 1 2 2", key: "svg-1" }],
  ["path", { d: "M15 3a6 6 0 0 1 6 6", key: "svg-2" }]
]), bd = Tt("square-check", "IconSquareCheck", [
  [
    "path",
    {
      d: "M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 12l2 2l4 -4", key: "svg-1" }]
]), xd = Tt("square-x", "IconSquareX", [
  [
    "path",
    {
      d: "M3 5a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-14z",
      key: "svg-0"
    }
  ],
  ["path", { d: "M9 9l6 6m0 -6l-6 6", key: "svg-1" }]
]), ds = Tt("wash-dryclean", "IconWashDryclean", [
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
}, A = Se.arrayToEnum([
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
class ut extends Error {
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
ut.create = (e) => new ut(e);
const un = (e, t) => {
  let r;
  switch (e.code) {
    case A.invalid_type:
      e.received === F.undefined ? r = "Required" : r = `Expected ${e.expected}, received ${e.received}`;
      break;
    case A.invalid_literal:
      r = `Invalid literal value, expected ${JSON.stringify(e.expected, Se.jsonStringifyReplacer)}`;
      break;
    case A.unrecognized_keys:
      r = `Unrecognized key(s) in object: ${Se.joinValues(e.keys, ", ")}`;
      break;
    case A.invalid_union:
      r = "Invalid input";
      break;
    case A.invalid_union_discriminator:
      r = `Invalid discriminator value. Expected ${Se.joinValues(e.options)}`;
      break;
    case A.invalid_enum_value:
      r = `Invalid enum value. Expected ${Se.joinValues(e.options)}, received '${e.received}'`;
      break;
    case A.invalid_arguments:
      r = "Invalid function arguments";
      break;
    case A.invalid_return_type:
      r = "Invalid function return type";
      break;
    case A.invalid_date:
      r = "Invalid date";
      break;
    case A.invalid_string:
      typeof e.validation == "object" ? "includes" in e.validation ? (r = `Invalid input: must include "${e.validation.includes}"`, typeof e.validation.position == "number" && (r = `${r} at one or more positions greater than or equal to ${e.validation.position}`)) : "startsWith" in e.validation ? r = `Invalid input: must start with "${e.validation.startsWith}"` : "endsWith" in e.validation ? r = `Invalid input: must end with "${e.validation.endsWith}"` : Se.assertNever(e.validation) : e.validation !== "regex" ? r = `Invalid ${e.validation}` : r = "Invalid";
      break;
    case A.too_small:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "more than"} ${e.minimum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at least" : "over"} ${e.minimum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${e.minimum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly equal to " : e.inclusive ? "greater than or equal to " : "greater than "}${new Date(Number(e.minimum))}` : r = "Invalid input";
      break;
    case A.too_big:
      e.type === "array" ? r = `Array must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "less than"} ${e.maximum} element(s)` : e.type === "string" ? r = `String must contain ${e.exact ? "exactly" : e.inclusive ? "at most" : "under"} ${e.maximum} character(s)` : e.type === "number" ? r = `Number must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "bigint" ? r = `BigInt must be ${e.exact ? "exactly" : e.inclusive ? "less than or equal to" : "less than"} ${e.maximum}` : e.type === "date" ? r = `Date must be ${e.exact ? "exactly" : e.inclusive ? "smaller than or equal to" : "smaller than"} ${new Date(Number(e.maximum))}` : r = "Invalid input";
      break;
    case A.custom:
      r = "Invalid input";
      break;
    case A.invalid_intersection_types:
      r = "Intersection results could not be merged";
      break;
    case A.not_multiple_of:
      r = `Number must be a multiple of ${e.multipleOf}`;
      break;
    case A.not_finite:
      r = "Number must be finite";
      break;
    default:
      r = t.defaultError, Se.assertNever(e);
  }
  return { message: r };
};
let _d = un;
function Os() {
  return _d;
}
const Cs = (e) => {
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
  const r = Cs({
    issueData: t,
    data: e.data,
    path: e.path,
    errorMaps: [
      e.common.contextualErrorMap,
      e.schemaErrorMap,
      Os(),
      un
      // then global default map
    ].filter((n) => !!n)
  });
  e.common.issues.push(r);
}
class Ge {
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
    return Ge.mergeObjectSync(t, n);
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
}), wd = (e) => ({ status: "dirty", value: e }), Je = (e) => ({ status: "valid", value: e }), la = (e) => e.status === "aborted", ca = (e) => e.status === "dirty", dn = (e) => e.status === "valid", Rs = (e) => typeof Promise < "u" && e instanceof Promise;
var q;
(function(e) {
  e.errToObj = (t) => typeof t == "string" ? { message: t } : t || {}, e.toString = (t) => typeof t == "string" ? t : t == null ? void 0 : t.message;
})(q || (q = {}));
class ft {
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
      const r = new ut(e.common.issues);
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
      status: new Ge(),
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
    if (Rs(r))
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
    }, s = this._parse({ data: t, path: n.path, parent: n }), o = await (Rs(s) ? s : Promise.resolve(s));
    return ua(n, o);
  }
  refine(t, r) {
    const n = (s) => typeof r == "string" || typeof r > "u" ? { message: r } : typeof r == "function" ? r(s) : r;
    return this._refinement((s, o) => {
      const a = t(s), i = () => o.addIssue({
        code: A.custom,
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
    return Mt.create(this, this._def);
  }
  nullable() {
    return fr.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return dt.create(this, this._def);
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
    return new Is({
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
    return An.create(this, t);
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
let fs;
const kd = /^(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))$/, Ad = /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/, Nd = (e) => e.precision ? e.offset ? new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}(([+-]\\d{2}(:?\\d{2})?)|Z)$`) : new RegExp(`^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}\\.\\d{${e.precision}}Z$`) : e.precision === 0 ? e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}Z$") : e.offset ? new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?(([+-]\\d{2}(:?\\d{2})?)|Z)$") : new RegExp("^\\d{4}-\\d{2}-\\d{2}T\\d{2}:\\d{2}:\\d{2}(\\.\\d+)?Z$");
function jd(e, t) {
  return !!((t === "v4" || !t) && kd.test(e) || (t === "v6" || !t) && Ad.test(e));
}
class bt extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = String(t.data)), this._getType(t) !== F.string) {
      const o = this._getOrReturnCtx(t);
      return U(
        o,
        {
          code: A.invalid_type,
          expected: F.string,
          received: o.parsedType
        }
        //
      ), se;
    }
    const n = new Ge();
    let s;
    for (const o of this._def.checks)
      if (o.kind === "min")
        t.data.length < o.value && (s = this._getOrReturnCtx(t, s), U(s, {
          code: A.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "max")
        t.data.length > o.value && (s = this._getOrReturnCtx(t, s), U(s, {
          code: A.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !1,
          message: o.message
        }), n.dirty());
      else if (o.kind === "length") {
        const a = t.data.length > o.value, i = t.data.length < o.value;
        (a || i) && (s = this._getOrReturnCtx(t, s), a ? U(s, {
          code: A.too_big,
          maximum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }) : i && U(s, {
          code: A.too_small,
          minimum: o.value,
          type: "string",
          inclusive: !0,
          exact: !0,
          message: o.message
        }), n.dirty());
      } else if (o.kind === "email")
        Cd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "email",
          code: A.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "emoji")
        fs || (fs = new RegExp(Rd, "u")), fs.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "emoji",
          code: A.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "uuid")
        Od.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "uuid",
          code: A.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid")
        Sd.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "cuid",
          code: A.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "cuid2")
        Ed.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "cuid2",
          code: A.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "ulid")
        Td.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "ulid",
          code: A.invalid_string,
          message: o.message
        }), n.dirty());
      else if (o.kind === "url")
        try {
          new URL(t.data);
        } catch {
          s = this._getOrReturnCtx(t, s), U(s, {
            validation: "url",
            code: A.invalid_string,
            message: o.message
          }), n.dirty();
        }
      else
        o.kind === "regex" ? (o.regex.lastIndex = 0, o.regex.test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "regex",
          code: A.invalid_string,
          message: o.message
        }), n.dirty())) : o.kind === "trim" ? t.data = t.data.trim() : o.kind === "includes" ? t.data.includes(o.value, o.position) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: A.invalid_string,
          validation: { includes: o.value, position: o.position },
          message: o.message
        }), n.dirty()) : o.kind === "toLowerCase" ? t.data = t.data.toLowerCase() : o.kind === "toUpperCase" ? t.data = t.data.toUpperCase() : o.kind === "startsWith" ? t.data.startsWith(o.value) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: A.invalid_string,
          validation: { startsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "endsWith" ? t.data.endsWith(o.value) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: A.invalid_string,
          validation: { endsWith: o.value },
          message: o.message
        }), n.dirty()) : o.kind === "datetime" ? Nd(o).test(t.data) || (s = this._getOrReturnCtx(t, s), U(s, {
          code: A.invalid_string,
          validation: "datetime",
          message: o.message
        }), n.dirty()) : o.kind === "ip" ? jd(t.data, o.version) || (s = this._getOrReturnCtx(t, s), U(s, {
          validation: "ip",
          code: A.invalid_string,
          message: o.message
        }), n.dirty()) : Se.assertNever(o);
    return { status: n.value, value: t.data };
  }
  _regex(t, r, n) {
    return this.refinement((s) => t.test(s), {
      validation: r,
      code: A.invalid_string,
      ...q.errToObj(n)
    });
  }
  _addCheck(t) {
    return new bt({
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
    return new bt({
      ...this._def,
      checks: [...this._def.checks, { kind: "trim" }]
    });
  }
  toLowerCase() {
    return new bt({
      ...this._def,
      checks: [...this._def.checks, { kind: "toLowerCase" }]
    });
  }
  toUpperCase() {
    return new bt({
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
bt.create = (e) => {
  var t;
  return new bt({
    checks: [],
    typeName: G.ZodString,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
function Pd(e, t) {
  const r = (e.toString().split(".")[1] || "").length, n = (t.toString().split(".")[1] || "").length, s = r > n ? r : n, o = parseInt(e.toFixed(s).replace(".", "")), a = parseInt(t.toFixed(s).replace(".", ""));
  return o % a / Math.pow(10, s);
}
class cr extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte, this.step = this.multipleOf;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = Number(t.data)), this._getType(t) !== F.number) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: A.invalid_type,
        expected: F.number,
        received: o.parsedType
      }), se;
    }
    let n;
    const s = new Ge();
    for (const o of this._def.checks)
      o.kind === "int" ? Se.isInteger(t.data) || (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.invalid_type,
        expected: "integer",
        received: "float",
        message: o.message
      }), s.dirty()) : o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.too_small,
        minimum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.too_big,
        maximum: o.value,
        type: "number",
        inclusive: o.inclusive,
        exact: !1,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? Pd(t.data, o.value) !== 0 && (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.not_multiple_of,
        multipleOf: o.value,
        message: o.message
      }), s.dirty()) : o.kind === "finite" ? Number.isFinite(t.data) || (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.not_finite,
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
cr.create = (e) => new cr({
  checks: [],
  typeName: G.ZodNumber,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class ur extends he {
  constructor() {
    super(...arguments), this.min = this.gte, this.max = this.lte;
  }
  _parse(t) {
    if (this._def.coerce && (t.data = BigInt(t.data)), this._getType(t) !== F.bigint) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: A.invalid_type,
        expected: F.bigint,
        received: o.parsedType
      }), se;
    }
    let n;
    const s = new Ge();
    for (const o of this._def.checks)
      o.kind === "min" ? (o.inclusive ? t.data < o.value : t.data <= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.too_small,
        type: "bigint",
        minimum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "max" ? (o.inclusive ? t.data > o.value : t.data >= o.value) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.too_big,
        type: "bigint",
        maximum: o.value,
        inclusive: o.inclusive,
        message: o.message
      }), s.dirty()) : o.kind === "multipleOf" ? t.data % o.value !== BigInt(0) && (n = this._getOrReturnCtx(t, n), U(n, {
        code: A.not_multiple_of,
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
    return new ur({
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
    return new ur({
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
ur.create = (e) => {
  var t;
  return new ur({
    checks: [],
    typeName: G.ZodBigInt,
    coerce: (t = e == null ? void 0 : e.coerce) !== null && t !== void 0 ? t : !1,
    ...ne(e)
  });
};
class ks extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = !!t.data), this._getType(t) !== F.boolean) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: A.invalid_type,
        expected: F.boolean,
        received: n.parsedType
      }), se;
    }
    return Je(t.data);
  }
}
ks.create = (e) => new ks({
  typeName: G.ZodBoolean,
  coerce: (e == null ? void 0 : e.coerce) || !1,
  ...ne(e)
});
class Nr extends he {
  _parse(t) {
    if (this._def.coerce && (t.data = new Date(t.data)), this._getType(t) !== F.date) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: A.invalid_type,
        expected: F.date,
        received: o.parsedType
      }), se;
    }
    if (isNaN(t.data.getTime())) {
      const o = this._getOrReturnCtx(t);
      return U(o, {
        code: A.invalid_date
      }), se;
    }
    const n = new Ge();
    let s;
    for (const o of this._def.checks)
      o.kind === "min" ? t.data.getTime() < o.value && (s = this._getOrReturnCtx(t, s), U(s, {
        code: A.too_small,
        message: o.message,
        inclusive: !0,
        exact: !1,
        minimum: o.value,
        type: "date"
      }), n.dirty()) : o.kind === "max" ? t.data.getTime() > o.value && (s = this._getOrReturnCtx(t, s), U(s, {
        code: A.too_big,
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
    return new Nr({
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
Nr.create = (e) => new Nr({
  checks: [],
  coerce: (e == null ? void 0 : e.coerce) || !1,
  typeName: G.ZodDate,
  ...ne(e)
});
class As extends he {
  _parse(t) {
    if (this._getType(t) !== F.symbol) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: A.invalid_type,
        expected: F.symbol,
        received: n.parsedType
      }), se;
    }
    return Je(t.data);
  }
}
As.create = (e) => new As({
  typeName: G.ZodSymbol,
  ...ne(e)
});
class fn extends he {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: A.invalid_type,
        expected: F.undefined,
        received: n.parsedType
      }), se;
    }
    return Je(t.data);
  }
}
fn.create = (e) => new fn({
  typeName: G.ZodUndefined,
  ...ne(e)
});
class hn extends he {
  _parse(t) {
    if (this._getType(t) !== F.null) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: A.invalid_type,
        expected: F.null,
        received: n.parsedType
      }), se;
    }
    return Je(t.data);
  }
}
hn.create = (e) => new hn({
  typeName: G.ZodNull,
  ...ne(e)
});
class Ns extends he {
  constructor() {
    super(...arguments), this._any = !0;
  }
  _parse(t) {
    return Je(t.data);
  }
}
Ns.create = (e) => new Ns({
  typeName: G.ZodAny,
  ...ne(e)
});
class rr extends he {
  constructor() {
    super(...arguments), this._unknown = !0;
  }
  _parse(t) {
    return Je(t.data);
  }
}
rr.create = (e) => new rr({
  typeName: G.ZodUnknown,
  ...ne(e)
});
class Dt extends he {
  _parse(t) {
    const r = this._getOrReturnCtx(t);
    return U(r, {
      code: A.invalid_type,
      expected: F.never,
      received: r.parsedType
    }), se;
  }
}
Dt.create = (e) => new Dt({
  typeName: G.ZodNever,
  ...ne(e)
});
class js extends he {
  _parse(t) {
    if (this._getType(t) !== F.undefined) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: A.invalid_type,
        expected: F.void,
        received: n.parsedType
      }), se;
    }
    return Je(t.data);
  }
}
js.create = (e) => new js({
  typeName: G.ZodVoid,
  ...ne(e)
});
class dt extends he {
  _parse(t) {
    const { ctx: r, status: n } = this._processInputParams(t), s = this._def;
    if (r.parsedType !== F.array)
      return U(r, {
        code: A.invalid_type,
        expected: F.array,
        received: r.parsedType
      }), se;
    if (s.exactLength !== null) {
      const a = r.data.length > s.exactLength.value, i = r.data.length < s.exactLength.value;
      (a || i) && (U(r, {
        code: a ? A.too_big : A.too_small,
        minimum: i ? s.exactLength.value : void 0,
        maximum: a ? s.exactLength.value : void 0,
        type: "array",
        inclusive: !0,
        exact: !0,
        message: s.exactLength.message
      }), n.dirty());
    }
    if (s.minLength !== null && r.data.length < s.minLength.value && (U(r, {
      code: A.too_small,
      minimum: s.minLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.minLength.message
    }), n.dirty()), s.maxLength !== null && r.data.length > s.maxLength.value && (U(r, {
      code: A.too_big,
      maximum: s.maxLength.value,
      type: "array",
      inclusive: !0,
      exact: !1,
      message: s.maxLength.message
    }), n.dirty()), r.common.async)
      return Promise.all([...r.data].map((a, i) => s.type._parseAsync(new ft(r, a, r.path, i)))).then((a) => Ge.mergeArray(n, a));
    const o = [...r.data].map((a, i) => s.type._parseSync(new ft(r, a, r.path, i)));
    return Ge.mergeArray(n, o);
  }
  get element() {
    return this._def.type;
  }
  min(t, r) {
    return new dt({
      ...this._def,
      minLength: { value: t, message: q.toString(r) }
    });
  }
  max(t, r) {
    return new dt({
      ...this._def,
      maxLength: { value: t, message: q.toString(r) }
    });
  }
  length(t, r) {
    return new dt({
      ...this._def,
      exactLength: { value: t, message: q.toString(r) }
    });
  }
  nonempty(t) {
    return this.min(1, t);
  }
}
dt.create = (e, t) => new dt({
  type: e,
  minLength: null,
  maxLength: null,
  exactLength: null,
  typeName: G.ZodArray,
  ...ne(t)
});
function Qt(e) {
  if (e instanceof De) {
    const t = {};
    for (const r in e.shape) {
      const n = e.shape[r];
      t[r] = Mt.create(Qt(n));
    }
    return new De({
      ...e._def,
      shape: () => t
    });
  } else
    return e instanceof dt ? new dt({
      ...e._def,
      type: Qt(e.element)
    }) : e instanceof Mt ? Mt.create(Qt(e.unwrap())) : e instanceof fr ? fr.create(Qt(e.unwrap())) : e instanceof St ? St.create(e.items.map((t) => Qt(t))) : e;
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
        code: A.invalid_type,
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
        value: u._parse(new ft(s, d, s.path, c)),
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
          code: A.unrecognized_keys,
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
            new ft(s, d, s.path, u)
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
    }).then((c) => Ge.mergeObjectSync(n, c)) : Ge.mergeObjectSync(n, l);
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
    return Qt(this);
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
        for (; o instanceof Mt; )
          o = o._def.innerType;
        r[n] = o;
      }
    }), new De({
      ...this._def,
      shape: () => r
    });
  }
  keyof() {
    return vi(Se.objectKeys(this.shape));
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
      const a = o.map((i) => new ut(i.ctx.common.issues));
      return U(r, {
        code: A.invalid_union,
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
      const i = a.map((l) => new ut(l));
      return U(r, {
        code: A.invalid_union,
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
const en = (e) => e instanceof yn ? en(e.schema) : e instanceof Et ? en(e.innerType()) : e instanceof gn ? [e.value] : e instanceof Ht ? e.options : e instanceof bn ? Object.keys(e.enum) : e instanceof xn ? en(e._def.innerType) : e instanceof fn ? [void 0] : e instanceof hn ? [null] : null;
class ro extends he {
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.object)
      return U(r, {
        code: A.invalid_type,
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
      code: A.invalid_union_discriminator,
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
    return new ro({
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
        code: A.invalid_intersection_types
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
class St extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.array)
      return U(n, {
        code: A.invalid_type,
        expected: F.array,
        received: n.parsedType
      }), se;
    if (n.data.length < this._def.items.length)
      return U(n, {
        code: A.too_small,
        minimum: this._def.items.length,
        inclusive: !0,
        exact: !1,
        type: "array"
      }), se;
    !this._def.rest && n.data.length > this._def.items.length && (U(n, {
      code: A.too_big,
      maximum: this._def.items.length,
      inclusive: !0,
      exact: !1,
      type: "array"
    }), r.dirty());
    const o = [...n.data].map((a, i) => {
      const l = this._def.items[i] || this._def.rest;
      return l ? l._parse(new ft(n, a, n.path, i)) : null;
    }).filter((a) => !!a);
    return n.common.async ? Promise.all(o).then((a) => Ge.mergeArray(r, a)) : Ge.mergeArray(r, o);
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
        code: A.invalid_type,
        expected: F.object,
        received: n.parsedType
      }), se;
    const s = [], o = this._def.keyType, a = this._def.valueType;
    for (const i in n.data)
      s.push({
        key: o._parse(new ft(n, i, n.path, i)),
        value: a._parse(new ft(n, n.data[i], n.path, i))
      });
    return n.common.async ? Ge.mergeObjectAsync(r, s) : Ge.mergeObjectSync(r, s);
  }
  get element() {
    return this._def.valueType;
  }
  static create(t, r, n) {
    return r instanceof he ? new vn({
      keyType: t,
      valueType: r,
      typeName: G.ZodRecord,
      ...ne(n)
    }) : new vn({
      keyType: bt.create(),
      valueType: t,
      typeName: G.ZodRecord,
      ...ne(r)
    });
  }
}
class $s extends he {
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
        code: A.invalid_type,
        expected: F.map,
        received: n.parsedType
      }), se;
    const s = this._def.keyType, o = this._def.valueType, a = [...n.data.entries()].map(([i, l], c) => ({
      key: s._parse(new ft(n, i, n.path, [c, "key"])),
      value: o._parse(new ft(n, l, n.path, [c, "value"]))
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
$s.create = (e, t, r) => new $s({
  valueType: t,
  keyType: e,
  typeName: G.ZodMap,
  ...ne(r)
});
class dr extends he {
  _parse(t) {
    const { status: r, ctx: n } = this._processInputParams(t);
    if (n.parsedType !== F.set)
      return U(n, {
        code: A.invalid_type,
        expected: F.set,
        received: n.parsedType
      }), se;
    const s = this._def;
    s.minSize !== null && n.data.size < s.minSize.value && (U(n, {
      code: A.too_small,
      minimum: s.minSize.value,
      type: "set",
      inclusive: !0,
      exact: !1,
      message: s.minSize.message
    }), r.dirty()), s.maxSize !== null && n.data.size > s.maxSize.value && (U(n, {
      code: A.too_big,
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
    const i = [...n.data.values()].map((l, c) => o._parse(new ft(n, l, n.path, c)));
    return n.common.async ? Promise.all(i).then((l) => a(l)) : a(i);
  }
  min(t, r) {
    return new dr({
      ...this._def,
      minSize: { value: t, message: q.toString(r) }
    });
  }
  max(t, r) {
    return new dr({
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
dr.create = (e, t) => new dr({
  valueType: e,
  minSize: null,
  maxSize: null,
  typeName: G.ZodSet,
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
        code: A.invalid_type,
        expected: F.function,
        received: r.parsedType
      }), se;
    function n(i, l) {
      return Cs({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Os(),
          un
        ].filter((c) => !!c),
        issueData: {
          code: A.invalid_arguments,
          argumentsError: l
        }
      });
    }
    function s(i, l) {
      return Cs({
        data: i,
        path: r.path,
        errorMaps: [
          r.common.contextualErrorMap,
          r.schemaErrorMap,
          Os(),
          un
        ].filter((c) => !!c),
        issueData: {
          code: A.invalid_return_type,
          returnTypeError: l
        }
      });
    }
    const o = { errorMap: r.common.contextualErrorMap }, a = r.data;
    if (this._def.returns instanceof jr) {
      const i = this;
      return Je(async function(...l) {
        const c = new ut([]), u = await i._def.args.parseAsync(l, o).catch((g) => {
          throw c.addIssue(n(l, g)), c;
        }), d = await Reflect.apply(a, this, u);
        return await i._def.returns._def.type.parseAsync(d, o).catch((g) => {
          throw c.addIssue(s(d, g)), c;
        });
      });
    } else {
      const i = this;
      return Je(function(...l) {
        const c = i._def.args.safeParse(l, o);
        if (!c.success)
          throw new ut([n(l, c.error)]);
        const u = Reflect.apply(a, this, c.data), d = i._def.returns.safeParse(u, o);
        if (!d.success)
          throw new ut([s(u, d.error)]);
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
      args: St.create(t).rest(rr.create())
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
      args: t || St.create([]).rest(rr.create()),
      returns: r || rr.create(),
      typeName: G.ZodFunction,
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
  typeName: G.ZodLazy,
  ...ne(t)
});
class gn extends he {
  _parse(t) {
    if (t.data !== this._def.value) {
      const r = this._getOrReturnCtx(t);
      return U(r, {
        received: r.data,
        code: A.invalid_literal,
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
function vi(e, t) {
  return new Ht({
    values: e,
    typeName: G.ZodEnum,
    ...ne(t)
  });
}
class Ht extends he {
  _parse(t) {
    if (typeof t.data != "string") {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return U(r, {
        expected: Se.joinValues(n),
        received: r.parsedType,
        code: A.invalid_type
      }), se;
    }
    if (this._def.values.indexOf(t.data) === -1) {
      const r = this._getOrReturnCtx(t), n = this._def.values;
      return U(r, {
        received: r.data,
        code: A.invalid_enum_value,
        options: n
      }), se;
    }
    return Je(t.data);
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
    return Ht.create(t);
  }
  exclude(t) {
    return Ht.create(this.options.filter((r) => !t.includes(r)));
  }
}
Ht.create = vi;
class bn extends he {
  _parse(t) {
    const r = Se.getValidEnumValues(this._def.values), n = this._getOrReturnCtx(t);
    if (n.parsedType !== F.string && n.parsedType !== F.number) {
      const s = Se.objectValues(r);
      return U(n, {
        expected: Se.joinValues(s),
        received: n.parsedType,
        code: A.invalid_type
      }), se;
    }
    if (r.indexOf(t.data) === -1) {
      const s = Se.objectValues(r);
      return U(n, {
        received: n.data,
        code: A.invalid_enum_value,
        options: s
      }), se;
    }
    return Je(t.data);
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
class jr extends he {
  unwrap() {
    return this._def.type;
  }
  _parse(t) {
    const { ctx: r } = this._processInputParams(t);
    if (r.parsedType !== F.promise && r.common.async === !1)
      return U(r, {
        code: A.invalid_type,
        expected: F.promise,
        received: r.parsedType
      }), se;
    const n = r.parsedType === F.promise ? r.data : Promise.resolve(r.data);
    return Je(n.then((s) => this._def.type.parseAsync(s, {
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
class Et extends he {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === G.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
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
class Mt extends he {
  _parse(t) {
    return this._getType(t) === F.undefined ? Je(void 0) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Mt.create = (e, t) => new Mt({
  innerType: e,
  typeName: G.ZodOptional,
  ...ne(t)
});
class fr extends he {
  _parse(t) {
    return this._getType(t) === F.null ? Je(null) : this._def.innerType._parse(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
fr.create = (e, t) => new fr({
  innerType: e,
  typeName: G.ZodNullable,
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
  typeName: G.ZodDefault,
  defaultValue: typeof t.default == "function" ? t.default : () => t.default,
  ...ne(t)
});
class Is extends he {
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
    return Rs(s) ? s.then((o) => ({
      status: "valid",
      value: o.status === "valid" ? o.value : this._def.catchValue({
        get error() {
          return new ut(n.common.issues);
        },
        input: n.data
      })
    })) : {
      status: "valid",
      value: s.status === "valid" ? s.value : this._def.catchValue({
        get error() {
          return new ut(n.common.issues);
        },
        input: n.data
      })
    };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Is.create = (e, t) => new Is({
  innerType: e,
  typeName: G.ZodCatch,
  catchValue: typeof t.catch == "function" ? t.catch : () => t.catch,
  ...ne(t)
});
class Ms extends he {
  _parse(t) {
    if (this._getType(t) !== F.nan) {
      const n = this._getOrReturnCtx(t);
      return U(n, {
        code: A.invalid_type,
        expected: F.nan,
        received: n.parsedType
      }), se;
    }
    return { status: "valid", value: t.data };
  }
}
Ms.create = (e) => new Ms({
  typeName: G.ZodNaN,
  ...ne(e)
});
class $d extends he {
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
class An extends he {
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
    return new An({
      in: t,
      out: r,
      typeName: G.ZodPipeline
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
  typeName: G.ZodReadonly,
  ...ne(t)
});
De.lazycreate;
var G;
(function(e) {
  e.ZodString = "ZodString", e.ZodNumber = "ZodNumber", e.ZodNaN = "ZodNaN", e.ZodBigInt = "ZodBigInt", e.ZodBoolean = "ZodBoolean", e.ZodDate = "ZodDate", e.ZodSymbol = "ZodSymbol", e.ZodUndefined = "ZodUndefined", e.ZodNull = "ZodNull", e.ZodAny = "ZodAny", e.ZodUnknown = "ZodUnknown", e.ZodNever = "ZodNever", e.ZodVoid = "ZodVoid", e.ZodArray = "ZodArray", e.ZodObject = "ZodObject", e.ZodUnion = "ZodUnion", e.ZodDiscriminatedUnion = "ZodDiscriminatedUnion", e.ZodIntersection = "ZodIntersection", e.ZodTuple = "ZodTuple", e.ZodRecord = "ZodRecord", e.ZodMap = "ZodMap", e.ZodSet = "ZodSet", e.ZodFunction = "ZodFunction", e.ZodLazy = "ZodLazy", e.ZodLiteral = "ZodLiteral", e.ZodEnum = "ZodEnum", e.ZodEffects = "ZodEffects", e.ZodNativeEnum = "ZodNativeEnum", e.ZodOptional = "ZodOptional", e.ZodNullable = "ZodNullable", e.ZodDefault = "ZodDefault", e.ZodCatch = "ZodCatch", e.ZodPromise = "ZodPromise", e.ZodBranded = "ZodBranded", e.ZodPipeline = "ZodPipeline", e.ZodReadonly = "ZodReadonly";
})(G || (G = {}));
const Id = bt.create;
cr.create;
Ms.create;
ur.create;
ks.create;
Nr.create;
As.create;
fn.create;
hn.create;
Ns.create;
rr.create;
Dt.create;
js.create;
dt.create;
const Md = De.create;
De.strictCreate;
pn.create;
ro.create;
mn.create;
St.create;
vn.create;
$s.create;
dr.create;
Rr.create;
yn.create;
gn.create;
Ht.create;
bn.create;
jr.create;
Et.create;
Mt.create;
fr.create;
Et.createWithPreprocess;
An.create;
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
function Dd(e, t) {
  typeof e == "function" ? e(t) : e != null && (e.current = t);
}
function yi(...e) {
  return (t) => e.forEach(
    (r) => Dd(r, t)
  );
}
function Yt(...e) {
  return Ut(yi(...e), e);
}
const Nn = /* @__PURE__ */ Ie((e, t) => {
  const { children: r, ...n } = e, s = tr.toArray(r), o = s.find(Fd);
  if (o) {
    const a = o.props.children, i = s.map((l) => l === o ? tr.count(a) > 1 ? tr.only(null) : /* @__PURE__ */ kr(a) ? a.props.children : null : l);
    return /* @__PURE__ */ ue(Ls, Ae({}, n, {
      ref: t
    }), /* @__PURE__ */ kr(a) ? /* @__PURE__ */ Sn(a, void 0, i) : null);
  }
  return /* @__PURE__ */ ue(Ls, Ae({}, n, {
    ref: t
  }), r);
});
Nn.displayName = "Slot";
const Ls = /* @__PURE__ */ Ie((e, t) => {
  const { children: r, ...n } = e;
  return /* @__PURE__ */ kr(r) ? /* @__PURE__ */ Sn(r, {
    ...Vd(n, r.props),
    ref: t ? yi(t, r.ref) : r.ref
  }) : tr.count(r) > 1 ? tr.only(null) : null;
});
Ls.displayName = "SlotClone";
const Ld = ({ children: e }) => /* @__PURE__ */ ue(_t, null, e);
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
function gi(e) {
  var t, r, n = "";
  if (typeof e == "string" || typeof e == "number")
    n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (t = 0; t < e.length; t++)
        e[t] && (r = gi(e[t])) && (n && (n += " "), n += r);
    else
      for (t in e)
        e[t] && (n && (n += " "), n += t);
  return n;
}
function Ud() {
  for (var e, t, r = 0, n = ""; r < arguments.length; )
    (e = arguments[r++]) && (t = gi(e)) && (n && (n += " "), n += t);
  return n;
}
const da = (e) => typeof e == "boolean" ? "".concat(e) : e === 0 ? "0" : e, fa = Ud, no = (e, t) => (r) => {
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
    return Object.entries(g).every((v) => {
      let [y, x] = v;
      return Array.isArray(x) ? x.includes({
        ...o,
        ...i
      }[y]) : {
        ...o,
        ...i
      }[y] === x;
    }) ? [
      ...c,
      d,
      h
    ] : c;
  }, []);
  return fa(e, a, l, r == null ? void 0 : r.class, r == null ? void 0 : r.className);
}, zd = no(
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
), Wt = Ce.forwardRef(({ className: e, variant: t, size: r, asChild: n = !1, ...s }, o) => {
  const a = n ? Nn : "button";
  return /* @__PURE__ */ p.jsx(a, { className: Ne(zd({ variant: t, size: r, className: e })), ref: o, ...s });
});
Wt.displayName = "Button";
const ot = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
ot.displayName = "Card";
const Fr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: r,
    className: Ne("flex flex-col space-y-1.5 p-6", e),
    ...t
  }
));
Fr.displayName = "CardHeader";
const so = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
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
const bi = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "p",
  {
    ref: r,
    className: Ne("text-sm text-muted-foreground", e),
    ...t
  }
));
bi.displayName = "CardDescription";
const Gt = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx("div", { ref: r, className: Ne("p-6 pt-0", e), ...t }));
Gt.displayName = "CardContent";
const Bd = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  "div",
  {
    ref: r,
    className: Ne("flex items-center p-6 pt-0", e),
    ...t
  }
));
Bd.displayName = "CardFooter";
const Wd = () => /* @__PURE__ */ p.jsxs(ot, { className: "bg-[#ffebd9] border-none w-[400px]", children: [
  /* @__PURE__ */ p.jsx(Fr, { className: "p-4", children: /* @__PURE__ */ p.jsx(so, { children: "ขอเลื่อนตารางเรียนหน่อยจารรร" }) }),
  /* @__PURE__ */ p.jsxs(Gt, { className: "flex flex-col gap-4 p-4", children: [
    /* @__PURE__ */ p.jsxs("div", { children: [
      "ขอเลื่อนตารางเรียนในวันที่ ",
      /* @__PURE__ */ p.jsx("span", { className: "text-orange-400", children: "26 พฤศจิกายน 2566" })
    ] }),
    /* @__PURE__ */ p.jsxs(ot, { className: "flex flex-row gap-3 items-center px-4 py-2", children: [
      /* @__PURE__ */ p.jsx("h2", { className: "text-xl", children: "09.00" }),
      /* @__PURE__ */ p.jsx("div", { className: "bg-orange-400 rounded-full h-[50px] w-[2px]" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ p.jsx("p", { children: "คณิตศาสตร์ ป.1 " }),
        /* @__PURE__ */ p.jsx("p", { className: "text-xs", children: "ครูบี" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { children: [
      "เป็นวันที่ ",
      /* @__PURE__ */ p.jsx("span", { className: "text-orange-400", children: "3 ธันวาคม 2566" })
    ] }),
    /* @__PURE__ */ p.jsxs(ot, { className: "flex flex-row gap-3 items-center px-4 py-2", children: [
      /* @__PURE__ */ p.jsx("h2", { className: "text-xl", children: "09.00" }),
      /* @__PURE__ */ p.jsx("div", { className: "bg-orange-400 rounded-full h-[50px] w-[2px]" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col", children: [
        /* @__PURE__ */ p.jsx("p", { children: "คณิตศาสตร์ ป.1 " }),
        /* @__PURE__ */ p.jsx("p", { className: "text-xs", children: "ครูบี" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col gap-4", children: [
      /* @__PURE__ */ p.jsx(Wt, { className: "w-full bg-orange-400 text-white", children: "ตรวจสอบตารางเรียน" }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ p.jsx(Wt, { className: "w-full border-green-400 text-green-400", variant: "outline", children: "ยืนยัน" }),
        /* @__PURE__ */ p.jsx(Wt, { className: "w-full border-red-400 text-red-400", variant: "outline", children: "ปฏิเสธ" })
      ] })
    ] })
  ] })
] }), Zd = ({ comp_type: e, content: t }) => {
  let [n, s, o] = ["border-gray-400", "bg-gray-100/50", /* @__PURE__ */ p.jsx(aa, { size: 28 })];
  switch (e == null ? void 0 : e.trim()) {
    case "NOTI:INFO":
      n = "border-gray-400", s = "bg-gray-100/50", o = /* @__PURE__ */ p.jsx(aa, { size: 28, className: "text-gray-400" });
      break;
    case "NOTI:SUCCESS":
      n = "border-green-400", s = "bg-green-100/50", o = /* @__PURE__ */ p.jsx(bd, { size: 28, className: "text-green-400" });
      break;
    case "NOTI:DANGER":
      n = "border-red-400", s = "bg-red-100/50", o = /* @__PURE__ */ p.jsx(xd, { size: 28, className: "text-red-400" });
      break;
  }
  return /* @__PURE__ */ p.jsx("div", { className: "flex flex-row justify-center w-full", children: /* @__PURE__ */ p.jsxs(ot, { className: Ne("rounded-2xl flex items-center flex-row pl-4 border-2", n, s), children: [
    /* @__PURE__ */ p.jsx("div", { children: o }),
    /* @__PURE__ */ p.jsx(Gt, { className: "flex flex-row gap-4 p-4", children: /* @__PURE__ */ p.jsx("div", { children: t }) })
  ] }) });
}, qd = no(
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
function jn({ className: e, variant: t, ...r }) {
  return /* @__PURE__ */ p.jsx("div", { className: Ne(qd({ variant: t }), e), ...r });
}
const Hd = ({ socketStatus: e }) => /* @__PURE__ */ p.jsx(jn, { variant: "outline", children: e ? /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx("div", { className: "p-[3px] bg-green-400 rounded-full mr-1" }),
  " Connected"
] }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
  /* @__PURE__ */ p.jsx("div", { className: "p-[3px] bg-red-400 rounded-full mr-1" }),
  " Disconnected"
] }) });
function xi(e, t = []) {
  let r = [];
  function n(o, a) {
    const i = /* @__PURE__ */ ar(a), l = r.length;
    r = [
      ...r,
      a
    ];
    function c(d) {
      const { scope: h, children: g, ...v } = d, y = (h == null ? void 0 : h[e][l]) || i, x = ir(
        () => v,
        Object.values(v)
      );
      return /* @__PURE__ */ ue(y.Provider, {
        value: x
      }, g);
    }
    function u(d, h) {
      const g = (h == null ? void 0 : h[e][l]) || i, v = pr(g);
      if (v)
        return v;
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
    const o = r.map((a) => /* @__PURE__ */ ar(a));
    return function(i) {
      const l = (i == null ? void 0 : i[e]) || o;
      return ir(
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
    Yd(s, ...t)
  ];
}
function Yd(...e) {
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
      return ir(
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
  const t = Pe(e);
  return Re(() => {
    t.current = e;
  }), ir(
    () => (...r) => {
      var n;
      return (n = t.current) === null || n === void 0 ? void 0 : n.call(t, ...r);
    },
    []
  );
}
const Pr = globalThis != null && globalThis.document ? va : () => {
}, Gd = [
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
], Ot = Gd.reduce((e, t) => {
  const r = /* @__PURE__ */ Ie((n, s) => {
    const { asChild: o, ...a } = n, i = o ? Nn : t;
    return Re(() => {
      window[Symbol.for("radix-ui")] = !0;
    }, []), /* @__PURE__ */ ue(i, Ae({}, a, {
      ref: s
    }));
  });
  return r.displayName = `Primitive.${t}`, {
    ...e,
    [t]: r
  };
}, {}), _i = "Avatar", [Jd, hh] = xi(_i), [Xd, wi] = Jd(_i), Kd = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeAvatar: r, ...n } = e, [s, o] = xe("idle");
  return /* @__PURE__ */ ue(Xd, {
    scope: r,
    imageLoadingStatus: s,
    onImageLoadingStatusChange: o
  }, /* @__PURE__ */ ue(Ot.span, Ae({}, n, {
    ref: t
  })));
}), Qd = "AvatarImage", Si = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeAvatar: r, src: n, onLoadingStatusChange: s = () => {
  }, ...o } = e, a = wi(Qd, r), i = tf(n), l = Pt((c) => {
    s(c), a.onImageLoadingStatusChange(c);
  });
  return Pr(() => {
    i !== "idle" && l(i);
  }, [
    i,
    l
  ]), i === "loaded" ? /* @__PURE__ */ ue(Ot.img, Ae({}, o, {
    ref: t,
    src: n
  })) : null;
}), ef = "AvatarFallback", Ei = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeAvatar: r, delayMs: n, ...s } = e, o = wi(ef, r), [a, i] = xe(n === void 0);
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
  ]), a && o.imageLoadingStatus !== "loaded" ? /* @__PURE__ */ ue(Ot.span, Ae({}, s, {
    ref: t
  })) : null;
});
function tf(e) {
  const [t, r] = xe("idle");
  return Pr(() => {
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
const Ti = Kd, Oi = Si, Ci = Ei, Zt = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ti,
  {
    ref: r,
    className: Ne(
      "relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full",
      e
    ),
    ...t
  }
));
Zt.displayName = Ti.displayName;
const nr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Oi,
  {
    ref: r,
    className: Ne("aspect-square h-full w-full", e),
    ...t
  }
));
nr.displayName = Oi.displayName;
const sr = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ci,
  {
    ref: r,
    className: Ne(
      "flex h-full w-full items-center justify-center rounded-full bg-muted",
      e
    ),
    ...t
  }
));
sr.displayName = Ci.displayName;
const rf = /* @__PURE__ */ Ie((e, t) => /* @__PURE__ */ ue(Ot.label, Ae({}, e, {
  ref: t,
  onMouseDown: (r) => {
    var n;
    (n = e.onMouseDown) === null || n === void 0 || n.call(e, r), !r.defaultPrevented && r.detail > 1 && r.preventDefault();
  }
}))), Ri = rf, nf = no(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
), ki = Ce.forwardRef(({ className: e, ...t }, r) => /* @__PURE__ */ p.jsx(
  Ri,
  {
    ref: r,
    className: Ne(nf(), e),
    ...t
  }
));
ki.displayName = Ri.displayName;
const sf = $u, Ai = Ce.createContext(
  {}
), of = ({
  ...e
}) => /* @__PURE__ */ p.jsx(Ai.Provider, { value: { name: e.name }, children: /* @__PURE__ */ p.jsx(Lu, { ...e }) }), Pn = () => {
  const e = Ce.useContext(Ai), t = Ce.useContext(Ni), { getFieldState: r, formState: n } = kn(), s = r(e.name, n);
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
}, Ni = Ce.createContext(
  {}
), ji = Ce.forwardRef(({ className: e, ...t }, r) => {
  const n = Ce.useId();
  return /* @__PURE__ */ p.jsx(Ni.Provider, { value: { id: n }, children: /* @__PURE__ */ p.jsx("div", { ref: r, className: Ne("space-y-2", e), ...t }) });
});
ji.displayName = "FormItem";
const af = Ce.forwardRef(({ className: e, ...t }, r) => {
  const { error: n, formItemId: s } = Pn();
  return /* @__PURE__ */ p.jsx(
    ki,
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
  return /* @__PURE__ */ p.jsx(
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
  return /* @__PURE__ */ p.jsx(
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
const $i = Ce.forwardRef(({ className: e, children: t, ...r }, n) => {
  const { error: s, formMessageId: o } = Pn(), a = s ? String(s == null ? void 0 : s.message) : t;
  return a ? /* @__PURE__ */ p.jsx(
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
$i.displayName = "FormMessage";
const Ii = Ce.forwardRef(
  ({ className: e, type: t, ...r }, n) => /* @__PURE__ */ p.jsx(
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
Ii.displayName = "Input";
function cf(e, t) {
  return ya((r, n) => {
    const s = t[r][n];
    return s ?? r;
  }, e);
}
const Vr = (e) => {
  const { present: t, children: r } = e, n = uf(t), s = typeof r == "function" ? r({
    present: n.isPresent
  }) : tr.only(r), o = Yt(n.ref, s.ref);
  return typeof r == "function" || n.isPresent ? /* @__PURE__ */ Sn(s, {
    ref: o
  }) : null;
};
Vr.displayName = "Presence";
function uf(e) {
  const [t, r] = xe(), n = Pe({}), s = Pe(e), o = Pe("none"), a = e ? "mounted" : "unmounted", [i, l] = cf(a, {
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
  ]), Pr(() => {
    const c = n.current, u = s.current;
    if (u !== e) {
      const h = o.current, g = Hr(c);
      e ? l("MOUNT") : g === "none" || (c == null ? void 0 : c.display) === "none" ? l("UNMOUNT") : l(u && h !== g ? "ANIMATION_OUT" : "UNMOUNT"), s.current = e;
    }
  }, [
    e,
    l
  ]), Pr(() => {
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
const df = /* @__PURE__ */ ar(void 0);
function ff(e) {
  const t = pr(df);
  return e || t || "ltr";
}
function hf(e, [t, r]) {
  return Math.min(r, Math.max(t, e));
}
function qt(e, t, { checkForDefaultPrevented: r = !0 } = {}) {
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
const Mi = "ScrollArea", [Di, ph] = xi(Mi), [mf, rt] = Di(Mi), vf = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeScrollArea: r, type: n = "hover", dir: s, scrollHideDelay: o = 600, ...a } = e, [i, l] = xe(null), [c, u] = xe(null), [d, h] = xe(null), [g, v] = xe(null), [y, x] = xe(null), [M, E] = xe(0), [C, k] = xe(0), [_, z] = xe(!1), [te, oe] = xe(!1), W = Yt(
    t,
    (be) => l(be)
  ), J = ff(s);
  return /* @__PURE__ */ ue(mf, {
    scope: r,
    type: n,
    dir: J,
    scrollHideDelay: o,
    scrollArea: i,
    viewport: c,
    onViewportChange: u,
    content: d,
    onContentChange: h,
    scrollbarX: g,
    onScrollbarXChange: v,
    scrollbarXEnabled: _,
    onScrollbarXEnabledChange: z,
    scrollbarY: y,
    onScrollbarYChange: x,
    scrollbarYEnabled: te,
    onScrollbarYEnabledChange: oe,
    onCornerWidthChange: E,
    onCornerHeightChange: k
  }, /* @__PURE__ */ ue(Ot.div, Ae({
    dir: J
  }, a, {
    ref: W,
    style: {
      position: "relative",
      // Pass corner sizes as CSS vars to reduce re-renders of context consumers
      "--radix-scroll-area-corner-width": M + "px",
      "--radix-scroll-area-corner-height": C + "px",
      ...e.style
    }
  })));
}), yf = "ScrollAreaViewport", gf = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeScrollArea: r, children: n, ...s } = e, o = rt(yf, r), a = Pe(null), i = Yt(t, a, o.onViewportChange);
  return /* @__PURE__ */ ue(_t, null, /* @__PURE__ */ ue("style", {
    dangerouslySetInnerHTML: {
      __html: "[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"
    }
  }), /* @__PURE__ */ ue(Ot.div, Ae({
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
}), Ct = "ScrollAreaScrollbar", Li = /* @__PURE__ */ Ie((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ct, e.__scopeScrollArea), { onScrollbarXEnabledChange: o, onScrollbarYEnabledChange: a } = s, i = e.orientation === "horizontal";
  return Re(() => (i ? o(!0) : a(!0), () => {
    i ? o(!1) : a(!1);
  }), [
    i,
    o,
    a
  ]), s.type === "hover" ? /* @__PURE__ */ ue(bf, Ae({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "scroll" ? /* @__PURE__ */ ue(xf, Ae({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "auto" ? /* @__PURE__ */ ue(Fi, Ae({}, n, {
    ref: t,
    forceMount: r
  })) : s.type === "always" ? /* @__PURE__ */ ue(oo, Ae({}, n, {
    ref: t
  })) : null;
}), bf = /* @__PURE__ */ Ie((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ct, e.__scopeScrollArea), [o, a] = xe(!1);
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
  }, /* @__PURE__ */ ue(Fi, Ae({
    "data-state": o ? "visible" : "hidden"
  }, n, {
    ref: t
  })));
}), xf = /* @__PURE__ */ Ie((e, t) => {
  const { forceMount: r, ...n } = e, s = rt(Ct, e.__scopeScrollArea), o = e.orientation === "horizontal", a = In(
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
  }, /* @__PURE__ */ ue(oo, Ae({
    "data-state": i === "hidden" ? "hidden" : "visible"
  }, n, {
    ref: t,
    onPointerEnter: qt(
      e.onPointerEnter,
      () => l("POINTER_ENTER")
    ),
    onPointerLeave: qt(
      e.onPointerLeave,
      () => l("POINTER_LEAVE")
    )
  })));
}), Fi = /* @__PURE__ */ Ie((e, t) => {
  const r = rt(Ct, e.__scopeScrollArea), { forceMount: n, ...s } = e, [o, a] = xe(!1), i = e.orientation === "horizontal", l = In(() => {
    if (r.viewport) {
      const c = r.viewport.offsetWidth < r.viewport.scrollWidth, u = r.viewport.offsetHeight < r.viewport.scrollHeight;
      a(i ? c : u);
    }
  }, 10);
  return hr(r.viewport, l), hr(r.content, l), /* @__PURE__ */ ue(Vr, {
    present: n || o
  }, /* @__PURE__ */ ue(oo, Ae({
    "data-state": o ? "visible" : "hidden"
  }, s, {
    ref: t
  })));
}), oo = /* @__PURE__ */ Ie((e, t) => {
  const { orientation: r = "vertical", ...n } = e, s = rt(Ct, e.__scopeScrollArea), o = Pe(null), a = Pe(0), [i, l] = xe({
    content: 0,
    viewport: 0,
    scrollbar: {
      size: 0,
      paddingStart: 0,
      paddingEnd: 0
    }
  }), c = Bi(i.viewport, i.content), u = {
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
  return r === "horizontal" ? /* @__PURE__ */ ue(_f, Ae({}, u, {
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
  })) : r === "vertical" ? /* @__PURE__ */ ue(wf, Ae({}, u, {
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
}), _f = /* @__PURE__ */ Ie((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = rt(Ct, e.__scopeScrollArea), [a, i] = xe(), l = Pe(null), c = Yt(t, l, o.onScrollbarXChange);
  return Re(() => {
    l.current && i(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ ue(Ui, Ae({
    "data-orientation": "horizontal"
  }, s, {
    ref: c,
    sizes: r,
    style: {
      bottom: 0,
      left: o.dir === "rtl" ? "var(--radix-scroll-area-corner-width)" : 0,
      right: o.dir === "ltr" ? "var(--radix-scroll-area-corner-width)" : 0,
      "--radix-scroll-area-thumb-width": $n(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.x),
    onDragScroll: (u) => e.onDragScroll(u.x),
    onWheelScroll: (u, d) => {
      if (o.viewport) {
        const h = o.viewport.scrollLeft + u.deltaX;
        e.onWheelScroll(h), Zi(h, d) && u.preventDefault();
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
}), wf = /* @__PURE__ */ Ie((e, t) => {
  const { sizes: r, onSizesChange: n, ...s } = e, o = rt(Ct, e.__scopeScrollArea), [a, i] = xe(), l = Pe(null), c = Yt(t, l, o.onScrollbarYChange);
  return Re(() => {
    l.current && i(getComputedStyle(l.current));
  }, [
    l
  ]), /* @__PURE__ */ ue(Ui, Ae({
    "data-orientation": "vertical"
  }, s, {
    ref: c,
    sizes: r,
    style: {
      top: 0,
      right: o.dir === "ltr" ? 0 : void 0,
      left: o.dir === "rtl" ? 0 : void 0,
      bottom: "var(--radix-scroll-area-corner-height)",
      "--radix-scroll-area-thumb-height": $n(r) + "px",
      ...e.style
    },
    onThumbPointerDown: (u) => e.onThumbPointerDown(u.y),
    onDragScroll: (u) => e.onDragScroll(u.y),
    onWheelScroll: (u, d) => {
      if (o.viewport) {
        const h = o.viewport.scrollTop + u.deltaY;
        e.onWheelScroll(h), Zi(h, d) && u.preventDefault();
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
}), [Sf, Vi] = Di(Ct), Ui = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeScrollArea: r, sizes: n, hasThumb: s, onThumbChange: o, onThumbPointerUp: a, onThumbPointerDown: i, onThumbPositionChange: l, onDragScroll: c, onWheelScroll: u, onResize: d, ...h } = e, g = rt(Ct, r), [v, y] = xe(null), x = Yt(
    t,
    (W) => y(W)
  ), M = Pe(null), E = Pe(""), C = g.viewport, k = n.content - n.viewport, _ = Pt(u), z = Pt(l), te = In(d, 10);
  function oe(W) {
    if (M.current) {
      const J = W.clientX - M.current.left, be = W.clientY - M.current.top;
      c({
        x: J,
        y: be
      });
    }
  }
  return Re(() => {
    const W = (J) => {
      const be = J.target;
      (v == null ? void 0 : v.contains(be)) && _(J, k);
    };
    return document.addEventListener("wheel", W, {
      passive: !1
    }), () => document.removeEventListener("wheel", W, {
      passive: !1
    });
  }, [
    C,
    v,
    k,
    _
  ]), Re(z, [
    n,
    z
  ]), hr(v, te), hr(g.content, te), /* @__PURE__ */ ue(Sf, {
    scope: r,
    scrollbar: v,
    hasThumb: s,
    onThumbChange: Pt(o),
    onThumbPointerUp: Pt(a),
    onThumbPositionChange: z,
    onThumbPointerDown: Pt(i)
  }, /* @__PURE__ */ ue(Ot.div, Ae({}, h, {
    ref: x,
    style: {
      position: "absolute",
      ...h.style
    },
    onPointerDown: qt(e.onPointerDown, (W) => {
      W.button === 0 && (W.target.setPointerCapture(W.pointerId), M.current = v.getBoundingClientRect(), E.current = document.body.style.webkitUserSelect, document.body.style.webkitUserSelect = "none", g.viewport && (g.viewport.style.scrollBehavior = "auto"), oe(W));
    }),
    onPointerMove: qt(e.onPointerMove, oe),
    onPointerUp: qt(e.onPointerUp, (W) => {
      const J = W.target;
      J.hasPointerCapture(W.pointerId) && J.releasePointerCapture(W.pointerId), document.body.style.webkitUserSelect = E.current, g.viewport && (g.viewport.style.scrollBehavior = ""), M.current = null;
    })
  })));
}), Fs = "ScrollAreaThumb", Ef = /* @__PURE__ */ Ie((e, t) => {
  const { forceMount: r, ...n } = e, s = Vi(Fs, e.__scopeScrollArea);
  return /* @__PURE__ */ ue(Vr, {
    present: r || s.hasThumb
  }, /* @__PURE__ */ ue(Tf, Ae({
    ref: t
  }, n)));
}), Tf = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeScrollArea: r, style: n, ...s } = e, o = rt(Fs, r), a = Vi(Fs, r), { onThumbPositionChange: i } = a, l = Yt(
    t,
    (d) => a.onThumbChange(d)
  ), c = Pe(), u = In(() => {
    c.current && (c.current(), c.current = void 0);
  }, 100);
  return Re(() => {
    const d = o.viewport;
    if (d) {
      const h = () => {
        if (u(), !c.current) {
          const g = kf(d, i);
          c.current = g, i();
        }
      };
      return i(), d.addEventListener("scroll", h), () => d.removeEventListener("scroll", h);
    }
  }, [
    o.viewport,
    u,
    i
  ]), /* @__PURE__ */ ue(Ot.div, Ae({
    "data-state": a.hasThumb ? "visible" : "hidden"
  }, s, {
    ref: l,
    style: {
      width: "var(--radix-scroll-area-thumb-width)",
      height: "var(--radix-scroll-area-thumb-height)",
      ...n
    },
    onPointerDownCapture: qt(e.onPointerDownCapture, (d) => {
      const g = d.target.getBoundingClientRect(), v = d.clientX - g.left, y = d.clientY - g.top;
      a.onThumbPointerDown({
        x: v,
        y
      });
    }),
    onPointerUp: qt(e.onPointerUp, a.onThumbPointerUp)
  }));
}), zi = "ScrollAreaCorner", Of = /* @__PURE__ */ Ie((e, t) => {
  const r = rt(zi, e.__scopeScrollArea), n = !!(r.scrollbarX && r.scrollbarY);
  return r.type !== "scroll" && n ? /* @__PURE__ */ ue(Cf, Ae({}, e, {
    ref: t
  })) : null;
}), Cf = /* @__PURE__ */ Ie((e, t) => {
  const { __scopeScrollArea: r, ...n } = e, s = rt(zi, r), [o, a] = xe(0), [i, l] = xe(0), c = !!(o && i);
  return hr(s.scrollbarX, () => {
    var u;
    const d = ((u = s.scrollbarX) === null || u === void 0 ? void 0 : u.offsetHeight) || 0;
    s.onCornerHeightChange(d), l(d);
  }), hr(s.scrollbarY, () => {
    var u;
    const d = ((u = s.scrollbarY) === null || u === void 0 ? void 0 : u.offsetWidth) || 0;
    s.onCornerWidthChange(d), a(d);
  }), c ? /* @__PURE__ */ ue(Ot.div, Ae({}, n, {
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
function Bi(e, t) {
  const r = e / t;
  return isNaN(r) ? 0 : r;
}
function $n(e) {
  const t = Bi(e.viewport, e.content), r = e.scrollbar.paddingStart + e.scrollbar.paddingEnd, n = (e.scrollbar.size - r) * t;
  return Math.max(n, 18);
}
function Rf(e, t, r, n = "ltr") {
  const s = $n(r), o = s / 2, a = t || o, i = s - a, l = r.scrollbar.paddingStart + a, c = r.scrollbar.size - r.scrollbar.paddingEnd - i, u = r.content - r.viewport, d = n === "ltr" ? [
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
  const n = $n(t), s = t.scrollbar.paddingStart + t.scrollbar.paddingEnd, o = t.scrollbar.size - s, a = t.content - t.viewport, i = o - n, l = r === "ltr" ? [
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
function Zi(e, t) {
  return e > 0 && e < t;
}
const kf = (e, t = () => {
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
function In(e, t) {
  const r = Pt(e), n = Pe(0);
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
function hr(e, t) {
  const r = Pt(t);
  Pr(() => {
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
const qi = vf, Af = gf, Nf = Of, Hi = Ce.forwardRef(({ className: e, children: t, ...r }, n) => /* @__PURE__ */ p.jsxs(
  qi,
  {
    ref: n,
    className: Ne("relative overflow-hidden", e),
    ...r,
    children: [
      /* @__PURE__ */ p.jsx(Af, { className: "h-full w-full rounded-[inherit]", children: t }),
      /* @__PURE__ */ p.jsx(Yi, {}),
      /* @__PURE__ */ p.jsx(Nf, {})
    ]
  }
));
Hi.displayName = qi.displayName;
const Yi = Ce.forwardRef(({ className: e, orientation: t = "vertical", ...r }, n) => /* @__PURE__ */ p.jsx(
  Li,
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
    children: /* @__PURE__ */ p.jsx(Ef, { className: "relative flex-1 rounded-full bg-border" })
  }
));
Yi.displayName = Li.displayName;
const jf = Md({
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
  var W, J, be, j;
  const [u, d] = xe(), [h, g] = xe(), { rooms: v, profile: y, sendMessage: x, sending: M, fetchChatMessage: E, fetchUserProfile: C } = Ys(), k = Pe(null), _ = Gu({
    resolver: Qu(jf),
    defaultValues: {
      message: ""
    }
  }), z = v[r] || [];
  Re(() => {
    if (r) {
      const N = (/* @__PURE__ */ new Date()).toISOString();
      E(t, e, r, N, "2023-12-20T09:32:13.000Z"), C(t, e, r);
    }
  }, [E, C, r, t, e]), Re(() => {
    if (y.length > 1) {
      const N = y[0].teacher_id;
      n === N ? (d(y[0]), g(y[1])) : (d(y[1]), g(y[0]));
    }
  }, [y, n]), Re(() => {
    var N;
    (N = k.current) == null || N.scrollIntoView({ behavior: "smooth" });
  }, [z]);
  const te = (N) => {
    const B = y[0].teacher_id;
    if (n === B) {
      const ae = {
        room_id: r,
        content: N.message,
        sender_id: B,
        sender_type: "TCA",
        type: "MSG"
      };
      x(t, e, ae, r);
    }
    if (n !== B) {
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
  return /* @__PURE__ */ p.jsxs(ot, { className: "flex flex-col relative rounded-none h-[90vh] w-full z-10", children: [
    /* @__PURE__ */ p.jsxs(Fr, { className: "flex items-center border-b-[1px]", children: [
      /* @__PURE__ */ p.jsxs(so, { className: "max-w-[70%] text-center", children: [
        s.room_name,
        " (",
        s.room_id,
        ")"
      ] }),
      /* @__PURE__ */ p.jsxs(bi, { children: [
        (W = y[0]) == null ? void 0 : W.firstname,
        " ",
        (J = y[0]) == null ? void 0 : J.lastname
      ] }),
      /* @__PURE__ */ p.jsx(Hd, { socketStatus: o })
    ] }),
    /* @__PURE__ */ p.jsx(vd, { className: "absolute cursor-pointer top-[20px] left-[20px]", onClick: () => i(!a) }),
    /* @__PURE__ */ p.jsx(yd, { className: "absolute cursor-pointer top-[20px] right-[20px]", onClick: () => c(!l) }),
    /* @__PURE__ */ p.jsxs(Hi, { className: "px-3 h-full", children: [
      z.map((N) => {
        var B, ae, de, fe;
        return /* @__PURE__ */ p.jsxs("div", { className: Ne("flex gap-2 my-2", N.sender_id === n ? "flex-row justify-end" : "flex-row-reverse justify-end"), children: [
          N.type === "COMP" && /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row items-end gap-2", children: [
            /* @__PURE__ */ p.jsxs(Zt, { children: [
              /* @__PURE__ */ p.jsx(nr, { src: (B = oe(N.sender_id)) == null ? void 0 : B.photo_url }),
              /* @__PURE__ */ p.jsx(sr, { children: (ae = oe(N.sender_id)) == null ? void 0 : ae.firstname })
            ] }),
            /* @__PURE__ */ p.jsx(Wd, { ...N })
          ] }),
          N.type === "MSG" && /* @__PURE__ */ p.jsxs("div", { className: Ne("flex items-end gap-2", N.sender_id === n ? "flex-row-reverse" : "flex-row"), children: [
            /* @__PURE__ */ p.jsxs(Zt, { children: [
              /* @__PURE__ */ p.jsx(nr, { src: (de = oe(N.sender_id)) == null ? void 0 : de.photo_url }),
              /* @__PURE__ */ p.jsx(sr, { children: (fe = oe(N.sender_id)) == null ? void 0 : fe.firstname })
            ] }),
            /* @__PURE__ */ p.jsx(
              "div",
              {
                className: Ne("flex flex-col  text-black p-2 px-4 rounded-t-full", N.sender_id === n ? "rounded-l-full bg-blue-100" : "rounded-r-full bg-gray-100"),
                children: /* @__PURE__ */ p.jsx("p", { children: N.content })
              }
            )
          ] }),
          N.type === "NOTI" && /* @__PURE__ */ p.jsx(Zd, { ...N })
        ] }, N.id);
      }),
      M && /* @__PURE__ */ p.jsxs("div", { className: Ne("flex items-end gap-2 flex-row-reverse"), children: [
        /* @__PURE__ */ p.jsxs(Zt, { children: [
          /* @__PURE__ */ p.jsx(nr, { src: (be = oe(n)) == null ? void 0 : be.photo_url }),
          /* @__PURE__ */ p.jsx(sr, { children: (j = oe(n)) == null ? void 0 : j.firstname })
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: Ne("flex flex-col  text-black p-2 px-4 rounded-t-full rounded-l-full bg-blue-100"), children: /* @__PURE__ */ p.jsx("p", { children: "กำลังส่ง..." }) })
      ] }),
      /* @__PURE__ */ p.jsx("div", { ref: k })
    ] }),
    /* @__PURE__ */ p.jsx(sf, { ..._, children: /* @__PURE__ */ p.jsx("form", { onSubmit: _.handleSubmit(te), className: "space-y-8 w-full p-3", children: /* @__PURE__ */ p.jsx(
      of,
      {
        control: _.control,
        name: "message",
        render: ({ field: N }) => /* @__PURE__ */ p.jsxs(ji, { children: [
          /* @__PURE__ */ p.jsx(Pi, { children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-1", children: [
            /* @__PURE__ */ p.jsx(Ii, { disabled: !o, placeholder: "Aa", ...N }),
            /* @__PURE__ */ p.jsx(Wt, { disabled: !o, type: "submit", variant: "outline", children: "Send" })
          ] }) }),
          /* @__PURE__ */ p.jsx($i, { className: "text-red-400" })
        ] })
      }
    ) }) })
  ] }, r);
}, $f = ({ order: { course_name: e }, teacher: { title: t, firstname: r } }) => /* @__PURE__ */ p.jsxs(ot, { className: "relative bg-white rounded-none w-full", children: [
  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-3 p-3", children: [
    /* @__PURE__ */ p.jsxs(Zt, { className: "w-[70px] h-[70px] rounded-md", children: [
      /* @__PURE__ */ p.jsx(
        Si,
        {
          className: "w-[70px] h-[70px]",
          src: "https://qph.cf2.poecdn.net/main-sdxl_c779e89a8682d57bd1dbcd0111bceb50959a002a2424b1a98f519a35db28e2fc.png?w=1024&h=1024"
        }
      ),
      /* @__PURE__ */ p.jsx(Ei, { children: e })
    ] }),
    /* @__PURE__ */ p.jsxs("div", { children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-1", children: [
        /* @__PURE__ */ p.jsx("p", { className: "font-bold", children: "รายวิชา:" }),
        /* @__PURE__ */ p.jsxs("span", { children: [
          e.split(" ")[1],
          " ",
          e.split(" ")[2]
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-1", children: [
        /* @__PURE__ */ p.jsx("p", { className: "font-bold", children: "คุณครู:" }),
        /* @__PURE__ */ p.jsx("span", { children: t || r })
      ] })
    ] })
  ] }),
  /* @__PURE__ */ p.jsx(Gt, { className: "p-3", children: /* @__PURE__ */ p.jsx("div", { children: e }) }),
  /* @__PURE__ */ p.jsx("div", { className: "flex flex-row w-full justify-end p-3", children: /* @__PURE__ */ p.jsx(jn, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
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
  return /* @__PURE__ */ p.jsxs(ot, { className: "rounded-none bg-white w-full", children: [
    /* @__PURE__ */ p.jsx(Fr, { className: " px-3 pt-3 pb-0", children: /* @__PURE__ */ p.jsx("p", { className: "text-lg font-bold", children: "สถานะ" }) }),
    /* @__PURE__ */ p.jsxs(Gt, { className: "p-3 flex flex-row justify-between", children: [
      /* @__PURE__ */ p.jsxs("div", { children: [
        /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.hasTeacher ? /* @__PURE__ */ p.jsx(us, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ p.jsx(ds, { size: 30, className: "text-orange-500" }),
          "ได้คุณครูแล้ว"
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isLearned ? /* @__PURE__ */ p.jsx(us, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ p.jsx(ds, { size: 30, className: "text-orange-500" }),
          "เรียนแล้ว"
        ] }),
        /* @__PURE__ */ p.jsx("div", { className: "p-[1px] bg-orange-500 w-[1px] h-[20px] ml-[14px]" }),
        /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-3 items-center", children: [
          t.isCompleted ? /* @__PURE__ */ p.jsx(us, { size: 30, className: "text-orange-500" }) : /* @__PURE__ */ p.jsx(ds, { size: 30, className: "text-orange-500" }),
          "เสร็จแล้ว"
        ] })
      ] }),
      /* @__PURE__ */ p.jsx("div", { className: "flex flex-col justify-end", children: /* @__PURE__ */ p.jsx(jn, { className: "p-2 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]", variant: "secondary", children: "ดูรายละเอียด" }) })
    ] })
  ] });
}, Mf = ({ teacher: e }) => /* @__PURE__ */ p.jsx(ot, { className: "rounded-none bg-white w-full", children: /* @__PURE__ */ p.jsxs(Gt, { className: "p-3", children: [
  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row justify-between w-full", children: [
    /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-3", children: [
      /* @__PURE__ */ p.jsxs(Zt, { className: "border-orange-400 border-2", children: [
        /* @__PURE__ */ p.jsx(nr, { src: e.photo_url, alt: e.firstname }),
        /* @__PURE__ */ p.jsxs(sr, { children: [
          e.firstname[0],
          e.lastname[0]
        ] })
      ] }),
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col mr-2", children: [
        /* @__PURE__ */ p.jsx("div", { className: "flex flex-col", children: e != null && e.title ? /* @__PURE__ */ p.jsx("p", { className: "text-nowrap", children: e.title }) : /* @__PURE__ */ p.jsxs(p.Fragment, { children: [
          /* @__PURE__ */ p.jsx("p", { children: e.firstname }),
          /* @__PURE__ */ p.jsx("p", { children: e.lastname })
        ] }) }),
        /* @__PURE__ */ p.jsx("p", { children: "⭐ 4.5" })
      ] })
    ] }),
    /* @__PURE__ */ p.jsx("div", { className: "flex flex-row", children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-end gap-3", children: [
      /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-2", children: [
        /* @__PURE__ */ p.jsx(gd, {}),
        " ",
        /* @__PURE__ */ p.jsx("div", { children: e.phone })
      ] }),
      /* @__PURE__ */ p.jsx(
        jn,
        {
          className: "w-fit hover:bg-blue-100 bg-blue-100 text-blue-400 px-4 cursor-pointer hover:brightness-90 select-none  active:translate-y-[1px]",
          variant: "secondary",
          children: "ดูรายละเอียด"
        }
      )
    ] }) })
  ] }),
  /* @__PURE__ */ p.jsx("div", { className: "w-full mt-3", children: /* @__PURE__ */ p.jsx(Wt, { className: "w-full text-white bg-orange-500 hover:bg-orange-400", children: "เปลี่ยนครู" }) })
] }) });
var Df = Object.defineProperty, Lf = (e, t, r) => t in e ? Df(e, t, { enumerable: !0, configurable: !0, writable: !0, value: r }) : e[t] = r, hs = (e, t, r) => (Lf(e, typeof t != "symbol" ? t + "" : t, r), r);
let Ff = class {
  constructor() {
    hs(this, "current", this.detect()), hs(this, "handoffState", "pending"), hs(this, "currentId", 0);
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
}, tn = new Ff(), $r = (e, t) => {
  tn.isServer ? Re(e, t) : va(e, t);
};
function or(e) {
  let t = Pe(e);
  return $r(() => {
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
function Gi() {
  let [e] = xe(Ur);
  return Re(() => () => e.dispose(), [e]), e;
}
let xt = function(e) {
  let t = or(e);
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
function ct(e, t, ...r) {
  if (e in t) {
    let s = t[e];
    return typeof s == "function" ? s(...r) : s;
  }
  let n = new Error(`Tried to handle "${e}" but there is no handler defined. Only defined handlers are: ${Object.keys(t).map((s) => `"${s}"`).join(", ")}.`);
  throw Error.captureStackTrace && Error.captureStackTrace(n, ct), n;
}
let zf = Symbol();
function Xi(...e) {
  let t = Pe(e);
  Re(() => {
    t.current = e;
  }, [e]);
  let r = xt((n) => {
    for (let s of t.current)
      s != null && (typeof s == "function" ? s(n) : s.current = n);
  });
  return e.every((n) => n == null || (n == null ? void 0 : n[zf])) ? void 0 : r;
}
function wn(...e) {
  return Array.from(new Set(e.flatMap((t) => typeof t == "string" ? t.split(" ") : []))).filter(Boolean).join(" ");
}
var Ki = ((e) => (e[e.None = 0] = "None", e[e.RenderStrategy = 1] = "RenderStrategy", e[e.Static = 2] = "Static", e))(Ki || {}), It = ((e) => (e[e.Unmount = 0] = "Unmount", e[e.Hidden = 1] = "Hidden", e))(It || {});
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
    return ct(c ? 0 : 1, { 0() {
      return null;
    }, 1() {
      return Yr({ ...u, hidden: !0, style: { display: "none" } }, r, n, a);
    } });
  }
  return Yr(i, r, n, a);
}
function Yr(e, t = {}, r, n) {
  let { as: s = r, children: o, refName: a = "ref", ...i } = ps(e, ["unmount", "static"]), l = e.ref !== void 0 ? { [a]: e.ref } : {}, c = typeof o == "function" ? o(t) : o;
  "className" in i && i.className && typeof i.className == "function" && (i.className = i.className(t));
  let u = {};
  if (t) {
    let d = !1, h = [];
    for (let [g, v] of Object.entries(t))
      typeof v == "boolean" && (d = !0), v === !0 && h.push(g);
    d && (u["data-headlessui-state"] = h.join(" "));
  }
  if (s === _t && Object.keys(pa(i)).length > 0) {
    if (!kr(c) || Array.isArray(c) && c.length > 1)
      throw new Error(['Passing props on "Fragment"!', "", `The current component <${n} /> is rendering a "Fragment".`, "However we need to passthrough the following props:", Object.keys(i).map((v) => `  - ${v}`).join(`
`), "", "You can apply a few solutions:", ['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".', "Render a single element as the child so that we can forward the props onto that element."].map((v) => `  - ${v}`).join(`
`)].join(`
`));
    let d = c.props, h = typeof (d == null ? void 0 : d.className) == "function" ? (...v) => wn(d == null ? void 0 : d.className(...v), i.className) : wn(d == null ? void 0 : d.className, i.className), g = h ? { className: h } : {};
    return Sn(c, Object.assign({}, el(c.props, pa(ps(i, ["ref"]))), u, l, Bf(c.ref, l.ref), g));
  }
  return ue(s, Object.assign({}, ps(i, ["ref"]), s !== _t && l, s !== _t && u), c);
}
function Bf(...e) {
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
  return Object.assign(Ie(e), { displayName: (t = e.displayName) != null ? t : e.name });
}
function pa(e) {
  let t = Object.assign({}, e);
  for (let r in t)
    t[r] === void 0 && delete t[r];
  return t;
}
function ps(e, t = []) {
  let r = Object.assign({}, e);
  for (let n of t)
    n in r && delete r[n];
  return r;
}
let io = ar(null);
io.displayName = "OpenClosedContext";
var gt = ((e) => (e[e.Open = 1] = "Open", e[e.Closed = 2] = "Closed", e[e.Closing = 4] = "Closing", e[e.Opening = 8] = "Opening", e))(gt || {});
function tl() {
  return pr(io);
}
function Wf({ value: e, children: t }) {
  return ee.createElement(io.Provider, { value: e }, t);
}
function lo() {
  let e = Pe(!1);
  return $r(() => (e.current = !0, () => {
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
function ms(e, ...t) {
  e && t.length > 0 && e.classList.add(...t);
}
function vs(e, ...t) {
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
  let i = ct(s, { enter: () => t.enter, leave: () => t.leave }), l = ct(s, { enter: () => t.enterTo, leave: () => t.leaveTo }), c = ct(s, { enter: () => t.enterFrom, leave: () => t.leaveFrom });
  return vs(e, ...t.base, ...t.enter, ...t.enterTo, ...t.enterFrom, ...t.leave, ...t.leaveFrom, ...t.leaveTo, ...t.entered), ms(e, ...t.base, ...i, ...c), o.nextFrame(() => {
    vs(e, ...t.base, ...i, ...c), ms(e, ...t.base, ...i, ...l), Hf(e, () => (vs(e, ...t.base, ...i), ms(e, ...t.base, ...t.entered), a()));
  }), o.dispose;
}
function Gf({ immediate: e, container: t, direction: r, classes: n, onStart: s, onStop: o }) {
  let a = lo(), i = Gi(), l = or(r);
  $r(() => {
    e && (l.current = "enter");
  }, [e]), $r(() => {
    let c = Ur();
    i.add(c.dispose);
    let u = t.current;
    if (u && l.current !== "idle" && a.current)
      return c.dispose(), s.current(l.current), c.add(Yf(u, n.current, l.current === "enter", () => {
        c.dispose(), o.current(l.current);
      })), c.dispose;
  }, [r]);
}
function jt(e = "") {
  return e.split(" ").filter((t) => t.trim().length > 1);
}
let Mn = ar(null);
Mn.displayName = "TransitionContext";
var Jf = ((e) => (e.Visible = "visible", e.Hidden = "hidden", e))(Jf || {});
function Xf() {
  let e = pr(Mn);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
function Kf() {
  let e = pr(Dn);
  if (e === null)
    throw new Error("A <Transition.Child /> is used but it is missing a parent <Transition /> or <Transition.Root />.");
  return e;
}
let Dn = ar(null);
Dn.displayName = "NestingContext";
function Ln(e) {
  return "children" in e ? Ln(e.children) : e.current.filter(({ el: t }) => t.current !== null).filter(({ state: t }) => t === "visible").length > 0;
}
function rl(e, t) {
  let r = or(e), n = Pe([]), s = lo(), o = Gi(), a = xt((g, v = It.Hidden) => {
    let y = n.current.findIndex(({ el: x }) => x === g);
    y !== -1 && (ct(v, { [It.Unmount]() {
      n.current.splice(y, 1);
    }, [It.Hidden]() {
      n.current[y].state = "hidden";
    } }), o.microTask(() => {
      var x;
      !Ln(n) && s.current && ((x = r.current) == null || x.call(r));
    }));
  }), i = xt((g) => {
    let v = n.current.find(({ el: y }) => y === g);
    return v ? v.state !== "visible" && (v.state = "visible") : n.current.push({ el: g, state: "visible" }), () => a(g, It.Unmount);
  }), l = Pe([]), c = Pe(Promise.resolve()), u = Pe({ enter: [], leave: [], idle: [] }), d = xt((g, v, y) => {
    l.current.splice(0), t && (t.chains.current[v] = t.chains.current[v].filter(([x]) => x !== g)), t == null || t.chains.current[v].push([g, new Promise((x) => {
      l.current.push(x);
    })]), t == null || t.chains.current[v].push([g, new Promise((x) => {
      Promise.all(u.current[v].map(([M, E]) => E)).then(() => x());
    })]), v === "enter" ? c.current = c.current.then(() => t == null ? void 0 : t.wait.current).then(() => y(v)) : y(v);
  }), h = xt((g, v, y) => {
    Promise.all(u.current[v].splice(0).map(([x, M]) => M)).then(() => {
      var x;
      (x = l.current.shift()) == null || x();
    }).then(() => y(v));
  });
  return ir(() => ({ children: n, register: i, unregister: a, onStart: d, onStop: h, wait: c, chains: u }), [i, a, n, d, h, u, c]);
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
  let t = Pe(ma(e));
  return Re(() => {
    t.current = ma(e);
  }, [e]), t;
}
let rh = "div", nl = Ki.RenderStrategy;
function nh(e, t) {
  var r, n;
  let { beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i, enter: l, enterFrom: c, enterTo: u, entered: d, leave: h, leaveFrom: g, leaveTo: v, ...y } = e, x = Pe(null), M = Xi(x, t), E = (r = y.unmount) == null || r ? It.Unmount : It.Hidden, { show: C, appear: k, initial: _ } = Xf(), [z, te] = xe(C ? "visible" : "hidden"), oe = Kf(), { register: W, unregister: J } = oe;
  Re(() => W(x), [W, x]), Re(() => {
    if (E === It.Hidden && x.current) {
      if (C && z !== "visible") {
        te("visible");
        return;
      }
      return ct(z, { hidden: () => J(x), visible: () => W(x) });
    }
  }, [z, x, W, J, C, E]);
  let be = or({ base: jt(y.className), enter: jt(l), enterFrom: jt(c), enterTo: jt(u), entered: jt(d), leave: jt(h), leaveFrom: jt(g), leaveTo: jt(v) }), j = th({ beforeEnter: s, afterEnter: o, beforeLeave: a, afterLeave: i }), N = Ji();
  Re(() => {
    if (N && z === "visible" && x.current === null)
      throw new Error("Did you forget to passthrough the `ref` to the actual DOM node?");
  }, [x, z, N]);
  let B = _ && !k, ae = k && C && _, de = !N || B ? "idle" : C ? "enter" : "leave", fe = Zf(0), ze = xt((H) => ct(H, { enter: () => {
    fe.addFlag(gt.Opening), j.current.beforeEnter();
  }, leave: () => {
    fe.addFlag(gt.Closing), j.current.beforeLeave();
  }, idle: () => {
  } })), Me = xt((H) => ct(H, { enter: () => {
    fe.removeFlag(gt.Opening), j.current.afterEnter();
  }, leave: () => {
    fe.removeFlag(gt.Closing), j.current.afterLeave();
  }, idle: () => {
  } })), T = rl(() => {
    te("hidden"), J(x);
  }, oe);
  Gf({ immediate: ae, container: x, classes: be, direction: de, onStart: or((H) => {
    T.onStart(x, H, ze);
  }), onStop: or((H) => {
    T.onStop(x, H, Me), H === "leave" && !Ln(T) && (te("hidden"), J(x));
  }) });
  let P = y, Y = { ref: M };
  return ae ? P = { ...P, className: wn(y.className, ...be.current.enter, ...be.current.enterFrom) } : (P.className = wn(y.className, (n = x.current) == null ? void 0 : n.className), P.className === "" && delete P.className), ee.createElement(Dn.Provider, { value: T }, ee.createElement(Wf, { value: ct(z, { visible: gt.Open, hidden: gt.Closed }) | fe.flags }, Qi({ ourProps: Y, theirProps: P, defaultTag: rh, features: nl, visible: z === "visible", name: "Transition.Child" })));
}
function sh(e, t) {
  let { show: r, appear: n = !1, unmount: s = !0, ...o } = e, a = Pe(null), i = Xi(a, t);
  Ji();
  let l = tl();
  if (r === void 0 && l !== null && (r = (l & gt.Open) === gt.Open), ![!0, !1].includes(r))
    throw new Error("A <Transition /> is used but it is missing a `show={true | false}` prop.");
  let [c, u] = xe(r ? "visible" : "hidden"), d = rl(() => {
    u("hidden");
  }), [h, g] = xe(!0), v = Pe([r]);
  $r(() => {
    h !== !1 && v.current[v.current.length - 1] !== r && (v.current.push(r), g(!1));
  }, [v, r]);
  let y = ir(() => ({ show: r, appear: n, initial: h }), [r, n, h]);
  Re(() => {
    if (r)
      u("visible");
    else if (!Ln(d))
      u("hidden");
    else {
      let C = a.current;
      if (!C)
        return;
      let k = C.getBoundingClientRect();
      k.x === 0 && k.y === 0 && k.width === 0 && k.height === 0 && u("hidden");
    }
  }, [r, d]);
  let x = { unmount: s }, M = xt(() => {
    var C;
    h && g(!1), (C = e.beforeEnter) == null || C.call(e);
  }), E = xt(() => {
    var C;
    h && g(!1), (C = e.beforeLeave) == null || C.call(e);
  });
  return ee.createElement(Dn.Provider, { value: d }, ee.createElement(Mn.Provider, { value: y }, Qi({ ourProps: { ...x, as: _t, children: ee.createElement(sl, { ref: i, ...x, ...o, beforeEnter: M, beforeLeave: E }) }, theirProps: {}, defaultTag: _t, features: nl, visible: c === "visible", name: "Transition" })));
}
function oh(e, t) {
  let r = pr(Mn) !== null, n = tl() !== null;
  return ee.createElement(ee.Fragment, null, !r && n ? ee.createElement(Vs, { ref: t, ...e }) : ee.createElement(sl, { ref: t, ...e }));
}
let Vs = ao(sh), sl = ao(nh), ah = ao(oh), ol = Object.assign(Vs, { Child: ah, Root: Vs });
const ih = ({ order: { course_name: e } }) => /* @__PURE__ */ p.jsxs(ot, { className: "relative bg-white rounded-none w-full p-0", children: [
  /* @__PURE__ */ p.jsxs(Fr, { className: "p-3", children: [
    /* @__PURE__ */ p.jsx("h2", { className: "text-lg font-bold", children: "การเรียน" }),
    /* @__PURE__ */ p.jsxs("h3", { className: "text-lg font-normal", children: [
      "Class Schedule:",
      /* @__PURE__ */ p.jsx("span", { className: "text-orange-400 ml-1", children: "กำลังเรียน" })
    ] })
  ] }),
  /* @__PURE__ */ p.jsx(Gt, { className: "p-3", children: /* @__PURE__ */ p.jsx(lh, { course_name: e }) })
] }), lh = ({ course_name: e }) => /* @__PURE__ */ p.jsxs(ot, { className: "border-orange-200 bg-orange-100/50 p-3 flex flex-col gap-3", children: [
  /* @__PURE__ */ p.jsx("div", { children: "LOGO" }),
  /* @__PURE__ */ p.jsx("div", { className: "text-center", children: "SVG IMAGE" }),
  /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row gap-1", children: [
    /* @__PURE__ */ p.jsx("p", { className: "text-lg font-bold", children: "คลาส" }),
    /* @__PURE__ */ p.jsx("p", { className: "text-lg font-normal", children: e.split(" ")[1] }),
    /* @__PURE__ */ p.jsx("p", { className: "text-lg font-normal", children: "กำลังจะเริ่มใน" })
  ] }),
  /* @__PURE__ */ p.jsx("div", { className: "text-indigo-500 text-2xl text-center font-bold", children: "00:25:15" }),
  /* @__PURE__ */ p.jsxs(Wt, { className: "w-full rounded-xl bg-orange-500 hover:bg-orange-400", children: [
    /* @__PURE__ */ p.jsx(md, { size: 20, className: "mr-3" }),
    "เข้าห้องเรียน"
  ] })
] }), ch = ({ dataBaseApiUrl: e, authToken: t, roomId: r, sideMenuOpen: n, setSideMenuOpen: s }) => {
  const [o, a] = xe(null);
  return Re(() => {
    r && Lc(e, t, r).then((i) => {
      a(i);
    });
  }, [r, e, t]), o && /* @__PURE__ */ p.jsx(
    ol,
    {
      show: n,
      as: _t,
      enter: "transition ease-out duration-200",
      enterFrom: "opacity-0 -translate-x-10",
      enterTo: "opacity-100 translate-x-0",
      leave: "transition ease-in duration-150",
      leaveFrom: "opacity-100 translate-x-0",
      leaveTo: "opacity-0 -translate-x-10",
      children: /* @__PURE__ */ p.jsx("div", { className: "bg-gray-100", onClick: () => s(!1), children: /* @__PURE__ */ p.jsxs("div", { className: "min-w-[300px] h-[90vh]", onClick: (i) => i.stopPropagation(), children: [
        /* @__PURE__ */ p.jsx($f, { order: o.order, teacher: o.teacher }),
        /* @__PURE__ */ p.jsx(If, { orderStatus: o.order.order_status }),
        /* @__PURE__ */ p.jsx(ih, { order: o.order }),
        /* @__PURE__ */ p.jsx(Mf, { teacher: o.teacher })
      ] }) })
    }
  );
}, uh = ({ roomMenuOpen: e, chatRoom: t, selectedTab: r, setSelectedTab: n, userProfiles: s }) => /* @__PURE__ */ p.jsx(
  ol,
  {
    show: e,
    as: _t,
    enter: "transition ease-out duration-200",
    enterFrom: "opacity-0 translate-x-10",
    enterTo: "opacity-100 translate-x-0",
    leave: "transition ease-in duration-150",
    leaveFrom: "opacity-100 translate-x-0",
    leaveTo: "opacity-0 translate-x-10",
    children: /* @__PURE__ */ p.jsx("div", { className: "flex flex-col border-y border-l h-[90vh]", children: t && t.map((o, a) => {
      var i, l, c, u;
      return /* @__PURE__ */ p.jsxs(
        "button",
        {
          className: Ne("min-w-[300px] px-4 py-2  flex flex-row gap-4 border-l-4 ", r === a ? "border-l-4 border-orange-400 bg-gray-100/50" : "border-white"),
          onClick: () => n(a),
          children: [
            /* @__PURE__ */ p.jsxs(Zt, { children: [
              /* @__PURE__ */ p.jsx(nr, { src: (i = s[a]) == null ? void 0 : i.photo_url }),
              /* @__PURE__ */ p.jsx(sr, { children: (l = s[a]) == null ? void 0 : l.firstname })
            ] }),
            /* @__PURE__ */ p.jsxs("div", { className: "flex flex-col items-start", children: [
              /* @__PURE__ */ p.jsxs("p", { className: "truncate max-w-[200px]", children: [
                o.room_name,
                " (",
                o.room_id,
                ")"
              ] }),
              /* @__PURE__ */ p.jsxs("p", { className: "text-sm", children: [
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
), vh = ({ socketApiUrl: e, dataBaseApiUrl: t, authToken: r, userId: n }) => {
  const [s, o] = xe(0), [a, i] = xe([]), { connectWebSocket: l, socketStatus: c, disconnectWebSocket: u } = Ys(), { fetchChatRoom: d, chatRoom: h } = Kc(), g = window.innerWidth <= 768, [v, y] = xe(!g), [x, M] = xe(!g);
  return Re(() => {
    const E = async () => {
      const k = (await Promise.all(h.map((_) => Va(t, r, _.room_id)))).flat().filter((_) => _.teacher_id);
      i(k);
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
  }, [l, d, e, t, r, u]), /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row w-full", children: [
    /* @__PURE__ */ p.jsx(
      uh,
      {
        roomMenuOpen: v,
        setRoomMenuOpen: y,
        selectedTab: s,
        setSelectedTab: o,
        userProfiles: a,
        chatRoom: h
      }
    ),
    h && h.map((E, C) => /* @__PURE__ */ p.jsx("div", { className: `w-full  ${s === C ? "block" : "hidden"}`, children: /* @__PURE__ */ p.jsxs("div", { className: "flex flex-row", children: [
      /* @__PURE__ */ p.jsx(
        Pf,
        {
          dataBaseApiUrl: t,
          authToken: r,
          currentRoom: E,
          roomId: E.room_id,
          userId: n,
          socketStatus: c,
          setRoomMenuOpen: y,
          roomMenuOpen: v,
          sideMenuOpen: x,
          setSideMenuOpen: M
        }
      ),
      /* @__PURE__ */ p.jsx(ch, { dataBaseApiUrl: t, authToken: r, roomId: E.room_id, sideMenuOpen: x, setSideMenuOpen: M })
    ] }) }, E.id))
  ] });
};
export {
  vh as ChatApp
};
