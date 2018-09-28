"use strict";

!function (t) {
  var e = {};function r(n) {
    if (e[n]) return e[n].exports;var o = e[n] = { i: n, l: !1, exports: {} };return t[n].call(o.exports, o, o.exports, r), o.l = !0, o.exports;
  }r.m = t, r.c = e, r.d = function (t, e, n) {
    r.o(t, e) || Object.defineProperty(t, e, { configurable: !1, enumerable: !0, get: n });
  }, r.r = function (t) {
    Object.defineProperty(t, "__esModule", { value: !0 });
  }, r.n = function (t) {
    var e = t && t.__esModule ? function () {
      return t.default;
    } : function () {
      return t;
    };return r.d(e, "a", e), e;
  }, r.o = function (t, e) {
    return Object.prototype.hasOwnProperty.call(t, e);
  }, r.p = "/build/", r(r.s = 1);
}([function (t, e, r) {
  "use strict";
  var n, o, i, u;n = document.querySelector(".js-slider-left"), o = document.querySelector(".js-slider-right"), i = document.querySelector(".js-slider-items"), u = 0, i.style.right = u, o.onclick = function () {
    u < 1400 && (u += 700, i.style.right = u + "px", n.style.opacity = 1, n.style.cursor = "pointer"), 1400 === u && (o.style.opacity = .2, o.style.cursor = "initial");
  }, n.onclick = function () {
    u > 0 && (u -= 700, i.style.right = u + "px", o.style.opacity = 1, o.style.cursor = "pointer"), 0 === u && (n.style.opacity = .2, n.style.cursor = "initial");
  };
}, function (t, e, r) {
  "use strict";
  var n,
      o = r(0),
      i = (n = o) && n.__esModule ? n : { default: n };document.addEventListener("DOMContentLoaded", function (t) {
    i.default;
  });
}]);
//# sourceMappingURL=bundle.js.map