// src/components/patient/medical-history/PatientMedicalHistoryPage.jsx
import PatientSidebar from "../components/Sidebar";
import MedicalHistoryHeader from "../components/MedicalHistoryHeader";
import HistoryTimeline from "../components/HistoryTimeline";
import ActionButtons from "../components/ActionButtons";

export default function PatientMedicalHistoryPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <PatientSidebar />

      <main className="flex-1 p-8">
        <MedicalHistoryHeader />
        <HistoryTimeline />
        <ActionButtons />
      </main>
    </div>
  );
}
