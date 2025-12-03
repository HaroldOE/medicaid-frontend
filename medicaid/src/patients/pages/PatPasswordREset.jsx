import { Mail } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

function PatPasswordReset() {
  const [formData, setFormData] = useState({
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6">
      {/* LEFT SIDE FORM */}
      <div className="w-full md:w-1/2 flex flex-col items-start px-10">
        {/* Logo (Centered at the top) */}
        <div className="w-full flex flex-col items-center mb-6">
          <img src="img/logo.jpg" alt="Logo" className="w-40 mb-4" />
          <h1 className="text-3xl font-bold tracking-wide text-center">
            Patient Password Reset
          </h1>
          <p className="text-gray-500 mt-1 text-center">
            Enter Your Patient Register Email to get a Pass code for Your
            Password Reset
          </p>
        </div>

        {/* EMAIL */}
        <label className="font-semibold text-lg">Email</label>
        <div
          className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4 
  focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all"
        >
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

        {/* LOGIN BUTTON */}
        <button className="w-full bg-[#024F9D] hover:bg-[#0363c2] transition-all text-white text-lg font-semibold py-4 rounded-xl mb-6">
          <Link to={"/patverifypass"} className="text-blue-600 font-semibold">
            Verify
          </Link>
        </button>

        {/* FOOTER LINKS */}
        <p className="text-gray-500 text-center w-full">
          Remember Password?{" "}
          <Link to={"/patlogin"} className="text-blue-600 font-semibold">
            Login
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
          alt="Healthcare Login"
          className="w-[85%] md:w-[90%] rounded-3xl object-cover"
        />
      </div>
    </div>
  );
}

export default PatPasswordReset;
