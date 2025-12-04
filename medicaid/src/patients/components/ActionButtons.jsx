// src/components/medical-history/ActionButtons.jsx
export default function ActionButtons() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 mt-10">
      <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition">
        Print Records
      </button>
      <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-lg font-medium hover:bg-gray-200 transition">
        Export PDF
      </button>
    </div>
  );
}