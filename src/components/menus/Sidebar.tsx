interface Menu {
  title: string;
  path: string;
}

type Props = {
  menu: Menu[];
};

const Sidebar = ({ menu }: Props) => {
  return (
    <div className="w-[25%] h-screen flex flex-col items-center bg-primary py-6">
      <img
        className="w-1/2"
        src="https://images.vexels.com/media/users/3/223088/isolated/preview/21470714072ecdd016b65cc8ba2b3424-dise-ntilde-o-de-la-bandera-de-colombia-brushy-by-vexels.png"
        alt="logo"
      />
      <div className="flex flex-col items-start w-full text-white mt-8">
        {menu.map((item) => (
          <a
            className="w-full py-3 px-2 hover:bg-primary-red-300"
            href={item.path}
          >
            {item.title}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
