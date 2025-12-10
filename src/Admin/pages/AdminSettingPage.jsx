import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AdminSettings from '../components/AdminSettings';

const AdminSettingsPage = () => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <AdminSidebar />
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <AdminSettings />
      </div>
    </div>
  );
};

export default AdminSettingsPage;