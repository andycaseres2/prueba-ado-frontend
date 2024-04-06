import { useEffect } from "react";
import { Navigate, useRoutes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Tourism from "../pages/Tourism/Tourism";
import { loadUserFromLocalStorage } from "../redux/slices/authSlice";

const AppRoutes: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
  }, [dispatch]);

  const routes = useRoutes([
    { path: "/", element: <Navigate to="/login" /> },
    { path: "/login", element: <Login /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/tourism", element: <Tourism /> },
    { path: "*", element: <Navigate to="/dashboard" /> }, // Redirige a dashboard si la ruta no coincide
  ]);

  return routes;
};

export default AppRoutes;
