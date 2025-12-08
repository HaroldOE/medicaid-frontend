// components/AdminSidebar.jsx
import React from 'react';
import { useAuth } from "../../contextapi/AuthContext"; 
import { 
  Home, 
  Users, 
  Stethoscope, 
  BarChart2, 
  AlertCircle, 
  Server, 
  Settings, 
  LogOut, 
  Hospital 
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', icon: Home, href: '/admin-dashboard', current: true },
  { name: 'User Management', icon: Users, href: '/user-management', current: false },
  { name: 'Doctor Management', icon: Stethoscope, href: '/doctor-management', current: false },
  { name: 'Analytics', icon: BarChart2, href: '/platform-analytics', current: false },
  { name: 'Emergency Monitor', icon: AlertCircle, href: '/emergency-monitor-page', current: false },
  { name: 'System Health', icon: Server, href: '/admin-system-health', current: false },
  { name: 'Settings', icon: Settings, href: '/admin/settings', current: false },
];

const AdminSidebar = () => {
  const { logout } = useAuth();

  const handleLogout = () => {
    logout();
    window.location.href = "/"; 
  };

  return (
    <div className="w-64 bg-blue-900 text-white h-screen flex flex-col">
      {/* Logo & Title */}
      <div className="p-6 border-b border-blue-800">
        <div className="flex items-center">
          <Hospital className="h-8 w-8 text-cyan-400" />
          <span className="ml-3 text-2xl font-bold">HealthCare</span>
        </div>
        <p className="mt-1 text-sm text-blue-200 font-medium">Admin Portal</p>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-4 py-6 space-y-1">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <a
              key={item.name}
              href={item.href}
              className={`
                flex items-center px-4 py-3 text-sm font-medium rounded-lg transition-all duration-200
                ${item.current
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-400/30 shadow-lg shadow-cyan-500/10'
                  : 'text-blue-100 hover:bg-white/10 hover:text-white'
                }
              `}
              aria-current={item.current ? 'page' : undefined}
            >
              <Icon className={`h-5 w-5 mr-3 ${item.current ? 'text-cyan-300' : 'text-blue-300'}`} />
              {item.name}
            </a>
          );
        })}
      </nav>

      {/* Logout */}
      <div className="p-4 border-t border-blue-800">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 text-red-400 hover:text-red-300"
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;