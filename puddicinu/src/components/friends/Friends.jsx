import "./Friends.css";
import React from "react";
import { useState, useEffect } from "react";
import { GET } from "../utils/Fetch";

function Friends({ data }) {
  const [user, setUser] = useState({});

  useEffect(() => {
    GET(`users/${data.id}`).then((user) => setUser(user));
  }, []);
  return (
    <div className="Friends">
      <img src={user.image} alt={user.firstName} className="friendsImg" />
      <p>{user.firstName}</p>
    </div>
  );
}

export default Friends;
