import React from "react";
import { Trip } from "../../types";

const TripCard: React.FC<{ trip: Trip }> = ({ trip }) => {
    return (
        <div className="border p-4 mb-2">
            <h2>{trip.start_location} → {trip.dropoff_location}</h2>
            <p>Pickup: {trip.pickup_location}</p>
            <p>Created: {trip.created_at}</p>
        </div>
    );
};

export default TripCard;
