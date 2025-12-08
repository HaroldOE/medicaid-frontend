import DashboardHeader from "../components/DashboardHeader";
import EmergencyBanner from "../components/EmergencyBanner";
import QuickActionCard from "../components/QuickActionCard";
import RecentActivities from "../components/RecentActivities";
import PatientSidebar from "../components/PatientSidebar";

export default function PatientDashboard() {
  return (
    // Root flex container – sidebar and main side-by-side on lg+, stacked on mobile
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-50">
      {/* ==================== SIDEBAR ==================== */}
      {/* Full height, sticky, dark blue like in your screenshot */}
      <aside className="w-full lg:w-64 flex-shrink-0 bg-[#0F172A] text-white">
        <div className="h-screen sticky top-0 overflow-y-auto">
          <PatientSidebar />
        </div>
      </aside>

      {/* ==================== MAIN CONTENT ==================== */}
      <main className="flex-1 min-w-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-12 space-y-8">
          {/* Header */}
          <DashboardHeader />

          {/* Red Emergency Banner */}
          <EmergencyBanner />

          {/* Quick Action Cards Grid – matches your 3 then 3 layout */}
          <QuickActionCard />

          {/* Recent Activities */}
          <RecentActivities />
        </div>
      </main>
    </div>
  );
}
