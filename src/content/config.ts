import { z, defineCollection } from 'astro:content';

const projects = defineCollection({
  schema: {
    slug: z.string(),
    title: z.string(),
    date: z.coerce.date(),
    tags: z.array(z.string()).default([]),
    description: z.string(),
    image: z.object({
        src: z.string(),
        alt: z.string(),
    }).optional(),
    package: z.string().optional(),
    source: z.string().optional(),
    demo: z.string().optional(),
    draft: z.boolean().optional()
  },
});

const blog = defineCollection({
    schema: {
        slug: z.string(),
        title: z.string(),
        date:  z.date().or(z.string().transform(s => new Date(s))).default(new Date()),
        tags: z.array(z.string()).default([]),
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