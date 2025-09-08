const Spinner = () => {
  return (
    <div className="flex justify-center items-center p-4" aria-label="Loading">
      <div
        className="w-10 h-10 border-4 border-gray-200 border-t-purple rounded-full animate-spin"
        role="status"
      ></div>
    </div>
  );
};

export default Spinner;
