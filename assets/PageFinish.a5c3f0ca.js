import {
  e as p,
  g as E,
  m as h,
  c as t,
  b as e,
  j as D,
  t as x,
  d as o,
  F as v,
  q as a,
  o as s,
  p as B,
  a as m,
  u as F,
} from "./index.92e8bdf4.js";
import { _ as f } from "./plugin-vue_export-helper.cdc0426e.js";
const i = (c) => (B("data-v-27d19b5c"), (c = c()), m(), c),
  y = i(() =>
    e(
      "h3",
      { class: "title" },
      "\u041E\u0431\u0440\u0430\u0431\u043E\u0442\u043A\u0430 \u0432\u0430\u0448\u0438\u0445 \u0434\u0430\u043D\u043D\u044B\u0445:",
      -1
    )
  ),
  g = { class: "progres-bar" },
  k = { class: "progress-text" },
  P = { class: "execution-text" },
  A = a(
    " \u0410\u043D\u0430\u043B\u0438\u0437 \u0432\u0432\u0435\u0434\u0435\u043D\u043D\u044B\u0445 \u0434\u0430\u043D\u043D\u044B\u0445 . . . . . . . "
  ),
  I = { key: 0, class: "text-Performed" },
  b = { class: "execution-text" },
  S = a(
    " \u041A\u043E\u0440\u0440\u0435\u043A\u0446\u0438\u044F \u0430\u0441\u0442\u0440\u043E\u043B\u043E\u0433\u0438\u0447\u0435\u0441\u043A\u043E\u0433\u043E \u0437\u043D\u0430\u043A\u0430 . . . . . . . "
  ),
  C = { key: 0, class: "text-Performed" },
  w = { class: "execution-text" },
  N = a(
    " \u0420\u0430\u0441\u0447\u0435\u0442 \u0432\u0430\u0440\u0438\u0430\u0446\u0438\u0439 \u043E\u0442\u0432\u0435\u0442\u043E\u0432 . . . . . . . "
  ),
  V = { key: 0, class: "text-Performed" },
  M = { class: "execution-text" },
  T = a(
    " \u0413\u0435\u043D\u0435\u0440\u0430\u0446\u0438\u044F \u043F\u0440\u0435\u0434\u0441\u043A\u0430\u0437\u0430\u043D\u0438\u044F . . . . . . . "
  ),
  j = { key: 0, class: "text-Performed" },
  q = { class: "execution-text" },
  z = a(
    " \u0421\u043E\u0445\u0440\u0430\u043D\u0435\u043D\u0438\u0435 \u0440\u0435\u0437\u0443\u043B\u044C\u0442\u0430\u0442\u0430 . . . . . . . "
  ),
  Q = { key: 0, class: "text-Performed" },
  R = { class: "execution-text" },
  G = a(
    " \u041F\u043E\u0438\u0441\u043A \u0441\u0432\u043E\u0431\u043E\u0434\u043D\u043E\u0433\u043E \u043E\u043F\u0435\u0440\u0430\u0442\u043E\u0440\u0430 . . . . . . . "
  ),
  H = { key: 0, class: "text-Performed" },
  J = i(() =>
    e(
      "p",
      { class: "execution-text" },
      " \u041D\u0430\u0447\u0430\u043B\u0430 \u043E\u0437\u0432\u0443\u0447\u043A\u0438 \u0438 \u0437\u0430\u043F\u0438\u0441\u0438 \u0430\u0443\u0434\u0438\u043E-\u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u044F . . . . . . . ",
      -1
    )
  ),
  K = { key: 0, class: "title title-ready" },
  L = { key: 1, class: "title title-entry" },
  O = p({
    __name: "PageFinish",
    setup(c) {
      const u = E(0),
        l = F();
      function r() {
        l.push("call");
      }
      function d() {
        const n = setInterval(_, 50);
        function _() {
          u.value >= 100 ? (clearInterval(n), setTimeout(r(), 200)) : u.value++;
        }
      }
      return (
        h(() => {
          d();
        }),
        (n, _) => (
          s(),
          t(
            v,
            null,
            [
              y,
              e("div", g, [
                e(
                  "div",
                  { class: "progress", style: D({ width: u.value + "%" }) },
                  [e("p", k, x(u.value) + "%", 1)],
                  4
                ),
              ]),
              e("div", null, [
                e("p", P, [
                  A,
                  u.value > 12
                    ? (s(),
                      t(
                        "span",
                        I,
                        "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E!"
                      ))
                    : o("", !0),
                ]),
                e("p", b, [
                  S,
                  u.value > 24
                    ? (s(),
                      t(
                        "span",
                        C,
                        "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E!"
                      ))
                    : o("", !0),
                ]),
                e("p", w, [
                  N,
                  u.value > 36
                    ? (s(),
                      t(
                        "span",
                        V,
                        "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E!"
                      ))
                    : o("", !0),
                ]),
                e("p", M, [
                  T,
                  u.value > 48
                    ? (s(),
                      t(
                        "span",
                        j,
                        "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E!"
                      ))
                    : o("", !0),
                ]),
                e("p", q, [
                  z,
                  u.value > 60
                    ? (s(),
                      t(
                        "span",
                        Q,
                        "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E!"
                      ))
                    : o("", !0),
                ]),
                e("p", R, [
                  G,
                  u.value > 82
                    ? (s(),
                      t(
                        "span",
                        H,
                        "\u0412\u044B\u043F\u043E\u043B\u043D\u0435\u043D\u043E!"
                      ))
                    : o("", !0),
                ]),
                J,
                u.value > 82
                  ? (s(),
                    t(
                      "h3",
                      K,
                      "\u0418\u0434\u0451\u0442 \u0437\u0430\u043F\u0438\u0441\u044C!"
                    ))
                  : o("", !0),
                u.value >= 100
                  ? (s(), t("h3", L, "\u0413\u043E\u0442\u043E\u0432\u043E!"))
                  : o("", !0),
              ]),
            ],
            64
          )
        )
      );
    },
  });
const X = f(O, [["__scopeId", "data-v-27d19b5c"]]);
export { X as default };
