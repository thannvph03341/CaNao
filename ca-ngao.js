/*!
 * GSAP 3.11.3
 * https://greensock.com
 * 
 * @license Copyright 2022, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
 */
! function(t, e) {
  "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e((t = t || self).window = t.window || {})
}(this, function(e) {
  "use strict";

  function _inheritsLoose(t, e) {
      t.prototype = Object.create(e.prototype), (t.prototype.constructor = t).__proto__ = e
  }

  function _assertThisInitialized(t) {
      if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return t
  }

  function r(t) {
      return "string" == typeof t
  }

  function s(t) {
      return "function" == typeof t
  }

  function t(t) {
      return "number" == typeof t
  }

  function u(t) {
      return void 0 === t
  }

  function v(t) {
      return "object" == typeof t
  }

  function w(t) {
      return !1 !== t
  }

  function x() {
      return "undefined" != typeof window
  }

  function y(t) {
      return s(t) || r(t)
  }

  function P(t) {
      return (i = yt(t, ot)) && Ce
  }

  function Q(t, e) {
      return console.warn("Invalid property", t, "set to", e, "Missing plugin? gsap.registerPlugin()")
  }

  function R(t, e) {
      return !e && console.warn(t)
  }

  function S(t, e) {
      return t && (ot[t] = e) && i && (i[t] = e) || ot
  }

  function T() {
      return 0
  }

  function ea(t) {
      var e, r, i = t[0];
      if (v(i) || s(i) || (t = [t]), !(e = (i._gsap || {}).harness)) {
          for (r = gt.length; r-- && !gt[r].targetTest(i););
          e = gt[r]
      }
      for (r = t.length; r--;) t[r] && (t[r]._gsap || (t[r]._gsap = new jt(t[r], e))) || t.splice(r, 1);
      return t
  }

  function fa(t) {
      return t._gsap || ea(Ot(t))[0]._gsap
  }

  function ga(t, e, r) {
      return (r = t[e]) && s(r) ? t[e]() : u(r) && t.getAttribute && t.getAttribute(e) || r
  }

  function ha(t, e) {
      return (t = t.split(",")).forEach(e) || t
  }

  function ia(t) {
      return Math.round(1e5 * t) / 1e5 || 0
  }

  function ja(t) {
      return Math.round(1e7 * t) / 1e7 || 0
  }

  function ka(t, e) {
      var r = e.charAt(0),
          i = parseFloat(e.substr(2));
      return t = parseFloat(t), "+" === r ? t + i : "-" === r ? t - i : "*" === r ? t * i : t / i
  }

  function la(t, e) {
      for (var r = e.length, i = 0; t.indexOf(e[i]) < 0 && ++i < r;);
      return i < r
  }

  function ma() {
      var t, e, r = ct.length,
          i = ct.slice(0);
      for (dt = {}, t = ct.length = 0; t < r; t++)(e = i[t]) && e._lazy && (e.render(e._lazy[0], e._lazy[1], !0)._lazy = 0)
  }

  function na(t, e, r, i) {
      ct.length && ma(), t.render(e, r, i || B && e < 0 && (t._initted || t._startAt)), ct.length && ma()
  }

  function oa(t) {
      var e = parseFloat(t);
      return (e || 0 === e) && (t + "").match(at).length < 2 ? e : r(t) ? t.trim() : t
  }

  function pa(t) {
      return t
  }

  function qa(t, e) {
      for (var r in e) r in t || (t[r] = e[r]);
      return t
  }

  function ta(t, e) {
      for (var r in e) "__proto__" !== r && "constructor" !== r && "prototype" !== r && (t[r] = v(e[r]) ? ta(t[r] || (t[r] = {}), e[r]) : e[r]);
      return t
  }

  function ua(t, e) {
      var r, i = {};
      for (r in t) r in e || (i[r] = t[r]);
      return i
  }

  function va(t) {
      var e = t.parent || L,
          r = t.keyframes ? function _setKeyframeDefaults(i) {
              return function(t, e) {
                  for (var r in e) r in t || "duration" === r && i || "ease" === r || (t[r] = e[r])
              }
          }($(t.keyframes)) : qa;
      if (w(t.inherit))
          for (; e;) r(t, e.vars.defaults), e = e.parent || e._dp;
      return t
  }

  function xa(t, e, r, i, n) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var a, s = t[i];
      if (n)
          for (a = e[n]; s && s[n] > a;) s = s._prev;
      return s ? (e._next = s._next, s._next = e) : (e._next = t[r], t[r] = e), e._next ? e._next._prev = e : t[i] = e, e._prev = s, e.parent = e._dp = t, e
  }

  function ya(t, e, r, i) {
      void 0 === r && (r = "_first"), void 0 === i && (i = "_last");
      var n = e._prev,
          a = e._next;
      n ? n._next = a : t[r] === e && (t[r] = a), a ? a._prev = n : t[i] === e && (t[i] = n), e._next = e._prev = e.parent = null
  }

  function za(t, e) {
      !t.parent || e && !t.parent.autoRemoveChildren || t.parent.remove(t), t._act = 0
  }

  function Aa(t, e) {
      if (t && (!e || e._end > t._dur || e._start < 0))
          for (var r = t; r;) r._dirty = 1, r = r.parent;
      return t
  }

  function Ca(t, e, r, i) {
      return t._startAt && (B ? t._startAt.revert(ht) : t.vars.immediateRender && !t.vars.autoRevert || t._startAt.render(e, !0, i))
  }

  function Ea(t) {
      return t._repeat ? Tt(t._tTime, t = t.duration() + t._rDelay) * t : 0
  }

  function Ga(t, e) {
      return (t - e._start) * e._ts + (0 <= e._ts ? 0 : e._dirty ? e.totalDuration() : e._tDur)
  }

  function Ha(t) {
      return t._end = ja(t._start + (t._tDur / Math.abs(t._ts || t._rts || V) || 0))
  }

  function Ia(t, e) {
      var r = t._dp;
      return r && r.smoothChildTiming && t._ts && (t._start = ja(r._time - (0 < t._ts ? e / t._ts : ((t._dirty ? t.totalDuration() : t._tDur) - e) / -t._ts)), Ha(t), r._dirty || Aa(r, t)), t
  }

  function Ja(t, e) {
      var r;
      if ((e._time || e._initted && !e._dur) && (r = Ga(t.rawTime(), e), (!e._dur || kt(0, e.totalDuration(), r) - e._tTime > V) && e.render(r, !0)), Aa(t, e)._dp && t._initted && t._time >= t._dur && t._ts) {
          if (t._dur < t.duration())
              for (r = t; r._dp;) 0 <= r.rawTime() && r.totalTime(r._tTime), r = r._dp;
          t._zTime = -V
      }
  }

  function Ka(e, r, i, n) {
      return r.parent && za(r), r._start = ja((t(i) ? i : i || e !== L ? xt(e, i, r) : e._time) + r._delay), r._end = ja(r._start + (r.totalDuration() / Math.abs(r.timeScale()) || 0)), xa(e, r, "_first", "_last", e._sort ? "_start" : 0), bt(r) || (e._recent = r), n || Ja(e, r), e._ts < 0 && Ia(e, e._tTime), e
  }

  function La(t, e) {
      return (ot.ScrollTrigger || Q("scrollTrigger", e)) && ot.ScrollTrigger.create(e, t)
  }

  function Ma(t, e, r, i, n) {
      return Ht(t, e, n), t._initted ? !r && t._pt && !B && (t._dur && !1 !== t.vars.lazy || !t._dur && t.vars.lazy) && f !== Et.frame ? (ct.push(t), t._lazy = [n, i], 1) : void 0 : 1
  }

  function Ra(t, e, r, i) {
      var n = t._repeat,
          a = ja(e) || 0,
          s = t._tTime / t._tDur;
      return s && !i && (t._time *= a / t._dur), t._dur = a, t._tDur = n ? n < 0 ? 1e10 : ja(a * (n + 1) + t._rDelay * n) : a, 0 < s && !i && Ia(t, t._tTime = t._tDur * s), t.parent && Ha(t), r || Aa(t.parent, t), t
  }

  function Sa(t) {
      return t instanceof Ut ? Aa(t) : Ra(t, t._dur)
  }

  function Va(e, r, i) {
      var n, a, s = t(r[1]),
          o = (s ? 2 : 1) + (e < 2 ? 0 : 1),
          u = r[o];
      if (s && (u.duration = r[1]), u.parent = i, e) {
          for (n = u, a = i; a && !("immediateRender" in n);) n = a.vars.defaults || {}, a = w(a.vars.inherit) && a.parent;
          u.immediateRender = w(n.immediateRender), e < 2 ? u.runBackwards = 1 : u.startAt = r[o - 1]
      }
      return new Gt(r[0], u, r[1 + o])
  }

  function Wa(t, e) {
      return t || 0 === t ? e(t) : e
  }

  function Ya(t, e) {
      return r(t) && (e = st.exec(t)) ? e[1] : ""
  }

  function _a(t, e) {
      return t && v(t) && "length" in t && (!e && !t.length || t.length - 1 in t && v(t[0])) && !t.nodeType && t !== h
  }

  function cb(r) {
      return r = Ot(r)[0] || R("Invalid scope") || {},
          function(t) {
              var e = r.current || r.nativeElement || r;
              return Ot(t, e.querySelectorAll ? e : e === r ? R("Invalid scope") || a.createElement("div") : r)
          }
  }

  function db(t) {
      return t.sort(function() {
          return .5 - Math.random()
      })
  }

  function eb(t) {
      if (s(t)) return t;
      var p = v(t) ? t : {
              each: t
          },
          _ = Yt(p.ease),
          m = p.from || 0,
          g = parseFloat(p.base) || 0,
          y = {},
          e = 0 < m && m < 1,
          T = isNaN(m) || e,
          b = p.axis,
          w = m,
          x = m;
      return r(m) ? w = x = {
              center: .5,
              edges: .5,
              end: 1
          } [m] || 0 : !e && T && (w = m[0], x = m[1]),
          function(t, e, r) {
              var i, n, a, s, o, u, h, l, f, c = (r || p).length,
                  d = y[c];
              if (!d) {
                  if (!(f = "auto" === p.grid ? 0 : (p.grid || [1, U])[1])) {
                      for (h = -U; h < (h = r[f++].getBoundingClientRect().left) && f < c;);
                      f--
                  }
                  for (d = y[c] = [], i = T ? Math.min(f, c) * w - .5 : m % f, n = f === U ? 0 : T ? c * x / f - .5 : m / f | 0, l = U, u = h = 0; u < c; u++) a = u % f - i, s = n - (u / f | 0), d[u] = o = b ? Math.abs("y" === b ? s : a) : K(a * a + s * s), h < o && (h = o), o < l && (l = o);
                  "random" === m && db(d), d.max = h - l, d.min = l, d.v = c = (parseFloat(p.amount) || parseFloat(p.each) * (c < f ? c - 1 : b ? "y" === b ? c / f : f : Math.max(f, c / f)) || 0) * ("edges" === m ? -1 : 1), d.b = c < 0 ? g - c : g, d.u = Ya(p.amount || p.each) || 0, _ = _ && c < 0 ? Lt(_) : _
              }
              return c = (d[t] - d.min) / d.max || 0, ja(d.b + (_ ? _(c) : c) * d.v) + d.u
          }
  }

  function fb(i) {
      var n = Math.pow(10, ((i + "").split(".")[1] || "").length);
      return function(e) {
          var r = ja(Math.round(parseFloat(e) / i) * i * n);
          return (r - r % 1) / n + (t(e) ? 0 : Ya(e))
      }
  }

  function gb(h, e) {
      var l, f, r = $(h);
      return !r && v(h) && (l = r = h.radius || U, h.values ? (h = Ot(h.values), (f = !t(h[0])) && (l *= l)) : h = fb(h.increment)), Wa(e, r ? s(h) ? function(t) {
          return f = h(t), Math.abs(f - t) <= l ? f : t
      } : function(e) {
          for (var r, i, n = parseFloat(f ? e.x : e), a = parseFloat(f ? e.y : 0), s = U, o = 0, u = h.length; u--;)(r = f ? (r = h[u].x - n) * r + (i = h[u].y - a) * i : Math.abs(h[u] - n)) < s && (s = r, o = u);
          return o = !l || s <= l ? h[o] : e, f || o === e || t(e) ? o : o + Ya(e)
      } : fb(h))
  }

  function hb(t, e, r, i) {
      return Wa($(t) ? !e : !0 === r ? !!(r = 0) : !i, function() {
          return $(t) ? t[~~(Math.random() * t.length)] : (r = r || 1e-5) && (i = r < 1 ? Math.pow(10, (r + "").length - 2) : 1) && Math.floor(Math.round((t - r / 2 + Math.random() * (e - t + .99 * r)) / r) * r * i) / i
      })
  }

  function lb(e, r, t) {
      return Wa(t, function(t) {
          return e[~~r(t)]
      })
  }

  function ob(t) {
      for (var e, r, i, n, a = 0, s = ""; ~(e = t.indexOf("random(", a));) i = t.indexOf(")", e), n = "[" === t.charAt(e + 7), r = t.substr(e + 7, i - e - 7).match(n ? at : tt), s += t.substr(a, e - a) + hb(n ? r : +r[0], n ? 0 : +r[1], +r[2] || 1e-5), a = i + 1;
      return s + t.substr(a, t.length - a)
  }

  function rb(t, e, r) {
      var i, n, a, s = t.labels,
          o = U;
      for (i in s)(n = s[i] - e) < 0 == !!r && n && o > (n = Math.abs(n)) && (a = i, o = n);
      return a
  }

  function tb(t) {
      return za(t), t.scrollTrigger && t.scrollTrigger.kill(!!B), t.progress() < 1 && Ct(t, "onInterrupt"), t
  }

  function yb(t, e, r) {
      return (6 * (t += t < 0 ? 1 : 1 < t ? -1 : 0) < 1 ? e + (r - e) * t * 6 : t < .5 ? r : 3 * t < 2 ? e + (r - e) * (2 / 3 - t) * 6 : e) * At + .5 | 0
  }

  function zb(e, r, i) {
      var n, a, s, o, u, h, l, f, c, d, p = e ? t(e) ? [e >> 16, e >> 8 & At, e & At] : 0 : St.black;
      if (!p) {
          if ("," === e.substr(-1) && (e = e.substr(0, e.length - 1)), St[e]) p = St[e];
          else if ("#" === e.charAt(0)) {
              if (e.length < 6 && (e = "#" + (n = e.charAt(1)) + n + (a = e.charAt(2)) + a + (s = e.charAt(3)) + s + (5 === e.length ? e.charAt(4) + e.charAt(4) : "")), 9 === e.length) return [(p = parseInt(e.substr(1, 6), 16)) >> 16, p >> 8 & At, p & At, parseInt(e.substr(7), 16) / 255];
              p = [(e = parseInt(e.substr(1), 16)) >> 16, e >> 8 & At, e & At]
          } else if ("hsl" === e.substr(0, 3))
              if (p = d = e.match(tt), r) {
                  if (~e.indexOf("=")) return p = e.match(et), i && p.length < 4 && (p[3] = 1), p
              } else o = +p[0] % 360 / 360, u = p[1] / 100, n = 2 * (h = p[2] / 100) - (a = h <= .5 ? h * (u + 1) : h + u - h * u), 3 < p.length && (p[3] *= 1), p[0] = yb(o + 1 / 3, n, a), p[1] = yb(o, n, a), p[2] = yb(o - 1 / 3, n, a);
          else p = e.match(tt) || St.transparent;
          p = p.map(Number)
      }
      return r && !d && (n = p[0] / At, a = p[1] / At, s = p[2] / At, h = ((l = Math.max(n, a, s)) + (f = Math.min(n, a, s))) / 2, l === f ? o = u = 0 : (c = l - f, u = .5 < h ? c / (2 - l - f) : c / (l + f), o = l === n ? (a - s) / c + (a < s ? 6 : 0) : l === a ? (s - n) / c + 2 : (n - a) / c + 4, o *= 60), p[0] = ~~(o + .5), p[1] = ~~(100 * u + .5), p[2] = ~~(100 * h + .5)), i && p.length < 4 && (p[3] = 1), p
  }

  function Ab(t) {
      var r = [],
          i = [],
          n = -1;
      return t.split(Rt).forEach(function(t) {
          var e = t.match(rt) || [];
          r.push.apply(r, e), i.push(n += e.length + 1)
      }), r.c = i, r
  }

  function Bb(t, e, r) {
      var i, n, a, s, o = "",
          u = (t + o).match(Rt),
          h = e ? "hsla(" : "rgba(",
          l = 0;
      if (!u) return t;
      if (u = u.map(function(t) {
              return (t = zb(t, e, 1)) && h + (e ? t[0] + "," + t[1] + "%," + t[2] + "%," + t[3] : t.join(",")) + ")"
          }), r && (a = Ab(t), (i = r.c).join(o) !== a.c.join(o)))
          for (s = (n = t.replace(Rt, "1").split(rt)).length - 1; l < s; l++) o += n[l] + (~i.indexOf(l) ? u.shift() || h + "0,0,0,0)" : (a.length ? a : u.length ? u : r).shift());
      if (!n)
          for (s = (n = t.split(Rt)).length - 1; l < s; l++) o += n[l] + u[l];
      return o + n[s]
  }

  function Eb(t) {
      var e, r = t.join(" ");
      if (Rt.lastIndex = 0, Rt.test(r)) return e = Dt.test(r), t[1] = Bb(t[1], e), t[0] = Bb(t[0], e, Ab(t[1])), !0
  }

  function Nb(t) {
      var e = (t + "").split("("),
          r = Ft[e[0]];
      return r && 1 < e.length && r.config ? r.config.apply(null, ~t.indexOf("{") ? [function _parseObjectInString(t) {
          for (var e, r, i, n = {}, a = t.substr(1, t.length - 3).split(":"), s = a[0], o = 1, u = a.length; o < u; o++) r = a[o], e = o !== u - 1 ? r.lastIndexOf(",") : r.length, i = r.substr(0, e), n[s] = isNaN(i) ? i.replace(Bt, "").trim() : +i, s = r.substr(e + 1).trim();
          return n
      }(e[1])] : function _valueInParentheses(t) {
          var e = t.indexOf("(") + 1,
              r = t.indexOf(")"),
              i = t.indexOf("(", e);
          return t.substring(e, ~i && i < r ? t.indexOf(")", r + 1) : r)
      }(t).split(",").map(oa)) : Ft._CE && It.test(t) ? Ft._CE("", t) : r
  }

  function Pb(t, e) {
      for (var r, i = t._first; i;) i instanceof Ut ? Pb(i, e) : !i.vars.yoyoEase || i._yoyo && i._repeat || i._yoyo === e || (i.timeline ? Pb(i.timeline, e) : (r = i._ease, i._ease = i._yEase, i._yEase = r, i._yoyo = e)), i = i._next
  }

  function Rb(t, e, r, i) {
      void 0 === r && (r = function easeOut(t) {
          return 1 - e(1 - t)
      }), void 0 === i && (i = function easeInOut(t) {
          return t < .5 ? e(2 * t) / 2 : 1 - e(2 * (1 - t)) / 2
      });
      var n, a = {
          easeIn: e,
          easeOut: r,
          easeInOut: i
      };
      return ha(t, function(t) {
          for (var e in Ft[t] = ot[t] = a, Ft[n = t.toLowerCase()] = r, a) Ft[n + ("easeIn" === e ? ".in" : "easeOut" === e ? ".out" : ".inOut")] = Ft[t + "." + e] = a[e]
      }), a
  }

  function Sb(e) {
      return function(t) {
          return t < .5 ? (1 - e(1 - 2 * t)) / 2 : .5 + e(2 * (t - .5)) / 2
      }
  }

  function Tb(r, t, e) {
      function Hm(t) {
          return 1 === t ? 1 : i * Math.pow(2, -10 * t) * G((t - a) * n) + 1
      }
      var i = 1 <= t ? t : 1,
          n = (e || (r ? .3 : .45)) / (t < 1 ? t : 1),
          a = n / W * (Math.asin(1 / i) || 0),
          s = "out" === r ? Hm : "in" === r ? function(t) {
              return 1 - Hm(1 - t)
          } : Sb(Hm);
      return n = W / n, s.config = function(t, e) {
          return Tb(r, t, e)
      }, s
  }

  function Ub(e, r) {
      function Pm(t) {
          return t ? --t * t * ((r + 1) * t + r) + 1 : 0
      }
      void 0 === r && (r = 1.70158);
      var t = "out" === e ? Pm : "in" === e ? function(t) {
          return 1 - Pm(1 - t)
      } : Sb(Pm);
      return t.config = function(t) {
          return Ub(e, t)
      }, t
  }
  var I, B, l, L, h, n, a, i, o, f, c, d, p, _, m, g, b, k, M, O, C, A, D, E, z, F, Y, N, j = {
          autoSleep: 120,
          force3D: "auto",
          nullTargetWarn: 1,
          units: {
              lineHeight: ""
          }
      },
      q = {
          duration: .5,
          overwrite: !1,
          delay: 0
      },
      U = 1e8,
      V = 1 / U,
      W = 2 * Math.PI,
      X = W / 4,
      H = 0,
      K = Math.sqrt,
      Z = Math.cos,
      G = Math.sin,
      J = "function" == typeof ArrayBuffer && ArrayBuffer.isView || function() {},
      $ = Array.isArray,
      tt = /(?:-?\.?\d|\.)+/gi,
      et = /[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,
      rt = /[-+=.]*\d+[.e-]*\d*[a-z%]*/g,
      it = /[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,
      nt = /[+-]=-?[.\d]+/,
      at = /[^,'"\[\]\s]+/gi,
      st = /^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,
      ot = {},
      ut = {
          suppressEvents: !0,
          isStart: !0,
          kill: !1
      },
      ht = {
          suppressEvents: !0,
          kill: !1
      },
      lt = {
          suppressEvents: !0
      },
      ft = {},
      ct = [],
      dt = {},
      pt = {},
      _t = {},
      mt = 30,
      gt = [],
      vt = "",
      yt = function _merge(t, e) {
          for (var r in e) t[r] = e[r];
          return t
      },
      Tt = function _animationCycle(t, e) {
          var r = Math.floor(t /= e);
          return t && r === t ? r - 1 : r
      },
      bt = function _isFromOrFromStart(t) {
          var e = t.data;
          return "isFromStart" === e || "isStart" === e
      },
      wt = {
          _start: 0,
          endTime: T,
          totalDuration: T
      },
      xt = function _parsePosition(t, e, i) {
          var n, a, s, o = t.labels,
              u = t._recent || wt,
              h = t.duration() >= U ? u.endTime(!1) : t._dur;
          return r(e) && (isNaN(e) || e in o) ? (a = e.charAt(0), s = "%" === e.substr(-1), n = e.indexOf("="), "<" === a || ">" === a ? (0 <= n && (e = e.replace(/=/, "")), ("<" === a ? u._start : u.endTime(0 <= u._repeat)) + (parseFloat(e.substr(1)) || 0) * (s ? (n < 0 ? u : i).totalDuration() / 100 : 1)) : n < 0 ? (e in o || (o[e] = h), o[e]) : (a = parseFloat(e.charAt(n - 1) + e.substr(n + 1)), s && i && (a = a / 100 * ($(i) ? i[0] : i).totalDuration()), 1 < n ? _parsePosition(t, e.substr(0, n - 1), i) + a : h + a)) : null == e ? h : +e
      },
      kt = function _clamp(t, e, r) {
          return r < t ? t : e < r ? e : r
      },
      Mt = [].slice,
      Ot = function toArray(t, e, i) {
          return l && !e && l.selector ? l.selector(t) : !r(t) || i || !n && zt() ? $(t) ? function _flatten(t, e, i) {
              return void 0 === i && (i = []), t.forEach(function(t) {
                  return r(t) && !e || _a(t, 1) ? i.push.apply(i, Ot(t)) : i.push(t)
              }) || i
          }(t, i) : _a(t) ? Mt.call(t, 0) : t ? [t] : [] : Mt.call((e || a).querySelectorAll(t), 0)
      },
      Pt = function mapRange(e, t, r, i, n) {
          var a = t - e,
              s = i - r;
          return Wa(n, function(t) {
              return r + ((t - e) / a * s || 0)
          })
      },
      Ct = function _callback(t, e, r) {
          var i, n, a, s = t.vars,
              o = s[e],
              u = l,
              h = t._ctx;
          if (o) return i = s[e + "Params"], n = s.callbackScope || t, r && ct.length && ma(), h && (l = h), a = i ? o.apply(n, i) : o.call(n), l = u, a
      },
      At = 255,
      St = {
          aqua: [0, At, At],
          lime: [0, At, 0],
          silver: [192, 192, 192],
          black: [0, 0, 0],
          maroon: [128, 0, 0],
          teal: [0, 128, 128],
          blue: [0, 0, At],
          navy: [0, 0, 128],
          white: [At, At, At],
          olive: [128, 128, 0],
          yellow: [At, At, 0],
          orange: [At, 165, 0],
          gray: [128, 128, 128],
          purple: [128, 0, 128],
          green: [0, 128, 0],
          red: [At, 0, 0],
          pink: [At, 192, 203],
          cyan: [0, At, At],
          transparent: [At, At, At, 0]
      },
      Rt = function() {
          var t, e = "(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b";
          for (t in St) e += "|" + t + "\\b";
          return new RegExp(e + ")", "gi")
      }(),
      Dt = /hsl[a]?\(/,
      Et = (M = Date.now, O = 500, C = 33, A = M(), D = A, z = E = 1e3 / 240, g = {
          time: 0,
          frame: 0,
          tick: function tick() {
              wl(!0)
          },
          deltaRatio: function deltaRatio(t) {
              return b / (1e3 / (t || 60))
          },
          wake: function wake() {
              o && (!n && x() && (h = n = window, a = h.document || {}, ot.gsap = Ce, (h.gsapVersions || (h.gsapVersions = [])).push(Ce.version), P(i || h.GreenSockGlobals || !h.gsap && h || {}), m = h.requestAnimationFrame), p && g.sleep(), _ = m || function(t) {
                  return setTimeout(t, z - 1e3 * g.time + 1 | 0)
              }, d = 1, wl(2))
          },
          sleep: function sleep() {
              (m ? h.cancelAnimationFrame : clearTimeout)(p), d = 0, _ = T
          },
          lagSmoothing: function lagSmoothing(t, e) {
              O = t || 1e8, C = Math.min(e, O, 0)
          },
          fps: function fps(t) {
              E = 1e3 / (t || 240), z = 1e3 * g.time + E
          },
          add: function add(n, t, e) {
              var a = t ? function(t, e, r, i) {
                  n(t, e, r, i), g.remove(a)
              } : n;
              return g.remove(n), F[e ? "unshift" : "push"](a), zt(), a
          },
          remove: function remove(t, e) {
              ~(e = F.indexOf(t)) && F.splice(e, 1) && e <= k && k--
          },
          _listeners: F = []
      }),
      zt = function _wake() {
          return !d && Et.wake()
      },
      Ft = {},
      It = /^[\d.\-M][\d.\-,\s]/,
      Bt = /["']/g,
      Lt = function _invertEase(e) {
          return function(t) {
              return 1 - e(1 - t)
          }
      },
      Yt = function _parseEase(t, e) {
          return t && (s(t) ? t : Ft[t] || Nb(t)) || e
      };

  function wl(t) {
      var e, r, i, n, a = M() - D,
          s = !0 === t;
      if (O < a && (A += a - C), (0 < (e = (i = (D += a) - A) - z) || s) && (n = ++g.frame, b = i - 1e3 * g.time, g.time = i /= 1e3, z += e + (E <= e ? 4 : E - e), r = 1), s || (p = _(wl)), r)
          for (k = 0; k < F.length; k++) F[k](i, b, n, t)
  }

  function en(t) {
      return t < N ? Y * t * t : t < .7272727272727273 ? Y * Math.pow(t - 1.5 / 2.75, 2) + .75 : t < .9090909090909092 ? Y * (t -= 2.25 / 2.75) * t + .9375 : Y * Math.pow(t - 2.625 / 2.75, 2) + .984375
  }
  ha("Linear,Quad,Cubic,Quart,Quint,Strong", function(t, e) {
      var r = e < 5 ? e + 1 : e;
      Rb(t + ",Power" + (r - 1), e ? function(t) {
          return Math.pow(t, r)
      } : function(t) {
          return t
      }, function(t) {
          return 1 - Math.pow(1 - t, r)
      }, function(t) {
          return t < .5 ? Math.pow(2 * t, r) / 2 : 1 - Math.pow(2 * (1 - t), r) / 2
      })
  }), Ft.Linear.easeNone = Ft.none = Ft.Linear.easeIn, Rb("Elastic", Tb("in"), Tb("out"), Tb()), Y = 7.5625, N = 1 / 2.75, Rb("Bounce", function(t) {
      return 1 - en(1 - t)
  }, en), Rb("Expo", function(t) {
      return t ? Math.pow(2, 10 * (t - 1)) : 0
  }), Rb("Circ", function(t) {
      return -(K(1 - t * t) - 1)
  }), Rb("Sine", function(t) {
      return 1 === t ? 1 : 1 - Z(t * X)
  }), Rb("Back", Ub("in"), Ub("out"), Ub()), Ft.SteppedEase = Ft.steps = ot.SteppedEase = {
      config: function config(t, e) {
          void 0 === t && (t = 1);
          var r = 1 / t,
              i = t + (e ? 0 : 1),
              n = e ? 1 : 0;
          return function(t) {
              return ((i * kt(0, .99999999, t) | 0) + n) * r
          }
      }
  }, q.ease = Ft["quad.out"], ha("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt", function(t) {
      return vt += t + "," + t + "Params,"
  });
  var Nt, jt = function GSCache(t, e) {
          this.id = H++, (t._gsap = this).target = t, this.harness = e, this.get = e ? e.get : ga, this.set = e ? e.getSetter : re
      },
      qt = ((Nt = Animation.prototype).delay = function delay(t) {
          return t || 0 === t ? (this.parent && this.parent.smoothChildTiming && this.startTime(this._start + t - this._delay), this._delay = t, this) : this._delay
      }, Nt.duration = function duration(t) {
          return arguments.length ? this.totalDuration(0 < this._repeat ? t + (t + this._rDelay) * this._repeat : t) : this.totalDuration() && this._dur
      }, Nt.totalDuration = function totalDuration(t) {
          return arguments.length ? (this._dirty = 0, Ra(this, this._repeat < 0 ? t : (t - this._repeat * this._rDelay) / (this._repeat + 1))) : this._tDur
      }, Nt.totalTime = function totalTime(t, e) {
          if (zt(), !arguments.length) return this._tTime;
          var r = this._dp;
          if (r && r.smoothChildTiming && this._ts) {
              for (Ia(this, t), !r._dp || r.parent || Ja(r, this); r && r.parent;) r.parent._time !== r._start + (0 <= r._ts ? r._tTime / r._ts : (r.totalDuration() - r._tTime) / -r._ts) && r.totalTime(r._tTime, !0), r = r.parent;
              !this.parent && this._dp.autoRemoveChildren && (0 < this._ts && t < this._tDur || this._ts < 0 && 0 < t || !this._tDur && !t) && Ka(this._dp, this, this._start - this._delay)
          }
          return (this._tTime !== t || !this._dur && !e || this._initted && Math.abs(this._zTime) === V || !t && !this._initted && (this.add || this._ptLookup)) && (this._ts || (this._pTime = t), na(this, t, e)), this
      }, Nt.time = function time(t, e) {
          return arguments.length ? this.totalTime(Math.min(this.totalDuration(), t + Ea(this)) % (this._dur + this._rDelay) || (t ? this._dur : 0), e) : this._time
      }, Nt.totalProgress = function totalProgress(t, e) {
          return arguments.length ? this.totalTime(this.totalDuration() * t, e) : this.totalDuration() ? Math.min(1, this._tTime / this._tDur) : this.ratio
      }, Nt.progress = function progress(t, e) {
          return arguments.length ? this.totalTime(this.duration() * (!this._yoyo || 1 & this.iteration() ? t : 1 - t) + Ea(this), e) : this.duration() ? Math.min(1, this._time / this._dur) : this.ratio
      }, Nt.iteration = function iteration(t, e) {
          var r = this.duration() + this._rDelay;
          return arguments.length ? this.totalTime(this._time + (t - 1) * r, e) : this._repeat ? Tt(this._tTime, r) + 1 : 1
      }, Nt.timeScale = function timeScale(t) {
          if (!arguments.length) return this._rts === -V ? 0 : this._rts;
          if (this._rts === t) return this;
          var e = this.parent && this._ts ? Ga(this.parent._time, this) : this._tTime;
          return this._rts = +t || 0, this._ts = this._ps || t === -V ? 0 : this._rts, this.totalTime(kt(-this._delay, this._tDur, e), !0), Ha(this),
              function _recacheAncestors(t) {
                  for (var e = t.parent; e && e.parent;) e._dirty = 1, e.totalDuration(), e = e.parent;
                  return t
              }(this)
      }, Nt.paused = function paused(t) {
          return arguments.length ? (this._ps !== t && ((this._ps = t) ? (this._pTime = this._tTime || Math.max(-this._delay, this.rawTime()), this._ts = this._act = 0) : (zt(), this._ts = this._rts, this.totalTime(this.parent && !this.parent.smoothChildTiming ? this.rawTime() : this._tTime || this._pTime, 1 === this.progress() && Math.abs(this._zTime) !== V && (this._tTime -= V)))), this) : this._ps
      }, Nt.startTime = function startTime(t) {
          if (arguments.length) {
              this._start = t;
              var e = this.parent || this._dp;
              return !e || !e._sort && this.parent || Ka(e, this, t - this._delay), this
          }
          return this._start
      }, Nt.endTime = function endTime(t) {
          return this._start + (w(t) ? this.totalDuration() : this.duration()) / Math.abs(this._ts || 1)
      }, Nt.rawTime = function rawTime(t) {
          var e = this.parent || this._dp;
          return e ? t && (!this._ts || this._repeat && this._time && this.totalProgress() < 1) ? this._tTime % (this._dur + this._rDelay) : this._ts ? Ga(e.rawTime(t), this) : this._tTime : this._tTime
      }, Nt.revert = function revert(t) {
          void 0 === t && (t = lt);
          var e = B;
          return B = t, (this._initted || this._startAt) && (this.timeline && this.timeline.revert(t), this.totalTime(-.01, t.suppressEvents)), "nested" !== this.data && !1 !== t.kill && this.kill(), B = e, this
      }, Nt.globalTime = function globalTime(t) {
          for (var e = this, r = arguments.length ? t : e.rawTime(); e;) r = e._start + r / (e._ts || 1), e = e._dp;
          return !this.parent && this.vars.immediateRender ? -1 : r
      }, Nt.repeat = function repeat(t) {
          return arguments.length ? (this._repeat = t === 1 / 0 ? -2 : t, Sa(this)) : -2 === this._repeat ? 1 / 0 : this._repeat
      }, Nt.repeatDelay = function repeatDelay(t) {
          if (arguments.length) {
              var e = this._time;
              return this._rDelay = t, Sa(this), e ? this.time(e) : this
          }
          return this._rDelay
      }, Nt.yoyo = function yoyo(t) {
          return arguments.length ? (this._yoyo = t, this) : this._yoyo
      }, Nt.seek = function seek(t, e) {
          return this.totalTime(xt(this, t), w(e))
      }, Nt.restart = function restart(t, e) {
          return this.play().totalTime(t ? -this._delay : 0, w(e))
      }, Nt.play = function play(t, e) {
          return null != t && this.seek(t, e), this.reversed(!1).paused(!1)
      }, Nt.reverse = function reverse(t, e) {
          return null != t && this.seek(t || this.totalDuration(), e), this.reversed(!0).paused(!1)
      }, Nt.pause = function pause(t, e) {
          return null != t && this.seek(t, e), this.paused(!0)
      }, Nt.resume = function resume() {
          return this.paused(!1)
      }, Nt.reversed = function reversed(t) {
          return arguments.length ? (!!t !== this.reversed() && this.timeScale(-this._rts || (t ? -V : 0)), this) : this._rts < 0
      }, Nt.invalidate = function invalidate() {
          return this._initted = this._act = 0, this._zTime = -V, this
      }, Nt.isActive = function isActive() {
          var t, e = this.parent || this._dp,
              r = this._start;
          return !(e && !(this._ts && this._initted && e.isActive() && (t = e.rawTime(!0)) >= r && t < this.endTime(!0) - V))
      }, Nt.eventCallback = function eventCallback(t, e, r) {
          var i = this.vars;
          return 1 < arguments.length ? (e ? (i[t] = e, r && (i[t + "Params"] = r), "onUpdate" === t && (this._onUpdate = e)) : delete i[t], this) : i[t]
      }, Nt.then = function then(t) {
          var i = this;
          return new Promise(function(e) {
              function zo() {
                  var t = i.then;
                  i.then = null, s(r) && (r = r(i)) && (r.then || r === i) && (i.then = t), e(r), i.then = t
              }
              var r = s(t) ? t : pa;
              i._initted && 1 === i.totalProgress() && 0 <= i._ts || !i._tTime && i._ts < 0 ? zo() : i._prom = zo
          })
      }, Nt.kill = function kill() {
          tb(this)
      }, Animation);

  function Animation(t) {
      this.vars = t, this._delay = +t.delay || 0, (this._repeat = t.repeat === 1 / 0 ? -2 : t.repeat || 0) && (this._rDelay = t.repeatDelay || 0, this._yoyo = !!t.yoyo || !!t.yoyoEase), this._ts = 1, Ra(this, +t.duration, 1, 1), this.data = t.data, l && (this._ctx = l).data.push(this), d || Et.wake()
  }
  qa(qt.prototype, {
      _time: 0,
      _start: 0,
      _end: 0,
      _tTime: 0,
      _tDur: 0,
      _dirty: 0,
      _repeat: 0,
      _yoyo: !1,
      parent: null,
      _initted: !1,
      _rDelay: 0,
      _ts: 1,
      _dp: 0,
      ratio: 0,
      _zTime: -V,
      _prom: 0,
      _ps: !1,
      _rts: 1
  });
  var Ut = function(i) {
      function Timeline(t, e) {
          var r;
          return void 0 === t && (t = {}), (r = i.call(this, t) || this).labels = {}, r.smoothChildTiming = !!t.smoothChildTiming, r.autoRemoveChildren = !!t.autoRemoveChildren, r._sort = w(t.sortChildren), L && Ka(t.parent || L, _assertThisInitialized(r), e), t.reversed && r.reverse(), t.paused && r.paused(!0), t.scrollTrigger && La(_assertThisInitialized(r), t.scrollTrigger), r
      }
      _inheritsLoose(Timeline, i);
      var e = Timeline.prototype;
      return e.to = function to(t, e, r) {
          return Va(0, arguments, this), this
      }, e.from = function from(t, e, r) {
          return Va(1, arguments, this), this
      }, e.fromTo = function fromTo(t, e, r, i) {
          return Va(2, arguments, this), this
      }, e.set = function set(t, e, r) {
          return e.duration = 0, e.parent = this, va(e).repeatDelay || (e.repeat = 0), e.immediateRender = !!e.immediateRender, new Gt(t, e, xt(this, r), 1), this
      }, e.call = function call(t, e, r) {
          return Ka(this, Gt.delayedCall(0, t, e), r)
      }, e.staggerTo = function staggerTo(t, e, r, i, n, a, s) {
          return r.duration = e, r.stagger = r.stagger || i, r.onComplete = a, r.onCompleteParams = s, r.parent = this, new Gt(t, r, xt(this, n)), this
      }, e.staggerFrom = function staggerFrom(t, e, r, i, n, a, s) {
          return r.runBackwards = 1, va(r).immediateRender = w(r.immediateRender), this.staggerTo(t, e, r, i, n, a, s)
      }, e.staggerFromTo = function staggerFromTo(t, e, r, i, n, a, s, o) {
          return i.startAt = r, va(i).immediateRender = w(i.immediateRender), this.staggerTo(t, e, i, n, a, s, o)
      }, e.render = function render(t, e, r) {
          var i, n, a, s, o, u, h, l, f, c, d, p, _ = this._time,
              m = this._dirty ? this.totalDuration() : this._tDur,
              g = this._dur,
              v = t <= 0 ? 0 : ja(t),
              y = this._zTime < 0 != t < 0 && (this._initted || !g);
          if (this !== L && m < v && 0 <= t && (v = m), v !== this._tTime || r || y) {
              if (_ !== this._time && g && (v += this._time - _, t += this._time - _), i = v, f = this._start, u = !(l = this._ts), y && (g || (_ = this._zTime), !t && e || (this._zTime = t)), this._repeat) {
                  if (d = this._yoyo, o = g + this._rDelay, this._repeat < -1 && t < 0) return this.totalTime(100 * o + t, e, r);
                  if (i = ja(v % o), v === m ? (s = this._repeat, i = g) : ((s = ~~(v / o)) && s === v / o && (i = g, s--), g < i && (i = g)), c = Tt(this._tTime, o), !_ && this._tTime && c !== s && (c = s), d && 1 & s && (i = g - i, p = 1), s !== c && !this._lock) {
                      var T = d && 1 & c,
                          b = T === (d && 1 & s);
                      if (s < c && (T = !T), _ = T ? 0 : g, this._lock = 1, this.render(_ || (p ? 0 : ja(s * o)), e, !g)._lock = 0, this._tTime = v, !e && this.parent && Ct(this, "onRepeat"), this.vars.repeatRefresh && !p && (this.invalidate()._lock = 1), _ && _ !== this._time || u != !this._ts || this.vars.onRepeat && !this.parent && !this._act) return this;
                      if (g = this._dur, m = this._tDur, b && (this._lock = 2, _ = T ? g : -1e-4, this.render(_, !0), this.vars.repeatRefresh && !p && this.invalidate()), this._lock = 0, !this._ts && !u) return this;
                      Pb(this, p)
                  }
              }
              if (this._hasPause && !this._forcing && this._lock < 2 && (h = function _findNextPauseTween(t, e, r) {
                      var i;
                      if (e < r)
                          for (i = t._first; i && i._start <= r;) {
                              if ("isPause" === i.data && i._start > e) return i;
                              i = i._next
                          } else
                              for (i = t._last; i && i._start >= r;) {
                                  if ("isPause" === i.data && i._start < e) return i;
                                  i = i._prev
                              }
                  }(this, ja(_), ja(i))) && (v -= i - (i = h._start)), this._tTime = v, this._time = i, this._act = !l, this._initted || (this._onUpdate = this.vars.onUpdate, this._initted = 1, this._zTime = t, _ = 0), !_ && i && !e && (Ct(this, "onStart"), this._tTime !== v)) return this;
              if (_ <= i && 0 <= t)
                  for (n = this._first; n;) {
                      if (a = n._next, (n._act || i >= n._start) && n._ts && h !== n) {
                          if (n.parent !== this) return this.render(t, e, r);
                          if (n.render(0 < n._ts ? (i - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (i - n._start) * n._ts, e, r), i !== this._time || !this._ts && !u) {
                              h = 0, a && (v += this._zTime = -V);
                              break
                          }
                      }
                      n = a
                  } else {
                      n = this._last;
                      for (var w = t < 0 ? t : i; n;) {
                          if (a = n._prev, (n._act || w <= n._end) && n._ts && h !== n) {
                              if (n.parent !== this) return this.render(t, e, r);
                              if (n.render(0 < n._ts ? (w - n._start) * n._ts : (n._dirty ? n.totalDuration() : n._tDur) + (w - n._start) * n._ts, e, r || B && (n._initted || n._startAt)), i !== this._time || !this._ts && !u) {
                                  h = 0, a && (v += this._zTime = w ? -V : V);
                                  break
                              }
                          }
                          n = a
                      }
                  }
              if (h && !e && (this.pause(), h.render(_ <= i ? 0 : -V)._zTime = _ <= i ? 1 : -1, this._ts)) return this._start = f, Ha(this), this.render(t, e, r);
              this._onUpdate && !e && Ct(this, "onUpdate", !0), (v === m && this._tTime >= this.totalDuration() || !v && _) && (f !== this._start && Math.abs(l) === Math.abs(this._ts) || this._lock || (!t && g || !(v === m && 0 < this._ts || !v && this._ts < 0) || za(this, 1), e || t < 0 && !_ || !v && !_ && m || (Ct(this, v === m && 0 <= t ? "onComplete" : "onReverseComplete", !0), !this._prom || v < m && 0 < this.timeScale() || this._prom())))
          }
          return this
      }, e.add = function add(e, i) {
          var n = this;
          if (t(i) || (i = xt(this, i, e)), !(e instanceof qt)) {
              if ($(e)) return e.forEach(function(t) {
                  return n.add(t, i)
              }), this;
              if (r(e)) return this.addLabel(e, i);
              if (!s(e)) return this;
              e = Gt.delayedCall(0, e)
          }
          return this !== e ? Ka(this, e, i) : this
      }, e.getChildren = function getChildren(t, e, r, i) {
          void 0 === t && (t = !0), void 0 === e && (e = !0), void 0 === r && (r = !0), void 0 === i && (i = -U);
          for (var n = [], a = this._first; a;) a._start >= i && (a instanceof Gt ? e && n.push(a) : (r && n.push(a), t && n.push.apply(n, a.getChildren(!0, e, r)))), a = a._next;
          return n
      }, e.getById = function getById(t) {
          for (var e = this.getChildren(1, 1, 1), r = e.length; r--;)
              if (e[r].vars.id === t) return e[r]
      }, e.remove = function remove(t) {
          return r(t) ? this.removeLabel(t) : s(t) ? this.killTweensOf(t) : (ya(this, t), t === this._recent && (this._recent = this._last), Aa(this))
      }, e.totalTime = function totalTime(t, e) {
          return arguments.length ? (this._forcing = 1, !this._dp && this._ts && (this._start = ja(Et.time - (0 < this._ts ? t / this._ts : (this.totalDuration() - t) / -this._ts))), i.prototype.totalTime.call(this, t, e), this._forcing = 0, this) : this._tTime
      }, e.addLabel = function addLabel(t, e) {
          return this.labels[t] = xt(this, e), this
      }, e.removeLabel = function removeLabel(t) {
          return delete this.labels[t], this
      }, e.addPause = function addPause(t, e, r) {
          var i = Gt.delayedCall(0, e || T, r);
          return i.data = "isPause", this._hasPause = 1, Ka(this, i, xt(this, t))
      }, e.removePause = function removePause(t) {
          var e = this._first;
          for (t = xt(this, t); e;) e._start === t && "isPause" === e.data && za(e), e = e._next
      }, e.killTweensOf = function killTweensOf(t, e, r) {
          for (var i = this.getTweensOf(t, r), n = i.length; n--;) Vt !== i[n] && i[n].kill(t, e);
          return this
      }, e.getTweensOf = function getTweensOf(e, r) {
          for (var i, n = [], a = Ot(e), s = this._first, o = t(r); s;) s instanceof Gt ? la(s._targets, a) && (o ? (!Vt || s._initted && s._ts) && s.globalTime(0) <= r && s.globalTime(s.totalDuration()) > r : !r || s.isActive()) && n.push(s) : (i = s.getTweensOf(a, r)).length && n.push.apply(n, i), s = s._next;
          return n
      }, e.tweenTo = function tweenTo(t, e) {
          e = e || {};
          var r, i = this,
              n = xt(i, t),
              a = e.startAt,
              s = e.onStart,
              o = e.onStartParams,
              u = e.immediateRender,
              h = Gt.to(i, qa({
                  ease: e.ease || "none",
                  lazy: !1,
                  immediateRender: !1,
                  time: n,
                  overwrite: "auto",
                  duration: e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale()) || V,
                  onStart: function onStart() {
                      if (i.pause(), !r) {
                          var t = e.duration || Math.abs((n - (a && "time" in a ? a.time : i._time)) / i.timeScale());
                          h._dur !== t && Ra(h, t, 0, 1).render(h._time, !0, !0), r = 1
                      }
                      s && s.apply(h, o || [])
                  }
              }, e));
          return u ? h.render(0) : h
      }, e.tweenFromTo = function tweenFromTo(t, e, r) {
          return this.tweenTo(e, qa({
              startAt: {
                  time: xt(this, t)
              }
          }, r))
      }, e.recent = function recent() {
          return this._recent
      }, e.nextLabel = function nextLabel(t) {
          return void 0 === t && (t = this._time), rb(this, xt(this, t))
      }, e.previousLabel = function previousLabel(t) {
          return void 0 === t && (t = this._time), rb(this, xt(this, t), 1)
      }, e.currentLabel = function currentLabel(t) {
          return arguments.length ? this.seek(t, !0) : this.previousLabel(this._time + V)
      }, e.shiftChildren = function shiftChildren(t, e, r) {
          void 0 === r && (r = 0);
          for (var i, n = this._first, a = this.labels; n;) n._start >= r && (n._start += t, n._end += t), n = n._next;
          if (e)
              for (i in a) a[i] >= r && (a[i] += t);
          return Aa(this)
      }, e.invalidate = function invalidate(t) {
          var e = this._first;
          for (this._lock = 0; e;) e.invalidate(t), e = e._next;
          return i.prototype.invalidate.call(this, t)
      }, e.clear = function clear(t) {
          void 0 === t && (t = !0);
          for (var e, r = this._first; r;) e = r._next, this.remove(r), r = e;
          return this._dp && (this._time = this._tTime = this._pTime = 0), t && (this.labels = {}), Aa(this)
      }, e.totalDuration = function totalDuration(t) {
          var e, r, i, n = 0,
              a = this,
              s = a._last,
              o = U;
          if (arguments.length) return a.timeScale((a._repeat < 0 ? a.duration() : a.totalDuration()) / (a.reversed() ? -t : t));
          if (a._dirty) {
              for (i = a.parent; s;) e = s._prev, s._dirty && s.totalDuration(), o < (r = s._start) && a._sort && s._ts && !a._lock ? (a._lock = 1, Ka(a, s, r - s._delay, 1)._lock = 0) : o = r, r < 0 && s._ts && (n -= r, (!i && !a._dp || i && i.smoothChildTiming) && (a._start += r / a._ts, a._time -= r, a._tTime -= r), a.shiftChildren(-r, !1, -Infinity), o = 0), s._end > n && s._ts && (n = s._end), s = e;
              Ra(a, a === L && a._time > n ? a._time : n, 1, 1), a._dirty = 0
          }
          return a._tDur
      }, Timeline.updateRoot = function updateRoot(t) {
          if (L._ts && (na(L, Ga(t, L)), f = Et.frame), Et.frame >= mt) {
              mt += j.autoSleep || 120;
              var e = L._first;
              if ((!e || !e._ts) && j.autoSleep && Et._listeners.length < 2) {
                  for (; e && !e._ts;) e = e._next;
                  e || Et.sleep()
              }
          }
      }, Timeline
  }(qt);
  qa(Ut.prototype, {
      _lock: 0,
      _hasPause: 0,
      _forcing: 0
  });

  function _b(t, e, i, n, a, o) {
      var u, h, l, f;
      if (pt[t] && !1 !== (u = new pt[t]).init(a, u.rawVars ? e[t] : function _processVars(t, e, i, n, a) {
              if (s(t) && (t = Qt(t, a, e, i, n)), !v(t) || t.style && t.nodeType || $(t) || J(t)) return r(t) ? Qt(t, a, e, i, n) : t;
              var o, u = {};
              for (o in t) u[o] = Qt(t[o], a, e, i, n);
              return u
          }(e[t], n, a, o, i), i, n, o) && (i._pt = h = new pe(i._pt, a, t, 0, 1, u.render, u, 0, u.priority), i !== c))
          for (l = i._ptLookup[i._targets.indexOf(a)], f = u._props.length; f--;) l[u._props[f]] = h;
      return u
  }

  function fc(t, r, e, i) {
      var n, a, s = r.ease || i || "power1.inOut";
      if ($(r)) a = e[t] || (e[t] = []), r.forEach(function(t, e) {
          return a.push({
              t: e / (r.length - 1) * 100,
              v: t,
              e: s
          })
      });
      else
          for (n in r) a = e[n] || (e[n] = []), "ease" === n || a.push({
              t: parseFloat(t),
              v: r[n],
              e: s
          })
  }
  var Vt, Wt, Xt = function _addPropTween(t, e, i, n, a, o, u, h, l, f) {
          s(n) && (n = n(a || 0, t, o));
          var c, d = t[e],
              p = "get" !== i ? i : s(d) ? l ? t[e.indexOf("set") || !s(t["get" + e.substr(3)]) ? e : "get" + e.substr(3)](l) : t[e]() : d,
              _ = s(d) ? l ? ee : $t : Jt;
          if (r(n) && (~n.indexOf("random(") && (n = ob(n)), "=" === n.charAt(1) && (!(c = ka(p, n) + (Ya(p) || 0)) && 0 !== c || (n = c))), !f || p !== n || Wt) return isNaN(p * n) || "" === n ? (d || e in t || Q(e, n), function _addComplexStringPropTween(t, e, r, i, n, a, s) {
              var o, u, h, l, f, c, d, p, _ = new pe(this._pt, t, e, 0, 1, se, null, n),
                  m = 0,
                  g = 0;
              for (_.b = r, _.e = i, r += "", (d = ~(i += "").indexOf("random(")) && (i = ob(i)), a && (a(p = [r, i], t, e), r = p[0], i = p[1]), u = r.match(it) || []; o = it.exec(i);) l = o[0], f = i.substring(m, o.index), h ? h = (h + 1) % 5 : "rgba(" === f.substr(-5) && (h = 1), l !== u[g++] && (c = parseFloat(u[g - 1]) || 0, _._pt = {
                  _next: _._pt,
                  p: f || 1 === g ? f : ",",
                  s: c,
                  c: "=" === l.charAt(1) ? ka(c, l) - c : parseFloat(l) - c,
                  m: h && h < 4 ? Math.round : 0
              }, m = it.lastIndex);
              return _.c = m < i.length ? i.substring(m, i.length) : "", _.fp = s, (nt.test(i) || d) && (_.e = 0), this._pt = _
          }.call(this, t, e, p, n, _, h || j.stringFilter, l)) : (c = new pe(this._pt, t, e, +p || 0, n - (p || 0), "boolean" == typeof d ? ae : ne, 0, _), l && (c.fp = l), u && c.modifier(u, this, t), this._pt = c)
      },
      Ht = function _initTween(t, e, r) {
          var i, n, a, s, o, u, h, l, f, c, d, p, _, m = t.vars,
              g = m.ease,
              v = m.startAt,
              y = m.immediateRender,
              T = m.lazy,
              b = m.onUpdate,
              x = m.onUpdateParams,
              k = m.callbackScope,
              M = m.runBackwards,
              O = m.yoyoEase,
              P = m.keyframes,
              C = m.autoRevert,
              A = t._dur,
              S = t._startAt,
              R = t._targets,
              D = t.parent,
              E = D && "nested" === D.data ? D.vars.targets : R,
              z = "auto" === t._overwrite && !I,
              F = t.timeline;
          if (!F || P && g || (g = "none"), t._ease = Yt(g, q.ease), t._yEase = O ? Lt(Yt(!0 === O ? g : O, q.ease)) : 0, O && t._yoyo && !t._repeat && (O = t._yEase, t._yEase = t._ease, t._ease = O), t._from = !F && !!m.runBackwards, !F || P && !m.stagger) {
              if (p = (l = R[0] ? fa(R[0]).harness : 0) && m[l.prop], i = ua(m, ft), S && (S._zTime < 0 && S.progress(1), e < 0 && M && y && !C ? S.render(-1, !0) : S.revert(M && A ? ht : ut), S._lazy = 0), v) {
                  if (za(t._startAt = Gt.set(R, qa({
                          data: "isStart",
                          overwrite: !1,
                          parent: D,
                          immediateRender: !0,
                          lazy: w(T),
                          startAt: null,
                          delay: 0,
                          onUpdate: b,
                          onUpdateParams: x,
                          callbackScope: k,
                          stagger: 0
                      }, v))), e < (t._startAt._dp = 0) && (B || !y && !C) && t._startAt.revert(ht), y && A && e <= 0 && r <= 0) return void(e && (t._zTime = e))
              } else if (M && A && !S)
                  if (e && (y = !1), a = qa({
                          overwrite: !1,
                          data: "isFromStart",
                          lazy: y && w(T),
                          immediateRender: y,
                          stagger: 0,
                          parent: D
                      }, i), p && (a[l.prop] = p), za(t._startAt = Gt.set(R, a)), e < (t._startAt._dp = 0) && (B ? t._startAt.revert(ht) : t._startAt.render(-1, !0)), t._zTime = e, y) {
                      if (!e) return
                  } else _initTween(t._startAt, V, V);
              for (t._pt = t._ptCache = 0, T = A && w(T) || T && !A, n = 0; n < R.length; n++) {
                  if (h = (o = R[n])._gsap || ea(R)[n]._gsap, t._ptLookup[n] = c = {}, dt[h.id] && ct.length && ma(), d = E === R ? n : E.indexOf(o), l && !1 !== (f = new l).init(o, p || i, t, d, E) && (t._pt = s = new pe(t._pt, o, f.name, 0, 1, f.render, f, 0, f.priority), f._props.forEach(function(t) {
                          c[t] = s
                      }), f.priority && (u = 1)), !l || p)
                      for (a in i) pt[a] && (f = _b(a, i, t, d, o, E)) ? f.priority && (u = 1) : c[a] = s = Xt.call(t, o, a, "get", i[a], d, E, 0, m.stringFilter);
                  t._op && t._op[n] && t.kill(o, t._op[n]), z && t._pt && (Vt = t, L.killTweensOf(o, c, t.globalTime(e)), _ = !t.parent, Vt = 0), t._pt && T && (dt[h.id] = 1)
              }
              u && de(t), t._onInit && t._onInit(t)
          }
          t._onUpdate = b, t._initted = (!t._op || t._pt) && !_, P && e <= 0 && F.render(U, !0, !0)
      },
      Qt = function _parseFuncOrString(t, e, i, n, a) {
          return s(t) ? t.call(e, i, n, a) : r(t) && ~t.indexOf("random(") ? ob(t) : t
      },
      Kt = vt + "repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",
      Zt = {};
  ha(Kt + ",id,stagger,delay,duration,paused,scrollTrigger", function(t) {
      return Zt[t] = 1
  });
  var Gt = function(z) {
      function Tween(e, r, i, n) {
          var a;
          "number" == typeof r && (i.duration = r, r = i, i = null);
          var s, o, u, h, l, f, c, d, p = (a = z.call(this, n ? r : va(r)) || this).vars,
              _ = p.duration,
              m = p.delay,
              g = p.immediateRender,
              T = p.stagger,
              b = p.overwrite,
              x = p.keyframes,
              k = p.defaults,
              M = p.scrollTrigger,
              O = p.yoyoEase,
              P = r.parent || L,
              C = ($(e) || J(e) ? t(e[0]) : "length" in r) ? [e] : Ot(e);
          if (a._targets = C.length ? ea(C) : R("GSAP target " + e + " not found. https://greensock.com", !j.nullTargetWarn) || [], a._ptLookup = [], a._overwrite = b, x || T || y(_) || y(m)) {
              if (r = a.vars, (s = a.timeline = new Ut({
                      data: "nested",
                      defaults: k || {},
                      targets: P && "nested" === P.data ? P.vars.targets : C
                  })).kill(), s.parent = s._dp = _assertThisInitialized(a), s._start = 0, T || y(_) || y(m)) {
                  if (h = C.length, c = T && eb(T), v(T))
                      for (l in T) ~Kt.indexOf(l) && ((d = d || {})[l] = T[l]);
                  for (o = 0; o < h; o++)(u = ua(r, Zt)).stagger = 0, O && (u.yoyoEase = O), d && yt(u, d), f = C[o], u.duration = +Qt(_, _assertThisInitialized(a), o, f, C), u.delay = (+Qt(m, _assertThisInitialized(a), o, f, C) || 0) - a._delay, !T && 1 === h && u.delay && (a._delay = m = u.delay, a._start += m, u.delay = 0), s.to(f, u, c ? c(o, f, C) : 0), s._ease = Ft.none;
                  s.duration() ? _ = m = 0 : a.timeline = 0
              } else if (x) {
                  va(qa(s.vars.defaults, {
                      ease: "none"
                  })), s._ease = Yt(x.ease || r.ease || "none");
                  var A, S, D, E = 0;
                  if ($(x)) x.forEach(function(t) {
                      return s.to(C, t, ">")
                  }), s.duration();
                  else {
                      for (l in u = {}, x) "ease" === l || "easeEach" === l || fc(l, x[l], u, x.easeEach);
                      for (l in u)
                          for (A = u[l].sort(function(t, e) {
                                  return t.t - e.t
                              }), o = E = 0; o < A.length; o++)(D = {
                              ease: (S = A[o]).e,
                              duration: (S.t - (o ? A[o - 1].t : 0)) / 100 * _
                          })[l] = S.v, s.to(C, D, E), E += D.duration;
                      s.duration() < _ && s.to({}, {
                          duration: _ - s.duration()
                      })
                  }
              }
              _ || a.duration(_ = s.duration())
          } else a.timeline = 0;
          return !0 !== b || I || (Vt = _assertThisInitialized(a), L.killTweensOf(C), Vt = 0), Ka(P, _assertThisInitialized(a), i), r.reversed && a.reverse(), r.paused && a.paused(!0), (g || !_ && !x && a._start === ja(P._time) && w(g) && function _hasNoPausedAncestors(t) {
              return !t || t._ts && _hasNoPausedAncestors(t.parent)
          }(_assertThisInitialized(a)) && "nested" !== P.data) && (a._tTime = -V, a.render(Math.max(0, -m) || 0)), M && La(_assertThisInitialized(a), M), a
      }
      _inheritsLoose(Tween, z);
      var e = Tween.prototype;
      return e.render = function render(t, e, r) {
          var i, n, a, s, o, u, h, l, f, c = this._time,
              d = this._tDur,
              p = this._dur,
              _ = t < 0,
              m = d - V < t && !_ ? d : t < V ? 0 : t;
          if (p) {
              if (m !== this._tTime || !t || r || !this._initted && this._tTime || this._startAt && this._zTime < 0 != _) {
                  if (i = m, l = this.timeline, this._repeat) {
                      if (s = p + this._rDelay, this._repeat < -1 && _) return this.totalTime(100 * s + t, e, r);
                      if (i = ja(m % s), m === d ? (a = this._repeat, i = p) : ((a = ~~(m / s)) && a === m / s && (i = p, a--), p < i && (i = p)), (u = this._yoyo && 1 & a) && (f = this._yEase, i = p - i), o = Tt(this._tTime, s), i === c && !r && this._initted) return this._tTime = m, this;
                      a !== o && (l && this._yEase && Pb(l, u), !this.vars.repeatRefresh || u || this._lock || (this._lock = r = 1, this.render(ja(s * a), !0).invalidate()._lock = 0))
                  }
                  if (!this._initted) {
                      if (Ma(this, _ ? t : i, r, e, m)) return this._tTime = 0, this;
                      if (c !== this._time) return this;
                      if (p !== this._dur) return this.render(t, e, r)
                  }
                  if (this._tTime = m, this._time = i, !this._act && this._ts && (this._act = 1, this._lazy = 0), this.ratio = h = (f || this._ease)(i / p), this._from && (this.ratio = h = 1 - h), i && !c && !e && (Ct(this, "onStart"), this._tTime !== m)) return this;
                  for (n = this._pt; n;) n.r(h, n.d), n = n._next;
                  l && l.render(t < 0 ? t : !i && u ? -V : l._dur * l._ease(i / this._dur), e, r) || this._startAt && (this._zTime = t), this._onUpdate && !e && (_ && Ca(this, t, 0, r), Ct(this, "onUpdate")), this._repeat && a !== o && this.vars.onRepeat && !e && this.parent && Ct(this, "onRepeat"), m !== this._tDur && m || this._tTime !== m || (_ && !this._onUpdate && Ca(this, t, 0, !0), !t && p || !(m === this._tDur && 0 < this._ts || !m && this._ts < 0) || za(this, 1), e || _ && !c || !(m || c || u) || (Ct(this, m === d ? "onComplete" : "onReverseComplete", !0), !this._prom || m < d && 0 < this.timeScale() || this._prom()))
              }
          } else ! function _renderZeroDurationTween(t, e, r, i) {
              var n, a, s, o = t.ratio,
                  u = e < 0 || !e && (!t._start && function _parentPlayheadIsBeforeStart(t) {
                      var e = t.parent;
                      return e && e._ts && e._initted && !e._lock && (e.rawTime() < 0 || _parentPlayheadIsBeforeStart(e))
                  }(t) && (t._initted || !bt(t)) || (t._ts < 0 || t._dp._ts < 0) && !bt(t)) ? 0 : 1,
                  h = t._rDelay,
                  l = 0;
              if (h && t._repeat && (l = kt(0, t._tDur, e), a = Tt(l, h), t._yoyo && 1 & a && (u = 1 - u), a !== Tt(t._tTime, h) && (o = 1 - u, t.vars.repeatRefresh && t._initted && t.invalidate())), u !== o || B || i || t._zTime === V || !e && t._zTime) {
                  if (!t._initted && Ma(t, e, i, r, l)) return;
                  for (s = t._zTime, t._zTime = e || (r ? V : 0), r = r || e && !s, t.ratio = u, t._from && (u = 1 - u), t._time = 0, t._tTime = l, n = t._pt; n;) n.r(u, n.d), n = n._next;
                  e < 0 && Ca(t, e, 0, !0), t._onUpdate && !r && Ct(t, "onUpdate"), l && t._repeat && !r && t.parent && Ct(t, "onRepeat"), (e >= t._tDur || e < 0) && t.ratio === u && (u && za(t, 1), r || B || (Ct(t, u ? "onComplete" : "onReverseComplete", !0), t._prom && t._prom()))
              } else t._zTime || (t._zTime = e)
          }(this, t, e, r);
          return this
      }, e.targets = function targets() {
          return this._targets
      }, e.invalidate = function invalidate(t) {
          return t && this.vars.runBackwards || (this._startAt = 0), this._pt = this._op = this._onUpdate = this._lazy = this.ratio = 0, this._ptLookup = [], this.timeline && this.timeline.invalidate(t), z.prototype.invalidate.call(this, t)
      }, e.resetTo = function resetTo(t, e, r, i) {
          d || Et.wake(), this._ts || this.play();
          var n, a = Math.min(this._dur, (this._dp._time - this._start) * this._ts);
          return this._initted || Ht(this, a), n = this._ease(a / this._dur),
              function _updatePropTweens(t, e, r, i, n, a, s) {
                  var o, u, h, l, f = (t._pt && t._ptCache || (t._ptCache = {}))[e];
                  if (!f)
                      for (f = t._ptCache[e] = [], h = t._ptLookup, l = t._targets.length; l--;) {
                          if ((o = h[l][e]) && o.d && o.d._pt)
                              for (o = o.d._pt; o && o.p !== e && o.fp !== e;) o = o._next;
                          if (!o) return Wt = 1, t.vars[e] = "+=0", Ht(t, s), Wt = 0, 1;
                          f.push(o)
                      }
                  for (l = f.length; l--;)(o = (u = f[l])._pt || u).s = !i && 0 !== i || n ? o.s + (i || 0) + a * o.c : i, o.c = r - o.s, u.e && (u.e = ia(r) + Ya(u.e)), u.b && (u.b = o.s + Ya(u.b))
              }(this, t, e, r, i, n, a) ? this.resetTo(t, e, r, i) : (Ia(this, 0), this.parent || xa(this._dp, this, "_first", "_last", this._dp._sort ? "_start" : 0), this.render(0))
      }, e.kill = function kill(t, e) {
          if (void 0 === e && (e = "all"), !(t || e && "all" !== e)) return this._lazy = this._pt = 0, this.parent ? tb(this) : this;
          if (this.timeline) {
              var i = this.timeline.totalDuration();
              return this.timeline.killTweensOf(t, e, Vt && !0 !== Vt.vars.overwrite)._first || tb(this), this.parent && i !== this.timeline.totalDuration() && Ra(this, this._dur * this.timeline._tDur / i, 0, 1), this
          }
          var n, a, s, o, u, h, l, f = this._targets,
              c = t ? Ot(t) : f,
              d = this._ptLookup,
              p = this._pt;
          if ((!e || "all" === e) && function _arraysMatch(t, e) {
                  for (var r = t.length, i = r === e.length; i && r-- && t[r] === e[r];);
                  return r < 0
              }(f, c)) return "all" === e && (this._pt = 0), tb(this);
          for (n = this._op = this._op || [], "all" !== e && (r(e) && (u = {}, ha(e, function(t) {
                  return u[t] = 1
              }), e = u), e = function _addAliasesToVars(t, e) {
                  var r, i, n, a, s = t[0] ? fa(t[0]).harness : 0,
                      o = s && s.aliases;
                  if (!o) return e;
                  for (i in r = yt({}, e), o)
                      if (i in r)
                          for (n = (a = o[i].split(",")).length; n--;) r[a[n]] = r[i];
                  return r
              }(f, e)), l = f.length; l--;)
              if (~c.indexOf(f[l]))
                  for (u in a = d[l], "all" === e ? (n[l] = e, o = a, s = {}) : (s = n[l] = n[l] || {}, o = e), o)(h = a && a[u]) && ("kill" in h.d && !0 !== h.d.kill(u) || ya(this, h, "_pt"), delete a[u]), "all" !== s && (s[u] = 1);
          return this._initted && !this._pt && p && tb(this), this
      }, Tween.to = function to(t, e, r) {
          return new Tween(t, e, r)
      }, Tween.from = function from(t, e) {
          return Va(1, arguments)
      }, Tween.delayedCall = function delayedCall(t, e, r, i) {
          return new Tween(e, 0, {
              immediateRender: !1,
              lazy: !1,
              overwrite: !1,
              delay: t,
              onComplete: e,
              onReverseComplete: e,
              onCompleteParams: r,
              onReverseCompleteParams: r,
              callbackScope: i
          })
      }, Tween.fromTo = function fromTo(t, e, r) {
          return Va(2, arguments)
      }, Tween.set = function set(t, e) {
          return e.duration = 0, e.repeatDelay || (e.repeat = 0), new Tween(t, e)
      }, Tween.killTweensOf = function killTweensOf(t, e, r) {
          return L.killTweensOf(t, e, r)
      }, Tween
  }(qt);
  qa(Gt.prototype, {
      _targets: [],
      _lazy: 0,
      _startAt: 0,
      _op: 0,
      _onInit: 0
  }), ha("staggerTo,staggerFrom,staggerFromTo", function(r) {
      Gt[r] = function() {
          var t = new Ut,
              e = Mt.call(arguments, 0);
          return e.splice("staggerFromTo" === r ? 5 : 4, 0, 0), t[r].apply(t, e)
      }
  });

  function nc(t, e, r) {
      return t.setAttribute(e, r)
  }

  function vc(t, e, r, i) {
      i.mSet(t, e, i.m.call(i.tween, r, i.mt), i)
  }
  var Jt = function _setterPlain(t, e, r) {
          return t[e] = r
      },
      $t = function _setterFunc(t, e, r) {
          return t[e](r)
      },
      ee = function _setterFuncWithParam(t, e, r, i) {
          return t[e](i.fp, r)
      },
      re = function _getSetter(t, e) {
          return s(t[e]) ? $t : u(t[e]) && t.setAttribute ? nc : Jt
      },
      ne = function _renderPlain(t, e) {
          return e.set(e.t, e.p, Math.round(1e6 * (e.s + e.c * t)) / 1e6, e)
      },
      ae = function _renderBoolean(t, e) {
          return e.set(e.t, e.p, !!(e.s + e.c * t), e)
      },
      se = function _renderComplexString(t, e) {
          var r = e._pt,
              i = "";
          if (!t && e.b) i = e.b;
          else if (1 === t && e.e) i = e.e;
          else {
              for (; r;) i = r.p + (r.m ? r.m(r.s + r.c * t) : Math.round(1e4 * (r.s + r.c * t)) / 1e4) + i, r = r._next;
              i += e.c
          }
          e.set(e.t, e.p, i, e)
      },
      oe = function _renderPropTweens(t, e) {
          for (var r = e._pt; r;) r.r(t, r.d), r = r._next
      },
      le = function _addPluginModifier(t, e, r, i) {
          for (var n, a = this._pt; a;) n = a._next, a.p === i && a.modifier(t, e, r), a = n
      },
      fe = function _killPropTweensOf(t) {
          for (var e, r, i = this._pt; i;) r = i._next, i.p === t && !i.op || i.op === t ? ya(this, i, "_pt") : i.dep || (e = 1), i = r;
          return !e
      },
      de = function _sortPropTweensByPriority(t) {
          for (var e, r, i, n, a = t._pt; a;) {
              for (e = a._next, r = i; r && r.pr > a.pr;) r = r._next;
              (a._prev = r ? r._prev : n) ? a._prev._next = a: i = a, (a._next = r) ? r._prev = a : n = a, a = e
          }
          t._pt = i
      },
      pe = (PropTween.prototype.modifier = function modifier(t, e, r) {
          this.mSet = this.mSet || this.set, this.set = vc, this.m = t, this.mt = r, this.tween = e
      }, PropTween);

  function PropTween(t, e, r, i, n, a, s, o, u) {
      this.t = e, this.s = i, this.c = n, this.p = r, this.r = a || ne, this.d = s || this, this.set = o || Jt, this.pr = u || 0, (this._next = t) && (t._prev = this)
  }
  ha(vt + "parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger", function(t) {
      return ft[t] = 1
  }), ot.TweenMax = ot.TweenLite = Gt, ot.TimelineLite = ot.TimelineMax = Ut, L = new Ut({
      sortChildren: !1,
      defaults: q,
      autoRemoveChildren: !0,
      id: "root",
      smoothChildTiming: !0
  }), j.stringFilter = Eb;

  function Cc(t) {
      return (Te[t] || we).map(function(t) {
          return t()
      })
  }

  function Dc() {
      var t = Date.now(),
          o = [];
      2 < t - xe && (Cc("matchMediaInit"), ye.forEach(function(t) {
          var e, r, i, n, a = t.queries,
              s = t.conditions;
          for (r in a)(e = h.matchMedia(a[r]).matches) && (i = 1), e !== s[r] && (s[r] = e, n = 1);
          n && (t.revert(), i && o.push(t))
      }), Cc("matchMediaRevert"), o.forEach(function(t) {
          return t.onMatch(t)
      }), xe = t, Cc("matchMedia"))
  }
  var _e, ye = [],
      Te = {},
      we = [],
      xe = 0,
      ke = ((_e = Context.prototype).add = function add(t, i, n) {
          function Cw() {
              var t, e = l,
                  r = a.selector;
              return e && e !== a && e.data.push(a), n && (a.selector = cb(n)), l = a, t = i.apply(a, arguments), s(t) && a._r.push(t), l = e, a.selector = r, a.isReverted = !1, t
          }
          s(t) && (n = i, i = t, t = s);
          var a = this;
          return a.last = Cw, t === s ? Cw(a) : t ? a[t] = Cw : Cw
      }, _e.ignore = function ignore(t) {
          var e = l;
          l = null, t(this), l = e
      }, _e.getTweens = function getTweens() {
          var e = [];
          return this.data.forEach(function(t) {
              return t instanceof Context ? e.push.apply(e, t.getTweens()) : t instanceof Gt && !(t.parent && "nested" === t.parent.data) && e.push(t)
          }), e
      }, _e.clear = function clear() {
          this._r.length = this.data.length = 0
      }, _e.kill = function kill(e, t) {
          var r = this;
          if (e) {
              var i = this.getTweens();
              this.data.forEach(function(t) {
                  "isFlip" === t.data && (t.revert(), t.getChildren(!0, !0, !1).forEach(function(t) {
                      return i.splice(i.indexOf(t), 1)
                  }))
              }), i.map(function(t) {
                  return {
                      g: t.globalTime(0),
                      t: t
                  }
              }).sort(function(t, e) {
                  return e.g - t.g || -1
              }).forEach(function(t) {
                  return t.t.revert(e)
              }), this.data.forEach(function(t) {
                  return !(t instanceof qt) && t.revert && t.revert(e)
              }), this._r.forEach(function(t) {
                  return t(e, r)
              }), this.isReverted = !0
          } else this.data.forEach(function(t) {
              return t.kill && t.kill()
          });
          if (this.clear(), t) {
              var n = ye.indexOf(this);
              ~n && ye.splice(n, 1)
          }
      }, _e.revert = function revert(t) {
          this.kill(t || {})
      }, Context);

  function Context(t, e) {
      this.selector = e && cb(e), this.data = [], this._r = [], this.isReverted = !1, t && this.add(t)
  }
  var Me, Oe = ((Me = MatchMedia.prototype).add = function add(t, e, r) {
      v(t) || (t = {
          matches: t
      });
      var i, n, a, s = new ke(0, r || this.scope),
          o = s.conditions = {};
      for (n in this.contexts.push(s), e = s.add("onMatch", e), s.queries = t) "all" === n ? a = 1 : (i = h.matchMedia(t[n])) && (ye.indexOf(s) < 0 && ye.push(s), (o[n] = i.matches) && (a = 1), i.addListener ? i.addListener(Dc) : i.addEventListener("change", Dc));
      return a && e(s), this
  }, Me.revert = function revert(t) {
      this.kill(t || {})
  }, Me.kill = function kill(e) {
      this.contexts.forEach(function(t) {
          return t.kill(e, !0)
      })
  }, MatchMedia);

  function MatchMedia(t) {
      this.contexts = [], this.scope = t
  }
  var Pe = {
      registerPlugin: function registerPlugin() {
          // for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
          // e.forEach(function(t) {
          //     return function _createPlugin(t) {
          //         var e = (t = !t.name && t.default || t).name,
          //             r = s(t),
          //             i = e && !r && t.init ? function() {
          //                 this._props = []
          //             } : t,
          //             n = {
          //                 init: T,
          //                 render: oe,
          //                 add: Xt,
          //                 kill: fe,
          //                 modifier: le,
          //                 rawVars: 0
          //             },
          //             a = {
          //                 targetTest: 0,
          //                 get: 0,
          //                 getSetter: re,
          //                 aliases: {},
          //                 register: 0
          //             };
          //         if (zt(), t !== i) {
          //             if (pt[e]) return;
          //             qa(i, qa(ua(t, n), a)), yt(i.prototype, yt(n, ua(t, a))), pt[i.prop = e] = i, t.targetTest && (gt.push(i), ft[e] = 1), e = ("css" === e ? "CSS" : e.charAt(0).toUpperCase() + e.substr(1)) + "Plugin"
          //         }
          //         S(e, i), t.register && t.register(Ce, i, pe)
          //     }(t)
          // })
      },
      timeline: function timeline(t) {
          return new Ut(t)
      },
      getTweensOf: function getTweensOf(t, e) {
          return L.getTweensOf(t, e)
      },
      getProperty: function getProperty(i, t, e, n) {
          r(i) && (i = Ot(i)[0]);
          var a = fa(i || {}).get,
              s = e ? pa : oa;
          return "native" === e && (e = ""), i ? t ? s((pt[t] && pt[t].get || a)(i, t, e, n)) : function(t, e, r) {
              return s((pt[t] && pt[t].get || a)(i, t, e, r))
          } : i
      },
      quickSetter: function quickSetter(r, e, i) {
          if (1 < (r = Ot(r)).length) {
              var n = r.map(function(t) {
                      return Ce.quickSetter(t, e, i)
                  }),
                  a = n.length;
              return function(t) {
                  for (var e = a; e--;) n[e](t)
              }
          }
          r = r[0] || {};
          var s = pt[e],
              o = fa(r),
              u = o.harness && (o.harness.aliases || {})[e] || e,
              h = s ? function(t) {
                  var e = new s;
                  c._pt = 0, e.init(r, i ? t + i : t, c, 0, [r]), e.render(1, e), c._pt && oe(1, c)
              } : o.set(r, u);
          return s ? h : function(t) {
              return h(r, u, i ? t + i : t, o, 1)
          }
      },
      quickTo: function quickTo(t, i, e) {
          function Ux(t, e, r) {
              return n.resetTo(i, t, e, r)
          }
          var r, n = Ce.to(t, yt(((r = {})[i] = "+=0.1", r.paused = !0, r), e || {}));
          return Ux.tween = n, Ux
      },
      isTweening: function isTweening(t) {
          return 0 < L.getTweensOf(t, !0).length
      },
      defaults: function defaults(t) {
          return t && t.ease && (t.ease = Yt(t.ease, q.ease)), ta(q, t || {})
      },
      config: function config(t) {
          return ta(j, t || {})
      },
      registerEffect: function registerEffect(t) {
          var i = t.name,
              n = t.effect,
              e = t.plugins,
              a = t.defaults,
              r = t.extendTimeline;
          (e || "").split(",").forEach(function(t) {
              return t && !pt[t] && !ot[t] && R(i + " effect requires " + t + " plugin.")
          }), _t[i] = function(t, e, r) {
              return n(Ot(t), qa(e || {}, a), r)
          }, r && (Ut.prototype[i] = function(t, e, r) {
              return this.add(_t[i](t, v(e) ? e : (r = e) && {}, this), r)
          })
      },
      registerEase: function registerEase(t, e) {
          Ft[t] = Yt(e)
      },
      parseEase: function parseEase(t, e) {
          return arguments.length ? Yt(t, e) : Ft
      },
      getById: function getById(t) {
          return L.getById(t)
      },
      exportRoot: function exportRoot(t, e) {
          void 0 === t && (t = {});
          var r, i, n = new Ut(t);
          for (n.smoothChildTiming = w(t.smoothChildTiming), L.remove(n), n._dp = 0, n._time = n._tTime = L._time, r = L._first; r;) i = r._next, !e && !r._dur && r instanceof Gt && r.vars.onComplete === r._targets[0] || Ka(n, r, r._start - r._delay), r = i;
          return Ka(L, n, 0), n
      },
      context: function context(t, e) {
          return t ? new ke(t, e) : l
      },
      matchMedia: function matchMedia(t) {
          return new Oe(t)
      },
      matchMediaRefresh: function matchMediaRefresh() {
          return ye.forEach(function(t) {
              var e, r, i = t.conditions;
              for (r in i) i[r] && (i[r] = !1, e = 1);
              e && t.revert()
          }) || Dc()
      },
      addEventListener: function addEventListener(t, e) {
          var r = Te[t] || (Te[t] = []);
          ~r.indexOf(e) || r.push(e)
      },
      removeEventListener: function removeEventListener(t, e) {
          var r = Te[t],
              i = r && r.indexOf(e);
          0 <= i && r.splice(i, 1)
      },
      utils: {
          wrap: function wrap(e, t, r) {
              var i = t - e;
              return $(e) ? lb(e, wrap(0, e.length), t) : Wa(r, function(t) {
                  return (i + (t - e) % i) % i + e
              })
          },
          wrapYoyo: function wrapYoyo(e, t, r) {
              var i = t - e,
                  n = 2 * i;
              return $(e) ? lb(e, wrapYoyo(0, e.length - 1), t) : Wa(r, function(t) {
                  return e + (i < (t = (n + (t - e) % n) % n || 0) ? n - t : t)
              })
          },
          distribute: eb,
          random: hb,
          snap: gb,
          normalize: function normalize(t, e, r) {
              return Pt(t, e, 0, 1, r)
          },
          getUnit: Ya,
          clamp: function clamp(e, r, t) {
              return Wa(t, function(t) {
                  return kt(e, r, t)
              })
          },
          splitColor: zb,
          toArray: Ot,
          selector: cb,
          mapRange: Pt,
          pipe: function pipe() {
              for (var t = arguments.length, e = new Array(t), r = 0; r < t; r++) e[r] = arguments[r];
              return function(t) {
                  return e.reduce(function(t, e) {
                      return e(t)
                  }, t)
              }
          },
          unitize: function unitize(e, r) {
              return function(t) {
                  return e(parseFloat(t)) + (r || Ya(t))
              }
          },
          interpolate: function interpolate(e, i, t, n) {
              var a = isNaN(e + i) ? 0 : function(t) {
                  return (1 - t) * e + t * i
              };
              if (!a) {
                  var s, o, u, h, l, f = r(e),
                      c = {};
                  if (!0 === t && (n = 1) && (t = null), f) e = {
                      p: e
                  }, i = {
                      p: i
                  };
                  else if ($(e) && !$(i)) {
                      for (u = [], h = e.length, l = h - 2, o = 1; o < h; o++) u.push(interpolate(e[o - 1], e[o]));
                      h--, a = function func(t) {
                          t *= h;
                          var e = Math.min(l, ~~t);
                          return u[e](t - e)
                      }, t = i
                  } else n || (e = yt($(e) ? [] : {}, e));
                  if (!u) {
                      for (s in i) Xt.call(c, e, s, "get", i[s]);
                      a = function func(t) {
                          return oe(t, c) || (f ? e.p : e)
                      }
                  }
              }
              return Wa(t, a)
          },
          shuffle: db
      },
      install: P,
      effects: _t,
      ticker: Et,
      updateRoot: Ut.updateRoot,
      plugins: pt,
      globalTimeline: L,
      core: {
          PropTween: pe,
          globals: S,
          Tween: Gt,
          Timeline: Ut,
          Animation: qt,
          getCache: fa,
          _removeLinkedListItem: ya,
          reverting: function reverting() {
              return B
          },
          context: function context(t) {
              return t && l && (l.data.push(t), t._ctx = l), l
          },
          suppressOverwrites: function suppressOverwrites(t) {
              return I = t
          }
      }
  };
  ha("to,from,fromTo,delayedCall,set,killTweensOf", function(t) {
      return Pe[t] = Gt[t]
  }), Et.add(Ut.updateRoot), c = Pe.to({}, {
      duration: 0
  });

  function Hc(t, e) {
      for (var r = t._pt; r && r.p !== e && r.op !== e && r.fp !== e;) r = r._next;
      return r
  }

  function Jc(t, a) {
      return {
          name: t,
          rawVars: 1,
          init: function init(t, n, e) {
              e._onInit = function(t) {
                  var e, i;
                  if (r(n) && (e = {}, ha(n, function(t) {
                          return e[t] = 1
                      }), n = e), a) {
                      for (i in e = {}, n) e[i] = a(n[i]);
                      n = e
                  }! function _addModifiers(t, e) {
                      var r, i, n, a = t._targets;
                      for (r in e)
                          for (i = a.length; i--;)(n = (n = t._ptLookup[i][r]) && n.d) && (n._pt && (n = Hc(n, r)), n && n.modifier && n.modifier(e[r], t, a[i], r))
                  }(t, n)
              }
          }
      }
  }
  var Ce = Pe.registerPlugin({
      name: "attr",
      init: function init(t, e, r, i, n) {
          var a, s, o;
          for (a in this.tween = r, e) o = t.getAttribute(a) || "", (s = this.add(t, "setAttribute", (o || 0) + "", e[a], i, n, 0, 0, a)).op = a, s.b = o, this._props.push(a)
      },
      render: function render(t, e) {
          for (var r = e._pt; r;) B ? r.set(r.t, r.p, r.b, r) : r.r(t, r.d), r = r._next
      }
  }, {
      name: "endArray",
      init: function init(t, e) {
          for (var r = e.length; r--;) this.add(t, r, t[r] || 0, e[r], 0, 0, 0, 0, 0, 1)
      }
  }, Jc("roundProps", fb), Jc("modifiers"), Jc("snap", gb)) || Pe;
  Gt.version = Ut.version = Ce.version = "3.11.3", o = 1, x() && zt();

  function td(t, e) {
      return e.set(e.t, e.p, Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }

  function ud(t, e) {
      return e.set(e.t, e.p, 1 === t ? e.e : Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u, e)
  }

  function vd(t, e) {
      return e.set(e.t, e.p, t ? Math.round(1e4 * (e.s + e.c * t)) / 1e4 + e.u : e.b, e)
  }

  function wd(t, e) {
      var r = e.s + e.c * t;
      e.set(e.t, e.p, ~~(r + (r < 0 ? -.5 : .5)) + e.u, e)
  }

  function xd(t, e) {
      return e.set(e.t, e.p, t ? e.e : e.b, e)
  }

  function yd(t, e) {
      return e.set(e.t, e.p, 1 !== t ? e.b : e.e, e)
  }

  function zd(t, e, r) {
      return t.style[e] = r
  }

  function Ad(t, e, r) {
      return t.style.setProperty(e, r)
  }

  function Bd(t, e, r) {
      return t._gsap[e] = r
  }

  function Cd(t, e, r) {
      return t._gsap.scaleX = t._gsap.scaleY = r
  }

  function Dd(t, e, r, i, n) {
      var a = t._gsap;
      a.scaleX = a.scaleY = r, a.renderTransform(n, a)
  }

  function Ed(t, e, r, i, n) {
      var a = t._gsap;
      a[e] = r, a.renderTransform(n, a)
  }

  function Hd(t, e) {
      var r = this,
          i = this.target,
          n = i.style;
      if (t in rr) {
          if (this.tfm = this.tfm || {}, "transform" !== t && (~(t = hr[t] || t).indexOf(",") ? t.split(",").forEach(function(t) {
                  return r.tfm[t] = mr(i, t)
              }) : this.tfm[t] = i._gsap.x ? i._gsap[t] : mr(i, t)), 0 <= this.props.indexOf(lr)) return;
          i._gsap.svg && (this.svgo = i.getAttribute("data-svg-origin"), this.props.push(fr, e, "")), t = lr
      }(n || e) && this.props.push(t, e, n[t])
  }

  function Id(t) {
      t.translate && (t.removeProperty("translate"), t.removeProperty("scale"), t.removeProperty("rotate"))
  }

  function Jd() {
      var t, e, r = this.props,
          i = this.target,
          n = i.style,
          a = i._gsap;
      for (t = 0; t < r.length; t += 3) r[t + 1] ? i[r[t]] = r[t + 2] : r[t + 2] ? n[r[t]] = r[t + 2] : n.removeProperty(r[t].replace(sr, "-$1").toLowerCase());
      if (this.tfm) {
          for (e in this.tfm) a[e] = this.tfm[e];
          a.svg && (a.renderTransform(), i.setAttribute("data-svg-origin", this.svgo || "")), !(t = Fe()) || t.isStart || n[lr] || (Id(n), a.uncache = 1)
      }
  }

  function Kd(t, e) {
      var r = {
          target: t,
          props: [],
          revert: Jd,
          save: Hd
      };
      return e && e.split(",").forEach(function(t) {
          return r.save(t)
      }), r
  }

  function Md(t, e) {
      var r = Se.createElementNS ? Se.createElementNS((e || "http://www.w3.org/1999/xhtml").replace(/^https/, "http"), t) : Se.createElement(t);
      return r.style ? r : Se.createElement(t)
  }

  function Nd(t, e, r) {
      var i = getComputedStyle(t);
      return i[e] || i.getPropertyValue(e.replace(sr, "-$1").toLowerCase()) || i.getPropertyValue(e) || !r && Nd(t, dr(e) || e, 1) || ""
  }

  function Qd() {
      (function _windowExists() {
          return "undefined" != typeof window
      })() && window.document && (Ae = window, Se = Ae.document, Re = Se.documentElement, Ee = Md("div") || {
          style: {}
      }, Md("div"), lr = dr(lr), fr = lr + "Origin", Ee.style.cssText = "border-width:0;line-height:0;position:absolute;padding:0", Ie = !!dr("perspective"), Fe = Ce.core.reverting, De = 1)
  }

  function Rd(t) {
      var e, r = Md("svg", this.ownerSVGElement && this.ownerSVGElement.getAttribute("xmlns") || "http://www.w3.org/2000/svg"),
          i = this.parentNode,
          n = this.nextSibling,
          a = this.style.cssText;
      if (Re.appendChild(r), r.appendChild(this), this.style.display = "block", t) try {
          e = this.getBBox(), this._gsapBBox = this.getBBox, this.getBBox = Rd
      } catch (t) {} else this._gsapBBox && (e = this._gsapBBox());
      return i && (n ? i.insertBefore(this, n) : i.appendChild(this)), Re.removeChild(r), this.style.cssText = a, e
  }

  function Sd(t, e) {
      for (var r = e.length; r--;)
          if (t.hasAttribute(e[r])) return t.getAttribute(e[r])
  }

  function Td(e) {
      var r;
      try {
          r = e.getBBox()
      } catch (t) {
          r = Rd.call(e, !0)
      }
      return r && (r.width || r.height) || e.getBBox === Rd || (r = Rd.call(e, !0)), !r || r.width || r.x || r.y ? r : {
          x: +Sd(e, ["x", "cx", "x1"]) || 0,
          y: +Sd(e, ["y", "cy", "y1"]) || 0,
          width: 0,
          height: 0
      }
  }

  function Ud(t) {
      return !(!t.getCTM || t.parentNode && !t.ownerSVGElement || !Td(t))
  }

  function Vd(t, e) {
      if (e) {
          var r = t.style;
          e in rr && e !== fr && (e = lr), r.removeProperty ? ("ms" !== e.substr(0, 2) && "webkit" !== e.substr(0, 6) || (e = "-" + e), r.removeProperty(e.replace(sr, "-$1").toLowerCase())) : r.removeAttribute(e)
      }
  }

  function Wd(t, e, r, i, n, a) {
      var s = new pe(t._pt, e, r, 0, 1, a ? yd : xd);
      return (t._pt = s).b = i, s.e = n, t._props.push(r), s
  }

  function Zd(t, e, r, i) {
      var n, a, s, o, u = parseFloat(r) || 0,
          h = (r + "").trim().substr((u + "").length) || "px",
          l = Ee.style,
          f = or.test(e),
          c = "svg" === t.tagName.toLowerCase(),
          d = (c ? "client" : "offset") + (f ? "Width" : "Height"),
          p = "px" === i,
          _ = "%" === i;
      return i === h || !u || pr[i] || pr[h] ? u : ("px" === h || p || (u = Zd(t, e, r, "px")), o = t.getCTM && Ud(t), !_ && "%" !== h || !rr[e] && !~e.indexOf("adius") ? (l[f ? "width" : "height"] = 100 + (p ? h : i), a = ~e.indexOf("adius") || "em" === i && t.appendChild && !c ? t : t.parentNode, o && (a = (t.ownerSVGElement || {}).parentNode), a && a !== Se && a.appendChild || (a = Se.body), (s = a._gsap) && _ && s.width && f && s.time === Et.time && !s.uncache ? ia(u / s.width * 100) : (!_ && "%" !== h || _r[Nd(a, "display")] || (l.position = Nd(t, "position")), a === t && (l.position = "static"), a.appendChild(Ee), n = Ee[d], a.removeChild(Ee), l.position = "absolute", f && _ && ((s = fa(a)).time = Et.time, s.width = a[d]), ia(p ? n * u / 100 : n && u ? 100 / n * u : 0))) : (n = o ? t.getBBox()[f ? "width" : "height"] : t[d], ia(_ ? u / n * 100 : u / 100 * n)))
  }

  function _d(t, e, r, i) {
      if (!r || "none" === r) {
          var n = dr(e, t, 1),
              a = n && Nd(t, n, 1);
          a && a !== r ? (e = n, r = a) : "borderColor" === e && (r = Nd(t, "borderTopColor"))
      }
      var s, o, u, h, l, f, c, d, p, _, m, g = new pe(this._pt, t.style, e, 0, 1, se),
          v = 0,
          y = 0;
      if (g.b = r, g.e = i, r += "", "auto" === (i += "") && (t.style[e] = i, i = Nd(t, e) || i, t.style[e] = r), Eb(s = [r, i]), i = s[1], u = (r = s[0]).match(rt) || [], (i.match(rt) || []).length) {
          for (; o = rt.exec(i);) c = o[0], p = i.substring(v, o.index), l ? l = (l + 1) % 5 : "rgba(" !== p.substr(-5) && "hsla(" !== p.substr(-5) || (l = 1), c !== (f = u[y++] || "") && (h = parseFloat(f) || 0, m = f.substr((h + "").length), "=" === c.charAt(1) && (c = ka(h, c) + m), d = parseFloat(c), _ = c.substr((d + "").length), v = rt.lastIndex - _.length, _ || (_ = _ || j.units[e] || m, v === i.length && (i += _, g.e += _)), m !== _ && (h = Zd(t, e, f, _) || 0), g._pt = {
              _next: g._pt,
              p: p || 1 === y ? p : ",",
              s: h,
              c: d - h,
              m: l && l < 4 || "zIndex" === e ? Math.round : 0
          });
          g.c = v < i.length ? i.substring(v, i.length) : ""
      } else g.r = "display" === e && "none" === i ? yd : xd;
      return nt.test(i) && (g.e = 0), this._pt = g
  }

  function be(t) {
      var e = t.split(" "),
          r = e[0],
          i = e[1] || "50%";
      return "top" !== r && "bottom" !== r && "left" !== i && "right" !== i || (t = r, r = i, i = t), e[0] = gr[r] || r, e[1] = gr[i] || i, e.join(" ")
  }

  function ce(t, e) {
      if (e.tween && e.tween._time === e.tween._dur) {
          var r, i, n, a = e.t,
              s = a.style,
              o = e.u,
              u = a._gsap;
          if ("all" === o || !0 === o) s.cssText = "", i = 1;
          else
              for (n = (o = o.split(",")).length; - 1 < --n;) r = o[n], rr[r] && (i = 1, r = "transformOrigin" === r ? fr : lr), Vd(a, r);
          i && (Vd(a, lr), u && (u.svg && a.removeAttribute("transform"), br(a, 1), u.uncache = 1, Id(s)))
      }
  }

  function ge(t) {
      return "matrix(1, 0, 0, 1, 0, 0)" === t || "none" === t || !t
  }

  function he(t) {
      var e = Nd(t, lr);
      return ge(e) ? yr : e.substr(7).match(et).map(ia)
  }

  function ie(t, e) {
      var r, i, n, a, s = t._gsap || fa(t),
          o = t.style,
          u = he(t);
      return s.svg && t.getAttribute("transform") ? "1,0,0,1,0,0" === (u = [(n = t.transform.baseVal.consolidate().matrix).a, n.b, n.c, n.d, n.e, n.f]).join(",") ? yr : u : (u !== yr || t.offsetParent || t === Re || s.svg || (n = o.display, o.display = "block", (r = t.parentNode) && t.offsetParent || (a = 1, i = t.nextElementSibling, Re.appendChild(t)), u = he(t), n ? o.display = n : Vd(t, "display"), a && (i ? r.insertBefore(t, i) : r ? r.appendChild(t) : Re.removeChild(t))), e && 6 < u.length ? [u[0], u[1], u[4], u[5], u[12], u[13]] : u)
  }

  function je(t, e, r, i, n, a) {
      var s, o, u, h = t._gsap,
          l = n || ie(t, !0),
          f = h.xOrigin || 0,
          c = h.yOrigin || 0,
          d = h.xOffset || 0,
          p = h.yOffset || 0,
          _ = l[0],
          m = l[1],
          g = l[2],
          v = l[3],
          y = l[4],
          T = l[5],
          b = e.split(" "),
          w = parseFloat(b[0]) || 0,
          x = parseFloat(b[1]) || 0;
      r ? l !== yr && (o = _ * v - m * g) && (u = w * (-m / o) + x * (_ / o) - (_ * T - m * y) / o, w = w * (v / o) + x * (-g / o) + (g * T - v * y) / o, x = u) : (w = (s = Td(t)).x + (~b[0].indexOf("%") ? w / 100 * s.width : w), x = s.y + (~(b[1] || b[0]).indexOf("%") ? x / 100 * s.height : x)), i || !1 !== i && h.smooth ? (y = w - f, T = x - c, h.xOffset = d + (y * _ + T * g) - y, h.yOffset = p + (y * m + T * v) - T) : h.xOffset = h.yOffset = 0, h.xOrigin = w, h.yOrigin = x, h.smooth = !!i, h.origin = e, h.originIsAbsolute = !!r, t.style[fr] = "0px 0px", a && (Wd(a, h, "xOrigin", f, w), Wd(a, h, "yOrigin", c, x), Wd(a, h, "xOffset", d, h.xOffset), Wd(a, h, "yOffset", p, h.yOffset)), t.setAttribute("data-svg-origin", w + " " + x)
  }

  function me(t, e, r) {
      var i = Ya(e);
      return ia(parseFloat(e) + parseFloat(Zd(t, "x", r + "px", i))) + i
  }

  function te(t, e, i, n, a) {
      var s, o, u = 360,
          h = r(a),
          l = parseFloat(a) * (h && ~a.indexOf("rad") ? ir : 1) - n,
          f = n + l + "deg";
      return h && ("short" === (s = a.split("_")[1]) && (l %= u) !== l % 180 && (l += l < 0 ? u : -u), "cw" === s && l < 0 ? l = (l + 36e9) % u - ~~(l / u) * u : "ccw" === s && 0 < l && (l = (l - 36e9) % u - ~~(l / u) * u)), t._pt = o = new pe(t._pt, e, i, n, l, ud), o.e = f, o.u = "deg", t._props.push(i), o
  }

  function ue(t, e) {
      for (var r in e) t[r] = e[r];
      return t
  }

  function ve(t, e, r) {
      var i, n, a, s, o, u, h, l = ue({}, r._gsap),
          f = r.style;
      for (n in l.svg ? (a = r.getAttribute("transform"), r.setAttribute("transform", ""), f[lr] = e, i = br(r, 1), Vd(r, lr), r.setAttribute("transform", a)) : (a = getComputedStyle(r)[lr], f[lr] = e, i = br(r, 1), f[lr] = a), rr)(a = l[n]) !== (s = i[n]) && "perspective,force3D,transformOrigin,svgOrigin".indexOf(n) < 0 && (o = Ya(a) !== (h = Ya(s)) ? Zd(r, n, a, h) : parseFloat(a), u = parseFloat(s), t._pt = new pe(t._pt, i, n, o, u - o, td), t._pt.u = h || 0, t._props.push(n));
      ue(i, l)
  }
  var Ae, Se, Re, De, Ee, ze, Fe, Ie, Be = Ft.Power0,
      Le = Ft.Power1,
      Ye = Ft.Power2,
      Ne = Ft.Power3,
      qe = Ft.Power4,
      Ue = Ft.Linear,
      Ve = Ft.Quad,
      We = Ft.Cubic,
      Xe = Ft.Quart,
      He = Ft.Quint,
      Qe = Ft.Strong,
      Ke = Ft.Elastic,
      Ze = Ft.Back,
      Ge = Ft.SteppedEase,
      Je = Ft.Bounce,
      $e = Ft.Sine,
      tr = Ft.Expo,
      er = Ft.Circ,
      rr = {},
      ir = 180 / Math.PI,
      nr = Math.PI / 180,
      ar = Math.atan2,
      sr = /([A-Z])/g,
      or = /(left|right|width|margin|padding|x)/i,
      ur = /[\s,\(]\S/,
      hr = {
          autoAlpha: "opacity,visibility",
          scale: "scaleX,scaleY",
          alpha: "opacity"
      },
      lr = "transform",
      fr = lr + "Origin",
      cr = "O,Moz,ms,Ms,Webkit".split(","),
      dr = function _checkPropPrefix(t, e, r) {
          var i = (e || Ee).style,
              n = 5;
          if (t in i && !r) return t;
          for (t = t.charAt(0).toUpperCase() + t.substr(1); n-- && !(cr[n] + t in i););
          return n < 0 ? null : (3 === n ? "ms" : 0 <= n ? cr[n] : "") + t
      },
      pr = {
          deg: 1,
          rad: 1,
          turn: 1
      },
      _r = {
          grid: 1,
          flex: 1
      },
      mr = function _get(t, e, r, i) {
          var n;
          return De || Qd(), e in hr && "transform" !== e && ~(e = hr[e]).indexOf(",") && (e = e.split(",")[0]), rr[e] && "transform" !== e ? (n = br(t, i), n = "transformOrigin" !== e ? n[e] : n.svg ? n.origin : wr(Nd(t, fr)) + " " + n.zOrigin + "px") : (n = t.style[e]) && "auto" !== n && !i && !~(n + "").indexOf("calc(") || (n = vr[e] && vr[e](t, e, r) || Nd(t, e) || ga(t, e) || ("opacity" === e ? 1 : 0)), r && !~(n + "").trim().indexOf(" ") ? Zd(t, e, n, r) + r : n
      },
      gr = {
          top: "0%",
          bottom: "100%",
          left: "0%",
          right: "100%",
          center: "50%"
      },
      vr = {
          clearProps: function clearProps(t, e, r, i, n) {
              if ("isFromStart" !== n.data) {
                  var a = t._pt = new pe(t._pt, e, r, 0, 0, ce);
                  return a.u = i, a.pr = -10, a.tween = n, t._props.push(r), 1
              }
          }
      },
      yr = [1, 0, 0, 1, 0, 0],
      Tr = {},
      br = function _parseTransform(t, e) {
          var r = t._gsap || new jt(t);
          if ("x" in r && !e && !r.uncache) return r;
          var i, n, a, s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w, x, k, M, O, P, C, A, S, R, D, E, z, F = t.style,
              I = r.scaleX < 0,
              B = "deg",
              L = getComputedStyle(t),
              Y = Nd(t, fr) || "0";
          return i = n = a = u = h = l = f = c = d = 0, s = o = 1, r.svg = !(!t.getCTM || !Ud(t)), L.translate && ("none" === L.translate && "none" === L.scale && "none" === L.rotate || (F[lr] = ("none" !== L.translate ? "translate3d(" + (L.translate + " 0 0").split(" ").slice(0, 3).join(", ") + ") " : "") + ("none" !== L.rotate ? "rotate(" + L.rotate + ") " : "") + ("none" !== L.scale ? "scale(" + L.scale.split(" ").join(",") + ") " : "") + ("none" !== L[lr] ? L[lr] : "")), F.scale = F.rotate = F.translate = "none"), m = ie(t, r.svg), r.svg && (O = r.uncache ? (P = t.getBBox(), Y = r.xOrigin - P.x + "px " + (r.yOrigin - P.y) + "px", "") : !e && t.getAttribute("data-svg-origin"), je(t, O || Y, !!O || r.originIsAbsolute, !1 !== r.smooth, m)), p = r.xOrigin || 0, _ = r.yOrigin || 0, m !== yr && (T = m[0], b = m[1], w = m[2], x = m[3], i = k = m[4], n = M = m[5], 6 === m.length ? (s = Math.sqrt(T * T + b * b), o = Math.sqrt(x * x + w * w), u = T || b ? ar(b, T) * ir : 0, (f = w || x ? ar(w, x) * ir + u : 0) && (o *= Math.abs(Math.cos(f * nr))), r.svg && (i -= p - (p * T + _ * w), n -= _ - (p * b + _ * x))) : (z = m[6], D = m[7], A = m[8], S = m[9], R = m[10], E = m[11], i = m[12], n = m[13], a = m[14], h = (g = ar(z, R)) * ir, g && (O = k * (v = Math.cos(-g)) + A * (y = Math.sin(-g)), P = M * v + S * y, C = z * v + R * y, A = k * -y + A * v, S = M * -y + S * v, R = z * -y + R * v, E = D * -y + E * v, k = O, M = P, z = C), l = (g = ar(-w, R)) * ir, g && (v = Math.cos(-g), E = x * (y = Math.sin(-g)) + E * v, T = O = T * v - A * y, b = P = b * v - S * y, w = C = w * v - R * y), u = (g = ar(b, T)) * ir, g && (O = T * (v = Math.cos(g)) + b * (y = Math.sin(g)), P = k * v + M * y, b = b * v - T * y, M = M * v - k * y, T = O, k = P), h && 359.9 < Math.abs(h) + Math.abs(u) && (h = u = 0, l = 180 - l), s = ia(Math.sqrt(T * T + b * b + w * w)), o = ia(Math.sqrt(M * M + z * z)), g = ar(k, M), f = 2e-4 < Math.abs(g) ? g * ir : 0, d = E ? 1 / (E < 0 ? -E : E) : 0), r.svg && (O = t.getAttribute("transform"), r.forceCSS = t.setAttribute("transform", "") || !ge(Nd(t, lr)), O && t.setAttribute("transform", O))), 90 < Math.abs(f) && Math.abs(f) < 270 && (I ? (s *= -1, f += u <= 0 ? 180 : -180, u += u <= 0 ? 180 : -180) : (o *= -1, f += f <= 0 ? 180 : -180)), e = e || r.uncache, r.x = i - ((r.xPercent = i && (!e && r.xPercent || (Math.round(t.offsetWidth / 2) === Math.round(-i) ? -50 : 0))) ? t.offsetWidth * r.xPercent / 100 : 0) + "px", r.y = n - ((r.yPercent = n && (!e && r.yPercent || (Math.round(t.offsetHeight / 2) === Math.round(-n) ? -50 : 0))) ? t.offsetHeight * r.yPercent / 100 : 0) + "px", r.z = a + "px", r.scaleX = ia(s), r.scaleY = ia(o), r.rotation = ia(u) + B, r.rotationX = ia(h) + B, r.rotationY = ia(l) + B, r.skewX = f + B, r.skewY = c + B, r.transformPerspective = d + "px", (r.zOrigin = parseFloat(Y.split(" ")[2]) || 0) && (F[fr] = wr(Y)), r.xOffset = r.yOffset = 0, r.force3D = j.force3D, r.renderTransform = r.svg ? Cr : Ie ? Pr : xr, r.uncache = 0, r
      },
      wr = function _firstTwoOnly(t) {
          return (t = t.split(" "))[0] + " " + t[1]
      },
      xr = function _renderNon3DTransforms(t, e) {
          e.z = "0px", e.rotationY = e.rotationX = "0deg", e.force3D = 0, Pr(t, e)
      },
      kr = "0deg",
      Mr = "0px",
      Or = ") ",
      Pr = function _renderCSSTransforms(t, e) {
          var r = e || this,
              i = r.xPercent,
              n = r.yPercent,
              a = r.x,
              s = r.y,
              o = r.z,
              u = r.rotation,
              h = r.rotationY,
              l = r.rotationX,
              f = r.skewX,
              c = r.skewY,
              d = r.scaleX,
              p = r.scaleY,
              _ = r.transformPerspective,
              m = r.force3D,
              g = r.target,
              v = r.zOrigin,
              y = "",
              T = "auto" === m && t && 1 !== t || !0 === m;
          if (v && (l !== kr || h !== kr)) {
              var b, w = parseFloat(h) * nr,
                  x = Math.sin(w),
                  k = Math.cos(w);
              w = parseFloat(l) * nr, b = Math.cos(w), a = me(g, a, x * b * -v), s = me(g, s, -Math.sin(w) * -v), o = me(g, o, k * b * -v + v)
          }
          _ !== Mr && (y += "perspective(" + _ + Or), (i || n) && (y += "translate(" + i + "%, " + n + "%) "), !T && a === Mr && s === Mr && o === Mr || (y += o !== Mr || T ? "translate3d(" + a + ", " + s + ", " + o + ") " : "translate(" + a + ", " + s + Or), u !== kr && (y += "rotate(" + u + Or), h !== kr && (y += "rotateY(" + h + Or), l !== kr && (y += "rotateX(" + l + Or), f === kr && c === kr || (y += "skew(" + f + ", " + c + Or), 1 === d && 1 === p || (y += "scale(" + d + ", " + p + Or), g.style[lr] = y || "translate(0, 0)"
      },
      Cr = function _renderSVGTransforms(t, e) {
          var r, i, n, a, s, o = e || this,
              u = o.xPercent,
              h = o.yPercent,
              l = o.x,
              f = o.y,
              c = o.rotation,
              d = o.skewX,
              p = o.skewY,
              _ = o.scaleX,
              m = o.scaleY,
              g = o.target,
              v = o.xOrigin,
              y = o.yOrigin,
              T = o.xOffset,
              b = o.yOffset,
              w = o.forceCSS,
              x = parseFloat(l),
              k = parseFloat(f);
          c = parseFloat(c), d = parseFloat(d), (p = parseFloat(p)) && (d += p = parseFloat(p), c += p), c || d ? (c *= nr, d *= nr, r = Math.cos(c) * _, i = Math.sin(c) * _, n = Math.sin(c - d) * -m, a = Math.cos(c - d) * m, d && (p *= nr, s = Math.tan(d - p), n *= s = Math.sqrt(1 + s * s), a *= s, p && (s = Math.tan(p), r *= s = Math.sqrt(1 + s * s), i *= s)), r = ia(r), i = ia(i), n = ia(n), a = ia(a)) : (r = _, a = m, i = n = 0), (x && !~(l + "").indexOf("px") || k && !~(f + "").indexOf("px")) && (x = Zd(g, "x", l, "px"), k = Zd(g, "y", f, "px")), (v || y || T || b) && (x = ia(x + v - (v * r + y * n) + T), k = ia(k + y - (v * i + y * a) + b)), (u || h) && (s = g.getBBox(), x = ia(x + u / 100 * s.width), k = ia(k + h / 100 * s.height)), s = "matrix(" + r + "," + i + "," + n + "," + a + "," + x + "," + k + ")", g.setAttribute("transform", s), w && (g.style[lr] = s)
      };
  ha("padding,margin,Width,Radius", function(e, r) {
      var t = "Right",
          i = "Bottom",
          n = "Left",
          o = (r < 3 ? ["Top", t, i, n] : ["Top" + n, "Top" + t, i + t, i + n]).map(function(t) {
              return r < 2 ? e + t : "border" + t + e
          });
      vr[1 < r ? "border" + e : e] = function(e, t, r, i, n) {
          var a, s;
          if (arguments.length < 4) return a = o.map(function(t) {
              return mr(e, t, r)
          }), 5 === (s = a.join(" ")).split(a[0]).length ? a[0] : s;
          a = (i + "").split(" "), s = {}, o.forEach(function(t, e) {
              return s[t] = a[e] = a[e] || a[(e - 1) / 2 | 0]
          }), e.init(t, s, n)
      }
  });
  var Ar, Sr, Rr, Dr = {
      name: "css",
      register: Qd,
      targetTest: function targetTest(t) {
          return t.style && t.nodeType
      },
      init: function init(t, e, i, n, a) {
          var s, o, u, h, l, f, c, d, p, _, m, g, v, y, T, b, w = this._props,
              x = t.style,
              k = i.vars.startAt;
          for (c in De || Qd(), this.styles = this.styles || Kd(t), b = this.styles.props, this.tween = i, e)
              if ("autoRound" !== c && (o = e[c], !pt[c] || !_b(c, e, i, n, t, a)))
                  if (l = typeof o, f = vr[c], "function" === l && (l = typeof(o = o.call(i, n, t, a))), "string" === l && ~o.indexOf("random(") && (o = ob(o)), f) f(this, t, c, o, i) && (T = 1);
                  else if ("--" === c.substr(0, 2)) s = (getComputedStyle(t).getPropertyValue(c) + "").trim(), o += "", Rt.lastIndex = 0, Rt.test(s) || (d = Ya(s), p = Ya(o)), p ? d !== p && (s = Zd(t, c, s, p) + p) : d && (o += d), this.add(x, "setProperty", s, o, n, a, 0, 0, c), w.push(c), b.push(c, 0, x[c]);
          else if ("undefined" !== l) {
              if (k && c in k ? (s = "function" == typeof k[c] ? k[c].call(i, n, t, a) : k[c], r(s) && ~s.indexOf("random(") && (s = ob(s)), Ya(s + "") || (s += j.units[c] || Ya(mr(t, c)) || ""), "=" === (s + "").charAt(1) && (s = mr(t, c))) : s = mr(t, c), h = parseFloat(s), (_ = "string" === l && "=" === o.charAt(1) && o.substr(0, 2)) && (o = o.substr(2)), u = parseFloat(o), c in hr && ("autoAlpha" === c && (1 === h && "hidden" === mr(t, "visibility") && u && (h = 0), b.push("visibility", 0, x.visibility), Wd(this, x, "visibility", h ? "inherit" : "hidden", u ? "inherit" : "hidden", !u)), "scale" !== c && "transform" !== c && ~(c = hr[c]).indexOf(",") && (c = c.split(",")[0])), m = c in rr)
                  if (this.styles.save(c), g || ((v = t._gsap).renderTransform && !e.parseTransform || br(t, e.parseTransform), y = !1 !== e.smoothOrigin && v.smooth, (g = this._pt = new pe(this._pt, x, lr, 0, 1, v.renderTransform, v, 0, -1)).dep = 1), "scale" === c) this._pt = new pe(this._pt, v, "scaleY", h, (_ ? ka(h, _ + u) : u) - h || 0, td), this._pt.u = 0, w.push("scaleY", c), c += "X";
                  else {
                      if ("transformOrigin" === c) {
                          b.push(fr, 0, x[fr]), o = be(o), v.svg ? je(t, o, 0, y, 0, this) : ((p = parseFloat(o.split(" ")[2]) || 0) !== v.zOrigin && Wd(this, v, "zOrigin", v.zOrigin, p), Wd(this, x, c, wr(s), wr(o)));
                          continue
                      }
                      if ("svgOrigin" === c) {
                          je(t, o, 1, y, 0, this);
                          continue
                      }
                      if (c in Tr) {
                          te(this, v, c, h, _ ? ka(h, _ + o) : o);
                          continue
                      }
                      if ("smoothOrigin" === c) {
                          Wd(this, v, "smooth", v.smooth, o);
                          continue
                      }
                      if ("force3D" === c) {
                          v[c] = o;
                          continue
                      }
                      if ("transform" === c) {
                          ve(this, o, t);
                          continue
                      }
                  }
              else c in x || (c = dr(c) || c);
              if (m || (u || 0 === u) && (h || 0 === h) && !ur.test(o) && c in x) u = u || 0, (d = (s + "").substr((h + "").length)) !== (p = Ya(o) || (c in j.units ? j.units[c] : d)) && (h = Zd(t, c, s, p)), this._pt = new pe(this._pt, m ? v : x, c, h, (_ ? ka(h, _ + u) : u) - h, m || "px" !== p && "zIndex" !== c || !1 === e.autoRound ? td : wd), this._pt.u = p || 0, d !== p && "%" !== p && (this._pt.b = s, this._pt.r = vd);
              else if (c in x) _d.call(this, t, c, s, _ ? _ + o : o);
              else {
                  if (!(c in t)) {
                      Q(c, o);
                      continue
                  }
                  this.add(t, c, s || t[c], _ ? _ + o : o, n, a)
              }
              m || (c in x ? b.push(c, 0, x[c]) : b.push(c, 1, s || t[c])), w.push(c)
          }
          T && de(this)
      },
      render: function render(t, e) {
          if (e.tween._time || !Fe())
              for (var r = e._pt; r;) r.r(t, r.d), r = r._next;
          else e.styles.revert()
      },
      get: mr,
      aliases: hr,
      getSetter: function getSetter(t, e, r) {
          var i = hr[e];
          return i && i.indexOf(",") < 0 && (e = i), e in rr && e !== fr && (t._gsap.x || mr(t, "x")) ? r && ze === r ? "scale" === e ? Cd : Bd : (ze = r || {}) && ("scale" === e ? Dd : Ed) : t.style && !u(t.style[e]) ? zd : ~e.indexOf("-") ? Ad : re(t, e)
      },
      core: {
          _removeProperty: Vd,
          _getMatrix: ie
      }
  };
  Ce.utils.checkPrefix = dr, Ce.core.getStyleSaver = Kd, Rr = ha((Ar = "x,y,z,scale,scaleX,scaleY,xPercent,yPercent") + "," + (Sr = "rotation,rotationX,rotationY,skewX,skewY") + ",transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective", function(t) {
      rr[t] = 1
  }), ha(Sr, function(t) {
      j.units[t] = "deg", Tr[t] = 1
  }), hr[Rr[13]] = Ar + "," + Sr, ha("0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY", function(t) {
      var e = t.split(":");
      hr[e[1]] = Rr[e[0]]
  }), ha("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective", function(t) {
      j.units[t] = "px"
  }), Ce.registerPlugin(Dr);
  var Er = Ce.registerPlugin(Dr) || Ce,
      zr = Er.core.Tween;
  e.Back = Ze, e.Bounce = Je, e.CSSPlugin = Dr, e.Circ = er, e.Cubic = We, e.Elastic = Ke, e.Expo = tr, e.Linear = Ue, e.Power0 = Be, e.Power1 = Le, e.Power2 = Ye, e.Power3 = Ne, e.Power4 = qe, e.Quad = Ve, e.Quart = Xe, e.Quint = He, e.Sine = $e, e.SteppedEase = Ge, e.Strong = Qe, e.TimelineLite = Ut, e.TimelineMax = Ut, e.TweenLite = Gt, e.TweenMax = zr, e.default = Er, e.gsap = Er;
  if (typeof(window) === "undefined" || window !== e) {
      Object.defineProperty(e, "__esModule", {
          value: !0
      })
  } else {
      delete e.default
  }
});