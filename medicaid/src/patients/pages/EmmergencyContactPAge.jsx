// src/App.jsx
import { useState } from "react";
import Sidebar from "../components/PatientSidebar";
import ContactCard from "../components/ContactCard";
import AddContactForm from "../components/AddContactForm";
import { ArrowLeft, Phone } from "lucide-react";

const initialContacts = [
  {
    id: 1,
    name: "Jane Doe",
    relationship: "Spouse",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345",
    isPrimary: true,
  },
  {
    id: 2,
    name: "John Doe",
    relationship: "Son",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Ave, City, State 12345",
    isPrimary: false,
  },
  {
    id: 3,
    name: "Alice Smith",
    relationship: "Sister",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Rd, City, State 12345",
    isPrimary: false,
  },
];

export default function App() {
  const [contacts, setContacts] = useState(initialContacts);
  const [showAddForm, setShowAddForm] = useState(false);

  const addContact = (newContact) => {
    setContacts((prev) => {
      const updated = prev.map((c) => ({ ...c, isPrimary: false })); // Demote others if new is primary
      if (newContact.isPrimary) {
        return [newContact, ...updated];
      }
      return [...updated, newContact];
    });
    setShowAddForm(false);
  };

  const deleteContact = (id) => {
    setContacts((prev) => prev.filter((c) => c.id !== id));
  };

  const setPrimary = (id) => {
    setContacts((prev) => prev.map((c) => ({ ...c, isPrimary: c.id === id })));
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar activeItem="Emergency Contacts" isPatientPortal />

      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm border-b border-gray-200 px-8 py-6">
          <div className="max-w-4xl mx-auto">
            <a
              href="#"
              className="text-blue-600 text-sm flex items-center gap-1 hover:underline"
            >
              <ArrowLeft size={16} />
              Back to Dashboard
            </a>
            <div className="flex justify-between items-center mt-2">
              <div>
                <h1 className="text-3xl font-bold">Emergency Contacts</h1>
                <p className="text-gray-600">Manage your emergency contacts</p>
              </div>
              <button
                onClick={() => setShowAddForm(!showAddForm)}
                className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition flex items-center gap-2"
              >
                + Add Contact
              </button>
            </div>
          </div>
        </header>

        <div className="max-w-4xl mx-auto p-8 space-y-6">
          {/* Add Contact Form - Inline Card */}
          {showAddForm && (
            <AddContactForm
              onSave={addContact}
              onCancel={() => setShowAddForm(false)}
            />
          )}

          {/* Contacts List */}
          <section className="space-y-6">
            {contacts.length === 0 ? (
              <p className="text-center text-gray-500 py-12">
                No emergency contacts added yet.
              </p>
            ) : (
              contacts.map((contact) => (
                <ContactCard
                  key={contact.id}
                  contact={contact}
                  onDelete={deleteContact}
                  onSetPrimary={setPrimary}
                />
              ))
            )}
          </section>
        </div>
      </main>
    </div>
  );
}
