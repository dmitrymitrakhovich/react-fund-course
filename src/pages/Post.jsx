import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostService from "../components/api/PostService";
import { useFetching } from "../components/hooks/useFetching";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/loader/Loader";

export default function Post() {
  const [post, setPost] = useState({});
  const [comments, setComments] = useState([]);
  const navigate = useNavigate();
  const { postId } = useParams();
  const [fetchPostById, isPostLoading, postError] = useFetching(async () => {
    const response = await PostService.getById(postId);
    setPost(response.data);
  });

  const [fetchCommetns, isCommentsLoading, commentsError] = useFetching(
    async () => {
      const response = await PostService.getCommentsById(postId);
      setComments(response.data);
    }
  );

  useEffect(() => {
    fetchPostById();
    fetchCommetns();
  }, [postId]);

  return (
    <div style={{ maxWidth: 800, marginTop: 10 }}>
      <MyButton onClick={() => navigate(-1)}>Back</MyButton>
      {isPostLoading ? (
        <Loader />
      ) : (
        <div>
          {post.id}. {post.title}
        </div>
      )}
      <h1>
        Comments:
        {isCommentsLoading ? (
          <Loader />
        ) : (
          <div>
            {comments.map((com) => (
              <div style={{ marginTop: 15 }}>
                <h5>{com.email}</h5>
                <span>{com.body}</span>
              </div>
            ))}
          </div>
        )}
      </h1>
    </div>
  );
}
