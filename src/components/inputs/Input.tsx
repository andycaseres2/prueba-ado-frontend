type Props = {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  type: string;
  design?: string;
};

const Input = ({ value, onChange, placeholder, type, design }: Props) => {
  return (
    <input
      type={type || 'text'}
      onChange={onChange}
      className={`${design} border-none rounded bg-white px-2 focus:outline-none h-12 shadow w-full`}
      placeholder={placeholder}
      value={value || ''}
      autoComplete="off"
    />
  );
};

export default Input;
