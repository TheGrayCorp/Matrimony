import ProfileCard from "./profileCard/ProfileCard";
import { docId, user } from "../../mockData/mockData";
import FooterText from "../../components/ui/footerText/FooterText";
import Topbar from "../../components/ui/Topbar";
import LoadingScreen from "../../components/ui/loading/LoadingScreen";
import { fetcher } from "../../lib/fetcher";
import { useCallback, useEffect, useRef } from "react";
import useSWRInfinite from "swr/infinite";
import Spinner from "../../components/ui/spinner/spinner";

const ListProfile = () => {
  const bottomRef = useRef(null);
  const getKey = (pageIndex, previousPageData) => {
    const page = pageIndex + 1;
    const clientDocId = docId;

    if (previousPageData && !previousPageData.length) return null;
    return `/getActiveOppositeGenderClients?clientDocId=${clientDocId}&numOfScroll=${page}`;
  };
  const { data, error, isLoading, size, setSize } = useSWRInfinite(
    getKey,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateOnReconnect: false,
      revalidateFirstPage: false,
    }
  );

  const profiles = data ? data[data.length - 1] : [];
  const isLoadingMore =
    isLoading || (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;

  const isReachingEnd = useCallback(() => {
    if (!data) return false;
    if (data[0]?.length === 0) return true;
    if (data.length > 1) {
      const lastPageCount = data[data.length - 1].length;
      const secondToLastPageCount = data[data.length - 2].length;
      if (lastPageCount === secondToLastPageCount) {
        return true;
      }
    }
    return false;
  }, [data]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoadingMore && !isReachingEnd()) {
          setSize(size + 1);
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
  }, [isLoadingMore, setSize, size, data, isReachingEnd]);

  if (isLoading && !data) {
    return <LoadingScreen />;
  }
  if (error) {
    return (
      <div className="text-center text-darkRed">Failed to load profiles.</div>
    );
  }
  if (isEmpty) {
    return <div className="text-center text-gray-500">No profiles found.</div>;
  }

  return (
    <div className="min-h-screen">
      <Topbar profile={user} />
      <div className="px-6 md:px-24 lg:px-40 py-8 grid grid-cols-1 lg:grid-cols-2 gap-0">
        {profiles.map((profile) => (
          <ProfileCard key={profile.docId} profile={profile} />
        ))}
      </div>
      <div ref={bottomRef} style={{ height: "1px" }} />
      {isLoadingMore && !isReachingEnd() && <Spinner />}
      <div className="mb-2">
        <FooterText align="center" />
      </div>
    </div>
  );
};

export default ListProfile;
