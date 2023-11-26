import React from 'react';
import PostDetail from './PostDetail'; 
import '../styles/postlist.css';

const PostList = (props) => {
  return (
    <div>
      <ul className="card-list">
        {props.posts.slice(0, props.visible).map((post) => (
          <li key={post.id} className="card">
            <PostDetail post={post} /> {}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostList;
