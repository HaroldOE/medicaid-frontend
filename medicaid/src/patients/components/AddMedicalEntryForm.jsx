// src/components/AddMedicalEntryForm.jsx
import { useState } from "react";

const entryTypes = ["Condition", "Allergy", "Surgery", "Vaccination"];

export default function AddMedicalEntryForm({ onSave, onCancel }) {
  const [formData, setFormData] = useState({
    type: "Condition",
    title: "",
    description: "",
    date: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    if (formData.title && formData.date) {
      const typeMap = {
        Condition: "condition",
        Allergy: "allergy",
        Surgery: "surgery",
        Vaccination: "condition", // fallback
      };
      onSave({
        id: Date.now(),
        type: typeMap[formData.type],
        title: formData.title,
        description: formData.description || "No additional details",
        date: formData.date,
      });
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-8">
      <h2 className="text-2xl font-semibold mb-6">Add Medical Entry</h2>

      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Entry Type
          </label>
          <select
            name="type"
            value={formData.type}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          >
            {entryTypes.map((type) => (
              <option key={type} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            placeholder="Enter title..."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Details
          </label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Describe in details..."
            rows={4}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end gap-4 pt-4">
          <button
            onClick={onCancel}
            className="px-8 py-3 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition"
          >
            Add Records
          </button>
        </div>
      </div>
    </div>
  );
}
