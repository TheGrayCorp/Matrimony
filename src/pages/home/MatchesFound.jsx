import { Link } from "react-router-dom";
import MatchesFoundBg from "../../assets/images/MatchesFoundBg.svg";

const MatchesFound = ({ count }) => {
  return (
    <div className="flex flex-col items-center my-8">
      <div className="relative w-72 h-40 flex flex-col items-center justify-center">
        <img
          src={MatchesFoundBg}
          alt="Matches found"
          className="absolute inset-0 w-full h-full object-cover -z-10"
        />
        <div className="z-10 text-center">
          <p className="text-4xl font-bold text-white">{count}</p>
          <p className="text-white font-medium mt-1">Matches Found</p>
        </div>
      </div>
      <Link
        to="/matches"
        className="text-purple font-semibold text-lg mt-4 hover:underline"
      >
        View Matches
      </Link>
    </div>
  );
};

export default MatchesFound;
