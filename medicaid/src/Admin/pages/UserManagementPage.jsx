//import React, { useState } from "react";
import AdminSidebar from "../components/AdminSidebar";        
import SearchAndFilterBar from "../components/SearchAndFilterBar";
import UserTable from "../components/UserTable";
import AddUserDrawer from "../components/AddUserDrawer";

// UserManagementPage.jsx
import React, { useState, useMemo } from "react";


export default function UserManagementPage() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [searchParams, setSearchParams] = useState({ query: "", role: "" });

  // Sample users data (replace with your API data)
  const allUsers = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "patient" },
    { id: 2, name: "Dr. Sarah Wilson", email: "sarah@hospital.com", role: "doctor" },
    { id: 3, name: "Admin User", email: "admin@medicaid.com", role: "admin" },
    // ... more users
  ];

  // Filtered users based on search + role
  const filteredUsers = useMemo(() => {
    return allUsers.filter((user) => {
      const matchesSearch =
        user.name.toLowerCase().includes(searchParams.query) ||
        user.email.toLowerCase().includes(searchParams.query);
      const matchesRole = !searchParams.role || user.role === searchParams.role;
      return matchesSearch && matchesRole;
    });
  }, [searchParams, allUsers]);

  const openDrawer = () => setIsDrawerOpen(true);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <>
      <div className="flex min-h-screen bg-gray-50">
        <AdminSidebar />
        <div className="flex-1 ml-64">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">User Management</h1>
            <p className="text-sm text-gray-600 mb-8">Manage all platform users and their permissions</p>

            <SearchAndFilterBar
              onAddUser={openDrawer}
              onSearch={setSearchParams}   // This receives search + role
            />

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <UserTable users={filteredUsers} />   {/* Pass filtered data */}
            </div>
          </div>
        </div>
      </div>

      <AddUserDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}

