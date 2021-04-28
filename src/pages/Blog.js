import { useState, useEffect } from "react";
import ReactQuill from "react-quill";
import "../../node_modules/react-quill/dist/quill.snow.css";
import {useSelector} from 'react-redux'

import { QuillModules, QuillFormats } from "../helpers/quill";
import { getCategories } from '../actions/category';
import { getTags } from '../actions/tag';
import { createBlog } from '../actions/blog';

const CreateBlog = () => {
  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };

  const [categories, setCategories] = useState([]);
  const [tags, setTags] = useState([]);

  const [checked, setChecked] = useState([]); // categories
  const [checkedTag, setCheckedTag] = useState([]); // tags

  const [body, setBody] = useState(blogFromLS());
  const [values, setValues] = useState({
    error: "",
    sizeError: "",
    success: "",
    formData: "",
    title: "",
    hidePublishButton: false,
  });

  const token = useSelector(state => state.auth.token)

  const {
    error,
    success,
    formData,
    title,
  } = values;

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
     initCategories();
     initTags();
  }, [token]);

  const initCategories = () => {
      getCategories().then(data => {
          if (data.error) {
             setValues({ ...values, error: data.error });
          } else {
              setCategories(data);
          }
      });
  };

  const initTags = () => {
      getTags().then(data => {
          if (data.error) {
              setValues({ ...values, error: data.error });
          } else {
              setTags(data);
          }
      });
  };

  const publishBlog = e => {
      e.preventDefault();
      console.log(token);
      console.log(formData);
      createBlog(formData, token).then(data => {
          if (data.error) {
              setValues({ ...values, error: data.error });
          } else {
              setValues({ ...values, title: '', error: '', success: `A new blog titled "${data.title}" is created` });
              setBody('');
              setCategories([]);
              setTags([]);
          }
      });
  };

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = name === "photo" ? e.target.files[0] : e.target.value;
    formData.append(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  const handleBody = (e) => {
   console.log(e);
    setBody(e);
    formData.append("body", e);
    if (typeof window !== "undefined") {
      localStorage.setItem("blog", JSON.stringify(e));
    }
  };

  const handleCategoriesToggle = c => () => {
      setValues({ ...values, error: '' });
      // return the first index or -1
      const clickedCategory = checked.indexOf(c);
      const all = [...checked];

      if (clickedCategory === -1) {
          all.push(c);
      } else {
          all.splice(clickedCategory, 1);
      }
      console.log(all);
      setChecked(all);
      formData.append('categories', all);
  };

  const handleTagsToggle = t => () => {
      setValues({ ...values, error: '' });
      // return the first index or -1
      const clickedTag = checked.indexOf(t);
      const all = [...checkedTag];

      if (clickedTag === -1) {
          all.push(t);
      } else {
          all.splice(clickedTag, 1);
      }
      console.log(all);
      setCheckedTag(all);
      formData.append('tags', all);
  };

  const showCategories = () => {
      return (
          categories &&
          categories.map((categori, index) => (
              <li key={index} className="list-unstyled">
                  <input onChange={handleCategoriesToggle(categori._id)} type="checkbox" className="mr-2" />
                  <label className="form-check-label">{categori.name}</label>
              </li>
          ))
      );
  };

  const showTags = () => {
      return (
          tags &&
          tags.map((tag, index) => (
              <li key={index} className="list-unstyled">
                  <input onChange={handleTagsToggle(tag._id)} type="checkbox" className="mr-2" />
                  <label className="form-check-label">{tag.name}</label>
              </li>
          ))
      );
  };

  const showError = () => (
    <div
      className="alert alert-danger"
      style={{ display: error ? "" : "none" }}
    >
      {error}
    </div>
  );

  const showSuccess = () => (
    <div
      className="alert alert-success"
      style={{ display: success ? "" : "none" }}
    >
      {success}
    </div>
  );

  const createBlogForm = () => {
    return (
      <form onSubmit={publishBlog} className="flex flex-col">
        <div className="w-full">
          <label htmlFor="judul" className="py-2 text-gray-800">
            Judul
          </label>
          <input
            type="text"
            id="judul"
            className="rounded border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-900 placeholder-gray-500 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-pink-600 focus:border-transparent mb-4"
            placeholder="Judul Tulisan"
            value={title}
            onChange={handleChange("title")}
          />
        </div>

        <div className="w-full h-100">
          <ReactQuill
            modules={QuillModules}
            formats={QuillFormats}
            value={body}
            placeholder="Tulis sesuatu yang mengagumkan"
            onChange={handleBody}
            className="h-64"
          />
        </div>

        <div>
          <button
            type="submit"
            className="items-center bg-pink-700 border-5 py-2 px-5 focus:outline-none hover:bg-pink-900 rounded text-gray-100 my-16"
          >
            Publish
          </button>
        </div>
      </form>
    );
  };

  return (
    <div className="container w-full mx-auto bg-white  dark:bg-gray-800">
      <div className="flex flex-wrap  p-4">
        <div className="p-2 lg:w-2/3 w-full ">
          {createBlogForm()}
          <div className="pt-5">
            {showError()}
            {showSuccess()}
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
                  onChange={handleChange("photo")}
                  type="file"
                  accept="image/*"
                  alt="your image"
                  // hidden untuk menghilangkan nama file yang diupload
                />
              </label>
            </div>
          </div>
          <div>
            <h5>Categories</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showCategories()}
            </ul>
          </div>
          <div>
            <h5>Tags</h5>
            <hr />
            <ul style={{ maxHeight: "200px", overflowY: "scroll" }}>
              {showTags()}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateBlog;
