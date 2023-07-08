import { Metadata } from "next";
import Link from "next/link";

import styles from "./blog.module.scss";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60
    }
  });

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Test Next App",
};

const Blog = async () => {
  const posts = await getData();

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Blog</h2>
      <Link href={"/blog/1"}>Post link</Link>
      <ul className={styles.posts}>
        {posts.map((post: any) => (
          <li key={post.id} className="shadow text-xs">
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default Blog;
