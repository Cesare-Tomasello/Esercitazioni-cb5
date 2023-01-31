import style from "../styles/posts.module.scss";
import React, { useState } from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Posts() {
  const [postsData, setPostsData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://dummyjson.com/posts`)
      .then((res) => res.json())
      .then((data) => setPostsData(data.posts));
  }, []);

  const backBtn = () => navigate("/users");
  const moreInfoBtn = (endpoint) => navigate(`/posts/${endpoint}`);

  return (
    <div className={style.Posts}>
      <button className={style.goBackBtn} onClick={backBtn}>
        Go Back
      </button>
      {postsData.map((user) => (
        <div className={style.postContainer} key={user.id}>
          <h3>{user.title}</h3>
          <img
            src={`https://picsum.photos/400/500?${user.id}`}
            alt=""
            className={style.fakeImg}
          ></img>
          <p className={style.text}>{user.body}</p>
          <button onClick={() => moreInfoBtn(user.id)}>More</button>
        </div>
      ))}
    </div>
  );
}

export default Posts;
