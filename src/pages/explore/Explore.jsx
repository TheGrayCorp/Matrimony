import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../store/slices/profileSlice";
import { useExploreProfiles } from "../../hooks/swr/useExploreProfiles";
import { useMatches } from "../../hooks/swr/useMatches";
import LoadingScreen from "../../components/ui/loading/LoadingScreen";
import Tabs from "../../components/ui/Tabs/Tabs";
import ProfileGrid from "../../components/profile/ProfileGrid";
import { docId, TABS } from "../../data/Data";

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const bottomRef = useRef(null);
  const activeTab = searchParams.get("tab") || "explore";
  const { data: userProfile } = useSelector(selectUserProfile);
  const currentUserDocId = userProfile?.docId || docId;

  const filters = {
    clientRasi: userProfile?.astrology?.rasi || "GEMINI",
    clientNatstram: userProfile?.astrology?.natchathiram || "PUNARVASU",
    clientGender: userProfile?.personalDetails?.gender?.toUpperCase() || "MALE",
  };
  const matchParams = {
    clientRasi: userProfile?.astrology?.rasi || "GEMINI",
    clientNatstram: userProfile?.astrology?.natchathiram || "PUNARVASU",
    clientGender: userProfile?.personalDetails?.gender?.toUpperCase() || "MALE",
  };

  const exploreResult = useExploreProfiles(
    currentUserDocId,
    filters,
    activeTab === "explore"
  );
  const matchesResult = useMatches(
    currentUserDocId,
    matchParams,
    activeTab === "matches"
  );

  const {
    profiles,
    isLoading,
    isError,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    setSize,
    mutate,
  } = activeTab === "explore" ? exploreResult : matchesResult;

  useEffect(() => {
    mutate();
  }, [activeTab, mutate]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore && !isReachingEnd) {
          setSize((prevSize) => prevSize + 1);
        }
      },
      { threshold: 1.0 }
    );
    const currentRef = bottomRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [isLoadingMore, isReachingEnd, setSize]);

  const handleTabClick = (tabId) => {
    setSearchParams({ tab: tabId });
  };

  const renderContent = () => {
    if (isLoading) return <LoadingScreen />;
    if (isError)
      return (
        <div className="text-center text-purple">Failed to load profiles.</div>
      );
    if (isEmpty)
      return (
        <div className="flex-grow flex justify-center items-center text-purple">
          No profiles found.
        </div>
      );

    return (
      <ProfileGrid
        profiles={profiles}
        isLoadingMore={isLoadingMore}
        isReachingEnd={isReachingEnd}
        bottomRef={bottomRef}
      />
    );
  };

  return (
    <div>
      <div className="flex justify-center py-4">
        <Tabs tabs={TABS} activeTab={activeTab} onTabClick={handleTabClick} />
      </div>
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>
    </div>
  );
};

export default Explore;
