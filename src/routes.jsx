import { Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import ProjectPage from "./pages/ProjectPage/ProjectPage";

const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "*",
    element: <Navigate to="/" />
  },
];

export default routes;
