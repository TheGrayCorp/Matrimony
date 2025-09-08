import { MoveUpRight } from "lucide-react";

const DetailsCard = ({ name, age, profession, location, description }) => {
  return (
    <div className="p-4 flex flex-col justify-between h-56 md:w-96 bg-white border border-gray-200 rounded-xl shadow-md">
      <div>
        <div className="flex items-baseline gap-1">
          <div className="min-w-0">
            <h3
              className="text-lg font-semibold text-black1 truncate"
              title={name}
            >
              {name}
            </h3>
          </div>
          <span className="text-lg font-semibold text-black1 flex-shrink-0">
            , {age}
          </span>
        </div>
        <p className="text-sm text-lightGray pt-4 pb-6">
          {profession} , {location}
        </p>
        <p
          className="mt-2 text-sm text-mediumGray line-clamp-3"
          title={description}
        >
          {description}
        </p>
      </div>
      <a href="#" className="mt-2 text-sm text-black1 flex items-center gap-2">
        <div className="bg-gold p-1 rounded-md flex-shrink-0">
          <MoveUpRight className="w-4 h-4 text-white font-medium" />
        </div>
        <div className="flex items-baseline min-w-0">
          <span className="flex-shrink-0">View more about&nbsp;</span>
          <span className="truncate" title={name}>
            {name}
          </span>
        </div>
      </a>
    </div>
  );
};

export default DetailsCard;
