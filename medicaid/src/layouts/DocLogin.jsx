import { Lock, Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import assets from "../assets/assets";

export default function DocLogin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
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
            Welcome Back Doctor
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10">
            Sign in to your account
          </p>

          {/* Form */}
          <form className="space-y-6">
            {/* Email / Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email or Phone Number
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="enter email or phone number"
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

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center text-gray-600">
                <input
                  type="checkbox"
                  className="mr-2 rounded text-blue-600 focus:ring-blue-500"
                />
                <span>Remember Me</span>
              </label>
              <Link
                to="/docpassreset"
                className="text-blue-600 hover:underline font-medium"
              >
                Forgot Password?
              </Link>
            </div>

            {/* Sign In Button */}
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold text-lg py-4 rounded-xl transition duration-200 shadow-md"
            >
              Sign in
            </button>
          </form>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/doctors-create-account"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign Up
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
          src={assets.docimg}
          alt="Professional Doctor"
          className="absolute inset-0 w-full h-full object-cover rounded-l-3xl"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/10 rounded-l-3xl"></div>
      </div>
    </div>
  );
}
