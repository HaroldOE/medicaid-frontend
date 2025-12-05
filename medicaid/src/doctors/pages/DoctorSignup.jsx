import AuthHeader from '../components/AuthHeader';
import DoctorSignupForm from '../components/DoctorSignupForm';
import DoctorImage from '../components/DoctorImage';

export default function DoctorSignup() {
  return (
    <>
      <div className="min-h-screen bg-gray-50 py-12 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Top Title */}
          <p className="text-sm text-gray-500 text-center mb-4">Doctor Create Account</p>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Form */}
            <div className="order-2 lg:order-1">
              <AuthHeader />
              <DoctorSignupForm />
            </div>

            {/* Right Side - Image */}
            <div className="order-1 lg:order-2">
              <DoctorImage />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}