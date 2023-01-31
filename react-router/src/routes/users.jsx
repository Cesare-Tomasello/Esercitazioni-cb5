import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/users.module.scss";

function Users() {
  const [usersData, setUsersData] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsersData(data.users));
  }, []);

  const singleUsersBtn = () => navigate(`1`);
  const postsBtn = () => navigate(`/posts`);

  return (
    <div className={styles.Users}>
      <button onClick={singleUsersBtn}>Single Users' Carousel</button>
      <button onClick={postsBtn}>Posts Section</button>
      {usersData.map((user) => (
        <div className={styles.card} key={user?.id}>
          <img src={user?.image} alt={user?.firstName} />
          <h3>{`${user?.firstName}  ${user?.lastName}`}</h3>
          <p>{user?.address?.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
