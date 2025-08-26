import Profile from "./Profile";

const Topbar = (profile, onLogout) => {
  console.log("profile", profile);
  return (
    <div className="bg-darkRed py-2 sticky top-0">
      <div className="px-6 flex justify-end">
        <Profile
          imgSrc={profile.imgSrc}
          userName={profile.userName}
          onLogout={onLogout}
        />
      </div>
    </div>
  );
};

export default Topbar;
