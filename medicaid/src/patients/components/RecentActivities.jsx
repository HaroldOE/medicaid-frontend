export default function RecentActivities() {
  const activities = [
    {
      title: "Prescription Refilled",
      desc: "Medication: Aspirin 100mg",
      time: "2 hours ago",
    },
    {
      title: "Appointment Refilled",
      desc: "Dr. Smith - General Checkup",
      time: "1 day ago",
    },
    {
      title: "Medical Record Update",
      desc: "Lab results added",
      time: "3 days ago",
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Recent Activities
      </h2>
      <div className="bg-white rounded-2xl shadow-sm border border-gray-200 divide-y divide-gray-200">
        {activities.map((act, i) => (
          <div
            key={i}
            className="p-6 flex justify-between items-center hover:bg-gray-50 transition"
          >
            <div>
              <h4 className="font-semibold text-gray-900">{act.title}</h4>
              <p className="text-gray-600 text-sm">{act.desc}</p>
            </div>
            <span className="text-sm text-gray-500">{act.time}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
