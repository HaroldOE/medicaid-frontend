// UserTable.tsx
import { useState } from "react";
import UserRow from "./UserRow";

const users = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Patient",
    status: "Active",
    created: "2024-03-15",
  },
  {
    name: "Sarah Wilson",
    email: "sarah@example.com",
    role: "Patient",
    status: "Active",
    created: "2024-02-20",
  },
  {
    name: "Mike Johnson",
    email: "mike@example.com",
    role: "Patient",
    status: "Active",
    created: "2024-01-10",
  },
  {
    name: "Dr. Emily Chen",
    email: "emily@example.com",
    role: "Doctor",
    status: "Active",
    created: "2023-12-05",
  },
  {
    name: "Dr. Robert Brown",
    email: "robert@example.com",
    role: "Doctor",
    status: "Active",
    created: "2023-11-18",
  },
  {
    name: "Dr. Lisa Park",
    email: "lisa@example.com",
    role: "Doctor",
    status: "Suspended",
    lastActive: "2 weeks ago",
    created: "2024-01-08",
  },
];

// Helper function to download CSV
const downloadCSV = () => {
  const headers = ["Name", "Email", "Role", "Status", "Last Active", "Created"];
  const rows = users.map((user) => [
    user.name,
    user.email,
    user.role,
    user.status,
    user.lastActive || "—",
    user.created,
  ]);

  const csvContent = [
    headers.join(","),
    ...rows.map((row) => row.map((field) => `"${field}"`).join(",")),
  ].join("\n");

  const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.setAttribute("href", url);
  link.setAttribute(
    "download",
    `users_${new Date().toISOString().slice(0, 10)}.csv`
  );
  link.style.visibility = "hidden";
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};

export default function UserTable() {
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);

  return (
    <>
      {/* ... your existing header with + Add User button ... */}

      <div className="bg-white rounded-lg shadow overflow-hidden">
        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            {/* thead and tbody same as before */}
            <thead className="bg-gray-50"> {/* ... */} </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {users.map((user, idx) => (
                <UserRow key={idx} user={user} />
              ))}
            </tbody>
          </table>
        </div>

        {/* Footer with Pagination + Download Button */}
        <div className="bg-gray-50 px-6 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div className="text-sm text-gray-700">
            Showing <span class="font-medium">6</span> of{" "}
            <span class="font-medium">6</span> Users
          </div>

          <div className="flex items-center gap-3">
            {/* Pagination */}
            <div className="flex gap-2">
              <button
                className="px-4 py-2 text-sm border border-gray-300 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Previous
              </button>
              <button
                className="px-4 py-2 text-sm border-gray-300 rounded-md bg-white hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
                disabled
              >
                Next
              </button>
            </div>

            {/* Download CSV Button */}
            <button
              onClick={downloadCSV}
              className="flex items-center gap-2 px-5 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 transition shadow-sm"
            >
              <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                />
              </svg>
              Download
            </button>
          </div>
        </div>
      </div>

      {/* Your Add User Modal (unchanged) */}
      {isAddModalOpen && (
        <AddUserModal onClose={() => setIsAddModalOpen(false)} />
      )}
    </>
  );
}
