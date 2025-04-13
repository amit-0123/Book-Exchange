import { useEffect, useState } from 'react';
import axios from 'axios';

const API = import.meta.env.VITE_API_URL;

export default function BookList({ searchTerm }) {
  const [books, setBooks] = useState([]);
  

  useEffect(() => {
    axios.get(`${API}/books`).then(res => setBooks(res.data));
  }, []);

  const toggleStatus = async (id) => {
    // await axios.patch(`${API}/books/${id}/status`);
    const updated = books.map(b =>
      b._id === id ? { ...b, status: b.status === 'available' ? 'rented' : 'available' } : b
    );
    setBooks(updated);
  };

  const filteredBooks = books.filter((b) => {
    const query = searchTerm.toLowerCase();
    return (
      b.title.toLowerCase().includes(query) ||
      b.author.toLowerCase().includes(query) ||
      b.location.toLowerCase().includes(query)
    );
  });

  return (
    <div className="p-4">
      <h3 className="text-2xl font-semibold mb-4 text-center">Books</h3>


      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredBooks.map(b => (
          <div
            key={b._id}
            className="bg-white shadow-lg rounded-lg p-4 border border-gray-200 flex flex-col justify-between"
          >
            <div>
              <h4 className="text-xl font-bold mb-1">📖{b.title}</h4>
              <p className="text-gray-600 mb-1">by {b.author}</p>
              <p className="text-gray-700 mb-1">📍 {b.location}</p>
              <p className="text-gray-700 mb-1">👤 Owner: {b.ownerId?.name}</p>
              <p className={`mb-2 font-semibold ${b.status === 'available' ? 'text-green-600' : 'text-red-500'}`}>
                Status: {b.status}
              </p>
            </div>

            <button
              onClick={() => toggleStatus(b._id)}
              className="mt-2 bg-indigo-600 text-white py-1 px-3 rounded hover:bg-indigo-700 transition cursor-pointer"
            >
              {b.status ==="available"?"Rent Now":"Occupied"}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
