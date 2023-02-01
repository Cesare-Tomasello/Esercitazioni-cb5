import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import styles from "../../styles/id.module.scss";

function singleUser() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${id}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  const router = useRouter();
  const id = router.query.id;

  return (
    <div className={styles.main}>
      <Link className={styles.goBackBtn} href="/users">
        Go Back!
      </Link>
      <div className={styles.singleUser}>
        <h1>{userData.firstName}</h1>
        <img
          className={styles.singleUserImg}
          src={userData.image}
          alt={userData.firstName}
        />
        <p className={styles.singleUserPhone}>Mobile: {userData.phone}</p>
        <div>
          <p className={styles.singleUserAddress}>
            Address: {userData.address?.address}
          </p>
          <p className={styles.singleUserCity}>
            City: {userData.address?.city}
          </p>
        </div>
      </div>
    </div>
  );
}

export default singleUser;
