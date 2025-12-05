// src/components/NotificationPreferences.jsx
export default function NotificationPreferences() {
  const preferences = [
    "Appointment Reminders",
    "Prescription Refills",
    "Lab Results",
    "Health Tips",
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm p-8">
      <h2 className="text-2xl font-semibold mb-6">Notification Preferences</h2>
      <div className="space-y-6 max-w-2xl">
        {preferences.map((pref) => (
          <label
            key={pref}
            className="flex items-center justify-between cursor-pointer"
          >
            <span className="text-gray-800">{pref}</span>
            <input
              type="checkbox"
              defaultChecked
              className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
            />
          </label>
        ))}
      </div>
    </div>
  );
}
