const AuthToggle = ({ isLogin, setIsLogin }) => {
  return (
    <div className="flex w-full max-w-xs mx-auto bg-gray-200 rounded-full p-1.5">
      <button
        onClick={() => setIsLogin(true)}
        className={`w-1/2 py-2 rounded-full transition-colors duration-300 ease-in-out
          ${isLogin ? "bg-purple text-white" : "text-purple"}`}
      >
        Login
      </button>
      <button
        onClick={() => setIsLogin(false)}
        className={`w-1/2 py-2 rounded-full transition-colors duration-300 ease-in-out
          ${!isLogin ? "bg-purple text-white" : "text-purple"}`}
      >
        Register
      </button>
    </div>
  );
};

export default AuthToggle;
