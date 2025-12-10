// src/components/patient/messages/ChatInput.jsx
import { Paperclip, Send } from "lucide-react";

export default function ChatInput() {
  return (
    <div className="bg-white border-t border-gray-200 p-4">
      <div className="flex items-center gap-3">
        <button className="p-3 hover:bg-gray-100 rounded-xl transition">
          <Paperclip className="w-6 h-6 text-gray-600" />
        </button>
        <input
          type="text"
          placeholder="Type a message..."
          className="flex-1 px-5 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition">
          <Send className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}
