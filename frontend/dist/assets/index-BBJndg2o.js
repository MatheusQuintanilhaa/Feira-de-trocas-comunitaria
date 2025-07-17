(function () {
  const r = document.createElement("link").relList;
  if (r && r.supports && r.supports("modulepreload")) return;
  for (const o of document.querySelectorAll('link[rel="modulepreload"]')) s(o);
  new MutationObserver((o) => {
    for (const m of o)
      if (m.type === "childList")
        for (const p of m.addedNodes)
          p.tagName === "LINK" && p.rel === "modulepreload" && s(p);
  }).observe(document, { childList: !0, subtree: !0 });
  function c(o) {
    const m = {};
    return (
      o.integrity && (m.integrity = o.integrity),
      o.referrerPolicy && (m.referrerPolicy = o.referrerPolicy),
      o.crossOrigin === "use-credentials"
        ? (m.credentials = "include")
        : o.crossOrigin === "anonymous"
        ? (m.credentials = "omit")
        : (m.credentials = "same-origin"),
      m
    );
  }
  function s(o) {
    if (o.ep) return;
    o.ep = !0;
    const m = c(o);
    fetch(o.href, m);
  }
})();
var Ps = { exports: {} },
  Vn = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Em;
function np() {
  if (Em) return Vn;
  Em = 1;
  var u = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.fragment");
  function c(s, o, m) {
    var p = null;
    if (
      (m !== void 0 && (p = "" + m),
      o.key !== void 0 && (p = "" + o.key),
      "key" in o)
    ) {
      m = {};
      for (var b in o) b !== "key" && (m[b] = o[b]);
    } else m = o;
    return (
      (o = m.ref),
      { $$typeof: u, type: s, key: p, ref: o !== void 0 ? o : null, props: m }
    );
  }
  return (Vn.Fragment = r), (Vn.jsx = c), (Vn.jsxs = c), Vn;
}
var Nm;
function up() {
  return Nm || ((Nm = 1), (Ps.exports = np())), Ps.exports;
}
var d = up(),
  Is = { exports: {} },
  ne = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Tm;
function ip() {
  if (Tm) return ne;
  Tm = 1;
  var u = Symbol.for("react.transitional.element"),
    r = Symbol.for("react.portal"),
    c = Symbol.for("react.fragment"),
    s = Symbol.for("react.strict_mode"),
    o = Symbol.for("react.profiler"),
    m = Symbol.for("react.consumer"),
    p = Symbol.for("react.context"),
    b = Symbol.for("react.forward_ref"),
    v = Symbol.for("react.suspense"),
    y = Symbol.for("react.memo"),
    g = Symbol.for("react.lazy"),
    R = Symbol.iterator;
  function C(S) {
    return S === null || typeof S != "object"
      ? null
      : ((S = (R && S[R]) || S["@@iterator"]),
        typeof S == "function" ? S : null);
  }
  var G = {
      isMounted: function () {
        return !1;
      },
      enqueueForceUpdate: function () {},
      enqueueReplaceState: function () {},
      enqueueSetState: function () {},
    },
    B = Object.assign,
    Y = {};
  function _(S, L, V) {
    (this.props = S),
      (this.context = L),
      (this.refs = Y),
      (this.updater = V || G);
  }
  (_.prototype.isReactComponent = {}),
    (_.prototype.setState = function (S, L) {
      if (typeof S != "object" && typeof S != "function" && S != null)
        throw Error(
          "takes an object of state variables to update or a function which returns an object of state variables."
        );
      this.updater.enqueueSetState(this, S, L, "setState");
    }),
    (_.prototype.forceUpdate = function (S) {
      this.updater.enqueueForceUpdate(this, S, "forceUpdate");
    });
  function q() {}
  q.prototype = _.prototype;
  function F(S, L, V) {
    (this.props = S),
      (this.context = L),
      (this.refs = Y),
      (this.updater = V || G);
  }
  var K = (F.prototype = new q());
  (K.constructor = F), B(K, _.prototype), (K.isPureReactComponent = !0);
  var ce = Array.isArray,
    J = { H: null, A: null, T: null, S: null, V: null },
    he = Object.prototype.hasOwnProperty;
  function ye(S, L, V, X, W, fe) {
    return (
      (V = fe.ref),
      { $$typeof: u, type: S, key: L, ref: V !== void 0 ? V : null, props: fe }
    );
  }
  function je(S, L) {
    return ye(S.type, L, void 0, void 0, void 0, S.props);
  }
  function Se(S) {
    return typeof S == "object" && S !== null && S.$$typeof === u;
  }
  function k(S) {
    var L = { "=": "=0", ":": "=2" };
    return (
      "$" +
      S.replace(/[=:]/g, function (V) {
        return L[V];
      })
    );
  }
  var He = /\/+/g;
  function Ce(S, L) {
    return typeof S == "object" && S !== null && S.key != null
      ? k("" + S.key)
      : L.toString(36);
  }
  function Cl() {}
  function zl(S) {
    switch (S.status) {
      case "fulfilled":
        return S.value;
      case "rejected":
        throw S.reason;
      default:
        switch (
          (typeof S.status == "string"
            ? S.then(Cl, Cl)
            : ((S.status = "pending"),
              S.then(
                function (L) {
                  S.status === "pending" &&
                    ((S.status = "fulfilled"), (S.value = L));
                },
                function (L) {
                  S.status === "pending" &&
                    ((S.status = "rejected"), (S.reason = L));
                }
              )),
          S.status)
        ) {
          case "fulfilled":
            return S.value;
          case "rejected":
            throw S.reason;
        }
    }
    throw S;
  }
  function Fe(S, L, V, X, W) {
    var fe = typeof S;
    (fe === "undefined" || fe === "boolean") && (S = null);
    var le = !1;
    if (S === null) le = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          le = !0;
          break;
        case "object":
          switch (S.$$typeof) {
            case u:
            case r:
              le = !0;
              break;
            case g:
              return (le = S._init), Fe(le(S._payload), L, V, X, W);
          }
      }
    if (le)
      return (
        (W = W(S)),
        (le = X === "" ? "." + Ce(S, 0) : X),
        ce(W)
          ? ((V = ""),
            le != null && (V = le.replace(He, "$&/") + "/"),
            Fe(W, L, V, "", function (il) {
              return il;
            }))
          : W != null &&
            (Se(W) &&
              (W = je(
                W,
                V +
                  (W.key == null || (S && S.key === W.key)
                    ? ""
                    : ("" + W.key).replace(He, "$&/") + "/") +
                  le
              )),
            L.push(W)),
        1
      );
    le = 0;
    var ct = X === "" ? "." : X + ":";
    if (ce(S))
      for (var Re = 0; Re < S.length; Re++)
        (X = S[Re]), (fe = ct + Ce(X, Re)), (le += Fe(X, L, V, fe, W));
    else if (((Re = C(S)), typeof Re == "function"))
      for (S = Re.call(S), Re = 0; !(X = S.next()).done; )
        (X = X.value), (fe = ct + Ce(X, Re++)), (le += Fe(X, L, V, fe, W));
    else if (fe === "object") {
      if (typeof S.then == "function") return Fe(zl(S), L, V, X, W);
      throw (
        ((L = String(S)),
        Error(
          "Objects are not valid as a React child (found: " +
            (L === "[object Object]"
              ? "object with keys {" + Object.keys(S).join(", ") + "}"
              : L) +
            "). If you meant to render a collection of children, use an array instead."
        ))
      );
    }
    return le;
  }
  function M(S, L, V) {
    if (S == null) return S;
    var X = [],
      W = 0;
    return (
      Fe(S, X, "", "", function (fe) {
        return L.call(V, fe, W++);
      }),
      X
    );
  }
  function Q(S) {
    if (S._status === -1) {
      var L = S._result;
      (L = L()),
        L.then(
          function (V) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 1), (S._result = V));
          },
          function (V) {
            (S._status === 0 || S._status === -1) &&
              ((S._status = 2), (S._result = V));
          }
        ),
        S._status === -1 && ((S._status = 0), (S._result = L));
    }
    if (S._status === 1) return S._result.default;
    throw S._result;
  }
  var ee =
    typeof reportError == "function"
      ? reportError
      : function (S) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var L = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof S == "object" &&
                S !== null &&
                typeof S.message == "string"
                  ? String(S.message)
                  : String(S),
              error: S,
            });
            if (!window.dispatchEvent(L)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", S);
            return;
          }
          console.error(S);
        };
  function Ee() {}
  return (
    (ne.Children = {
      map: M,
      forEach: function (S, L, V) {
        M(
          S,
          function () {
            L.apply(this, arguments);
          },
          V
        );
      },
      count: function (S) {
        var L = 0;
        return (
          M(S, function () {
            L++;
          }),
          L
        );
      },
      toArray: function (S) {
        return (
          M(S, function (L) {
            return L;
          }) || []
        );
      },
      only: function (S) {
        if (!Se(S))
          throw Error(
            "React.Children.only expected to receive a single React element child."
          );
        return S;
      },
    }),
    (ne.Component = _),
    (ne.Fragment = c),
    (ne.Profiler = o),
    (ne.PureComponent = F),
    (ne.StrictMode = s),
    (ne.Suspense = v),
    (ne.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = J),
    (ne.__COMPILER_RUNTIME = {
      __proto__: null,
      c: function (S) {
        return J.H.useMemoCache(S);
      },
    }),
    (ne.cache = function (S) {
      return function () {
        return S.apply(null, arguments);
      };
    }),
    (ne.cloneElement = function (S, L, V) {
      if (S == null)
        throw Error(
          "The argument must be a React element, but you passed " + S + "."
        );
      var X = B({}, S.props),
        W = S.key,
        fe = void 0;
      if (L != null)
        for (le in (L.ref !== void 0 && (fe = void 0),
        L.key !== void 0 && (W = "" + L.key),
        L))
          !he.call(L, le) ||
            le === "key" ||
            le === "__self" ||
            le === "__source" ||
            (le === "ref" && L.ref === void 0) ||
            (X[le] = L[le]);
      var le = arguments.length - 2;
      if (le === 1) X.children = V;
      else if (1 < le) {
        for (var ct = Array(le), Re = 0; Re < le; Re++)
          ct[Re] = arguments[Re + 2];
        X.children = ct;
      }
      return ye(S.type, W, void 0, void 0, fe, X);
    }),
    (ne.createContext = function (S) {
      return (
        (S = {
          $$typeof: p,
          _currentValue: S,
          _currentValue2: S,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
        }),
        (S.Provider = S),
        (S.Consumer = { $$typeof: m, _context: S }),
        S
      );
    }),
    (ne.createElement = function (S, L, V) {
      var X,
        W = {},
        fe = null;
      if (L != null)
        for (X in (L.key !== void 0 && (fe = "" + L.key), L))
          he.call(L, X) &&
            X !== "key" &&
            X !== "__self" &&
            X !== "__source" &&
            (W[X] = L[X]);
      var le = arguments.length - 2;
      if (le === 1) W.children = V;
      else if (1 < le) {
        for (var ct = Array(le), Re = 0; Re < le; Re++)
          ct[Re] = arguments[Re + 2];
        W.children = ct;
      }
      if (S && S.defaultProps)
        for (X in ((le = S.defaultProps), le))
          W[X] === void 0 && (W[X] = le[X]);
      return ye(S, fe, void 0, void 0, null, W);
    }),
    (ne.createRef = function () {
      return { current: null };
    }),
    (ne.forwardRef = function (S) {
      return { $$typeof: b, render: S };
    }),
    (ne.isValidElement = Se),
    (ne.lazy = function (S) {
      return { $$typeof: g, _payload: { _status: -1, _result: S }, _init: Q };
    }),
    (ne.memo = function (S, L) {
      return { $$typeof: y, type: S, compare: L === void 0 ? null : L };
    }),
    (ne.startTransition = function (S) {
      var L = J.T,
        V = {};
      J.T = V;
      try {
        var X = S(),
          W = J.S;
        W !== null && W(V, X),
          typeof X == "object" &&
            X !== null &&
            typeof X.then == "function" &&
            X.then(Ee, ee);
      } catch (fe) {
        ee(fe);
      } finally {
        J.T = L;
      }
    }),
    (ne.unstable_useCacheRefresh = function () {
      return J.H.useCacheRefresh();
    }),
    (ne.use = function (S) {
      return J.H.use(S);
    }),
    (ne.useActionState = function (S, L, V) {
      return J.H.useActionState(S, L, V);
    }),
    (ne.useCallback = function (S, L) {
      return J.H.useCallback(S, L);
    }),
    (ne.useContext = function (S) {
      return J.H.useContext(S);
    }),
    (ne.useDebugValue = function () {}),
    (ne.useDeferredValue = function (S, L) {
      return J.H.useDeferredValue(S, L);
    }),
    (ne.useEffect = function (S, L, V) {
      var X = J.H;
      if (typeof V == "function")
        throw Error(
          "useEffect CRUD overload is not enabled in this build of React."
        );
      return X.useEffect(S, L);
    }),
    (ne.useId = function () {
      return J.H.useId();
    }),
    (ne.useImperativeHandle = function (S, L, V) {
      return J.H.useImperativeHandle(S, L, V);
    }),
    (ne.useInsertionEffect = function (S, L) {
      return J.H.useInsertionEffect(S, L);
    }),
    (ne.useLayoutEffect = function (S, L) {
      return J.H.useLayoutEffect(S, L);
    }),
    (ne.useMemo = function (S, L) {
      return J.H.useMemo(S, L);
    }),
    (ne.useOptimistic = function (S, L) {
      return J.H.useOptimistic(S, L);
    }),
    (ne.useReducer = function (S, L, V) {
      return J.H.useReducer(S, L, V);
    }),
    (ne.useRef = function (S) {
      return J.H.useRef(S);
    }),
    (ne.useState = function (S) {
      return J.H.useState(S);
    }),
    (ne.useSyncExternalStore = function (S, L, V) {
      return J.H.useSyncExternalStore(S, L, V);
    }),
    (ne.useTransition = function () {
      return J.H.useTransition();
    }),
    (ne.version = "19.1.0"),
    ne
  );
}
var jm;
function gc() {
  return jm || ((jm = 1), (Is.exports = ip())), Is.exports;
}
var A = gc(),
  ec = { exports: {} },
  Zn = {},
  tc = { exports: {} },
  lc = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Rm;
function rp() {
  return (
    Rm ||
      ((Rm = 1),
      (function (u) {
        function r(M, Q) {
          var ee = M.length;
          M.push(Q);
          e: for (; 0 < ee; ) {
            var Ee = (ee - 1) >>> 1,
              S = M[Ee];
            if (0 < o(S, Q)) (M[Ee] = Q), (M[ee] = S), (ee = Ee);
            else break e;
          }
        }
        function c(M) {
          return M.length === 0 ? null : M[0];
        }
        function s(M) {
          if (M.length === 0) return null;
          var Q = M[0],
            ee = M.pop();
          if (ee !== Q) {
            M[0] = ee;
            e: for (var Ee = 0, S = M.length, L = S >>> 1; Ee < L; ) {
              var V = 2 * (Ee + 1) - 1,
                X = M[V],
                W = V + 1,
                fe = M[W];
              if (0 > o(X, ee))
                W < S && 0 > o(fe, X)
                  ? ((M[Ee] = fe), (M[W] = ee), (Ee = W))
                  : ((M[Ee] = X), (M[V] = ee), (Ee = V));
              else if (W < S && 0 > o(fe, ee))
                (M[Ee] = fe), (M[W] = ee), (Ee = W);
              else break e;
            }
          }
          return Q;
        }
        function o(M, Q) {
          var ee = M.sortIndex - Q.sortIndex;
          return ee !== 0 ? ee : M.id - Q.id;
        }
        if (
          ((u.unstable_now = void 0),
          typeof performance == "object" &&
            typeof performance.now == "function")
        ) {
          var m = performance;
          u.unstable_now = function () {
            return m.now();
          };
        } else {
          var p = Date,
            b = p.now();
          u.unstable_now = function () {
            return p.now() - b;
          };
        }
        var v = [],
          y = [],
          g = 1,
          R = null,
          C = 3,
          G = !1,
          B = !1,
          Y = !1,
          _ = !1,
          q = typeof setTimeout == "function" ? setTimeout : null,
          F = typeof clearTimeout == "function" ? clearTimeout : null,
          K = typeof setImmediate < "u" ? setImmediate : null;
        function ce(M) {
          for (var Q = c(y); Q !== null; ) {
            if (Q.callback === null) s(y);
            else if (Q.startTime <= M)
              s(y), (Q.sortIndex = Q.expirationTime), r(v, Q);
            else break;
            Q = c(y);
          }
        }
        function J(M) {
          if (((Y = !1), ce(M), !B))
            if (c(v) !== null) (B = !0), he || ((he = !0), Ce());
            else {
              var Q = c(y);
              Q !== null && Fe(J, Q.startTime - M);
            }
        }
        var he = !1,
          ye = -1,
          je = 5,
          Se = -1;
        function k() {
          return _ ? !0 : !(u.unstable_now() - Se < je);
        }
        function He() {
          if (((_ = !1), he)) {
            var M = u.unstable_now();
            Se = M;
            var Q = !0;
            try {
              e: {
                (B = !1), Y && ((Y = !1), F(ye), (ye = -1)), (G = !0);
                var ee = C;
                try {
                  t: {
                    for (
                      ce(M), R = c(v);
                      R !== null && !(R.expirationTime > M && k());

                    ) {
                      var Ee = R.callback;
                      if (typeof Ee == "function") {
                        (R.callback = null), (C = R.priorityLevel);
                        var S = Ee(R.expirationTime <= M);
                        if (((M = u.unstable_now()), typeof S == "function")) {
                          (R.callback = S), ce(M), (Q = !0);
                          break t;
                        }
                        R === c(v) && s(v), ce(M);
                      } else s(v);
                      R = c(v);
                    }
                    if (R !== null) Q = !0;
                    else {
                      var L = c(y);
                      L !== null && Fe(J, L.startTime - M), (Q = !1);
                    }
                  }
                  break e;
                } finally {
                  (R = null), (C = ee), (G = !1);
                }
                Q = void 0;
              }
            } finally {
              Q ? Ce() : (he = !1);
            }
          }
        }
        var Ce;
        if (typeof K == "function")
          Ce = function () {
            K(He);
          };
        else if (typeof MessageChannel < "u") {
          var Cl = new MessageChannel(),
            zl = Cl.port2;
          (Cl.port1.onmessage = He),
            (Ce = function () {
              zl.postMessage(null);
            });
        } else
          Ce = function () {
            q(He, 0);
          };
        function Fe(M, Q) {
          ye = q(function () {
            M(u.unstable_now());
          }, Q);
        }
        (u.unstable_IdlePriority = 5),
          (u.unstable_ImmediatePriority = 1),
          (u.unstable_LowPriority = 4),
          (u.unstable_NormalPriority = 3),
          (u.unstable_Profiling = null),
          (u.unstable_UserBlockingPriority = 2),
          (u.unstable_cancelCallback = function (M) {
            M.callback = null;
          }),
          (u.unstable_forceFrameRate = function (M) {
            0 > M || 125 < M
              ? console.error(
                  "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
                )
              : (je = 0 < M ? Math.floor(1e3 / M) : 5);
          }),
          (u.unstable_getCurrentPriorityLevel = function () {
            return C;
          }),
          (u.unstable_next = function (M) {
            switch (C) {
              case 1:
              case 2:
              case 3:
                var Q = 3;
                break;
              default:
                Q = C;
            }
            var ee = C;
            C = Q;
            try {
              return M();
            } finally {
              C = ee;
            }
          }),
          (u.unstable_requestPaint = function () {
            _ = !0;
          }),
          (u.unstable_runWithPriority = function (M, Q) {
            switch (M) {
              case 1:
              case 2:
              case 3:
              case 4:
              case 5:
                break;
              default:
                M = 3;
            }
            var ee = C;
            C = M;
            try {
              return Q();
            } finally {
              C = ee;
            }
          }),
          (u.unstable_scheduleCallback = function (M, Q, ee) {
            var Ee = u.unstable_now();
            switch (
              (typeof ee == "object" && ee !== null
                ? ((ee = ee.delay),
                  (ee = typeof ee == "number" && 0 < ee ? Ee + ee : Ee))
                : (ee = Ee),
              M)
            ) {
              case 1:
                var S = -1;
                break;
              case 2:
                S = 250;
                break;
              case 5:
                S = 1073741823;
                break;
              case 4:
                S = 1e4;
                break;
              default:
                S = 5e3;
            }
            return (
              (S = ee + S),
              (M = {
                id: g++,
                callback: Q,
                priorityLevel: M,
                startTime: ee,
                expirationTime: S,
                sortIndex: -1,
              }),
              ee > Ee
                ? ((M.sortIndex = ee),
                  r(y, M),
                  c(v) === null &&
                    M === c(y) &&
                    (Y ? (F(ye), (ye = -1)) : (Y = !0), Fe(J, ee - Ee)))
                : ((M.sortIndex = S),
                  r(v, M),
                  B || G || ((B = !0), he || ((he = !0), Ce()))),
              M
            );
          }),
          (u.unstable_shouldYield = k),
          (u.unstable_wrapCallback = function (M) {
            var Q = C;
            return function () {
              var ee = C;
              C = Q;
              try {
                return M.apply(this, arguments);
              } finally {
                C = ee;
              }
            };
          });
      })(lc)),
    lc
  );
}
var Am;
function sp() {
  return Am || ((Am = 1), (tc.exports = rp())), tc.exports;
}
var ac = { exports: {} },
  Ie = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Om;
function cp() {
  if (Om) return Ie;
  Om = 1;
  var u = gc();
  function r(v) {
    var y = "https://react.dev/errors/" + v;
    if (1 < arguments.length) {
      y += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var g = 2; g < arguments.length; g++)
        y += "&args[]=" + encodeURIComponent(arguments[g]);
    }
    return (
      "Minified React error #" +
      v +
      "; visit " +
      y +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function c() {}
  var s = {
      d: {
        f: c,
        r: function () {
          throw Error(r(522));
        },
        D: c,
        C: c,
        L: c,
        m: c,
        X: c,
        S: c,
        M: c,
      },
      p: 0,
      findDOMNode: null,
    },
    o = Symbol.for("react.portal");
  function m(v, y, g) {
    var R =
      3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: o,
      key: R == null ? null : "" + R,
      children: v,
      containerInfo: y,
      implementation: g,
    };
  }
  var p = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(v, y) {
    if (v === "font") return "";
    if (typeof y == "string") return y === "use-credentials" ? y : "";
  }
  return (
    (Ie.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s),
    (Ie.createPortal = function (v, y) {
      var g =
        2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
      if (!y || (y.nodeType !== 1 && y.nodeType !== 9 && y.nodeType !== 11))
        throw Error(r(299));
      return m(v, y, null, g);
    }),
    (Ie.flushSync = function (v) {
      var y = p.T,
        g = s.p;
      try {
        if (((p.T = null), (s.p = 2), v)) return v();
      } finally {
        (p.T = y), (s.p = g), s.d.f();
      }
    }),
    (Ie.preconnect = function (v, y) {
      typeof v == "string" &&
        (y
          ? ((y = y.crossOrigin),
            (y =
              typeof y == "string"
                ? y === "use-credentials"
                  ? y
                  : ""
                : void 0))
          : (y = null),
        s.d.C(v, y));
    }),
    (Ie.prefetchDNS = function (v) {
      typeof v == "string" && s.d.D(v);
    }),
    (Ie.preinit = function (v, y) {
      if (typeof v == "string" && y && typeof y.as == "string") {
        var g = y.as,
          R = b(g, y.crossOrigin),
          C = typeof y.integrity == "string" ? y.integrity : void 0,
          G = typeof y.fetchPriority == "string" ? y.fetchPriority : void 0;
        g === "style"
          ? s.d.S(v, typeof y.precedence == "string" ? y.precedence : void 0, {
              crossOrigin: R,
              integrity: C,
              fetchPriority: G,
            })
          : g === "script" &&
            s.d.X(v, {
              crossOrigin: R,
              integrity: C,
              fetchPriority: G,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
      }
    }),
    (Ie.preinitModule = function (v, y) {
      if (typeof v == "string")
        if (typeof y == "object" && y !== null) {
          if (y.as == null || y.as === "script") {
            var g = b(y.as, y.crossOrigin);
            s.d.M(v, {
              crossOrigin: g,
              integrity: typeof y.integrity == "string" ? y.integrity : void 0,
              nonce: typeof y.nonce == "string" ? y.nonce : void 0,
            });
          }
        } else y == null && s.d.M(v);
    }),
    (Ie.preload = function (v, y) {
      if (
        typeof v == "string" &&
        typeof y == "object" &&
        y !== null &&
        typeof y.as == "string"
      ) {
        var g = y.as,
          R = b(g, y.crossOrigin);
        s.d.L(v, g, {
          crossOrigin: R,
          integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          nonce: typeof y.nonce == "string" ? y.nonce : void 0,
          type: typeof y.type == "string" ? y.type : void 0,
          fetchPriority:
            typeof y.fetchPriority == "string" ? y.fetchPriority : void 0,
          referrerPolicy:
            typeof y.referrerPolicy == "string" ? y.referrerPolicy : void 0,
          imageSrcSet:
            typeof y.imageSrcSet == "string" ? y.imageSrcSet : void 0,
          imageSizes: typeof y.imageSizes == "string" ? y.imageSizes : void 0,
          media: typeof y.media == "string" ? y.media : void 0,
        });
      }
    }),
    (Ie.preloadModule = function (v, y) {
      if (typeof v == "string")
        if (y) {
          var g = b(y.as, y.crossOrigin);
          s.d.m(v, {
            as: typeof y.as == "string" && y.as !== "script" ? y.as : void 0,
            crossOrigin: g,
            integrity: typeof y.integrity == "string" ? y.integrity : void 0,
          });
        } else s.d.m(v);
    }),
    (Ie.requestFormReset = function (v) {
      s.d.r(v);
    }),
    (Ie.unstable_batchedUpdates = function (v, y) {
      return v(y);
    }),
    (Ie.useFormState = function (v, y, g) {
      return p.H.useFormState(v, y, g);
    }),
    (Ie.useFormStatus = function () {
      return p.H.useHostTransitionStatus();
    }),
    (Ie.version = "19.1.0"),
    Ie
  );
}
var wm;
function op() {
  if (wm) return ac.exports;
  wm = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), (ac.exports = cp()), ac.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Dm;
function fp() {
  if (Dm) return Zn;
  Dm = 1;
  var u = sp(),
    r = gc(),
    c = op();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var l = 2; l < arguments.length; l++)
        t += "&args[]=" + encodeURIComponent(arguments[l]);
    }
    return (
      "Minified React error #" +
      e +
      "; visit " +
      t +
      " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
    );
  }
  function o(e) {
    return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
  }
  function m(e) {
    var t = e,
      l = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do (t = e), (t.flags & 4098) !== 0 && (l = t.return), (e = t.return);
      while (e);
    }
    return t.tag === 3 ? l : null;
  }
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (
        (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
        t !== null)
      )
        return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (m(e) !== e) throw Error(s(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (((t = m(e)), t === null)) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var l = e, a = t; ; ) {
      var n = l.return;
      if (n === null) break;
      var i = n.alternate;
      if (i === null) {
        if (((a = n.return), a !== null)) {
          l = a;
          continue;
        }
        break;
      }
      if (n.child === i.child) {
        for (i = n.child; i; ) {
          if (i === l) return b(n), e;
          if (i === a) return b(n), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (l.return !== a.return) (l = n), (a = i);
      else {
        for (var f = !1, h = n.child; h; ) {
          if (h === l) {
            (f = !0), (l = n), (a = i);
            break;
          }
          if (h === a) {
            (f = !0), (a = n), (l = i);
            break;
          }
          h = h.sibling;
        }
        if (!f) {
          for (h = i.child; h; ) {
            if (h === l) {
              (f = !0), (l = i), (a = n);
              break;
            }
            if (h === a) {
              (f = !0), (a = i), (l = n);
              break;
            }
            h = h.sibling;
          }
          if (!f) throw Error(s(189));
        }
      }
      if (l.alternate !== a) throw Error(s(190));
    }
    if (l.tag !== 3) throw Error(s(188));
    return l.stateNode.current === l ? e : t;
  }
  function y(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (((t = y(e)), t !== null)) return t;
      e = e.sibling;
    }
    return null;
  }
  var g = Object.assign,
    R = Symbol.for("react.element"),
    C = Symbol.for("react.transitional.element"),
    G = Symbol.for("react.portal"),
    B = Symbol.for("react.fragment"),
    Y = Symbol.for("react.strict_mode"),
    _ = Symbol.for("react.profiler"),
    q = Symbol.for("react.provider"),
    F = Symbol.for("react.consumer"),
    K = Symbol.for("react.context"),
    ce = Symbol.for("react.forward_ref"),
    J = Symbol.for("react.suspense"),
    he = Symbol.for("react.suspense_list"),
    ye = Symbol.for("react.memo"),
    je = Symbol.for("react.lazy"),
    Se = Symbol.for("react.activity"),
    k = Symbol.for("react.memo_cache_sentinel"),
    He = Symbol.iterator;
  function Ce(e) {
    return e === null || typeof e != "object"
      ? null
      : ((e = (He && e[He]) || e["@@iterator"]),
        typeof e == "function" ? e : null);
  }
  var Cl = Symbol.for("react.client.reference");
  function zl(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Cl ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case B:
        return "Fragment";
      case _:
        return "Profiler";
      case Y:
        return "StrictMode";
      case J:
        return "Suspense";
      case he:
        return "SuspenseList";
      case Se:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case G:
          return "Portal";
        case K:
          return (e.displayName || "Context") + ".Provider";
        case F:
          return (e._context.displayName || "Context") + ".Consumer";
        case ce:
          var t = e.render;
          return (
            (e = e.displayName),
            e ||
              ((e = t.displayName || t.name || ""),
              (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
            e
          );
        case ye:
          return (
            (t = e.displayName || null), t !== null ? t : zl(e.type) || "Memo"
          );
        case je:
          (t = e._payload), (e = e._init);
          try {
            return zl(e(t));
          } catch {}
      }
    return null;
  }
  var Fe = Array.isArray,
    M = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    Q = c.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
    ee = { pending: !1, data: null, method: null, action: null },
    Ee = [],
    S = -1;
  function L(e) {
    return { current: e };
  }
  function V(e) {
    0 > S || ((e.current = Ee[S]), (Ee[S] = null), S--);
  }
  function X(e, t) {
    S++, (Ee[S] = e.current), (e.current = t);
  }
  var W = L(null),
    fe = L(null),
    le = L(null),
    ct = L(null);
  function Re(e, t) {
    switch ((X(le, t), X(fe, e), X(W, null), t.nodeType)) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Fd(e) : 0;
        break;
      default:
        if (((e = t.tagName), (t = t.namespaceURI)))
          (t = Fd(t)), (e = Wd(t, e));
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    V(W), X(W, e);
  }
  function il() {
    V(W), V(fe), V(le);
  }
  function Hi(e) {
    e.memoizedState !== null && X(ct, e);
    var t = W.current,
      l = Wd(t, e.type);
    t !== l && (X(fe, e), X(W, l));
  }
  function au(e) {
    fe.current === e && (V(W), V(fe)),
      ct.current === e && (V(ct), (Ln._currentValue = ee));
  }
  var qi = Object.prototype.hasOwnProperty,
    Li = u.unstable_scheduleCallback,
    Yi = u.unstable_cancelCallback,
    Bh = u.unstable_shouldYield,
    Hh = u.unstable_requestPaint,
    Mt = u.unstable_now,
    qh = u.unstable_getCurrentPriorityLevel,
    Oc = u.unstable_ImmediatePriority,
    wc = u.unstable_UserBlockingPriority,
    nu = u.unstable_NormalPriority,
    Lh = u.unstable_LowPriority,
    Dc = u.unstable_IdlePriority,
    Yh = u.log,
    Gh = u.unstable_setDisableYieldValue,
    Ka = null,
    ot = null;
  function rl(e) {
    if (
      (typeof Yh == "function" && Gh(e),
      ot && typeof ot.setStrictMode == "function")
    )
      try {
        ot.setStrictMode(Ka, e);
      } catch {}
  }
  var ft = Math.clz32 ? Math.clz32 : Vh,
    Xh = Math.log,
    Qh = Math.LN2;
  function Vh(e) {
    return (e >>>= 0), e === 0 ? 32 : (31 - ((Xh(e) / Qh) | 0)) | 0;
  }
  var uu = 256,
    iu = 4194304;
  function Ml(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194048;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function ru(e, t, l) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var n = 0,
      i = e.suspendedLanes,
      f = e.pingedLanes;
    e = e.warmLanes;
    var h = a & 134217727;
    return (
      h !== 0
        ? ((a = h & ~i),
          a !== 0
            ? (n = Ml(a))
            : ((f &= h),
              f !== 0
                ? (n = Ml(f))
                : l || ((l = h & ~e), l !== 0 && (n = Ml(l)))))
        : ((h = a & ~i),
          h !== 0
            ? (n = Ml(h))
            : f !== 0
            ? (n = Ml(f))
            : l || ((l = a & ~e), l !== 0 && (n = Ml(l)))),
      n === 0
        ? 0
        : t !== 0 &&
          t !== n &&
          (t & i) === 0 &&
          ((i = n & -n),
          (l = t & -t),
          i >= l || (i === 32 && (l & 4194048) !== 0))
        ? t
        : n
    );
  }
  function Ja(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Zh(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function _c() {
    var e = uu;
    return (uu <<= 1), (uu & 4194048) === 0 && (uu = 256), e;
  }
  function Cc() {
    var e = iu;
    return (iu <<= 1), (iu & 62914560) === 0 && (iu = 4194304), e;
  }
  function Gi(e) {
    for (var t = [], l = 0; 31 > l; l++) t.push(e);
    return t;
  }
  function ka(e, t) {
    (e.pendingLanes |= t),
      t !== 268435456 &&
        ((e.suspendedLanes = 0), (e.pingedLanes = 0), (e.warmLanes = 0));
  }
  function Kh(e, t, l, a, n, i) {
    var f = e.pendingLanes;
    (e.pendingLanes = l),
      (e.suspendedLanes = 0),
      (e.pingedLanes = 0),
      (e.warmLanes = 0),
      (e.expiredLanes &= l),
      (e.entangledLanes &= l),
      (e.errorRecoveryDisabledLanes &= l),
      (e.shellSuspendCounter = 0);
    var h = e.entanglements,
      x = e.expirationTimes,
      j = e.hiddenUpdates;
    for (l = f & ~l; 0 < l; ) {
      var z = 31 - ft(l),
        H = 1 << z;
      (h[z] = 0), (x[z] = -1);
      var O = j[z];
      if (O !== null)
        for (j[z] = null, z = 0; z < O.length; z++) {
          var w = O[z];
          w !== null && (w.lane &= -536870913);
        }
      l &= ~H;
    }
    a !== 0 && zc(e, a, 0),
      i !== 0 && n === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(f & ~t));
  }
  function zc(e, t, l) {
    (e.pendingLanes |= t), (e.suspendedLanes &= ~t);
    var a = 31 - ft(t);
    (e.entangledLanes |= t),
      (e.entanglements[a] = e.entanglements[a] | 1073741824 | (l & 4194090));
  }
  function Mc(e, t) {
    var l = (e.entangledLanes |= t);
    for (e = e.entanglements; l; ) {
      var a = 31 - ft(l),
        n = 1 << a;
      (n & t) | (e[a] & t) && (e[a] |= t), (l &= ~n);
    }
  }
  function Xi(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Qi(e) {
    return (
      (e &= -e),
      2 < e ? (8 < e ? ((e & 134217727) !== 0 ? 32 : 268435456) : 8) : 2
    );
  }
  function Uc() {
    var e = Q.p;
    return e !== 0 ? e : ((e = window.event), e === void 0 ? 32 : pm(e.type));
  }
  function Jh(e, t) {
    var l = Q.p;
    try {
      return (Q.p = e), t();
    } finally {
      Q.p = l;
    }
  }
  var sl = Math.random().toString(36).slice(2),
    We = "__reactFiber$" + sl,
    lt = "__reactProps$" + sl,
    ta = "__reactContainer$" + sl,
    Vi = "__reactEvents$" + sl,
    kh = "__reactListeners$" + sl,
    $h = "__reactHandles$" + sl,
    Bc = "__reactResources$" + sl,
    $a = "__reactMarker$" + sl;
  function Zi(e) {
    delete e[We], delete e[lt], delete e[Vi], delete e[kh], delete e[$h];
  }
  function la(e) {
    var t = e[We];
    if (t) return t;
    for (var l = e.parentNode; l; ) {
      if ((t = l[ta] || l[We])) {
        if (
          ((l = t.alternate),
          t.child !== null || (l !== null && l.child !== null))
        )
          for (e = tm(e); e !== null; ) {
            if ((l = e[We])) return l;
            e = tm(e);
          }
        return t;
      }
      (e = l), (l = e.parentNode);
    }
    return null;
  }
  function aa(e) {
    if ((e = e[We] || e[ta])) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function Fa(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function na(e) {
    var t = e[Bc];
    return (
      t ||
        (t = e[Bc] =
          { hoistableStyles: new Map(), hoistableScripts: new Map() }),
      t
    );
  }
  function Xe(e) {
    e[$a] = !0;
  }
  var Hc = new Set(),
    qc = {};
  function Ul(e, t) {
    ua(e, t), ua(e + "Capture", t);
  }
  function ua(e, t) {
    for (qc[e] = t, e = 0; e < t.length; e++) Hc.add(t[e]);
  }
  var Fh = RegExp(
      "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
    ),
    Lc = {},
    Yc = {};
  function Wh(e) {
    return qi.call(Yc, e)
      ? !0
      : qi.call(Lc, e)
      ? !1
      : Fh.test(e)
      ? (Yc[e] = !0)
      : ((Lc[e] = !0), !1);
  }
  function su(e, t, l) {
    if (Wh(t))
      if (l === null) e.removeAttribute(t);
      else {
        switch (typeof l) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + l);
      }
  }
  function cu(e, t, l) {
    if (l === null) e.removeAttribute(t);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, "" + l);
    }
  }
  function Xt(e, t, l, a) {
    if (a === null) e.removeAttribute(l);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(l);
          return;
      }
      e.setAttributeNS(t, l, "" + a);
    }
  }
  var Ki, Gc;
  function ia(e) {
    if (Ki === void 0)
      try {
        throw Error();
      } catch (l) {
        var t = l.stack.trim().match(/\n( *(at )?)/);
        (Ki = (t && t[1]) || ""),
          (Gc =
            -1 <
            l.stack.indexOf(`
    at`)
              ? " (<anonymous>)"
              : -1 < l.stack.indexOf("@")
              ? "@unknown:0:0"
              : "");
      }
    return (
      `
` +
      Ki +
      e +
      Gc
    );
  }
  var Ji = !1;
  function ki(e, t) {
    if (!e || Ji) return "";
    Ji = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function () {
          try {
            if (t) {
              var H = function () {
                throw Error();
              };
              if (
                (Object.defineProperty(H.prototype, "props", {
                  set: function () {
                    throw Error();
                  },
                }),
                typeof Reflect == "object" && Reflect.construct)
              ) {
                try {
                  Reflect.construct(H, []);
                } catch (w) {
                  var O = w;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (w) {
                  O = w;
                }
                e.call(H.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (w) {
                O = w;
              }
              (H = e()) &&
                typeof H.catch == "function" &&
                H.catch(function () {});
            }
          } catch (w) {
            if (w && O && typeof w.stack == "string") return [w.stack, O.stack];
          }
          return [null, null];
        },
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var n = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      n &&
        n.configurable &&
        Object.defineProperty(a.DetermineComponentFrameRoot, "name", {
          value: "DetermineComponentFrameRoot",
        });
      var i = a.DetermineComponentFrameRoot(),
        f = i[0],
        h = i[1];
      if (f && h) {
        var x = f.split(`
`),
          j = h.split(`
`);
        for (
          n = a = 0;
          a < x.length && !x[a].includes("DetermineComponentFrameRoot");

        )
          a++;
        for (; n < j.length && !j[n].includes("DetermineComponentFrameRoot"); )
          n++;
        if (a === x.length || n === j.length)
          for (
            a = x.length - 1, n = j.length - 1;
            1 <= a && 0 <= n && x[a] !== j[n];

          )
            n--;
        for (; 1 <= a && 0 <= n; a--, n--)
          if (x[a] !== j[n]) {
            if (a !== 1 || n !== 1)
              do
                if ((a--, n--, 0 > n || x[a] !== j[n])) {
                  var z =
                    `
` + x[a].replace(" at new ", " at ");
                  return (
                    e.displayName &&
                      z.includes("<anonymous>") &&
                      (z = z.replace("<anonymous>", e.displayName)),
                    z
                  );
                }
              while (1 <= a && 0 <= n);
            break;
          }
      }
    } finally {
      (Ji = !1), (Error.prepareStackTrace = l);
    }
    return (l = e ? e.displayName || e.name : "") ? ia(l) : "";
  }
  function Ph(e) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return ia(e.type);
      case 16:
        return ia("Lazy");
      case 13:
        return ia("Suspense");
      case 19:
        return ia("SuspenseList");
      case 0:
      case 15:
        return ki(e.type, !1);
      case 11:
        return ki(e.type.render, !1);
      case 1:
        return ki(e.type, !0);
      case 31:
        return ia("Activity");
      default:
        return "";
    }
  }
  function Xc(e) {
    try {
      var t = "";
      do (t += Ph(e)), (e = e.return);
      while (e);
      return t;
    } catch (l) {
      return (
        `
Error generating stack: ` +
        l.message +
        `
` +
        l.stack
      );
    }
  }
  function xt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function Qc(e) {
    var t = e.type;
    return (
      (e = e.nodeName) &&
      e.toLowerCase() === "input" &&
      (t === "checkbox" || t === "radio")
    );
  }
  function Ih(e) {
    var t = Qc(e) ? "checked" : "value",
      l = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
      a = "" + e[t];
    if (
      !e.hasOwnProperty(t) &&
      typeof l < "u" &&
      typeof l.get == "function" &&
      typeof l.set == "function"
    ) {
      var n = l.get,
        i = l.set;
      return (
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function () {
            return n.call(this);
          },
          set: function (f) {
            (a = "" + f), i.call(this, f);
          },
        }),
        Object.defineProperty(e, t, { enumerable: l.enumerable }),
        {
          getValue: function () {
            return a;
          },
          setValue: function (f) {
            a = "" + f;
          },
          stopTracking: function () {
            (e._valueTracker = null), delete e[t];
          },
        }
      );
    }
  }
  function ou(e) {
    e._valueTracker || (e._valueTracker = Ih(e));
  }
  function Vc(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var l = t.getValue(),
      a = "";
    return (
      e && (a = Qc(e) ? (e.checked ? "true" : "false") : e.value),
      (e = a),
      e !== l ? (t.setValue(e), !0) : !1
    );
  }
  function fu(e) {
    if (
      ((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u")
    )
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var e0 = /[\n"\\]/g;
  function bt(e) {
    return e.replace(e0, function (t) {
      return "\\" + t.charCodeAt(0).toString(16) + " ";
    });
  }
  function $i(e, t, l, a, n, i, f, h) {
    (e.name = ""),
      f != null &&
      typeof f != "function" &&
      typeof f != "symbol" &&
      typeof f != "boolean"
        ? (e.type = f)
        : e.removeAttribute("type"),
      t != null
        ? f === "number"
          ? ((t === 0 && e.value === "") || e.value != t) &&
            (e.value = "" + xt(t))
          : e.value !== "" + xt(t) && (e.value = "" + xt(t))
        : (f !== "submit" && f !== "reset") || e.removeAttribute("value"),
      t != null
        ? Fi(e, f, xt(t))
        : l != null
        ? Fi(e, f, xt(l))
        : a != null && e.removeAttribute("value"),
      n == null && i != null && (e.defaultChecked = !!i),
      n != null &&
        (e.checked = n && typeof n != "function" && typeof n != "symbol"),
      h != null &&
      typeof h != "function" &&
      typeof h != "symbol" &&
      typeof h != "boolean"
        ? (e.name = "" + xt(h))
        : e.removeAttribute("name");
  }
  function Zc(e, t, l, a, n, i, f, h) {
    if (
      (i != null &&
        typeof i != "function" &&
        typeof i != "symbol" &&
        typeof i != "boolean" &&
        (e.type = i),
      t != null || l != null)
    ) {
      if (!((i !== "submit" && i !== "reset") || t != null)) return;
      (l = l != null ? "" + xt(l) : ""),
        (t = t != null ? "" + xt(t) : l),
        h || t === e.value || (e.value = t),
        (e.defaultValue = t);
    }
    (a = a ?? n),
      (a = typeof a != "function" && typeof a != "symbol" && !!a),
      (e.checked = h ? e.checked : !!a),
      (e.defaultChecked = !!a),
      f != null &&
        typeof f != "function" &&
        typeof f != "symbol" &&
        typeof f != "boolean" &&
        (e.name = f);
  }
  function Fi(e, t, l) {
    (t === "number" && fu(e.ownerDocument) === e) ||
      e.defaultValue === "" + l ||
      (e.defaultValue = "" + l);
  }
  function ra(e, t, l, a) {
    if (((e = e.options), t)) {
      t = {};
      for (var n = 0; n < l.length; n++) t["$" + l[n]] = !0;
      for (l = 0; l < e.length; l++)
        (n = t.hasOwnProperty("$" + e[l].value)),
          e[l].selected !== n && (e[l].selected = n),
          n && a && (e[l].defaultSelected = !0);
    } else {
      for (l = "" + xt(l), t = null, n = 0; n < e.length; n++) {
        if (e[n].value === l) {
          (e[n].selected = !0), a && (e[n].defaultSelected = !0);
          return;
        }
        t !== null || e[n].disabled || (t = e[n]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Kc(e, t, l) {
    if (
      t != null &&
      ((t = "" + xt(t)), t !== e.value && (e.value = t), l == null)
    ) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = l != null ? "" + xt(l) : "";
  }
  function Jc(e, t, l, a) {
    if (t == null) {
      if (a != null) {
        if (l != null) throw Error(s(92));
        if (Fe(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        l = a;
      }
      l == null && (l = ""), (t = l);
    }
    (l = xt(t)),
      (e.defaultValue = l),
      (a = e.textContent),
      a === l && a !== "" && a !== null && (e.value = a);
  }
  function sa(e, t) {
    if (t) {
      var l = e.firstChild;
      if (l && l === e.lastChild && l.nodeType === 3) {
        l.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var t0 = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function kc(e, t, l) {
    var a = t.indexOf("--") === 0;
    l == null || typeof l == "boolean" || l === ""
      ? a
        ? e.setProperty(t, "")
        : t === "float"
        ? (e.cssFloat = "")
        : (e[t] = "")
      : a
      ? e.setProperty(t, l)
      : typeof l != "number" || l === 0 || t0.has(t)
      ? t === "float"
        ? (e.cssFloat = l)
        : (e[t] = ("" + l).trim())
      : (e[t] = l + "px");
  }
  function $c(e, t, l) {
    if (t != null && typeof t != "object") throw Error(s(62));
    if (((e = e.style), l != null)) {
      for (var a in l)
        !l.hasOwnProperty(a) ||
          (t != null && t.hasOwnProperty(a)) ||
          (a.indexOf("--") === 0
            ? e.setProperty(a, "")
            : a === "float"
            ? (e.cssFloat = "")
            : (e[a] = ""));
      for (var n in t)
        (a = t[n]), t.hasOwnProperty(n) && l[n] !== a && kc(e, n, a);
    } else for (var i in t) t.hasOwnProperty(i) && kc(e, i, t[i]);
  }
  function Wi(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var l0 = new Map([
      ["acceptCharset", "accept-charset"],
      ["htmlFor", "for"],
      ["httpEquiv", "http-equiv"],
      ["crossOrigin", "crossorigin"],
      ["accentHeight", "accent-height"],
      ["alignmentBaseline", "alignment-baseline"],
      ["arabicForm", "arabic-form"],
      ["baselineShift", "baseline-shift"],
      ["capHeight", "cap-height"],
      ["clipPath", "clip-path"],
      ["clipRule", "clip-rule"],
      ["colorInterpolation", "color-interpolation"],
      ["colorInterpolationFilters", "color-interpolation-filters"],
      ["colorProfile", "color-profile"],
      ["colorRendering", "color-rendering"],
      ["dominantBaseline", "dominant-baseline"],
      ["enableBackground", "enable-background"],
      ["fillOpacity", "fill-opacity"],
      ["fillRule", "fill-rule"],
      ["floodColor", "flood-color"],
      ["floodOpacity", "flood-opacity"],
      ["fontFamily", "font-family"],
      ["fontSize", "font-size"],
      ["fontSizeAdjust", "font-size-adjust"],
      ["fontStretch", "font-stretch"],
      ["fontStyle", "font-style"],
      ["fontVariant", "font-variant"],
      ["fontWeight", "font-weight"],
      ["glyphName", "glyph-name"],
      ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
      ["glyphOrientationVertical", "glyph-orientation-vertical"],
      ["horizAdvX", "horiz-adv-x"],
      ["horizOriginX", "horiz-origin-x"],
      ["imageRendering", "image-rendering"],
      ["letterSpacing", "letter-spacing"],
      ["lightingColor", "lighting-color"],
      ["markerEnd", "marker-end"],
      ["markerMid", "marker-mid"],
      ["markerStart", "marker-start"],
      ["overlinePosition", "overline-position"],
      ["overlineThickness", "overline-thickness"],
      ["paintOrder", "paint-order"],
      ["panose-1", "panose-1"],
      ["pointerEvents", "pointer-events"],
      ["renderingIntent", "rendering-intent"],
      ["shapeRendering", "shape-rendering"],
      ["stopColor", "stop-color"],
      ["stopOpacity", "stop-opacity"],
      ["strikethroughPosition", "strikethrough-position"],
      ["strikethroughThickness", "strikethrough-thickness"],
      ["strokeDasharray", "stroke-dasharray"],
      ["strokeDashoffset", "stroke-dashoffset"],
      ["strokeLinecap", "stroke-linecap"],
      ["strokeLinejoin", "stroke-linejoin"],
      ["strokeMiterlimit", "stroke-miterlimit"],
      ["strokeOpacity", "stroke-opacity"],
      ["strokeWidth", "stroke-width"],
      ["textAnchor", "text-anchor"],
      ["textDecoration", "text-decoration"],
      ["textRendering", "text-rendering"],
      ["transformOrigin", "transform-origin"],
      ["underlinePosition", "underline-position"],
      ["underlineThickness", "underline-thickness"],
      ["unicodeBidi", "unicode-bidi"],
      ["unicodeRange", "unicode-range"],
      ["unitsPerEm", "units-per-em"],
      ["vAlphabetic", "v-alphabetic"],
      ["vHanging", "v-hanging"],
      ["vIdeographic", "v-ideographic"],
      ["vMathematical", "v-mathematical"],
      ["vectorEffect", "vector-effect"],
      ["vertAdvY", "vert-adv-y"],
      ["vertOriginX", "vert-origin-x"],
      ["vertOriginY", "vert-origin-y"],
      ["wordSpacing", "word-spacing"],
      ["writingMode", "writing-mode"],
      ["xmlnsXlink", "xmlns:xlink"],
      ["xHeight", "x-height"],
    ]),
    a0 =
      /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function du(e) {
    return a0.test("" + e)
      ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
      : e;
  }
  var Pi = null;
  function Ii(e) {
    return (
      (e = e.target || e.srcElement || window),
      e.correspondingUseElement && (e = e.correspondingUseElement),
      e.nodeType === 3 ? e.parentNode : e
    );
  }
  var ca = null,
    oa = null;
  function Fc(e) {
    var t = aa(e);
    if (t && (e = t.stateNode)) {
      var l = e[lt] || null;
      e: switch (((e = t.stateNode), t.type)) {
        case "input":
          if (
            ($i(
              e,
              l.value,
              l.defaultValue,
              l.defaultValue,
              l.checked,
              l.defaultChecked,
              l.type,
              l.name
            ),
            (t = l.name),
            l.type === "radio" && t != null)
          ) {
            for (l = e; l.parentNode; ) l = l.parentNode;
            for (
              l = l.querySelectorAll(
                'input[name="' + bt("" + t) + '"][type="radio"]'
              ),
                t = 0;
              t < l.length;
              t++
            ) {
              var a = l[t];
              if (a !== e && a.form === e.form) {
                var n = a[lt] || null;
                if (!n) throw Error(s(90));
                $i(
                  a,
                  n.value,
                  n.defaultValue,
                  n.defaultValue,
                  n.checked,
                  n.defaultChecked,
                  n.type,
                  n.name
                );
              }
            }
            for (t = 0; t < l.length; t++)
              (a = l[t]), a.form === e.form && Vc(a);
          }
          break e;
        case "textarea":
          Kc(e, l.value, l.defaultValue);
          break e;
        case "select":
          (t = l.value), t != null && ra(e, !!l.multiple, t, !1);
      }
    }
  }
  var er = !1;
  function Wc(e, t, l) {
    if (er) return e(t, l);
    er = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (
        ((er = !1),
        (ca !== null || oa !== null) &&
          (Wu(), ca && ((t = ca), (e = oa), (oa = ca = null), Fc(t), e)))
      )
        for (t = 0; t < e.length; t++) Fc(e[t]);
    }
  }
  function Wa(e, t) {
    var l = e.stateNode;
    if (l === null) return null;
    var a = l[lt] || null;
    if (a === null) return null;
    l = a[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) ||
          ((e = e.type),
          (a = !(
            e === "button" ||
            e === "input" ||
            e === "select" ||
            e === "textarea"
          ))),
          (e = !a);
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (l && typeof l != "function") throw Error(s(231, t, typeof l));
    return l;
  }
  var Qt = !(
      typeof window > "u" ||
      typeof window.document > "u" ||
      typeof window.document.createElement > "u"
    ),
    tr = !1;
  if (Qt)
    try {
      var Pa = {};
      Object.defineProperty(Pa, "passive", {
        get: function () {
          tr = !0;
        },
      }),
        window.addEventListener("test", Pa, Pa),
        window.removeEventListener("test", Pa, Pa);
    } catch {
      tr = !1;
    }
  var cl = null,
    lr = null,
    mu = null;
  function Pc() {
    if (mu) return mu;
    var e,
      t = lr,
      l = t.length,
      a,
      n = "value" in cl ? cl.value : cl.textContent,
      i = n.length;
    for (e = 0; e < l && t[e] === n[e]; e++);
    var f = l - e;
    for (a = 1; a <= f && t[l - a] === n[i - a]; a++);
    return (mu = n.slice(e, 1 < a ? 1 - a : void 0));
  }
  function hu(e) {
    var t = e.keyCode;
    return (
      "charCode" in e
        ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
        : (e = t),
      e === 10 && (e = 13),
      32 <= e || e === 13 ? e : 0
    );
  }
  function yu() {
    return !0;
  }
  function Ic() {
    return !1;
  }
  function at(e) {
    function t(l, a, n, i, f) {
      (this._reactName = l),
        (this._targetInst = n),
        (this.type = a),
        (this.nativeEvent = i),
        (this.target = f),
        (this.currentTarget = null);
      for (var h in e)
        e.hasOwnProperty(h) && ((l = e[h]), (this[h] = l ? l(i) : i[h]));
      return (
        (this.isDefaultPrevented = (
          i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1
        )
          ? yu
          : Ic),
        (this.isPropagationStopped = Ic),
        this
      );
    }
    return (
      g(t.prototype, {
        preventDefault: function () {
          this.defaultPrevented = !0;
          var l = this.nativeEvent;
          l &&
            (l.preventDefault
              ? l.preventDefault()
              : typeof l.returnValue != "unknown" && (l.returnValue = !1),
            (this.isDefaultPrevented = yu));
        },
        stopPropagation: function () {
          var l = this.nativeEvent;
          l &&
            (l.stopPropagation
              ? l.stopPropagation()
              : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0),
            (this.isPropagationStopped = yu));
        },
        persist: function () {},
        isPersistent: yu,
      }),
      t
    );
  }
  var Bl = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function (e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0,
    },
    pu = at(Bl),
    Ia = g({}, Bl, { view: 0, detail: 0 }),
    n0 = at(Ia),
    ar,
    nr,
    en,
    gu = g({}, Ia, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: ir,
      button: 0,
      buttons: 0,
      relatedTarget: function (e) {
        return e.relatedTarget === void 0
          ? e.fromElement === e.srcElement
            ? e.toElement
            : e.fromElement
          : e.relatedTarget;
      },
      movementX: function (e) {
        return "movementX" in e
          ? e.movementX
          : (e !== en &&
              (en && e.type === "mousemove"
                ? ((ar = e.screenX - en.screenX), (nr = e.screenY - en.screenY))
                : (nr = ar = 0),
              (en = e)),
            ar);
      },
      movementY: function (e) {
        return "movementY" in e ? e.movementY : nr;
      },
    }),
    eo = at(gu),
    u0 = g({}, gu, { dataTransfer: 0 }),
    i0 = at(u0),
    r0 = g({}, Ia, { relatedTarget: 0 }),
    ur = at(r0),
    s0 = g({}, Bl, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
    c0 = at(s0),
    o0 = g({}, Bl, {
      clipboardData: function (e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      },
    }),
    f0 = at(o0),
    d0 = g({}, Bl, { data: 0 }),
    to = at(d0),
    m0 = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified",
    },
    h0 = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta",
    },
    y0 = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey",
    };
  function p0(e) {
    var t = this.nativeEvent;
    return t.getModifierState
      ? t.getModifierState(e)
      : (e = y0[e])
      ? !!t[e]
      : !1;
  }
  function ir() {
    return p0;
  }
  var g0 = g({}, Ia, {
      key: function (e) {
        if (e.key) {
          var t = m0[e.key] || e.key;
          if (t !== "Unidentified") return t;
        }
        return e.type === "keypress"
          ? ((e = hu(e)), e === 13 ? "Enter" : String.fromCharCode(e))
          : e.type === "keydown" || e.type === "keyup"
          ? h0[e.keyCode] || "Unidentified"
          : "";
      },
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: ir,
      charCode: function (e) {
        return e.type === "keypress" ? hu(e) : 0;
      },
      keyCode: function (e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function (e) {
        return e.type === "keypress"
          ? hu(e)
          : e.type === "keydown" || e.type === "keyup"
          ? e.keyCode
          : 0;
      },
    }),
    v0 = at(g0),
    x0 = g({}, gu, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0,
    }),
    lo = at(x0),
    b0 = g({}, Ia, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: ir,
    }),
    S0 = at(b0),
    E0 = g({}, Bl, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
    N0 = at(E0),
    T0 = g({}, gu, {
      deltaX: function (e) {
        return "deltaX" in e
          ? e.deltaX
          : "wheelDeltaX" in e
          ? -e.wheelDeltaX
          : 0;
      },
      deltaY: function (e) {
        return "deltaY" in e
          ? e.deltaY
          : "wheelDeltaY" in e
          ? -e.wheelDeltaY
          : "wheelDelta" in e
          ? -e.wheelDelta
          : 0;
      },
      deltaZ: 0,
      deltaMode: 0,
    }),
    j0 = at(T0),
    R0 = g({}, Bl, { newState: 0, oldState: 0 }),
    A0 = at(R0),
    O0 = [9, 13, 27, 32],
    rr = Qt && "CompositionEvent" in window,
    tn = null;
  Qt && "documentMode" in document && (tn = document.documentMode);
  var w0 = Qt && "TextEvent" in window && !tn,
    ao = Qt && (!rr || (tn && 8 < tn && 11 >= tn)),
    no = " ",
    uo = !1;
  function io(e, t) {
    switch (e) {
      case "keyup":
        return O0.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ro(e) {
    return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
  }
  var fa = !1;
  function D0(e, t) {
    switch (e) {
      case "compositionend":
        return ro(t);
      case "keypress":
        return t.which !== 32 ? null : ((uo = !0), no);
      case "textInput":
        return (e = t.data), e === no && uo ? null : e;
      default:
        return null;
    }
  }
  function _0(e, t) {
    if (fa)
      return e === "compositionend" || (!rr && io(e, t))
        ? ((e = Pc()), (mu = lr = cl = null), (fa = !1), e)
        : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
          if (t.char && 1 < t.char.length) return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return ao && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var C0 = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0,
  };
  function so(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!C0[e.type] : t === "textarea";
  }
  function co(e, t, l, a) {
    ca ? (oa ? oa.push(a) : (oa = [a])) : (ca = a),
      (t = ai(t, "onChange")),
      0 < t.length &&
        ((l = new pu("onChange", "change", null, l, a)),
        e.push({ event: l, listeners: t }));
  }
  var ln = null,
    an = null;
  function z0(e) {
    Zd(e, 0);
  }
  function vu(e) {
    var t = Fa(e);
    if (Vc(t)) return e;
  }
  function oo(e, t) {
    if (e === "change") return t;
  }
  var fo = !1;
  if (Qt) {
    var sr;
    if (Qt) {
      var cr = "oninput" in document;
      if (!cr) {
        var mo = document.createElement("div");
        mo.setAttribute("oninput", "return;"),
          (cr = typeof mo.oninput == "function");
      }
      sr = cr;
    } else sr = !1;
    fo = sr && (!document.documentMode || 9 < document.documentMode);
  }
  function ho() {
    ln && (ln.detachEvent("onpropertychange", yo), (an = ln = null));
  }
  function yo(e) {
    if (e.propertyName === "value" && vu(an)) {
      var t = [];
      co(t, an, e, Ii(e)), Wc(z0, t);
    }
  }
  function M0(e, t, l) {
    e === "focusin"
      ? (ho(), (ln = t), (an = l), ln.attachEvent("onpropertychange", yo))
      : e === "focusout" && ho();
  }
  function U0(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return vu(an);
  }
  function B0(e, t) {
    if (e === "click") return vu(t);
  }
  function H0(e, t) {
    if (e === "input" || e === "change") return vu(t);
  }
  function q0(e, t) {
    return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
  }
  var dt = typeof Object.is == "function" ? Object.is : q0;
  function nn(e, t) {
    if (dt(e, t)) return !0;
    if (
      typeof e != "object" ||
      e === null ||
      typeof t != "object" ||
      t === null
    )
      return !1;
    var l = Object.keys(e),
      a = Object.keys(t);
    if (l.length !== a.length) return !1;
    for (a = 0; a < l.length; a++) {
      var n = l[a];
      if (!qi.call(t, n) || !dt(e[n], t[n])) return !1;
    }
    return !0;
  }
  function po(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function go(e, t) {
    var l = po(e);
    e = 0;
    for (var a; l; ) {
      if (l.nodeType === 3) {
        if (((a = e + l.textContent.length), e <= t && a >= t))
          return { node: l, offset: t - e };
        e = a;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = po(l);
    }
  }
  function vo(e, t) {
    return e && t
      ? e === t
        ? !0
        : e && e.nodeType === 3
        ? !1
        : t && t.nodeType === 3
        ? vo(e, t.parentNode)
        : "contains" in e
        ? e.contains(t)
        : e.compareDocumentPosition
        ? !!(e.compareDocumentPosition(t) & 16)
        : !1
      : !1;
  }
  function xo(e) {
    e =
      e != null &&
      e.ownerDocument != null &&
      e.ownerDocument.defaultView != null
        ? e.ownerDocument.defaultView
        : window;
    for (var t = fu(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var l = typeof t.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l) e = t.contentWindow;
      else break;
      t = fu(e.document);
    }
    return t;
  }
  function or(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return (
      t &&
      ((t === "input" &&
        (e.type === "text" ||
          e.type === "search" ||
          e.type === "tel" ||
          e.type === "url" ||
          e.type === "password")) ||
        t === "textarea" ||
        e.contentEditable === "true")
    );
  }
  var L0 = Qt && "documentMode" in document && 11 >= document.documentMode,
    da = null,
    fr = null,
    un = null,
    dr = !1;
  function bo(e, t, l) {
    var a =
      l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    dr ||
      da == null ||
      da !== fu(a) ||
      ((a = da),
      "selectionStart" in a && or(a)
        ? (a = { start: a.selectionStart, end: a.selectionEnd })
        : ((a = (
            (a.ownerDocument && a.ownerDocument.defaultView) ||
            window
          ).getSelection()),
          (a = {
            anchorNode: a.anchorNode,
            anchorOffset: a.anchorOffset,
            focusNode: a.focusNode,
            focusOffset: a.focusOffset,
          })),
      (un && nn(un, a)) ||
        ((un = a),
        (a = ai(fr, "onSelect")),
        0 < a.length &&
          ((t = new pu("onSelect", "select", null, t, l)),
          e.push({ event: t, listeners: a }),
          (t.target = da))));
  }
  function Hl(e, t) {
    var l = {};
    return (
      (l[e.toLowerCase()] = t.toLowerCase()),
      (l["Webkit" + e] = "webkit" + t),
      (l["Moz" + e] = "moz" + t),
      l
    );
  }
  var ma = {
      animationend: Hl("Animation", "AnimationEnd"),
      animationiteration: Hl("Animation", "AnimationIteration"),
      animationstart: Hl("Animation", "AnimationStart"),
      transitionrun: Hl("Transition", "TransitionRun"),
      transitionstart: Hl("Transition", "TransitionStart"),
      transitioncancel: Hl("Transition", "TransitionCancel"),
      transitionend: Hl("Transition", "TransitionEnd"),
    },
    mr = {},
    So = {};
  Qt &&
    ((So = document.createElement("div").style),
    "AnimationEvent" in window ||
      (delete ma.animationend.animation,
      delete ma.animationiteration.animation,
      delete ma.animationstart.animation),
    "TransitionEvent" in window || delete ma.transitionend.transition);
  function ql(e) {
    if (mr[e]) return mr[e];
    if (!ma[e]) return e;
    var t = ma[e],
      l;
    for (l in t) if (t.hasOwnProperty(l) && l in So) return (mr[e] = t[l]);
    return e;
  }
  var Eo = ql("animationend"),
    No = ql("animationiteration"),
    To = ql("animationstart"),
    Y0 = ql("transitionrun"),
    G0 = ql("transitionstart"),
    X0 = ql("transitioncancel"),
    jo = ql("transitionend"),
    Ro = new Map(),
    hr =
      "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
        " "
      );
  hr.push("scrollEnd");
  function Ot(e, t) {
    Ro.set(e, t), Ul(t, [e]);
  }
  var Ao = new WeakMap();
  function St(e, t) {
    if (typeof e == "object" && e !== null) {
      var l = Ao.get(e);
      return l !== void 0
        ? l
        : ((t = { value: e, source: t, stack: Xc(t) }), Ao.set(e, t), t);
    }
    return { value: e, source: t, stack: Xc(t) };
  }
  var Et = [],
    ha = 0,
    yr = 0;
  function xu() {
    for (var e = ha, t = (yr = ha = 0); t < e; ) {
      var l = Et[t];
      Et[t++] = null;
      var a = Et[t];
      Et[t++] = null;
      var n = Et[t];
      Et[t++] = null;
      var i = Et[t];
      if (((Et[t++] = null), a !== null && n !== null)) {
        var f = a.pending;
        f === null ? (n.next = n) : ((n.next = f.next), (f.next = n)),
          (a.pending = n);
      }
      i !== 0 && Oo(l, n, i);
    }
  }
  function bu(e, t, l, a) {
    (Et[ha++] = e),
      (Et[ha++] = t),
      (Et[ha++] = l),
      (Et[ha++] = a),
      (yr |= a),
      (e.lanes |= a),
      (e = e.alternate),
      e !== null && (e.lanes |= a);
  }
  function pr(e, t, l, a) {
    return bu(e, t, l, a), Su(e);
  }
  function ya(e, t) {
    return bu(e, null, null, t), Su(e);
  }
  function Oo(e, t, l) {
    e.lanes |= l;
    var a = e.alternate;
    a !== null && (a.lanes |= l);
    for (var n = !1, i = e.return; i !== null; )
      (i.childLanes |= l),
        (a = i.alternate),
        a !== null && (a.childLanes |= l),
        i.tag === 22 &&
          ((e = i.stateNode), e === null || e._visibility & 1 || (n = !0)),
        (e = i),
        (i = i.return);
    return e.tag === 3
      ? ((i = e.stateNode),
        n &&
          t !== null &&
          ((n = 31 - ft(l)),
          (e = i.hiddenUpdates),
          (a = e[n]),
          a === null ? (e[n] = [t]) : a.push(t),
          (t.lane = l | 536870912)),
        i)
      : null;
  }
  function Su(e) {
    if (50 < _n) throw ((_n = 0), (Es = null), Error(s(185)));
    for (var t = e.return; t !== null; ) (e = t), (t = e.return);
    return e.tag === 3 ? e.stateNode : null;
  }
  var pa = {};
  function Q0(e, t, l, a) {
    (this.tag = e),
      (this.key = l),
      (this.sibling =
        this.child =
        this.return =
        this.stateNode =
        this.type =
        this.elementType =
          null),
      (this.index = 0),
      (this.refCleanup = this.ref = null),
      (this.pendingProps = t),
      (this.dependencies =
        this.memoizedState =
        this.updateQueue =
        this.memoizedProps =
          null),
      (this.mode = a),
      (this.subtreeFlags = this.flags = 0),
      (this.deletions = null),
      (this.childLanes = this.lanes = 0),
      (this.alternate = null);
  }
  function mt(e, t, l, a) {
    return new Q0(e, t, l, a);
  }
  function gr(e) {
    return (e = e.prototype), !(!e || !e.isReactComponent);
  }
  function Vt(e, t) {
    var l = e.alternate;
    return (
      l === null
        ? ((l = mt(e.tag, t, e.key, e.mode)),
          (l.elementType = e.elementType),
          (l.type = e.type),
          (l.stateNode = e.stateNode),
          (l.alternate = e),
          (e.alternate = l))
        : ((l.pendingProps = t),
          (l.type = e.type),
          (l.flags = 0),
          (l.subtreeFlags = 0),
          (l.deletions = null)),
      (l.flags = e.flags & 65011712),
      (l.childLanes = e.childLanes),
      (l.lanes = e.lanes),
      (l.child = e.child),
      (l.memoizedProps = e.memoizedProps),
      (l.memoizedState = e.memoizedState),
      (l.updateQueue = e.updateQueue),
      (t = e.dependencies),
      (l.dependencies =
        t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
      (l.sibling = e.sibling),
      (l.index = e.index),
      (l.ref = e.ref),
      (l.refCleanup = e.refCleanup),
      l
    );
  }
  function wo(e, t) {
    e.flags &= 65011714;
    var l = e.alternate;
    return (
      l === null
        ? ((e.childLanes = 0),
          (e.lanes = t),
          (e.child = null),
          (e.subtreeFlags = 0),
          (e.memoizedProps = null),
          (e.memoizedState = null),
          (e.updateQueue = null),
          (e.dependencies = null),
          (e.stateNode = null))
        : ((e.childLanes = l.childLanes),
          (e.lanes = l.lanes),
          (e.child = l.child),
          (e.subtreeFlags = 0),
          (e.deletions = null),
          (e.memoizedProps = l.memoizedProps),
          (e.memoizedState = l.memoizedState),
          (e.updateQueue = l.updateQueue),
          (e.type = l.type),
          (t = l.dependencies),
          (e.dependencies =
            t === null
              ? null
              : { lanes: t.lanes, firstContext: t.firstContext })),
      e
    );
  }
  function Eu(e, t, l, a, n, i) {
    var f = 0;
    if (((a = e), typeof e == "function")) gr(e) && (f = 1);
    else if (typeof e == "string")
      f = Zy(e, l, W.current)
        ? 26
        : e === "html" || e === "head" || e === "body"
        ? 27
        : 5;
    else
      e: switch (e) {
        case Se:
          return (e = mt(31, l, t, n)), (e.elementType = Se), (e.lanes = i), e;
        case B:
          return Ll(l.children, n, i, t);
        case Y:
          (f = 8), (n |= 24);
          break;
        case _:
          return (
            (e = mt(12, l, t, n | 2)), (e.elementType = _), (e.lanes = i), e
          );
        case J:
          return (e = mt(13, l, t, n)), (e.elementType = J), (e.lanes = i), e;
        case he:
          return (e = mt(19, l, t, n)), (e.elementType = he), (e.lanes = i), e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case q:
              case K:
                f = 10;
                break e;
              case F:
                f = 9;
                break e;
              case ce:
                f = 11;
                break e;
              case ye:
                f = 14;
                break e;
              case je:
                (f = 16), (a = null);
                break e;
            }
          (f = 29),
            (l = Error(s(130, e === null ? "null" : typeof e, ""))),
            (a = null);
      }
    return (
      (t = mt(f, l, t, n)), (t.elementType = e), (t.type = a), (t.lanes = i), t
    );
  }
  function Ll(e, t, l, a) {
    return (e = mt(7, e, a, t)), (e.lanes = l), e;
  }
  function vr(e, t, l) {
    return (e = mt(6, e, null, t)), (e.lanes = l), e;
  }
  function xr(e, t, l) {
    return (
      (t = mt(4, e.children !== null ? e.children : [], e.key, t)),
      (t.lanes = l),
      (t.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation,
      }),
      t
    );
  }
  var ga = [],
    va = 0,
    Nu = null,
    Tu = 0,
    Nt = [],
    Tt = 0,
    Yl = null,
    Zt = 1,
    Kt = "";
  function Gl(e, t) {
    (ga[va++] = Tu), (ga[va++] = Nu), (Nu = e), (Tu = t);
  }
  function Do(e, t, l) {
    (Nt[Tt++] = Zt), (Nt[Tt++] = Kt), (Nt[Tt++] = Yl), (Yl = e);
    var a = Zt;
    e = Kt;
    var n = 32 - ft(a) - 1;
    (a &= ~(1 << n)), (l += 1);
    var i = 32 - ft(t) + n;
    if (30 < i) {
      var f = n - (n % 5);
      (i = (a & ((1 << f) - 1)).toString(32)),
        (a >>= f),
        (n -= f),
        (Zt = (1 << (32 - ft(t) + n)) | (l << n) | a),
        (Kt = i + e);
    } else (Zt = (1 << i) | (l << n) | a), (Kt = e);
  }
  function br(e) {
    e.return !== null && (Gl(e, 1), Do(e, 1, 0));
  }
  function Sr(e) {
    for (; e === Nu; )
      (Nu = ga[--va]), (ga[va] = null), (Tu = ga[--va]), (ga[va] = null);
    for (; e === Yl; )
      (Yl = Nt[--Tt]),
        (Nt[Tt] = null),
        (Kt = Nt[--Tt]),
        (Nt[Tt] = null),
        (Zt = Nt[--Tt]),
        (Nt[Tt] = null);
  }
  var tt = null,
    De = null,
    me = !1,
    Xl = null,
    Ut = !1,
    Er = Error(s(519));
  function Ql(e) {
    var t = Error(s(418, ""));
    throw (cn(St(t, e)), Er);
  }
  function _o(e) {
    var t = e.stateNode,
      l = e.type,
      a = e.memoizedProps;
    switch (((t[We] = e), (t[lt] = a), l)) {
      case "dialog":
        se("cancel", t), se("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        se("load", t);
        break;
      case "video":
      case "audio":
        for (l = 0; l < zn.length; l++) se(zn[l], t);
        break;
      case "source":
        se("error", t);
        break;
      case "img":
      case "image":
      case "link":
        se("error", t), se("load", t);
        break;
      case "details":
        se("toggle", t);
        break;
      case "input":
        se("invalid", t),
          Zc(
            t,
            a.value,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name,
            !0
          ),
          ou(t);
        break;
      case "select":
        se("invalid", t);
        break;
      case "textarea":
        se("invalid", t), Jc(t, a.value, a.defaultValue, a.children), ou(t);
    }
    (l = a.children),
      (typeof l != "string" && typeof l != "number" && typeof l != "bigint") ||
      t.textContent === "" + l ||
      a.suppressHydrationWarning === !0 ||
      $d(t.textContent, l)
        ? (a.popover != null && (se("beforetoggle", t), se("toggle", t)),
          a.onScroll != null && se("scroll", t),
          a.onScrollEnd != null && se("scrollend", t),
          a.onClick != null && (t.onclick = ni),
          (t = !0))
        : (t = !1),
      t || Ql(e);
  }
  function Co(e) {
    for (tt = e.return; tt; )
      switch (tt.tag) {
        case 5:
        case 13:
          Ut = !1;
          return;
        case 27:
        case 3:
          Ut = !0;
          return;
        default:
          tt = tt.return;
      }
  }
  function rn(e) {
    if (e !== tt) return !1;
    if (!me) return Co(e), (me = !0), !1;
    var t = e.tag,
      l;
    if (
      ((l = t !== 3 && t !== 27) &&
        ((l = t === 5) &&
          ((l = e.type),
          (l =
            !(l !== "form" && l !== "button") || qs(e.type, e.memoizedProps))),
        (l = !l)),
      l && De && Ql(e),
      Co(e),
      t === 13)
    ) {
      if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
        throw Error(s(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8)
            if (((l = e.data), l === "/$")) {
              if (t === 0) {
                De = Dt(e.nextSibling);
                break e;
              }
              t--;
            } else (l !== "$" && l !== "$!" && l !== "$?") || t++;
          e = e.nextSibling;
        }
        De = null;
      }
    } else
      t === 27
        ? ((t = De), jl(e.type) ? ((e = Xs), (Xs = null), (De = e)) : (De = t))
        : (De = tt ? Dt(e.stateNode.nextSibling) : null);
    return !0;
  }
  function sn() {
    (De = tt = null), (me = !1);
  }
  function zo() {
    var e = Xl;
    return (
      e !== null &&
        (it === null ? (it = e) : it.push.apply(it, e), (Xl = null)),
      e
    );
  }
  function cn(e) {
    Xl === null ? (Xl = [e]) : Xl.push(e);
  }
  var Nr = L(null),
    Vl = null,
    Jt = null;
  function ol(e, t, l) {
    X(Nr, t._currentValue), (t._currentValue = l);
  }
  function kt(e) {
    (e._currentValue = Nr.current), V(Nr);
  }
  function Tr(e, t, l) {
    for (; e !== null; ) {
      var a = e.alternate;
      if (
        ((e.childLanes & t) !== t
          ? ((e.childLanes |= t), a !== null && (a.childLanes |= t))
          : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t),
        e === l)
      )
        break;
      e = e.return;
    }
  }
  function jr(e, t, l, a) {
    var n = e.child;
    for (n !== null && (n.return = e); n !== null; ) {
      var i = n.dependencies;
      if (i !== null) {
        var f = n.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var h = i;
          i = n;
          for (var x = 0; x < t.length; x++)
            if (h.context === t[x]) {
              (i.lanes |= l),
                (h = i.alternate),
                h !== null && (h.lanes |= l),
                Tr(i.return, l, e),
                a || (f = null);
              break e;
            }
          i = h.next;
        }
      } else if (n.tag === 18) {
        if (((f = n.return), f === null)) throw Error(s(341));
        (f.lanes |= l),
          (i = f.alternate),
          i !== null && (i.lanes |= l),
          Tr(f, l, e),
          (f = null);
      } else f = n.child;
      if (f !== null) f.return = n;
      else
        for (f = n; f !== null; ) {
          if (f === e) {
            f = null;
            break;
          }
          if (((n = f.sibling), n !== null)) {
            (n.return = f.return), (f = n);
            break;
          }
          f = f.return;
        }
      n = f;
    }
  }
  function on(e, t, l, a) {
    e = null;
    for (var n = t, i = !1; n !== null; ) {
      if (!i) {
        if ((n.flags & 524288) !== 0) i = !0;
        else if ((n.flags & 262144) !== 0) break;
      }
      if (n.tag === 10) {
        var f = n.alternate;
        if (f === null) throw Error(s(387));
        if (((f = f.memoizedProps), f !== null)) {
          var h = n.type;
          dt(n.pendingProps.value, f.value) ||
            (e !== null ? e.push(h) : (e = [h]));
        }
      } else if (n === ct.current) {
        if (((f = n.alternate), f === null)) throw Error(s(387));
        f.memoizedState.memoizedState !== n.memoizedState.memoizedState &&
          (e !== null ? e.push(Ln) : (e = [Ln]));
      }
      n = n.return;
    }
    e !== null && jr(t, e, l, a), (t.flags |= 262144);
  }
  function ju(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!dt(e.context._currentValue, e.memoizedValue)) return !0;
      e = e.next;
    }
    return !1;
  }
  function Zl(e) {
    (Vl = e),
      (Jt = null),
      (e = e.dependencies),
      e !== null && (e.firstContext = null);
  }
  function Pe(e) {
    return Mo(Vl, e);
  }
  function Ru(e, t) {
    return Vl === null && Zl(e), Mo(e, t);
  }
  function Mo(e, t) {
    var l = t._currentValue;
    if (((t = { context: t, memoizedValue: l, next: null }), Jt === null)) {
      if (e === null) throw Error(s(308));
      (Jt = t),
        (e.dependencies = { lanes: 0, firstContext: t }),
        (e.flags |= 524288);
    } else Jt = Jt.next = t;
    return l;
  }
  var V0 =
      typeof AbortController < "u"
        ? AbortController
        : function () {
            var e = [],
              t = (this.signal = {
                aborted: !1,
                addEventListener: function (l, a) {
                  e.push(a);
                },
              });
            this.abort = function () {
              (t.aborted = !0),
                e.forEach(function (l) {
                  return l();
                });
            };
          },
    Z0 = u.unstable_scheduleCallback,
    K0 = u.unstable_NormalPriority,
    Ye = {
      $$typeof: K,
      Consumer: null,
      Provider: null,
      _currentValue: null,
      _currentValue2: null,
      _threadCount: 0,
    };
  function Rr() {
    return { controller: new V0(), data: new Map(), refCount: 0 };
  }
  function fn(e) {
    e.refCount--,
      e.refCount === 0 &&
        Z0(K0, function () {
          e.controller.abort();
        });
  }
  var dn = null,
    Ar = 0,
    xa = 0,
    ba = null;
  function J0(e, t) {
    if (dn === null) {
      var l = (dn = []);
      (Ar = 0),
        (xa = ws()),
        (ba = {
          status: "pending",
          value: void 0,
          then: function (a) {
            l.push(a);
          },
        });
    }
    return Ar++, t.then(Uo, Uo), t;
  }
  function Uo() {
    if (--Ar === 0 && dn !== null) {
      ba !== null && (ba.status = "fulfilled");
      var e = dn;
      (dn = null), (xa = 0), (ba = null);
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function k0(e, t) {
    var l = [],
      a = {
        status: "pending",
        value: null,
        reason: null,
        then: function (n) {
          l.push(n);
        },
      };
    return (
      e.then(
        function () {
          (a.status = "fulfilled"), (a.value = t);
          for (var n = 0; n < l.length; n++) (0, l[n])(t);
        },
        function (n) {
          for (a.status = "rejected", a.reason = n, n = 0; n < l.length; n++)
            (0, l[n])(void 0);
        }
      ),
      a
    );
  }
  var Bo = M.S;
  M.S = function (e, t) {
    typeof t == "object" &&
      t !== null &&
      typeof t.then == "function" &&
      J0(e, t),
      Bo !== null && Bo(e, t);
  };
  var Kl = L(null);
  function Or() {
    var e = Kl.current;
    return e !== null ? e : Te.pooledCache;
  }
  function Au(e, t) {
    t === null ? X(Kl, Kl.current) : X(Kl, t.pool);
  }
  function Ho() {
    var e = Or();
    return e === null ? null : { parent: Ye._currentValue, pool: e };
  }
  var mn = Error(s(460)),
    qo = Error(s(474)),
    Ou = Error(s(542)),
    wr = { then: function () {} };
  function Lo(e) {
    return (e = e.status), e === "fulfilled" || e === "rejected";
  }
  function wu() {}
  function Yo(e, t, l) {
    switch (
      ((l = e[l]),
      l === void 0 ? e.push(t) : l !== t && (t.then(wu, wu), (t = l)),
      t.status)
    ) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw ((e = t.reason), Xo(e), e);
      default:
        if (typeof t.status == "string") t.then(wu, wu);
        else {
          if (((e = Te), e !== null && 100 < e.shellSuspendCounter))
            throw Error(s(482));
          (e = t),
            (e.status = "pending"),
            e.then(
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "fulfilled"), (n.value = a);
                }
              },
              function (a) {
                if (t.status === "pending") {
                  var n = t;
                  (n.status = "rejected"), (n.reason = a);
                }
              }
            );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw ((e = t.reason), Xo(e), e);
        }
        throw ((hn = t), mn);
    }
  }
  var hn = null;
  function Go() {
    if (hn === null) throw Error(s(459));
    var e = hn;
    return (hn = null), e;
  }
  function Xo(e) {
    if (e === mn || e === Ou) throw Error(s(483));
  }
  var fl = !1;
  function Dr(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null,
    };
  }
  function _r(e, t) {
    (e = e.updateQueue),
      t.updateQueue === e &&
        (t.updateQueue = {
          baseState: e.baseState,
          firstBaseUpdate: e.firstBaseUpdate,
          lastBaseUpdate: e.lastBaseUpdate,
          shared: e.shared,
          callbacks: null,
        });
  }
  function dl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ml(e, t, l) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (((a = a.shared), (pe & 2) !== 0)) {
      var n = a.pending;
      return (
        n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (a.pending = t),
        (t = Su(e)),
        Oo(e, null, l),
        t
      );
    }
    return bu(e, a, t, l), Su(e);
  }
  function yn(e, t, l) {
    if (
      ((t = t.updateQueue), t !== null && ((t = t.shared), (l & 4194048) !== 0))
    ) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Mc(e, l);
    }
  }
  function Cr(e, t) {
    var l = e.updateQueue,
      a = e.alternate;
    if (a !== null && ((a = a.updateQueue), l === a)) {
      var n = null,
        i = null;
      if (((l = l.firstBaseUpdate), l !== null)) {
        do {
          var f = {
            lane: l.lane,
            tag: l.tag,
            payload: l.payload,
            callback: null,
            next: null,
          };
          i === null ? (n = i = f) : (i = i.next = f), (l = l.next);
        } while (l !== null);
        i === null ? (n = i = t) : (i = i.next = t);
      } else n = i = t;
      (l = {
        baseState: a.baseState,
        firstBaseUpdate: n,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks,
      }),
        (e.updateQueue = l);
      return;
    }
    (e = l.lastBaseUpdate),
      e === null ? (l.firstBaseUpdate = t) : (e.next = t),
      (l.lastBaseUpdate = t);
  }
  var zr = !1;
  function pn() {
    if (zr) {
      var e = ba;
      if (e !== null) throw e;
    }
  }
  function gn(e, t, l, a) {
    zr = !1;
    var n = e.updateQueue;
    fl = !1;
    var i = n.firstBaseUpdate,
      f = n.lastBaseUpdate,
      h = n.shared.pending;
    if (h !== null) {
      n.shared.pending = null;
      var x = h,
        j = x.next;
      (x.next = null), f === null ? (i = j) : (f.next = j), (f = x);
      var z = e.alternate;
      z !== null &&
        ((z = z.updateQueue),
        (h = z.lastBaseUpdate),
        h !== f &&
          (h === null ? (z.firstBaseUpdate = j) : (h.next = j),
          (z.lastBaseUpdate = x)));
    }
    if (i !== null) {
      var H = n.baseState;
      (f = 0), (z = j = x = null), (h = i);
      do {
        var O = h.lane & -536870913,
          w = O !== h.lane;
        if (w ? (oe & O) === O : (a & O) === O) {
          O !== 0 && O === xa && (zr = !0),
            z !== null &&
              (z = z.next =
                {
                  lane: 0,
                  tag: h.tag,
                  payload: h.payload,
                  callback: null,
                  next: null,
                });
          e: {
            var te = e,
              P = h;
            O = t;
            var be = l;
            switch (P.tag) {
              case 1:
                if (((te = P.payload), typeof te == "function")) {
                  H = te.call(be, H, O);
                  break e;
                }
                H = te;
                break e;
              case 3:
                te.flags = (te.flags & -65537) | 128;
              case 0:
                if (
                  ((te = P.payload),
                  (O = typeof te == "function" ? te.call(be, H, O) : te),
                  O == null)
                )
                  break e;
                H = g({}, H, O);
                break e;
              case 2:
                fl = !0;
            }
          }
          (O = h.callback),
            O !== null &&
              ((e.flags |= 64),
              w && (e.flags |= 8192),
              (w = n.callbacks),
              w === null ? (n.callbacks = [O]) : w.push(O));
        } else
          (w = {
            lane: O,
            tag: h.tag,
            payload: h.payload,
            callback: h.callback,
            next: null,
          }),
            z === null ? ((j = z = w), (x = H)) : (z = z.next = w),
            (f |= O);
        if (((h = h.next), h === null)) {
          if (((h = n.shared.pending), h === null)) break;
          (w = h),
            (h = w.next),
            (w.next = null),
            (n.lastBaseUpdate = w),
            (n.shared.pending = null);
        }
      } while (!0);
      z === null && (x = H),
        (n.baseState = x),
        (n.firstBaseUpdate = j),
        (n.lastBaseUpdate = z),
        i === null && (n.shared.lanes = 0),
        (Sl |= f),
        (e.lanes = f),
        (e.memoizedState = H);
    }
  }
  function Qo(e, t) {
    if (typeof e != "function") throw Error(s(191, e));
    e.call(t);
  }
  function Vo(e, t) {
    var l = e.callbacks;
    if (l !== null)
      for (e.callbacks = null, e = 0; e < l.length; e++) Qo(l[e], t);
  }
  var Sa = L(null),
    Du = L(0);
  function Zo(e, t) {
    (e = tl), X(Du, e), X(Sa, t), (tl = e | t.baseLanes);
  }
  function Mr() {
    X(Du, tl), X(Sa, Sa.current);
  }
  function Ur() {
    (tl = Du.current), V(Sa), V(Du);
  }
  var hl = 0,
    ue = null,
    ve = null,
    qe = null,
    _u = !1,
    Ea = !1,
    Jl = !1,
    Cu = 0,
    vn = 0,
    Na = null,
    $0 = 0;
  function ze() {
    throw Error(s(321));
  }
  function Br(e, t) {
    if (t === null) return !1;
    for (var l = 0; l < t.length && l < e.length; l++)
      if (!dt(e[l], t[l])) return !1;
    return !0;
  }
  function Hr(e, t, l, a, n, i) {
    return (
      (hl = i),
      (ue = t),
      (t.memoizedState = null),
      (t.updateQueue = null),
      (t.lanes = 0),
      (M.H = e === null || e.memoizedState === null ? wf : Df),
      (Jl = !1),
      (i = l(a, n)),
      (Jl = !1),
      Ea && (i = Jo(t, l, a, n)),
      Ko(e),
      i
    );
  }
  function Ko(e) {
    M.H = qu;
    var t = ve !== null && ve.next !== null;
    if (((hl = 0), (qe = ve = ue = null), (_u = !1), (vn = 0), (Na = null), t))
      throw Error(s(300));
    e === null ||
      Qe ||
      ((e = e.dependencies), e !== null && ju(e) && (Qe = !0));
  }
  function Jo(e, t, l, a) {
    ue = e;
    var n = 0;
    do {
      if ((Ea && (Na = null), (vn = 0), (Ea = !1), 25 <= n))
        throw Error(s(301));
      if (((n += 1), (qe = ve = null), e.updateQueue != null)) {
        var i = e.updateQueue;
        (i.lastEffect = null),
          (i.events = null),
          (i.stores = null),
          i.memoCache != null && (i.memoCache.index = 0);
      }
      (M.H = ly), (i = t(l, a));
    } while (Ea);
    return i;
  }
  function F0() {
    var e = M.H,
      t = e.useState()[0];
    return (
      (t = typeof t.then == "function" ? xn(t) : t),
      (e = e.useState()[0]),
      (ve !== null ? ve.memoizedState : null) !== e && (ue.flags |= 1024),
      t
    );
  }
  function qr() {
    var e = Cu !== 0;
    return (Cu = 0), e;
  }
  function Lr(e, t, l) {
    (t.updateQueue = e.updateQueue), (t.flags &= -2053), (e.lanes &= ~l);
  }
  function Yr(e) {
    if (_u) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), (e = e.next);
      }
      _u = !1;
    }
    (hl = 0), (qe = ve = ue = null), (Ea = !1), (vn = Cu = 0), (Na = null);
  }
  function nt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null,
    };
    return qe === null ? (ue.memoizedState = qe = e) : (qe = qe.next = e), qe;
  }
  function Le() {
    if (ve === null) {
      var e = ue.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = ve.next;
    var t = qe === null ? ue.memoizedState : qe.next;
    if (t !== null) (qe = t), (ve = e);
    else {
      if (e === null)
        throw ue.alternate === null ? Error(s(467)) : Error(s(310));
      (ve = e),
        (e = {
          memoizedState: ve.memoizedState,
          baseState: ve.baseState,
          baseQueue: ve.baseQueue,
          queue: ve.queue,
          next: null,
        }),
        qe === null ? (ue.memoizedState = qe = e) : (qe = qe.next = e);
    }
    return qe;
  }
  function Gr() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function xn(e) {
    var t = vn;
    return (
      (vn += 1),
      Na === null && (Na = []),
      (e = Yo(Na, e, t)),
      (t = ue),
      (qe === null ? t.memoizedState : qe.next) === null &&
        ((t = t.alternate),
        (M.H = t === null || t.memoizedState === null ? wf : Df)),
      e
    );
  }
  function zu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return xn(e);
      if (e.$$typeof === K) return Pe(e);
    }
    throw Error(s(438, String(e)));
  }
  function Xr(e) {
    var t = null,
      l = ue.updateQueue;
    if ((l !== null && (t = l.memoCache), t == null)) {
      var a = ue.alternate;
      a !== null &&
        ((a = a.updateQueue),
        a !== null &&
          ((a = a.memoCache),
          a != null &&
            (t = {
              data: a.data.map(function (n) {
                return n.slice();
              }),
              index: 0,
            })));
    }
    if (
      (t == null && (t = { data: [], index: 0 }),
      l === null && ((l = Gr()), (ue.updateQueue = l)),
      (l.memoCache = t),
      (l = t.data[t.index]),
      l === void 0)
    )
      for (l = t.data[t.index] = Array(e), a = 0; a < e; a++) l[a] = k;
    return t.index++, l;
  }
  function $t(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Mu(e) {
    var t = Le();
    return Qr(t, ve, e);
  }
  function Qr(e, t, l) {
    var a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = l;
    var n = e.baseQueue,
      i = a.pending;
    if (i !== null) {
      if (n !== null) {
        var f = n.next;
        (n.next = i.next), (i.next = f);
      }
      (t.baseQueue = n = i), (a.pending = null);
    }
    if (((i = e.baseState), n === null)) e.memoizedState = i;
    else {
      t = n.next;
      var h = (f = null),
        x = null,
        j = t,
        z = !1;
      do {
        var H = j.lane & -536870913;
        if (H !== j.lane ? (oe & H) === H : (hl & H) === H) {
          var O = j.revertLane;
          if (O === 0)
            x !== null &&
              (x = x.next =
                {
                  lane: 0,
                  revertLane: 0,
                  action: j.action,
                  hasEagerState: j.hasEagerState,
                  eagerState: j.eagerState,
                  next: null,
                }),
              H === xa && (z = !0);
          else if ((hl & O) === O) {
            (j = j.next), O === xa && (z = !0);
            continue;
          } else
            (H = {
              lane: 0,
              revertLane: j.revertLane,
              action: j.action,
              hasEagerState: j.hasEagerState,
              eagerState: j.eagerState,
              next: null,
            }),
              x === null ? ((h = x = H), (f = i)) : (x = x.next = H),
              (ue.lanes |= O),
              (Sl |= O);
          (H = j.action),
            Jl && l(i, H),
            (i = j.hasEagerState ? j.eagerState : l(i, H));
        } else
          (O = {
            lane: H,
            revertLane: j.revertLane,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null,
          }),
            x === null ? ((h = x = O), (f = i)) : (x = x.next = O),
            (ue.lanes |= H),
            (Sl |= H);
        j = j.next;
      } while (j !== null && j !== t);
      if (
        (x === null ? (f = i) : (x.next = h),
        !dt(i, e.memoizedState) && ((Qe = !0), z && ((l = ba), l !== null)))
      )
        throw l;
      (e.memoizedState = i),
        (e.baseState = f),
        (e.baseQueue = x),
        (a.lastRenderedState = i);
    }
    return n === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Vr(e) {
    var t = Le(),
      l = t.queue;
    if (l === null) throw Error(s(311));
    l.lastRenderedReducer = e;
    var a = l.dispatch,
      n = l.pending,
      i = t.memoizedState;
    if (n !== null) {
      l.pending = null;
      var f = (n = n.next);
      do (i = e(i, f.action)), (f = f.next);
      while (f !== n);
      dt(i, t.memoizedState) || (Qe = !0),
        (t.memoizedState = i),
        t.baseQueue === null && (t.baseState = i),
        (l.lastRenderedState = i);
    }
    return [i, a];
  }
  function ko(e, t, l) {
    var a = ue,
      n = Le(),
      i = me;
    if (i) {
      if (l === void 0) throw Error(s(407));
      l = l();
    } else l = t();
    var f = !dt((ve || n).memoizedState, l);
    f && ((n.memoizedState = l), (Qe = !0)), (n = n.queue);
    var h = Wo.bind(null, a, n, e);
    if (
      (bn(2048, 8, h, [e]),
      n.getSnapshot !== t || f || (qe !== null && qe.memoizedState.tag & 1))
    ) {
      if (
        ((a.flags |= 2048),
        Ta(9, Uu(), Fo.bind(null, a, n, l, t), null),
        Te === null)
      )
        throw Error(s(349));
      i || (hl & 124) !== 0 || $o(a, t, l);
    }
    return l;
  }
  function $o(e, t, l) {
    (e.flags |= 16384),
      (e = { getSnapshot: t, value: l }),
      (t = ue.updateQueue),
      t === null
        ? ((t = Gr()), (ue.updateQueue = t), (t.stores = [e]))
        : ((l = t.stores), l === null ? (t.stores = [e]) : l.push(e));
  }
  function Fo(e, t, l, a) {
    (t.value = l), (t.getSnapshot = a), Po(t) && Io(e);
  }
  function Wo(e, t, l) {
    return l(function () {
      Po(t) && Io(e);
    });
  }
  function Po(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var l = t();
      return !dt(e, l);
    } catch {
      return !0;
    }
  }
  function Io(e) {
    var t = ya(e, 2);
    t !== null && vt(t, e, 2);
  }
  function Zr(e) {
    var t = nt();
    if (typeof e == "function") {
      var l = e;
      if (((e = l()), Jl)) {
        rl(!0);
        try {
          l();
        } finally {
          rl(!1);
        }
      }
    }
    return (
      (t.memoizedState = t.baseState = e),
      (t.queue = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $t,
        lastRenderedState: e,
      }),
      t
    );
  }
  function ef(e, t, l, a) {
    return (e.baseState = l), Qr(e, ve, typeof a == "function" ? a : $t);
  }
  function W0(e, t, l, a, n) {
    if (Hu(e)) throw Error(s(485));
    if (((e = t.action), e !== null)) {
      var i = {
        payload: n,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function (f) {
          i.listeners.push(f);
        },
      };
      M.T !== null ? l(!0) : (i.isTransition = !1),
        a(i),
        (l = t.pending),
        l === null
          ? ((i.next = t.pending = i), tf(t, i))
          : ((i.next = l.next), (t.pending = l.next = i));
    }
  }
  function tf(e, t) {
    var l = t.action,
      a = t.payload,
      n = e.state;
    if (t.isTransition) {
      var i = M.T,
        f = {};
      M.T = f;
      try {
        var h = l(n, a),
          x = M.S;
        x !== null && x(f, h), lf(e, t, h);
      } catch (j) {
        Kr(e, t, j);
      } finally {
        M.T = i;
      }
    } else
      try {
        (i = l(n, a)), lf(e, t, i);
      } catch (j) {
        Kr(e, t, j);
      }
  }
  function lf(e, t, l) {
    l !== null && typeof l == "object" && typeof l.then == "function"
      ? l.then(
          function (a) {
            af(e, t, a);
          },
          function (a) {
            return Kr(e, t, a);
          }
        )
      : af(e, t, l);
  }
  function af(e, t, l) {
    (t.status = "fulfilled"),
      (t.value = l),
      nf(t),
      (e.state = l),
      (t = e.pending),
      t !== null &&
        ((l = t.next),
        l === t ? (e.pending = null) : ((l = l.next), (t.next = l), tf(e, l)));
  }
  function Kr(e, t, l) {
    var a = e.pending;
    if (((e.pending = null), a !== null)) {
      a = a.next;
      do (t.status = "rejected"), (t.reason = l), nf(t), (t = t.next);
      while (t !== a);
    }
    e.action = null;
  }
  function nf(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function uf(e, t) {
    return t;
  }
  function rf(e, t) {
    if (me) {
      var l = Te.formState;
      if (l !== null) {
        e: {
          var a = ue;
          if (me) {
            if (De) {
              t: {
                for (var n = De, i = Ut; n.nodeType !== 8; ) {
                  if (!i) {
                    n = null;
                    break t;
                  }
                  if (((n = Dt(n.nextSibling)), n === null)) {
                    n = null;
                    break t;
                  }
                }
                (i = n.data), (n = i === "F!" || i === "F" ? n : null);
              }
              if (n) {
                (De = Dt(n.nextSibling)), (a = n.data === "F!");
                break e;
              }
            }
            Ql(a);
          }
          a = !1;
        }
        a && (t = l[0]);
      }
    }
    return (
      (l = nt()),
      (l.memoizedState = l.baseState = t),
      (a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: uf,
        lastRenderedState: t,
      }),
      (l.queue = a),
      (l = Rf.bind(null, ue, a)),
      (a.dispatch = l),
      (a = Zr(!1)),
      (i = Wr.bind(null, ue, !1, a.queue)),
      (a = nt()),
      (n = { state: t, dispatch: null, action: e, pending: null }),
      (a.queue = n),
      (l = W0.bind(null, ue, n, i, l)),
      (n.dispatch = l),
      (a.memoizedState = e),
      [t, l, !1]
    );
  }
  function sf(e) {
    var t = Le();
    return cf(t, ve, e);
  }
  function cf(e, t, l) {
    if (
      ((t = Qr(e, t, uf)[0]),
      (e = Mu($t)[0]),
      typeof t == "object" && t !== null && typeof t.then == "function")
    )
      try {
        var a = xn(t);
      } catch (f) {
        throw f === mn ? Ou : f;
      }
    else a = t;
    t = Le();
    var n = t.queue,
      i = n.dispatch;
    return (
      l !== t.memoizedState &&
        ((ue.flags |= 2048), Ta(9, Uu(), P0.bind(null, n, l), null)),
      [a, i, e]
    );
  }
  function P0(e, t) {
    e.action = t;
  }
  function of(e) {
    var t = Le(),
      l = ve;
    if (l !== null) return cf(t, l, e);
    Le(), (t = t.memoizedState), (l = Le());
    var a = l.queue.dispatch;
    return (l.memoizedState = e), [t, a, !1];
  }
  function Ta(e, t, l, a) {
    return (
      (e = { tag: e, create: l, deps: a, inst: t, next: null }),
      (t = ue.updateQueue),
      t === null && ((t = Gr()), (ue.updateQueue = t)),
      (l = t.lastEffect),
      l === null
        ? (t.lastEffect = e.next = e)
        : ((a = l.next), (l.next = e), (e.next = a), (t.lastEffect = e)),
      e
    );
  }
  function Uu() {
    return { destroy: void 0, resource: void 0 };
  }
  function ff() {
    return Le().memoizedState;
  }
  function Bu(e, t, l, a) {
    var n = nt();
    (a = a === void 0 ? null : a),
      (ue.flags |= e),
      (n.memoizedState = Ta(1 | t, Uu(), l, a));
  }
  function bn(e, t, l, a) {
    var n = Le();
    a = a === void 0 ? null : a;
    var i = n.memoizedState.inst;
    ve !== null && a !== null && Br(a, ve.memoizedState.deps)
      ? (n.memoizedState = Ta(t, i, l, a))
      : ((ue.flags |= e), (n.memoizedState = Ta(1 | t, i, l, a)));
  }
  function df(e, t) {
    Bu(8390656, 8, e, t);
  }
  function mf(e, t) {
    bn(2048, 8, e, t);
  }
  function hf(e, t) {
    return bn(4, 2, e, t);
  }
  function yf(e, t) {
    return bn(4, 4, e, t);
  }
  function pf(e, t) {
    if (typeof t == "function") {
      e = e();
      var l = t(e);
      return function () {
        typeof l == "function" ? l() : t(null);
      };
    }
    if (t != null)
      return (
        (e = e()),
        (t.current = e),
        function () {
          t.current = null;
        }
      );
  }
  function gf(e, t, l) {
    (l = l != null ? l.concat([e]) : null), bn(4, 4, pf.bind(null, t, e), l);
  }
  function Jr() {}
  function vf(e, t) {
    var l = Le();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    return t !== null && Br(t, a[1]) ? a[0] : ((l.memoizedState = [e, t]), e);
  }
  function xf(e, t) {
    var l = Le();
    t = t === void 0 ? null : t;
    var a = l.memoizedState;
    if (t !== null && Br(t, a[1])) return a[0];
    if (((a = e()), Jl)) {
      rl(!0);
      try {
        e();
      } finally {
        rl(!1);
      }
    }
    return (l.memoizedState = [a, t]), a;
  }
  function kr(e, t, l) {
    return l === void 0 || (hl & 1073741824) !== 0
      ? (e.memoizedState = t)
      : ((e.memoizedState = l), (e = Ed()), (ue.lanes |= e), (Sl |= e), l);
  }
  function bf(e, t, l, a) {
    return dt(l, t)
      ? l
      : Sa.current !== null
      ? ((e = kr(e, l, a)), dt(e, t) || (Qe = !0), e)
      : (hl & 42) === 0
      ? ((Qe = !0), (e.memoizedState = l))
      : ((e = Ed()), (ue.lanes |= e), (Sl |= e), t);
  }
  function Sf(e, t, l, a, n) {
    var i = Q.p;
    Q.p = i !== 0 && 8 > i ? i : 8;
    var f = M.T,
      h = {};
    (M.T = h), Wr(e, !1, t, l);
    try {
      var x = n(),
        j = M.S;
      if (
        (j !== null && j(h, x),
        x !== null && typeof x == "object" && typeof x.then == "function")
      ) {
        var z = k0(x, a);
        Sn(e, t, z, gt(e));
      } else Sn(e, t, a, gt(e));
    } catch (H) {
      Sn(e, t, { then: function () {}, status: "rejected", reason: H }, gt());
    } finally {
      (Q.p = i), (M.T = f);
    }
  }
  function I0() {}
  function $r(e, t, l, a) {
    if (e.tag !== 5) throw Error(s(476));
    var n = Ef(e).queue;
    Sf(
      e,
      n,
      t,
      ee,
      l === null
        ? I0
        : function () {
            return Nf(e), l(a);
          }
    );
  }
  function Ef(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ee,
      baseState: ee,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: $t,
        lastRenderedState: ee,
      },
      next: null,
    };
    var l = {};
    return (
      (t.next = {
        memoizedState: l,
        baseState: l,
        baseQueue: null,
        queue: {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: $t,
          lastRenderedState: l,
        },
        next: null,
      }),
      (e.memoizedState = t),
      (e = e.alternate),
      e !== null && (e.memoizedState = t),
      t
    );
  }
  function Nf(e) {
    var t = Ef(e).next.queue;
    Sn(e, t, {}, gt());
  }
  function Fr() {
    return Pe(Ln);
  }
  function Tf() {
    return Le().memoizedState;
  }
  function jf() {
    return Le().memoizedState;
  }
  function ey(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var l = gt();
          e = dl(l);
          var a = ml(t, e, l);
          a !== null && (vt(a, t, l), yn(a, t, l)),
            (t = { cache: Rr() }),
            (e.payload = t);
          return;
      }
      t = t.return;
    }
  }
  function ty(e, t, l) {
    var a = gt();
    (l = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
      Hu(e)
        ? Af(t, l)
        : ((l = pr(e, t, l, a)), l !== null && (vt(l, e, a), Of(l, t, a)));
  }
  function Rf(e, t, l) {
    var a = gt();
    Sn(e, t, l, a);
  }
  function Sn(e, t, l, a) {
    var n = {
      lane: a,
      revertLane: 0,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    };
    if (Hu(e)) Af(t, n);
    else {
      var i = e.alternate;
      if (
        e.lanes === 0 &&
        (i === null || i.lanes === 0) &&
        ((i = t.lastRenderedReducer), i !== null)
      )
        try {
          var f = t.lastRenderedState,
            h = i(f, l);
          if (((n.hasEagerState = !0), (n.eagerState = h), dt(h, f)))
            return bu(e, t, n, 0), Te === null && xu(), !1;
        } catch {
        } finally {
        }
      if (((l = pr(e, t, n, a)), l !== null))
        return vt(l, e, a), Of(l, t, a), !0;
    }
    return !1;
  }
  function Wr(e, t, l, a) {
    if (
      ((a = {
        lane: 2,
        revertLane: ws(),
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null,
      }),
      Hu(e))
    ) {
      if (t) throw Error(s(479));
    } else (t = pr(e, l, a, 2)), t !== null && vt(t, e, 2);
  }
  function Hu(e) {
    var t = e.alternate;
    return e === ue || (t !== null && t === ue);
  }
  function Af(e, t) {
    Ea = _u = !0;
    var l = e.pending;
    l === null ? (t.next = t) : ((t.next = l.next), (l.next = t)),
      (e.pending = t);
  }
  function Of(e, t, l) {
    if ((l & 4194048) !== 0) {
      var a = t.lanes;
      (a &= e.pendingLanes), (l |= a), (t.lanes = l), Mc(e, l);
    }
  }
  var qu = {
      readContext: Pe,
      use: zu,
      useCallback: ze,
      useContext: ze,
      useEffect: ze,
      useImperativeHandle: ze,
      useLayoutEffect: ze,
      useInsertionEffect: ze,
      useMemo: ze,
      useReducer: ze,
      useRef: ze,
      useState: ze,
      useDebugValue: ze,
      useDeferredValue: ze,
      useTransition: ze,
      useSyncExternalStore: ze,
      useId: ze,
      useHostTransitionStatus: ze,
      useFormState: ze,
      useActionState: ze,
      useOptimistic: ze,
      useMemoCache: ze,
      useCacheRefresh: ze,
    },
    wf = {
      readContext: Pe,
      use: zu,
      useCallback: function (e, t) {
        return (nt().memoizedState = [e, t === void 0 ? null : t]), e;
      },
      useContext: Pe,
      useEffect: df,
      useImperativeHandle: function (e, t, l) {
        (l = l != null ? l.concat([e]) : null),
          Bu(4194308, 4, pf.bind(null, t, e), l);
      },
      useLayoutEffect: function (e, t) {
        return Bu(4194308, 4, e, t);
      },
      useInsertionEffect: function (e, t) {
        Bu(4, 2, e, t);
      },
      useMemo: function (e, t) {
        var l = nt();
        t = t === void 0 ? null : t;
        var a = e();
        if (Jl) {
          rl(!0);
          try {
            e();
          } finally {
            rl(!1);
          }
        }
        return (l.memoizedState = [a, t]), a;
      },
      useReducer: function (e, t, l) {
        var a = nt();
        if (l !== void 0) {
          var n = l(t);
          if (Jl) {
            rl(!0);
            try {
              l(t);
            } finally {
              rl(!1);
            }
          }
        } else n = t;
        return (
          (a.memoizedState = a.baseState = n),
          (e = {
            pending: null,
            lanes: 0,
            dispatch: null,
            lastRenderedReducer: e,
            lastRenderedState: n,
          }),
          (a.queue = e),
          (e = e.dispatch = ty.bind(null, ue, e)),
          [a.memoizedState, e]
        );
      },
      useRef: function (e) {
        var t = nt();
        return (e = { current: e }), (t.memoizedState = e);
      },
      useState: function (e) {
        e = Zr(e);
        var t = e.queue,
          l = Rf.bind(null, ue, t);
        return (t.dispatch = l), [e.memoizedState, l];
      },
      useDebugValue: Jr,
      useDeferredValue: function (e, t) {
        var l = nt();
        return kr(l, e, t);
      },
      useTransition: function () {
        var e = Zr(!1);
        return (
          (e = Sf.bind(null, ue, e.queue, !0, !1)),
          (nt().memoizedState = e),
          [!1, e]
        );
      },
      useSyncExternalStore: function (e, t, l) {
        var a = ue,
          n = nt();
        if (me) {
          if (l === void 0) throw Error(s(407));
          l = l();
        } else {
          if (((l = t()), Te === null)) throw Error(s(349));
          (oe & 124) !== 0 || $o(a, t, l);
        }
        n.memoizedState = l;
        var i = { value: l, getSnapshot: t };
        return (
          (n.queue = i),
          df(Wo.bind(null, a, i, e), [e]),
          (a.flags |= 2048),
          Ta(9, Uu(), Fo.bind(null, a, i, l, t), null),
          l
        );
      },
      useId: function () {
        var e = nt(),
          t = Te.identifierPrefix;
        if (me) {
          var l = Kt,
            a = Zt;
          (l = (a & ~(1 << (32 - ft(a) - 1))).toString(32) + l),
            (t = "«" + t + "R" + l),
            (l = Cu++),
            0 < l && (t += "H" + l.toString(32)),
            (t += "»");
        } else (l = $0++), (t = "«" + t + "r" + l.toString(32) + "»");
        return (e.memoizedState = t);
      },
      useHostTransitionStatus: Fr,
      useFormState: rf,
      useActionState: rf,
      useOptimistic: function (e) {
        var t = nt();
        t.memoizedState = t.baseState = e;
        var l = {
          pending: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: null,
          lastRenderedState: null,
        };
        return (
          (t.queue = l),
          (t = Wr.bind(null, ue, !0, l)),
          (l.dispatch = t),
          [e, t]
        );
      },
      useMemoCache: Xr,
      useCacheRefresh: function () {
        return (nt().memoizedState = ey.bind(null, ue));
      },
    },
    Df = {
      readContext: Pe,
      use: zu,
      useCallback: vf,
      useContext: Pe,
      useEffect: mf,
      useImperativeHandle: gf,
      useInsertionEffect: hf,
      useLayoutEffect: yf,
      useMemo: xf,
      useReducer: Mu,
      useRef: ff,
      useState: function () {
        return Mu($t);
      },
      useDebugValue: Jr,
      useDeferredValue: function (e, t) {
        var l = Le();
        return bf(l, ve.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Mu($t)[0],
          t = Le().memoizedState;
        return [typeof e == "boolean" ? e : xn(e), t];
      },
      useSyncExternalStore: ko,
      useId: Tf,
      useHostTransitionStatus: Fr,
      useFormState: sf,
      useActionState: sf,
      useOptimistic: function (e, t) {
        var l = Le();
        return ef(l, ve, e, t);
      },
      useMemoCache: Xr,
      useCacheRefresh: jf,
    },
    ly = {
      readContext: Pe,
      use: zu,
      useCallback: vf,
      useContext: Pe,
      useEffect: mf,
      useImperativeHandle: gf,
      useInsertionEffect: hf,
      useLayoutEffect: yf,
      useMemo: xf,
      useReducer: Vr,
      useRef: ff,
      useState: function () {
        return Vr($t);
      },
      useDebugValue: Jr,
      useDeferredValue: function (e, t) {
        var l = Le();
        return ve === null ? kr(l, e, t) : bf(l, ve.memoizedState, e, t);
      },
      useTransition: function () {
        var e = Vr($t)[0],
          t = Le().memoizedState;
        return [typeof e == "boolean" ? e : xn(e), t];
      },
      useSyncExternalStore: ko,
      useId: Tf,
      useHostTransitionStatus: Fr,
      useFormState: of,
      useActionState: of,
      useOptimistic: function (e, t) {
        var l = Le();
        return ve !== null
          ? ef(l, ve, e, t)
          : ((l.baseState = e), [e, l.queue.dispatch]);
      },
      useMemoCache: Xr,
      useCacheRefresh: jf,
    },
    ja = null,
    En = 0;
  function Lu(e) {
    var t = En;
    return (En += 1), ja === null && (ja = []), Yo(ja, e, t);
  }
  function Nn(e, t) {
    (t = t.props.ref), (e.ref = t !== void 0 ? t : null);
  }
  function Yu(e, t) {
    throw t.$$typeof === R
      ? Error(s(525))
      : ((e = Object.prototype.toString.call(t)),
        Error(
          s(
            31,
            e === "[object Object]"
              ? "object with keys {" + Object.keys(t).join(", ") + "}"
              : e
          )
        ));
  }
  function _f(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Cf(e) {
    function t(N, E) {
      if (e) {
        var T = N.deletions;
        T === null ? ((N.deletions = [E]), (N.flags |= 16)) : T.push(E);
      }
    }
    function l(N, E) {
      if (!e) return null;
      for (; E !== null; ) t(N, E), (E = E.sibling);
      return null;
    }
    function a(N) {
      for (var E = new Map(); N !== null; )
        N.key !== null ? E.set(N.key, N) : E.set(N.index, N), (N = N.sibling);
      return E;
    }
    function n(N, E) {
      return (N = Vt(N, E)), (N.index = 0), (N.sibling = null), N;
    }
    function i(N, E, T) {
      return (
        (N.index = T),
        e
          ? ((T = N.alternate),
            T !== null
              ? ((T = T.index), T < E ? ((N.flags |= 67108866), E) : T)
              : ((N.flags |= 67108866), E))
          : ((N.flags |= 1048576), E)
      );
    }
    function f(N) {
      return e && N.alternate === null && (N.flags |= 67108866), N;
    }
    function h(N, E, T, U) {
      return E === null || E.tag !== 6
        ? ((E = vr(T, N.mode, U)), (E.return = N), E)
        : ((E = n(E, T)), (E.return = N), E);
    }
    function x(N, E, T, U) {
      var Z = T.type;
      return Z === B
        ? z(N, E, T.props.children, U, T.key)
        : E !== null &&
          (E.elementType === Z ||
            (typeof Z == "object" &&
              Z !== null &&
              Z.$$typeof === je &&
              _f(Z) === E.type))
        ? ((E = n(E, T.props)), Nn(E, T), (E.return = N), E)
        : ((E = Eu(T.type, T.key, T.props, null, N.mode, U)),
          Nn(E, T),
          (E.return = N),
          E);
    }
    function j(N, E, T, U) {
      return E === null ||
        E.tag !== 4 ||
        E.stateNode.containerInfo !== T.containerInfo ||
        E.stateNode.implementation !== T.implementation
        ? ((E = xr(T, N.mode, U)), (E.return = N), E)
        : ((E = n(E, T.children || [])), (E.return = N), E);
    }
    function z(N, E, T, U, Z) {
      return E === null || E.tag !== 7
        ? ((E = Ll(T, N.mode, U, Z)), (E.return = N), E)
        : ((E = n(E, T)), (E.return = N), E);
    }
    function H(N, E, T) {
      if (
        (typeof E == "string" && E !== "") ||
        typeof E == "number" ||
        typeof E == "bigint"
      )
        return (E = vr("" + E, N.mode, T)), (E.return = N), E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case C:
            return (
              (T = Eu(E.type, E.key, E.props, null, N.mode, T)),
              Nn(T, E),
              (T.return = N),
              T
            );
          case G:
            return (E = xr(E, N.mode, T)), (E.return = N), E;
          case je:
            var U = E._init;
            return (E = U(E._payload)), H(N, E, T);
        }
        if (Fe(E) || Ce(E))
          return (E = Ll(E, N.mode, T, null)), (E.return = N), E;
        if (typeof E.then == "function") return H(N, Lu(E), T);
        if (E.$$typeof === K) return H(N, Ru(N, E), T);
        Yu(N, E);
      }
      return null;
    }
    function O(N, E, T, U) {
      var Z = E !== null ? E.key : null;
      if (
        (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
      )
        return Z !== null ? null : h(N, E, "" + T, U);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case C:
            return T.key === Z ? x(N, E, T, U) : null;
          case G:
            return T.key === Z ? j(N, E, T, U) : null;
          case je:
            return (Z = T._init), (T = Z(T._payload)), O(N, E, T, U);
        }
        if (Fe(T) || Ce(T)) return Z !== null ? null : z(N, E, T, U, null);
        if (typeof T.then == "function") return O(N, E, Lu(T), U);
        if (T.$$typeof === K) return O(N, E, Ru(N, T), U);
        Yu(N, T);
      }
      return null;
    }
    function w(N, E, T, U, Z) {
      if (
        (typeof U == "string" && U !== "") ||
        typeof U == "number" ||
        typeof U == "bigint"
      )
        return (N = N.get(T) || null), h(E, N, "" + U, Z);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case C:
            return (
              (N = N.get(U.key === null ? T : U.key) || null), x(E, N, U, Z)
            );
          case G:
            return (
              (N = N.get(U.key === null ? T : U.key) || null), j(E, N, U, Z)
            );
          case je:
            var ie = U._init;
            return (U = ie(U._payload)), w(N, E, T, U, Z);
        }
        if (Fe(U) || Ce(U)) return (N = N.get(T) || null), z(E, N, U, Z, null);
        if (typeof U.then == "function") return w(N, E, T, Lu(U), Z);
        if (U.$$typeof === K) return w(N, E, T, Ru(E, U), Z);
        Yu(E, U);
      }
      return null;
    }
    function te(N, E, T, U) {
      for (
        var Z = null, ie = null, $ = E, I = (E = 0), Ze = null;
        $ !== null && I < T.length;
        I++
      ) {
        $.index > I ? ((Ze = $), ($ = null)) : (Ze = $.sibling);
        var de = O(N, $, T[I], U);
        if (de === null) {
          $ === null && ($ = Ze);
          break;
        }
        e && $ && de.alternate === null && t(N, $),
          (E = i(de, E, I)),
          ie === null ? (Z = de) : (ie.sibling = de),
          (ie = de),
          ($ = Ze);
      }
      if (I === T.length) return l(N, $), me && Gl(N, I), Z;
      if ($ === null) {
        for (; I < T.length; I++)
          ($ = H(N, T[I], U)),
            $ !== null &&
              ((E = i($, E, I)),
              ie === null ? (Z = $) : (ie.sibling = $),
              (ie = $));
        return me && Gl(N, I), Z;
      }
      for ($ = a($); I < T.length; I++)
        (Ze = w($, N, I, T[I], U)),
          Ze !== null &&
            (e &&
              Ze.alternate !== null &&
              $.delete(Ze.key === null ? I : Ze.key),
            (E = i(Ze, E, I)),
            ie === null ? (Z = Ze) : (ie.sibling = Ze),
            (ie = Ze));
      return (
        e &&
          $.forEach(function (Dl) {
            return t(N, Dl);
          }),
        me && Gl(N, I),
        Z
      );
    }
    function P(N, E, T, U) {
      if (T == null) throw Error(s(151));
      for (
        var Z = null, ie = null, $ = E, I = (E = 0), Ze = null, de = T.next();
        $ !== null && !de.done;
        I++, de = T.next()
      ) {
        $.index > I ? ((Ze = $), ($ = null)) : (Ze = $.sibling);
        var Dl = O(N, $, de.value, U);
        if (Dl === null) {
          $ === null && ($ = Ze);
          break;
        }
        e && $ && Dl.alternate === null && t(N, $),
          (E = i(Dl, E, I)),
          ie === null ? (Z = Dl) : (ie.sibling = Dl),
          (ie = Dl),
          ($ = Ze);
      }
      if (de.done) return l(N, $), me && Gl(N, I), Z;
      if ($ === null) {
        for (; !de.done; I++, de = T.next())
          (de = H(N, de.value, U)),
            de !== null &&
              ((E = i(de, E, I)),
              ie === null ? (Z = de) : (ie.sibling = de),
              (ie = de));
        return me && Gl(N, I), Z;
      }
      for ($ = a($); !de.done; I++, de = T.next())
        (de = w($, N, I, de.value, U)),
          de !== null &&
            (e &&
              de.alternate !== null &&
              $.delete(de.key === null ? I : de.key),
            (E = i(de, E, I)),
            ie === null ? (Z = de) : (ie.sibling = de),
            (ie = de));
      return (
        e &&
          $.forEach(function (ap) {
            return t(N, ap);
          }),
        me && Gl(N, I),
        Z
      );
    }
    function be(N, E, T, U) {
      if (
        (typeof T == "object" &&
          T !== null &&
          T.type === B &&
          T.key === null &&
          (T = T.props.children),
        typeof T == "object" && T !== null)
      ) {
        switch (T.$$typeof) {
          case C:
            e: {
              for (var Z = T.key; E !== null; ) {
                if (E.key === Z) {
                  if (((Z = T.type), Z === B)) {
                    if (E.tag === 7) {
                      l(N, E.sibling),
                        (U = n(E, T.props.children)),
                        (U.return = N),
                        (N = U);
                      break e;
                    }
                  } else if (
                    E.elementType === Z ||
                    (typeof Z == "object" &&
                      Z !== null &&
                      Z.$$typeof === je &&
                      _f(Z) === E.type)
                  ) {
                    l(N, E.sibling),
                      (U = n(E, T.props)),
                      Nn(U, T),
                      (U.return = N),
                      (N = U);
                    break e;
                  }
                  l(N, E);
                  break;
                } else t(N, E);
                E = E.sibling;
              }
              T.type === B
                ? ((U = Ll(T.props.children, N.mode, U, T.key)),
                  (U.return = N),
                  (N = U))
                : ((U = Eu(T.type, T.key, T.props, null, N.mode, U)),
                  Nn(U, T),
                  (U.return = N),
                  (N = U));
            }
            return f(N);
          case G:
            e: {
              for (Z = T.key; E !== null; ) {
                if (E.key === Z)
                  if (
                    E.tag === 4 &&
                    E.stateNode.containerInfo === T.containerInfo &&
                    E.stateNode.implementation === T.implementation
                  ) {
                    l(N, E.sibling),
                      (U = n(E, T.children || [])),
                      (U.return = N),
                      (N = U);
                    break e;
                  } else {
                    l(N, E);
                    break;
                  }
                else t(N, E);
                E = E.sibling;
              }
              (U = xr(T, N.mode, U)), (U.return = N), (N = U);
            }
            return f(N);
          case je:
            return (Z = T._init), (T = Z(T._payload)), be(N, E, T, U);
        }
        if (Fe(T)) return te(N, E, T, U);
        if (Ce(T)) {
          if (((Z = Ce(T)), typeof Z != "function")) throw Error(s(150));
          return (T = Z.call(T)), P(N, E, T, U);
        }
        if (typeof T.then == "function") return be(N, E, Lu(T), U);
        if (T.$$typeof === K) return be(N, E, Ru(N, T), U);
        Yu(N, T);
      }
      return (typeof T == "string" && T !== "") ||
        typeof T == "number" ||
        typeof T == "bigint"
        ? ((T = "" + T),
          E !== null && E.tag === 6
            ? (l(N, E.sibling), (U = n(E, T)), (U.return = N), (N = U))
            : (l(N, E), (U = vr(T, N.mode, U)), (U.return = N), (N = U)),
          f(N))
        : l(N, E);
    }
    return function (N, E, T, U) {
      try {
        En = 0;
        var Z = be(N, E, T, U);
        return (ja = null), Z;
      } catch ($) {
        if ($ === mn || $ === Ou) throw $;
        var ie = mt(29, $, null, N.mode);
        return (ie.lanes = U), (ie.return = N), ie;
      } finally {
      }
    };
  }
  var Ra = Cf(!0),
    zf = Cf(!1),
    jt = L(null),
    Bt = null;
  function yl(e) {
    var t = e.alternate;
    X(Ge, Ge.current & 1),
      X(jt, e),
      Bt === null &&
        (t === null || Sa.current !== null || t.memoizedState !== null) &&
        (Bt = e);
  }
  function Mf(e) {
    if (e.tag === 22) {
      if ((X(Ge, Ge.current), X(jt, e), Bt === null)) {
        var t = e.alternate;
        t !== null && t.memoizedState !== null && (Bt = e);
      }
    } else pl();
  }
  function pl() {
    X(Ge, Ge.current), X(jt, jt.current);
  }
  function Ft(e) {
    V(jt), Bt === e && (Bt = null), V(Ge);
  }
  var Ge = L(0);
  function Gu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var l = t.memoizedState;
        if (
          l !== null &&
          ((l = l.dehydrated), l === null || l.data === "$?" || Gs(l))
        )
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        (t.child.return = t), (t = t.child);
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
    return null;
  }
  function Pr(e, t, l, a) {
    (t = e.memoizedState),
      (l = l(a, t)),
      (l = l == null ? t : g({}, t, l)),
      (e.memoizedState = l),
      e.lanes === 0 && (e.updateQueue.baseState = l);
  }
  var Ir = {
    enqueueSetState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = dl(a);
      (n.payload = t),
        l != null && (n.callback = l),
        (t = ml(e, n, a)),
        t !== null && (vt(t, e, a), yn(t, e, a));
    },
    enqueueReplaceState: function (e, t, l) {
      e = e._reactInternals;
      var a = gt(),
        n = dl(a);
      (n.tag = 1),
        (n.payload = t),
        l != null && (n.callback = l),
        (t = ml(e, n, a)),
        t !== null && (vt(t, e, a), yn(t, e, a));
    },
    enqueueForceUpdate: function (e, t) {
      e = e._reactInternals;
      var l = gt(),
        a = dl(l);
      (a.tag = 2),
        t != null && (a.callback = t),
        (t = ml(e, a, l)),
        t !== null && (vt(t, e, l), yn(t, e, l));
    },
  };
  function Uf(e, t, l, a, n, i, f) {
    return (
      (e = e.stateNode),
      typeof e.shouldComponentUpdate == "function"
        ? e.shouldComponentUpdate(a, i, f)
        : t.prototype && t.prototype.isPureReactComponent
        ? !nn(l, a) || !nn(n, i)
        : !0
    );
  }
  function Bf(e, t, l, a) {
    (e = t.state),
      typeof t.componentWillReceiveProps == "function" &&
        t.componentWillReceiveProps(l, a),
      typeof t.UNSAFE_componentWillReceiveProps == "function" &&
        t.UNSAFE_componentWillReceiveProps(l, a),
      t.state !== e && Ir.enqueueReplaceState(t, t.state, null);
  }
  function kl(e, t) {
    var l = t;
    if ("ref" in t) {
      l = {};
      for (var a in t) a !== "ref" && (l[a] = t[a]);
    }
    if ((e = e.defaultProps)) {
      l === t && (l = g({}, l));
      for (var n in e) l[n] === void 0 && (l[n] = e[n]);
    }
    return l;
  }
  var Xu =
    typeof reportError == "function"
      ? reportError
      : function (e) {
          if (
            typeof window == "object" &&
            typeof window.ErrorEvent == "function"
          ) {
            var t = new window.ErrorEvent("error", {
              bubbles: !0,
              cancelable: !0,
              message:
                typeof e == "object" &&
                e !== null &&
                typeof e.message == "string"
                  ? String(e.message)
                  : String(e),
              error: e,
            });
            if (!window.dispatchEvent(t)) return;
          } else if (
            typeof process == "object" &&
            typeof process.emit == "function"
          ) {
            process.emit("uncaughtException", e);
            return;
          }
          console.error(e);
        };
  function Hf(e) {
    Xu(e);
  }
  function qf(e) {
    console.error(e);
  }
  function Lf(e) {
    Xu(e);
  }
  function Qu(e, t) {
    try {
      var l = e.onUncaughtError;
      l(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function () {
        throw a;
      });
    }
  }
  function Yf(e, t, l) {
    try {
      var a = e.onCaughtError;
      a(l.value, {
        componentStack: l.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null,
      });
    } catch (n) {
      setTimeout(function () {
        throw n;
      });
    }
  }
  function es(e, t, l) {
    return (
      (l = dl(l)),
      (l.tag = 3),
      (l.payload = { element: null }),
      (l.callback = function () {
        Qu(e, t);
      }),
      l
    );
  }
  function Gf(e) {
    return (e = dl(e)), (e.tag = 3), e;
  }
  function Xf(e, t, l, a) {
    var n = l.type.getDerivedStateFromError;
    if (typeof n == "function") {
      var i = a.value;
      (e.payload = function () {
        return n(i);
      }),
        (e.callback = function () {
          Yf(t, l, a);
        });
    }
    var f = l.stateNode;
    f !== null &&
      typeof f.componentDidCatch == "function" &&
      (e.callback = function () {
        Yf(t, l, a),
          typeof n != "function" &&
            (El === null ? (El = new Set([this])) : El.add(this));
        var h = a.stack;
        this.componentDidCatch(a.value, {
          componentStack: h !== null ? h : "",
        });
      });
  }
  function ay(e, t, l, a, n) {
    if (
      ((l.flags |= 32768),
      a !== null && typeof a == "object" && typeof a.then == "function")
    ) {
      if (
        ((t = l.alternate),
        t !== null && on(t, l, n, !0),
        (l = jt.current),
        l !== null)
      ) {
        switch (l.tag) {
          case 13:
            return (
              Bt === null ? Ts() : l.alternate === null && _e === 0 && (_e = 3),
              (l.flags &= -257),
              (l.flags |= 65536),
              (l.lanes = n),
              a === wr
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null ? (l.updateQueue = new Set([a])) : t.add(a),
                  Rs(e, a, n)),
              !1
            );
          case 22:
            return (
              (l.flags |= 65536),
              a === wr
                ? (l.flags |= 16384)
                : ((t = l.updateQueue),
                  t === null
                    ? ((t = {
                        transitions: null,
                        markerInstances: null,
                        retryQueue: new Set([a]),
                      }),
                      (l.updateQueue = t))
                    : ((l = t.retryQueue),
                      l === null ? (t.retryQueue = new Set([a])) : l.add(a)),
                  Rs(e, a, n)),
              !1
            );
        }
        throw Error(s(435, l.tag));
      }
      return Rs(e, a, n), Ts(), !1;
    }
    if (me)
      return (
        (t = jt.current),
        t !== null
          ? ((t.flags & 65536) === 0 && (t.flags |= 256),
            (t.flags |= 65536),
            (t.lanes = n),
            a !== Er && ((e = Error(s(422), { cause: a })), cn(St(e, l))))
          : (a !== Er && ((t = Error(s(423), { cause: a })), cn(St(t, l))),
            (e = e.current.alternate),
            (e.flags |= 65536),
            (n &= -n),
            (e.lanes |= n),
            (a = St(a, l)),
            (n = es(e.stateNode, a, n)),
            Cr(e, n),
            _e !== 4 && (_e = 2)),
        !1
      );
    var i = Error(s(520), { cause: a });
    if (
      ((i = St(i, l)),
      Dn === null ? (Dn = [i]) : Dn.push(i),
      _e !== 4 && (_e = 2),
      t === null)
    )
      return !0;
    (a = St(a, l)), (l = t);
    do {
      switch (l.tag) {
        case 3:
          return (
            (l.flags |= 65536),
            (e = n & -n),
            (l.lanes |= e),
            (e = es(l.stateNode, a, e)),
            Cr(l, e),
            !1
          );
        case 1:
          if (
            ((t = l.type),
            (i = l.stateNode),
            (l.flags & 128) === 0 &&
              (typeof t.getDerivedStateFromError == "function" ||
                (i !== null &&
                  typeof i.componentDidCatch == "function" &&
                  (El === null || !El.has(i)))))
          )
            return (
              (l.flags |= 65536),
              (n &= -n),
              (l.lanes |= n),
              (n = Gf(n)),
              Xf(n, e, l, a),
              Cr(l, n),
              !1
            );
      }
      l = l.return;
    } while (l !== null);
    return !1;
  }
  var Qf = Error(s(461)),
    Qe = !1;
  function Je(e, t, l, a) {
    t.child = e === null ? zf(t, null, l, a) : Ra(t, e.child, l, a);
  }
  function Vf(e, t, l, a, n) {
    l = l.render;
    var i = t.ref;
    if ("ref" in a) {
      var f = {};
      for (var h in a) h !== "ref" && (f[h] = a[h]);
    } else f = a;
    return (
      Zl(t),
      (a = Hr(e, t, l, f, i, n)),
      (h = qr()),
      e !== null && !Qe
        ? (Lr(e, t, n), Wt(e, t, n))
        : (me && h && br(t), (t.flags |= 1), Je(e, t, a, n), t.child)
    );
  }
  function Zf(e, t, l, a, n) {
    if (e === null) {
      var i = l.type;
      return typeof i == "function" &&
        !gr(i) &&
        i.defaultProps === void 0 &&
        l.compare === null
        ? ((t.tag = 15), (t.type = i), Kf(e, t, i, a, n))
        : ((e = Eu(l.type, null, a, t, t.mode, n)),
          (e.ref = t.ref),
          (e.return = t),
          (t.child = e));
    }
    if (((i = e.child), !ss(e, n))) {
      var f = i.memoizedProps;
      if (
        ((l = l.compare), (l = l !== null ? l : nn), l(f, a) && e.ref === t.ref)
      )
        return Wt(e, t, n);
    }
    return (
      (t.flags |= 1),
      (e = Vt(i, a)),
      (e.ref = t.ref),
      (e.return = t),
      (t.child = e)
    );
  }
  function Kf(e, t, l, a, n) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (nn(i, a) && e.ref === t.ref)
        if (((Qe = !1), (t.pendingProps = a = i), ss(e, n)))
          (e.flags & 131072) !== 0 && (Qe = !0);
        else return (t.lanes = e.lanes), Wt(e, t, n);
    }
    return ts(e, t, l, a, n);
  }
  function Jf(e, t, l) {
    var a = t.pendingProps,
      n = a.children,
      i = e !== null ? e.memoizedState : null;
    if (a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (((a = i !== null ? i.baseLanes | l : l), e !== null)) {
          for (n = t.child = e.child, i = 0; n !== null; )
            (i = i | n.lanes | n.childLanes), (n = n.sibling);
          t.childLanes = i & ~a;
        } else (t.childLanes = 0), (t.child = null);
        return kf(e, t, a, l);
      }
      if ((l & 536870912) !== 0)
        (t.memoizedState = { baseLanes: 0, cachePool: null }),
          e !== null && Au(t, i !== null ? i.cachePool : null),
          i !== null ? Zo(t, i) : Mr(),
          Mf(t);
      else
        return (
          (t.lanes = t.childLanes = 536870912),
          kf(e, t, i !== null ? i.baseLanes | l : l, l)
        );
    } else
      i !== null
        ? (Au(t, i.cachePool), Zo(t, i), pl(), (t.memoizedState = null))
        : (e !== null && Au(t, null), Mr(), pl());
    return Je(e, t, n, l), t.child;
  }
  function kf(e, t, l, a) {
    var n = Or();
    return (
      (n = n === null ? null : { parent: Ye._currentValue, pool: n }),
      (t.memoizedState = { baseLanes: l, cachePool: n }),
      e !== null && Au(t, null),
      Mr(),
      Mf(t),
      e !== null && on(e, t, a, !0),
      null
    );
  }
  function Vu(e, t) {
    var l = t.ref;
    if (l === null) e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof l != "function" && typeof l != "object") throw Error(s(284));
      (e === null || e.ref !== l) && (t.flags |= 4194816);
    }
  }
  function ts(e, t, l, a, n) {
    return (
      Zl(t),
      (l = Hr(e, t, l, a, void 0, n)),
      (a = qr()),
      e !== null && !Qe
        ? (Lr(e, t, n), Wt(e, t, n))
        : (me && a && br(t), (t.flags |= 1), Je(e, t, l, n), t.child)
    );
  }
  function $f(e, t, l, a, n, i) {
    return (
      Zl(t),
      (t.updateQueue = null),
      (l = Jo(t, a, l, n)),
      Ko(e),
      (a = qr()),
      e !== null && !Qe
        ? (Lr(e, t, i), Wt(e, t, i))
        : (me && a && br(t), (t.flags |= 1), Je(e, t, l, i), t.child)
    );
  }
  function Ff(e, t, l, a, n) {
    if ((Zl(t), t.stateNode === null)) {
      var i = pa,
        f = l.contextType;
      typeof f == "object" && f !== null && (i = Pe(f)),
        (i = new l(a, i)),
        (t.memoizedState =
          i.state !== null && i.state !== void 0 ? i.state : null),
        (i.updater = Ir),
        (t.stateNode = i),
        (i._reactInternals = t),
        (i = t.stateNode),
        (i.props = a),
        (i.state = t.memoizedState),
        (i.refs = {}),
        Dr(t),
        (f = l.contextType),
        (i.context = typeof f == "object" && f !== null ? Pe(f) : pa),
        (i.state = t.memoizedState),
        (f = l.getDerivedStateFromProps),
        typeof f == "function" && (Pr(t, l, f, a), (i.state = t.memoizedState)),
        typeof l.getDerivedStateFromProps == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function" ||
          (typeof i.UNSAFE_componentWillMount != "function" &&
            typeof i.componentWillMount != "function") ||
          ((f = i.state),
          typeof i.componentWillMount == "function" && i.componentWillMount(),
          typeof i.UNSAFE_componentWillMount == "function" &&
            i.UNSAFE_componentWillMount(),
          f !== i.state && Ir.enqueueReplaceState(i, i.state, null),
          gn(t, a, i, n),
          pn(),
          (i.state = t.memoizedState)),
        typeof i.componentDidMount == "function" && (t.flags |= 4194308),
        (a = !0);
    } else if (e === null) {
      i = t.stateNode;
      var h = t.memoizedProps,
        x = kl(l, h);
      i.props = x;
      var j = i.context,
        z = l.contextType;
      (f = pa), typeof z == "object" && z !== null && (f = Pe(z));
      var H = l.getDerivedStateFromProps;
      (z =
        typeof H == "function" ||
        typeof i.getSnapshotBeforeUpdate == "function"),
        (h = t.pendingProps !== h),
        z ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((h || j !== f) && Bf(t, i, a, f)),
        (fl = !1);
      var O = t.memoizedState;
      (i.state = O),
        gn(t, a, i, n),
        pn(),
        (j = t.memoizedState),
        h || O !== j || fl
          ? (typeof H == "function" && (Pr(t, l, H, a), (j = t.memoizedState)),
            (x = fl || Uf(t, l, x, a, O, j, f))
              ? (z ||
                  (typeof i.UNSAFE_componentWillMount != "function" &&
                    typeof i.componentWillMount != "function") ||
                  (typeof i.componentWillMount == "function" &&
                    i.componentWillMount(),
                  typeof i.UNSAFE_componentWillMount == "function" &&
                    i.UNSAFE_componentWillMount()),
                typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308))
              : (typeof i.componentDidMount == "function" &&
                  (t.flags |= 4194308),
                (t.memoizedProps = a),
                (t.memoizedState = j)),
            (i.props = a),
            (i.state = j),
            (i.context = f),
            (a = x))
          : (typeof i.componentDidMount == "function" && (t.flags |= 4194308),
            (a = !1));
    } else {
      (i = t.stateNode),
        _r(e, t),
        (f = t.memoizedProps),
        (z = kl(l, f)),
        (i.props = z),
        (H = t.pendingProps),
        (O = i.context),
        (j = l.contextType),
        (x = pa),
        typeof j == "object" && j !== null && (x = Pe(j)),
        (h = l.getDerivedStateFromProps),
        (j =
          typeof h == "function" ||
          typeof i.getSnapshotBeforeUpdate == "function") ||
          (typeof i.UNSAFE_componentWillReceiveProps != "function" &&
            typeof i.componentWillReceiveProps != "function") ||
          ((f !== H || O !== x) && Bf(t, i, a, x)),
        (fl = !1),
        (O = t.memoizedState),
        (i.state = O),
        gn(t, a, i, n),
        pn();
      var w = t.memoizedState;
      f !== H ||
      O !== w ||
      fl ||
      (e !== null && e.dependencies !== null && ju(e.dependencies))
        ? (typeof h == "function" && (Pr(t, l, h, a), (w = t.memoizedState)),
          (z =
            fl ||
            Uf(t, l, z, a, O, w, x) ||
            (e !== null && e.dependencies !== null && ju(e.dependencies)))
            ? (j ||
                (typeof i.UNSAFE_componentWillUpdate != "function" &&
                  typeof i.componentWillUpdate != "function") ||
                (typeof i.componentWillUpdate == "function" &&
                  i.componentWillUpdate(a, w, x),
                typeof i.UNSAFE_componentWillUpdate == "function" &&
                  i.UNSAFE_componentWillUpdate(a, w, x)),
              typeof i.componentDidUpdate == "function" && (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate == "function" &&
                (t.flags |= 1024))
            : (typeof i.componentDidUpdate != "function" ||
                (f === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 4),
              typeof i.getSnapshotBeforeUpdate != "function" ||
                (f === e.memoizedProps && O === e.memoizedState) ||
                (t.flags |= 1024),
              (t.memoizedProps = a),
              (t.memoizedState = w)),
          (i.props = a),
          (i.state = w),
          (i.context = x),
          (a = z))
        : (typeof i.componentDidUpdate != "function" ||
            (f === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 4),
          typeof i.getSnapshotBeforeUpdate != "function" ||
            (f === e.memoizedProps && O === e.memoizedState) ||
            (t.flags |= 1024),
          (a = !1));
    }
    return (
      (i = a),
      Vu(e, t),
      (a = (t.flags & 128) !== 0),
      i || a
        ? ((i = t.stateNode),
          (l =
            a && typeof l.getDerivedStateFromError != "function"
              ? null
              : i.render()),
          (t.flags |= 1),
          e !== null && a
            ? ((t.child = Ra(t, e.child, null, n)),
              (t.child = Ra(t, null, l, n)))
            : Je(e, t, l, n),
          (t.memoizedState = i.state),
          (e = t.child))
        : (e = Wt(e, t, n)),
      e
    );
  }
  function Wf(e, t, l, a) {
    return sn(), (t.flags |= 256), Je(e, t, l, a), t.child;
  }
  var ls = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null,
  };
  function as(e) {
    return { baseLanes: e, cachePool: Ho() };
  }
  function ns(e, t, l) {
    return (e = e !== null ? e.childLanes & ~l : 0), t && (e |= Rt), e;
  }
  function Pf(e, t, l) {
    var a = t.pendingProps,
      n = !1,
      i = (t.flags & 128) !== 0,
      f;
    if (
      ((f = i) ||
        (f =
          e !== null && e.memoizedState === null ? !1 : (Ge.current & 2) !== 0),
      f && ((n = !0), (t.flags &= -129)),
      (f = (t.flags & 32) !== 0),
      (t.flags &= -33),
      e === null)
    ) {
      if (me) {
        if ((n ? yl(t) : pl(), me)) {
          var h = De,
            x;
          if ((x = h)) {
            e: {
              for (x = h, h = Ut; x.nodeType !== 8; ) {
                if (!h) {
                  h = null;
                  break e;
                }
                if (((x = Dt(x.nextSibling)), x === null)) {
                  h = null;
                  break e;
                }
              }
              h = x;
            }
            h !== null
              ? ((t.memoizedState = {
                  dehydrated: h,
                  treeContext: Yl !== null ? { id: Zt, overflow: Kt } : null,
                  retryLane: 536870912,
                  hydrationErrors: null,
                }),
                (x = mt(18, null, null, 0)),
                (x.stateNode = h),
                (x.return = t),
                (t.child = x),
                (tt = t),
                (De = null),
                (x = !0))
              : (x = !1);
          }
          x || Ql(t);
        }
        if (
          ((h = t.memoizedState),
          h !== null && ((h = h.dehydrated), h !== null))
        )
          return Gs(h) ? (t.lanes = 32) : (t.lanes = 536870912), null;
        Ft(t);
      }
      return (
        (h = a.children),
        (a = a.fallback),
        n
          ? (pl(),
            (n = t.mode),
            (h = Zu({ mode: "hidden", children: h }, n)),
            (a = Ll(a, n, l, null)),
            (h.return = t),
            (a.return = t),
            (h.sibling = a),
            (t.child = h),
            (n = t.child),
            (n.memoizedState = as(l)),
            (n.childLanes = ns(e, f, l)),
            (t.memoizedState = ls),
            a)
          : (yl(t), us(t, h))
      );
    }
    if (
      ((x = e.memoizedState), x !== null && ((h = x.dehydrated), h !== null))
    ) {
      if (i)
        t.flags & 256
          ? (yl(t), (t.flags &= -257), (t = is(e, t, l)))
          : t.memoizedState !== null
          ? (pl(), (t.child = e.child), (t.flags |= 128), (t = null))
          : (pl(),
            (n = a.fallback),
            (h = t.mode),
            (a = Zu({ mode: "visible", children: a.children }, h)),
            (n = Ll(n, h, l, null)),
            (n.flags |= 2),
            (a.return = t),
            (n.return = t),
            (a.sibling = n),
            (t.child = a),
            Ra(t, e.child, null, l),
            (a = t.child),
            (a.memoizedState = as(l)),
            (a.childLanes = ns(e, f, l)),
            (t.memoizedState = ls),
            (t = n));
      else if ((yl(t), Gs(h))) {
        if (((f = h.nextSibling && h.nextSibling.dataset), f)) var j = f.dgst;
        (f = j),
          (a = Error(s(419))),
          (a.stack = ""),
          (a.digest = f),
          cn({ value: a, source: null, stack: null }),
          (t = is(e, t, l));
      } else if (
        (Qe || on(e, t, l, !1), (f = (l & e.childLanes) !== 0), Qe || f)
      ) {
        if (
          ((f = Te),
          f !== null &&
            ((a = l & -l),
            (a = (a & 42) !== 0 ? 1 : Xi(a)),
            (a = (a & (f.suspendedLanes | l)) !== 0 ? 0 : a),
            a !== 0 && a !== x.retryLane))
        )
          throw ((x.retryLane = a), ya(e, a), vt(f, e, a), Qf);
        h.data === "$?" || Ts(), (t = is(e, t, l));
      } else
        h.data === "$?"
          ? ((t.flags |= 192), (t.child = e.child), (t = null))
          : ((e = x.treeContext),
            (De = Dt(h.nextSibling)),
            (tt = t),
            (me = !0),
            (Xl = null),
            (Ut = !1),
            e !== null &&
              ((Nt[Tt++] = Zt),
              (Nt[Tt++] = Kt),
              (Nt[Tt++] = Yl),
              (Zt = e.id),
              (Kt = e.overflow),
              (Yl = t)),
            (t = us(t, a.children)),
            (t.flags |= 4096));
      return t;
    }
    return n
      ? (pl(),
        (n = a.fallback),
        (h = t.mode),
        (x = e.child),
        (j = x.sibling),
        (a = Vt(x, { mode: "hidden", children: a.children })),
        (a.subtreeFlags = x.subtreeFlags & 65011712),
        j !== null ? (n = Vt(j, n)) : ((n = Ll(n, h, l, null)), (n.flags |= 2)),
        (n.return = t),
        (a.return = t),
        (a.sibling = n),
        (t.child = a),
        (a = n),
        (n = t.child),
        (h = e.child.memoizedState),
        h === null
          ? (h = as(l))
          : ((x = h.cachePool),
            x !== null
              ? ((j = Ye._currentValue),
                (x = x.parent !== j ? { parent: j, pool: j } : x))
              : (x = Ho()),
            (h = { baseLanes: h.baseLanes | l, cachePool: x })),
        (n.memoizedState = h),
        (n.childLanes = ns(e, f, l)),
        (t.memoizedState = ls),
        a)
      : (yl(t),
        (l = e.child),
        (e = l.sibling),
        (l = Vt(l, { mode: "visible", children: a.children })),
        (l.return = t),
        (l.sibling = null),
        e !== null &&
          ((f = t.deletions),
          f === null ? ((t.deletions = [e]), (t.flags |= 16)) : f.push(e)),
        (t.child = l),
        (t.memoizedState = null),
        l);
  }
  function us(e, t) {
    return (
      (t = Zu({ mode: "visible", children: t }, e.mode)),
      (t.return = e),
      (e.child = t)
    );
  }
  function Zu(e, t) {
    return (
      (e = mt(22, e, null, t)),
      (e.lanes = 0),
      (e.stateNode = {
        _visibility: 1,
        _pendingMarkers: null,
        _retryCache: null,
        _transitions: null,
      }),
      e
    );
  }
  function is(e, t, l) {
    return (
      Ra(t, e.child, null, l),
      (e = us(t, t.pendingProps.children)),
      (e.flags |= 2),
      (t.memoizedState = null),
      e
    );
  }
  function If(e, t, l) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Tr(e.return, t, l);
  }
  function rs(e, t, l, a, n) {
    var i = e.memoizedState;
    i === null
      ? (e.memoizedState = {
          isBackwards: t,
          rendering: null,
          renderingStartTime: 0,
          last: a,
          tail: l,
          tailMode: n,
        })
      : ((i.isBackwards = t),
        (i.rendering = null),
        (i.renderingStartTime = 0),
        (i.last = a),
        (i.tail = l),
        (i.tailMode = n));
  }
  function ed(e, t, l) {
    var a = t.pendingProps,
      n = a.revealOrder,
      i = a.tail;
    if ((Je(e, t, a.children, l), (a = Ge.current), (a & 2) !== 0))
      (a = (a & 1) | 2), (t.flags |= 128);
    else {
      if (e !== null && (e.flags & 128) !== 0)
        e: for (e = t.child; e !== null; ) {
          if (e.tag === 13) e.memoizedState !== null && If(e, l, t);
          else if (e.tag === 19) If(e, l, t);
          else if (e.child !== null) {
            (e.child.return = e), (e = e.child);
            continue;
          }
          if (e === t) break e;
          for (; e.sibling === null; ) {
            if (e.return === null || e.return === t) break e;
            e = e.return;
          }
          (e.sibling.return = e.return), (e = e.sibling);
        }
      a &= 1;
    }
    switch ((X(Ge, a), n)) {
      case "forwards":
        for (l = t.child, n = null; l !== null; )
          (e = l.alternate),
            e !== null && Gu(e) === null && (n = l),
            (l = l.sibling);
        (l = n),
          l === null
            ? ((n = t.child), (t.child = null))
            : ((n = l.sibling), (l.sibling = null)),
          rs(t, !1, n, l, i);
        break;
      case "backwards":
        for (l = null, n = t.child, t.child = null; n !== null; ) {
          if (((e = n.alternate), e !== null && Gu(e) === null)) {
            t.child = n;
            break;
          }
          (e = n.sibling), (n.sibling = l), (l = n), (n = e);
        }
        rs(t, !0, l, null, i);
        break;
      case "together":
        rs(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Wt(e, t, l) {
    if (
      (e !== null && (t.dependencies = e.dependencies),
      (Sl |= t.lanes),
      (l & t.childLanes) === 0)
    )
      if (e !== null) {
        if ((on(e, t, l, !1), (l & t.childLanes) === 0)) return null;
      } else return null;
    if (e !== null && t.child !== e.child) throw Error(s(153));
    if (t.child !== null) {
      for (
        e = t.child, l = Vt(e, e.pendingProps), t.child = l, l.return = t;
        e.sibling !== null;

      )
        (e = e.sibling),
          (l = l.sibling = Vt(e, e.pendingProps)),
          (l.return = t);
      l.sibling = null;
    }
    return t.child;
  }
  function ss(e, t) {
    return (e.lanes & t) !== 0
      ? !0
      : ((e = e.dependencies), !!(e !== null && ju(e)));
  }
  function ny(e, t, l) {
    switch (t.tag) {
      case 3:
        Re(t, t.stateNode.containerInfo),
          ol(t, Ye, e.memoizedState.cache),
          sn();
        break;
      case 27:
      case 5:
        Hi(t);
        break;
      case 4:
        Re(t, t.stateNode.containerInfo);
        break;
      case 10:
        ol(t, t.type, t.memoizedProps.value);
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null)
          return a.dehydrated !== null
            ? (yl(t), (t.flags |= 128), null)
            : (l & t.child.childLanes) !== 0
            ? Pf(e, t, l)
            : (yl(t), (e = Wt(e, t, l)), e !== null ? e.sibling : null);
        yl(t);
        break;
      case 19:
        var n = (e.flags & 128) !== 0;
        if (
          ((a = (l & t.childLanes) !== 0),
          a || (on(e, t, l, !1), (a = (l & t.childLanes) !== 0)),
          n)
        ) {
          if (a) return ed(e, t, l);
          t.flags |= 128;
        }
        if (
          ((n = t.memoizedState),
          n !== null &&
            ((n.rendering = null), (n.tail = null), (n.lastEffect = null)),
          X(Ge, Ge.current),
          a)
        )
          break;
        return null;
      case 22:
      case 23:
        return (t.lanes = 0), Jf(e, t, l);
      case 24:
        ol(t, Ye, e.memoizedState.cache);
    }
    return Wt(e, t, l);
  }
  function td(e, t, l) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps) Qe = !0;
      else {
        if (!ss(e, l) && (t.flags & 128) === 0) return (Qe = !1), ny(e, t, l);
        Qe = (e.flags & 131072) !== 0;
      }
    else (Qe = !1), me && (t.flags & 1048576) !== 0 && Do(t, Tu, t.index);
    switch (((t.lanes = 0), t.tag)) {
      case 16:
        e: {
          e = t.pendingProps;
          var a = t.elementType,
            n = a._init;
          if (((a = n(a._payload)), (t.type = a), typeof a == "function"))
            gr(a)
              ? ((e = kl(a, e)), (t.tag = 1), (t = Ff(null, t, a, e, l)))
              : ((t.tag = 0), (t = ts(null, t, a, e, l)));
          else {
            if (a != null) {
              if (((n = a.$$typeof), n === ce)) {
                (t.tag = 11), (t = Vf(null, t, a, e, l));
                break e;
              } else if (n === ye) {
                (t.tag = 14), (t = Zf(null, t, a, e, l));
                break e;
              }
            }
            throw ((t = zl(a) || a), Error(s(306, t, "")));
          }
        }
        return t;
      case 0:
        return ts(e, t, t.type, t.pendingProps, l);
      case 1:
        return (a = t.type), (n = kl(a, t.pendingProps)), Ff(e, t, a, n, l);
      case 3:
        e: {
          if ((Re(t, t.stateNode.containerInfo), e === null))
            throw Error(s(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          (n = i.element), _r(e, t), gn(t, a, null, l);
          var f = t.memoizedState;
          if (
            ((a = f.cache),
            ol(t, Ye, a),
            a !== i.cache && jr(t, [Ye], l, !0),
            pn(),
            (a = f.element),
            i.isDehydrated)
          )
            if (
              ((i = { element: a, isDehydrated: !1, cache: f.cache }),
              (t.updateQueue.baseState = i),
              (t.memoizedState = i),
              t.flags & 256)
            ) {
              t = Wf(e, t, a, l);
              break e;
            } else if (a !== n) {
              (n = St(Error(s(424)), t)), cn(n), (t = Wf(e, t, a, l));
              break e;
            } else {
              switch (((e = t.stateNode.containerInfo), e.nodeType)) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (
                De = Dt(e.firstChild),
                  tt = t,
                  me = !0,
                  Xl = null,
                  Ut = !0,
                  l = zf(t, null, a, l),
                  t.child = l;
                l;

              )
                (l.flags = (l.flags & -3) | 4096), (l = l.sibling);
            }
          else {
            if ((sn(), a === n)) {
              t = Wt(e, t, l);
              break e;
            }
            Je(e, t, a, l);
          }
          t = t.child;
        }
        return t;
      case 26:
        return (
          Vu(e, t),
          e === null
            ? (l = um(t.type, null, t.pendingProps, null))
              ? (t.memoizedState = l)
              : me ||
                ((l = t.type),
                (e = t.pendingProps),
                (a = ui(le.current).createElement(l)),
                (a[We] = t),
                (a[lt] = e),
                $e(a, l, e),
                Xe(a),
                (t.stateNode = a))
            : (t.memoizedState = um(
                t.type,
                e.memoizedProps,
                t.pendingProps,
                e.memoizedState
              )),
          null
        );
      case 27:
        return (
          Hi(t),
          e === null &&
            me &&
            ((a = t.stateNode = lm(t.type, t.pendingProps, le.current)),
            (tt = t),
            (Ut = !0),
            (n = De),
            jl(t.type) ? ((Xs = n), (De = Dt(a.firstChild))) : (De = n)),
          Je(e, t, t.pendingProps.children, l),
          Vu(e, t),
          e === null && (t.flags |= 4194304),
          t.child
        );
      case 5:
        return (
          e === null &&
            me &&
            ((n = a = De) &&
              ((a = Cy(a, t.type, t.pendingProps, Ut)),
              a !== null
                ? ((t.stateNode = a),
                  (tt = t),
                  (De = Dt(a.firstChild)),
                  (Ut = !1),
                  (n = !0))
                : (n = !1)),
            n || Ql(t)),
          Hi(t),
          (n = t.type),
          (i = t.pendingProps),
          (f = e !== null ? e.memoizedProps : null),
          (a = i.children),
          qs(n, i) ? (a = null) : f !== null && qs(n, f) && (t.flags |= 32),
          t.memoizedState !== null &&
            ((n = Hr(e, t, F0, null, null, l)), (Ln._currentValue = n)),
          Vu(e, t),
          Je(e, t, a, l),
          t.child
        );
      case 6:
        return (
          e === null &&
            me &&
            ((e = l = De) &&
              ((l = zy(l, t.pendingProps, Ut)),
              l !== null
                ? ((t.stateNode = l), (tt = t), (De = null), (e = !0))
                : (e = !1)),
            e || Ql(t)),
          null
        );
      case 13:
        return Pf(e, t, l);
      case 4:
        return (
          Re(t, t.stateNode.containerInfo),
          (a = t.pendingProps),
          e === null ? (t.child = Ra(t, null, a, l)) : Je(e, t, a, l),
          t.child
        );
      case 11:
        return Vf(e, t, t.type, t.pendingProps, l);
      case 7:
        return Je(e, t, t.pendingProps, l), t.child;
      case 8:
        return Je(e, t, t.pendingProps.children, l), t.child;
      case 12:
        return Je(e, t, t.pendingProps.children, l), t.child;
      case 10:
        return (
          (a = t.pendingProps),
          ol(t, t.type, a.value),
          Je(e, t, a.children, l),
          t.child
        );
      case 9:
        return (
          (n = t.type._context),
          (a = t.pendingProps.children),
          Zl(t),
          (n = Pe(n)),
          (a = a(n)),
          (t.flags |= 1),
          Je(e, t, a, l),
          t.child
        );
      case 14:
        return Zf(e, t, t.type, t.pendingProps, l);
      case 15:
        return Kf(e, t, t.type, t.pendingProps, l);
      case 19:
        return ed(e, t, l);
      case 31:
        return (
          (a = t.pendingProps),
          (l = t.mode),
          (a = { mode: a.mode, children: a.children }),
          e === null
            ? ((l = Zu(a, l)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l))
            : ((l = Vt(e.child, a)),
              (l.ref = t.ref),
              (t.child = l),
              (l.return = t),
              (t = l)),
          t
        );
      case 22:
        return Jf(e, t, l);
      case 24:
        return (
          Zl(t),
          (a = Pe(Ye)),
          e === null
            ? ((n = Or()),
              n === null &&
                ((n = Te),
                (i = Rr()),
                (n.pooledCache = i),
                i.refCount++,
                i !== null && (n.pooledCacheLanes |= l),
                (n = i)),
              (t.memoizedState = { parent: a, cache: n }),
              Dr(t),
              ol(t, Ye, n))
            : ((e.lanes & l) !== 0 && (_r(e, t), gn(t, null, null, l), pn()),
              (n = e.memoizedState),
              (i = t.memoizedState),
              n.parent !== a
                ? ((n = { parent: a, cache: a }),
                  (t.memoizedState = n),
                  t.lanes === 0 &&
                    (t.memoizedState = t.updateQueue.baseState = n),
                  ol(t, Ye, a))
                : ((a = i.cache),
                  ol(t, Ye, a),
                  a !== n.cache && jr(t, [Ye], l, !0))),
          Je(e, t, t.pendingProps.children, l),
          t.child
        );
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Pt(e) {
    e.flags |= 4;
  }
  function ld(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (((e.flags |= 16777216), !om(t))) {
      if (
        ((t = jt.current),
        t !== null &&
          ((oe & 4194048) === oe
            ? Bt !== null
            : ((oe & 62914560) !== oe && (oe & 536870912) === 0) || t !== Bt))
      )
        throw ((hn = wr), qo);
      e.flags |= 8192;
    }
  }
  function Ku(e, t) {
    t !== null && (e.flags |= 4),
      e.flags & 16384 &&
        ((t = e.tag !== 22 ? Cc() : 536870912), (e.lanes |= t), (Da |= t));
  }
  function Tn(e, t) {
    if (!me)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var l = null; t !== null; )
            t.alternate !== null && (l = t), (t = t.sibling);
          l === null ? (e.tail = null) : (l.sibling = null);
          break;
        case "collapsed":
          l = e.tail;
          for (var a = null; l !== null; )
            l.alternate !== null && (a = l), (l = l.sibling);
          a === null
            ? t || e.tail === null
              ? (e.tail = null)
              : (e.tail.sibling = null)
            : (a.sibling = null);
      }
  }
  function we(e) {
    var t = e.alternate !== null && e.alternate.child === e.child,
      l = 0,
      a = 0;
    if (t)
      for (var n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags & 65011712),
          (a |= n.flags & 65011712),
          (n.return = e),
          (n = n.sibling);
    else
      for (n = e.child; n !== null; )
        (l |= n.lanes | n.childLanes),
          (a |= n.subtreeFlags),
          (a |= n.flags),
          (n.return = e),
          (n = n.sibling);
    return (e.subtreeFlags |= a), (e.childLanes = l), t;
  }
  function uy(e, t, l) {
    var a = t.pendingProps;
    switch ((Sr(t), t.tag)) {
      case 31:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return we(t), null;
      case 1:
        return we(t), null;
      case 3:
        return (
          (l = t.stateNode),
          (a = null),
          e !== null && (a = e.memoizedState.cache),
          t.memoizedState.cache !== a && (t.flags |= 2048),
          kt(Ye),
          il(),
          l.pendingContext &&
            ((l.context = l.pendingContext), (l.pendingContext = null)),
          (e === null || e.child === null) &&
            (rn(t)
              ? Pt(t)
              : e === null ||
                (e.memoizedState.isDehydrated && (t.flags & 256) === 0) ||
                ((t.flags |= 1024), zo())),
          we(t),
          null
        );
      case 26:
        return (
          (l = t.memoizedState),
          e === null
            ? (Pt(t),
              l !== null ? (we(t), ld(t, l)) : (we(t), (t.flags &= -16777217)))
            : l
            ? l !== e.memoizedState
              ? (Pt(t), we(t), ld(t, l))
              : (we(t), (t.flags &= -16777217))
            : (e.memoizedProps !== a && Pt(t), we(t), (t.flags &= -16777217)),
          null
        );
      case 27:
        au(t), (l = le.current);
        var n = t.type;
        if (e !== null && t.stateNode != null) e.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return we(t), null;
          }
          (e = W.current),
            rn(t) ? _o(t) : ((e = lm(n, a, l)), (t.stateNode = e), Pt(t));
        }
        return we(t), null;
      case 5:
        if ((au(t), (l = t.type), e !== null && t.stateNode != null))
          e.memoizedProps !== a && Pt(t);
        else {
          if (!a) {
            if (t.stateNode === null) throw Error(s(166));
            return we(t), null;
          }
          if (((e = W.current), rn(t))) _o(t);
          else {
            switch (((n = ui(le.current)), e)) {
              case 1:
                e = n.createElementNS("http://www.w3.org/2000/svg", l);
                break;
              case 2:
                e = n.createElementNS("http://www.w3.org/1998/Math/MathML", l);
                break;
              default:
                switch (l) {
                  case "svg":
                    e = n.createElementNS("http://www.w3.org/2000/svg", l);
                    break;
                  case "math":
                    e = n.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    (e = n.createElement("div")),
                      (e.innerHTML = "<script></script>"),
                      (e = e.removeChild(e.firstChild));
                    break;
                  case "select":
                    (e =
                      typeof a.is == "string"
                        ? n.createElement("select", { is: a.is })
                        : n.createElement("select")),
                      a.multiple
                        ? (e.multiple = !0)
                        : a.size && (e.size = a.size);
                    break;
                  default:
                    e =
                      typeof a.is == "string"
                        ? n.createElement(l, { is: a.is })
                        : n.createElement(l);
                }
            }
            (e[We] = t), (e[lt] = a);
            e: for (n = t.child; n !== null; ) {
              if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
              else if (n.tag !== 4 && n.tag !== 27 && n.child !== null) {
                (n.child.return = n), (n = n.child);
                continue;
              }
              if (n === t) break e;
              for (; n.sibling === null; ) {
                if (n.return === null || n.return === t) break e;
                n = n.return;
              }
              (n.sibling.return = n.return), (n = n.sibling);
            }
            t.stateNode = e;
            e: switch (($e(e, l, a), l)) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!a.autoFocus;
                break e;
              case "img":
                e = !0;
                break e;
              default:
                e = !1;
            }
            e && Pt(t);
          }
        }
        return we(t), (t.flags &= -16777217), null;
      case 6:
        if (e && t.stateNode != null) e.memoizedProps !== a && Pt(t);
        else {
          if (typeof a != "string" && t.stateNode === null) throw Error(s(166));
          if (((e = le.current), rn(t))) {
            if (
              ((e = t.stateNode),
              (l = t.memoizedProps),
              (a = null),
              (n = tt),
              n !== null)
            )
              switch (n.tag) {
                case 27:
                case 5:
                  a = n.memoizedProps;
              }
            (e[We] = t),
              (e = !!(
                e.nodeValue === l ||
                (a !== null && a.suppressHydrationWarning === !0) ||
                $d(e.nodeValue, l)
              )),
              e || Ql(t);
          } else (e = ui(e).createTextNode(a)), (e[We] = t), (t.stateNode = e);
        }
        return we(t), null;
      case 13:
        if (
          ((a = t.memoizedState),
          e === null ||
            (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
        ) {
          if (((n = rn(t)), a !== null && a.dehydrated !== null)) {
            if (e === null) {
              if (!n) throw Error(s(318));
              if (
                ((n = t.memoizedState),
                (n = n !== null ? n.dehydrated : null),
                !n)
              )
                throw Error(s(317));
              n[We] = t;
            } else
              sn(),
                (t.flags & 128) === 0 && (t.memoizedState = null),
                (t.flags |= 4);
            we(t), (n = !1);
          } else
            (n = zo()),
              e !== null &&
                e.memoizedState !== null &&
                (e.memoizedState.hydrationErrors = n),
              (n = !0);
          if (!n) return t.flags & 256 ? (Ft(t), t) : (Ft(t), null);
        }
        if ((Ft(t), (t.flags & 128) !== 0)) return (t.lanes = l), t;
        if (
          ((l = a !== null), (e = e !== null && e.memoizedState !== null), l)
        ) {
          (a = t.child),
            (n = null),
            a.alternate !== null &&
              a.alternate.memoizedState !== null &&
              a.alternate.memoizedState.cachePool !== null &&
              (n = a.alternate.memoizedState.cachePool.pool);
          var i = null;
          a.memoizedState !== null &&
            a.memoizedState.cachePool !== null &&
            (i = a.memoizedState.cachePool.pool),
            i !== n && (a.flags |= 2048);
        }
        return (
          l !== e && l && (t.child.flags |= 8192),
          Ku(t, t.updateQueue),
          we(t),
          null
        );
      case 4:
        return il(), e === null && zs(t.stateNode.containerInfo), we(t), null;
      case 10:
        return kt(t.type), we(t), null;
      case 19:
        if ((V(Ge), (n = t.memoizedState), n === null)) return we(t), null;
        if (((a = (t.flags & 128) !== 0), (i = n.rendering), i === null))
          if (a) Tn(n, !1);
          else {
            if (_e !== 0 || (e !== null && (e.flags & 128) !== 0))
              for (e = t.child; e !== null; ) {
                if (((i = Gu(e)), i !== null)) {
                  for (
                    t.flags |= 128,
                      Tn(n, !1),
                      e = i.updateQueue,
                      t.updateQueue = e,
                      Ku(t, e),
                      t.subtreeFlags = 0,
                      e = l,
                      l = t.child;
                    l !== null;

                  )
                    wo(l, e), (l = l.sibling);
                  return X(Ge, (Ge.current & 1) | 2), t.child;
                }
                e = e.sibling;
              }
            n.tail !== null &&
              Mt() > $u &&
              ((t.flags |= 128), (a = !0), Tn(n, !1), (t.lanes = 4194304));
          }
        else {
          if (!a)
            if (((e = Gu(i)), e !== null)) {
              if (
                ((t.flags |= 128),
                (a = !0),
                (e = e.updateQueue),
                (t.updateQueue = e),
                Ku(t, e),
                Tn(n, !0),
                n.tail === null &&
                  n.tailMode === "hidden" &&
                  !i.alternate &&
                  !me)
              )
                return we(t), null;
            } else
              2 * Mt() - n.renderingStartTime > $u &&
                l !== 536870912 &&
                ((t.flags |= 128), (a = !0), Tn(n, !1), (t.lanes = 4194304));
          n.isBackwards
            ? ((i.sibling = t.child), (t.child = i))
            : ((e = n.last),
              e !== null ? (e.sibling = i) : (t.child = i),
              (n.last = i));
        }
        return n.tail !== null
          ? ((t = n.tail),
            (n.rendering = t),
            (n.tail = t.sibling),
            (n.renderingStartTime = Mt()),
            (t.sibling = null),
            (e = Ge.current),
            X(Ge, a ? (e & 1) | 2 : e & 1),
            t)
          : (we(t), null);
      case 22:
      case 23:
        return (
          Ft(t),
          Ur(),
          (a = t.memoizedState !== null),
          e !== null
            ? (e.memoizedState !== null) !== a && (t.flags |= 8192)
            : a && (t.flags |= 8192),
          a
            ? (l & 536870912) !== 0 &&
              (t.flags & 128) === 0 &&
              (we(t), t.subtreeFlags & 6 && (t.flags |= 8192))
            : we(t),
          (l = t.updateQueue),
          l !== null && Ku(t, l.retryQueue),
          (l = null),
          e !== null &&
            e.memoizedState !== null &&
            e.memoizedState.cachePool !== null &&
            (l = e.memoizedState.cachePool.pool),
          (a = null),
          t.memoizedState !== null &&
            t.memoizedState.cachePool !== null &&
            (a = t.memoizedState.cachePool.pool),
          a !== l && (t.flags |= 2048),
          e !== null && V(Kl),
          null
        );
      case 24:
        return (
          (l = null),
          e !== null && (l = e.memoizedState.cache),
          t.memoizedState.cache !== l && (t.flags |= 2048),
          kt(Ye),
          we(t),
          null
        );
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(s(156, t.tag));
  }
  function iy(e, t) {
    switch ((Sr(t), t.tag)) {
      case 1:
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 3:
        return (
          kt(Ye),
          il(),
          (e = t.flags),
          (e & 65536) !== 0 && (e & 128) === 0
            ? ((t.flags = (e & -65537) | 128), t)
            : null
        );
      case 26:
      case 27:
      case 5:
        return au(t), null;
      case 13:
        if (
          (Ft(t), (e = t.memoizedState), e !== null && e.dehydrated !== null)
        ) {
          if (t.alternate === null) throw Error(s(340));
          sn();
        }
        return (
          (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 19:
        return V(Ge), null;
      case 4:
        return il(), null;
      case 10:
        return kt(t.type), null;
      case 22:
      case 23:
        return (
          Ft(t),
          Ur(),
          e !== null && V(Kl),
          (e = t.flags),
          e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
        );
      case 24:
        return kt(Ye), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ad(e, t) {
    switch ((Sr(t), t.tag)) {
      case 3:
        kt(Ye), il();
        break;
      case 26:
      case 27:
      case 5:
        au(t);
        break;
      case 4:
        il();
        break;
      case 13:
        Ft(t);
        break;
      case 19:
        V(Ge);
        break;
      case 10:
        kt(t.type);
        break;
      case 22:
      case 23:
        Ft(t), Ur(), e !== null && V(Kl);
        break;
      case 24:
        kt(Ye);
    }
  }
  function jn(e, t) {
    try {
      var l = t.updateQueue,
        a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var n = a.next;
        l = n;
        do {
          if ((l.tag & e) === e) {
            a = void 0;
            var i = l.create,
              f = l.inst;
            (a = i()), (f.destroy = a);
          }
          l = l.next;
        } while (l !== n);
      }
    } catch (h) {
      Ne(t, t.return, h);
    }
  }
  function gl(e, t, l) {
    try {
      var a = t.updateQueue,
        n = a !== null ? a.lastEffect : null;
      if (n !== null) {
        var i = n.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var f = a.inst,
              h = f.destroy;
            if (h !== void 0) {
              (f.destroy = void 0), (n = t);
              var x = l,
                j = h;
              try {
                j();
              } catch (z) {
                Ne(n, x, z);
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (z) {
      Ne(t, t.return, z);
    }
  }
  function nd(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var l = e.stateNode;
      try {
        Vo(t, l);
      } catch (a) {
        Ne(e, e.return, a);
      }
    }
  }
  function ud(e, t, l) {
    (l.props = kl(e.type, e.memoizedProps)), (l.state = e.memoizedState);
    try {
      l.componentWillUnmount();
    } catch (a) {
      Ne(e, t, a);
    }
  }
  function Rn(e, t) {
    try {
      var l = e.ref;
      if (l !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof l == "function" ? (e.refCleanup = l(a)) : (l.current = a);
      }
    } catch (n) {
      Ne(e, t, n);
    }
  }
  function Ht(e, t) {
    var l = e.ref,
      a = e.refCleanup;
    if (l !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (n) {
          Ne(e, t, n);
        } finally {
          (e.refCleanup = null),
            (e = e.alternate),
            e != null && (e.refCleanup = null);
        }
      else if (typeof l == "function")
        try {
          l(null);
        } catch (n) {
          Ne(e, t, n);
        }
      else l.current = null;
  }
  function id(e) {
    var t = e.type,
      l = e.memoizedProps,
      a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          l.autoFocus && a.focus();
          break e;
        case "img":
          l.src ? (a.src = l.src) : l.srcSet && (a.srcset = l.srcSet);
      }
    } catch (n) {
      Ne(e, e.return, n);
    }
  }
  function cs(e, t, l) {
    try {
      var a = e.stateNode;
      Ay(a, e.type, l, t), (a[lt] = t);
    } catch (n) {
      Ne(e, e.return, n);
    }
  }
  function rd(e) {
    return (
      e.tag === 5 ||
      e.tag === 3 ||
      e.tag === 26 ||
      (e.tag === 27 && jl(e.type)) ||
      e.tag === 4
    );
  }
  function os(e) {
    e: for (;;) {
      for (; e.sibling === null; ) {
        if (e.return === null || rd(e.return)) return null;
        e = e.return;
      }
      for (
        e.sibling.return = e.return, e = e.sibling;
        e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

      ) {
        if (
          (e.tag === 27 && jl(e.type)) ||
          e.flags & 2 ||
          e.child === null ||
          e.tag === 4
        )
          continue e;
        (e.child.return = e), (e = e.child);
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function fs(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode),
        t
          ? (l.nodeType === 9
              ? l.body
              : l.nodeName === "HTML"
              ? l.ownerDocument.body
              : l
            ).insertBefore(e, t)
          : ((t =
              l.nodeType === 9
                ? l.body
                : l.nodeName === "HTML"
                ? l.ownerDocument.body
                : l),
            t.appendChild(e),
            (l = l._reactRootContainer),
            l != null || t.onclick !== null || (t.onclick = ni));
    else if (
      a !== 4 &&
      (a === 27 && jl(e.type) && ((l = e.stateNode), (t = null)),
      (e = e.child),
      e !== null)
    )
      for (fs(e, t, l), e = e.sibling; e !== null; )
        fs(e, t, l), (e = e.sibling);
  }
  function Ju(e, t, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      (e = e.stateNode), t ? l.insertBefore(e, t) : l.appendChild(e);
    else if (
      a !== 4 &&
      (a === 27 && jl(e.type) && (l = e.stateNode), (e = e.child), e !== null)
    )
      for (Ju(e, t, l), e = e.sibling; e !== null; )
        Ju(e, t, l), (e = e.sibling);
  }
  function sd(e) {
    var t = e.stateNode,
      l = e.memoizedProps;
    try {
      for (var a = e.type, n = t.attributes; n.length; )
        t.removeAttributeNode(n[0]);
      $e(t, a, l), (t[We] = e), (t[lt] = l);
    } catch (i) {
      Ne(e, e.return, i);
    }
  }
  var It = !1,
    Me = !1,
    ds = !1,
    cd = typeof WeakSet == "function" ? WeakSet : Set,
    Ve = null;
  function ry(e, t) {
    if (((e = e.containerInfo), (Bs = fi), (e = xo(e)), or(e))) {
      if ("selectionStart" in e)
        var l = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          l = ((l = e.ownerDocument) && l.defaultView) || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var n = a.anchorOffset,
              i = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, i.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0,
              h = -1,
              x = -1,
              j = 0,
              z = 0,
              H = e,
              O = null;
            t: for (;;) {
              for (
                var w;
                H !== l || (n !== 0 && H.nodeType !== 3) || (h = f + n),
                  H !== i || (a !== 0 && H.nodeType !== 3) || (x = f + a),
                  H.nodeType === 3 && (f += H.nodeValue.length),
                  (w = H.firstChild) !== null;

              )
                (O = H), (H = w);
              for (;;) {
                if (H === e) break t;
                if (
                  (O === l && ++j === n && (h = f),
                  O === i && ++z === a && (x = f),
                  (w = H.nextSibling) !== null)
                )
                  break;
                (H = O), (O = H.parentNode);
              }
              H = w;
            }
            l = h === -1 || x === -1 ? null : { start: h, end: x };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (
      Hs = { focusedElem: e, selectionRange: l }, fi = !1, Ve = t;
      Ve !== null;

    )
      if (
        ((t = Ve), (e = t.child), (t.subtreeFlags & 1024) !== 0 && e !== null)
      )
        (e.return = t), (Ve = e);
      else
        for (; Ve !== null; ) {
          switch (((t = Ve), (i = t.alternate), (e = t.flags), t.tag)) {
            case 0:
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && i !== null) {
                (e = void 0),
                  (l = t),
                  (n = i.memoizedProps),
                  (i = i.memoizedState),
                  (a = l.stateNode);
                try {
                  var te = kl(l.type, n, l.elementType === l.type);
                  (e = a.getSnapshotBeforeUpdate(te, i)),
                    (a.__reactInternalSnapshotBeforeUpdate = e);
                } catch (P) {
                  Ne(l, l.return, P);
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (
                  ((e = t.stateNode.containerInfo), (l = e.nodeType), l === 9)
                )
                  Ys(e);
                else if (l === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      Ys(e);
                      break;
                    default:
                      e.textContent = "";
                  }
              }
              break;
            case 5:
            case 26:
            case 27:
            case 6:
            case 4:
            case 17:
              break;
            default:
              if ((e & 1024) !== 0) throw Error(s(163));
          }
          if (((e = t.sibling), e !== null)) {
            (e.return = t.return), (Ve = e);
            break;
          }
          Ve = t.return;
        }
  }
  function od(e, t, l) {
    var a = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        vl(e, l), a & 4 && jn(5, l);
        break;
      case 1:
        if ((vl(e, l), a & 4))
          if (((e = l.stateNode), t === null))
            try {
              e.componentDidMount();
            } catch (f) {
              Ne(l, l.return, f);
            }
          else {
            var n = kl(l.type, t.memoizedProps);
            t = t.memoizedState;
            try {
              e.componentDidUpdate(n, t, e.__reactInternalSnapshotBeforeUpdate);
            } catch (f) {
              Ne(l, l.return, f);
            }
          }
        a & 64 && nd(l), a & 512 && Rn(l, l.return);
        break;
      case 3:
        if ((vl(e, l), a & 64 && ((e = l.updateQueue), e !== null))) {
          if (((t = null), l.child !== null))
            switch (l.child.tag) {
              case 27:
              case 5:
                t = l.child.stateNode;
                break;
              case 1:
                t = l.child.stateNode;
            }
          try {
            Vo(e, t);
          } catch (f) {
            Ne(l, l.return, f);
          }
        }
        break;
      case 27:
        t === null && a & 4 && sd(l);
      case 26:
      case 5:
        vl(e, l), t === null && a & 4 && id(l), a & 512 && Rn(l, l.return);
        break;
      case 12:
        vl(e, l);
        break;
      case 13:
        vl(e, l),
          a & 4 && md(e, l),
          a & 64 &&
            ((e = l.memoizedState),
            e !== null &&
              ((e = e.dehydrated),
              e !== null && ((l = py.bind(null, l)), My(e, l))));
        break;
      case 22:
        if (((a = l.memoizedState !== null || It), !a)) {
          (t = (t !== null && t.memoizedState !== null) || Me), (n = It);
          var i = Me;
          (It = a),
            (Me = t) && !i ? xl(e, l, (l.subtreeFlags & 8772) !== 0) : vl(e, l),
            (It = n),
            (Me = i);
        }
        break;
      case 30:
        break;
      default:
        vl(e, l);
    }
  }
  function fd(e) {
    var t = e.alternate;
    t !== null && ((e.alternate = null), fd(t)),
      (e.child = null),
      (e.deletions = null),
      (e.sibling = null),
      e.tag === 5 && ((t = e.stateNode), t !== null && Zi(t)),
      (e.stateNode = null),
      (e.return = null),
      (e.dependencies = null),
      (e.memoizedProps = null),
      (e.memoizedState = null),
      (e.pendingProps = null),
      (e.stateNode = null),
      (e.updateQueue = null);
  }
  var Ae = null,
    ut = !1;
  function el(e, t, l) {
    for (l = l.child; l !== null; ) dd(e, t, l), (l = l.sibling);
  }
  function dd(e, t, l) {
    if (ot && typeof ot.onCommitFiberUnmount == "function")
      try {
        ot.onCommitFiberUnmount(Ka, l);
      } catch {}
    switch (l.tag) {
      case 26:
        Me || Ht(l, t),
          el(e, t, l),
          l.memoizedState
            ? l.memoizedState.count--
            : l.stateNode && ((l = l.stateNode), l.parentNode.removeChild(l));
        break;
      case 27:
        Me || Ht(l, t);
        var a = Ae,
          n = ut;
        jl(l.type) && ((Ae = l.stateNode), (ut = !1)),
          el(e, t, l),
          Un(l.stateNode),
          (Ae = a),
          (ut = n);
        break;
      case 5:
        Me || Ht(l, t);
      case 6:
        if (
          ((a = Ae),
          (n = ut),
          (Ae = null),
          el(e, t, l),
          (Ae = a),
          (ut = n),
          Ae !== null)
        )
          if (ut)
            try {
              (Ae.nodeType === 9
                ? Ae.body
                : Ae.nodeName === "HTML"
                ? Ae.ownerDocument.body
                : Ae
              ).removeChild(l.stateNode);
            } catch (i) {
              Ne(l, t, i);
            }
          else
            try {
              Ae.removeChild(l.stateNode);
            } catch (i) {
              Ne(l, t, i);
            }
        break;
      case 18:
        Ae !== null &&
          (ut
            ? ((e = Ae),
              em(
                e.nodeType === 9
                  ? e.body
                  : e.nodeName === "HTML"
                  ? e.ownerDocument.body
                  : e,
                l.stateNode
              ),
              Qn(e))
            : em(Ae, l.stateNode));
        break;
      case 4:
        (a = Ae),
          (n = ut),
          (Ae = l.stateNode.containerInfo),
          (ut = !0),
          el(e, t, l),
          (Ae = a),
          (ut = n);
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Me || gl(2, l, t), Me || gl(4, l, t), el(e, t, l);
        break;
      case 1:
        Me ||
          (Ht(l, t),
          (a = l.stateNode),
          typeof a.componentWillUnmount == "function" && ud(l, t, a)),
          el(e, t, l);
        break;
      case 21:
        el(e, t, l);
        break;
      case 22:
        (Me = (a = Me) || l.memoizedState !== null), el(e, t, l), (Me = a);
        break;
      default:
        el(e, t, l);
    }
  }
  function md(e, t) {
    if (
      t.memoizedState === null &&
      ((e = t.alternate),
      e !== null &&
        ((e = e.memoizedState), e !== null && ((e = e.dehydrated), e !== null)))
    )
      try {
        Qn(e);
      } catch (l) {
        Ne(t, t.return, l);
      }
  }
  function sy(e) {
    switch (e.tag) {
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new cd()), t;
      case 22:
        return (
          (e = e.stateNode),
          (t = e._retryCache),
          t === null && (t = e._retryCache = new cd()),
          t
        );
      default:
        throw Error(s(435, e.tag));
    }
  }
  function ms(e, t) {
    var l = sy(e);
    t.forEach(function (a) {
      var n = gy.bind(null, e, a);
      l.has(a) || (l.add(a), a.then(n, n));
    });
  }
  function ht(e, t) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var n = l[a],
          i = e,
          f = t,
          h = f;
        e: for (; h !== null; ) {
          switch (h.tag) {
            case 27:
              if (jl(h.type)) {
                (Ae = h.stateNode), (ut = !1);
                break e;
              }
              break;
            case 5:
              (Ae = h.stateNode), (ut = !1);
              break e;
            case 3:
            case 4:
              (Ae = h.stateNode.containerInfo), (ut = !0);
              break e;
          }
          h = h.return;
        }
        if (Ae === null) throw Error(s(160));
        dd(i, f, n),
          (Ae = null),
          (ut = !1),
          (i = n.alternate),
          i !== null && (i.return = null),
          (n.return = null);
      }
    if (t.subtreeFlags & 13878)
      for (t = t.child; t !== null; ) hd(t, e), (t = t.sibling);
  }
  var wt = null;
  function hd(e, t) {
    var l = e.alternate,
      a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        ht(t, e),
          yt(e),
          a & 4 && (gl(3, e, e.return), jn(3, e), gl(5, e, e.return));
        break;
      case 1:
        ht(t, e),
          yt(e),
          a & 512 && (Me || l === null || Ht(l, l.return)),
          a & 64 &&
            It &&
            ((e = e.updateQueue),
            e !== null &&
              ((a = e.callbacks),
              a !== null &&
                ((l = e.shared.hiddenCallbacks),
                (e.shared.hiddenCallbacks = l === null ? a : l.concat(a)))));
        break;
      case 26:
        var n = wt;
        if (
          (ht(t, e),
          yt(e),
          a & 512 && (Me || l === null || Ht(l, l.return)),
          a & 4)
        ) {
          var i = l !== null ? l.memoizedState : null;
          if (((a = e.memoizedState), l === null))
            if (a === null)
              if (e.stateNode === null) {
                e: {
                  (a = e.type),
                    (l = e.memoizedProps),
                    (n = n.ownerDocument || n);
                  t: switch (a) {
                    case "title":
                      (i = n.getElementsByTagName("title")[0]),
                        (!i ||
                          i[$a] ||
                          i[We] ||
                          i.namespaceURI === "http://www.w3.org/2000/svg" ||
                          i.hasAttribute("itemprop")) &&
                          ((i = n.createElement(a)),
                          n.head.insertBefore(
                            i,
                            n.querySelector("head > title")
                          )),
                        $e(i, a, l),
                        (i[We] = e),
                        Xe(i),
                        (a = i);
                      break e;
                    case "link":
                      var f = sm("link", "href", n).get(a + (l.href || ""));
                      if (f) {
                        for (var h = 0; h < f.length; h++)
                          if (
                            ((i = f[h]),
                            i.getAttribute("href") ===
                              (l.href == null || l.href === ""
                                ? null
                                : l.href) &&
                              i.getAttribute("rel") ===
                                (l.rel == null ? null : l.rel) &&
                              i.getAttribute("title") ===
                                (l.title == null ? null : l.title) &&
                              i.getAttribute("crossorigin") ===
                                (l.crossOrigin == null ? null : l.crossOrigin))
                          ) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        $e(i, a, l),
                        n.head.appendChild(i);
                      break;
                    case "meta":
                      if (
                        (f = sm("meta", "content", n).get(
                          a + (l.content || "")
                        ))
                      ) {
                        for (h = 0; h < f.length; h++)
                          if (
                            ((i = f[h]),
                            i.getAttribute("content") ===
                              (l.content == null ? null : "" + l.content) &&
                              i.getAttribute("name") ===
                                (l.name == null ? null : l.name) &&
                              i.getAttribute("property") ===
                                (l.property == null ? null : l.property) &&
                              i.getAttribute("http-equiv") ===
                                (l.httpEquiv == null ? null : l.httpEquiv) &&
                              i.getAttribute("charset") ===
                                (l.charSet == null ? null : l.charSet))
                          ) {
                            f.splice(h, 1);
                            break t;
                          }
                      }
                      (i = n.createElement(a)),
                        $e(i, a, l),
                        n.head.appendChild(i);
                      break;
                    default:
                      throw Error(s(468, a));
                  }
                  (i[We] = e), Xe(i), (a = i);
                }
                e.stateNode = a;
              } else cm(n, e.type, e.stateNode);
            else e.stateNode = rm(n, a, e.memoizedProps);
          else
            i !== a
              ? (i === null
                  ? l.stateNode !== null &&
                    ((l = l.stateNode), l.parentNode.removeChild(l))
                  : i.count--,
                a === null
                  ? cm(n, e.type, e.stateNode)
                  : rm(n, a, e.memoizedProps))
              : a === null &&
                e.stateNode !== null &&
                cs(e, e.memoizedProps, l.memoizedProps);
        }
        break;
      case 27:
        ht(t, e),
          yt(e),
          a & 512 && (Me || l === null || Ht(l, l.return)),
          l !== null && a & 4 && cs(e, e.memoizedProps, l.memoizedProps);
        break;
      case 5:
        if (
          (ht(t, e),
          yt(e),
          a & 512 && (Me || l === null || Ht(l, l.return)),
          e.flags & 32)
        ) {
          n = e.stateNode;
          try {
            sa(n, "");
          } catch (w) {
            Ne(e, e.return, w);
          }
        }
        a & 4 &&
          e.stateNode != null &&
          ((n = e.memoizedProps), cs(e, n, l !== null ? l.memoizedProps : n)),
          a & 1024 && (ds = !0);
        break;
      case 6:
        if ((ht(t, e), yt(e), a & 4)) {
          if (e.stateNode === null) throw Error(s(162));
          (a = e.memoizedProps), (l = e.stateNode);
          try {
            l.nodeValue = a;
          } catch (w) {
            Ne(e, e.return, w);
          }
        }
        break;
      case 3:
        if (
          ((si = null),
          (n = wt),
          (wt = ii(t.containerInfo)),
          ht(t, e),
          (wt = n),
          yt(e),
          a & 4 && l !== null && l.memoizedState.isDehydrated)
        )
          try {
            Qn(t.containerInfo);
          } catch (w) {
            Ne(e, e.return, w);
          }
        ds && ((ds = !1), yd(e));
        break;
      case 4:
        (a = wt),
          (wt = ii(e.stateNode.containerInfo)),
          ht(t, e),
          yt(e),
          (wt = a);
        break;
      case 12:
        ht(t, e), yt(e);
        break;
      case 13:
        ht(t, e),
          yt(e),
          e.child.flags & 8192 &&
            (e.memoizedState !== null) !=
              (l !== null && l.memoizedState !== null) &&
            (xs = Mt()),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), ms(e, a)));
        break;
      case 22:
        n = e.memoizedState !== null;
        var x = l !== null && l.memoizedState !== null,
          j = It,
          z = Me;
        if (
          ((It = j || n),
          (Me = z || x),
          ht(t, e),
          (Me = z),
          (It = j),
          yt(e),
          a & 8192)
        )
          e: for (
            t = e.stateNode,
              t._visibility = n ? t._visibility & -2 : t._visibility | 1,
              n && (l === null || x || It || Me || $l(e)),
              l = null,
              t = e;
            ;

          ) {
            if (t.tag === 5 || t.tag === 26) {
              if (l === null) {
                x = l = t;
                try {
                  if (((i = x.stateNode), n))
                    (f = i.style),
                      typeof f.setProperty == "function"
                        ? f.setProperty("display", "none", "important")
                        : (f.display = "none");
                  else {
                    h = x.stateNode;
                    var H = x.memoizedProps.style,
                      O =
                        H != null && H.hasOwnProperty("display")
                          ? H.display
                          : null;
                    h.style.display =
                      O == null || typeof O == "boolean" ? "" : ("" + O).trim();
                  }
                } catch (w) {
                  Ne(x, x.return, w);
                }
              }
            } else if (t.tag === 6) {
              if (l === null) {
                x = t;
                try {
                  x.stateNode.nodeValue = n ? "" : x.memoizedProps;
                } catch (w) {
                  Ne(x, x.return, w);
                }
              }
            } else if (
              ((t.tag !== 22 && t.tag !== 23) ||
                t.memoizedState === null ||
                t === e) &&
              t.child !== null
            ) {
              (t.child.return = t), (t = t.child);
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              l === t && (l = null), (t = t.return);
            }
            l === t && (l = null),
              (t.sibling.return = t.return),
              (t = t.sibling);
          }
        a & 4 &&
          ((a = e.updateQueue),
          a !== null &&
            ((l = a.retryQueue),
            l !== null && ((a.retryQueue = null), ms(e, l))));
        break;
      case 19:
        ht(t, e),
          yt(e),
          a & 4 &&
            ((a = e.updateQueue),
            a !== null && ((e.updateQueue = null), ms(e, a)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        ht(t, e), yt(e);
    }
  }
  function yt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var l, a = e.return; a !== null; ) {
          if (rd(a)) {
            l = a;
            break;
          }
          a = a.return;
        }
        if (l == null) throw Error(s(160));
        switch (l.tag) {
          case 27:
            var n = l.stateNode,
              i = os(e);
            Ju(e, i, n);
            break;
          case 5:
            var f = l.stateNode;
            l.flags & 32 && (sa(f, ""), (l.flags &= -33));
            var h = os(e);
            Ju(e, h, f);
            break;
          case 3:
          case 4:
            var x = l.stateNode.containerInfo,
              j = os(e);
            fs(e, j, x);
            break;
          default:
            throw Error(s(161));
        }
      } catch (z) {
        Ne(e, e.return, z);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function yd(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        yd(t),
          t.tag === 5 && t.flags & 1024 && t.stateNode.reset(),
          (e = e.sibling);
      }
  }
  function vl(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; ) od(e, t.alternate, t), (t = t.sibling);
  }
  function $l(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          gl(4, t, t.return), $l(t);
          break;
        case 1:
          Ht(t, t.return);
          var l = t.stateNode;
          typeof l.componentWillUnmount == "function" && ud(t, t.return, l),
            $l(t);
          break;
        case 27:
          Un(t.stateNode);
        case 26:
        case 5:
          Ht(t, t.return), $l(t);
          break;
        case 22:
          t.memoizedState === null && $l(t);
          break;
        case 30:
          $l(t);
          break;
        default:
          $l(t);
      }
      e = e.sibling;
    }
  }
  function xl(e, t, l) {
    for (l = l && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var a = t.alternate,
        n = e,
        i = t,
        f = i.flags;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          xl(n, i, l), jn(4, i);
          break;
        case 1:
          if (
            (xl(n, i, l),
            (a = i),
            (n = a.stateNode),
            typeof n.componentDidMount == "function")
          )
            try {
              n.componentDidMount();
            } catch (j) {
              Ne(a, a.return, j);
            }
          if (((a = i), (n = a.updateQueue), n !== null)) {
            var h = a.stateNode;
            try {
              var x = n.shared.hiddenCallbacks;
              if (x !== null)
                for (n.shared.hiddenCallbacks = null, n = 0; n < x.length; n++)
                  Qo(x[n], h);
            } catch (j) {
              Ne(a, a.return, j);
            }
          }
          l && f & 64 && nd(i), Rn(i, i.return);
          break;
        case 27:
          sd(i);
        case 26:
        case 5:
          xl(n, i, l), l && a === null && f & 4 && id(i), Rn(i, i.return);
          break;
        case 12:
          xl(n, i, l);
          break;
        case 13:
          xl(n, i, l), l && f & 4 && md(n, i);
          break;
        case 22:
          i.memoizedState === null && xl(n, i, l), Rn(i, i.return);
          break;
        case 30:
          break;
        default:
          xl(n, i, l);
      }
      t = t.sibling;
    }
  }
  function hs(e, t) {
    var l = null;
    e !== null &&
      e.memoizedState !== null &&
      e.memoizedState.cachePool !== null &&
      (l = e.memoizedState.cachePool.pool),
      (e = null),
      t.memoizedState !== null &&
        t.memoizedState.cachePool !== null &&
        (e = t.memoizedState.cachePool.pool),
      e !== l && (e != null && e.refCount++, l != null && fn(l));
  }
  function ys(e, t) {
    (e = null),
      t.alternate !== null && (e = t.alternate.memoizedState.cache),
      (t = t.memoizedState.cache),
      t !== e && (t.refCount++, e != null && fn(e));
  }
  function qt(e, t, l, a) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) pd(e, t, l, a), (t = t.sibling);
  }
  function pd(e, t, l, a) {
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qt(e, t, l, a), n & 2048 && jn(9, t);
        break;
      case 1:
        qt(e, t, l, a);
        break;
      case 3:
        qt(e, t, l, a),
          n & 2048 &&
            ((e = null),
            t.alternate !== null && (e = t.alternate.memoizedState.cache),
            (t = t.memoizedState.cache),
            t !== e && (t.refCount++, e != null && fn(e)));
        break;
      case 12:
        if (n & 2048) {
          qt(e, t, l, a), (e = t.stateNode);
          try {
            var i = t.memoizedProps,
              f = i.id,
              h = i.onPostCommit;
            typeof h == "function" &&
              h(
                f,
                t.alternate === null ? "mount" : "update",
                e.passiveEffectDuration,
                -0
              );
          } catch (x) {
            Ne(t, t.return, x);
          }
        } else qt(e, t, l, a);
        break;
      case 13:
        qt(e, t, l, a);
        break;
      case 23:
        break;
      case 22:
        (i = t.stateNode),
          (f = t.alternate),
          t.memoizedState !== null
            ? i._visibility & 2
              ? qt(e, t, l, a)
              : An(e, t)
            : i._visibility & 2
            ? qt(e, t, l, a)
            : ((i._visibility |= 2),
              Aa(e, t, l, a, (t.subtreeFlags & 10256) !== 0)),
          n & 2048 && hs(f, t);
        break;
      case 24:
        qt(e, t, l, a), n & 2048 && ys(t.alternate, t);
        break;
      default:
        qt(e, t, l, a);
    }
  }
  function Aa(e, t, l, a, n) {
    for (n = n && (t.subtreeFlags & 10256) !== 0, t = t.child; t !== null; ) {
      var i = e,
        f = t,
        h = l,
        x = a,
        j = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Aa(i, f, h, x, n), jn(8, f);
          break;
        case 23:
          break;
        case 22:
          var z = f.stateNode;
          f.memoizedState !== null
            ? z._visibility & 2
              ? Aa(i, f, h, x, n)
              : An(i, f)
            : ((z._visibility |= 2), Aa(i, f, h, x, n)),
            n && j & 2048 && hs(f.alternate, f);
          break;
        case 24:
          Aa(i, f, h, x, n), n && j & 2048 && ys(f.alternate, f);
          break;
        default:
          Aa(i, f, h, x, n);
      }
      t = t.sibling;
    }
  }
  function An(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var l = e,
          a = t,
          n = a.flags;
        switch (a.tag) {
          case 22:
            An(l, a), n & 2048 && hs(a.alternate, a);
            break;
          case 24:
            An(l, a), n & 2048 && ys(a.alternate, a);
            break;
          default:
            An(l, a);
        }
        t = t.sibling;
      }
  }
  var On = 8192;
  function Oa(e) {
    if (e.subtreeFlags & On)
      for (e = e.child; e !== null; ) gd(e), (e = e.sibling);
  }
  function gd(e) {
    switch (e.tag) {
      case 26:
        Oa(e),
          e.flags & On &&
            e.memoizedState !== null &&
            Jy(wt, e.memoizedState, e.memoizedProps);
        break;
      case 5:
        Oa(e);
        break;
      case 3:
      case 4:
        var t = wt;
        (wt = ii(e.stateNode.containerInfo)), Oa(e), (wt = t);
        break;
      case 22:
        e.memoizedState === null &&
          ((t = e.alternate),
          t !== null && t.memoizedState !== null
            ? ((t = On), (On = 16777216), Oa(e), (On = t))
            : Oa(e));
        break;
      default:
        Oa(e);
    }
  }
  function vd(e) {
    var t = e.alternate;
    if (t !== null && ((e = t.child), e !== null)) {
      t.child = null;
      do (t = e.sibling), (e.sibling = null), (e = t);
      while (e !== null);
    }
  }
  function wn(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Ve = a), bd(a, e);
        }
      vd(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; ) xd(e), (e = e.sibling);
  }
  function xd(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        wn(e), e.flags & 2048 && gl(9, e, e.return);
        break;
      case 3:
        wn(e);
        break;
      case 12:
        wn(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null &&
        t._visibility & 2 &&
        (e.return === null || e.return.tag !== 13)
          ? ((t._visibility &= -3), ku(e))
          : wn(e);
        break;
      default:
        wn(e);
    }
  }
  function ku(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var l = 0; l < t.length; l++) {
          var a = t[l];
          (Ve = a), bd(a, e);
        }
      vd(e);
    }
    for (e = e.child; e !== null; ) {
      switch (((t = e), t.tag)) {
        case 0:
        case 11:
        case 15:
          gl(8, t, t.return), ku(t);
          break;
        case 22:
          (l = t.stateNode),
            l._visibility & 2 && ((l._visibility &= -3), ku(t));
          break;
        default:
          ku(t);
      }
      e = e.sibling;
    }
  }
  function bd(e, t) {
    for (; Ve !== null; ) {
      var l = Ve;
      switch (l.tag) {
        case 0:
        case 11:
        case 15:
          gl(8, l, t);
          break;
        case 23:
        case 22:
          if (l.memoizedState !== null && l.memoizedState.cachePool !== null) {
            var a = l.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          fn(l.memoizedState.cache);
      }
      if (((a = l.child), a !== null)) (a.return = l), (Ve = a);
      else
        e: for (l = e; Ve !== null; ) {
          a = Ve;
          var n = a.sibling,
            i = a.return;
          if ((fd(a), a === l)) {
            Ve = null;
            break e;
          }
          if (n !== null) {
            (n.return = i), (Ve = n);
            break e;
          }
          Ve = i;
        }
    }
  }
  var cy = {
      getCacheForType: function (e) {
        var t = Pe(Ye),
          l = t.data.get(e);
        return l === void 0 && ((l = e()), t.data.set(e, l)), l;
      },
    },
    oy = typeof WeakMap == "function" ? WeakMap : Map,
    pe = 0,
    Te = null,
    re = null,
    oe = 0,
    ge = 0,
    pt = null,
    bl = !1,
    wa = !1,
    ps = !1,
    tl = 0,
    _e = 0,
    Sl = 0,
    Fl = 0,
    gs = 0,
    Rt = 0,
    Da = 0,
    Dn = null,
    it = null,
    vs = !1,
    xs = 0,
    $u = 1 / 0,
    Fu = null,
    El = null,
    ke = 0,
    Nl = null,
    _a = null,
    Ca = 0,
    bs = 0,
    Ss = null,
    Sd = null,
    _n = 0,
    Es = null;
  function gt() {
    if ((pe & 2) !== 0 && oe !== 0) return oe & -oe;
    if (M.T !== null) {
      var e = xa;
      return e !== 0 ? e : ws();
    }
    return Uc();
  }
  function Ed() {
    Rt === 0 && (Rt = (oe & 536870912) === 0 || me ? _c() : 536870912);
    var e = jt.current;
    return e !== null && (e.flags |= 32), Rt;
  }
  function vt(e, t, l) {
    ((e === Te && (ge === 2 || ge === 9)) || e.cancelPendingCommit !== null) &&
      (za(e, 0), Tl(e, oe, Rt, !1)),
      ka(e, l),
      ((pe & 2) === 0 || e !== Te) &&
        (e === Te &&
          ((pe & 2) === 0 && (Fl |= l), _e === 4 && Tl(e, oe, Rt, !1)),
        Lt(e));
  }
  function Nd(e, t, l) {
    if ((pe & 6) !== 0) throw Error(s(327));
    var a = (!l && (t & 124) === 0 && (t & e.expiredLanes) === 0) || Ja(e, t),
      n = a ? my(e, t) : js(e, t, !0),
      i = a;
    do {
      if (n === 0) {
        wa && !a && Tl(e, t, 0, !1);
        break;
      } else {
        if (((l = e.current.alternate), i && !fy(l))) {
          (n = js(e, t, !1)), (i = !1);
          continue;
        }
        if (n === 2) {
          if (((i = t), e.errorRecoveryDisabledLanes & i)) var f = 0;
          else
            (f = e.pendingLanes & -536870913),
              (f = f !== 0 ? f : f & 536870912 ? 536870912 : 0);
          if (f !== 0) {
            t = f;
            e: {
              var h = e;
              n = Dn;
              var x = h.current.memoizedState.isDehydrated;
              if ((x && (za(h, f).flags |= 256), (f = js(h, f, !1)), f !== 2)) {
                if (ps && !x) {
                  (h.errorRecoveryDisabledLanes |= i), (Fl |= i), (n = 4);
                  break e;
                }
                (i = it),
                  (it = n),
                  i !== null && (it === null ? (it = i) : it.push.apply(it, i));
              }
              n = f;
            }
            if (((i = !1), n !== 2)) continue;
          }
        }
        if (n === 1) {
          za(e, 0), Tl(e, t, 0, !0);
          break;
        }
        e: {
          switch (((a = e), (i = n), i)) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Tl(a, t, Rt, !bl);
              break e;
            case 2:
              it = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && ((n = xs + 300 - Mt()), 10 < n)) {
            if ((Tl(a, t, Rt, !bl), ru(a, 0, !0) !== 0)) break e;
            a.timeoutHandle = Pd(
              Td.bind(null, a, l, it, Fu, vs, t, Rt, Fl, Da, bl, i, 2, -0, 0),
              n
            );
            break e;
          }
          Td(a, l, it, Fu, vs, t, Rt, Fl, Da, bl, i, 0, -0, 0);
        }
      }
      break;
    } while (!0);
    Lt(e);
  }
  function Td(e, t, l, a, n, i, f, h, x, j, z, H, O, w) {
    if (
      ((e.timeoutHandle = -1),
      (H = t.subtreeFlags),
      (H & 8192 || (H & 16785408) === 16785408) &&
        ((qn = { stylesheets: null, count: 0, unsuspend: Ky }),
        gd(t),
        (H = ky()),
        H !== null))
    ) {
      (e.cancelPendingCommit = H(
        _d.bind(null, e, t, i, l, a, n, f, h, x, z, 1, O, w)
      )),
        Tl(e, i, f, !j);
      return;
    }
    _d(e, t, i, l, a, n, f, h, x);
  }
  function fy(e) {
    for (var t = e; ; ) {
      var l = t.tag;
      if (
        (l === 0 || l === 11 || l === 15) &&
        t.flags & 16384 &&
        ((l = t.updateQueue), l !== null && ((l = l.stores), l !== null))
      )
        for (var a = 0; a < l.length; a++) {
          var n = l[a],
            i = n.getSnapshot;
          n = n.value;
          try {
            if (!dt(i(), n)) return !1;
          } catch {
            return !1;
          }
        }
      if (((l = t.child), t.subtreeFlags & 16384 && l !== null))
        (l.return = t), (t = l);
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    }
    return !0;
  }
  function Tl(e, t, l, a) {
    (t &= ~gs),
      (t &= ~Fl),
      (e.suspendedLanes |= t),
      (e.pingedLanes &= ~t),
      a && (e.warmLanes |= t),
      (a = e.expirationTimes);
    for (var n = t; 0 < n; ) {
      var i = 31 - ft(n),
        f = 1 << i;
      (a[i] = -1), (n &= ~f);
    }
    l !== 0 && zc(e, l, t);
  }
  function Wu() {
    return (pe & 6) === 0 ? (Cn(0), !1) : !0;
  }
  function Ns() {
    if (re !== null) {
      if (ge === 0) var e = re.return;
      else (e = re), (Jt = Vl = null), Yr(e), (ja = null), (En = 0), (e = re);
      for (; e !== null; ) ad(e.alternate, e), (e = e.return);
      re = null;
    }
  }
  function za(e, t) {
    var l = e.timeoutHandle;
    l !== -1 && ((e.timeoutHandle = -1), wy(l)),
      (l = e.cancelPendingCommit),
      l !== null && ((e.cancelPendingCommit = null), l()),
      Ns(),
      (Te = e),
      (re = l = Vt(e.current, null)),
      (oe = t),
      (ge = 0),
      (pt = null),
      (bl = !1),
      (wa = Ja(e, t)),
      (ps = !1),
      (Da = Rt = gs = Fl = Sl = _e = 0),
      (it = Dn = null),
      (vs = !1),
      (t & 8) !== 0 && (t |= t & 32);
    var a = e.entangledLanes;
    if (a !== 0)
      for (e = e.entanglements, a &= t; 0 < a; ) {
        var n = 31 - ft(a),
          i = 1 << n;
        (t |= e[n]), (a &= ~i);
      }
    return (tl = t), xu(), l;
  }
  function jd(e, t) {
    (ue = null),
      (M.H = qu),
      t === mn || t === Ou
        ? ((t = Go()), (ge = 3))
        : t === qo
        ? ((t = Go()), (ge = 4))
        : (ge =
            t === Qf
              ? 8
              : t !== null &&
                typeof t == "object" &&
                typeof t.then == "function"
              ? 6
              : 1),
      (pt = t),
      re === null && ((_e = 1), Qu(e, St(t, e.current)));
  }
  function Rd() {
    var e = M.H;
    return (M.H = qu), e === null ? qu : e;
  }
  function Ad() {
    var e = M.A;
    return (M.A = cy), e;
  }
  function Ts() {
    (_e = 4),
      bl || ((oe & 4194048) !== oe && jt.current !== null) || (wa = !0),
      ((Sl & 134217727) === 0 && (Fl & 134217727) === 0) ||
        Te === null ||
        Tl(Te, oe, Rt, !1);
  }
  function js(e, t, l) {
    var a = pe;
    pe |= 2;
    var n = Rd(),
      i = Ad();
    (Te !== e || oe !== t) && ((Fu = null), za(e, t)), (t = !1);
    var f = _e;
    e: do
      try {
        if (ge !== 0 && re !== null) {
          var h = re,
            x = pt;
          switch (ge) {
            case 8:
              Ns(), (f = 6);
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              jt.current === null && (t = !0);
              var j = ge;
              if (((ge = 0), (pt = null), Ma(e, h, x, j), l && wa)) {
                f = 0;
                break e;
              }
              break;
            default:
              (j = ge), (ge = 0), (pt = null), Ma(e, h, x, j);
          }
        }
        dy(), (f = _e);
        break;
      } catch (z) {
        jd(e, z);
      }
    while (!0);
    return (
      t && e.shellSuspendCounter++,
      (Jt = Vl = null),
      (pe = a),
      (M.H = n),
      (M.A = i),
      re === null && ((Te = null), (oe = 0), xu()),
      f
    );
  }
  function dy() {
    for (; re !== null; ) Od(re);
  }
  function my(e, t) {
    var l = pe;
    pe |= 2;
    var a = Rd(),
      n = Ad();
    Te !== e || oe !== t
      ? ((Fu = null), ($u = Mt() + 500), za(e, t))
      : (wa = Ja(e, t));
    e: do
      try {
        if (ge !== 0 && re !== null) {
          t = re;
          var i = pt;
          t: switch (ge) {
            case 1:
              (ge = 0), (pt = null), Ma(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (Lo(i)) {
                (ge = 0), (pt = null), wd(t);
                break;
              }
              (t = function () {
                (ge !== 2 && ge !== 9) || Te !== e || (ge = 7), Lt(e);
              }),
                i.then(t, t);
              break e;
            case 3:
              ge = 7;
              break e;
            case 4:
              ge = 5;
              break e;
            case 7:
              Lo(i)
                ? ((ge = 0), (pt = null), wd(t))
                : ((ge = 0), (pt = null), Ma(e, t, i, 7));
              break;
            case 5:
              var f = null;
              switch (re.tag) {
                case 26:
                  f = re.memoizedState;
                case 5:
                case 27:
                  var h = re;
                  if (!f || om(f)) {
                    (ge = 0), (pt = null);
                    var x = h.sibling;
                    if (x !== null) re = x;
                    else {
                      var j = h.return;
                      j !== null ? ((re = j), Pu(j)) : (re = null);
                    }
                    break t;
                  }
              }
              (ge = 0), (pt = null), Ma(e, t, i, 5);
              break;
            case 6:
              (ge = 0), (pt = null), Ma(e, t, i, 6);
              break;
            case 8:
              Ns(), (_e = 6);
              break e;
            default:
              throw Error(s(462));
          }
        }
        hy();
        break;
      } catch (z) {
        jd(e, z);
      }
    while (!0);
    return (
      (Jt = Vl = null),
      (M.H = a),
      (M.A = n),
      (pe = l),
      re !== null ? 0 : ((Te = null), (oe = 0), xu(), _e)
    );
  }
  function hy() {
    for (; re !== null && !Bh(); ) Od(re);
  }
  function Od(e) {
    var t = td(e.alternate, e, tl);
    (e.memoizedProps = e.pendingProps), t === null ? Pu(e) : (re = t);
  }
  function wd(e) {
    var t = e,
      l = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = $f(l, t, t.pendingProps, t.type, void 0, oe);
        break;
      case 11:
        t = $f(l, t, t.pendingProps, t.type.render, t.ref, oe);
        break;
      case 5:
        Yr(t);
      default:
        ad(l, t), (t = re = wo(t, tl)), (t = td(l, t, tl));
    }
    (e.memoizedProps = e.pendingProps), t === null ? Pu(e) : (re = t);
  }
  function Ma(e, t, l, a) {
    (Jt = Vl = null), Yr(t), (ja = null), (En = 0);
    var n = t.return;
    try {
      if (ay(e, n, t, l, oe)) {
        (_e = 1), Qu(e, St(l, e.current)), (re = null);
        return;
      }
    } catch (i) {
      if (n !== null) throw ((re = n), i);
      (_e = 1), Qu(e, St(l, e.current)), (re = null);
      return;
    }
    t.flags & 32768
      ? (me || a === 1
          ? (e = !0)
          : wa || (oe & 536870912) !== 0
          ? (e = !1)
          : ((bl = e = !0),
            (a === 2 || a === 9 || a === 3 || a === 6) &&
              ((a = jt.current),
              a !== null && a.tag === 13 && (a.flags |= 16384))),
        Dd(t, e))
      : Pu(t);
  }
  function Pu(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Dd(t, bl);
        return;
      }
      e = t.return;
      var l = uy(t.alternate, t, tl);
      if (l !== null) {
        re = l;
        return;
      }
      if (((t = t.sibling), t !== null)) {
        re = t;
        return;
      }
      re = t = e;
    } while (t !== null);
    _e === 0 && (_e = 5);
  }
  function Dd(e, t) {
    do {
      var l = iy(e.alternate, e);
      if (l !== null) {
        (l.flags &= 32767), (re = l);
        return;
      }
      if (
        ((l = e.return),
        l !== null &&
          ((l.flags |= 32768), (l.subtreeFlags = 0), (l.deletions = null)),
        !t && ((e = e.sibling), e !== null))
      ) {
        re = e;
        return;
      }
      re = e = l;
    } while (e !== null);
    (_e = 6), (re = null);
  }
  function _d(e, t, l, a, n, i, f, h, x) {
    e.cancelPendingCommit = null;
    do Iu();
    while (ke !== 0);
    if ((pe & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      if (
        ((i = t.lanes | t.childLanes),
        (i |= yr),
        Kh(e, l, i, f, h, x),
        e === Te && ((re = Te = null), (oe = 0)),
        (_a = t),
        (Nl = e),
        (Ca = l),
        (bs = i),
        (Ss = n),
        (Sd = a),
        (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
          ? ((e.callbackNode = null),
            (e.callbackPriority = 0),
            vy(nu, function () {
              return Bd(), null;
            }))
          : ((e.callbackNode = null), (e.callbackPriority = 0)),
        (a = (t.flags & 13878) !== 0),
        (t.subtreeFlags & 13878) !== 0 || a)
      ) {
        (a = M.T), (M.T = null), (n = Q.p), (Q.p = 2), (f = pe), (pe |= 4);
        try {
          ry(e, t, l);
        } finally {
          (pe = f), (Q.p = n), (M.T = a);
        }
      }
      (ke = 1), Cd(), zd(), Md();
    }
  }
  function Cd() {
    if (ke === 1) {
      ke = 0;
      var e = Nl,
        t = _a,
        l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = Q.p;
        Q.p = 2;
        var n = pe;
        pe |= 4;
        try {
          hd(t, e);
          var i = Hs,
            f = xo(e.containerInfo),
            h = i.focusedElem,
            x = i.selectionRange;
          if (
            f !== h &&
            h &&
            h.ownerDocument &&
            vo(h.ownerDocument.documentElement, h)
          ) {
            if (x !== null && or(h)) {
              var j = x.start,
                z = x.end;
              if ((z === void 0 && (z = j), "selectionStart" in h))
                (h.selectionStart = j),
                  (h.selectionEnd = Math.min(z, h.value.length));
              else {
                var H = h.ownerDocument || document,
                  O = (H && H.defaultView) || window;
                if (O.getSelection) {
                  var w = O.getSelection(),
                    te = h.textContent.length,
                    P = Math.min(x.start, te),
                    be = x.end === void 0 ? P : Math.min(x.end, te);
                  !w.extend && P > be && ((f = be), (be = P), (P = f));
                  var N = go(h, P),
                    E = go(h, be);
                  if (
                    N &&
                    E &&
                    (w.rangeCount !== 1 ||
                      w.anchorNode !== N.node ||
                      w.anchorOffset !== N.offset ||
                      w.focusNode !== E.node ||
                      w.focusOffset !== E.offset)
                  ) {
                    var T = H.createRange();
                    T.setStart(N.node, N.offset),
                      w.removeAllRanges(),
                      P > be
                        ? (w.addRange(T), w.extend(E.node, E.offset))
                        : (T.setEnd(E.node, E.offset), w.addRange(T));
                  }
                }
              }
            }
            for (H = [], w = h; (w = w.parentNode); )
              w.nodeType === 1 &&
                H.push({ element: w, left: w.scrollLeft, top: w.scrollTop });
            for (
              typeof h.focus == "function" && h.focus(), h = 0;
              h < H.length;
              h++
            ) {
              var U = H[h];
              (U.element.scrollLeft = U.left), (U.element.scrollTop = U.top);
            }
          }
          (fi = !!Bs), (Hs = Bs = null);
        } finally {
          (pe = n), (Q.p = a), (M.T = l);
        }
      }
      (e.current = t), (ke = 2);
    }
  }
  function zd() {
    if (ke === 2) {
      ke = 0;
      var e = Nl,
        t = _a,
        l = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || l) {
        (l = M.T), (M.T = null);
        var a = Q.p;
        Q.p = 2;
        var n = pe;
        pe |= 4;
        try {
          od(e, t.alternate, t);
        } finally {
          (pe = n), (Q.p = a), (M.T = l);
        }
      }
      ke = 3;
    }
  }
  function Md() {
    if (ke === 4 || ke === 3) {
      (ke = 0), Hh();
      var e = Nl,
        t = _a,
        l = Ca,
        a = Sd;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0
        ? (ke = 5)
        : ((ke = 0), (_a = Nl = null), Ud(e, e.pendingLanes));
      var n = e.pendingLanes;
      if (
        (n === 0 && (El = null),
        Qi(l),
        (t = t.stateNode),
        ot && typeof ot.onCommitFiberRoot == "function")
      )
        try {
          ot.onCommitFiberRoot(Ka, t, void 0, (t.current.flags & 128) === 128);
        } catch {}
      if (a !== null) {
        (t = M.T), (n = Q.p), (Q.p = 2), (M.T = null);
        try {
          for (var i = e.onRecoverableError, f = 0; f < a.length; f++) {
            var h = a[f];
            i(h.value, { componentStack: h.stack });
          }
        } finally {
          (M.T = t), (Q.p = n);
        }
      }
      (Ca & 3) !== 0 && Iu(),
        Lt(e),
        (n = e.pendingLanes),
        (l & 4194090) !== 0 && (n & 42) !== 0
          ? e === Es
            ? _n++
            : ((_n = 0), (Es = e))
          : (_n = 0),
        Cn(0);
    }
  }
  function Ud(e, t) {
    (e.pooledCacheLanes &= t) === 0 &&
      ((t = e.pooledCache), t != null && ((e.pooledCache = null), fn(t)));
  }
  function Iu(e) {
    return Cd(), zd(), Md(), Bd();
  }
  function Bd() {
    if (ke !== 5) return !1;
    var e = Nl,
      t = bs;
    bs = 0;
    var l = Qi(Ca),
      a = M.T,
      n = Q.p;
    try {
      (Q.p = 32 > l ? 32 : l), (M.T = null), (l = Ss), (Ss = null);
      var i = Nl,
        f = Ca;
      if (((ke = 0), (_a = Nl = null), (Ca = 0), (pe & 6) !== 0))
        throw Error(s(331));
      var h = pe;
      if (
        ((pe |= 4),
        xd(i.current),
        pd(i, i.current, f, l),
        (pe = h),
        Cn(0, !1),
        ot && typeof ot.onPostCommitFiberRoot == "function")
      )
        try {
          ot.onPostCommitFiberRoot(Ka, i);
        } catch {}
      return !0;
    } finally {
      (Q.p = n), (M.T = a), Ud(e, t);
    }
  }
  function Hd(e, t, l) {
    (t = St(l, t)),
      (t = es(e.stateNode, t, 2)),
      (e = ml(e, t, 2)),
      e !== null && (ka(e, 2), Lt(e));
  }
  function Ne(e, t, l) {
    if (e.tag === 3) Hd(e, e, l);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Hd(t, e, l);
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (
            typeof t.type.getDerivedStateFromError == "function" ||
            (typeof a.componentDidCatch == "function" &&
              (El === null || !El.has(a)))
          ) {
            (e = St(l, e)),
              (l = Gf(2)),
              (a = ml(t, l, 2)),
              a !== null && (Xf(l, a, t, e), ka(a, 2), Lt(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Rs(e, t, l) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new oy();
      var n = new Set();
      a.set(t, n);
    } else (n = a.get(t)), n === void 0 && ((n = new Set()), a.set(t, n));
    n.has(l) ||
      ((ps = !0), n.add(l), (e = yy.bind(null, e, t, l)), t.then(e, e));
  }
  function yy(e, t, l) {
    var a = e.pingCache;
    a !== null && a.delete(t),
      (e.pingedLanes |= e.suspendedLanes & l),
      (e.warmLanes &= ~l),
      Te === e &&
        (oe & l) === l &&
        (_e === 4 || (_e === 3 && (oe & 62914560) === oe && 300 > Mt() - xs)
          ? (pe & 2) === 0 && za(e, 0)
          : (gs |= l),
        Da === oe && (Da = 0)),
      Lt(e);
  }
  function qd(e, t) {
    t === 0 && (t = Cc()), (e = ya(e, t)), e !== null && (ka(e, t), Lt(e));
  }
  function py(e) {
    var t = e.memoizedState,
      l = 0;
    t !== null && (l = t.retryLane), qd(e, l);
  }
  function gy(e, t) {
    var l = 0;
    switch (e.tag) {
      case 13:
        var a = e.stateNode,
          n = e.memoizedState;
        n !== null && (l = n.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), qd(e, l);
  }
  function vy(e, t) {
    return Li(e, t);
  }
  var ei = null,
    Ua = null,
    As = !1,
    ti = !1,
    Os = !1,
    Wl = 0;
  function Lt(e) {
    e !== Ua &&
      e.next === null &&
      (Ua === null ? (ei = Ua = e) : (Ua = Ua.next = e)),
      (ti = !0),
      As || ((As = !0), by());
  }
  function Cn(e, t) {
    if (!Os && ti) {
      Os = !0;
      do
        for (var l = !1, a = ei; a !== null; ) {
          if (e !== 0) {
            var n = a.pendingLanes;
            if (n === 0) var i = 0;
            else {
              var f = a.suspendedLanes,
                h = a.pingedLanes;
              (i = (1 << (31 - ft(42 | e) + 1)) - 1),
                (i &= n & ~(f & ~h)),
                (i = i & 201326741 ? (i & 201326741) | 1 : i ? i | 2 : 0);
            }
            i !== 0 && ((l = !0), Xd(a, i));
          } else
            (i = oe),
              (i = ru(
                a,
                a === Te ? i : 0,
                a.cancelPendingCommit !== null || a.timeoutHandle !== -1
              )),
              (i & 3) === 0 || Ja(a, i) || ((l = !0), Xd(a, i));
          a = a.next;
        }
      while (l);
      Os = !1;
    }
  }
  function xy() {
    Ld();
  }
  function Ld() {
    ti = As = !1;
    var e = 0;
    Wl !== 0 && (Oy() && (e = Wl), (Wl = 0));
    for (var t = Mt(), l = null, a = ei; a !== null; ) {
      var n = a.next,
        i = Yd(a, t);
      i === 0
        ? ((a.next = null),
          l === null ? (ei = n) : (l.next = n),
          n === null && (Ua = l))
        : ((l = a), (e !== 0 || (i & 3) !== 0) && (ti = !0)),
        (a = n);
    }
    Cn(e);
  }
  function Yd(e, t) {
    for (
      var l = e.suspendedLanes,
        a = e.pingedLanes,
        n = e.expirationTimes,
        i = e.pendingLanes & -62914561;
      0 < i;

    ) {
      var f = 31 - ft(i),
        h = 1 << f,
        x = n[f];
      x === -1
        ? ((h & l) === 0 || (h & a) !== 0) && (n[f] = Zh(h, t))
        : x <= t && (e.expiredLanes |= h),
        (i &= ~h);
    }
    if (
      ((t = Te),
      (l = oe),
      (l = ru(
        e,
        e === t ? l : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      (a = e.callbackNode),
      l === 0 ||
        (e === t && (ge === 2 || ge === 9)) ||
        e.cancelPendingCommit !== null)
    )
      return (
        a !== null && a !== null && Yi(a),
        (e.callbackNode = null),
        (e.callbackPriority = 0)
      );
    if ((l & 3) === 0 || Ja(e, l)) {
      if (((t = l & -l), t === e.callbackPriority)) return t;
      switch ((a !== null && Yi(a), Qi(l))) {
        case 2:
        case 8:
          l = wc;
          break;
        case 32:
          l = nu;
          break;
        case 268435456:
          l = Dc;
          break;
        default:
          l = nu;
      }
      return (
        (a = Gd.bind(null, e)),
        (l = Li(l, a)),
        (e.callbackPriority = t),
        (e.callbackNode = l),
        t
      );
    }
    return (
      a !== null && a !== null && Yi(a),
      (e.callbackPriority = 2),
      (e.callbackNode = null),
      2
    );
  }
  function Gd(e, t) {
    if (ke !== 0 && ke !== 5)
      return (e.callbackNode = null), (e.callbackPriority = 0), null;
    var l = e.callbackNode;
    if (Iu() && e.callbackNode !== l) return null;
    var a = oe;
    return (
      (a = ru(
        e,
        e === Te ? a : 0,
        e.cancelPendingCommit !== null || e.timeoutHandle !== -1
      )),
      a === 0
        ? null
        : (Nd(e, a, t),
          Yd(e, Mt()),
          e.callbackNode != null && e.callbackNode === l
            ? Gd.bind(null, e)
            : null)
    );
  }
  function Xd(e, t) {
    if (Iu()) return null;
    Nd(e, t, !0);
  }
  function by() {
    Dy(function () {
      (pe & 6) !== 0 ? Li(Oc, xy) : Ld();
    });
  }
  function ws() {
    return Wl === 0 && (Wl = _c()), Wl;
  }
  function Qd(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean"
      ? null
      : typeof e == "function"
      ? e
      : du("" + e);
  }
  function Vd(e, t) {
    var l = t.ownerDocument.createElement("input");
    return (
      (l.name = t.name),
      (l.value = t.value),
      e.id && l.setAttribute("form", e.id),
      t.parentNode.insertBefore(l, t),
      (e = new FormData(e)),
      l.parentNode.removeChild(l),
      e
    );
  }
  function Sy(e, t, l, a, n) {
    if (t === "submit" && l && l.stateNode === n) {
      var i = Qd((n[lt] || null).action),
        f = a.submitter;
      f &&
        ((t = (t = f[lt] || null)
          ? Qd(t.formAction)
          : f.getAttribute("formAction")),
        t !== null && ((i = t), (f = null)));
      var h = new pu("action", "action", null, a, n);
      e.push({
        event: h,
        listeners: [
          {
            instance: null,
            listener: function () {
              if (a.defaultPrevented) {
                if (Wl !== 0) {
                  var x = f ? Vd(n, f) : new FormData(n);
                  $r(
                    l,
                    { pending: !0, data: x, method: n.method, action: i },
                    null,
                    x
                  );
                }
              } else
                typeof i == "function" &&
                  (h.preventDefault(),
                  (x = f ? Vd(n, f) : new FormData(n)),
                  $r(
                    l,
                    { pending: !0, data: x, method: n.method, action: i },
                    i,
                    x
                  ));
            },
            currentTarget: n,
          },
        ],
      });
    }
  }
  for (var Ds = 0; Ds < hr.length; Ds++) {
    var _s = hr[Ds],
      Ey = _s.toLowerCase(),
      Ny = _s[0].toUpperCase() + _s.slice(1);
    Ot(Ey, "on" + Ny);
  }
  Ot(Eo, "onAnimationEnd"),
    Ot(No, "onAnimationIteration"),
    Ot(To, "onAnimationStart"),
    Ot("dblclick", "onDoubleClick"),
    Ot("focusin", "onFocus"),
    Ot("focusout", "onBlur"),
    Ot(Y0, "onTransitionRun"),
    Ot(G0, "onTransitionStart"),
    Ot(X0, "onTransitionCancel"),
    Ot(jo, "onTransitionEnd"),
    ua("onMouseEnter", ["mouseout", "mouseover"]),
    ua("onMouseLeave", ["mouseout", "mouseover"]),
    ua("onPointerEnter", ["pointerout", "pointerover"]),
    ua("onPointerLeave", ["pointerout", "pointerover"]),
    Ul(
      "onChange",
      "change click focusin focusout input keydown keyup selectionchange".split(
        " "
      )
    ),
    Ul(
      "onSelect",
      "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
        " "
      )
    ),
    Ul("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]),
    Ul(
      "onCompositionEnd",
      "compositionend focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ul(
      "onCompositionStart",
      "compositionstart focusout keydown keypress keyup mousedown".split(" ")
    ),
    Ul(
      "onCompositionUpdate",
      "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
    );
  var zn =
      "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
        " "
      ),
    Ty = new Set(
      "beforetoggle cancel close invalid load scroll scrollend toggle"
        .split(" ")
        .concat(zn)
    );
  function Zd(e, t) {
    t = (t & 4) !== 0;
    for (var l = 0; l < e.length; l++) {
      var a = e[l],
        n = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var f = a.length - 1; 0 <= f; f--) {
            var h = a[f],
              x = h.instance,
              j = h.currentTarget;
            if (((h = h.listener), x !== i && n.isPropagationStopped()))
              break e;
            (i = h), (n.currentTarget = j);
            try {
              i(n);
            } catch (z) {
              Xu(z);
            }
            (n.currentTarget = null), (i = x);
          }
        else
          for (f = 0; f < a.length; f++) {
            if (
              ((h = a[f]),
              (x = h.instance),
              (j = h.currentTarget),
              (h = h.listener),
              x !== i && n.isPropagationStopped())
            )
              break e;
            (i = h), (n.currentTarget = j);
            try {
              i(n);
            } catch (z) {
              Xu(z);
            }
            (n.currentTarget = null), (i = x);
          }
      }
    }
  }
  function se(e, t) {
    var l = t[Vi];
    l === void 0 && (l = t[Vi] = new Set());
    var a = e + "__bubble";
    l.has(a) || (Kd(t, e, 2, !1), l.add(a));
  }
  function Cs(e, t, l) {
    var a = 0;
    t && (a |= 4), Kd(l, e, a, t);
  }
  var li = "_reactListening" + Math.random().toString(36).slice(2);
  function zs(e) {
    if (!e[li]) {
      (e[li] = !0),
        Hc.forEach(function (l) {
          l !== "selectionchange" && (Ty.has(l) || Cs(l, !1, e), Cs(l, !0, e));
        });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[li] || ((t[li] = !0), Cs("selectionchange", !1, t));
    }
  }
  function Kd(e, t, l, a) {
    switch (pm(t)) {
      case 2:
        var n = Wy;
        break;
      case 8:
        n = Py;
        break;
      default:
        n = Js;
    }
    (l = n.bind(null, t, l, e)),
      (n = void 0),
      !tr ||
        (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
        (n = !0),
      a
        ? n !== void 0
          ? e.addEventListener(t, l, { capture: !0, passive: n })
          : e.addEventListener(t, l, !0)
        : n !== void 0
        ? e.addEventListener(t, l, { passive: n })
        : e.addEventListener(t, l, !1);
  }
  function Ms(e, t, l, a, n) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (;;) {
        if (a === null) return;
        var f = a.tag;
        if (f === 3 || f === 4) {
          var h = a.stateNode.containerInfo;
          if (h === n) break;
          if (f === 4)
            for (f = a.return; f !== null; ) {
              var x = f.tag;
              if ((x === 3 || x === 4) && f.stateNode.containerInfo === n)
                return;
              f = f.return;
            }
          for (; h !== null; ) {
            if (((f = la(h)), f === null)) return;
            if (((x = f.tag), x === 5 || x === 6 || x === 26 || x === 27)) {
              a = i = f;
              continue e;
            }
            h = h.parentNode;
          }
        }
        a = a.return;
      }
    Wc(function () {
      var j = i,
        z = Ii(l),
        H = [];
      e: {
        var O = Ro.get(e);
        if (O !== void 0) {
          var w = pu,
            te = e;
          switch (e) {
            case "keypress":
              if (hu(l) === 0) break e;
            case "keydown":
            case "keyup":
              w = v0;
              break;
            case "focusin":
              (te = "focus"), (w = ur);
              break;
            case "focusout":
              (te = "blur"), (w = ur);
              break;
            case "beforeblur":
            case "afterblur":
              w = ur;
              break;
            case "click":
              if (l.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              w = eo;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              w = i0;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              w = S0;
              break;
            case Eo:
            case No:
            case To:
              w = c0;
              break;
            case jo:
              w = N0;
              break;
            case "scroll":
            case "scrollend":
              w = n0;
              break;
            case "wheel":
              w = j0;
              break;
            case "copy":
            case "cut":
            case "paste":
              w = f0;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              w = lo;
              break;
            case "toggle":
            case "beforetoggle":
              w = A0;
          }
          var P = (t & 4) !== 0,
            be = !P && (e === "scroll" || e === "scrollend"),
            N = P ? (O !== null ? O + "Capture" : null) : O;
          P = [];
          for (var E = j, T; E !== null; ) {
            var U = E;
            if (
              ((T = U.stateNode),
              (U = U.tag),
              (U !== 5 && U !== 26 && U !== 27) ||
                T === null ||
                N === null ||
                ((U = Wa(E, N)), U != null && P.push(Mn(E, U, T))),
              be)
            )
              break;
            E = E.return;
          }
          0 < P.length &&
            ((O = new w(O, te, null, l, z)),
            H.push({ event: O, listeners: P }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (
            ((O = e === "mouseover" || e === "pointerover"),
            (w = e === "mouseout" || e === "pointerout"),
            O &&
              l !== Pi &&
              (te = l.relatedTarget || l.fromElement) &&
              (la(te) || te[ta]))
          )
            break e;
          if (
            (w || O) &&
            ((O =
              z.window === z
                ? z
                : (O = z.ownerDocument)
                ? O.defaultView || O.parentWindow
                : window),
            w
              ? ((te = l.relatedTarget || l.toElement),
                (w = j),
                (te = te ? la(te) : null),
                te !== null &&
                  ((be = m(te)),
                  (P = te.tag),
                  te !== be || (P !== 5 && P !== 27 && P !== 6)) &&
                  (te = null))
              : ((w = null), (te = j)),
            w !== te)
          ) {
            if (
              ((P = eo),
              (U = "onMouseLeave"),
              (N = "onMouseEnter"),
              (E = "mouse"),
              (e === "pointerout" || e === "pointerover") &&
                ((P = lo),
                (U = "onPointerLeave"),
                (N = "onPointerEnter"),
                (E = "pointer")),
              (be = w == null ? O : Fa(w)),
              (T = te == null ? O : Fa(te)),
              (O = new P(U, E + "leave", w, l, z)),
              (O.target = be),
              (O.relatedTarget = T),
              (U = null),
              la(z) === j &&
                ((P = new P(N, E + "enter", te, l, z)),
                (P.target = T),
                (P.relatedTarget = be),
                (U = P)),
              (be = U),
              w && te)
            )
              t: {
                for (P = w, N = te, E = 0, T = P; T; T = Ba(T)) E++;
                for (T = 0, U = N; U; U = Ba(U)) T++;
                for (; 0 < E - T; ) (P = Ba(P)), E--;
                for (; 0 < T - E; ) (N = Ba(N)), T--;
                for (; E--; ) {
                  if (P === N || (N !== null && P === N.alternate)) break t;
                  (P = Ba(P)), (N = Ba(N));
                }
                P = null;
              }
            else P = null;
            w !== null && Jd(H, O, w, P, !1),
              te !== null && be !== null && Jd(H, be, te, P, !0);
          }
        }
        e: {
          if (
            ((O = j ? Fa(j) : window),
            (w = O.nodeName && O.nodeName.toLowerCase()),
            w === "select" || (w === "input" && O.type === "file"))
          )
            var Z = oo;
          else if (so(O))
            if (fo) Z = H0;
            else {
              Z = U0;
              var ie = M0;
            }
          else
            (w = O.nodeName),
              !w ||
              w.toLowerCase() !== "input" ||
              (O.type !== "checkbox" && O.type !== "radio")
                ? j && Wi(j.elementType) && (Z = oo)
                : (Z = B0);
          if (Z && (Z = Z(e, j))) {
            co(H, Z, l, z);
            break e;
          }
          ie && ie(e, O, j),
            e === "focusout" &&
              j &&
              O.type === "number" &&
              j.memoizedProps.value != null &&
              Fi(O, "number", O.value);
        }
        switch (((ie = j ? Fa(j) : window), e)) {
          case "focusin":
            (so(ie) || ie.contentEditable === "true") &&
              ((da = ie), (fr = j), (un = null));
            break;
          case "focusout":
            un = fr = da = null;
            break;
          case "mousedown":
            dr = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            (dr = !1), bo(H, l, z);
            break;
          case "selectionchange":
            if (L0) break;
          case "keydown":
          case "keyup":
            bo(H, l, z);
        }
        var $;
        if (rr)
          e: {
            switch (e) {
              case "compositionstart":
                var I = "onCompositionStart";
                break e;
              case "compositionend":
                I = "onCompositionEnd";
                break e;
              case "compositionupdate":
                I = "onCompositionUpdate";
                break e;
            }
            I = void 0;
          }
        else
          fa
            ? io(e, l) && (I = "onCompositionEnd")
            : e === "keydown" &&
              l.keyCode === 229 &&
              (I = "onCompositionStart");
        I &&
          (ao &&
            l.locale !== "ko" &&
            (fa || I !== "onCompositionStart"
              ? I === "onCompositionEnd" && fa && ($ = Pc())
              : ((cl = z),
                (lr = "value" in cl ? cl.value : cl.textContent),
                (fa = !0))),
          (ie = ai(j, I)),
          0 < ie.length &&
            ((I = new to(I, e, null, l, z)),
            H.push({ event: I, listeners: ie }),
            $ ? (I.data = $) : (($ = ro(l)), $ !== null && (I.data = $)))),
          ($ = w0 ? D0(e, l) : _0(e, l)) &&
            ((I = ai(j, "onBeforeInput")),
            0 < I.length &&
              ((ie = new to("onBeforeInput", "beforeinput", null, l, z)),
              H.push({ event: ie, listeners: I }),
              (ie.data = $))),
          Sy(H, e, j, l, z);
      }
      Zd(H, t);
    });
  }
  function Mn(e, t, l) {
    return { instance: e, listener: t, currentTarget: l };
  }
  function ai(e, t) {
    for (var l = t + "Capture", a = []; e !== null; ) {
      var n = e,
        i = n.stateNode;
      if (
        ((n = n.tag),
        (n !== 5 && n !== 26 && n !== 27) ||
          i === null ||
          ((n = Wa(e, l)),
          n != null && a.unshift(Mn(e, n, i)),
          (n = Wa(e, t)),
          n != null && a.push(Mn(e, n, i))),
        e.tag === 3)
      )
        return a;
      e = e.return;
    }
    return [];
  }
  function Ba(e) {
    if (e === null) return null;
    do e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function Jd(e, t, l, a, n) {
    for (var i = t._reactName, f = []; l !== null && l !== a; ) {
      var h = l,
        x = h.alternate,
        j = h.stateNode;
      if (((h = h.tag), x !== null && x === a)) break;
      (h !== 5 && h !== 26 && h !== 27) ||
        j === null ||
        ((x = j),
        n
          ? ((j = Wa(l, i)), j != null && f.unshift(Mn(l, j, x)))
          : n || ((j = Wa(l, i)), j != null && f.push(Mn(l, j, x)))),
        (l = l.return);
    }
    f.length !== 0 && e.push({ event: t, listeners: f });
  }
  var jy = /\r\n?/g,
    Ry = /\u0000|\uFFFD/g;
  function kd(e) {
    return (typeof e == "string" ? e : "" + e)
      .replace(
        jy,
        `
`
      )
      .replace(Ry, "");
  }
  function $d(e, t) {
    return (t = kd(t)), kd(e) === t;
  }
  function ni() {}
  function xe(e, t, l, a, n, i) {
    switch (l) {
      case "children":
        typeof a == "string"
          ? t === "body" || (t === "textarea" && a === "") || sa(e, a)
          : (typeof a == "number" || typeof a == "bigint") &&
            t !== "body" &&
            sa(e, "" + a);
        break;
      case "className":
        cu(e, "class", a);
        break;
      case "tabIndex":
        cu(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        cu(e, l, a);
        break;
      case "style":
        $c(e, a, i);
        break;
      case "data":
        if (t !== "object") {
          cu(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || l !== "href")) {
          e.removeAttribute(l);
          break;
        }
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "symbol" ||
          typeof a == "boolean"
        ) {
          e.removeAttribute(l);
          break;
        }
        (a = du("" + a)), e.setAttribute(l, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            l,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" &&
            (l === "formAction"
              ? (t !== "input" && xe(e, t, "name", n.name, n, null),
                xe(e, t, "formEncType", n.formEncType, n, null),
                xe(e, t, "formMethod", n.formMethod, n, null),
                xe(e, t, "formTarget", n.formTarget, n, null))
              : (xe(e, t, "encType", n.encType, n, null),
                xe(e, t, "method", n.method, n, null),
                xe(e, t, "target", n.target, n, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(l);
          break;
        }
        (a = du("" + a)), e.setAttribute(l, a);
        break;
      case "onClick":
        a != null && (e.onclick = ni);
        break;
      case "onScroll":
        a != null && se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && se("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (
          a == null ||
          typeof a == "function" ||
          typeof a == "boolean" ||
          typeof a == "symbol"
        ) {
          e.removeAttribute("xlink:href");
          break;
        }
        (l = du("" + a)),
          e.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", l);
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "" + a)
          : e.removeAttribute(l);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol"
          ? e.setAttribute(l, "")
          : e.removeAttribute(l);
        break;
      case "capture":
      case "download":
        a === !0
          ? e.setAttribute(l, "")
          : a !== !1 &&
            a != null &&
            typeof a != "function" &&
            typeof a != "symbol"
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null &&
        typeof a != "function" &&
        typeof a != "symbol" &&
        !isNaN(a) &&
        1 <= a
          ? e.setAttribute(l, a)
          : e.removeAttribute(l);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a)
          ? e.removeAttribute(l)
          : e.setAttribute(l, a);
        break;
      case "popover":
        se("beforetoggle", e), se("toggle", e), su(e, "popover", a);
        break;
      case "xlinkActuate":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:actuate", a);
        break;
      case "xlinkArcrole":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:arcrole", a);
        break;
      case "xlinkRole":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:role", a);
        break;
      case "xlinkShow":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:show", a);
        break;
      case "xlinkTitle":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:title", a);
        break;
      case "xlinkType":
        Xt(e, "http://www.w3.org/1999/xlink", "xlink:type", a);
        break;
      case "xmlBase":
        Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:base", a);
        break;
      case "xmlLang":
        Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:lang", a);
        break;
      case "xmlSpace":
        Xt(e, "http://www.w3.org/XML/1998/namespace", "xml:space", a);
        break;
      case "is":
        su(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < l.length) ||
          (l[0] !== "o" && l[0] !== "O") ||
          (l[1] !== "n" && l[1] !== "N")) &&
          ((l = l0.get(l) || l), su(e, l, a));
    }
  }
  function Us(e, t, l, a, n, i) {
    switch (l) {
      case "style":
        $c(e, a, i);
        break;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a)) throw Error(s(61));
          if (((l = a.__html), l != null)) {
            if (n.children != null) throw Error(s(60));
            e.innerHTML = l;
          }
        }
        break;
      case "children":
        typeof a == "string"
          ? sa(e, a)
          : (typeof a == "number" || typeof a == "bigint") && sa(e, "" + a);
        break;
      case "onScroll":
        a != null && se("scroll", e);
        break;
      case "onScrollEnd":
        a != null && se("scrollend", e);
        break;
      case "onClick":
        a != null && (e.onclick = ni);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!qc.hasOwnProperty(l))
          e: {
            if (
              l[0] === "o" &&
              l[1] === "n" &&
              ((n = l.endsWith("Capture")),
              (t = l.slice(2, n ? l.length - 7 : void 0)),
              (i = e[lt] || null),
              (i = i != null ? i[l] : null),
              typeof i == "function" && e.removeEventListener(t, i, n),
              typeof a == "function")
            ) {
              typeof i != "function" &&
                i !== null &&
                (l in e
                  ? (e[l] = null)
                  : e.hasAttribute(l) && e.removeAttribute(l)),
                e.addEventListener(t, a, n);
              break e;
            }
            l in e
              ? (e[l] = a)
              : a === !0
              ? e.setAttribute(l, "")
              : su(e, l, a);
          }
    }
  }
  function $e(e, t, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        se("error", e), se("load", e);
        var a = !1,
          n = !1,
          i;
        for (i in l)
          if (l.hasOwnProperty(i)) {
            var f = l[i];
            if (f != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  n = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  xe(e, t, i, f, l, null);
              }
          }
        n && xe(e, t, "srcSet", l.srcSet, l, null),
          a && xe(e, t, "src", l.src, l, null);
        return;
      case "input":
        se("invalid", e);
        var h = (i = f = n = null),
          x = null,
          j = null;
        for (a in l)
          if (l.hasOwnProperty(a)) {
            var z = l[a];
            if (z != null)
              switch (a) {
                case "name":
                  n = z;
                  break;
                case "type":
                  f = z;
                  break;
                case "checked":
                  x = z;
                  break;
                case "defaultChecked":
                  j = z;
                  break;
                case "value":
                  i = z;
                  break;
                case "defaultValue":
                  h = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null) throw Error(s(137, t));
                  break;
                default:
                  xe(e, t, a, z, l, null);
              }
          }
        Zc(e, i, h, x, j, f, n, !1), ou(e);
        return;
      case "select":
        se("invalid", e), (a = f = i = null);
        for (n in l)
          if (l.hasOwnProperty(n) && ((h = l[n]), h != null))
            switch (n) {
              case "value":
                i = h;
                break;
              case "defaultValue":
                f = h;
                break;
              case "multiple":
                a = h;
              default:
                xe(e, t, n, h, l, null);
            }
        (t = i),
          (l = f),
          (e.multiple = !!a),
          t != null ? ra(e, !!a, t, !1) : l != null && ra(e, !!a, l, !0);
        return;
      case "textarea":
        se("invalid", e), (i = n = a = null);
        for (f in l)
          if (l.hasOwnProperty(f) && ((h = l[f]), h != null))
            switch (f) {
              case "value":
                a = h;
                break;
              case "defaultValue":
                n = h;
                break;
              case "children":
                i = h;
                break;
              case "dangerouslySetInnerHTML":
                if (h != null) throw Error(s(91));
                break;
              default:
                xe(e, t, f, h, l, null);
            }
        Jc(e, a, n, i), ou(e);
        return;
      case "option":
        for (x in l)
          if (l.hasOwnProperty(x) && ((a = l[x]), a != null))
            switch (x) {
              case "selected":
                e.selected =
                  a && typeof a != "function" && typeof a != "symbol";
                break;
              default:
                xe(e, t, x, a, l, null);
            }
        return;
      case "dialog":
        se("beforetoggle", e), se("toggle", e), se("cancel", e), se("close", e);
        break;
      case "iframe":
      case "object":
        se("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < zn.length; a++) se(zn[a], e);
        break;
      case "image":
        se("error", e), se("load", e);
        break;
      case "details":
        se("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        se("error", e), se("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (j in l)
          if (l.hasOwnProperty(j) && ((a = l[j]), a != null))
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                xe(e, t, j, a, l, null);
            }
        return;
      default:
        if (Wi(t)) {
          for (z in l)
            l.hasOwnProperty(z) &&
              ((a = l[z]), a !== void 0 && Us(e, t, z, a, l, void 0));
          return;
        }
    }
    for (h in l)
      l.hasOwnProperty(h) && ((a = l[h]), a != null && xe(e, t, h, a, l, null));
  }
  function Ay(e, t, l, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var n = null,
          i = null,
          f = null,
          h = null,
          x = null,
          j = null,
          z = null;
        for (w in l) {
          var H = l[w];
          if (l.hasOwnProperty(w) && H != null)
            switch (w) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                x = H;
              default:
                a.hasOwnProperty(w) || xe(e, t, w, null, a, H);
            }
        }
        for (var O in a) {
          var w = a[O];
          if (((H = l[O]), a.hasOwnProperty(O) && (w != null || H != null)))
            switch (O) {
              case "type":
                i = w;
                break;
              case "name":
                n = w;
                break;
              case "checked":
                j = w;
                break;
              case "defaultChecked":
                z = w;
                break;
              case "value":
                f = w;
                break;
              case "defaultValue":
                h = w;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (w != null) throw Error(s(137, t));
                break;
              default:
                w !== H && xe(e, t, O, w, a, H);
            }
        }
        $i(e, f, h, x, j, z, i, n);
        return;
      case "select":
        w = f = h = O = null;
        for (i in l)
          if (((x = l[i]), l.hasOwnProperty(i) && x != null))
            switch (i) {
              case "value":
                break;
              case "multiple":
                w = x;
              default:
                a.hasOwnProperty(i) || xe(e, t, i, null, a, x);
            }
        for (n in a)
          if (
            ((i = a[n]),
            (x = l[n]),
            a.hasOwnProperty(n) && (i != null || x != null))
          )
            switch (n) {
              case "value":
                O = i;
                break;
              case "defaultValue":
                h = i;
                break;
              case "multiple":
                f = i;
              default:
                i !== x && xe(e, t, n, i, a, x);
            }
        (t = h),
          (l = f),
          (a = w),
          O != null
            ? ra(e, !!l, O, !1)
            : !!a != !!l &&
              (t != null ? ra(e, !!l, t, !0) : ra(e, !!l, l ? [] : "", !1));
        return;
      case "textarea":
        w = O = null;
        for (h in l)
          if (
            ((n = l[h]),
            l.hasOwnProperty(h) && n != null && !a.hasOwnProperty(h))
          )
            switch (h) {
              case "value":
                break;
              case "children":
                break;
              default:
                xe(e, t, h, null, a, n);
            }
        for (f in a)
          if (
            ((n = a[f]),
            (i = l[f]),
            a.hasOwnProperty(f) && (n != null || i != null))
          )
            switch (f) {
              case "value":
                O = n;
                break;
              case "defaultValue":
                w = n;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (n != null) throw Error(s(91));
                break;
              default:
                n !== i && xe(e, t, f, n, a, i);
            }
        Kc(e, O, w);
        return;
      case "option":
        for (var te in l)
          if (
            ((O = l[te]),
            l.hasOwnProperty(te) && O != null && !a.hasOwnProperty(te))
          )
            switch (te) {
              case "selected":
                e.selected = !1;
                break;
              default:
                xe(e, t, te, null, a, O);
            }
        for (x in a)
          if (
            ((O = a[x]),
            (w = l[x]),
            a.hasOwnProperty(x) && O !== w && (O != null || w != null))
          )
            switch (x) {
              case "selected":
                e.selected =
                  O && typeof O != "function" && typeof O != "symbol";
                break;
              default:
                xe(e, t, x, O, a, w);
            }
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var P in l)
          (O = l[P]),
            l.hasOwnProperty(P) &&
              O != null &&
              !a.hasOwnProperty(P) &&
              xe(e, t, P, null, a, O);
        for (j in a)
          if (
            ((O = a[j]),
            (w = l[j]),
            a.hasOwnProperty(j) && O !== w && (O != null || w != null))
          )
            switch (j) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null) throw Error(s(137, t));
                break;
              default:
                xe(e, t, j, O, a, w);
            }
        return;
      default:
        if (Wi(t)) {
          for (var be in l)
            (O = l[be]),
              l.hasOwnProperty(be) &&
                O !== void 0 &&
                !a.hasOwnProperty(be) &&
                Us(e, t, be, void 0, a, O);
          for (z in a)
            (O = a[z]),
              (w = l[z]),
              !a.hasOwnProperty(z) ||
                O === w ||
                (O === void 0 && w === void 0) ||
                Us(e, t, z, O, a, w);
          return;
        }
    }
    for (var N in l)
      (O = l[N]),
        l.hasOwnProperty(N) &&
          O != null &&
          !a.hasOwnProperty(N) &&
          xe(e, t, N, null, a, O);
    for (H in a)
      (O = a[H]),
        (w = l[H]),
        !a.hasOwnProperty(H) ||
          O === w ||
          (O == null && w == null) ||
          xe(e, t, H, O, a, w);
  }
  var Bs = null,
    Hs = null;
  function ui(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Fd(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Wd(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function qs(e, t) {
    return (
      e === "textarea" ||
      e === "noscript" ||
      typeof t.children == "string" ||
      typeof t.children == "number" ||
      typeof t.children == "bigint" ||
      (typeof t.dangerouslySetInnerHTML == "object" &&
        t.dangerouslySetInnerHTML !== null &&
        t.dangerouslySetInnerHTML.__html != null)
    );
  }
  var Ls = null;
  function Oy() {
    var e = window.event;
    return e && e.type === "popstate"
      ? e === Ls
        ? !1
        : ((Ls = e), !0)
      : ((Ls = null), !1);
  }
  var Pd = typeof setTimeout == "function" ? setTimeout : void 0,
    wy = typeof clearTimeout == "function" ? clearTimeout : void 0,
    Id = typeof Promise == "function" ? Promise : void 0,
    Dy =
      typeof queueMicrotask == "function"
        ? queueMicrotask
        : typeof Id < "u"
        ? function (e) {
            return Id.resolve(null).then(e).catch(_y);
          }
        : Pd;
  function _y(e) {
    setTimeout(function () {
      throw e;
    });
  }
  function jl(e) {
    return e === "head";
  }
  function em(e, t) {
    var l = t,
      a = 0,
      n = 0;
    do {
      var i = l.nextSibling;
      if ((e.removeChild(l), i && i.nodeType === 8))
        if (((l = i.data), l === "/$")) {
          if (0 < a && 8 > a) {
            l = a;
            var f = e.ownerDocument;
            if ((l & 1 && Un(f.documentElement), l & 2 && Un(f.body), l & 4))
              for (l = f.head, Un(l), f = l.firstChild; f; ) {
                var h = f.nextSibling,
                  x = f.nodeName;
                f[$a] ||
                  x === "SCRIPT" ||
                  x === "STYLE" ||
                  (x === "LINK" && f.rel.toLowerCase() === "stylesheet") ||
                  l.removeChild(f),
                  (f = h);
              }
          }
          if (n === 0) {
            e.removeChild(i), Qn(t);
            return;
          }
          n--;
        } else
          l === "$" || l === "$?" || l === "$!"
            ? n++
            : (a = l.charCodeAt(0) - 48);
      else a = 0;
      l = i;
    } while (l);
    Qn(t);
  }
  function Ys(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var l = t;
      switch (((t = t.nextSibling), l.nodeName)) {
        case "HTML":
        case "HEAD":
        case "BODY":
          Ys(l), Zi(l);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (l.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(l);
    }
  }
  function Cy(e, t, l, a) {
    for (; e.nodeType === 1; ) {
      var n = l;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden")) break;
      } else if (a) {
        if (!e[$a])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (
                ((i = e.getAttribute("rel")),
                i === "stylesheet" && e.hasAttribute("data-precedence"))
              )
                break;
              if (
                i !== n.rel ||
                e.getAttribute("href") !==
                  (n.href == null || n.href === "" ? null : n.href) ||
                e.getAttribute("crossorigin") !==
                  (n.crossOrigin == null ? null : n.crossOrigin) ||
                e.getAttribute("title") !== (n.title == null ? null : n.title)
              )
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (
                ((i = e.getAttribute("src")),
                (i !== (n.src == null ? null : n.src) ||
                  e.getAttribute("type") !== (n.type == null ? null : n.type) ||
                  e.getAttribute("crossorigin") !==
                    (n.crossOrigin == null ? null : n.crossOrigin)) &&
                  i &&
                  e.hasAttribute("async") &&
                  !e.hasAttribute("itemprop"))
              )
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = n.name == null ? null : "" + n.name;
        if (n.type === "hidden" && e.getAttribute("name") === i) return e;
      } else return e;
      if (((e = Dt(e.nextSibling)), e === null)) break;
    }
    return null;
  }
  function zy(e, t, l) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if (
        ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") &&
          !l) ||
        ((e = Dt(e.nextSibling)), e === null)
      )
        return null;
    return e;
  }
  function Gs(e) {
    return (
      e.data === "$!" ||
      (e.data === "$?" && e.ownerDocument.readyState === "complete")
    );
  }
  function My(e, t) {
    var l = e.ownerDocument;
    if (e.data !== "$?" || l.readyState === "complete") t();
    else {
      var a = function () {
        t(), l.removeEventListener("DOMContentLoaded", a);
      };
      l.addEventListener("DOMContentLoaded", a), (e._reactRetry = a);
    }
  }
  function Dt(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (
          ((t = e.data),
          t === "$" || t === "$!" || t === "$?" || t === "F!" || t === "F")
        )
          break;
        if (t === "/$") return null;
      }
    }
    return e;
  }
  var Xs = null;
  function tm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var l = e.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (t === 0) return e;
          t--;
        } else l === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function lm(e, t, l) {
    switch (((t = ui(l)), e)) {
      case "html":
        if (((e = t.documentElement), !e)) throw Error(s(452));
        return e;
      case "head":
        if (((e = t.head), !e)) throw Error(s(453));
        return e;
      case "body":
        if (((e = t.body), !e)) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Un(e) {
    for (var t = e.attributes; t.length; ) e.removeAttributeNode(t[0]);
    Zi(e);
  }
  var At = new Map(),
    am = new Set();
  function ii(e) {
    return typeof e.getRootNode == "function"
      ? e.getRootNode()
      : e.nodeType === 9
      ? e
      : e.ownerDocument;
  }
  var ll = Q.d;
  Q.d = { f: Uy, r: By, D: Hy, C: qy, L: Ly, m: Yy, X: Xy, S: Gy, M: Qy };
  function Uy() {
    var e = ll.f(),
      t = Wu();
    return e || t;
  }
  function By(e) {
    var t = aa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Nf(t) : ll.r(e);
  }
  var Ha = typeof document > "u" ? null : document;
  function nm(e, t, l) {
    var a = Ha;
    if (a && typeof t == "string" && t) {
      var n = bt(t);
      (n = 'link[rel="' + e + '"][href="' + n + '"]'),
        typeof l == "string" && (n += '[crossorigin="' + l + '"]'),
        am.has(n) ||
          (am.add(n),
          (e = { rel: e, crossOrigin: l, href: t }),
          a.querySelector(n) === null &&
            ((t = a.createElement("link")),
            $e(t, "link", e),
            Xe(t),
            a.head.appendChild(t)));
    }
  }
  function Hy(e) {
    ll.D(e), nm("dns-prefetch", e, null);
  }
  function qy(e, t) {
    ll.C(e, t), nm("preconnect", e, t);
  }
  function Ly(e, t, l) {
    ll.L(e, t, l);
    var a = Ha;
    if (a && e && t) {
      var n = 'link[rel="preload"][as="' + bt(t) + '"]';
      t === "image" && l && l.imageSrcSet
        ? ((n += '[imagesrcset="' + bt(l.imageSrcSet) + '"]'),
          typeof l.imageSizes == "string" &&
            (n += '[imagesizes="' + bt(l.imageSizes) + '"]'))
        : (n += '[href="' + bt(e) + '"]');
      var i = n;
      switch (t) {
        case "style":
          i = qa(e);
          break;
        case "script":
          i = La(e);
      }
      At.has(i) ||
        ((e = g(
          {
            rel: "preload",
            href: t === "image" && l && l.imageSrcSet ? void 0 : e,
            as: t,
          },
          l
        )),
        At.set(i, e),
        a.querySelector(n) !== null ||
          (t === "style" && a.querySelector(Bn(i))) ||
          (t === "script" && a.querySelector(Hn(i))) ||
          ((t = a.createElement("link")),
          $e(t, "link", e),
          Xe(t),
          a.head.appendChild(t)));
    }
  }
  function Yy(e, t) {
    ll.m(e, t);
    var l = Ha;
    if (l && e) {
      var a = t && typeof t.as == "string" ? t.as : "script",
        n =
          'link[rel="modulepreload"][as="' + bt(a) + '"][href="' + bt(e) + '"]',
        i = n;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = La(e);
      }
      if (
        !At.has(i) &&
        ((e = g({ rel: "modulepreload", href: e }, t)),
        At.set(i, e),
        l.querySelector(n) === null)
      ) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (l.querySelector(Hn(i))) return;
        }
        (a = l.createElement("link")),
          $e(a, "link", e),
          Xe(a),
          l.head.appendChild(a);
      }
    }
  }
  function Gy(e, t, l) {
    ll.S(e, t, l);
    var a = Ha;
    if (a && e) {
      var n = na(a).hoistableStyles,
        i = qa(e);
      t = t || "default";
      var f = n.get(i);
      if (!f) {
        var h = { loading: 0, preload: null };
        if ((f = a.querySelector(Bn(i)))) h.loading = 5;
        else {
          (e = g({ rel: "stylesheet", href: e, "data-precedence": t }, l)),
            (l = At.get(i)) && Qs(e, l);
          var x = (f = a.createElement("link"));
          Xe(x),
            $e(x, "link", e),
            (x._p = new Promise(function (j, z) {
              (x.onload = j), (x.onerror = z);
            })),
            x.addEventListener("load", function () {
              h.loading |= 1;
            }),
            x.addEventListener("error", function () {
              h.loading |= 2;
            }),
            (h.loading |= 4),
            ri(f, t, a);
        }
        (f = { type: "stylesheet", instance: f, count: 1, state: h }),
          n.set(i, f);
      }
    }
  }
  function Xy(e, t) {
    ll.X(e, t);
    var l = Ha;
    if (l && e) {
      var a = na(l).hoistableScripts,
        n = La(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Hn(n))),
        i ||
          ((e = g({ src: e, async: !0 }, t)),
          (t = At.get(n)) && Vs(e, t),
          (i = l.createElement("script")),
          Xe(i),
          $e(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function Qy(e, t) {
    ll.M(e, t);
    var l = Ha;
    if (l && e) {
      var a = na(l).hoistableScripts,
        n = La(e),
        i = a.get(n);
      i ||
        ((i = l.querySelector(Hn(n))),
        i ||
          ((e = g({ src: e, async: !0, type: "module" }, t)),
          (t = At.get(n)) && Vs(e, t),
          (i = l.createElement("script")),
          Xe(i),
          $e(i, "link", e),
          l.head.appendChild(i)),
        (i = { type: "script", instance: i, count: 1, state: null }),
        a.set(n, i));
    }
  }
  function um(e, t, l, a) {
    var n = (n = le.current) ? ii(n) : null;
    if (!n) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof l.precedence == "string" && typeof l.href == "string"
          ? ((t = qa(l.href)),
            (l = na(n).hoistableStyles),
            (a = l.get(t)),
            a ||
              ((a = { type: "style", instance: null, count: 0, state: null }),
              l.set(t, a)),
            a)
          : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (
          l.rel === "stylesheet" &&
          typeof l.href == "string" &&
          typeof l.precedence == "string"
        ) {
          e = qa(l.href);
          var i = na(n).hoistableStyles,
            f = i.get(e);
          if (
            (f ||
              ((n = n.ownerDocument || n),
              (f = {
                type: "stylesheet",
                instance: null,
                count: 0,
                state: { loading: 0, preload: null },
              }),
              i.set(e, f),
              (i = n.querySelector(Bn(e))) &&
                !i._p &&
                ((f.instance = i), (f.state.loading = 5)),
              At.has(e) ||
                ((l = {
                  rel: "preload",
                  as: "style",
                  href: l.href,
                  crossOrigin: l.crossOrigin,
                  integrity: l.integrity,
                  media: l.media,
                  hrefLang: l.hrefLang,
                  referrerPolicy: l.referrerPolicy,
                }),
                At.set(e, l),
                i || Vy(n, e, l, f.state))),
            t && a === null)
          )
            throw Error(s(528, ""));
          return f;
        }
        if (t && a !== null) throw Error(s(529, ""));
        return null;
      case "script":
        return (
          (t = l.async),
          (l = l.src),
          typeof l == "string" &&
          t &&
          typeof t != "function" &&
          typeof t != "symbol"
            ? ((t = La(l)),
              (l = na(n).hoistableScripts),
              (a = l.get(t)),
              a ||
                ((a = {
                  type: "script",
                  instance: null,
                  count: 0,
                  state: null,
                }),
                l.set(t, a)),
              a)
            : { type: "void", instance: null, count: 0, state: null }
        );
      default:
        throw Error(s(444, e));
    }
  }
  function qa(e) {
    return 'href="' + bt(e) + '"';
  }
  function Bn(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function im(e) {
    return g({}, e, { "data-precedence": e.precedence, precedence: null });
  }
  function Vy(e, t, l, a) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]")
      ? (a.loading = 1)
      : ((t = e.createElement("link")),
        (a.preload = t),
        t.addEventListener("load", function () {
          return (a.loading |= 1);
        }),
        t.addEventListener("error", function () {
          return (a.loading |= 2);
        }),
        $e(t, "link", l),
        Xe(t),
        e.head.appendChild(t));
  }
  function La(e) {
    return '[src="' + bt(e) + '"]';
  }
  function Hn(e) {
    return "script[async]" + e;
  }
  function rm(e, t, l) {
    if ((t.count++, t.instance === null))
      switch (t.type) {
        case "style":
          var a = e.querySelector('style[data-href~="' + bt(l.href) + '"]');
          if (a) return (t.instance = a), Xe(a), a;
          var n = g({}, l, {
            "data-href": l.href,
            "data-precedence": l.precedence,
            href: null,
            precedence: null,
          });
          return (
            (a = (e.ownerDocument || e).createElement("style")),
            Xe(a),
            $e(a, "style", n),
            ri(a, l.precedence, e),
            (t.instance = a)
          );
        case "stylesheet":
          n = qa(l.href);
          var i = e.querySelector(Bn(n));
          if (i) return (t.state.loading |= 4), (t.instance = i), Xe(i), i;
          (a = im(l)),
            (n = At.get(n)) && Qs(a, n),
            (i = (e.ownerDocument || e).createElement("link")),
            Xe(i);
          var f = i;
          return (
            (f._p = new Promise(function (h, x) {
              (f.onload = h), (f.onerror = x);
            })),
            $e(i, "link", a),
            (t.state.loading |= 4),
            ri(i, l.precedence, e),
            (t.instance = i)
          );
        case "script":
          return (
            (i = La(l.src)),
            (n = e.querySelector(Hn(i)))
              ? ((t.instance = n), Xe(n), n)
              : ((a = l),
                (n = At.get(i)) && ((a = g({}, l)), Vs(a, n)),
                (e = e.ownerDocument || e),
                (n = e.createElement("script")),
                Xe(n),
                $e(n, "link", a),
                e.head.appendChild(n),
                (t.instance = n))
          );
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" &&
        (t.state.loading & 4) === 0 &&
        ((a = t.instance), (t.state.loading |= 4), ri(a, l.precedence, e));
    return t.instance;
  }
  function ri(e, t, l) {
    for (
      var a = l.querySelectorAll(
          'link[rel="stylesheet"][data-precedence],style[data-precedence]'
        ),
        n = a.length ? a[a.length - 1] : null,
        i = n,
        f = 0;
      f < a.length;
      f++
    ) {
      var h = a[f];
      if (h.dataset.precedence === t) i = h;
      else if (i !== n) break;
    }
    i
      ? i.parentNode.insertBefore(e, i.nextSibling)
      : ((t = l.nodeType === 9 ? l.head : l), t.insertBefore(e, t.firstChild));
  }
  function Qs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.title == null && (e.title = t.title);
  }
  function Vs(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin),
      e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy),
      e.integrity == null && (e.integrity = t.integrity);
  }
  var si = null;
  function sm(e, t, l) {
    if (si === null) {
      var a = new Map(),
        n = (si = new Map());
      n.set(l, a);
    } else (n = si), (a = n.get(l)), a || ((a = new Map()), n.set(l, a));
    if (a.has(e)) return a;
    for (
      a.set(e, null), l = l.getElementsByTagName(e), n = 0;
      n < l.length;
      n++
    ) {
      var i = l[n];
      if (
        !(
          i[$a] ||
          i[We] ||
          (e === "link" && i.getAttribute("rel") === "stylesheet")
        ) &&
        i.namespaceURI !== "http://www.w3.org/2000/svg"
      ) {
        var f = i.getAttribute(t) || "";
        f = e + f;
        var h = a.get(f);
        h ? h.push(i) : a.set(f, [i]);
      }
    }
    return a;
  }
  function cm(e, t, l) {
    (e = e.ownerDocument || e),
      e.head.insertBefore(
        l,
        t === "title" ? e.querySelector("head > title") : null
      );
  }
  function Zy(e, t, l) {
    if (l === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (
          typeof t.precedence != "string" ||
          typeof t.href != "string" ||
          t.href === ""
        )
          break;
        return !0;
      case "link":
        if (
          typeof t.rel != "string" ||
          typeof t.href != "string" ||
          t.href === "" ||
          t.onLoad ||
          t.onError
        )
          break;
        switch (t.rel) {
          case "stylesheet":
            return (
              (e = t.disabled), typeof t.precedence == "string" && e == null
            );
          default:
            return !0;
        }
      case "script":
        if (
          t.async &&
          typeof t.async != "function" &&
          typeof t.async != "symbol" &&
          !t.onLoad &&
          !t.onError &&
          t.src &&
          typeof t.src == "string"
        )
          return !0;
    }
    return !1;
  }
  function om(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  var qn = null;
  function Ky() {}
  function Jy(e, t, l) {
    if (qn === null) throw Error(s(475));
    var a = qn;
    if (
      t.type === "stylesheet" &&
      (typeof l.media != "string" || matchMedia(l.media).matches !== !1) &&
      (t.state.loading & 4) === 0
    ) {
      if (t.instance === null) {
        var n = qa(l.href),
          i = e.querySelector(Bn(n));
        if (i) {
          (e = i._p),
            e !== null &&
              typeof e == "object" &&
              typeof e.then == "function" &&
              (a.count++, (a = ci.bind(a)), e.then(a, a)),
            (t.state.loading |= 4),
            (t.instance = i),
            Xe(i);
          return;
        }
        (i = e.ownerDocument || e),
          (l = im(l)),
          (n = At.get(n)) && Qs(l, n),
          (i = i.createElement("link")),
          Xe(i);
        var f = i;
        (f._p = new Promise(function (h, x) {
          (f.onload = h), (f.onerror = x);
        })),
          $e(i, "link", l),
          (t.instance = i);
      }
      a.stylesheets === null && (a.stylesheets = new Map()),
        a.stylesheets.set(t, e),
        (e = t.state.preload) &&
          (t.state.loading & 3) === 0 &&
          (a.count++,
          (t = ci.bind(a)),
          e.addEventListener("load", t),
          e.addEventListener("error", t));
    }
  }
  function ky() {
    if (qn === null) throw Error(s(475));
    var e = qn;
    return (
      e.stylesheets && e.count === 0 && Zs(e, e.stylesheets),
      0 < e.count
        ? function (t) {
            var l = setTimeout(function () {
              if ((e.stylesheets && Zs(e, e.stylesheets), e.unsuspend)) {
                var a = e.unsuspend;
                (e.unsuspend = null), a();
              }
            }, 6e4);
            return (
              (e.unsuspend = t),
              function () {
                (e.unsuspend = null), clearTimeout(l);
              }
            );
          }
        : null
    );
  }
  function ci() {
    if ((this.count--, this.count === 0)) {
      if (this.stylesheets) Zs(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        (this.unsuspend = null), e();
      }
    }
  }
  var oi = null;
  function Zs(e, t) {
    (e.stylesheets = null),
      e.unsuspend !== null &&
        (e.count++,
        (oi = new Map()),
        t.forEach($y, e),
        (oi = null),
        ci.call(e));
  }
  function $y(e, t) {
    if (!(t.state.loading & 4)) {
      var l = oi.get(e);
      if (l) var a = l.get(null);
      else {
        (l = new Map()), oi.set(e, l);
        for (
          var n = e.querySelectorAll(
              "link[data-precedence],style[data-precedence]"
            ),
            i = 0;
          i < n.length;
          i++
        ) {
          var f = n[i];
          (f.nodeName === "LINK" || f.getAttribute("media") !== "not all") &&
            (l.set(f.dataset.precedence, f), (a = f));
        }
        a && l.set(null, a);
      }
      (n = t.instance),
        (f = n.getAttribute("data-precedence")),
        (i = l.get(f) || a),
        i === a && l.set(null, n),
        l.set(f, n),
        this.count++,
        (a = ci.bind(this)),
        n.addEventListener("load", a),
        n.addEventListener("error", a),
        i
          ? i.parentNode.insertBefore(n, i.nextSibling)
          : ((e = e.nodeType === 9 ? e.head : e),
            e.insertBefore(n, e.firstChild)),
        (t.state.loading |= 4);
    }
  }
  var Ln = {
    $$typeof: K,
    Provider: null,
    Consumer: null,
    _currentValue: ee,
    _currentValue2: ee,
    _threadCount: 0,
  };
  function Fy(e, t, l, a, n, i, f, h) {
    (this.tag = 1),
      (this.containerInfo = e),
      (this.pingCache = this.current = this.pendingChildren = null),
      (this.timeoutHandle = -1),
      (this.callbackNode =
        this.next =
        this.pendingContext =
        this.context =
        this.cancelPendingCommit =
          null),
      (this.callbackPriority = 0),
      (this.expirationTimes = Gi(-1)),
      (this.entangledLanes =
        this.shellSuspendCounter =
        this.errorRecoveryDisabledLanes =
        this.expiredLanes =
        this.warmLanes =
        this.pingedLanes =
        this.suspendedLanes =
        this.pendingLanes =
          0),
      (this.entanglements = Gi(0)),
      (this.hiddenUpdates = Gi(null)),
      (this.identifierPrefix = a),
      (this.onUncaughtError = n),
      (this.onCaughtError = i),
      (this.onRecoverableError = f),
      (this.pooledCache = null),
      (this.pooledCacheLanes = 0),
      (this.formState = h),
      (this.incompleteTransitions = new Map());
  }
  function fm(e, t, l, a, n, i, f, h, x, j, z, H) {
    return (
      (e = new Fy(e, t, l, f, h, x, j, H)),
      (t = 1),
      i === !0 && (t |= 24),
      (i = mt(3, null, null, t)),
      (e.current = i),
      (i.stateNode = e),
      (t = Rr()),
      t.refCount++,
      (e.pooledCache = t),
      t.refCount++,
      (i.memoizedState = { element: a, isDehydrated: l, cache: t }),
      Dr(i),
      e
    );
  }
  function dm(e) {
    return e ? ((e = pa), e) : pa;
  }
  function mm(e, t, l, a, n, i) {
    (n = dm(n)),
      a.context === null ? (a.context = n) : (a.pendingContext = n),
      (a = dl(t)),
      (a.payload = { element: l }),
      (i = i === void 0 ? null : i),
      i !== null && (a.callback = i),
      (l = ml(e, a, t)),
      l !== null && (vt(l, e, t), yn(l, e, t));
  }
  function hm(e, t) {
    if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
      var l = e.retryLane;
      e.retryLane = l !== 0 && l < t ? l : t;
    }
  }
  function Ks(e, t) {
    hm(e, t), (e = e.alternate) && hm(e, t);
  }
  function ym(e) {
    if (e.tag === 13) {
      var t = ya(e, 67108864);
      t !== null && vt(t, e, 67108864), Ks(e, 67108864);
    }
  }
  var fi = !0;
  function Wy(e, t, l, a) {
    var n = M.T;
    M.T = null;
    var i = Q.p;
    try {
      (Q.p = 2), Js(e, t, l, a);
    } finally {
      (Q.p = i), (M.T = n);
    }
  }
  function Py(e, t, l, a) {
    var n = M.T;
    M.T = null;
    var i = Q.p;
    try {
      (Q.p = 8), Js(e, t, l, a);
    } finally {
      (Q.p = i), (M.T = n);
    }
  }
  function Js(e, t, l, a) {
    if (fi) {
      var n = ks(a);
      if (n === null) Ms(e, t, a, di, l), gm(e, a);
      else if (ep(n, e, t, l, a)) a.stopPropagation();
      else if ((gm(e, a), t & 4 && -1 < Iy.indexOf(e))) {
        for (; n !== null; ) {
          var i = aa(n);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (((i = i.stateNode), i.current.memoizedState.isDehydrated)) {
                  var f = Ml(i.pendingLanes);
                  if (f !== 0) {
                    var h = i;
                    for (h.pendingLanes |= 2, h.entangledLanes |= 2; f; ) {
                      var x = 1 << (31 - ft(f));
                      (h.entanglements[1] |= x), (f &= ~x);
                    }
                    Lt(i), (pe & 6) === 0 && (($u = Mt() + 500), Cn(0));
                  }
                }
                break;
              case 13:
                (h = ya(i, 2)), h !== null && vt(h, i, 2), Wu(), Ks(i, 2);
            }
          if (((i = ks(a)), i === null && Ms(e, t, a, di, l), i === n)) break;
          n = i;
        }
        n !== null && a.stopPropagation();
      } else Ms(e, t, a, null, l);
    }
  }
  function ks(e) {
    return (e = Ii(e)), $s(e);
  }
  var di = null;
  function $s(e) {
    if (((di = null), (e = la(e)), e !== null)) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var l = t.tag;
        if (l === 13) {
          if (((e = p(t)), e !== null)) return e;
          e = null;
        } else if (l === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return (di = e), null;
  }
  function pm(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (qh()) {
          case Oc:
            return 2;
          case wc:
            return 8;
          case nu:
          case Lh:
            return 32;
          case Dc:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Fs = !1,
    Rl = null,
    Al = null,
    Ol = null,
    Yn = new Map(),
    Gn = new Map(),
    wl = [],
    Iy =
      "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
        " "
      );
  function gm(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Rl = null;
        break;
      case "dragenter":
      case "dragleave":
        Al = null;
        break;
      case "mouseover":
      case "mouseout":
        Ol = null;
        break;
      case "pointerover":
      case "pointerout":
        Yn.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gn.delete(t.pointerId);
    }
  }
  function Xn(e, t, l, a, n, i) {
    return e === null || e.nativeEvent !== i
      ? ((e = {
          blockedOn: t,
          domEventName: l,
          eventSystemFlags: a,
          nativeEvent: i,
          targetContainers: [n],
        }),
        t !== null && ((t = aa(t)), t !== null && ym(t)),
        e)
      : ((e.eventSystemFlags |= a),
        (t = e.targetContainers),
        n !== null && t.indexOf(n) === -1 && t.push(n),
        e);
  }
  function ep(e, t, l, a, n) {
    switch (t) {
      case "focusin":
        return (Rl = Xn(Rl, e, t, l, a, n)), !0;
      case "dragenter":
        return (Al = Xn(Al, e, t, l, a, n)), !0;
      case "mouseover":
        return (Ol = Xn(Ol, e, t, l, a, n)), !0;
      case "pointerover":
        var i = n.pointerId;
        return Yn.set(i, Xn(Yn.get(i) || null, e, t, l, a, n)), !0;
      case "gotpointercapture":
        return (
          (i = n.pointerId), Gn.set(i, Xn(Gn.get(i) || null, e, t, l, a, n)), !0
        );
    }
    return !1;
  }
  function vm(e) {
    var t = la(e.target);
    if (t !== null) {
      var l = m(t);
      if (l !== null) {
        if (((t = l.tag), t === 13)) {
          if (((t = p(l)), t !== null)) {
            (e.blockedOn = t),
              Jh(e.priority, function () {
                if (l.tag === 13) {
                  var a = gt();
                  a = Xi(a);
                  var n = ya(l, a);
                  n !== null && vt(n, l, a), Ks(l, a);
                }
              });
            return;
          }
        } else if (t === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function mi(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var l = ks(e.nativeEvent);
      if (l === null) {
        l = e.nativeEvent;
        var a = new l.constructor(l.type, l);
        (Pi = a), l.target.dispatchEvent(a), (Pi = null);
      } else return (t = aa(l)), t !== null && ym(t), (e.blockedOn = l), !1;
      t.shift();
    }
    return !0;
  }
  function xm(e, t, l) {
    mi(e) && l.delete(t);
  }
  function tp() {
    (Fs = !1),
      Rl !== null && mi(Rl) && (Rl = null),
      Al !== null && mi(Al) && (Al = null),
      Ol !== null && mi(Ol) && (Ol = null),
      Yn.forEach(xm),
      Gn.forEach(xm);
  }
  function hi(e, t) {
    e.blockedOn === t &&
      ((e.blockedOn = null),
      Fs ||
        ((Fs = !0),
        u.unstable_scheduleCallback(u.unstable_NormalPriority, tp)));
  }
  var yi = null;
  function bm(e) {
    yi !== e &&
      ((yi = e),
      u.unstable_scheduleCallback(u.unstable_NormalPriority, function () {
        yi === e && (yi = null);
        for (var t = 0; t < e.length; t += 3) {
          var l = e[t],
            a = e[t + 1],
            n = e[t + 2];
          if (typeof a != "function") {
            if ($s(a || l) === null) continue;
            break;
          }
          var i = aa(l);
          i !== null &&
            (e.splice(t, 3),
            (t -= 3),
            $r(i, { pending: !0, data: n, method: l.method, action: a }, a, n));
        }
      }));
  }
  function Qn(e) {
    function t(x) {
      return hi(x, e);
    }
    Rl !== null && hi(Rl, e),
      Al !== null && hi(Al, e),
      Ol !== null && hi(Ol, e),
      Yn.forEach(t),
      Gn.forEach(t);
    for (var l = 0; l < wl.length; l++) {
      var a = wl[l];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < wl.length && ((l = wl[0]), l.blockedOn === null); )
      vm(l), l.blockedOn === null && wl.shift();
    if (((l = (e.ownerDocument || e).$$reactFormReplay), l != null))
      for (a = 0; a < l.length; a += 3) {
        var n = l[a],
          i = l[a + 1],
          f = n[lt] || null;
        if (typeof i == "function") f || bm(l);
        else if (f) {
          var h = null;
          if (i && i.hasAttribute("formAction")) {
            if (((n = i), (f = i[lt] || null))) h = f.formAction;
            else if ($s(n) !== null) continue;
          } else h = f.action;
          typeof h == "function" ? (l[a + 1] = h) : (l.splice(a, 3), (a -= 3)),
            bm(l);
        }
      }
  }
  function Ws(e) {
    this._internalRoot = e;
  }
  (pi.prototype.render = Ws.prototype.render =
    function (e) {
      var t = this._internalRoot;
      if (t === null) throw Error(s(409));
      var l = t.current,
        a = gt();
      mm(l, a, e, t, null, null);
    }),
    (pi.prototype.unmount = Ws.prototype.unmount =
      function () {
        var e = this._internalRoot;
        if (e !== null) {
          this._internalRoot = null;
          var t = e.containerInfo;
          mm(e.current, 2, null, e, null, null), Wu(), (t[ta] = null);
        }
      });
  function pi(e) {
    this._internalRoot = e;
  }
  pi.prototype.unstable_scheduleHydration = function (e) {
    if (e) {
      var t = Uc();
      e = { blockedOn: null, target: e, priority: t };
      for (var l = 0; l < wl.length && t !== 0 && t < wl[l].priority; l++);
      wl.splice(l, 0, e), l === 0 && vm(e);
    }
  };
  var Sm = r.version;
  if (Sm !== "19.1.0") throw Error(s(527, Sm, "19.1.0"));
  Q.findDOMNode = function (e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function"
        ? Error(s(188))
        : ((e = Object.keys(e).join(",")), Error(s(268, e)));
    return (
      (e = v(t)),
      (e = e !== null ? y(e) : null),
      (e = e === null ? null : e.stateNode),
      e
    );
  };
  var lp = {
    bundleType: 0,
    version: "19.1.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.1.0",
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var gi = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!gi.isDisabled && gi.supportsFiber)
      try {
        (Ka = gi.inject(lp)), (ot = gi);
      } catch {}
  }
  return (
    (Zn.createRoot = function (e, t) {
      if (!o(e)) throw Error(s(299));
      var l = !1,
        a = "",
        n = Hf,
        i = qf,
        f = Lf,
        h = null;
      return (
        t != null &&
          (t.unstable_strictMode === !0 && (l = !0),
          t.identifierPrefix !== void 0 && (a = t.identifierPrefix),
          t.onUncaughtError !== void 0 && (n = t.onUncaughtError),
          t.onCaughtError !== void 0 && (i = t.onCaughtError),
          t.onRecoverableError !== void 0 && (f = t.onRecoverableError),
          t.unstable_transitionCallbacks !== void 0 &&
            (h = t.unstable_transitionCallbacks)),
        (t = fm(e, 1, !1, null, null, l, a, n, i, f, h, null)),
        (e[ta] = t.current),
        zs(e),
        new Ws(t)
      );
    }),
    (Zn.hydrateRoot = function (e, t, l) {
      if (!o(e)) throw Error(s(299));
      var a = !1,
        n = "",
        i = Hf,
        f = qf,
        h = Lf,
        x = null,
        j = null;
      return (
        l != null &&
          (l.unstable_strictMode === !0 && (a = !0),
          l.identifierPrefix !== void 0 && (n = l.identifierPrefix),
          l.onUncaughtError !== void 0 && (i = l.onUncaughtError),
          l.onCaughtError !== void 0 && (f = l.onCaughtError),
          l.onRecoverableError !== void 0 && (h = l.onRecoverableError),
          l.unstable_transitionCallbacks !== void 0 &&
            (x = l.unstable_transitionCallbacks),
          l.formState !== void 0 && (j = l.formState)),
        (t = fm(e, 1, !0, t, l ?? null, a, n, i, f, h, x, j)),
        (t.context = dm(null)),
        (l = t.current),
        (a = gt()),
        (a = Xi(a)),
        (n = dl(a)),
        (n.callback = null),
        ml(l, n, a),
        (l = a),
        (t.current.lanes = l),
        ka(t, l),
        Lt(t),
        (e[ta] = t.current),
        zs(e),
        new pi(t)
      );
    }),
    (Zn.version = "19.1.0"),
    Zn
  );
}
var _m;
function dp() {
  if (_m) return ec.exports;
  _m = 1;
  function u() {
    if (
      !(
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
        typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
      )
    )
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), (ec.exports = fp()), ec.exports;
}
var mp = dp();
/**
 * react-router v7.7.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ var Cm = "popstate";
function hp(u = {}) {
  function r(s, o) {
    let { pathname: m, search: p, hash: b } = s.location;
    return cc(
      "",
      { pathname: m, search: p, hash: b },
      (o.state && o.state.usr) || null,
      (o.state && o.state.key) || "default"
    );
  }
  function c(s, o) {
    return typeof o == "string" ? o : $n(o);
  }
  return pp(r, c, null, u);
}
function Oe(u, r) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(r);
}
function _t(u, r) {
  if (!u) {
    typeof console < "u" && console.warn(r);
    try {
      throw new Error(r);
    } catch {}
  }
}
function yp() {
  return Math.random().toString(36).substring(2, 10);
}
function zm(u, r) {
  return { usr: u.state, key: u.key, idx: r };
}
function cc(u, r, c = null, s) {
  return {
    pathname: typeof u == "string" ? u : u.pathname,
    search: "",
    hash: "",
    ...(typeof r == "string" ? Ya(r) : r),
    state: c,
    key: (r && r.key) || s || yp(),
  };
}
function $n({ pathname: u = "/", search: r = "", hash: c = "" }) {
  return (
    r && r !== "?" && (u += r.charAt(0) === "?" ? r : "?" + r),
    c && c !== "#" && (u += c.charAt(0) === "#" ? c : "#" + c),
    u
  );
}
function Ya(u) {
  let r = {};
  if (u) {
    let c = u.indexOf("#");
    c >= 0 && ((r.hash = u.substring(c)), (u = u.substring(0, c)));
    let s = u.indexOf("?");
    s >= 0 && ((r.search = u.substring(s)), (u = u.substring(0, s))),
      u && (r.pathname = u);
  }
  return r;
}
function pp(u, r, c, s = {}) {
  let { window: o = document.defaultView, v5Compat: m = !1 } = s,
    p = o.history,
    b = "POP",
    v = null,
    y = g();
  y == null && ((y = 0), p.replaceState({ ...p.state, idx: y }, ""));
  function g() {
    return (p.state || { idx: null }).idx;
  }
  function R() {
    b = "POP";
    let _ = g(),
      q = _ == null ? null : _ - y;
    (y = _), v && v({ action: b, location: Y.location, delta: q });
  }
  function C(_, q) {
    b = "PUSH";
    let F = cc(Y.location, _, q);
    y = g() + 1;
    let K = zm(F, y),
      ce = Y.createHref(F);
    try {
      p.pushState(K, "", ce);
    } catch (J) {
      if (J instanceof DOMException && J.name === "DataCloneError") throw J;
      o.location.assign(ce);
    }
    m && v && v({ action: b, location: Y.location, delta: 1 });
  }
  function G(_, q) {
    b = "REPLACE";
    let F = cc(Y.location, _, q);
    y = g();
    let K = zm(F, y),
      ce = Y.createHref(F);
    p.replaceState(K, "", ce),
      m && v && v({ action: b, location: Y.location, delta: 0 });
  }
  function B(_) {
    return gp(_);
  }
  let Y = {
    get action() {
      return b;
    },
    get location() {
      return u(o, p);
    },
    listen(_) {
      if (v) throw new Error("A history only accepts one active listener");
      return (
        o.addEventListener(Cm, R),
        (v = _),
        () => {
          o.removeEventListener(Cm, R), (v = null);
        }
      );
    },
    createHref(_) {
      return r(o, _);
    },
    createURL: B,
    encodeLocation(_) {
      let q = B(_);
      return { pathname: q.pathname, search: q.search, hash: q.hash };
    },
    push: C,
    replace: G,
    go(_) {
      return p.go(_);
    },
  };
  return Y;
}
function gp(u, r = !1) {
  let c = "http://localhost";
  typeof window < "u" &&
    (c =
      window.location.origin !== "null"
        ? window.location.origin
        : window.location.href),
    Oe(c, "No window.location.(origin|href) available to create URL");
  let s = typeof u == "string" ? u : $n(u);
  return (
    (s = s.replace(/ $/, "%20")),
    !r && s.startsWith("//") && (s = c + s),
    new URL(s, c)
  );
}
function Wm(u, r, c = "/") {
  return vp(u, r, c, !1);
}
function vp(u, r, c, s) {
  let o = typeof r == "string" ? Ya(r) : r,
    m = ul(o.pathname || "/", c);
  if (m == null) return null;
  let p = Pm(u);
  xp(p);
  let b = null;
  for (let v = 0; b == null && v < p.length; ++v) {
    let y = Dp(m);
    b = Op(p[v], y, s);
  }
  return b;
}
function Pm(u, r = [], c = [], s = "") {
  let o = (m, p, b) => {
    let v = {
      relativePath: b === void 0 ? m.path || "" : b,
      caseSensitive: m.caseSensitive === !0,
      childrenIndex: p,
      route: m,
    };
    v.relativePath.startsWith("/") &&
      (Oe(
        v.relativePath.startsWith(s),
        `Absolute route path "${v.relativePath}" nested under path "${s}" is not valid. An absolute child route path must start with the combined path of all its parent routes.`
      ),
      (v.relativePath = v.relativePath.slice(s.length)));
    let y = nl([s, v.relativePath]),
      g = c.concat(v);
    m.children &&
      m.children.length > 0 &&
      (Oe(
        m.index !== !0,
        `Index routes must not have child routes. Please remove all child routes from route path "${y}".`
      ),
      Pm(m.children, r, g, y)),
      !(m.path == null && !m.index) &&
        r.push({ path: y, score: Rp(y, m.index), routesMeta: g });
  };
  return (
    u.forEach((m, p) => {
      if (m.path === "" || !m.path?.includes("?")) o(m, p);
      else for (let b of Im(m.path)) o(m, p, b);
    }),
    r
  );
}
function Im(u) {
  let r = u.split("/");
  if (r.length === 0) return [];
  let [c, ...s] = r,
    o = c.endsWith("?"),
    m = c.replace(/\?$/, "");
  if (s.length === 0) return o ? [m, ""] : [m];
  let p = Im(s.join("/")),
    b = [];
  return (
    b.push(...p.map((v) => (v === "" ? m : [m, v].join("/")))),
    o && b.push(...p),
    b.map((v) => (u.startsWith("/") && v === "" ? "/" : v))
  );
}
function xp(u) {
  u.sort((r, c) =>
    r.score !== c.score
      ? c.score - r.score
      : Ap(
          r.routesMeta.map((s) => s.childrenIndex),
          c.routesMeta.map((s) => s.childrenIndex)
        )
  );
}
var bp = /^:[\w-]+$/,
  Sp = 3,
  Ep = 2,
  Np = 1,
  Tp = 10,
  jp = -2,
  Mm = (u) => u === "*";
function Rp(u, r) {
  let c = u.split("/"),
    s = c.length;
  return (
    c.some(Mm) && (s += jp),
    r && (s += Ep),
    c
      .filter((o) => !Mm(o))
      .reduce((o, m) => o + (bp.test(m) ? Sp : m === "" ? Np : Tp), s)
  );
}
function Ap(u, r) {
  return u.length === r.length && u.slice(0, -1).every((s, o) => s === r[o])
    ? u[u.length - 1] - r[r.length - 1]
    : 0;
}
function Op(u, r, c = !1) {
  let { routesMeta: s } = u,
    o = {},
    m = "/",
    p = [];
  for (let b = 0; b < s.length; ++b) {
    let v = s[b],
      y = b === s.length - 1,
      g = m === "/" ? r : r.slice(m.length) || "/",
      R = Ti(
        { path: v.relativePath, caseSensitive: v.caseSensitive, end: y },
        g
      ),
      C = v.route;
    if (
      (!R &&
        y &&
        c &&
        !s[s.length - 1].route.index &&
        (R = Ti(
          { path: v.relativePath, caseSensitive: v.caseSensitive, end: !1 },
          g
        )),
      !R)
    )
      return null;
    Object.assign(o, R.params),
      p.push({
        params: o,
        pathname: nl([m, R.pathname]),
        pathnameBase: Mp(nl([m, R.pathnameBase])),
        route: C,
      }),
      R.pathnameBase !== "/" && (m = nl([m, R.pathnameBase]));
  }
  return p;
}
function Ti(u, r) {
  typeof u == "string" && (u = { path: u, caseSensitive: !1, end: !0 });
  let [c, s] = wp(u.path, u.caseSensitive, u.end),
    o = r.match(c);
  if (!o) return null;
  let m = o[0],
    p = m.replace(/(.)\/+$/, "$1"),
    b = o.slice(1);
  return {
    params: s.reduce((y, { paramName: g, isOptional: R }, C) => {
      if (g === "*") {
        let B = b[C] || "";
        p = m.slice(0, m.length - B.length).replace(/(.)\/+$/, "$1");
      }
      const G = b[C];
      return (
        R && !G ? (y[g] = void 0) : (y[g] = (G || "").replace(/%2F/g, "/")), y
      );
    }, {}),
    pathname: m,
    pathnameBase: p,
    pattern: u,
  };
}
function wp(u, r = !1, c = !0) {
  _t(
    u === "*" || !u.endsWith("*") || u.endsWith("/*"),
    `Route path "${u}" will be treated as if it were "${u.replace(
      /\*$/,
      "/*"
    )}" because the \`*\` character must always follow a \`/\` in the pattern. To get rid of this warning, please change the route path to "${u.replace(
      /\*$/,
      "/*"
    )}".`
  );
  let s = [],
    o =
      "^" +
      u
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (p, b, v) => (
            s.push({ paramName: b, isOptional: v != null }),
            v ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    u.endsWith("*")
      ? (s.push({ paramName: "*" }),
        (o += u === "*" || u === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : c
      ? (o += "\\/*$")
      : u !== "" && u !== "/" && (o += "(?:(?=\\/|$))"),
    [new RegExp(o, r ? void 0 : "i"), s]
  );
}
function Dp(u) {
  try {
    return u
      .split("/")
      .map((r) => decodeURIComponent(r).replace(/\//g, "%2F"))
      .join("/");
  } catch (r) {
    return (
      _t(
        !1,
        `The URL path "${u}" could not be decoded because it is a malformed URL segment. This is probably due to a bad percent encoding (${r}).`
      ),
      u
    );
  }
}
function ul(u, r) {
  if (r === "/") return u;
  if (!u.toLowerCase().startsWith(r.toLowerCase())) return null;
  let c = r.endsWith("/") ? r.length - 1 : r.length,
    s = u.charAt(c);
  return s && s !== "/" ? null : u.slice(c) || "/";
}
function _p(u, r = "/") {
  let {
    pathname: c,
    search: s = "",
    hash: o = "",
  } = typeof u == "string" ? Ya(u) : u;
  return {
    pathname: c ? (c.startsWith("/") ? c : Cp(c, r)) : r,
    search: Up(s),
    hash: Bp(o),
  };
}
function Cp(u, r) {
  let c = r.replace(/\/+$/, "").split("/");
  return (
    u.split("/").forEach((o) => {
      o === ".." ? c.length > 1 && c.pop() : o !== "." && c.push(o);
    }),
    c.length > 1 ? c.join("/") : "/"
  );
}
function nc(u, r, c, s) {
  return `Cannot include a '${u}' character in a manually specified \`to.${r}\` field [${JSON.stringify(
    s
  )}].  Please separate it out to the \`to.${c}\` field. Alternatively you may provide the full path as a string in <Link to="..."> and the router will parse it for you.`;
}
function zp(u) {
  return u.filter(
    (r, c) => c === 0 || (r.route.path && r.route.path.length > 0)
  );
}
function vc(u) {
  let r = zp(u);
  return r.map((c, s) => (s === r.length - 1 ? c.pathname : c.pathnameBase));
}
function xc(u, r, c, s = !1) {
  let o;
  typeof u == "string"
    ? (o = Ya(u))
    : ((o = { ...u }),
      Oe(
        !o.pathname || !o.pathname.includes("?"),
        nc("?", "pathname", "search", o)
      ),
      Oe(
        !o.pathname || !o.pathname.includes("#"),
        nc("#", "pathname", "hash", o)
      ),
      Oe(!o.search || !o.search.includes("#"), nc("#", "search", "hash", o)));
  let m = u === "" || o.pathname === "",
    p = m ? "/" : o.pathname,
    b;
  if (p == null) b = c;
  else {
    let R = r.length - 1;
    if (!s && p.startsWith("..")) {
      let C = p.split("/");
      for (; C[0] === ".."; ) C.shift(), (R -= 1);
      o.pathname = C.join("/");
    }
    b = R >= 0 ? r[R] : "/";
  }
  let v = _p(o, b),
    y = p && p !== "/" && p.endsWith("/"),
    g = (m || p === ".") && c.endsWith("/");
  return !v.pathname.endsWith("/") && (y || g) && (v.pathname += "/"), v;
}
var nl = (u) => u.join("/").replace(/\/\/+/g, "/"),
  Mp = (u) => u.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Up = (u) => (!u || u === "?" ? "" : u.startsWith("?") ? u : "?" + u),
  Bp = (u) => (!u || u === "#" ? "" : u.startsWith("#") ? u : "#" + u);
function Hp(u) {
  return (
    u != null &&
    typeof u.status == "number" &&
    typeof u.statusText == "string" &&
    typeof u.internal == "boolean" &&
    "data" in u
  );
}
var eh = ["POST", "PUT", "PATCH", "DELETE"];
new Set(eh);
var qp = ["GET", ...eh];
new Set(qp);
var Ga = A.createContext(null);
Ga.displayName = "DataRouter";
var Ai = A.createContext(null);
Ai.displayName = "DataRouterState";
A.createContext(!1);
var th = A.createContext({ isTransitioning: !1 });
th.displayName = "ViewTransition";
var Lp = A.createContext(new Map());
Lp.displayName = "Fetchers";
var Yp = A.createContext(null);
Yp.displayName = "Await";
var Ct = A.createContext(null);
Ct.displayName = "Navigation";
var Pn = A.createContext(null);
Pn.displayName = "Location";
var Gt = A.createContext({ outlet: null, matches: [], isDataRoute: !1 });
Gt.displayName = "Route";
var bc = A.createContext(null);
bc.displayName = "RouteError";
function Gp(u, { relative: r } = {}) {
  Oe(
    Xa(),
    "useHref() may be used only in the context of a <Router> component."
  );
  let { basename: c, navigator: s } = A.useContext(Ct),
    { hash: o, pathname: m, search: p } = eu(u, { relative: r }),
    b = m;
  return (
    c !== "/" && (b = m === "/" ? c : nl([c, m])),
    s.createHref({ pathname: b, search: p, hash: o })
  );
}
function Xa() {
  return A.useContext(Pn) != null;
}
function _l() {
  return (
    Oe(
      Xa(),
      "useLocation() may be used only in the context of a <Router> component."
    ),
    A.useContext(Pn).location
  );
}
var lh =
  "You should call navigate() in a React.useEffect(), not when your component is first rendered.";
function ah(u) {
  A.useContext(Ct).static || A.useLayoutEffect(u);
}
function In() {
  let { isDataRoute: u } = A.useContext(Gt);
  return u ? eg() : Xp();
}
function Xp() {
  Oe(
    Xa(),
    "useNavigate() may be used only in the context of a <Router> component."
  );
  let u = A.useContext(Ga),
    { basename: r, navigator: c } = A.useContext(Ct),
    { matches: s } = A.useContext(Gt),
    { pathname: o } = _l(),
    m = JSON.stringify(vc(s)),
    p = A.useRef(!1);
  return (
    ah(() => {
      p.current = !0;
    }),
    A.useCallback(
      (v, y = {}) => {
        if ((_t(p.current, lh), !p.current)) return;
        if (typeof v == "number") {
          c.go(v);
          return;
        }
        let g = xc(v, JSON.parse(m), o, y.relative === "path");
        u == null &&
          r !== "/" &&
          (g.pathname = g.pathname === "/" ? r : nl([r, g.pathname])),
          (y.replace ? c.replace : c.push)(g, y.state, y);
      },
      [r, c, m, o, u]
    )
  );
}
A.createContext(null);
function eu(u, { relative: r } = {}) {
  let { matches: c } = A.useContext(Gt),
    { pathname: s } = _l(),
    o = JSON.stringify(vc(c));
  return A.useMemo(() => xc(u, JSON.parse(o), s, r === "path"), [u, o, s, r]);
}
function Qp(u, r) {
  return nh(u, r);
}
function nh(u, r, c, s) {
  Oe(
    Xa(),
    "useRoutes() may be used only in the context of a <Router> component."
  );
  let { navigator: o } = A.useContext(Ct),
    { matches: m } = A.useContext(Gt),
    p = m[m.length - 1],
    b = p ? p.params : {},
    v = p ? p.pathname : "/",
    y = p ? p.pathnameBase : "/",
    g = p && p.route;
  {
    let q = (g && g.path) || "";
    uh(
      v,
      !g || q.endsWith("*") || q.endsWith("*?"),
      `You rendered descendant <Routes> (or called \`useRoutes()\`) at "${v}" (under <Route path="${q}">) but the parent route path has no trailing "*". This means if you navigate deeper, the parent won't match anymore and therefore the child routes will never render.

Please change the parent <Route path="${q}"> to <Route path="${
        q === "/" ? "*" : `${q}/*`
      }">.`
    );
  }
  let R = _l(),
    C;
  if (r) {
    let q = typeof r == "string" ? Ya(r) : r;
    Oe(
      y === "/" || q.pathname?.startsWith(y),
      `When overriding the location using \`<Routes location>\` or \`useRoutes(routes, location)\`, the location pathname must begin with the portion of the URL pathname that was matched by all parent routes. The current pathname base is "${y}" but pathname "${q.pathname}" was given in the \`location\` prop.`
    ),
      (C = q);
  } else C = R;
  let G = C.pathname || "/",
    B = G;
  if (y !== "/") {
    let q = y.replace(/^\//, "").split("/");
    B = "/" + G.replace(/^\//, "").split("/").slice(q.length).join("/");
  }
  let Y = Wm(u, { pathname: B });
  _t(
    g || Y != null,
    `No routes matched location "${C.pathname}${C.search}${C.hash}" `
  ),
    _t(
      Y == null ||
        Y[Y.length - 1].route.element !== void 0 ||
        Y[Y.length - 1].route.Component !== void 0 ||
        Y[Y.length - 1].route.lazy !== void 0,
      `Matched leaf route at location "${C.pathname}${C.search}${C.hash}" does not have an element or Component. This means it will render an <Outlet /> with a null value by default resulting in an "empty" page.`
    );
  let _ = kp(
    Y &&
      Y.map((q) =>
        Object.assign({}, q, {
          params: Object.assign({}, b, q.params),
          pathname: nl([
            y,
            o.encodeLocation
              ? o.encodeLocation(q.pathname).pathname
              : q.pathname,
          ]),
          pathnameBase:
            q.pathnameBase === "/"
              ? y
              : nl([
                  y,
                  o.encodeLocation
                    ? o.encodeLocation(q.pathnameBase).pathname
                    : q.pathnameBase,
                ]),
        })
      ),
    m,
    c,
    s
  );
  return r && _
    ? A.createElement(
        Pn.Provider,
        {
          value: {
            location: {
              pathname: "/",
              search: "",
              hash: "",
              state: null,
              key: "default",
              ...C,
            },
            navigationType: "POP",
          },
        },
        _
      )
    : _;
}
function Vp() {
  let u = Ip(),
    r = Hp(u)
      ? `${u.status} ${u.statusText}`
      : u instanceof Error
      ? u.message
      : JSON.stringify(u),
    c = u instanceof Error ? u.stack : null,
    s = "rgba(200,200,200, 0.5)",
    o = { padding: "0.5rem", backgroundColor: s },
    m = { padding: "2px 4px", backgroundColor: s },
    p = null;
  return (
    console.error("Error handled by React Router default ErrorBoundary:", u),
    (p = A.createElement(
      A.Fragment,
      null,
      A.createElement("p", null, "💿 Hey developer 👋"),
      A.createElement(
        "p",
        null,
        "You can provide a way better UX than this when your app throws errors by providing your own ",
        A.createElement("code", { style: m }, "ErrorBoundary"),
        " or",
        " ",
        A.createElement("code", { style: m }, "errorElement"),
        " prop on your route."
      )
    )),
    A.createElement(
      A.Fragment,
      null,
      A.createElement("h2", null, "Unexpected Application Error!"),
      A.createElement("h3", { style: { fontStyle: "italic" } }, r),
      c ? A.createElement("pre", { style: o }, c) : null,
      p
    )
  );
}
var Zp = A.createElement(Vp, null),
  Kp = class extends A.Component {
    constructor(u) {
      super(u),
        (this.state = {
          location: u.location,
          revalidation: u.revalidation,
          error: u.error,
        });
    }
    static getDerivedStateFromError(u) {
      return { error: u };
    }
    static getDerivedStateFromProps(u, r) {
      return r.location !== u.location ||
        (r.revalidation !== "idle" && u.revalidation === "idle")
        ? { error: u.error, location: u.location, revalidation: u.revalidation }
        : {
            error: u.error !== void 0 ? u.error : r.error,
            location: r.location,
            revalidation: u.revalidation || r.revalidation,
          };
    }
    componentDidCatch(u, r) {
      console.error(
        "React Router caught the following error during render",
        u,
        r
      );
    }
    render() {
      return this.state.error !== void 0
        ? A.createElement(
            Gt.Provider,
            { value: this.props.routeContext },
            A.createElement(bc.Provider, {
              value: this.state.error,
              children: this.props.component,
            })
          )
        : this.props.children;
    }
  };
function Jp({ routeContext: u, match: r, children: c }) {
  let s = A.useContext(Ga);
  return (
    s &&
      s.static &&
      s.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (s.staticContext._deepestRenderedBoundaryId = r.route.id),
    A.createElement(Gt.Provider, { value: u }, c)
  );
}
function kp(u, r = [], c = null, s = null) {
  if (u == null) {
    if (!c) return null;
    if (c.errors) u = c.matches;
    else if (r.length === 0 && !c.initialized && c.matches.length > 0)
      u = c.matches;
    else return null;
  }
  let o = u,
    m = c?.errors;
  if (m != null) {
    let v = o.findIndex((y) => y.route.id && m?.[y.route.id] !== void 0);
    Oe(
      v >= 0,
      `Could not find a matching route for errors on route IDs: ${Object.keys(
        m
      ).join(",")}`
    ),
      (o = o.slice(0, Math.min(o.length, v + 1)));
  }
  let p = !1,
    b = -1;
  if (c)
    for (let v = 0; v < o.length; v++) {
      let y = o[v];
      if (
        ((y.route.HydrateFallback || y.route.hydrateFallbackElement) && (b = v),
        y.route.id)
      ) {
        let { loaderData: g, errors: R } = c,
          C =
            y.route.loader &&
            !g.hasOwnProperty(y.route.id) &&
            (!R || R[y.route.id] === void 0);
        if (y.route.lazy || C) {
          (p = !0), b >= 0 ? (o = o.slice(0, b + 1)) : (o = [o[0]]);
          break;
        }
      }
    }
  return o.reduceRight((v, y, g) => {
    let R,
      C = !1,
      G = null,
      B = null;
    c &&
      ((R = m && y.route.id ? m[y.route.id] : void 0),
      (G = y.route.errorElement || Zp),
      p &&
        (b < 0 && g === 0
          ? (uh(
              "route-fallback",
              !1,
              "No `HydrateFallback` element provided to render during initial hydration"
            ),
            (C = !0),
            (B = null))
          : b === g &&
            ((C = !0), (B = y.route.hydrateFallbackElement || null))));
    let Y = r.concat(o.slice(0, g + 1)),
      _ = () => {
        let q;
        return (
          R
            ? (q = G)
            : C
            ? (q = B)
            : y.route.Component
            ? (q = A.createElement(y.route.Component, null))
            : y.route.element
            ? (q = y.route.element)
            : (q = v),
          A.createElement(Jp, {
            match: y,
            routeContext: { outlet: v, matches: Y, isDataRoute: c != null },
            children: q,
          })
        );
      };
    return c && (y.route.ErrorBoundary || y.route.errorElement || g === 0)
      ? A.createElement(Kp, {
          location: c.location,
          revalidation: c.revalidation,
          component: G,
          error: R,
          children: _(),
          routeContext: { outlet: null, matches: Y, isDataRoute: !0 },
        })
      : _();
  }, null);
}
function Sc(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function $p(u) {
  let r = A.useContext(Ga);
  return Oe(r, Sc(u)), r;
}
function Fp(u) {
  let r = A.useContext(Ai);
  return Oe(r, Sc(u)), r;
}
function Wp(u) {
  let r = A.useContext(Gt);
  return Oe(r, Sc(u)), r;
}
function Ec(u) {
  let r = Wp(u),
    c = r.matches[r.matches.length - 1];
  return (
    Oe(
      c.route.id,
      `${u} can only be used on routes that contain a unique "id"`
    ),
    c.route.id
  );
}
function Pp() {
  return Ec("useRouteId");
}
function Ip() {
  let u = A.useContext(bc),
    r = Fp("useRouteError"),
    c = Ec("useRouteError");
  return u !== void 0 ? u : r.errors?.[c];
}
function eg() {
  let { router: u } = $p("useNavigate"),
    r = Ec("useNavigate"),
    c = A.useRef(!1);
  return (
    ah(() => {
      c.current = !0;
    }),
    A.useCallback(
      async (o, m = {}) => {
        _t(c.current, lh),
          c.current &&
            (typeof o == "number"
              ? u.navigate(o)
              : await u.navigate(o, { fromRouteId: r, ...m }));
      },
      [u, r]
    )
  );
}
var Um = {};
function uh(u, r, c) {
  !r && !Um[u] && ((Um[u] = !0), _t(!1, c));
}
A.memo(tg);
function tg({ routes: u, future: r, state: c }) {
  return nh(u, void 0, c, r);
}
function lg({ to: u, replace: r, state: c, relative: s }) {
  Oe(
    Xa(),
    "<Navigate> may be used only in the context of a <Router> component."
  );
  let { static: o } = A.useContext(Ct);
  _t(
    !o,
    "<Navigate> must not be used on the initial render in a <StaticRouter>. This is a no-op, but you should modify your code so the <Navigate> is only ever rendered in response to some user interaction or state change."
  );
  let { matches: m } = A.useContext(Gt),
    { pathname: p } = _l(),
    b = In(),
    v = xc(u, vc(m), p, s === "path"),
    y = JSON.stringify(v);
  return (
    A.useEffect(() => {
      b(JSON.parse(y), { replace: r, state: c, relative: s });
    }, [b, y, s, r, c]),
    null
  );
}
function al(u) {
  Oe(
    !1,
    "A <Route> is only ever to be used as the child of <Routes> element, never rendered directly. Please wrap your <Route> in a <Routes>."
  );
}
function ag({
  basename: u = "/",
  children: r = null,
  location: c,
  navigationType: s = "POP",
  navigator: o,
  static: m = !1,
}) {
  Oe(
    !Xa(),
    "You cannot render a <Router> inside another <Router>. You should never have more than one in your app."
  );
  let p = u.replace(/^\/*/, "/"),
    b = A.useMemo(
      () => ({ basename: p, navigator: o, static: m, future: {} }),
      [p, o, m]
    );
  typeof c == "string" && (c = Ya(c));
  let {
      pathname: v = "/",
      search: y = "",
      hash: g = "",
      state: R = null,
      key: C = "default",
    } = c,
    G = A.useMemo(() => {
      let B = ul(v, p);
      return B == null
        ? null
        : {
            location: { pathname: B, search: y, hash: g, state: R, key: C },
            navigationType: s,
          };
    }, [p, v, y, g, R, C, s]);
  return (
    _t(
      G != null,
      `<Router basename="${p}"> is not able to match the URL "${v}${y}${g}" because it does not start with the basename, so the <Router> won't render anything.`
    ),
    G == null
      ? null
      : A.createElement(
          Ct.Provider,
          { value: b },
          A.createElement(Pn.Provider, { children: r, value: G })
        )
  );
}
function ng({ children: u, location: r }) {
  return Qp(oc(u), r);
}
function oc(u, r = []) {
  let c = [];
  return (
    A.Children.forEach(u, (s, o) => {
      if (!A.isValidElement(s)) return;
      let m = [...r, o];
      if (s.type === A.Fragment) {
        c.push.apply(c, oc(s.props.children, m));
        return;
      }
      Oe(
        s.type === al,
        `[${
          typeof s.type == "string" ? s.type : s.type.name
        }] is not a <Route> component. All component children of <Routes> must be a <Route> or <React.Fragment>`
      ),
        Oe(
          !s.props.index || !s.props.children,
          "An index route cannot have child routes."
        );
      let p = {
        id: s.props.id || m.join("-"),
        caseSensitive: s.props.caseSensitive,
        element: s.props.element,
        Component: s.props.Component,
        index: s.props.index,
        path: s.props.path,
        loader: s.props.loader,
        action: s.props.action,
        hydrateFallbackElement: s.props.hydrateFallbackElement,
        HydrateFallback: s.props.HydrateFallback,
        errorElement: s.props.errorElement,
        ErrorBoundary: s.props.ErrorBoundary,
        hasErrorBoundary:
          s.props.hasErrorBoundary === !0 ||
          s.props.ErrorBoundary != null ||
          s.props.errorElement != null,
        shouldRevalidate: s.props.shouldRevalidate,
        handle: s.props.handle,
        lazy: s.props.lazy,
      };
      s.props.children && (p.children = oc(s.props.children, m)), c.push(p);
    }),
    c
  );
}
var xi = "get",
  bi = "application/x-www-form-urlencoded";
function Oi(u) {
  return u != null && typeof u.tagName == "string";
}
function ug(u) {
  return Oi(u) && u.tagName.toLowerCase() === "button";
}
function ig(u) {
  return Oi(u) && u.tagName.toLowerCase() === "form";
}
function rg(u) {
  return Oi(u) && u.tagName.toLowerCase() === "input";
}
function sg(u) {
  return !!(u.metaKey || u.altKey || u.ctrlKey || u.shiftKey);
}
function cg(u, r) {
  return u.button === 0 && (!r || r === "_self") && !sg(u);
}
var vi = null;
function og() {
  if (vi === null)
    try {
      new FormData(document.createElement("form"), 0), (vi = !1);
    } catch {
      vi = !0;
    }
  return vi;
}
var fg = new Set([
  "application/x-www-form-urlencoded",
  "multipart/form-data",
  "text/plain",
]);
function uc(u) {
  return u != null && !fg.has(u)
    ? (_t(
        !1,
        `"${u}" is not a valid \`encType\` for \`<Form>\`/\`<fetcher.Form>\` and will default to "${bi}"`
      ),
      null)
    : u;
}
function dg(u, r) {
  let c, s, o, m, p;
  if (ig(u)) {
    let b = u.getAttribute("action");
    (s = b ? ul(b, r) : null),
      (c = u.getAttribute("method") || xi),
      (o = uc(u.getAttribute("enctype")) || bi),
      (m = new FormData(u));
  } else if (ug(u) || (rg(u) && (u.type === "submit" || u.type === "image"))) {
    let b = u.form;
    if (b == null)
      throw new Error(
        'Cannot submit a <button> or <input type="submit"> without a <form>'
      );
    let v = u.getAttribute("formaction") || b.getAttribute("action");
    if (
      ((s = v ? ul(v, r) : null),
      (c = u.getAttribute("formmethod") || b.getAttribute("method") || xi),
      (o =
        uc(u.getAttribute("formenctype")) ||
        uc(b.getAttribute("enctype")) ||
        bi),
      (m = new FormData(b, u)),
      !og())
    ) {
      let { name: y, type: g, value: R } = u;
      if (g === "image") {
        let C = y ? `${y}.` : "";
        m.append(`${C}x`, "0"), m.append(`${C}y`, "0");
      } else y && m.append(y, R);
    }
  } else {
    if (Oi(u))
      throw new Error(
        'Cannot submit element that is not <form>, <button>, or <input type="submit|image">'
      );
    (c = xi), (s = null), (o = bi), (p = u);
  }
  return (
    m && o === "text/plain" && ((p = m), (m = void 0)),
    { action: s, method: c.toLowerCase(), encType: o, formData: m, body: p }
  );
}
Object.getOwnPropertyNames(Object.prototype).sort().join("\0");
function Nc(u, r) {
  if (u === !1 || u === null || typeof u > "u") throw new Error(r);
}
function mg(u, r, c) {
  let s =
    typeof u == "string"
      ? new URL(
          u,
          typeof window > "u" ? "server://singlefetch/" : window.location.origin
        )
      : u;
  return (
    s.pathname === "/"
      ? (s.pathname = `_root.${c}`)
      : r && ul(s.pathname, r) === "/"
      ? (s.pathname = `${r.replace(/\/$/, "")}/_root.${c}`)
      : (s.pathname = `${s.pathname.replace(/\/$/, "")}.${c}`),
    s
  );
}
async function hg(u, r) {
  if (u.id in r) return r[u.id];
  try {
    let c = await import(u.module);
    return (r[u.id] = c), c;
  } catch (c) {
    return (
      console.error(
        `Error loading route module \`${u.module}\`, reloading page...`
      ),
      console.error(c),
      window.__reactRouterContext && window.__reactRouterContext.isSpaMode,
      window.location.reload(),
      new Promise(() => {})
    );
  }
}
function yg(u) {
  return u == null
    ? !1
    : u.href == null
    ? u.rel === "preload" &&
      typeof u.imageSrcSet == "string" &&
      typeof u.imageSizes == "string"
    : typeof u.rel == "string" && typeof u.href == "string";
}
async function pg(u, r, c) {
  let s = await Promise.all(
    u.map(async (o) => {
      let m = r.routes[o.route.id];
      if (m) {
        let p = await hg(m, c);
        return p.links ? p.links() : [];
      }
      return [];
    })
  );
  return bg(
    s
      .flat(1)
      .filter(yg)
      .filter((o) => o.rel === "stylesheet" || o.rel === "preload")
      .map((o) =>
        o.rel === "stylesheet"
          ? { ...o, rel: "prefetch", as: "style" }
          : { ...o, rel: "prefetch" }
      )
  );
}
function Bm(u, r, c, s, o, m) {
  let p = (v, y) => (c[y] ? v.route.id !== c[y].route.id : !0),
    b = (v, y) =>
      c[y].pathname !== v.pathname ||
      (c[y].route.path?.endsWith("*") && c[y].params["*"] !== v.params["*"]);
  return m === "assets"
    ? r.filter((v, y) => p(v, y) || b(v, y))
    : m === "data"
    ? r.filter((v, y) => {
        let g = s.routes[v.route.id];
        if (!g || !g.hasLoader) return !1;
        if (p(v, y) || b(v, y)) return !0;
        if (v.route.shouldRevalidate) {
          let R = v.route.shouldRevalidate({
            currentUrl: new URL(o.pathname + o.search + o.hash, window.origin),
            currentParams: c[0]?.params || {},
            nextUrl: new URL(u, window.origin),
            nextParams: v.params,
            defaultShouldRevalidate: !0,
          });
          if (typeof R == "boolean") return R;
        }
        return !0;
      })
    : [];
}
function gg(u, r, { includeHydrateFallback: c } = {}) {
  return vg(
    u
      .map((s) => {
        let o = r.routes[s.route.id];
        if (!o) return [];
        let m = [o.module];
        return (
          o.clientActionModule && (m = m.concat(o.clientActionModule)),
          o.clientLoaderModule && (m = m.concat(o.clientLoaderModule)),
          c &&
            o.hydrateFallbackModule &&
            (m = m.concat(o.hydrateFallbackModule)),
          o.imports && (m = m.concat(o.imports)),
          m
        );
      })
      .flat(1)
  );
}
function vg(u) {
  return [...new Set(u)];
}
function xg(u) {
  let r = {},
    c = Object.keys(u).sort();
  for (let s of c) r[s] = u[s];
  return r;
}
function bg(u, r) {
  let c = new Set();
  return (
    new Set(r),
    u.reduce((s, o) => {
      let m = JSON.stringify(xg(o));
      return c.has(m) || (c.add(m), s.push({ key: m, link: o })), s;
    }, [])
  );
}
function ih() {
  let u = A.useContext(Ga);
  return (
    Nc(
      u,
      "You must render this element inside a <DataRouterContext.Provider> element"
    ),
    u
  );
}
function Sg() {
  let u = A.useContext(Ai);
  return (
    Nc(
      u,
      "You must render this element inside a <DataRouterStateContext.Provider> element"
    ),
    u
  );
}
var Tc = A.createContext(void 0);
Tc.displayName = "FrameworkContext";
function rh() {
  let u = A.useContext(Tc);
  return (
    Nc(u, "You must render this element inside a <HydratedRouter> element"), u
  );
}
function Eg(u, r) {
  let c = A.useContext(Tc),
    [s, o] = A.useState(!1),
    [m, p] = A.useState(!1),
    {
      onFocus: b,
      onBlur: v,
      onMouseEnter: y,
      onMouseLeave: g,
      onTouchStart: R,
    } = r,
    C = A.useRef(null);
  A.useEffect(() => {
    if ((u === "render" && p(!0), u === "viewport")) {
      let Y = (q) => {
          q.forEach((F) => {
            p(F.isIntersecting);
          });
        },
        _ = new IntersectionObserver(Y, { threshold: 0.5 });
      return (
        C.current && _.observe(C.current),
        () => {
          _.disconnect();
        }
      );
    }
  }, [u]),
    A.useEffect(() => {
      if (s) {
        let Y = setTimeout(() => {
          p(!0);
        }, 100);
        return () => {
          clearTimeout(Y);
        };
      }
    }, [s]);
  let G = () => {
      o(!0);
    },
    B = () => {
      o(!1), p(!1);
    };
  return c
    ? u !== "intent"
      ? [m, C, {}]
      : [
          m,
          C,
          {
            onFocus: Kn(b, G),
            onBlur: Kn(v, B),
            onMouseEnter: Kn(y, G),
            onMouseLeave: Kn(g, B),
            onTouchStart: Kn(R, G),
          },
        ]
    : [!1, C, {}];
}
function Kn(u, r) {
  return (c) => {
    u && u(c), c.defaultPrevented || r(c);
  };
}
function Ng({ page: u, ...r }) {
  let { router: c } = ih(),
    s = A.useMemo(() => Wm(c.routes, u, c.basename), [c.routes, u, c.basename]);
  return s ? A.createElement(jg, { page: u, matches: s, ...r }) : null;
}
function Tg(u) {
  let { manifest: r, routeModules: c } = rh(),
    [s, o] = A.useState([]);
  return (
    A.useEffect(() => {
      let m = !1;
      return (
        pg(u, r, c).then((p) => {
          m || o(p);
        }),
        () => {
          m = !0;
        }
      );
    }, [u, r, c]),
    s
  );
}
function jg({ page: u, matches: r, ...c }) {
  let s = _l(),
    { manifest: o, routeModules: m } = rh(),
    { basename: p } = ih(),
    { loaderData: b, matches: v } = Sg(),
    y = A.useMemo(() => Bm(u, r, v, o, s, "data"), [u, r, v, o, s]),
    g = A.useMemo(() => Bm(u, r, v, o, s, "assets"), [u, r, v, o, s]),
    R = A.useMemo(() => {
      if (u === s.pathname + s.search + s.hash) return [];
      let B = new Set(),
        Y = !1;
      if (
        (r.forEach((q) => {
          let F = o.routes[q.route.id];
          !F ||
            !F.hasLoader ||
            ((!y.some((K) => K.route.id === q.route.id) &&
              q.route.id in b &&
              m[q.route.id]?.shouldRevalidate) ||
            F.hasClientLoader
              ? (Y = !0)
              : B.add(q.route.id));
        }),
        B.size === 0)
      )
        return [];
      let _ = mg(u, p, "data");
      return (
        Y &&
          B.size > 0 &&
          _.searchParams.set(
            "_routes",
            r
              .filter((q) => B.has(q.route.id))
              .map((q) => q.route.id)
              .join(",")
          ),
        [_.pathname + _.search]
      );
    }, [p, b, s, o, y, r, u, m]),
    C = A.useMemo(() => gg(g, o), [g, o]),
    G = Tg(g);
  return A.createElement(
    A.Fragment,
    null,
    R.map((B) =>
      A.createElement("link", {
        key: B,
        rel: "prefetch",
        as: "fetch",
        href: B,
        ...c,
      })
    ),
    C.map((B) =>
      A.createElement("link", { key: B, rel: "modulepreload", href: B, ...c })
    ),
    G.map(({ key: B, link: Y }) => A.createElement("link", { key: B, ...Y }))
  );
}
function Rg(...u) {
  return (r) => {
    u.forEach((c) => {
      typeof c == "function" ? c(r) : c != null && (c.current = r);
    });
  };
}
var sh =
  typeof window < "u" &&
  typeof window.document < "u" &&
  typeof window.document.createElement < "u";
try {
  sh && (window.__reactRouterVersion = "7.7.0");
} catch {}
function Ag({ basename: u, children: r, window: c }) {
  let s = A.useRef();
  s.current == null && (s.current = hp({ window: c, v5Compat: !0 }));
  let o = s.current,
    [m, p] = A.useState({ action: o.action, location: o.location }),
    b = A.useCallback(
      (v) => {
        A.startTransition(() => p(v));
      },
      [p]
    );
  return (
    A.useLayoutEffect(() => o.listen(b), [o, b]),
    A.createElement(ag, {
      basename: u,
      children: r,
      location: m.location,
      navigationType: m.action,
      navigator: o,
    })
  );
}
var ch = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  Ue = A.forwardRef(function (
    {
      onClick: r,
      discover: c = "render",
      prefetch: s = "none",
      relative: o,
      reloadDocument: m,
      replace: p,
      state: b,
      target: v,
      to: y,
      preventScrollReset: g,
      viewTransition: R,
      ...C
    },
    G
  ) {
    let { basename: B } = A.useContext(Ct),
      Y = typeof y == "string" && ch.test(y),
      _,
      q = !1;
    if (typeof y == "string" && Y && ((_ = y), sh))
      try {
        let Se = new URL(window.location.href),
          k = y.startsWith("//") ? new URL(Se.protocol + y) : new URL(y),
          He = ul(k.pathname, B);
        k.origin === Se.origin && He != null
          ? (y = He + k.search + k.hash)
          : (q = !0);
      } catch {
        _t(
          !1,
          `<Link to="${y}"> contains an invalid URL which will probably break when clicked - please update to a valid URL path.`
        );
      }
    let F = Gp(y, { relative: o }),
      [K, ce, J] = Eg(s, C),
      he = _g(y, {
        replace: p,
        state: b,
        target: v,
        preventScrollReset: g,
        relative: o,
        viewTransition: R,
      });
    function ye(Se) {
      r && r(Se), Se.defaultPrevented || he(Se);
    }
    let je = A.createElement("a", {
      ...C,
      ...J,
      href: _ || F,
      onClick: q || m ? r : ye,
      ref: Rg(G, ce),
      target: v,
      "data-discover": !Y && c === "render" ? "true" : void 0,
    });
    return K && !Y
      ? A.createElement(A.Fragment, null, je, A.createElement(Ng, { page: F }))
      : je;
  });
Ue.displayName = "Link";
var Og = A.forwardRef(function (
  {
    "aria-current": r = "page",
    caseSensitive: c = !1,
    className: s = "",
    end: o = !1,
    style: m,
    to: p,
    viewTransition: b,
    children: v,
    ...y
  },
  g
) {
  let R = eu(p, { relative: y.relative }),
    C = _l(),
    G = A.useContext(Ai),
    { navigator: B, basename: Y } = A.useContext(Ct),
    _ = G != null && Bg(R) && b === !0,
    q = B.encodeLocation ? B.encodeLocation(R).pathname : R.pathname,
    F = C.pathname,
    K =
      G && G.navigation && G.navigation.location
        ? G.navigation.location.pathname
        : null;
  c ||
    ((F = F.toLowerCase()),
    (K = K ? K.toLowerCase() : null),
    (q = q.toLowerCase())),
    K && Y && (K = ul(K, Y) || K);
  const ce = q !== "/" && q.endsWith("/") ? q.length - 1 : q.length;
  let J = F === q || (!o && F.startsWith(q) && F.charAt(ce) === "/"),
    he =
      K != null &&
      (K === q || (!o && K.startsWith(q) && K.charAt(q.length) === "/")),
    ye = { isActive: J, isPending: he, isTransitioning: _ },
    je = J ? r : void 0,
    Se;
  typeof s == "function"
    ? (Se = s(ye))
    : (Se = [
        s,
        J ? "active" : null,
        he ? "pending" : null,
        _ ? "transitioning" : null,
      ]
        .filter(Boolean)
        .join(" "));
  let k = typeof m == "function" ? m(ye) : m;
  return A.createElement(
    Ue,
    {
      ...y,
      "aria-current": je,
      className: Se,
      ref: g,
      style: k,
      to: p,
      viewTransition: b,
    },
    typeof v == "function" ? v(ye) : v
  );
});
Og.displayName = "NavLink";
var wg = A.forwardRef(
  (
    {
      discover: u = "render",
      fetcherKey: r,
      navigate: c,
      reloadDocument: s,
      replace: o,
      state: m,
      method: p = xi,
      action: b,
      onSubmit: v,
      relative: y,
      preventScrollReset: g,
      viewTransition: R,
      ...C
    },
    G
  ) => {
    let B = Mg(),
      Y = Ug(b, { relative: y }),
      _ = p.toLowerCase() === "get" ? "get" : "post",
      q = typeof b == "string" && ch.test(b),
      F = (K) => {
        if ((v && v(K), K.defaultPrevented)) return;
        K.preventDefault();
        let ce = K.nativeEvent.submitter,
          J = ce?.getAttribute("formmethod") || p;
        B(ce || K.currentTarget, {
          fetcherKey: r,
          method: J,
          navigate: c,
          replace: o,
          state: m,
          relative: y,
          preventScrollReset: g,
          viewTransition: R,
        });
      };
    return A.createElement("form", {
      ref: G,
      method: _,
      action: Y,
      onSubmit: s ? v : F,
      ...C,
      "data-discover": !q && u === "render" ? "true" : void 0,
    });
  }
);
wg.displayName = "Form";
function Dg(u) {
  return `${u} must be used within a data router.  See https://reactrouter.com/en/main/routers/picking-a-router.`;
}
function oh(u) {
  let r = A.useContext(Ga);
  return Oe(r, Dg(u)), r;
}
function _g(
  u,
  {
    target: r,
    replace: c,
    state: s,
    preventScrollReset: o,
    relative: m,
    viewTransition: p,
  } = {}
) {
  let b = In(),
    v = _l(),
    y = eu(u, { relative: m });
  return A.useCallback(
    (g) => {
      if (cg(g, r)) {
        g.preventDefault();
        let R = c !== void 0 ? c : $n(v) === $n(y);
        b(u, {
          replace: R,
          state: s,
          preventScrollReset: o,
          relative: m,
          viewTransition: p,
        });
      }
    },
    [v, b, y, c, s, r, u, o, m, p]
  );
}
var Cg = 0,
  zg = () => `__${String(++Cg)}__`;
function Mg() {
  let { router: u } = oh("useSubmit"),
    { basename: r } = A.useContext(Ct),
    c = Pp();
  return A.useCallback(
    async (s, o = {}) => {
      let { action: m, method: p, encType: b, formData: v, body: y } = dg(s, r);
      if (o.navigate === !1) {
        let g = o.fetcherKey || zg();
        await u.fetch(g, c, o.action || m, {
          preventScrollReset: o.preventScrollReset,
          formData: v,
          body: y,
          formMethod: o.method || p,
          formEncType: o.encType || b,
          flushSync: o.flushSync,
        });
      } else
        await u.navigate(o.action || m, {
          preventScrollReset: o.preventScrollReset,
          formData: v,
          body: y,
          formMethod: o.method || p,
          formEncType: o.encType || b,
          replace: o.replace,
          state: o.state,
          fromRouteId: c,
          flushSync: o.flushSync,
          viewTransition: o.viewTransition,
        });
    },
    [u, r, c]
  );
}
function Ug(u, { relative: r } = {}) {
  let { basename: c } = A.useContext(Ct),
    s = A.useContext(Gt);
  Oe(s, "useFormAction must be used inside a RouteContext");
  let [o] = s.matches.slice(-1),
    m = { ...eu(u || ".", { relative: r }) },
    p = _l();
  if (u == null) {
    m.search = p.search;
    let b = new URLSearchParams(m.search),
      v = b.getAll("index");
    if (v.some((g) => g === "")) {
      b.delete("index"),
        v.filter((R) => R).forEach((R) => b.append("index", R));
      let g = b.toString();
      m.search = g ? `?${g}` : "";
    }
  }
  return (
    (!u || u === ".") &&
      o.route.index &&
      (m.search = m.search ? m.search.replace(/^\?/, "?index&") : "?index"),
    c !== "/" && (m.pathname = m.pathname === "/" ? c : nl([c, m.pathname])),
    $n(m)
  );
}
function Bg(u, r = {}) {
  let c = A.useContext(th);
  Oe(
    c != null,
    "`useViewTransitionState` must be used within `react-router-dom`'s `RouterProvider`.  Did you accidentally import `RouterProvider` from `react-router`?"
  );
  let { basename: s } = oh("useViewTransitionState"),
    o = eu(u, { relative: r.relative });
  if (!c.isTransitioning) return !1;
  let m = ul(c.currentLocation.pathname, s) || c.currentLocation.pathname,
    p = ul(c.nextLocation.pathname, s) || c.nextLocation.pathname;
  return Ti(o.pathname, p) != null || Ti(o.pathname, m) != null;
}
function fh(u, r) {
  return function () {
    return u.apply(r, arguments);
  };
}
const { toString: Hg } = Object.prototype,
  { getPrototypeOf: jc } = Object,
  { iterator: wi, toStringTag: dh } = Symbol,
  Di = ((u) => (r) => {
    const c = Hg.call(r);
    return u[c] || (u[c] = c.slice(8, -1).toLowerCase());
  })(Object.create(null)),
  zt = (u) => ((u = u.toLowerCase()), (r) => Di(r) === u),
  _i = (u) => (r) => typeof r === u,
  { isArray: Qa } = Array,
  Fn = _i("undefined");
function qg(u) {
  return (
    u !== null &&
    !Fn(u) &&
    u.constructor !== null &&
    !Fn(u.constructor) &&
    rt(u.constructor.isBuffer) &&
    u.constructor.isBuffer(u)
  );
}
const mh = zt("ArrayBuffer");
function Lg(u) {
  let r;
  return (
    typeof ArrayBuffer < "u" && ArrayBuffer.isView
      ? (r = ArrayBuffer.isView(u))
      : (r = u && u.buffer && mh(u.buffer)),
    r
  );
}
const Yg = _i("string"),
  rt = _i("function"),
  hh = _i("number"),
  Ci = (u) => u !== null && typeof u == "object",
  Gg = (u) => u === !0 || u === !1,
  Si = (u) => {
    if (Di(u) !== "object") return !1;
    const r = jc(u);
    return (
      (r === null ||
        r === Object.prototype ||
        Object.getPrototypeOf(r) === null) &&
      !(dh in u) &&
      !(wi in u)
    );
  },
  Xg = zt("Date"),
  Qg = zt("File"),
  Vg = zt("Blob"),
  Zg = zt("FileList"),
  Kg = (u) => Ci(u) && rt(u.pipe),
  Jg = (u) => {
    let r;
    return (
      u &&
      ((typeof FormData == "function" && u instanceof FormData) ||
        (rt(u.append) &&
          ((r = Di(u)) === "formdata" ||
            (r === "object" &&
              rt(u.toString) &&
              u.toString() === "[object FormData]"))))
    );
  },
  kg = zt("URLSearchParams"),
  [$g, Fg, Wg, Pg] = ["ReadableStream", "Request", "Response", "Headers"].map(
    zt
  ),
  Ig = (u) =>
    u.trim ? u.trim() : u.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "");
function tu(u, r, { allOwnKeys: c = !1 } = {}) {
  if (u === null || typeof u > "u") return;
  let s, o;
  if ((typeof u != "object" && (u = [u]), Qa(u)))
    for (s = 0, o = u.length; s < o; s++) r.call(null, u[s], s, u);
  else {
    const m = c ? Object.getOwnPropertyNames(u) : Object.keys(u),
      p = m.length;
    let b;
    for (s = 0; s < p; s++) (b = m[s]), r.call(null, u[b], b, u);
  }
}
function yh(u, r) {
  r = r.toLowerCase();
  const c = Object.keys(u);
  let s = c.length,
    o;
  for (; s-- > 0; ) if (((o = c[s]), r === o.toLowerCase())) return o;
  return null;
}
const Pl =
    typeof globalThis < "u"
      ? globalThis
      : typeof self < "u"
      ? self
      : typeof window < "u"
      ? window
      : global,
  ph = (u) => !Fn(u) && u !== Pl;
function fc() {
  const { caseless: u } = (ph(this) && this) || {},
    r = {},
    c = (s, o) => {
      const m = (u && yh(r, o)) || o;
      Si(r[m]) && Si(s)
        ? (r[m] = fc(r[m], s))
        : Si(s)
        ? (r[m] = fc({}, s))
        : Qa(s)
        ? (r[m] = s.slice())
        : (r[m] = s);
    };
  for (let s = 0, o = arguments.length; s < o; s++)
    arguments[s] && tu(arguments[s], c);
  return r;
}
const ev = (u, r, c, { allOwnKeys: s } = {}) => (
    tu(
      r,
      (o, m) => {
        c && rt(o) ? (u[m] = fh(o, c)) : (u[m] = o);
      },
      { allOwnKeys: s }
    ),
    u
  ),
  tv = (u) => (u.charCodeAt(0) === 65279 && (u = u.slice(1)), u),
  lv = (u, r, c, s) => {
    (u.prototype = Object.create(r.prototype, s)),
      (u.prototype.constructor = u),
      Object.defineProperty(u, "super", { value: r.prototype }),
      c && Object.assign(u.prototype, c);
  },
  av = (u, r, c, s) => {
    let o, m, p;
    const b = {};
    if (((r = r || {}), u == null)) return r;
    do {
      for (o = Object.getOwnPropertyNames(u), m = o.length; m-- > 0; )
        (p = o[m]), (!s || s(p, u, r)) && !b[p] && ((r[p] = u[p]), (b[p] = !0));
      u = c !== !1 && jc(u);
    } while (u && (!c || c(u, r)) && u !== Object.prototype);
    return r;
  },
  nv = (u, r, c) => {
    (u = String(u)),
      (c === void 0 || c > u.length) && (c = u.length),
      (c -= r.length);
    const s = u.indexOf(r, c);
    return s !== -1 && s === c;
  },
  uv = (u) => {
    if (!u) return null;
    if (Qa(u)) return u;
    let r = u.length;
    if (!hh(r)) return null;
    const c = new Array(r);
    for (; r-- > 0; ) c[r] = u[r];
    return c;
  },
  iv = (
    (u) => (r) =>
      u && r instanceof u
  )(typeof Uint8Array < "u" && jc(Uint8Array)),
  rv = (u, r) => {
    const s = (u && u[wi]).call(u);
    let o;
    for (; (o = s.next()) && !o.done; ) {
      const m = o.value;
      r.call(u, m[0], m[1]);
    }
  },
  sv = (u, r) => {
    let c;
    const s = [];
    for (; (c = u.exec(r)) !== null; ) s.push(c);
    return s;
  },
  cv = zt("HTMLFormElement"),
  ov = (u) =>
    u.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g, function (c, s, o) {
      return s.toUpperCase() + o;
    }),
  Hm = (
    ({ hasOwnProperty: u }) =>
    (r, c) =>
      u.call(r, c)
  )(Object.prototype),
  fv = zt("RegExp"),
  gh = (u, r) => {
    const c = Object.getOwnPropertyDescriptors(u),
      s = {};
    tu(c, (o, m) => {
      let p;
      (p = r(o, m, u)) !== !1 && (s[m] = p || o);
    }),
      Object.defineProperties(u, s);
  },
  dv = (u) => {
    gh(u, (r, c) => {
      if (rt(u) && ["arguments", "caller", "callee"].indexOf(c) !== -1)
        return !1;
      const s = u[c];
      if (rt(s)) {
        if (((r.enumerable = !1), "writable" in r)) {
          r.writable = !1;
          return;
        }
        r.set ||
          (r.set = () => {
            throw Error("Can not rewrite read-only method '" + c + "'");
          });
      }
    });
  },
  mv = (u, r) => {
    const c = {},
      s = (o) => {
        o.forEach((m) => {
          c[m] = !0;
        });
      };
    return Qa(u) ? s(u) : s(String(u).split(r)), c;
  },
  hv = () => {},
  yv = (u, r) => (u != null && Number.isFinite((u = +u)) ? u : r);
function pv(u) {
  return !!(u && rt(u.append) && u[dh] === "FormData" && u[wi]);
}
const gv = (u) => {
    const r = new Array(10),
      c = (s, o) => {
        if (Ci(s)) {
          if (r.indexOf(s) >= 0) return;
          if (!("toJSON" in s)) {
            r[o] = s;
            const m = Qa(s) ? [] : {};
            return (
              tu(s, (p, b) => {
                const v = c(p, o + 1);
                !Fn(v) && (m[b] = v);
              }),
              (r[o] = void 0),
              m
            );
          }
        }
        return s;
      };
    return c(u, 0);
  },
  vv = zt("AsyncFunction"),
  xv = (u) => u && (Ci(u) || rt(u)) && rt(u.then) && rt(u.catch),
  vh = ((u, r) =>
    u
      ? setImmediate
      : r
      ? ((c, s) => (
          Pl.addEventListener(
            "message",
            ({ source: o, data: m }) => {
              o === Pl && m === c && s.length && s.shift()();
            },
            !1
          ),
          (o) => {
            s.push(o), Pl.postMessage(c, "*");
          }
        ))(`axios@${Math.random()}`, [])
      : (c) => setTimeout(c))(
    typeof setImmediate == "function",
    rt(Pl.postMessage)
  ),
  bv =
    typeof queueMicrotask < "u"
      ? queueMicrotask.bind(Pl)
      : (typeof process < "u" && process.nextTick) || vh,
  Sv = (u) => u != null && rt(u[wi]),
  D = {
    isArray: Qa,
    isArrayBuffer: mh,
    isBuffer: qg,
    isFormData: Jg,
    isArrayBufferView: Lg,
    isString: Yg,
    isNumber: hh,
    isBoolean: Gg,
    isObject: Ci,
    isPlainObject: Si,
    isReadableStream: $g,
    isRequest: Fg,
    isResponse: Wg,
    isHeaders: Pg,
    isUndefined: Fn,
    isDate: Xg,
    isFile: Qg,
    isBlob: Vg,
    isRegExp: fv,
    isFunction: rt,
    isStream: Kg,
    isURLSearchParams: kg,
    isTypedArray: iv,
    isFileList: Zg,
    forEach: tu,
    merge: fc,
    extend: ev,
    trim: Ig,
    stripBOM: tv,
    inherits: lv,
    toFlatObject: av,
    kindOf: Di,
    kindOfTest: zt,
    endsWith: nv,
    toArray: uv,
    forEachEntry: rv,
    matchAll: sv,
    isHTMLForm: cv,
    hasOwnProperty: Hm,
    hasOwnProp: Hm,
    reduceDescriptors: gh,
    freezeMethods: dv,
    toObjectSet: mv,
    toCamelCase: ov,
    noop: hv,
    toFiniteNumber: yv,
    findKey: yh,
    global: Pl,
    isContextDefined: ph,
    isSpecCompliantForm: pv,
    toJSONObject: gv,
    isAsyncFn: vv,
    isThenable: xv,
    setImmediate: vh,
    asap: bv,
    isIterable: Sv,
  };
function ae(u, r, c, s, o) {
  Error.call(this),
    Error.captureStackTrace
      ? Error.captureStackTrace(this, this.constructor)
      : (this.stack = new Error().stack),
    (this.message = u),
    (this.name = "AxiosError"),
    r && (this.code = r),
    c && (this.config = c),
    s && (this.request = s),
    o && ((this.response = o), (this.status = o.status ? o.status : null));
}
D.inherits(ae, Error, {
  toJSON: function () {
    return {
      message: this.message,
      name: this.name,
      description: this.description,
      number: this.number,
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      config: D.toJSONObject(this.config),
      code: this.code,
      status: this.status,
    };
  },
});
const xh = ae.prototype,
  bh = {};
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
  "ERR_INVALID_URL",
].forEach((u) => {
  bh[u] = { value: u };
});
Object.defineProperties(ae, bh);
Object.defineProperty(xh, "isAxiosError", { value: !0 });
ae.from = (u, r, c, s, o, m) => {
  const p = Object.create(xh);
  return (
    D.toFlatObject(
      u,
      p,
      function (v) {
        return v !== Error.prototype;
      },
      (b) => b !== "isAxiosError"
    ),
    ae.call(p, u.message, r, c, s, o),
    (p.cause = u),
    (p.name = u.name),
    m && Object.assign(p, m),
    p
  );
};
const Ev = null;
function dc(u) {
  return D.isPlainObject(u) || D.isArray(u);
}
function Sh(u) {
  return D.endsWith(u, "[]") ? u.slice(0, -2) : u;
}
function qm(u, r, c) {
  return u
    ? u
        .concat(r)
        .map(function (o, m) {
          return (o = Sh(o)), !c && m ? "[" + o + "]" : o;
        })
        .join(c ? "." : "")
    : r;
}
function Nv(u) {
  return D.isArray(u) && !u.some(dc);
}
const Tv = D.toFlatObject(D, {}, null, function (r) {
  return /^is[A-Z]/.test(r);
});
function zi(u, r, c) {
  if (!D.isObject(u)) throw new TypeError("target must be an object");
  (r = r || new FormData()),
    (c = D.toFlatObject(
      c,
      { metaTokens: !0, dots: !1, indexes: !1 },
      !1,
      function (Y, _) {
        return !D.isUndefined(_[Y]);
      }
    ));
  const s = c.metaTokens,
    o = c.visitor || g,
    m = c.dots,
    p = c.indexes,
    v = (c.Blob || (typeof Blob < "u" && Blob)) && D.isSpecCompliantForm(r);
  if (!D.isFunction(o)) throw new TypeError("visitor must be a function");
  function y(B) {
    if (B === null) return "";
    if (D.isDate(B)) return B.toISOString();
    if (D.isBoolean(B)) return B.toString();
    if (!v && D.isBlob(B))
      throw new ae("Blob is not supported. Use a Buffer instead.");
    return D.isArrayBuffer(B) || D.isTypedArray(B)
      ? v && typeof Blob == "function"
        ? new Blob([B])
        : Buffer.from(B)
      : B;
  }
  function g(B, Y, _) {
    let q = B;
    if (B && !_ && typeof B == "object") {
      if (D.endsWith(Y, "{}"))
        (Y = s ? Y : Y.slice(0, -2)), (B = JSON.stringify(B));
      else if (
        (D.isArray(B) && Nv(B)) ||
        ((D.isFileList(B) || D.endsWith(Y, "[]")) && (q = D.toArray(B)))
      )
        return (
          (Y = Sh(Y)),
          q.forEach(function (K, ce) {
            !(D.isUndefined(K) || K === null) &&
              r.append(
                p === !0 ? qm([Y], ce, m) : p === null ? Y : Y + "[]",
                y(K)
              );
          }),
          !1
        );
    }
    return dc(B) ? !0 : (r.append(qm(_, Y, m), y(B)), !1);
  }
  const R = [],
    C = Object.assign(Tv, {
      defaultVisitor: g,
      convertValue: y,
      isVisitable: dc,
    });
  function G(B, Y) {
    if (!D.isUndefined(B)) {
      if (R.indexOf(B) !== -1)
        throw Error("Circular reference detected in " + Y.join("."));
      R.push(B),
        D.forEach(B, function (q, F) {
          (!(D.isUndefined(q) || q === null) &&
            o.call(r, q, D.isString(F) ? F.trim() : F, Y, C)) === !0 &&
            G(q, Y ? Y.concat(F) : [F]);
        }),
        R.pop();
    }
  }
  if (!D.isObject(u)) throw new TypeError("data must be an object");
  return G(u), r;
}
function Lm(u) {
  const r = {
    "!": "%21",
    "'": "%27",
    "(": "%28",
    ")": "%29",
    "~": "%7E",
    "%20": "+",
    "%00": "\0",
  };
  return encodeURIComponent(u).replace(/[!'()~]|%20|%00/g, function (s) {
    return r[s];
  });
}
function Rc(u, r) {
  (this._pairs = []), u && zi(u, this, r);
}
const Eh = Rc.prototype;
Eh.append = function (r, c) {
  this._pairs.push([r, c]);
};
Eh.toString = function (r) {
  const c = r
    ? function (s) {
        return r.call(this, s, Lm);
      }
    : Lm;
  return this._pairs
    .map(function (o) {
      return c(o[0]) + "=" + c(o[1]);
    }, "")
    .join("&");
};
function jv(u) {
  return encodeURIComponent(u)
    .replace(/%3A/gi, ":")
    .replace(/%24/g, "$")
    .replace(/%2C/gi, ",")
    .replace(/%20/g, "+")
    .replace(/%5B/gi, "[")
    .replace(/%5D/gi, "]");
}
function Nh(u, r, c) {
  if (!r) return u;
  const s = (c && c.encode) || jv;
  D.isFunction(c) && (c = { serialize: c });
  const o = c && c.serialize;
  let m;
  if (
    (o
      ? (m = o(r, c))
      : (m = D.isURLSearchParams(r) ? r.toString() : new Rc(r, c).toString(s)),
    m)
  ) {
    const p = u.indexOf("#");
    p !== -1 && (u = u.slice(0, p)),
      (u += (u.indexOf("?") === -1 ? "?" : "&") + m);
  }
  return u;
}
class Ym {
  constructor() {
    this.handlers = [];
  }
  use(r, c, s) {
    return (
      this.handlers.push({
        fulfilled: r,
        rejected: c,
        synchronous: s ? s.synchronous : !1,
        runWhen: s ? s.runWhen : null,
      }),
      this.handlers.length - 1
    );
  }
  eject(r) {
    this.handlers[r] && (this.handlers[r] = null);
  }
  clear() {
    this.handlers && (this.handlers = []);
  }
  forEach(r) {
    D.forEach(this.handlers, function (s) {
      s !== null && r(s);
    });
  }
}
const Th = {
    silentJSONParsing: !0,
    forcedJSONParsing: !0,
    clarifyTimeoutError: !1,
  },
  Rv = typeof URLSearchParams < "u" ? URLSearchParams : Rc,
  Av = typeof FormData < "u" ? FormData : null,
  Ov = typeof Blob < "u" ? Blob : null,
  wv = {
    isBrowser: !0,
    classes: { URLSearchParams: Rv, FormData: Av, Blob: Ov },
    protocols: ["http", "https", "file", "blob", "url", "data"],
  },
  Ac = typeof window < "u" && typeof document < "u",
  mc = (typeof navigator == "object" && navigator) || void 0,
  Dv =
    Ac &&
    (!mc || ["ReactNative", "NativeScript", "NS"].indexOf(mc.product) < 0),
  _v =
    typeof WorkerGlobalScope < "u" &&
    self instanceof WorkerGlobalScope &&
    typeof self.importScripts == "function",
  Cv = (Ac && window.location.href) || "http://localhost",
  zv = Object.freeze(
    Object.defineProperty(
      {
        __proto__: null,
        hasBrowserEnv: Ac,
        hasStandardBrowserEnv: Dv,
        hasStandardBrowserWebWorkerEnv: _v,
        navigator: mc,
        origin: Cv,
      },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  et = { ...zv, ...wv };
function Mv(u, r) {
  return zi(
    u,
    new et.classes.URLSearchParams(),
    Object.assign(
      {
        visitor: function (c, s, o, m) {
          return et.isNode && D.isBuffer(c)
            ? (this.append(s, c.toString("base64")), !1)
            : m.defaultVisitor.apply(this, arguments);
        },
      },
      r
    )
  );
}
function Uv(u) {
  return D.matchAll(/\w+|\[(\w*)]/g, u).map((r) =>
    r[0] === "[]" ? "" : r[1] || r[0]
  );
}
function Bv(u) {
  const r = {},
    c = Object.keys(u);
  let s;
  const o = c.length;
  let m;
  for (s = 0; s < o; s++) (m = c[s]), (r[m] = u[m]);
  return r;
}
function jh(u) {
  function r(c, s, o, m) {
    let p = c[m++];
    if (p === "__proto__") return !0;
    const b = Number.isFinite(+p),
      v = m >= c.length;
    return (
      (p = !p && D.isArray(o) ? o.length : p),
      v
        ? (D.hasOwnProp(o, p) ? (o[p] = [o[p], s]) : (o[p] = s), !b)
        : ((!o[p] || !D.isObject(o[p])) && (o[p] = []),
          r(c, s, o[p], m) && D.isArray(o[p]) && (o[p] = Bv(o[p])),
          !b)
    );
  }
  if (D.isFormData(u) && D.isFunction(u.entries)) {
    const c = {};
    return (
      D.forEachEntry(u, (s, o) => {
        r(Uv(s), o, c, 0);
      }),
      c
    );
  }
  return null;
}
function Hv(u, r, c) {
  if (D.isString(u))
    try {
      return (r || JSON.parse)(u), D.trim(u);
    } catch (s) {
      if (s.name !== "SyntaxError") throw s;
    }
  return (c || JSON.stringify)(u);
}
const lu = {
  transitional: Th,
  adapter: ["xhr", "http", "fetch"],
  transformRequest: [
    function (r, c) {
      const s = c.getContentType() || "",
        o = s.indexOf("application/json") > -1,
        m = D.isObject(r);
      if ((m && D.isHTMLForm(r) && (r = new FormData(r)), D.isFormData(r)))
        return o ? JSON.stringify(jh(r)) : r;
      if (
        D.isArrayBuffer(r) ||
        D.isBuffer(r) ||
        D.isStream(r) ||
        D.isFile(r) ||
        D.isBlob(r) ||
        D.isReadableStream(r)
      )
        return r;
      if (D.isArrayBufferView(r)) return r.buffer;
      if (D.isURLSearchParams(r))
        return (
          c.setContentType(
            "application/x-www-form-urlencoded;charset=utf-8",
            !1
          ),
          r.toString()
        );
      let b;
      if (m) {
        if (s.indexOf("application/x-www-form-urlencoded") > -1)
          return Mv(r, this.formSerializer).toString();
        if ((b = D.isFileList(r)) || s.indexOf("multipart/form-data") > -1) {
          const v = this.env && this.env.FormData;
          return zi(
            b ? { "files[]": r } : r,
            v && new v(),
            this.formSerializer
          );
        }
      }
      return m || o ? (c.setContentType("application/json", !1), Hv(r)) : r;
    },
  ],
  transformResponse: [
    function (r) {
      const c = this.transitional || lu.transitional,
        s = c && c.forcedJSONParsing,
        o = this.responseType === "json";
      if (D.isResponse(r) || D.isReadableStream(r)) return r;
      if (r && D.isString(r) && ((s && !this.responseType) || o)) {
        const p = !(c && c.silentJSONParsing) && o;
        try {
          return JSON.parse(r);
        } catch (b) {
          if (p)
            throw b.name === "SyntaxError"
              ? ae.from(b, ae.ERR_BAD_RESPONSE, this, null, this.response)
              : b;
        }
      }
      return r;
    },
  ],
  timeout: 0,
  xsrfCookieName: "XSRF-TOKEN",
  xsrfHeaderName: "X-XSRF-TOKEN",
  maxContentLength: -1,
  maxBodyLength: -1,
  env: { FormData: et.classes.FormData, Blob: et.classes.Blob },
  validateStatus: function (r) {
    return r >= 200 && r < 300;
  },
  headers: {
    common: {
      Accept: "application/json, text/plain, */*",
      "Content-Type": void 0,
    },
  },
};
D.forEach(["delete", "get", "head", "post", "put", "patch"], (u) => {
  lu.headers[u] = {};
});
const qv = D.toObjectSet([
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
    "user-agent",
  ]),
  Lv = (u) => {
    const r = {};
    let c, s, o;
    return (
      u &&
        u
          .split(
            `
`
          )
          .forEach(function (p) {
            (o = p.indexOf(":")),
              (c = p.substring(0, o).trim().toLowerCase()),
              (s = p.substring(o + 1).trim()),
              !(!c || (r[c] && qv[c])) &&
                (c === "set-cookie"
                  ? r[c]
                    ? r[c].push(s)
                    : (r[c] = [s])
                  : (r[c] = r[c] ? r[c] + ", " + s : s));
          }),
      r
    );
  },
  Gm = Symbol("internals");
function Jn(u) {
  return u && String(u).trim().toLowerCase();
}
function Ei(u) {
  return u === !1 || u == null ? u : D.isArray(u) ? u.map(Ei) : String(u);
}
function Yv(u) {
  const r = Object.create(null),
    c = /([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;
  let s;
  for (; (s = c.exec(u)); ) r[s[1]] = s[2];
  return r;
}
const Gv = (u) => /^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(u.trim());
function ic(u, r, c, s, o) {
  if (D.isFunction(s)) return s.call(this, r, c);
  if ((o && (r = c), !!D.isString(r))) {
    if (D.isString(s)) return r.indexOf(s) !== -1;
    if (D.isRegExp(s)) return s.test(r);
  }
}
function Xv(u) {
  return u
    .trim()
    .toLowerCase()
    .replace(/([a-z\d])(\w*)/g, (r, c, s) => c.toUpperCase() + s);
}
function Qv(u, r) {
  const c = D.toCamelCase(" " + r);
  ["get", "set", "has"].forEach((s) => {
    Object.defineProperty(u, s + c, {
      value: function (o, m, p) {
        return this[s].call(this, r, o, m, p);
      },
      configurable: !0,
    });
  });
}
let st = class {
  constructor(r) {
    r && this.set(r);
  }
  set(r, c, s) {
    const o = this;
    function m(b, v, y) {
      const g = Jn(v);
      if (!g) throw new Error("header name must be a non-empty string");
      const R = D.findKey(o, g);
      (!R || o[R] === void 0 || y === !0 || (y === void 0 && o[R] !== !1)) &&
        (o[R || v] = Ei(b));
    }
    const p = (b, v) => D.forEach(b, (y, g) => m(y, g, v));
    if (D.isPlainObject(r) || r instanceof this.constructor) p(r, c);
    else if (D.isString(r) && (r = r.trim()) && !Gv(r)) p(Lv(r), c);
    else if (D.isObject(r) && D.isIterable(r)) {
      let b = {},
        v,
        y;
      for (const g of r) {
        if (!D.isArray(g))
          throw TypeError("Object iterator must return a key-value pair");
        b[(y = g[0])] = (v = b[y])
          ? D.isArray(v)
            ? [...v, g[1]]
            : [v, g[1]]
          : g[1];
      }
      p(b, c);
    } else r != null && m(c, r, s);
    return this;
  }
  get(r, c) {
    if (((r = Jn(r)), r)) {
      const s = D.findKey(this, r);
      if (s) {
        const o = this[s];
        if (!c) return o;
        if (c === !0) return Yv(o);
        if (D.isFunction(c)) return c.call(this, o, s);
        if (D.isRegExp(c)) return c.exec(o);
        throw new TypeError("parser must be boolean|regexp|function");
      }
    }
  }
  has(r, c) {
    if (((r = Jn(r)), r)) {
      const s = D.findKey(this, r);
      return !!(s && this[s] !== void 0 && (!c || ic(this, this[s], s, c)));
    }
    return !1;
  }
  delete(r, c) {
    const s = this;
    let o = !1;
    function m(p) {
      if (((p = Jn(p)), p)) {
        const b = D.findKey(s, p);
        b && (!c || ic(s, s[b], b, c)) && (delete s[b], (o = !0));
      }
    }
    return D.isArray(r) ? r.forEach(m) : m(r), o;
  }
  clear(r) {
    const c = Object.keys(this);
    let s = c.length,
      o = !1;
    for (; s--; ) {
      const m = c[s];
      (!r || ic(this, this[m], m, r, !0)) && (delete this[m], (o = !0));
    }
    return o;
  }
  normalize(r) {
    const c = this,
      s = {};
    return (
      D.forEach(this, (o, m) => {
        const p = D.findKey(s, m);
        if (p) {
          (c[p] = Ei(o)), delete c[m];
          return;
        }
        const b = r ? Xv(m) : String(m).trim();
        b !== m && delete c[m], (c[b] = Ei(o)), (s[b] = !0);
      }),
      this
    );
  }
  concat(...r) {
    return this.constructor.concat(this, ...r);
  }
  toJSON(r) {
    const c = Object.create(null);
    return (
      D.forEach(this, (s, o) => {
        s != null && s !== !1 && (c[o] = r && D.isArray(s) ? s.join(", ") : s);
      }),
      c
    );
  }
  [Symbol.iterator]() {
    return Object.entries(this.toJSON())[Symbol.iterator]();
  }
  toString() {
    return Object.entries(this.toJSON()).map(([r, c]) => r + ": " + c).join(`
`);
  }
  getSetCookie() {
    return this.get("set-cookie") || [];
  }
  get [Symbol.toStringTag]() {
    return "AxiosHeaders";
  }
  static from(r) {
    return r instanceof this ? r : new this(r);
  }
  static concat(r, ...c) {
    const s = new this(r);
    return c.forEach((o) => s.set(o)), s;
  }
  static accessor(r) {
    const s = (this[Gm] = this[Gm] = { accessors: {} }).accessors,
      o = this.prototype;
    function m(p) {
      const b = Jn(p);
      s[b] || (Qv(o, p), (s[b] = !0));
    }
    return D.isArray(r) ? r.forEach(m) : m(r), this;
  }
};
st.accessor([
  "Content-Type",
  "Content-Length",
  "Accept",
  "Accept-Encoding",
  "User-Agent",
  "Authorization",
]);
D.reduceDescriptors(st.prototype, ({ value: u }, r) => {
  let c = r[0].toUpperCase() + r.slice(1);
  return {
    get: () => u,
    set(s) {
      this[c] = s;
    },
  };
});
D.freezeMethods(st);
function rc(u, r) {
  const c = this || lu,
    s = r || c,
    o = st.from(s.headers);
  let m = s.data;
  return (
    D.forEach(u, function (b) {
      m = b.call(c, m, o.normalize(), r ? r.status : void 0);
    }),
    o.normalize(),
    m
  );
}
function Rh(u) {
  return !!(u && u.__CANCEL__);
}
function Va(u, r, c) {
  ae.call(this, u ?? "canceled", ae.ERR_CANCELED, r, c),
    (this.name = "CanceledError");
}
D.inherits(Va, ae, { __CANCEL__: !0 });
function Ah(u, r, c) {
  const s = c.config.validateStatus;
  !c.status || !s || s(c.status)
    ? u(c)
    : r(
        new ae(
          "Request failed with status code " + c.status,
          [ae.ERR_BAD_REQUEST, ae.ERR_BAD_RESPONSE][
            Math.floor(c.status / 100) - 4
          ],
          c.config,
          c.request,
          c
        )
      );
}
function Vv(u) {
  const r = /^([-+\w]{1,25})(:?\/\/|:)/.exec(u);
  return (r && r[1]) || "";
}
function Zv(u, r) {
  u = u || 10;
  const c = new Array(u),
    s = new Array(u);
  let o = 0,
    m = 0,
    p;
  return (
    (r = r !== void 0 ? r : 1e3),
    function (v) {
      const y = Date.now(),
        g = s[m];
      p || (p = y), (c[o] = v), (s[o] = y);
      let R = m,
        C = 0;
      for (; R !== o; ) (C += c[R++]), (R = R % u);
      if (((o = (o + 1) % u), o === m && (m = (m + 1) % u), y - p < r)) return;
      const G = g && y - g;
      return G ? Math.round((C * 1e3) / G) : void 0;
    }
  );
}
function Kv(u, r) {
  let c = 0,
    s = 1e3 / r,
    o,
    m;
  const p = (y, g = Date.now()) => {
    (c = g), (o = null), m && (clearTimeout(m), (m = null)), u.apply(null, y);
  };
  return [
    (...y) => {
      const g = Date.now(),
        R = g - c;
      R >= s
        ? p(y, g)
        : ((o = y),
          m ||
            (m = setTimeout(() => {
              (m = null), p(o);
            }, s - R)));
    },
    () => o && p(o),
  ];
}
const ji = (u, r, c = 3) => {
    let s = 0;
    const o = Zv(50, 250);
    return Kv((m) => {
      const p = m.loaded,
        b = m.lengthComputable ? m.total : void 0,
        v = p - s,
        y = o(v),
        g = p <= b;
      s = p;
      const R = {
        loaded: p,
        total: b,
        progress: b ? p / b : void 0,
        bytes: v,
        rate: y || void 0,
        estimated: y && b && g ? (b - p) / y : void 0,
        event: m,
        lengthComputable: b != null,
        [r ? "download" : "upload"]: !0,
      };
      u(R);
    }, c);
  },
  Xm = (u, r) => {
    const c = u != null;
    return [(s) => r[0]({ lengthComputable: c, total: u, loaded: s }), r[1]];
  },
  Qm =
    (u) =>
    (...r) =>
      D.asap(() => u(...r)),
  Jv = et.hasStandardBrowserEnv
    ? ((u, r) => (c) => (
        (c = new URL(c, et.origin)),
        u.protocol === c.protocol &&
          u.host === c.host &&
          (r || u.port === c.port)
      ))(
        new URL(et.origin),
        et.navigator && /(msie|trident)/i.test(et.navigator.userAgent)
      )
    : () => !0,
  kv = et.hasStandardBrowserEnv
    ? {
        write(u, r, c, s, o, m) {
          const p = [u + "=" + encodeURIComponent(r)];
          D.isNumber(c) && p.push("expires=" + new Date(c).toGMTString()),
            D.isString(s) && p.push("path=" + s),
            D.isString(o) && p.push("domain=" + o),
            m === !0 && p.push("secure"),
            (document.cookie = p.join("; "));
        },
        read(u) {
          const r = document.cookie.match(
            new RegExp("(^|;\\s*)(" + u + ")=([^;]*)")
          );
          return r ? decodeURIComponent(r[3]) : null;
        },
        remove(u) {
          this.write(u, "", Date.now() - 864e5);
        },
      }
    : {
        write() {},
        read() {
          return null;
        },
        remove() {},
      };
function $v(u) {
  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(u);
}
function Fv(u, r) {
  return r ? u.replace(/\/?\/$/, "") + "/" + r.replace(/^\/+/, "") : u;
}
function Oh(u, r, c) {
  let s = !$v(r);
  return u && (s || c == !1) ? Fv(u, r) : r;
}
const Vm = (u) => (u instanceof st ? { ...u } : u);
function ea(u, r) {
  r = r || {};
  const c = {};
  function s(y, g, R, C) {
    return D.isPlainObject(y) && D.isPlainObject(g)
      ? D.merge.call({ caseless: C }, y, g)
      : D.isPlainObject(g)
      ? D.merge({}, g)
      : D.isArray(g)
      ? g.slice()
      : g;
  }
  function o(y, g, R, C) {
    if (D.isUndefined(g)) {
      if (!D.isUndefined(y)) return s(void 0, y, R, C);
    } else return s(y, g, R, C);
  }
  function m(y, g) {
    if (!D.isUndefined(g)) return s(void 0, g);
  }
  function p(y, g) {
    if (D.isUndefined(g)) {
      if (!D.isUndefined(y)) return s(void 0, y);
    } else return s(void 0, g);
  }
  function b(y, g, R) {
    if (R in r) return s(y, g);
    if (R in u) return s(void 0, y);
  }
  const v = {
    url: m,
    method: m,
    data: m,
    baseURL: p,
    transformRequest: p,
    transformResponse: p,
    paramsSerializer: p,
    timeout: p,
    timeoutMessage: p,
    withCredentials: p,
    withXSRFToken: p,
    adapter: p,
    responseType: p,
    xsrfCookieName: p,
    xsrfHeaderName: p,
    onUploadProgress: p,
    onDownloadProgress: p,
    decompress: p,
    maxContentLength: p,
    maxBodyLength: p,
    beforeRedirect: p,
    transport: p,
    httpAgent: p,
    httpsAgent: p,
    cancelToken: p,
    socketPath: p,
    responseEncoding: p,
    validateStatus: b,
    headers: (y, g, R) => o(Vm(y), Vm(g), R, !0),
  };
  return (
    D.forEach(Object.keys(Object.assign({}, u, r)), function (g) {
      const R = v[g] || o,
        C = R(u[g], r[g], g);
      (D.isUndefined(C) && R !== b) || (c[g] = C);
    }),
    c
  );
}
const wh = (u) => {
    const r = ea({}, u);
    let {
      data: c,
      withXSRFToken: s,
      xsrfHeaderName: o,
      xsrfCookieName: m,
      headers: p,
      auth: b,
    } = r;
    (r.headers = p = st.from(p)),
      (r.url = Nh(
        Oh(r.baseURL, r.url, r.allowAbsoluteUrls),
        u.params,
        u.paramsSerializer
      )),
      b &&
        p.set(
          "Authorization",
          "Basic " +
            btoa(
              (b.username || "") +
                ":" +
                (b.password ? unescape(encodeURIComponent(b.password)) : "")
            )
        );
    let v;
    if (D.isFormData(c)) {
      if (et.hasStandardBrowserEnv || et.hasStandardBrowserWebWorkerEnv)
        p.setContentType(void 0);
      else if ((v = p.getContentType()) !== !1) {
        const [y, ...g] = v
          ? v
              .split(";")
              .map((R) => R.trim())
              .filter(Boolean)
          : [];
        p.setContentType([y || "multipart/form-data", ...g].join("; "));
      }
    }
    if (
      et.hasStandardBrowserEnv &&
      (s && D.isFunction(s) && (s = s(r)), s || (s !== !1 && Jv(r.url)))
    ) {
      const y = o && m && kv.read(m);
      y && p.set(o, y);
    }
    return r;
  },
  Wv = typeof XMLHttpRequest < "u",
  Pv =
    Wv &&
    function (u) {
      return new Promise(function (c, s) {
        const o = wh(u);
        let m = o.data;
        const p = st.from(o.headers).normalize();
        let { responseType: b, onUploadProgress: v, onDownloadProgress: y } = o,
          g,
          R,
          C,
          G,
          B;
        function Y() {
          G && G(),
            B && B(),
            o.cancelToken && o.cancelToken.unsubscribe(g),
            o.signal && o.signal.removeEventListener("abort", g);
        }
        let _ = new XMLHttpRequest();
        _.open(o.method.toUpperCase(), o.url, !0), (_.timeout = o.timeout);
        function q() {
          if (!_) return;
          const K = st.from(
              "getAllResponseHeaders" in _ && _.getAllResponseHeaders()
            ),
            J = {
              data:
                !b || b === "text" || b === "json"
                  ? _.responseText
                  : _.response,
              status: _.status,
              statusText: _.statusText,
              headers: K,
              config: u,
              request: _,
            };
          Ah(
            function (ye) {
              c(ye), Y();
            },
            function (ye) {
              s(ye), Y();
            },
            J
          ),
            (_ = null);
        }
        "onloadend" in _
          ? (_.onloadend = q)
          : (_.onreadystatechange = function () {
              !_ ||
                _.readyState !== 4 ||
                (_.status === 0 &&
                  !(_.responseURL && _.responseURL.indexOf("file:") === 0)) ||
                setTimeout(q);
            }),
          (_.onabort = function () {
            _ &&
              (s(new ae("Request aborted", ae.ECONNABORTED, u, _)), (_ = null));
          }),
          (_.onerror = function () {
            s(new ae("Network Error", ae.ERR_NETWORK, u, _)), (_ = null);
          }),
          (_.ontimeout = function () {
            let ce = o.timeout
              ? "timeout of " + o.timeout + "ms exceeded"
              : "timeout exceeded";
            const J = o.transitional || Th;
            o.timeoutErrorMessage && (ce = o.timeoutErrorMessage),
              s(
                new ae(
                  ce,
                  J.clarifyTimeoutError ? ae.ETIMEDOUT : ae.ECONNABORTED,
                  u,
                  _
                )
              ),
              (_ = null);
          }),
          m === void 0 && p.setContentType(null),
          "setRequestHeader" in _ &&
            D.forEach(p.toJSON(), function (ce, J) {
              _.setRequestHeader(J, ce);
            }),
          D.isUndefined(o.withCredentials) ||
            (_.withCredentials = !!o.withCredentials),
          b && b !== "json" && (_.responseType = o.responseType),
          y && (([C, B] = ji(y, !0)), _.addEventListener("progress", C)),
          v &&
            _.upload &&
            (([R, G] = ji(v)),
            _.upload.addEventListener("progress", R),
            _.upload.addEventListener("loadend", G)),
          (o.cancelToken || o.signal) &&
            ((g = (K) => {
              _ &&
                (s(!K || K.type ? new Va(null, u, _) : K),
                _.abort(),
                (_ = null));
            }),
            o.cancelToken && o.cancelToken.subscribe(g),
            o.signal &&
              (o.signal.aborted ? g() : o.signal.addEventListener("abort", g)));
        const F = Vv(o.url);
        if (F && et.protocols.indexOf(F) === -1) {
          s(new ae("Unsupported protocol " + F + ":", ae.ERR_BAD_REQUEST, u));
          return;
        }
        _.send(m || null);
      });
    },
  Iv = (u, r) => {
    const { length: c } = (u = u ? u.filter(Boolean) : []);
    if (r || c) {
      let s = new AbortController(),
        o;
      const m = function (y) {
        if (!o) {
          (o = !0), b();
          const g = y instanceof Error ? y : this.reason;
          s.abort(
            g instanceof ae ? g : new Va(g instanceof Error ? g.message : g)
          );
        }
      };
      let p =
        r &&
        setTimeout(() => {
          (p = null), m(new ae(`timeout ${r} of ms exceeded`, ae.ETIMEDOUT));
        }, r);
      const b = () => {
        u &&
          (p && clearTimeout(p),
          (p = null),
          u.forEach((y) => {
            y.unsubscribe
              ? y.unsubscribe(m)
              : y.removeEventListener("abort", m);
          }),
          (u = null));
      };
      u.forEach((y) => y.addEventListener("abort", m));
      const { signal: v } = s;
      return (v.unsubscribe = () => D.asap(b)), v;
    }
  },
  ex = function* (u, r) {
    let c = u.byteLength;
    if (c < r) {
      yield u;
      return;
    }
    let s = 0,
      o;
    for (; s < c; ) (o = s + r), yield u.slice(s, o), (s = o);
  },
  tx = async function* (u, r) {
    for await (const c of lx(u)) yield* ex(c, r);
  },
  lx = async function* (u) {
    if (u[Symbol.asyncIterator]) {
      yield* u;
      return;
    }
    const r = u.getReader();
    try {
      for (;;) {
        const { done: c, value: s } = await r.read();
        if (c) break;
        yield s;
      }
    } finally {
      await r.cancel();
    }
  },
  Zm = (u, r, c, s) => {
    const o = tx(u, r);
    let m = 0,
      p,
      b = (v) => {
        p || ((p = !0), s && s(v));
      };
    return new ReadableStream(
      {
        async pull(v) {
          try {
            const { done: y, value: g } = await o.next();
            if (y) {
              b(), v.close();
              return;
            }
            let R = g.byteLength;
            if (c) {
              let C = (m += R);
              c(C);
            }
            v.enqueue(new Uint8Array(g));
          } catch (y) {
            throw (b(y), y);
          }
        },
        cancel(v) {
          return b(v), o.return();
        },
      },
      { highWaterMark: 2 }
    );
  },
  Mi =
    typeof fetch == "function" &&
    typeof Request == "function" &&
    typeof Response == "function",
  Dh = Mi && typeof ReadableStream == "function",
  ax =
    Mi &&
    (typeof TextEncoder == "function"
      ? (
          (u) => (r) =>
            u.encode(r)
        )(new TextEncoder())
      : async (u) => new Uint8Array(await new Response(u).arrayBuffer())),
  _h = (u, ...r) => {
    try {
      return !!u(...r);
    } catch {
      return !1;
    }
  },
  nx =
    Dh &&
    _h(() => {
      let u = !1;
      const r = new Request(et.origin, {
        body: new ReadableStream(),
        method: "POST",
        get duplex() {
          return (u = !0), "half";
        },
      }).headers.has("Content-Type");
      return u && !r;
    }),
  Km = 64 * 1024,
  hc = Dh && _h(() => D.isReadableStream(new Response("").body)),
  Ri = { stream: hc && ((u) => u.body) };
Mi &&
  ((u) => {
    ["text", "arrayBuffer", "blob", "formData", "stream"].forEach((r) => {
      !Ri[r] &&
        (Ri[r] = D.isFunction(u[r])
          ? (c) => c[r]()
          : (c, s) => {
              throw new ae(
                `Response type '${r}' is not supported`,
                ae.ERR_NOT_SUPPORT,
                s
              );
            });
    });
  })(new Response());
const ux = async (u) => {
    if (u == null) return 0;
    if (D.isBlob(u)) return u.size;
    if (D.isSpecCompliantForm(u))
      return (
        await new Request(et.origin, { method: "POST", body: u }).arrayBuffer()
      ).byteLength;
    if (D.isArrayBufferView(u) || D.isArrayBuffer(u)) return u.byteLength;
    if ((D.isURLSearchParams(u) && (u = u + ""), D.isString(u)))
      return (await ax(u)).byteLength;
  },
  ix = async (u, r) => {
    const c = D.toFiniteNumber(u.getContentLength());
    return c ?? ux(r);
  },
  rx =
    Mi &&
    (async (u) => {
      let {
        url: r,
        method: c,
        data: s,
        signal: o,
        cancelToken: m,
        timeout: p,
        onDownloadProgress: b,
        onUploadProgress: v,
        responseType: y,
        headers: g,
        withCredentials: R = "same-origin",
        fetchOptions: C,
      } = wh(u);
      y = y ? (y + "").toLowerCase() : "text";
      let G = Iv([o, m && m.toAbortSignal()], p),
        B;
      const Y =
        G &&
        G.unsubscribe &&
        (() => {
          G.unsubscribe();
        });
      let _;
      try {
        if (
          v &&
          nx &&
          c !== "get" &&
          c !== "head" &&
          (_ = await ix(g, s)) !== 0
        ) {
          let J = new Request(r, { method: "POST", body: s, duplex: "half" }),
            he;
          if (
            (D.isFormData(s) &&
              (he = J.headers.get("content-type")) &&
              g.setContentType(he),
            J.body)
          ) {
            const [ye, je] = Xm(_, ji(Qm(v)));
            s = Zm(J.body, Km, ye, je);
          }
        }
        D.isString(R) || (R = R ? "include" : "omit");
        const q = "credentials" in Request.prototype;
        B = new Request(r, {
          ...C,
          signal: G,
          method: c.toUpperCase(),
          headers: g.normalize().toJSON(),
          body: s,
          duplex: "half",
          credentials: q ? R : void 0,
        });
        let F = await fetch(B, C);
        const K = hc && (y === "stream" || y === "response");
        if (hc && (b || (K && Y))) {
          const J = {};
          ["status", "statusText", "headers"].forEach((Se) => {
            J[Se] = F[Se];
          });
          const he = D.toFiniteNumber(F.headers.get("content-length")),
            [ye, je] = (b && Xm(he, ji(Qm(b), !0))) || [];
          F = new Response(
            Zm(F.body, Km, ye, () => {
              je && je(), Y && Y();
            }),
            J
          );
        }
        y = y || "text";
        let ce = await Ri[D.findKey(Ri, y) || "text"](F, u);
        return (
          !K && Y && Y(),
          await new Promise((J, he) => {
            Ah(J, he, {
              data: ce,
              headers: st.from(F.headers),
              status: F.status,
              statusText: F.statusText,
              config: u,
              request: B,
            });
          })
        );
      } catch (q) {
        throw (
          (Y && Y(),
          q && q.name === "TypeError" && /Load failed|fetch/i.test(q.message)
            ? Object.assign(new ae("Network Error", ae.ERR_NETWORK, u, B), {
                cause: q.cause || q,
              })
            : ae.from(q, q && q.code, u, B))
        );
      }
    }),
  yc = { http: Ev, xhr: Pv, fetch: rx };
D.forEach(yc, (u, r) => {
  if (u) {
    try {
      Object.defineProperty(u, "name", { value: r });
    } catch {}
    Object.defineProperty(u, "adapterName", { value: r });
  }
});
const Jm = (u) => `- ${u}`,
  sx = (u) => D.isFunction(u) || u === null || u === !1,
  Ch = {
    getAdapter: (u) => {
      u = D.isArray(u) ? u : [u];
      const { length: r } = u;
      let c, s;
      const o = {};
      for (let m = 0; m < r; m++) {
        c = u[m];
        let p;
        if (
          ((s = c),
          !sx(c) && ((s = yc[(p = String(c)).toLowerCase()]), s === void 0))
        )
          throw new ae(`Unknown adapter '${p}'`);
        if (s) break;
        o[p || "#" + m] = s;
      }
      if (!s) {
        const m = Object.entries(o).map(
          ([b, v]) =>
            `adapter ${b} ` +
            (v === !1
              ? "is not supported by the environment"
              : "is not available in the build")
        );
        let p = r
          ? m.length > 1
            ? `since :
` +
              m.map(Jm).join(`
`)
            : " " + Jm(m[0])
          : "as no adapter specified";
        throw new ae(
          "There is no suitable adapter to dispatch the request " + p,
          "ERR_NOT_SUPPORT"
        );
      }
      return s;
    },
    adapters: yc,
  };
function sc(u) {
  if (
    (u.cancelToken && u.cancelToken.throwIfRequested(),
    u.signal && u.signal.aborted)
  )
    throw new Va(null, u);
}
function km(u) {
  return (
    sc(u),
    (u.headers = st.from(u.headers)),
    (u.data = rc.call(u, u.transformRequest)),
    ["post", "put", "patch"].indexOf(u.method) !== -1 &&
      u.headers.setContentType("application/x-www-form-urlencoded", !1),
    Ch.getAdapter(u.adapter || lu.adapter)(u).then(
      function (s) {
        return (
          sc(u),
          (s.data = rc.call(u, u.transformResponse, s)),
          (s.headers = st.from(s.headers)),
          s
        );
      },
      function (s) {
        return (
          Rh(s) ||
            (sc(u),
            s &&
              s.response &&
              ((s.response.data = rc.call(u, u.transformResponse, s.response)),
              (s.response.headers = st.from(s.response.headers)))),
          Promise.reject(s)
        );
      }
    )
  );
}
const zh = "1.10.0",
  Ui = {};
["object", "boolean", "number", "function", "string", "symbol"].forEach(
  (u, r) => {
    Ui[u] = function (s) {
      return typeof s === u || "a" + (r < 1 ? "n " : " ") + u;
    };
  }
);
const $m = {};
Ui.transitional = function (r, c, s) {
  function o(m, p) {
    return (
      "[Axios v" +
      zh +
      "] Transitional option '" +
      m +
      "'" +
      p +
      (s ? ". " + s : "")
    );
  }
  return (m, p, b) => {
    if (r === !1)
      throw new ae(
        o(p, " has been removed" + (c ? " in " + c : "")),
        ae.ERR_DEPRECATED
      );
    return (
      c &&
        !$m[p] &&
        (($m[p] = !0),
        console.warn(
          o(
            p,
            " has been deprecated since v" +
              c +
              " and will be removed in the near future"
          )
        )),
      r ? r(m, p, b) : !0
    );
  };
};
Ui.spelling = function (r) {
  return (c, s) => (console.warn(`${s} is likely a misspelling of ${r}`), !0);
};
function cx(u, r, c) {
  if (typeof u != "object")
    throw new ae("options must be an object", ae.ERR_BAD_OPTION_VALUE);
  const s = Object.keys(u);
  let o = s.length;
  for (; o-- > 0; ) {
    const m = s[o],
      p = r[m];
    if (p) {
      const b = u[m],
        v = b === void 0 || p(b, m, u);
      if (v !== !0)
        throw new ae("option " + m + " must be " + v, ae.ERR_BAD_OPTION_VALUE);
      continue;
    }
    if (c !== !0) throw new ae("Unknown option " + m, ae.ERR_BAD_OPTION);
  }
}
const Ni = { assertOptions: cx, validators: Ui },
  Yt = Ni.validators;
let Il = class {
  constructor(r) {
    (this.defaults = r || {}),
      (this.interceptors = { request: new Ym(), response: new Ym() });
  }
  async request(r, c) {
    try {
      return await this._request(r, c);
    } catch (s) {
      if (s instanceof Error) {
        let o = {};
        Error.captureStackTrace
          ? Error.captureStackTrace(o)
          : (o = new Error());
        const m = o.stack ? o.stack.replace(/^.+\n/, "") : "";
        try {
          s.stack
            ? m &&
              !String(s.stack).endsWith(m.replace(/^.+\n.+\n/, "")) &&
              (s.stack +=
                `
` + m)
            : (s.stack = m);
        } catch {}
      }
      throw s;
    }
  }
  _request(r, c) {
    typeof r == "string" ? ((c = c || {}), (c.url = r)) : (c = r || {}),
      (c = ea(this.defaults, c));
    const { transitional: s, paramsSerializer: o, headers: m } = c;
    s !== void 0 &&
      Ni.assertOptions(
        s,
        {
          silentJSONParsing: Yt.transitional(Yt.boolean),
          forcedJSONParsing: Yt.transitional(Yt.boolean),
          clarifyTimeoutError: Yt.transitional(Yt.boolean),
        },
        !1
      ),
      o != null &&
        (D.isFunction(o)
          ? (c.paramsSerializer = { serialize: o })
          : Ni.assertOptions(
              o,
              { encode: Yt.function, serialize: Yt.function },
              !0
            )),
      c.allowAbsoluteUrls !== void 0 ||
        (this.defaults.allowAbsoluteUrls !== void 0
          ? (c.allowAbsoluteUrls = this.defaults.allowAbsoluteUrls)
          : (c.allowAbsoluteUrls = !0)),
      Ni.assertOptions(
        c,
        {
          baseUrl: Yt.spelling("baseURL"),
          withXsrfToken: Yt.spelling("withXSRFToken"),
        },
        !0
      ),
      (c.method = (c.method || this.defaults.method || "get").toLowerCase());
    let p = m && D.merge(m.common, m[c.method]);
    m &&
      D.forEach(
        ["delete", "get", "head", "post", "put", "patch", "common"],
        (B) => {
          delete m[B];
        }
      ),
      (c.headers = st.concat(p, m));
    const b = [];
    let v = !0;
    this.interceptors.request.forEach(function (Y) {
      (typeof Y.runWhen == "function" && Y.runWhen(c) === !1) ||
        ((v = v && Y.synchronous), b.unshift(Y.fulfilled, Y.rejected));
    });
    const y = [];
    this.interceptors.response.forEach(function (Y) {
      y.push(Y.fulfilled, Y.rejected);
    });
    let g,
      R = 0,
      C;
    if (!v) {
      const B = [km.bind(this), void 0];
      for (
        B.unshift.apply(B, b),
          B.push.apply(B, y),
          C = B.length,
          g = Promise.resolve(c);
        R < C;

      )
        g = g.then(B[R++], B[R++]);
      return g;
    }
    C = b.length;
    let G = c;
    for (R = 0; R < C; ) {
      const B = b[R++],
        Y = b[R++];
      try {
        G = B(G);
      } catch (_) {
        Y.call(this, _);
        break;
      }
    }
    try {
      g = km.call(this, G);
    } catch (B) {
      return Promise.reject(B);
    }
    for (R = 0, C = y.length; R < C; ) g = g.then(y[R++], y[R++]);
    return g;
  }
  getUri(r) {
    r = ea(this.defaults, r);
    const c = Oh(r.baseURL, r.url, r.allowAbsoluteUrls);
    return Nh(c, r.params, r.paramsSerializer);
  }
};
D.forEach(["delete", "get", "head", "options"], function (r) {
  Il.prototype[r] = function (c, s) {
    return this.request(
      ea(s || {}, { method: r, url: c, data: (s || {}).data })
    );
  };
});
D.forEach(["post", "put", "patch"], function (r) {
  function c(s) {
    return function (m, p, b) {
      return this.request(
        ea(b || {}, {
          method: r,
          headers: s ? { "Content-Type": "multipart/form-data" } : {},
          url: m,
          data: p,
        })
      );
    };
  }
  (Il.prototype[r] = c()), (Il.prototype[r + "Form"] = c(!0));
});
let ox = class Mh {
  constructor(r) {
    if (typeof r != "function")
      throw new TypeError("executor must be a function.");
    let c;
    this.promise = new Promise(function (m) {
      c = m;
    });
    const s = this;
    this.promise.then((o) => {
      if (!s._listeners) return;
      let m = s._listeners.length;
      for (; m-- > 0; ) s._listeners[m](o);
      s._listeners = null;
    }),
      (this.promise.then = (o) => {
        let m;
        const p = new Promise((b) => {
          s.subscribe(b), (m = b);
        }).then(o);
        return (
          (p.cancel = function () {
            s.unsubscribe(m);
          }),
          p
        );
      }),
      r(function (m, p, b) {
        s.reason || ((s.reason = new Va(m, p, b)), c(s.reason));
      });
  }
  throwIfRequested() {
    if (this.reason) throw this.reason;
  }
  subscribe(r) {
    if (this.reason) {
      r(this.reason);
      return;
    }
    this._listeners ? this._listeners.push(r) : (this._listeners = [r]);
  }
  unsubscribe(r) {
    if (!this._listeners) return;
    const c = this._listeners.indexOf(r);
    c !== -1 && this._listeners.splice(c, 1);
  }
  toAbortSignal() {
    const r = new AbortController(),
      c = (s) => {
        r.abort(s);
      };
    return (
      this.subscribe(c),
      (r.signal.unsubscribe = () => this.unsubscribe(c)),
      r.signal
    );
  }
  static source() {
    let r;
    return {
      token: new Mh(function (o) {
        r = o;
      }),
      cancel: r,
    };
  }
};
function fx(u) {
  return function (c) {
    return u.apply(null, c);
  };
}
function dx(u) {
  return D.isObject(u) && u.isAxiosError === !0;
}
const pc = {
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
  NetworkAuthenticationRequired: 511,
};
Object.entries(pc).forEach(([u, r]) => {
  pc[r] = u;
});
function Uh(u) {
  const r = new Il(u),
    c = fh(Il.prototype.request, r);
  return (
    D.extend(c, Il.prototype, r, { allOwnKeys: !0 }),
    D.extend(c, r, null, { allOwnKeys: !0 }),
    (c.create = function (o) {
      return Uh(ea(u, o));
    }),
    c
  );
}
const Be = Uh(lu);
Be.Axios = Il;
Be.CanceledError = Va;
Be.CancelToken = ox;
Be.isCancel = Rh;
Be.VERSION = zh;
Be.toFormData = zi;
Be.AxiosError = ae;
Be.Cancel = Be.CanceledError;
Be.all = function (r) {
  return Promise.all(r);
};
Be.spread = fx;
Be.isAxiosError = dx;
Be.mergeConfig = ea;
Be.AxiosHeaders = st;
Be.formToJSON = (u) => jh(D.isHTMLForm(u) ? new FormData(u) : u);
Be.getAdapter = Ch.getAdapter;
Be.HttpStatusCode = pc;
Be.default = Be;
const {
    Axios: Rx,
    AxiosError: Ax,
    CanceledError: Ox,
    isCancel: wx,
    CancelToken: Dx,
    VERSION: _x,
    all: Cx,
    Cancel: zx,
    isAxiosError: Mx,
    spread: Ux,
    toFormData: Bx,
    AxiosHeaders: Hx,
    HttpStatusCode: qx,
    formToJSON: Lx,
    getAdapter: Yx,
    mergeConfig: Gx,
  } = Be,
  Ke = Be.create({ baseURL: "http://localhost:8080", timeout: 1e4 });
Ke.interceptors.request.use(
  (u) => {
    const r = localStorage.getItem("token");
    return r && (u.headers.Authorization = `Bearer ${r}`), u;
  },
  (u) => Promise.reject(u)
);
Ke.interceptors.response.use(
  (u) => u,
  (u) => (
    u.response?.status === 401 &&
      (localStorage.removeItem("token"),
      localStorage.removeItem("user"),
      (window.location.href = "/login")),
    Promise.reject(u)
  )
);
const Fm = {
    login: async (u, r) =>
      (await Ke.post("/api/users/login", { email: u, senha: r })).data,
    register: async (u, r, c) =>
      (await Ke.post("/api/users/register", { nome: u, email: r, senha: c }))
        .data,
  },
  Wn = {
    getAllItems: async () => (await Ke.get("/api/items")).data,
    getItemById: async (u) => (await Ke.get(`/api/items/${u}`)).data,
    createItem: async (u) => (await Ke.post("/api/items", u)).data,
    updateItem: async (u, r) => (await Ke.put(`/api/items/${u}`, r)).data,
    deleteItem: async (u) => (await Ke.delete(`/api/items/${u}`)).data,
    getItemsByCategory: async (u) =>
      (await Ke.get(`/api/items?categoria=${u}`)).data,
    getMyItems: async () => (await Ke.get("/api/items/my-items")).data,
  },
  kn = {
    getAllProposals: async () => (await Ke.get("/api/propostas")).data,
    getProposalById: async (u) => (await Ke.get(`/api/propostas/${u}`)).data,
    createProposal: async (u) => (await Ke.post("/api/propostas", u)).data,
    acceptProposal: async (u) =>
      (await Ke.put(`/api/propostas/${u}/accept`)).data,
    rejectProposal: async (u) =>
      (await Ke.put(`/api/propostas/${u}/reject`)).data,
    getReceivedProposals: async () =>
      (await Ke.get("/api/propostas/received")).data,
    getSentProposals: async () => (await Ke.get("/api/propostas/sent")).data,
  },
  Za = A.createContext(),
  Bi = () => {
    const u = A.useContext(Za);
    if (!u) throw new Error("useAuth deve ser usado dentro de um AuthProvider");
    return u;
  },
  mx = ({ children: u }) => {
    const [r, c] = A.useState(null),
      [s, o] = A.useState(!0);
    A.useEffect(() => {
      const g = localStorage.getItem("token"),
        R = localStorage.getItem("user");
      if (g && R)
        try {
          c(JSON.parse(R));
        } catch (C) {
          console.error("Erro ao recuperar dados do usuário:", C),
            localStorage.removeItem("token"),
            localStorage.removeItem("user");
        }
      o(!1);
    }, []);
    const m = async (g, R) => {
        try {
          const C = await Fm.login(g, R);
          return (
            localStorage.setItem("token", C.token),
            localStorage.setItem(
              "user",
              JSON.stringify({
                id: C.id,
                nome: C.nome,
                email: C.email,
                isAdmin: C.isAdmin,
              })
            ),
            c({ id: C.id, nome: C.nome, email: C.email, isAdmin: C.isAdmin }),
            { success: !0 }
          );
        } catch (C) {
          return (
            console.error("Erro no login:", C),
            {
              success: !1,
              message: C.response?.data?.message || "Erro ao fazer login",
            }
          );
        }
      },
      y = {
        user: r,
        login: m,
        register: async (g, R, C) => {
          try {
            await Fm.register(g, R, C);
            const G = await m(R, C);
            if (!G.success) throw new Error(G.message);
            return G;
          } catch (G) {
            throw (
              (console.error("Erro no registro:", G),
              new Error(
                G.response?.data?.message || G.message || "Erro ao criar conta"
              ))
            );
          }
        },
        logout: () => {
          localStorage.removeItem("token"),
            localStorage.removeItem("user"),
            c(null);
        },
        isAuthenticated: () =>
          r !== null && localStorage.getItem("token") !== null,
        loading: s,
      };
    return d.jsx(Za.Provider, { value: y, children: u });
  },
  hx = () => {
    const { user: u, logout: r } = Bi(),
      c = In(),
      s = () => {
        r(), c("/");
      };
    return d.jsx("nav", {
      className: "bg-white shadow-lg border-b-2 border-green-100",
      children: d.jsx("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: d.jsxs("div", {
          className: "flex justify-between h-16",
          children: [
            d.jsx("div", {
              className: "flex items-center",
              children: d.jsxs(Ue, {
                to: "/",
                className: "flex items-center space-x-2",
                children: [
                  d.jsx("div", {
                    className:
                      "w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center",
                    children: d.jsx("span", {
                      className: "text-white font-bold text-lg",
                      children: "🏪",
                    }),
                  }),
                  d.jsx("span", {
                    className: "text-xl font-bold text-gray-800",
                    children: "Feira de Trocas",
                  }),
                ],
              }),
            }),
            d.jsx("div", {
              className: "flex items-center space-x-4",
              children: u
                ? d.jsxs(d.Fragment, {
                    children: [
                      d.jsx(Ue, {
                        to: "/items",
                        className:
                          "text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        children: "Explorar Itens",
                      }),
                      d.jsx(Ue, {
                        to: "/my-items",
                        className:
                          "text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        children: "Meus Itens",
                      }),
                      d.jsx(Ue, {
                        to: "/proposals",
                        className:
                          "text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        children: "Propostas",
                      }),
                      d.jsx(Ue, {
                        to: "/create-item",
                        className: "btn-primary text-sm",
                        children: "Adicionar Item",
                      }),
                      d.jsxs("div", {
                        className: "flex items-center space-x-3",
                        children: [
                          d.jsxs("span", {
                            className: "text-sm text-gray-600",
                            children: ["Olá, ", u.nome],
                          }),
                          d.jsx("button", {
                            onClick: s,
                            className:
                              "text-gray-700 hover:text-red-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                            children: "Sair",
                          }),
                        ],
                      }),
                    ],
                  })
                : d.jsxs(d.Fragment, {
                    children: [
                      d.jsx(Ue, {
                        to: "/items",
                        className:
                          "text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        children: "Explorar Itens",
                      }),
                      d.jsx(Ue, {
                        to: "/login",
                        className:
                          "text-gray-700 hover:text-green-600 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                        children: "Entrar",
                      }),
                      d.jsx(Ue, {
                        to: "/register",
                        className: "btn-primary text-sm",
                        children: "Cadastrar",
                      }),
                    ],
                  }),
            }),
          ],
        }),
      }),
    });
  },
  yx = () =>
    d.jsx("footer", {
      className: "bg-gray-800 text-white py-8 mt-12",
      children: d.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          d.jsxs("div", {
            className: "grid grid-cols-1 md:grid-cols-4 gap-8",
            children: [
              d.jsxs("div", {
                className: "col-span-1 md:col-span-2",
                children: [
                  d.jsxs("div", {
                    className: "flex items-center space-x-2 mb-4",
                    children: [
                      d.jsx("div", {
                        className:
                          "w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center",
                        children: d.jsx("span", {
                          className: "text-white font-bold text-lg",
                          children: "🏪",
                        }),
                      }),
                      d.jsx("span", {
                        className: "text-xl font-bold",
                        children: "Feira de Trocas",
                      }),
                    ],
                  }),
                  d.jsx("p", {
                    className: "text-gray-300 mb-4",
                    children:
                      "Promovendo o consumo consciente e fortalecendo vínculos comunitários através da troca de itens em bom estado.",
                  }),
                  d.jsx("p", {
                    className: "text-sm text-gray-400",
                    children:
                      "© 2025 Feira de Trocas Comunitária. Todos os direitos reservados.",
                  }),
                ],
              }),
              d.jsxs("div", {
                children: [
                  d.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Navegação",
                  }),
                  d.jsxs("ul", {
                    className: "space-y-2 text-gray-300",
                    children: [
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "/",
                          className: "hover:text-green-400 transition-colors",
                          children: "Início",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "/items",
                          className: "hover:text-green-400 transition-colors",
                          children: "Explorar Itens",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "/login",
                          className: "hover:text-green-400 transition-colors",
                          children: "Entrar",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("a", {
                          href: "/register",
                          className: "hover:text-green-400 transition-colors",
                          children: "Cadastrar",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
              d.jsxs("div", {
                children: [
                  d.jsx("h3", {
                    className: "text-lg font-semibold mb-4",
                    children: "Categorias",
                  }),
                  d.jsxs("ul", {
                    className: "space-y-2 text-gray-300",
                    children: [
                      d.jsx("li", {
                        children: d.jsx("span", {
                          className: "hover:text-green-400 transition-colors",
                          children: "📚 Livros",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("span", {
                          className: "hover:text-green-400 transition-colors",
                          children: "👕 Roupas",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("span", {
                          className: "hover:text-green-400 transition-colors",
                          children: "🧸 Brinquedos",
                        }),
                      }),
                      d.jsx("li", {
                        children: d.jsx("span", {
                          className: "hover:text-green-400 transition-colors",
                          children: "⚽ Esportes",
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
          d.jsx("div", {
            className: "border-t border-gray-700 pt-6 mt-8",
            children: d.jsxs("div", {
              className:
                "flex flex-col md:flex-row justify-between items-center",
              children: [
                d.jsx("p", { className: "text-gray-400 text-sm" }),
                d.jsx("div", {
                  className: "flex space-x-4 mt-4 md:mt-0",
                  children: d.jsx("span", {
                    className: "text-gray-400 text-sm",
                    children:
                      "🌱 Sustentabilidade • 🤝 Comunidade • ♻️ Reutilização",
                  }),
                }),
              ],
            }),
          }),
        ],
      }),
    }),
  px = () => {
    const { user: u } = Bi();
    return d.jsxs("div", {
      className: "min-h-screen",
      children: [
        d.jsx("section", {
          className: "bg-gradient-to-br from-green-50 to-green-100 py-20",
          children: d.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
              className: "text-center",
              children: [
                d.jsx("h1", {
                  className:
                    "text-4xl md:text-6xl font-bold text-gray-800 mb-6",
                  children: "🏪 Feira de Trocas Comunitária",
                }),
                d.jsx("p", {
                  className:
                    "text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto",
                  children:
                    "Transforme itens não utilizados em novas oportunidades. Conecte-se com sua comunidade e promova o consumo consciente.",
                }),
                d.jsx("div", {
                  className: "flex flex-col sm:flex-row gap-4 justify-center",
                  children: u
                    ? d.jsxs(d.Fragment, {
                        children: [
                          d.jsx(Ue, {
                            to: "/items",
                            className: "btn-primary text-lg px-8 py-3",
                            children: "Explorar Itens",
                          }),
                          d.jsx(Ue, {
                            to: "/create-item",
                            className: "btn-secondary text-lg px-8 py-3",
                            children: "Adicionar Item",
                          }),
                        ],
                      })
                    : d.jsxs(d.Fragment, {
                        children: [
                          d.jsx(Ue, {
                            to: "/register",
                            className: "btn-primary text-lg px-8 py-3",
                            children: "Começar Agora",
                          }),
                          d.jsx(Ue, {
                            to: "/items",
                            className: "btn-secondary text-lg px-8 py-3",
                            children: "Explorar Itens",
                          }),
                        ],
                      }),
                }),
              ],
            }),
          }),
        }),
        d.jsx("section", {
          className: "py-20 bg-white",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              d.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  d.jsx("h2", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-800 mb-4",
                    children: "Como Funciona",
                  }),
                  d.jsx("p", {
                    className: "text-xl text-gray-600 max-w-2xl mx-auto",
                    children:
                      "Processo simples e seguro para trocar itens com sua comunidade",
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "grid grid-cols-1 md:grid-cols-3 gap-8",
                children: [
                  d.jsxs("div", {
                    className: "text-center",
                    children: [
                      d.jsx("div", {
                        className:
                          "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: d.jsx("span", {
                          className: "text-2xl",
                          children: "📦",
                        }),
                      }),
                      d.jsx("h3", {
                        className: "text-xl font-bold text-gray-800 mb-2",
                        children: "1. Cadastre seus itens",
                      }),
                      d.jsx("p", {
                        className: "text-gray-600",
                        children:
                          "Adicione fotos e descrições dos itens que você não usa mais",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "text-center",
                    children: [
                      d.jsx("div", {
                        className:
                          "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: d.jsx("span", {
                          className: "text-2xl",
                          children: "🔍",
                        }),
                      }),
                      d.jsx("h3", {
                        className: "text-xl font-bold text-gray-800 mb-2",
                        children: "2. Encontre o que precisa",
                      }),
                      d.jsx("p", {
                        className: "text-gray-600",
                        children:
                          "Explore itens disponíveis e use filtros para encontrar exatamente o que busca",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    className: "text-center",
                    children: [
                      d.jsx("div", {
                        className:
                          "w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",
                        children: d.jsx("span", {
                          className: "text-2xl",
                          children: "🤝",
                        }),
                      }),
                      d.jsx("h3", {
                        className: "text-xl font-bold text-gray-800 mb-2",
                        children: "3. Faça a troca",
                      }),
                      d.jsx("p", {
                        className: "text-gray-600",
                        children:
                          "Proponha trocas e negocie diretamente com outros membros da comunidade",
                      }),
                    ],
                  }),
                ],
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-20 bg-gray-50",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              d.jsxs("div", {
                className: "text-center mb-16",
                children: [
                  d.jsx("h2", {
                    className:
                      "text-3xl md:text-4xl font-bold text-gray-800 mb-4",
                    children: "Categorias Populares",
                  }),
                  d.jsx("p", {
                    className: "text-xl text-gray-600",
                    children: "Encontre itens organizados por categoria",
                  }),
                ],
              }),
              d.jsx("div", {
                className: "grid grid-cols-2 md:grid-cols-4 gap-6",
                children: [
                  { icon: "📚", name: "Livros", count: "120+ itens" },
                  { icon: "👕", name: "Roupas", count: "85+ itens" },
                  { icon: "🧸", name: "Brinquedos", count: "67+ itens" },
                  { icon: "📱", name: "Eletrônicos", count: "43+ itens" },
                  { icon: "🔧", name: "Ferramentas", count: "32+ itens" },
                  { icon: "🏠", name: "Casa e Jardim", count: "28+ itens" },
                  { icon: "⚽", name: "Esportes", count: "25+ itens" },
                  { icon: "🎵", name: "Música", count: "18+ itens" },
                ].map((r) =>
                  d.jsxs(
                    Ue,
                    {
                      to: `/items?categoria=${r.name}`,
                      className:
                        "card p-6 text-center hover:shadow-lg transition-shadow cursor-pointer group",
                      children: [
                        d.jsx("div", {
                          className:
                            "text-4xl mb-3 group-hover:scale-110 transition-transform",
                          children: r.icon,
                        }),
                        d.jsx("h3", {
                          className: "font-semibold text-gray-800 mb-1",
                          children: r.name,
                        }),
                        d.jsx("p", {
                          className: "text-sm text-gray-500",
                          children: r.count,
                        }),
                      ],
                    },
                    r.name
                  )
                ),
              }),
            ],
          }),
        }),
        d.jsx("section", {
          className: "py-20 bg-green-600 text-white",
          children: d.jsx("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: d.jsxs("div", {
              className: "grid grid-cols-1 md:grid-cols-4 gap-8 text-center",
              children: [
                d.jsxs("div", {
                  children: [
                    d.jsx("div", {
                      className: "text-4xl font-bold mb-2",
                      children: "500+",
                    }),
                    d.jsx("div", {
                      className: "text-green-100",
                      children: "Itens Cadastrados",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("div", {
                      className: "text-4xl font-bold mb-2",
                      children: "150+",
                    }),
                    d.jsx("div", {
                      className: "text-green-100",
                      children: "Usuários Ativos",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("div", {
                      className: "text-4xl font-bold mb-2",
                      children: "89",
                    }),
                    d.jsx("div", {
                      className: "text-green-100",
                      children: "Trocas Realizadas",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  children: [
                    d.jsx("div", {
                      className: "text-4xl font-bold mb-2",
                      children: "95%",
                    }),
                    d.jsx("div", {
                      className: "text-green-100",
                      children: "Satisfação",
                    }),
                  ],
                }),
              ],
            }),
          }),
        }),
        !u &&
          d.jsx("section", {
            className: "py-20 bg-white",
            children: d.jsxs("div", {
              className: "max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8",
              children: [
                d.jsx("h2", {
                  className:
                    "text-3xl md:text-4xl font-bold text-gray-800 mb-4",
                  children: "Pronto para começar?",
                }),
                d.jsx("p", {
                  className: "text-xl text-gray-600 mb-8",
                  children:
                    "Junte-se à nossa comunidade e faça parte da mudança para um consumo mais consciente",
                }),
                d.jsxs("div", {
                  className: "flex flex-col sm:flex-row gap-4 justify-center",
                  children: [
                    d.jsx(Ue, {
                      to: "/register",
                      className: "btn-primary text-lg px-8 py-3",
                      children: "Criar Conta Grátis",
                    }),
                    d.jsx(Ue, {
                      to: "/login",
                      className: "btn-secondary text-lg px-8 py-3",
                      children: "Já tenho conta",
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    });
  },
  gx = () => {
    const [u, r] = A.useState({ email: "", senha: "" }),
      [c, s] = A.useState(!1),
      [o, m] = A.useState(""),
      { login: p } = Bi(),
      b = In(),
      v = (g) => {
        r({ ...u, [g.target.name]: g.target.value });
      },
      y = async (g) => {
        g.preventDefault(), s(!0), m("");
        try {
          await p(u.email, u.senha), b("/items");
        } catch (R) {
          m(R.message || "Erro ao fazer login");
        } finally {
          s(!1);
        }
      };
    return d.jsxs("div", {
      className:
        "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "sm:mx-auto sm:w-full sm:max-w-md",
          children: [
            d.jsx("div", {
              className: "flex justify-center",
              children: d.jsx("div", {
                className:
                  "w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center",
                children: d.jsx("span", {
                  className: "text-white font-bold text-2xl",
                  children: "🏪",
                }),
              }),
            }),
            d.jsx("h2", {
              className: "mt-6 text-center text-3xl font-bold text-gray-900",
              children: "Entre em sua conta",
            }),
            d.jsxs("p", {
              className: "mt-2 text-center text-sm text-gray-600",
              children: [
                "Ou",
                " ",
                d.jsx(Ue, {
                  to: "/register",
                  className: "font-medium text-green-600 hover:text-green-500",
                  children: "crie uma nova conta",
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
          children: d.jsxs("div", {
            className: "card px-4 py-8 sm:px-10",
            children: [
              o &&
                d.jsx("div", {
                  className:
                    "mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg",
                  children: o,
                }),
              d.jsxs("form", {
                onSubmit: y,
                className: "space-y-6",
                children: [
                  d.jsxs("div", {
                    children: [
                      d.jsx("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium text-gray-700",
                        children: "Email",
                      }),
                      d.jsx("div", {
                        className: "mt-1",
                        children: d.jsx("input", {
                          id: "email",
                          name: "email",
                          type: "email",
                          autoComplete: "email",
                          required: !0,
                          value: u.email,
                          onChange: v,
                          className: "input-field",
                          placeholder: "seu@email.com",
                        }),
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    children: [
                      d.jsx("label", {
                        htmlFor: "senha",
                        className: "block text-sm font-medium text-gray-700",
                        children: "Senha",
                      }),
                      d.jsx("div", {
                        className: "mt-1",
                        children: d.jsx("input", {
                          id: "senha",
                          name: "senha",
                          type: "password",
                          autoComplete: "current-password",
                          required: !0,
                          value: u.senha,
                          onChange: v,
                          className: "input-field",
                          placeholder: "••••••••",
                        }),
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    children: d.jsx("button", {
                      type: "submit",
                      disabled: c,
                      className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                        c
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      } transition-colors duration-200`,
                      children: c
                        ? d.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              d.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
                              }),
                              "Entrando...",
                            ],
                          })
                        : "Entrar",
                    }),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "mt-6",
                children: [
                  d.jsxs("div", {
                    className: "relative",
                    children: [
                      d.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: d.jsx("div", {
                          className: "w-full border-t border-gray-300",
                        }),
                      }),
                      d.jsx("div", {
                        className: "relative flex justify-center text-sm",
                        children: d.jsx("span", {
                          className: "px-2 bg-white text-gray-500",
                          children: "Primeira vez aqui?",
                        }),
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    className: "mt-6",
                    children: d.jsx(Ue, {
                      to: "/register",
                      className:
                        "w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200",
                      children: "Criar uma conta",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  vx = () => {
    const [u, r] = A.useState({
        nome: "",
        email: "",
        senha: "",
        confirmarSenha: "",
      }),
      [c, s] = A.useState(!1),
      [o, m] = A.useState(""),
      { register: p } = Bi(),
      b = In(),
      v = (g) => {
        r({ ...u, [g.target.name]: g.target.value });
      },
      y = async (g) => {
        if ((g.preventDefault(), s(!0), m(""), u.senha !== u.confirmarSenha)) {
          m("As senhas não coincidem"), s(!1);
          return;
        }
        if (u.senha.length < 6) {
          m("A senha deve ter pelo menos 6 caracteres"), s(!1);
          return;
        }
        try {
          await p(u.nome, u.email, u.senha), b("/items");
        } catch (R) {
          m(R.message || "Erro ao criar conta");
        } finally {
          s(!1);
        }
      };
    return d.jsxs("div", {
      className:
        "min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8",
      children: [
        d.jsxs("div", {
          className: "sm:mx-auto sm:w-full sm:max-w-md",
          children: [
            d.jsx("div", {
              className: "flex justify-center",
              children: d.jsx("div", {
                className:
                  "w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center",
                children: d.jsx("span", {
                  className: "text-white font-bold text-2xl",
                  children: "🏪",
                }),
              }),
            }),
            d.jsx("h2", {
              className: "mt-6 text-center text-3xl font-bold text-gray-900",
              children: "Crie sua conta",
            }),
            d.jsxs("p", {
              className: "mt-2 text-center text-sm text-gray-600",
              children: [
                "Ou",
                " ",
                d.jsx(Ue, {
                  to: "/login",
                  className: "font-medium text-green-600 hover:text-green-500",
                  children: "entre em sua conta existente",
                }),
              ],
            }),
          ],
        }),
        d.jsx("div", {
          className: "mt-8 sm:mx-auto sm:w-full sm:max-w-md",
          children: d.jsxs("div", {
            className: "card px-4 py-8 sm:px-10",
            children: [
              o &&
                d.jsx("div", {
                  className:
                    "mb-4 bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg",
                  children: o,
                }),
              d.jsxs("form", {
                onSubmit: y,
                className: "space-y-6",
                children: [
                  d.jsxs("div", {
                    children: [
                      d.jsx("label", {
                        htmlFor: "nome",
                        className: "block text-sm font-medium text-gray-700",
                        children: "Nome completo",
                      }),
                      d.jsx("div", {
                        className: "mt-1",
                        children: d.jsx("input", {
                          id: "nome",
                          name: "nome",
                          type: "text",
                          autoComplete: "name",
                          required: !0,
                          value: u.nome,
                          onChange: v,
                          className: "input-field",
                          placeholder: "Seu nome completo",
                        }),
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    children: [
                      d.jsx("label", {
                        htmlFor: "email",
                        className: "block text-sm font-medium text-gray-700",
                        children: "Email",
                      }),
                      d.jsx("div", {
                        className: "mt-1",
                        children: d.jsx("input", {
                          id: "email",
                          name: "email",
                          type: "email",
                          autoComplete: "email",
                          required: !0,
                          value: u.email,
                          onChange: v,
                          className: "input-field",
                          placeholder: "seu@email.com",
                        }),
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    children: [
                      d.jsx("label", {
                        htmlFor: "senha",
                        className: "block text-sm font-medium text-gray-700",
                        children: "Senha",
                      }),
                      d.jsx("div", {
                        className: "mt-1",
                        children: d.jsx("input", {
                          id: "senha",
                          name: "senha",
                          type: "password",
                          autoComplete: "new-password",
                          required: !0,
                          value: u.senha,
                          onChange: v,
                          className: "input-field",
                          placeholder: "••••••••",
                        }),
                      }),
                      d.jsx("p", {
                        className: "mt-1 text-xs text-gray-500",
                        children: "Mínimo de 6 caracteres",
                      }),
                    ],
                  }),
                  d.jsxs("div", {
                    children: [
                      d.jsx("label", {
                        htmlFor: "confirmarSenha",
                        className: "block text-sm font-medium text-gray-700",
                        children: "Confirmar senha",
                      }),
                      d.jsx("div", {
                        className: "mt-1",
                        children: d.jsx("input", {
                          id: "confirmarSenha",
                          name: "confirmarSenha",
                          type: "password",
                          autoComplete: "new-password",
                          required: !0,
                          value: u.confirmarSenha,
                          onChange: v,
                          className: "input-field",
                          placeholder: "••••••••",
                        }),
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    children: d.jsx("button", {
                      type: "submit",
                      disabled: c,
                      className: `w-full flex justify-center py-2 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-white ${
                        c
                          ? "bg-gray-400 cursor-not-allowed"
                          : "bg-green-600 hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
                      } transition-colors duration-200`,
                      children: c
                        ? d.jsxs("div", {
                            className: "flex items-center",
                            children: [
                              d.jsx("div", {
                                className:
                                  "animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2",
                              }),
                              "Criando conta...",
                            ],
                          })
                        : "Criar conta",
                    }),
                  }),
                ],
              }),
              d.jsxs("div", {
                className: "mt-6",
                children: [
                  d.jsxs("div", {
                    className: "relative",
                    children: [
                      d.jsx("div", {
                        className: "absolute inset-0 flex items-center",
                        children: d.jsx("div", {
                          className: "w-full border-t border-gray-300",
                        }),
                      }),
                      d.jsx("div", {
                        className: "relative flex justify-center text-sm",
                        children: d.jsx("span", {
                          className: "px-2 bg-white text-gray-500",
                          children: "Já tem uma conta?",
                        }),
                      }),
                    ],
                  }),
                  d.jsx("div", {
                    className: "mt-6",
                    children: d.jsx(Ue, {
                      to: "/login",
                      className:
                        "w-full flex justify-center py-2 px-4 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 transition-colors duration-200",
                      children: "Entrar em conta existente",
                    }),
                  }),
                ],
              }),
            ],
          }),
        }),
      ],
    });
  },
  xx = () => {
    const { user: u } = A.useContext(Za),
      [r, c] = A.useState([]),
      [s, o] = A.useState([]),
      [m, p] = A.useState([]),
      [b, v] = A.useState(""),
      [y, g] = A.useState(""),
      [R, C] = A.useState(!0),
      [G, B] = A.useState(""),
      [Y, _] = A.useState(!1),
      [q, F] = A.useState(null),
      [K, ce] = A.useState(!1),
      J = [
        "Livros",
        "Roupas",
        "Brinquedos",
        "Eletrônicos",
        "Ferramentas",
        "Casa e Jardim",
        "Esportes",
        "Música",
        "Outros",
      ];
    A.useEffect(() => {
      ye(), u && he();
    }, [u]);
    const he = async () => {
      try {
        const k = await Wn.getMyItems();
        o(k);
      } catch (k) {
        console.error("Erro ao buscar meus itens:", k);
      }
    };
    A.useEffect(() => {
      (() => {
        let He = r;
        b &&
          (He = He.filter(
            (Ce) =>
              Ce.nome.toLowerCase().includes(b.toLowerCase()) ||
              Ce.descricao.toLowerCase().includes(b.toLowerCase())
          )),
          y && (He = He.filter((Ce) => Ce.categoria === y)),
          p(He);
      })();
    }, [r, b, y]);
    const ye = async () => {
        try {
          C(!0);
          const k = await Wn.getAllItems();
          c(k);
        } catch (k) {
          B("Erro ao carregar itens"),
            console.error("Erro ao buscar itens:", k);
        } finally {
          C(!1);
        }
      },
      je = (k) => {
        if (!u) {
          alert("Você precisa estar logado para fazer propostas");
          return;
        }
        F(k), _(!0);
      },
      Se = async (k) => {
        try {
          ce(!0),
            await kn.createProposal({ itemOfertadoId: k, itemDesejadoId: q }),
            _(!1),
            F(null),
            alert("Proposta enviada com sucesso!");
        } catch (He) {
          console.error("Erro ao criar proposta:", He),
            alert("Erro ao enviar proposta. Tente novamente.");
        } finally {
          ce(!1);
        }
      };
    return R
      ? d.jsx("div", {
          className: "min-h-screen bg-gray-50 flex items-center justify-center",
          children: d.jsx("div", {
            className:
              "animate-spin rounded-full h-32 w-32 border-b-2 border-green-600",
          }),
        })
      : d.jsx("div", {
          className: "min-h-screen bg-gray-50 py-8",
          children: d.jsxs("div", {
            className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
            children: [
              d.jsxs("div", {
                className: "mb-8",
                children: [
                  d.jsx("h1", {
                    className: "text-3xl font-bold text-gray-900 mb-4",
                    children: "Itens Disponíveis",
                  }),
                  d.jsx("div", {
                    className: "bg-white p-6 rounded-lg shadow-md mb-6",
                    children: d.jsxs("div", {
                      className: "grid grid-cols-1 md:grid-cols-2 gap-4",
                      children: [
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              htmlFor: "search",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Buscar",
                            }),
                            d.jsx("input", {
                              type: "text",
                              id: "search",
                              placeholder: "Buscar por nome ou descrição...",
                              value: b,
                              onChange: (k) => v(k.target.value),
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              htmlFor: "category",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Categoria",
                            }),
                            d.jsxs("select", {
                              id: "category",
                              value: y,
                              onChange: (k) => g(k.target.value),
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",
                              children: [
                                d.jsx("option", {
                                  value: "",
                                  children: "Todas as categorias",
                                }),
                                J.map((k) =>
                                  d.jsx("option", { value: k, children: k }, k)
                                ),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  }),
                  G &&
                    d.jsx("div", {
                      className:
                        "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",
                      children: G,
                    }),
                ],
              }),
              m.length === 0
                ? d.jsxs("div", {
                    className: "text-center py-12",
                    children: [
                      d.jsx("div", {
                        className: "text-gray-500 text-xl mb-4",
                        children:
                          b || y
                            ? "Nenhum item encontrado com os filtros aplicados"
                            : "Nenhum item disponível",
                      }),
                      (b || y) &&
                        d.jsx("button", {
                          onClick: () => {
                            v(""), g("");
                          },
                          className:
                            "text-green-600 hover:text-green-700 font-medium",
                          children: "Limpar filtros",
                        }),
                    ],
                  })
                : d.jsx("div", {
                    className:
                      "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                    children: m.map((k) =>
                      d.jsxs(
                        "div",
                        {
                          className:
                            "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
                          children: [
                            d.jsx("div", {
                              className:
                                "h-48 bg-gray-200 flex items-center justify-center",
                              children: k.imagem
                                ? d.jsx("img", {
                                    src: k.imagem,
                                    alt: k.nome,
                                    className: "h-full w-full object-cover",
                                  })
                                : d.jsxs("div", {
                                    className: "text-gray-400 text-center",
                                    children: [
                                      d.jsx("svg", {
                                        className: "mx-auto h-12 w-12 mb-2",
                                        fill: "none",
                                        stroke: "currentColor",
                                        viewBox: "0 0 24 24",
                                        children: d.jsx("path", {
                                          strokeLinecap: "round",
                                          strokeLinejoin: "round",
                                          strokeWidth: 2,
                                          d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                                        }),
                                      }),
                                      "Sem imagem",
                                    ],
                                  }),
                            }),
                            d.jsxs("div", {
                              className: "p-6",
                              children: [
                                d.jsxs("div", {
                                  className:
                                    "flex justify-between items-start mb-2",
                                  children: [
                                    d.jsx("h3", {
                                      className:
                                        "text-lg font-semibold text-gray-900",
                                      children: k.nome,
                                    }),
                                    d.jsx("span", {
                                      className:
                                        "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full",
                                      children: k.categoria,
                                    }),
                                  ],
                                }),
                                d.jsx("p", {
                                  className:
                                    "text-gray-600 text-sm mb-4 line-clamp-2",
                                  children: k.descricao,
                                }),
                                d.jsx("div", {
                                  className:
                                    "flex justify-between items-center mb-4",
                                  children: d.jsx("span", {
                                    className: `px-2 py-1 rounded-full text-xs ${
                                      k.disponivelParaTroca
                                        ? "bg-green-100 text-green-800"
                                        : "bg-gray-100 text-gray-800"
                                    }`,
                                    children: k.disponivelParaTroca
                                      ? "Disponível"
                                      : "Indisponível",
                                  }),
                                }),
                                d.jsxs("div", {
                                  className: "text-sm text-gray-500 mb-4",
                                  children: [
                                    "Por: ",
                                    k.usuario?.nome || "Usuário desconhecido",
                                  ],
                                }),
                                d.jsx("button", {
                                  onClick: () => je(k.id),
                                  disabled: !k.disponivelParaTroca,
                                  className: `w-full py-2 px-4 rounded-md font-medium transition-colors ${
                                    k.disponivelParaTroca
                                      ? "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500"
                                      : "bg-gray-300 text-gray-500 cursor-not-allowed"
                                  }`,
                                  children: k.disponivelParaTroca
                                    ? "Propor Troca"
                                    : "Indisponível",
                                }),
                              ],
                            }),
                          ],
                        },
                        k.id
                      )
                    ),
                  }),
              Y &&
                d.jsx("div", {
                  className:
                    "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50",
                  children: d.jsxs("div", {
                    className: "bg-white rounded-lg p-6 max-w-md w-full mx-4",
                    children: [
                      d.jsx("h3", {
                        className: "text-lg font-semibold mb-4",
                        children: "Escolha um item para trocar",
                      }),
                      s.length === 0
                        ? d.jsxs("div", {
                            children: [
                              d.jsx("p", {
                                className: "text-gray-600 mb-4",
                                children: "Você não tem itens para trocar.",
                              }),
                              d.jsx("button", {
                                onClick: () => _(!1),
                                className:
                                  "w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400",
                                children: "Fechar",
                              }),
                            ],
                          })
                        : d.jsxs("div", {
                            children: [
                              d.jsx("div", {
                                className:
                                  "max-h-60 overflow-y-auto space-y-2 mb-4",
                                children: s.map((k) =>
                                  d.jsx(
                                    "div",
                                    {
                                      className:
                                        "border rounded-lg p-3 hover:bg-gray-50 cursor-pointer",
                                      onClick: () => Se(k.id),
                                      children: d.jsxs("div", {
                                        className:
                                          "flex justify-between items-start",
                                        children: [
                                          d.jsxs("div", {
                                            children: [
                                              d.jsx("h4", {
                                                className: "font-medium",
                                                children: k.nome,
                                              }),
                                              d.jsx("p", {
                                                className:
                                                  "text-sm text-gray-600",
                                                children: k.categoria,
                                              }),
                                            ],
                                          }),
                                          k.imagemUrl &&
                                            d.jsx("img", {
                                              src: k.imagemUrl,
                                              alt: k.nome,
                                              className:
                                                "w-12 h-12 object-cover rounded",
                                            }),
                                        ],
                                      }),
                                    },
                                    k.id
                                  )
                                ),
                              }),
                              d.jsx("button", {
                                onClick: () => _(!1),
                                className:
                                  "w-full bg-gray-300 text-gray-700 py-2 px-4 rounded-md hover:bg-gray-400",
                                disabled: K,
                                children: "Cancelar",
                              }),
                            ],
                          }),
                    ],
                  }),
                }),
            ],
          }),
        });
  },
  bx = () => {
    const { user: u } = A.useContext(Za),
      [r, c] = A.useState([]),
      [s, o] = A.useState(!0),
      [m, p] = A.useState("");
    A.useEffect(() => {
      u && b();
    }, [u]);
    const b = async () => {
        try {
          o(!0);
          const g = await Wn.getMyItems();
          c(g);
        } catch (g) {
          p("Erro ao carregar seus itens"),
            console.error("Erro ao buscar itens:", g);
        } finally {
          o(!1);
        }
      },
      v = async (g) => {
        if (window.confirm("Tem certeza que deseja excluir este item?"))
          try {
            await Wn.deleteItem(g), c(r.filter((R) => R.id !== g));
          } catch (R) {
            p("Erro ao excluir item"),
              console.error("Erro ao excluir item:", R);
          }
      },
      y = (g) => {
        console.log("Editar item:", g);
      };
    return u
      ? s
        ? d.jsx("div", {
            className:
              "min-h-screen bg-gray-50 flex items-center justify-center",
            children: d.jsx("div", {
              className:
                "animate-spin rounded-full h-32 w-32 border-b-2 border-green-600",
            }),
          })
        : d.jsx("div", {
            className: "min-h-screen bg-gray-50 py-8",
            children: d.jsxs("div", {
              className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                d.jsxs("div", {
                  className: "mb-8",
                  children: [
                    d.jsx("h1", {
                      className: "text-3xl font-bold text-gray-900 mb-4",
                      children: "Meus Itens",
                    }),
                    m &&
                      d.jsx("div", {
                        className:
                          "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",
                        children: m,
                      }),
                  ],
                }),
                r.length === 0
                  ? d.jsxs("div", {
                      className: "text-center py-12",
                      children: [
                        d.jsx("div", {
                          className: "text-gray-500 text-xl mb-4",
                          children:
                            "Você ainda não cadastrou nenhum item para troca",
                        }),
                        d.jsx("button", {
                          onClick: () =>
                            (window.location.href = "/create-item"),
                          className:
                            "bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors",
                          children: "Cadastrar Primeiro Item",
                        }),
                      ],
                    })
                  : d.jsxs(d.Fragment, {
                      children: [
                        d.jsxs("div", {
                          className: "mb-6 flex justify-between items-center",
                          children: [
                            d.jsxs("p", {
                              className: "text-gray-600",
                              children: [
                                "Total de ",
                                r.length,
                                " ",
                                r.length === 1 ? "item" : "itens",
                              ],
                            }),
                            d.jsx("button", {
                              onClick: () =>
                                (window.location.href = "/create-item"),
                              className:
                                "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors",
                              children: "Novo Item",
                            }),
                          ],
                        }),
                        d.jsx("div", {
                          className:
                            "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",
                          children: r.map((g) =>
                            d.jsxs(
                              "div",
                              {
                                className:
                                  "bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow",
                                children: [
                                  d.jsx("div", {
                                    className:
                                      "h-48 bg-gray-200 flex items-center justify-center",
                                    children: g.imagemUrl
                                      ? d.jsx("img", {
                                          src: g.imagemUrl,
                                          alt: g.nome,
                                          className:
                                            "h-full w-full object-cover",
                                        })
                                      : d.jsxs("div", {
                                          className:
                                            "text-gray-400 text-center",
                                          children: [
                                            d.jsx("svg", {
                                              className:
                                                "mx-auto h-12 w-12 mb-2",
                                              fill: "none",
                                              stroke: "currentColor",
                                              viewBox: "0 0 24 24",
                                              children: d.jsx("path", {
                                                strokeLinecap: "round",
                                                strokeLinejoin: "round",
                                                strokeWidth: 2,
                                                d: "M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z",
                                              }),
                                            }),
                                            "Sem imagem",
                                          ],
                                        }),
                                  }),
                                  d.jsxs("div", {
                                    className: "p-6",
                                    children: [
                                      d.jsxs("div", {
                                        className:
                                          "flex justify-between items-start mb-2",
                                        children: [
                                          d.jsx("h3", {
                                            className:
                                              "text-lg font-semibold text-gray-900",
                                            children: g.nome,
                                          }),
                                          d.jsx("span", {
                                            className:
                                              "bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full",
                                            children: g.categoria,
                                          }),
                                        ],
                                      }),
                                      d.jsx("p", {
                                        className:
                                          "text-gray-600 text-sm mb-4 line-clamp-3",
                                        children: g.descricao,
                                      }),
                                      d.jsx("div", {
                                        className:
                                          "flex justify-between items-center mb-4",
                                        children: d.jsx("span", {
                                          className: `px-2 py-1 rounded-full text-xs ${
                                            g.disponivelParaTroca
                                              ? "bg-green-100 text-green-800"
                                              : "bg-gray-100 text-gray-800"
                                          }`,
                                          children: g.disponivelParaTroca
                                            ? "Disponível"
                                            : "Indisponível",
                                        }),
                                      }),
                                      d.jsxs("div", {
                                        className: "text-xs text-gray-500 mb-4",
                                        children: [
                                          "Criado em:",
                                          " ",
                                          new Date(
                                            g.createdAt
                                          ).toLocaleDateString("pt-BR"),
                                        ],
                                      }),
                                      d.jsxs("div", {
                                        className: "flex space-x-2",
                                        children: [
                                          d.jsx("button", {
                                            onClick: () => y(g.id),
                                            className:
                                              "flex-1 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors text-sm",
                                            children: "Editar",
                                          }),
                                          d.jsx("button", {
                                            onClick: () => v(g.id),
                                            className:
                                              "flex-1 bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors text-sm",
                                            children: "Excluir",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              },
                              g.id
                            )
                          ),
                        }),
                      ],
                    }),
              ],
            }),
          })
      : d.jsx("div", {
          className: "min-h-screen bg-gray-50 flex items-center justify-center",
          children: d.jsxs("div", {
            className: "text-center",
            children: [
              d.jsx("h2", {
                className: "text-2xl font-bold text-gray-900 mb-4",
                children: "Acesso Restrito",
              }),
              d.jsx("p", {
                className: "text-gray-600",
                children: "Você precisa estar logado para ver seus itens.",
              }),
            ],
          }),
        });
  },
  Sx = () => {
    const { user: u } = A.useContext(Za),
      [r, c] = A.useState([]),
      [s, o] = A.useState([]),
      [m, p] = A.useState("received"),
      [b, v] = A.useState(!0),
      [y, g] = A.useState("");
    A.useEffect(() => {
      u && R();
    }, [u]);
    const R = async () => {
        try {
          v(!0);
          const [_, q] = await Promise.all([
            kn.getReceivedProposals(),
            kn.getSentProposals(),
          ]);
          c(_), o(q);
        } catch (_) {
          g("Erro ao carregar propostas"),
            console.error("Erro ao buscar propostas:", _);
        } finally {
          v(!1);
        }
      },
      C = async (_) => {
        try {
          await kn.acceptProposal(_), await R();
        } catch (q) {
          g("Erro ao aceitar proposta"),
            console.error("Erro ao aceitar proposta:", q);
        }
      },
      G = async (_) => {
        try {
          await kn.rejectProposal(_), await R();
        } catch (q) {
          g("Erro ao rejeitar proposta"),
            console.error("Erro ao rejeitar proposta:", q);
        }
      },
      B = (_) => {
        switch (_) {
          case "Pendente":
            return "bg-yellow-100 text-yellow-800";
          case "Aceita":
            return "bg-green-100 text-green-800";
          case "Rejeitada":
            return "bg-red-100 text-red-800";
          default:
            return "bg-gray-100 text-gray-800";
        }
      };
    if (!u)
      return d.jsx("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center",
        children: d.jsxs("div", {
          className: "text-center",
          children: [
            d.jsx("h2", {
              className: "text-2xl font-bold text-gray-900 mb-4",
              children: "Acesso Restrito",
            }),
            d.jsx("p", {
              className: "text-gray-600",
              children: "Você precisa estar logado para ver suas propostas.",
            }),
          ],
        }),
      });
    if (b)
      return d.jsx("div", {
        className: "min-h-screen bg-gray-50 flex items-center justify-center",
        children: d.jsx("div", {
          className:
            "animate-spin rounded-full h-32 w-32 border-b-2 border-green-600",
        }),
      });
    const Y = m === "received" ? r : s;
    return d.jsx("div", {
      className: "min-h-screen bg-gray-50 py-8",
      children: d.jsxs("div", {
        className: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",
        children: [
          d.jsxs("div", {
            className: "mb-8",
            children: [
              d.jsx("h1", {
                className: "text-3xl font-bold text-gray-900 mb-4",
                children: "Propostas de Troca",
              }),
              y &&
                d.jsx("div", {
                  className:
                    "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",
                  children: y,
                }),
              d.jsx("div", {
                className: "border-b border-gray-200",
                children: d.jsxs("nav", {
                  className: "-mb-px flex space-x-8",
                  children: [
                    d.jsxs("button", {
                      onClick: () => p("received"),
                      className: `py-2 px-1 border-b-2 font-medium text-sm ${
                        m === "received"
                          ? "border-green-500 text-green-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`,
                      children: ["Recebidas (", r.length, ")"],
                    }),
                    d.jsxs("button", {
                      onClick: () => p("sent"),
                      className: `py-2 px-1 border-b-2 font-medium text-sm ${
                        m === "sent"
                          ? "border-green-500 text-green-600"
                          : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                      }`,
                      children: ["Enviadas (", s.length, ")"],
                    }),
                  ],
                }),
              }),
            ],
          }),
          Y.length === 0
            ? d.jsxs("div", {
                className: "text-center py-12",
                children: [
                  d.jsx("div", {
                    className: "text-gray-500 text-xl mb-4",
                    children:
                      m === "received"
                        ? "Você não recebeu nenhuma proposta ainda"
                        : "Você não enviou nenhuma proposta ainda",
                  }),
                  d.jsx("button", {
                    onClick: () => (window.location.href = "/items"),
                    className:
                      "bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors",
                    children: "Explorar Itens",
                  }),
                ],
              })
            : d.jsx("div", {
                className: "space-y-6",
                children: Y.map((_) =>
                  d.jsxs(
                    "div",
                    {
                      className: "bg-white rounded-lg shadow-md p-6",
                      children: [
                        d.jsx("div", {
                          className: "flex justify-between items-start mb-4",
                          children: d.jsxs("div", {
                            className: "flex-1",
                            children: [
                              d.jsxs("div", {
                                className:
                                  "flex items-center justify-between mb-2",
                                children: [
                                  d.jsxs("h3", {
                                    className:
                                      "text-lg font-semibold text-gray-900",
                                    children: ["Proposta #", _.id],
                                  }),
                                  d.jsx("span", {
                                    className: `px-3 py-1 rounded-full text-sm ${B(
                                      _.status
                                    )}`,
                                    children: _.status,
                                  }),
                                ],
                              }),
                              d.jsx("p", {
                                className: "text-sm text-gray-600 mb-4",
                                children: _.descricao,
                              }),
                            ],
                          }),
                        }),
                        d.jsxs("div", {
                          className: "mt-4 text-sm text-gray-500",
                          children: [
                            m === "received"
                              ? `Proposta de: ${
                                  _.proponente?.nome || "Usuário"
                                }`
                              : `Proposta para: ${
                                  _.proprietario?.nome || "Usuário"
                                }`,
                            " • ",
                            new Date(_.createdAt).toLocaleDateString("pt-BR"),
                          ],
                        }),
                        m === "received" &&
                          _.status === "Pendente" &&
                          d.jsxs("div", {
                            className: "mt-6 flex space-x-3",
                            children: [
                              d.jsx("button", {
                                onClick: () => C(_.id),
                                className:
                                  "bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition-colors",
                                children: "Aceitar",
                              }),
                              d.jsx("button", {
                                onClick: () => G(_.id),
                                className:
                                  "bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors",
                                children: "Rejeitar",
                              }),
                            ],
                          }),
                      ],
                    },
                    _.id
                  )
                ),
              }),
        ],
      }),
    });
  },
  Ex = () => {
    const { user: u } = A.useContext(Za),
      [r, c] = A.useState({
        nome: "",
        descricao: "",
        categoria: "",
        imagem: "",
      }),
      [s, o] = A.useState(!1),
      [m, p] = A.useState(""),
      [b, v] = A.useState(!1),
      y = [
        "Livros",
        "Roupas",
        "Brinquedos",
        "Eletrônicos",
        "Ferramentas",
        "Casa e Jardim",
        "Esportes",
        "Música",
        "Outros",
      ],
      g = (C) => {
        const { name: G, value: B } = C.target;
        c((Y) => ({ ...Y, [G]: B }));
      },
      R = async (C) => {
        if ((C.preventDefault(), !u)) {
          p("Você precisa estar logado para criar um item");
          return;
        }
        if (!r.nome || !r.descricao || !r.categoria) {
          p("Por favor, preencha todos os campos obrigatórios");
          return;
        }
        o(!0), p("");
        try {
          const G = {
            nome: r.nome,
            descricao: r.descricao,
            categoria: r.categoria,
            imagemUrl: r.imagem || null,
            disponivelParaTroca: !0,
          };
          await Wn.createItem(G),
            v(!0),
            c({ nome: "", descricao: "", categoria: "", imagem: "" }),
            setTimeout(() => {
              window.location.href = "/my-items";
            }, 2e3);
        } catch (G) {
          p("Erro ao criar item. Tente novamente."),
            console.error("Erro ao criar item:", G);
        } finally {
          o(!1);
        }
      };
    return u
      ? b
        ? d.jsx("div", {
            className:
              "min-h-screen bg-gray-50 flex items-center justify-center",
            children: d.jsxs("div", {
              className: "text-center",
              children: [
                d.jsx("div", {
                  className: "mb-4",
                  children: d.jsx("svg", {
                    className: "mx-auto h-16 w-16 text-green-600",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    children: d.jsx("path", {
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: 2,
                      d: "M5 13l4 4L19 7",
                    }),
                  }),
                }),
                d.jsx("h2", {
                  className: "text-2xl font-bold text-gray-900 mb-4",
                  children: "Item Criado com Sucesso!",
                }),
                d.jsx("p", {
                  className: "text-gray-600 mb-6",
                  children:
                    "Seu item foi cadastrado e está disponível para troca.",
                }),
                d.jsx("p", {
                  className: "text-gray-500",
                  children: "Redirecionando para seus itens...",
                }),
              ],
            }),
          })
        : d.jsx("div", {
            className: "min-h-screen bg-gray-50 py-8",
            children: d.jsxs("div", {
              className: "max-w-2xl mx-auto px-4 sm:px-6 lg:px-8",
              children: [
                d.jsxs("div", {
                  className: "mb-8",
                  children: [
                    d.jsx("h1", {
                      className: "text-3xl font-bold text-gray-900 mb-4",
                      children: "Criar Novo Item",
                    }),
                    d.jsx("p", {
                      className: "text-gray-600",
                      children: "Cadastre um item que você gostaria de trocar.",
                    }),
                  ],
                }),
                d.jsxs("div", {
                  className: "bg-white rounded-lg shadow-md p-6",
                  children: [
                    m &&
                      d.jsx("div", {
                        className:
                          "bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-6",
                        children: m,
                      }),
                    d.jsxs("form", {
                      onSubmit: R,
                      className: "space-y-6",
                      children: [
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              htmlFor: "nome",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Nome do Item *",
                            }),
                            d.jsx("input", {
                              type: "text",
                              id: "nome",
                              name: "nome",
                              value: r.nome,
                              onChange: g,
                              required: !0,
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",
                              placeholder:
                                "Ex: iPhone 12, Livro de Programação, Bicicleta...",
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              htmlFor: "categoria",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Categoria *",
                            }),
                            d.jsxs("select", {
                              id: "categoria",
                              name: "categoria",
                              value: r.categoria,
                              onChange: g,
                              required: !0,
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",
                              children: [
                                d.jsx("option", {
                                  value: "",
                                  children: "Selecione uma categoria",
                                }),
                                y.map((C) =>
                                  d.jsx("option", { value: C, children: C }, C)
                                ),
                              ],
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              htmlFor: "descricao",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "Descrição *",
                            }),
                            d.jsx("textarea", {
                              id: "descricao",
                              name: "descricao",
                              value: r.descricao,
                              onChange: g,
                              required: !0,
                              rows: 4,
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",
                              placeholder:
                                "Descreva o item, seu estado de conservação, características importantes...",
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          children: [
                            d.jsx("label", {
                              htmlFor: "imagem",
                              className:
                                "block text-sm font-medium text-gray-700 mb-2",
                              children: "URL da Imagem",
                            }),
                            d.jsx("input", {
                              type: "url",
                              id: "imagem",
                              name: "imagem",
                              value: r.imagem,
                              onChange: g,
                              className:
                                "w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500",
                              placeholder: "https://exemplo.com/imagem.jpg",
                            }),
                            d.jsx("p", {
                              className: "text-sm text-gray-500 mt-1",
                              children:
                                "Link para uma imagem do item (opcional)",
                            }),
                          ],
                        }),
                        d.jsxs("div", {
                          className: "flex space-x-4 pt-6",
                          children: [
                            d.jsx("button", {
                              type: "button",
                              onClick: () => window.history.back(),
                              className:
                                "flex-1 bg-gray-300 text-gray-700 py-3 px-4 rounded-md hover:bg-gray-400 transition-colors",
                              children: "Cancelar",
                            }),
                            d.jsx("button", {
                              type: "submit",
                              disabled: s,
                              className: `flex-1 py-3 px-4 rounded-md font-medium transition-colors ${
                                s
                                  ? "bg-gray-400 text-gray-600 cursor-not-allowed"
                                  : "bg-green-600 text-white hover:bg-green-700"
                              }`,
                              children: s ? "Criando..." : "Criar Item",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          })
      : d.jsx("div", {
          className: "min-h-screen bg-gray-50 flex items-center justify-center",
          children: d.jsxs("div", {
            className: "text-center",
            children: [
              d.jsx("h2", {
                className: "text-2xl font-bold text-gray-900 mb-4",
                children: "Acesso Restrito",
              }),
              d.jsx("p", {
                className: "text-gray-600 mb-6",
                children: "Você precisa estar logado para criar um item.",
              }),
              d.jsx("button", {
                onClick: () => (window.location.href = "/login"),
                className:
                  "bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700 transition-colors",
                children: "Fazer Login",
              }),
            ],
          }),
        });
  };
function Nx() {
  return d.jsx(mx, {
    children: d.jsx(Ag, {
      children: d.jsxs("div", {
        className: "min-h-screen flex flex-col bg-gray-50",
        children: [
          d.jsx(hx, {}),
          d.jsx("main", {
            className: "flex-grow",
            children: d.jsxs(ng, {
              children: [
                d.jsx(al, { path: "/", element: d.jsx(px, {}) }),
                d.jsx(al, { path: "/login", element: d.jsx(gx, {}) }),
                d.jsx(al, { path: "/register", element: d.jsx(vx, {}) }),
                d.jsx(al, { path: "/items", element: d.jsx(xx, {}) }),
                d.jsx(al, { path: "/my-items", element: d.jsx(bx, {}) }),
                d.jsx(al, { path: "/proposals", element: d.jsx(Sx, {}) }),
                d.jsx(al, { path: "/create-item", element: d.jsx(Ex, {}) }),
                d.jsx(al, {
                  path: "*",
                  element: d.jsx(lg, { to: "/", replace: !0 }),
                }),
              ],
            }),
          }),
          d.jsx(yx, {}),
        ],
      }),
    }),
  });
}
mp.createRoot(document.getElementById("root")).render(
  d.jsx(A.StrictMode, { children: d.jsx(Nx, {}) })
);
