import { Suspense } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import ErrorBoundary from "./components/ui/errorBoundary/ErrorBoundary";
import LoadingScreen from "./components/ui/loading/LoadingScreen";
import { router } from "./routes/Allroutes";

function App() {
  return (
     <ErrorBoundary>
      <Suspense fallback={<LoadingScreen />}>
        <RouterProvider router={router} />
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
