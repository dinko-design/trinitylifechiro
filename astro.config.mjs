import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';
import keystatic from '@keystatic/astro';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://trinitylifechiro.com',
  adapter: netlify(),
  integrations: [
    react(),
    sitemap(),
    mdx(),
    keystatic(),
  ],
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@': new URL('./src', import.meta.url).pathname,
      },
    },
    optimizeDeps: {
      // @keystatic/core/ui depends on CJS packages (slate, urql, react-aria,
      // etc.) through unbundled ESM files. Vite's dep scanner misses them
      // because the "node" export condition for @keystatic/core/ui resolves
      // to a stub. Force Vite to pre-bundle these so the browser can load them.
      include: ['@keystatic/core/ui'],
      esbuildOptions: {
        // Ensure the dep scanner uses browser conditions, not node conditions,
        // when resolving @keystatic/core/ui and its transitive dependencies.
        conditions: ['module', 'browser', 'default'],
      },
    },
  },
});
