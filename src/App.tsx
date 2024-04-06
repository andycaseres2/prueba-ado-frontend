import { useEffect } from "react";
import AppRoutes from "./router/AppRoutes";
import { useDispatch, useSelector } from "react-redux";
import { loadUserFromLocalStorage } from "./redux/slices/authSlice";
import Sidebar from "./components/menus/Sidebar";
import { RootState } from "./redux/store";
import Header from "./components/headers/Header";
import Login from "./pages/Login/Login";

function App() {
  const dispatch = useDispatch();
  const isActiveUser = useSelector(
    (state: RootState) => state.auth.isActiveUser
  );

  useEffect(() => {
    // Cargar el usuario desde el localStorage al iniciar la aplicación
    dispatch(loadUserFromLocalStorage());
  }, [dispatch]);

  const menu = [
    {
      title: "Dashboard",
      path: "/dashboard",
    },
    {
      title: "Turismo",
      path: "/tourism",
    },
  ];

  return (
    <div className="flex w-full h-screen">
      {!isActiveUser ? (
        <Login />
      ) : (
        <div className="flex w-full h-full">
          <Sidebar menu={menu} />
          <div className="flex flex-col w-full">
            <Header />
            <AppRoutes />
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
