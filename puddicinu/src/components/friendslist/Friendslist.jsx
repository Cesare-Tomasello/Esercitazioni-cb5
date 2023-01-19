import React from "react";
import "./Friendslist.css";
import Friends from "../friends/Friends";
import { useState, useEffect } from "react";
import { GET } from "../utils/Fetch";

function Friendslist() {
  const [friendList, setFriendList] = useState([]);

  useEffect(() => {
    GET("users").then((data) => setFriendList(data.users));
  }, []);

  return (
    <div className="Friendslist">
      {friendList.map((user) => (
        <Friends data={user} key={user.id} />
      ))}
    </div>
  );
}

export default Friendslist;
