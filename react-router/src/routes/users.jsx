import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/users.module.scss";

function Users() {
  const [usersData, setUsersData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsersData(data.users));
  }, []);

  return (
    <div className={styles.Users}>
      <Link to={"/users/1"}>Single User</Link>
      {usersData.map((user) => (
        <div className={styles.card} key={user?.id}>
          <img src={user.image} alt={user.firstName} />
          <h3>{`${user?.firstName}  ${user?.lastName}`}</h3>
          <p>{user?.address?.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
