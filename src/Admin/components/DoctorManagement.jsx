// DoctorManagement.jsx  (updated)
import React, { useState } from "react";
import { Eye, Pencil, Trash2 } from "lucide-react";
import PageHeader from "./PageHeader";
import SearchBar from "./SearchBar";
import DoctorsTable from "./DoctorsTable";
import AddDoctorModal from "./AddDoctorModal";

function DoctorManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const doctors = [
    {
      name: "Dr. Emily Davis",
      license: "MD-12345",
      specialty: "General Practice",
      patients: 324,
    },
    {
      name: "Dr. Michael Brown",
      license: "MD-12346",
      specialty: "Cardiology",
      patients: 156,
    },
    {
      name: "Dr. Sarah Johnson",
      license: "MD-12347",
      specialty: "Pediatrics",
      patients: 98,
    },
    {
      name: "Dr. James Wilson",
      license: "MD-12348",
      specialty: "Orthopedics",
      patients: 212,
    },
  ];

  return (
    <div>
      <PageHeader onAddClick={() => setIsModalOpen(true)} />
      <SearchBar />
      <DoctorsTable doctors={doctors} />

      {/* Modal */}
      <AddDoctorModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
}

export default DoctorManagement;
