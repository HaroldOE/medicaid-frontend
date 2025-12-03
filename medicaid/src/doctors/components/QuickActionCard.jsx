import { Users, Calendar, FileText } from "lucide-react";

const cards = [
  {
    Icon: Users,
    title: "My Patients",
    desc: "View and manage all patients",
    bg: "bg-white",
  },
  {
    Icon: Calendar,
    title: "Appointments",
    desc: "View and manage all appointments",
    bg: "bg-green-50",
  },
  {
    Icon: FileText,
    title: "Prescriptions",
    desc: "Issued and manage prescriptions",
    bg: "bg-purple-50",
  },
];

export default function QuickActionCard() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.bg} p-6 rounded-xl border hover:shadow-md transition cursor-pointer`}
        >
          <card.Icon className="w-10 h-10 mb-4 text-gray-700" />
          <h3 className="font-semibold text-lg">{card.title}</h3>
          <p className="text-sm text-gray-600 mt-1">{card.desc}</p>
        </div>
      ))}
    </div>
  );
}
