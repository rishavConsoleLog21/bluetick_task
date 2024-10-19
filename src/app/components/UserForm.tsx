// components/User/UserForm.tsx

import React, { useEffect, useState } from "react";

interface User {
  first_name: string;
  last_name: string;
  username: string;
  age: number;
  marital_status: string;
  is_employed: boolean;
  is_founder: boolean;
}

interface UserFormProps {
  onAddUser: (user: User) => void;
  editingUser: User | null; // New prop for editing user
  onUpdateUser: (user: User) => void; // Function to update user
}

const UserForm: React.FC<UserFormProps> = ({
  onAddUser,
  editingUser,
  onUpdateUser,
}) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [maritalStatus, setMaritalStatus] = useState("");
  const [isEmployed, setIsEmployed] = useState(false);
  const [isFounder, setIsFounder] = useState(false);

  // Effect to populate form when editingUser changes
  useEffect(() => {
    if (editingUser) {
      setFirstName(editingUser.first_name);
      setLastName(editingUser.last_name);
      setUsername(editingUser.username);
      setAge(editingUser.age);
      setMaritalStatus(editingUser.marital_status);
      setIsEmployed(editingUser.is_employed);
      setIsFounder(editingUser.is_founder);
    } else {
      // Reset form if no user is being edited
      setFirstName("");
      setLastName("");
      setUsername("");
      setAge("");
      setMaritalStatus("");
      setIsEmployed(false);
      setIsFounder(false);
    }
  }, [editingUser]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (editingUser) {
      onUpdateUser({
        first_name: firstName,
        last_name: lastName,
        username,
        age: Number(age),
        marital_status: maritalStatus,
        is_employed: isEmployed,
        is_founder: isFounder,
      });
    } else {
      onAddUser({
        first_name: firstName,
        last_name: lastName,
        username,
        age: Number(age),
        marital_status: maritalStatus,
        is_employed: isEmployed,
        is_founder: isFounder,
      });
    }
    // Reset form after submission
    setFirstName("");
    setLastName("");
    setUsername("");
    setAge("");
    setMaritalStatus("");
    setIsEmployed(false);
    setIsFounder(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4 p-4 border rounded">
      <h2 className="text-lg font-bold">
        {editingUser ? "Edit User" : "Add User"}
      </h2>
      <input
        type="text"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First Name"
        required
      />
      <input
        type="text"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last Name"
        required
      />
      <input
        type="text"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder="Username"
        required
      />
      <input
        type="number"
        value={age}
        onChange={(e) => setAge(Number(e.target.value))}
        placeholder="Age"
        required
      />
      <input
        type="text"
        value={maritalStatus}
        onChange={(e) => setMaritalStatus(e.target.value)}
        placeholder="Marital Status"
        required
      />
      <label>
        <input
          type="checkbox"
          checked={isEmployed}
          onChange={(e) => setIsEmployed(e.target.checked)}
        />{" "}
        Employed
      </label>
      <label>
        <input
          type="checkbox"
          checked={isFounder}
          onChange={(e) => setIsFounder(e.target.checked)}
        />{" "}
        Founder
      </label>
      <button type="submit" className="bg-blue-500 text-white p-2 rounded">
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
