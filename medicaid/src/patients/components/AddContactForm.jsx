// src/components/AddContactForm.jsx
import { useState } from "react";

const relationships = [
  "Spouse",
  "Parent",
  "Child",
  "Sibling",
  "Friend",
  "Other",
];

export default function AddContactForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    name: "",
    relationship: "",
    phone: "",
    address: "",
    isPrimary: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    if (formData.name && formData.phone) {
      onSave({
        id: Date.now(),
        ...formData,
      });
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
      <h2 className="text-xl font-semibold mb-6">Add Emergency Contact</h2>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Full name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Relationship
          </label>
          <select
            name="relationship"
            value={formData.relationship}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          >
            <option value="">Select relationship</option>
            {relationships.map((rel) => (
              <option key={rel} value={rel}>
                {rel}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="+1 (555) 000-0000"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Street address
          </label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <div className="flex items-center mb-6">
        <input
          type="checkbox"
          name="isPrimary"
          checked={formData.isPrimary}
          onChange={handleChange}
          className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500"
        />
        <label className="ml-3 text-sm text-gray-700">
          Set as primary contact
        </label>
      </div>

      <div className="flex justify-end gap-4">
        <button
          onClick={onCancel}
          className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Save Contact
        </button>
      </div>
    </div>
  );
}
