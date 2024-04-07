import { useState } from "react";
import ExpandedLeftIcon from "../../assets/Icons/ExpandedLeftIcon";
import ExpandedRigthIcon from "../../assets/Icons/ExpandedRigthIcon";
import Text from "./../texts/Text";
import Image from "../images/Image";

interface Menu {
  id: number;
  title: string;
  path: string;
  icon: JSX.Element | null;
}

type Props = {
  menu: Menu[];
};

const Sidebar = ({ menu }: Props) => {
  const [isExpandedMenu, setIsExpandedMenu] = useState(true);

  const toggleExpandedMenu = () => {
    setIsExpandedMenu(!isExpandedMenu);
  };
  return (
    <div
      className={`${
        isExpandedMenu ? "w-[100%] lg:w-[25%]" : "w-[100%] lg:w-[8%]"
      } h-screen flex flex-col items-center bg-primary lg:py-6 relative`}
    >
      <div
        className={`hidden lg:block absolute top-4  ${
          isExpandedMenu ? "right-4" : "right-8"
        }`}
      >
        {isExpandedMenu ? (
          <ExpandedRigthIcon
            design="w-10 h-10 text-white cursor-pointer hover:scale-105"
            action={toggleExpandedMenu}
          />
        ) : (
          <ExpandedLeftIcon
            design="w-10 h-10 text-white cursor-pointer hover:scale-105"
            action={toggleExpandedMenu}
          />
        )}
      </div>
      <Image
        design={`hidden lg:block w-1/2  ${isExpandedMenu ? "mt-8" : "mt-12"}`}
        img="https://images.vexels.com/media/users/3/223088/isolated/preview/21470714072ecdd016b65cc8ba2b3424-dise-ntilde-o-de-la-bandera-de-colombia-brushy-by-vexels.png"
        alt="logo"
      />

      <div className="flex flex-row lg:flex-col items-start w-full text-white lg:mt-8">
        {menu.map((item) => (
          <a
            key={item.id}
            className={`w-full text-lg py-3 px-4 hover:bg-primary-red-300 flex gap-2 items-center ${
              location.pathname === item.path ? "bg-primary-red-300" : ""
            } ${
              isExpandedMenu
                ? "justify-center lg:justify-start"
                : "justify-center"
            }`}
            href={item.path}
          >
            {item.icon}
            <Text
              design="hidden lg:block"
              text={isExpandedMenu ? item.title : ""}
            />
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
