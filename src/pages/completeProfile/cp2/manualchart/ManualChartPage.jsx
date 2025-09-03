import { useState } from "react";
import { Lightbulb } from "lucide-react";
import InteractiveRasiChart from "./InteractiveRasiChart";
import TipsOverlay from "./TipsOverlay";

const ManualChartPage = ({ title }) => {
  const [showTips, setShowTips] = useState(true);
  const [lagnas, setLagnas] = useState(Array(12).fill(null));

  const handleBoxClick = (clickedIndex) => {
    const clockwiseOrder = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
    const startIndex = clockwiseOrder.indexOf(clickedIndex);
    if (startIndex === -1) return;
    const newLagnas = Array(12).fill(null);
    for (let i = 0; i < 12; i++) {
      const targetIndexInOrder = (startIndex + i) % 12;
      const targetBoxIndex = clockwiseOrder[targetIndexInOrder];
      const numberToPlace = String(i + 1).padStart(2, "0");
      newLagnas[targetBoxIndex] = numberToPlace;
    }
    setLagnas(newLagnas);
  };

  return (
    <div className="relative w-full">
      <div className="bg-blue-400">
        {showTips && (
          <TipsOverlay title="Rasi" onHide={() => setShowTips(false)} />
        )}
      </div>
      <div className="w-full flex flex-col items-center p-6 bg-gray-50">
        <div className="w-full flex items-center my-8">
          <div className="w-8"></div>
          <div className="flex-grow text-center">
            <p className="text-gray-500">
              Identify the initial number (Lagna/லக்னம்) in your{" "}
              <span className="font-bold text-darkRed">{title} Chart</span>, and
              select the box.
            </p>
          </div>
          <div className="w-8">
            {!showTips && (
              <button
                onClick={() => setShowTips(true)}
                className="p-2 hover:bg-yellow-100 rounded-full"
                title="Show Tips"
              >
                <Lightbulb className="text-yellow-500" />
              </button>
            )}
          </div>
        </div>
        <InteractiveRasiChart
          title={title}
          lagnas={lagnas}
          onBoxClick={handleBoxClick}
        />
      </div>
    </div>
  );
};

export default ManualChartPage;
