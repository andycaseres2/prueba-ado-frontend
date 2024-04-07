import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";
import ProfileIcon from "../../assets/Icons/ProfileIcon";
import { useState } from "react";
import PopOver from "../Pops/PopOver";
import UserIcon from "../../assets/Icons/UserIcon";
import LogOutIcon from "../../assets/Icons/LogOutIcon";
import Text from "../texts/Text";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isOpenPop, setIsOpenPop] = useState(false);

  const handleLoginOut = () => {
    dispatch(logout());
    navigate("/login");
  };

  const optionsPop = [
    {
      id: 1,
      title: "Profile",
      action: () => {},
      icon: <UserIcon />,
    },
    {
      id: 2,
      title: "Logout",
      action: () => handleLoginOut(),
      icon: <LogOutIcon />,
    },
  ];

  return (
    <div className="w-full flex justify-between items-center px-4 shadow-md !h-20">
      <Text text="Colombia" design="text-3xl font-bold text-primary" />
      <div className="flex">
        <ProfileIcon
          design="w-8 h-8 cursor-pointer text-primary hover:scale-105"
          action={() => setIsOpenPop(!isOpenPop)}
        />
        {isOpenPop && (
          <div className="absolute top-40 lg:top-16 right-8 ">
            <PopOver
              design="hover:bg-primary hover:text-white rounded w-32"
              options={optionsPop}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
