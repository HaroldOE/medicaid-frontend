import { Calendar } from "lucide-react";

export default function AccountInfoForm() {
  return (
    <div className="w-full max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
      {/* Header */}
      <div className="bg-gray-50 px-8 py-5 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Account Information</h2>
      </div>

      {/* Form Body */}
      <div className="p-8 space-y-7">
        {/* Full Name */}
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            defaultValue="Patient Name"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     transition duration-200"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            defaultValue="patient@example.com"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     transition duration-200"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            defaultValue="+1 (555) 000-0000"
            className="w-full px-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 
                     focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                     transition duration-200"
            placeholder="+1 (555) 000-0000"
          />
        </div>

        {/* Date of Birth */}
        <div>
          <label htmlFor="dob" className="block text-sm font-medium text-gray-700 mb-2">
            Date of Birth
          </label>
          <div className="relative">
            <input
              type="text"
              id="dob"
              placeholder="mm/dd/yyyy"
              className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-400 
                       focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
                       transition duration-200"
            />
            <Calendar className="absolute left-4 top-3.5 text-gray-400 pointer-events-none" size={20} />
            <div className="absolute right-3 top-3.5 text-gray-400 pointer-events-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
          </div>
        </div>

        {/* Save Button */}
        <div className="pt-6">
          <button
            type="button"
            className="w-full bg-blue-900 hover:bg-blue-800 text-white font-medium py-4 px-6 rounded-lg 
                     transition duration-200 ease-in-out transform hover:scale-[1.02] active:scale-100 
                     focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}