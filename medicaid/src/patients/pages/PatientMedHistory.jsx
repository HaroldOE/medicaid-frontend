// src/components/medical-history/MedicalHistoryPage.jsx
import { Plus, ArrowLeft } from 'lucide-react';
import TimelineEntry from '../components/TimeLineEntry';
import ActionButtons from '../components/ActionButtons';
import Sidebar from '../components/PatientSidebar';  // Adjust path as needed

export default function PatientMedHistory() {
  const entries = [
    {
      title: "Hypertension Diagnosed",
      subtitle: "Blood pressure consistently elevated",
      date: "2025-10-15",
      condition: true
    },
    {
      title: "Penicillin Allergy",
      subtitle: "Allergic reaction to antibiotics",
      date: "2025-10-15",
      condition: false
    },
    {
      title: "Knee Surgery",
      subtitle: "Arthroscopic knee surgery performed",
      date: "2025-10-15",
      condition: false
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Your existing Sidebar – just import and use */}
      <Sidebar currentPage="Medical History" />

      {/* Main Content */}
      <div className="flex-1 p-6 lg:p-10">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-8">
            <button className="text-sm text-gray-600 hover:text-gray-900 flex items-center mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Dashboard
            </button>

            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
                <p className="text-gray-600 mt-2">Your complete health timeline</p>
              </div>
              <button className="bg-blue-600 text-white px-5 py-3 rounded-lg flex items-center gap-2 hover:bg-blue-700 transition">
                <Plus className="w-5 h-5" />
                Add Entry
              </button>
            </div>
          </div>

          {/* Timeline */}
          <div className="mt-10">
            {entries.map((entry, index) => (
              <TimelineEntry
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                date={entry.date}
                condition={entry.condition}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <ActionButtons />
        </div>
      </div>
    </div>
  );
}