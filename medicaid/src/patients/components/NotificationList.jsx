// components/notifications/NotificationList.jsx
import React from 'react';
import NotificationItem from './NotificationItem';
import { Pill, CalendarDays } from 'lucide-react';
import NotificationSettings from './NotificationSettings';

const iconMap = {
  pill: Pill,
  calendar: CalendarDays,
};

export default function NotificationList({ notifications }) {
  return (
    <div className="space-y-5">
      {notifications.map((notif) => (
        <NotificationItem key={notif.id} notification={notif} iconMap={iconMap} />
      ))}
    </div>
  );
}