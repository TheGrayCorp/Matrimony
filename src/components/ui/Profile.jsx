import { useState } from "react";

const Profile = ({ imgSrc, userName, onLogout }) => {
  const [isOpen, setIsOpen] = useState(false);
  console.log("Image src", imgSrc, userName);

  return (
    <div className="relative">
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
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border">
          <div className="px-4 py-2 text-gray-700">{userName}</div>
          <button
            className="w-full text-left px-4 py-2 hover:bg-gray-100"
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
