import InfoSection from "./InfoSection";
import { ThumbsUp, ThumbsDown, ClipboardList } from "lucide-react";

const MoreAboutSection = ({ name, lifestyle }) => {
  return (
    <div>
      <h2 className="text-lg font-semibold text-purple mb-6">
        More About {name}
      </h2>
      <InfoSection
        title="Interest"
        icon={ThumbsUp}
        items={lifestyle?.interested}
        variant="tags"
      />
      <InfoSection
        title="Dislikes"
        icon={ThumbsDown}
        items={lifestyle?.notInterested}
        variant="tags"
      />
      <InfoSection
        title="Expectation"
        icon={ClipboardList}
        items={lifestyle?.expectations}
        variant="list"
      />
    </div>
  );
};

export default MoreAboutSection;
