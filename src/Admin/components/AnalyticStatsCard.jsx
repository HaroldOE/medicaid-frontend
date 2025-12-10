// StatsCards.jsx
import React from 'react';
import { ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  { title: "New User This Week", value: "1,234", change: "+12%", positive: true },
  { title: "Consultation Completed", value: "8,567", change: "+8%", positive: true },
  { title: "Prescriptions Issued", value: "4,321", change: "+15%", positive: true },
  { title: "Emergency Cases", value: "156", change: "-8%", positive: false },
];

function AnalyticStatsCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
      {stats.map((stat) => (
        <div key={stat.title} className="bg-white rounded-xl shadow-sm p-6 border border-gray-100">
          <p className="text-sm text-gray-600">{stat.title}</p>
          <div className="flex items-end justify-between mt-3">
            <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
            <div className={`flex items-center text-sm font-medium ${stat.positive ? 'text-green-600' : 'text-red-600'}`}>
              {stat.positive ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
              <span className="ml-1">{stat.change} from last week</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default AnalyticStatsCards;