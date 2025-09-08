import Button from "../../components/ui/Button";
import { Heart } from "lucide-react";
import FooterText from "../../components/ui/footerText/FooterText";

const ProfileFooter = () => {
  return (
    <div className="mt-12 px-6 text-center">
      {/* Show Interest Button */}
      <Button
        label="Show Interest"
        size="large"
        color="purpleBorder"
        Icon={Heart}
        className="w-full"
        onClick={() => alert("Interest shown")}
      />

      {/* Go To App Button */}
      <div className="mt-6">
        <Button
          label="Go To MyMate App"
          size="large"
          color="purple"
          className="w-full"
          onClick={() => alert("Navigating to MyMate App")}
        />
      </div>
      <FooterText align="justify" className="my-12" />
    </div>
  );
};

export default ProfileFooter;
