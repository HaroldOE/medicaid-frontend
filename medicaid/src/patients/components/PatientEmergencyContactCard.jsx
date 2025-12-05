import { Phone, Pencil, Trash2 } from 'lucide-react';

export default function EmergencyContactCard({ contact, isPrimary }) {
  const { name, relation, phone, address } = contact;

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
          {isPrimary && (
            <span className="px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200">
              Primary
            </span>
          )}
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <button className="p-1 hover:bg-gray-100 rounded">
            <Pencil className="w-4 h-4" />
          </button>
          <button className="p-1 hover:bg-gray-100 rounded">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="text-sm text-gray-600 space-y-1 mb-5">
        <p className="capitalize">{relation}</p>
        <p className="font-medium text-gray-900">{phone}</p>
        <p>{address}</p>
      </div>

      <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 rounded-lg transition flex items-center justify-center gap-2">
        <Phone className="w-4 h-4" />
        Call Now
      </button>
    </div>
  );
}