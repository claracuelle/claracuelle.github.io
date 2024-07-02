import { z, defineCollection } from "astro:content";

const projectsCollection = defineCollection({
    type: 'data',
    schema: z.object({
      date: z.string().date(),
      title: z.string(),
      description: z.string(),
      type: z.string().optional(),
      link: z.string().optional() ,
      images: z.object({
        hero: z.object({
          src: z.string(),
          alt: z.string(),
        })
      }),
      tags: z.array(z.string())
    })
});

export const collections = {
  projects: projectsCollection,
};