export const createBlog = async (blog, token) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_SERVER_URL}/blog`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: blog,
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message || "gagal" };
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const singleBlog = async (slug) => {
  try {
    const res = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/blog/${slug}`,
      {
        method: "GET",
      }
    );
    const data = await res.json();
    if (!res.ok) {
      return { error: data.message || "gagal" };
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const listAllBlog = async () => {
  try {
    const res = await fetch(`${process.env.REACT_APP_SERVER_URL}/blogs`, {
      method: "GET",
    });

    const data = await res.json();
    if (!res.ok) {
      return { error: data.message || "gagal" };
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const removeBlog = async (slug, token) => {
  try {
    const respon = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/blog/${slug}`,
      {
        method: "DELETE",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = await respon.json();
    if (!respon.ok) {
      return { error: data.message || "gagal menghapus" };
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const updateBlog = async (blog, token, slug) => {
  try {
    const respon = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/blog/${slug}`,
      {
        method: "PUT",
        headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: blog,
      }
    );
    const data = await respon.json();
    if (!respon.ok) {
      return { error: data.message || "gagal mengupdate" };
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const searchCategory = async (category) => {
  try {
    const respon = await fetch(
      `${process.env.REACT_APP_SERVER_URL}/blogs/${category}`,
      {
        method: "GET",
      }
    );
    const data = await respon.json();
    if (!respon.ok) {
      return { error: data.message || "gagal mencari kategori" };
    }
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const listSearch = (params) => {
  console.log("search params", params);
  let query; //= queryString.stringify(params);
  console.log("query params", query);
  return fetch(`${process.env.REACT_APP_SERVER_URL}/blogs/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
