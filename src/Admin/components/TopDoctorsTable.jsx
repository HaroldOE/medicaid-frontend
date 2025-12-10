// TopDoctorsTable.jsx
import React from 'react';

const topDoctors = [
  { name: "Dr. Sarah Wilson", specialty: "Cardiology", consultations: 234, rating: 4.9 },
  { name: "Dr. Michael Chen", specialty: "Pediatrics", consultations: 198, rating: 4.8 },
  { name: "Dr. Emily Davis", specialty: "Dermatology", consultations: 187, rating: 4.9 },
  { name: "Dr. James Brown", specialty: "Orthopedics", consultations: 176, rating: 4.7 },
];

function StarRating({ rating }) {
  return (
    <div className="flex items-center">
      <span className="text-sm font-medium text-gray-700 mr-2">{rating}</span>
      {[...Array(5)].map((_, i) => (
        <span key={i} className={`text-yellow-400 ${i < Math.floor(rating) ? 'fill-current' : ''}`}>
          ★
        </span>
      ))}
    </div>
  );
}

function TopDoctorsTable() {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6 border-b border-gray-200">
        <h3 className="text-lg font-semibold text-gray-900">Top Performing Doctors</h3>
      </div>

      <table className="w-full">
        <thead className="bg-gray-100 text-xs font-medium text-gray-600 uppercase tracking-wider">
          <tr>
            <th className="px-6 py-3 text-left">Doctor</th>
            <th className="px-6 py-3 text-left">Specialty</th>
            <th className="px-6 py-3 text-left">Consultations</th>
            <th className="px-6 py-3 text-left">Rating</th>
          </tr>
        </thead>
        <tbody className="text-sm text-gray-900">
          {topDoctors.map((doc) => (
            <tr key={doc.name} className="border-b border-gray-100 hover:bg-gray-50">
              <td className="px-6 py-4 font-medium">{doc.name}</td>
              <td className="px-6 py-4 text-gray-600">{doc.specialty}</td>
              <td className="px-6 py-4">{doc.consultations}</td>
              <td className="px-6 py-4">
                <StarRating rating={doc.rating} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TopDoctorsTable;