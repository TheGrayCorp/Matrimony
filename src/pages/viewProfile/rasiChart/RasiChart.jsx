import { useMemo } from "react";

const RASI_GRID_STYLES = {
  "மீன ராசி": { gridRow: 1, gridColumn: 1 },
  "மேஷ ராசி": { gridRow: 1, gridColumn: 2 },
  "ரிஷப ராசி": { gridRow: 1, gridColumn: 3 },
  "மிதுன ராசி": { gridRow: 1, gridColumn: 4 },
  "கடக ராசி": { gridRow: 2, gridColumn: 4 },
  "சிம்ம ராசி": { gridRow: 3, gridColumn: 4 },
  "கன்னி ராசி": { gridRow: 4, gridColumn: 4 },
  "துலா ராசி": { gridRow: 4, gridColumn: 3 },
  "விருச்சிக ராசி": { gridRow: 4, gridColumn: 2 },
  "தனுசு ராசி": { gridRow: 4, gridColumn: 1 },
  "மகர ராசி": { gridRow: 3, gridColumn: 1 },
  "கும்ப ராசி": { gridRow: 2, gridColumn: 1 },
};

const CLOCKWISE_RASI_ORDER = [
  "மேஷ ராசி",
  "ரிஷப ராசி",
  "மிதுன ராசி",
  "கடக ராசி",
  "சிம்ம ராசி",
  "கன்னி ராசி",
  "துலா ராசி",
  "விருச்சிக ராசி",
  "தனுசு ராசி",
  "மகர ராசி",
  "கும்ப ராசி",
  "மீன ராசி",
];

const TAMIL_TO_CANON = {
  மேஷம்: "மேஷ ராசி",
  மேஷ: "மேஷ ராசி",
  ரிஷபம்: "ரிஷப ராசி",
  ரிஷப: "ரிஷப ராசி",
  மிதுனம்: "மிதுன ராசி",
  மிதுன: "மிதுன ராசி",
  கடகம்: "கடக ராசி",
  கடக: "கடக ராசி",
  சிம்மம்: "சிம்ம ராசி",
  சிம்ம: "சிம்ம ராசி",
  கன்னி: "கன்னி ராசி",
  துலாம்: "துலா ராசி",
  துலா: "துலா ராசி",
  விருச்சிகம்: "விருச்சிக ராசி",
  விருச்சிக: "விருச்சிக ராசி",
  தனுசு: "தனுசு ராசி",
  மகரம்: "மகர ராசி",
  மகர: "மகர ராசி",
  கும்பம்: "கும்ப ராசி",
  கும்ப: "கும்ப ராசி",
  மீனம்: "மீன ராசி",
  மீன: "மீன ராசி",
};

const EN_TO_CANON = {
  ARIES: "மேஷ ராசி",
  TAURUS: "ரிஷப ராசி",
  GEMINI: "மிதுன ராசி",
  CANCER: "கடக ராசி",
  LEO: "சிம்ம ராசி",
  VIRGO: "கன்னி ராசி",
  LIBRA: "துலா ராசி",
  SCORPIO: "விருச்சிக ராசி",
  SAGITTARIUS: "தனுசு ராசி",
  CAPRICORN: "மகர ராசி",
  AQUARIUS: "கும்ப ராசி",
  PISCES: "மீன ராசி",
};

const toCanonicalRasiKey = (lagnaRaw) => {
  if (!lagnaRaw) return "மேஷ ராசி";
  const v = String(lagnaRaw).trim();
  if (RASI_GRID_STYLES[v]) return v;
  if (v.endsWith(" ராசி") && RASI_GRID_STYLES[v]) return v;
  if (TAMIL_TO_CANON[v]) return TAMIL_TO_CANON[v];
  const upper = v.toUpperCase();
  if (EN_TO_CANON[upper]) return EN_TO_CANON[upper];
  const guess = `${v.replace(/ம்$/, "")} ராசி`;
  if (RASI_GRID_STYLES[guess]) return guess;

  console.warn("Unknown lagna:", lagnaRaw, "— defaulting to மேஷ ராசி");
  return "மேஷ ராசி";
};

const calculateChartSquares = (chartData, lagnaName) => {
  if (!chartData) return [];

  const lagnaKey = toCanonicalRasiKey(lagnaName);

  const startIndex = CLOCKWISE_RASI_ORDER.indexOf(lagnaKey);
  if (startIndex === -1) {
    console.warn("Lagna not found in CLOCKWISE_RASI_ORDER:", lagnaKey);
    return [];
  }

  const orderedRasis = [
    ...CLOCKWISE_RASI_ORDER.slice(startIndex),
    ...CLOCKWISE_RASI_ORDER.slice(0, startIndex),
  ];

  return orderedRasis.map((rasiName, index) => {
    const houseNumber = index + 1;
    const placeKey = `place${houseNumber}`;
    return {
      id: rasiName,
      houseNumber: houseNumber.toString().padStart(2, "0"),
      planets: chartData[placeKey] || [],
      style: RASI_GRID_STYLES[rasiName],
    };
  });
};

const RasiChart = ({
  rasiChartData,
  navamsaChartData,
  rasiLagna,
  navamsaLagna,
}) => {
  const rasiSquares = useMemo(
    () => calculateChartSquares(rasiChartData, rasiLagna),
    [rasiChartData, rasiLagna]
  );
  const navamsaSquares = useMemo(
    () => calculateChartSquares(navamsaChartData, navamsaLagna),
    [navamsaChartData, navamsaLagna]
  );

  if (!rasiChartData || !navamsaChartData) {
    return <div>Astrology chart data is not available.</div>;
  }

  const charts = [
    { title: "Rasi Chart", squares: rasiSquares },
    { title: "Navamsa Chart", squares: navamsaSquares },
  ];

  return (
    <div className="flex flex-col sm:flex-row gap-12 py-2">
      {charts.map((chart) => (
        <div key={chart.title}>
          <div className="grid grid-cols-4 grid-rows-4 gap-2 w-[17rem] h-[17rem]">
            {chart.squares.map((square) => (
              <Square key={square.id} {...square} />
            ))}
            <BigSquare title={chart.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

const Square = ({ houseNumber, planets = [], style }) => {
  return (
    <div
      style={style}
      className="relative w-16 h-16 border border-purple rounded-md text-xs text-purple p-1"
    >
      <span className="absolute top-1 right-1 font-bold">{houseNumber}</span>
      <div className="absolute bottom-1 left-1 flex flex-wrap gap-x-2">
        {planets.map((planet, index) => (
          <span key={index} className="text-[10px] font-semibold">
            {planet}
          </span>
        ))}
      </div>
    </div>
  );
};

const BigSquare = ({ title }) => (
  <div
    style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2" }}
    className="w-full h-full border border-purple rounded-md flex items-center justify-center text-purple text-sm font-bold"
  >
    {title}
  </div>
);

export default RasiChart;
