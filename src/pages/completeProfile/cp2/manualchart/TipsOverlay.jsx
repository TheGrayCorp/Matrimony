import { ArrowRight, Sun } from "lucide-react";

const SampleChart = ({ title, hasSelection }) => (
  <div className="grid grid-cols-[repeat(4,3rem)] grid-rows-[repeat(4,3rem)] gap-1 text-xs">
    <div
      className={`w-12 h-12 flex items-center justify-center rounded-md ${
        hasSelection ? "border-2 border-yellow-400" : "border border-white"
      }`}
    >
      01
    </div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="col-span-2 row-span-2 flex items-center justify-center text-sm">
      {title} Chart
    </div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
    <div className="w-12 h-12 border border-white rounded-md"></div>
  </div>
);

const TipsOverlay = ({ title, onHide }) => {
  return (
    <div className="absolute -top-80 left-0 w-full bg-purple text-white p-6 z-20">
      <div className="flex justify-between items-center mt-4">
        <div className="flex items-center gap-2">
          <Sun className="text-yellow-400" />
          <h2 className="font-bold text-lg">Sample {title} Chart</h2>
        </div>
        <button
          onClick={onHide}
          className="font-semibold hover:text-yellow-300"
          title="Hide Tips"
        >
          Skip
        </button>
      </div>

      <div className="flex-grow flex flex-col md:flex-row items-center justify-around text-center gap-4">
        <div>
          TipsSection
          <p>
            If your initial number Lagna starts <br /> here in your {title}{" "}
            chart.
          </p>
          <SampleChart title="Rasi" hasSelection={true} />
        </div>
        <ArrowRight size={32} className="hidden md:block" />
        <div>
          <p>Then click here</p>
          <SampleChart title="Rasi" hasSelection={true} />
        </div>
        <ArrowRight size={32} className="hidden md:block" />
        <div>
          <p>
            After selecting the 'Correct Lagna' box, <br /> the numbered chart
            will be displayed.
          </p>
          <SampleChart title="Rasi" hasSelection={false} />
        </div>
      </div>
    </div>
  );
};

export default TipsOverlay;
