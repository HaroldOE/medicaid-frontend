import {
  MessageCircle,
  FileText,
  Heart,
  Calendar,
  PhoneIncoming,
  Settings,
} from "lucide-react";

const cards = [
  {
    title: "Consultation",
    desc: "Get medical help",
    color: "bg-green-500",
    icon: MessageCircle,
  },
  {
    title: "Prescription Refill",
    desc: "Manage medication",
    color: "bg-blue-600",
    icon: FileText,
  },
  {
    title: "Medical History",
    desc: "View health record",
    color: "bg-emerald-500",
    icon: Heart,
  },
  {
    title: "Appointments",
    desc: "Schedule visits",
    color: "bg-yellow-500",
    icon: Calendar,
  },
  {
    title: "Emergency Contacts",
    desc: "Medical contacts",
    color: "bg-red-600",
    icon: PhoneIncoming,
  },
  {
    title: "Settings",
    desc: "Account settings",
    color: "bg-gray-200",
    textColor: "text-gray-800",
    icon: Settings,
  },
];

export default function QuickActionCard() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
      {cards.map((card) => (
        <div
          key={card.title}
          className={`${card.color} text-white rounded-2xl p-6 flex items-start gap-4 hover:shadow-lg transition cursor-pointer`}
        >
          <card.icon className="w-10 h-10 flex-shrink-0" />
          <div>
            <h3
              className={`text-xl font-bold ${card.textColor || "text-white"}`}
            >
              {card.title}
            </h3>
            <p
              className={`text-sm opacity-90 ${
                card.textColor ? "text-gray-700" : "text-white"
              }`}
            >
              {card.desc}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
