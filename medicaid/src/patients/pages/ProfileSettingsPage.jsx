// src/App.jsx
import { useState } from "react";
import Sidebar from "../components/PatientSidebar";
import ProfileSubNav from "../components/ProfileSubNav";
import AccountSettings from "../components/AccountSettings";
import SecuritySettings from "../components/SecuritySettings";
import NotificationPreferences from "../components/NotificationPreferences";
import HelpSupport from "../components/HelpSupport";
import { ArrowLeft } from "lucide-react";

const tabs = {
  account: <AccountSettings />,
  security: <SecuritySettings />,
  notifications: <NotificationPreferences />,
  support: <HelpSupport />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem="Profile" isPatientPortal />

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
          <div className="max-w-6xl mx-auto">
            <a
              href="#"
              className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </a>
            <h1 className="text-3xl font-bold mt-2">Profile Settings</h1>
          </div>
        </header>

        <div className="max-w-6xl mx-auto p-8 flex gap-8">
          {/* Sub Navigation */}
          <ProfileSubNav activeTab={activeTab} onTabChange={setActiveTab} />

          {/* Dynamic Content */}
          <div className="flex-1">{tabs[activeTab]}</div>
        </div>
      </main>
    </div>
  );
}
