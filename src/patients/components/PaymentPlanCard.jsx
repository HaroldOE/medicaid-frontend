// import React from 'react';
import { Check } from 'lucide-react';

export default function PaymentPlanCard({ amount, duration, isSelected, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`relative rounded-2xl border-2 p-6 text-center transition-all ${
        isSelected
          ? 'border-blue-600 bg-blue-50 shadow-lg'
          : 'border-gray-200 bg-white hover:border-gray-300'
      }`}
    >
      {isSelected && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-bold px-4 py-1 rounded-full">
          Selected
        </div>
      )}
      <h3 className="text-2xl font-bold text-gray-900">₦{amount.toLocaleString()}</h3>
      <p className="text-gray-600 mt-2">{duration}</p>
      {isSelected && <Check className="mx-auto mt-4 text-blue-600" size={28} />}
    </button>
  );
}