import { MoveUpRight } from "lucide-react";

const DetailsCard = ({ name, age, profession, location, description }) => {
  return (
    <div className="p-4 flex flex-col justify-between h-full w-96 bg-white border border-gray-200 rounded-xl shadow-md">
      <div>
        <h3 className="text-lg font-semibold text-black1 text-nowrap truncate whitespace-nowrap" >
          {name} , {age}
        </h3>
        <p className="text-sm text-lightGray pt-4 pb-6">
          {profession} , {location}
        </p>
        <p className="mt-2 text-sm text-mediumGray">{description}</p>
      </div>
      <a href="#" className="mt-2 text-sm text-black1 flex items-center gap-2">
        <div className="bg-gold p-1 rounded-md">
          <MoveUpRight className="w-4 h-4 text-white font-medium" />
        </div>
        View more about {name}
      </a>
    </div>
  );
};

export default DetailsCard;
