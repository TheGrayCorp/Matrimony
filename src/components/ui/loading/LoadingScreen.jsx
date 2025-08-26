const LoadingScreen = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="w-16 h-16 border-4 border-darkRed border-dashed rounded-full animate-spin"></div>
      <p className="mt-4 text-lg font-medium text-darkRed">
        Loading, please wait...
      </p>
    </div>
  );
};

export default LoadingScreen;
