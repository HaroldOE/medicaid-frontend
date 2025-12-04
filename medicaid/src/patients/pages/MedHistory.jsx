// src/components/MedicalHistory/MedicalHistory.jsx
import { useState } from "react";
import { ArrowLeft, Plus, Printer, Download, Calendar, AlertTriangle, Heart, FileText } from "lucide-react";
import PatientSidebar from "../components/PatientSidebar"; // ← your existing sidebar
import AddMedicalEntry from "../components/AddMedicalEntry";
import MedicalEntryCard from "../components/MedicalEntryCard";

const entries = [
  {
    type: "condition",
    title: "Hypertension Diagnosed",
    description: "Blood pressure consistently elevated",
    date: "2025-10-15",
    icon: Heart,
    color: "text-red-600",
    bg: "bg-red-50",
    border: "border-red-200",
  },
  {
    type: "allergy",
    title: "Penicillin Allergy",
    description: "Allergic reaction to antibiotics",
    date: "2025-10-15",
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-50",
    border: "border-orange-200",
  },
  {
    type: "surgery",
    title: "Knee Surgery",
    description: "Arthroscopic knee surgery performed",
    date: "2025-10-15",
    icon: FileText,
    color: "text-blue-600",
    bg: "bg-blue-50",
    border: "border-blue-200",
  },
];

export default function MedicalHistory() {
  const [showAddForm, setShowAddForm] = useState(false);

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Your existing Sidebar */}
      <PatientSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64"> {/* ml-64 matches typical sidebar width */}
        <div className="p-8 max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button className="text-blue-600 text-sm flex items-center gap-2 hover:underline">
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>
            <div className="flex justify-between items-center mt-4">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
                <p className="text-gray-600 mt-1">Your complete health timeline</p>
              </div>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition"
              >
                <Plus className="w-5 h-5" />
                Add Entry
              </button>
            </div>
          </div>

          {/* Add Form */}
          {showAddForm && <AddMedicalEntry onClose={() => setShowAddForm(false)} />}

          {/* Timeline Entries */}
          <div className="space-y-6 mt-8">
            {entries.map((entry, index) => (
              <MedicalEntryCard key={index} {...entry} />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex gap-4 mt-10">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700">
              <Printer className="w-5 h-5" />
              Print Records
            </button>
            <button className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg flex items-center gap-2 hover:bg-gray-300">
              <Download className="w-5 h-5" />
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}