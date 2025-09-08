import { createContext, useContext, useState } from "react";

const UIStateContext = createContext();

export default function UIStateProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState(null);

  const value = {
    loading,
    apiError,
    setLoading,
    setApiError,
  };

  return (
    <UIStateContext.Provider value={value}>{children}</UIStateContext.Provider>
  );
}

export const useUIState = () => {
  const context = useContext(UIStateContext);
  if (context === undefined) {
    throw new Error("useUIState must be used within a UIStateProvider");
  }
  return context;
};
