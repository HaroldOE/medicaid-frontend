import DashboardHeader from './patients/components/DashboardHeader';
import EmergencyBanner from './patients/components/EmergencyBanner';
import QuickActionCard from './patients/componentsQuickActionCard';
import RecentActivities from './patients/components/RecentActivities';

export default function PatientDashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-10">
        <DashboardHeader />
        <EmergencyBanner />
        <QuickActionCard />
        <RecentActivities />
      </div>
    </div>
  );
}