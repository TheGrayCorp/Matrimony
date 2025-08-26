import ProfileCard from "./profileCard/ProfileCard";
import { profiles, user } from "../../mockData/mockData";
import FooterText from "../../components/ui/footerText/FooterText";
import Topbar from "../../components/ui/Topbar";

const ListProfile = () => {
  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="min-h-screen">
      <Topbar profile={user} onLogout={handleLogout} />
      <div className="px-6 md:px-24 lg:px-40 py-8 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-0">
        {profiles.map((profile) => (
          <ProfileCard key={profile.id} profile={profile} />
        ))}
      </div>
      <div className="mb-2">
        <FooterText align="center" />
      </div>
    </div>
  );
};

export default ListProfile;
