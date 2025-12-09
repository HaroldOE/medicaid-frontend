import { useAuth } from "../../contextapi/AuthContext";

export default function DashboardHeader() {
  const { user } = useAuth();
  const userName =
    user?.fullname || user?.name || user?.email?.split("@")[0] || "User";
  return (
    <div className="mb-10">
      <h1 className="text-4xl font-bold text-gray-900">
        Welcome back, {userName}
      </h1>
      <p className="text-lg text-gray-600 mt-2">
        Manage your health effortlessly
      </p>
    </div>
  );
}
