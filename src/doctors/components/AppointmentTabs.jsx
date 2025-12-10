export default function AppointmentTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-8 border-b border-gray-200 mb-8">
      <button
        onClick={() => setActiveTab("hypertension")}
        className={`pb-4 px-2 font-medium text-sm border-b-2 transition ${
          activeTab === "hypertension"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        Hypertension (4)
      </button>
      <button
        onClick={() => setActiveTab("completed")}
        className={`pb-4 px-2 font-medium text-sm border-b-2 transition ${
          activeTab === "completed"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        Completed (4)
      </button>
    </div>
  );
}
