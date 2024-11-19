import React, { useState } from 'react';
import axios from 'axios';

const AddUserForm = () => {
  const [Email, setEmail] = useState('');
  const [email, setemail] = useState('');
  const [password, setPassword] = useState('');
  const [authLevel, setAuthLevel] = useState(0);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:9000/api/users', { Email, email, password, authLevel });
      setMessage(response.data.message);
    } catch (error) {
      setMessage('Error adding user');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 bg-white shadow-md rounded-md">
      <h1 className="text-xl font-bold mb-4">Add New User</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email:</label>
          <input
            type="email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setemail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2">Auth Level:</label>
          <select
            value={authLevel}
            onChange={(e) => setAuthLevel(Number(e.target.value))}
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            required
          >
            <option value={0}>L0</option>
            <option value={1}>L1</option>
            <option value={2}>L2</option>
            <option value={3}>L3</option>
            <option value={4}>L4</option>
          </select>
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
        >
          Add User
        </button>
      </form>
      {message && <p className="mt-4 text-center text-sm">{message}</p>}
    </div>
  );
};

export default AddUserForm;
