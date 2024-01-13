import { c as create_ssr_component, b as add_attribute, d as escape, e as each, v as validate_component } from "../../../chunks/ssr.js";
import { R as RightArrow } from "../../../chunks/RightArrow.js";
const UIUXCardComponent_svelte_svelte_type_style_lang = "";
const css = {
  code: ".card.svelte-1dg1pwm{max-width:100%;overflow:hidden;position:relative}.card-body.svelte-1dg1pwm{font-family:'EB Garamond';font-weight:100;color:black}.card-desc.svelte-1dg1pwm{font-size:0.9rem}.card-title.svelte-1dg1pwm{font-weight:200}.btn.svelte-1dg1pwm{font-size:small;font-weight:300;background-color:rgba(199,147,136,255);border-color:rgba(199,147,136,255)}",
  map: null
};
const UIUXCardComponent = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { id = -1 } = $$props;
  let { title = "Title" } = $$props;
  let { desc = "Description" } = $$props;
  let { src = "../../../Home_page_pics/wireframe.png" } = $$props;
  let { link = "/graphic_design" } = $$props;
  if ($$props.id === void 0 && $$bindings.id && id !== void 0)
    $$bindings.id(id);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.desc === void 0 && $$bindings.desc && desc !== void 0)
    $$bindings.desc(desc);
  if ($$props.src === void 0 && $$bindings.src && src !== void 0)
    $$bindings.src(src);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  $$result.css.add(css);
  return `<html lang="postcss"><div class="card bg-base-100 shadow-xl rounded-none h-full svelte-1dg1pwm"><figure><img class="w-full h-full"${add_attribute("src", src, 0)} alt="${"UIUX " + escape(id, true)}"></figure> <div class="card-body svelte-1dg1pwm"><h2 class="card-title svelte-1dg1pwm">${escape(title)}</h2> <p class="card-desc mb-10 svelte-1dg1pwm">${escape(desc)}</p> <div class="card-actions"><button class="btn btn-primary rounded-none svelte-1dg1pwm" data-svelte-h="svelte-le2wzv">Read more</button></div></div></div> </html>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let cards = [
    {
      id: 1,
      title: "Heartbeat",
      desc: "A music app that can link people with similar music tastes. This is a music software that can search for nearby users who listen to the same song as you, and you can choose to chat or not. Through different music types and works, find people with the same taste to become friends. Help those who are not good at expressing and communicating. Not only look at people’s appearance, no need to define others by appearance.",
      src: "../../../uiux_page_pics/Heartbeat.png",
      link: "/"
    },
    {
      id: 2,
      title: "Eazzy Consulting",
      desc: "Based on the original Eazzy Consulting website (Loan Service), optimizing the website according to the brand logo color scheme, adding Login and Online Payment, and adjusting the visual effect of the website as well as increasing the user experience. All functionality and design were achieved through Hubspot.",
      src: "../../../uiux_eazzyconsulting/cover.webp",
      link: "/uiux/eazzyconsulting"
    },
    {
      id: 3,
      title: "SMUG",
      desc: "A smart cup brand dedicated to enhancing the convenience and information that comes with your favorite beverage. We envisioned a cup with an app that can heat a beverage, keeps it warm, stir your drink, and track your daily intake.",
      src: "../../../uiux_page_pics/smug.png",
      link: "/uiux/smug"
    },
    {
      id: 4,
      title: "Easychoice",
      desc: "A site to help people with selection difficulties, you can choose a category that you need most at the moment and the site will give you a random answer. You can also add your own personal options, or add new categories.",
      src: "../../../uiux_easychoice_page_pics/easychoice translucent.png",
      link: "https://www.figma.com/proto/rmMoWaGbYSCVFT8Gpo6kgy/EasyChoice-2023?page-id=1011%3A2868&type=design&node-id=1011-4413&viewport=400%2C441%2C0.03&t=7B6NDfQGP7mLXCey-1&scaling=scale-down-width&mode=design"
    }
  ];
  return `<div class="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10 py-20 px-10">${each(cards, (card) => {
    return `${validate_component(UIUXCardComponent, "UIUXCardComponent").$$render($$result, Object.assign({}, card), {}, {})}`;
  })}</div> <div class="flex justify-end">${validate_component(RightArrow, "RightArrow").$$render(
    $$result,
    {
      link_txt: "Graphic design",
      link: "/graphic_design"
    },
    {},
    {}
  )}</div>`;
});
export {
  Page as default
};
