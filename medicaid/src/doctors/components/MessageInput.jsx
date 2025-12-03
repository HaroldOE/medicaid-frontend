import { Paperclip, Smile, Send } from "lucide-react";
import { useState } from "react";

export default function MessageInput({ onSend }) {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  return (
    <div className="p-6 bg-white border-t">
      <div className="flex items-center gap-3">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Paperclip className="w-5 h-5 text-gray-600" />
        </button>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type a message..."
          className="flex-1 px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Smile className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={handleSend}
          className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full transition"
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
