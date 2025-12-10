// src/components/ProfileSubNav.jsx
import { User, Lock, Bell, HelpCircle } from "lucide-react";

const subMenu = [
  {
    key: "account",
    icon: User,
    title: "Account settings",
    desc: "Manage your profile information",
  },
  {
    key: "security",
    icon: Lock,
    title: "Security",
    desc: "Password and authentication",
  },
  {
    key: "notifications",
    icon: Bell,
    title: "Notifications",
    desc: "Email and SMS preferences",
  },
  {
    key: "support",
    icon: HelpCircle,
    title: "Help & Support",
    desc: "FAQ and support options",
  },
];

export default function ProfileSubNav({ activeTab, onTabChange }) {
  return (
    <nav className="w-80 bg-white rounded-xl shadow-sm p-6">
      <ul className="space-y-3">
        {subMenu.map((item) => {
          const Icon = item.icon;
          const isActive = activeTab === item.key;
          return (
            <li key={item.key}>
              <button
                onClick={() => onTabChange(item.key)}
                className={`w-full flex items-center gap-4 px-4 py-4 rounded-lg text-left transition ${
                  isActive ? "bg-blue-600 text-white" : "hover:bg-gray-50"
                }`}
              >
                <Icon size={24} />
                <div>
                  <div
                    className={`font-medium ${
                      isActive ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </div>
                  <div
                    className={`text-sm ${
                      isActive ? "text-blue-100" : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </div>
                </div>
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
