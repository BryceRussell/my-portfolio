import { defineConfig } from 'astro/config';

// https://astro.build/config
import tailwind from "@astrojs/tailwind";

import { defaultFrontmatterAdvanced } from 'astro-default-frontmatter';

// https://astro.build/config
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
    shikiConfig: { theme: 'one-dark-pro' },
    remarkPlugins: [
      [defaultFrontmatterAdvanced, [
        {
          dirs: ['./'],
          frontmatter: { layout: "@/layouts/Base.astro" },
        }
      ]]
    ]
  }
});