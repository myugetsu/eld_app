import React from "react";
import TripForm from "../molecules/TripForm";
import TripList from "../organisms/TripList";

const Dashboard: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <TripForm />
      <TripList />
    </div>
  );
};

export default Dashboard;
