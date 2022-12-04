import { Navigate, Route, Routes } from "react-router-dom";
import { ProductProvider } from "../context/products/ProductContext";
import Dashboard from "../modules/Dashboard/Index";

export const DashboardRoutes = () => {
  return (
    <Routes>
      <Route
        path="dashboard"
        element={
          <ProductProvider>
            <Dashboard />
          </ProductProvider>
        }
      />
      <Route path="/" element={<Navigate to="/dashboard" />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  );
};
