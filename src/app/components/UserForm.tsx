// components/UserForm.tsx

import React, { useState } from "react";

interface UserFormProps {
  onAddUser: (user: {
    first_name: string;
    last_name: string;
    username: string;
    age: number;
    marital_status: string;
    is_employed: boolean;
    is_founder: boolean;
  }) => void;
}

const UserForm: React.FC<UserFormProps> = ({ onAddUser }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [age, setAge] = useState(0);
  const [marital_status, setMaritalStatus] = useState("");
  const [is_employed, setIsEmployed] = useState(false);
  const [is_founder, setIsFounder] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onAddUser({
      first_name: firstName,
      last_name: lastName,
      username,
      age,
      marital_status,
      is_employed,
      is_founder,
    });
    setFirstName("");
    setLastName("");
    setUsername("");
    setAge(0);
    setMaritalStatus("");
    setIsEmployed(false);
    setIsFounder(false);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <div className="flex flex-col space-y-3 text-black">
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="text"
          placeholder="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
          className="p-2 border rounded"
        />
        <input
          type="number"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(parseInt(e.target.value))}
          required
          className="p-2 border rounded"
        />
        <select
          value={marital_status}
          onChange={(e) => setMaritalStatus(e.target.value)}
          required
          className="p-2 border rounded"
        >
          <option value="">Select Marital Status</option>
          <option value="single">Single</option>
          <option value="married">Married</option>
          <option value="divorced">Divorced</option>
        </select>

        <div className="flex space-x-2 items-center">
          <input
            type="checkbox"
            checked={is_employed}
            onChange={(e) => setIsEmployed(e.target.checked)}
            className="p-2 border rounded"
          />
          <label>Employed</label>
        </div>
        <div className="flex space-x-2 items-center">
          <input
            type="checkbox"
            checked={is_founder}
            onChange={(e) => setIsFounder(e.target.checked)}
            className="p-2 border rounded"
          />
          <label>Founder</label>
        </div>
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Add User
        </button>
      </div>
    </form>
  );
};

export default UserForm;
