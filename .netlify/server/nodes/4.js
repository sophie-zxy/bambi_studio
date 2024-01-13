

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/animation_route/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.3279eba2.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/LeftAndRightArrow.266f489e.js","_app/immutable/chunks/LeftArrow.b32883e2.js","_app/immutable/chunks/RightArrow.92486cd9.js"];
export const stylesheets = ["_app/immutable/assets/4.45ea36aa.css","_app/immutable/assets/LeftArrow.18542ce3.css","_app/immutable/assets/RightArrow.9bbc28e5.css"];
export const fonts = [];
