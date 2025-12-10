import { Eye, Edit, Trash2 } from "lucide-react";

export default function PrescriptionRow({ prescription }) {
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-50 transition">
      <td className="py-4 px-6 text-sm font-medium text-gray-900">
        {prescription.patient}
      </td>
      <td className="py-4 px-6 text-sm text-gray-700">
        {prescription.medication}
      </td>
      <td className="py-4 px-6 text-sm text-gray-700">{prescription.dosage}</td>
      <td className="py-4 px-6 text-sm text-gray-700">
        {prescription.frequency}
      </td>
      <td className="py-4 px-6 text-sm text-gray-700">{prescription.issued}</td>
      <td className="py-4 px-6 text-sm text-gray-700">
        {prescription.expired}
      </td>
      <td className="py-4 px-6">
        <div className="flex items-center gap-3">
          <button className="text-gray-500 hover:text-blue-600 transition">
            <Eye className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-green-600 transition">
            <Edit className="w-5 h-5" />
          </button>
          <button className="text-gray-500 hover:text-red-600 transition">
            <Trash2 className="w-5 h-5" />
          </button>
        </div>
      </td>
    </tr>
  );
}
