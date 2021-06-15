import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { showNotification, hideNotification } from "../store/uiSlice";
import { listAllBlog } from "../actions/blog";
import Blog from "../components/blog/Blog";
import Pagination from "../components/pagination/Pagination";

export default function Baca() {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState(null);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await listAllBlog(page);
      setBlogData(res);
    };
    fetchBlog();
  }, []);

  const prevHandler = async () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    } else {
      dispatch(
        showNotification({
          status: "error",
          title: "Tidak bisa!!",
          message: "Kamu sudah di halaman awal",
          action: null,
        })
      );
      setTimeout(() => dispatch(hideNotification()), 1800);
    }
    // const res = await listAllBlog(page);
    // setBlogData(res);
  };

  const nextHandler = async () => {
    setPage((prev) => prev + 1);
    // const res = await listAllBlog(page);
    // setBlogData(res);
  };

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-10 sm:pt-14 lg:pt-16 pb-8  mx-auto">
        <h1 className="text-center md:text-5xl lg:text-6xl text-4xl font-medium tracking-wider title-font mb-8 text-gray-800">
          Semua tulisan
        </h1>
        <div className="flex flex-wrap -m-4">
          {blogData &&
            blogData.map((blog, index) => <Blog key={index} blog={blog} />)}
        </div>
        <Pagination page={page} lanjut={nextHandler} belum={prevHandler} />
      </div>
    </section>
  );
}
