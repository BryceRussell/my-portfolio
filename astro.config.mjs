import { defineConfig } from 'astro/config';
import rehypeSlug from 'rehype-slug'
import remarkGemoji from 'remark-gemoji'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import { h } from 'hastscript'
import oembed from 'remark-oembed';

export default defineConfig({
  site:
    process.env.NODE_ENV === 'production'
      ? 'https://brycerussell.com/'
      : 'https://localhost:3000/',
  integrations: [

  ],
  markdown: {
    extendDefaultPlugins: true,
    remarkPlugins: [
        remarkGemoji,
        [oembed, { syncWidget: true }]
    ],
    rehypePlugins: [
        rehypeSlug,
        [rehypeAutolinkHeadings, {
            behavior: 'prepend',
            test: ['h2', 'h3'],
            content: [
                h('span.heading-link-icon', '#')
            ]
        }]
    ]
  },
  experimental: {
    contentCollections: true,
  },
});