

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.ce470886.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js","_app/immutable/chunks/singletons.279cf209.js"];
export const stylesheets = [];
export const fonts = [];
