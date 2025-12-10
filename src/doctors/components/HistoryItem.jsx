// src/components/patient/medical-history/HistoryItem.jsx
export default function HistoryItem({ title, type, description, date }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex justify-between items-start">
      <div>
        <h3 className="text-xl font-bold text-gray-900">{title}</h3>
        <p className="text-sm text-gray-600 font-medium">{type}</p>
        <p className="text-gray-600 mt-2">{description}</p>
      </div>
      <div className="text-right">
        <p className="text-sm text-gray-500">{date}</p>
      </div>
    </div>
  );
}
