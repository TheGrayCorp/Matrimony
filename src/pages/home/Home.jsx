import { useDispatch, useSelector } from "react-redux";
import MatchesFound from "./MatchesFound";
import ProfileCarousel from "./ProfileCarousel";
import { useMatches } from "../../hooks/swr/useMatches";
import { selectUserProfile } from "../../store/slices/profileSlice";
import Spinner from "../../components/ui/spinner/spinner";
import { setMatchesData } from "../../store/slices/matchesSlice";
import { useEffect } from "react";

const Home = () => {
  const dispatch = useDispatch();
  const { profileData: userProfile } = useSelector(selectUserProfile);
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

  useEffect(() => {
    if (profiles && profiles.length > 0) {
      dispatch(setMatchesData(profiles));
    }
  }, [profiles, dispatch]);

  const renderCarouselContent = () => {
    if (isLoading) {
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
      <MatchesFound count={isLoading ? 0 : totalCount || 0} />
      <div className="flex justify-center text-purple font-medium text-xl">
        View Matches
      </div>
      {renderCarouselContent()}
    </div>
  );
};

export default Home;
