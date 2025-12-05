const Logo = () => {
  return (
    <div className="flex items-center gap-3 mb-10">
      <div className="relative">
        <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
          <span className="text-white text-3xl font-bold">M</span>
        </div>
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center">
          <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2a8 8 0 100 16 8 8 0 000-16zM9.5 7v4.5H14M9.5 14h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        </div>
      </div>
      <div>
        <h1 className="text-2xl font-bold text-gray-900">MedCare Africa</h1>
        <p className="text-xs text-gray-500">Healthcare Platform</p>
      </div>
    </div>
  );
};

export default Logo;