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
const ListProfile = lazy(() => import("../pages/listProfile/ListProfile"));
const CompleteProfile = lazy(() =>
  import("../pages/completeProfile/cp1/CompleteProfile")
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <ProtectedRoute />,
    errorElement: <ErrorBoundary />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ListProfile />
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
        path: "listprofile",
        element: (
          <Suspense fallback={<LoadingScreen />}>
            <ListProfile />
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
    element: <PublicRoute />,
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
