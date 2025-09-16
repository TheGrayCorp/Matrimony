import { NavLink } from "react-router-dom";

const NavItem = ({ to, icon: Icon, label, notificationCount }) => {
  return (
    <NavLink
      to={to}
      className={() =>
        `relative flex items-center justify-center py-4 w-48 rounded-lg transition-colors duration-200 bg-purple text-white flex-row p-2 gap-2  md:flex-col md:px-12 md:py-4 md:gap-1`
      }
    >
      <Icon size={24} className="text-lightPurple" />
      {/* <span className="text-base mt-2">{label}</span> */}
      <span className="text-xs font-semibold md:text-base md:mt-0">
        {label}
      </span>
      {/* {notificationCount > 0 && (
        <div className="absolute w-5 h-5 bg-red-500 text-white text-xs font-bold rounded-full">
          {notificationCount}
        </div>
      )} */}
    </NavLink>
  );
};

const BottomNav = ({ items }) => {
  return (
    <div className="rounded-lg border shadow-lg bg-white py-2">
      {/* <div className="flex items-center justify-center gap-12"> */}
      <div className="flex items-center justify-around md:justify-center md:gap-12">
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
