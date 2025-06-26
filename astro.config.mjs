// @ts-check
import { defineConfig } from 'astro/config';

import netlify from '@astrojs/netlify';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';

const isBuild = process.env.NODE_ENV === 'production';

// https://astro.build/config
export default defineConfig({
  adapter: netlify(),
  integrations: [
    react(), 
    markdoc(), 
    (isBuild ? [] : [keystatic()]),]
});