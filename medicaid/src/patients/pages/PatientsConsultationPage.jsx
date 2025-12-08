// src/components/patient/PatientConsultationPage.jsx
import PatientSidebar from "../components/PatientSidebar";
import { Phone, MessageCircle, Calendar } from "lucide-react";

const doctors = [
  {
    name: "Dr. James Mitchell",
    specialty: "General Practitioner - Available Now",
  },
  {
    name: "Dr. Sarah Johnson",
    specialty: "General Practitioner - Available Now",
  },
  {
    name: "Dr. Robert Brown",
    specialty: "General Practitioner - Available Now",
  },
];

const actions = [
  { icon: Phone, title: "Video Call", desc: "Talk face-to-face with a doctor" },
  { icon: MessageCircle, title: "Chat", desc: "Instant messaging support" },
  { icon: Calendar, title: "Schedule", desc: "Book an appointment" },
];

export default function PatientConsultationPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <PatientSidebar />

      <main className="flex-1 p-8 pb-32">
        {" "}
        {/* Added bottom padding */}
        {/* Back Link */}
        <a
          href="#"
          className="text-sm text-gray-600 hover:underline mb-4 inline-block"
        >
          Back to Dashboard
        </a>
        {/* Hero Section */}
        <div className="bg-blue-900 text-white rounded-3xl p-10 mb-10">
          <h1 className="text-4xl font-bold mb-3 flex items-center gap-3">
            <span className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center text-xl">
              !
            </span>
            Consultation
          </h1>
          <p className="text-blue-100 text-lg">
            Immediate medical assistance available 24/7
          </p>
        </div>
        {/* Form Steps */}
        <div className="space-y-10 mb-12">
          {/* Step 1 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                1
              </span>
              Describe Your Symptoms
            </h3>
            <p className="text-gray-600 mb-3 ml-14">Tell us what’s happening</p>
            <textarea
              rows="5"
              placeholder="Describe your symptoms, pain level, and any other relevant information"
              className="w-full px-6 py-4 border border-gray-300 rounded-2xl focus:outline-none focus:ring-4 focus:ring-blue-100 resize-none"
            />
          </div>

          {/* Step 2 */}
          <div>
            <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-3">
              <span className="w-10 h-10 bg-blue-600 text-white rounded-full flex items-center justify-center">
                2
              </span>
              Upload Medical Files
            </h3>
            <p className="text-gray-600 mb-3 ml-14">
              Images, reports or other documents
            </p>
            <div className="border-2 border-dashed border-gray-300 rounded-2xl p-12 text-center">
              <p className="text-gray-500">Click to upload or drag and drop</p>
            </div>
          </div>
        </div>
        {/* Available Doctors */}
        <h2 className="text-2xl font-bold text-gray-900 mb-6">
          Available Doctors
        </h2>
        <div className="space-y-4 mb-12">
          {doctors.map((doc, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 flex justify-between items-center"
            >
              <div>
                <h3 className="font-bold text-gray-900">{doc.name}</h3>
                <p className="text-gray-600">{doc.specialty}</p>
              </div>
              <button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 rounded-xl font-medium transition">
                Select
              </button>
            </div>
          ))}
        </div>
        {/* Action Cards */}
        <div className="grid grid-cols-3 gap-6 mb-16">
          {actions.map((action, i) => (
            <div
              key={i}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8 text-center hover:shadow-md transition"
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <action.icon className="w-8 h-8 text-blue-900" />
              </div>
              <h3 className="font-bold text-gray-900 mb-2">{action.title}</h3>
              <p className="text-gray-600 text-sm">{action.desc}</p>
            </div>
          ))}
        </div>
        {/* Submit Button — Now at the very end, not fixed */}
        <div className="mt-20 text-center">
          <button className="bg-blue-900 hover:bg-blue-800 text-white px-16 py-6 rounded-2xl text-2xl font-bold uppercase tracking-wider transition shadow-lg">
            Submit Consultation
          </button>
        </div>
      </main>
    </div>
  );
}
