// AnalyticsDashboard.jsx
import React from "react";
import AnalyticStatsCard from "./AnalyticStatsCard";
import ChartSection from "./ChartSection";
import TopDoctorsTable from "./TopDoctorsTable";
import AnalyticPageHeader from "./AnalyticPageHeader";

function AnalyticsDashboard() {
  return (
    <div className="p-8">
      <AnalyticPageHeader />
      <AnalyticStatsCard />
      <ChartSection />
      <TopDoctorsTable />
    </div>
  );
}

export default AnalyticsDashboard;
