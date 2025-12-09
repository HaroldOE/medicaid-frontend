const AuthImageSection = () => {
  return (
    <div className="hidden lg:block relative">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 rounded-3xl"></div>
      <img
        src="https://images.unsplash.com/photo-1559839914-17aae19cec70?w=800&h=900&fit=crop&crop=center"
        alt="Nurse helping patient"
        className="h-full w-full object-cover rounded-3xl shadow-2xl"
      />
    </div>
  );
};

export default AuthImageSection;