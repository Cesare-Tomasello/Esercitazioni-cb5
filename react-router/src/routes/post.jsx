import style from "../styles/post.module.scss";
import React from "react";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Post() {
  const [postData, setPostData] = useState({});
  const navigate = useNavigate();
  const { postId } = useParams();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts/${postId}`)
      .then((res) => res.json())
      .then((data) => setPostData(data));
  }, []);

  const backBtn = () => navigate("/posts");

  return (
    <div className={style.Post}>
      <div className={style.tagsContainer}>
        <h2>Tags of {postId}° user</h2>
        {postData?.tags?.map((tag) => (
          <p className={style.singleTag} key={tag}>
            {tag}
          </p>
        ))}
      </div>
      <h3>Likes: {postData?.reactions}</h3>
      <button className={style.goBackBtn} onClick={backBtn}>
        Go Back
      </button>
    </div>
  );
}

export default Post;
