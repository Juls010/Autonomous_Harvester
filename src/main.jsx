import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/Router";
import TargetCursor from './components/TargetCursor';
import './index.css'

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <TargetCursor targetSelector=".cursor-target" spinDuration={4} parallaxOn={false} />
    <RouterProvider router={router} /> 
  </React.StrictMode>
);