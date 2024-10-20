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
    const userData: User = {
      first_name: firstName,
      last_name: lastName,
      username,
      age: Number(age),
      marital_status: maritalStatus,
      is_employed: isEmployed,
      is_founder: isFounder,
    };

    if (editingUser) {
      onUpdateUser(userData);
    } else {
      onAddUser(userData);
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
    <form
      onSubmit={handleSubmit}
      className="mb-4 p-6 border rounded-lg shadow-lg bg-slate-400 max-w-md mx-auto"
    >
      <h2 className="text-xl font-bold text-center text-blue-600 mb-4">
        {editingUser ? "Edit User" : "Add User"}
      </h2>
      <div className="space-y-4">
        <input
          type="text"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          placeholder="First Name"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black "
        />
        <input
          type="text"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          text-black
          placeholder="Last Name"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black "
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black "
        />
        <input
          type="number"
          value={age}
          onChange={(e) => setAge(Number(e.target.value))}
          placeholder="Age"
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black "
        />
        <select
          value={maritalStatus}
          onChange={(e) => setMaritalStatus(e.target.value)}
          required
          className="w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-200 text-black"
        >
          <option value="">Marital Status</option>
          <option value="Unmarried">Unmarried</option>
          <option value="Married">Married</option>
        </select>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isEmployed}
            onChange={(e) => setIsEmployed(e.target.checked)}
            className="mr-2"
          />
          <label className="text-gray-700">Employed</label>
        </div>
        <div className="flex items-center">
          <input
            type="checkbox"
            checked={isFounder}
            onChange={(e) => setIsFounder(e.target.checked)}
            className="mr-2"
          />
          <label className="text-gray-700">Founder</label>
        </div>
      </div>
      <button
        type="submit"
        className="mt-4 w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-200"
      >
        {editingUser ? "Update User" : "Add User"}
      </button>
    </form>
  );
};

export default UserForm;
