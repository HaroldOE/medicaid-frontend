// src/App.jsx
import { useState } from "react";
import Sidebar from "../components/PatientSidebar";
import MedicalEntryCard from "../components/MedicalEntryCard";
import AddMedicalEntryForm from "../components/AddMedicalEntryForm";
import { ArrowLeft } from "lucide-react";

const initialEntries = [
  {
    id: 1,
    type: "condition",
    title: "Hypertension Diagnosed",
    description: "Blood pressure consistently elevated",
    date: "2025-10-15",
  },
  {
    id: 2,
    type: "allergy",
    title: "Penicillin Allergy",
    description: "Allergic reaction to antibiotics",
    date: "2025-07-10",
  },
  {
    id: 3,
    type: "surgery",
    title: "Knee Surgery",
    description: "Arthroscopic knee surgery performed",
    date: "2025-03-18",
  },
];

export default function App() {
  const [entries, setEntries] = useState(initialEntries);
  const [showAddForm, setShowAddForm] = useState(false);

  const addEntry = (newEntry) => {
    setEntries((prev) => [newEntry, ...prev]);
    setShowAddForm(false);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem="Medical History" isPatientPortal />

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
          <div className="max-w-5xl mx-auto">
            <a
              href="#"
              className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </a>
            <div className="flex justify-between items-center mt-2">
              <div>
                <h1 className="text-3xl font-bold">Medical History</h1>
                <p className="text-gray-600">Your complete health timeline</p>
              </div>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                + Add Entry
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-5xl mx-auto p-8 space-y-8">
          {/* Add Form */}
          {showAddForm && (
            <AddMedicalEntryForm
              onSave={addEntry}
              onCancel={() => setShowAddForm(false)}
            />
          )}

          {/* Entries List */}
          <section className="space-y-6">
            {entries.map((entry) => (
              <MedicalEntryCard key={entry.id} entry={entry} />
            ))}
          </section>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 pt-8">
            <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
              Print Records
            </button>
            <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition">
              Export PDF
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
