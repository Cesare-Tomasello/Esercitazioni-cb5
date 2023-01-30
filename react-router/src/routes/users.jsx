import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "../styles/user.module.scss";

function Users() {
  // const { quote } = useParams();
  // const navigate = useNavigate();

  const [usersData, setUsersData] = useState([]);
  // const [quoteIndex, setQuoteIndex] = useState(quote);

  useEffect(() => {
    fetch(`https://dummyjson.com/users`)
      .then((res) => res.json())
      .then((data) => setUsersData(data.users));
  }, []);

  return (
    <div className={styles.Users}>
      {usersData.map((user) => (
        <div className={styles.user} key={user?.id}>
          {/* <img src={user.image} alt={user.name} /> */}
          <h3>{user?.firstName + user?.lastName}</h3>
          <p>{user?.address?.city}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
