const BioSection = ({ bio, icon: Icon }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-darkRed">
        {bio.fullName}’s Bio
      </h2>
      <div className="flex items-center gap-4">
        {Icon && <Icon className="w-6 h-6 text-gray-400" />}
        <p className="text-sm text-gray-700">{bio.description}</p>
      </div>
    </div>
  );
};

export default BioSection;
