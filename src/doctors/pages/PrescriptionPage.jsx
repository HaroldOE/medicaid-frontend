import { useState } from "react";
import PrescriptionsHeader from "../components/PrescriptionHeader";
import PrescriptionTabs from "../components/PrescriptionTab";
import PrescriptionRow from "../components/PrescriptionRow";
import Sidebar from "../components/Sidebar";

const activePrescriptions = [
  {
    patient: "John Doe",
    medication: "Lisinopril",
    dosage: "10mg",
    frequency: "Once daily",
    issued: "2024-01-01",
    expired: "2024-07-01",
  },
  {
    patient: "Sarah Johnson",
    medication: "Metformin",
    dosage: "500mg",
    frequency: "Twice daily",
    issued: "2024-01-05",
    expired: "2024-07-05",
  },
  {
    patient: "Michael Brown",
    medication: "Atorvastatin",
    dosage: "20mg",
    frequency: "Once daily",
    issued: "2024-01-10",
    expired: "2024-07-10",
  },
];

const draftPrescriptions = [
  {
    patient: "Emily Davis",
    medication: "Amlodipine",
    dosage: "5mg",
    frequency: "Once daily",
    issued: "—",
    expired: "—",
  },
  {
    patient: "Robert Wilson",
    medication: "Losartan",
    dosage: "50mg",
    frequency: "Once daily",
    issued: "—",
    expired: "—",
  },
];

export default function PrescriptionsPage() {
  const [activeTab, setActiveTab] = useState("active");
  const data =
    activeTab === "active" ? activePrescriptions : draftPrescriptions;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <PrescriptionsHeader />

        <PrescriptionTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Patient
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Medication
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Dosage
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Frequency
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Issued
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Expired
                </th>
                <th className="text-left py-4 px-6 text-sm font-semibold text-gray-700">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.map((prescription, i) => (
                <PrescriptionRow key={i} prescription={prescription} />
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}
