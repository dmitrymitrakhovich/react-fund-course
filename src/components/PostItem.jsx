import React from "react";
import { useNavigate } from "react-router-dom";
import MyButton from "./UI/button/MyButton";

export default function PostItem({ post, deletePost }) {
  const navigate = useNavigate();

  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {post.id}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className='post__btn'>
        <MyButton onClick={() => navigate(`${post.id}`)}>Open</MyButton>
        <MyButton onClick={() => deletePost(post.id)}>Delete</MyButton>
      </div>
    </div>
  );
}
