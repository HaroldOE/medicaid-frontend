// src/components/MedicalHistory/MedicalEntryList.jsx
import MedicalEntryCard from "../components/MedicalEntryCard";

const entries = [
  {
    type: "condition",
    title: "Hypertension Diagnosed",
    description: "Blood pressure consistently elevated",
    date: "2025-10-15",
  },
  {
    type: "allergy",
    title: "Penicillin Allergy",
    description: "Allergic reaction to antibiotics",
    date: "2025-10-15",
  },
  {
    type: "surgery",
    title: "Knee Surgery",
    description: "Arthroscopic knee surgery performed",
    date: "2025-10-15",
  },
];

export default function MedicalEntryList() {
  return (
    <div className="space-y-6">
      {entries.map((entry, index) => (
        <MedicalEntryCard key={index} {...entry} />
      ))}
    </div>
  );
}