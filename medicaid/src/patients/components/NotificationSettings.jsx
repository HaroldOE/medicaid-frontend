import React from 'react';
import { ToggleLeft, ToggleRight } from 'lucide-react';

const settings = [
  { label: 'Prescription Updates', enabled: true },
  { label: 'Appointment Reminders', enabled: true },
  { label: 'Medication Alerts', enabled: false },
  { label: 'Doctor Messages', enabled: true },
];

const NotificationSettings = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Settings</h2>
      
      <div className="space-y-5">
        {settings.map((setting) => (
          <div key={setting.label} className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">{setting.label}</span>
            {setting.enabled ? (
              <ToggleRight className="w-10 h-10 text-blue-600" />
            ) : (
              <ToggleLeft className="w-10 h-10 text-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationSettings;