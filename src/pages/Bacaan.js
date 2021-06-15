import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { listAllBlog } from "../actions/blog";
import Blog from "../components/blog/Blog";
import Pagination from "../components/pagination/Pagination";
import Search from "../components/serch/Search";

export default function Baca() {
  const location = useLocation();
  const seachResult = location.state.data;
  const [blogData, setBlogData] = useState(null);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await listAllBlog();
      setBlogData(res);
    };
    seachResult ? setBlogData(seachResult) : fetchBlog();
  }, [seachResult]);

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
        <Search />
        <Pagination />
      </div>
    </section>
  );
}
