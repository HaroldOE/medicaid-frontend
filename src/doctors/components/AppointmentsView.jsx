// components/AppointmentsView.jsx (Left screen - normal view)
import AppointmentCard from "./AppointmentsCard";

export default function AppointmentsView() {
  const upcomingAppointments = [
    {
      doctor: "Dr. James Mitchell",
      specialty: "General Practitioner",
      date: "2025-11-20",
      time: "10:00 AM",
      location: "Downtown Medical Center",
      hasVideo: true,
    },
    {
      past: false,
      doctor: "Dr. Sarah Johnson",
      specialty: "Cardiologist",
      date: "2025-11-20",
      time: "03:00 PM",
      location: "Heart Clinic",
      hasVideo: true,
    },
  ];

  const pastAppointments = [
    {
      doctor: "Dr. Robert Brown",
      date: "2025-11-20",
      hasNotes: true,
    },
  ];

  return (
    <main className="flex-1 bg-gray-50 p-8 overflow-y-auto">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <a
              href="#"
              className="text-sm text-blue-600 hover:underline mb-2 inline-block"
            >
              &larr; Back to Dashboard
            </a>
            <h2 className="text-3xl font-bold">Appointments</h2>
            <p className="text-gray-600">Manage your medical consultation</p>
          </div>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            + Schedule New
          </button>
        </div>

        <section className="mb-12">
          <h3 className="text-xl font-semibold mb-4">Upcoming Appointments</h3>
          <div className="space-y-4">
            {upcomingAppointments.map((apt, i) => (
              <AppointmentCard key={i} {...apt} />
            ))}
          </div>
        </section>

        <section>
          <h3 className="text-xl font-semibold mb-4">Past Appointments</h3>
          <div className="space-y-4">
            {pastAppointments.map((apt, i) => (
              <AppointmentCard key={i} {...apt} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
