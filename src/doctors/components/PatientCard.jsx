import { Edit2, Trash2, Eye } from "lucide-react";

export default function PatientCard({ patient }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm hover:shadow-md transition">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-lg font-semibold text-gray-900">{patient.name}</h3>
        <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
          {patient.age} yrs
        </span>
      </div>

      <div className="space-y-2 text-sm text-gray-600 mb-5">
        <p>
          <strong>Gender:</strong> {patient.gender}
        </p>
        <p>
          <strong>Phone:</strong> {patient.phone}
        </p>
        <p>
          <strong>Email:</strong> {patient.email}
        </p>
        <p>
          <strong>Join:</strong> {patient.joinDate}
        </p>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2">
          <Eye className="w-4 h-4" /> View Details
        </button>
        <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
          <Edit2 className="w-4 h-4 text-gray-600" />
        </button>
        <button className="px-4 py-2 border border-red-300 text-red-600 rounded-lg hover:bg-red-50">
          <Trash2 className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
