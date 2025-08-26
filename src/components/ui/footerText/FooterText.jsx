import { twMerge } from "tailwind-merge";

const FooterText = ({ align = "center", className }) => {
  const alignmentClasses = {
    center: "text-center",
    justify: "text-justify",
    left: "text-left",
    right: "text-right",
  };

  const baseClasses = `text-xs text-black1 ${
    alignmentClasses[align] || "text-center"
  }`;

  return (
    <div>
      <p className={twMerge(baseClasses, className)}>
        Discover more about your soulmate with the MyMate app, explore astrology
        based matches, and learn about your partner’s interests and preferences.
      </p>
    </div>
  );
};

export default FooterText;
