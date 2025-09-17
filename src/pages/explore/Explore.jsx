import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useSWRInfinite from "swr/infinite";
import ProfileCard from "./profileCard/ProfileCard";
import { docId, navItems, profiles, user } from "../../mockData/mockData";
import FooterText from "../../components/ui/footerText/FooterText";
import LoadingScreen from "../../components/ui/loading/LoadingScreen";
import { fetcher } from "../../lib/fetcher";
import Spinner from "../../components/ui/spinner/spinner";
import Header from "../../components/ui/headerLayout/Header";
import { handleLogout } from "../../lib/logout";
import Profile from "../../components/ui/Profile";
import Tabs from "../../components/ui/Tabs/Tabs";
import BottomNav from "../../components/common/BottomNav";

const TABS = [
  {
    id: "explore",
    label: "Explore All",
    apiPath: "/getActiveOppositeGenderClients",
  },
  { id: "matches", label: "Matches", apiPath: "/getMatches" },
];

const Explore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const bottomRef = useRef(null);
  const activeTab = searchParams.get("tab") || "explore";
  const activeTabData = TABS.find((tab) => tab.id === activeTab);
  const getKey = (pageIndex, previousPageData) => {
    const page = pageIndex + 1;
    const clientDocId = docId;

    if (previousPageData && !previousPageData.length) return null;
    return `${activeTabData.apiPath}?clientDocId=${clientDocId}&numOfScroll=${page}`;
  };
  // const { data, error, isLoading, size, setSize, mutate } = useSWRInfinite(
  //   getKey,
  //   fetcher,
  //   {
  //     revalidateOnFocus: false,
  //     revalidateOnReconnect: false,
  //     revalidateFirstPage: false,
  //   }
  // );

  // useEffect(() => {
  //   mutate();
  // }, [activeTab, mutate]);

  // const profiles = data ? data[data.length - 1] : [];
  //  const profiles = data ? data.flat() : [];
  // const isLoadingMore =
  //   isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  // const isEmpty = data?.[0]?.length === 0;

  // const isReachingEnd = useCallback(() => {
  //   if (!data) return false;
  //   if (data[0]?.length === 0) return true;
  //   if (data.length > 1) {
  //     const lastPageCount = data[data.length - 1].length;
  //     const secondToLastPageCount = data[data.length - 2].length;
  //     if (lastPageCount === secondToLastPageCount) {
  //       return true;
  //     }
  //   }
  //   return false;
  // }, [data]);
  // const isReachingEnd = isEmpty || (data && data[data.length - 1]?.length < 25);

  // useEffect(() => {
  //   const observer = new IntersectionObserver(
  //     (entries) => {
  //       if (entries[0].isIntersecting && !isLoadingMore && !isReachingEnd()) {
  //         setSize(size + 1);
  //       }
  //     },
  //     { threshold: 1.0 }
  //   );

  //   const currentRef = bottomRef.current;
  //   if (currentRef) {
  //     observer.observe(currentRef);
  //   }

  //   return () => {
  //     if (currentRef) {
  //       observer.unobserve(currentRef);
  //     }
  //   };
  // }, [isLoadingMore, setSize, size, data, isReachingEnd]);

  const handleTabClick = (tabId) => {
    setSearchParams({ tab: tabId });
  };

  // if (isLoading && !data) {
  //   return <LoadingScreen />;
  // }

  const renderContent = () => {
    // if (error) {
    //   return (
    //     <div className="text-center text-purple">Failed to load profiles.</div>
    //   );
    // }
    // if (isEmpty) {
    //   return (
    //     <div className="flex-grow flex justify-center items-center text-purple mt-40">
    //       No profiles found.
    //     </div>
    //   );
    // }
    return (
      <div>
        <div className="px-6 md:px-24 lg:px-40 grid grid-cols-1 lg:grid-cols-2">
          {profiles.map((profile) => (
            <ProfileCard key={profile.docId} profile={profile} />
          ))}
        </div>
        <div ref={bottomRef} style={{ height: "1px" }} />
        {/* {isLoadingMore && !isReachingEnd() && <Spinner />} */}
      </div>
    );
  };

  return (
    <div className="h-screen flex flex-col">
      <div className="flex-shrink-0">
        <div>
          <div className="flex justify-end px-4 pt-1 pb-0">
            <Profile
              imgSrc={user.imgSrc}
              userName={user.userName}
              onLogout={handleLogout}
            />
          </div>
          <Header />
        </div>
        <div className="flex justify-center py-4">
          <Tabs tabs={TABS} activeTab={activeTab} onTabClick={handleTabClick} />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto">{renderContent()}</div>
      <div className="flex-shrink-0">
        <div className="z-30 mx-2 md:mx-2 lg:mx-72 xl:md-72">
          <BottomNav items={navItems} />
        </div>
        <div className="py-2 px-10">
          <FooterText align="center" />
        </div>
      </div>
    </div>
  );
};

export default Explore;
