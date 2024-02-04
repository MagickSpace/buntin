import { defineCollection, z } from 'astro:content';
import { getCollection } from "astro:content";

const blog = defineCollection({
	// Type-check frontmatter using a schema
	schema: z.object({
		title: z.string(),
		description: z.string(),
		// Transform string to Date object
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
		lang: z.string().optional(),
		category: z.array(z.string()).default(["others"]),
    	tags: z.array(z.string()).default(["others"]),
		author: z.string().optional()
	}),
});

const category = defineCollection({
	schema: z.object({
	  title: z.string(),
	  meta_title: z.string().optional(),
	  description: z.string().optional(),
	  meta_description: z.string().optional(),
	  image: z.string().optional(),
	  lang: z.string().optional(),
	}),
  });

  const tags = defineCollection({
	schema: z.object({
	  title: z.string(),
	  meta_title: z.string().optional(),
	  description: z.string().optional(),
	  meta_description: z.string().optional(),
	  image: z.string().optional(),
	  lang: z.string().optional(),
	}),
  });

export const collections = { blog, category, tags };

export async function getBlogPosts() {
	const posts = await getCollection('blog');

	return posts.map((post) => {
		const blog_slug = post.slug.split('/')[0];
		return {
			...post,
			blog_slug
		}
	})
}