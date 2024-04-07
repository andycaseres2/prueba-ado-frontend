import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUserFromLocalStorage } from "./redux/slices/authSlice";
import Sidebar from "./components/menus/Sidebar";
import { RootState } from "./redux/store";
import Header from "./components/headers/Header";
import Login from "./pages/Login/Login";
import DashboardIcon from "./assets/Icons/DashboardIcon";
import TourismIcon from "./assets/Icons/TourismIcon";
import Spinner from "./components/spinners/Spinner";
import AppRoutes from "./router/AppRoutes";
import Footer from "./components/footers/Footer";
import MapIcon from "./assets/Icons/MapIcon";

function App() {
  const dispatch = useDispatch();
  const isActiveUser = useSelector(
    (state: RootState) => state.auth.isActiveUser
  );
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);

  useEffect(() => {
    dispatch(loadUserFromLocalStorage());
    setIsCheckingAuth(false);
  }, [dispatch]);

  const menu = [
    {
      id: 1,
      title: "Dashboard",
      path: "/dashboard",
      icon: <DashboardIcon design="w-10 h-10" />,
    },
    {
      id: 2,
      title: "Tourism",
      path: "/tourism",
      icon: <TourismIcon design="w-10 h-10" />,
    },
    {
      id: 2,
      title: "Colombia",
      path: "/colombia",
      icon: <MapIcon design="w-10 h-10" />,
    },
  ];

  return (
    <div className="flex w-full h-screen">
      {isCheckingAuth ? (
        <div className="w-full h-full flex justify-center items-center">
          <Spinner design="w-10 h-10" />
        </div>
      ) : !isActiveUser ? (
        <Login />
      ) : (
        <div className="flex flex-col lg:flex-row w-full h-full">
          <Sidebar menu={menu} />
          <div className="flex flex-col w-full h-full">
            <Header />
            <AppRoutes />
            <Footer />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
