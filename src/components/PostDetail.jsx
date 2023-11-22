import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/postdetail.css';
import { Link } from 'react-router-dom';


const PostDetail = (props) => {
  const navigate = useNavigate();

  /*navigate to the detail page of the post
  const handleDetailsClick = () => {
    navigate('/detail', {
      state: { props: props.post },
    });
  };*/

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
          <div>
            <Link to={{pathname: "/detail",state: { post: props.post }}}>View Details</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
