// src/components/MedicalHistory/EntryTypeSelect.jsx
export default function EntryTypeSelect({ value, onChange }) {
  return (
    <select
      value={value}
      onChange={onChange}
      className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
    >
      <option value="">Select Entry Type</option>
      <option value="Condition">Condition</option>
      <option value="Allergy">Allergy</option>
      <option value="Surgery">Surgery</option>
      <option value="Vaccination">Vaccination</option>
    </select>
  );
}