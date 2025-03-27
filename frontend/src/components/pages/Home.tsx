import React from "react";
import MainLayout from "../templates/MainLayout";

const Home: React.FC = () => {
    return (
        <MainLayout>
            <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center">
                <h1 className="text-4xl font-bold text-primary">Welcome to the ELD System</h1>
                <p className="text-lg text-gray-600 mt-4">Track and manage your electronic logging data easily.</p>
                <button className="mt-6 px-6 py-2 bg-primary text-white rounded-lg hover:bg-blue-700">Get Started</button>
            </div>
        </MainLayout>
    );
};

export default Home;
