import adapter from '@sveltejs/adapter-auto';
// import adapter from '@sveltejs/adapter-node';
import preprocess from 'svelte-preprocess-import-assets';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	},
	preprocess: preprocess({
		// ...svelte-preprocess options
	})
};

export default config;
