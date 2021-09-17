import preprocess from 'svelte-preprocess';
import adapter from '@sveltejs/adapter-static';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		appDir: '_app',
		target: '#svelte',
		// paths: { base: "/" },
		
		paths: {
			assets: './static',
			base: ''
		},
		adapter: adapter(),
		files: {
			assets: './static',
			// hooks: 'src/hooks',
			lib: './src/lib',
			routes: './src/routes',
			// serviceWorker: 'src/service-worker',
			template: './src/app.html'
		},
	}
};

export default config;

// const config = {
// 	// options passed to svelte.compile (https://svelte.dev/docs#svelte_compile)
// 	compilerOptions: null,

// 	// an array of file extensions that should be treated as Svelte components
// 	extensions: ['.svelte'],

// 	kit: {
// 		adapter: adapter(),
// 		amp: false,
// 		appDir: '_app',
// 		files: {
// 			assets: 'static',
// 			// hooks: 'src/hooks',
// 			lib: 'src/lib',
// 			routes: 'src/routes',
// 			// serviceWorker: 'src/service-worker',
// 			template: 'src/app.html'
// 		},
// 		floc: false,
// 		// host: null,
// 		// hostHeader: null,
// 		hydrate: true,
// 		package: {
// 			dir: 'package',
// 			emitTypes: true,
// 			exports: {
// 				include: ['**'],
// 				exclude: ['**/_*']
// 			},
// 			files: {
// 				include: ['**'],
// 				exclude: []
// 			}
// 		},
// 		paths: {
// 			assets: '',
// 			base: ''
// 		},
// 		prerender: {
// 			crawl: true,
// 			enabled: true,
// 			entries: ['*'],
// 			onError: 'fail'
// 		},
// 		router: true,
// 		serviceWorker: {
// 			exclude: []
// 		},
// 		ssr: true,
// 		target: null,
// 		trailingSlash: 'never',
// 		vite: () => ({})
// 	},

// 	// options passed to svelte.preprocess (https://svelte.dev/docs#svelte_preprocess)
// 	preprocess: null
// };

// export default config;