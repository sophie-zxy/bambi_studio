import { c as create_ssr_component, b as add_attribute } from "./ssr.js";
const ImageCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { alt = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.alt === void 0 && $$bindings.alt && alt !== void 0)
    $$bindings.alt(alt);
  return `<div class="image-card"><img class="h-auto max-w-full mb-4"${add_attribute("src", src, 0)}${add_attribute("alt", alt, 0)}></div>`;
});
export {
  ImageCard as I
};
