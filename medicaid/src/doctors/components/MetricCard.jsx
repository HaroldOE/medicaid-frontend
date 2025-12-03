import { Users, Clock, CheckCircle, TrendingUp } from "lucide-react";

const icons = {
  patients: Users,
  response: Clock,
  completion: CheckCircle,
  growth: TrendingUp,
};

const colors = {
  patients: "bg-blue-100 text-blue-700",
  response: "bg-gray-100 text-gray-700",
  completion: "bg-green-100 text-green-700",
  growth: "bg-pink-100 text-pink-700",
};

export default function MetricCard({
  title,
  value,
  change,
  type = "patients",
}) {
  const Icon = icons[type];

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-medium text-gray-600">{title}</h3>
        <div className={`p-3 rounded-lg ${colors[type]}`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div>
        <p className="text-3xl font-bold text-gray-900">{value}</p>
        {change && (
          <p
            className={`text-sm mt-2 ${
              change.startsWith("+") ? "text-green-600" : "text-red-600"
            }`}
          >
            {change} from last month
          </p>
        )}
      </div>
    </div>
  );
}
