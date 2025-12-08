// src/App.jsx
import { useState } from "react";
import Sidebar from "../components/PatientSidebar";
import NotificationCard from "../components/NotificationsCard";
import { ArrowLeft, Bell } from "lucide-react";

const initialNotifications = [
  {
    id: 1,
    type: "prescription",
    title: "Prescription Refill Approved",
    description:
      "Your request for Lisinopril has been approved and is ready for pickup.",
    time: "2 hours ago",
    unread: true,
  },
  {
    id: 2,
    type: "appointment",
    title: "Appointment Reminder",
    description:
      "You have an upcoming appointment with Dr. James Mitchell on December 12 at 10:00 AM.",
    time: "1 day ago",
    unread: true,
  },
  {
    id: 3,
    type: "records",
    title: "Medical Records Updated",
    description:
      "Your recent blood work results have been added to your medical history.",
    time: "1 day ago",
    unread: false,
  },
  {
    id: 4,
    type: "important",
    title: "Important: Blood Pressure Check",
    description:
      "Reminder to monitor your blood pressure daily this week as advised.",
    time: "2 days ago",
    unread: true,
  },
  {
    id: 5,
    type: "message",
    title: "New Message from Doctor",
    description:
      "Dr. Sarah Johnson sent you a message regarding your recent consultation.",
    time: "3 days ago",
    unread: true,
  },
  {
    id: 6,
    type: "emergency",
    title: "Emergency Contact Verified",
    description: "Your emergency contact has been verified and is up to date.",
    time: "1 week ago",
    unread: false,
  },
];

export default function App() {
  const [notifications, setNotifications] = useState(initialNotifications);
  const [view, setView] = useState("all"); // "all" or "unread"
  const [settings, setSettings] = useState({
    prescription: true,
    appointment: true,
    medical: true,
    messages: true,
  });

  const unreadCount = notifications.filter((n) => n.unread).length;

  const displayedNotifications =
    view === "unread" ? notifications.filter((n) => n.unread) : notifications;

  const markAsRead = (id) => {
    setNotifications((prev) =>
      prev.map((notif) =>
        notif.id === id ? { ...notif, unread: false } : notif
      )
    );
  };

  const toggleSetting = (key) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem="Notifications" isPatientPortal />

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
          <div className="max-w-4xl mx-auto">
            <a
              href="#"
              className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </a>
            <div className="flex justify-between items-center mt-2">
              <div>
                <h1 className="text-3xl font-bold">Notifications</h1>
                <p className="text-gray-600">
                  Stay updated with the latest alerts and messages
                </p>
              </div>

              {/* All / Unread Toggle */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  onClick={() => setView("all")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition ${
                    view === "all"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  All
                </button>
                <button
                  onClick={() => setView("unread")}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition flex items-center gap-2 ${
                    view === "unread"
                      ? "bg-white shadow-sm text-blue-600"
                      : "text-gray-600"
                  }`}
                >
                  Unread
                  {unreadCount > 0 && (
                    <span className="bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
                      {unreadCount}
                    </span>
                  )}
                </button>
              </div>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-8 space-y-6">
          {/* Notifications List */}
          <section className="space-y-4">
            {displayedNotifications.length === 0 ? (
              <p className="text-center text-gray-500 py-8">
                No {view === "unread" ? "unread" : ""} notifications
              </p>
            ) : (
              displayedNotifications.map((notif) => (
                <NotificationCard
                  key={notif.id}
                  {...notif}
                  onMarkRead={() => markAsRead(notif.id)}
                />
              ))
            )}
          </section>

          {/* Notification Settings Card */}
          <section className="bg-gray-50 rounded-xl p-6 max-w-md">
            <h2 className="text-lg font-semibold mb-4 flex items-center gap-2">
              <Bell size={20} />
              Notification Settings
            </h2>
            <div className="space-y-3">
              {[
                { key: "prescription", label: "Prescription Updates" },
                { key: "appointment", label: "Appointment Reminders" },
                { key: "medical", label: "Medical Alerts" },
                { key: "messages", label: "Doctor Messages" },
              ].map((item) => (
                <label
                  key={item.key}
                  className="flex items-center justify-between cursor-pointer"
                >
                  <span className="text-gray-700 text-sm">{item.label}</span>
                  <input
                    type="checkbox"
                    checked={settings[item.key]}
                    onChange={() => toggleSetting(item.key)}
                    className="w-5 h-5 text-blue-600 rounded focus:ring-blue-500 border-gray-300"
                  />
                </label>
              ))}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
