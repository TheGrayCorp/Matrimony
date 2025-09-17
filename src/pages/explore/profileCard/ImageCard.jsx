const ImageCard = ({ src, alt = "Profile Image" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-96 md:w-56 h-48 md:h-56 object-cover rounded-xl"
    />
  );
};

export default ImageCard;
