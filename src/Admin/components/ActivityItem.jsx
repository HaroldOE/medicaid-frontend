// ActivityItem.jsx
import React from 'react';

const ActivityItem = ({ text, time }) => {
  return (
    <div className="flex justify-between items-start mb-4 last:mb-0">
      <div className="text-sm text-gray-900">{text}</div>
      <div className="text-sm text-gray-500 whitespace-nowrap ml-4">{time}</div>
    </div>
  );
};

export default ActivityItem;