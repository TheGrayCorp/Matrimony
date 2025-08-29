import appStore from "../../../assets/images/appStore.png";
import FooterText from "../footerText/FooterText";

const Header = () => {
  return (
    <header className="bg-darkRed py-2">
      <div className="px-4 md:px-10 flex justify-center items-center gap-8">
        <FooterText align="justify" className="text-white lg:text-center" />
        <div className="flex items-center gap-2">
          <a href="#">
            <img src={appStore} alt="App Store" className="h-8" />
          </a>
          <a href="#">
            <img src={appStore} alt="Play Store" className="h-8" />
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
