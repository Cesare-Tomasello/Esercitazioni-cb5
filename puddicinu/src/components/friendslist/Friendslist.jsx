import React from "react";
import "./Friendslist.css";
import Friends from "../friends/Friends";
import { useState, useEffect } from "react";
import { GET } from "../utils/Fetch";

function Friendslist() {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setMsgList(posts));
  }, []);

  return (
    <div className="Friendslist">
      {msgList.map((msg) => (
        <Friends data={msg} key={msg.id} />
      ))}
    </div>
  );
}

export default Friendslist;
