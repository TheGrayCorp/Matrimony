import { useNavigate } from "react-router-dom";
import ImageCard from "./ImageCard";
import DetailsCard from "./DetailsCard";

const ProfileCard = ({ profile }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/viewprofile/${profile?.docId}`);
  };

  return (
    <div
      onClick={handleClick}
      className="overflow-hidden cursor-pointer flex flex-col md:flex-row transition-shadow md:m-6 bg-red-400"
    >
      <ImageCard src={profile?.profile_pic_url} alt={``} />
      <DetailsCard
        name={profile?.full_name}
        age={profile?.age}
        profession={profile?.occupation}
        location={profile?.city}
        description={profile?.bio}
      />
    </div>
  );
};

export default ProfileCard;
