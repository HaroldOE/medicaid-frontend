import { AlertCircle } from 'lucide-react';

export default function PendingAlert() {
  return (
    <div className="bg-orange-50 border border-orange-200 rounded-lg p-6 flex items-center justify-between mb-8">
      <div className="flex items-center gap-4">
        <AlertCircle className="w-12 h-12 text-orange-500" />
        <div>
          <p className="font-semibold text-orange-800">12 Pending Consultations</p>
          <p className="text-sm text-orange-600">Patients waiting for your response</p>
        </div>
      </div>
      <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg transition">
        View All
      </button>
    </div>
  );
}