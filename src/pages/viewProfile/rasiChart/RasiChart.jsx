const RasiChart = () => {
  return (
    // <div className="flex gap-12">
    <div className="flex flex-col sm:flex-row gap-12">
      {/* Repeat this block for two charts side by side */}
      {[1, 2].map((chart, i) => (
        <div
          key={i}
          className="grid grid-cols-[repeat(4,4rem)] grid-rows-[repeat(4,4rem)] gap-2"
        >
          {/* Top row */}
          <Square num="01" />
          <Square num="02" />
          <Square num="03" />
          <Square num="04" />

          {/* Second row */}
          <Square num="12" />
          <BigSquare />
          <Square num="05" />

          {/* Third row */}
          <Square num="11" />
          <Square num="06" />

          {/* Bottom row */}
          <Square num="10" />
          <Square num="09" />
          <Square num="08" />
          <Square num="07" />
        </div>
      ))}
    </div>
  );
};

const Square = ({ num }) => (
  <div className="relative w-16 h-16 border border-lightGold rounded-md flex items-start justify-start text-xs text-lightGold">
    <span className="absolute top-1 right-1">{num}</span>
    <span className="absolute bottom-1 left-1">Ma</span>
    <span className="absolute bottom-1 left-5 text-[10px]">Guru</span>
  </div>
);

const BigSquare = () => (
  <div className="col-span-2 row-span-2 w-[calc(100% + 0.5rem)] h-[calc(100% + 0.5rem)] border border-lightGold rounded-md flex items-center justify-center text-lightGold text-sm">
    Rasi Chart
  </div>
);

export default RasiChart;
