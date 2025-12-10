import React, { useState } from 'react';
import { Save, Bell, Mail, FileText } from 'lucide-react';

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    emailAlerts: true,
    weeklyReports: false,
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSave = () => {
    console.log('Saving notification settings:', settings);
    // 这里添加保存逻辑
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center">
          <Bell className="w-5 h-5 text-gray-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Notification Settings</h3>
        </div>
        <p className="mt-1 text-sm text-gray-600">Configure system notifications</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {/* Email Alerts */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-red-50 rounded-lg flex items-center justify-center mr-4">
                <Mail className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Email alerts for critical issues
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Receive immediate notifications for system errors
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('emailAlerts')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                settings.emailAlerts ? 'bg-red-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  settings.emailAlerts ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Weekly Reports */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-orange-50 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Weekly system reports
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Get comprehensive weekly performance reports
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('weeklyReports')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                settings.weeklyReports ? 'bg-orange-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  settings.weeklyReports ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Save Button */}
          <div className="flex justify-end pt-4 border-t border-gray-200">
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Notifications
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationSettings;