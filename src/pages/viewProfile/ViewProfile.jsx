import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfileFooter from "./ProfileFooter";
import AboutSection from "./AboutSection";
import BioSection from "./BioSection";
import AstrologySection from "./AstrologySection";
import FooterText from "../../components/ui/footerText/FooterText";
import Topbar from "../../components/ui/Topbar";
import useClientData from "../../hooks/swr/useViewProfile";
import coverImg from "../../assets/images/viewProfileCoverImage.png";
import defaultProfileImg from "../../assets/images/viewProfileImage.png";
import { CircleUserRound } from "lucide-react";
import LoadingScreen from "../../components/ui/loading/LoadingScreen";

const ViewProfile = () => {
  const documentId = "4yUTHKC0GR5LpFA6PwQG";
  const { clientData, isLoading, isError } = useClientData(documentId);

  if (isLoading) {
    return <LoadingScreen />;
  }
  if (isError) {
    return <div className="text-red-500">Something went wrong</div>;
  }
  if (!clientData) {
    return <div>No profile data found.</div>;
  }

  const personalDetails = clientData.personalDetails || {};
  const profileImages = clientData.profileImages || {};
  const astrologyDetails = clientData.astrology || {};
  const careerDetails = clientData.careerStudies || {};
  const contactInfo = clientData.contactInfo?.address || {};
  const userInfo = clientData.userInfo || {};

  const topbarProfile = {
    imgSrc: profileImages.profile_pic_url || defaultProfileImg,
    userName: personalDetails.full_name || "User",
    userRole: userInfo.user_type || "Role",
  };

  const profileDetailsData = {
    name: personalDetails.full_name || "- -",
    age: personalDetails.age || "- -",
    profession: careerDetails.occupation || "Not Specified",
    countryFlag: "🇱🇰",
    countryName: contactInfo.country || "LK",
  };

  const aboutData = {
    fullName: personalDetails.full_name || "- -",
    religion: personalDetails.religion || "- -",
    education: careerDetails.education || "- -",
    nationality: personalDetails.nationality || "- -",
    occupation: careerDetails.occupation || "- -",
  };

  const bioData = {
    fullName: personalDetails.full_name,
    description: personalDetails.bio || "No biography provided.",
  };

  const astrologyData = {
    fullName: personalDetails.full_name,
    dob: astrologyDetails.dob || "- -",
    tob: astrologyDetails.dot || "- -",
    pob: astrologyDetails.birth_location || "- -",
    zodiac: astrologyDetails.rasi || "N/A",
    star: astrologyDetails.natchathiram || "- -",
    rasi_chart: astrologyDetails.rasi_chart || null,
    navamsa_chart: astrologyDetails.navamsa_chart || null,
  };

  const handleLogout = () => {
    console.log("User logged out!");
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <Topbar profile={topbarProfile} onLogout={handleLogout} />
        <div className="grid grid-cols-1 md:grid-cols-12 mt-6 px-6 md:px-12 lg:px-28">
          <div className="md:col-span-3">
            <div className="mx-6 border border-gray-200 rounded-md">
              <ProfileHeader
                coverImage={coverImg}
                profileImage={
                  profileImages.profile_pic_url || defaultProfileImg
                }
              />
              <ProfileDetails {...profileDetailsData} />
              <ProfileFooter />
            </div>
          </div>
          <div className="md:col-span-9">
            <div className="p-4">
              <AboutSection about={aboutData} />
              <div className="mt-20 mb-16">
                <BioSection bio={bioData} icon={CircleUserRound} />
              </div>
              <AstrologySection astrology={astrologyData} />
            </div>
          </div>
        </div>
      </div>
      <div className="py-4">
        <FooterText align="center" />
      </div>
    </div>
  );
};

export default ViewProfile;
