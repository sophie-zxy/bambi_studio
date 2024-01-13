import * as server from '../entries/pages/uiux/easychoice/_layout.server.js';

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/layout.svelte.js')).default;
export { server };
export const server_id = "src/routes/uiux/easychoice/+layout.server.js";
export const imports = ["_app/immutable/nodes/2.4f88f655.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js"];
export const stylesheets = [];
export const fonts = [];
