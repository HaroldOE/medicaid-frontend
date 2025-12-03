import { FileText, Clock } from "lucide-react";

export default function ConsultationCard({ patient }) {
  const urgencyColor = {
    Urgent: "bg-red-100 text-red-700",
    High: "bg-orange-100 text-orange-700",
  };

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900">
            {patient.name}
          </h3>
          <p className="text-sm text-gray-600">{patient.message}</p>
          <p className="text-xs text-gray-500 mt-1">Age: {patient.age} years</p>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${
            urgencyColor[patient.urgency] || "bg-gray-100 text-gray-700"
          }`}
        >
          {patient.urgency}
        </span>
      </div>

      <div className="flex items-center justify-between text-sm">
        <div className="flex items-center gap-4 text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {patient.timeAgo}
          </span>
        </div>

        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition">
            Respond
          </button>
          <button className="border border-gray-300 hover:bg-gray-50 px-5 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition">
            <FileText className="w-4 h-4" />
            View Files
          </button>
        </div>
      </div>
    </div>
  );
}
