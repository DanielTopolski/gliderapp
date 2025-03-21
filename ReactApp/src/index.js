import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import Flight from "./pages/Flight";
import AccBalance from "./pages/AccBalance";
import GliderSec from "./pages/GliderSec";
import AirplaneSec from "./pages/AirplaneSec";
import NoPage from "./pages/NoPage";


export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/">
                    <Route index element={<Login />} />
                </Route>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="personal" element={<Personal />} />
                    <Route path="flight" element={<Flight />} />
                    <Route path="accbalance" element={<AccBalance />} />
                    <Route path="glidersec" element={<GliderSec />} />
                    <Route path="airplanesec" element={<AirplaneSec />} />
                    <Route path="*" element={<NoPage />} />   
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
