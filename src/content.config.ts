import { defineCollection, reference, z } from "astro:content";
import { glob } from "astro/loaders";

const posts = defineCollection({
    loader: glob({ pattern: "**/[^_]*.mdoc", base: "./src/data/posts" }),
    schema: z.object({
        title: z.string(),
        description: z.string().optional(),
    }),
});

export const collections = { 
    posts
};