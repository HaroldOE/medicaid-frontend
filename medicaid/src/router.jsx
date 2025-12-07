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
import PatientAppointmentsPage from "./patients/pages/PatientAppointmentsPage";
import ProfileSettingsPage from "./patients/pages/ProfileSettingsPage";
import PateintNotificationPage from "./patients/pages/PatientNotificationsPage";
import PatientDocumentationPage from "./patients/pages/PatientsDocumentationPage";
import EmergecyContactCard from "./patients/pages/EmmergencyContactPAge";
// import PatientMedHistory from "./patients/pages/PatientMedHistory";
import PatientDashboard from "./patients/pages/PatientsDashboards";
import MainMedHistory from "./patients/pages/MainMedHistory";
import Login from "./layouts/Login";
import CreateAccount from "./layouts/CreatAccount";
import DocLogin from "./layouts/DocLogin";
import DocCreateAccount from "./layouts/DocCreateAccount";
import AdminDashboard from "./Admin/pages/AdminDashboard";
import UserManagementPage from "./Admin/pages/UserManagementPage";
import DoctorManagementPage from "./Admin/pages/DoctorManagementPage";
import PlatformAnalytics from "./Admin/pages/PlatformAnalytics";
import EmergencyMonitorPage from "./Admin/pages/EmergencyMonitorPage";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RoleSelection />} />

        {/* Doctor Login Route */}

        <Route path="/doctors-login" element={<DocLogin />} />
        <Route path="/doctors-create-account" element={<DocCreateAccount />} />

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
          path="doctor-patient-consultation-page"
          element={<PatientConsultationPage />}
        />
        <Route path="/doctor-profile-page" element={<ProfilePage />} />

        {/*============================== PATIENTS ROUTE */}

        <Route path="login" element={<Login />} />
        <Route path="create-account" element={<CreateAccount />} />

        <Route path="patients-dashboard" element={<PatientDashboard />} />
        <Route path="patient-messages-page" element={<PatientMessagesPage />} />
        <Route
          path="patient-medical-history"
          element={<PatientMedicalHistoryPage />}
        />

        <Route
          path="patient-consultation-page"
          element={<PatientConsultationPage />}
        />
        <Route
          path="patient-appointments-page"
          element={<PatientAppointmentsPage />}
        />
        <Route
          path="patients-prescription-page"
          element={<PatientPrescriptionsPage />}
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
        <Route path="admin-dashboard" element={<AdminDashboard/>}/>
        <Route path="user-management" element={<UserManagementPage/>}/>
        <Route path="doctor-management" element={<DoctorManagementPage />} />
        <Route path="Platform-Analytics" element={<PlatformAnalytics />} />
        <Route path="Emergency-Monitor-Page" element={<EmergencyMonitorPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
