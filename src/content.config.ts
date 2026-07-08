import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const caseStudies = defineCollection({
  loader: glob({ base: './src/content/case-studies', pattern: '**/*.{md,mdx}' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      subheading: z.string(),
      overview: z.string(),
      role: z.string(),
      heroImage: image(),
	  heroImageAlt: z.string(),
      highlights: z.array(
        z.object({
          subheading: z.string(),
          description: z.string(),
          images: z.array(
            z.object({
              image: image(),
              caption: z.string(),
			  alt: z.string(),
            })
          ),
        })
      ),
      order: z.number().optional(),
    }),
});

export const collections = { caseStudies };