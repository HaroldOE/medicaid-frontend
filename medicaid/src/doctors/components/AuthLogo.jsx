import { Stethoscope, Heart } from 'lucide-react';

export default function AuthLogo() {
  return (
    <div className="flex flex-col items-center mb-10">
      <div className="relative mb-6">
        <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center">
          <Stethoscope className="w-10 h-10 text-red-600" />
          <Heart className="w-6 h-6 text-red-600 absolute top-2 right-2" />
        </div>
      </div>
      <h1 className="text-4xl font-bold text-gray-900">MEDICHAIN AFRICA</h1>
    </div>
  );
}