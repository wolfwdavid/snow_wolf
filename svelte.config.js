import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter({
      fallback: 'index.html' // Required for GitHub Pages
    }),
    paths: {
      base: dev ? '' : '/snow_wolf' // Change 'snow_wolf' to match your GitHub repo name
    },
    appDir: 'app',
    prerender: {
      entries: ['*']
    }
  }
};
