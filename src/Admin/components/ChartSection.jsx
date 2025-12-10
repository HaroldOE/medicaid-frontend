// ChartsSection.jsx
import React from 'react';
import { Users, BarChart3 } from 'lucide-react';

function ChartsSection() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
      {/* User Growth */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">User Growth</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center flex-col text-gray-400">
          <Users className="w-16 h-16 mb-3" />
          <p className="text-sm">User growth chart visualization</p>
          <p className="text-xs">(Chart component would go here)</p>
        </div>
      </div>

      {/* Consultation Trends */}
      <div className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Consultation Trends</h3>
        <div className="h-64 bg-gray-100 rounded-lg flex items-center justify-center flex-col text-gray-400">
          <BarChart3 className="w-16 h-16 mb-3" />
          <p className="text-sm">Consultation trends visualization</p>
          <p className="text-xs">(Chart component would go here)</p>
        </div>
      </div>
    </div>
  );
}

export default ChartsSection;