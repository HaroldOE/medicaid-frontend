import { Stethoscope, UserRound } from "lucide-react";
import { Link } from "react-router";

export default function RoleSelection() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-2xl">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">
          Who are you?
        </h1>
        <p className="text-lg sm:text-xl text-gray-500">
          Choose your role to continue to the appropriate portal
        </p>
      </div>

      {/* Cards Section */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        {/* PATIENT CARD */}
        <div className="border-2 border-gray-300 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:border-gray-400 transition-all duration-300">
          <div className="w-28 h-28 bg-blue-100 rounded-full flex items-center justify-center mb-6">
            <UserRound className="w-14 h-14 text-blue-600" />
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">I am a Patient</h2>

          <p className="text-gray-500 mb-8 grow">
            Access healthcare services, manage prescriptions, and book
            consultations.
          </p>

          <Link
            to={"/login"}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white text-lg py-6 rounded-2xl font-semibold transition"
          >
            Continue →
          </Link>
        </div>

        {/* DOCTOR CARD */}
        <div className="border-2 border-gray-300 rounded-3xl p-8 flex flex-col items-center text-center hover:shadow-xl hover:border-gray-400 transition-all duration-300">
          <div className="w-28 h-28 bg-yellow-200 rounded-full flex items-center justify-center mb-6">
            <Stethoscope className="w-14 h-14 text-teal-600" />
          </div>

          <h2 className="text-2xl font-bold text-black mb-4">I am a Doctor</h2>

          <p className="text-gray-500 mb-8 grow">
            Manage patients, consultations, and access medical analytics.
          </p>

          <Link
            to={"/doctors-login"}
            className="w-full bg-teal-500 hover:bg-teal-600 text-white text-lg py-6 rounded-2xl font-semibold transition"
          >
            Continue →
          </Link>
        </div>
      </div>

      {/* Back to Home */}

      <Link
        to={"/"}
        className="border-2 border-gray-400 text-black hover:bg-gray-50 text-base px-8 py-4 rounded-full font-semibold transition bg-transparent"
      >
        Back to Home
      </Link>
    </div>
  );
}
