import { c as create_ssr_component, d as escape } from "./ssr.js";
const LeftArrow_svelte_svelte_type_style_lang = "";
const css = {
  code: '.btn.svelte-1gvpnfe{font-family:"EB Garamond";margin-left:10}.btn.svelte-1gvpnfe:hover{cursor:pointer;background-color:transparent;border-color:transparent}',
  map: null
};
const LeftArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link_txt = "" } = $$props;
  let { link = "/" } = $$props;
  if ($$props.link_txt === void 0 && $$bindings.link_txt && link_txt !== void 0)
    $$bindings.link_txt(link_txt);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<html lang="postcss"><button class="btn btn-lg no-animation bg-transparent border-transparent hover:underline flex-nowrap svelte-1gvpnfe"><img alt="Previous page arrow" width="25" height="25" src="https://www.reshot.com/build/chevron--dark-ceeb4c718ee6f014d714b646d957cdba33c46f313fa6ac77cabcc5bc8f4901dc.svg" style="transform: rotate(180deg);"> ${escape(link_txt)}</button> </html>`;
});
export {
  LeftArrow as L
};
