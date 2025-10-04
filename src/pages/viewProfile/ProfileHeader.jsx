const ProfileHeader = ({ coverImage, profileImage }) => {
  return (
    <div>
      <div className="relative">
        <img
          src={coverImage}
          alt="Cover"
          className="w-full h-48 object-cover rounded-md"
        />
        <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
          <img
            src={profileImage}
            alt="Profile"
            className="
                w-20 h-20        
                sm:w-24 sm:h-24
                md:w-28 md:h-28
                lg:w-32 lg:h-32
                xl:w-36 xl:h-36
                rounded-full border-1 border-white object-cover
              "
          />
        </div>
      </div>
      <div className="flex justify-center mt-20 gap-2">
        <span className="inline-block w-2 h-2 rounded-full bg-yellow-400"></span>
        <span className="inline-block w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="inline-block w-2 h-2 rounded-full bg-gray-300"></span>
        <span className="inline-block w-2 h-2 rounded-full bg-gray-300"></span>
      </div>
    </div>
  );
};

export default ProfileHeader;
