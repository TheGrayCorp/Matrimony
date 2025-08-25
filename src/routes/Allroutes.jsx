import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
// import Layout from "../components/common/layout/layout";
import ErrorBoundary from "../components/ui/errorBoundary/ErrorBoundary";
import LoadingScreen from "../components/ui/loading/LoadingScreen";
import NotFound from "../pages/error/NotFound";

const ViewProfile = lazy(() => import("../pages/viewProfile/ViewProfile"));
const ListProfile = lazy(() => import("../pages/listProfile/ListProfile"));

const router = createBrowserRouter([
  //   {
  //     path: "login",
  //     element: <Login />,
  //   },
  //   {
  //     path: "forgot-password",
  //     element: <ForgotPassword />,
  //   },
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
