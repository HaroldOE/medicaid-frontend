// App.jsx
// Assuming Sidebar is already built and exported from Sidebar.jsx
// To connect the Sidebar, use a flex layout in your main App component as follows:

import React from 'react';
import AdminSidebar from '../components/AdminSidebar'; // Adjust path as needed
import DoctorManagement from '../components/DoctorManagement'; // Adjust path as needed

function App() {
  return (
    <div className="flex h-screen">
      <AdminSidebar activeItem="Doctor Management" /> {/* Pass activeItem prop if your Sidebar component supports it */}
      <main className="flex-1 bg-white p-6 overflow-auto">
        <DoctorManagement />
      </main>
    </div>
  );
}

export default App;