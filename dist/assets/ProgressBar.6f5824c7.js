import { e as s, o, c as r, b as t, j as a } from "./index.92e8bdf4.js";
import { _ as c } from "./plugin-vue_export-helper.cdc0426e.js";
const _ = { class: "progress-bar" },
  n = s({
    __name: "ProgressBar",
    props: { width: null },
    setup(e) {
      return (l, i) => (
        o(),
        r("div", _, [
          t(
            "div",
            { class: "filling", style: a({ width: e.width + "%" }) },
            null,
            4
          ),
        ])
      );
    },
  });
const m = c(n, [["__scopeId", "data-v-53313cc9"]]);
export { m as P };
