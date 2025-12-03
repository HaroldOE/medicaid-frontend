// src/components/ProfilePage.jsx
import ProfileHeader from "../components/ProfileHeader";
import DoctorCard from "../components/DoctorCard";
import ContactInfo from "../components/ContactInfo";
import Preferences from "../components/Preferences";
import PasswordSection from "../components/PasswordSection";
import Sidebar from "../components/Sidebar";

export default function ProfilePage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <ProfileHeader />
        <DoctorCard />
        <ContactInfo />
        <Preferences />
        <PasswordSection />
      </main>
    </div>
  );
}
