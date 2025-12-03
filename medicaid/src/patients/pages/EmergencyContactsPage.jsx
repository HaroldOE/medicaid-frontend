import { Plus } from 'lucide-react';
import EmergencyContactCard from '../components/EmergencyContactCard';
import Breadcrumb from '../components/Breadcrumb';
import PatientSidebar from '../components/PatientSidebar';

const contacts = [
  {
    name: "Jane Doe",
    relation: "spouse",
    phone: "+1 (555) 123-4567",
    address: "123 Main St, City, State 12345"
  },
  {
    name: "John Doe",
    relation: "son",
    phone: "+1 (555) 234-5678",
    address: "456 Oak Ave, City, State 12345"
  },
  {
    name: "Alice Smith",
    relation: "sister",
    phone: "+1 (555) 345-6789",
    address: "789 Pine Rd, City, State 12345"
  }
];

export default function EmergencyContactsPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Your existing sidebar - just import it */}
      <PatientSidebar />

      {/* Main Content */}
      <div className="flex-1 ml-64"> {/* ml-64 assumes sidebar is 256px wide */}
        <div className="max-w-4xl mx-auto py-8 px-6">
          <Breadcrumb />

          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">Emergency Contacts</h1>
              <p className="text-sm text-gray-600 mt-1">
                Manage your emergency contacts
              </p>
            </div>
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2.5 rounded-lg flex items-center gap-2 transition">
              <Plus className="w-5 h-5" />
              Add Contact
            </button>
          </div>

          <div className="space-y-6">
            {contacts.map((contact, index) => (
              <EmergencyContactCard
                key={index}
                contact={contact}
                isPrimary={index === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}