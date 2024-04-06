interface Option {
  id: number;
  title: string;
  action: () => void;
  icon: JSX.Element | null;
}

type Props = { options: Option[]; design?: string };

const PopOver = ({ options, design }: Props) => {
  return (
    <div>
      {options.map((option) => (
        <div
          key={option.id}
          className={`w-full py-3 px-4  gap-4 bg-white shadow cursor-pointer flex justify-between ${design}`}
          onClick={option.action}
        >
          {option.title}
          {option.icon}
        </div>
      ))}
    </div>
  );
};

export default PopOver;
