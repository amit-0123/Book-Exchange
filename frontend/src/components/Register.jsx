import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const API = import.meta.env.VITE_API_URL;

export default function Register() {

    const [form, setForm] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  
    const handleSubmit = async (e) => {
      e.preventDefault();
     try {
      await axios.post(`${API}/users/register`, form);
      alert("Registered successfully");
      navigate('/login');
     } catch (error) {
      console.error(err);
      alert("Registration failed");
     }
      
    };
  

  return (
    <div className="flex justify-center items-center w-full min-h-screen bg-gray-100">
  <div className="bg-white rounded-lg shadow-md p-6 max-w-[400px] w-full flex flex-col">

    <div>
      <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">
        Register your<br /> Book Exchange Account
      </h2>
    </div>

    <form onSubmit={handleSubmit} className="space-y-4">

      <div className="relative">
        <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your name"
        />
      </div>

      <div className="relative">
        <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
          Mobile <span className="text-red-500">*</span>
        </label>
        <input
          type="tel"
          name="mobile"
          value={form.mobile}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter mobile number"
        />
      </div>

      <div className="relative">
        <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter your email"
        />
      </div>

      <div className="relative">
        <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
          Password <span className="text-red-500">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
          placeholder="Enter password"
        />
      </div>

      <div className="relative">
        <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
          Role <span className="text-red-500">*</span>
        </label>
        <select
          name="role"
          value={form.role}
          onChange={handleChange}
          required
          className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        >
          <option value="">Select your role</option>
          <option value="owner">Owner</option>
          <option value="seeker">Seeker</option>
        </select>
      </div>

      <button
        type="submit"
        className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200 cursor-pointer"
      >
        Register
      </button>
    </form>
  </div>
</div>
  )
}
