import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
      date: z.string().date(),
      title: z.string(),
      description: z.string(),
      type: z.string().optional(),
      link: z.string().optional(),
      inHero: z.boolean().default(false),
      tags: z.array(z.string()),
      images: z.object({
        hero: z.object({
          src: z.string(),
          alt: z.string(),
        })
      }),
    })
});

export const collections = {
  projects: projectsCollection,
};