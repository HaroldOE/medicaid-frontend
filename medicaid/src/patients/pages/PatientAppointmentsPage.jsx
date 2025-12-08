// src/App.jsx
import { useState } from "react";
import Sidebar from "../components/PatientSidebar";
import AppointmentCard from "../components/AppointmentsCard";
import ScheduleForm from "../components/ScheduleForm";
import { ArrowLeft } from "lucide-react";

export default function App() {
  const [showScheduleForm, setShowScheduleForm] = useState(false);

  const upcomingAppointments = [
    {
      doctor: "Dr. James Mitchell",
      specialty: "General Practitioner",
      date: "2025-11-20",
      time: "10:00 AM",
      location: "Downtown Medical Center",
    },
    {
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2025-11-20",
      time: "03:00 PM",
      location: "Heart Clinic",
    },
  ];

  const pastAppointments = [
    {
      doctor: "Dr. Robert Brown",
      date: "2025-11-20",
    },
  ];

  return (
    <div className="flex h-screen bg-gray-900 text-white">
      <Sidebar activeItem="Appointments" />

      <main className="flex-1 overflow-y-auto bg-gray-100 text-gray-900">
        <header className="bg-white shadow-sm border-b border-gray-200">
          <div className="px-8 py-6 flex justify-between items-center">
            <div>
              <a
                href="#"
                className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
              >
                <ArrowLeft size={16} />
                Back to Dashboard
              </a>
              <h1 className="text-3xl font-bold mt-2">Appointments</h1>
              <p className="text-gray-600">Manage your medical consultation</p>
            </div>
            <button
              onClick={() => setShowScheduleForm(!showScheduleForm)}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
            >
              + Schedule New
            </button>
          </div>
        </header>

        <div className="p-8 max-w-4xl mx-auto">
          {/* Schedule Form - Only shown when button is clicked */}
          {showScheduleForm && (
            <div className="mb-8">
              <ScheduleForm onCancel={() => setShowScheduleForm(false)} />
            </div>
          )}

          {/* Upcoming Appointments */}
          <section className={showScheduleForm ? "opacity-50" : ""}>
            <h2 className="text-2xl font-semibold mb-6">
              Upcoming Appointments
            </h2>
            <div className="space-y-4">
              {upcomingAppointments.map((apt, i) => (
                <AppointmentCard key={i} {...apt} isUpcoming />
              ))}
            </div>
          </section>

          {/* Past Appointments */}
          <section className={`mt-12 ${showScheduleForm ? "opacity-50" : ""}`}>
            <h2 className="text-2xl font-semibold mb-6">Past Appointments</h2>
            <div className="space-y-4">
              {pastAppointments.map((apt, i) => (
                <AppointmentCard key={i} {...apt} isPast />
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
