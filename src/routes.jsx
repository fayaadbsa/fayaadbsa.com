import { Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";
import ProjectDetailPage from "./pages/ProjectPage/ProjectDetailPage";
import AppLayout from "./components/layout/AppLayout";

export const routes = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Navigate to="/" />,
    children: [
      {
        path: "",
        element: <HomePage />,
      },
      {
        path: "projects",
        element: <ProjectPage />,
      },
      {
        path: "projects/:slug",
        element: <ProjectDetailPage />,
      },
    ],
  },
  {
    path: "*",
    element: <Navigate to="/" />,
  },
];
