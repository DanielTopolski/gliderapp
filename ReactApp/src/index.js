import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Personal from "./pages/Personal";
import AccBalance from "./pages/AccBalance";
import GliderSec from "./pages/GliderSec";
import AirplaneSec from "./pages/AirplaneSec";
import Timekeeper from "./pages/Timekeeper";
import NoPage from "./pages/NoPage";
import "primereact/resources/themes/lara-light-cyan/theme.css";


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
                    <Route path="glidersec" element={<GliderSec />} />
                    <Route path="airplanesec" element={<AirplaneSec />} />
                    <Route path="accbalance" element={<AccBalance />} />
                    <Route path="timekeeper" element={<Timekeeper />} />
                    <Route path="*" element={<NoPage />} />   
                </Route>
            </Routes>
        </BrowserRouter>
    );
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
