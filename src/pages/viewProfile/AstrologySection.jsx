import InfoItem from "../../components/ui/InfoItem";
import { Calendar, Clock4, MapPin, Loader, Star } from "lucide-react";
import RasiChart from "./rasiChart/RasiChart";

const AstrologySection = ({ astrology }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-darkRed">
        {astrology.fullName}’s Astrology
      </h2>
      <div className="grid xl:grid-cols-12 lg:grid-cols-1">
        <div className="col-span-5">
          <div className="grid grid-cols-2 gap-4 mt-2">
            <InfoItem
              icon={Calendar}
              label="Date of Birth"
              value={astrology.dob}
            />
            <InfoItem
              icon={Clock4}
              label="Time of Birth"
              value={astrology.tob}
            />
            <InfoItem
              icon={MapPin}
              label="Place of Birth"
              value={astrology.pob}
            />
            <InfoItem
              icon={Loader}
              label="Zodiac Sign"
              value={astrology.zodiac}
            />
            <InfoItem icon={Star} label="Star Sign" value={astrology.star} />
          </div>
        </div>
        <div className="col-span-7 mt-8 lg:mt-0">
          <RasiChart />
        </div>
      </div>
    </div>
  );
};

export default AstrologySection;
