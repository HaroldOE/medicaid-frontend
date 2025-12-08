// import React from 'react';
import { Lock, CreditCard } from 'lucide-react';

export default function PaymentForm() {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <h3 className="text-xl font-bold text-gray-900 mb-6">Enter Card Details</h3>
      
      <div className="space-y-5">
        <input type="text" placeholder="Cardholder Name" className="w-full px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" defaultValue="Stella Moses" />
        
        <div className="relative">
          <input type="text" placeholder="Card Number" className="w-full px-5 py-4 pl-12 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" defaultValue="1234 5678 9012 3456" />
          <CreditCard className="absolute left-4 top-5 text-gray-400" size={20} />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <input type="text" placeholder="Expiry Date MM/YY" className="px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" defaultValue="12/27" />
          <input type="text" placeholder="CVV" className="px-5 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" defaultValue="123" />
        </div>

        <div className="flex items-center gap-3 bg-blue-50 px-5 py-4 rounded-lg">
          <Lock size={18} className="text-blue-600" />
          <p className="text-sm text-blue-800">All transactions are encrypted and processed securely</p>
        </div>
      </div>
    </div>
  );
}