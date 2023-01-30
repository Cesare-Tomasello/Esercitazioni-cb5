import style from "../styles/user.module.scss";
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

function User() {
  const { userId } = useParams();
  const navigate = useNavigate();
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, [userId]);

  const prevBtn = () => navigate(`/users/${parseInt(userId) - 1}`);
  const nextBtn = () => navigate(`/users/${parseInt(userId) + 1}`);

  return (
    <div className={style.User}>
      <div className={style.buttons}>
        <button disabled={userId > 1 ? false : true} onClick={prevBtn}>
          Prev
        </button>
        <button disabled={userId < 30 ? false : true} onClick={nextBtn}>
          Next
        </button>
      </div>

      <div className={style.userCard}>
        <img src={userData?.image} alt={userData?.firstName} />
        <h3>{`${userData?.firstName} ${userData?.lastName}`}</h3>
        <p>{userData?.address?.city}</p>
      </div>
    </div>
  );
}

export default User;
