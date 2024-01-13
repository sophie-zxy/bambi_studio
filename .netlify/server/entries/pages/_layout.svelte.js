import { c as create_ssr_component, e as each, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
const app = "";
const index$1 = "";
const index = "";
const InstagramSvg = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 48 48"><path d="M 16.5 5 C 10.16639 5 5 10.16639 5 16.5 L 5 31.5 C 5 37.832757 10.166209 43 16.5 43 L 31.5 43 C 37.832938 43 43 37.832938 43 31.5 L 43 16.5 C 43 10.166209 37.832757 5 31.5 5 L 16.5 5 z M 16.5 8 L 31.5 8 C 36.211243 8 40 11.787791 40 16.5 L 40 31.5 C 40 36.211062 36.211062 40 31.5 40 L 16.5 40 C 11.787791 40 8 36.211243 8 31.5 L 8 16.5 C 8 11.78761 11.78761 8 16.5 8 z M 34 12 C 32.895 12 32 12.895 32 14 C 32 15.105 32.895 16 34 16 C 35.105 16 36 15.105 36 14 C 36 12.895 35.105 12 34 12 z M 24 14 C 18.495178 14 14 18.495178 14 24 C 14 29.504822 18.495178 34 24 34 C 29.504822 34 34 29.504822 34 24 C 34 18.495178 29.504822 14 24 14 z M 24 17 C 27.883178 17 31 20.116822 31 24 C 31 27.883178 27.883178 31 24 31 C 20.116822 31 17 27.883178 17 24 C 17 20.116822 20.116822 17 24 17 z"></path></svg>`;
});
const Linkedin = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0,0,256,256"><g fill="black" fill-rule="nonzero" stroke="none" stroke-width="1" stroke-linecap="butt" stroke-linejoin="miter" stroke-miterlimit="10" stroke-dasharray="" stroke-dashoffset="0" font-family="none" font-weight="none" font-size="none" text-anchor="none" style="mix-blend-mode: normal"><g transform="scale(8,8)"><path d="M8.64258,4c-1.459,0 -2.64258,1.18163 -2.64258,2.64063c0,1.459 1.18262,2.66797 2.64063,2.66797c1.458,0 2.64258,-1.20897 2.64258,-2.66797c0,-1.458 -1.18163,-2.64062 -2.64062,-2.64062zM21.53516,11c-2.219,0 -3.48866,1.16045 -4.09766,2.31445h-0.06445v-2.00391h-4.37305v14.68945h4.55664v-7.27148c0,-1.916 0.14463,-3.76758 2.51563,-3.76758c2.337,0 2.37109,2.18467 2.37109,3.88867v7.15039h4.55078h0.00586v-8.06836c0,-3.948 -0.84884,-6.93164 -5.46484,-6.93164zM6.36328,11.31055v14.68945h4.56055v-14.68945z"></path></g></g></svg>`;
});
const DefaultNavigationBarLong = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { navLinks = [] } = $$props;
  if ($$props.navLinks === void 0 && $$bindings.navLinks && navLinks !== void 0)
    $$bindings.navLinks(navLinks);
  return `<div><ul class="flex items-center flex-wrap menu menu-horizontal px-1">${each(navLinks, (link) => {
    return `<li class="flex items-center px-2">${link.name ? `<a${add_attribute("href", link.href, 0)} class="items-center">${escape(link.name)}</a>` : ``} </li>`;
  })} <li class="flex items-center"><a href="https://www.instagram.com/_lightnlight/?igshid=YmMyMTA2M2Y%3D">${validate_component(InstagramSvg, "InstagramSvg").$$render($$result, {}, {}, {})}</a></li> <li class="flex items-center"><a href="https://www.linkedin.com/in/zhiyi-bambi-li-390479208/">${validate_component(Linkedin, "LinkedinSvg").$$render($$result, {}, {}, {})}</a></li></ul></div>`;
});
const Hamburger_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".test.svelte-cst4z7{background-color:papayawhip;position:fixed;top:0;bottom:0;left:0;right:0;z-index:100;display:flex;justify-content:center;align-items:center}nav.svelte-cst4z7{display:flex;justify-content:center;flex-direction:column;align-items:center;width:100%}.menuItems.svelte-cst4z7{margin:10px;font-size:24px;color:black;text-decoration:none;padding:10px;border-radius:5px;transition:background-color 0.3s ease-in-out;align-self:stretch;display:flex;align-items:center;justify-content:center}.menuItems.svelte-cst4z7:hover{text-decoration:underline}.hamburgerMenu.svelte-cst4z7{display:none}@media(max-width: 904px){.longMenu.svelte-cst4z7{display:none}.hamburgerMenu.svelte-cst4z7{display:block}}",
  map: null
};
const Hamburger = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const navLinks = [
    { name: "UIUX", href: "/uiux" },
    {
      name: "Graphic Designs",
      href: "/graphic_design"
    },
    {
      name: "Animations",
      href: "/animation_route"
    },
    {
      name: "Illustrations",
      href: "/illustration"
    },
    {
      name: "Sketches",
      href: "/sketches_route"
    },
    {
      name: "Photography",
      href: "/photography"
    }
  ];
  $$result.css.add(css$1);
  return `<div>${`<div><button class="hamburgerMenu btn btn-md border-transparent bg-transparent svelte-cst4z7" data-svelte-h="svelte-4kto1s"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-5 h-5 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg></button> <span class="longMenu svelte-cst4z7">${validate_component(DefaultNavigationBarLong, "DefaultNavigationBarLong").$$render($$result, { navLinks }, {}, {})}</span></div>`} </div>`;
});
const _layout_svelte_svelte_type_style_lang = "";
const css = {
  code: "body{font-family:'EB Garamond'}",
  map: null
};
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div class="navbar bg-base-100"><div class="flex-1" data-svelte-h="svelte-7xog3f"><a class="home-btn btn btn-ghost normal-case text-xl" href="/">Bambi Li</a></div> ${validate_component(Hamburger, "Hamburger").$$render($$result, {}, {}, {})}</div> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
