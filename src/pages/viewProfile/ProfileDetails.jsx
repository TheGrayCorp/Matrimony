import { useState, useEffect } from "react";
import { Heart } from "lucide-react";

const ProfileDetails = ({
  name,
  age,
  profession,
  countryFlag,
  countryName,
  likesCount,
  isLikedByUser,
  onLikeToggle,
}) => {
  const [currentLikedStatus, setCurrentLikedStatus] = useState(isLikedByUser);
  const [displayLikesCount, setDisplayLikesCount] = useState(likesCount ?? 0);

  useEffect(() => {
    setCurrentLikedStatus(isLikedByUser);
    setDisplayLikesCount(likesCount ?? 0);
  }, [isLikedByUser, likesCount]);

  const formatLikes = (num) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(2) + " k";
    }
    return num.toString();
  };

  const handleHeartClick = () => {
    if (onLikeToggle) {
      onLikeToggle(!currentLikedStatus);
    }

    setCurrentLikedStatus((prev) => !prev);
    setDisplayLikesCount((prev) => (currentLikedStatus ? prev - 1 : prev + 1));
  };

  return (
    <div className="mt-14 text-center">
      <h2 className="text-lg font-semibold text-mediumGray">
        {name} , {age}
      </h2>
      <p className="text-sm text-gray-500 flex items-center justify-center gap-2 mt-3">
        {profession}
        {" ."}
        <span className="text-lg">{countryFlag}</span> {countryName}
      </p>
      <div className="flex justify-center mt-2 gap-1">
        <Heart
          className={`w-6 h-6 cursor-pointer transition-colors duration-200 ${
            currentLikedStatus
              ? "text-purple fill-purple"
              : "text-gray-400 hover:text-purple hover:fill-purple"
          }`}
          onClick={handleHeartClick}
        />
        <p className="text-gray-400">{formatLikes(displayLikesCount)}</p>
      </div>
    </div>
  );
};

export default ProfileDetails;
