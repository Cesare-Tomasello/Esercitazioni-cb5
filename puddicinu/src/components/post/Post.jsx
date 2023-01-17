import "./Post.css";
import React from "react";
import { useState, useEffect } from "react";
import { GET } from "../utils/Fetch";

function Post({ data }) {
  const [user, setUser] = useState({});
  const imgUrl = "https://picsum.photos/380/330?";

  let [like, setLike] = useState(false);
  let [save, setSave] = useState(false);

  const likeClick = () => {
    like = setLike(!like);
  };

  const saveClick = () => {
    save = setSave(!save);
  };

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
      <div className="fakeImgContainer">
        <img className="fakeImg" src={imgUrl + data.id} alt="Post Image" />
      </div>
      <div className="postIcons">
        <div className="leftPostIcons">
          <button className="likeButton" onClick={likeClick}>
            <span className="material-symbols-outlined">
              {like == false ? "favorite" : "heart_plus"}
            </span>
          </button>
          <span className="material-symbols-outlined">chat_bubble</span>
          <span className="material-symbols-outlined">send</span>
        </div>
        <div className="rightPostIcons">
          <button className="saveButton" onClick={saveClick}>
            <span className="material-symbols-outlined">
              {save == false ? "bookmark_add" : "bookmark_added"}
            </span>
            {save == false ? "" : "Saved!"}
          </button>
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
