import React, { useEffect, useState } from "react";

const SearchFilter = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  // Function to fetch data from API
  const getData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setFilteredUsers(json); // Initialize filteredUsers with all users
      });
  };

  // Fetch data on component mount
  useEffect(() => {
    getData();
  }, []);

  // Effect to filter users based on searchQuery
  useEffect(() => {
    if (searchQuery.trim() === "") {
      // If searchQuery is empty, show all users
      setFilteredUsers(users);
    } else {
      // Filter users based on searchQuery
      const lowercasedQuery = searchQuery.toLowerCase();
      const filteredData = users.filter((user) => {
        return (
          user.name.toLowerCase().includes(lowercasedQuery) ||
          user.username.toLowerCase().includes(lowercasedQuery)
        );
      });
      setFilteredUsers(filteredData);
    }
  }, [searchQuery, users]);

  return (
    <div className="min-h-screen bg-slate-900 flex flex-col justify-center items-center">
      <input
        onChange={(e) => setSearchQuery(e.target.value)}
        type="text"
        placeholder="Search Users"
        className="p-2 rounded-lg"
      />
      <div className="flex flex-wrap justify-center items-center p-4 text-gray-300">
        {filteredUsers.map((user) => (
          <div key={user.id} className="px-4 py-4">
            <h2>{`Name: ${user.name}`}</h2>
            <p className="font-bold underline">{`Username: ${user.username}`}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SearchFilter;
