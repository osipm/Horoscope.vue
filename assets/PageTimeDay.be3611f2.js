import { Q as a } from "./Question.1149e5e5.js";
import { P as n } from "./ProgressBar.6f5824c7.js";
import { e as m, g as u, c as r, f as e, o as i } from "./index.92e8bdf4.js";
import "./Button.vue_vue_type_style_index_0_lang.e6bbadd7.js";
import "./plugin-vue_export-helper.cdc0426e.js";
const B = m({
  __name: "PageTimeDay",
  setup(c) {
    const t = u(
        "\u0412 \u043A\u0430\u043A\u043E\u0435 \u0432\u0440\u0435\u043C\u044F \u0441\u0443\u0442\u043E\u043A \u0412\u044B \u0447\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u0441\u0435\u0431\u044F \u043D\u0430\u0438\u0431\u043E\u043B\u0435\u0435 \u043A\u043E\u043C\u0444\u043E\u0440\u0442\u043D\u043E?"
      ),
      o = u([
        "\u0443\u0442\u0440\u043E",
        "\u043D\u043E\u0447\u044C",
        "\u0432\u0435\u0447\u0435\u0440",
        "\u0434\u0435\u043D\u044C",
      ]),
      s = u("insomnia");
    return (l, p) => (
      i(),
      r("div", null, [
        e(n, { width: 20 }),
        e(
          a,
          { questionText: t.value, items: o.value, nameRout: s.value },
          null,
          8,
          ["questionText", "items", "nameRout"]
        ),
      ])
    );
  },
});
export { B as default };
