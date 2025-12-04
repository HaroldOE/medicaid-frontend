// src/components/MedicalHistory/MedicalEntryCard.jsx
import { Heart, AlertTriangle, FileText } from "lucide-react";

const iconMap = {
  condition: Heart,
  allergy: AlertTriangle,
  surgery: FileText,
};

const colorMap = {
  condition: "text-pink-600 bg-pink-100",
  allergy: "text-yellow-600 bg-yellow-100",
  surgery: "text-blue-600 bg-blue-100",
};

export default function MedicalEntryCard({ type, title, description, date }) {
  const Icon = iconMap[type] || Heart;
  const bgColor = colorMap[type] || "text-gray-600 bg-gray-100";

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex gap-4 hover:shadow-md transition">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0 ${bgColor}`}>
        <Icon className="w-6 h-6" />
      </div>
      <div className="flex-1">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="font-semibold text-gray-900">{title}</h3>
            <p className="text-gray-600 mt-1">{description}</p>
          </div>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
      </div>
    </div>
  );
}