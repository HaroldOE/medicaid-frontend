// src/components/patient/PatientSidebar.jsx
import {
  Home,
  MessageCircle,
  FileText,
  Clock,
  Heart,
  Phone,
  Bell,
  BookOpen,
  User,
  LogOut,
} from "lucide-react";

export default function PatientSidebar() {
  const menuItems = [
    { icon: Home, label: "Dashboard" },
    { icon: MessageCircle, label: "Consultation" },
    { icon: FileText, label: "Messages" },
    { icon: Clock, label: "Prescription", active: true },
    { icon: Heart, label: "Medical History" },
    { icon: Clock, label: "Appointments" },
    { icon: Phone, label: "Emergency contacts" },
    { icon: Bell, label: "Notifications" },
    { icon: BookOpen, label: "Documentation" },
    { icon: User, label: "Profile" },
    { icon: LogOut, label: "Logout" },
  ];

  return (
    <div className="w-64 bg-blue-900 text-white flex flex-col h-screen">
      <div className="p-6 border-b border-blue-800">
        <h2 className="text-xl font-bold flex items-center gap-2">
          <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-blue-900 font-bold">
            H
          </div>
          HealthCare
        </h2>
        <p className="text-xs text-blue-300 mt-1">Patient Portal</p>
      </div>

      <nav className="flex-1 p-4">
        <ul className="space-y-1">
          {menuItems.map((item, i) => (
            <li key={i}>
              <button
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition ${
                  item.active
                    ? "bg-white text-blue-900 font-medium"
                    : "hover:bg-blue-800"
                }`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
