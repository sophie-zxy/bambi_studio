

export const index = 9;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/uiux/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/9.689e3945.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js","_app/immutable/chunks/each.e59479a4.js","_app/immutable/chunks/spread.8a54911c.js","_app/immutable/chunks/RightArrow.92486cd9.js"];
export const stylesheets = ["_app/immutable/assets/9.2976ad70.css","_app/immutable/assets/RightArrow.9bbc28e5.css"];
export const fonts = [];
