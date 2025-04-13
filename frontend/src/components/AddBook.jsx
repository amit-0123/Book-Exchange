import { useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export default function AddBook({ ownerId }) {
  const [book, setBook] = useState({
    title: '',
    author: '',
    genre: '',
    location: '',
    contact: ''
  });

  const handleChange = (e) => setBook({ ...book, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${API}/books`, { ...book, ownerId });
      alert("Book added!");
      setBook({ title: '', author: '', genre: '', location: '', contact: '' });
    } catch (error) {
      console.error(error);
      alert("Failed to add book");
    }
  };

  return (
    <div className="flex justify-center items-center w-full bg-gray-100">
      <div className="bg-white rounded-lg shadow-md p-6 max-w-[400px] w-full flex flex-col">
        
        <div>
          <h2 className="text-2xl font-bold text-left text-gray-800 mb-4">
            Add a New Book to the Exchange
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div className="relative">
            <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="title"
              value={book.title || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter book title"
            />
          </div>

          <div className="relative">
            <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="author"
              value={book.author || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter author's name"
            />
          </div>

          <div className="relative">
            <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
              Genre <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="genre"
              value={book.genre || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter book genre"
            />
          </div>

          <div className="relative">
            <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
              Location <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="location"
              value={book.location || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter city or location"
            />
          </div>

          <div className="relative">
            <label className="absolute left-3 -top-2 text-sm text-purple-700 bg-white px-1">
              Contact Info <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contact"
              value={book.contact || ''}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter contact information"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-2 rounded-lg transition duration-200"
          >
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
}
