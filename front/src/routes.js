import React from "react";
import { Route, Routes } from "react-router-dom";
import { Admin } from "./components/Admin";
import { CreateSchedule } from "./components/CreateSchedule";
import { Dashboard } from "./components/Dashboard";

import { Login } from "./components/Login";
import { Register } from "./components/Register";

export function Router() {
    return (
        <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/create-schedule" element={<CreateSchedule />} />
            <Route path="/admin" element={<Admin />} />
        </Routes>
    )
};