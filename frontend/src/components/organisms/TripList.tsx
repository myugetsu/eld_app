import React from "react";

const trips = [
  { id: 1, name: "New York to LA" },
  { id: 2, name: "Chicago to Dallas" },
];

const TripList: React.FC = () => {
  return (
    <ul className="mt-4">
      {trips.map((trip) => (
        <li key={trip.id} className="p-2 border-b">
          {trip.name}
        </li>
      ))}
    </ul>
  );
};

export default TripList;
