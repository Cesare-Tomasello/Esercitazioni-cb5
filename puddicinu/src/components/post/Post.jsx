import "./Post.css";
import React from "react";
import { useState, useEffect } from "react";
import { GET } from "../utils/Fetch";

function Post({ data }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.userId}`).then((user) => setUser(user));
  }, []);

  return (
    <div className="Post">
      <div className="postHeader">
        <div className="headerLeft">
          <img src={user.image} alt={user.firstName} className="postImg" />
          <p>@{user.firstName}</p>
        </div>
        <div className="headerRight">
          <span className="material-symbols-outlined headerMenu">
            more_vert
          </span>
        </div>
      </div>
      <div className="fakePostImg"></div>
      <div className="postIcons">
        <div className="leftPostIcons">
          <span className="material-symbols-outlined">favorite</span>
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="material-symbols-outlined">send</span>
        </div>
        <div className="rightPostIcons">
          <span className="material-symbols-outlined">bookmark</span>
        </div>
      </div>
      <div className="postText">
        <h4>{data.title}</h4>
        <p>{data.body}</p>
      </div>
    </div>
  );
}

export default Post;
