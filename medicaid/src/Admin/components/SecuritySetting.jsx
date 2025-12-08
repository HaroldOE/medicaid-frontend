import React, { useState } from 'react';
import { Save, Shield, Lock, FileText } from 'lucide-react';

const SecuritySettings = () => {
  const [settings, setSettings] = useState({
    twoFactorAuth: false,
    requireHTTPS: true,
    auditLogs: true,
  });

  const handleToggle = (setting) => {
    setSettings(prev => ({
      ...prev,
      [setting]: !prev[setting]
    }));
  };

  const handleSave = () => {
    console.log('Saving security settings:', settings);
    // 这里添加保存逻辑
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-5 border-b border-gray-200">
        <div className="flex items-center">
          <Shield className="w-5 h-5 text-gray-500 mr-2" />
          <h3 className="text-lg font-semibold text-gray-900">Security Settings</h3>
        </div>
        <p className="mt-1 text-sm text-gray-600">Manage security and compliance settings</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {/* Two-Factor Authentication */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center mr-4">
                <Lock className="w-5 h-5 text-blue-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Enable Two-Factor Authentication
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Add an extra layer of security to all admin accounts
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('twoFactorAuth')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                settings.twoFactorAuth ? 'bg-blue-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  settings.twoFactorAuth ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Require HTTPS */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center mr-4">
                <Lock className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Require HTTPS
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Enforce secure connections for all admin operations
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('requireHTTPS')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                settings.requireHTTPS ? 'bg-green-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  settings.requireHTTPS ? 'translate-x-5' : 'translate-x-0'
                }`}
              />
            </button>
          </div>

          {/* Enable Audit Logs */}
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="flex-shrink-0 w-10 h-10 bg-purple-50 rounded-lg flex items-center justify-center mr-4">
                <FileText className="w-5 h-5 text-purple-600" />
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-900">
                  Enable Audit Logs
                </h4>
                <p className="text-sm text-gray-500 mt-1">
                  Track and log all administrative activities
                </p>
              </div>
            </div>
            <button
              onClick={() => handleToggle('auditLogs')}
              className={`relative inline-flex h-6 w-11 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
                settings.auditLogs ? 'bg-purple-600' : 'bg-gray-200'
              }`}
            >
              <span
                className={`pointer-events-none inline-block h-5 w-5 transform rounded-full bg-white shadow ring-0 transition duration-200 ease-in-out ${
                  settings.auditLogs ? 'translate-x-5' : 'translate-x-0'
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
              Save Security Settings
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecuritySettings;