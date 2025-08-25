import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/ui/InputField";
import FooterText from "../../components/ui/footerText/FooterText";
import AuthToggle from "../../components/ui/AuthToggle";
import Button from "../../components/ui/Button";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    if (isLogin) {
      const loginData = {
        username: data.username,
        password: data.password,
      };
      console.log("Login data is:", loginData);
    } else {
      console.log("Signup data is:", data);
    }
    reset();
  };

  return (
    <div className="w-full max-w-md p-6">
      <div className="flex justify-center pb-8">
        <p className="text-black2">Welcome</p>
      </div>
      <div className="flex justify-center mb-6 space-x-6">
        <AuthToggle isLogin={isLogin} setIsLogin={setIsLogin} />
      </div>
      <div className="flex py-8">
        <FooterText align="justify" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-10">
        {!isLogin && (
          <InputField
            label="Email Address"
            id="email"
            type="email"
            placeholder="Enter your email address"
            register={register("email", {
              required: isLogin ? false : "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i,
                message: "Please enter a valid email address",
              },
            })}
            error={errors.email}
          />
        )}
        <InputField
          label="User Name"
          id="username"
          type="text"
          placeholder="Enter your user name"
          register={register("username", {
            required: "Username is required",
          })}
          error={errors.username}
        />
        <div>
          <InputField
            label="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
            register={register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            error={errors.password}
          />
          {isLogin && (
            <div className="flex justify-between items-center text-sm text-gray-600">
              <label className="flex items-center text-black2">
                <input type="checkbox" className="mr-2" /> Remember Me
              </label>
              <a href="#" className="text-black2">
                Forget Password ?
              </a>
            </div>
          )}
        </div>
        <Button
          label={isLogin ? "Login" : "Register"}
          size="auth"
          color="darkRed"
          type="submit"
          className="w-full rounded-full"
        />
      </form>
    </div>
  );
};

export default AuthForm;
