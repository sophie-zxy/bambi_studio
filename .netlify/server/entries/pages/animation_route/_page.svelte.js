import { c as create_ssr_component, v as validate_component } from "../../../chunks/ssr.js";
import { L as LeftAndRightArrow } from "../../../chunks/LeftAndRightArrow.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".videoContainer.svelte-9j84pe{width:100%;object-fit:fill}.cropContainer.svelte-9j84pe{width:100%;height:100%;overflow:hidden;position:relative}.cropVideo.svelte-9j84pe{scale:1.05}.videoContainerWrapper.svelte-9j84pe{display:flex;flex-direction:column;justify-content:center;align-items:center}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let nav_obj = {
    left_link_txt: "Graphic Design",
    left_link: "/graphic_design",
    right_link_txt: "Illustration",
    right_link: "/illustration"
  };
  $$result.css.add(css);
  return `<html lang="postcss"><div class="videoContainerWrapper svelte-9j84pe" data-svelte-h="svelte-wa6024"><div class="cropContainer svelte-9j84pe"><img class="videoContainer cropVideo svelte-9j84pe" src="../../../animation_page_pics/FIT.webp" alt="FIT animation"></div> <img class="videoContainer svelte-9j84pe" src="../../../animation_page_pics/blob.webp" alt="blob animation"> <img class="videoContainer svelte-9j84pe" src="../../../animation_page_pics/extreme_pose.webp" alt="extreme pose animation"> <img class="videoContainer svelte-9j84pe" src="../../../animation_page_pics/face_expression.webp" alt="face expression animation"> <img class="videoContainer svelte-9j84pe" src="../../../animation_page_pics/Fountain.webp" alt="Fountain animation"> <img class="videoContainer svelte-9j84pe" src="../../../animation_page_pics/walk_to_run.webp" alt="walk to run animation"></div> ${validate_component(LeftAndRightArrow, "LeftAndRightArrow").$$render($$result, Object.assign({}, nav_obj), {}, {})} </html>`;
});
export {
  Page as default
};
