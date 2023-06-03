import Link from "next/link";
import React from "react";

export default function Posts({ posts }) {
  return (
    <ul>
      {posts.map((post) => {
        return (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>{post.title}</Link>
            <hr />
          </li>
        );
      })}
    </ul>
  );
}
export async function getStaticProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const data = await res.json();

  return {
    props: {
      posts: data, //send data via props
    },
  };
}
