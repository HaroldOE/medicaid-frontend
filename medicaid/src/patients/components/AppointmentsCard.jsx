// src/components/AppointmentCard.jsx
export default function AppointmentCard({
  doctor,
  specialty,
  date,
  time,
  location,
  isUpcoming,
  isPast,
}) {
  return (
    <div className="bg-white rounded-xl shadow-sm p-6 flex justify-between items-start">
      <div>
        <h3 className="text-lg font-semibold">{doctor}</h3>
        {specialty && <p className="text-gray-600">{specialty}</p>}
        {date && <p className="text-sm text-gray-500">{date}</p>}
        {time && <p className="text-sm text-gray-700">{time}</p>}
        {location && <p className="text-sm text-gray-700">{location}</p>}
      </div>

      <div className="flex gap-3">
        {isUpcoming && (
          <>
            <button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition">
              Join Video
            </button>
            <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition">
              Reschedule
            </button>
          </>
        )}
        {isPast && (
          <button className="border border-gray-300 text-gray-700 px-5 py-2 rounded-lg hover:bg-gray-50 transition">
            View Notes
          </button>
        )}
      </div>
    </div>
  );
}
