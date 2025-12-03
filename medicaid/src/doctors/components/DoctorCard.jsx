// src/components/DoctorCard.jsx
export default function DoctorCard() {
  return (
    <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-2xl p-8 mb-8">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-5">
          <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
            JS
          </div>
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Dr. James Smith
            </h2>
            <p className="text-gray-600">Internal Medicine</p>
            <p className="text-sm text-gray-500">License#L12345678</p>
          </div>
        </div>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition">
          Edit Profile
        </button>
      </div>

      <div className="grid grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-gray-900">248</p>
          <p className="text-sm text-gray-600">Total Patients</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-gray-900">15 years</p>
          <p className="text-sm text-gray-600">Experience</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center">
          <p className="text-lg font-bold text-gray-900">2020-03-15</p>
          <p className="text-sm text-gray-600">Member Since</p>
        </div>
        <div className="bg-white rounded-xl p-4 text-center">
          <p className="text-3xl font-bold text-green-600">98%</p>
          <p className="text-sm text-gray-600">Response Rate</p>
        </div>
      </div>
    </div>
  );
}
