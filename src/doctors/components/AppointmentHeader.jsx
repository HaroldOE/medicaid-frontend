// src/components/AppointmentsHeader.jsx
import { useState } from "react";
import AddAppointmentModal from "./AddAppointmentModal";

export default function AppointmentsHeader() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="mb-8">
        <a
          href="#"
          className="text-sm text-gray-600 hover:underline mb-3 inline-block"
        >
          Back to Dashboard
        </a>
        <div className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Appointments</h1>
            <p className="text-gray-600 mt-1">
              Manage your patients appointments
            </p>
          </div>
          <button
            onClick={() => setIsModalOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition flex items-center gap-2"
          >
            + Add New Appointment
          </button>
        </div>
      </div>

      <AddAppointmentModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
