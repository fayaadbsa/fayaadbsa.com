import { useRoutes } from "react-router-dom";
import routes from "./routes";

const AppRoutes = () => {
  const appRoutes = useRoutes([
    ...routes.map((route) => {
      return {
        path: route.path,
        element: route.element,
      };
    }),
  ]);
  return appRoutes;
};

export default AppRoutes;
