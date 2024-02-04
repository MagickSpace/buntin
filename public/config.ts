import { defineCollection, z } from 'astro:content'
import { getCollection } from 'astro:content'

const blog = defineCollection({
  // Type-check frontmatter using a schema
  schema: z.object({
    title: z.string(),
    description: z.string(),
    coverImage: z.string(),
    category: z.string(),
    // Transform string to Date object
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    heroImage: z.string().optional(),
    lang: z.string().optional(),
    categories: z.array(z.string()).default(["others"]),
    tags: z.array(z.string()).default(["others"]),
    author: z.string().optional(),
  }),
})

const docs = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    lang: z.string().optional(),
  }),
})

const guides = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    published: z.boolean().default(true),
    featured: z.boolean().default(false),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    lang: z.string().optional(),
  }),
})

export const collections = { blog, docs, guides }

export async function getBlogPosts() {
  const posts = await getCollection('blog')

  return posts.map((post) => {
    const blog_slug = post.slug.split('/')[0]
    return {
      ...post,
      blog_slug,
    }
  })
}

export async function getCategoryPosts() {
  const posts = await getCollection('blog')

  return posts.map((post) => {
    const blog_category = post.data.category.split('/')[0]
    return {
      ...post,
      blog_category,
    }
  })
}
