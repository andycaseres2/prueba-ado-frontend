type Props = {
  img?: string;
  design?: string;
  alt?: string;
};

const Image = ({ img, design, alt }: Props) => {
  const defaultImageUrl =
    "https://www.energyfit.com.mk/wp-content/plugins/ap_background/images/default/default_large.png";

  const handleError = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = defaultImageUrl;
  };

  return (
    <img
      className={`${design || "w-full h-full"} rounded-md object-cover`}
      src={img || defaultImageUrl}
      alt={alt}
      onError={handleError}
    />
  );
};

export default Image;
