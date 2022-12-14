import {
  e as p,
  g as m,
  c as a,
  b as s,
  t as u,
  F as v,
  i as f,
  n as i,
  f as b,
  o,
  w as h,
  v as x,
  u as g,
} from "./index.92e8bdf4.js";
import { _ as y } from "./Button.vue_vue_type_style_index_0_lang.e6bbadd7.js";
import { _ as Q } from "./plugin-vue_export-helper.cdc0426e.js";
const I = { class: "title" },
  R = ["id", "value"],
  k = ["for"],
  B = { class: "bloc-btn" },
  V = p({
    __name: "Question",
    props: { questionText: null, items: null, nameRout: null },
    setup(e) {
      const c = e,
        r = g(),
        n = m("");
      function d() {
        r.push(c.nameRout);
      }
      return (q, l) => (
        o(),
        a("div", null, [
          s("h3", I, u(e.questionText), 1),
          s(
            "div",
            { class: i(["bloc-input", { disp: e.items.length < 3 }]) },
            [
              (o(!0),
              a(
                v,
                null,
                f(
                  e.items,
                  (t) => (
                    o(),
                    a(
                      "div",
                      {
                        class: i([
                          "item-input",
                          { mb_item_input: e.items.length > 2 },
                        ]),
                        key: t,
                      },
                      [
                        h(
                          s(
                            "input",
                            {
                              class: "input",
                              type: "radio",
                              id: t,
                              value: t,
                              "onUpdate:modelValue":
                                l[0] || (l[0] = (_) => (n.value = _)),
                            },
                            null,
                            8,
                            R
                          ),
                          [[x, n.value]]
                        ),
                        s("label", { class: "label", for: t }, u(t), 9, k),
                      ],
                      2
                    )
                  )
                ),
                128
              )),
            ],
            2
          ),
          s("div", B, [
            b(y, { nextQuestion: d, valueInput: n.value }, null, 8, [
              "valueInput",
            ]),
          ]),
        ])
      );
    },
  });
const F = Q(V, [["__scopeId", "data-v-e2af20eb"]]);
export { F as Q };
