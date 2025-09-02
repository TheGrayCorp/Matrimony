import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export const handleLogout = (navigate) => {
  signOut(auth)
    .then(() => {
      console.log("User logged out successfully.");
      localStorage.removeItem("idToken");
      navigate("/authentication");
    })
    .catch((error) => {
      console.error("Logout Error:", error);
    });
};
