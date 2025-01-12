const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		client: {"start":"_app/immutable/entry/start.DR4MHFa2.js","app":"_app/immutable/entry/app.CWADuKb5.js","imports":["_app/immutable/entry/start.DR4MHFa2.js","_app/immutable/chunks/entry.BndfiRUm.js","_app/immutable/chunks/runtime.BZuW5zuQ.js","_app/immutable/chunks/index.ykvBoqA4.js","_app/immutable/chunks/index-client.BpvAIjqa.js","_app/immutable/entry/app.CWADuKb5.js","_app/immutable/chunks/runtime.BZuW5zuQ.js","_app/immutable/chunks/render.DKjFYLX0.js","_app/immutable/chunks/svelte-head.KbhAMG9f.js","_app/immutable/chunks/disclose-version.BE0vd8Of.js","_app/immutable/chunks/props.DI0Qgd78.js","_app/immutable/chunks/store.kAC3XHO5.js","_app/immutable/chunks/index-client.BpvAIjqa.js"],"stylesheets":[],"fonts":[],"uses_env_dynamic_public":false},
		nodes: [
			__memo(() => import('./chunks/0-uEmTGuRu.js')),
			__memo(() => import('./chunks/1-CzeYjXPg.js')),
			__memo(() => import('./chunks/4-BUPIwPxz.js'))
		],
		routes: [
			{
				id: "/sverdle",
				pattern: /^\/sverdle\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();

const prerendered = new Set(["/","/about","/sverdle/how-to-play"]);

const base = "";

export { base, manifest, prerendered };
//# sourceMappingURL=manifest.js.map
