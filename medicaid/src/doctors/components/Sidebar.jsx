import { Link } from "react-router";

import {
  Home,
  Users,
  MessageSquare,
  Calendar,
  FileText,
  BarChart3,
  User,
  FileBox,
  LogOut,
  MessageCircle,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="w-64 bg-slate-900 text-white flex flex-col h-screen">
      <div className="p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
            <FileText className="w-6 h-6" />
          </div>
          <div>
            <h1 className="text-xl font-bold">HealthCare</h1>
            <p className="text-xs text-slate-400">Doctor Portal</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 px-4 py-4">
        <Link
          to="/doctor-dashboard"
          className="flex items-center gap-3 px-4 py-3 bg-blue-700 rounded-lg mb-1"
        >
          <Home className="w-5 h-5" /> Dashboard
        </Link>
        <Link
          to="/doctor-patient-dashboard"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <Users className="w-5 h-5" /> My Patients
        </Link>
        <Link
          to="/doctors-consultation-page"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <MessageSquare className="w-5 h-5" /> Consultations
        </Link>
        <Link
          to="/doctors-message-page"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <MessageCircle className="w-5 h-5" /> Messages
        </Link>
        <Link
          to="/doctors-appointments-page"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <Calendar className="w-5 h-5" /> Appointments
        </Link>
        <Link
          to="/doctors-prescriptions-page"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <FileText className="w-5 h-5" /> Prescription
        </Link>

        <div className="my-5 border-t border-slate-700" />

        <Link
          to="/doctor-analytics-page"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <BarChart3 className="w-5 h-5" /> Analytics
        </Link>
        <Link
          to="/doctor-profile-page"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <User className="w-5 h-5" /> Profile
        </Link>
        <Link
          to="/doctor-documentation-page"
          className="flex items-center gap-3 px-4 py-3 text-slate-300 hover:bg-slate-800 rounded-lg mb-1"
        >
          <FileBox className="w-5 h-5" /> Documentation
        </Link>
      </nav>

      <div className="p-6 border-t border-slate-800">
        <Link
          to="/"
          className="flex items-center gap-3 text-red-400 hover:text-red-300"
        >
          <LogOut to="/" className="w-5 h-5" /> Logout
        </Link>
      </div>
    </aside>
  );
}
