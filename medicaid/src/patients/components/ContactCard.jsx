// src/components/ContactCard.jsx
import { Phone, Pencil, Trash2 } from "lucide-react";

export default function ContactCard({ contact, onDelete, onSetPrimary }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-4">
        <div className="flex items-center gap-3">
          <h3 className="text-xl font-semibold">{contact.name}</h3>
          {contact.isPrimary && (
            <span className="bg-red-500 text-white text-xs px-3 py-1 rounded-full font-medium">
              Primary
            </span>
          )}
        </div>
        <div className="flex gap-3">
          <button className="text-gray-500 hover:text-gray-700">
            <Pencil size={20} />
          </button>
          <button
            onClick={() => onDelete(contact.id)}
            className="text-gray-500 hover:text-red-600"
          >
            <Trash2 size={20} />
          </button>
        </div>
      </div>

      <div className="space-y-2 text-gray-600 mb-6">
        <p className="flex items-center gap-2">
          <Phone size={16} />
          {contact.phone}
        </p>
        <p>{contact.address}</p>
      </div>

      <button className="w-full bg-blue-100 text-blue-700 py-3 rounded-lg font-medium hover:bg-blue-200 transition flex items-center justify-center gap-2">
        <Phone size={20} />
        Call Now
      </button>
    </div>
  );
}
