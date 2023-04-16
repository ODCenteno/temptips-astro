import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import vue from "@astrojs/vue";
import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://localhost:3000',
  integrations: [tailwind(), mdx(), react(), vue(), svelte(), sitemap()]
});