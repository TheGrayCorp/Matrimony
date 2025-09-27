import ProfileCard from "../../pages/explore/profileCard/ProfileCard";
import Spinner from "../ui/spinner/spinner";

const ProfileGrid = ({ profiles, isLoadingMore, isReachingEnd, bottomRef }) => {
  return (
    <div>
      <div className="px-6 md:px-24 lg:px-40 grid grid-cols-1 lg:grid-cols-2">
        {profiles.map((profile) => (
          <ProfileCard key={profile.docId} profile={profile} />
        ))}
      </div>
      <div ref={bottomRef} style={{ height: "1px" }} />
      {isLoadingMore && !isReachingEnd && <Spinner />}
    </div>
  );
};

export default ProfileGrid;
