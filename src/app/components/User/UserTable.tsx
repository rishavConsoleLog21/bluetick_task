// components/UserTable.tsx

import React from "react";
import styles from "../CSS/UserTable.module.css";

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
}

interface UserTableProps {
  users: User[];
}

const UserTable: React.FC<UserTableProps> = ({ users }) => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.responsiveTable}>
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
            <th>Age</th>
            <th>Marital Status</th>
            <th>Employed</th>
            <th>Founder</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.first_name}</td>
              <td>{user.last_name}</td>
              <td>{user.username}</td>
              <td>{user.age}</td>
              <td>{user.marital_status}</td>
              <td>{user.is_employed ? "Yes" : "No"}</td>
              <td>{user.is_founder ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
