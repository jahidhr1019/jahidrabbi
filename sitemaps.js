import type { MetadataRoute } from 'next'

// Example: Fetching data from your API or Database
async function getPosts() {
  const res = await fetch('https://api.example.com/posts')
  return res.json()
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const posts = await getPosts()

  // Map your posts to sitemap entries
  const postEntries = posts.map((post: any) => ({
    url: `https://jahidrabbi.vercel.app/blog/${post.slug}`,
    lastModified: new Date(post.updatedAt),
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  return [
    {
      url: 'https://jahidrabbi.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    ...postEntries, // Spread the dynamic routes here
  ]
}
