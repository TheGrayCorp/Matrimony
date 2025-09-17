import FooterText from "../../components/ui/footerText/FooterText";
import Header from "../../components/ui/headerLayout/Header";
import Profile from "../../components/ui/Profile";
import BottomNav from "../../components/common/BottomNav";
import MatchesFound from "./MatchesFound";
import ProfileCarousel from "./ProfileCarousel";
import { handleLogout } from "../../lib/logout";
import { user, profiles, navItems } from "../../mockData/mockData";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-white">
        <div className="flex justify-end px-4 pt-1 pb-0">
          <Profile
            imgSrc={user.imgSrc}
            userName={user.userName}
            onLogout={handleLogout}
          />
        </div>
        <Header />
      </div>
      <div className="flex-grow md:pb-24">
        <MatchesFound count={137} />
        <ProfileCarousel profiles={profiles} />
      </div>
      <div className="z-30 mb-2">
        <div className="mx-2 md:mx-2 lg:mx-72 xl:md-72">
          <BottomNav items={navItems} />
        </div>
      </div>
      <div className="hidden md:block py-2 px-10">
        <FooterText align="justify" className="md:text-center" />
      </div>
    </div>
  );
};

export default Home;
