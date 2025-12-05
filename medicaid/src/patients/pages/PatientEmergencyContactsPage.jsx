import { ChevronLeft, Plus } from 'lucide-react';
import PatientEmergencyContactsList from './EmergencyContactsList';

const EmergencyContactsPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* We'll import your existing Sidebar here */}

      <div className="flex-1 ml-64"> {/* This offset matches your sidebar width */}
        <div className="max-w-4xl mx-auto px-6 py-8">
          {/* Header */}
          <div className="mb-8">
            <a href="/dashboard" className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 mb-4">
              <ChevronLeft size={16} />
              Back to Dashboard
            </a>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold text-gray-900">Emergency Contacts</h1>
              <button className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-3 rounded-lg transition">
                <Plus size={20} />
                Add Contact
              </button>
            </div>
            <p className="text-gray-600 mt-2">Manage your emergency contacts and set your primary contact.</p>
          </div>

          {/* Contacts List */}
          <PatientEmergencyContactsList />
        </div>
      </div>
    </div>
  );
};

export default PatientEmergencyContactsPage;