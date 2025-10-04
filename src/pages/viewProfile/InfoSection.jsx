import Tag from "../../components/ui/tag/Tag";
import ExpectationItem from "../../components/ui/tag/ExpectationItem";

const InfoSection = ({ title, icon: Icon, items = [], variant = "tags" }) => {
  return (
    <section className="mb-10">
      <div className="flex items-center gap-3 mb-4">
        <Icon className="w-5 h-5 text-gray-400" />
        <p className="text-base text-gray-500">{title}</p>
      </div>
      {variant === "tags" ? (
        <div className="flex flex-wrap gap-3">
          {items.map((item, index) => (
            <Tag key={index} label={item} />
          ))}
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {items.map((item, index) => (
            <ExpectationItem key={index} label={item} />
          ))}
        </div>
      )}
    </section>
  );
};

export default InfoSection;
