import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/postdetail.css';

const PostDetail = (props) => {
  return (
    <div className="container-card">
      <div className="card">
        <div className="card-body">
          <h3>{props?.post.title} </h3>
          <div>
            <img src={props.post.author.avatar} alt="avatar" />
            {props?.post.author.name}
          </div>
          <p className="dateHome">
            {new Date(props.post.publishDate).toLocaleDateString('en-US')}
          </p>
          <p className="card-text">{props.post.summary}</p>
          <div>
          </div>
          </div>
        </div>
      </div>
  
  )
};

export default PostDetail;
