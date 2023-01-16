import Post from "../post/Post";
import "./Postcontainer.css";
import { useState, useEffect } from "react";
import { GET } from "../utils/Fetch";

import React from "react";

function Postcontainer() {
  const [msgList, setMsgList] = useState([]);

  useEffect(() => {
    GET("posts").then(({ posts }) => setMsgList(posts));
  }, []);

  return (
    <div className="Postcontainer">
      {msgList.map((msg) => (
        <Post data={msg} key={msg.id} />
      ))}
    </div>
  );
}

export default Postcontainer;
