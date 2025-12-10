import { Link, useNavigate } from "react-router"; // ← added useNavigate
import { useAuth } from "../../contextapi/AuthContext"; // ← added
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
  const { logout } = useAuth(); // ← get logout function
  const navigate = useNavigate(); // ← for redirect after logout

  const handleLogout = () => {
    logout(); // clears user + localStorage
    navigate("/"); // or "/patlogin" if you prefer
  };

  const menuItems = [
    { icon: Home, label: "Dashboard", to: "/patients-dashboard" },
    { icon: MessageCircle, label: "Messages", to: "/patient-messages-page" },
    { icon: FileText, label: "Consultation", to: "/patient-consultation-page" },
    { icon: Clock, label: "Prescription", to: "/patients-prescription-page" },
    { icon: Heart, label: "Medical History", to: "/patients-medical-history" },
    { icon: Clock, label: "Appointments", to: "/patient-appointments-page" },
    { icon: Phone, label: "Emergency contacts", to: "/emergecy-contact-card" },
    { icon: Bell, label: "Notifications", to: "/pateint-notification-page" },
    {
      icon: BookOpen,
      label: "Documentation",
      to: "/patient-documentation-page",
    },
    { icon: User, label: "Profile", to: "/Profile-settings-page" },
    // Logout is now a button, not a Link
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
              <Link
                to={item.to}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition hover:bg-blue-800`}
              >
                <item.icon className="w-5 h-5" />
                <span>{item.label}</span>
              </Link>
            </li>
          ))}

          {/* Logout – separate because it needs onClick */}
          <li>
            <button
              onClick={handleLogout}
              className="w-full flex items-center gap-3 px-4 py-3 rounded-lg transition hover:bg-blue-800 text-left"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
}
