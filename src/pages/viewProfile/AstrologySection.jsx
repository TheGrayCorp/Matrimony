import InfoItem from "../../components/ui/InfoItem";
import {
  Calendar,
  Clock4,
  MapPin,
  Loader,
  Star,
  LayoutGrid,
} from "lucide-react";
import RasiChart from "./rasiChart/RasiChart";
import Accordion from "../../components/ui/accordion/Accordion";

const AstrologySection = ({ astrology }) => {
  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-darkRed">
        {astrology.fullName}’s Astrology
      </h2>
      <div className="grid grid-cols-2 lg:grid-cols-2 mt-2">
        <InfoItem icon={Calendar} label="Date of Birth" value={astrology.dob} />
        <InfoItem icon={Clock4} label="Time of Birth" value={astrology.tob} />
        <InfoItem icon={MapPin} label="Place of Birth" value={astrology.pob} />
        <InfoItem icon={Loader} label="Zodiac Sign" value={astrology.zodiac} />
        <InfoItem icon={Star} label="Star Sign" value={astrology.star} />
      </div>
      <div className="mt-6 md:mt-0">
        <Accordion title="Astrology Chart" Icon={LayoutGrid}>
          <RasiChart
            rasiChartData={astrology.rasi_chart}
            navamsaChartData={astrology.navamsa_chart}
            rasiLagna={astrology.rasi_lagna_tamil}
            navamsaLagna={astrology.navamsa_lagna_tamil}
          />
        </Accordion>
      </div>
    </div>
  );
};

export default AstrologySection;
