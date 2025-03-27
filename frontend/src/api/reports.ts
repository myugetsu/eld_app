import axiosInstance from "./axiosInstance";

export const generateReport = async (tripId: string) => {
    try {
        const response = await axiosInstance.post(`/api/reports/${tripId}/generate/`, {}, { responseType: "blob" });

        // Create a Blob URL for the response data
        const url = window.URL.createObjectURL(new Blob([response.data], { type: "application/pdf" }));

        // Create a link and trigger the download
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", `trip_report_${tripId}.pdf`);
        document.body.appendChild(link);
        link.click();

        // Cleanup
        link.remove();
        window.URL.revokeObjectURL(url);
    } catch (error) {
        console.error("Error generating trip report:", error);
    }
};
