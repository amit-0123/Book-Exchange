
import { Link } from 'react-router-dom';
import React from "react";

export default function Navbar({ isLoggedIn, onLogout ,searchTerm, setSearchTerm}) {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-indigo-600 text-white shadow-md sticky top-0 z-50">

      <div className="text-xl font-bold">
        <Link to="/">Book Exchange</Link>
      </div>

      
      <div className="flex-grow max-w-md mx-4">
        <input
          type="text"
          placeholder="Search books..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-2 rounded-full border border-gray-300 bg-white text-black shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      
      <div className="flex space-x-4">
        {!isLoggedIn ? (
          <>
           <Link to="/" className="hover:underline">Home</Link>
            <Link to="/register" className="hover:underline">Register</Link>
            <Link to="/login" className="hover:underline">Login</Link>
          </>
        ) : (
          <>
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/profile" className="hover:underline">Profile</Link>
            <button onClick={onLogout} className="hover:underline cursor-pointer">Logout</button>
          </>
        )}
      </div>
    </nav>
  );
}
