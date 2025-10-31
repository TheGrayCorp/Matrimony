import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUserProfile } from "../../store/slices/profileSlice";
import { useMyMates } from "../../hooks/swr/useMyMates";
import { MY_MATES_TABS } from "./MyMatesTabs";
import LoadingScreen from "../../components/ui/loading/LoadingScreen";
import Tabs from "../../components/ui/Tabs/Tabs";
import ProfileGrid from "../../components/profile/ProfileGrid";
import { Search, SlidersHorizontal } from "lucide-react";

const MyMates = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const bottomRef = useRef(null);
  const activeTab = searchParams.get("tab") || MY_MATES_TABS[0].id;

  const { data: userProfile, status: profileStatus } =
    useSelector(selectUserProfile);
  const currentUserDocId = userProfile?.docId;

  const {
    profiles,
    isLoading,
    isError,
    isLoadingMore,
    isEmpty,
    isReachingEnd,
    setSize,
  } = useMyMates(activeTab, currentUserDocId);

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
    if (isLoading || profileStatus === "loading") {
      return <LoadingScreen />;
    }
    if (isError) {
      return (
        <div className="text-center text-purple p-8">Failed to load data.</div>
      );
    }
    if (isEmpty) {
      return (
        <div className="flex-grow flex justify-center items-center text-lg text-purple p-8">
          No profile found in this list
        </div>
      );
    }
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
      {/* --- Header Section --- */}
      <div className="flex items-center justify-between py-4 px-6 md:px-24 lg:px-40">
        <Tabs
          tabs={MY_MATES_TABS}
          activeTab={activeTab}
          onTabClick={handleTabClick}
        />
        <div className="flex items-center gap-4">
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <Search className="text-gray-600" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-lg">
            <SlidersHorizontal className="text-gray-600" />
          </button>
        </div>
      </div>

      {/* --- Main Content Section --- */}
      <div className="flex-1 overflow-y-auto px-6 md:px-24 lg:px-40">
        {renderContent()}
      </div>
    </div>
  );
};

export default MyMates;
