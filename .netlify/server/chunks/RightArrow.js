import { c as create_ssr_component, d as escape } from "./ssr.js";
const RightArrow_svelte_svelte_type_style_lang = "";
const css = {
  code: '.btn.svelte-xqtwq7{font-family:"EB Garamond";margin-right:10}.btn.svelte-xqtwq7:hover{cursor:pointer;background-color:transparent;border-color:transparent}',
  map: null
};
const RightArrow = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { link_txt = "" } = $$props;
  let { link = "/" } = $$props;
  if ($$props.link_txt === void 0 && $$bindings.link_txt && link_txt !== void 0)
    $$bindings.link_txt(link_txt);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<html lang="postcss"><button class="btn btn-lg no-animation bg-transparent border-transparent hover:underline flex-nowrap svelte-xqtwq7">${escape(link_txt)} <img alt="Previous page arrow" width="25" height="25" src="https://www.reshot.com/build/chevron--dark-ceeb4c718ee6f014d714b646d957cdba33c46f313fa6ac77cabcc5bc8f4901dc.svg"></button> </html>`;
});
export {
  RightArrow as R
};
