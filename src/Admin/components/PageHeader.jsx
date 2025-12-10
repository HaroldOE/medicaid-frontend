// PageHeader.jsx  (updated to accept onAddClick)
import React from 'react';

function PageHeader({ onAddClick }) {
  return (
    <div className="flex justify-between items-center mb-6">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Doctor Management</h1>
        <p className="text-sm text-gray-500">Manage and verify healthcare providers</p>
      </div>
      <button
        onClick={onAddClick}
        className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition"
      >
        Add Doctor
      </button>
    </div>
  );
}

export default PageHeader;