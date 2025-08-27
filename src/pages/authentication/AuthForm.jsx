import { useState } from "react";
import { useForm } from "react-hook-form";
import InputField from "../../components/ui/InputField";
import FooterText from "../../components/ui/footerText/FooterText";
import AuthToggle from "../../components/ui/AuthToggle";
import Button from "../../components/ui/Button";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendEmailVerification,
  updateProfile,
} from "firebase/auth";
import { auth } from "../../firebase/firebaseConfig";

const AuthForm = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loading, setLoading] = useState(false);
  const [authError, setAuthError] = useState(null);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
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
        console.log("User logged in:", userCredential.user);
        alert("User logged in successfully");
        setLoading(false);
      } catch (error) {
        setAuthError(error.message);
        setLoading(false);
        console.error("Login error:", error);
      }
    } else {
      try {
        const userCredential = await createUserWithEmailAndPassword(
          auth,
          data.email,
          data.password
        );
        console.log("User created:", userCredential.user);

        await updateProfile(userCredential.user, {
          displayName: `${data.firstName} ${data.lastName}`,
        });

        await sendEmailVerification(userCredential.user);
        alert("Verification email sent! Please check your inbox");
        setLoading(false);
      } catch (error) {
        if (error.code === "auth/email-already-in-use") {
          setAuthError("This email address is already in use.");
        } else {
          setAuthError(error.message);
          setLoading(false);
        }
        console.error("Signup error:", error);
      }
    }
    setLoading(false);
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
            label="First Name"
            id="firstName"
            type="text"
            placeholder="Enter first name"
            register={register("firstName", {
              required: "First name is required",
            })}
            error={errors.firstName}
          />
        )}
        {!isLogin && (
          <InputField
            label="Last Name"
            id="lastName"
            type="text"
            placeholder="Enter last name"
            register={register("lastName", {
              required: "Last name is required",
            })}
            error={errors.lastName}
          />
        )}
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
