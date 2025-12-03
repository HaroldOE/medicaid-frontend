// pages/NotificationsPage.jsx
import React from 'react';
import { ChevronLeft, Bell, MessageCircle, Pill, Calendar, FileText, Settings } from 'lucide-react';
import NotificationList from '../components/NotificationList';
import NotificationSettings from '../components/NotificationSettings';
import NotificationItem from '../components/NotificationItem';

const NotificationsPage = () => {
  const notifications = [
    {
      id: 1,
      type: 'prescription',
      title: 'Prescription Refill Approved',
      message: 'Your prescription for Lisinopril has been approved and is ready for pickup.',
      time: '2 hours ago',
      icon: Pill,
      unread: true,
    },
    {
      id: 2,
      type: 'appointment',
      title: 'Appointment Reminder',
      message: 'You have an upcoming appointment with Dr. Sarah Johnson tomorrow at 10:00am.',
      time: '1 hour ago',
      icon: Calendar,
      unread: true,
    },
  ];

  return (
    <div className="flex-1 p-8">
      {/* Header */}
      <div className="mb-8">
        <a href="/dashboard" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mb-4">
          <ChevronLeft className="w-4 h-4 mr-1" />
          Back to Dashboard
        </a>
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Notifications</h1>
            <p className="text-gray-600 mt-1">
              Stay updated with the latest alerts and messages
            </p>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-gray-500">All Notifications</span>
            <span className="bg-blue-600 text-white text-xs font-medium px-3 py-1 rounded-full">
              Unread (2)
            </span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Notifications List */}
        <div className="lg:col-span-2">
          <NotificationList notifications={notifications} />
        </div>

        {/* Notification Settings */}
        <div className="lg:col-span-1">
          <NotificationSettings />
        </div>
      </div>
    </div>
  );
};

export default NotificationsPage;