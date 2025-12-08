// src/components/patient/messages/ChatHeader.jsx
import { Video, MoreVertical } from "lucide-react";

export default function ChatHeader() {
  return (
    <div className="bg-white border-b border-gray-200 p-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-white font-bold">
          MJ
        </div>
        <div>
          <h3 className="font-bold text-gray-900">Michael Johnson</h3>
          <p className="text-sm text-green-600">Active Now</p>
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="p-3 hover:bg-gray-100 rounded-xl transition">
          <Video className="w-6 h-6 text-gray-600" />
        </button>
        <button className="p-3 hover:bg-gray-100 rounded-xl transition">
          <MoreVertical className="w-6 h-6 text-gray-600" />
        </button>
      </div>
    </div>
  );
}
