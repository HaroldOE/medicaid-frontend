// App.jsx
import react from 'react';
import { Home, Users, Stethoscope, BarChart2, AlertCircle, Server, Settings, LogOut, Hospital, MessageSquare, TrendingUp } from 'lucide-react';
import AdminSidebar from '../components/AdminSidebar';
import StatsCard from '../components/StatsCard';
import QuickAction from '../components/QuickAction';
import AlertItem from '../components/AlertItem';
import ActivityItem from '../components/ActivityItem';

const App = () => {
  return (
    <div className="flex h-screen bg-white">
      <AdminSidebar />
      <div className="flex-1 p-6 overflow-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Admin Dashboard</h1>
        <p className="text-sm text-gray-500 mb-6">Manage platform, users and system health</p>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <StatsCard 
            title="Total Users" 
            value="50,250" 
            change="+2.5% this month" 
          />
          <StatsCard 
            title="Active Doctors" 
            value="528" 
            change="+12% this week" 
            icon={<Stethoscope className="h-5 w-5 text-green-500" />}
          />
          <StatsCard 
            title="Consultations Today" 
            value="243" 
            change="+8.2% from yesterday" 
            icon={<MessageSquare className="h-5 w-5 text-green-500" />}
          />
          <StatsCard 
            title="System Health" 
            value="99.8%" 
            change="Excellent status" 
            icon={<TrendingUp className="h-5 w-5 text-green-500" />}
          />
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <QuickAction icon={<Users className="h-6 w-6 mb-2" />} title="Manage Users" />
          <QuickAction icon={<Stethoscope className="h-6 w-6 mb-2" />} title="Manage Doctors" />
          <QuickAction icon={<BarChart2 className="h-6 w-6 mb-2" />} title="Analytics" />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow">
            <div className="flex items-center mb-4">
              <span className="bg-red-100 text-red-600 text-xs font-medium px-2 py-1 rounded-full mr-2">1</span>
              <h3 className="text-lg font-bold text-gray-900">System Alerts</h3>
            </div>
            <AlertItem 
              color="bg-yellow-400" 
              title="High Server Load" 
              description="Server running at 85% capacity" 
              time="10 min ago" 
            />
            <AlertItem 
              color="bg-green-500" 
              title="Backup Complete" 
              description="Database Backup Complete successfully" 
              time="2 hours ago" 
            />
            <AlertItem 
              color="bg-blue-600" 
              title="Backup Complete" 
              description="Platform maintenance scheduled for tomorrow" 
              time="5 hours ago" 
            />
          </div>
          
          <div className="bg-white p-4 rounded-lg shadow">
            <h3 className="text-lg font-bold text-gray-900 mb-4">
              <span className="text-blue-500 mr-1">•</span>
              Recent Activity
            </h3>
            <ActivityItem text="New user registration john@example.com" time="5 min ago" />
            <ActivityItem text="Doctor account verified Dr. Sarah Wilson" time="15 min ago" />
            <ActivityItem text="Emergency consultation #23451" time="20 min ago" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;