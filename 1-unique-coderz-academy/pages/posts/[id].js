import React from "react";

export default function PostId({ post }) {
  return <div>{post.title}</div>;
}
// =>first
// every time i request

export async function getServerSideProps(context) {
  const res = await fetch(
    ` http://localhost:3000/api/posts/${context.params.id}`
  );
  const data = await res.json();

  return {
    props: {
      post: data, //send data via props
    },
  };
}

// =>second

// export async function getStaticPaths() {
//   const res = await fetch(`http://localhost:3000/api/posts`);
//   const data = await res.json();
//   const paths = data.map((d) => {
//     return {
//       params: { id: `${d.id}` },
//     };
//   });
//   return {
//     paths: paths,

//     fallback: false,
//   };
// }

// export async function getStaticProps(context) {
//   const res = await fetch(
//     // `https://jsonplaceholder.typicode.com/posts/${context.params.id}` //from another api
//     ` http://localhost:3000/api/posts/${context.params.id}` //error =>SyntaxError: Unexpected token '<', "<!DOCTYPE "... is not valid JSON
//   );
//   const data = await res.json();

//   return {
//     props: {
//       post: data, //send data via props
//     },
//   };
// }
