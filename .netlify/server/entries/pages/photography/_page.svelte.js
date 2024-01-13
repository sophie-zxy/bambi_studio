import { c as create_ssr_component, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { L as LeftArrow } from "../../../chunks/LeftArrow.js";
import { I as ImageCard } from "../../../chunks/ImageCard.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".columns-2.svelte-t4pgsq{display:grid;grid-template-columns:repeat(2, 1fr);gap:12px}@media(max-width: 768px){.columns-2.svelte-t4pgsq{display:flex;flex-direction:column}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let images = [
    {
      src: "../../photo_page_pics/photo1.JPG",
      alt: "cherry blossom"
    },
    {
      src: "../../photo_page_pics/photo2.JPG",
      alt: "bench"
    }
  ];
  $$result.css.add(css);
  return `<div class="columns-2 my-8 gap-12 mx-16 svelte-t4pgsq">${each(images, (image) => {
    return `${validate_component(ImageCard, "ImageCard").$$render($$result, Object.assign({}, image), {}, {})}`;
  })}</div> ${validate_component(LeftArrow, "LeftArrow").$$render(
    $$result,
    {
      link_txt: "Sketches",
      link: "/sketches_route"
    },
    {},
    {}
  )}`;
});
export {
  Page as default
};
