import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  schema: {
    slug: z.string(),
    title: z.string(),
    date: z.string().transform(s => new Date(s)),
    tags: z.array(z.string()),
    description: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }),
    package: z.string(),
    source: z.string(),
    demo: z.string(),
    draft: z.boolean()
  },
});

const blog = defineCollection({
    schema: {
        slug: z.string(),
        title: z.string(),
        date: z.string().transform(s => new Date(s)),
        tags: z.array(z.string()),
        description: z.string(),
        image: z.object({
            src: z.string(),
            alt: z.string(),
        }).optional(),
        source: z.string().optional(),
        demo: z.string().optional(),
        draft: z.boolean().optional()
      },
});

export const collections = {
  projects: projects,
  blog: blog,
};