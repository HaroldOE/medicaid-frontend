import { BrowserRouter, Route, Routes } from "react-router";

import RoleSelection from "./layouts/RoleSelection";
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
import PatientMedicalHistoryPage from "./doctors/pages/PatientMedicalHistoryPage";
import PatientAppointmentsPage from "./doctors/pages/PatientAppointmentsPage";
import ProfileSettingsPage from "./patients/pages/ProfileSettingsPage";
import PateintNotificationPage from "./patients/pages/PatientNotificationsPage";
import PatientDocumentationPage from "./patients/pages/PatientsDocumentationPage";
import EmergecyContactCard from "./patients/pages/EmmergencyContactPAge";
// import PatientMedHistory from "./patients/pages/PatientMedHistory";
import MainMedHistory from "./patients/pages/MainMedHistory";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />

        {/* Doctor Login Route */}

        {/* <Route path="/doclogin" element={<DocLogin />} /> */}
        {/* <Route path="/doccreate" element={<DocCreateAccount />} /> */}
        {/* <Route path="/docpassreset" element={<DocPasswordReset />} /> */}
        {/* <Route path="/docverifypass" element={<DocVerifyPassword />} /> */}
        <Route path="doctor-dashboard" element={<DoctorsDashboard />} />
        <Route
          path="doctor-patient-dashboard"
          element={<MyPatientsDashboard />}
        />
        <Route
          path="doctors-consultation-page"
          element={<PatientConsultationsPage />}
        />
        <Route path="doctors-message-page" element={<MessagePage />} />
        <Route
          path="doctors-appointments-page"
          element={<AppointmentsPage />}
        />
        <Route
          path="doctors-prescriptions-page"
          element={<PrescriptionsPage />}
        />
        <Route path="doctor-analytics-page" element={<AnalyticsPage />} />
        <Route
          path="doctor-documentation-page"
          element={<DocumentationPage />}
        />
        <Route
          path="doctor-patient-prescriptions-page"
          element={<PatientPrescriptionsPage />}
        />
        <Route
          path="doctor-patient-consultation-page"
          element={<PatientConsultationPage />}
        />
        <Route
          path="doctor-patient-messages-page"
          element={<PatientMessagesPage />}
        />
        <Route
          path="doctor-patient-consultation-page"
          element={<PatientConsultationPage />}
        />

        {/* PATIENTS ROUTE */}
        <Route path="Patient-messages-page" element={<PatientMessagesPage />} />
        <Route
          path="patient-medical-history"
          element={<PatientMedicalHistoryPage />}
        />
        <Route
          path="patient-appointments-page"
          element={<PatientAppointmentsPage />}
        />
        <Route path="Profile-settings-page" element={<ProfileSettingsPage />} />
        <Route
          path="pateint-notification-page"
          element={<PateintNotificationPage />}
        />
        <Route
          path="patient-documentation-page"
          element={<PatientDocumentationPage />}
        />
        <Route path="emergecy-contact-card" element={<EmergecyContactCard />} />
        <Route path="patients-medical-history" element={<MainMedHistory />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
