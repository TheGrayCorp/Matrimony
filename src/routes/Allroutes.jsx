import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import ErrorBoundary from "../components/ui/errorBoundary/ErrorBoundary";
import LoadingScreen from "../components/ui/loading/LoadingScreen";
import NotFound from "../pages/error/NotFound";
import Authentication from "../pages/authentication/Authentication";

const ViewProfile = lazy(() => import("../pages/viewProfile/ViewProfile"));
const ListProfile = lazy(() => import("../pages/listProfile/ListProfile"));
const CompleteProfile = lazy(() =>
  import("../pages/completeProfile/cp1/CompleteProfile")
);

const router = createBrowserRouter([
  {
    path: "authentication",
    element: <Authentication />,
  },
  {
    path: "/",
    // element: <Layout />,
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
        element: <ViewProfile />,
      },
      {
        path: "listprofile",
        element: <ListProfile />,
      },
      {
        path: "completeprofile",
        element: <CompleteProfile />,
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
]);

export { router };
