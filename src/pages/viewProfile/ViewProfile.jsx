import ProfileHeader from "./ProfileHeader";
import ProfileDetails from "./ProfileDetails";
import ProfileFooter from "./ProfileFooter";
import AboutSection from "./AboutSection";
import BioSection from "./BioSection";
import AstrologySection from "./AstrologySection";
import coverImg from "../../assets/images/viewProfileCoverImage.png";
import defaultProfileImg from "../../assets/images/viewProfileImage.png";
import { CircleUserRound } from "lucide-react";
import LoadingScreen from "../../components/ui/loading/LoadingScreen";
import { useUserProfile } from "../../hooks/swr/useUserProfile";
import { useParams } from "react-router-dom";
import MoreAboutSection from "./MoreAboutSection";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../store/slices/profileSlice";
import { useCheckNotificationStatus } from "../../hooks/swr/useCheckNotificationStatus";

const ViewProfile = () => {
  const { id: viewedProfileId } = useParams();
  const { profileData: loggedInUserProfile } = useSelector(selectUserProfile);
  const loggedInUserDocId = loggedInUserProfile?.docId;
  const {
    profile,
    isLoading: isLoadingProfile,
    isError: isProfileError,
  } = useUserProfile(viewedProfileId);
  console.log("profile in ViewProfile", profile);

  const { statusData, isLoadingStatus, mutateStatus } =
    useCheckNotificationStatus(loggedInUserDocId, viewedProfileId);
  console.log("statusData in ViewProfile", statusData);

  const initialIsRequestSent =
    statusData?.interaction_status === "Request_Sent";
  const isMyProfile =
    loggedInUserDocId && loggedInUserDocId === viewedProfileId;
  const footerVariant = isMyProfile ? "myProfile" : "otherProfile";

  console.log("loggedInUserProfile in ViewProfile", loggedInUserProfile);

  if (
    isLoadingProfile ||
    (footerVariant === "otherProfile" && isLoadingStatus)
  ) {
    return <LoadingScreen />;
  }
  if (isProfileError) {
    return <div className="text-red-500">Something went wrong</div>;
  }
  if (!profile) {
    return <div>No profile data found.</div>;
  }

  const personalDetails = profile?.personalDetails || {};
  const profileImages = profile?.profileImages || {};
  const astrologyDetails = profile?.astrology || {};
  const careerDetails = profile?.careerStudies || {};
  const contactInfo = profile?.contactInfo?.address || {};
  const lifestyleDetails = profile?.lifestyle || {};

  const profileDetailsData = {
    name: personalDetails?.full_name || "- -",
    age: personalDetails?.age || "- -",
    profession: careerDetails?.occupation || "Not Specified",
    countryFlag: "🇱🇰",
    countryName: contactInfo?.country || "LK",
  };

  const aboutData = {
    fullName: personalDetails?.full_name || "- -",
    religion: personalDetails?.religion || "- -",
    education: careerDetails?.education || "- -",
    nationality: personalDetails?.nationality || "- -",
    occupation: careerDetails?.occupation || "- -",
  };

  const bioData = {
    fullName: personalDetails?.full_name,
    description: personalDetails?.bio || "No biography provided.",
  };

  const astrologyData = {
    fullName: personalDetails?.full_name,
    dob: astrologyDetails?.dob || "- -",
    tob: astrologyDetails?.dot || "- -",
    pob: astrologyDetails?.birth_location || "- -",
    zodiac: astrologyDetails?.rasi || "N/A",
    star: astrologyDetails?.natchathiram || "- -",
    rasi_chart: astrologyDetails?.rasi_chart || null,
    navamsa_chart: astrologyDetails?.navamsa_chart || null,
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex-grow">
        <div className="grid grid-cols-1 md:grid-cols-12 mt-6 px-6 md:px-12 lg:px-28">
          <div className="md:col-span-3">
            <div className="mx-6 border border-gray-200 rounded-md">
              <ProfileHeader
                coverImage={coverImg}
                profileImage={
                  profileImages?.profile_pic_url || defaultProfileImg
                }
              />
              <ProfileDetails {...profileDetailsData} />
              <ProfileFooter
                variant={footerVariant}
                senderId={loggedInUserDocId}
                receiverId={viewedProfileId}
                initialIsRequestSent={initialIsRequestSent}
                onStatusChange={mutateStatus}
              />
            </div>
          </div>
          <div className="md:col-span-9">
            <div className="p-4">
              <div className="flex justify-between items-center">
                <AboutSection about={aboutData} />
                {/* <p>dshfsdifodag</p> */}
              </div>
              <div className="mt-20 mb-16">
                <BioSection bio={bioData} icon={CircleUserRound} />
              </div>
              <AstrologySection astrology={astrologyData} />
              <div className="mt-10">
                <MoreAboutSection
                  name={personalDetails?.full_name}
                  lifestyle={lifestyleDetails}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewProfile;
