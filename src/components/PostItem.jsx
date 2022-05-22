import React from "react";
import MyButton from "./UI/button/MyButton";

export default function PostItem({ post, number, deletePost }) {
  return (
    <div className='post'>
      <div className='post__content'>
        <strong>
          {number}. {post.title}
        </strong>
        <div>{post.body}</div>
      </div>
      <div className='post_btn'>
        <MyButton onClick={() => deletePost(post.id)}>Delete</MyButton>
      </div>
    </div>
  );
}
