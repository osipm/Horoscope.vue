import { _ as n } from "./plugin-vue_export-helper.cdc0426e.js";
import {
  o as t,
  c as o,
  p,
  a as l,
  b as s,
  d as c,
  F as r,
  e as u,
  f as a,
  r as f,
} from "./index.92e8bdf4.js";
const i = {},
  I = (e) => (p("data-v-0f8490aa"), (e = e()), l(), e),
  m = I(() =>
    s(
      "div",
      { class: "block" },
      [
        s(
          "h1",
          { class: "title" },
          "\u041D\u043E\u0432\u044B\u0439 \u0433\u043E\u0440\u043E\u0441\u043A\u043E\u043F \u043D\u0430 2021 \u0433\u043E\u0434!"
        ),
        s(
          "p",
          { class: "text" },
          "\u0423\u0437\u043D\u0430\u0439\u0442\u0435, \u0447\u0442\u043E \u0412\u0430\u0441 \u0436\u0434\u0451\u0442."
        ),
      ],
      -1
    )
  ),
  E = [m];
function h(e, _) {
  return t(), o("header", null, E);
}
const v = n(i, [
  ["render", h],
  ["__scopeId", "data-v-0f8490aa"],
]);
const S = {},
  C = { key: 0, class: "footer" },
  N = { key: 1, class: "text" };
function T(e, _) {
  return (
    t(),
    o(
      r,
      null,
      [
        e.$route.meta.footer
          ? (t(), o("footer", C, " 2020 \xA9 HOROSCOP PERSONAL "))
          : c("", !0),
        e.$route.meta.footerText
          ? (t(),
            o(
              "p",
              N,
              " TERMENI SI CONDITII: ACESTA ESTE UN SERVICIU DE DIVERTISMENT. PRIN FOLOSIREA LUI DECLARATI CA AVETI 18 "
            ))
          : c("", !0),
      ],
      64
    )
  );
}
const x = n(S, [
    ["render", T],
    ["__scopeId", "data-v-25add543"],
  ]),
  O = u({
    __name: "Layout",
    setup(e) {
      return (_, A) => {
        const d = f("router-view");
        return t(), o(r, null, [a(v), s("main", null, [a(d)]), a(x)], 64);
      };
    },
  });
export { O as default };
