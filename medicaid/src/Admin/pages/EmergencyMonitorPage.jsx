// App.jsx (or your main layout file)
import React from 'react';
import AdminSidebar from '../components/AdminSidebar'; // Assuming path to your existing Sidebar
import EmergencyMonitor from '../components/EmergencyMonitorPageHeader';

const App = () => {
  return (
    <div className="flex h-screen bg-white">
      <AdminSidebar />
      <EmergencyMonitor />
    </div>
  );
};

export default App;