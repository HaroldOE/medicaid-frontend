// AlertItem.jsx
import React from 'react';

const AlertItem = ({ color, title, description, time }) => {
  return (
    <div className="flex items-start mb-4 last:mb-0">
      <div className={`w-2 h-2 ${color} rounded-full mt-1.5 mr-3`}></div>
      <div className="flex-1">
        <div className="text-sm font-medium text-gray-900">{title}</div>
        <div className="text-sm text-gray-500">{description}</div>
      </div>
      <div className="text-sm text-gray-500 ml-4 whitespace-nowrap">{time}</div>
    </div>
  );
};

export default AlertItem;