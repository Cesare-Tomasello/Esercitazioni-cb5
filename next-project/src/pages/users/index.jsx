import React from "react";
import styles from "../../styles/users.module.scss";
import Link from "next/link";

export default function Users({ users }) {
  return (
    <div className={styles.Users}>
      {users &&
        users.map((user) => (
          <div className={styles.card}>
            <h2 key={user.id}>{user.firstName}</h2>
            <img className={styles.cardImg} src={user.image} alt={user.id} />
            <Link className={styles.cardLink} href={`/users/${user.id}`}>
              More Info
            </Link>
          </div>
        ))}
    </div>
  );
}

export async function getStaticProps() {
  const resUsers = await fetch("https://dummyjson.com/users");
  const dataUsers = await resUsers.json();

  return {
    props: {
      users: dataUsers.users,
    },
  };
}
