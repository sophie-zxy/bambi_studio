import { init } from '../serverless.js';

export const handler = init((() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["Home_page_pics/Immigrate.JPG","Home_page_pics/drawing.JPG","Home_page_pics/fitlogo.png","Home_page_pics/graphic_d.png","Home_page_pics/photography.JPG","Home_page_pics/poster.jpg","Home_page_pics/wireframe.png","animation_page_pics/FIT.mp4","animation_page_pics/FIT.webp","animation_page_pics/Fountain.mp4","animation_page_pics/Fountain.webp","animation_page_pics/blob.gif","animation_page_pics/blob.mp4","animation_page_pics/blob.webp","animation_page_pics/convert_to_gif.sh","animation_page_pics/extreme_pose.mp4","animation_page_pics/extreme_pose.webp","animation_page_pics/face_expression.mp4","animation_page_pics/face_expression.webp","animation_page_pics/walk_to_run.mp4","animation_page_pics/walk_to_run.webp","favicon.png","graphic_page_pics/convertToWebM.sh","graphic_page_pics/poster1.png","graphic_page_pics/poster1.webp","graphic_page_pics/poster10.png","graphic_page_pics/poster10.webp","graphic_page_pics/poster11.png","graphic_page_pics/poster11.webp","graphic_page_pics/poster12.png","graphic_page_pics/poster12.webp","graphic_page_pics/poster13.png","graphic_page_pics/poster13.webp","graphic_page_pics/poster14.png","graphic_page_pics/poster14.webp","graphic_page_pics/poster15.png","graphic_page_pics/poster15.webp","graphic_page_pics/poster16.png","graphic_page_pics/poster16.webp","graphic_page_pics/poster17.png","graphic_page_pics/poster17.webp","graphic_page_pics/poster2.png","graphic_page_pics/poster2.webp","graphic_page_pics/poster3.png","graphic_page_pics/poster3.webp","graphic_page_pics/poster4.png","graphic_page_pics/poster4.webp","graphic_page_pics/poster5.png","graphic_page_pics/poster5.webp","graphic_page_pics/poster6.png","graphic_page_pics/poster6.webp","graphic_page_pics/poster7.png","graphic_page_pics/poster7.webp","graphic_page_pics/poster8.png","graphic_page_pics/poster8.webp","graphic_page_pics/poster9.png","graphic_page_pics/poster9.webp","illustration_page_pics/Child.jpg","illustration_page_pics/Christmas Snow.GIF","illustration_page_pics/Diamond.jpg","illustration_page_pics/Flushing.JPG","illustration_page_pics/Game Card.PNG","illustration_page_pics/High Heel.jpg","illustration_page_pics/IMG_3496.jpg","illustration_page_pics/Immigrate.JPG","illustration_page_pics/Ocean.jpg","illustration_page_pics/Piano.jpg","illustration_page_pics/Pubg Mucha.JPG","illustration_page_pics/Rabbit.jpg","illustration_page_pics/Sunset.JPG","illustration_page_pics/Yard.JPG","ph_sq.png","photo_page_pics/photo1.JPG","photo_page_pics/photo2.JPG","sketches_page_pics/Alley.jpg","sketches_page_pics/IMG_1202.jpg","sketches_page_pics/IMG_1555.JPG","sketches_page_pics/IMG_1558.JPG","sketches_page_pics/IMG_7886.JPG","sketches_page_pics/IMG_7887.JPG","sketches_page_pics/IMG_7892.JPG","sketches_page_pics/IMG_7893.JPG","sketches_page_pics/IMG_7894.JPG","sketches_page_pics/Rabbit & Hands.jpg","sketches_page_pics/Town.JPG","uiux_easychoice_page_pics/Easychoice.png","uiux_easychoice_page_pics/easychoice designelement.png","uiux_easychoice_page_pics/easychoice translucent.png","uiux_easychoice_page_pics/frame1.png","uiux_easychoice_page_pics/frame2.png","uiux_easychoice_page_pics/frame3.png","uiux_easychoice_page_pics/frame4.png","uiux_easychoice_page_pics/persona1.png","uiux_easychoice_page_pics/persona2.png","uiux_easychoice_page_pics/userflow.png","uiux_easychoice_page_pics/wireframe.png","uiux_eazzyconsulting/1.png","uiux_eazzyconsulting/1.webp","uiux_eazzyconsulting/2.png","uiux_eazzyconsulting/2.webp","uiux_eazzyconsulting/3.jpg","uiux_eazzyconsulting/3.webp","uiux_eazzyconsulting/4.png","uiux_eazzyconsulting/4.webp","uiux_eazzyconsulting/5.png","uiux_eazzyconsulting/5.webp","uiux_eazzyconsulting/cover.jpg","uiux_eazzyconsulting/cover.webp","uiux_heartbeat_page_pics/About + Prototype.png","uiux_heartbeat_page_pics/App_demoreel.mp4","uiux_heartbeat_page_pics/App_demoreel.webp","uiux_heartbeat_page_pics/Frame 10.png","uiux_heartbeat_page_pics/Frame 10.webp","uiux_heartbeat_page_pics/Frame 11.png","uiux_heartbeat_page_pics/Frame 11.webp","uiux_heartbeat_page_pics/Frame 12.png","uiux_heartbeat_page_pics/Frame 12.webp","uiux_heartbeat_page_pics/Frame 13.png","uiux_heartbeat_page_pics/Frame 13.webp","uiux_heartbeat_page_pics/HB Design Element.png","uiux_heartbeat_page_pics/HB Design Element.webp","uiux_heartbeat_page_pics/Hb.png","uiux_heartbeat_page_pics/Hb.webp","uiux_heartbeat_page_pics/Hifi Design.png","uiux_heartbeat_page_pics/Intro.png","uiux_heartbeat_page_pics/Problem.png","uiux_heartbeat_page_pics/Research.png","uiux_heartbeat_page_pics/Solutions.png","uiux_heartbeat_page_pics/User Flow.png","uiux_heartbeat_page_pics/User Journey.png","uiux_heartbeat_page_pics/User Personas.png","uiux_heartbeat_page_pics/all screen.png","uiux_heartbeat_page_pics/hb flow.png","uiux_heartbeat_page_pics/hb flow.webp","uiux_heartbeat_page_pics/heartbeat1.png","uiux_heartbeat_page_pics/heartbeat1.webp","uiux_heartbeat_page_pics/heartbeat2.png","uiux_heartbeat_page_pics/heartbeat2.webp","uiux_heartbeat_page_pics/music page.png","uiux_heartbeat_page_pics/music page.webp","uiux_heartbeat_page_pics/style guide.png","uiux_heartbeat_page_pics/thanks.png","uiux_heartbeat_page_pics/userjourney.png","uiux_heartbeat_page_pics/userjourney.webp","uiux_heartbeat_page_pics/wireframe.png","uiux_heartbeat_page_pics/wireframe.webp","uiux_page_pics/Easychoice.png","uiux_page_pics/Heartbeat.png","uiux_page_pics/smug.png","uiux_smug_page_pics/1.png","uiux_smug_page_pics/1.webp","uiux_smug_page_pics/10.png","uiux_smug_page_pics/10.webp","uiux_smug_page_pics/11.png","uiux_smug_page_pics/11.webp","uiux_smug_page_pics/12.png","uiux_smug_page_pics/12.webp","uiux_smug_page_pics/13.png","uiux_smug_page_pics/13.webp","uiux_smug_page_pics/14.png","uiux_smug_page_pics/14.webp","uiux_smug_page_pics/15.png","uiux_smug_page_pics/15.webp","uiux_smug_page_pics/16.png","uiux_smug_page_pics/16.webp","uiux_smug_page_pics/17.png","uiux_smug_page_pics/17.webp","uiux_smug_page_pics/2.png","uiux_smug_page_pics/2.webp","uiux_smug_page_pics/3.png","uiux_smug_page_pics/3.webp","uiux_smug_page_pics/4.png","uiux_smug_page_pics/4.webp","uiux_smug_page_pics/5.png","uiux_smug_page_pics/5.webp","uiux_smug_page_pics/6.png","uiux_smug_page_pics/6.webp","uiux_smug_page_pics/7.png","uiux_smug_page_pics/7.webp","uiux_smug_page_pics/8.png","uiux_smug_page_pics/8.webp","uiux_smug_page_pics/9.png","uiux_smug_page_pics/9.webp","uiux_smug_page_pics/Final Render W Audio-mac.mp4","uiux_smug_page_pics/Final Render W Audio-mac.webp"]),
	mimeTypes: {".JPG":"image/jpeg",".png":"image/png",".jpg":"image/jpeg",".mp4":"video/mp4",".webp":"image/webp",".gif":"image/gif",".GIF":"image/gif",".PNG":"image/png"},
	_: {
		client: {"start":"_app/immutable/entry/start.45bdb5a9.js","app":"_app/immutable/entry/app.0f0ed0b4.js","imports":["_app/immutable/entry/start.45bdb5a9.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/singletons.1ebc7928.js","_app/immutable/entry/app.0f0ed0b4.js","_app/immutable/chunks/scheduler.3e69dce6.js","_app/immutable/chunks/index.2dc33103.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../server/nodes/0.js')),
			__memo(() => import('../server/nodes/1.js')),
			__memo(() => import('../server/nodes/2.js')),
			__memo(() => import('../server/nodes/3.js')),
			__memo(() => import('../server/nodes/4.js')),
			__memo(() => import('../server/nodes/5.js')),
			__memo(() => import('../server/nodes/6.js')),
			__memo(() => import('../server/nodes/7.js')),
			__memo(() => import('../server/nodes/8.js')),
			__memo(() => import('../server/nodes/9.js')),
			__memo(() => import('../server/nodes/10.js')),
			__memo(() => import('../server/nodes/11.js')),
			__memo(() => import('../server/nodes/12.js')),
			__memo(() => import('../server/nodes/13.js'))
		],
		routes: [
			{
				id: "/",
				pattern: /^\/$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 3 },
				endpoint: null
			},
			{
				id: "/animation_route",
				pattern: /^\/animation_route\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 4 },
				endpoint: null
			},
			{
				id: "/graphic_design",
				pattern: /^\/graphic_design\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 5 },
				endpoint: null
			},
			{
				id: "/illustration",
				pattern: /^\/illustration\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 6 },
				endpoint: null
			},
			{
				id: "/photography",
				pattern: /^\/photography\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 7 },
				endpoint: null
			},
			{
				id: "/sketches_route",
				pattern: /^\/sketches_route\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 8 },
				endpoint: null
			},
			{
				id: "/uiux",
				pattern: /^\/uiux\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 9 },
				endpoint: null
			},
			{
				id: "/uiux/easychoice",
				pattern: /^\/uiux\/easychoice\/?$/,
				params: [],
				page: { layouts: [0,2,], errors: [1,,], leaf: 10 },
				endpoint: null
			},
			{
				id: "/uiux/eazzyconsulting",
				pattern: /^\/uiux\/eazzyconsulting\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 11 },
				endpoint: null
			},
			{
				id: "/uiux/heartbeat",
				pattern: /^\/uiux\/heartbeat\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 12 },
				endpoint: null
			},
			{
				id: "/uiux/smug",
				pattern: /^\/uiux\/smug\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 13 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})());
