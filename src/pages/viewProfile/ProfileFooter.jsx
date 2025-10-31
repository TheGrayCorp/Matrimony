import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button";
import FooterText from "../../components/ui/footerText/FooterText";
import { updateClientAction } from "../../services/apis/clientActionApi";
import { useEffect, useState } from "react";

const ProfileFooter = ({
  variant = "otherProfile",
  senderId,
  receiverId,
  initialIsRequestSent,
  onStatusChange,
}) => {
  const navigate = useNavigate();
  const [isRequestSent, setIsRequestSent] = useState(initialIsRequestSent);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsRequestSent(initialIsRequestSent);
  }, [initialIsRequestSent]);

  const handleRequestClick = async () => {
    setIsSubmitting(true);
    const status = isRequestSent ? "Request_Cancelled" : "Request_Sent";

    try {
      await updateClientAction({ senderId, receiverId, status });
      if (onStatusChange) {
        onStatusChange();
      }
    } catch (error) {
      console.error("Failed to update request:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCheckMatchClick = () => {
    navigate("/checkMatch", { state: { senderId, receiverId } });
  };

  return (
    <div className="mt-12 px-6 text-center">
      <div className="flex items-center gap-4">
        {variant === "myProfile" ? (
          <Button
            label="Boost"
            size="medium"
            color="purple"
            className="w-full"
            onClick={() => alert("Boosting profile...")}
          />
        ) : (
          <>
            <Button
              label={
                isSubmitting
                  ? "..."
                  : isRequestSent
                  ? "Cancel Request"
                  : "Send Request"
              }
              size="medium"
              color="purple"
              className="w-full"
              onClick={handleRequestClick}
              disabled={isSubmitting}
            />
            <Button
              label="Check Match"
              size="medium"
              color="purple"
              className="w-full"
              onClick={handleCheckMatchClick}
            />
          </>
        )}
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
