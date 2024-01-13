import { c as create_ssr_component, v as validate_component } from "./ssr.js";
import { L as LeftArrow } from "./LeftArrow.js";
import { R as RightArrow } from "./RightArrow.js";
const LeftAndRightArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { left_link_txt = "" } = $$props;
  let { left_link = "/" } = $$props;
  let { right_link_txt = "" } = $$props;
  let { right_link = "/" } = $$props;
  if ($$props.left_link_txt === void 0 && $$bindings.left_link_txt && left_link_txt !== void 0)
    $$bindings.left_link_txt(left_link_txt);
  if ($$props.left_link === void 0 && $$bindings.left_link && left_link !== void 0)
    $$bindings.left_link(left_link);
  if ($$props.right_link_txt === void 0 && $$bindings.right_link_txt && right_link_txt !== void 0)
    $$bindings.right_link_txt(right_link_txt);
  if ($$props.right_link === void 0 && $$bindings.right_link && right_link !== void 0)
    $$bindings.right_link(right_link);
  return `<html lang="postcss"><div class="flex justify-between mt-9">${validate_component(LeftArrow, "LeftArrow").$$render($$result, { link_txt: left_link_txt, link: left_link }, {}, {})} ${validate_component(RightArrow, "RightArrow").$$render(
    $$result,
    {
      link_txt: right_link_txt,
      link: right_link
    },
    {},
    {}
  )}</div></html>`;
});
export {
  LeftAndRightArrow as L
};
