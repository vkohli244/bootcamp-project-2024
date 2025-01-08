import Comment from "../components/comment";
import { Blog } from "@/database/blogSchema.ts";

type Props = {
    params: { slug: string }
}


async function getBlog(slug: string) {
    try {
      console.log(`Fetching blog with slug: ${slug}`);
      const res = await fetch(`http://localhost:3000/api/Blogs/${slug}`, {
        cache: "no-store",
      });
  
      if (!res.ok) {
        console.error(`Error fetching blog: ${res.status} ${res.statusText}`);
        throw new Error("Failed to fetch blog");
      }
  
      return await res.json();
    } catch (err) {
      console.error(`Error: ${err}`);
      return null;
    }
  }
  
export default async function BlogPage({ params: { slug } }: Props) {
    // Fetch the blog using the provided slug
    const blogPage = await getBlog(slug);
  
    // Check if the blog data is null
    if (!blogPage) {
      return <div>Error: Unable to fetch the blog post.</div>;
    }
  
    // Render the blog content
    return (
      <div>
        <h1>{blogPage.title}</h1>
        <p>{blogPage.content}</p>
        {/* Include additional rendering logic based on your blog structure */}
        {blogPage.comments.map((comment: Blog['comments'][0], index: number) => (
        <Comment key={index} comment={comment} />
      ))}
      </div>
    );
  }
  