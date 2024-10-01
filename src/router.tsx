import { createBrowserRouter, RouteObject } from "react-router-dom";

import HomePage from "./pages/home/HomePage.tsx";
import EmployeeListPage from "./pages/employee-list/EmployeeListPage.tsx";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/employee-list",
    element: <EmployeeListPage />,
  },
  {
    path: "*",
    element: <h1>Not Found</h1>,
  },
];

export const router = createBrowserRouter(routes, {
  basename: import.meta.env.VITE_PREFIX_PATH || "/",
});
