import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import StatsCard from "../components/StatsCard";
import PendingAlert from "../components/PendingAlert";
import QuickActionCard from "../components/QuickActionCard";
import RecentPatientsTable from "../components/RecentPatientsTable";

export default function DoctorsDashboard() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />
      <main className="flex-1 p-8">
        <Header />
        <StatsCard />
        <PendingAlert />
        <QuickActionCard />
        <RecentPatientsTable />
      </main>
    </div>
  );
}
