import React from "react";

import Blog from "../blog/Blog";

export default function TulisanTerbaru() {
  const [blogData, setBlogData] = React.useState(null);

  React.useEffect(() => {
    const getTulisanPop = async () => {
      const res = await fetch(
        `${process.env.REACT_APP_SERVER_URL}/blog/terbaru`,
        { method: "GET" }
      );
      const data = res.json();
      if (!res.ok) {
        throw new Error(data.message || "gagal meload tulisan terbaru");
      }
      try {
        const data = await getTulisanPop();
        setBlogData(data);
      } catch (error) {
        console.log(error);
      }
    };
    getTulisanPop();
  }, []);

  const fakeBlog = [
    {
      title: "tes",
      category: "cate",
      excerpt: "<p> teagd djsadhjas njsahd jhdjsa jd ash </>",
      slug: "test",
      image: "testt",
      like: 654,
      comment: 670,
    },
    {
      title: "tesdd",
      category: "catefdf",
      excerpt: "<p> teagddsfdsfds djsadhjas njsahd jhdjsa jd ash </>",
      slug: "test",
      image: "testt",
      like: 654,
      comment: 67,
    },
    {
      title: "tesasdsad",
      category: "catefds",
      excerpt: "<p> teagdfdsfdsfds djsadhjas njsahd jhdjsa jd ash </>",
      slug: "test",
      image: "testt",
      like: 654,
      comment: 67,
    },
  ];

  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 pt-24 pb-18 mx-auto">
        <h1 className="sm:text-3xl text-center text-2xl font-medium title-font mb-8 text-gray-900">
          Tulisan Terbaru
        </h1>
        <div className="flex flex-wrap -m-4 pb-10">
          {!fakeBlog ? (
            <h3 className="sm:text-1xl text-center mx-auto text-xl font-medium mb-24 text-gray-700">
              Belum tersedia tulisan Terbaru
            </h3>
          ) : (
            fakeBlog.map((blog, index) => <Blog key={index} blog={blog} />)
          )}
        </div>
      </div>
      <hr />
    </section>
  );
}
