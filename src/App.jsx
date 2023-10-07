import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { greet } from "@/utils/greet";
import "@/styles/global.css";
import { routes } from "./routes";

greet();

const router = createBrowserRouter(routes);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
