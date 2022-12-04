import { Route, Routes } from "react-router-dom";
import Auth from "../modules/Login/Index";
import { DashboardRoutes } from "./DashboardRoutes";
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

export default function AppRouter() {
  return (
    <Routes>
      <Route
        path="login"
        element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        }
      />
      <Route path="not-found" element={<>Error</>} />
      <Route
        path="/*"
        element={
          <PrivateRoute>
            <DashboardRoutes />
          </PrivateRoute>
        }
      />
    </Routes>
  );
}
