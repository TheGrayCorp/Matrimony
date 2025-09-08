const BigSquare = ({ title }) => (
  <div
    style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2" }}
    className="w-full h-full border border-purple rounded-md flex items-center justify-center text-purple text-sm font-bold"
  >
    {title}
  </div>
);

const Square = ({ number, planets, isSelected, onClick }) => (
  <button
    onClick={onClick}
    className={`relative w-16 h-16 border rounded-md transition-all duration-200 hover:bg-red-50
      ${isSelected ? "border-yellow-500 border-4" : "border-purple"}
    `}
  >
    <span className="absolute top-1 right-2 text-purple text-sm">
      {number}
    </span>

    {planets && planets.length > 0 && (
      <div className="absolute bottom-2 left-2 flex flex-col items-start text-purple text-xs font-semibold">
        {planets.map((p) => (
          <span key={p.id}>{p.name}</span>
        ))}
      </div>
    )}
  </button>
);

const InteractiveRasiChart = ({
  title,
  lagnas,
  placements,
  selectedBoxIndex,
  onBoxClick,
}) => {
  const boxIndexMap = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

  return (
    <div
      className="grid gap-2"
      style={{
        gridTemplateAreas: `
          'box1 box2 box3 box4'
          'box12 center center box5'
          'box11 center center box6'
          'box10 box9 box8 box7'
        `,
      }}
    >
      <div
        style={{ gridArea: "center" }}
        className="flex items-center justify-center"
      >
        <BigSquare title={`${title} Chart`} />
      </div>
      {boxIndexMap.map((index) => {
        const planetsInBox = placements[index];
        return (
          <div key={index} style={{ gridArea: `box${index + 1}` }}>
            <Square
              number={lagnas[index]}
              planets={planetsInBox}
              isSelected={selectedBoxIndex === index}
              onClick={() => onBoxClick(index)}
            />
          </div>
        );
      })}
    </div>
  );
};

export default InteractiveRasiChart;
