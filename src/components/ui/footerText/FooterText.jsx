const FooterText = ({ align = "center" }) => {
  return (
    <div>
      <p className={`text-xs text-black1 mb-0 text-${align}`}>
        Discover more about your soulmate with the MyMate app, explore astrology
        based matches, and learn about your partner’s interests and preferences.
      </p>
    </div>
  );
};

export default FooterText;
