import React, { useState } from 'react';
import { Save } from 'lucide-react';

const PlatformSettings = () => {
  const [platformName, setPlatformName] = useState('HealthCare');
  const [supportEmail, setSupportEmail] = useState('support@MediChain.com');

  const handleSave = () => {
    console.log('Saving platform settings:', { platformName, supportEmail });
    // 这里添加保存逻辑
  };

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="px-6 py-5 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Platform Settings</h3>
        <p className="mt-1 text-sm text-gray-600">Configure general platform settings</p>
      </div>
      
      <div className="p-6">
        <div className="space-y-6">
          {/* Platform Name */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Platform Name
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-300">
              <table className="min-w-full divide-y divide-gray-300">
                <tbody>
                  <tr className="divide-x divide-gray-300">
                    <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-500">
                      HealthCare
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="text"
                        value={platformName}
                        onChange={(e) => setPlatformName(e.target.value)}
                        className="w-full border-0 focus:ring-0 text-sm text-gray-900"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Support Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Support Email
            </label>
            <div className="overflow-hidden rounded-lg border border-gray-300">
              <table className="min-w-full divide-y divide-gray-300">
                <tbody>
                  <tr className="divide-x divide-gray-300">
                    <td className="px-4 py-3 bg-gray-50 text-sm font-medium text-gray-500">
                      support@MediChain.com
                    </td>
                    <td className="px-4 py-3">
                      <input
                        type="email"
                        value={supportEmail}
                        onChange={(e) => setSupportEmail(e.target.value)}
                        className="w-full border-0 focus:ring-0 text-sm text-gray-900"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button
              onClick={handleSave}
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              <Save className="w-4 h-4 mr-2" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlatformSettings;