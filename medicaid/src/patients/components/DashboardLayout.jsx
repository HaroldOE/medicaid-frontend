// src/components/Layout/DashboardLayout.jsx
import PatientSidebar from './PatientSidebar';

export default function DashboardLayout({ children }) {
  return (
    <div className="flex h-screen bg-gray-50">
      {/* Your existing sidebar */}
      <PatientSidebar />

      {/* Main content – everything you see on the right */}
      <main className="flex-1 ml-64 overflow-y-auto">
        <div className="max-w-5xl mx-auto p-6 lg:p-8">
          {children}
        </div>
      </main>
    </div>
  );
}