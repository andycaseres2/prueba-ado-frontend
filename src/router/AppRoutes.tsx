import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Login from "../pages/Login/Login";
import Dashboard from "../pages/Dashboard/Dashboard";
import Tourism from "../pages/Tourism/Tourism";

const AppRoutes = () => {
  const isActiveUser = useSelector(
    (state: RootState) => state.auth.isActiveUser
  );

  return (
    <Routes>
      <Route
        path="/"
        element={
          isActiveUser ? <Navigate to="/dashboard" /> : <Navigate to="/login" />
        }
      />
      <Route path="/login" element={<Login />} />
      <Route
        path="/tourism"
        element={isActiveUser ? <Tourism /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard"
        element={isActiveUser ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;
