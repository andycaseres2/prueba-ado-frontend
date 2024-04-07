type Props = {
  action?: () => void;
  children: React.ReactNode;
};

const ButtonChildren = ({ action, children }: Props) => {
  return (
    <button
      onClick={action}
      className={`h-7 w-7 rounded flex justify-center items-center border border-primary bg-transparent mr-2`}
    >
      {children}
    </button>
  );
};

export default ButtonChildren;
