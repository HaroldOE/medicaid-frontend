import { User, Mail, Phone, Lock } from 'lucide-react';

export default function DoctorSignupForm() {
  return (
    <form className="space-y-6 max-w-md mx-auto">
      {/* Full Name */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
        <div className="relative">
          <User className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="your fullname"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      {/* Email */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
        <div className="relative">
          <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="email"
            placeholder="your@email.com"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Phone Number</label>
        <div className="relative">
          <Phone className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="tel"
            placeholder="+234 0000000000"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Confirm Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Confirm Password</label>
        <div className="relative">
          <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition shadow-lg"
      >
        Create Account
      </button>

      {/* Links */}
      <div className="text-center space-y-3 pt-4">
        <p className="text-gray-600">
          Already have an account?{' '}
          <a href="#" className="text-blue-600 font-medium hover:underline">
            Sign in
          </a>
        </p>
        <a href="#" className="block text-sm text-gray-500 hover:text-gray-700">
          Back to Home
        </a>
      </div>
    </form>
  );
}