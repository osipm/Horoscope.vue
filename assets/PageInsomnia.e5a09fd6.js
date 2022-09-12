import { Q as n } from "./Question.1149e5e5.js";
import { P as a } from "./ProgressBar.6f5824c7.js";
import { e as r, g as u, c as m, f as e, o as i } from "./index.92e8bdf4.js";
import "./Button.vue_vue_type_style_index_0_lang.e6bbadd7.js";
import "./plugin-vue_export-helper.cdc0426e.js";
const D = r({
  __name: "PageInsomnia",
  setup(c) {
    const t = u(
        "\u041F\u043E\u0434\u0441\u043A\u0430\u0436\u0438\u0442\u0435, \u043C\u0443\u0447\u0430\u0435\u0442 \u043B\u0438 \u0432\u0430\u0441 \u0431\u0435\u0441\u0441\u043E\u043D\u043D\u0438\u0446\u0430 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F?"
      ),
      o = u("plans"),
      s = u([
        "\u0434\u0430",
        "\u043D\u0435\u0442",
        "\u0438\u043D\u043E\u0433\u0434\u0430",
      ]);
    return (l, p) => (
      i(),
      m("div", null, [
        e(a, { width: 40 }),
        e(
          n,
          { questionText: t.value, items: s.value, nameRout: o.value },
          null,
          8,
          ["questionText", "items", "nameRout"]
        ),
      ])
    );
  },
});
export { D as default };
