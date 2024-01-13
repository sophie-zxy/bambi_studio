import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "../../chunks/ssr.js";
const _400 = "";
const ImagePreviewCard_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: '.card.svelte-thez9q{position:relative}.inner-card.svelte-thez9q{width:25rem;height:25rem}.inner-card.svelte-thez9q:hover{transform:scale(1.02);transition-duration:200ms}.text.svelte-thez9q{font-family:"EB Garamond";font-weight:400;font-size:24px;z-index:5}@media(max-width: 640px){.inner-card.svelte-thez9q{width:10rem;height:10rem}.text.svelte-thez9q{font-size:16px}}',
  map: null
};
const ImagePreviewCard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { src = "" } = $$props;
  let { text = "" } = $$props;
  let { link = "" } = $$props;
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css$1);
  return `<a${add_attribute("href", link, 0)}><div class="grid card justify-items-center svelte-thez9q"><div class="inner-card only:bg-cover bg-center svelte-thez9q" style="${"background-image: url(" + escape(src, true) + "); background-size: cover;"}"></div> <p class="text p-4 text-black svelte-thez9q">${escape(text)}</p></div> </a>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".join.svelte-11ja6cs{display:flex;flex-wrap:wrap;justify-content:center;gap:2rem;padding:2rem}@media(max-width: 640px){.join.svelte-11ja6cs{padding-left:1rem;padding-right:1rem}}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const images = [
    {
      src: "../../Home_page_pics/wireframe.png",
      text: "UIUX",
      link: "/uiux"
    },
    {
      src: "../../Home_page_pics/graphic_d.png",
      text: "Graphic Design",
      link: "/graphic_design"
    },
    {
      src: "../../Home_page_pics/fitlogo.png",
      text: "Animation",
      link: "/animation_route"
    },
    {
      src: "../../Home_page_pics/Immigrate.JPG",
      text: "Illustration",
      link: "/illustration"
    },
    {
      src: "../../Home_page_pics/drawing.JPG",
      text: "Sketches",
      link: "/sketches_route"
    },
    {
      src: "../../Home_page_pics/photography.JPG",
      text: "Photography",
      link: "/photography"
    }
  ];
  $$result.css.add(css);
  return `<html lang="postcss"><div class="join svelte-11ja6cs">${each(images, (image) => {
    return `${validate_component(ImagePreviewCard, "ImagePreviewCard").$$render($$result, Object.assign({}, image), {}, {})}`;
  })}</div> </html>`;
});
export {
  Page as default
};
