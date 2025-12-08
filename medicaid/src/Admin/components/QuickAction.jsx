// QuickAction.jsx
import React from 'react';

const QuickAction = ({ icon, title }) => {
  return (
    <div className="bg-blue-600 text-white p-6 rounded-lg flex flex-col items-center justify-center shadow">
      {icon}
      <div className="text-base font-medium">{title}</div>
    </div>
  );
};

export default QuickAction;