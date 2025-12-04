// src/components/medical-history/TimelineEntry.jsx
import { Calendar } from 'lucide-react';

export default function TimelineEntry({ title, subtitle, date, condition }) {
  return (
    <div className="relative pl-10 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-200 -z-10"></div>
      
      {/* Timeline dot */}
      <div className="absolute left-0 top-6 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
        <div className="w-4 h-4 bg-white rounded-full"></div>
      </div>

      {/* Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 ml-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">
              {title} {condition && <span className="text-sm font-normal text-gray-600">Condition</span>}
            </h3>
            <p className="text-gray-600 mt-1">{subtitle}</p>
            {condition && <span className="inline-block mt-2 px-3 py-1 bg-red-100 text-red-700 text-xs font-medium rounded-full">Allergic reaction to antibiotics</span>}
          </div>
          <div className="flex items-center text-sm text-gray-500">
            <Calendar className="w-4 h-4 mr-1" />
            {date}
          </div>
        </div>
      </div>
    </div>
  );
}