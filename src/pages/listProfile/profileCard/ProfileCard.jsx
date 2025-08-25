import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";
import DetailsCard from "./DetailsCard";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/viewprofile/${profile.id}`);
  };

  return (
    <div
      onClick={handleClick}
      className="overflow-hidden cursor-pointer flex flex-col md:flex-row transition-shadow m-6"
    >
      <ImageCard src={profile.imageUrl} alt={`${profile.name}'s profile`} />
      <DetailsCard
        name={profile.name}
        age={profile.age}
        profession={profile.profession}
        location={profile.location}
        description={profile.description}
      />
    </div>
  );
};

export default ProfileCard;
