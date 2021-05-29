import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

import { singleBlog } from "../actions/blog";
import "./BacaOneBlog.css";

export default function BacaOneBlog() {
  const token = useSelector((state) => state.auth.token);

  const params = useParams();
  const [blogData, setBlogData] = useState("");
  const [comment, setComment] = useState("");
  const [commentEror, setCommentEror] = useState("");

  useEffect(() => {
    async function getBlog() {
      const res = await singleBlog(params.slug);
      setBlogData(res);
    }
    getBlog();
  }, [params]);

  const { body } = blogData;
  useEffect(() => {
    document.getElementById("body").innerHTML = body;
  }, [body]);

  const submitComment = async (e) => {
    e.preventDefault();
    if (!comment || comment instanceof String) {
      setCommentEror("Tuliskan komentar anda dulu");
      setTimeout(() => setCommentEror(null), 4000);
      return;
    } else if (comment.length > 2000) {
      setCommentEror("Komentar anda terlalu panjang");
      setTimeout(() => setCommentEror(null), 4000);
      return;
    } else if (!token) {
      setCommentEror("Harus login sebelum komen");
      setTimeout(() => setCommentEror(null), 4000);
      return;
    } else {
      const saveComment = async () => {
        
        const respon = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/blog/${blogData.slug}/comment`,
          {
            method: "POST",
            body: JSON.stringify({ comment }),
            headers: {
              Accept: "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        const data = await respon.json();
        if (!respon.ok) {
          throw new Error(data.message || "Tidak bisa mengirim komen");
        }
        return data;
      };
      try {
        const data = await saveComment();
        setBlogData(data);
      } catch (error) {
        console.log(error);
        setCommentEror(error);
      }
    }
  };

  return (
    <div className="lg:container mx-auto my-8 px-8 lg:px-24">
      <h1 className="text-gray-900 text-3xl font-bold">{blogData.title}</h1>
      <img
        className="text-center mx-auto h-2/3"
        id="imageBlog"
        src={`${process.env.REACT_APP_SERVER_URL_IMAGE}/${blogData.image}`}
        alt={blogData.title}
      />
      <div className="text-gray-800" id="body"></div>
      <p className="text-gray-500 my-4">
        kategori:{" "}
        <span className="text-gray-700 font-bold">{blogData.category}</span>
      </p>
      <div className="text-gray-500">
        Hastag:{" "}
        {blogData.hastags &&
          blogData.hastags.map((hastag, index) => (
            <p
              key={index}
              className="bg-gray-300 text-gray-900 inline-block mr-4"
            >
              #{hastag}
            </p>
          ))}
      </div>
      <hr className="my-6" />

      <div>
        <h3 className="text-xl">Komentar</h3>
        {[
          {
            id: 3,
            nama: "nama",
            komen:
              "tYou can control which variants are generated for the resizing utilities by modifying the resize property in the variants section of your tailwind.config.js file. ",
          },
          { id: 4, nama: "nama", komen: "test" },
        ].map((comment) => (
          <p className="text-gray-800 my-2">
            {comment.nama} :
            <span className="text-gray-600">{comment.komen}</span>
          </p>
        ))}
      </div>

      <form action="#" onSubmit={submitComment} className="w-full">
        <label htmlFor="komen" className="py-2 text-gray-800">
          Tambahkan Komen
        </label>
        <textarea
          id="komen"
          type="text"
          className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none require"
          rows="3"
          placeholder="Tuliskan komen anda"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        {commentEror && (
          <p className="text-red-500 text-sm py-1 italic">{commentEror}</p>
        )}
        <button
          type="submit"
          className="items-center bg-pink-700 border-5 focus:outline-none hover:bg-pink-900 rounded text-gray-100 py-1 px-3"
        >
          Kirim
        </button>
      </form>
    </div>
  );
}
