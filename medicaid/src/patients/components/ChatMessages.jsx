// src/components/patient/messages/ChatMessages.jsx
const messages = [
  {
    text: "I'll follow the instructions carefully and let you know if I notice any side effects or if symptoms persist.",
    time: "11:50AM",
    isPatient: true,
  },
  {
    text: "You're welcome! Please make sure to take the medication as prescribed.",
    time: "11:00AM",
    isPatient: false,
  },
  { text: "Thanks again!", time: "10:30AM", isPatient: true },
];

export default function ChatMessages() {
  return (
    <div className="flex-1 overflow-y-auto p-6 space-y-6">
      {messages.map((msg, i) => (
        <div
          key={i}
          className={`flex ${msg.isPatient ? "justify-end" : "justify-start"}`}
        >
          <div
            className={`max-w-xs px-5 py-3 rounded-2xl ${
              msg.isPatient
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-800"
            }`}
          >
            <p>{msg.text}</p>
            <p
              className={`text-xs mt-1 ${
                msg.isPatient ? "text-blue-200" : "text-gray-500"
              }`}
            >
              {msg.time}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}
