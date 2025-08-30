import Button from "../../../components/ui/Button";
import FooterText from "../../../components/ui/footerText/FooterText";
import { Camera, Plus } from "lucide-react";
import coverImg from "../../../assets/images/viewProfileCoverImage.png";
import profileImg from "../../../assets/images/viewProfileImage.png";

const ProfileCard = () => {
  return (
    <div className="border border-gray-200 rounded-md">
      <div className="relative h-60 bg-gray-200 rounded-md mb-16">
        <img
          src={coverImg}
          alt="Cover photo"
          className="w-full h-full rounded-lg object-cover"
        />
        <button className="absolute top-2 right-2 bg-white text-lightGold p-1 rounded-full">
          <Camera size={18} />
        </button>
        <div className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 w-32 h-32 rounded-full border-2 border-lightGold bg-gray-100">
          <img
            src={profileImg}
            alt="Profile"
            className="w-full h-full object-cover rounded-full"
          />
          <button className="absolute bottom-1 right-1 bg-white text-lightGold p-1 rounded-full">
            <Plus size={16} />
          </button>
        </div>
      </div>
      <div className="pt-28 pb-6 px-8">
        <Button
          label="Go To MyMate App"
          size="goToApp"
          color="darkRed"
          className="w-full"
        />
        <FooterText align="justify" className="mt-14" />
      </div>
    </div>
  );
};

export default ProfileCard;
