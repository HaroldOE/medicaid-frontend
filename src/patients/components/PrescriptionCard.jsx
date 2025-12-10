export default function PrescriptionCard({ med }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 mb-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-bold text-gray-900">{med.name}</h3>
          <p className="text-gray-600">{med.dosage}</p>
        </div>
        {med.status === "Active" && (
          <span className="px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Active
          </span>
        )}
        {med.status === "Refill Now" && (
          <span className="px-4 py-2 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
            Refill Now
          </span>
        )}
      </div>

      <div className="grid grid-cols-3 gap-6 text-sm mb-6">
        <div>
          <p className="text-gray-500">Refills Left</p>
          <p className="font-semibold text-gray-900">{med.refills}</p>
        </div>
        <div>
          <p className="text-gray-500">Next Refill</p>
          <p className="font-semibold text-gray-900">{med.nextRefill}</p>
        </div>
        <div>
          <p className="text-gray-500">Status</p>
          <p className="font-semibold text-green-600">
            {med.statusText || "On Track"}
          </p>
        </div>
      </div>

      {med.action === "request" && (
        <button className="w-full bg-green-500 hover:bg-green-600 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2">
          Request Refill
        </button>
      )}
      {med.action === "refill" && (
        <button className="w-full bg-yellow-500 hover:bg-yellow-600 text-white py-3 rounded-full font-medium transition flex items-center justify-center gap-2">
          Refill Now
        </button>
      )}
    </div>
  );
}
