// import AppRouter from "./router";
import DoctorsDashboard from "./doctors/pages/DoctorsDashboard";
import MyPatientsDashboard from "./doctors/pages/MyPatientDashboard";
import PatientConsultationsPage from "./doctors/pages/PatientConsultationPage";
import MessagePage from "./doctors/pages/MessagePage";
import AppointmentsPage from "./doctors/pages/AppointmentPage";
import PrescriptionsPage from "./doctors/pages/PrescriptionPage";
import AnalyticsPage from "./doctors/pages/AnalyticsPage";
import PatientDashboards from "./patients/pages/PatientDashboards";
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
      {/*<AnalyticsPage />*/}
      {/* <PatientRegistrationForm /> */}
      <PatientDashboards />

    </>
  );
}

export default App;
