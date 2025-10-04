import Button from "../../components/ui/Button";
import FooterText from "../../components/ui/footerText/FooterText";

const ProfileFooter = () => {
  return (
    <div className="mt-12 px-6 text-center">
      <div className="flex items-center gap-4">
        <Button
          label="Send Request"
          size="medium"
          color="purple"
          className="w-full"
          onClick={() => alert("Send request")}
        />
        <Button
          label="Check Match"
          size="medium"
          color="purple"
          className="w-full"
          onClick={() => alert("Interest shown")}
        />
      </div>
      <div className="mt-6">
        <Button
          label="Go To MyMate App"
          size="medium"
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
