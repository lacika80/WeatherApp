import React from "react";
import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
export default function App() {
return (
        <Routes>
                    <Route element={<Navbar />}>
                        <Route path="/" element={<Home/>} />
                    </Route>
        </Routes>
    );
}
