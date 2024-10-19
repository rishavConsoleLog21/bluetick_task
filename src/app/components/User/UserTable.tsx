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
              <td data-label="First Name">{user.first_name}</td>
              <td data-label="Last Name">{user.last_name}</td>
              <td data-label="Username">{user.username}</td>
              <td data-label="Age">{user.age}</td>
              <td data-label="Marital Status">{user.marital_status}</td>
              <td data-label="Employed">{user.is_employed ? "Yes" : "No"}</td>
              <td data-label="Founder">{user.is_founder ? "Yes" : "No"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
