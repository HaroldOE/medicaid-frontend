import { Lock } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";

function PatVerifyPassword() {
  const [passcode, setPasscode] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <div className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6">
      {/* LEFT SIDE */}
      <div className="w-full md:w-1/2 flex flex-col items-start px-10">
        {/* Header */}
        <div className="w-full flex flex-col items-center mb-8">
          <img src="img/logo.jpg" alt="Logo" className="w-40 mb-4" />
          <h1 className="text-3xl font-bold tracking-wide text-center">
            One Time Password
          </h1>
          <p className="text-gray-500 mt-1 text-center">
            Enter the 6-digit code sent to your email to reset your password
          </p>
        </div>

        {/* PASSCODE */}
        <label className="font-semibold text-lg">OTP</label>
        <div
          className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4
            focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all"
        >
          <Lock className="w-5 h-5 text-gray-500" />
          <input
            type="text"
            placeholder="123456"
            value={passcode}
            onChange={(e) => setPasscode(e.target.value)}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* NEW PASSWORD */}
        <label className="font-semibold text-lg">New Password</label>
        <div
          className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4
            focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all"
        >
          <Lock className="w-5 h-5 text-gray-500" />
          <input
            type="password"
            placeholder="********"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* CONFIRM PASSWORD */}
        <label className="font-semibold text-lg">Confirm Password</label>
        <div
          className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-6
            focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all"
        >
          <Lock className="w-5 h-5 text-gray-500" />
          <input
            type="password"
            placeholder="********"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="w-full ml-3 outline-none text-gray-700"
          />
        </div>

        {/* BUTTON */}
        <button className="w-full bg-[#024F9D] hover:bg-[#0363c2] transition-all text-white text-lg font-semibold py-4 rounded-xl mb-6">
          Reset Password
        </button>

        {/* BACK LINK */}
        <Link
          to="/"
          className="text-blue-500 text-center w-full mt-4 font-medium"
        >
          Back to Home
        </Link>
      </div>

      {/* RIGHT IMAGE */}
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

export default PatVerifyPassword;

// import { Lock } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router";

// function PatVerifyPassword() {
//   const [formData, setFormData] = useState({
//     passcode: "",
//     newPassword: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   return (
//     <div className="w-full min-h-screen bg-white flex flex-col md:flex-row items-center justify-center p-6">
//       {/* LEFT SIDE */}
//       <div className="w-full md:w-1/2 flex flex-col items-start px-10">
//         {/* Header */}
//         <div className="w-full flex flex-col items-center mb-8">
//           <img src="img/logo.jpg" alt="Logo" className="w-40 mb-4" />
//           <h1 className="text-3xl font-bold tracking-wide text-center">
//             One Time Password
//           </h1>
//           <p className="text-gray-500 mt-1 text-center">
//             Enter the 6-digit code sent to your email to reset your password
//           </p>
//         </div>

//         {/* PASSCODE */}
//         <label className="font-semibold text-lg">OTP</label>
//         <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4
//             focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all">
//           <Lock className="w-5 h-5 text-gray-500" />
//           <input
//             type="text"
//             name="passcode"
//             placeholder="123456"
//             value={formData.passcode}
//             onChange={handleChange}
//             className="w-full ml-3 outline-none text-gray-700"
//           />
//         </div>

//         {/* NEW PASSWORD */}
//         <label className="font-semibold text-lg">New Password</label>
//         <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-4
//             focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all">
//           <Lock className="w-5 h-5 text-gray-500" />
//           <input
//             type="password"
//             name="newPassword"
//             placeholder="********"
//             value={formData.newPassword}
//             onChange={handleChange}
//             className="w-full ml-3 outline-none text-gray-700"
//           />
//         </div>

//         {/* CONFIRM PASSWORD */}
//         <label className="font-semibold text-lg">Confirm Password</label>
//         <div className="w-full flex items-center border border-gray-300 rounded-xl px-4 py-3 mt-1 mb-6
//             focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300 transition-all">
//           <Lock className="w-5 h-5 text-gray-500" />
//           <input
//             type="password"
//             name="confirmPassword"
//             placeholder="********"
//             value={formData.confirmPassword}
//             onChange={handleChange}
//             className="w-full ml-3 outline-none text-gray-700"
//           />
//         </div>

//         {/* BUTTON */}
//         <button className="w-full bg-[#024F9D] hover:bg-[#0363c2] transition-all text-white text-lg font-semibold py-4 rounded-xl mb-6">
//           Reset Password
//         </button>

//         <Link
//           to={"/"}
//           className="text-blue-500 text-center w-full mt-4 font-medium"
//         >
//           Back to Home
//         </Link>
//       </div>

//       {/* RIGHT IMAGE */}
//       <div className="w-full md:w-1/2 flex justify-center mt-12 md:mt-0">
//         <img
//           src="/img/creataccount.jpg"
//           alt="Healthcare"
//           className="w-[85%] md:w-[90%] rounded-3xl object-cover"
//         />
//       </div>
//     </div>
//   );
// }

// export default PatVerifyPassword;
