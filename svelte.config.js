import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

const dev = process.env.NODE_ENV === 'development';

export default {
  preprocess: vitePreprocess(),
  kit: {
    adapter: adapter(),
    paths: {
      base: dev ? '' : '/snow_wolf', // Replace YOUR_REPO_NAME with your actual GitHub repo name
    },
    appDir: 'app',
    prerender: {
      default: true,
    },
  },
};
