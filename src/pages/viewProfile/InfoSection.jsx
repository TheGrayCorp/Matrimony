import Tag from "../../components/ui/tag/Tag";
import ExpectationItem from "../../components/ui/tag/ExpectationItem";

const InfoSection = ({ title, icon: Icon, items, variant = "tags" }) => {
  const safeItems = items || [];

  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-gray-400" />
        <p className="text-base text-gray-500">{title}</p>
      </div>
      {safeItems.length > 0 ? (
        variant === "tags" ? (
          <div className="flex flex-wrap gap-3">
            {safeItems.map((item, index) => (
              <Tag key={index} label={item} />
            ))}
          </div>
        ) : (
          <div className="flex flex-col gap-3">
            {safeItems.map((item, index) => (
              <ExpectationItem key={index} label={item} />
            ))}
          </div>
        )
      ) : (
        <p className="text-sm text-gray-400 italic">Not specified.</p>
      )}
    </section>
  );
};

export default InfoSection;
