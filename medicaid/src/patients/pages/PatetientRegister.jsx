import { User, Mail, Phone, Lock, Stethoscope } from 'lucide-react';

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative flex items-center justify-center w-8 h-8 bg-red-500 rounded-full">
        <Stethoscope className="w-5 h-5 text-white" />
        <span className="absolute top-0 left-1 text-white font-bold text-xl">M</span>
      </div>
      <span className="text-lg font-semibold text-gray-800">MedicChain Africa</span>
    </div>
  );
};

const InputField = ({ icon: Icon, placeholder, type = 'text' }) => {
  return (
    <div className="relative">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 pl-10"
      />
      <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
    </div>
  );
};

const CreateAccountForm = () => {
  return (
    <div className="w-full max-w-md p-8 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">Patient Create Account</h2>
      <p className="text-sm text-gray-500 mb-6">Join our Healthcare platform</p>
      <form className="space-y-4">
        <InputField icon={User} placeholder="Your fullname" />
        <InputField icon={Mail} placeholder="Your Email.com" />
        <InputField icon={Phone} placeholder="+234 00000000" />
        <InputField icon={Lock} placeholder="********" type="password" />
        <InputField icon={Lock} placeholder="********" type="password" />
        <button className="w-full py-3 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700">
          Create Account
        </button>
      </form>
      <p className="text-center text-sm text-gray-600 mt-4">
        Already have an account? <a href="#" className="text-blue-600 hover:underline">Sign In</a>
      </p>
      <p className="text-center text-sm text-blue-600 mt-2 hover:underline">
        <a href="#">Back to Home</a>
      </p>
    </div>
  );
};

const BackgroundImage = () => {
  return (
    <div className="hidden lg:block w-1/2 bg-cover bg-center rounded-2xl overflow-hidden">
      <img
        src="https://via.placeholder.com/600x800?text=Nurse+Helping+Patient"
        alt="Nurse assisting elderly patient in wheelchair"
        className="w-full h-full object-cover"
      />
    </div>
  );
};

const PatientRegister = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-4xl flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-8">
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <Logo />
          <CreateAccountForm />
        </div>
        <BackgroundImage />
      </div>
    </div>
  );
};

export default PatientRegister;