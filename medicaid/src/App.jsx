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
import PatientConsultationPage from "./patients/pages/PatientsConsultationPage";
import PatientMessagesPage from "./patients/pages/PatientsMessagesPage";
import PatientDashboards from "./patients/pages/PatientDashboards";
// import MedicalHistory from "./patients/pages/MedicalHistory";
// import MedHistory from "./patients/pages/MedHistory";
// import MedHistoryDashboard from "./patients/pages/MedHIstoryDashboard";
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
      {/* <PatientPrescriptionsPage /> */}
      {/* <PatientConsultationPage /> */}
      {/* <PatientMessagesPage /> */}
      <PatientDashboards />
      {/* <MedicalHistory /> */}
      {/* <MedHistory /> */}
      {/* <MedHistoryDashboard/> */}
    </>
  );
}

export default App;
