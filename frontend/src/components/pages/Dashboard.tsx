import React from "react";
import DashboardLayout from "../templates/MainLayout";
import Dashboard from "../organisms/Dashboard";

const DashboardPage: React.FC = () => {
  return (
    <DashboardLayout>
      <Dashboard />
    </DashboardLayout>
  );
};

export default DashboardPage;
