import InfoItem from "../../components/ui/InfoItem";
import {
  UserRound,
  BookOpenText,
  Loader,
  LocateFixed,
  School,
} from "lucide-react";

const AboutSection = ({ about }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-lg font-semibold text-lightGold">
        About {about.fullName}
      </h2>
      <div className="grid grid-cols-2 gap-4">
        <InfoItem icon={UserRound} label="Full Name" value={about.fullName} />
        <InfoItem icon={Loader} label="Religion" value={about.religion} />
        <InfoItem
          icon={BookOpenText}
          label="Education"
          value={about.education}
        />
        <InfoItem
          icon={LocateFixed}
          label="Nationality"
          value={about.nationality}
        />
        <InfoItem icon={School} label="Occupation" value={about.occupation} />
      </div>
    </div>
  );
};

export default AboutSection;
