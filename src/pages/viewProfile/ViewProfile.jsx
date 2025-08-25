import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfileFooter from "./ProfileFooter";
import coverImg from "../../assets/images/viewProfileCoverImage.png";
import profileImg from "../../assets/images/viewProfileImage.png";
import AboutSection from "./AboutSection";
import BioSection from "./BioSection";
import AstrologySection from "./AstrologySection";
import { CircleUserRound } from "lucide-react";
import { aboutData, astrologyData, bioData } from "../../mockData/mockData";
import FooterText from "../../components/ui/footerText/FooterText";

const ViewProfile = () => {
  return (
    <div className="min-h-screen">
      <div>
        <div className="bg-gold py-4">
          <div className="px-6">
            <p className="flex justify-end text-white">Profile</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 mt-6 px-28">
          <div className="md:col-span-3">
            <div className="mx-6 border border-gray-200 rounded-md">
              <div>
                <ProfileHeader
                  coverImage={coverImg}
                  profileImage={profileImg}
                />
              </div>
              <ProfileDetails
                name="Olivia Charlotte"
                age={28}
                profession="Accountant"
                countryFlag="🇱🇰"
                countryName="LK"
              />
              <ProfileFooter />
            </div>
          </div>
          <div className="md:col-span-9">
            <div className="p-4">
              <div>
                <AboutSection about={aboutData} />
              </div>
              <div className="mt-20 mb-16">
                <BioSection bio={bioData} icon={CircleUserRound} />
              </div>
              <div>
                <AstrologySection astrology={astrologyData} />
              </div>
            </div>
          </div>
        </div>
        <div className="fixed bottom-2 w-full">
          <FooterText />
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
