// src/components/patient/medical-history/HistoryTimeline.jsx
import HistoryItem from "./HistoryItem";

const entries = [
  {
    title: "Hypertension Diagnosed",
    type: "Condition",
    description: "Blood pressure consistently elevated",
    date: "2025-10-15",
  },
  {
    title: "Penicillin Allergy",
    type: "Allergy",
    description: "Allergic reaction to antibiotics",
    date: "2025-10-15",
  },
  {
    title: "Knee Surgery",
    type: "Surgery",
    description: "Arthroscopic knee surgery performed",
    date: "2025-10-15",
  },
];

export default function HistoryTimeline() {
  return (
    <div className="space-y-6">
      {entries.map((entry, i) => (
        <HistoryItem key={i} {...entry} />
      ))}
    </div>
  );
}
