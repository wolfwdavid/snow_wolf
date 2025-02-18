import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html'
    }),
    paths: {
      base: dev ? '' : '/snow_wolf',
    },
    appDir: 'app',
    prerender: {
      default: true,
    },
  },
  // Force output directory to be 'build'
  output: {
    dir: 'build',
  }
};

export default config;
