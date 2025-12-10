import { useState } from "react";
import AppointmentsHeader from "../components/AppointmentHeader";
import AppointmentTabs from "../components/AppointmentTabs";
import AppointmentCard from "../components/AppointmentCard";
import Sidebar from "../components/Sidebar";

const hypertensionAppointments = [
  {
    name: "John Doe",
    type: "Regular Checkup",
    date: "2024-01-25",
    time: "09:00AM",
    room: "101",
    status: "Confirmed",
  },
  {
    name: "Sara Johnson",
    type: "Follow-up",
    date: "2024-01-25",
    time: "10:30AM",
    room: "102",
    status: "Confirmed",
  },
  {
    name: "Michael Brown",
    type: "Lab Review",
    date: "2024-01-25",
    time: "02:00PM",
    room: "103",
    status: "Pending",
  },
  {
    name: "Emily Davis",
    type: "Lab Review",
    date: "2024-01-25",
    time: "09:00AM",
    room: "102",
    status: "Confirmed",
  },
];

const completedAppointments = [
  {
    name: "Robert Wilson",
    type: "Annual Physical",
    date: "2024-01-20",
    time: "11:00AM",
    room: "105",
    status: "Confirmed",
  },
  // add more if you want
];

export default function AppointmentsPage() {
  const [activeTab, setActiveTab] = useState("hypertension");
  const data =
    activeTab === "hypertension"
      ? hypertensionAppointments
      : completedAppointments;

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <AppointmentsHeader />
        <AppointmentTabs activeTab={activeTab} setActiveTab={setActiveTab} />

        <div className="space-y-6">
          {data.map((apt, i) => (
            <AppointmentCard key={i} apt={apt} />
          ))}
        </div>
      </main>
    </div>
  );
}
