

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.46819c3c.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js","_app/immutable/chunks/singletons.3acab4ce.js"];
export const stylesheets = [];
export const fonts = [];
