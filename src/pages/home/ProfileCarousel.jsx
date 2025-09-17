import ProfileCard from "../explore/profileCard/ProfileCard";

const ProfileCarousel = ({ profiles }) => {
  return (
    <div className="flex overflow-x-auto hide-scrollbar gap-6 md:py-4 pl-3 md:pl-24 lg:pl-40">
      {profiles.map((profile, index) => (
        <div key={profile.docId || index} className="flex-shrink-0">
          <ProfileCard profile={profile} />
        </div>
      ))}
    </div>
  );
};

export default ProfileCarousel;
