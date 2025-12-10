// DoctorTable.jsx
import React from 'react';
import { Eye, Pencil, Trash2 } from 'lucide-react';

function DoctorTable({ doctors }) {
  return (
    <table className="w-full border-collapse">
      <thead>
        <tr className="bg-gray-200 text-left text-sm font-medium text-gray-700">
          <th className="p-3">Name</th>
          <th className="p-3">License</th>
          <th className="p-3">Specialty</th>
          <th className="p-3">Patients</th>
          <th className="p-3">Actions</th>
        </tr>
      </thead>
      <tbody>
        {doctors.map((doctor, index) => (
          <tr key={index} className="border-b border-gray-200 text-sm text-gray-900">
            <td className="p-3">{doctor.name}</td>
            <td className="p-3">{doctor.license}</td>
            <td className="p-3">{doctor.specialty}</td>
            <td className="p-3">{doctor.patients}</td>
            <td className="p-3 flex space-x-2">
              <Eye className="w-5 h-5 text-blue-600 cursor-pointer" />
              <Pencil className="w-5 h-5 text-green-600 cursor-pointer" />
              <Trash2 className="w-5 h-5 text-red-600 cursor-pointer" />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default DoctorTable;