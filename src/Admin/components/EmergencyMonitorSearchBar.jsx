// SearchBar.jsx (same as Doctor Management, just reused)
import React from 'react';
import { Search } from 'lucide-react';

function EmergencyMonitorSearchBar() {
  return (
    <div className="mt-8 max-w-2xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <input
          type="text"
          placeholder="Emergency monitoring content goes here..."
          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          readOnly
        />
      </div>
    </div>
  );
}

export default EmergencyMonitorSearchBar;