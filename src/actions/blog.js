export const createBlog = async (blog, token) => {
    try {
        const response= await fetch(`${process.env.REACT_APP_SERVER_URL}/blog`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                Authorization: `Bearer ${token}`,
            },
            body: blog
        })
    
        const data = await response.json()
    
        if(!response.ok){
            return {error : data.message || "gagal"}
        }
        return data
    } catch (error) {
        console.log(error);
    }
};

export const listBlogsWithCategoriesAndTags = (skip, limit) => {
    const data = {
        limit,
        skip
    };
    return fetch(`${process.env.REACT_APP_SERVER_URL}/blogs-categories-tags`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleBlog = (slug = undefined) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/blog/${slug}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listRelated = blog => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/blogs/related`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(blog)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const list = username => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/${username}/blogs`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeBlog = (slug, token) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/blog/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateBlog = (blog, token, slug) => {
      return fetch(`${process.env.REACT_APP_SERVER_URL}/blog/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: blog
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const listSearch = params => {
    console.log('search params', params);
    let query //= queryString.stringify(params);
    console.log('query params', query);
    return fetch(`${process.env.REACT_APP_SERVER_URL}/blogs/search?${query}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};
