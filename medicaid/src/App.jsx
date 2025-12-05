// import AppRouter from "./router";
import DoctorsDashboard from "./doctors/pages/DoctorsDashboard";
import MyPatientsDashboard from "./doctors/pages/MyPatientDashboard";
import PatientConsultationsPage from "./doctors/pages/PatientConsultationPage";
import MessagePage from "./doctors/pages/MessagePage";
import AppointmentsPage from "./doctors/pages/AppointmentPage";
import PrescriptionsPage from "./doctors/pages/PrescriptionPage";
import AnalyticsPage from "./doctors/pages/AnalyticsPage";
import ProfilePage from "./doctors/pages/ProfilePage";
import DocumentationPage from "./doctors/pages/DocumentatiomPage";
import PatientPrescriptionsPage from "./patients/pages/PatientsPrescriptionPage";
// import PatientEmergencyContactsPage from "./patients/pages/PatientEmergencyContactsPage";
import NotificationsPage from "./patients/pages/NotificationPage";
import PatientSignupPage from "./patients/pages/PatientSignupPage";

function App() {
  return (
    <>
      {/* <AppRouter /> */}
      {/* <DoctorsDashboard /> */}
      {/* <MessagePage /> */}
      {/* <MyPatientsDashboard /> */}
      {/* <PatientConsultationsPage /> */}
      {/* <AppointmentsPage /> */}
      {/* <PrescriptionsPage /> */}
      {/* <AnalyticsPage /> */}
      {/* <ProfilePage /> */}
      {/* <DocumentationPage /> */}
      {/* <PatientPrescriptionPage /> */}
      {/* <PatientEmergencyContactsPage /> */}
      {/*} <NotificationsPage/> */}
        <PatientSignupPage/>

    </>
  );
}

export default App;
