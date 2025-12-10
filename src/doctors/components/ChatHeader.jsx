import { Camera, Phone, MoreVertical } from "lucide-react";

export default function ChatHeader({ patient }) {
  return (
    <div className="p-6 border-b flex items-center justify-between bg-white">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
          JM
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Dr. James Mitchell</h3>
          <p className="text-sm text-green-600">Active now</p>
        </div>
      </div>
      <div className="flex gap-4">
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Camera className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <Phone className="w-5 h-5" />
        </button>
        <button className="p-2 hover:bg-gray-100 rounded-lg">
          <MoreVertical className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
