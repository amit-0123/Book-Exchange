import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import AddBook from './AddBook'; 

export default function Profile() {
  const navigate = useNavigate();
  const [showAddForm, setShowAddForm] = useState(false); 

  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!user) {
      navigate('/login');
    }
  }, []);

  if (!user) return null;

  return (
    <div className="flex justify-center bg-gray-100 min-h-screen p-4 ">
      <div className="bg-white p-4 rounded-lg shadow-md w-full max-w-md">

        <h1 className="text-2xl font-semibold text-center mb-2">Hi</h1>
        <h2 className="text-lg text-center">
          Welcome <span className="font-bold">{user.name}</span> ({user.role})
        </h2>

        {user.role === 'owner' && (
          <>
            <div className="flex justify-center mb-2">
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-purple-600 text-white px-4 py-2 rounded-md hover:bg-purple-700 transition cursor-pointer"
              >
                {showAddForm ? 'Close Add Book' : 'Add Book'}
              </button>
            </div>

            {showAddForm && (
             <div >
             <AddBook ownerId={user._id} />
           </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
