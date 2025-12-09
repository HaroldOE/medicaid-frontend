// SearchBar.jsx
import React from 'react';

function SearchBar() {
  return (
    <input
      type="text"
      placeholder="Search doctors..."
      className="w-full p-3 mb-6 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
    />
  );
}

export default SearchBar;