import Button from "../../components/ui/Button";
import { Heart } from "lucide-react";

const ProfileFooter = () => {
  return (
    <div className="mt-12 px-6 text-center">
      {/* Show Interest Button */}
      <Button
        label="Show Interest"
        size="large"
        color="goldWhite"
        Icon={Heart}
        className="w-full"
        onClick={() => alert("Interest shown")}
      />

      {/* Go To App Button */}
      <div className="mt-6">
        <Button
          label="Go To MyMate App"
          size="large"
          color="gold"
          className="w-full"
          onClick={() => alert("Navigating to MyMate App")}
        />
      </div>

      {/* Footer Info */}
      <p className="text-xs text-gray-500 my-12">
        Discover more about your soulmate with the{" "}
        <span className="text-blue-600 cursor-pointer">MyMate app</span>, explore
        astrology based matches, and learn about your partner’s interests and
        preferences.
      </p>
    </div>
  );
};

export default ProfileFooter;