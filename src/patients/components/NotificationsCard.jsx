// src/components/NotificationCard.jsx
import {
  Pill,
  Calendar,
  FileText,
  AlertCircle,
  MessageSquare,
  Phone,
} from "lucide-react";

const typeConfig = {
  prescription: { icon: Pill, color: "text-green-600", bg: "bg-green-100" },
  appointment: { icon: Calendar, color: "text-blue-600", bg: "bg-blue-100" },
  records: { icon: FileText, color: "text-purple-600", bg: "bg-purple-100" },
  important: { icon: AlertCircle, color: "text-red-600", bg: "bg-red-100" },
  message: {
    icon: MessageSquare,
    color: "text-indigo-600",
    bg: "bg-indigo-100",
  },
  emergency: { icon: Phone, color: "text-orange-600", bg: "bg-orange-100" },
};

export default function NotificationCard({
  type,
  title,
  description,
  time,
  unread,
  onMarkRead,
}) {
  const config = typeConfig[type] || typeConfig.records;
  const Icon = config.icon;

  return (
    <div
      className={`bg-white rounded-xl shadow-sm p-6 flex items-start gap-4 transition ${
        unread ? "border-l-4 border-blue-600" : ""
      }`}
    >
      <div className={`p-3 rounded-full ${config.bg}`}>
        <Icon size={24} className={config.color} />
      </div>
      <div className="flex-1">
        <h3
          className={`font-semibold ${
            unread ? "text-gray-900" : "text-gray-700"
          }`}
        >
          {title}
        </h3>
        <p className="text-gray-600 text-sm mt-1">{description}</p>
        <p className="text-gray-500 text-xs mt-2">{time}</p>
      </div>
      <div className="flex items-center gap-3">
        {unread && (
          <>
            <span className="bg-red-500 text-white text-xs px-2 py-1 rounded-full">
              1
            </span>
            <button
              onClick={onMarkRead}
              className="text-blue-600 hover:text-blue-700 text-sm font-medium"
            >
              Mark Read
            </button>
          </>
        )}
      </div>
    </div>
  );
}
