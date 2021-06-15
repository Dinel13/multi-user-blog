import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { showNotification, hideNotification } from "../store/uiSlice";
import { listAllBlog } from "../actions/blog";
import Blog from "../components/blog/Blog";
import Pagination from "../components/pagination/Pagination";

export default function Baca() {
  const dispatch = useDispatch();
  const [blogData, setBlogData] = useState();
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchBlog = async () => {
      const res = await listAllBlog(page);
      setBlogData(res);
    };
    fetchBlog();
  }, [page]);

  const prevHandler = async (e) => {
    if (page > 1) {
      const res = await listAllBlog(page);
      setBlogData(res);
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
  };

  const nextHandler = async (e) => {
    if (blogData.length === 0) {
      dispatch(
        showNotification({
          status: "error",
          title: "Tidak bisa!!",
          message: "Sudah tidak ada halaman selanjutnya",
          action: null,
        })
      );
      setTimeout(() => dispatch(hideNotification()), 1800);
    } else {
      setPage((prev) => prev + 1);
      const res = await listAllBlog(page);
      setBlogData(res);
    }
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
        {blogData && blogData.length ? (
          <Pagination page={page} lanjut={nextHandler} belum={prevHandler} />
        ) : (
          <div className="max-w-sm my-12 px-2 py-4 bg-red-300 mx-auto rounded">
            <h2 className="text-semibold tracking-wide  text-xl text-gray-800 ">
              Tidak ada lagi tulisan
            </h2>
            <h2 className="text-lg">
              Silahkan{" "}
              <button
                className="text-indigo-600 focus:outline-none"
                onClick={prevHandler}
              >
                kembali kehalaman sebelumya
              </button>
            </h2>
          </div>
        )}
      </div>
    </section>
  );
}
