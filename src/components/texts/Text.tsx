type Props = { text: string; desing?: string };

const Text = ({ text, desing }: Props) => {
  return <span className={`${desing}`}>{text}</span>;
};

export default Text;
