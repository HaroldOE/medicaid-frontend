// src/components/patient/PatientPrescriptionsPage.jsx
import PatientSidebar from "../components/PatientSidebar";
import PrescriptionHeader from "../components/PrescriptionHeader";
import PrescriptionCard from "../components/PrescriptionCard";
import PrescriptionHistory from "../components/PrescriptionHistory";

const prescriptions = [
  {
    name: "Aspirin",
    dosage: "100mg - Once daily",
    refills: 3,
    nextRefill: "2025-12-15",
    status: "Active",
    action: "request",
  },
  {
    name: "Lisinopril",
    dosage: "10mg - Twice daily",
    refills: 0,
    nextRefill: "Now",
    status: "Refill Now",
    statusText: "Due",
    action: "refill",
  },
  {
    name: "Metformin",
    dosage: "500mg - Three times daily",
    refills: 5,
    nextRefill: "2025-11-30",
    status: "Active",
    action: "request",
  },
];

export default function PatientPrescriptionsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <PatientSidebar />

      <main className="flex-1 p-8">
        <PrescriptionHeader />

        <div className="space-y-6">
          {prescriptions.map((med, i) => (
            <PrescriptionCard key={i} med={med} />
          ))}
        </div>

        <PrescriptionHistory />
      </main>
    </div>
  );
}
