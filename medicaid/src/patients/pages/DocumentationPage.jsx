import Sidebar from './Sidebar';
import DocumentationHeader from './DocumentationHeader';
import AccordionItem from './AccordionItem';

export default function DocumentationPage() {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      {/* Your existing Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <main className="flex-1 px-12 py-10">
        <div className="text-sm text-gray-500 mb-2">Patients Portal Documentation</div>

        <DocumentationHeader />

        <div className="mt-10 max-w-4xl mx-auto space-y-4">
          <AccordionItem title="Getting Started" defaultOpen={true}>
            <div className="text-sm text-gray-600 space-y-2">
              <p>Welcome to HealthCare! This guide will help you navigate the portal.</p>
              <ol className="list-decimal list-inside space-y-1 ml-4">
                <li>Log in using your registered email and password.</li>
                <li>Complete your profile with accurate and up-to-date contact information.</li>
                <li>Explore the menu on the left to access appointments, messages, prescriptions, etc.</li>
                <li>Notify your doctor about any concerns via the Messages section.</li>
                <li>For urgent matters, please contact our support team immediately.</li>
              </ol>
            </div>
          </AccordionItem>

          <AccordionItem title="Consultations">
            <p className="text-sm text-gray-600">
              Learn how to book, reschedule, or cancel your appointments and view upcoming consultations.
            </p>
          </AccordionItem>

          <AccordionItem title="Managing Prescriptions">
            <p className="text-sm text-gray-600">
              Request prescription refills, view current medications, and download prescription history.
            </p>
          </AccordionItem>

          <AccordionItem title="Medical Records">
            <p className="text-sm text-gray-600">
              Access your lab results, imaging reports, visit summaries, and immunization records.
            </p>
          </AccordionItem>

          <AccordionItem title="Messages">
            <p className="text-sm text-gray-600">
              Securely message your doctor or care team with non-urgent medical questions.
            </p>
          </AccordionItem>

          <AccordionItem title="Emergency Contacts">
            <p className="text-sm text-gray-600">
              Add or update emergency contacts and insurance information.
            </p>
          </AccordionItem>

          <AccordionItem title="Profile & Security">
            <p className="text-sm text-gray-600">
              Update personal information, change password, enable two-factor authentication, and manage notification preferences.
            </p>
          </AccordionItem>
        </div>

        {/* Green Banner */}
        <div className="mt-12 max-w-4xl mx-auto">
          <div className="bg-green-600 text-white rounded-xl p-6 shadow-lg">
            <h3 className="text-lg font-semibold mb-2">Need Help?</h3>
            <p className="text-green-50 mb-4">
              If you have any questions or need assistance, our support team is here to help.
            </p>
            <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-medium hover:bg-green-50 transition">
              Start Tutorial
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}