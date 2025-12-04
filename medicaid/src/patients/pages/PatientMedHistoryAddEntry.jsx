// src/pages/MedicalHistoryPage.jsx
import { ArrowLeft, Plus, Printer, Download } from "lucide-react";
import PatientSidebar from "../components/PatientSidebar";
import AddMedicalEntryForm from "../components/AddMedicalEntryForm";
import MedicalEntryList from "../components/MedicalEntryList";

export default function PatientMedHistoryAddEntry() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <PatientSidebar />

      {/* Main Content Area */}
      <div className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
        <div className="p-4 sm:p-6 lg:p-8 max-w-5xl mx-auto w-full">

          {/* Header Section */}
          <div className="mb-8">
            {/* Back to Dashboard - Plain clickable */}
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Dashboard
            </button>

            {/* Title + Add Entry Button */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
                  Medical History
                </h1>
                <p className="text-gray-600 mt-1 text-sm sm:text-base">
                  Your complete health timeline
                </p>
              </div>

              {/* Responsive Add Entry Button */}
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg flex items-center justify-center gap-2 px-5 py-3 transition-all">
                <Plus className="w-5 h-5" />
                <span className="hidden sm:inline">Add Entry</span>
                <span className="sm:hidden">Add</span>
              </button>
            </div>
          </div>

          {/* Add Medical Entry Form */}
          <AddMedicalEntryForm />

          {/* List of Medical Records */}
          <MedicalEntryList />

          {/* Print & Export Buttons - Responsive */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition">
              <Printer className="w-5 h-5" />
              Print Records
            </button>
            <button className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-medium px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition">
              <Download className="w-5 h-5" />
              Export PDF
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
