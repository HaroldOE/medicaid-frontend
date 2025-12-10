import { MoreVertical, Edit2, Trash2, Eye } from "lucide-react";

export default function UserRow({ user }) {
  const isSuspended = user.status === "Suspended";

  return (
    <tr className={`${isSuspended ? "bg-red-50" : "hover:bg-gray-50"} transition`}>
      <td className="px-6 py-4 whitespace-nowrap">
        <div>
          <div className="text-sm font-medium text-gray-900">{user.name}</div>
          <div className="text-sm text-gray-500">{user.email}</div>
        </div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <span className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
          user.role === "Doctor" ? "bg-purple-100 text-purple-800" : "bg-blue-100 text-blue-800"
        }`}>
          {user.role}
        </span>
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {isSuspended && <span className="text-red-600 font-medium">Suspended</span>}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.lastActive || "—"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
        {user.created || "—"}
      </td>
      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
        <button className="text-gray-400 hover:text-gray-600">
          <MoreVertical className="w-5 h-5" />
        </button>
        <div className="hidden group-hover:inline-flex absolute right-8 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg py-1 z-10">
          <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">
            <Eye className="w-4 h-4" /> View
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 w-full text-left">
            <Edit2 className="w-4 h-4" /> Edit
          </button>
          <button className="flex items-center gap-2 px-4 py-2 text-sm text-red-600 hover:bg-red-50 w-full text-left">
            <Trash2 className="w-4 h-4" /> Delete
          </button>
        </div>
      </td>
    </tr>
  );
}