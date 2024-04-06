type Props = {
  action: () => void;
  text: string;
  design?: string;
  disabled?: boolean;
};

const Button = ({ action, text, design, disabled }: Props) => {
  return (
    <button
      className={`${design} bg-primary px-6 py-2.5 rounded font-bold text-white ${disabled && '!bg-gray-500'}`}
      onClick={action}
      disabled={disabled}
    >
      {text}
    </button>
  );
};

export default Button;
