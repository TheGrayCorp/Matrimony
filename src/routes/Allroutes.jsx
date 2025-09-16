import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ui/errorBoundary/ErrorBoundary";
import LoadingScreen from "../components/ui/loading/LoadingScreen";
import ProtectedRoute from "./ProtectedRoute";
import PublicRoute from "./PublicRoute";

const Authentication = lazy(() =>
  import("../pages/authentication/Authentication")
);
const NotFound = lazy(() => import("../pages/error/NotFound"));
const ViewProfile = lazy(() => import("../pages/viewProfile/ViewProfile"));
const CompleteProfile = lazy(() =>
  import("../pages/completeProfile/cp1/CompleteProfile")
);
const Home = lazy(() => import("../pages/home/Home"));
const Explore = lazy(() => import("../pages/explore/Explore"));

const router = createBrowserRouter([
  {
    path: "/",
    // element: <ProtectedRoute />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "completeprofile",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <CompleteProfile />
          </Suspense>
        ),
      },
      {
        path: "home",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "explore",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Explore />
          </Suspense>
        ),
      },
      {
        path: "viewprofile/:id",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ViewProfile />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "authentication",
    // element: <PublicRoute />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <Authentication />
          </Suspense>
        ),
      },
    ],
  },
]);

export { router };
