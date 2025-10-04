const ExpectationItem = ({ label }) => {
  return (
    <div className="w-full md:w-1/2 bg-veryLightGray rounded-md px-4 py-1.5 text-sm text-mediumGray">
      {label}
    </div>
  );
};

export default ExpectationItem;
