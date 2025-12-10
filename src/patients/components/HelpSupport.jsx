// src/components/HelpSupport.jsx
export default function HelpSupport() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-6">Help & Support</h2>
      <div className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Contact Support
          </label>
          <input
            type="text"
            placeholder="Your message"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            FAQ
          </label>
          <input
            type="text"
            placeholder="Search FAQs..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Documentation
          </label>
          <input
            type="text"
            placeholder="Browse guides..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
      </div>
    </div>
  );
}
