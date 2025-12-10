// src/components/patient/messages/ChatWindow.jsx
import ChatHeader from "./ChatHeader";
import ChatMessages from "./ChatMessages";
import ChatInput from "./ChatInput";

export default function ChatWindow() {
  return (
    <div className="flex-1 flex flex-col bg-gray-50">
      <ChatHeader />
      <ChatMessages />
      <ChatInput />
    </div>
  );
}
