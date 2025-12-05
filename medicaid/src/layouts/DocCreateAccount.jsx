import { Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import assets from "../assets/assets"; // Adjust path if needed

export default function DocCreateAccount() {
  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      {/* LEFT SIDE - Form */}
      <div className="flex-1 flex flex-col justify-center items-center bg-white px-8 py-12 md:px-16 lg:px-24">
        <div className="w-full max-w-md">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <img
              src={assets.logoTransp}
              alt="MedChain Africa"
              className="h-16"
            />
          </div>

          {/* Title & Subtitle */}
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Doctor Create Account
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-lg mx-auto">
            Sign Up to Connect, Consult & Care. Start Your Journey as a Trusted
            Medical Expert.
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="your fullname"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Phone className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 000000000"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full pl-12 pr-4 py-4 bg-gray-50 border border-gray-300 rounded-xl text-gray-700 placeholder-gray-400 
                           focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
                />
              </div>
            </div>

            {/* Create Account Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 rounded-xl transition duration-200 shadow-md"
            >
              Create Account
            </button>
          </form>

          {/* Sign In Link */}
          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/doclogin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>

          {/* Back to Home */}
          <div className="mt-6 text-center">
            <Link to="/" className="text-blue-600 font-medium hover:underline">
              Back to Home
            </Link>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE - Background Image */}
      <div className="hidden md:block flex-1 relative overflow-hidden">
        <img
          src={assets.docimg} // Replace with actual doctor image
          alt="Professional Doctor"
          className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 rounded-l-3xl"></div>
      </div>
    </div>
  );
}
