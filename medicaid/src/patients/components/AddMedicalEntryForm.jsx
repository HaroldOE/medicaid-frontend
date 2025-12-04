// src/components/MedicalHistory/AddMedicalEntryForm.jsx
import { Calendar } from "lucide-react";

export default function AddMedicalEntryForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-8">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Add Medical Entry</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Entry Type */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Entry Type
          </label>
          <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500">
            <option>Condition</option>
            <option>Allergy</option>
            <option>Surgery</option>
            <option>Medication</option>
            <option>Vaccination</option>
          </select>
        </div>

        {/* Title */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            placeholder="Enter title"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Details */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Details</label>
        <textarea
          rows={4}
          placeholder="Describe in details..."
          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
      </div>

      {/* Date */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">Date</label>
        <div className="relative">
          <input
            type="text"
            placeholder="mm/dd/yy"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
          <Calendar className="absolute left-4 top-3.5 w-5 h-5 text-gray-400" />
        </div>
      </div>

      {/* Submit */}
      <div className="mt-8">
        <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition">
          Add Records
        </button>
      </div>
    </div>
  );
}