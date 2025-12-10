import { useAuth } from "../../contextapi/AuthContext";

export default function Header() {
  const { user } = useAuth();
  const userName =
    user?.fullname || user?.name || user?.email?.split("@")[0] || "User";
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">
        Welcome back, Dr. Smith
      </h1>
      <p className="text-gray-600 mt-1">Manage your medical consultation</p>
    </div>
  );
}
