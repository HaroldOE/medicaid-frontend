// src/components/patient/messages/ConversationItem.jsx
export default function ConversationItem({
  name,
  message,
  time,
  active,
  color,
}) {
  const initials = name
    .split(" ")
    .map((n) => n[0])
    .join("");

  return (
    <button
      className={`w-full p-4 flex items-center gap-4 hover:bg-gray-50 transition text-left ${
        active ? "bg-blue-50 border-l-4 border-blue-600" : ""
      }`}
    >
      <div
        className={`w-12 h-12 ${color} rounded-full flex items-center justify-center text-white font-bold`}
      >
        {initials}
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-gray-900">{name}</h3>
        <p className="text-sm text-gray-600 truncate">{message}</p>
      </div>
      <span className="text-xs text-gray-500">{time}</span>
    </button>
  );
}
