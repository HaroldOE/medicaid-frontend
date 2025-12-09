import React from 'react';
import { Bell, Trash2 } from 'lucide-react';

export default function NotificationItem({ notification, iconMap }) {
  const Icon = iconMap[notification.icon];

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex gap-5 hover:shadow-md transition-shadow">
      {/* Icon Circle */}
      <div className="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
        <Icon className="w-7 h-7 text-blue-600" />
      </div>

      {/* Content */}
      <div className="flex-1">
        <div className="flex justify-between items-start gap-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900">{notification.title}</h3>
            <p className="text-gray-600 text-sm mt-1 leading-relaxed">{notification.message}</p>
            <p className="text-xs text-gray-400 mt-3">{notification.time}</p>
          </div>

          <div className="flex items-center gap-3 text-sm">
            <button className="text-blue-600 font-medium hover:text-blue-700">
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
}