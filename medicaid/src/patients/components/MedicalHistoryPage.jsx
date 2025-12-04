// src/components/MedicalHistoryPage.jsx
import MedicalHistoryCard from './MedicalHistoryCard';
import { Plus, Printer, Download } from 'lucide-react';

export default function MedicalHistoryPage() {
  const entries = [
    {
      title: "Hypertension Diagnosed",
      subtitle: "Condition\nBlood pressure consistently elevated",
      date: "2025-10-15"
    },
    {
      title: "Penicillin Allergy",
      subtitle: "Allergy\nAllergic reaction to antibiotics",
      date: "2025-10-15"
    },
    {
      title: "Knee Surgery",
      subtitle: "Surgery\nArthroscopic knee surgery performed",
      date: "2025-10-15"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* We'll render Sidebar here or pass as prop — see App.jsx */}

      {/* Main Content */}
      <div className="flex-1 ml-64"> {/* ml-64 = width of your sidebar */}
        <div className="max-w-4xl mx-auto py-10 px-6">
          {/* Header */}
          <div className="flex justify-between items-center mb-8">
            <div>
              <button className="text-sm text-gray-500 hover:text-gray-700 mb-4">
                ← Back to Dashboard
              </button>
              <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
              <p className="text-gray-600 mt-2">Your complete health timeline</p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-lg flex items-center gap-2 font-medium">
              <Plus className="w-5 h-5" />
              Add Entry
            </button>
          </div>

          {/* Timeline Cards */}
          <div className="space-y-6">
            {entries.map((entry, index) => (
              <MedicalHistoryCard
                key={index}
                title={entry.title}
                subtitle={entry.subtitle}
                date={entry.date}
              />
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex justify-center gap-4 mt-12">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg flex items-center gap-3 font-medium">
              <Printer className="w-5 h-5" />
              Print Records
            </button>
            <button className="bg-gray-100 hover:bg-gray-200 text-gray-700 px-8 py-3 rounded-lg flex items-center gap-3 font-medium">
              <Download className="w-5 h-5" />
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}