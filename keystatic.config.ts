import { config, fields, singleton, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
  },
  singletons: {
    settings: singleton({
      label: 'Settings',
      path: 'src/data/settings',
      format: { data: "yaml" },
      schema: {
        siteTitle: fields.text({
          label: 'Site Title',
          description: 'The title of your site, displayed in the header and browser tab.',
        }),
        siteDescription: fields.text({
          label: 'Site Description',
          description: 'A brief description of your site, used for SEO and social sharing.',
        }),
      }
    }),
  },

  collections: {
    pages: collection({
      label: 'Pages',
      slugField: 'title',
      path: 'src/data/pages/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
          description: 'The main content of the page, written in Markdoc format.',
        })
      }
    }),
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/data/posts/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({
          label: 'Content',
        }),
      },
    }),
  },
});