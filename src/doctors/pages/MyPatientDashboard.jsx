import Sidebar from "../components/Sidebar";
import MyPatientsHeader from "../components/HeaderSection";
import MyPatientsGrid from "../components/MypatientGrid";

export default function MyPatientsDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        {/* <MyPatientsHeader /> */}
        <MyPatientsGrid />
      </main>
    </div>
  );
}
