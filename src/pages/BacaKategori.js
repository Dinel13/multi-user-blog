import React, { useEffect, useState } from "react";
import { listAllBlog } from "../actions/blog";
import Blog from "../components/blog/Blog";

export default function BacaKategori() {
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await listAllBlog();
      setBlogData(res);
    };

    fetchBlog();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-8 text-gray-900">
          Tulisan Terbaru
        </h1>
        <div className="flex flex-wrap -m-4">
          {blogData &&
            blogData.map((blog, index) => <Blog key={index} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}
