import { Q as a } from "./Question.1149e5e5.js";
import { P as n } from "./ProgressBar.6f5824c7.js";
import { e as r, g as u, c as m, f as e, o as i } from "./index.92e8bdf4.js";
import "./Button.vue_vue_type_style_index_0_lang.e6bbadd7.js";
import "./plugin-vue_export-helper.cdc0426e.js";
const x = r({
  __name: "PagePlans",
  setup(c) {
    const t = u(
        "\u0427\u0443\u0432\u0441\u0442\u0432\u0443\u0435\u0442\u0435 \u043B\u0438 \u0412\u044B \u0432 \u043F\u043E\u0441\u043B\u0435\u0434\u043D\u0435\u0435 \u0432\u0440\u0435\u043C\u044F, \u0447\u0442\u043E \u0432\u0430\u043C \u043D\u0438\u043A\u0430\u043A \u043D\u0435 \u0443\u0434\u0430\u0435\u0442\u0441\u044F \u043E\u0441\u0443\u0449\u0435\u0441\u0442\u0432\u0438\u0442\u044C \u0432\u0430\u0448\u0438 \u043F\u043B\u0430\u043D\u044B?"
      ),
      o = u([
        "\u0434\u0430",
        "\u043D\u0435\u0442",
        "\u0438\u043D\u043E\u0433\u0434\u0430",
      ]),
      s = u("life");
    return (l, p) => (
      i(),
      m("div", null, [
        e(n, { width: 60 }),
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
export { x as default };
