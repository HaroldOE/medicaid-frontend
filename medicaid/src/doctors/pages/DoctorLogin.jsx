import AuthLogo from '../components/AuthLogo';
import DoctorLoginForm from '../components/DoctorLoginForm';
import DoctorImage from '../components/DoctorImage';

export default function DoctorLogin() {
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Top small text */}
        <p className="text-center text-sm text-gray-500 mb-6">
          Welcome back Doctor Sign in
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Form */}
          <div className="order-2 lg:order-1">
            <AuthLogo />
            <DoctorLoginForm />
          </div>

          {/* Right - Image */}
          <div className="order-1 lg:order-2">
            <DoctorImage />
          </div>
        </div>
      </div>
    </div>
  );
}