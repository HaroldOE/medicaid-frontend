import { useState } from "react";
import ConsultationTabs from "../components/ConsultationTabs";
import ConsultationCard from "../components/ConsultationCard";
import Sidebar from "../components/Sidebar";

const pendingConsultations = [
  {
    name: "John Doe",
    message: "Severe chest pain",
    age: 45,
    urgency: "Urgent",
    timeAgo: "2 hours ago",
  },
  {
    name: "Sarah Johnson",
    message: "Follow-up needed",
    age: 32,
    urgency: "High",
    timeAgo: "4 hours ago",
  },
  {
    name: "Michael Brown",
    message: "Allergic reaction",
    age: 58,
    urgency: "Urgent",
    timeAgo: "1 hour ago",
  },
  {
    name: "Emily Davis",
    message: "Average headache",
    age: 28,
    urgency: "High",
    timeAgo: "3 hours ago",
  },
];

const completedConsultations = [
  {
    name: "Robert Wilson",
    message: "Routine checkup",
    age: 72,
    urgency: "Low",
    timeAgo: "2 days ago",
  },
  {
    name: "Lisa Martinez",
    message: "Prescription refill",
    age: 35,
    urgency: "Low",
    timeAgo: "5 days ago",
  },
];

export default function PatientConsultationsPage() {
  const [activeTab, setActiveTab] = useState("pending");
  const data =
    activeTab === "pending" ? pendingConsultations : completedConsultations;

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Reuse your existing Sidebar */}
      <Sidebar />

      <main className="flex-1 p-8">
        <div className="mb-8">
          <a
            href="#"
            className="text-sm text-gray-600 hover:underline mb-3 inline-block"
          >
            ← Back to Dashboard
          </a>
          <h1 className="text-3xl font-bold text-gray-900">
            Patient Consultations
          </h1>
          <p className="text-gray-600 mt-1">
            Review and respond to patient consultations
          </p>
        </div>

        <ConsultationTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div>
          {data.map((patient, i) => (
            <ConsultationCard key={i} patient={patient} />
          ))}
        </div>
      </main>
    </div>
  );
}
