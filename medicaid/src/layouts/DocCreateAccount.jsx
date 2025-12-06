import { Lock, Mail, Phone, User, AlertCircle } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router"; // Add useNavigate
import assets from "../assets/assets";
import { useAuth } from "../contextapi/AuthContext"; // Import useAuth

export default function DocCreateAccount() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    role: "doctor", // Fixed for doctors
    location: "",
    specialization: "",
    license: "",
    availability: "Available",
    rating: 0,
  });

  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const { register } = useAuth(); // Get register function from context
  const navigate = useNavigate(); // For redirect

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    // Clear error when user types
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.name.trim()) newErrors.name = "Full name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";

    if (!formData.specialization.trim())
      newErrors.specialization = "Specialization is required";
    if (!formData.license.trim())
      newErrors.license = "License number is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsLoading(true);
    setSuccessMessage("");
    setErrors({});

    try {
      // Prepare data for backend (matches your schema)
      const doctorData = {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        role: "doctor",
        phone_number: formData.phone,
        location: formData.location,
        specialization: formData.specialization,
        license: formData.license,
        availability: formData.availability,
        rating: formData.rating,
        // dob: null or add input if needed
      };

      await register(doctorData); // Calls your backend /auth/register

      setSuccessMessage(
        "Doctor account created successfully! Redirecting to login..."
      );

      setTimeout(() => {
        navigate("/doclogin"); // Redirect to login page
      }, 2000);
    } catch (err) {
      setErrors({ submit: err.message || "Registration failed. Try again." });
    } finally {
      setIsLoading(false);
    }
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

          <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">
            Doctor Create Account
          </h2>
          <p className="text-lg text-gray-600 text-center mb-10 max-w-lg mx-auto">
            Sign Up to Connect, Consult & Care. Start Your Journey as a Trusted
            Medical Expert.
          </p>

          {/* Success / Error Messages */}
          {successMessage && (
            <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-xl flex items-center">
              <AlertCircle className="mr-2" />
              {successMessage}
            </div>
          )}
          {errors.submit && (
            <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-xl flex items-center">
              <AlertCircle className="mr-2" />
              {errors.submit}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
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
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Dr. John Doe"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl text-gray-700 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.name ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.name && (
                  <p className="text-red-500 text-xs mt-1">{errors.name}</p>
                )}
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="doctor@example.com"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl text-gray-700 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.email ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Phone Number
              </label>
              <div className="relative">
                <Phone className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+234 000 000 0000"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl text-gray-700 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.phone ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                )}
              </div>
            </div>

            {/* Specialization & License */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Specialization
                </label>
                <input
                  type="text"
                  name="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  placeholder="e.g., Cardiology"
                  className={`w-full px-4 py-4 bg-gray-50 border rounded-xl ${
                    errors.specialization ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.specialization && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.specialization}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  License No.
                </label>
                <input
                  type="text"
                  name="license"
                  value={formData.license}
                  onChange={handleChange}
                  placeholder="MED12345"
                  className={`w-full px-4 py-4 bg-gray-50 border rounded-xl ${
                    errors.license ? "border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.license && (
                  <p className="text-red-500 text-xs mt-1">{errors.license}</p>
                )}
              </div>
            </div>

            {/* Password Fields */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl text-gray-700 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.password ? "border-red-500" : "border-gray-300"
                    }`}
                />
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-5 h-5 w-5 text-gray-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className={`w-full pl-12 pr-4 py-4 bg-gray-50 border rounded-xl text-gray-700 placeholder-gray-400 
                    focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.confirmPassword
                        ? "border-red-500"
                        : "border-gray-300"
                    }`}
                />
                {errors.confirmPassword && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.confirmPassword}
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-semibold text-lg py-4 rounded-xl transition duration-200 shadow-md"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </button>
          </form>

          <p className="mt-8 text-center text-gray-600">
            Already have an account?{" "}
            <Link
              to="/doclogin"
              className="text-blue-600 font-semibold hover:underline"
            >
              Sign In
            </Link>
          </p>

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
