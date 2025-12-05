import { Mail, Lock } from 'lucide-react';

export default function DoctorLoginForm() {
  return (
    <form className="space-y-7 max-w-md mx-auto">
      <div>
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
          Welcome Back Doctor
        </h2>
        <p className="text-center text-gray-600 mb-8">Sign in to your account</p>
      </div>

      {/* Email or Phone */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Email or Phone Number
        </label>
        <div className="relative">
          <Mail className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="enter email or phone number"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Password */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Password
        </label>
        <div className="relative">
          <Lock className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
          <input
            type="password"
            placeholder="••••••••"
            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* Remember + Forgot */}
      <div className="flex items-center justify-between text-sm">
        <label className="flex items-center gap-2 cursor-pointer">
          <input type="checkbox" className="w-4 h-4 text-blue-600 rounded" />
          <span className="text-gray-600">Remember Me</span>
        </label>
        <a href="#" className="text-blue-600 hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Sign In Button */}
      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-4 rounded-xl font-semibold hover:bg-blue-700 transition text-lg shadow-lg"
      >
        Sign In
      </button>

      {/* Links */}
      <div className="text-center space-y-3 pt-4">
        <p className="text-gray-600">
          Don't have an account?{' '}
          <a href="/doctor/signup" className="text-blue-600 font-medium hover:underline">
            Sign Up
          </a>
        </p>
        <a href="/" className="block text-sm text-gray-500 hover:text-gray-700">
          Back to Home
        </a>
      </div>
    </form>
  );
}