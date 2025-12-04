// src/App.jsx
import { useState } from "react";
import Sidebar from "../components/PatientSidebar";
import Accordion from "../components/DocumentationAccordion";
import { ArrowLeft, PlayCircle } from "lucide-react";

const accordionData = [
  {
    title: "Getting Started",
    content: (
      <ol className="list-decimal list-inside space-y-3 text-gray-600">
        <li>
          <strong>Sign Up:</strong> Click "Get Started" and create your account
          with your email and password.
        </li>
        <li>
          <strong>Complete Your Profile:</strong> Add your personal and
          emergency contact information.
        </li>
        <li>
          <strong>Upload Medical Records:</strong> Add your medical history,
          current medications, and allergies.
        </li>
        <li>
          <strong>Verify Your Account:</strong> Check your email for
          verification link.
        </li>
        <li>
          <strong>Start Using Features:</strong> Access emergency consultations,
          prescriptions, and more!
        </li>
      </ol>
    ),
    defaultOpen: true,
  },
  {
    title: "Consultations",
    content: (
      <p className="text-gray-600">
        Learn how to schedule and join video consultations with your doctor.
      </p>
    ),
  },
  {
    title: "Managing Prescriptions",
    content: (
      <p className="text-gray-600">
        Request refills, view prescription history, and set reminders.
      </p>
    ),
  },
  {
    title: "Medical Records",
    content: (
      <p className="text-gray-600">
        Upload, view, and share your medical documents securely.
      </p>
    ),
  },
  {
    title: "Scheduling Appointments",
    content: (
      <p className="text-gray-600">
        Book, reschedule, or cancel appointments easily.
      </p>
    ),
  },
  {
    title: "Emergency Contacts",
    content: (
      <p className="text-gray-600">
        Add and manage your emergency contacts for quick access.
      </p>
    ),
  },
  {
    title: "Privacy & Security",
    content: (
      <p className="text-gray-600">
        Understand how we protect your data and manage account security.
      </p>
    ),
  },
];

export default function App() {
  const [openIndex, setOpenIndex] = useState(0); // Only first one open by default

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem="Documentation" isPatientPortal />

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
          <div className="max-w-4xl mx-auto">
            <a
              href="#"
              className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </a>
            <h1 className="text-3xl font-bold mt-2">Documentation</h1>
            <p className="text-gray-600">Complete guide to using HealthCare</p>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-8 space-y-6">
          {/* Accordion Sections */}
          <section className="space-y-4">
            {accordionData.map((item, index) => (
              <Accordion
                key={index}
                title={item.title}
                isOpen={openIndex === index}
                onToggle={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
              >
                {item.content}
              </Accordion>
            ))}
          </section>

          {/* Video Tutorials CTA */}
          <section className="bg-gradient-to-r from-teal-500 to-green-600 rounded-xl p-8 text-white">
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-2xl font-bold flex items-center gap-3">
                  <PlayCircle size={32} />
                  Video Tutorials
                </h2>
                <p className="mt-2 text-lg opacity-90">
                  Prefer learning by video? Check out our YouTube channel for
                  step-by-step tutorials on all features.
                </p>
              </div>
              <button className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg">
                Watch Tutorials
              </button>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
