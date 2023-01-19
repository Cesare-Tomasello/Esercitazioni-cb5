import "./Friends.css";
import React from "react";

function Friends({ data }) {
  return (
    <div className="Friends">
      <img src={data.image} alt={data.firstName} className="friendsImg" />
      <p>{data.firstName}</p>
    </div>
  );
}

export default Friends;
