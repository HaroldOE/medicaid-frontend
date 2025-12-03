import React from 'react';
import { Bell, Trash2 } from 'lucide-react';

const NotificationItem = ({ notification }) => {
  const Icon = notification.icon;

  return (
    <div className={`bg-white rounded-xl shadow-sm border ${notification.unread ? 'border-blue-200' : 'border-gray-200'} p-5 flex gap-4 transition-all hover:shadow-md`}>
      {/* Icon Circle */}
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${notification.unread ? 'bg-blue-100' : 'bg-gray-100'}`}>
        <Icon className={`w-6 h-6 ${notification.unread ? 'text-blue-600' : 'text-gray-500'}`} />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900">{notification.title}</h3>
            <p className="text-sm text-gray-600 mt-1">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-2">{notification.time}</p>
          </div>
          <div className="flex items-center gap-2 ml-4">
            <button className="text-xs text-blue-600 hover:text-blue-800 font-medium">
              Mark Read
            </button>
            <button className="text-gray-400 hover:text-red-600">
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationItem;