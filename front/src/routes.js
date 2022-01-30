import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./components/Login";
import { Register } from "./components/Register";

export function Router() {
    return (
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/register" element={<Register />} />
        </Routes>
    )
};