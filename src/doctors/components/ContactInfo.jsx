// src/components/ContactInfo.jsx
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactInfo() {
  const items = [
    { icon: Mail, label: "Email", value: "dr.james@clinic.com" },
    { icon: Phone, label: "Phone", value: "+234-805-000-0100" },
    { icon: MapPin, label: "Location", value: "Nigeria, NG" },
  ];

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-6 flex items-center gap-2">
        Contact Information
      </h3>
      <div className="space-y-5">
        {items.map((item, i) => (
          <div key={i} className="flex items-center gap-4">
            <item.icon className="w-5 h-5 text-gray-500" />
            <div>
              <p className="text-sm text-gray-600">{item.label}</p>
              <p className="font-medium text-gray-900">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
