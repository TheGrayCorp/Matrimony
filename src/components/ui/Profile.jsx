import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { handleLogout } from "../../lib/logout";

const Profile = ({ imgSrc, userName, userRole }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onLogout = () => {
    handleLogout(navigate);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-10 h-10 rounded-full border border-gray-200 bg-white overflow-hidden"
      >
        {imgSrc && (
          <img
            src={imgSrc}
            alt="avatar"
            className="w-full h-full object-cover"
          />
        )}
      </button>
      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-10">
          <div className="px-4 py-2 text-gray-500 text-sm">
            <p>{userName}</p>
            <p className="text-xs font-medium">{userRole}</p>
          </div>
          <button
            className="w-full text-left px-4 py-2 bg-gray-100 hover:bg-gray-200 text-purple"
            onClick={onLogout}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;
