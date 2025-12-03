import AnalyticsHeader from "../components/AnalyticsHeader";
import MetricCard from "../components/MetricCard";
import BarChart from "../components/BarChart";
import LineChart from "../components/LineChart";
import Sidebar from "../components/Sidebar";

export default function AnalyticsPage() {
  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar />

      <main className="flex-1 p-8">
        <AnalyticsHeader />

        {/* Metric Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <MetricCard title="Total Patient" value="248" type="patients" />
          <MetricCard
            title="Avg Response Time"
            value="2.3 hrs"
            type="response"
          />
          <MetricCard
            title="Appointment Completion"
            value="96%"
            type="completion"
          />
          <MetricCard
            title="Patient Growth"
            value="+12%"
            change="+12%"
            type="growth"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <BarChart />
          <LineChart />
        </div>

        {/* Export Report */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">
            Export Report
          </h3>
          <div className="flex flex-wrap gap-3">
            <button className="px-5 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition flex items-center gap-2">
              Download as PDF
            </button>
            <button className="px-5 py-3 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition">
              Download as CSV
            </button>
            <button className="px-5 py-3 border border-gray-300 hover:bg-gray-50 rounded-lg font-medium transition">
              Email Report
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
