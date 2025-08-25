const InfoItem = ({ icon: Icon, label, value }) => {
  return (
    <div className="flex items-center gap-6 mb-2">
      {Icon && <Icon className="w-5 h-5 text-gray-400" />}
      <div>
        <p className="text-xs text-gray-400">{label}</p>
        <p className="text-sm font-medium text-gray-500">{value}</p>
      </div>
    </div>
  );
};

export default InfoItem;
