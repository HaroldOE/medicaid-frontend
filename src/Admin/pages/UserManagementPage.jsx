// UserManagementPage.jsx
import React, { useState, useMemo } from "react";
import AdminSidebar from "../components/AdminSidebar";        
import SearchAndFilterBar from "../components/SearchAndFilterBar";
import UserTable from "../components/UserTable";
import AddUserDrawer from "../components/AddUserDrawer";

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
        <div className="flex-1 ml-15 mr-15 p-4"> 
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6 py-4">
            <h1 className="text-2xl font-bold text-gray-900 mb-1">User Management</h1>
            <p className="text-xs sm:text-sm text-gray-600 mb-4">Manage all platform users and their permissions</p>

            <div className="mb-4"> 
              <SearchAndFilterBar
                onAddUser={openDrawer}
                onSearch={setSearchParams}
              />
            </div>

            <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
              <UserTable users={filteredUsers} />
            </div>
          </div>
        </div>
      </div>

      <AddUserDrawer isOpen={isDrawerOpen} onClose={closeDrawer} />
    </>
  );
}
