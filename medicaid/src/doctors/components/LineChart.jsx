export default function LineChart() {
  const points = [2.8, 2.5, 2.2, 1.9, 2.1, 2.3, 2.0];
  const min = Math.min(...points);
  const max = Math.max(...points);
  const range = max - min;

  return (
    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200">
      <h3 className="text-lg font-semibold text-gray-900 mb-6">
        Average Response Time (Hours)
      </h3>
      <div className="relative h-64">
        <svg className="w-full h-full" viewBox="0 0 400 200">
          {/* Grid lines */}
          {[0, 0.5, 1, 1.5, 2, 2.5, 3].map((y) => (
            <line
              key={y}
              x1="40"
              y1={180 - ((y - min) / range) * 160}
              x2="380"
              y2={180 - ((y - min) / range) * 160}
              stroke="#e5e7eb"
              strokeDasharray="4,4"
            />
          ))}

          {/* Line */}
          <polyline
            fill="none"
            stroke="#10b981"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            points={points
              .map(
                (p, i) => `${60 + i * 50}, ${180 - ((p - min) / range) * 160}`
              )
              .join(" ")}
          />

          {/* Dots */}
          {points.map((p, i) => (
            <circle
              key={i}
              cx={60 + i * 50}
              cy={180 - ((p - min) / range) * 160}
              r="6"
              fill="#10b981"
              className="drop-shadow-md"
            />
          ))}

          {/* X-axis labels */}
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day, i) => (
            <text
              key={i}
              x={60 + i * 50}
              y="195"
              textAnchor="middle"
              className="text-xs fill-gray-600"
            >
              {day}
            </text>
          ))}
        </svg>
      </div>
    </div>
  );
}
