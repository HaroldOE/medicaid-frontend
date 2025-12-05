import { Stethoscope, Heart } from 'lucide-react';

export default function AuthHeader() {
  return (
    <div className="text-center mb-10">
      {/* Logo */}
      <div className="flex justify-center mb-6">
        <div className="relative">
          <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
            <Stethoscope className="w-10 h-10 text-red-600 absolute" />
            <Heart className="w-6 h-6 text-red-600 absolute top-3 right-3" />
          </div>
        </div>
      </div>

      <h1 className="text-3xl font-bold text-gray-900 mb-2">Doctor Create Account</h1>
      <p className="text-gray-600 mt-3">
        Sign Up to Connect, Consult & Care. Start Your Journey as<br />a Trusted Medical Expert
      </p>
    </div>
  );
}