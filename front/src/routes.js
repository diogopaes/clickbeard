import React from "react";
import { Route, Routes } from "react-router-dom";

import { Login } from "./components/Login";

export function Router() {
    return (
        <Routes>
            <Route path="/" exact element={<Login />} />
        </Routes>
    )
};