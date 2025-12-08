import React from 'react';
import AdminSidebar from '../components/AdminSidebar'; // Assuming path to your existing Sidebar
import SystemHealth from '../components/SystemHealth';

const App = () => {
  return (
    <div className="flex h-screen bg-white">
      <AdminSidebar />
      <SystemHealth />
    </div>
  );
};

export default App;