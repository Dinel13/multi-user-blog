import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      setBlogData(res);
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
            <h3 className="sm:text-1xl text-center mx-auto text-xl font-medium mb-24 text-gray-700">
              Belum tersedia penulis populer
            </h3>
          )}
          {blogData &&
            blogData.map((blog, index) => <Blog key={index} blog={blog} />)}
        </div>
      </div>
    </section>
  );
}
