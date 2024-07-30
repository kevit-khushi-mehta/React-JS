import React, { useState, useEffect } from "react";
import UserList from "./components/UserList";
import SearchBar from "./components/SearchBar";
import Loader from "./components/Loader";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isSearching, setIsSearching] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())

      .then((data) => {
        setUsers(data);

        setFilteredUsers(data);

        setLoading(false);
      });
  }, []);

  const handleSearch = (query) => {
    setIsSearching(true);
    setQuery(query)

    setTimeout(() => {
      setFilteredUsers(
        users.filter((user) =>
          user.name.toLowerCase().includes(query.toLowerCase())
        )
      );

      setIsSearching(false);
    }, 3000);
  };

  return (
    <div className="app">
      <h1>User Search</h1>

      <SearchBar query={query} onSearch={handleSearch} />

      {loading || isSearching ? <Loader /> : <UserList users={filteredUsers} />}
    </div>
  );
};

export default App;
