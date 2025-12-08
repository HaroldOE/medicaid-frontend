// src/components/patient/medical-history/MedicalHistoryHeader.jsx
export default function MedicalHistoryHeader() {
  return (
    <div className="mb-10">
      <a href="#" className="text-sm text-gray-600 hover:underline mb-4 inline-block">
        Back to Dashboard
      </a>
      <div className="flex justify-between items-start">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
          <p className="text-gray-600 mt-1">Your complete health timeline</p>
        </div>
        <button className="bg-blue-900 hover:bg-blue-800 text-white px-6 py-3 rounded-xl font-medium transition flex items-center gap-2">
          Add Entry
        </button>
      </div>
    </div>
  );
}