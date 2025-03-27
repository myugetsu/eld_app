import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Trip } from "../../types";
import axiosInstance from "../../api/axiosInstance";
import { generateReport } from "../../api/reports";  // Import report API function

const TripDetails: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const [trip, setTrip] = useState<Trip | null>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axiosInstance.get(`/${id}`)
            .then((res) => setTrip(res.data))
            .catch(console.error);
    }, [id]);

    const handleDownloadReport = async () => {
        if (!id) return;
        setLoading(true);
        await generateReport(id);
        setLoading(false);
    };

    return trip ? (
        <div className="p-6 bg-white shadow-md rounded-md">
            <h1 className="text-xl font-bold">{trip.start_location} → {trip.dropoff_location}</h1>
            <p>Pickup: {trip.pickup_location}</p>

            {/* Download Report Button */}
            <button
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:bg-gray-400"
                onClick={handleDownloadReport}
                disabled={loading}
            >
                {loading ? "Generating..." : "Download Report"}
            </button>
        </div>
    ) : (
        <p>Loading...</p>
    );
};

export default TripDetails;
