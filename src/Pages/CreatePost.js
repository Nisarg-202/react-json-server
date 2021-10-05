import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';

import {createPost} from '../actions';

function CreatePost({createPost, history}) {
  const [title, setTitle] = useState('');
  const [categories, setCategories] = useState('');
  const [contents, setContents] = useState('');
  function onTitleChange(e) {
    setTitle(e.target.value);
  }
  function onCategoriesChange(e) {
    setCategories(e.target.value);
  }
  function onContentsChange(e) {
    setContents(e.target.value);
  }
  async function onHandleChange(e) {
    e.preventDefault();
    await createPost({title, contents, categories});
    history.push('/');
  }
  return (
    <div className="container mt-3">
      <form onSubmit={onHandleChange}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input
            type="text"
            placeholder="Title"
            id="title"
            required
            className="form-control"
            value={title}
            onChange={onTitleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="categories">Categories</label>
          <input
            type="text"
            placeholder="Categories"
            id="categories"
            required
            className="form-control"
            value={categories}
            onChange={onCategoriesChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="contents">Contents</label>
          <input
            type="text"
            placeholder="Contents"
            id="contents"
            required
            className="form-control"
            value={contents}
            onChange={onContentsChange}
          />
        </div>
        <div>
          <button type="submit" className="btn btn-primary mx-2">
            Save
          </button>
          <Link to="/" className="btn btn-danger">
            Cancel
          </Link>
        </div>
      </form>
    </div>
  );
}

export default connect(null, {createPost})(CreatePost);
