import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch =
  process.env.GITHUB_BRANCH ||
  process.env.VERCEL_GIT_COMMIT_REF ||
  process.env.HEAD ||
  "main";

export default defineConfig({
  branch,

  // Get this from tina.io
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  // Get this from tina.io
  token: process.env.TINA_TOKEN,

  build: {
    outputFolder: "admin",
    publicFolder: "static",
  },
  media: {
    tina: {
      mediaRoot: "",
      publicFolder: "static",
    },
  },
  // See docs on content modeling for more info on how to setup new content models: https://tina.io/docs/schema/
  schema: {
    collections: [
      // {
      //   name: "post",
      //   label: "Posts",
      //   path: "content/posts",
      //   fields: [
      //     {
      //       type: "string",
      //       name: "title",
      //       label: "Title",
      //       isTitle: true,
      //       required: true,
      //     },
      //     {
      //       type: "rich-text",
      //       name: "body",
      //       label: "Body",
      //       isBody: true,
      //     },
      //   ],
      // },
      // Homepage
      {
        name: "home",
        label: "Homepage",
        path: "content",
        format: 'md',
        match: {
          include: '*',
        },
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "boolean",
            name: "draft",
            label: "Draft",
          },
          {
            type: "datetime",
            name: "date",
            label: "Date",
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
            templates: [
              {
                name: 'fleximages',
                label: 'fleximages',
                nameOverride: "flex-images",
                match: {
                  start: '{{',
                  end: '}}',
                  name: 'flex-image',
                },
                fields: [
                  {
                    type: "object",
                    name: "images",
                    label: "Images",
                    list: true,
                    fields: [
                      {
                        type: "string",
                        name: "imageUrl",
                        label: "Image URL"
                      },
                      {
                        type: "string",
                        name: "imageAltText",
                        label: "Image ALT Text"
                      },
                    ],
                  },
                ],
              },
              {
                name: 'image',
                label: 'image',
                match: {
                  start: '{{<',
                  end: '>}}',
                  name: 'image',
                },
                fields: [
                  {
                    type: "image",
                    name: "src",
                    label: "Image URL"
                  },
                  {
                    type: "string",
                    name: "alt",
                    label: "Image ALT Text"
                  },
                ],
              },
            ],
          },
          // {
          //   type: "object",
          //   name: "images",
          //   label: "Images",
          //   list: true,
          //   fields: [
          //     {
          //       type: "string",
          //       name: "altText",
          //       label: "Image alt text"
          //     },
          //     {
          //       type: "string",
          //       name: "imageURL",
          //       label: "Image alt text"
          //     },
          //   ],
          // },
          // {
          //   type: 'rich-text',
          //   name: 'images',
          //   templates: [
          //     {
          //       name: 'flex-images',
          //       label: 'flex-images',
          //       nameOverride: "flex-images",
          //       match: {
          //         start: '{{',
          //         end: '}}',
          //       },
          //       fields: [
          //         {
          //           name: '_value',
          //           label: 'imageURL',
          //           type: 'string',
          //           required: true,
          //         },
          //       ],
          //     },
          //   ],
          // },
        ],
      },
      // Newsroom
      {
        label: 'Chronicle',
        name: 'Chronicle',
        path: 'content/chronicle',
        fields: [
          {
            type: 'string',
            label: 'Headline',
            name: 'headline1',
            isTitle: false,
            required: false,
          },
          {
            type: 'datetime',
            label: 'Date',
            name: 'date',
          },
          {
            type: 'string',
            label: 'Sub headline',
            name: 'headline2',
          },
          {
            type: 'image',
            label: 'Image',
            name: 'image',
          },
          {
            type: 'string',
            label: 'Image text',
            name: 'imageText',
          },
          {
            type: 'string',
            label: 'Teaser',
            name: 'teaser',
          },
          {
            type: 'boolean',
            label: 'Hide Header Title',
            name: 'hideHeaderTitle',
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true,
          },
        ],
      },
      // Things we have built
      {
        label: 'Things we have built',
        name: 'ThingWeHaveBuilt',
        path: 'content/things-weve-built',
        match: {
          exclude: '_index',
        },
        fields: [
          {
            type: 'string',
            label: 'Title',
            name: 'title',
            isTitle: true,
            required: true,
          },
          {
            type: 'string',
            label: 'Tags',
            name: 'tags',
            list: true,
          },
          {
            type: 'image',
            label: 'Image',
            name: 'image',
          },
          {
            type: 'datetime',
            label: 'Date',
            name: 'date',
          },
          {
            type: 'boolean',
            label: 'Draft',
            name: 'draft',
          },
          {
            type: 'number',
            label: 'Weight',
            name: 'weight',
          },
          {
            type: 'rich-text',
            label: 'Body',
            name: 'body',
            isBody: true,
          },
        ]
      },
    ],
  },
});
