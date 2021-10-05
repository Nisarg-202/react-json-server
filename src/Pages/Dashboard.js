import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

import {fetchPost} from '../actions';

function Dashboard({posts, fetchPost, history}) {
  useEffect(async function () {
    await fetchPost();
  }, []);
  function onPostClick(data) {
    history.push(`/posts`, data);
  }
  return (
    <div className="container mt-3">
      <div className="d-flex justify-content-end">
        <Link to="/posts/create" className="btn btn-primary">
          Add Post
        </Link>
      </div>
      {posts.length > 0 &&
        posts.map(function (post) {
          return (
            <div
              className="border d-flex justify-content-between my-3 shadow-sm"
              onClick={function () {
                onPostClick({
                  id: post.id,
                  title: post.title,
                  contents: post.contents,
                  categories: post.categories,
                });
              }}
            >
              <h4 className="mx-2 p-2">{post.title}</h4>
              <h5 className="mx-2 p-2">{post.categories}</h5>
            </div>
          );
        })}
    </div>
  );
}

function mapStateToProps(state) {
  return {posts: state.posts};
}

export default connect(mapStateToProps, {fetchPost})(Dashboard);
