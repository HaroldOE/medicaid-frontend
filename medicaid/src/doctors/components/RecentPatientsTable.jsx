export default function RecentPatientsTable() {
  const patients = [
    {
      name: "John Doe",
      age: 45,
      condition: "Hypertension",
      lastVisit: "2 days ago",
      status: "Stable",
    },
    {
      name: "Sarah Johnson",
      age: 32,
      condition: "Diabetes Type 2",
      lastVisit: "1 day ago",
      status: "Monitoring",
      pulse: true,
    },
    {
      name: "Michael Brown",
      age: 58,
      condition: "Heart Disease",
      lastVisit: "3 days ago",
      status: "Monitoring",
      pulse: true,
    },
    {
      name: "Emily Davis",
      age: 28,
      condition: "Asthma",
      lastVisit: "5 days ago",
      status: "Stable",
    },
    {
      name: "Robert Wilson",
      age: 72,
      condition: "Arthritis",
      lastVisit: "11 days ago",
      status: "Stable",
    },
  ];

  return (
    <div className="bg-white rounded-xl border shadow-sm">
      <div className="p-8">
        <h2 className="text-2xl font-bold mb-6">Recent Patients</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-600 border-b">
                <th className="pb-4">Patient Name</th>
                <th className="pb-4">Age</th>
                <th className="pb-4">Condition</th>
                <th className="pb-4">Last Visit</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Action</th>
              </tr>
            </thead>
            <tbody>
              {patients.map((p, i) => (
                <tr key={i} className="border-b last:border-0 hover:bg-gray-50">
                  <td className="py-4 font-medium">{p.name}</td>
                  <td className="py-4 text-gray-600">{p.age}</td>
                  <td className="py-4 text-gray-600">{p.condition}</td>
                  <td className="py-4 text-gray-600">{p.lastVisit}</td>
                  <td className="py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        p.status === "Stable"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      } ${p.pulse ? "animate-pulse" : ""}`}
                    >
                      {p.status}
                    </span>
                  </td>
                  <td className="py-4">
                    <button className="text-blue-600 hover:underline">
                      View
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
