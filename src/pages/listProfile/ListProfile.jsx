import ProfileCard from "./profileCard/ProfileCard";
import { profiles } from "../../mockData/mockData";
import FooterText from "../../components/ui/footerText/FooterText";
import Topbar from "../../components/ui/Topbar";

const ListProfile = () => {
  const user = {
    imgSrc: "https://i.pravatar.cc/150?img=2",
    userName: "Kekajan",
  };

  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="min-h-screen">
      {/* <div className="bg-gold py-4 sticky top-0">
        <div className="px-6">
          <p className="flex justify-end text-white">Profile</p>
        </div>
      </div> */}
      <Topbar profile={user} onLogout={handleLogout} />
      <div className="px-6 md:px-24 lg:px-40 py-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      <div className="mb-2">
        <FooterText />
      </div>
    </div>
  );
};

export default ListProfile;
