import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { searchCategory } from "../actions/blog";
import { showNotification } from "../store/uiSlice";
import Blog from "../components/blog/Blog";
import Loading from "../components/loading/Loading";

export default function BacaKategori() {
  const dispatch = useDispatch();
  const params = useParams();
  const [blogData, setBlogData] = useState();
  const [loading, setLoading] = useState(false);
  const kategori = params.kategori;

  useEffect(() => {
    const fetchBlog = async () => {
      setLoading(true);
      setBlogData("");
      const res = await searchCategory(kategori);
      if (res.error) {
        dispatch(
          showNotification({
            status: "error",
            title: "Gagal mendapatkan data",
            message: res.error,
            action: null,
          })
        );
        return setLoading(false);
      }
      res.blog.length > 0 && setBlogData(res.blog);
      return setLoading(false);
    };
    fetchBlog();
  }, [kategori, dispatch]);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-16 mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-8 text-gray-900">
          Tulisan untuk kategori {kategori}
        </h1>
        <div className="flex flex-wrap -m-4">
          {loading && <Loading />}
          {!loading && !blogData && (
            <div className="max-w-md my-12 px-2 py-4 bg-red-300 mx-auto rounded">
              <h3 className="text-xl font-medium mb-2 text-gray-700">
                Belum ada tulisan untuk kategori {kategori}
              </h3>
              <h2 className="text-lg">
                Silahkan{" "}
                <Link to="/bacaan" className="text-indigo-600">
                  lihat semua kategori
                </Link>
              </h2>
            </div>
          )}
          {blogData &&
            blogData.map((blog, index) => <Blog key={index} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}
