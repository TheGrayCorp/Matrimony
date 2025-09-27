import { useSelector } from "react-redux";
import MatchesFound from "./MatchesFound";
import ProfileCarousel from "./ProfileCarousel";
import { useMatches } from "../../hooks/swr/useMatches";
import { selectUserProfile } from "../../store/slices/profileSlice";
import Spinner from "../../components/ui/spinner/spinner";

const Home = () => {
  const { data: userProfile, status: profileStatus } =
    useSelector(selectUserProfile);
  const currentUserDocId = userProfile?.docId;
  const matchParams = {
    clientRasi: userProfile?.astrology?.rasi,
    clientNatstram: userProfile?.astrology?.natchathiram,
    clientGender: userProfile?.personalDetails?.gender?.toUpperCase(),
  };
  const { profiles, totalCount, isLoading, isError, isEmpty } = useMatches(
    currentUserDocId,
    matchParams,
    !!currentUserDocId
  );

  const renderCarouselContent = () => {
    if (profileStatus === "loading" || profileStatus === "idle" || isLoading) {
      return (
        <div className="h-64 flex items-center justify-center">
          <Spinner />
        </div>
      );
    }
    if (isError) {
      return (
        <div className="h-64 flex items-center justify-center text-red-500">
          Failed to load matches.
        </div>
      );
    }
    if (isEmpty) {
      return (
        <div className="h-64 flex items-center justify-center text-gray-500">
          No matches found yet.
        </div>
      );
    }
    return <ProfileCarousel profiles={profiles} />;
  };

  return (
    <div>
      <MatchesFound count={totalCount || 0} />
      <div className="flex justify-center text-purple font-medium text-lg">
        View Matches
      </div>
      {renderCarouselContent()}
    </div>
  );
};

export default Home;
