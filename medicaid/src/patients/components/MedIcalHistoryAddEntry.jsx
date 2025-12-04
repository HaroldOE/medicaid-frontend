// src/components/medical-history/MedicalHistory.jsx
import { useState } from 'react';
import { Plus, Printer, Download } from 'lucide-react';
import MedicalRecordCard from '..components/MedicalRecordCard';
import MedicalEntryForm from '../components/MedicalEntryForm';

const initialRecords = [
  { type: 'Condition', title: 'Hypertension Diagnosed', description: 'Blood pressure consistently elevated', date: '2025-10-15' },
  { type: 'Allergy', title: 'Penicillin Allergy', description: 'Allergic reaction to antibiotics', date: '2025-10-15' },
  { type: 'Surgery', title: 'Knee Surgery', description: 'Arthroscopic knee surgery performed', date: '2025-10-15' },
];

export default function MedicalHistory() {
  const [records, setRecords] = useState(initialRecords);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleAddRecord = (newRecord) => {
    setRecords([newRecord, ...records]);
  };

  return (
    <>
      <div className="min-h-screen bg-gray-50">
        {/* Header */}
        <div className="bg-white border-b">
          <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
            <div>
              <button className="text-sm text-blue-600 hover:underline">&larr; Back to Dashboard</button>
              <h1 className="text-2xl font-bold text-gray-900 mt-1">Medical History</h1>
              <p className="text-sm text-gray-500">Your complete health timeline</p>
            </div>
            <button
              onClick={() => setIsFormOpen(true)}
              className="flex items-center gap-2 px-5 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium"
            >
              <Plus className="w-5 h-5" />
              Add Entry
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="bg-white rounded-xl shadow-sm border">
            <div className="p-8 space-y-6">
              {records.length === 0 ? (
                <div className="text-center py-12 text-gray-500">
                  No medical records yet. Click "Add Entry" to start.
                </div>
              ) : (
                records.map((record, i) => (
                  <MedicalRecordCard key={i} {...record} />
                ))
              )}
            </div>

            <div className="border-t px-8 py-5 flex justify-between items-center">
              <button className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
                <Printer className="w-5 h-5" />
                Print Records
              </button>
              <button className="flex items-center gap-2 px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50">
                <Download className="w-5 h-5" />
                Export PDF
              </button>
            </div>
          </div>
        </div>
      </div>

      <MedicalEntryForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        onAdd={handleAddRecord}
      />
    </>
  );
}