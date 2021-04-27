// import { handleResponse } from './auth';

export const create = (tag, token) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/tag`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    })
        .then(response => {
            // handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getTags = () => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/tags`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const singleTag = tag => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/tag/${tag}`, {
        method: 'GET'
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const removeTag = (tag, token) => {
    return fetch(`${process.env.REACT_APP_SERVER_URL}/tag/${tag}`, {
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
