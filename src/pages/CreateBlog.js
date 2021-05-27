import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";

import { createBlog } from "../actions/blog";

const Editor = () => {
  const [editorHtml, setEditorHtml] = useState("");
  const [blogTitle, setBlogTitle] = useState("");
  const [blogImage, setBlogImage] = useState(null);
  const [hastags, setHastags] = useState([]);
  const [category, setCategory] = useState(null);

  const token = useSelector((state) => state.auth.token);
  const userId = useSelector((state) => state.auth.userId);
  const history = useHistory();

  const handleChange = (html) => {
    setEditorHtml(html);
  };

  const publishBlog = async () => {
    const arrayHastag = hastags.split("#");
    arrayHastag.shift(); //memghilang kan index pertmaa yang berisi spasi kosong
    const formdata = new FormData();
    formdata.append("bodyBlog", editorHtml);
    formdata.append("titleBlog", blogTitle);
    formdata.append("hastagsBlog", hastags);
    formdata.append("categoryBlog", category);
    formdata.append("imageBlog", blogImage);
    try {
      const response = await createBlog(formdata, token);
      history.push(`/baca/${response.slug}`);
    } catch (error) {
      console.log(error);
    }
  };

  const saveDrafBlog = () => {
    localStorage.setItem("blog", JSON.stringify(editorHtml));
  };

  const categoriFake = [
    "teggst",
    "teggstgf",
    "teggstfdgfd",
    "teggstfdgfdhfghfg",
  ];

  return (
    <div className="container w-full mx-auto bg-white  dark:bg-gray-800">
      <div className="flex flex-wrap  p-4">
        <div className="p-2 lg:w-2/3 w-full ">
          <div className="flex flex-col lg:mr-2">
            <div className="w-full">
              <label htmlFor="judul" className="py-2 text-gray-800">
                Judul
              </label>
              <input
                type="text"
                id="judul"
                className="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-900 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mb-4"
                placeholder="Judul Tulisan"
                value={blogTitle}
                onChange={(e) => setBlogTitle(e.target.value)}
              />
            </div>
            <ReactQuill
              className=""
              theme="snow"
              onChange={handleChange}
              value={editorHtml}
              modules={Editor.modules}
              formats={Editor.formats}
              bounds={".app"}
              placeholder="Ketik blog anda disini ..."
            />
          </div>
        </div>
        <div className="p-2 lg:w-1/3 w-full ">
          <div>
            <div className="w-full pb-4">
              <h5 className="mb-2">Gambar sampul</h5>
              <hr />
              <small className="block text-gray-600 mt-1">
                Ukuran maksimal: 1mb
              </small>
              <label className="inline-flex items-center bg-pink-700 border-5 md:w-5/6 py-2 px-3 focus:outline-none hover:bg-pink-900 rounded-lg text-gray-100 mt-2 ">
                <input
                  onChange={(e) => setBlogImage(e.target.files[0])}
                  type="file"
                  accept="image/*"
                  alt="your image"
                  // hidden untuk menghilangkan nama file yang diupload
                />
              </label>
            </div>
          </div>
          <div className="my-3">
            <h5>Categories</h5>
            <hr />
            <div onChange={(e) => setCategory(e.target.value)}>
              {categoriFake.map((categori, index) => (
                <label className="block">
                  <input
                    key={index}
                    className="list-unstyled mr-4"
                    type="radio"
                    value={categori}
                    name="categories"
                  />
                  {categori}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label htmlFor="tag" className="py-2 text-gray-800">
              Hastag
            </label>
            <input
              type="text"
              id="tag"
              className="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-900 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mb-4"
              placeholder="Hastag untuk tulisan anda"
              value={hastags}
              onChange={(e) => setHastags(e.target.value)}
            />
          </div>
          <div className="w-full">
            <button
              onClick={publishBlog}
              className="px-10 items-center bg-pink-700 border-5 py-2  focus:outline-none hover:bg-pink-900 rounded text-gray-100"
            >
              Publish
            </button>
            <button
              onClick={saveDrafBlog}
              className="ml-5 items-center bg-pink-500 border-5 py-2 px-5 focus:outline-none hover:bg-pink-900 rounded text-gray-100"
            >
              Simpan Draft
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

/*
 * Quill modules to attach to editor
 * See https://quilljs.com/docs/modules/ for complete options
 */
Editor.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link"],
    ["clean"],
  ],
  clipboard: {
    // toggle to add extra line breaks when pasting HTML:
    matchVisual: false,
  },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
Editor.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
];

export default Editor;
