// components/UserCard.tsx

import React from "react";
import styles from "../CSS/UserCard.module.css";

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
}

interface UserCardProps {
  users: User[];
}

const UserCard: React.FC<UserCardProps> = ({ users }) => {
  return (
    <div className={styles.cardContainer}>
      {users.map((user, index) => (
        <div key={index} className={styles.card}>
          <div className={styles.cardHeader}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p className={styles.username}>@{user.username}</p>
          </div>
          <div className={styles.cardBody}>
            <p>
              <strong>Age:</strong> {user.age}
            </p>
            <p>
              <strong>Marital Status:</strong> {user.marital_status}
            </p>
            <p>
              <strong>Employed:</strong> {user.is_employed ? "Yes" : "No"}
            </p>
            <p>
              <strong>Founder:</strong> {user.is_founder ? "Yes" : "No"}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default UserCard;
