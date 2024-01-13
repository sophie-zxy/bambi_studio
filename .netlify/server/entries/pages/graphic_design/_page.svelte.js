import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { L as LeftAndRightArrow } from "../../../chunks/LeftAndRightArrow.js";
const GraphicDesignCardComponent_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".card.svelte-1e2emde{max-width:100%;max-height:100%;overflow:hidden;position:relative;border-radius:0%}.card-body.svelte-1e2emde{font-family:'EB Garamond';font-weight:100;color:black}.design.svelte-1e2emde{border-radius:2%}@media(max-width: 640px){.card.svelte-1e2emde{width:90%}}",
  map: null
};
const GraphicDesignCardComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = -1 } = $$props;
  let { title = "Title" } = $$props;
  let { src = "../../../ph_sq.png" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  $$result.css.add(css$1);
  return `<div class="card bg-base-100 h-108 w-96 svelte-1e2emde"><figure class="design items-center svelte-1e2emde"><img${add_attribute("src", src, 0)} alt="${"UIUX " + escape(id, true)}"></figure> <div class="card-body items-center svelte-1e2emde"><h2 class="card-title">${escape(title)}</h2></div> </div>`;
});
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".gd.svelte-1w9l0dn{display:flex;flex-wrap:wrap;justify-content:center;gap:1rem;padding:2rem}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [
    {
      id: 1,
      title: "Event Poster",
      src: "../../../graphic_page_pics/poster1.webp"
    },
    {
      id: 2,
      title: "Event Poster",
      src: "../../../graphic_page_pics/poster2.webp"
    },
    {
      id: 3,
      title: "Event Poster",
      src: "../../../graphic_page_pics/poster3.webp"
    },
    {
      id: 4,
      title: "Poster",
      src: "../../../graphic_page_pics/poster4.webp"
    },
    {
      id: 5,
      title: "Poster",
      src: "../../../graphic_page_pics/poster5.webp"
    },
    {
      id: 6,
      title: "Poster",
      src: "../../../graphic_page_pics/poster6.webp"
    },
    {
      id: 7,
      title: "Menu",
      src: "../../../graphic_page_pics/poster7.webp"
    },
    {
      id: 8,
      title: "Poster",
      src: "../../../graphic_page_pics/poster8.webp"
    },
    {
      id: 9,
      title: "Poster",
      src: "../../../graphic_page_pics/poster9.webp"
    },
    {
      id: 10,
      title: "Poster",
      src: "../../../graphic_page_pics/poster10.webp"
    },
    {
      id: 11,
      title: "Poster",
      src: "../../../graphic_page_pics/poster11.webp"
    },
    {
      id: 12,
      title: "Poster",
      src: "../../../graphic_page_pics/poster12.webp"
    },
    {
      id: 13,
      title: "Postcard",
      src: "../../../graphic_page_pics/poster13.webp"
    },
    {
      id: 14,
      title: "Menu",
      src: "../../../graphic_page_pics/poster14.webp"
    },
    {
      id: 15,
      title: "Menu",
      src: "../../../graphic_page_pics/poster15.webp"
    },
    {
      id: 16,
      title: "Poster",
      src: "../../../graphic_page_pics/poster16.webp"
    },
    {
      id: 17,
      title: "Poster",
      src: "../../../graphic_page_pics/poster17.webp"
    }
  ];
  let nav_obj = {
    left_link_txt: "UIUX",
    left_link: "/uiux",
    right_link_txt: "Animation",
    right_link: "/animation_route"
  };
  $$result.css.add(css);
  return `<html lang="postcss"><div class="gd svelte-1w9l0dn">${each(cards, (card) => {
    return `${validate_component(GraphicDesignCardComponent, "GraphicDesignCardComponent").$$render($$result, Object.assign({}, card), {}, {})}`;
  })}</div> ${validate_component(LeftAndRightArrow, "LeftAndRightArrow").$$render($$result, Object.assign({}, nav_obj), {}, {})} </html>`;
});
export {
  Page as default
};
