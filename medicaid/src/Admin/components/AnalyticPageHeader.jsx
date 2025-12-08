// PageHeader.jsx
import React from 'react';
import DateFilterAndExport from '../components/DateFilterAndExport';


function AnalyticPageHeader() {
  return (
    <div className="mb-8">
      <h1 className="text-3xl font-bold text-gray-900">Platform Analytics</h1>
      <p className="text-sm text-gray-500 mt-1">
        Comprehensive insights and performance metrics
      </p>

      <div className="flex justify-end mt-4">
  <DateFilterAndExport />
</div>
    </div>
  );
}

export default AnalyticPageHeader;