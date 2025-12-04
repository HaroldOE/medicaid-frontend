// src/App.jsx
import PatientSidebar from '../components/PatientSidebar';
import MedicalHistoryPage from '../components/MedicalHistoryPage';

export default function App() {
  return (
    <div className="flex h-screen bg-gray-50">
      <PatientSidebar activeItem="Medical History" /> {/* Pass active prop if needed */}
      <MedicalHistoryPage />
    </div>
  );
}