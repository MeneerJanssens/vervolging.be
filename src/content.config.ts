import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Elk item is een Markdown-bestand in src/content/<collectie>/.
// Nieuw project, evenement of nummer van De Stem? Kopieer een bestaand bestand en pas het aan.

const projecten = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projecten' }),
  schema: ({ image }) =>
    z.object({
      land: z.string(),
      titel: z.string(),
      samenvatting: z.string(),
      status: z.enum(['lopend', 'afgerond']),
      jaar: z.number(),
      foto: image().optional(),
      fotoAlt: z.string().optional(),
      // true = geen foto van het project zelf, maar een sfeerbeeld
      fotoIllustratie: z.boolean().default(false),
      leesMeer: z.string().url().optional(),
      volgorde: z.number().default(100),
    }),
});

const evenementen = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/evenementen' }),
  schema: ({ image }) =>
    z.object({
      titel: z.string(),
      datum: z.coerce.date(),
      einddatum: z.coerce.date().optional(),
      plaats: z.string().optional(),
      samenvatting: z.string(),
      foto: image().optional(),
      fotoAlt: z.string().optional(),
      link: z.string().optional(),
      linkTekst: z.string().optional(),
      video: z.string().optional(),
      concept: z.boolean().default(false),
    }),
});

const tijdschriften = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/tijdschriften' }),
  schema: ({ image }) =>
    z.object({
      titel: z.string(),
      reeks: z.enum(['de-stem', 'kinderblad']),
      editie: z.string(),
      datum: z.coerce.date(),
      cover: image(),
      flipbook: z.string().url(),
      pdf: z.string().optional(),
    }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: ({ image }) =>
    z.object({
      titel: z.string(),
      youtubeId: z.string(),
      thumbnail: image(),
      samenvatting: z.string(),
      volgorde: z.number().default(100),
      uitgelicht: z.boolean().default(false),
    }),
});

const boeken = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/boeken' }),
  schema: ({ image }) =>
    z.object({
      titel: z.string(),
      auteur: z.string().optional(),
      cover: image().optional(),
      kort: z.string(),
      beschikbaar: z.boolean().default(true),
      volgorde: z.number().default(100),
    }),
});

export const collections = { projecten, evenementen, tijdschriften, videos, boeken };
