import { ArrowLeft } from 'lucide-react';

export default function DocumentationHeader() {
  return (
    <div className="border-b border-gray-200 pb-6">
      <button className="flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-6">
        <ArrowLeft className="w-4 h-4" />
        Back to Dashboard
      </button>
      <h1 className="text-3xl font-semibold text-gray-900">Documentation</h1>
    </div>
  );
}