import { useState } from "react";
import { Lightbulb } from "lucide-react";
import InteractiveRasiChart from "./InteractiveRasiChart";
import PlanetSelector from "./PlanetSelector";
import TipsOverlay from "./TipsOverlay";
import Button from "../../../../components/ui/Button";
import { PLANETS } from "../../../../rasiStarData/RasiStarData";

const ManualChartEditor = ({ title, onConfirm, onEdit }) => {
  const [showTips, setShowTips] = useState(true);
  const [lagnas, setLagnas] = useState(Array(12).fill(null));
  const [selectedBoxIndex, setSelectedBoxIndex] = useState(null);

  const [placements, setPlacements] = useState({});

  const handleBoxClick = (clickedIndex) => {
    const isNumbered = lagnas[0] !== null;

    if (!isNumbered) {
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
    } else {
      if (placements[clickedIndex] && placements[clickedIndex].length > 0) {
        const newPlacements = { ...placements };
        delete newPlacements[clickedIndex];
        setPlacements(newPlacements);
        setSelectedBoxIndex(null);
        return;
      }

      if (selectedBoxIndex === clickedIndex) {
        setSelectedBoxIndex(null);
      } else {
        setSelectedBoxIndex(clickedIndex);
      }
    }
  };

  const handlePlanetSelect = (planet) => {
    if (selectedBoxIndex === null) {
      alert("Please select a box in the Rasi Chart first.");
      return;
    }

    const newPlacements = { ...placements };

    for (const boxIndex in newPlacements) {
      const filteredPlanets = newPlacements[boxIndex].filter(
        (p) => p.id !== planet.id
      );
      if (filteredPlanets.length > 0) {
        newPlacements[boxIndex] = filteredPlanets;
      } else {
        delete newPlacements[boxIndex];
      }
    }

    const existingPlanetsInBox = newPlacements[selectedBoxIndex] || [];
    newPlacements[selectedBoxIndex] = [...existingPlanetsInBox, planet];

    setPlacements(newPlacements);
  };

  const isNumbered = lagnas[0] !== null;

  return (
    <div className="relative w-full">
      {showTips && <TipsOverlay onHide={() => setShowTips(false)} />}
      <div className="w-full flex flex-col items-center p-6 bg-gray-50">
        <div className="w-full flex items-center my-8">
          <div className="w-10"></div>
          <div className="flex-grow text-center">
            <p className="text-gray-500">
              {isNumbered
                ? `select the correct number boxes and fill in the corresponding planets (கிரகம்).`
                : `Identify the initial number (Lagna/லக்னம்) in your ${title} Chart, and select the box.`}
            </p>
          </div>
          <div className="w-10 flex justify-end">
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
        <div className="flex flex-col md:flex-row items-center justify-center gap-16">
          <InteractiveRasiChart
            title={title}
            lagnas={lagnas}
            placements={placements}
            selectedBoxIndex={selectedBoxIndex}
            onBoxClick={handleBoxClick}
          />
          {isNumbered && (
            <PlanetSelector
              planets={PLANETS}
              placements={placements}
              lagnas={lagnas}
              onPlanetSelect={handlePlanetSelect}
            />
          )}
        </div>
        {isNumbered && (
          <div className="flex items-center gap-4 mt-10">
            <Button
              label="Edit"
              size="auth"
              color="purpleBorder"
              onClick={onEdit}
              className="bg-gray-100"
            />
            <Button
              label="Confirm"
              size="auth"
              color="purple"
              onClick={() => onConfirm({ lagnas, placements })}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ManualChartEditor;
