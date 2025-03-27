import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import TripDetails from "./components/pages/TripDetails";
import NotFound from "./components/pages/NotFound";
import "./index.css";

const App: React.FC = () => {
    return (
        <Router>
            <div className="container">
                <header>
                    <h1>My App</h1>
                </header>
                <main>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/trip/:id" element={<TripDetails />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </main>
                <footer>
                    <p>&copy; 2025 My App. All rights reserved.</p>
                </footer>
            </div>
        </Router>
    );
};

export default App;
