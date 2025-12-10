export default function PrescriptionTabs({ activeTab, setActiveTab }) {
  return (
    <div className="flex gap-8 border-b border-gray-200 mb-6">
      <button
        onClick={() => setActiveTab("active")}
        className={`pb-4 px-2 font-medium text-sm border-b-2 transition ${
          activeTab === "active"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        Active (3)
      </button>
      <button
        onClick={() => setActiveTab("drafts")}
        className={`pb-4 px-2 font-medium text-sm border-b-2 transition ${
          activeTab === "drafts"
            ? "border-blue-600 text-blue-600"
            : "border-transparent text-gray-500 hover:text-gray-700"
        }`}
      >
        Drafts (2)
      </button>
    </div>
  );
}
