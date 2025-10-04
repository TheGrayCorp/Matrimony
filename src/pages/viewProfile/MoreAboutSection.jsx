import InfoSection from "./InfoSection";
import { ThumbsUp, ThumbsDown, ClipboardList } from "lucide-react";

const userProfileData = {
  name: "Olivia Charlotte",
  interests: [
    "Play musical Instrumental",
    "Reading Story Book",
    "Smoking",
    "Reading Books",
    "Play musical Instrumental",
    "Reading Story Book",
    "Smoking",
  ],
  dislikes: [
    "Reading Story Book",
    "Reading Story Book",
    "Reading Story Book",
    "Smoking",
    "Reading Books",
    "Play musical Instrumental",
    "Reading Story Book",
  ],
  expectations: [
    "Kind, respectful, and emotionally mature.",
    "Family-oriented but open-minded.",
    "Values emotional connection over material things.",
    "Open to sharing responsibilities and equally (career, home, etc).",
  ],
};

const MoreAboutSection = () => {
  return (
    <div className="">
      <h2 className="text-lg font-semibold text-purple mb-6">
        More About {userProfileData.name}
      </h2>
      <InfoSection
        title="Interest"
        icon={ThumbsUp}
        items={userProfileData.interests}
        variant="tags"
      />
      <InfoSection
        title="Dislikes"
        icon={ThumbsDown}
        items={userProfileData.dislikes}
        variant="tags"
      />
      <InfoSection
        title="Expectation"
        icon={ClipboardList}
        items={userProfileData.expectations}
        variant="list"
      />
    </div>
  );
};

export default MoreAboutSection;
