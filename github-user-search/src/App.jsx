// src/App.jsx
import React, { useState } from "react";
import SearchBar from "./components/SearchBar";
import { fetchUserData } from "./services/githubService";

const App = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = async (searchParams) => {
    setLoading(true);
    setError(null);
    setUsers([]);

    try {
      const data = await fetchUserData(searchParams);
      setUsers(data);
    } catch (error) {
      setError("Unable to fetch users. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">GitHub User Search</h1>
      <SearchBar onSearch={handleSearch} />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <div key={user.id} className="border p-4 rounded shadow">
            <img
              src={user.avatar_url}
              alt={user.login}
              className="w-16 h-16 rounded-full"
            />
            <h2 className="text-xl">{user.login}</h2>
            <p>Location: {user.location || "N/A"}</p>
            <p>Repositories: {user.public_repos}</p>
            <a
              href={user.html_url}
              target="_blank"
              rel="noreferrer"
              className="text-blue-500"
            >
              View Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
