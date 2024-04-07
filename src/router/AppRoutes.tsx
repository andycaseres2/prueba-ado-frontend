import { Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import Login from "../pages/Login/Login";
import Tourism from "../pages/Tourism/Tourism";
import Colombia from "../pages/Colombia/Colombia";
import Dashboard from "../pages/Dashboard/Dashboard";

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
        path="/colombia"
        element={isActiveUser ? <Colombia /> : <Navigate to="/login" />}
      />
      <Route
        path="/dashboard"
        element={isActiveUser ? <Dashboard /> : <Navigate to="/login" />}
      />
    </Routes>
  );
};

export default AppRoutes;
