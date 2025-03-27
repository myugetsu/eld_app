import React, { useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";

const TripForm: React.FC = () => {
  const [tripName, setTripName] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Trip submitted:", tripName);
  };

  return (
    <form onSubmit={handleSubmit} className="p-4">
      <Input type="text" placeholder="Trip Name" value={tripName} onChange={(e) => setTripName(e.target.value)} />
      <Button label="Create Trip" onClick={handleSubmit} />
    </form>
  );
};

export default TripForm;
