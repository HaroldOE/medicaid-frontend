// src/components/BarChart.jsx
export default function BarChart() {
  const data = [30, 45, 50, 70, 65, 80];
  const labels = ["Jan", "Feb", "Mar", "Apr", "May", "Jun"];
  const maxValue = Math.max(...data);

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Appointment Trend
      </h3>

      <div className="relative h-64">
        <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between h-full px-2">
          {data.map((value, i) => (
            <div
              key={i}
              className="flex flex-col items-center justify-end h-full flex-1"
            >
              {/* Bar */}
              <div
                className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-md transition-all duration-700 hover:from-green-600 hover:to-green-500"
                style={{ height: `${(value / maxValue) * 100}%` }}
              />

              {/* Label */}
              <span className="mt-3 text-xs text-gray-600 font-medium">
                {labels[i]}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
