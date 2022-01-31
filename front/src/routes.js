import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./components/Admin";
import { Dashboard } from "./components/Dashboard";

import { Login } from "./components/Login";
import { Register } from "./components/Register";

export function Router() {
    return (
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
};