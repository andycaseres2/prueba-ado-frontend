import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import Button from "../buttons/Button";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-full flex justify-between items-center bg-primary-red-300">
      Header
      <Button action={handleLoginOut} text="logout" />
    </div>
  );
};

export default Header;
