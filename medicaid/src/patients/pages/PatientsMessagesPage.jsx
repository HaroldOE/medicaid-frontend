// src/components/patient/messages/PatientMessagesPage.jsx
import PatientSidebar from "../components/PatientSidebar";
import MessagesSidebar from "../components/MessageSidebar";
import ChatWindow from "../components/ChatWIndow";

export default function PatientMessagesPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <PatientSidebar />
      <div className="flex flex-1">
        <MessagesSidebar />
        <ChatWindow />
      </div>
    </div>
  );
}
