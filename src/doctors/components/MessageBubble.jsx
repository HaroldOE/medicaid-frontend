export default function MessageBubble({ msg, isSent }) {
  return (
    <div className={`flex ${isSent ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`max-w-xs px-4 py-3 rounded-2xl ${
          isSent ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-800"
        }`}
      >
        <p className="text-sm">{msg.text}</p>
        <span
          className={`text-xs block mt-1 ${
            isSent ? "text-blue-200" : "text-gray-500"
          }`}
        >
          {msg.time}
        </span>
      </div>
    </div>
  );
}
