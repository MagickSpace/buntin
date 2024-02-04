import { defineConfig } from "tinacms";

// Your hosting provider likely exposes this as an environment variable
const branch = process.env.HEAD || process.env.VERCEL_GIT_COMMIT_REF || "main";

export default defineConfig({
  branch,
  clientId: '8fb6d75d-4401-46c6-87ca-ecff444217a4', // Get this from tina.io
  token: 'e363bdef2d200c92c642924b909beab0b4f41922', // Get this from tina.io
  build: {
    outputFolder: "admin",
    publicFolder: "public",
  },
  media: {
    tina: {
      mediaRoot: "assets",
      publicFolder: "public",
    },
  },
  schema: {
    collections: [
      {
        name: "blog",
        label: "Blog",
        path: "src/content/blog",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            label: "Author",
            name: "author",
            type: "string",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "reference",
            name: "tags",
            label: "Tags",
            collections: ["tags"],
            required: false,
          },
          {
            type: "reference",
            name: "category",
            label: "Category",
            collections: ["category"],
            required: false,
          },
          {
            type: "string",
            name: "lang",
            label: "Language",
            required: true,
          },
          {
            type: "datetime",
            name: "pubDate",
            label: "Publication Date",
            required: true,
            ui: {
              dateFormat: "DD MMMM YYYY"
            },
          },
          {
            type: "image",
            name: "heroImage",
            label: "Hero Image",
            required: true,
          },
          {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
          },
        ],
      },
      {
        name: "category",
        label: "Category",
        path: "src/content/category",
        fields: [
          {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
          },
          {
            type: "string",
            name: "metaTitle",
            label: "Meta Title",
            required: true,
          },
          {
            type: "string",
            name: "description",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "metaDescription",
            label: "Description",
            required: true,
          },
          {
            type: "string",
            name: "lang",
            label: "Language",
            required: true,
          },
          {
            type: "image",
            name: "avatar",
            label: "Image",
            required: true,
          },
        ],
      },
      {
        name: "tags",
        label: "Tags",
        path: "src/content/tags",
        fields: [
            {
              type: "string",
              name: "title",
              label: "Title",
              isTitle: true,
              required: true,
            },
            {
              type: "string",
              name: "metaTitle",
              label: "Meta Title",
              required: true,
            },
            {
              type: "string",
              name: "description",
              label: "Description",
              required: true,
            },
            {
              type: "string",
              name: "metaDescription",
              label: "Description",
              required: true,
            },
            {
              type: "string",
              name: "lang",
              label: "Language",
              required: true,
            },
            {
              type: "image",
              name: "avatar",
              label: "Image",
              required: true,
            },
        ],
      },
    ],
  },
})