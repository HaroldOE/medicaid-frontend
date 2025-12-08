import React from 'react';
import PlatformSettings from '../components/PlatformSettings';  // 改为 ./
import SecuritySettings from '../components/SecuritySetting';  
import NotificationSettings from '../components/NotificationSetting';  // 改为 ./

const AdminSettings = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">HealthCare</h1>
              <p className="mt-1 text-sm text-gray-600">Admin Portal</p>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">A</span>
                </div>
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Administrator</p>
                  <p className="text-xs text-gray-500">Super Admin</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[
            { title: 'Total Users', value: '2,847', change: '+12%', color: 'bg-blue-500' },
            { title: 'Active Doctors', value: '156', change: '+5%', color: 'bg-green-500' },
            { title: 'System Uptime', value: '99.8%', change: '+0.2%', color: 'bg-purple-500' },
          ].map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <div className={`w-4 h-12 ${stat.color} rounded mr-4`}></div>
                <div>
                  <p className="text-sm text-gray-600">{stat.title}</p>
                  <div className="flex items-baseline">
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                    <span className="ml-2 text-sm text-green-600">{stat.change}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Settings Sections */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            <PlatformSettings />
            <SecuritySettings />
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            <NotificationSettings />
            
            {/* Quick Actions */}
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                {[
                  { label: 'View System Logs', icon: '📋' },
                  { label: 'Backup Database', icon: '💾' },
                  { label: 'Clear Cache', icon: '🗑️' },
                  { label: 'Generate Reports', icon: '📊' },
                ].map((action, index) => (
                  <button
                    key={index}
                    className="w-full flex items-center justify-between p-3 text-left text-sm text-gray-700 hover:bg-gray-50 rounded-lg transition-colors"
                  >
                    <div className="flex items-center">
                      <span className="mr-3">{action.icon}</span>
                      {action.label}
                    </div>
                    <span>→</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminSettings;