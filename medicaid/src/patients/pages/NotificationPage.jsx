import React from 'react';
import { ChevronLeft } from 'lucide-react';
import NotificationList from '../components/NotificationList';
import NotificationSettings from '../components/NotificationSettings';
import NotificationItem from '../components/NotificationItem';
import PatientSidebar from '../components/PatientSidebar';

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      icon: 'pill',
      title: 'Prescription Refill Approved',
      message: 'Your prescription for Lisinopril has been approved and is ready for pickup.',
      time: '2 hours ago',
      unread: true,
    },
    {
      id: 2,
      icon: 'calendar',
      title: 'Appointment Reminder',
      message: 'You have an upcoming appointment with Dr. Sarah Johnson tomorrow at 10:00am at Uptown Clinic.',
      time: '5 hours ago',
      unread: true,
    },
  ];

  return (
    <div className="flex-1 bg-gray-50 py-8 px-10">
      {/* Header */}
      <PatientSidebar />
      <div className="mb-8">
        <a href="/dashboard" className="inline-flex items-center text-blue-600 text-sm font-medium hover:underline mb-4">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </a>

        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-2">Stay updated with the latest alerts and messages</p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">All Notifications</span>
            <span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full">
              Unread (2)
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left: Notifications */}
        <div className="lg:col-span-2">
          <NotificationList notifications={notifications} />
        </div>

        {/* Right: Settings */}
        <div>
          <NotificationSettings />
        </div>
      </div>
    </div>
  );
}