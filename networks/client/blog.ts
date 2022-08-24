import { blogPost } from './../../types/blog';
export async function fetchBlog(): Promise<blogPost[]> {
  const key = process.env.NEXT_PUBLIC_KAENOVA_BLOG_KEY
  const endpoint = process.env.NEXT_PUBLIC_KAENOVA_BLOG_ENDPOINT
  let res = await fetch(`${endpoint}/api/content/posts/?key=${key}`)
  res = await res.json()

  // @ts-ignore
  let blogs = res.posts as Object[]

  var finalBlogs: blogPost[] = []

  blogs.map((v, i) => {
    // @ts-ignore

    let date = Date.parse(v["published_at"])
    finalBlogs.push(
      {
        // @ts-ignore
        title: v.title,
        // @ts-ignore
        createdAt: date,
        // @ts-ignore
        link: v.url
      }
    )
  })
  return finalBlogs
}