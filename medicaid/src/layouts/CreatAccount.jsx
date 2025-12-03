import { Lock, Mail, Phone, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

export default function PatCreateAccount() {
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
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6">
      {/* LEFT SIDE FORM */}
      <div className="w-full md:w-1/2 flex flex-col items-start px-10">
        {/* Center logo + titles */}
        <div className="w-full flex flex-col items-center mb-8">
          <img src="img/logo.jpg" alt="Logo" className="w-40 mb-4" />

          <h1 className="text-3xl font-bold tracking-wide text-center">
            Create Account
          </h1>

          <p className="text-gray-500 mt-1 text-center">
            Join our healthcare platform
          </p>
        </div>

        {/* FULL NAME */}
        <label className="font-semibold text-lg">Full Name</label>
        <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4">
          <User className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            name="fullname"
            placeholder="your fullname"
            value={formData.fullname}
            onChange={handleChange}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* EMAIL */}
        <label className="font-semibold text-lg">Email</label>
        <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4">
          <Mail className="w-5 h-5 text-gray-500" />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* PHONE NUMBER */}
        <label className="font-semibold text-lg">Phone Number</label>
        <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4">
          <Phone className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            name="phone"
            placeholder="+234 000000000"
            value={formData.phone}
            onChange={handleChange}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* PASSWORD */}
        <label className="font-semibold text-lg">Password</label>
        <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4">
          <Lock className="w-5 h-5 text-gray-500" />
          <input
            type="password"
            name="password"
            placeholder="********"
            value={formData.password}
            onChange={handleChange}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <label className="font-semibold text-lg">Confirm Password</label>
        <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-6">
          <Lock className="w-5 h-5 text-gray-500" />
          <input
            type="password"
            name="confirmPassword"
            placeholder="********"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* BUTTON */}
        <button className="w-full bg-[#024F9D] text-white text-lg font-semibold py-4 rounded-xl mb-6">
          Create Account
        </button>

        {/* FOOTER LINKS */}
        <p className="text-gray-500 text-center w-full">
          Already have an account?{" "}
          <Link to={"/patlogin"} className="text-blue-600 font-semibold">
            Sign in
          </Link>
        </p>

        <Link
          to={"/"}
          className="text-blue-500 text-center w-full mt-4 font-medium"
        >
          Back to Home
        </Link>
      </div>

      {/* RIGHT SIDE IMAGE */}
      <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
        <img
          src="/img/creataccount.jpg"
          alt="Healthcare"
          className="w-[85%] md:w-[90%] rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}
