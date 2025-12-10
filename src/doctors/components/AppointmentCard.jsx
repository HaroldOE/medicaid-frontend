import {
  Calendar,
  Clock,
  MapPin,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function AppointmentCard({ apt }) {
  const statusColor =
    apt.status === "Confirmed"
      ? "text-green-600 bg-green-100"
      : "text-yellow-600 bg-yellow-100";

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm mb-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="text-blue-600 font-semibold text-lg">
              {apt.name
                .split(" ")
                .map((n) => n[0])
                .join("")}
            </span>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{apt.name}</h3>
            <p className="text-sm text-gray-600">{apt.type}</p>
          </div>
        </div>
        <span
          className={`px-3 py-1 rounded-full text-xs font-medium ${statusColor}`}
        >
          {apt.status}
        </span>
      </div>

      <div className="grid grid-cols-3 gap-4 text-sm text-gray-600 mb-6">
        <div className="flex items-center gap-2">
          <Calendar className="w-4 h-4" />
          {apt.date}
        </div>
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4" />
          {apt.time}
        </div>
        <div className="flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          Room {apt.room}
        </div>
      </div>

      <div className="flex gap-3">
        <button className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2">
          Edit
        </button>
        <button className="flex-1 border border-gray-300 hover:bg-gray-50 py-2.5 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2">
          Reschedule
        </button>
        <button
          className={`flex-1 py-2.5 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2 ${
            apt.status === "Confirmed"
              ? "border border-red-300 text-red-600 hover:bg-red-50"
              : "border border-gray-300 hover:bg-gray-50"
          }`}
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
