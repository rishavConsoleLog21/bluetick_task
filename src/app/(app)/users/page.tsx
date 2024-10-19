"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styles from "@/app/components/CSS/Home.module.css";
import UserTable from "@/app/components/User/UserTable";
import UserCard from "@/app/components/User/UserCard";
import UserList from "@/app/components/User/UserList";

type User = {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
};

export default function Home() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [viewMode, setViewMode] = useState<"table" | "card" | "list">("table");

  // Fetch data from the API
  const fetchUsersData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e"
      );
      const data = await response.data;
      setUsers(data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  }, []);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Data Display</h1>

      {/* Buttons to switch view modes */}
      <div className={styles.buttonGroup}>
        <button
          className={viewMode === "table" ? styles.activeButton : styles.button}
          onClick={() => setViewMode("table")}
        >
          Table View
        </button>
        <button
          className={viewMode === "card" ? styles.activeButton : styles.button}
          onClick={() => setViewMode("card")}
        >
          Card View
        </button>
        <button
          className={viewMode === "list" ? styles.activeButton : styles.button}
          onClick={() => setViewMode("list")}
        >
          List View
        </button>
      </div>

      {/* Conditional Rendering of User Data */}
      <div className={styles.content}>
        {viewMode === "table" && <UserTable users={users} />}
        {viewMode === "card" && <UserCard users={users} />}
        {viewMode === "list" && <UserList users={users} />}
      </div>
    </div>
  );
}
