// src/components/MedicalHistory/MedicalEntryCard.jsx

export default function MedicalEntryCard({ icon: Icon, title, description, date, color, bg, border }) {
  return (
    <div className={`bg-white rounded-xl shadow-sm border ${border} p-5 flex items-start gap-4 hover:shadow-md transition`}>
      <div className={`p-3 rounded-full ${bg}`}>
        <Icon className={`w-6 h-6 ${color}`} />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 text-sm mt-1">{description}</p>
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
}