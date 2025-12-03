// src/components/DocumentationPage.jsx
import DocumentationHeader from "../components/DocumentationHeader";
import {
  BookOpen,
  Users,
  MessageCircle,
  FileText,
  Calendar,
  BarChart3,
  Shield,
} from "lucide-react";
import Sidebar from "../components/Sidebar";

const sections = [
  {
    icon: Users,
    title: "Managing Your Patient List",
    desc: "How to view, search, and manage your patient records efficiently",
  },
  {
    icon: MessageCircle,
    title: "Creating and Managing Consultations",
    desc: "Handle patient consultations, follow-ups, and medical notes",
  },
  {
    icon: FileText,
    title: "Prescription Management",
    desc: "Create, send, and track patient prescriptions digitally",
  },
  {
    icon: Calendar,
    title: "Scheduling and Appointment Management",
    desc: "Book, reschedule, and manage patient appointments",
  },
  {
    icon: BarChart3,
    title: "Analytics and Performance Reports",
    desc: "Track your practice metrics and patient outcomes",
  },
  {
    icon: Shield,
    title: "Privacy, Security & Best Practices",
    desc: "Keep patient data safe and comply with healthcare regulations",
  },
];

export default function DocumentationPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <DocumentationHeader />

        {/* Welcome Card */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-2xl p-8 mb-10">
          <h2 className="text-2xl font-bold mb-3">
            Welcome to the Doctor Portal
          </h2>
          <p className="text-blue-100 mb-6 max-w-3xl">
            This comprehensive guide will help you navigate all features of the
            platform, from patient management to analytics. Get started quickly
            and make the most of your digital practice.
          </p>
          <button className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 rounded-lg font-semibold transition">
            Watch Video Tutorial
          </button>
        </div>

        {/* Getting Started */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-6 mb-10">
          <h3 className="text-lg font-semibold text-blue-900 mb-3">
            Getting Started With the Doctor Portal
          </h3>
          <div className="space-y-4 text-blue-800">
            <div>
              <strong className="font-medium">Instructions:</strong>
              <p className="mt-1">
                Begin by logging into your dashboard. This is your central hub
                to access all patient records, messages, appointments,
                prescriptions, and analytics. Use the sidebar to navigate
                between sections.
              </p>
            </div>
            <div>
              <strong className="font-medium">Need more help?</strong>
              <p className="mt-1">
                Contact our support team at{" "}
                <a
                  href="mailto:support@healthcare.com"
                  className="underline font-medium"
                >
                  support@healthcare.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Guide Sections */}
        <div className="space-y-6">
          {sections.map((section, i) => (
            <div
              key={i}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition"
            >
              <div className="flex items-start gap-5">
                <div className="p-4 bg-blue-100 rounded-xl">
                  <section.icon className="w-8 h-8 text-blue-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {section.title}
                  </h3>
                  <p className="text-gray-600">{section.desc}</p>
                </div>
                <button className="text-blue-600 hover:text-blue-800 font-medium flex items-center gap-2">
                  Learn more →
                </button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
