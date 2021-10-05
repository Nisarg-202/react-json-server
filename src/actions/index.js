import axios from 'axios';

export const fetchPost = function () {
  return async function (dispatch) {
    const response = await axios.get('http://localhost:5000/posts');
    dispatch({type: 'POSTS', payload: response.data});
  };
};

export const createPost = function ({title, categories, contents}) {
  return async function (dispatch) {
    await axios.post('http://localhost:5000/posts', {
      title,
      categories,
      contents,
    });
    const response = await axios.get('http://localhost:5000/posts');
    dispatch({type: 'POSTS', payload: response.data});
  };
};

export const deletePost = function (id) {
  return async function (dispatch) {
    await axios.delete(`http://localhost:5000/posts/${id}`);
    const response = await axios.get('http://localhost:5000/posts');
    dispatch({type: 'POSTS', payload: response.data});
  };
};
