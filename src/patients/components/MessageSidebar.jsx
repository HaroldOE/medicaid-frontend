// src/components/patient/messages/MessagesSidebar.jsx
import ConversationList from "./ConversationList";

export default function MessagesSidebar() {
  return (
    <div className="w-96 bg-white border-r border-gray-200 flex flex-col">
      <div className="p-6 border-b border-gray-200">
        <a
          href="#"
          className="text-sm text-gray-600 hover:underline mb-4 inline-block"
        >
          Back to Dashboard
        </a>
        <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
        <p className="text-gray-600 mt-1">Communicate with your Doctor</p>
      </div>

      <div className="p-4">
        <div className="relative">
          <svg
            className="absolute left-4 top-3.5 w-5 h-5 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <input
            type="text"
            placeholder="Search Conversation"
            className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      </div>

      <ConversationList />
    </div>
  );
}
