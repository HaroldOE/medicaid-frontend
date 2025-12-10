// src/components/SecuritySettings.jsx
export default function SecuritySettings() {
  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-6">Security Settings</h2>
      <div className="space-y-6 max-w-2xl">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Current Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            New Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg px-4 py-3"
          />
        </div>
        <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition">
          Update Password
        </button>
      </div>
    </div>
  );
}
