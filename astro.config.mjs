import tailwind from '@astrojs/tailwind';
import { defineConfig } from 'astro/config';

export default defineConfig({
  integrations: [tailwind()],
  output: 'static',
  base: '/grupo-13-analytics/',
});
