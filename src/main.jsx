import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./components/router.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <>
      <h1>React Supabase Auth & context</h1>
      <RouterProvider router={router} />
    </>
  </StrictMode>
);
