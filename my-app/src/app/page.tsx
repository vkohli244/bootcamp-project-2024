import Image from "next/image";
import { GetServerSideProps } from 'next';
import styles from "./page.module.css";
//import blogs from "./blogData.ts"
import BlogPreview from "./components/blogPreview.tsx";
import connectDB from "@/database/db.ts";
import Blog from "@/database/blogSchema.ts";




async function getBlogs() {
  await connectDB(); // Establish the DB connection

  try {
    // Query to fetch all blogs sorted by date
    const blogs = await Blog.find().sort({ date: -1 }).orFail();
    return blogs;
  } catch (err) {
    console.error("Error fetching blogs:", err);
    return []; // Return an empty array if fetching fails
  }
}




export default async function Home() {
  const blogs = await getBlogs(); // Now this can safely use await

 return (
    <div>
    <div className={styles.container}>
      <div className={styles.leftColumn}>
        <p className={styles.introduction}>
          Hi, my name is <span className={styles.name}>Vinayak</span>, and I'm currently a Freshman at Cal Poly SLO. I'm studying software enigneering
        </p>
      </div>
      <div className={styles.rightColumn}>
        <div className={styles.profilePicture}></div>
      </div>
    </div>
    <div className = {styles.container2}>
    {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <BlogPreview
              key = {blog.title}
              title={blog.title}
              date={blog.date}
              description={blog.description}
            />
          ))
        ) : (
          <p>No blogs available</p>
        )}
    </div>
    </div>
  );
};

