const ImageCard = ({ src, alt = "Profile Image" }) => {
  return (
    <img
      src={src}
      alt={alt}
      className="w-full h-48 object-cover rounded-lg md:w-48 md:h-full"
    />
  );
};

export default ImageCard;
