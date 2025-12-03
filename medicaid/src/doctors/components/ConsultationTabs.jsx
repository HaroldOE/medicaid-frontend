export default function ConsultationTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-8 border-b border-gray-200 mb-8">
      <button
        onClick={() => setActiveTab("pending")}
        className={`pb-3 px-1 font-medium text-sm border-b-2 transition ${
          activeTab === "pending"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        Pending (4)
      </button>
      <button
        onClick={() => setActiveTab("completed")}
        className={`pb-3 px-1 font-medium text-sm border-b-2 transition ${
          activeTab === "completed"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        Completed (2)
      </button>
    </div>
  );
}
