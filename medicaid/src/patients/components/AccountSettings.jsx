// src/components/AccountSettings.jsx
export default function AccountSettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-6">Account Information</h2>
      <div className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            defaultValue="Patient Name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            defaultValue="patient@example.com"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            defaultValue="+1 (555) 000-0000"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <input
            type="text"
            placeholder="mm/dd/yyyy"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Save Changes
        </button>
      </div>
    </div>
  );
}
