const ImageCard = ({ src, alt = "Profile Image" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full md:w-48 h-48 md:h-56 object-cover rounded-lg "
    />
  );
};

export default ImageCard;
