// components/UserList.tsx

import React from "react";
import styles from "../CSS/UserList.module.css";

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
}

interface UserListProps {
  users: User[];
}

const UserList: React.FC<UserListProps> = ({ users }) => {
  return (
    <div className={styles.listContainer}>
      {users.map((user, index) => (
        <div key={index} className={styles.listItem}>
          <div className={styles.userHeader}>
            <h3>
              {user.first_name} {user.last_name}
            </h3>
            <p className={styles.username}>@{user.username}</p>
          </div>
          <ul className={styles.userDetails}>
            <li>
              <strong>Age:</strong> {user.age}
            </li>
            <li>
              <strong>Marital Status:</strong> {user.marital_status}
            </li>
            <li>
              <strong>Employed:</strong> {user.is_employed ? "Yes" : "No"}
            </li>
            <li>
              <strong>Founder:</strong> {user.is_founder ? "Yes" : "No"}
            </li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default UserList;
