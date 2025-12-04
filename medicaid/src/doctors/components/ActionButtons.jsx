// src/components/patient/medical-history/ActionButtons.jsx
export default function ActionButtons() {
  return (
    <div className="mt-12 flex justify-center gap-6">
      <button className="bg-blue-900 hover:bg-blue-800 text-white px-10 py-4 rounded-xl font-medium transition shadow-md">
        Print Records
      </button>
      <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-10 py-4 rounded-xl font-medium transition shadow-md">
        Export PDF
      </button>
    </div>
  );
}
