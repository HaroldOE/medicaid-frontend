// StatsCard.jsx
import React from 'react';

const StatsCard = ({ title, value, change, icon }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow border border-gray-100">
      <div className="text-sm text-gray-500 mb-1">{title}</div>
      <div className="flex items-center text-2xl font-bold text-gray-900 mb-1">
        {value}
        {icon && <span className="ml-2">{icon}</span>}
      </div>
      <div className="text-sm text-green-500">{change}</div>
    </div>
  );
};

export default StatsCard;