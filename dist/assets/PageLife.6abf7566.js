import { Q as a } from "./Question.1149e5e5.js";
import { P as n } from "./ProgressBar.6f5824c7.js";
import { e as r, g as u, c as i, f as e, o as m } from "./index.92e8bdf4.js";
import "./Button.vue_vue_type_style_index_0_lang.e6bbadd7.js";
import "./plugin-vue_export-helper.cdc0426e.js";
const d = r({
  __name: "PageLife",
  setup(c) {
    const t = u(
        "\u041A\u0430\u043A\u043E\u0439 \u0412\u044B \u0432\u0438\u0434\u0438\u0442\u0435 \u0441\u0432\u043E\u044E \u0436\u0438\u0437\u043D\u044C \u0447\u0435\u0440\u0435\u0437 5 \u043B\u0435\u0442?"
      ),
      o = u([
        "\u0411\u0440\u0430\u043A, \u0441\u0435\u043C\u044C\u044F, \u0434\u0435\u0442\u0438, \u0434\u043E\u043C",
        "\u041F\u0443\u0442\u0435\u0448\u0435\u0441\u0442\u0432\u0438\u044F \u043F\u043E \u041C\u0438\u0440\u0443",
        "\u0423\u0441\u043F\u0435\u0448\u043D\u0430\u044F \u043A\u0430\u0440\u044C\u0435\u0440\u0430",
        "\u0412\u0441\u0451 \u0432\u043C\u0435\u0441\u0442\u0435",
      ]),
      s = u("birth");
    return (l, p) => (
      m(),
      i("div", null, [
        e(n, { width: 80 }),
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
export { d as default };
