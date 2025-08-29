import Header from "../../components/ui/headerLayout/Header";
import ProfileCard from "../../pages/completeProfile/ProfileCard";
import CompleteProfileForm from "./CompleteProfileForm";
import FooterText from "../../components/ui/footerText/FooterText";
import { user } from "../../mockData/mockData";
import Profile from "../../components/ui/Profile";

const CompleteProfile = () => {
  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex justify-end px-4 pt-1 pb-0">
        <Profile
          imgSrc={user.imgSrc}
          userName={user.userName}
          onLogout={handleLogout}
        />
      </div>
      <Header />
      <main className="flex-grow px-4 lg:px-8 py-8 min-w-full">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-1 px-4 md:px-6">
            <ProfileCard />
          </div>
          <div className="lg:col-span-2">
            <CompleteProfileForm />
          </div>
        </div>
      </main>
      <footer className="py-2 px-10">
        <FooterText align="justify" className="md:text-center" />
      </footer>
    </div>
  );
};

export default CompleteProfile;
