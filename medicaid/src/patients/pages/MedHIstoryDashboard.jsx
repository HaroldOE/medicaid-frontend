// src/pages/Dashboard.jsx or wherever your main layout is
import PatientSidebar from '../components/sidebar/PatientSidebar';
import MedicalHistory from '../components/MedicalHistory';

export default function Dashboard() {
  return (
    <div className="flex">
      <PatientSidebar />  {/* Your existing sidebar */}
      
      <main className="flex-1 ml-64">  {/* Adjust ml based on sidebar width */}
        <MedicalHistory />
      </main>
    </div>
  );
}