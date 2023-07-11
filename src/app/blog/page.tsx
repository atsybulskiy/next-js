"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

import styles from "./blog.module.scss";
import { PostSearch } from "@/components/post-search/PostSearch";
import { getAllPosts } from "@/services/getPost";
import { Post } from "@/types/types";

const Blog = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllPosts()
      .then((result) => {
        setPosts(result);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const onSearch = (posts: Post[]) => {
    setPosts(posts);
  };

  return (
    <>
      <h2 className="text-xl font-bold mb-4">Blog</h2>
      <PostSearch onSearch={onSearch} setLoading={setLoading} />
      {loading ? (
        <div>Loading...</div>
      ) : (
        <>
          {!posts.length && <div>No posts</div>}
          <ul className={styles.posts}>
            {posts.map((post: any) => (
              <li key={post.id} className="shadow p-4">
                <Link
                  className={"text-base mb-2 font-bold"}
                  href={`/blog/${post.id}`}
                >
                  {post.title}
                </Link>
                <p className={"text-xs text-gray-500"}>{post.body}</p>
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default Blog;
