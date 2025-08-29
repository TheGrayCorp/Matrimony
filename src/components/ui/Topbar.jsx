import Profile from "./Profile";

const Topbar = ({ profile, onLogout }) => {
  return (
    <div className="bg-darkRed py-2 sticky top-0 z-10">
      <div className="px-6 flex justify-end">
        <Profile
          imgSrc={profile.imgSrc}
          userName={profile.userName}
          userRole={profile.userRole}
          onLogout={onLogout}
        />
      </div>
    </div>
  );
};

export default Topbar;
