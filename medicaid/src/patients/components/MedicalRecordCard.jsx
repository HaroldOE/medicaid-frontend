// src/components/medical-history/MedicalRecordCard.jsx
import { Heart, AlertTriangle, FileText } from 'lucide-react';

const iconMap = {
  Condition: <Heart className="w-5 h-5" />,
  Allergy: <AlertTriangle className="w-5 h-5" />,
  Surgery: <FileText className="w-5 h-5" />,
};

const bgMap = {
  Condition: 'bg-pink-50 border-pink-200 text-pink-800',
  Allergy: 'bg-orange-50 border-orange-200 text-orange-800',
  Surgery: 'bg-blue-50 border-blue-200 text-blue-800',
};

export default function MedicalRecordCard({ type, title, description, date }) {
  return (
    <div className={`flex items-start gap-4 p-4 rounded-lg border ${bgMap[type]} bg-opacity-60`}>
      <div className={`p-2 rounded-full ${type === 'Condition' ? 'bg-pink-100' : type === 'Allergy' ? 'bg-orange-100' : 'bg-blue-100'}`}>
        <div className={type === 'Condition' ? 'text-pink-600' : type === 'Allergy' ? 'text-orange-600' : 'text-blue-600'}>
          {iconMap[type]}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <p className="text-sm text-gray-600 mt-1">{description}</p>
      </div>
    </div>
  );
}