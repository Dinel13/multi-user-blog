import { useState } from "react";
import { Link } from "react-router-dom";

import { listSearch } from "../../actions/blog";

const Search = () => {
  const [values, setValues] = useState({
    search: undefined,
    results: [],
    searched: false,
    message: "",
  });

  const { search, results, searched, message } = values;

  const searchSubmit = (e) => {
    e.preventDefault();
    listSearch({ search }).then((data) => {
      setValues({
        ...values,
        results: data,
        searched: true,
        message: `${data.length} blogs found`,
      });
    });
  };

  const handleChange = (e) => {
    // console.log(e.target.value);
    setValues({
      ...values,
      search: e.target.value,
      searched: false,
      results: [],
    });
  };

  const searchedBlogs = (results = []) => {
    return (
      <div className="jumbotron bg-white">
        {message && <p className="pt-4 text-muted font-italic">{message}</p>}

        {results.map((blog, i) => {
          return (
            <div key={i}>
              <Link to={`/bacaan/${blog.slug}`}>{blog.title}</Link>
            </div>
          );
        })}
      </div>
    );
  };

  const searchForm = () => (
    <form className="flex w-full" onSubmit={searchSubmit}>
      <div className="flex w-3/4">
        <input
          type="search"
          className="py-4 px-4 border border-gray-600 rounded hover:border-blue-700"
          placeholder="Search blogs"
          onChange={handleChange}
        />

        <button
          className="ml-3 py-4 px-8 border bg-red-500 rounded "
          type="submit"
        >
          Search
        </button>
      </div>
    </form>
  );

  return (
    <div className="flex flex-col items-center my-12">
      <div className="w-full">{searchForm()}</div>
      {searched && <div>{searchedBlogs(results)}</div>}
    </div>
  );
};

export default Search;
