// import { handleResponse } from './auth';

export const create = (category, token) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/category`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            // handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getCategories = () => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/categories`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleCategory = id => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/category/${id}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeCategory = (id, token) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/category/${id}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            // handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};
