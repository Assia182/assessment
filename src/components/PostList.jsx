import React from 'react';
import Post from './PostDetail';
import '../styles/postlist.css';

const PostList = (props) => {
  return (
    <div>
      <ul className="card-list">
        {props.posts.slice(0, props.visible).map((post) => (
          <li key={post.id} className="card">
            <Post post={post} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
