import React from 'react';
import {connect} from 'react-redux';

import {deletePost} from '../actions';

function ShowPost({location, deletePost, history}) {
  async function onDeletePost() {
    await deletePost(location.state.id);
    history.push('/');
  }
  function onGoBack() {
    history.push('/');
  }
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-between">
        <button className="btn btn-secondary" onClick={onGoBack}>
          <i class="fas fa-arrow-left"></i> Go Back
        </button>
        <button className="btn btn-danger" onClick={onDeletePost}>
          Delete
        </button>
      </div>
      <h4 className="my-3">{location.state.title}</h4>
      <h6 className="my-3">{location.state.categories}</h6>
      <p className="my-3">{location.state.contents}</p>
    </div>
  );
}

export default connect(null, {deletePost})(ShowPost);
