import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/snow_wolf', // Adjust the base path for GitHub Pages or similar deployments
    },
    appDir: 'app',
    prerender: {
      default: true,
    },
  },
};

export default config;
