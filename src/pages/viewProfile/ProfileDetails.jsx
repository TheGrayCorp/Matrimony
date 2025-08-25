const ProfileDetails = ({
  name,
  age,
  profession,
  countryFlag,
  countryName,
}) => {
  return (
    <div className="mt-14 text-center">
      <h2 className="text-lg font-semibold text-darkGray">
        {name} , {age}
      </h2>
      <p className="text-sm text-gray-500 flex items-center justify-center gap-2 mt-3">
        {profession}{" ."}<span className="text-lg">{countryFlag}</span>{" "}
        {countryName}
      </p>
    </div>
  );
};

export default ProfileDetails;
