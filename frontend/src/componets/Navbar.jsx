import React, { useState } from 'react'; // Import useState from React
import SearchBar from './SearchBar/SearchBar';
import ProfileInfo from './Cards/ProfileInfo';

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState(""); // Initialize searchQuery state

  const handleSearch = () => {
    // Handle the search logic here
    console.log("Search Query:", searchQuery);
  };

  const onClearSearch = () => {
    setSearchQuery(""); // Clear the search input
  };

  return (
    <div className="bg-white flex items-center justify-between px-6 py-2 drop-shadow">
      <h2 className="text-xl font-medium text-black py-2">
        <span className="text-slate-500">Good</span>
        <span className="text-slate-900">Notes</span>
      </h2>

      <SearchBar
        value={searchQuery}
        onChange={({ target }) => setSearchQuery(target.value)} // Update the state on input change
        handleSearch={handleSearch} // Pass handleSearch function
        onClearSearch={onClearSearch} // Pass onClearSearch function
      />

      <ProfileInfo />
    </div>
  );
};

export default Navbar;
