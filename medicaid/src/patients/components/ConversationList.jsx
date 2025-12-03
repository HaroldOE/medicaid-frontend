// src/components/patient/messages/ConversationList.jsx
import ConversationItem from "./ConversationItem";

const conversations = [
  {
    name: "Michael Johnson",
    message: "Thank you for the prescription",
    time: "2 min ago",
    active: true,
    color: "bg-yellow-500",
  },
  {
    name: "Emily Peter",
    message: "When is my next appointment",
    time: "5 min ago",
    color: "bg-pink-500",
  },
  {
    name: "Sarah James",
    message: "Can we talk on video call",
    time: "1 hr ago",
    color: "bg-blue-500",
  },
  {
    name: "Martins Luck",
    message: "My appointment is overdue",
    time: "4 hr ago",
    color: "bg-purple-500",
  },
  {
    name: "Goodnews Hope",
    message: "You're yet to respond to my message",
    time: "5 hr ago",
    color: "bg-green-500",
  },
  {
    name: "Mary Fabian",
    message: "Thank you for the call",
    time: "5 hr ago",
    color: "bg-red-500",
  },
  {
    name: "Noble John",
    message: "I have rescheduled my appointment",
    time: "6 hr ago",
    color: "bg-indigo-500",
  },
];

export default function ConversationList() {
  return (
    <div className="flex-1 overflow-y-auto">
      {conversations.map((conv, i) => (
        <ConversationItem key={i} {...conv} />
      ))}
    </div>
  );
}
