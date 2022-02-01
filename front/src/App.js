import React from "react";
import { Router } from "./routes";

import { Toaster } from 'react-hot-toast';

export function App() {
  return (
    <>
      <Router />
      <Toaster/>
    </>
  );
}