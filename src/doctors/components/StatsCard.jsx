import { Users, MessageCircle, Calendar, FileText } from "lucide-react";

const stats = [
  {
    title: "Total Patient",
    value: "248",
    Icon: Users,
    color: "bg-blue-600",
    bg: "bg-blue-50",
  },
  {
    title: "Pending Consultation",
    value: "12",
    Icon: MessageCircle,
    color: "bg-orange-500",
    bg: "bg-orange-50",
  },
  {
    title: "Today's Appointments",
    value: "8",
    Icon: Calendar,
    color: "bg-green-500",
    bg: "bg-green-50",
  },
  {
    title: "Prescription Issued",
    value: "256",
    Icon: FileText,
    color: "bg-purple-600",
    bg: "bg-purple-50",
  },
];

export default function StatsCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {stats.map((stat) => (
        <div key={stat.title} className={`p-6 rounded-xl border ${stat.bg}`}>
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">{stat.title}</p>
              <p className="text-3xl font-bold mt-1">{stat.value}</p>
            </div>
            <div className={`p-4 rounded-lg ${stat.color}`}>
              <stat.Icon className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
