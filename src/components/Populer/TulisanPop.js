import React from "react";

import Blog from "../blog/Blog";

export default function TulisanPop() {
  const [blogData, setBlogData] = React.useState(null);

  React.useEffect(() => {
    const getTulisanPop = async () => {
      const fetchToBackend = async () => {
        const res = await fetch(
          `${process.env.REACT_APP_SERVER_URL}/blogs/populer`,
          { method: "GET" }
        );
        const data = res.json();
        if (!res.ok) {
          throw new Error(data.message || "gagal meload tulisan populer");
        }
        return data
      };

      try {
        const data = await fetchToBackend();
        setBlogData(data.blog);
      } catch (error) {
        console.log(error);
      }
    };
    getTulisanPop();
  }, []);

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 pb-18 mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-8 text-gray-900">
          Tulisan Populer
        </h1>
        <div className="flex flex-wrap -m-4 pb-10">
          {!blogData ? (
            <h3 className="sm:text-1xl text-center mx-auto text-xl font-medium mb-24 text-gray-700">
              Belum tersedia tulisan populer
            </h3>
          ) : (
            blogData.map((blog, index) => <Blog key={index} blog={blog} />)
          )}
        </div>
      </div>
      <hr />
    </section>
  );
}
