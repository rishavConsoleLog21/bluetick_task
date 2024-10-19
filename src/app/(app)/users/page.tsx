"use client";

import { useCallback, useEffect, useState } from "react";
import axios from "axios";
import styles from "@/app/components/CSS/Home.module.css";
import UserTable from "@/app/components/User/UserTable"; // Ensure these components handle editing and deleting
import UserCard from "@/app/components/User/UserCard";
import UserList from "@/app/components/User/UserList";
import UserForm from "@/app/components/UserForm";

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
  const [editingUser, setEditingUser] = useState<User | null>(null); // Track the user being edited

  const fetchUsersData = useCallback(async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        "https://mocki.io/v1/a6a0fb6b-a84a-4934-b3f2-5c92cc77c44e"
      );
      const data = await response.data;
      setUsers(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUsersData();
  }, [fetchUsersData]);

  const handleAddUser = (newUser: User) => {
    setUsers((prevUsers) => [...prevUsers, newUser]);
  };

  const handleDeleteUser = (username: string) => {
    setUsers((prevUsers) =>
      prevUsers.filter((user) => user.username !== username)
    );
  };

  const handleEditUser = (user: User) => {
    setEditingUser(user); // Set the user to edit
  };

  const handleUpdateUser = (updatedUser: User) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.username === updatedUser.username ? updatedUser : user
      )
    );
    setEditingUser(null); // Reset the editing user
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>User Data Display</h1>

      <UserForm
        onAddUser={handleAddUser}
        editingUser={editingUser}
        onUpdateUser={handleUpdateUser}
      />

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

      <div className={styles.content}>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <>
            {viewMode === "table" && <UserTable users={users} />}
            {viewMode === "card" && <UserCard users={users} />}
            {viewMode === "list" && (
              <UserList
                users={users}
                onDeleteUser={handleDeleteUser}
                onEditUser={handleEditUser}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}
