import { Phone, AlertCircle } from 'lucide-react';

export default function EmergencyBanner() {
  return (
    <div className="bg-red-600 text-white rounded-2xl p-8 mb-10 flex items-center justify-between flex-wrap gap-6">
      <div className="flex items-center gap-4">
        <AlertCircle className="w-10 h-10" />
        <div>
          <h3 className="text-2xl font-bold">Need Emergency Care?</h3>
          <p className="text-red-100">Get immediate assistance from our doctors</p>
        </div>
      </div>
      <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-lg flex items-center gap-3 hover:bg-red-50 transition">
        <Phone className="w-5 h-5" />
        Call Now
      </button>
    </div>
  );
}

