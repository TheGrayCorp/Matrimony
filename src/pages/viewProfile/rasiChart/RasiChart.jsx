// import { useMemo } from "react";

// const RASI_VISUAL_MAP = {
//   "மேஷ ராசி": 2,
//   "ரிஷப ராசி": 3,
//   "மிதுன ராசி": 4,
//   "கடக ராசி": 5,
//   "சிம்ம ராசி": 6,
//   "கன்னி ராசி": 7,
//   "துலா ராசி": 8,
//   "விருச்சிக ராசி": 9,
//   "தனுசு ராசி": 10,
//   "மகர ராசி": 11,
//   "கும்ப ராசி": 12,
//   "மீன ராசி": 1,
// };

// const CLOCKWISE_VISUAL_ORDER = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1];

// const calculateChartLayout = (chartData, lagnaName) => {
//   if (!chartData) {
//     return new Map();
//   }

//   const lagnaFullName = lagnaName ? `${lagnaName} ராசி` : "மேஷ ராசி";
//   const startVisualPosition = RASI_VISUAL_MAP[lagnaFullName] || 2;

//   const startIndex = CLOCKWISE_VISUAL_ORDER.indexOf(startVisualPosition);
//   const orderedVisualLayout = [
//     ...CLOCKWISE_VISUAL_ORDER.slice(startIndex),
//     ...CLOCKWISE_VISUAL_ORDER.slice(0, startIndex),
//   ];

//   const layoutMap = new Map();
//   orderedVisualLayout.forEach((visualPosition, index) => {
//     const houseNumber = index + 1;
//     layoutMap.set(visualPosition, {
//       houseNumber: houseNumber.toString().padStart(2, "0"),
//       planets: chartData[`place${houseNumber}`] || [],
//     });
//   });

//   return layoutMap;
// };

// const RasiChart = ({
//   rasiChartData,
//   navamsaChartData,
//   rasiLagna,
//   navamsaLagna,
// }) => {
//   const rasiLayoutMap = useMemo(
//     () => calculateChartLayout(rasiChartData, rasiLagna),
//     [rasiChartData, rasiLagna]
//   );
//   const navamsaLayoutMap = useMemo(
//     () => calculateChartLayout(navamsaChartData, navamsaLagna),
//     [navamsaChartData, navamsaLagna]
//   );

//   if (!rasiChartData || !navamsaChartData) {
//     return <div>Astrology chart data is not available.</div>;
//   }

//   const charts = [
//     { title: "Rasi Chart", layout: rasiLayoutMap },
//     { title: "Navamsa Chart", layout: navamsaLayoutMap },
//   ];

//   return (
//     <div className="flex flex-col sm:flex-row gap-12">
//       {charts.map((chart, index) => (
//         <div key={index}>
//           <div className="grid grid-cols-[repeat(4,4rem)] grid-rows-[repeat(4,4rem)] gap-2">
//             <Square {...chart.layout.get(1)} />
//             <Square {...chart.layout.get(2)} />
//             <Square {...chart.layout.get(3)} />
//             <Square {...chart.layout.get(4)} />

//             <Square {...chart.layout.get(12)} />
//             <BigSquare title={chart.title} />
//             <Square {...chart.layout.get(5)} />

//             <Square {...chart.layout.get(11)} />
//             <Square {...chart.layout.get(6)} />

//             <Square {...chart.layout.get(10)} />
//             <Square {...chart.layout.get(9)} />
//             <Square {...chart.layout.get(8)} />
//             <Square {...chart.layout.get(7)} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Square = ({ houseNumber, planets = [] }) => {
//   return (
//     <div className="relative w-16 h-16 border border-lightGold rounded-md flex items-start justify-start text-xs text-lightGold p-1">
//       <span className="absolute top-1 right-1 font-bold">{houseNumber}</span>
//       <div className="absolute bottom-1 left-1 flex flex-wrap gap-x-2">
//         {planets.map((planet, index) => (
//           <span key={index} className="text-[10px] font-semibold">
//             {planet}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// const BigSquare = ({ title }) => (
//   <div className="col-span-2 row-span-2 w-[calc(100% + 0.5rem)] h-[calc(100% + 0.5rem)] border border-lightGold rounded-md flex items-center justify-center text-lightGold text-sm font-bold">
//     {title}
//   </div>
// );

// export default RasiChart;

// import { useMemo } from "react";

// // This map defines the UNCHANGING VISUAL POSITION of each Rasi in the grid.
// // "Meenam" is always in the top-left box (position 1), "Dhanusu" is always in the bottom-left (position 10).
// const RASI_VISUAL_MAP = {
//   "மேஷ ராசி": 2,
//   "ரிஷப ராசி": 3,
//   "மிதுன ராசி": 4,
//   "கடக ராசி": 5,
//   "சிம்ம ராசி": 6,
//   "கன்னி ராசி": 7,
//   "துலா ராசி": 8,
//   "விருச்சிக ராசி": 9,
//   "தனுசு ராசி": 10,
//   "மகர ராசி": 11,
//   "கும்ப ராசி": 12,
//   "மீன ராசி": 1,
// };

// // This array defines the CLOCKWISE PATH through the visual positions.
// const CLOCKWISE_VISUAL_ORDER = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1];

// // This function calculates which house number and which planets go into each visual box.
// const calculateChartLayout = (chartData, lagnaName) => {
//   if (!chartData) {
//     return new Map();
//   }

//   // 1. Determine the Lagna's full name, e.g., "தனுசு ராசி". Default to Aries.
//   const lagnaFullName = lagnaName ? `${lagnaName} ராசி` : "மேஷ ராசி";

//   // 2. Find the VISUAL POSITION where House #1 should start. For "தனுசு", this will be 10.
//   const startVisualPosition = RASI_VISUAL_MAP[lagnaFullName] || 2;

//   // 3. Re-order the clockwise path to begin from that starting visual position.
//   // For "தனுசு", this becomes: [10, 11, 12, 1, 2, 3, 4, 5, 6, 7, 8, 9]
//   const startIndex = CLOCKWISE_VISUAL_ORDER.indexOf(startVisualPosition);
//   const orderedVisualLayout = [
//     ...CLOCKWISE_VISUAL_ORDER.slice(startIndex),
//     ...CLOCKWISE_VISUAL_ORDER.slice(0, startIndex),
//   ];

//   const layoutMap = new Map();

//   // 4. Loop through the new clockwise path and assign house numbers and planet data.
//   orderedVisualLayout.forEach((visualPosition, index) => {
//     const houseNumber = index + 1; // The actual house number (1, 2, 3, etc.)

//     // Example for "தனுசு":
//     // When visualPosition is 10, houseNumber is 1. We map VISUAL position 10 to HOUSE data 1.
//     // When visualPosition is 11, houseNumber is 2. We map VISUAL position 11 to HOUSE data 2.
//     layoutMap.set(visualPosition, {
//       houseNumber: houseNumber.toString().padStart(2, "0"),
//       planets: chartData[`place${houseNumber}`] || [],
//     });
//   });

//   return layoutMap;
// };

// const RasiChart = ({
//   rasiChartData,
//   navamsaChartData,
//   rasiLagna,
//   navamsaLagna,
// }) => {
//   const rasiLayoutMap = useMemo(
//     () => calculateChartLayout(rasiChartData, rasiLagna),
//     [rasiChartData, rasiLagna]
//   );
//   const navamsaLayoutMap = useMemo(
//     () => calculateChartLayout(navamsaChartData, navamsaLagna),
//     [navamsaChartData, navamsaLagna]
//   );

//   if (!rasiChartData || !navamsaChartData) {
//     return <div>Astrology chart data is not available.</div>;
//   }

//   const charts = [
//     { title: "Rasi Chart", layout: rasiLayoutMap },
//     { title: "Navamsa Chart", layout: navamsaLayoutMap },
//   ];

//   return (
//     <div className="flex flex-col sm:flex-row gap-12">
//       {charts.map((chart, index) => (
//         <div key={index}>
//           {/* This JSX renders the static visual shell. The .get() method pulls the DYNAMIC data for each position. */}
//           <div className="grid grid-cols-[repeat(4,4rem)] grid-rows-[repeat(4,4rem)] gap-2">
//             <Square {...chart.layout.get(1)} />
//             <Square {...chart.layout.get(2)} />
//             <Square {...chart.layout.get(3)} />
//             <Square {...chart.layout.get(4)} />

//             <Square {...chart.layout.get(12)} />
//             <BigSquare title={chart.title} />
//             <Square {...chart.layout.get(5)} />

//             <Square {...chart.layout.get(11)} />
//             <Square {...chart.layout.get(6)} />

//             <Square {...chart.layout.get(10)} />
//             <Square {...chart.layout.get(9)} />
//             <Square {...chart.layout.get(8)} />
//             <Square {...chart.layout.get(7)} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Square = ({ houseNumber, planets = [] }) => {
//   return (
//     <div className="relative w-16 h-16 border border-lightGold rounded-md flex items-start justify-start text-xs text-lightGold p-1">
//       <span className="absolute top-1 right-1 font-bold">{houseNumber}</span>
//       <div className="absolute bottom-1 left-1 flex flex-wrap gap-x-2">
//         {planets.map((planet, index) => (
//           <span key={index} className="text-[10px] font-semibold">
//             {planet}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// const BigSquare = ({ title }) => (
//   <div className="col-span-2 row-span-2 w-[calc(100% + 0.5rem)] h-[calc(100% + 0.5rem)] border border-lightGold rounded-md flex items-center justify-center text-lightGold text-sm font-bold">
//     {title}
//   </div>
// );

// export default RasiChart;

// import { useMemo } from "react";

// // --- CONSTANTS (These are correct and should be kept) ---
// const RASI_VISUAL_MAP = {
//   "மேஷ ராசி": 2,
//   "ரிஷப ராசி": 3,
//   "மிதுன ராசி": 4,
//   "கடக ராசி": 5,
//   "சிம்ம ராசி": 6,
//   "கன்னி ராசி": 7,
//   "துலா ராசி": 8,
//   "விருச்சிக ராசி": 9,
//   "தனுசு ராசி": 10,
//   "மகர ராசி": 11,
//   "கும்ப ராசி": 12,
//   "மீன ராசி": 1,
// };
// const CLOCKWISE_VISUAL_ORDER = [2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1];

// // This helper function is correct. It correctly maps a visual position to its dynamic content.
// const calculateChartLayout = (chartData, lagnaName) => {
//   if (!chartData) {
//     return new Map();
//   }
//   const lagnaFullName = lagnaName ? `${lagnaName} ராசி` : "மேஷ ராசி";
//   const startVisualPosition = RASI_VISUAL_MAP[lagnaFullName] || 2;

//   const startIndex = CLOCKWISE_VISUAL_ORDER.indexOf(startVisualPosition);
//   const orderedVisualLayout = [
//     ...CLOCKWISE_VISUAL_ORDER.slice(startIndex),
//     ...CLOCKWISE_VISUAL_ORDER.slice(0, startIndex),
//   ];

//   const layoutMap = new Map();
//   orderedVisualLayout.forEach((visualPosition, index) => {
//     const houseNumber = index + 1;
//     layoutMap.set(visualPosition, {
//       houseNumber: houseNumber.toString().padStart(2, "0"),
//       planets: chartData[`place${houseNumber}`] || [],
//     });
//   });
//   return layoutMap;
// };

// // --- NEW: Define the fixed grid positions for rendering ---
// // This tells each visual box its exact CSS grid coordinates.
// const GRID_POSITIONS = [
//   { visualId: 1, style: { gridRow: 1, gridColumn: 1 } }, // Top-left
//   { visualId: 2, style: { gridRow: 1, gridColumn: 2 } },
//   { visualId: 3, style: { gridRow: 1, gridColumn: 3 } },
//   { visualId: 4, style: { gridRow: 1, gridColumn: 4 } }, // Top-right
//   { visualId: 5, style: { gridRow: 2, gridColumn: 4 } }, // Middle-right
//   { visualId: 6, style: { gridRow: 3, gridColumn: 4 } },
//   { visualId: 7, style: { gridRow: 4, gridColumn: 4 } }, // Bottom-right
//   { visualId: 8, style: { gridRow: 4, gridColumn: 3 } },
//   { visualId: 9, style: { gridRow: 4, gridColumn: 2 } },
//   { visualId: 10, style: { gridRow: 4, gridColumn: 1 } }, // Bottom-left
//   { visualId: 11, style: { gridRow: 3, gridColumn: 1 } },
//   { visualId: 12, style: { gridRow: 2, gridColumn: 1 } }, // Middle-left
// ];

// const RasiChart = ({
//   rasiChartData,
//   navamsaChartData,
//   rasiLagna,
//   navamsaLagna,
// }) => {
//   const rasiLayoutMap = useMemo(
//     () => calculateChartLayout(rasiChartData, rasiLagna),
//     [rasiChartData, rasiLagna]
//   );
//   const navamsaLayoutMap = useMemo(
//     () => calculateChartLayout(navamsaChartData, navamsaLagna),
//     [navamsaChartData, navamsaLagna]
//   );

//   if (!rasiChartData || !navamsaChartData) {
//     return <div>Astrology chart data is not available.</div>;
//   }

//   const charts = [
//     { title: "Rasi Chart", layout: rasiLayoutMap },
//     { title: "Navamsa Chart", layout: navamsaLayoutMap },
//   ];

//   return (
//     <div className="flex flex-col sm:flex-row gap-12">
//       {charts.map((chart) => (
//         <div key={chart.title}>
//           {/* --- THIS IS THE CORRECTED RENDERING LOGIC --- */}
//           <div className="grid grid-cols-4 grid-rows-4 gap-2 w-[17rem] h-[17rem]">
//             {/* Map over the fixed positions and place each square explicitly */}
//             {GRID_POSITIONS.map((pos) => {
//               const dataForSquare = chart.layout.get(pos.visualId);
//               return (
//                 <Square
//                   key={pos.visualId}
//                   style={pos.style}
//                   {...dataForSquare}
//                 />
//               );
//             })}
//             {/* Place the BigSquare explicitly in the center */}
//             <BigSquare title={chart.title} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// // Add the 'style' prop for positioning
// const Square = ({ houseNumber, planets = [], style }) => {
//   return (
//     <div
//       style={style}
//       className="relative w-16 h-16 border border-lightGold rounded-md text-xs text-lightGold p-1"
//     >
//       <span className="absolute top-1 right-1 font-bold">{houseNumber}</span>
//       <div className="absolute bottom-1 left-1 flex flex-wrap gap-x-2">
//         {planets.map((planet, index) => (
//           <span key={index} className="text-[10px] font-semibold">
//             {planet}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// const BigSquare = ({ title }) => (
//   // Use CSS grid properties to explicitly place this in the center
//   <div
//     style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2" }}
//     className="w-full h-full border border-lightGold rounded-md flex items-center justify-center text-lightGold text-sm font-bold"
//   >
//     {title}
//   </div>
// );

// export default RasiChart;

// import { useMemo } from "react";

// // --- STEP 1: Define the fixed visual properties of the grid ---

// // Map Rasi names DIRECTLY to their fixed CSS grid styles. This is simpler.
// const RASI_GRID_STYLES = {
//   "மீன ராசி": { gridRow: 1, gridColumn: 1 },
//   "மேஷ ராசி": { gridRow: 1, gridColumn: 2 },
//   "ரிஷப ராசி": { gridRow: 1, gridColumn: 3 },
//   "மிதுன ராசி": { gridRow: 1, gridColumn: 4 },
//   "கடக ராசி": { gridRow: 2, gridColumn: 4 },
//   "சிம்ம ராசி": { gridRow: 3, gridColumn: 4 },
//   "கன்னி ராசி": { gridRow: 4, gridColumn: 4 },
//   "துலா ராசி": { gridRow: 4, gridColumn: 3 },
//   "விருச்சிக ராசி": { gridRow: 4, gridColumn: 2 },
//   "தனுசு ராசி": { gridRow: 4, gridColumn: 1 },
//   "மகர ராசி": { gridRow: 3, gridColumn: 1 },
//   "கும்ப ராசி": { gridRow: 2, gridColumn: 1 },
// };

// // Define the CLOCKWISE order using the Rasi names themselves.
// const CLOCKWISE_RASI_ORDER = [
//   "மேஷ ராசி",
//   "ரிஷப ராசி",
//   "மிதுன ராசி",
//   "கடக ராசி",
//   "சிம்ம ராசி",
//   "கன்னி ராசி",
//   "துலா ராசி",
//   "விருச்சிக ராசி",
//   "தனுசு ராசி",
//   "மகர ராசி",
//   "கும்ப ராசி",
//   "மீன ராசி",
// ];

// // --- STEP 2: The core calculation function (now much simpler) ---

// const calculateChartSquares = (chartData, lagnaName) => {
//   if (!chartData) return [];

//   const lagnaFullName = lagnaName ? `${lagnaName} ராசி` : "மேஷ ராசி";

//   // Find the starting index in our clockwise array.
//   const startIndex = CLOCKWISE_RASI_ORDER.indexOf(lagnaFullName);
//   if (startIndex === -1) return []; // Safety check

//   // Re-order the Rasi names to start from the Lagna.
//   const orderedRasis = [
//     ...CLOCKWISE_RASI_ORDER.slice(startIndex),
//     ...CLOCKWISE_RASI_ORDER.slice(0, startIndex),
//   ];

//   // Directly create the final array of squares ready for rendering.
//   const squares = orderedRasis.map((rasiName, index) => {
//     const houseNumber = index + 1;
//     return {
//       id: rasiName, // Use the name as a unique key
//       houseNumber: houseNumber.toString().padStart(2, "0"),
//       planets: chartData[`place${houseNumber}`] || [],
//       style: RASI_GRID_STYLES[rasiName], // Get the correct CSS style
//     };
//   });

//   return squares;
// };

// // --- STEP 3: The simplified rendering component ---

// const RasiChart = ({
//   rasiChartData,
//   navamsaChartData,
//   rasiLagna,
//   navamsaLagna,
// }) => {
//   // Hooks are at the top, as required.
//   const rasiSquares = useMemo(
//     () => calculateChartSquares(rasiChartData, rasiLagna),
//     [rasiChartData, rasiLagna]
//   );
//   const navamsaSquares = useMemo(
//     () => calculateChartSquares(navamsaChartData, navamsaLagna),
//     [navamsaChartData, navamsaLagna]
//   );

//   // Early return is after hooks.
//   if (!rasiChartData || !navamsaChartData) {
//     return <div>Astrology chart data is not available.</div>;
//   }

//   const charts = [
//     { title: "Rasi Chart", squares: rasiSquares },
//     { title: "Navamsa Chart", squares: navamsaSquares },
//   ];

//   return (
//     <div className="flex flex-col sm:flex-row gap-12 py-2">
//       {charts.map((chart) => (
//         <div key={chart.title}>
//           <div className="relative grid grid-cols-4 grid-rows-4 gap-2 w-[17rem] h-[17rem]">
//             {/* Just map the final calculated squares. Each one knows its own style. */}
//             {chart.squares.map((square) => (
//               <Square key={square.id} {...square} />
//             ))}
//             <BigSquare title={chart.title} />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// const Square = ({ houseNumber, planets = [], style }) => {
//   return (
//     <div
//       style={style}
//       className="absolute w-16 h-16 border border-lightGold rounded-md text-xs text-lightGold p-1"
//     >
//       <span className="absolute top-1 right-1 font-bold">{houseNumber}</span>
//       <div className="absolute bottom-1 left-1 flex flex-wrap gap-x-2">
//         {planets.map((planet, index) => (
//           <span key={index} className="text-[10px] font-semibold">
//             {planet}
//           </span>
//         ))}
//       </div>
//     </div>
//   );
// };

// const BigSquare = ({ title }) => (
//   <div
//     style={{ gridRow: "2 / span 2", gridColumn: "2 / span 2" }}
//     className="relative w-full h-full border border-lightGold rounded-md flex items-center justify-center text-lightGold text-sm font-bold"
//   >
//     {title}
//   </div>
// );

// export default RasiChart;

import { useMemo } from "react";

// STEP 1: Define the fixed visual properties of the grid

// Map Rasi names DIRECTLY to their fixed CSS grid styles.
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

// Define the CLOCKWISE order of the Rasi names. THIS IS THE KEY.
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

// STEP 2: The core calculation function.
// This function creates the final list of squares ready to be rendered.
// const calculateChartSquares = (chartData, lagnaName) => {
//   if (!chartData) return [];

//   const lagnaFullName = lagnaName ? `${lagnaName} ராசி` : "மேஷ ராசி";

//   // Find the starting index in our clockwise array. For "தனுசு", this is 8.
//   const startIndex = CLOCKWISE_RASI_ORDER.indexOf(lagnaFullName);
//   if (startIndex === -1) return []; // Safety check

//   // Re-order the Rasi names to start from the Lagna.
//   const orderedRasis = [
//     ...CLOCKWISE_RASI_ORDER.slice(startIndex),
//     ...CLOCKWISE_RASI_ORDER.slice(0, startIndex),
//   ];

//   // Directly create the final array of squares. Each square knows its style, house number, and planets.
//   return orderedRasis.map((rasiName, index) => {
//     const houseNumber = index + 1;
//     return {
//       id: rasiName, // Use the name as a unique key for React
//       houseNumber: houseNumber.toString().padStart(2, "0"),
//       planets: chartData[`place${houseNumber}`] || [],
//       style: RASI_GRID_STYLES[rasiName], // Get the correct, fixed CSS style for this Rasi
//     };
//   });
// };

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
  // Already canonical
  if (RASI_GRID_STYLES[v]) return v;
  // “... ராசி” form
  if (v.endsWith(" ராசி") && RASI_GRID_STYLES[v]) return v;
  // Tamil variants
  if (TAMIL_TO_CANON[v]) return TAMIL_TO_CANON[v];
  // English variants (case-insensitive)
  const upper = v.toUpperCase();
  if (EN_TO_CANON[upper]) return EN_TO_CANON[upper];
  // As a last resort, try appending " ராசி"
  const guess = `${v.replace(/ம்$/, "")} ராசி`;
  if (RASI_GRID_STYLES[guess]) return guess;

  console.warn("Unknown lagna:", lagnaRaw, "— defaulting to மேஷ ராசி");
  return "மேஷ ராசி";
};

// --- Core calculation
const calculateChartSquares = (chartData, lagnaName) => {
  if (!chartData) return [];

  // Accept Tamil/English lagna and normalize to our canonical key
  const lagnaKey = toCanonicalRasiKey(lagnaName);

  // Start the clockwise cycle from the lagna square (exactly that square is House 1)
  const startIndex = CLOCKWISE_RASI_ORDER.indexOf(lagnaKey);
  if (startIndex === -1) {
    console.warn("Lagna not found in CLOCKWISE_RASI_ORDER:", lagnaKey);
    return [];
  }

  const orderedRasis = [
    ...CLOCKWISE_RASI_ORDER.slice(startIndex),
    ...CLOCKWISE_RASI_ORDER.slice(0, startIndex),
  ];

  // Now number 1..12 clockwise from lagna, and map planets from place1..place12
  return orderedRasis.map((rasiName, index) => {
    const houseNumber = index + 1; // 1..12
    const placeKey = `place${houseNumber}`; // place1..place12
    return {
      id: rasiName,
      houseNumber: houseNumber.toString().padStart(2, "0"),
      planets: chartData[placeKey] || [],
      style: RASI_GRID_STYLES[rasiName],
    };
  });
};

// const calculateChartSquares = (chartData, lagnaName) => {
//   if (!chartData) return [];

//   const lagnaFullName = lagnaName ? `${lagnaName} ராசி` : "மேஷ ராசி";

//   // Step 1: Find lagna position in CLOCKWISE_RASI_ORDER
//   const startIndex = CLOCKWISE_RASI_ORDER.indexOf(lagnaFullName);
//   if (startIndex === -1) return [];

//   // Step 2: Rotate array to start from lagna
//   const orderedRasis = [
//     ...CLOCKWISE_RASI_ORDER.slice(startIndex),
//     ...CLOCKWISE_RASI_ORDER.slice(0, startIndex),
//   ];

//   // Step 3: For each rotated rasi, map house numbers and planets
//   return orderedRasis.map((rasiName, index) => {
//     const houseNumber = index + 1; // 1-12 clockwise
//     return {
//       id: rasiName,
//       houseNumber: houseNumber.toString().padStart(2, "0"),
//       planets: chartData[`place${houseNumber}`] || [], // <--- dynamic mapping now
//       style: RASI_GRID_STYLES[rasiName],
//     };
//   });
// };

// STEP 3: The simplified rendering component
const RasiChart = ({
  rasiChartData,
  navamsaChartData,
  rasiLagna,
  navamsaLagna,
}) => {
  // Hooks are at the top, as required.
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
            {/* Just map the final calculated squares. Each one is a direct grid item. */}
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

// The Square is now a direct grid item, NOT absolutely positioned.
const Square = ({ houseNumber, planets = [], style }) => {
  return (
    // The style prop places this Square in the correct grid cell.
    <div
      style={style}
      className="relative w-16 h-16 border border-lightGold rounded-md text-xs text-lightGold p-1"
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
    className="w-full h-full border border-lightGold rounded-md flex items-center justify-center text-lightGold text-sm font-bold"
  >
    {title}
  </div>
);

export default RasiChart;
