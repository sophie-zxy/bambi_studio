

export const index = 12;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/uiux/heartbeat/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/12.609cefc4.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js"];
export const stylesheets = ["_app/immutable/assets/12.c64c4795.css"];
export const fonts = [];
