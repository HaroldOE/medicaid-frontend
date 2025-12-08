// App.jsx
import React from 'react';
import AdminSidebar from '../components/AdminSidebar';
import AnalyticDashboard from '../components/AnalyticDashboard';

function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <AdminSidebar activeItem="Analytics" />
      <main className="flex-1 overflow-y-auto">
        <AnalyticDashboard />
      </main>
    </div>
  );
}

export default App;