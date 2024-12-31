import Image from "next/image";
import styles from "./page.module.css";
import blogs from "./blogData.ts"
import BlogPreview from "./components/blogPreview.tsx";



export default function Home() {
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
    <div className = {styles.container}>
    {blogs.map(blog => 
        <BlogPreview // This is how we call the component
          title={blog.title}
          date={blog.date}
          description={blog.description}
          image={blog.image}
          imageAlt={blog.imageAlt}
          slug = {blog.slug}
          text={blog.text}
        />
      )
    }
    </div>
    </div>
  );
};

