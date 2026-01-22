// api.ts

import type { postBlogInterface } from "../types/blog";


export const postBlog = async (Blog: postBlogInterface) => {
console.log("POSTING:", Blog);

  const res = await fetch("http://localhost:3001/blogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(Blog),
  });
  if (!res.ok){
    throw new Error("Failed to Create blog")
  }

  return res.json();
};
