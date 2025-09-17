import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label, notificationCount }) => {
  return (
    <NavLink
      to={to}
      className={() =>
        `relative flex items-center justify-center py-3 w-48 rounded-lg transition-colors duration-200 bg-purple text-white flex-row gap-2 md:flex-col md:px-12 md:py-3`
      }
    >
      <div className="relative flex items-center">
        <Icon size={24} className="text-lightPurple" />
        {notificationCount > 0 && (
          <div
            className="absolute -right-8 px-1 rounded-md flex items-center justify-center
                       bg-lightPurple text-black text-sm"
          >
            {notificationCount}
          </div>
        )}
      </div>
      <span className="text-xs md:text-base">{label}</span>
    </NavLink>
  );
};

const BottomNav = ({ items }) => {
  return (
    <div className="rounded-lg border shadow-lg py-2 bg-gray-50">
      <div className="flex items-center justify-around md:justify-center gap-4 md:gap-40">
        {items.map((item) => (
          <NavItem
            key={item.to}
            to={item.to}
            icon={item.icon}
            label={item.label}
            notificationCount={item.notificationCount}
          />
        ))}
      </div>
    </div>
  );
};

export default BottomNav;
