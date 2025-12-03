// src/components/MessagesPage.jsx
import { useState } from "react";
import MessagesSidebar from "../components/MessageSidebar";
import ChatHeader from "../components/ChatHeader";
import MessageBubble from "../components/MessageBubble";
import MessageInput from "../components/MessageInput";
import Sidebar from "../components/Sidebar";

const initialMessages = [
  {
    text: "Please follow the dosage instructions carefully and let me know if you notice any side effects.",
    time: "11:30AM",
    isSent: false,
  },
  { text: "Will do as instructed Doctor James", time: "11:32AM", isSent: true },
  { text: "Be safe", time: "11:33AM", isSent: false },
];

export default function MessagesPage() {
  const [messages, setMessages] = useState(initialMessages);
  const [selectedConv, setSelectedConv] = useState(null);

  const handleSend = (text) => {
    const time = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });
    setMessages((prev) => [...prev, { text, time, isSent: true }]);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 flex">
        {/* Left: Narrow Conversations List */}
        <MessagesSidebar
          onSelect={setSelectedConv}
          selectedId={selectedConv?.id}
        />

        {/* Right: Chat Area */}
        <div className="flex-1 flex flex-col">
          {/* Page Header */}
          <div className="px-8 pt-8 pb-4 bg-white border-b">
            <a
              href="#"
              className="text-sm text-gray-600 hover:underline inline-block mb-2"
            >
              Back to Dashboard
            </a>
            <h1 className="text-3xl font-bold text-gray-900">Messages</h1>
            <p className="text-gray-600 mt-1">Communicate with your Patients</p>
          </div>

          {selectedConv ? (
            <>
              <ChatHeader patient={selectedConv} />
              <div className="flex-1 overflow-y-auto p-6 bg-gray-50 space-y-5">
                {messages.map((msg, i) => (
                  <MessageBubble key={i} msg={msg} isSent={msg.isSent} />
                ))}
              </div>
              <MessageInput onSend={handleSend} />
            </>
          ) : (
            <div className="flex-1 flex items-center justify-center bg-gray-50 text-gray-400">
              <p className="text-lg">
                Select a conversation to start messaging
              </p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
