import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://brycerussell.com/'
      : 'https://localhost:3000/',
  integrations: [tailwind({
    config: { applyBaseStyles: false }
  })],
  markdown: {
    extendDefaultPlugins: true,
    shikiConfig: { theme: 'slack-dark' }
  }
});