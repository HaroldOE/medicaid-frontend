// import Logo from '../component/Logo';
import SignupForm from '../components/SignupForm';
import AuthImageSection from '../components/AuthImageSection';


const PatientSignupPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-12">
      <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side - Form */}
        <div className="flex flex-col items-center lg:items-start">
          {/* <Logo /> */}
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Patient Create Account</h2>
          <p className="text-gray-600 mb-8">Join our healthcare platform</p>
          
          <SignupForm />
        </div>

        {/* Right Side - Image */}
        <div className="justify-self-center lg:justify-self-end">
          <div className="w-full max-w-lg">
            <AuthImageSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientSignupPage;