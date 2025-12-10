// src/components/MessagesSidebar.jsx
import { Search } from "lucide-react";

const conversations = [
  {
    id: 1,
    name: "Dr. James Mitchell",
    online: true,
    lastMsg: "You're welcome",
    time: "online",
    active: true,
  },
  {
    id: 2,
    name: "Dr. Sarah Johnson",
    online: false,
    lastMsg: "Glad to assist",
    time: "3 min ago",
  },
  {
    id: 3,
    name: "Dr. Dona King",
    online: false,
    lastMsg: "Can we talk on video call",
    time: "22 min ago",
  },
  {
    id: 4,
    name: "Dr. Benny Donald",
    online: true,
    lastMsg: "Don't hesitate to reach out if your symptoms persist or worsen",
    time: "4 hr ago",
  },
  {
    id: 5,
    name: "Dr. Queen Douglas",
    online: false,
    lastMsg:
      "Take care and remember to complete the full course of the medication",
    time: "5 hr ago",
  },
  {
    id: 6,
    name: "Dr. Mani Benson",
    online: false,
    lastMsg:
      "Make sure to drink plenty of water and get enough rest as part of your recovery",
    time: "1 day ago",
  },
  {
    id: 7,
    name: "Dr. Vera Luckman",
    online: false,
    lastMsg:
      "If you have any allergies or reactions to any medication, please contact me immediately",
    time: "5 hr ago",
  },
];

export default function MessagesSidebar({ onSelect, selectedId }) {
  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col">
      {/* Search */}
      <div className="p-5 border-b">
        <div className="relative">
          <Search className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search conversation"
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {conversations.map((conv) => (
          <button
            key={conv.id}
            onClick={() => onSelect(conv)}
            className={`w-full px-5 py-4 flex items-center gap-3 hover:bg-gray-50 text-left transition ${
              conv.id === selectedId
                ? "bg-blue-50 border-l-4 border-blue-600"
                : ""
            }`}
          >
            <div className="relative flex-shrink-0">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-medium">
                {conv.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              {conv.online && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-gray-900 truncate">
                {conv.name}
              </div>
              <div className="text-sm text-gray-600 truncate">
                {conv.lastMsg}
              </div>
            </div>
            {conv.time !== "online" && (
              <div className="text-xs text-gray-500 whitespace-nowrap">
                {conv.time}
              </div>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}
