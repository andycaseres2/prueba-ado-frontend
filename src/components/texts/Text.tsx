type Props = { text?: string; design?: string };

const Text = ({ text, design }: Props) => {
  return <span className={`${design}`}>{text}</span>;
};

export default Text;
