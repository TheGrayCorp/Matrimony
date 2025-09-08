const PlanetButton = ({ planet, isUsed, placementNumber, onClick }) => (
  <button
    onClick={onClick}
    disabled={isUsed}
    className={`relative w-24 h-16 flex flex-col items-center justify-center rounded-lg transition-all duration-200
      ${
        isUsed
          ? "bg-gray-300 text-gray-500 cursor-not-allowed"
          : "bg-purple text-white hover:bg-red-900"
      }
    `}
  >
    <span className="font-semibold">{planet.name}</span>
    <span className="text-xs opacity-80">{planet.tamil}</span>
    {isUsed && (
      <div className="absolute -top-2 -right-2 w-6 h-6 flex items-center justify-center bg-yellow-400 text-white text-xs font-bold rounded-full border-2 border-white">
        {placementNumber}
      </div>
    )}
  </button>
);

const PlanetSelector = ({ planets, placements, lagnas, onPlanetSelect }) => {
  const placementMap = {};
  for (const [boxIndex, planetArray] of Object.entries(placements)) {
    for (const planet of planetArray) {
      placementMap[planet.id] = boxIndex;
    }
  }

  return (
    <div className="grid grid-cols-3 gap-3">
      {planets.map((planet) => {
        const placementBoxIndex = placementMap[planet.id];
        const isUsed = placementBoxIndex !== undefined;
        const placementNumber = isUsed ? lagnas[placementBoxIndex] : null;

        return (
          <PlanetButton
            key={planet.id}
            planet={planet}
            isUsed={isUsed}
            placementNumber={placementNumber}
            onClick={() => onPlanetSelect(planet)}
          />
        );
      })}
    </div>
  );
};

export default PlanetSelector;
