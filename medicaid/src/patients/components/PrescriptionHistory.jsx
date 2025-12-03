import { CheckCircle2 } from "lucide-react";

export default function PrescriptionHistory() {
  const history = [
    "Ibuprofen 200mg (Ended 2025-09-30)",
    "Vitamin D (Ended 2025-08-15)",
  ];

  return (
    <div className="mt-10">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Prescription History
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
        {history.map((item, i) => (
          <div
            key={i}
            className="flex items-center gap-3 py-3 border-b border-gray-100 last:border-0"
          >
            <CheckCircle2 className="w-5 h-5 text-green-500" />
            <span className="text-gray-700">{item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
