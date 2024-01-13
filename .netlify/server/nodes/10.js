

export const index = 10;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/uiux/easychoice/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/10.473f7b79.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js","_app/immutable/chunks/spread.8a54911c.js"];
export const stylesheets = ["_app/immutable/assets/10.b3f3d638.css"];
export const fonts = [];
