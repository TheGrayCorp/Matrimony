import AuthForm from "../authentication/AuthForm";
import authImg from "../../assets/images/authImg.svg";

const AuthLayout = () => {
  return (
    <div className="grid grid-cols-12 min-h-screen bg-white">
      <div className="hidden md:flex col-span-12 md:col-span-6 items-center justify-center p-10">
        <img
          src={authImg}
          alt="Authentication image"
          className="w-full h-full object-cover rounded-xl"
        />
      </div>
      <div className="col-span-12 md:col-span-6 flex items-center justify-center">
        <AuthForm />
      </div>
    </div>
  );
};

export default AuthLayout;
