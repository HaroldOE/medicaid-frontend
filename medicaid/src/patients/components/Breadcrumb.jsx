import { ChevronLeft } from 'lucide-react';

export default function Breadcrumb() {
  return (
    <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
      <button className="flex items-center gap-1 hover:text-gray-900">
        <ChevronLeft className="w-4 h-4" />
        Back to Dashboard
      </button>
    </div>
  );
}