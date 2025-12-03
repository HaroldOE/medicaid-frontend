import HeaderSection from "./HeaderSection";
import PatientCard from "./PatientCard";

const patients = [
  {
    name: "John Doe",
    age: 45,
    gender: "Male",
    phone: "+1-555-1234",
    email: "john@example.com",
    joinDate: "2025-01-15",
  },
  {
    name: "Sarah Johnson",
    age: 32,
    gender: "Female",
    phone: "+1-555-2234",
    email: "sarah.j@example.com",
    joinDate: "2023-03-22",
  },
  {
    name: "Michael Brown",
    age: 58,
    gender: "Male",
    phone: "+1-555-3234",
    email: "mbrown@gmail.com",
    joinDate: "2022-11-10",
  },
  {
    name: "Emily Davis",
    age: 28,
    gender: "Female",
    phone: "+1-555-4234",
    email: "emily.d@example.com",
    joinDate: "2025-05-05",
  },
  {
    name: "Robert Wilson",
    age: 72,
    gender: "Male",
    phone: "+1-555-5234",
    email: "robert@gmail.com",
    joinDate: "2022-08-18",
  },
  {
    name: "Lisa Martinez",
    age: 35,
    gender: "Female",
    phone: "+1-555-6234",
    email: "lisa.m@example.com",
    joinDate: "2024-04-12",
  },
];

export default function MyPatientsPage() {
  return (
    <div className="p-8">
      <HeaderSection />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {patients.map((patient, i) => (
          <PatientCard key={i} patient={patient} />
        ))}
      </div>
    </div>
  );
}
