import { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import FooterText from "../ui/footerText/FooterText";
import Header from "../ui/headerLayout/Header";
import Profile from "../ui/Profile";
import BottomNav from "../common/BottomNav";
import { handleLogout } from "../../lib/logout";
import { user, navItems, docId } from "../../data/Data";
import { useDispatch } from "react-redux";
import { useUserProfile } from "../../hooks/swr/useUserProfile";
import {
  profileLoading,
  profileReceived,
  profileError,
} from "../../store/slices/profileSlice";

const Layout = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const shouldShowBottomNav = location.pathname !== "/completeprofile";
  const { profile, isLoading, isError } = useUserProfile(docId);
  useEffect(() => {
    if (isLoading) {
      dispatch(profileLoading());
    } else if (isError) {
      dispatch(profileError("Failed to load user profile."));
    } else if (profile) {
      dispatch(profileReceived(profile));
    }
  }, [profile, isLoading, isError, dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex-shrink-0">
        <div className="flex justify-end px-4 pt-1 pb-0">
          <Profile
            imgSrc={user.imgSrc}
            userName={user.userName}
            onLogout={handleLogout}
          />
        </div>
        <Header />
      </div>
      <div className={`flex-grow ${shouldShowBottomNav ? "pb-24" : ""}`}>
        <Outlet />
      </div>
      <div className="flex-shrink-0 sticky bottom-0 z-30 w-full">
        {shouldShowBottomNav && (
          <div className="mb-0">
            <div className="px-4">
              <div className="max-w-screen-2xl mx-auto">
                <BottomNav items={navItems} />
              </div>
            </div>
          </div>
        )}
        <div className="hidden md:block py-2 px-10 bg-white">
          <FooterText align="justify" className="md:text-center" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
