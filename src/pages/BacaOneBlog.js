import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import { singleBlog } from "../actions/blog";

export default function BacaOneBlog() {
  const params = useParams();
  const [blogData, setBlogData] = useState("");
  
 useEffect(() => {
    async function getBlog() {
      const res = await singleBlog(params.slug);
      setBlogData(res);
    }
    getBlog()
  }, [params]);

  console.log(blogData);
  return (
    <div>
      <h1>{blogData.title}</h1>
      <div dangerouslySetInnerHTML={{__html: blogData.body}}></div>
    </div>
  );
}
