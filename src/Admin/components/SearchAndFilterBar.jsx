// // components/SearchAndFilterBar.jsx
// import React, { useState, useEffect } from "react";
// import { Search, Plus, ChevronDown } from "lucide-react";

// const roles = [
//   { value: "", label: "All Roles" },
//   { value: "patient", label: "Patients" },
//   { value: "doctor", label: "Doctors" },
//   { value: "admin", label: "Admin" },
//   { value: "nurse", label: "Nurses" },
// ];

// export default function SearchAndFilterBar({ onAddUser, onSearch }) {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [selectedRole, setSelectedRole] = useState("");
//   const [isOpen, setIsOpen] = useState(false);

//   // Debounce search to avoid filtering on every keystroke
//   useEffect(() => {
//     const timer = setTimeout(() => {
//       onSearch({ query: searchQuery.trim().toLowerCase(), role: selectedRole });
//     }, 300);

//     return () => clearTimeout(timer);
//   }, [searchQuery, selectedRole, onSearch]);

//   const handleRoleSelect = (roleValue) => {
//     setSelectedRole(roleValue);
//     setIsOpen(false);
//   };

//   return (
//     <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
//       {/* Search + Role Filter */}
//       <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full sm:w-auto">
//         {/* Search Input */}
//         <div className="relative w-full sm:w-96">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={(e) => setSearchQuery(e.target.value)}
//             placeholder="Search Users..."
//             className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
//           />
//         </div>

//         {/* Role Dropdown */}
//         <div className="relative">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="flex items-center justify-between gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700 whitespace-nowrap transition min-w-[140px]"
//           >
//             <span>
//               {selectedRole
//                 ? roles.find((r) => r.value === selectedRole)?.label
//                 : "All Roles"}
//             </span>
//             <ChevronDown
//               className={`w-4 h-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
//             />
//           </button>

//           {/* Dropdown Menu */}
//           {isOpen && (
//             <>
//               <div
//                 className="fixed inset-0 z-10"
//                 onClick={() => setIsOpen(false)}
//               />
//               <div className="absolute top-full mt-2 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden z-20">
//                 {roles.map((role) => (
//                   <button
//                     key={role.value}
//                     onClick={() => handleRoleSelect(role.value)}
//                     className={`w-full text-left px-4 py-2.5 text-sm transition ${
//                       selectedRole === role.value
//                         ? "bg-blue-50 text-blue-700 font-medium"
//                         : "hover:bg-gray-100 text-gray-700"
//                     }`}
//                   >
//                     {role.label}
//                   </button>
//                 ))}
//               </div>
//             </>
//           )}
//         </div>
//       </div>

//       {/* Add User Button */}
//       <button
//         onClick={onAddUser}
//         className="flex items-center gap-2 px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition font-medium shadow-sm"
//       >
//         <Plus className="w-5 h-5" />
//         Add User
//       </button>
//     </div>
//   );
// }

// components/SearchAndFilterBar.jsx
import React, { useState, useEffect, useRef } from "react";
import { Search, Plus, ChevronDown, Upload, Download } from "lucide-react";
import { useData } from "../../contextapi/DataContext";

const roles = [
  { value: "", label: "All Roles" },
  { value: "patient", label: "Patients" },
  { value: "doctor", label: "Doctors" },
  { value: "admin", label: "Admin" },
  { value: "nurse", label: "Nurses" },
];

export default function SearchAndFilterBar({ onAddUser, onSearch }) {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedRole, setSelectedRole] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const fileInputRef = useRef(null);

  const { uploadExcel, downloadExcel, loading } = useData();

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch({ query: searchQuery.trim().toLowerCase(), role: selectedRole });
    }, 300);
    return () => clearTimeout(timer);
  }, [searchQuery, selectedRole, onSearch]);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    setIsOpen(false);
  };

  const handleUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      uploadExcel(file)
        .then(() => {
          alert("Upload successful!");
          window.location.reload();
        })
        .catch((err) => alert("Upload failed: " + err.message));
    }
  };

  return (
    <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-8">
      {/* Search + Filter */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
        <div className="relative w-full sm:w-96">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search Users..."
            className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="relative">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="flex items-center justify-between gap-2 px-4 py-2.5 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 text-gray-700 min-w-[140px]"
          >
            <span>
              {selectedRole
                ? roles.find((r) => r.value === selectedRole)?.label
                : "All Roles"}
            </span>
            <ChevronDown
              className={`w-4 h-4 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsOpen(false)}
              />
              <div className="absolute top-full mt-2 left-0 w-full bg-white border border-gray-300 rounded-lg shadow-lg z-20">
                {roles.map((role) => (
                  <button
                    key={role.value}
                    onClick={() => handleRoleSelect(role.value)}
                    className={`w-full text-left px-4 py-2.5 text-sm transition ${
                      selectedRole === role.value
                        ? "bg-blue-50 text-blue-700"
                        : "hover:bg-gray-100"
                    }`}
                  >
                    {role.label}
                  </button>
                ))}
              </div>
            </>
          )}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3">
        <label className="cursor-pointer">
          <input
            ref={fileInputRef}
            type="file"
            accept=".xlsx,.xls"
            onChange={handleUpload}
            className="hidden"
          />
          <div
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium transition ${
              loading ? "bg-gray-500" : "bg-green-600 hover:bg-green-700"
            }`}
          >
            <Upload className="w-5 h-5" />
            {loading ? "Uploading..." : "Upload Excel"}
          </div>
        </label>

        <button
          onClick={downloadExcel}
          disabled={loading}
          className={`flex items-center gap-2 px-5 py-2.5 rounded-lg text-white font-medium transition ${
            loading ? "bg-gray-500" : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          <Download className="w-5 h-5" />
          Download Excel
        </button>

        <button
          onClick={onAddUser}
          className="flex items-center gap-2 px-6 py-2.5 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-medium shadow-sm"
        >
          <Plus className="w-5 h-5" />
          Add User
        </button>
      </div>
    </div>
  );
}
