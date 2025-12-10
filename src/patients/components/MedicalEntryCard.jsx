// src/components/MedicalEntryCard.jsx
import { Heart, AlertTriangle, Activity } from "lucide-react";

const typeConfig = {
  condition: { icon: Heart, color: "text-blue-600", bg: "bg-blue-100" },
  allergy: {
    icon: AlertTriangle,
    color: "text-orange-600",
    bg: "bg-orange-100",
  },
  surgery: { icon: Activity, color: "text-purple-600", bg: "bg-purple-100" },
};

export default function MedicalEntryCard({ entry }) {
  const config = typeConfig[entry.type] || typeConfig.condition;
  const Icon = config.icon;

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex items-start justify-between">
      <div className="flex items-start gap-4">
        <div className={`p-3 rounded-full ${config.bg}`}>
          <Icon size={28} className={config.color} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-900">{entry.title}</h3>
          <p className="text-gray-600 mt-1">{entry.description}</p>
        </div>
      </div>

      <div className="text-right">
        <span className="inline-block bg-gray-100 text-gray-700 text-sm px-4 py-2 rounded-full font-medium">
          {entry.date}
        </span>
      </div>
    </div>
  );
}
