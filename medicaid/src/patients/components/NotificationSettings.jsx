import React from 'react';
import { ToggleLeft, ToggleRight } from 'lucide-react';

const settings = [
  { label: 'Prescription Updates', enabled: true },
  { label: 'Appointment Reminders', enabled: true },
  { label: 'Medication Alerts', enabled: false },
  { label: 'Doctor Messages', enabled: true },
];

export default function NotificationSettings() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-bold text-gray-900 mb-6">Notification Settings</h2>

      <div className="space-y-6">
        {settings.map((item) => (
          <div key={item.label} className="flex items-center justify-between">
            <span className="text-gray-700 font-medium">{item.label}</span>
            {item.enabled ? (
              <ToggleRight className="w-11 h-11 text-blue-600" />
            ) : (
              <ToggleLeft className="w-11 h-11 text-gray-300" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}