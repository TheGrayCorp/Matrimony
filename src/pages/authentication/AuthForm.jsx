import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/ui/Input/InputField";
import FooterText from "../../components/ui/footerText/FooterText";
import AuthToggle from "../../components/ui/AuthToggle";
import Button from "../../components/ui/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(null);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const passwordValue = watch("password");

  const onSubmit = async (data) => {
    setLoading(true);
    setAuthError(null);

    if (isLogin) {
      try {
        const userCredential = await signInWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        const user = userCredential.user;
        console.log("User logged in:", user);
        const idToken = await user.getIdToken();
        localStorage.setItem("idToken", idToken);
        navigate("/completeprofile");
      } catch (error) {
        console.error("Caught Firebase Error:", error);
        if (error.code === "auth/invalid-credential") {
          setAuthError("Invalid login credentials");
        } else {
          setAuthError("Something went wrong. Please try again");
        }
      } finally {
        setLoading(false);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("User created:", userCredential.user);

        await sendEmailVerification(userCredential.user);
        alert("Verification email sent! Please check your inbox");
        reset();
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setAuthError("This email address is already in use.");
        } else {
          setAuthError(error.message);
        }
        console.error("Signup error:", error);
      } finally {
        setLoading(false);
      }
    }
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
        {!isLogin && (
          <InputField
            label="Re-enter Password"
            id="confirmPassword"
            type="password"
            placeholder="Enter your password again"
            register={register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === passwordValue || "Passwords do not match",
            })}
            error={errors.confirmPassword}
          />
        )}
        <div className="flex justify-end">
          <Button
            label={isLogin ? "Login" : "Register"}
            size="auth"
            color="darkRed"
            type="submit"
          />
        </div>
        {loading && <p className="text-blue-500">Loading...</p>}
        {authError && <p className="text-red-500">{authError}</p>}
      </form>
    </div>
  );
};

export default AuthForm;
